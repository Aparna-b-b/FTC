function toggleFields() {
    const agroDealingType = document.getElementById('agri-dealing-type').value;
    document.getElementById('land-type-container').style.display = agroDealingType === 'trading' ? 'block' : 'none';
    document.getElementById('selling-fields').style.display = agroDealingType === 'selling' ? 'block' : 'none';
    document.getElementById('search-button').style.display = agroDealingType === 'trading' ? 'block' : 'none';
    document.getElementById('upload-button').style.display = agroDealingType === 'selling' ? 'block' : 'none';
    document.getElementById('back-button').style.display = agroDealingType === 'trading' ? 'block' : 'none';
}

function submitForm() {
    alert("Form submitted successfully!");
}

function searchFarmers() {
    // Redirect to market.html
    window.location.href = "market.html";
}

function goBack() {
    window.location.href = "dashboard.html";
}