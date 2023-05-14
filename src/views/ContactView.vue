<script xmlns="http://www.w3.org/1999/html">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "ContactView"
})
</script>

<template>
    <div style="width:100%; height: 100%; display: flex; justify-content: center;">
    <form >
        <h2 >Contact Us</h2>
        <div style="display: block">
            <div>
        <label >E-Mail-Adresse *</label>
        <input placeholder="ex. name@email.com">
            </div>
        </div>

    </form>
    </div>
  <div></div>
</template>

<style scoped>
form{
    border: 1px solid #CFCFCF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 538px;
    height: 719px;
    padding: 24px 32px;
    gap: 16px;
}
label{
    font-family: Lato;
}

</style>