class VideoGame {
    title:string;
    developer:string;
    price:number;
    releaseDate:string;
    rating:string;
    platform:string;
    digital:boolean;
    physical:boolean;
}

window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]")
    addBtn.onclick = addVideoGame;
}

function addVideoGame():void {
    if(isDataValid()) {
        let game = getVideoGame();
        displayVideoGame(game);
    }
}

function getVideoGame():VideoGame {
    let game = new VideoGame();
    
    game.title = (<HTMLInputElement>document.getElementById("title")).value;
    game.developer = (<HTMLInputElement>document.getElementById("developer")).value;
    game.price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);
    game.releaseDate = (<HTMLSelectElement>document.getElementById("date")).value;
    game.rating = (<HTMLSelectElement>document.getElementById("rating")).value;
    game.platform = (<HTMLSelectElement>document.getElementById("platform")).value;
    game.digital = (<HTMLInputElement>document.getElementById("digital")).checked;
    game.physical = (<HTMLInputElement>document.getElementById("physical")).checked;

    return game;
}

function displayVideoGame(game:VideoGame):void {
    // display game below form
}

function isDataValid():boolean {
    // validate data
    return true;
}