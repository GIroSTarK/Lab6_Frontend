const downloadButton = document.getElementById('downloadButton');
const personContainer = document.getElementById('personContainer');
const message = document.getElementById('message');

downloadButton.addEventListener('click', () => {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
      const personInfo = data.results[0];
      const personCard = document.createElement('div');
      personCard.className = 'personCard';
      const picture = document.createElement('img');
      picture.src = personInfo.picture.large;
      const cell = document.createElement('p');
      cell.textContent = `Cell: ${personInfo.cell}`;
      const city = document.createElement('p');
      city.textContent = `City: ${personInfo.location.city}`;
      const postcode = document.createElement('p');
      postcode.textContent = `Postcode: ${personInfo.location.postcode}`;
      const email = document.createElement('p');
      email.textContent = `E-mail: ${personInfo.email}`;
      personCard.append(picture, cell, city, postcode, email);
      personContainer.appendChild(personCard);
      message.textContent = 'Success!';
    })
    .catch(() => {
      message.textContent = 'Error!';
    })
    .finally(() => setTimeout(() => (message.textContent = ''), 3000));
});
