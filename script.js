function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function hideText() {
    var x = document.getElementById("myDIV");
    x.style.display = x.style.display === 'block' ? 'none' : 'block';
}
