$(document).ready(function () {
  document.querySelectorAll("[data-publication-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const entry = toggle.closest(".publication-entry");
      const target = document.getElementById(
        toggle.getAttribute("aria-controls"),
      );

      if (!entry || !target) {
        console.error(
          "Publication disclosure is missing its entry or controlled region.",
        );
        return;
      }

      const shouldOpen = toggle.getAttribute("aria-expanded") !== "true";

      entry
        .querySelectorAll("[data-publication-toggle]")
        .forEach((entryToggle) => {
          entryToggle.setAttribute("aria-expanded", "false");
        });
      entry.querySelectorAll(".publication-details").forEach((panel) => {
        panel.classList.remove("open");
        panel.hidden = true;
      });

      if (shouldOpen) {
        toggle.setAttribute("aria-expanded", "true");
        target.hidden = false;
        target.classList.add("open");
      }
    });
  });
  $("a").removeClass("waves-effect waves-light");

  document.querySelectorAll("pre").forEach((codeBlock) => {
    codeBlock.setAttribute("tabindex", "0");
  });

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
