import { UserFile } from "./userFile";

export class Message {
    messageid: string;
    payload: string;
    timestamp: string;
    file: UserFile;
    username: string;
    type: string;
    users: string[];
    mood: string;
}