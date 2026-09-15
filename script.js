// Create the map and center it on India
var map = L.map('map').setView([22.5, 79], 5);


// OpenStreetMap background
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// 1. Ajanta
// 1. Ajanta Caves
L.marker([20.5524, 75.7033])
    .addTo(map)
    .bindPopup(`
        <div class="art-popup">

            <img 
                src="images/ajanta caves.jpg"
                class="popup-image"
            >

            <h2>Ajanta Caves</h2>

            <p class="location">
                📍 Maharashtra, India
            </p>

            <hr>

            <h4>Art Form</h4>
            <p>
                Buddhist rock-cut architecture, sculpture and paintings.
            </p>

            <h4>Historical Context</h4>
            <p>
                The Ajanta Caves were developed in phases from the 
                2nd century BCE to the 5th–6th century CE. 
                The caves served as Buddhist monasteries and 
                prayer halls.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li>Rock-cut cave architecture</li>
                <li>Buddhist sculptures</li>
                <li>Murals and narrative paintings</li>
                <li>Decorative architectural elements</li>
            </ul>

            <h4>Artistic Importance</h4>
            <p>
                Ajanta is especially important for its surviving 
                Buddhist paintings and sculptures, which provide 
                valuable evidence of the development of Indian art.
            </p>

        </div>
    `);

// 2. Ellora
L.marker([20.0268, 75.1793])
    .addTo(map)
    .bindPopup(`
        <div class="art-popup">
            <img src="images/Ellora-caves.jpg" alt="Ellora Caves" class="popup-image">

            <h2>Ellora Caves</h2>
            <p class="location">📍 Maharashtra, India</p>

            <hr>

            <h4>Art Form</h4>
            <p>Rock-cut architecture and sculpture.</p>

            <h4>Historical Context</h4>
            <p>
                The Ellora Caves were developed between the 6th and 10th centuries CE.
                The complex contains Buddhist, Hindu and Jain monuments.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li>Rock-cut cave architecture</li>
                <li>Religious sculptures</li>
                <li>Buddhist, Hindu and Jain monuments</li>
                <li>Kailasa Temple</li>
            </ul>

            <h4>Artistic Importance</h4>
            <p>
                Ellora demonstrates the coexistence of different religious
                traditions within India's rock-cut architectural heritage.
            </p>
        </div>
    `);


// 3. Thanjavur
L.marker([10.7870, 79.1378])
    .addTo(map)
    .bindPopup(`
        <div class="art-popup">
            <img src="images/thanjavur.webp" alt="Thanjavur Art" class="popup-image">

            <h2>Thanjavur</h2>
            <p class="location">📍 Tamil Nadu, India</p>

            <hr>

            <h4>Art Form</h4>
            <p>Chola bronze sculpture and temple art.</p>

            <h4>Historical Context</h4>
            <p>
                Thanjavur became an important centre of artistic activity
                during the Chola period, particularly under the Chola rulers.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li>Bronze sculptures</li>
                <li>Temple architecture</li>
                <li>Images of Hindu deities</li>
                <li>Detailed metal casting</li>
            </ul>

            <h4>Artistic Importance</h4>
            <p>
                The region is strongly associated with the development
                and refinement of South Indian bronze sculpture.
            </p>
        </div>
    `);


// 4. Khajuraho
L.marker([24.8318, 79.9199])
    .addTo(map)
    .bindPopup(`
        <div class="art-popup">
            <img src="images/Khajuraho.jpg" alt="Khajuraho Temples" class="popup-image">

            <h2>Khajuraho</h2>
            <p class="location">📍 Madhya Pradesh, India</p>

            <hr>

            <h4>Art Form</h4>
            <p>Temple architecture and stone sculpture.</p>

            <h4>Historical Context</h4>
            <p>
                The Khajuraho group of temples was built mainly during
                the 10th and 11th centuries under the Chandela dynasty.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li>Elaborate stone sculptures</li>
                <li>Temple architecture</li>
                <li>Hindu and Jain temples</li>
                <li>Decorative carvings</li>
            </ul>

            <h4>Artistic Importance</h4>
            <p>
                Khajuraho is recognised for its sophisticated temple
                architecture and extensive sculptural decoration.
            </p>
        </div>
    `);


// 5. Madhubani
L.marker([26.3487, 86.0710])
    .addTo(map)
    .bindPopup(`
        <div class="art-popup">
            <img src="images/Madhubani.jpg" alt="Madhubani Painting" class="popup-image">

            <h2>Madhubani</h2>
            <p class="location">📍 Bihar, India</p>

            <hr>

            <h4>Art Form</h4>
            <p>Madhubani painting, also known as Mithila painting.</p>

            <h4>Historical Context</h4>
            <p>
                Madhubani painting is associated with the Mithila region
                of Bihar and developed as a traditional form of wall
                and floor painting before becoming widely practiced on paper.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li>Bold outlines and patterns</li>
                <li>Geometric designs</li>
                <li>Nature and religious themes</li>
                <li>Traditional decorative motifs</li>
            </ul>

            <h4>Artistic Importance</h4>
            <p>
                Madhubani painting represents an important tradition
                of Indian folk and community-based art.
            </p>
        </div>
    `);


// 6. Warli Region
L.marker([19.6967, 72.7699])
    .addTo(map)
    .bindPopup(`
        <div class="art-popup">
            <img src="images/Warli Region.webp" alt="Warli Painting" class="popup-image">

            <h2>Warli Art</h2>
            <p class="location">📍 Maharashtra, India</p>

            <hr>

            <h4>Art Form</h4>
            <p>Warli painting.</p>

            <h4>Historical Context</h4>
            <p>
                Warli painting is a traditional art form associated
                with the Warli community of Maharashtra.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li>Geometric human figures</li>
                <li>Circular and triangular forms</li>
                <li>Scenes of everyday life</li>
                <li>Nature and community themes</li>
            </ul>

            <h4>Artistic Importance</h4>
            <p>
                Warli art is an important example of India's
                indigenous and community-based visual traditions.
            </p>
        </div>
    `);


// 7. Puri
L.marker([19.8135, 85.8312])
    .addTo(map)
    .bindPopup(`
        <div class="art-popup">
            <img src="images/Puri.webp" alt="Pattachitra Painting" class="popup-image">

            <h2>Puri</h2>
            <p class="location">📍 Odisha, India</p>

            <hr>

            <h4>Art Form</h4>
            <p>Pattachitra painting.</p>

            <h4>Historical Context</h4>
            <p>
                Pattachitra is a traditional painting tradition of Odisha,
                closely associated with the religious culture of Puri
                and the Jagannath tradition.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li>Detailed line work</li>
                <li>Religious themes</li>
                <li>Decorative borders</li>
                <li>Traditional natural colours</li>
            </ul>

            <h4>Artistic Importance</h4>
            <p>
                Pattachitra is one of Odisha's important traditional
                painting traditions and is closely connected with its
                religious and cultural heritage.
            </p>
        </div>
    `);


// 8. Jaipur
L.marker([26.9124, 75.7873])
    .addTo(map)
    .bindPopup(`
        <div class="art-popup">
            <img src="images/Jaipur.webp" alt="Jaipur Miniature Painting" class="popup-image">

            <h2>Jaipur</h2>
            <p class="location">📍 Rajasthan, India</p>

            <hr>

            <h4>Art Form</h4>
            <p>Rajasthani miniature painting.</p>

            <h4>Historical Context</h4>
            <p>
                Jaipur developed as an important centre of painting
                under the Kachwaha rulers, with artistic traditions
                influenced by the wider Mughal and Rajasthani schools.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li>Detailed miniature compositions</li>
                <li>Royal and courtly subjects</li>
                <li>Religious and literary themes</li>
                <li>Fine decorative details</li>
            </ul>

            <h4>Artistic Importance</h4>
            <p>
                The Jaipur school forms an important part of the
                Rajasthani miniature painting tradition.
            </p>
        </div>
    `);