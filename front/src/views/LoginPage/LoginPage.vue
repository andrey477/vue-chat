<template>
  <div class="login-page">
    <v-form v-model="valid" class="form" @submit.prevent="handleSubmit">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="username"
              :rules="rules()"
              :counter="10"
              label="username"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="room"
              :rules="rules()"
              :counter="10"
              label="room"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn type="submit" :disabled="!valid">Войти</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { SocketioService } from "@/services/socketio.service";

@Component
export default class LoginPage extends Vue {
  valid = false;
  username = "";
  room = "";

  rules() {
    return [(v) => !!v || "empty field"];
  }

  created() {
    SocketioService.setupSocketConnection();
  }

  handleSubmit() {
    if (this.valid) {
      SocketioService.joinRoom({
        username: this.username,
        room: this.room,
      });
      this.$router.push("/room");
    }
  }
}
</script>

<style scoped>
.login-page {
  height: calc(100vh - 60px);
}

.form {
  margin-top: 30vh;
}
</style>
