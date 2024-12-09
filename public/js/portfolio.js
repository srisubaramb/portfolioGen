let userConfirmedLeave = false;

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function clearUploads() {
  fetch('/clear-uploads', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    }
  })
}
//datas are deleted but some issue are happening
window.addEventListener('beforeunload', (e) => {
  const confirmationMsg = "Your data will be deleted in our end"
  return confirmationMsg
})

window.addEventListener('unload', (e) => {
  if (userConfirmedLeave) {
    clearUploads();
  }
})

window.addEventListener('beforeunload', (e) => {
  userConfirmedLeave = true
})