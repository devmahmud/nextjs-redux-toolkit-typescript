export type RequestStatus = 'idle' | 'pending' | 'rejected' | 'fulfilled';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostPayload {
  title: string;
  body: string;
  userId: number;
}
