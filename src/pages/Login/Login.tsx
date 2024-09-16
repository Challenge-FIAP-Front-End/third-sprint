import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UsuarioLogin {
  email: string;
  senha: string;
}

function Login() {
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    email: '',
    senha: ''
  });

  const [erros, setErros] = useState({
    email: '',
    senha: ''
  });

  const navigate = useNavigate();

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuarioLogin({
      ...usuarioLogin,
      [name]: value
    });
    validarCampo(name, value);
  };

  const validarCampo = (campo: string, valor: string) => {
    let mensagem = '';
    switch (campo) {
      case 'email':
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(valor)) {
          mensagem = 'E-mail inválido';
        }
        break;
      case 'senha':
        if (valor.length < 6) {
          mensagem = 'Senha deve ter pelo menos 6 caracteres';
        }
        break;
    }
    setErros(prevErros => ({
      ...prevErros,
      [campo]: mensagem
    }));
  };

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(erros).every(error => error === '') && Object.values(usuarioLogin).every(value => value !== '')) {
      const contaEstatica: UsuarioLogin = { email: "root@root.com", senha: "rootroot" };
      if (usuarioLogin.email === contaEstatica.email && usuarioLogin.senha === contaEstatica.senha) {
        alert("Logado com sucesso!");
        navigate('/');
      } else {
        alert("Email ou Senha Incorretos!");
      }
    } else {
      alert("Por favor, verifique os campos antes de enviar.");
    }
  };

  return (
    <main className='w-full flex items-center pt-12 flex-col gap-12'>
      <img src="src/assets/logo.png" alt="Logo" className="w-[203px] h-[203px]" />
      <div className='bg-[#00A0FB] w-[500px] p-12 text-white mx-auto rounded-3xl flex flex-col items-center gap-16'>
        <h1 className='text-2xl font-bold'>Seja Bem Vindo a Porto Quest!</h1>
        <form onSubmit={login} className='w-full gap-6 flex flex-col'>
          <fieldset>
            <input
              className={`w-full bg-white text-black p-4 rounded-full ${erros.email ? 'border-red-500 border-2' : ''}`}
              id="email"
              name="email"
              type="text"
              placeholder="E-mail"
              value={usuarioLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            {erros.email && <p className='text-red-500 text-sm'>{erros.email}</p>}
          </fieldset>
          <fieldset>
            <input
              className={`w-full bg-white text-black p-4 rounded-full ${erros.senha ? 'border-red-500 border-2' : ''}`}
              id="senha"
              name="senha"
              type="password"
              placeholder="Senha"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            {erros.senha && <p className='text-red-500 text-sm'>{erros.senha}</p>}
            <p className='mt-4'>Esqueceu sua senha?</p>
          </fieldset>
          <button className='mt-4 w-full rounded-full bg-[#0046BF] 0 text-lg p-2' type='submit'>Entrar</button>
          <button className="mt-4 w-full rounded-full bg-[#0046BF] 0 text-lg p-2" onClick={() => navigate('/Cadastro')}>Cadastrar-se</button>
        </form>
      </div>
    </main>
  );
}

export default Login;