document.getElementById('form-lead').addEventListener('submit', function(e){
e.preventDefault();
const data = Object.fromEntries(new FormData(this).entries());
const msg = `Olá! Quero agendar *${data.servico}* para o pet *${data.pet}*.\nTutor: ${data.nome}\nTelefone: ${data.telefone}`;
const url = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
window.open(url,'_blank');
this.reset();
alert('Redirecionando para WhatsApp com seus dados preenchidos!');
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click',e=>{
const id=a.getAttribute('href');
if(id.length>1){
e.preventDefault();
document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
}
});
});
