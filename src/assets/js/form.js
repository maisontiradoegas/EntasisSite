const submitForm = (formID) => {
    //Selecting Form
    const myForm = document.getElementById(formID);

    //Event Listener
    myForm.addEventListener('submit', (e) => {
    
    //Stop the form from submitting since we’re handling that with AJAX.
    e.preventDefault();
    
    //Inits
    const formData = new FormData(myForm);
    let jsonObject = {};

    //FormData to JSON Conversion
    for (const [key, value] of formData.entries()) {
        jsonObject[key] = value;
    }

    //Send Request
    fetch('https://signup.entasistech.com/api/form', {
      method: 'post',
      body: JSON.stringify(jsonObject),
      mode: 'no-cors'
    }).then((res) => {
        $("#alert_success").show()
    }).catch((error)=> {
        $("#alert_failure").show()
        console.log('The Error is: ', error);
    })
  })
}

