document.getElementById('ContactForm').addEventListener('submit', function(event) {
    event.preventDefault();
     const name = document.getElementById('name').value.trim();
  const emailid = document.getElementById('emailid').value.trim();
     const phone = document.getElementById('phone').value.trim();
     const requirement = document.getElementById('requirement').value.trim();
     const brief = document.getElementById('brief').value.trim();
     const errorElem = document.getElementById('error');

     const indiaPattern = /^\+91[6-9]\d{9}$/;
    const singaporePattern = /^\+65[689]\d{7}$/;
    const europePattern = /^\+(3[0-9]|4[0-9]|5[0-9])\d{7,}$/;

    if (!indiaPattern.test(phone) && !singaporePattern.test(phone) && !europePattern.test(phone)) {
        errorElem.textContent = 'Phone number must be from India (+91), Singapore (+65), or Europe (+3X/+4X/+5X).';
         return;
     }

     errorElem.textContent = '';
     alert('Form submitted successfully! An email will be sent shortly.');

//     // Simulated email sending (backend required for real email functionality)
//     console.log(`Sending email to ${email} from trialdevelopments@outlook.com`);
 });
// email using api
emailjs.init("trialdevelopments@outlook.com"); 
//EmailJS user ID

document.getElementById("ContactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_f1a22q8", "template_igqwmdo", {
        name: document.getElementById("name").value,
        email: document.getElementById("emailid").value,
        requirement: document.getElementById("requirement").value,
        brief: document.getElementById("brief").value
    })
    .then(response => {
        alert("Email sent successfully!");
    }, error => {
        alert("Failed to send email.");
    });
});
//closing email using api

// for sendmail basis data input in form using code suggested on stack overflow
// function submitForm(form) {
//     window.open("mailto:someone@example.com?subject=Test%20Email&body=First%20Name:%20" + form.firstname.value + "%20Last%20Name:" + form.lastname.value);
//     return false; 
    /* cancel submit or else page reloads */
//   }
  
//   <form onsubmit="return submitForm(this);">
//     <input type="text" name="firstname" placeholder="First Name" />
//     <input type="text" name="lastname" placeholder="Last Name" />
//     <button type="submit" class="submit"><i class="material-icons md-24">play_circle_filled</i></button>
//   </form>
// closing for sendmail basis data input in form using code suggested on stack overflow