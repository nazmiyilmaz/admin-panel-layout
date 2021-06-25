const toggle = function () {
  document.getElementById('sidebar').classList.toggle('show')
  document.getElementById('btn-show').classList.toggle('btn-hide')
}

const hide = function () {
  document.getElementById('sidebar').classList.remove('show')
  document.getElementById('btn-show').classList.remove('btn-hide')
}

document.getElementById('btn-show').addEventListener('click', toggle)

document.getElementById('content').addEventListener('click', hide)

window.addEventListener('resize', () => {
  const widthOutput = document.querySelector('#width')
  if (widthOutput < 1000) {
    hide()
  }
})
