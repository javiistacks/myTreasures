async function postFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const shoe_size = document.querySelector('#shoe_size').value.trim();
  const price_paid = document.querySelector('#price_paid').value.trim();
  const resell_value = document.querySelector('#resell_value').value.trim();
  const notes = document.querySelector('#notes').value.trim();

  if (name && shoe_size && price_paid && resell_value && pic_url) {
    const response = await fetch('/shoes/', {
      method: 'post',
      body: JSON.stringify({
        name,
        shoe_size,
        price_paid,
        resell_value,
        pic_url,
        notes
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