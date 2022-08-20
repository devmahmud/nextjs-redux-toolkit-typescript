import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import postAPI from '@/services/postAPI';
import { Post, RequestStatus } from '@/types';

export type PostState = {
  postsRequestStatus: RequestStatus;
  postDetailsRequestStatus: RequestStatus;
  createRequestStatus: RequestStatus;
  posts: Post[];
  post: Post | null;
  error?: SerializedError;
};

const initialState: PostState = {
  postsRequestStatus: 'idle',
  postDetailsRequestStatus: 'idle',
  createRequestStatus: 'idle',
  posts: [],
  post: null,
  error: undefined,
};

const getPostsAsync = createAsyncThunk('posts/getPosts', postAPI.getPosts);
const getPostAsync = createAsyncThunk('posts/getPost', postAPI.getPost);
const createPostAsync = createAsyncThunk('posts/createPost', postAPI.newPost);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.postsRequestStatus = 'pending';
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.postsRequestStatus = 'fulfilled';
        state.posts = action.payload;
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.postsRequestStatus = 'rejected';
        state.error = action.error;
      })
      .addCase(getPostAsync.pending, (state) => {
        state.postDetailsRequestStatus = 'pending';
      })
      .addCase(getPostAsync.fulfilled, (state, action) => {
        state.postDetailsRequestStatus = 'fulfilled';
        state.post = action.payload;
      })
      .addCase(getPostAsync.rejected, (state, action) => {
        state.postDetailsRequestStatus = 'rejected';
        state.error = action.error;
      })
      .addCase(createPostAsync.pending, (state) => {
        state.createRequestStatus = 'pending';
      })
      .addCase(createPostAsync.fulfilled, (state) => {
        state.createRequestStatus = 'fulfilled';
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.createRequestStatus = 'rejected';
        state.error = action.error;
      });
  },
});

export { getPostsAsync, getPostAsync, createPostAsync };

export default postSlice.reducer;
