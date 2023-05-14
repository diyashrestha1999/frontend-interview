<script>
import { defineComponent } from "vue";
import VueInput from "@/components/VueInput.vue";
import VueBtn from "@/components/VueBtn.vue";

export default defineComponent({
  name: "ContactView",
  components: {VueBtn, VueInput },
});
</script>

<template>
  <div class="container">
    <form>
      <h2 >Contact Us</h2>
      <vue-input
        label="E-Mail-Adresse *"
        placeholder="ex. name@email.com"
      ></vue-input>
      <vue-input label="Auftrags ID *" placeholder="Ex . #000000"></vue-input>
      <vue-input label="Subejct *" placeholder="Subject"></vue-input>
      <vue-input
        label="Message *"
        placeholder="Bitte schreiben Sie uns Ihr Anliegen"
        textarea
      ></vue-input>
        <div class="labelCheck">
            <span class="checkmark"></span>
            <span style="font-size: 14px;font-family: Lato,serif; ">I agree to Terms & Conditions and Privacy Policy.</span>
        </div>
        <vue-btn label="Rücksendeantrag abschicken"></vue-btn>
    </form>
  </div>
</template>

<style scoped>
h2{
    color: #212529;
    font-family: Merriweather,serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 52px;
}
.labelCheck {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 17px;
    cursor: pointer;
}
 .labelCheck input {
    cursor: pointer;
}
.checkmark {
    height: 23px;
    width: 23px;
    background-color: #eee;
    border: 1px solid #B5B5B5;
    border-radius: 2px;
}
.checkmark:hover{
    background-color: #ccc;

}
form {
  border: 1px solid #cfcfcf;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 538px;
  padding: 24px 32px;
  gap: 16px;
}

input {
  border-radius: 4px;
  padding: 12px;
}

.container {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;

}

</style>
