function store() {

  let id = Math.ceil(Math.random() * 10000000)

  let gift_card = {

    "id":id,

    "amount": {
      "rs": document.getElementById("rupees").value,
      "ps": document.getElementById("paise").value
    },

    "recipient_name": {
      "first": document.getElementById("rec_fname").value,
      "last": document.getElementById("rec_lname").value
    },

    "address": {
      "street": document.getElementById("street").value,
      "city": document.getElementById("city").value,
      "state": document.getElementById("state").value,
      "country": document.getElementById("country").value,
      "pin": document.getElementById("pincode").value
    },

    "buyer_name": {
      "first": document.getElementById("buyer_fname").value,
      "last": document.getElementById("buyer_lname").value
    },

    "phone": {
      "code": "+91",
      "number": document.getElementById("p1").value +
        document.getElementById("p2").value +
        document.getElementById("p3").value +
        document.getElementById("p4").value +
        document.getElementById("p5").value +
        document.getElementById("p6").value +
        document.getElementById("p7").value +
        document.getElementById("p8").value +
        document.getElementById("p9").value +
        document.getElementById("p10").value
    },

    "email": document.getElementById("email").value

  }

  if (localStorage.getItem("gift_card") == null) {

    var all_gift_cards = [];

  } else {

    var all_gift_cards = JSON.parse(localStorage.gift_card);

  }

  all_gift_cards.push(gift_card)

  localStorage.setItem("gift_card", JSON.stringify(all_gift_cards))

}

function get() {

  var gift_cards = JSON.parse(localStorage.gift_card)
  console.log(gift_cards);
  var tbody = document.getElementById("gift_cards")
  var df = document.createDocumentFragment();
  for (let i = 0; i < gift_cards.length; i++) {
    var tr = document.createElement('tr')

    var id = document.createElement('td')
    id.textContent = i + 1
    tr.appendChild(id)

    var buyers_name = document.createElement('td')
    buyers_name.textContent = gift_cards[i].buyer_name.first + " " + gift_cards[i].buyer_name.last;
    tr.appendChild(buyers_name)

    var address = document.createElement('td')
    let shipping_address = gift_cards[i].address.street + ", " +
      gift_cards[i].address.city + ", " +
      gift_cards[i].address.state + ", " +
      gift_cards[i].address.country + "-" +
      gift_cards[i].address.pin + ".";
    address.textContent = shipping_address
    tr.appendChild(address)

    var amount = document.createElement('td')
    let total_amount = gift_cards[i].amount.rs + "." +
      gift_cards[i].amount.ps;
    amount.textContent = total_amount
    tr.appendChild(amount)

    var phone = document.createElement('td')
    let full_number = gift_cards[i].phone.code + " " +
      gift_cards[i].phone.number;
    phone.textContent = full_number
    tr.appendChild(phone)

    df.appendChild(tr)

  }

  tbody.appendChild(df)

}

function validate_paise() {
  var paise = document.getElementById("paise");
  var value = new String(paise.value);
  var min = document.getElementById('paise_min_iv')
  var max = document.getElementById('paise_max_iv')
  let flags = JSON.parse(localStorage.demo_validation_flags);
  if (value < 0) {
    flags[0] = -1;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
    min.style.display = 'block';
  } else {
    flags[0] = 0;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
    min.style.display = 'none';
  }

  if (value > 100) {
    flags[1] = -1;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
    max.style.display = 'block';
  } else {
    flags[1] = 0;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
    max.style.display = 'none';
  }
}

function validate_first_name() {
  var name = document.getElementById("rec_fname");
  var value = new String(name.value);
  var div = document.getElementById('rec_fname_iv')
  let flags = JSON.parse(localStorage.demo_validation_flags);
  if (value.match("[0-9]")) {
    div.style.display = 'block';
    flags[2] = -1;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
  } else {
    div.style.display = 'none';
    flags[2] = 0;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
  }
}

function validate_last_name() {
  var name = document.getElementById("rec_lname");
  var value = new String(name.value);
  var div = document.getElementById('rec_lname_iv')
  let flags = JSON.parse(localStorage.demo_validation_flags);
  if (value.match("[0-9]")) {
    div.style.display = 'block';
    flags[3] = -1;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
  } else {
    div.style.display = 'none';
    flags[3] = 0;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
  }
}

function validate_pincode(){
  var pincode = document.getElementById("pincode");
  var value = new String(pincode.value);
  var div = document.getElementById('pincode_iv')
  let flags = JSON.parse(localStorage.demo_validation_flags);
  if (value.length != 6 ) {
    flags[4] = -1;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
    div.style.display = 'block';
  } else {
    flags[4] = 0;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
    div.style.display = 'none';
  }
}

function validate_buyer_first_name() {
  var name = document.getElementById("buyer_fname");
  var value = new String(name.value);
  var div = document.getElementById('buyer_fname_iv')
  let flags = JSON.parse(localStorage.demo_validation_flags);
  if (value.match("[0-9]")) {
    div.style.display = 'block';
    flags[5] = -1;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
  } else {
    div.style.display = 'none';
    flags[5] = 0;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
  }
}

function validate_buyer_last_name() {
  var name = document.getElementById("buyer_lname");
  var value = new String(name.value);
  var div = document.getElementById('buyer_lname_iv')
  let flags = JSON.parse(localStorage.demo_validation_flags);
  if (value.match("[0-9]")) {
    div.style.display = 'block';
    flags[6] = -1;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
  } else {
    div.style.display = 'none';
    flags[6] = 0;
    localStorage.setItem("demo_validation_flags", JSON.stringify(flags))
  }
}

function next(ele){
  ele.nextElementSibling.focus();
}

function validate_number(element) {
  element.addEventListener("keydown", function (evt) {
    ascii = evt.which ? evt.which : evt.keyCode
    if (ascii == 48) {
      evt.preventDefault();
    }
  });
}

function initialize_demo_validation_flags() {
  var demo_validation_flags = localStorage.getItem("demo_validation_flags");
  if (demo_validation_flags == null) {
    var new_demo_validation_flags = [-1, -1, -1, -1, -1, -1, -1];
    localStorage.setItem("demo_validation_flags", JSON.stringify(new_demo_validation_flags));
  }
}

function check_validation_flags() {
  var demo_validation_flags = JSON.parse(localStorage.demo_validation_flags);
  var success = true;
  for (let v of demo_validation_flags) {
    if (v != 0) {
      success = false;
    }
  }
  if (success) {
    store();
    alert("Gift Card Ordered Successfully")
  } else {
    alert("Clear All the errors before submitting")
  }
}





(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();