async function newShoesHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#shoes').value.trim();
    const shoe_size = document.querySelector('#size').value.trim();
    const price_paid = document.querySelector('#retail-price').value.trim();
    const resell_value = document.querySelector('#resale-price').value.trim();
    const notes = document.querySelector('#notes').value.trim();

    const response = await fetch(`/api/shoes`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        shoe_size,
        price_paid,
        resell_value,
        notes
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/inventory');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-shoes').addEventListener('submit', newShoesHandler);