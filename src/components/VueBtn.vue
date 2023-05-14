<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "VueBtn",
    props:{
        label:{
            type:String
        }

    }

})
</script>

<template>
    <button class="blackBtn">{{label}}</button>
</template>

<style scoped>
.blackBtn{
    background-color: #141414;
    padding: 16px 20px;
    color: white;
    border: none;
    border-radius: 4px;
    width: 100%;
    font-size: 17px;
}
</style>