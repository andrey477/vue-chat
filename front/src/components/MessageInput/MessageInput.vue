<template>
  <v-form v-model="valid" class="form" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="message.text"
      :rules="rules()"
      label="message"
      class="input"
      required
    />
    <div class="buttons">
      <v-btn type="submit">Отправить</v-btn>
      <v-btn class="ma-1" color="error" plain>
        <router-link to="/">Выйти</router-link>
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SocketioService } from "@/services/socketio.service";
import {Message} from "@/types/message";
import dayjs from 'dayjs'
import {createMessage} from "@/utils/createMessage";

@Component
export default class MessageInput extends Vue {
  valid = false;
  message: Message = {
    text: '',
    username: '',
    date: String(dayjs()),
  };

  rules() {
    return [(v) => !!v || "empty field"];
  }

  handleSubmit() {
    SocketioService.socket.emit("newMessage", createMessage(this.message));
  }
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding: 12px;
  border: 1px solid #33549a;
  border-radius: 0 0 5px 5px;
}

.input {
  max-width: 400px;
}
</style>
