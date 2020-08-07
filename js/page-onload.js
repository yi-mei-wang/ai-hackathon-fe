import { contentFn } from "./contentFn.js"


window.onload = event => {
    console.log(event)
    let href = window.location.href.split("#")[1]
    const content = href ? contentFn[href] : contentFn["home"];
    content()
}