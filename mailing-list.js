const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        try {
                const response = await fetch(atob("aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4NC1SR29lcHg4QXB5SFZZRlUwcWx6VWFEdkJiNE1lVGVyM2U5d2stU1hoRzB0MTBfT1FzY3BhMkdZWjJYQmlOdGIvZXhlYw=="), {
                        method: "POST",
                        body: new URLSearchParams(data)
                });
                const responseText = await response.text();
                alert(responseText);
                form.reset();
        }
        catch (error) {
                alert(error);
        }
});