const imageUpload = document.getElementById('imageUpload');
const previewImage = document.getElementById('previewImage');

imageUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      previewImage.src = reader.result;
    }
    reader.readAsDataURL(file);
  } else {
    previewImage.src = '';
  }
});