import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [errorCode, setErrorCode] = useState('');
  const router = useRouter();

  const fetchErrorMessage = async () => {
    router.push(`/api/decipher/${errorCode}`);
  };
  return (
    <div>
      <h1>HI</h1>
      <h2>In order to use this api, add /api/decipher/xxxxxxxx after the url</h2>
      <h2>replace xxxxxxxx with error code</h2>
      <h3>Or, just type in error code below</h3>
      <input
        type="text"
        value={errorCode}
        maxLength={8}
        onChange={(e) => {
          setErrorCode(e.target.value);
        }}
      />
      <button onClick={fetchErrorMessage}>Get Error Message</button>
    </div>
  );
}
