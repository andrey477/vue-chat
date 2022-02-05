<template>
  <div>
    <div class="room-page">
      <MessageBlock :messages="messages" />
      <MessageInput />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SocketioService } from "@/services/socketio.service";
import MessageBlock from "@/components/MessageBlock/MessageBlock.vue";
import MessageInput from "@/components/MessageInput/MessageInput.vue";
import {Message} from "@/types/message";

@Component({
  components: { MessageInput, MessageBlock },
})
export default class RoomPage extends Vue {
  messages: Message[] = [];

  created() {
    if (!SocketioService.socket) {
      this.$router.push("/");
    }

    SocketioService.socket.on("newMessage", (message: Message) => {
      this.messages.push(message);
    });

    SocketioService.socket.on("greetings", (message: Message) => {
      this.messages.push(message);
    });
  }
}
</script>

<style scoped>
.room-page {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
