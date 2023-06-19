async function myAsyncFunction() {
    const result = await new Promise(resolve => setTimeout(() => resolve('Olá!'), 1000));
    console.log(result);
  }
  
  myAsyncFunction();