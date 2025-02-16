const sampleData = [
    { product: 'Wheat', farmer: 'Rajesh Kumar', location: 'Punjab', phone: '9876543210', price: 2200 },
      { product: 'Basmati Rice', farmer: 'Anil Sharma', location: 'Haryana', phone: '9123456789', price: 2500 },
      { product: 'Brown Rice', farmer: 'Suresh Verma', location: 'West Bengal', phone: '8012345678', price: 2000 },
      { product: 'Red Rice', farmer: 'Manoj Patel', location: 'Assam', phone: '7012345678', price: 2700 },
      { product: 'Black Rice', farmer: 'Vikas Rana', location: 'Manipur', phone: '6012345688', price: 3200 },
  
      { product: 'Wild Rice', farmer: 'Sandeep Yadav', location: 'Jharkhand', phone: '7712345678', price: 3500 },
      { product: 'Quinoa', farmer: 'Amit Tiwari', location: 'Madhya Pradesh', phone: '6612345678', price: 2400 },
      { product: 'Sorghum (Jowar)', farmer: 'Ravi Kumar', location: 'Maharashtra', phone: '9912345678', price: 1800 },
      { product: 'Barley', farmer: 'Ganesh Patil', location: 'Rajasthan', phone: '8812345678', price: 1400 },
      { product: 'Oats', farmer: 'Arun Singh', location: 'Uttarakhand', phone: '7712345699', price: 2000 },
  
      { product: 'Buckwheat', farmer: 'Mahesh Naik', location: 'Himachal Pradesh', phone: '5512345678', price: 2300 },
      { product: 'Foxtail Millet', farmer: 'Rahul Desai', location: 'Karnataka', phone: '3312345678', price: 1600 },
      { product: 'Little Millet', farmer: 'Arun Kumar', location: 'Tamil Nadu', phone: '2212345678', price: 1400 },
      { product: 'Kodo Millet', farmer: 'Ramesh Chatterjee', location: 'Chhattisgarh', phone: '1112345678', price: 1500 },
      { product: 'Barnyard Millet', farmer: 'Hari Prasad', location: 'Odisha', phone: '9987654321', price: 1300 },
  
      { product: 'Proso Millet', farmer: 'Suresh Bansal', location: 'Andhra Pradesh', phone: '9876543211', price: 1700 },
      { product: 'Finger Millet (Ragi)', farmer: 'Amit Tiwari', location: 'Telangana', phone: '8765432109', price: 1900 },
      { product: 'Pearl Millet (Bajra)', farmer: 'Ravi Kumar', location: 'Gujarat', phone: '7654321098', price: 1200 },
      { product: 'Teff', farmer: 'Manoj Sharma', location: 'Meghalaya', phone: '6543210987', price: 3600 },
      { product: 'Spelt', farmer: 'Deepak Yadav', location: 'Punjab', phone: '5432109876', price: 2500 },
  
      { product: 'Farro', farmer: 'Anil Kumar', location: 'Uttar Pradesh', phone: '4321098765', price: 2800 },
      { product: 'Freekeh', farmer: 'Rajeev Patel', location: 'Maharashtra', phone: '3210987654', price: 2700 },
      { product: 'Emmer Wheat', farmer: 'Sunil Mehra', location: 'Rajasthan', phone: '2109876543', price: 2100 },
      { product: 'Kamut', farmer: 'Vikas Rana', location: 'Madhya Pradesh', phone: '1098765432', price: 2600 },
      { product: 'Rye', farmer: 'Sandeep Yadav', location: 'West Bengal', phone: '9988776655', price: 2200 },
  
      { product: 'Triticale', farmer: 'Rahul Desai', location: 'Uttarakhand', phone: '8877665544', price: 2400 },
      { product: 'Durum Wheat', farmer: 'Ramesh Chatterjee', location: 'Bihar', phone: '7766554433', price: 2000 },
      { product: 'Einkorn Wheat', farmer: 'Prakash Jha', location: 'Jharkhand', phone: '6655443322', price: 2900 },
      { product: 'Broken Rice', farmer: 'Hari Prasad', location: 'Tamil Nadu', phone: '5544332211', price: 1700 },
      { product: 'Jasmine Rice', farmer: 'Arun Kumar', location: 'Kerala', phone: '4433221100', price: 2800 },
  
      { product: 'Sticky Rice', farmer: 'Dinesh Mehta', location: 'Assam', phone: '3322110099', price: 2700 },
      { product: 'Arborio Rice', farmer: 'Mahesh Naik', location: 'Karnataka', phone: '2211009988', price: 2600 },
      { product: 'Long Grain Rice', farmer: 'Vikram Soni', location: 'Haryana', phone: '1100998877', price: 2500 },
      { product: 'Medium Grain Rice', farmer: 'Suraj Patel', location: 'Andhra Pradesh', phone: '0099887766', price: 2300 },
      { product: 'Short Grain Rice', farmer: 'Harish Rawat', location: 'Madhya Pradesh', phone: '9012345678', price: 2100 },
  
      { product: 'Brown Teff', farmer: 'Rajesh Kumar', location: 'Himachal Pradesh', phone: '8123456789', price: 3800 },
      { product: 'White Teff', farmer: 'Anil Sharma', location: 'Manipur', phone: '7123456789', price: 4000 },
      { product: 'Italian Millet', farmer: 'Suresh Verma', location: 'Nagaland', phone: '6123456789', price: 1700 },
      { product: 'Canary Seed', farmer: 'Manoj Patel', location: 'Goa', phone: '5123456789', price: 1400 },
      { product: 'Job’s Tears', farmer: 'Vikas Rana', location: 'Mizoram', phone: '4123456789', price: 3200 },
  
      { product: 'Purple Rice', farmer: 'Sandeep Yadav', location: 'Tripura', phone: '3123456789', price: 3100 },
      { product: 'Wehani Rice', farmer: 'Amit Tiwari', location: 'Sikkim', phone: '2123456789', price: 2900 },
      { product: 'Kokuho Rice', farmer: 'Ravi Kumar', location: 'Arunachal Pradesh', phone: '1123456789', price: 2800 },
      { product: 'Golden Rice', farmer: 'Ganesh Patil', location: 'Ladakh', phone: '0123456789', price: 3500 },
      { product: 'Bomba Rice', farmer: 'Arun Singh', location: 'Delhi', phone: '9786543210', price: 3300 }
  ];
  
    function searchProducts() {
      const productName = document.getElementById('product-name').value.trim().toLowerCase();
      const resultsBody = document.getElementById('results-body');
      resultsBody.innerHTML = '';
  
      const filteredResults = sampleData.filter(item => item.product.toLowerCase().includes(productName));
  
      filteredResults.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><input type="radio" name="product-select" onclick='showDetails(${JSON.stringify(item)})'></td>
          <td>${item.product}</td><td>${item.farmer}</td>
          <td>${item.location}</td><td>${item.phone}</td>
          <td>₹${item.price.toLocaleString()}</td>`;
        resultsBody.appendChild(row);
      });
  
      if (filteredResults.length === 1) {
        showDetails(filteredResults[0]);
      }
    }
  
    function showDetails(item) {
      document.getElementById('product-details').style.display = 'block';
      document.getElementById('detail-product').innerText = item.product;
      document.getElementById('detail-farmer').innerText = item.farmer;
      document.getElementById('detail-location').innerText = item.location;
      document.getElementById('detail-phone').innerText = item.phone;
      document.getElementById('detail-price').innerText = item.price;
    }
  
    function buyProduct() {
      const product = document.getElementById('detail-product').innerText;
      const farmer = document.getElementById('detail-farmer').innerText;
      const price = document.getElementById('detail-price').innerText;
  
      // Fixed URL for redirection (corrected 'paymentmentmode.html' to 'paymentmode.html')
      window.location.href = `paymentmode.html?product=${encodeURIComponent(product)}&farmer=${encodeURIComponent(farmer)}&price=${encodeURIComponent(price)}`;
    }
  
    function goBack() {
      window.location.href = 'dashboard.html';
    }