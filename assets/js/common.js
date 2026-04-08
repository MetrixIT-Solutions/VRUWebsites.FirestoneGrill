function capitalizeFirstLetters(str) {
  return str.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  });
}
function nameChange() {
  const nameInput = document.getElementById("contact-person");
  nameInput.value = capitalizeFirstLetters(nameInput.value);
}
function commonNameChange() {
  const nameInput = document.getElementById("name");
  nameInput.value = capitalizeFirstLetters(nameInput.value);
}
function occTypeChange() {
  const nameInput = document.getElementById("other-occation-type");
  nameInput.value = capitalizeFirstLetters(nameInput.value);
}
function whatsappclick() {
  let url = "https://api.whatsapp.com/send?phone=919133921922";
  window.open(url, "_blank");
}