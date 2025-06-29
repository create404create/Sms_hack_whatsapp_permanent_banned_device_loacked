// Simulate terminal loading
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("main-interface").classList.remove("hidden");
  }, 5000); // change to 300000 for 5 minutes if needed
};

// Add number input
document.getElementById("add-number").addEventListener("click", () => {
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "Enter target number";
  newInput.className = "number-input";
  document.getElementById("numbers").appendChild(newInput);
});

// Fake message send
document.getElementById("send").addEventListener("click", () => {
  document.getElementById("status").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  setTimeout(() => {
    document.getElementById("status").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  }, 5000);
});

// Ban WhatsApp permanently
document.getElementById("ban-whatsapp").addEventListener("click", function () {
  this.textContent = "✅ Done";
  this.disabled = true;
});

// Auto-ban future WhatsApp numbers
document.getElementById("auto-ban-whatsapp").addEventListener("click", function () {
  this.textContent = "✅ Done";
  this.disabled = true;
});
