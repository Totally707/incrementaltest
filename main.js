var gameData = {
    stars : 0,
    possiblecollapsedstars : 0,
    SNC : 0,
}

setInterval(OnTick, 1)

function OnTick() {
    document.getElementById("ActualVal").innerHTML = gameData.stars + " Stars"
    gameData.possiblecollapsedstars = Math.floor(gameData.stars/5) * ((gameData.stars%5) + 1)
    document.getElementById("Coins").innerHTML = gameData.SNC + " Coins"
    document.getElementById("internalcollapsebutton").innerHTML = "+" + gameData.possiblecollapsedstars
    if (gameData.possiblecollapsedstars > 1) {
        document.getElementById("csb").innerHTML = "Collapse For " + gameData.possiblecollapsedstars + " Coins"
    }
    else if (gameData.possiblecollapsedstars == 1) {
        document.getElementById("csb").innerHTML = "Collapse For 1 Coin"
    }
    else {
        document.getElementById("csb").innerHTML = "Get to 5 Stars to Collapse"
    }
    if (gameData.SNC > 0) {
        document.getElementById("Tab2butt").style.display = "inline-block"
        document.getElementById("Tab2butt").innerHTML = "Coins"
    }
}

function AddStar() {
    gameData.stars += 1;
}

function CollapseStars() {
    if (gameData.stars > 4) {
        gameData.stars = 0
        gameData.SNC += gameData.possiblecollapsedstars
    }
}

function Tab1() {
    document.getElementById("Tab1").style.display = "block"
    document.getElementById("Tab2").style.display = "none"
    document.getElementById("Tab3").style.display = "none"
}

function Tab2() {
    document.getElementById("Tab1").style.display = "none"
    document.getElementById("Tab2").style.display = "block"
    document.getElementById("Tab3").style.display = "none"
}