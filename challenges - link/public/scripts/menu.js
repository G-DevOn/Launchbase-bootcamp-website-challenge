const menu = document.querySelectorAll(".links a")
const path = window.location.pathname



window.onload = () => {
    for(link of menu){
        const linkPath = link.getAttribute("href")
        if (path == linkPath){
            link.classList.add("selected")
        }
    }
}
