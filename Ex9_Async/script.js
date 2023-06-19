function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function myAsyncFunction() {
    console.log('Início da função assíncrona');
    await wait(1000);
    console.log('Um segundo se passou');
    await wait(1000);
    console.log('Dois segundos se passaram');
  }
  
  myAsyncFunction();