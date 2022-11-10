import React from "react";

import imgMenino from "../../imagens/imgMenino.png";

export default function contato() {
  return (
    <section className="contato row">
      <div className="menino col-sm-12 col-lg-6">
        <img
          className="imgMenino"
          src={imgMenino}
          alt="Ilustarção de um menino de cor parda com uma camiseta verde em uma sala de aula com a mão esquerda levantada pedindo ajuda."
        />
      </div>

      <form id="formContato" className="col-sm-12 col-lg-6" action="">
        <fieldset className="">
          <h2 className="faleconosco">Fale Conosco</h2>

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
              type="tel"
              className="form-control"
              id="txtFone"
              placeholder="(00) 00000-0000"
            />
            <label for="floatingInput">Telefone:</label>
          </div>

          <div className="form-floating mb-3 ddlUF">
            <select className="form-control" id="ddlUF" name="ddlUF">
              <option value="" selected="selected">
                Selecione
              </option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>
            <label for="floatingInput">Estado:</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtCidade"
              placeholder="Digite sua cidade"
            />
            <label for="floatingInput">Cidade:</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtMotivo"
              placeholder="Como podemos ajudar?"
            />
            <label for="floatingInput">Motivo:</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtMensagem"
              placeholder="Digite aqui sua mensagem"
            />
            <label for="floatingInput">Mensagem:</label>
          </div>

          <div className="btnEnviar">
            <button id="btnEnviar" className="enviar">
              Enviar
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
