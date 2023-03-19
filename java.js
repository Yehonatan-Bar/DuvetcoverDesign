document.addEventListener('DOMContentLoaded', function() {
const input = document.getElementById("input");
const designPage = document.getElementById("designPage");
const imageContainers = document.querySelectorAll(".image-container");
const checkmarks = document.querySelectorAll(".checkmark");
const uploadBtn = document.getElementById("upload");
const confirmBtn = document.getElementById("confirm");
const cancelBtn = document.getElementById("cancel");

input.addEventListener("input", () => {
  if (input.value === "melon") {
    portal.style.display = "none";
    designPage.style.display = "block";
  }
});

imageContainers.forEach((container, index) => {
  container.addEventListener("click", () => {
    const checkmark = checkmarks[index];
    checkmark.style.display = checkmark.style.display === "none" ? "block" : "none";
  });
});

uploadBtn.addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Uploaded Image";
      const container = document.createElement("div");
      container.classList.add("image-container");
      container.appendChild(img);
      const checkmark = document.createElement("div");
      checkmark.classList.add("checkmark");
      checkmark.innerHTML = "&#10003;";
      container.appendChild(checkmark);
      designPage.insertBefore(container, uploadBtn);
    };
    reader.readAsDataURL(file);
  });
  fileInput.click();
});

confirmBtn.addEventListener("click", () => {
  // Implement the code to create the final design, then send it to the specified email address.
});

cancelBtn.addEventListener("click", () => {
  checkmarks.forEach((checkmark) => {
    checkmark.style.display = "none";
  });
});
</script>

});
