<script>
import { defineComponent } from "vue";
import VueInput from "@/components/VueInput.vue";
import VueBtn from "@/components/VueBtn.vue";
import MailComponent from "@/components/MailComponent.vue";

export default defineComponent({
  name: "SubscribeView",
  components: { MailComponent, VueBtn, VueInput },
  data() {
    return {
      openDialog: false,
    };
  },
});
</script>

<template>
  <div class="subscribeContainer">
    <button class="topBtn" @click="openDialog = !openDialog">
      Click to open Subscription Box
    </button>
    <div v-if="openDialog" class="mainDiv">
      <div class="rightDiv">
          <div class="leftIconContainer">
          <span class="circle" @click="openDialog = false">
            <img
                    class="cross"
                    src="../assets/Vector.png"
                    alt="Girl in a jacket"
            />
          </span>
          </div>

          <mail-component></mail-component>
      </div>
      <div class="leftDiv">
        <div class="iconContainer">
          <span class="circle" @click="openDialog = false">
            <img
              class="cross"
              src="../assets/Vector.png"
              alt="Girl in a jacket"
            />
          </span>
        </div>
        <div class="containerSub">
          <p class="h1">Subscribe to morgenland</p>
          <vue-input
            label="E-Mail-Adresse *"
            placeholder="ex. name@email.com"
          ></vue-input>
          <vue-btn label="Subscribe"></vue-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subscribeContainer {
  background-color: #ECEFF1;
  position: fixed;
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: scroll;

}
.h1 {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
}

.topBtn {
  background-color: #00bfa5;
  padding: 16px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  width: 45%;
  font-size: 17px;
}
.mainDiv {
  display: flex;
  background-color: #212529;
  width: 70%;
  height: 50vh;
}
.rightDiv {
  background-color: white;
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
}
.leftDiv {
  background-image: url("@/assets/Rectangle.png");
  width: 54%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.topBtn:hover {
  background-color: #00796b;
  transition: 0.3s;
}
.circle {
  background-image: url("@/assets/circle.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;
  padding: 12px;
}

.iconContainer {
  margin-top: 30px;
  width: 95%;
  display: flex;
  justify-content: end;
}

.containerSub {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.leftIconContainer{
    display: none;
}

@media (max-width: 1740px) {
  .mainDiv {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100vh;
  }
  .leftIconContainer{
      width: 95%;
      display: flex;
      justify-content: end;
  }

    .rightDiv {
    background-color: white;
    width: 100%;
    height: 100%;
  }
  .leftDiv {
    background-image: url("@/assets/Rectangle.png");
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .iconContainer {
    display: none;
  }
  .h1 {
    font-size: 20px;
  }
  .topBtn {
      width: 40%;
      font-size: 15px;
  }
}
@media (max-width: 1458px) {
  .mainDiv {
    width: 60%;
  }
}
@media (max-width: 700px) {
  .mainDiv {
    width: 80%;
  }
  .topBtn {
    font-size: 12px;
      width: 60%;

  }
}
@media (max-width: 500px) {
    .mainDiv {
        width: 100%;
    }
    .topBtn{
        width: 60%;

    }
}
</style>
