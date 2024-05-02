const progressList = document.querySelectorAll(".progress-bar .progress li");
const progressFillBar = document.querySelector(".progress-bar .bar .fill");
let current = 1,
    min = 1,
    max = 5;
let asc = true;

progressList.forEach((pgs) => {
    pgs.addEventListener("click", () => {
        if (asc) {
            progressList[current].classList.add("active");
            current++;
        } else {
            progressList[current - 1].classList.remove("active");
            current--;
        }

        if (current === max) asc = false;
        else if (current === min) asc = true;

        updateProgress();
    });
});

function updateProgress() {
    const percent = ((current - 1) / (progressList.length - 1)) * 100;
    console.log(percent);
    progressFillBar.style.width = `${percent}%`;
}
