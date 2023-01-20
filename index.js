function main() {
    refs = {
        button: document.querySelector(".display__btn")
    }


    function magic(target) {
        refs.button.innerText = target === "display__btn" ? "Impress me..." : "Press me";
    }

    window.addEventListener("mouseover", (e) => magic(e.target.className))
}

main();