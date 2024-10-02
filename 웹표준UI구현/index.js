document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".gnb");
  const areas = document.querySelectorAll(".snb_area");

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      const menuId = link.getAttribute("data-menu");
      const menu = document.getElementById(menuId);
      menu.style.display = "block";
    });

    link.addEventListener("mouseout", () => {
      const menuId = link.getAttribute("data-menu");
      const menu = document.getElementById(menuId);
      setTimeout(() => {
        if (!menu.matches(":hover")) {
          menu.style.display = "none";
        }
      }, 100);
    });
  });

  areas.forEach((area) => {
    area.addEventListener("mouseover", () => {
      area.style.display = "block";
    });

    area.addEventListener("mouseout", () => {
      area.style.display = "none";
    });
  });
});

// img 변경
function changeImage(imagePath) {
  var changeImg = document.getElementById("changeImg");
  changeImg.src = imagePath;
}
document.addEventListener("DOMContentLoaded", function () {
  var paperImg = document.getElementById("paperImg");
  var cm2Img = document.getElementById("cm2Img");
  var cm1Img = document.getElementById("cm1Img");
  var wonderImg = document.getElementById("wonderImg");
  var blueImg = document.getElementById("blueImg");

  paperImg.addEventListener("mouseover", function () {
    changeImage("images/paperImg.png");
  });

  cm2Img.addEventListener("mouseover", function () {
    changeImage("images/cm2Img.png");
  });

  cm1Img.addEventListener("mouseover", function () {
    changeImage("images/cm1Img.png");
  });

  wonderImg.addEventListener("mouseover", function () {
    changeImage("images/wonderImg.png");
  });

  blueImg.addEventListener("mouseover", function () {
    changeImage("images/blueImg.png");
  });
});

function changeImage(imageSrc) {
  document.getElementById("changeImg").src = imageSrc;
}
