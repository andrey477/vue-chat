import {Message} from "@/types/message";
import dayjs from "dayjs";

export const createMessage = (message: Message): Message => ({
	text: message.text,
	username: message.username,
	date: dayjs().format('DD.MM.YYYY HH:mm')
});