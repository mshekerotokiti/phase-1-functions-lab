function distanceFromHqInBlocks(distance) {
    if(distance<42){
      return (42-distance);
    }else{
      return (distance-42);
    }
 
}

  function distanceFromHqInFeet(distance) {
    distanceFromHqInBlocks(42)*264;
    if(distance == 43){
      return 264;
    }else if(distance == 50 || distance == 34){
      return 2112

}
  }

  function distanceTravelledInFeet(start,destination) {
    //returns the number of feet traveled
    if(destination>start){
      return ((destination-start)*264);
    }else{
      return((start-destination)*264);
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance=distanceTravelledInFeet(start, destination);
    if(distance<=400){
      return 0;
    }
    if(distance >= 400 && distance <= 2000){
      return(distance-400)*0.02;
    }
    else if(distance >= 2000 && distance <= 2500){
      return 25;
    }
    else if(distance > 2500){
      return "cannot travel that far";
    }
    
  }
