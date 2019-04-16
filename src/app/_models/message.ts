import { UserFile } from "./userFile";

export class Message {
    payload: string;
    timestamp: string;
    file: UserFile;
    username: string;
    type: string;
    users: string[];
}