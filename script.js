const condition = true;

function simulatedAsync(){
    const myPromise = new Promise((resolve, reject) => {
        console.log("start");

        setTimeout(() => {
            if (condition) {
                resolve("Promise is done.");
            }
            else{
                reject("Promise failed.")
            }
        }, 3000)
    });

    myPromise.then(
        function(result) {
            console.log(result)
        }
    )

    myPromise.catch(
        function(error) {
            console.error(error)
        }
    )
}

simulatedAsync();

async function fetchCatBreeds() {
    console.log("Starting async operation");

    const response = await fetch("https://catfact.ninja/breeds");
    return response.json();
}

fetchCatBreeds().then((response) => console.log(response));

function selectedDropdown() {
    document.getElementById
}