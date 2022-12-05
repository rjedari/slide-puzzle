let row = 3;
let column = 3;
var currTile;
var otherTile; //blank tile
let blank = document.getElementById;
let imageList = ["2", "5", "7", "3", "4", "8", "9", "1", "6"];
function myFunction() {
  for (i = 0; i < 3; i++) {
    for (s = 0; s < 3; s++) {
      let images = document.createElement("img");
      images.id = i.toString() + "-" + s.toString();
      images.src = imageList.shift() + ".jpg";
      images.addEventListener("dragstart", (e) => {
        currTile = e.target;
      });
      images.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      images.addEventListener("dragenter", (e) => {});
      images.addEventListener("dragleave", (e) => {});
      images.addEventListener("drop", (e) => {
        otherTile = e.target;

        if (!otherTile.src.includes("3.jpg")) {
          return;
        }
        let curCord = currTile.id.split("-");
        let r = parseInt(curCord[0]);
        let c = parseInt(curCord[1]);
        let otherCord = otherTile.id.split("-");
        let r2 = parseInt(otherCord[0]);
        let c2 = parseInt(otherCord[1]);
        let moveLeft = r == r2 && c2 == c - 1;
        let moveRight = r == r2 && c2 == c + 1;
        let moveDown = c == c2 && r2 == r + 1;
        let moveUp = c == c2 && r2 == r - 1;

        let rule = moveDown || moveLeft || moveRight || moveUp;
        if (rule === true) {
          let currImg = currTile.src;
          let otherImg = otherTile.src;
          currTile.src = otherImg;
          otherTile.src = currImg;
        }
      }); //drag an image over another image, drop the image
      images.addEventListener("dragend", () => {});
      document.getElementById("slide-puzzle").append(images);
    }
  }
}

myFunction();
