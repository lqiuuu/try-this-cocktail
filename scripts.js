async function getData() {
  try{
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    // console.log(data)
    // var types = JSON.parse(data[0], (key, value) => {
    //   return key === "object" ? undefined : value;
    // });
      // return data;
      console.log(data.drinks[0]);
      let drink = toString(this.response)
      console.log(drink)
    }
    console.log(response.status);
    console.log(response.statusText);

    // let drinkName = 
    
  
  }
  catch(err){
    console.log("something is wrong. " + err)
  }
  }
  // var data = JSON.parse(this.response)
  // data.forEach((drink) => {
  //   // Log each movie's title
  //   console.log(drink.strDrink)
  // })
  // document.getElementById("name").innerHTML = myText
  
  getData();
  // var drink = JSON.parse(data)
 

  // function preload() {
  //   types = loadJSON(data)
  // }

 
  
  