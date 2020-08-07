import { contentFn } from "./contentFn.js"


const navItems = {
    "home": "Home",
    "about": "About",
    "resources": "Covid-19 Resources",
    "contact": "Contact"
}

const navigate = event => {
    let clickedElem = event.target;
    updateActiveAttr(clickedElem);
    replaceContent(clickedElem);
}

const updateActiveAttr = (elem) => {
    Array.from(elem.parentElement.parentElement.children).forEach(it => {
        it.children[0].classList.remove("active");
    });
    elem.classList.add("active")

}

const replaceContent = (elem) => {
    const href = elem.href.split("#")[1];
    contentFn[href]();
}

Object.entries(navItems).map(([key, item]) => {
    let listItem = document.createElement("li");
    listItem.classList.add("nav-item");
    let a = document.createElement("a");
    a.innerHTML = item;
    a.href = `#${key}`
    a.classList.add("nav-link");
    a.onclick = navigate;

    listItem.appendChild(a);
    document.querySelector(".navbar-nav").appendChild(listItem);
})