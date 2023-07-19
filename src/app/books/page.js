import { Suspense } from 'react';
import style from './books.module.css';

export default async function Home() {
  const data = await getData();

  return (
    <>
      <h2 className={style.header}>Books Page</h2>

      <div>
        <Suspense fallback={<h3>Loading....</h3>}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Suspense>
      </div>
    </>
  );
}

export async function getData() {
  const response = await fetch('http://localhost:5000/api/v1/users', {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  //  return the props

  return data;
}
