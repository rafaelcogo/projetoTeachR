import React from "react";
import Default from "../templates/Default";
import { Login } from "../molecules/index";

import logo from "../../logo/Logo.png";

export default function Home() {
  return (
    <Default>
      <section className="grid">
        <div className="logo-login">
          <img
            src={logo}
            alt="Logo descrevendo o nome da empresa, Teach sua escola virtual, está na cor laranja com livro verde"
            width="300"
            height="150"
          />
        </div>

        <div>
          <Login></Login>

          {/* <div>
            <p className="login">Faça seu login na Teach</p>
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
                type="password"
                className="form-control"
                id="txtEmail"
                placeholder="senha"
              />
              <label for="floatingInput">Senha:</label>
            </div>

            <div>
              <input
                className="campo-btn submit"
                type="submit"
                value="Entrar"
              />

              <p>
                <a href="#">Esqueceu a senha?</a>
              </p>
              <h6>
                É novo por aqui? <a href="#">Cadastre-se</a>
              </h6>
            </div>
          </div> */}
        </div>
      </section>
    </Default>
  );
}
