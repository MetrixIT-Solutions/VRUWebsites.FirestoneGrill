
function fetchIndianStatesData() {
  let countryStatesData = {
    "IND": [
      { "stateName": "Andhra Pradesh", "stateCode": "AP", "label": "Andhra Pradesh", "value": "AP" },
      { "stateName": "Arunachal Pradesh", "stateCode": "AR", "label": "Arunachal Pradesh", "value": "AR" },
      { "stateName": "Assam", "stateCode": "AS", "label": "Assam", "value": "AS" },
      { "stateName": "Bihar", "stateCode": "BR", "label": "Bihar", "value": "BR" },
      { "stateName": "Chhattisgarh", "stateCode": "CG", "label": "Chhattisgarh", "value": "CG" },
      { "stateName": "Goa", "stateCode": "GA", "label": "Goa", "value": "GA" },
      { "stateName": "Gujarat", "stateCode": "GJ", "label": "Gujarat", "value": "GJ" },
      { "stateName": "Haryana", "stateCode": "HR", "label": "Haryana", "value": "HR" },
      { "stateName": "Himachal Pradesh", "stateCode": "HP", "label": "Himachal Pradesh", "value": "HP" },
      { "stateName": "Jharkhand", "stateCode": "JH", "label": "Jharkhand", "value": "JH" },
      { "stateName": "Karnataka", "stateCode": "KA", "label": "Karnataka", "value": "KA" },
      { "stateName": "Kerala", "stateCode": "KL", "label": "Kerala", "value": "KL" },
      { "stateName": "Madhya Pradesh", "stateCode": "MP", "label": "Madhya Pradesh", "value": "MP" },
      { "stateName": "Maharashtra", "stateCode": "MH", "label": "Maharashtra", "value": "MH" },
      { "stateName": "Manipur", "stateCode": "MN", "label": "Manipur", "value": "MN" },
      { "stateName": "Meghalaya", "stateCode": "ML", "label": "Meghalaya", "value": "ML" },
      { "stateName": "Mizoram", "stateCode": "MZ", "label": "Mizoram", "value": "MZ" },
      { "stateName": "Nagaland", "stateCode": "NL", "label": "Nagaland", "value": "NL" },
      { "stateName": "Odisha", "stateCode": "OR", "label": "Odisha", "value": "OR" },
      { "stateName": "Punjab", "stateCode": "PB", "label": "Punjab", "value": "PB" },
      { "stateName": "Rajasthan", "stateCode": "RJ", "label": "Rajasthan", "value": "RJ" },
      { "stateName": "Sikkim", "stateCode": "SK", "label": "Sikkim", "value": "SK" },
      { "stateName": "Tamil Nadu", "stateCode": "TN", "label": "Tamil Nadu", "value": "TN" },
      { "stateName": "Telangana", "stateCode": "TG", "label": "Telangana", "value": "TG" },
      { "stateName": "Tripura", "stateCode": "TR", "label": "Tripura", "value": "TR" },
      { "stateName": "Uttar Pradesh", "stateCode": "UP", "label": "Uttar Pradesh", "value": "UP" },
      { "stateName": "Uttarakhand", "stateCode": "UK", "label": "Uttarakhand", "value": "UK" },
      { "stateName": "West Bengal", "stateCode": "WB", "label": "West Bengal", "value": "WB" },
      { "stateName": "Andaman and Nicobar Islands", "stateCode": "AN", "label": "Andaman and Nicobar Islands", "value": "AN" },
      { "stateName": "Chandigarh", "stateCode": "CH", "label": "Chandigarh", "value": "CH" },
      { "stateName": "Dadra and Nagar Haveli and Daman and Diu", "stateCode": "DD", "label": "Dadra and Nagar Haveli and Daman and Diu", "value": "DD" },
      { "stateName": "Delhi", "stateCode": "DL", "label": "Delhi", "value": "DL" },
      { "stateName": "Jammu and Kashmir", "stateCode": "JK", "label": "Jammu and Kashmir", "value": "JK" },
      { "stateName": "Ladakh", "stateCode": "LA", "label": "Ladakh", "value": "LA" },
      { "stateName": "Lakshadweep", "stateCode": "LD", "label": "Lakshadweep", "value": "LD" },
      { "stateName": "Puducherry", "stateCode": "PY", "label": "Puducherry", "value": "PY" }
    ]
  };

  var selectElement = document.getElementById("franchise-contact-state");

  countryStatesData["IND"].forEach(function (state) {
    var optionElement = document.createElement("option");
    optionElement.value = state.value;
    optionElement.textContent = state.label;
    if (state.value == 'TG') { optionElement.selected = 'selected'; }
    selectElement.appendChild(optionElement);
  });
}
function franchiseClick() {
  let fContactName = document.getElementById('name').value;
  let fContactMobNum = document.getElementById('mobileNumber').value;
  let mobileCountryCode = document.getElementById('country-mob-code').value;
  let fContactEmail = document.getElementById('email').value;
  let fStreet = document.getElementById('franchise-contact-street').value;
  let fPincode = document.getElementById('franchise-contact-pincode').value;
  let fCity = document.getElementById('franchise-contact-city').value;
  let selectElement = document.getElementById('franchise-contact-state');
  let selectedIndex = selectElement.selectedIndex;
  let selectedOption = selectElement.options[selectedIndex];
  let fStateCode = selectedOption.value;
  let fState = selectedOption.textContent;
  let vrucutoken = localStorage.getItem('vrucutoken');
  let franchiseSuccMsg = document.getElementById('franchise-success-field');
  let franchiseSuccMsgId = document.getElementById('franchise-success-msg-id');

  let franchiseErrorMsg = document.getElementById('franchise-error-msg');

  document.getElementById("name").addEventListener("input", function () {
    franchiseErrorMsg.textContent = "";
    franchiseErrorMsg.style.display = "none";
  });
  document.getElementById("mobileNumber").addEventListener("input", function () {
    franchiseErrorMsg.textContent = "";
    franchiseErrorMsg.style.display = "none";
  });
  document.getElementById("franchise-contact-street").addEventListener("input", function () {
    franchiseErrorMsg.textContent = "";
    franchiseErrorMsg.style.display = "none";
  });
  document.getElementById("franchise-contact-pincode").addEventListener("input", function () {
    franchiseErrorMsg.textContent = "";
    franchiseErrorMsg.style.display = "none";
  });
  document.getElementById("franchise-contact-city").addEventListener("input", function () {
    franchiseErrorMsg.textContent = "";
    franchiseErrorMsg.style.display = "none";
  });
  document.getElementById("franchise-contact-state").addEventListener("input", function () {
    franchiseErrorMsg.textContent = "";
    franchiseErrorMsg.style.display = "none";
  });

  if (!fContactName) {
    franchiseErrorMsg.textContent = "Contact Name is required";
    franchiseErrorMsg.style.display = "block";
  } else if (!fContactMobNum) {
    franchiseErrorMsg.textContent = "Contact Number is required";
    franchiseErrorMsg.style.display = "block";
  } else if (!fStreet) {
    franchiseErrorMsg.textContent = "Street is required";
    franchiseErrorMsg.style.display = "block";
  } else if (!fPincode) {
    franchiseErrorMsg.textContent = "Pincode is required";
    franchiseErrorMsg.style.display = "block";
  } else if (!fCity) {
    franchiseErrorMsg.textContent = "City is required";
    franchiseErrorMsg.style.display = "block";
  } else if (!fState) {
    franchiseErrorMsg.textContent = "State is required";
    franchiseErrorMsg.style.display = "block";
  } else {
    document.getElementById("franchise-create-btn").disabled = true;
    const reqBody = {
      name: fContactName,
      mobileNum: fContactMobNum,
      mobCcNum: mobileCountryCode,
      userID: mobileCountryCode + fContactMobNum,
      emID: fContactEmail ? fContactEmail : '',
      fRegion: '',
      location: '',
      fState: fState,
      fStateCode: fStateCode,
      fCity: fCity,
      fArea: fStreet,
      fPincode: fPincode,
      oCode: 'ONSSD',
      eCode: 'FSG',
      bCode: 'FSGKPHB'
    }
    // fetch('http://localhost:3502/vru/cust/user/franchise/create', {
      fetch('https://vrub2bapi.vreserveu.com/vrub2b/vru/cust/user/franchise/create', {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'vrucutoken': vrucutoken ? vrucutoken : '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody)
    }).then(response => {
      response.json().then(rData => {
        if (rData.status == '200') {
          document.getElementById('franchise-fields').style.display = "none";
          franchiseSuccMsgId.textContent = "Franchies Request Id - " + rData.resData.result.fReqID;
          franchiseSuccMsg.style.display = 'block';
          document.getElementById("franchise-create-btn").disabled = false;
        } else {
          document.getElementById("franchise-create-btn").disabled = false;
        }
      }).catch(error => { console.error(error); });
    }).catch(err => { console.error(err); });
  }
}