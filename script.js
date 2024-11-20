function copyAddress(isSame) {
    const street = document.getElementById("street").value;
    const houseNumber = document.getElementById("house-number").value;
    const zip = document.getElementById("zip").value;
    const city = document.getElementById("city").value;

    document.getElementById("event-street").value = isSame ? street : "";
    document.getElementById("event-house-number").value = isSame ? houseNumber : "";
    document.getElementById("event-zip").value = isSame ? zip : "";
    document.getElementById("event-city").value = isSame ? city : "";

    document.getElementById("event-street").readOnly = isSame;
    document.getElementById("event-house-number").readOnly = isSame;
    document.getElementById("event-zip").readOnly = isSame;
    document.getElementById("event-city").readOnly = isSame;

    // Setze die Textfarbe auf hellgrau, wenn readonly
    const color = isSame ? "#A9A9A9" : "#000";
    document.getElementById("event-street").style.color = color;
    document.getElementById("event-house-number").style.color = color;
    document.getElementById("event-zip").style.color = color;
    document.getElementById("event-city").style.color = color;
}

//Header bei Runterscrollen verstecken, bei hochscrollen anzeigen
let lastScrollTop = 0; // letzte Scroll-Position
let header = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {

    header.style.top = "-15%"; // Höhe des Headers
  } else {
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Verhindert negatives Scrollen
});


// Array mit Texten, die angezeigt werden sollen
const texts = [
    "... und deine Gäste zum Strahlen bringen",
    "... und einzigartige Erinnerungen schaffen",
    "... und deine Feier unvergesslich machen",
    "... und die Stimmung auf das nächste Level bringen"
];

let currentIndex = 0; // Startindex

const textContainer = document.getElementById("answer_change");

// Funktion zum Ändern des Textes
function changeText() {
    // Textcontainer ausblenden (sanfter Übergang)
    textContainer.style.opacity = 0;

    setTimeout(() => {
        // Neuen Text setzen
        textContainer.textContent = texts[currentIndex];

        // Textcontainer einblenden
        textContainer.style.opacity = 1;

        // Index aktualisieren und zurücksetzen, falls am Ende des Arrays
        currentIndex = (currentIndex + 1) % texts.length;
    }, 500); // Zeit für die Ausblendung
}

// Start der Loop (alle 5 Sekunden)
setInterval(changeText, 5000);

// Initialen Text setzen
changeText();


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars

    let isValid = true;
    const requiredFields = ["anrede", "vorname", "nachname", "email", "telefon"];
    
    // Entferne vorherige Fehlermarkierungen und Fehlermeldung
    document.getElementById("error-message").style.display = "none";
    requiredFields.forEach(fieldId => {
        document.getElementById(fieldId).classList.remove("error");
    });

    // Überprüfe jedes Pflichtfeld
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.classList.add("error");
            isValid = false;
        }
    });

    // Zeige Fehlermeldung an, falls nicht alle Felder ausgefüllt sind
    if (!isValid) {
        document.getElementById("error-message").style.display = "block";
    } else {
        // Formular absenden (hier könntest du die Daten an einen Server senden)
        alert("Formular erfolgreich abgesendet!");
        document.getElementById("contactForm").reset();
    }
}); 

const addressFields = ["strasse", "hausnummer", "postleitzahl", "ort"];
const checkbox = document.getElementById("adresseIdentisch");

function updateAddressFields() {
    addressFields.forEach(field => {
        const leftField = document.getElementById(field);
        const rightField = document.getElementById(field + "Event");

        if (checkbox.checked) {
            rightField.value = leftField.value;
            rightField.disabled = true;
            rightField.classList.add("disabled-input");
        } else {
            rightField.value = "";
            rightField.disabled = false;
            rightField.classList.remove("disabled-input");
        }
    });
}

// Übertrage die Werte, wenn "Adresse identisch" aktiviert ist und Änderungen links erfolgen
addressFields.forEach(field => {
    document.getElementById(field).addEventListener("input", () => {
        if (checkbox.checked) {
            updateAddressFields();
        }
    });
});





// Validierung für den "Termin & Preis prüfen" Button
document.getElementById("checkDateButton").addEventListener("click", function() {
    const date = document.getElementById("date").value;
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");

    if (date && validateEmail(email)) {
        errorMessage.style.display = "none";
        alert("Termin und Preis wird geprüft...");
        // Weiterer Logik zur Überprüfung des Termins hinzufügen
    } else {
        errorMessage.style.display = "block";
    }
});

// E-Mail-Validierungsfunktion
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

  
  

