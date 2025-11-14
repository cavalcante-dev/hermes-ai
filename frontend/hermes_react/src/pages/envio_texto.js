import { useState } from 'react';
import axios from 'axios';

function FormTexto() {
  const [texto, setTexto] = useState('');
  const [resposta, setResposta] = useState('');

  const processarTexto = async (texto) => {
    console.log('Texto: ', texto);
    try {
      const response = await axios.post(
        '/processar-texto',
        {
          texto: texto,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Sucesso', response.data);

      const res = response.data;
      setResposta({
        categoria: res.categoria,
        resposta: res.texto_resposta,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p> Processa seu texto, delegado: </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            processarTexto(texto);
          }}
        >
          <input
            type="text"
            value={texto}
            placeholder="Me fala quem que é ocê?!"
            onChange={(e) => setTexto(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Click Me</button>
        </form>

        {resposta && (
          <div>
            <p>{resposta.categoria}</p>
            <p>{resposta.resposta}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default FormTexto;