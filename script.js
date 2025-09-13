
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
    fetch("./users.json")
        .then(res => res.json())
        .then(data => {
            let host = window.location.host.replace(/^www\./, ""); // normalize www.
            let user = data[host];

            if (!user) {
                console.log("No user found, showing base template.");
                return; // keep base template
            }

            for (let id in user) {
                let el = document.getElementById(id);
                if (!el) continue;

                if (id === "hero-user-image") {
                    el.style.backgroundImage = `url(${user[id]})`;
                    el.style.backgroundSize = "cover";
                    el.style.backgroundPosition = "center";
                } else if (el.tagName === "IMG") {
                    el.src = user[id];
                } else if (el.tagName === "I") {
                    el.className = user[id];
                } else {
                    if (user[id].includes("<span>")) {
                        el.innerHTML = user[id];
                    } else {
                        el.textContent = user[id];
                    }
                }
            }
        })
        .catch(err => console.error("Error loading JSON:", err));
});
