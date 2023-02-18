const btn = document.getElementById("navbar_btn");

let a = 0;

function openMenu() {
    if (a == 1) {
        document.querySelector(".responsive_style-menu").style.display = "block";
        return (a = 0);
    } else {
        document.querySelector(".responsive_style-menu").style.display = "none";
        return (a = 1);
    }
}

function closeMenu() {
    document.querySelector(".responsive_style-menu").style.display = "none";
}

var theme = 'light';

function changeTheme() {
    if (theme === 'light') {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        theme = 'dark'
    } else if (theme === 'dark') {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        theme = 'light'
    }
}

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}

btn.addEventListener("click", openMenu);
