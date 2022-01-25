var currentPrice = new XMLHttpRequest();
currentPrice.open('GET', 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true', true);
currentPrice.onreadystatechange = function(){
    if(currentPrice.readyState == 4){
     
      var ticker = JSON.parse(currentPrice.responseText);
      var price = ticker.market_data.current_price['usd'];
      console.log(price);
    };
    
  };