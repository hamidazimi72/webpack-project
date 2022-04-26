import "./css/list.scss";

class ListComponent {
  createItem(title) {
    const item = document.createElement("li");
    item.classList.add("list-item");

    item.innerText = title;

    return item;
  }

  createList() {
    const list = document.createElement("ul");
    list.classList.add("list");

    list.appendChild(this.createItem("item 1"));
    list.appendChild(this.createItem("item 2"));
    list.appendChild(this.createItem("item 3"));

    return list;
  }
}
export default new ListComponent();
