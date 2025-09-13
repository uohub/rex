
var acc = document.getElementsByClassName("according");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("/files/users.json")
        .then(res => res.json())
        .then(data => {
            let user = data[window.location.host];
            if (!user) return;

            for (let id in user) {
                let el = document.getElementById(id);
                if (!el) continue;

                // Hero box background
                if (id === "hero-user-image") {
                    el.style.backgroundImage = `url(${user[id]})`;
                    el.style.backgroundSize = "cover";
                    el.style.backgroundPosition = "center";
                }

                // Normal <img> tags
                else if (el.tagName === "IMG") {
                    el.src = user[id];
                }

                // Icons <i>
                else if (el.tagName === "I") {
                    el.className = user[id]; // replace classes with json value
                }

                // Text/HTML content
                else {
                    if (user[id].includes("<span>")) {
                        el.innerHTML = user[id]; // allow inline HTML
                    } else {
                        el.textContent = user[id]; // plain text
                    }
                }
            }
        })
        .catch(err => console.error("Error loading JSON:", err));
});
