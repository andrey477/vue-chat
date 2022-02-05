<template>
  <div class="message-block">
    <Message v-for="message in messages" :message="message" :key="message.date" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Message from "@/components/Message/Message.vue";
@Component({
  components: { Message },
})
export default class MessageBlock extends Vue {
  @Prop({ type: Array, required: true }) readonly messages: Message[];
}
</script>

<style scoped>
.message-block {
  width: 100%;
  height: 50vh;
  overflow: scroll;
  border-top: 1px solid #33549a;
}
</style>
