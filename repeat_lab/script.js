// script.js

// Fetch a random cat image and update all cat image elements
function fetchRandomCatImages() {
    const catImageElements = document.querySelectorAll(".cat-image");

    catImageElements.forEach(catImageElement => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                // Get the URL of the cat image
                const imageUrl = data[0].url;

                // Set the image source to display the cat image
                catImageElement.src = imageUrl;
            })
            .catch(error => console.error("Error fetching cat image:", error));
    });
}

// Call the function to fetch and display random cat images for all product cards
fetchRandomCatImages();


// script.js

// Function to fetch a random cat image and update the cat-image element
function fetchRandomCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;
            const catImage = document.getElementById("cat-image");
            catImage.src = imageUrl;
        })
        .catch(error => console.error("Error fetching cat image:", error));
}

// Function to continuously fetch and update random cat images
function updateRandomCatImages() {
    setInterval(fetchRandomCatImage, 4000); // Change the interval (in milliseconds) as desired
}

// Call the function to fetch and display a random cat image initially
fetchRandomCatImage();

// Call the function to continuously update random cat images
updateRandomCatImages();

