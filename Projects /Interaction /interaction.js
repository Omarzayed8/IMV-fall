document.addEventListener('DOMContentLoaded', function () {
  const timelineContainer = document.getElementById('timeline');
  const timelineContentContainer = document.getElementById('timeline-content');
  const currentYearDisplay = document.getElementById('current-year');
  const eventImageContainer = document.getElementById('event-image-container'); // Add this line
  const eventDescriptionContainer = document.getElementById('event-description'); // Add this line

  const timelineData = [
    {
      year: 5000,
      event: 'Ancient Civilization in Palestine',
      description: 'Palestine has a rich history dating back to ancient civilizations.',
      image: 'Images/villag.png' // Add the path to the image
    },
    {
      year: 586,
      event: 'Babylonian Exile',
      description: 'Babylonians conquer Jerusalem, leading to the Babylonian Exile.',
      image: 'path/to/image2.jpg' // Add the path to the image
    },
    // Add more events as needed
  ];

  function displayTimeline(elapsedTime) {
    timelineContainer.innerHTML = ''; // Clear previous events

    timelineData.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.className = 'timeline-event';
      eventElement.innerHTML = `<strong>${event.year}</strong>: ${event.event}`;
      eventElement.addEventListener('click', function () {
        displayEventContent(event);
        updateCurrentYear(event.year);
      });

      if (event.year <= elapsedTime) {
        timelineContainer.appendChild(eventElement);
      }
    });
  }

  function displayEventContent(event) {
    eventImageContainer.innerHTML = ''; // Clear previous content
    eventDescriptionContainer.innerHTML = ''; // Clear previous content

    const eventImage = document.createElement('img');
    eventImage.src = event.image; // Set the source of the image
    eventImage.alt = event.event; // Set alt text for accessibility

    // You can set other attributes or styles for the image if needed
    eventImage.width = 200; // Set the width (adjust as needed)

    eventImageContainer.appendChild(eventImage);

    const eventDescription = document.createElement('div');
    eventDescription.innerHTML = `<h2>${event.event}</h2>`;
    eventDescription.innerHTML += `<p>${event.description}</p>`;

    eventDescriptionContainer.appendChild(eventDescription);
  }

  function updateCurrentYear(year) {
    currentYearDisplay.textContent = `Year: ${year}`;
  }

  // ... (rest of the code remains unchanged)
});

