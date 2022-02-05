import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import {MessageService} from "./Services/MessageService";
import {Message} from './types/message'
import {User} from './types/user'

const PORT = 5001;
const app = express();

app.get('/', (req, res) => {
	res.send('Hello!');
})

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: 'http://localhost:8080',
	}
});

io.on("connection", (socket) => {
	console.log('user connected');

	socket.on('disconnect', () => {
		console.log('a user disconnect');
	});

	socket.on('joinRoom', (user: User) => {
		socket.join(user.room);
		socket.emit('greetings', MessageService.createGreetings(user.username))
		socket.to(user.room).emit('newMessage', MessageService.createJoinedMessage(user.username));
		socket.on('newMessage', (message: Message) => {
			socket.emit('newMessage', MessageService.createMessage(user.username, message.text));
			socket.to(user.room).emit('newMessage', MessageService.createMessage(user.username, message.text));
		})
	});
});

httpServer.listen(PORT, () => {
	console.log(`server has been started on http://localhost:${PORT}`)
});