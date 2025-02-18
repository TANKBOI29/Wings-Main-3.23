// Open Modal
function openFormModal() {
    document.getElementById("formModal").style.display = "block";
}

// Close Modal
function closeFormModal() {
    document.getElementById("formModal").style.display = "none";
}

// Create New Form
function createForm() {
    let formTitle = document.getElementById("formTitle").value;
    if (formTitle.trim() === "") {
        alert("Please enter a form title.");
        return;
    }

    let cardContainer = document.getElementById("card-container");

    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = formTitle;

    let responseCount = document.createElement("p");
    responseCount.textContent = "Responses: 0";

    let deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.onclick = function () {
        newCard.remove();
    };

    newCard.appendChild(deleteBtn);
    newCard.appendChild(cardTitle);
    newCard.appendChild(responseCount);
    cardContainer.appendChild(newCard);

    closeFormModal();
    document.getElementById("formTitle").value = ""; // Clear input
}