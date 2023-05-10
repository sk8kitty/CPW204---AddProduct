class VideoGame {
    title:string;
    developer:string;
    releaseDate:Date;
    price:number;
    platform:string;
    rating:string;
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
    // create object
    // populate with data
    // return it
    return 
}

function displayVideoGame(game:VideoGame):void {
    // display game below form
}

function isDataValid():boolean {
    // validate data
    return true;
}