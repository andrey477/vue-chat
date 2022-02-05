import {Message} from '../types/message'
import dayjs from "dayjs";

export class MessageService {
	static createGreetings(username: string): Message {
		return {
			username: 'Bot',
			text: `Hello ${username}!`,
			date: dayjs().format('DD.MM.YYYY HH:mm'),
		}
	}

	static createMessage(username: string, text: string): Message {
		return {
			username: username,
			text: text,
			date: dayjs().format('DD.MM.YYYY HH:mm')
		}
	}

	static createJoinedMessage(username: string): Message {
		return {
			username: 'Bot',
			text: `${username} joined chat room`,
			date: dayjs().format('DD.MM.YYYY HH:mm'),
		}
	}
}