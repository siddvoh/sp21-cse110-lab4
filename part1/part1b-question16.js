let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (const stat in statistics) {
    const val = statistics[stat]; 
    if(stat[0]=='r' || val%2==1)
        console.log(val);
  }