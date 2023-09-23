
function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  let names = ['Khuu', 'Eric', 'Greg'];
  let eventName = 'surprise';
  let result = writeCards(names, eventName);
  console.log(result);

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }