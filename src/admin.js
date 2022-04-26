import CreateImage from "./home";
import ListComponent from "./List";

const app = document.getElementById("app");
// app.appendChild(CreateImage.render());
app.appendChild(CreateImage.renderText());
app.appendChild(ListComponent.createList());
