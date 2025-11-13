export interface User {
  id: string;
  name: string;
}

export interface Channel {
  id: string;
  name: string;
  lastMessage?: string;
}

export interface Message {
  id: string;
  channelId: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: string;
}

export interface ApiResponse {
  users: User[];
  channels: Channel[];
  messages: Message[];
}
