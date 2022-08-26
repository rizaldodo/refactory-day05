const addArray = (arr) => {
    console.log("Before = " + arr);
    arr.unshift("Handuk");
    arr.push("Celana");

    console.log("After = " + arr);
}

addArray(['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']);