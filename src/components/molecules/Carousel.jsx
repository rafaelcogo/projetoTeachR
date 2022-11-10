import React from "react";
import Carousel from "react-bootstrap/Carousel";

import dep1 from "../../imagens/depoimento1.jpg";
import dep2 from "../../imagens/depoimento2.jpg";
import dep3 from "../../imagens/depoimento3.jpg";

function DarkVariantExample() {
  return (
    <Carousel variant="dark text-carousel">
      <Carousel.Item>
        <img className="img-carousel w-100" src={dep1} alt="First slide" />
        <Carousel.Caption>
          <h5 className="text-carousel">Márcia Cristina - Coordenadora</h5>
          <h6 className="text-carousel">Colégio Apogeu</h6>
          <p className="text-carousel">
            "O uso da tecnologia na educação, com recursos em sala de aula, pode
            estimular a criatividade, o raciocínio lógico, a colaboração, a
            capacidade de pesquisa e outras competências importantes para o
            mundo contemporâneo, por entender essa tendências que resolvemos
            adotar a tecnologia da Tech e estámos muito satisfeitos."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dep2} alt="Second slide" />
        <Carousel.Caption>
          <h5 className="text-carousel">Tânia Oliveira - Diretora</h5>
          <h6 className="text-carousel">Colégio Multiplus</h6>
          <p className="text-carousel">
            A tecnologia da Tech é muito bem aplicada e nos ajuda junto com
            nossos alunos a aprender coisas novas todos os dias, e estar em
            contato e conectado com todos alunos e colaboradoreso, além de
            melhorar o desempenho no trabalho e na escola, essa ferramenta se
            tornou essencial para o dia a dia e tornou tudo muito mais fácil.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dep3} alt="Third slide" />
        <Carousel.Caption>
          <h5 className="text-carousel">Victor Barcellos - Professor de TI</h5>
          <h6 className="text-carousel">Colégio Passo a Passo</h6>
          <p className="text-carousel">
            A tecnologia na educação surgiu para nós aqui do Colégio com o
            objetivo de renovar métodos de ensino tradicionais, além de tornar o
            ambiente escolar um espaço atrativo para o aluno que está conectado
            desde muito cedo. E nós acreditamos que quando a educação se mantém
            contextualizada com o cotidiano dos alunos, a tendência é ter
            resultados cada vez melhores, por isso estamos muito satisfeitos com
            a implantação dos serviços da Tech.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
