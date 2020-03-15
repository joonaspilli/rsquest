document.addEventListener("DOMContentLoaded", () => {
  const scroll = document.querySelector(".js-scroll");
  const output = document.querySelector(".js-output");

  const print = () => {
    domtoimage.toPng(scroll).then(img => {
      output.src = img;
    });
  };

  print();
  scroll.addEventListener("keyup", print);
});
