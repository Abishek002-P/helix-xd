export function setLocalTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }
  
  export function checkTheme() {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "theme-dark") {
        setLocalTheme("theme-dark");
      } else if (localStorage.getItem("theme") === "theme-light") {
        setLocalTheme("theme-light");
      }
    } else {
      setLocalTheme("theme-light");
    }
  }
  