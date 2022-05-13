//A function that changes the color of the heart-icon using javascript style property.
function colorChange(elm){
        if(elm.style.color=="black"){
        return elm.style.color="red";
        }
        else{
            return elm.style.color="black";
        }
};

//Manipulating an achor tag attribute in html using 'setAttribute' method.
const carValuatorLink=document.getElementById("scriptOne");
carValuatorLink.setAttribute("href","https://www.autotrader.co.za/car-valuation");
carValuatorLink.setAttribute("target","_blank");

const financeCalculatorLink=document.getElementById("scriptTwo");
financeCalculatorLink.setAttribute("href","https://www.wesbank.co.za/home/calculate");
financeCalculatorLink.setAttribute("target","_blank");

const carFinanceLink=document.getElementById("scriptThree");
carFinanceLink.setAttribute("href","https://www.nedbank.co.za/content/nedbank/desktop/gt/en/personal/loans/vehicle-finance-mfc.html");
carFinanceLink.setAttribute("target","_blank");

const carInsuranceLink=document.getElementById("scriptFour");
carInsuranceLink.setAttribute("href","https://www.oldmutualinsurance.co.za/products/car-insurance?UCID=OMSTIPERFMAX0001&gclid=CjwKCAjwopWSBhB6EiwAjxmqDTfXzUVD1uXL4vE5RSMv2YiK4BoTlaHGwOiXgJ0x6OteMi7hlzc8bRoCM04QAvD_BwE");
carInsuranceLink.setAttribute("target","_blank");

const carVehicleCheckLink=document.getElementById("scriptFive");
carVehicleCheckLink.setAttribute("href","https://www.vehiclecheck.co.za/");
carVehicleCheckLink.setAttribute("target","_blank");

//defining a function that prints an error message
function printError(elemID,message){
    document.getElementById(elemID).innerHTML=message;
}

//creating a function that validates userdata.
function validateForm(){
    //retrieving values from html 'form' elements through their input names.
    const name=document.form.username.value;
    const password=document.form.credentials.value;


//Assigning 'error variables' with a default value.
/*The below variables will give an error when used in a conditional statemet should there be no user data entered.*/
    const nameErr=true;
    const passwordErr=true;  

//validating userName .
    if(name==""){                                              /*checking if the mandatory fields are filled*/
     printError("nameErr","Please fill in your username");
                 }
            else{                                                       
            let regex=/^[a-z]+\d*$/gi;                             /*checking if the user has entered  valid data using regular expressions*/
                if(regex.test(name)===false){
                    printError("nameErr","Please provide valid username");
                                         
                            }
                    else{
                         printError("nameErr","") ;                    /* this will not return an error if the data entered by a user is valid*/
                         nameErr=false; 
                        }
                }
//validating password.
    if(password==""){                                              /*checking if the mandatory fields are filled*/
        printError("passwordErr","Please fill in your password");
                    }
            else{                                                       
            let regex=/[a-zA-Z\d]/gi;                             /*checking if the user has entered  valid data using regular expressions*/
                if(regex.test(password)===false){
                    printError("passwordErr","Please provide a valid password");
                                                        }
                    else{
                        printError("passwordErr","");               /* this will not return an error if the data entered by a user is valid*/
                        passwordErr=false;
                        }
                }

//preventing the form from being submitted if there are any errors.

    if(nameErr==true||passwordErr==true){
            return false;
            }
            else{
                return true;
            }
};

const formData=document.querySelector('form');
formData.addEventListener('click',validateForm);

//A function to perfom a filtering operation.
function searchFilter(){
    let searchBoxValue=document.getElementById('searcher').value;
    let cards=document.querySelectorAll('.card');
      for(let i=0;i<cards.length;i++){
        if(cards[i].textContent.toLowerCase().includes(searchBoxValue.toLowerCase())){
            cards[i].classList.remove('hidden');
         }
        else{
             cards[i].classList.add('hidden');
        }
     }
};

//An eventlistener that will 'listen' to any user inputs in order to invoke the 'searchFilter' function.
document.getElementById('searcher').addEventListener('input',searchFilter);
