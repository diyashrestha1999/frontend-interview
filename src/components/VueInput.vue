<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "VueInput",
    props:{
        label:{
            type:String
        },
        placeholder:{
            type:String
        },
        textarea:{
            type:Boolean
        }

    }
})
</script>

<template>
    <div class="column">

        <label>{{label}}</label>
        <component :is="textarea?'textarea':'input'" :placeholder='placeholder' :class="{'textareaClass':textarea}"/>
    </div>
</template>

<style scoped>
.textareaClass{
    font-family: Lato,serif;
    resize: none;
    border: 1px solid #B5B5B5;
    border-radius: 4px;
    padding: 12px;
    height: 150px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.005em;
    background-color: transparent;
}
.column{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

label {
    font-family: Lato,serif;
}
input{
    background-color: transparent;

    font-family: Lato,serif;
    border: 1px solid #B5B5B5;
    border-radius: 4px;
    padding: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.005em;
}

</style>