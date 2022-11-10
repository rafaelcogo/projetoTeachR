import React from "react";

import Professora from "../../imagens/professora.png";

export default function AppHome() {
  return (
    <section className="row">
      <div className="col-sm-12 col-lg-5">
        <p className="text-sobre">
          A Teach oferece soluções <br></br> complementares de acordo com{" "}
          <br></br> o momento da sua escola!
        </p>
      </div>

      <div className="col-sm-12 col-lg-7">
        <img
          className="img-prof"
          src={Professora}
          alt="Pessoa de cor clara sentada a mesa com um tablet na mão e um notebook em sua"
        />
      </div>
    </section>
  );
}
