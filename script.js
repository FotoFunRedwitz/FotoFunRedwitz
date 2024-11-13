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



// Scrollen zum Wunschtermin prüfen Bereich bei Klick auf "Anfragen" Buttons
document.querySelectorAll(".anfragen-button").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("wunschtermin-section").scrollIntoView({ behavior: "smooth" });
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

// Hamburger Menu Toggle (Öffnen/Schließen der Navigation)
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
