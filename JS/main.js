var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isDataValid()) {
        var game = getVideoGame();
        displayVideoGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    game.title = document.getElementById("title").value;
    game.developer = document.getElementById("developer").value;
    game.price = parseFloat(document.getElementById("price").value);
    game.releaseDate = document.getElementById("date").value;
    game.rating = document.getElementById("rating").value;
    game.platform = document.getElementById("platform").value;
    game.digital = document.getElementById("digital").checked;
    game.physical = document.getElementById("physical").checked;
    return game;
}
function displayVideoGame(game) {
    var displayDiv = document.getElementById("display");
    var actuality = "";
    if (game.digital && game.physical) {
        actuality = "Digital & physical.";
    }
    else if (game.digital) {
        actuality = "Digital-only.";
    }
    else if (game.physical) {
        actuality = "Phyiscal-only.";
    }
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;
    var gameAuthor = document.createElement("h3");
    gameAuthor.innerText = "by ".concat(game.developer);
    var gameInfo = document.createElement("p");
    gameInfo.innerText = "RETAIL PRICE: ".concat(game.price, " \n\n                            RELEASE DATE: ").concat(game.releaseDate, " \n\n                            RATING: ").concat(game.rating, " \n\n                            PLATFORM: ").concat(game.platform, " \n\n                            TYPE: ").concat(actuality);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameAuthor);
    displayDiv.appendChild(gameInfo);
}
function isDataValid() {
    return true;
}
