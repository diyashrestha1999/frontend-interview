<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "MailComponent"
})
</script>

<template>
    <div class="cloud">
        <div class="cloudTop">
            <img class="cloudTopImg" src="@/assets/cloudTopLarge.png" alt="cloudTop">
        </div>
        <div class="mailContainer">
        <div class="cloudBottom">
            <img class="cloudBottomImg" src="@/assets/cloudBottomLarge.png" alt="cloudBottomImg">
        </div>
            <div class="mailBox">
                <div class="cloudOuter">
                    <img src="@/assets/cloudInner.png" alt="cloud-inner">
                </div>
                <div class="cloudOuter">
                    <img src="@/assets/outlineUpperCloud.png" alt="cloud-inner">
                </div>
                <div class="mailColor">
                    <img src="@/assets/mainColor.png" alt="mail-Color">
                </div>
                <div class="arrowTop">
                    <img src="@/assets/arrowTop.png" alt="mail-Color">
                </div>
                <div class="mailCoverUpper">
                    <img src="@/assets/mailCoverUpper.png" alt="mail-Color">
                </div>
                <div class="arrowDown">
                    <img src="@/assets/arrowDown.png" alt="mail-Color">
                </div>
                <div class="mailCoverBottom">
                    <img src="@/assets/mailCoverBottom.png" alt="mail-Color">
                </div>
                <div class="mailOutline">
                <img src="@/assets/mail.png" alt="mail" >
                </div>
                <div class="cloudInner">
                <img src="@/assets/cloudInner.png" alt="cloud-inner">
                </div>
                <div class="outlineUpperCloud">
                    <img src="@/assets/outlineUpperCloud.png" alt="cloud-inner">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cloudOuter{
    margin-left: -70px;
    margin-top:60px;
    position: absolute;
    z-index: 3;
}
.mailColor{
    margin-left: 4px;
    position: absolute;
    display: flex;
    align-items: end;
    z-index: 1;
}
.arrowTop{
    margin-top: 10px;
    margin-left: 4px;
    position: absolute;
    display: flex;
    align-items: end;
    z-index: 2;
}
.mailCoverUpper{
    margin-top: 6px;
    margin-left: 9px;
    position: absolute;
    display: flex;
    align-items: end;
    z-index: 2;
}


.arrowDown{
    margin-top: 70px;
    margin-left: 7px;
    position: absolute;
    display: flex;
    align-items: end;
    z-index: 2;
}
.mailCoverBottom{
    margin-top: 40px;
    margin-left: 10px;
    position: absolute;
    display: flex;
    align-items: end;
    z-index: 1;
}
.cloudInner{
    margin-left: -100px;
    display: flex;
    align-items: end;
}
.outlineUpperCloud{
    margin-left: -146px;
    display: flex;
    align-items: end;
}
.mailOutline{
    display: flex;
    align-items: end;
    z-index: 2;
}
.mailContainer{
    margin-top: -40px;
    display: flex;
    flex-direction: row;
    gap: 30px;

}
.mailBox{
    display: flex;
    flex-direction: row;
}
.cloudTop{
    margin-left: 58%;
    margin-top: 10%;
    height: 100px;
    width: 100px;
}
.cloudTopImg{
    width: 100%;
}
.cloudBottom{
    margin-left: -5%;
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
}
.cloudBottomImg{
    width: 100%;
}
.cloud{
    background-image: url("@/assets/cloud.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 300px;
    width: 350px;
    display: flex;
    flex-direction: column;

}


</style>