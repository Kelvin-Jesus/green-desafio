<template>
  <div
    id="notificacao"
    :class="classe"
  >
    {{ mensagem }}
  </div>
</template>

<script>

const notificacao = document.querySelector('#notificacao')
function esconderNotificacao() {
    setTimeout(()=>{
        if(document.querySelector('#notificacao')) document.querySelector('#notificacao').style.display = 'none'
    }, 4000)
}
esconderNotificacao()

export default {
    name:  'ComponenteNotificacao',
    props: ['classe', 'mensagem'],
    created() {
        if(notificacao) notificacao.style.display = 'block'
    }
}
</script>

<style>

#notificacao {
    position: absolute;
    right: 2rem;
    top: 2rem;
    min-width: 200px;
    width: fit-content;
    max-width: 320px;
    background: #fefefe;
    padding: .5rem;
    color: #fff;
    border-radius: var(--radius);
    animation: slideIn .3s ease;
}

#notificacao.sucesso {
    background: #60db60;
    border: 2px solid #226822;
}

#notificacao.erro {
    border: 2px solid #db6860;
}

@keyframes slideIn {
    from { transform: translate3d(-100px, 0,0) }
    to { transform: translate3d(0, 0,0) }
}

</style>