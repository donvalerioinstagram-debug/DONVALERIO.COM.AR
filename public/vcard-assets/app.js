
const toast = document.getElementById('toast');
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
}
async function shareCard(){
  const data = {title: document.title, text: document.querySelector('meta[name="description"]').content, url: location.href};
  if(navigator.share){
    try{ await navigator.share(data); }catch(e){}
  }else{
    await navigator.clipboard.writeText(location.href);
    showToast('Enlace copiado');
  }
}
async function copyContact(){
  const text = document.body.dataset.copy;
  await navigator.clipboard.writeText(text);
  showToast('Datos copiados');
}
