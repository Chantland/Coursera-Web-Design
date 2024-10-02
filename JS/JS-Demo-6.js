function myfunction() {
    var grades = [5, 6, , 9, 7, , 3, , 3, 2, 10, 12];
    var sum = 0;
    var count = 0;
    var fruits = "ttt"
    if (grades.length >0) {
        for (i = 0; i < grades.length; i++){
            if (grades[i] != undefined){
                sum += grades[i];
                count += 1; 
            }
            
        }
        // document.write('Average grade: ' + (sum/count));
        document.getElementById("sum_body_once_told_me").innerHTML = 'Average grade: ' + (sum/count)
        // document.getElementById("fruits").innerHTML = "1"; // not sure why this is failing?
        
    }else{
        document.write("Empty Array");
    }
    console.log('t')
}
