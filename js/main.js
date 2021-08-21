// memory part 
function getMemory(memory){
const memoryCost = document.getElementById('memory-cost');
memoryCost.innerText = memory;
const memoryPrice = memoryCost.innerText;
};


document.getElementById('memory1').addEventListener('click', function(){
  getMemory(0);
});

document.getElementById('memory2').addEventListener('click', function(){
  getMemory(180);
});

// storage part start
function getStorage(storage){
  const storageCost = document.getElementById('storage-cost');
  storageCost.innerText = storage;
  const storagePrice = storageCost.innerText;
  return storagePrice;
  }
  
document.getElementById('storage1').addEventListener('click', function(){
getStorage(0);
});

document.getElementById('storage2').addEventListener('click', function(){
  getStorage(100);
});

document.getElementById('storage3').addEventListener('click', function(){
  getStorage(180);
});


// delivery part
function getDelivery(delivery){
  const deliveryCost = document.getElementById('delivery-cost');
  deliveryCost.innerText = delivery;
  const deliveryPrice = deliveryCost.innerText;
  return deliveryPrice;
  }
  
document.getElementById('delivery1').addEventListener('click', function(){
  getDelivery(0);
});
document.getElementById('delivery2').addEventListener('click', function(){
  getDelivery(20);
});


// total part
const memoryTotal = getMemory(memoryPrice);
console.log(memoryTotal);
const totalPrice = document.getElementById('total-price');
const totalAmount = parseFloat(totalPrice.innerText);
console.log(totalAmount);



// promo part with onclick 
function promo(){
  const promoInput = document.getElementById('promo-input');
  const promoCode = promoInput.value;
  const totalCost = document.getElementById('total-cost');
  const totalCostTextAfterPromo = totalCost.innerText;
  const totalCostAfterPromo = parseFloat(totalCostTextAfterPromo);
  console.log(totalCost)
  if(promoCode == 'stevekaku'){
    promoInput.value = '';
    const totalDiscount = totalCostAfterPromo / 20;
    const totalNewCost =  totalCostAfterPromo - totalDiscount;
    totalCost.innerText = totalNewCost;
  }
  else{
   promoInput.value = '';
   alert('Please enter your valid promo code');
  }
};