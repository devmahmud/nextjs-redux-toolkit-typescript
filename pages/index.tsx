import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getPostsAsync } from '@/redux/slices/postSlice';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  const { posts, postsRequestStatus, error } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <Layout>
      <h1 className={styles.title}>JSON Placeholder posts</h1>

      <Link href="/posts/new-post">
        <a>
          <button className={styles.button}>New Post</button>
        </a>
      </Link>
      <div className={styles.messageContainer}>
        {postsRequestStatus === 'pending' && <div>Loading...</div>}
        {postsRequestStatus === 'rejected' && (
          <div className={styles.error}>Error: {error?.message}</div>
        )}
      </div>

      <div className={styles.grid}>
        {postsRequestStatus === 'fulfilled' &&
          posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <a className={styles.card}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </a>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default Home;
