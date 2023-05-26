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
    // clearing validation summary
    document.getElementById("validation-summary").innerText = "";

    // checking validity and adding game if valid
    let game = getVideoGame();
    if (isDataValid(game)) {
        displayVideoGame(game);
    }
}


function getVideoGame():VideoGame {
    let game = new VideoGame();

    // REMEMBER TO QUADRUPLE CHECK ALL ID SPELLINGS!!!
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
    displayDiv.classList.add("displayedGame");

    // storing a game's values as a single string, which is assigned a variable to be used in the display below
    let actuality = "";
    if (game.digital && game.physical) {
        actuality = "Digital & Physical"
    }
    else if (game.digital) {
        actuality = "Digital-only"
    }
    else if (game.physical) {
        actuality = "Phyiscal-only"
    }

    // using backticks `` and ${} is a brisk way of displaying variable values in text because you don't have to concatenate 
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;

    let gameAuthor = document.createElement("h3");
    gameAuthor.innerText = `by ${game.developer}`;

    let gameInfo = document.createElement("p");
    gameInfo.innerText = `RETAIL PRICE: $${game.price} \n
                            RELEASE DATE: ${formatDate(game.releaseDate)} \n
                            RATING: ${game.rating} \n
                            PLATFORM: ${game.platform} \n
                            TYPE: ${actuality}`;
                      
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameAuthor);
    displayDiv.appendChild(gameInfo);
}


function isDataValid(game:VideoGame):boolean {
    let validity = true;

    if (!game.title) {
        validity = false;
        addError("Game title is required!");
    }

    if (!game.developer || !isNaN(parseInt(game.developer))) {
        validity = false;
        addError("Game developer is required!");
    }
    
    // since I used a number-type input, I don't need to check for isNaN because the user can ONLY enter numbers
    if (!game.price) {
        validity = false;
        addError("Price is required!");
    }

    // since I used a date-type input, the user can ONLY enter a date and I don't have to do extra checks
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


function addError(errorMsg:string) {
    let errorSum =  document.getElementById("validation-summary");
    let errorItem = document.createElement("li");
    errorItem.innerText = errorMsg;
    errorSum.appendChild(errorItem);
}

// taken from my ToDoList assignment
function formatDate(ogDate:string):string {
    // arrays containing the written-out days and months for use in converting date format
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
    let splitDate = ogDate.split("-");
    let year = splitDate[0];
    let month = splitDate[1];
    let day = splitDate[2];

    // using that array to create a Date object in order to access Date methods and manipulate the formatting
    let curr = new Date(`${month}/${day}/${year}`);
    return (months[curr.getMonth()] + " " + curr.getDate()  + ", " + curr.getFullYear());
}