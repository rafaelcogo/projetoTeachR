import React from "react";

import imgCadastro from "../../imagens/cadastro.png";

export default function contato() {
  return (
    <section className="cadastro row cadastroAlign">
      <div className="cadastro col-sm-12 col-lg-6">
        <img
          className="imgCadastro"
          src={imgCadastro}
          alt="Ilustarção de um mulher de cor branca com uma camiseta laranja ao lado de um notebook com a tela de cadastro aberta."
        />
      </div>

      <form
        id="formContato"
        className="col-sm-12 col-lg-6 cadastroAlign"
        action=""
      >
        <fieldset className="">
          <h2 className="cadastro">Cadastro</h2>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtNome"
              placeholder="Digite seu nome completo aqui"
            />
            <label for="floatingInput">Nome:</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="txtEmail"
              placeholder="seu@email.com"
            />
            <label for="floatingInput">Email:</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtCpf"
              placeholder="Digite seu CPF"
            />
            <label for="floatingInput">Cpf:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtSenha"
              placeholder="Senha"
            />
            <label for="floatingInput">Senha:</label>
          </div>

          <div className="btnCadastrar">
            <button id="btnCadastrar" className="enviar">
              Cadastrar
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
