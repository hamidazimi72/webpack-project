import "./css/style.scss";
import image from "./images/img.jpg";

class CreateImage {
  render() {
    const img = document.createElement("img");
    img.classList.add("image");
    img.alt = "image";
    img.src = image;
    return img;
  }

  renderText() {
    const text = document.createElement("p");
    text.innerText = "سلام اخوی";

    return text;
  }
}

export default new CreateImage();
