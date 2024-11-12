import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ cargo, local, linkLocal, data, endereco, descricao }) => {
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
                <h3><a href={linkLocal}
                    target="_blank"
                    className="font-bold text-lg text-emerald-900 capitalize dark:text-primaryDark"
                >{local}</a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {data} | {endereco}
                </span>
                <p className="font-medium w-full">
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
                Cronologia
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 dark:text-light">
                    <Details
                        cargo="Analista Sênior e Tech Lead QA" local="Blip | Acerto | Zup Innovation"
                        linkLocal="https://ijunior.com.br/"
                        data="2013-2014" endereco="Belo Horizonte, MG"
                        descricao="Iniciando o curso de graduação em Sistemas de Informação na Universidade Federal
                    de Minas Gerais, procuro entender melhor a dinâmica de mercado da área, participando de uma
                    empresa que realiza trabalhos em diferentes setores da tecnologia. Como diretora, coordenava
                    eventos, realizava a divulgação e a gestão de publicações da IJúnior."
                    />

                    <Details
                        cargo="Graduação Técnica - Análise e Desenvolvimento de Sistemas" local="Centro Universitário Newton Paiva"
                        linkLocal="https://newtonpaiva.br/"
                        data="2013-2014" endereco="Belo Horizonte, MG"
                        descricao="Iniciando o curso de graduação em Sistemas de Informação na Universidade Federal
                    de Minas Gerais, procuro entender melhor a dinâmica de mercado da área, participando de uma
                    empresa que realiza trabalhos em diferentes setores da tecnologia. Como diretora, coordenava
                    eventos, realizava a divulgação e a gestão de publicações da IJúnior."
                    />

                    <Details
                        cargo="Livro Jornada Python - CoAutoria " local="BRASPORT"
                        linkLocal="https://www.editorabrasport.com.br/"
                        data="2013-2014" endereco="Belo Horizonte, MG"
                        descricao="Iniciando o curso de graduação em Sistemas de Informação na Universidade Federal
                    de Minas Gerais, procuro entender melhor a dinâmica de mercado da área, participando de uma
                    empresa que realiza trabalhos em diferentes setores da tecnologia. Como diretora, coordenava
                    eventos, realizava a divulgação e a gestão de publicações da IJúnior."
                    />

                    <Details
                        cargo="Analista Pleno e Testes de Performance" local="Blip | CI&T"
                        linkLocal="https://ijunior.com.br/"
                        data="2013-2014" endereco="Belo Horizonte, MG"
                        descricao="Iniciando o curso de graduação em Sistemas de Informação na Universidade Federal
                    de Minas Gerais, procuro entender melhor a dinâmica de mercado da área, participando de uma
                    empresa que realiza trabalhos em diferentes setores da tecnologia. Como diretora, coordenava
                    eventos, realizava a divulgação e a gestão de publicações da IJúnior."
                    />

                    <Details
                        cargo="Iniciando como Analista" local="CABTEC | Biomtech | TOTVS "
                        linkLocal="https://ijunior.com.br/"
                        data="2013-2014" endereco="Belo Horizonte, MG"
                        descricao="Iniciando o curso de graduação em Sistemas de Informação na Universidade Federal
                    de Minas Gerais, procuro entender melhor a dinâmica de mercado da área, participando de uma
                    empresa que realiza trabalhos em diferentes setores da tecnologia. Como diretora, coordenava
                    eventos, realizava a divulgação e a gestão de publicações da IJúnior."
                    />

                    <Details
                        cargo="Estágio em Testes de Software" local="CECOM-UFMG"
                        linkLocal="https://www.ufmg.br/catalogo/index.pl?ass_id=CECOM"
                        data="2013-2014" endereco="Belo Horizonte, MG"
                        descricao="Iniciando o curso de graduação em Sistemas de Informação na Universidade Federal
                    de Minas Gerais, procuro entender melhor a dinâmica de mercado da área, participando de uma
                    empresa que realiza trabalhos em diferentes setores da tecnologia. Como diretora, coordenava
                    eventos, realizava a divulgação e a gestão de publicações da IJúnior."
                    />

                    <Details
                        cargo="Diretora de Marketing e Vendas" local="UFMG Informática Júnior"
                        linkLocal="https://ijunior.com.br/"
                        data="2013-2014" endereco="Belo Horizonte, MG"
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