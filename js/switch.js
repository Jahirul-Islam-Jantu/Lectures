const marks = 99

switch(true){
    case(marks<=100 && marks >= 80): 
        console.log('A+');
    break;
        case(marks<=79 && marks >= 70): 
        console.log('A');
    break;
        case(marks<=69 && marks >= 60): 
        console.log('A-');
    break;
        case(marks<=59 && marks >= 50): 
        console.log('B');
    break;
        case(marks<=49 && marks >= 40): 
        console.log('C');
    break;
        case(marks<=39 && marks >= 33): 
        console.log('D');
    break;
        default:
            console.log('F');
}