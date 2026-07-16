const button = document.querySelector(".btn");

button.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Welcome! Aapki website kaam kar rahi hai.");
});
fetch('fetch_properties.php')
    .then(response => response.json())
    .then(properties => {
        console.log(properties);
    })
    .catch(error => {
        console.error('Error:', error);
    });
