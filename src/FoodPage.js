import React from "react";
import "./FoodPage.css";

function FoodPage() {
    const foodPlaces = [
        {
            name: "1. Dean Maju Nasi Kandar",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/119184241_155581916182862_1609896682793379990_n.jpg",
            description: `Loved by tourists and locals, the legendary Deen Maju Nasi Kandar definitely takes the top spot on our list! With an explosion of authentic flavours, you MUST give their crowd-favourite Fish Head Curry, Fried Chicken, Bendi, Papadom, Daging Kambing and Sambal Prawns a try together with your Nasi Kandar.`,
            address: "170, Jalan Gurdwara, 10300 George Town, Pulau Pinang",
            hours: "Saturday to Thursday (12 – 10 pm), Closed on Fridays",
            status: "Muslim-owned",
            links: [
                { label: "Facebook", url: "https://www.facebook.com/penangchendul/" },
                { label: "Instagram", url: "https://www.instagram.com/explore/locations/1178173762240393/penang-road-famous-teochew-chendul-1/" }, { label: "Website", url: "https://chendul.my/" },
            ],
        },
        {
            name: "2. Penang Road famous Teochew Chendul",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/43723011_711534795871362_8147595502163066880_n.jpg",
            description: `If you haven’t enjoyed the iconic Teochew cendol here, you’ve clearly been missing out. With a refreshing and genuine sweetness from Gula Melaka, this coconut milk infused cendol is Penang’s true pride and glory.`,
            address: "27-29, Lebuh Keng Kwee, George Town, 10100 George Town, Pulau Pinang",
            hours: "Monday to Sunday (10 am – 5 pm)",
            status: "Pork-free",
            links: [
                { label: "Website", url: "https://chendul.my/" },
                { label: "Facebook", url: "https://facebook.com" },
                { label: "Instagram", url: "https://instagram.com" },
            ],
        },
        {
            name: "3. Nasi Padang Minang",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/403602140_10160337996557620_2682311390843253019_n.jpg",
            description: `As a family-owned business run by a husband and wife duo, Nasi Padang Minang is another must-visit street food spot whenever you’re in Penang! Flavourful delights such as the Ikan Patin Asam Pedas, Sambal Tofu, Ulam Raja, Ikan Cencaru Bawang and Nasi Padang Minang will be calling your name.`,
            address: "92, Jalan Transfer, George Town, 10050 George Town, Pulau Pinang",
            hours: "Saturday to Thursday (11 am – 4 pm), Closed on Fridays",
            status: "Muslim-owned",
            links: [
                { label: "Facebook", url: "https://www.facebook.com/profile.php?id=100057028677230" },
                { label: "Instagram", url: "https://www.instagram.com/explore/locations/270452340/nasi-padang-minang/" },
            ],
        },
        {
            name: "4. Ali Nasi Lemak Daun Pisang",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/345165497_765018388336598_5213128284398885048_n.jpg", // Replace with the actual image path or URL
            description: `Celebrated as one of the best nasi lemak stalls and selected for a Michelin Guide 2023 award, Ali Nasi Lemak Daun Pisang will have you drooling in hunger! Treat yourself to a wholesome packet of Bilis Telur, Ikan Masin, Sotong, Udang or Ayam Nasi Lemak that will surely fulfil all your sambal spice cravings.`,
            address: "Beach St, Georgetown, 10300 George Town, Penang",
            hours: "Monday to Friday (7 am – 2 pm), Closed on Saturdays & Sundays",
            status: "Muslim-owned",
            links: [
                { label: "Facebook", url: "https://www.facebook.com/pages/Ali-nasi-lemak-daun-Pisang/2058587194226171" },
                { label: "Instagram", url: "https://www.instagram.com/alinasilemakdaunpisang/" },
            ],
        },
        {
            name: "5. Hameed Pata Mee Sotong",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/44295142_1106890389472338_2910114895654158782_n.jpg",
            description: `Like its name suggests, Hameed Pata Mee Sotong is a viral one for some seriously incredible mee sotong. We highly recommend coming here on an empty stomach so that you can order it up to the max without any limits. Memang sedap!`,
            address: "5, Esplanade Park, Lebuh Light, 10300 George Town",
            hours: "Monday to Thursday & Saturday (11.30 am – 8 pm), Saturday (11.30 am – 10 pm), Friday (11.30 am – 1 pm, 2.30 – 8 pm), Saturday (11.30 am – 8 pm), Closed on Sundays ",
            status: "Muslim-owned",
            links: [
                { label: "Facebook", url: "https://www.facebook.com/profile.php?id=143625669023024&_rdr" },
                { label: "Instagram", url: "https://www.instagram.com/explore/locations/1220634/hameed-pata-special-mee-sotong/?hl=en" },
            ],
        },
        {
            name: "6. Teksen Restaurant",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/403825834_842736524301199_3190217481496216607_n.jpg",
            description: `Bursting with authentic flavours, your taste buds will definitely come alive at Teksen as you live it up with their well-made traditional Chinese food. Serving up smiles since 1965, we absolutely adore the Curry Stingray, Prawn Omelette, Fried Lala, Belacan Fried Chicken and Braised Duck with Yam dishes. P.S: Teksen was even awarded with a Michelin Guide for good quality and value cooking!   `,
            address: "18, Lebuh Carnarvon, George Town, 10100 George Town, Pulau Pinang",
            hours: "Friday to Monday (12 – 2 pm, 5.30 – 8.30 pm), Closed on Tuesdays to Thursdays   ",
            status: "Non-halal",
            links: [
                { label: "Facebook", url: "https://www.facebook.com/TekSenRestaurant/" },
                { label: "Instagram", url: "https://www.instagram.com/teksenrestaurant/?hl=en" },
            ],
        },
        {
            name: "7. Wan Tan Mee",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/72489463_409165496427325_4058397660696607240_n.jpg",
            description: `We’re slurping it up with some springy wan tan mee at Chulia Street Hawker Food next! Topped with lustrous dark sauce and loaded with signature char siew, egg noodles, crispy pork lard, wonton, veggies and pickled green chilli, it’ll certainly be a legendary meal to remember. `,
            address: "Chulia St, Georgetown, 10450 George Town, Penang",
            hours: "Monday to Sunday (4.30 – 10.30 pm)    ",
            status: "Non-halal",
            links: [
                { label: "Facebook", url: "https://www.facebook.com/pages/Chulia-Street-Penang/147697721955378" },
                { label: "Instagram", url: "https://www.instagram.com/explore/locations/307485829720189/chulia-street-night-hawker-stalls/" },
            ],
        },
        {
            name: "8. Hot Bowl White Curry Mee",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/310526798_1177495769499018_3679940370096344177_n.jpg",
            description: `As a Legend of the street and Champion of the spicy zing, Hot Bowl White Curry Mee is another one of our holy grail favourites! Recently awarded with a Michelin Bib Gourmand award, this unforgettable white curry mee consists of a coconut milk-based broth, beancurd puffs, prawns, taugeh, noodles of your choice and their best-selling curry paste on the side. We recommend pairing your bowl of noodles with their melt-in-your-mouth deboned steamed chicken, Teochew guang jiang and spiced loh bak too.`,
            address: "58C, Jalan Rangoon, 10400 George Town, Pulau Pinang ",
            hours: "Tuesday, Thursday to Sunday (8 am – 3 pm), Closed on Mondays & Wednesdays",
            status: "Non-halal",
            links: [
                { label: "Facebook", url: "https://www.facebook.com/profile.php?id=219305594763529&_rdr" },
                { label: "Instagram", url: "https://www.instagram.com/explore/locations/252616404/hot-bowl-white-curry-mee/" },
            ],
        },
        {
            name: "9. Wan Tan Mee",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/FullSizeRender-24.jpg",
            description: `Attention all rojak fans! Yesss, put your hands up! With a well-balanced variety of toppings such as crisp green mango, apples, pineapple, cuttlefish, crispy tofu, guava, cucumber, youtiao and dressed in thick sweet peanut infused rojak sauce, this is legit the stuff of dreams. Rojak here is a real mood booster too! `,
            address: "Jalan Pasar, 14000 Bukit Mertajam, Pulau Pinang ",
            hours: "Monday to Sunday (12 – 6 pm)",
            status: "Pork-free",
            links: [
                { label: "Instagram", url: "https://www.instagram.com/explore/locations/469285662/bm-rojak-orang-hitam-putih/" },
            ],
        },
        {
            name: "10. Siam Road Charcoal Char Koay Teow",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/Screen-Shot-2024-01-05-at-1.12.06-PM.png",
            description: `Next, immerse yourself in a delightful char koay teow feast at Siam Road Charcoal Char Kuey Teow. Filled with wok hei at its best and savoury notes from prawns, eggs and lup cheong, it’s truly viral for being so flawless. Most definitely come here on an empty stomach so that you can order it up to the max without any limits!`,
            address: "82, Jalan Siam, George Town, 10400 George Town, Pulau Pinang",
            hours: "Tuesday to Saturday (12 – 6 pm), Closed on Sundays & Mondays ",
            status: "Non-halal",
            links: [
               { label: "Instagram", url: "https://www.instagram.com/explore/locations/225195020/siam-road-char-koay-teow/" },
            ],
        },
    ];

    return (
        <div className="food-page">
            <header className="food-header">
                <h1>🍴 Explore Penang's Culinary Delights 🍛</h1>
            </header>
            <div className="food-container">
                {foodPlaces.map((place, index) => (
                    <div key={index} className="food-item">
                        <img src={place.image} alt={place.name} className="food-image"/>
                        <div className="food-details">
                            <h2 className="food-title">{place.name}</h2>
                            <p className="food-description">{place.description}</p>
                            <p><strong>📍 Address:</strong> {place.address}</p>
                            <p><strong>🕒 Operating Hours:</strong> {place.hours}</p>
                            <p><strong>🛐 Status:</strong> {place.status}</p>
                            <div className="food-links">
                                {place.links.map((link, idx) => (
                                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="food-link">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default FoodPage;
