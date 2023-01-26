const dmode = document.querySelector("#dmode");
const body = document.querySelector("body");
const toastTrigger = document.querySelectorAll(".liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

//Dark mode

load();

dmode.addEventListener("click", (e) => {
    body.classList.toggle("darkmode");
    store(body.classList.contains("darkmode"));
});

function load() {
    const darkmode = localStorage.getItem("darkmode");
    if (!darkmode) {
        store("false");
    }else if (darkmode == "true") {
        body.classList.add("darkmode");
    }
}

function store(value) {
    localStorage.setItem("darkmode", value);
}

//Toasts

toastTrigger.forEach((e) => {
    if (e) {
        e.addEventListener("click", () => {
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
        });
    }
});
