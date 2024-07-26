document.ready(function () {
    document.getElementById("create-modal").addEventListener('hidden', (e) => {
        e.preventDefault();
        e.target.reset();
    });
});