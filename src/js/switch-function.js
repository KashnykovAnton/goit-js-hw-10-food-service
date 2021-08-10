import { Theme} from "./themes"

export default function onSwitcherClick() {
    document.body.classList.toggle(Theme.DARK);
    if (document.body.classList.contains(Theme.DARK)) {
        localStorage.setItem('theme', Theme.DARK)
    } else {
        localStorage.setItem('theme', Theme.LIGHT)
    };
};