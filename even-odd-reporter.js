function isOdd(){
    for (i=0; i<=20; i++){
        let divideIt = i % 2;
        if (divideIt !== 0){
            console.log(i, 'is oneven');
        }
        else{
            console.log(i, 'is even');
        }
    }
}

isOdd();