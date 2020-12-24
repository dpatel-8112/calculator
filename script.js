window.onload = () =>{
    let screen1 = document.getElementById("cal_screen");
    let screen2 = document.getElementById("ans_screen");
    let ac = document.getElementById("cal_AC");
    let del = document.getElementById("cal_DEL");
    let values = document.querySelectorAll("#cal_value");
    let final_answer = document.getElementById('cal_answer');




    values.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.innerHTML;
            //console.log(value);
            screen1.value += value;
            screen2.value = eval(screen1.value);
        })
    })

    final_answer.addEventListener('click',function(){
        if(screen1.value == ""){
            screen2.value = "0";
        }else{
            screen2.value = eval(screen1.value);
        }
    })

    ac.addEventListener('click',function(){
        screen1.value = "";
        screen2.value = 0;
    })

    del.addEventListener('click',function(){

        screen1.value = screen1.value.slice(0, -1);
        
        
        if(screen1.value === ""){
            screen2.value = "0";
        }else{
            // console.log(screen1.value)
            screen2.value = eval(screen1.value);
        }

    })

}