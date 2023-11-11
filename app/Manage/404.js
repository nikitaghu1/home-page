import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page when the component mounts
    router.push('/manage');
  }, []);

  return (
    <div>
      <h1>Loading.....</h1>
      <p></p>
    </div>
  );
};

export default NotFound;