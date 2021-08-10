import menuData from "./menu.json";
import menuTemplate from "./template.hbs";
import refs from "./js/refs";
import { Theme } from "./js/themes";
import onSwitcherClick from "./js/switch-function";


const markupMenu = menuTemplate(menuData);
refs.menuRef.insertAdjacentHTML("beforeend", markupMenu)


if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', Theme.LIGHT)
};

if (localStorage.getItem('theme') === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    refs.switcherTheme.checked = 'true';
};

refs.switcherTheme.addEventListener('change', onSwitcherClick);

