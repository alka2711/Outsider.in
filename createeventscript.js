document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const eventName = document.getElementById("event-name").value;
    const eventDescription = document.getElementById("event-description").value;
    const eventDate = document.getElementById("event-date").value;
    const eventLocation = document.getElementById("event-location").value;
    const eventCategory = document.getElementById("event-category").value;
    const eventPrice = document.getElementById("event-price").value;
    const eventSeats = document.getElementById("max-seats").value;
    const eventPoster = document.getElementById("event-poster").files[0];

    const reader = new FileReader();
    reader.onloadend = function() {
        const poster = reader.result; 

        const newEvent = {
            eventName,
            eventDescription,
            eventDate,
            eventLocation,
            eventCategory,
            eventPrice,
            eventSeats,
            posterURL: poster
        };

        const events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(newEvent);
        localStorage.setItem('events', JSON.stringify(events));

        console.log(newEvent); 
        document.getElementById("eventForm").reset();
    };

    reader.readAsDataURL(eventPoster);
    alert('New Event Created Successfully');
});
