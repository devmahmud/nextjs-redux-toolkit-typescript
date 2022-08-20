import { Post, PostPayload } from '@/types';
import ax from './axios.config';

const getPosts = async () => {
  const res = await ax.get<Post[]>('posts/');
  return res.data;
};

const getPost = async (id: number) => {
  const res = await ax.get<Post>(`posts/${id}`);
  return res.data;
};

const newPost = async (post: PostPayload) => {
  const res = await ax.post<Post>('posts/', post);
  return res.data;
};

const postAPI = { getPosts, getPost, newPost };

export default postAPI;
