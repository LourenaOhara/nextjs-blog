import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import img1 from '../../public/images/projects/ebook.png';
import img2 from '../../public/images/projects/python.png';
import img3 from '../../public/images/projects/dev.png';
import img4 from '../../public/images/projects/qa.png';

const FeaturePortifolio = ({ tipo, titulo, resumo, img, arrowLink, botao }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid
        border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
            <div target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={titulo} className="w-full h-auto               priority
              sizes='(max-widht: 768px) 100vw,
              (max-widht: 1200px) 50vw,
              50vw'" />
            </div>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-emerald-900 font-extrabold text-xl dark:text-primaryDark">{tipo}</span>
                <div className="hover:underline underline-offset-3 dark:hover:text-light">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{titulo}</h2>
                </div>
                <p className="my-2 font-medium text-dark dark:text-light">{resumo}</p>
                <Link href={arrowLink} target="_blank" className="flex items-center rounded-lg bg-dark text-light 
                p-0 px-6 text-lg font-semibold hover:bg-slate-700 dark:bg-light dark:text-dark dark:hover:bg-slate-500">
                    <p className="my-2 mr-2 font-medium text-light dark:text-dark">{botao}</p>
                    <LinkArrow className="ml-2 w-8" />
                </Link>
            </div>
        </article>
    )
}

const portifolio = () => {
    return (
        <>
            <Head>
                <title>Lourena Ohara | Portifólio</title>
                <meta name="description" content="any description" />
            </Head>

            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <h2 className="font-bold text-6xl mb-16 w-full text-center dark:text-light">Projetos</h2>
                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-12 mb-10">
                            <FeaturePortifolio
                                titulo={"Um Pouco Mais Sobre Testes de Performance"}
                                img={img1}
                                resumo={"Criado para levar a compreensão de critérios básicos e princípios do Teste de Performance. Além de contar com exemplos de cenários e ferramentas. "}
                                link={"https://github.com/LourenaOhara/teste_performance_ebook/blob/main/Teste-de-Performance.pdf"}
                                arrowLink={"https://github.com/LourenaOhara/teste_performance_ebook/tree/main"}
                                botao={"Download"}
                                tipo={"eBook"}
                            />
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="col-span-12 mb-10">
                            <FeaturePortifolio
                                titulo={"Jornada Python"}
                                img={img2}
                                resumo={"Neste guia dos fundamentos de uma das linguagens mais usadas no mundo, contextualizos os testes automatizados descrevendo e exemplificando suas diversas usabilidades."}
                                link={"https://www.editorabrasport.com.br/jornada-python"}
                                arrowLink={"https://www.editorabrasport.com.br/jornada-python"}
                                botao={"Comprar"}
                                tipo={"Livro"}
                            />
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="col-span-12 mb-10">
                            <FeaturePortifolio
                                titulo={"Repositórios Desenvolvimento"}
                                img={img3}
                                resumo={"Repositórios públicos de desenvolvimento de software, cursos de C#, Flutter, C, Python, PHP e JavaScript"}
                                link={"https://www.editorabrasport.com.br/jornada-python"}
                                arrowLink={"https://github.com/LourenaOhara?tab=repositories"}
                                botao={"Ver"}
                                tipo={"Github"}
                            />
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="col-span-12 mb-10">
                            <FeaturePortifolio
                                titulo={"Repositórios Qualidade"}
                                img={img4}
                                resumo={"Repositórios públicos de testes e qualidade de software, cursos de Cypress, Appium, Robot Framework, RestAssured, Docker, Palywright e NodeJs"}
                                link={"https://www.editorabrasport.com.br/jornada-python"}
                                arrowLink={"https://github.com/LourenaOhara?tab=repositories"}
                                botao={"Ver"}
                                tipo={"Github"}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default portifolio