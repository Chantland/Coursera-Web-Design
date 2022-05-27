var checked = false;
function billingFunction() {
  if (checked) {
    checked = false
    document.getElementById("billingName").value = ""; 
    document.getElementById("billingZip").value = "";
    
  } else {
    checked = true
    var input_zip = document.getElementById("shippingZip").value;
    var input_name = document.getElementById("shippingName").value;
    document.getElementById("billingName").value = input_name; 
    document.getElementById("billingZip").value = input_zip;
}
}