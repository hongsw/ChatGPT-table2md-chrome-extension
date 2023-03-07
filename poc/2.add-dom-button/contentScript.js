const btnShowList = document.createElement("button");
btnShowList.setAttribute("id", "btn-show-list");
btnShowList.innerText = "Show Button";

const listContainer = document.createElement("ul");
listContainer.setAttribute("id", "list_container");
document.body.appendChild(btnShowList);
document.body.appendChild(listContainer);

const items = ["Download PDF", "Download PNG", "Export md", "Share Link"];

const list = document.createElement("ul");

for (let i = 0; i < items.length; i++) {
  const item = document.createElement("li");
  const item_button = document.createElement("button");
  item_button.innerText = items[i];
  item.appendChild(item_button);
  list.appendChild(item);
}

listContainer.appendChild(list);

btnShowList.addEventListener("click", () => {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});

const listItems = document.querySelectorAll("#list_container li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    switch (item.innerText) {
      case "Download PDF":
        console.log("PDF");
        break;
      case "Download PNG":
        console.log("PNG");
        break;
      case "Export md":
        console.log("Export md");
        break;
      case "Share Link":
        console.log("Share Link");
        break;
    }
  });
});
