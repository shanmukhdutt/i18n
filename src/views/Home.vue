<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
      <ion-toolbar>
        <ion-title>I18n</ion-title>
      </ion-toolbar>
    </ion-header>
      <div>
        <ion-text>
          <h1>{{ $t('welcome') }}</h1>
        </ion-text>
      </div>
      <div>
        <ion-button @click="setLanguage('en')">English</ion-button>
        <ion-button @click="setLanguage('ta')">தமிழ்</ion-button>
        <ion-button @click="setLanguage('te')">తెలుగు</ion-button>
      </div>
      <ion-item>
        <ion-label>{{ $t('UserName') }}</ion-label>
        <ion-input type="text" v-model="userName"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>{{ $t('Password') }}</ion-label>
        <ion-input type="password" v-model="password"></ion-input>
      </ion-item>
      <ion-button @click="login">{{ $t('login') }}</ion-button>
      <!-- <ion-button @click="login">{{ $(login) }}</ion-button> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonItem,IonInput,IonLabel,IonText, } from '@ionic/vue';
import { defineComponent,ref } from 'vue';
import { Locale, useI18n } from 'vue-i18n';
import i18n from '../../i18n'
export default defineComponent({
  name:'Home',
  components:{
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonText
  },
  setup(){
    const userName=ref('');
    const password=ref('');
    const {locale,t}=useI18n();
    function setLanguage(newlocale:Locale){
      console.log(newlocale)
      i18n.global.locale.value = 'en' as any
      console.log(i18n.global.locale.value)
    }
    function login(){
      //  $router.push('/LogOut')
    }
    return{
      userName,
      password,
      setLanguage,
      login,
      t,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
