import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  // Lambda APIを呼び出す関数
  const callLambdaAPI = async () => {
    try {
      const result = await axios.get('https://wiu3d6mc5j.execute-api.ap-northeast-1.amazonaws.com/Test/hello');
      setResponse(result.data.body);  // Lambdaからのレスポンスを保存
    } catch (error) {
      console.error('Error calling Lambda API:', error);
    }
  };

  useEffect(() => {
    callLambdaAPI();  // コンポーネントがマウントされた時にAPIを呼び出す
  }, []);

  return (
    <div>
      <h1>AWS Lambda Response:</h1>
      <p>{response ? response : 'Loading...'}</p>
    </div>
  );
};

export default App;
