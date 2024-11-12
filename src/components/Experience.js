import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ cargo, data, descricao }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between">

            <LiIcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-lg">{cargo}</h3>
                <span className="font-medium text-emerald-900 dark:text-primaryDark">
                    {data}
                </span>
                <p className="font-medium w-full text-justify mt-2">
                    {descricao}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-32">
            <h2 className="font-bold text-5xl mb-16 w-full text-center dark:text-light">
                Carreira - Fatos Importantes
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 dark:text-light">
                    <Details
                        cargo="Tech Lead QA e Analista Sênior"
                        data="2021 - atualmente"
                        descricao="Durante um período atuando como analista Sênior, tenho a oportunidade de desenvolver
                        minhas habilidades de liderança, contando com um Chapter exclusivo de QA e outros TL's de Qualidade.
                        Me consolido como Analista Sênior e atuo como especialista em Testes de Performance durante um tempo"
                    />

                    <Details
                        cargo="Graduação Técnica - Análise e Desenvolvimento de Sistemas"
                        data="2024"
                        descricao="Finalizo a graduação técnica que me trouxe uma visão mais alinhada com o mercado e resgato a paixão
                        pelo desenvolvimento de software em si."
                    />

                    <Details
                        cargo="Livro Jornada Python - CoAutoria"
                        data="2022"
                        descricao="Sou convidada para participar como coautora no livro da Linguagem Python,
                        levando meus conhecimentos sobre testes automatizados em processos de desenvolvimento,
                        utilizando uma das linguagens mais conhecidas do mundo.
                        "
                    />

                    <Details
                        cargo="Analista Pleno e Testes de Performance"
                        data="2020"
                        descricao="Buscando ampliar meus conhecimentos com diferentes frameworks de testes e
                        habilidades com diferentes tipos de testes, em uma nova oportunidade atualizo minha
                        senioridade, assumindo responsabilidades ainda maiores em diferentes projetos."
                    />

                    <Details
                        cargo="Iniciando como Analista"
                        data="2018"
                        descricao="Após atuar como estagiária e voltar para o desenvolvimento, sou contratada
                        em uma empresa de logistica como analista de testes. Posteriormente, oportunidades como
                        Analista de Qualidade surgem e vou me aperfeiçoando ainda mais no cargo."
                    />

                    <Details
                        cargo="Estágio em Testes de Software"
                        data="2015 - 2017"
                        descricao="No Centro de Computação da Universidade, conheço ainda mais a amplitude
                        da graduação de Sistemas de Informação. Inicio meu contato com os testes de software
                        automatizados e a análise e levantamentos dos requisitos."
                    />

                    <Details
                        cargo="Diretora de Marketing e Vendas - UFMG Informática Júnior"
                        data="2013 - 2014"
                        descricao="Iniciando o curso de graduação em Sistemas de Informação na Universidade Federal
                    de Minas Gerais, procuro entender melhor a dinâmica de mercado da área, participando de uma
                    empresa que realiza trabalhos em diferentes setores da tecnologia. Como diretora, coordenava
                    eventos, realizava a divulgação e a gestão de publicações da IJúnior."
                    />
                </ul>

            </div>
        </div>
    )
}

export default Experience;