document.addEventListener("DOMContentLoaded", function () {
  var copyBtn = document.querySelector(".copy-btn");
  var bibtex = document.querySelector("pre.bibtex");
  if (!copyBtn || !bibtex) return;

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(bibtex.innerText.trim()).then(function () {
      var original = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(function () {
        copyBtn.textContent = original;
      }, 1800);
    });
  });
});
