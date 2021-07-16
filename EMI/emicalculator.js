
    var slider1 = document.getElementById("myRange1");
    var output1 = document.getElementById("demo1");
    output1.innerHTML = slider1.value;
    
   slider1.oninput = function() {
     output1.innerHTML = this.value;
   }
   
   var slider2 = document.getElementById("myRange2");
   var output2 = document.getElementById("demo2");
   output2.innerHTML = slider2.value;
   
  slider2.oninput = function() {
    output2.innerHTML = this.value;
  }

  
  var slider3 = document.getElementById("myRange3");
  var output3 = document.getElementById("demo3");
  output3.innerHTML = slider3.value;
  
 slider3.oninput = function() {
   output3.innerHTML = this.value;
 }




  function emi(){
      let amt = document.getElementById("exampleFormControlInput1").value;
      let rate = document.getElementById('exampleFormControlInput2').value;
      let tenure = document.getElementById('exampleFormControlInput3').value;
      amt = amt * 100000;
      rate = rate/12/100;
      tenure = tenure*12;

        let emi = amt*rate*(    ((1+rate)**tenure)  /   (   (  (1+rate)**tenure) -1)     );
        emi = (Math.round(emi * 100) / 100).toFixed(2);

        alert("Your monthly EMI for "+ tenure + " months : "+ emi + " Rupees");

  }

  function reset(){
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("exampleFormControlInput2").value = "";
    document.getElementById("exampleFormControlInput3").value = "";
 }

