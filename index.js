document.addEventListener("DOMContentLoaded", () => {
  const scroll = document.querySelector(".js-scroll");
  const printButton = document.querySelector(".js-print");
  const output = document.querySelector(".js-output");

  printButton.addEventListener("click", () => {
    domtoimage.toPng(scroll).then(img => {
      output.src = img;
    });
  });
});
