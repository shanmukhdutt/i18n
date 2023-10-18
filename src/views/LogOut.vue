<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-title>LogOut</ion-title>
            </ion-toolbar>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage,IonContent,IonToolbar,IonTitle } from '@ionic/vue';
export default defineComponent({
    name:'LogOut',
    components:{
       IonPage,
       IonContent,
       IonToolbar,
       IonTitle
    }
})
</script>
