// Sydney 

function getSydneyTime() {
    let x = new Date().toLocaleString("hu-HU", {
        timeZone: "Australia/Sydney",
        timeStyle: "medium",
        hourCycle: "h23"
    });
    let hour = x.substring(0, x.indexOf(':'));
    let min = x.substring(hour.length + 1, hour.length + 3);
    let sec = x.substring(hour.length + 1 + min.length + 1, hour.length + min.length + 4);
    document.getElementById("sydney").innerHTML = hour + "h " + min + "m " + sec + "s";
    if (hour >= 6 && hour <= 18) {
        // console.log("Nappal van")
        document.getElementById("sunSydney").style.display = "block";
        document.getElementById("moonSydney").style.display = "none";
    } else {
        document.getElementById("sunSydney").style.display = "none";
        document.getElementById("moonSydney").style.display = "block";
    }
}

getSydneyTime();
setInterval(getSydneyTime, 1000);

// London

function getLondonTime() {
    let x = new Date().toLocaleString("hu-HU", {
        timeZone: "Europe/London",
        timeStyle: "medium",
        hourCycle: "h23"
    });
    let hour = x.substring(0, x.indexOf(':'));
    let min = x.substring(hour.length + 1, hour.length + 3);
    let sec = x.substring(hour.length + 1 + min.length + 1, hour.length + min.length + 4);
    document.getElementById("london").innerHTML = hour + "h " + min + "m " + sec + "s";

    // console.log(hour);
    if (hour >= 6 && hour <= 18) {
        // console.log("Nappal van")
        document.getElementById("sunLondon").style.display = "block";
        document.getElementById("moonLondon").style.display = "none";
    } else {
        document.getElementById("sunLondon").style.display = "none";
        document.getElementById("moonLondon").style.display = "block";
    }
}

getLondonTime();
setInterval(getLondonTime, 1000);

// Budapest

function getBudapestTime() {
    let x = new Date().toLocaleString("hu-HU", {
        timeZone: "Europe/Budapest",
        timeStyle: "medium",
        hourCycle: "h23"
    });
    let hour = x.substring(0, x.indexOf(':'));
    let min = x.substring(hour.length + 1, hour.length + 3);
    let sec = x.substring(hour.length + 1 + min.length + 1, hour.length + min.length + 4);
    document.getElementById("budapest").innerHTML = hour + "h " + min + "m " + sec + "s";

    // console.log(hour);
    if (hour >= 6 && hour <= 18) {
        // console.log("Nappal van")
        document.getElementById("sunBudapest").style.display = "block";
        document.getElementById("moonBudapest").style.display = "none";
    } else {
        document.getElementById("sunBudapest").style.display = "none"
        document.getElementById("moonBudapest").style.display = "block";
    }
}

getBudapestTime();
setInterval(getBudapestTime, 1000);

// Detroit

function getDetroitTime() {
    let x = new Date().toLocaleString("hu-HU", {
        timeZone: "America/Detroit",
        timeStyle: "medium",
        hourCycle: "h23"
    });
    let hour = x.substring(0, x.indexOf(':'));
    let min = x.substring(hour.length + 1, hour.length + 3);
    let sec = x.substring(hour.length + 1 + min.length + 1, hour.length + min.length + 4);
    document.getElementById("detroit").innerHTML = hour + "h " + min + "m " + sec + "s";

    // console.log(hour);
    if (hour >= 6 && hour <= 18) {
        // console.log("Nappal van")
        document.getElementById("sunDetroit").style.display = "block";
        document.getElementById("moonDetroit").style.display = "none";
    } else {
        document.getElementById("sunDetroit").style.display = "none";
        document.getElementById("moonDetroit").style.display = "block";
    }
}

getDetroitTime();
setInterval(getDetroitTime, 1000);


// Dubai
function getDubaiTime() {
    let x = new Date().toLocaleString("hu-HU", {
        timeZone: "Asia/Dubai",
        timeStyle: "medium",
        hourCycle: "h23"
    });
    let hour = x.substring(0, x.indexOf(':'));
    let min = x.substring(hour.length + 1, hour.length + 3);
    let sec = x.substring(hour.length + 1 + min.length + 1, hour.length + min.length + 4);
    document.getElementById("dubai").innerHTML = hour + "h " + min + "m " + sec + "s";

    // console.log(hour);
    if (hour >= 6 && hour <= 18) {
        // console.log("Nappal van")
        document.getElementById("sunDubai").style.display = "block";
        document.getElementById("moonDubai").style.display = "none";
    } else {
        document.getElementById("sunDubai").style.display = "none";
        document.getElementById("moonDubai").style.display = "block";
    }
}

getDubaiTime();
setInterval(getDubaiTime, 1000);


// Cairo
function getCairoTime() {
    let x = new Date().toLocaleString("hu-HU", {
        timeZone: "Africa/Cairo",
        timeStyle: "medium",
        hourCycle: "h23"
    });
    let hour = x.substring(0, x.indexOf(':'));
    let min = x.substring(hour.length + 1, hour.length + 3);
    let sec = x.substring(hour.length + 1 + min.length + 1, hour.length + min.length + 4);
    document.getElementById("cairo").innerHTML = hour + "h " + min + "m " + sec + "s";

    // console.log(hour);
    if (hour >= 6 && hour <= 18) {
        // console.log("Nappal van")
        document.getElementById("sunCairo").style.display = "block";
        document.getElementById("moonCairo").style.display = "none";
    } else {
        document.getElementById("sunCairo").style.display = "none";
        document.getElementById("moonCairo").style.display = "block";
    }
}

getCairoTime();
setInterval(getCairoTime, 1000);