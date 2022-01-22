const currentPrice = new XMLHttpRequest;
currentPrice.open('GET', 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true', true);
currentPrice.onreadystatechange = function(){
    if(currentPrice.readyState == 4){
     
      var ticker = JSON.parse(currentPrice.responseText);
      var price = ticker.market_data.current_price['usd'];
      document.getElementById('btc').innerHTML = "$ " + price;   
    };
  };

const API_URL_dolar = 'https://s3.amazonaws.com/dolartoday/data.json';
const xml = new XMLHttpRequest;
function onRequestHandler(){
  if(this.readyState == 4){
    const data = JSON.parse(this.response)
    const priceUSD = data.USD.sicad1
    var tasa = document.getElementById('bss').value=priceUSD;
    console.log(priceUSD)
  }
}
xml.addEventListener('load', onRequestHandler);
xml.open('GET', API_URL_dolar);
xml.send();
  
   
    
  // entrada input 1 con salida en input 2
  function input1(){
  var ticker = JSON.parse(currentPrice.responseText);
  var price = ticker.market_data.current_price['usd'];
  var input = document.getElementById("valor1").value;
  var inpuT = document.getElementById('valor2').value
  var p= input*1;
  var coin = document.getElementById('coin').value;
  var coin2 = document.getElementById('coin2').value;
  var tasa = document.getElementById('bss').value;
  if(coin == "BTC" && coin2 == "USD" ){ /* BTC a Dolar */
  document.getElementById('valor2').value= (p * price).toFixed(3);
  }
  
  else if(coin == "BTC" && coin2 == "BsS"){ /* BTC a Bolivar */
    document.getElementById('valor2').value =  tasa * (p * price).toFixed(2);
  }

  else if(coin == "USD" && coin2 == "BTC" ){ /* Dolar a BTC */
    document.getElementById('valor2').value= (p / price).toFixed(8);
}
else if(coin == "USD" && coin2 == "BsS" ){ /* Dolar a Bolivar */
  document.getElementById('valor2').value= (p * tasa).toFixed(3);
}
  else if(coin == "BsS" && coin2 == "USD"){ /* bolivar a Dolar */
  document.getElementById('valor2').value = (p / tasa ).toFixed(2);
  }

  else if(coin == "BsS" && coin2 == "BTC"){ /* bolivar a BTC */
    document.getElementById('valor2').value = ((p / tasa )/price).toFixed(8);
  }

  else if (coin == coin2){
    document.getElementById('valor2').value = p 
  }

} 
// entrada input 2 con salida en input 1
function input2(){
  var ticker = JSON.parse(currentPrice.responseText);
  var price = ticker.market_data.current_price['usd'];
  var input = document.getElementById("valor2").value;
  var p= input*1;
  var coin = document.getElementById('coin').value;
  var coin2 = document.getElementById('coin2').value;
  var tasa = document.getElementById('bss').value;
  if(coin == "BTC" && coin2 == "USD" ){ /* BTC a Dolar */
    document.getElementById('valor1').value= (p / price).toFixed(3);
    }
    
    else if(coin == "BTC" && coin2 == "BsS"){ /* BTC a Bolivar */
      document.getElementById('valor1').value =  ((p/tasa) / price).toFixed(8);
    }
  
    else if(coin == "USD" && coin2 == "BTC" ){ /* Dolar a BTC */
      document.getElementById('valor1').value= (p * price).toFixed(8);
  }
  else if(coin == "USD" && coin2 == "BsS" ){ /* Dolar a Bolivar */
    document.getElementById('valor1').value= (p / tasa).toFixed(3);
  }
    else if(coin == "BsS" && coin2 == "USD"){ /* bolivar a Dolar */
    document.getElementById('valor1').value = (p * tasa ).toFixed(2);
    }
  
    else if(coin == "BsS" && coin2 == "BTC"){ /* bolivar a BTC */
      document.getElementById('valor1').value = ((p * tasa )*price).toFixed(8);
    }
  
    else if (coin == coin2){
      document.getElementById('valor1').value = p 
    }
} 
  

currentPrice.send();