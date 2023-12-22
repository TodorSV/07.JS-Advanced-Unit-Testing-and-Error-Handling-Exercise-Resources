function validate() {
  document.getElementById("company").addEventListener("change", (e) => {
    let companyInfo = document.getElementById("companyInfo");
    document.getElementById("company").cheked == false
      ? (companyInfo.style.display = "none")
      : (companyInfo.style.display = "block");
  });
  document.getElementById("submit").addEventListener("click", onClick);

  function onClick(event) {
    event.preventDefault();
    const invalid = [];
    const checkBox = document.querySelector("#company");
    const userName = document.getElementById("username");

    if (!/^[A-Za-z0-9]{3,20}$/.test(userName.value)) invalid.push(userName);
    // /^[^@.]+@[^@]*\.[^@]+$/;
    const mailField = document.getElementById("email");

    if (!/^[^@.]+@[^@]*\.[^@]*$/.test(mailField.value)) invalid.push(mailField);
    const pass = document.getElementById("password");
    const confirmPass = document.getElementById("confirm-password");

    if (
      !/^[\w]{5,15}$/.test(pass.value) ||
      confirmPass.value !== pass.value ||
      confirmPass.value === ""
    )
      invalid.push(pass), invalid.push(confirmPass);

    if (checkBox.checked) {
      const companyId = document.getElementById("companyNumber");
      if (!/^[0-9]{4}$/.test(companyId.value)) invalid.push(companyId);
    }

    invalid.forEach((field) => (field.style.borderColor = "red"));
    !invalid.length
      ? (document.querySelector("#valid").style.display = "block")
      : (document.querySelector("#valid").style.display = "none");
  }
}
