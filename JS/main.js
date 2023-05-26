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
    document.getElementById("validation-summary").innerText = "";
    var game = getVideoGame();
    if (isDataValid(game)) {
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
    displayDiv.classList.add("displayedGame");
    var actuality = "";
    if (game.digital && game.physical) {
        actuality = "Digital & Physical";
    }
    else if (game.digital) {
        actuality = "Digital-only";
    }
    else if (game.physical) {
        actuality = "Phyiscal-only";
    }
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;
    var gameAuthor = document.createElement("h3");
    gameAuthor.innerText = "by ".concat(game.developer);
    var gameInfo = document.createElement("p");
    gameInfo.innerText = "RETAIL PRICE: $".concat(game.price, " \n\n                            RELEASE DATE: ").concat(formatDate(game.releaseDate), " \n\n                            RATING: ").concat(game.rating, " \n\n                            PLATFORM: ").concat(game.platform, " \n\n                            TYPE: ").concat(actuality);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameAuthor);
    displayDiv.appendChild(gameInfo);
}
function isDataValid(game) {
    var validity = true;
    if (!game.title) {
        validity = false;
        addError("Game title is required!");
    }
    if (!game.developer || !isNaN(parseInt(game.developer))) {
        validity = false;
        addError("Game developer is required!");
    }
    if (!game.price) {
        validity = false;
        addError("Price is required!");
    }
    if (!game.releaseDate) {
        validity = false;
        addError("Release date is required!");
    }
    if (game.rating == "default") {
        validity = false;
        addError("Rating input is required!");
    }
    if (game.platform == "default") {
        validity = false;
        addError("Platform input is required!");
    }
    if (!game.digital && !game.physical) {
        validity = false;
        addError("Digital or physical status is required!");
    }
    return validity;
}
function addError(errorMsg) {
    var errorSum = document.getElementById("validation-summary");
    var errorItem = document.createElement("li");
    errorItem.innerText = errorMsg;
    errorSum.appendChild(errorItem);
}
function formatDate(ogDate) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var splitDate = ogDate.split("-");
    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2];
    var curr = new Date("".concat(month, "/").concat(day, "/").concat(year));
    return (months[curr.getMonth()] + " " + curr.getDate() + ", " + curr.getFullYear());
}
