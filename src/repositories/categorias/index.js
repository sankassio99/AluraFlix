import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

async function getAll() {
  const respostaDoServidor = await fetch(`${URL_CATEGORIES}`);
  if (respostaDoServidor.ok) {
    const resposta = await respostaDoServidor.json();
    return resposta;
  }
  throw new Error('Não foi possível pegar os dados :(');
}

async function getAllWithVideos() {
  const respostaDoServidor = await fetch(`${URL_CATEGORIES}?_embed=videos`);
  if (respostaDoServidor.ok) {
    const resposta = await respostaDoServidor.json();
    return resposta;
  }
  throw new Error('Não foi possível pegar os dados :(');
}

async function createCategory(category) {
  const respostaDoServidor = await fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),
  });
  if (respostaDoServidor.ok) {
    const resposta = await respostaDoServidor.json();
    console.log("Cadastrado com sucesso!");
    return resposta;
  }
  throw new Error('Não foi possível cadastrar a caregoria :(');
}

export default {
  getAllWithVideos,
  getAll,
  createCategory,
};