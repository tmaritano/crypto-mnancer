//Input numbers validation
window.addEventListener("load", function() {
  form.ammount.addEventListener("keypress", inputNumber, false);
});

//Input numbers validation
const inputNumber = (e) => {
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  };
};

//IVA
const iva = x => {return x * 0.21};

//Bank transfers
const sepa = x => {x - 1};
const visaFee = x => {x * 0.18};

//FUNCTION RETURN FINAL TAXES
const taxes = (a, b, c) => { return alert(((a - b) / c) + ' ' + selectedCrypto.value) }