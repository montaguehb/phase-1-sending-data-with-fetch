// Add your code here
function submitData(username, userEmail) {
    const body = document.querySelector("body");
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: username,
            email: userEmail,
        })
    })
    .then(resp => resp.json())
    .then(obj => {
        body.innerHTML = `<p>${obj.id}<p>`
    })
    .catch(error =>  {
        body.innerHTML = `<p>${error.message}<p>`
    });
};