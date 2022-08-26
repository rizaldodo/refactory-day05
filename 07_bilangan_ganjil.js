const odds = () => {
    let res = [];
    for(let i=1; i<=100; i++){
        if(i%2==1){
            res.push(i);
        }
    }
    console.log(""+res);
    // console.log(res.length);
}
odds();