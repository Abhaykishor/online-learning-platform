// export const Payment= () => {

//     var options = {
//         "key": "rzp_test_trb7SopabtgZsI", // Enter the Key ID generated from the Dashboard
//         "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//         "currency": "",
//         "name": "JustDSA", //your business name
//         "description": "Course Charges",
//         "image": "https://example.com/your_logo",
//         //"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//         "handler": function (response){
//             alert(response.razorpay_payment_id);
//             alert(response.razorpay_order_id);
//             alert(response.razorpay_signature)
//         },
//         "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
//             "name": "Gaurav Kumar", //your customer's name
//             "email": "gaurav.kumar@example.com", 
//             "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
//         },
//         "notes": {
//             "address": "Razorpay Corporate Office"
//         },
//         "theme": {
//             "color": "#3399cc"
//         }
    
//     };

//     var rzp1 = new Payment(options);
//     rzp1.on('payment.failed', function (response){
//             alert(response.error.code);
//             alert(response.error.description);
//             alert(response.error.source);
//             alert(response.error.step);
//             alert(response.error.reason);
//             alert(response.error.metadata.order_id);
//             alert(response.error.metadata.payment_id);
//     });
//     document.getElementById('rzp-button1').onclick = function(e){
//         rzp1.open();
//         e.preventDefault();
//     }

// }

// src/RazorpayComponent.jsx
// import React from 'react';

const RazorpayComponent = () => {
    const loadRazorpay = async () => {
      const res = await fetch('http://localhost:5000/razorpay/order', {
        method: 'POST',
      });
      const data = await res.json();
  
      const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: data.amount,
        currency: data.currency,
        name: 'Your Company Name',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: data.id,
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#F37254',
        },
        modal: {
          ondismiss: function () {
            alert('Payment Cancelled');
          },
        },
      };
  
      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert(`Payment Failed! Error: ${response.error.description}`);
      });
      rzp1.open();
    };
  
    return (
      <button onClick={loadRazorpay}>
        Pay with Razorpay
      </button>
    );
  };
  
  export default RazorpayComponent;
  