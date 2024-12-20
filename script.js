let kilogramButton=document.getElementById("kilogram-button");
let ozButton=document.getElementById("oz-button");
let kilometerButton=document.getElementById("kilometer-button");
let gallonButton=document.getElementById("gallon-button");

kilogramButton.addEventListener("click",function(){
 document.getElementById("kilo-div").style.display="block";
 document.getElementById("unit-selector").style.display="none";
})
 
document.getElementById("kilo-submit").addEventListener("click",function(){
    let kiloInput=document.getElementById("kilo-input")
    let KiloInputRealValue=kiloInput.value
    let kiloValue=parseFloat(KiloInputRealValue)
     console.log(kiloValue)
    let result=kiloValue * 2.20462
     let kiloResult=document.getElementById("kilo-result")
    kiloResult.textContent=result + "pounds"
    console.log(result)
})

ozButton.addEventListener("click",function(){
    document.getElementById("litre-div").style.display="block";
    document.getElementById("unit-selector").style.display="none";
})

document.getElementById("litre-submit").addEventListener("click",function(){
    let litreInput=document.getElementById("litre-input");
    let litreInputRealValue=litreInput.value;
    let litreValue=parseFloat(litreInputRealValue)
    console.log(litreValue)
    let litreResult= litreValue * 33.814
    let litreResultFinal=document.getElementById("litre-result")
    litreResultFinal.textContent=litreResult + "oz"
    console.log(litreResult)
})

kilometerButton.addEventListener("click",function(){
    document.getElementById("kilometer-div").style.display="block";
    document.getElementById("unit-selector").style.display="none";
   })

   document.getElementById("kilometer-submit").addEventListener("click",function(){
      let kilometerInput=document.getElementById("kilometer-input");
      let kilometerInputRealValue=kilometerInput.value;
      let kilometerValue=parseFloat(kilometerInputRealValue)
      console.log(kilometerValue)
      let kilometerResult= kilometerValue * 1.609 
      let kilometerResultFinal=document.getElementById("kilometer-result")
      kilometerResultFinal.textContent=kilometerResult + "miles"
      console.log(kilometerResult)

   })

   gallonButton.addEventListener("click",function(){
    document.getElementById("gallon-div").style.display="block";
    document.getElementById("unit-selector").style.display="none";
   })

   document.getElementById("gallon-submit").addEventListener("click",function(){
    let gallonInput=document.getElementById("gallon-input");
    let gallonInputRealValue=gallonInput.value;
    let gallonValue=parseFloat(gallonInputRealValue)
    console.log(gallonValue)
    let gallonResult= gallonValue * 3.785
    let gallonResultFinal=document.getElementById("gallon-result")
    gallonResultFinal.textContent=gallonResult + "litres"
    console.log(gallonResult)

 })