#!/usr/bin/env bash
set -euo pipefail

config_file="_config.yml"
jekyll_pid=""

start_jekyll() {
  bundle exec jekyll serve \
    --watch \
    --port=8080 \
    --host=0.0.0.0 \
    --livereload \
    --force_polling &
  jekyll_pid=$!
}

stop_jekyll() {
  if [[ -n "$jekyll_pid" ]] && kill -0 "$jekyll_pid" 2>/dev/null; then
    kill "$jekyll_pid"
    wait "$jekyll_pid" || true
  fi
}

trap stop_jekyll EXIT INT TERM

start_jekyll

while inotifywait -q -e modify,move,create,delete "$config_file"; do
  stop_jekyll
  start_jekyll
done
