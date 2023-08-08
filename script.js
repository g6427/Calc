let displayValue = document.getElementById("output");

        function appendToDisplay(num){
            displayValue.value += num;
              
        }   

        function updateDisplay(){
            document.getElementById("output").innerHTML = displayValue;
        } 
 
        function deleteLast(){
            displayValue.value = displayValue.value.slice(0,-1);
           
        }

        function clearDisplay(){
            displayValue.value =" ";
        }
        function calculate(){
            try{
                displayValue.value = eval(displayValue.value);
            }    
            catch(error){
                alert("error");

            }
        }



            



