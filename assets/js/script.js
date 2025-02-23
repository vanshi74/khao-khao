document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("reservation-message").innerText = "Reservation Confirmed! We look forward to serving you.";
            form.reset();
        });
    }
});
