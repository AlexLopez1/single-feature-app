function whatDay() {
    const d = new Date();
    const day = d.getDay();
    let textDay = "Today";
    
    if (day == 0){
      textDay = "Sunday";
    }else if(day == 1){
      textDay = "Monday";
    }else if(day == 2){
      textDay = "Tuesday";
    }else if(day == 3){
      textDay = "Wednesday";
    }else if(day == 4){
      textDay = "Thursday";
    }else if(day == 5){
      textDay = "Friday";
    }else{
      textDay = "Saturday";
    }
    document.getElementById('whatDay').innerHTML = textDay;
  }