
// function for getting menu as soon as page is loaded on the  console.
window.addEventListener("load", getMenu);
async function getMenu(){
    try{
        const response = await fetch(`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`);
        let data = await response.json();
        console.log("Menu: ", data);
        startProcess();
    }catch(error){
        console.log('There was an error', error);
    }
}
 // user ordering and adding three burgers in the object
 function takeOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"orderOne" : "Burger Mania", "orderTwo" : "Chicken Burger", "orderThree":"Burger Buzz"}), 2500);
    });
}

 // function for showing order is preparing
 function orderPrep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"order_status":true, "paid":false}), 1500);
    });
}

// function showing status for paying order
function payOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"order_status":true, "paid":true}), 1000);
    });
}

// function for showing thank messages
function thankyouFnc(){
    alert(" thankyou for eating with us today!");
}


async function startProcess(){
    let order =  await takeOrder();
    console.log("order : ", order);
    let prepStatus = await orderPrep();
    console.log("orderStatus : ", prepStatus);
    let paymentStatus = await payOrder();
    console.log("paymentStatus : ", paymentStatus);
    thankyouFnc();
}

