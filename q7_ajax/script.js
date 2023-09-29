const fetchBtn = document.getElementById("fetch-btn");
const display = document.getElementById("display");

fetchBtn.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const books = JSON.parse(xhr.responseText);
                books.books.forEach((book) => {
                    const head = document.createElement("h1");
                    head.textContent = `${book.name} - ${book.author}`;
                    display.appendChild(head);
                });
            } else {
                console.error("Failed to fetch data from index.json.");
            }
        }
    };

    xhr.open("GET", "index.json", true);
    xhr.send();
});
