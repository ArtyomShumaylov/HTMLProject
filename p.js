document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('https://example.com/submit', {  // Укажите URL сервиса
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(() => {
            responseDiv.textContent = 'Заявка успешно отправлена!';
            responseDiv.style.color = 'green';
            form.reset();
        })
        .catch(() => {
            responseDiv.textContent = 'Произошла ошибка. Попробуйте ещё раз.';
            responseDiv.style.color = 'red';
        });
    });
});
