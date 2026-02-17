/* Cipri */

// Event data
const myEvents = {
    event1: {
        title: "Book Club Gathering - The Great Gatsby",
        photos: ["images/book1.jpg", "images/book2.jpg"], // Adjusted paths
        reviews: [
            "Great discussion about 'The Great Gatsby'! - Borca Darius, TUCN",
            "Loved meeting fellow bookworms. - Bustea Iulia, TUCN",
        ],
    },
    event2: {
        title: "Theater Night - Lacul Lebedelor",
        photos: ["images/theater1.jpg", "images/theater2.jpg"], // Adjusted paths
        reviews: [
            "Amazing! What a spectacle. - Borzei Catalin, TUCN",
            "Loved the actors' performance! - Pintea Vlad, TUCN",
        ],
    },
    event3: {
        title: "Gaming Night - Activity",
        photos: ["images/game1.jpg", "images/game2.jpg"], // Adjusted paths
        reviews: [
            "Had so much fun playing board games! - Popescu Iustina, TUCN",
            "Met some amazing people. - Marius Andrei, BBU",
        ],
    },
};

function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the menu if clicked outside
document.addEventListener('click', (event) => {
    const menu = document.querySelector('.dropdown-menu');
    const icon = document.querySelector('.profile-icon');
    if (menu && icon && !icon.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// Handle profile picture upload
document.getElementById('profile-picture-upload').addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            // Update the image preview with the selected file
            document.getElementById('profile-picture').src = e.target.result;
        };

        reader.readAsDataURL(file); // Convert the file to a base64 string
    } else {
        console.error('No file selected.');
    }
});

// Optional: Save the uploaded photo
document.getElementById('profile-form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Profile picture saved!');
});

function toggleDescription(button) {
    const event = button.parentElement;
    const fullDescription = event.querySelector('.full-description');
    const shortDescription = event.querySelector('.short-description');
    
    if (fullDescription.classList.contains('hidden')) {
        // Show full description
        fullDescription.classList.remove('hidden');
        shortDescription.classList.add('hidden');
        button.textContent = 'Read Less';
    } else {
        // Show short description
        fullDescription.classList.add('hidden');
        shortDescription.classList.remove('hidden');
        button.textContent = 'Read More';
    }
}




/* Cipri */


// Show event details
function showEventDetails(eventId) {
    // console.log(JSON.stringify(myEvents, null, null, 2));

    const centralMessage = document.getElementById("central-message");
    if (centralMessage) {
        centralMessage.classList.add("hidden");
    }

    const event = myEvents[eventId];
    if (!event) return;

    // Populate event details
    document.getElementById("event-title").textContent = event.title;

    const photosDiv = document.getElementById("event-photos");
    photosDiv.innerHTML = ""; // Clear previous photos
    event.photos.forEach((photo) => {
        const img = document.createElement("img");
        img.src = photo; // Set the correct image source
        img.alt = event.title; // Accessible alt text
        img.classList.add("round-image"); // Add styling class
        photosDiv.appendChild(img);
    });

    const reviewsList = document.getElementById("review-list");
    reviewsList.innerHTML = ""; // Clear previous reviews
    event.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.textContent = review;
        reviewsList.appendChild(li);
    });

    // Show details and hide the event list
    
    document.getElementById("event-details").classList.remove("hidden");
    //document.querySelector(".event-list").classList.add("hidden");
}

// Function to initialize the first event
function initializeDefaultEvent() {
    const firstEventId = Object.keys(myEvents)[0]; // Get the ID of the first event
    if (firstEventId) {
        showEventDetails(firstEventId); // Show details of the first event
    }
}


// Hide event details
function hideEventDetails() {
    document.querySelector(".event-list").classList.remove("hidden");
    document.getElementById("event-details").classList.add("hidden");
}

// Call this function after the page loads
document.addEventListener("DOMContentLoaded", initializeDefaultEvent);



// Styling for round images (optional)
document.styleSheets[0].insertRule(`
    .round-image {
        width: 200px; 
        height: 200px; 
        border-radius: 50%; 
        object-fit: cover; 
        margin: 5px;
        border: 2px solid #ccc;
    }
`);



// Existing event data and functions remain unchanged...
