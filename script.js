// Data Destinasi Wisata
const destinations = [{
        id: 1,
        title: "Bali",
        image: "image/bali.jpg",
        description: "Pulau Dewata dengan pantai eksotis, budaya unik, dan alam yang memukau.",
        link: "destination-bali.html"
    },
    {
        id: 2,
        title: "Raja Ampat",
        image: "image/raja ampat.jpg",
        description: "Surga bawah laut dengan keanekaragaman hayati terbaik di dunia.",
        link: "destination-rajaampat.html"
    },
    {
        id: 3,
        title: "Yogyakarta",
        image: "image/yogyakarta.jpg",
        description: "Kota budaya dengan Candi Borobudur, Prambanan, dan keraton yang megah.",
        link: "destination-yogyakarta.html"
    },
    {
        id: 4,
        title: "Bromo",
        image: "image/bromo.jpg",
        description: "Gunung berapi aktif dengan pemandangan matahari terbit yang spektakuler.",
        link: "destination-bromo.html"
    },
    {
        id: 5,
        title: "Labuan Bajo",
        image: "image/labuan bajo.jpg",
        description: "Gerbang menuju Taman Nasional Komodo dan pulau-pulau eksotis Nusa Tenggara.",
        link: "destination-labuanbajo.html"
    }
];

// Data Makanan Khas
const foods = [{
        id: 1,
        title: "Rendang",
        image: "image/rendang.jpg",
        description: "Daging dimasak dengan bumbu rempah khas Minang, diakui sebagai makanan terenak di dunia.",
        link: "food-rendang.html"
    },
    {
        id: 2,
        title: "Sate",
        image: "image/sate.jpg",
        description: "Daging tusuk dengan bumbu kacang yang lezat, tersebar di seluruh Indonesia dengan variasi berbeda.",
        link: "food-sate.html"
    },
    {
        id: 3,
        title: "Nasi Goreng",
        image: "image/nasi goreng.jpg",
        description: "Makanan nasional Indonesia dengan cita rasa gurih, manis, dan pedas yang seimbang.",
        link: "food-nasigoreng.html"
    },
    {
        id: 4,
        title: "Gado-gado",
        image: "image/gado-gado.jpg",
        description: "Salad sayuran khas Indonesia dengan saus kacang yang kaya rasa.",
        link: "food-gadogado.html"
    },
    {
        id: 5,
        title: "Soto",
        image: "image/soto.jpg",
        description: "Sup tradisional dengan berbagai variasi di setiap daerah di Indonesia.",
        link: "food-soto.html"
    }
];

// Fungsi untuk menampilkan destinasi wisata
function displayDestinations() {
    const container = document.getElementById('destination-container');

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.title}">
            <div class="card-content">
                <h3>${destination.title}</h3>
                <p>${destination.description}</p>
                <a href="${destination.link}">Selengkapnya</a>
            </div>
        `;

        // Tambahkan event listener untuk mengarahkan ke halaman detail saat card diklik
        card.addEventListener('click', () => {
            window.location.href = destination.link;
        });

        container.appendChild(card);
    });
}

// Fungsi untuk menampilkan makanan khas
function displayFoods() {
    const container = document.getElementById('food-container');

    foods.forEach(food => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${food.image}" alt="${food.title}">
            <div class="card-content">
                <h3>${food.title}</h3>
                <p>${food.description}</p>
                <a href="${food.link}">Selengkapnya</a>
            </div>
        `;

        // Tambahkan event listener untuk mengarahkan ke halaman detail saat card diklik
        card.addEventListener('click', () => {
            window.location.href = food.link;
        });

        container.appendChild(card);
    });
}

// Fungsi untuk inisialisasi
function init() {
    displayDestinations();
    displayFoods();

    // Smooth scrolling untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
}

// Jalankan fungsi init saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', init);