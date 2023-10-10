let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let firsttime= document.getElementsByName("firsttime");
let suggested = document.getElementsByName("suggested");
let rating= document.getElementsByName("rating");
let suggestion = document.getElementById("suggestions");
let errormessage = document.getElementById("errormessage");
let datadisppopup = document.querySelectorAll(".datadisppopup");
let datadisppopup1 = document.getElementById("datadisppopup");
let Proffesion = document.getElementById("Proffesion");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let dob = document.getElementById("dob");
let gender= document.getElementsByName("gender");
let country= document.getElementById("country");
const regex = /^[a-zA-Z-'\s]+$/;
function submitsurveydata() 
{
    event.preventDefault();
    if( validationform(fname)  && validationform(lname) && validationform(Proffesion) && validateoptions(gender) && validateoptions(firsttime)  && validateoptions(suggested) && validateoptions(rating)  && validationform(suggestion))
    {
        alert("Your response saved successfully")
        datadisppopup[0].children[2].innerText="First Name : "+fname;
        datadisppopup[0].children[3].innerText="Last Name : "+lname;
        datadisppopup[0].children[4].innerText="Is this the first time your are using our product and service? : "+firsttime;
        datadisppopup[0].children[5].innerText="Would you suggestion to your friend and colleague? : "+suggested;
        datadisppopup[0].children[6].innerText="How satisfied are you with our comapny overall? : "+rating;
        datadisppopup[0].children[7].innerText="Gender : "+gender;
        datadisppopup[0].children[8].innerText="Email : "+email.value;
        datadisppopup[0].children[9].innerText="Proffesion : "+Proffesion;
        datadisppopup[0].children[10].innerText="Mobile : " + country.value+mobile.value;
        datadisppopup[0].children[11].innerText="DOB : "+dob.value;
        // datadisppopup[0].children[12].innerText="Country : "+country.value;
        datadisppopup1.style.display="block";
        return true;
    }
    else
    {
        return false;
    }
}


function validationform(inputfieldvalues)
{
    if ( inputfieldvalues.value !== '' && inputfieldvalues.value.match(regex) ) 
    {
        if(inputfieldvalues.id == "fname")
        {
            fname= inputfieldvalues.value;
        }
        else if(inputfieldvalues.id == "lname")
        {
            lname= inputfieldvalues.value;
        }
        else if(inputfieldvalues.id == "Proffesion")
        {
          Proffesion= inputfieldvalues.value;
        }
        else
        {
            suggestion= inputfieldvalues.value;
        }
        return true;
    }
    else
    {
        errormessage.style.display="block";
        if(inputfieldvalues.id == "fname")
       {
            errormessage.innerText= "Please enter a valid first name.";
       }
       else if(inputfieldvalues.id == "lname")
       {
            errormessage.innerText= "Please enter a valid last name."
       }
        else if(inputfieldvalues.id == "Proffesion")
       {
            errormessage.innerText= "Please enter a valid proffesion";
       }
       else
       {
            errormessage.innerText= "Kindly provide sugeestions to improve our self"
       }
       return false;
    }
}

function  validateoptions(k)
{
    let S = k.length;    
    for (let i = 0; i < S; i++) {
        if (k[i].checked) {
          let r = k[i].id;
          if(k[i].id === "firsttime")
          {
            firsttime = k[i].value;
            return true;
          }
          else if(k[i].id === "suggested")
          {
            suggested = k[i].value;
            return true;
          }
          else if(k[i].id === "gender")
          {
            gender = k[i].value;
            return true;
          }
          else
          {
            rating = k[i].value;
            return true;
          }
        } 
        else 
        {
          errormessage.style.display = 'block';
          errormessage.innerText = 'Please select the option provided';
        }
      }      
}
function closepopup()
{
    let form = document.getElementById("surveyform");
    console.log("closepopup called");
    if (datadisppopup)
    {
        datadisppopup1.style.display = 'none';
    }
    form.reset()
}
