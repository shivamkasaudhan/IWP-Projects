submitBTN.addEventListener("click", ()=>{
    const answer = document.getElementById("answer");
    let isbn = document.getElementById("digits").value;
    if(isbn.length!==13){
        alert("ISBN must have contain 13 digits!");
        return;
    }
    let str= "";
    let check = 0;
    for(let i = 0; i<12; i+=2){
        check += 1*parseInt(isbn[i]);
        check += 3*parseInt(isbn[i+1]);
    }
    check = (10 - check%10)%10;
    if(check === parseInt(isbn[12])){
        str= `<span>${isbn} is valid.</span>`;
    }else{
        str= `<span>${isbn} is not valid.</span>`;
    }
    answer.innerHTML = str;


});