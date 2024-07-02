document.addEventListener("DOMContentLoaded", () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('country-container');
            data.forEach(country => {
                const div = document.createElement('div');
                div.className = 'country';
                div.innerHTML = `
                    <img src="${country.flags.svg}" alt="${country.name.common} flag" class="flag">
                    <h3>${country.name.common}</h3>
                    <a href="${country.maps.googleMaps}" target="_blank">Google Map</a>
                `;
                container.appendChild(div);
            });
        })
        .catch(err => console.error('Error fetching data:', err));
});
