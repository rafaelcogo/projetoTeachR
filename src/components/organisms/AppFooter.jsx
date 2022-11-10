import React from "react";

import envolope from "../../Icons/envelope.png";
import whatsapp from "../../Icons/whatsapp.png";
import instagram from "../../Icons/instagram.png";
import facebook from "../../Icons/facebook.png";
import phone from "../../Icons/phone-call.png";
import marker from "../../Icons/marker.png";

export default function AppFooter() {
  return (
    <footer className="row">
      <div className="footerIcons">
        <div className="copy">
          <p>© 2022 Teach - Todos os direitos reservados</p>
        </div>
        <div className="rodape">
          <a href="">
            {" "}
            <img className="icons" src={envolope} alt="Icone de email" />
          </a>
          <a href="">
            {" "}
            <img className="icons" src={whatsapp} alt="Icone do app whatsapp" />
          </a>
          <a href="">
            {" "}
            <img
              className="icons"
              src={instagram}
              alt="Icone do app instagram"
            />
          </a>
          <a href="">
            {" "}
            <img className="icons" src={facebook} alt="Icone do app facebook" />
          </a>
          <a href="">
            {" "}
            <img className="icons" src={phone} alt="Icone de um telefone" />
          </a>
          <a href="">
            {" "}
            <img className="icons" src={marker} alt="Icone de localização" />
          </a>
        </div>
      </div>
    </footer>
  );
}
