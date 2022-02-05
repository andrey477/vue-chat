<template>
  <div class="message">
    <p class="username">{{message.username}}</p>
    <p class="text">{{message.text}}</p>
    <p class="date">{{message.date}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Message extends Vue {
  @Prop({ type: Message, required: true }) readonly message: Message;
}
</script>

<style scoped>
.message {
  background-color: #66a3e3;
  padding: 4px;
  border-radius: 5px;
  margin: 8px;
  max-width: 70%;
}

.date {
  text-align: right;
  margin: 0;
}

.username {
  color: #4d525d;
  margin-bottom: 4px;
}
</style>
