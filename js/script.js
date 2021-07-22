function handleProduct(product, isIncrease) {

    const productCount = document.getElementById(product + '-count');
    const productCountToInt = parseInt(productCount.value);
    let productNewCount = productCountToInt;
    //   console.log(product);


    if (isIncrease == true) {
        productNewCount += 1;
        console.log(productNewCount);
        //productNewCount++;
    }
    if (!isIncrease && productNewCount > 0) {
        productNewCount = productNewCount - 1;
        console.log("decreased");
    }
    productCount.value = productNewCount;
    //productCount = productNewCount;
    let productTotal = 0;
    let subtotal = 0;
    calculateTotal(product);
    if (product == "mac") {

        productTotal = productNewCount * 1419;


        //subtotal += productTotal
    }



    else if (product == "iphone") {
        productTotal = productCountToInt * 999;
        //calculateTotal(product);

        //ptotal += productTotal
    }
    else if (product = "case") {
        productTotal = productCountToInt * 59;
        //calculateTotal(product);

    }
    //console.log(product);

    document.getElementById(product + '-price').innerText = "$" + productTotal;


}



//let totalTaxInt = 0;
function calculateTotal(product) {

    const phoneCount = getInputvalue('iphone');
    const macCount = getInputvalue('mac');
    const caseCount = getInputvalue('case');

    const totalCost = phoneCount * 999 + macCount * 1419 + caseCount * 59;
    document.getElementById("first-total").innerText = "$" + totalCost;
    let getTax = document.getElementById("total-tax").innerText;
    let totalTaxToInt = parseFloat(getTax);
    //console.log(totalTaxInt);
    const totalPrice = totalTaxToInt + totalCost;
    if(totalPrice>=5000){
        getTax = 50;
        document.getElementById("total-tax").innerText =  getTax;
        let totalTaxToInt = parseFloat(getTax);
        const totalPrice = totalTaxToInt + totalCost;
        document.getElementById("second-total").innerText = "$" + totalPrice;
        }
    else{
        document.getElementById("second-total").innerText = "$" + totalPrice;

    }
}

    

    //console.log(mainTotal);
    //console.log(parseInt(totalTax.innerHTML));

    //console.log(totalTaxInt);
  

    






function getInputvalue(product) {
    console.log(product);
    const data1 = document.getElementById(product +
        '-count');
    //console.log(data1.value);   
    const dataToInt = parseInt(data1.value);
    return dataToInt;
}