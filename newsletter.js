const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbx4-RGoepx8ApyHVYFU0qlzUaDvBb4MeTer3e9wk-SXhG0t10_OQscpa2GYZ2XBiNtb/exec", {
                        method: "POST",
                        body: new URLSearchParams(data)
                });
                console.log("s1 success");
                const responseText = await response.text();
                console.log("s2 success");
                alert(responseText);
                console.log("s3 success");
                form.reset();
                console.log("s4 success");
        }
        catch (error) {
                alert(error);
        }
});