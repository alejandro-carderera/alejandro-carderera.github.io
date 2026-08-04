#!/usr/bin/env ruby

require "digest"
require "fileutils"

site_directory = ARGV.fetch(0, "_site")
source_path = File.join(site_directory, "assets", "css", "main.css")

abort "Missing compiled stylesheet: #{source_path}" unless File.file?(source_path)

fingerprint = Digest::SHA256.file(source_path).hexdigest[0, 12]
fingerprinted_name = "main.#{fingerprint}.css"
fingerprinted_path = File.join(File.dirname(source_path), fingerprinted_name)
source_reference = "/assets/css/main.css"
fingerprinted_reference = "/assets/css/#{fingerprinted_name}"
replacement_count = 0

Dir.glob(File.join(site_directory, "**", "*.html")).each do |html_path|
  html = File.binread(html_path)
  matches = html.scan(source_reference).length
  next if matches.zero?

  File.binwrite(html_path, html.gsub(source_reference, fingerprinted_reference))
  replacement_count += matches
end

abort "No HTML references found for #{source_reference}" if replacement_count.zero?

FileUtils.mv(source_path, fingerprinted_path)
puts "Fingerprint: #{fingerprinted_reference} (#{replacement_count} references)"
