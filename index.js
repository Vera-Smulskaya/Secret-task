function main() {
    refs = {
        button: document.querySelector(".display__btn"),
        song: document.querySelector(".song")
    }

    const goGoGoParty = () => {
        console.log("click")
        refs.song.play();
        refs.song.classList.add("party-started");
    }


    function magic(target) {
        refs.button.innerText = target === "display__btn" ? "Impress me..." : "Press me";
    }

    window.addEventListener("mouseover", (e) => magic(e.target.className))
    refs.button.addEventListener("click", goGoGoParty)
}

main();