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
    
    // REMEMBER TO QUADRUPLE CHECK ALL SPELLINGS
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
    let  displayDiv = document.getElementById("display");

    // using an object's values to determine a string, which gets stored in a variable to be used in the paragraph element below
    let actuality = "";
    if (game.digital && game.physical) {
        actuality = "Digital & physical."
    }
    else if (game.digital) {
        actuality = "Digital-only."
    }
    else if (game.physical) {
        actuality = "Phyiscal-only."
    }


    let gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;

    // using backticks `` and ${} is a brisk way of displaying variable values in text because you don't have to concatenate 
    let gameAuthor = document.createElement("h3");
    gameAuthor.innerText = `by ${game.developer}`;

    let gameInfo = document.createElement("p");
    gameInfo.innerText = `RETAIL PRICE: ${game.price} \n
                            RELEASE DATE: ${game.releaseDate} \n
                            RATING: ${game.rating} \n
                            PLATFORM: ${game.platform} \n
                            TYPE: ${actuality}`;
                      
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameAuthor);
    displayDiv.appendChild(gameInfo);
}

function isDataValid():boolean {
    // validate data
    return true;
}