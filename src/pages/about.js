import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>Andrei Boulter | Sobre mim</title>
        <meta name="description" content="sobre mim" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Sobre mim" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Um naco auto-biografico
              </h2>
              <p className="font-medium">
                Olá! O meu nome é Andrei, sou uma pessoa altamente motivada e
                ansioso para aprender o máximo possível. Recentemente, concluí
                um curso profissional de Programação Full-Stacks na Flag com uma
                média de 19, demonstrando a minha dedicação e compromisso com a
                excelência. Como um futuro estagiário na area, estou
                entusiasmado com a oportunidade de aplicar meus conhecimentos e
                habilidades num ambiente prático.
              </p>
              <p className="my-4 font-medium">
                Adoro desafios e busco continuamente novas oportunidades de
                aprendizagem para expandir os meus horizontes. Gosto de me
                manter atualizado com as tendências do setor. Tenho confiança na
                minha capacidade de me adaptar rapidamente, contribuir de forma
                eficaz para uma equipa e entregar resultados de alta qualidade.
                Além disso, possuo excelentes habilidades de resolução de
                problemas e atenção meticulosa aos detalhes, o que me permite
                enfrentar tarefas complexas com precisão, também me considero
                uma pessoa proativa e colaborativa. Acredito no poder do
                trabalho em equipa e procuro ativamente oportunidades para
                colaborar com grupos diversos de pessoas. Sou um bom ouvinte,
                aberto a feedback e sempre pronto para abraçar novas
                perspectivas.
              </p>
              <p className="font-medium">
                No meu tempo livre, gosto de explorar novas tecnologias,
                participar em eventos do setor e envolver-me em comunidades
                online para expandir meu conhecimento e a minha rede de
                contatos. Acredito na aprendizagem contínua e no crescimento
                pessoal como base para o sucesso profissional. Tenho confiança
                de que o meu entusiasmo, dedicação e forte ética de trabalho me
                tornaram num candidato ideal para qualquer oportunidade. Estou
                ansioso para me conectar contigo e discutir como posso
                contribuir para o sucesso da tua equipa.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2x1 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Andrei Boulter"
                className="w-full h-auto rounded-2x1"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
