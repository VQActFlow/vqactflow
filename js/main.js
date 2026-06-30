document.addEventListener("DOMContentLoaded", function () {
  // ---------- Copy BibTeX ----------
  var copyBtn = document.querySelector(".copy-btn");
  var bibtex = document.querySelector("pre.bibtex");
  if (copyBtn && bibtex) {
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(bibtex.innerText.trim()).then(function () {
        var original = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(function () {
          copyBtn.textContent = original;
        }, 1800);
      });
    });
  }

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function tryPlay(video) {
    if (reduceMotion) return;
    var p = video.play();
    if (p && typeof p.catch === "function") p.catch(function () {});
  }

  // ---------- Demo galleries (WTUMI-style task selector) ----------
  document.querySelectorAll(".demo-gallery").forEach(function (gallery) {
    var video = gallery.querySelector(".demo-video");
    var caption = gallery.querySelector(".demo-caption");
    var chip = gallery.querySelector(".demo-chip");
    var tabs = Array.prototype.slice.call(gallery.querySelectorAll(".demo-tab"));
    if (!video || tabs.length === 0) return;

    function current() {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains("active")) return i;
      }
      return 0;
    }

    function select(index) {
      index = (index + tabs.length) % tabs.length;
      var tab = tabs[index];
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      if (tab.dataset.poster) video.poster = tab.dataset.poster;
      video.src = tab.dataset.src;
      if (caption && tab.dataset.caption) caption.textContent = tab.dataset.caption;
      if (chip && tab.dataset.outcome) {
        var fail = tab.dataset.outcome === "failure";
        chip.classList.toggle("success", !fail);
        chip.classList.toggle("failure", fail);
        chip.textContent = fail ? "Failure" : "Success";
      }
      video.load();
      video.addEventListener("canplay", function () { tryPlay(video); }, { once: true });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        select(i);
      });
    });
    var prev = gallery.querySelector(".demo-nav.prev");
    var next = gallery.querySelector(".demo-nav.next");
    if (prev) prev.addEventListener("click", function () { select(current() - 1); });
    if (next) next.addEventListener("click", function () { select(current() + 1); });
  });

  // ---------- Playback: reduced-motion fallback + offscreen pause ----------
  document.querySelectorAll(".demo-video, .hero-bg").forEach(function (video) {
    var stage = video.parentNode;
    var playBtn = stage ? stage.querySelector(".demo-play") : null;

    if (reduceMotion) {
      video.removeAttribute("autoplay");
      video.autoplay = false;
      try { video.pause(); } catch (e) {}
      if (playBtn) {
        playBtn.hidden = false;
        playBtn.addEventListener("click", function () {
          var p = video.play();
          if (p && typeof p.catch === "function") p.catch(function () {});
        });
        video.addEventListener("play", function () { playBtn.hidden = true; });
        video.addEventListener("pause", function () { playBtn.hidden = false; });
      }
      return;
    }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) tryPlay(video);
            else video.pause();
          });
        },
        { threshold: 0 }
      );
      io.observe(video);
    }
  });
});
