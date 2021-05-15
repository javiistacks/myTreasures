// async function postFormHandler(event) {
//     event.preventDefault();
  

//     // const image = document.querySelector('#photos');
//     const name = document.querySelector('#name').value.trim();
//     const shoe_size = document.querySelector('#shoe_size').value.trim();
//     const price_paid = document.querySelector('#price_paid').value.trim();
//     const resell_value = document.querySelector('#resell_value').value.trim();
  
//     // console.log(document.getElementById("photos").files[0])

//     // var formData = await new FormData();
//     // formData.append("hello", "hello")
//     // await formData.append("photos", document.getElementById("photos").files[0])
//     // console.log(formData)


//     if (formData && name && shoe_size && price_paid && resell_value) {
//       const response = await fetch('/shoes/', {
//         method: 'post',
//         body: JSON.stringify({
//           formData,
//           name,
//           shoe_size,
//           price_paid,
//           resell_value
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }

//   document.querySelector('#createshoeform').addEventListener('submit', postFormHandler);

async function postFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const shoe_size = document.querySelector('#shoe_size').value.trim();
  const price_paid = document.querySelector('#price_paid').value.trim();
  const resell_value = document.querySelector('#resell_value').value.trim();

  if (name && shoe_size && price_paid && resell_value) {
    const response = await fetch('/shoes/', {
      method: 'post',
      body: JSON.stringify({
        name,
        shoe_size,
        price_paid,
        resell_value
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#createshoeform').addEventListener('submit', postFormHandler);