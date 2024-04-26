document.addEventListener('DOMContentLoaded', () => {
async function getData() {
  try{
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
   
    if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
  
      const name =  data.drinks[0].strDrink;
      const glass = data.drinks[0].strGlass;

      const message = `\n${name}\nserved in a\n${glass}`;
      console.log(message);

      document.getElementById("name").innerText = message;
      if(glass == "Highball glass"){
        document.getElementById('glass').innerHTML = "yay"
      }
    }
    
    console.log(response.status);
    console.log(response.statusText);
  }
  catch(err){
    console.log("something is wrong. " + err);
  }
  }
  document.getElementById('pour').addEventListener('click', getData);

  getData();
  
});


 
  
  