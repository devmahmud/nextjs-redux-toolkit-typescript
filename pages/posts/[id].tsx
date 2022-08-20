import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getPostAsync } from '@/redux/slices/postSlice';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/Home.module.css';

const PostDetails: NextPage = () => {
  const { post, postDetailsRequestStatus, error } = useAppSelector((state) => state.post);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      dispatch(getPostAsync(+id));
    }
  }, [dispatch, id]);

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>JSON Placeholder posts</h1>

        <div className={styles.messageContainer}>
          {postDetailsRequestStatus === 'pending' && <div>Loading...</div>}
          {postDetailsRequestStatus === 'rejected' && (
            <div className={styles.error}>Error: {error?.message}</div>
          )}
        </div>

        {postDetailsRequestStatus === 'fulfilled' && (
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>{post?.title}</h2>
              <p>{post?.body}</p>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default PostDetails;
