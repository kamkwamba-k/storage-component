document.addEventListener("DOMContentLoaded", () => {

    const percentageUsed = 75;
    const progressBar = document.getElementById('progress-bar');
    const progressCircle = document.getElementById('progress-circle');

    function setProgress(percentage) {
        if (percentage >= 0 && percentage <= 100) {
            progressBar.style.width = percentage + '%';
           
            progressCircle.style.transform = `translateX(${percentage}%)`;
        }
    }

    setProgress(percentageUsed);
});
