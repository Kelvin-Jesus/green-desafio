<template>
  <section class="user">
    <HeaderListarUsuario :id="id" />
    <DadosUsuario :dados-usuario="user" />
  </section>
</template>

<script>

import axios from 'axios';

import HeaderListarUsuario from '../components/usuario/HeaderListarUsuario.vue'
import DadosUsuario from '../components/usuario/DadosUsuario.vue'


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
    }
}
</script>