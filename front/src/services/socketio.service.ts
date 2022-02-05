import { io, Socket } from "socket.io-client";

export class SocketioService {
  static socket: Socket;

  static setupSocketConnection(): void {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
  }

  static joinRoom(data: User): void {
    this.socket.emit("joinRoom", data);
  }

  static disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
