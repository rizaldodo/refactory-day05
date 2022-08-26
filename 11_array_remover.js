const arrRemover = (arr,e) => {
    const index = arr.indexOf(e);
    if(!e || index == -1){
        return console.log(arr);
    }
    console.log("Before = " + arr)

    arr.splice(index, 1);
    console.log("After = " + arr);
}

arrRemover(['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon'], "Jambu");
// arrRemover(['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon'], "Jamur");