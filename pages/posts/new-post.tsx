import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { createPostAsync } from '@/redux/slices/postSlice';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/Home.module.css';
import { useForm } from 'react-hook-form';
import { PostPayload } from '@/types';

const NewPost: NextPage = () => {
  const { createRequestStatus, error } = useAppSelector((state) => state.post);
  const { register, handleSubmit } = useForm<PostPayload>();

  const router = useRouter();
  const dispatch = useAppDispatch();

  /**
   * Form submit handler
   * @param {PostPayload} data - form data
   */
  const handleFormSubmit = (data: PostPayload) => {
    dispatch(createPostAsync(data))
      .unwrap()
      .then(() => {
        router.push('/');
      });
  };

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Create new post</h1>

        {createRequestStatus === 'rejected' && (
          <div className={styles.error}>Error: {error?.message}</div>
        )}

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" {...register('title', { required: true })} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              cols={30}
              rows={10}
              {...register('body', { required: true })}
            ></textarea>
          </div>

          <div className={styles.center}>
            <button type="submit" className={styles.button}>
              {createRequestStatus === 'pending' ? 'Creating...' : 'Create'}
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default NewPost;
