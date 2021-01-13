function calculate(){
  let result,inputExpression;

  inputExpression=prompt('Type an expression (numbers and +-*/ operators)');

  if(inputExpression===null||inputExpression===''){
    alert('Nothing was entered');
    again();
  } else{
    //invalid characters, only +-\* and numbers
    result = inputExpression.match(/[^-\d+/*]/gim);
    if(result!==null){
      alert('Error input due to the following characters: '+ result);
      again();
    } else{
      try {
        let output = eval(inputExpression);
        if(isNaN(output)){
          alert('Zero division error');
        } else{
          alert(output);
        }
        again();
      } catch (err) {
        alert(err);
        again();
      }
    }
  }
}

function again() {
  let userRespond = prompt('Do you want to input expression again? type y or yes');
    if (userRespond==='y'||userRespond==='yes'){
      calculate();
    } else {
      alert('See you later!');
    }
}

calculate();