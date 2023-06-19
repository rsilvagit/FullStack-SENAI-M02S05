const escritorio = ["caneta","lapis","tesoura","notebook", "mesa"];
const itensComMaisDeCincoLetras = escritorio.filter((item) => item.length > 5);
itensComMaisDeCincoLetras.forEach(item => console.log(item));