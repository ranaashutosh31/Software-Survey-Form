const str_t = document.querySelector(".strt");
const qsn_1 = document.querySelector(".opt1");
const qsn_2 = document.querySelector(".opt2");
const qsn_3 = document.querySelector(".opt3");
const qsn_4 = document.querySelector(".opt4");
const qsn_5 = document.querySelector(".opt5");
const qsn_6 = document.querySelector(".opt6");
const qsn_7 = document.querySelector(".opt7");
const qsn_8 = document.querySelector(".opt8");
const qsn_9 = document.querySelector(".opt9");
const b_k1 = document.querySelector(".bk1");
const b_k2 = document.querySelector(".bk2");
const b_k3 = document.querySelector(".bk3");
const b_k4 = document.querySelector(".bk4");
const b_k5 = document.querySelector(".bk5");
const b_k6 = document.querySelector(".bk6");
const b_k7 = document.querySelector(".bk7");
const b_k8 = document.querySelector(".bk8");
const b_k9 = document.querySelector(".bk9");
const sbmt = document.querySelector(".submt");

const s = document.querySelector(".info");
const q1 = document.querySelector(".qsn1");
const q2 = document.querySelector(".qsn2");
const q3 = document.querySelector(".qsn3");
const q4 = document.querySelector(".qsn4");
const q5 = document.querySelector(".qsn5");
const q6 = document.querySelector(".qsn6");
const q7 = document.querySelector(".qsn7");
const q8 = document.querySelector(".qsn8");
const q9 = document.querySelector(".qsn9");
const q10 = document.querySelector(".qsn10");
const tnq = document.querySelector(".thnq");

const fnam=document.getElementById('fname');
const emal=document.getElementById('email');
const snam=document.getElementById('sname');

//next and back button

str_t.addEventListener("click",function(){
    if(fnam.value==0){
        alert('First name cannot be empty.');
    }
    else if(emal.value==0){
        alert('E-mail cannot be empty.');
    }
    else if(snam.value==0){
        alert('Software name cannot be empty.');
    }
    else{
        s.style.display="none";
        q1.style.display="block";
    } 
});
b_k1.addEventListener("click",function(){
    q1.style.display="none";
    s.style.display="block";
});
qsn_1.addEventListener("click",function(){
    q1.style.display="none";
    q2.style.display="block";
});
b_k2.addEventListener("click",function(){
    q2.style.display="none";
    q1.style.display="block";
});
qsn_2.addEventListener("click",function(){
    q2.style.display="none";
    q3.style.display="block";
});
b_k3.addEventListener("click",function(){
    q3.style.display="none";
    q2.style.display="block";
});
qsn_3.addEventListener("click",function(){
    q3.style.display="none";
    q4.style.display="block";
});
b_k4.addEventListener("click",function(){
    q4.style.display="none";
    q3.style.display="block";
});
qsn_4.addEventListener("click",function(){
    q4.style.display="none";
    q5.style.display="block";
});
b_k5.addEventListener("click",function(){
    q5.style.display="none";
    q4.style.display="block";
});
qsn_5.addEventListener("click",function(){
    q5.style.display="none";
    q6.style.display="block";
});
b_k6.addEventListener("click",function(){
    q6.style.display="none";
    q5.style.display="block";
});
qsn_6.addEventListener("click",function(){
    q6.style.display="none";
    q7.style.display="block";
});
b_k7.addEventListener("click",function(){
    q7.style.display="none";
    q6.style.display="block";
});
qsn_7.addEventListener("click",function(){
    q7.style.display="none";
    q8.style.display="block";
});
b_k8.addEventListener("click",function(){
    q8.style.display="none";
    q7.style.display="block";
});
qsn_8.addEventListener("click",function(){
    q8.style.display="none";
    q9.style.display="block";
});
b_k9.addEventListener("click",function(){
    q9.style.display="none";
    q8.style.display="block";
});
qsn_9.addEventListener("click",function(){
    q9.style.display="none";
    q10.style.display="block";
});
// FINAL SUBMIT
function validateForm() 
        {var s= confirm('Do you want to submit?');
         if(s==true)
         {alert("Your Form has been submitted successfully. Our team is working with full efforts to improve your experience. Thank You!");
          document.myForm.reset();
          event.preventDefault();}
         else{event.preventDefault();
             }
        }
// FINAL RESET
function clicks(e)
        {
            var r= confirm('Do you want to reset?');
            if(r==true){
                q10.style.display="none";
              s.style.display="block";
              document.getElementById("formj").reset();
            }
            else{
                e.preventDefault();
            }
        }
