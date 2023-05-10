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
    game.releaseDate = document.getElementById("release-date").value;
    game.rating = document.getElementById("rating").value;
    game.platform = document.getElementById("platform").value;
    game.digital = document.getElementById("digital").checked;
    game.physical = document.getElementById("physical").checked;
    return game;
}
function displayVideoGame(game) {
}
function isDataValid() {
    return true;
}
