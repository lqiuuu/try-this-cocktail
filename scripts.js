let drinkName;
let list;
let message;
async function getData() {
  try{
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    // , {
    // method: "GET",
    // mode: "cors",  
    // headers: {
    //     "Content-type": "application/json",
    //   },
    // });
    if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    // console.log(data)
    // var types = JSON.parse(data[0], (key, value) => {
    //   return key === "object" ? undefined : value;
    // });
      // return data;
      // console.log(data.drinks[0].strDrink);
      // console.log(drink)
      const name =  data.drinks[0].strDrink
      const glass = data.drinks[0].strGlass

      message = `${name} in a ${glass}`
      console.log(message)
      // console.log(name)
      // drinkNames.push(name);
      // console.log(drinkNames)
      // return {name, glass}
      return message
    }
    
    console.log(response.status);
    console.log(response.statusText);
  }
  catch(err){
    console.log("something is wrong. " + err)
  }
  }
  console.log(message);
  // var data = JSON.parse(this.response)
  // data.forEach((drink) => {
  //   // Log each movie's title
  //   console.log(drink.strDrink)
  // })
getData().then(function (result){
  // drinkName = result
  // console.log(drinkName);
  // list = Object.entries(drinkName);
  // let content = `<h1> ${list[0][1]} in a ${list[1][1]}</h1>`
  // console.log(list);
  document.getElementById("name").innerHTML = result;
})

document.getElementById("pour").onClick = refresh

function refresh(){
  getData()
}

// 

// function tryThis(){
   
  // console.log(result)

  // };

  // var drink = JSON.parse(data)


 
  
  