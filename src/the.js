// Array of image URLs (relative paths to your local images)
const images = [];
for (let i = 1; i <= 24; i++) {
    images.push(`${i}.png`); // Create an array with image paths
}

// Function to assign background images to each day box and attach sound functionality
window.onload = () => {
    // Assign background images to the day boxes
    for (let i = 1; i <= 24; i++) {
        const box = document.getElementById(`day-${i}`);
        if (box) {
            box.style.backgroundImage = `url('${images[i - 1]}')`;
            box.style.backgroundSize = 'cover';
            box.style.backgroundPosition = 'center';

            // Attach the playSound function to each day box dynamically
            box.onclick = function() {

                playSound(i);
                showPopup(i);
            };
        }
    }
};

// Function to play sound based on the day clicked
function playSound(day) {
    var audio = document.getElementById("soundEffect");

    // Check if the audio element exists
    if (audio) {
        // Change the source of the audio dynamically based on the day clicked
        audio.src = `sounds/sound-${day}.mp3`; // Ensure the correct sound path (e.g., sound-1.mp3)

        // Play the audio
        audio.play().catch(err => {
            console.log("Audio play failed: ", err);
        });
    } else {
        console.log("Audio element not found.");
    }
}

function showPopup(day) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");

    // Customize the popup message based on the day
    let message = '';

    switch (day) {
        case 1:
            message = "Bienvenue dans la saison de la joie et de l'amour ! Commençons ce chemin de l'Avent avec espoir et enthousiasme";
            break;
        case 2:
            message = "Ce Noël, répandons la joie et l’amour, mais aussi la préoccupation pour notre planète. Chaque petit geste compte !";
            break;
        case 3:
            message = "Que la lumière de cette saison nous inspire à prendre des décisions qui protègent notre environnement pour les générations futures";
            break;
            // Add custom messages for other days as needed
        case 4:
            message = "En attendant Noël, réfléchissons à des actions concrètes pour réduire nos déchets et préserver notre planète";
            break;

        case 5:
            message = "La Terre est un cadeau précieux. Célébrons cet Avent en faisant des choix durables et respectueux de l’environnement";
            break;
        case 7:
            message = "C'est la période la plus magique de l'année ! Faisons en sorte que ces jours de l'Avent soient remplis de joie, de rires et d'émerveillement";
            break;
        case 8:
            message = "Cette saison de partage est aussi l’occasion de réfléchir à des choix plus écologiques. Comment rendre Noël plus vert cette année ?";
            break;
        case 9:
            message = "De petits changements, comme réduire l’utilisation du plastique ou privilégier les transports doux, peuvent avoir un grand impact. Gardons cela en tête cet Avent.";
            break;
        case 10:
            message = "L’esprit de Noël, c’est aussi de prendre soin de la Terre. Faisons en sorte que cette fête profite à la fois aux humains et à la planète";
            break;
        case 11:
            message = "Rappelons-nous que Noël, c'est avant tout la convivialité et la bienveillance, apporter de la joie aux autres de toutes les manières possibles";
            break;
        case 12:
            message = "Cet Avent, célébrons le cadeau de la durabilité en offrant des présents qui respectent l’environnement.";
            break;
        case 13:
            message = "Que chaque sapin décoré nous rappelle l’importance de protéger les arbres et les forêts qui nourrissent notre monde. Ensemble, nous pouvons faire la différence";
            break;
        case 14:
            message = "La magie de Noël est dans l’air, tout comme l’appel à l’action pour notre planète. Faisons de ce Noël une fête écoresponsable";
            break;
        case 15:
            message = "À l'approche de Noël, concentrons-nous sur les bénédictions que nous avons reçues et partageons-les avec les autres";
            break;
        case 16:
            message = "En partageant nos repas de Noël, pensons à l’impact de nos choix alimentaires sur l’environnement et privilégions des options durables.";
            break;
        case 17:
            message = "Chaque geste compte. Offrons des cadeaux pensés, durables et éthiques, pour un Noël qui fait du bien à tous.";
            break;
        case 18:
            message = "Que cette période de l’Avent nous inspire à préserver la nature et à sensibiliser nos proches aux enjeux climatiques";
            break;
        case 19:
            message = "Les meilleurs cadeaux sont ceux que nous offrons du fond du cœur. Faisons de cet Avent un moment de partage, d'amour et de bienveillance";
            break;
        case 20:
            message = "Nous avons le pouvoir de changer nos habitudes pour le bien de la Terre. Rendons ce Noël encore plus vert en adoptant des gestes écoresponsables";
            break;
        case 21:
            message = "En cette veille de Noël, pensons à l’impact de nos traditions et adoptons des pratiques plus respectueuses de l’environnement.";
            break;
        case 22:
            message = "Dans l'agitation de la saison, n'oublions pas la véritable signification de Noël : l'amour, la paix et la joie";
            break;
        case 23:
            message = "À l’approche de Noël, rappelons-nous que chaque petit geste pour la planète a une grande importance. Ensemble, agissons pour la Terre.";
            break;
        case 24:
            message = "Joyeux Noël ! Que cette fête soit non seulement un moment de joie, mais aussi une occasion de renouveler notre engagement envers la planète.";
            break;
            // Continue with more cases as needed for each day
        default:
            message = `You clicked on Day ${day}!`;
            break;
    }

    popupText.innerText = message;

    // Display the popup
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = 'none';
}
const popup = document.getElementById("popup");
popup.style.display = 'none';