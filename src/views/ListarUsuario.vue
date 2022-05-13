<template>
  <section class="user">
    <HeaderListarUsuario :id="id" />
    <DadosUsuario :dados-usuario="user" />
  </section>
</template>

<script>

import HeaderListarUsuario from '../components/usuario/HeaderListarUsuario.vue'
import DadosUsuario from '../components/usuario/DadosUsuario.vue'
import axios from 'axios'

export default {
    name: 'ListarUsuario',
    components: {
        HeaderListarUsuario,
        DadosUsuario
    },
    props: ["id"],
    data() {
        return {
            user: null
        }
    },
    created() {
        axios.get(`https://reqres.in/api/users/${this.id}`)
            .then(response => this.user = response.data)
        console.debug(this.user)
    }
}
</script>