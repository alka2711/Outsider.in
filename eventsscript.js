const events = JSON.parse(localStorage.getItem('events')) || [];
const eventContainer = document.getElementById('events-container');

document.getElementById("event-search-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const dateInput = document.getElementById("event-date").value;
    const categoryInput = document.getElementById("event-category").value;

    const filteredEvents = events.filter(event => {
        let matchDate = true;
        if (dateInput) {
            matchDate = event.eventDate === dateInput;
        }
    
        let matchCategory = true;
        if (categoryInput) {
            matchCategory = event.eventCategory === categoryInput;
        }
    
        return matchDate && matchCategory;
    });
    

   eventContainer.innerHTML = '';

    if (filteredEvents.length === 0) {
        eventContainer.innerHTML = '<p>No events found.</p>';
    } else {
        filteredEvents.forEach(event => {
            eventContainer.appendChild(createEventCard(event));
        });
    }
});

function createEventCard(event) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${event.posterURL}" alt="${event.eventName}" class="card-img">
        <div class="card-content">
            <h3>${event.eventName}</h3>
            <p>${event.eventDescription}</p>
            <p><strong>Date:</strong> ${event.eventDate}</p>
            <p><strong>Location:</strong> ${event.eventLocation}</p>
            <p><strong>Price:</strong> $${event.eventPrice}</p>
            <p><strong>Seats Available:</strong> ${event.eventSeats}</p>
            <button type="button">Book Now!</button>
        </div>
    `;
    return card;
}
