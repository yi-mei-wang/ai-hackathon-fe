const navItems = ["Home", "About", "Covid-19 Resources", "Contact"]

const navigate = event => {
    let clickedElem = event.target;
    updateActiveAttr(clickedElem);
    replaceContent()
}

const updateActiveAttr = (elem) => {
    Array.from(elem.parentElement.parentElement.children).forEach(it => {
        it.children[0].classList.remove("active");
    });
    elem.classList.add("active")

}

const replaceContent = () => {
    document.querySelector("#content-wrapper").innerHTML = "yo";
}

navItems.map(item => {
    let listItem = document.createElement("li");
    listItem.classList.add("nav-item");
    let a = document.createElement("a");
    a.innerHTML = item;
    a.href = `#${item.toLowerCase().replace(" ", "-")}`
    a.classList.add("nav-link");
    a.onclick = navigate;

    listItem.appendChild(a);
    document.querySelector(".navbar-nav").appendChild(listItem);
})