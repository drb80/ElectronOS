document.addEventListener('DOMContentLoaded',pageLoaded)

async function pageLoaded(){
  const cpuBrand = await window.electronAPI.cpuBrand()
  const cpuBrandElement = document.getElementById('cpuBrand')
  cpuBrandElement.innerText = cpuBrand
}
