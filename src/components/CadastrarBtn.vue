<template>
  <button>Novo Usuário</button>
</template>
<script>
export default {
    name: 'CadastrarBtn'
}
</script>

<style>

button {
    background: #000;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    border-radius: .3rem;
    transition: all ease .3s;
    cursor: pointer;
}
button:hover,
button:focus {
  /* background: #363636; */
  box-shadow: 0 0 0 3px #303030, 0 0 0 4px #4d4d4d;
  outline: none;
}

button:active {
  box-shadow: 0 0 0 3px #2c2c2c, 0 0 0 4px #4d4d4d;
}

button:disabled {
  opacity: 0.5;
  cursor: wait;
}

</style>