import React from "react";
import awardIcon from "../../public/images/medal.png"
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'

const Data = ({ nome, empresa, link, data, descricao }) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between dark:bg-dark dark:text-light">
            <div className="w-full cursor-pointer overflow-hidden rounded-lg">
                <div>
                    <Image src={awardIcon} alt="medal" className="w-6"></Image>
                    <h2 className="capitalize font-bold">
                        {nome}</h2>
                </div>
                <Link href={link} target="_blank" className="flex items-center text-emerald-600 
                text-lg font-semibold">
                    <p className="font-bold text-emerald-900 dark:text-primaryDark"><u>{empresa}</u></p>
                </Link>
                <p className="capitalize text-dark font-semibold dark:text-light">{data}</p>
                <p className="font-medium w-full"><i>{descricao}</i></p>
            </div>



        </li>
    )
}

const Certs = () => {
    return (
        <div>
            <h2 className="font-bold text-5xl mb-16 w-full text-center dark:text-light">
                Certificados e Licenças
            </h2>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-light
                        bg-light p-8 xl:col-span-3 md:col-span-4 md:order-1 dark:bg-dark">
                <div className="absolute top-0 -right-5 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark" />
                <ul>
                    <Data
                        nome={"Accredited Software Testing Fundamentals Certification (ASTFC)"}
                        empresa={"Asociación Internacional de Calidad de Software"}
                        link={"https://aicsvirtual.org/"}
                        data={"Emitida em Março de 2024"}
                        descricao={"Esta certificação demonstra excelência no conhecimento e aplicação dos princípios fundamentais de teste de software."}
                    />

                    <Data
                        nome={"Certified Tester Foundation Level (CTFL)"}
                        empresa={"Brazilian Software Testing Qualifications Board"}
                        link={"https://bstqb.online/"}
                        data={"Emitida em Março de 2019"}
                        descricao={"A certificação CTFL é essencial para adquirir conhecimentos básicos em testes, aplicáveis a cenários do mundo real."}
                    />

                    <Data
                        nome={"Inglês: Master's Program"}
                        empresa={"UPTIME – Comunicação em Inglês"}
                        link={"https://uptime.com.br/"}
                        data={"Emitida em Novembro de 2011"}
                        descricao={"Curso do Inglês com entrega de projeto final com foco em conversação e inglês técnico."}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Certs;