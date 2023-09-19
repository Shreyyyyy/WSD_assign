const fetchButton = document.getElementById('fetchButton');
const dogImage = document.getElementById('dogImage');

// Function to fetch and display a random dog image
async function fetchRandomDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const imageUrl = data.message;
        dogImage.src = imageUrl;
    } catch (error) {
        console.error('Error fetching random dog image:', error);
    }
}

// Initial fetch when the page loads
fetchRandomDogImage();

// Add a click event listener to the button
fetchButton.addEventListener('click', fetchRandomDogImage);
