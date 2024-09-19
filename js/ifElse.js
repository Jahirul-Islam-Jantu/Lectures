const submitHandler = ()=>{

    
    const marks = document.querySelector('#marks').value;
    const result = document.querySelector('#result')

    

    if(marks === ''){
        alert('Need Value')
    }else{
        if(marks >= 80){
    result.innerText = 'Your GPA is A+'
}else if(marks < 80 && marks >= 70){
    result.innerText = 'Your GPA is A'
}else if(marks < 70 && marks >= 60){
    result.innerText = 'Your GPA is A-'
}else if(marks < 60 && marks >= 50){
    result.innerText = 'Your GPA is B'
}else if(marks < 50 && marks >= 40){
    result.innerText = 'Your GPA is C'
}else if(marks < 40 && marks >= 33){
    result.innerText = 'Your GPA is D'
    
}else{
        result.innerText = 'You are Fail'

}
    }

    
    

}





