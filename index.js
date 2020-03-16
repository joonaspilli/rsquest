window.addEventListener("load", () => {
  const scroll = document.querySelector(".js-scroll");
  const output = document.querySelector(".js-output");
  const questIcon = document.querySelector(".js-quest-icon");
  const addImgInput = document.querySelector(".js-add-img");
  const removeImgButton = document.querySelector(".js-remove-img");

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const print = () => {
    domtoimage
      .toPng(scroll)
      .then(img => {
        output.src = img;
      })
      .catch(console.error);
  };

  print();
  scroll.addEventListener("keyup", print);

  addImgInput.addEventListener("change", function() {
    const files = this.files;
    if (files && files[0]) {
      toBase64(files[0]).then(img => {
        questIcon.src = img;
        questIcon.classList.add("scroll__quest-icon--visible");
        print();
      });
    }
  });

  removeImgButton.addEventListener("click", () => {
    questIcon.src = "./scroll.png";
    questIcon.classList.remove("scroll__quest-icon--visible");
    print();
  });
});
