const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', (e) => {
   e.preventDefault()

   const height = parseInt(document.querySelector('#height').value);

   const weight = parseInt(document.querySelector('#weight').value);

   const result = document.querySelector('#result');

   
   const validate = document.querySelector('#validate')

   if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = 'Please enter a valid height';
   }
   else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = 'Please enter a valid weight';
   }
   else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    // show the result
    result.innerHTML = `<span>${bmi}</span>`

    if(bmi < 18.6) {
      validate.innerHTML = '<span>Under weight</span>'
    }
    else if(bmi >= 18.6 && bmi <= 24.9 ) {
       validate.innerHTML = '<span>Normal weight</span>'
    }
    else {
       validate.innerHTML = '<span>Over weight</span>'
    }
   }

  
})