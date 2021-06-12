const welcomeText = document.querySelector('#welcome-text');

const buttonContainer = document.querySelector(".buttons-container");
const aboutMeButton = document.querySelector(".about-me-button");
const projectsButton = document.querySelector(".projects-button");
const contactMeButton = document.querySelector(".contact-me-button");

const welcomeSection = document.querySelector("#welcome-section");
const aboutMeSection = document.querySelector("#about-me");
const projectsSection = document.querySelector("#projects");
const contactMeSection = document.querySelector("#contact-me");

const backToTop = document.querySelector("#reset-button");

welcomeSection.style.height = window.innerHeight + 100;

const welcomes = ["Welcome", "Bienvenue", "欢迎光临"];

window.onload = function() {

    printAndRemove(welcomeText, "initializing....");

    let i = 0;

    setInterval(function() {
        let message = welcomes[i % 3];
        printAndRemove(welcomeText, message);
        //toggleUnderscore(welcomeText, message);
        i++;
    }, 10000);

    aboutMeButton.addEventListener('click', function() { aboutMeSection.scrollIntoView() });
    projectsButton.addEventListener('click', function() { projectsSection.scrollIntoView() });
    contactMeButton.addEventListener('click', function() { contactMeSection.scrollIntoView() });
    backToTop.addEventListener('click', function() { welcomeSection.scrollIntoView() });

    setInterval(function() {
        if (window.innerHeight >= aboutMeSection.getBoundingClientRect().top) { //(!elementInView(welcomeSection)){
            backToTop.classList.add("back-to-top");
        } else {
            backToTop.classList.remove("back-to-top");
        }
    }, 1);
}

function toggleUnderscore(selector, message) {
    if (message != "initializing....") {

        if (selector.innerHTML.length === message.length) {

        }
    }
}

function printByLetter(selector, index, message, repeats) {

    if (index < message.length) {

        (selector).innerHTML = message.substring(0, index);
        (selector).append(message[index++]);

        if (message != "initializing....") {
            (selector).append("|");
            selector.innerHTML = selector.innerHTML.replace("|", "");
        }

        if (index == message.length) {
            if (message == "initializing....") {
                if (repeats < 16) {
                    repeats++;
                    index = 12;
                    (selector).innerHTML = "initializing";
                } else {
                    let toggleUnderscore = 0;

                    setInterval(function() {
                        if (toggleUnderscore) {
                            (selector).append("|");
                        } else {
                            (selector).innerHTML = (selector).innerHTML.replace("|", "");
                        }

                        toggleUnderscore = !toggleUnderscore;

                    }, 500);
                }
            }
        }


        setTimeout(function() { printByLetter(selector, index, message, repeats) }, 90)
    }
}

function printAndRemove(selector, message) {
    printByLetter(selector, 0, message, 0);
    //add remove part :P

    function removeByLetter(selector, index, message) {

        if (message != "initializing....") {
            (selector).innerHTML = message.substring(0, index--) + "|";
        } else {
            (selector).innerHTML = message.substring(0, index--);
        }


        if (message.substring(0, index) == "") {
            (selector).innerHTML = " ";
            message = " ";
            return message;
        }

        setTimeout(function() { removeByLetter(selector, index, message) }, 90);

    }

    setTimeout(function() {
        let index = message.length;
        removeByLetter(selector, index, message);
    }, 7500);

    (selector).innerHTML = " ";
}

function elementInView(selector) {
    let elementLimit = selector.getBoundingClientRect();
    return (elementLimit.top >= 0 && (elementLimit.bottom >= window.innerHeight || document.documentElement.clientHeight));
}