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
    var singleGameDiv = document.createElement("div");
    singleGameDiv.classList.add("displayedGame");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;
    var gameAuthor = document.createElement("h3");
    gameAuthor.innerText = "from ".concat(game.developer);
    var gameInfo = document.createElement("p");
    gameInfo.innerHTML = "<span>RETAIL PRICE:</span> $".concat((game.price).toFixed(2), "         <br><br>\n                            <span>RELEASE DATE:</span> ").concat(formatDate(game.releaseDate), "  <br><br>\n                            <span>RATING:</span> ").concat(game.rating, "                         <br><br>\n                            <span>PLATFORM:</span> ").concat(game.platform, "                     <br><br>\n                            <span>TYPE:</span> ").concat(actuality);
    singleGameDiv.appendChild(gameHeading);
    singleGameDiv.appendChild(gameAuthor);
    singleGameDiv.appendChild(gameInfo);
    displayDiv.appendChild(singleGameDiv);
    document.getElementById("title").value = "";
    document.getElementById("developer").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
    document.getElementById("rating").value = "default";
    document.getElementById("platform").value = "default";
    document.getElementById("digital").checked = false;
    document.getElementById("physical").checked = false;
}
function isDataValid(game) {
    var validity = true;
    if (!game.title) {
        validity = false;
        addError("Game title");
    }
    if (!game.developer || !isNaN(parseInt(game.developer))) {
        validity = false;
        addError("Game developer");
    }
    if (!game.price) {
        validity = false;
        addError("Price");
    }
    if (!game.releaseDate) {
        validity = false;
        addError("Release date");
    }
    if (game.rating == "default") {
        validity = false;
        addError("Rating input");
    }
    if (game.platform == "default") {
        validity = false;
        addError("Platform input");
    }
    if (!game.digital && !game.physical) {
        validity = false;
        addError("Digital or physical status");
    }
    return validity;
}
function addError(errorMsg) {
    document.getElementById("validation-label").innerText = "Missing required fields:";
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
