const toggleMenu = function () {
  hidePp()
  hideNtf()
  document.getElementById('sidebar').classList.toggle('show')
  document.getElementById('btn-show').classList.toggle('btn-hide')
  document.getElementById('menu-button').classList.toggle('mdi-menu')
  document.getElementById('menu-button').classList.toggle('mdi-close')
}
const hideMenu = function () {
  document.getElementById('sidebar').classList.remove('show')
  document.getElementById('btn-show').classList.remove('btn-hide')
  document.getElementById('menu-button').classList.add('mdi-menu')
  document.getElementById('menu-button').classList.remove('mdi-close')
}

const toggleNtf = function () {
  hidePp()
  hideMenu()
  document.getElementById('ntf-dropdown').classList.toggle('hidden')
}
const hideNtf = function () {
  document.getElementById('ntf-dropdown').classList.add('hidden')
}

const togglePp = function () {
  hideNtf()
  hideMenu()
  document.getElementById('pp-dropdown').classList.toggle('hidden')
}
const hidePp = function () {
  document.getElementById('pp-dropdown').classList.add('hidden')
}

// listeners
document.getElementById('btn-show').addEventListener('click', toggleMenu)
document.getElementById('content').addEventListener('click', () => {
  hideMenu()
  hideNtf()
  hidePp()
})
document.getElementById('ntf').addEventListener('click', toggleNtf)
document.getElementById('pp').addEventListener('click', togglePp)

window.addEventListener('resize', () => {
  const widthOutput = document.querySelector('#width')
  if (widthOutput < 1000) {
    hideMenu()
  }
})
