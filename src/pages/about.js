import Layout from "@/components/Layout";
import Experience from "@/components/Experience";
import Certs from "@/components/Certs";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import aboutPic from "../../public/images/profile/about2-pic.jpeg";
const about = () => {
    return (
        <>
            <Head>
                <title>Lourena Ohara | Sobre</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <h2 className="font-bold text-5xl mb-16 w-full text-center dark:text-light">
                        Sobre Mim
                    </h2>
                    <div className="grid w-full grid-cols-6 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start text-justify">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75"> Biografia </h2>
                            <p className="font-medium">
                                Oi! Me chamo Lourena (Lóris é meu apelido corporativo), moro em Belo Horizonte, 
                                Minas Gerais e atualmente sou QA Sênior voluntário na Zup Innovation.<br/> Contribuo 
                                com planejamento, criação e execução de testes manuais e automatizados, resolução
                                de bugs, refinamento de regras de negócio e execução de pipelines de testes.
                            </p>
                            <p className="my-4 font-medium">
                                Em uma oportunidade passada, atuei como Líder Técnico de QA. Auxiliei mais de 20 
                                Analistas de Qualidade com diferentes senioridades e atividades da área.

                            </p>
                            <p className="my-4 font-medium">
                                Ao longo dos meu anos de atuação, desenvolvi e me aperfeiçoei em algumas
                                categorias de testes. Testes de api, testes de performance e também em testes
                                mobile. Atuei como especialista em Performance durante algum tempo da minha carreira.
                            </p>
                            <p className="my-4 font-medium">
                                Além de tecnologia, sou Chef de cozinha, praticante de Kickboxing - com graduação na 
                                kruang roxa. Sou apaixonada por atividades físicas, hoje me dedico a musculação e ciclismo 
                                na rua.<br/>
                                Gosto muito de jogos de videogame, ler livros e escutar música.
                            </p>
                            <p className="font-medium">
                                
                            </p>
                        </div>
                        <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 xl:col-span-3 md:col-span-4 md:order-1 dark:bg-dark dark:border-light">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light " />
                            <Image src={aboutPic} alt="Perfil" className='w-full h-auto rounded-2xl'
                                priority
                                sizes='(max-widht: 768px) 100vw,
                                (max-widht: 1200px) 50vw,
                                50vw'
                            />
                        </div>
                    </div>
                    <Experience></Experience>
                    <Certs></Certs>
                </Layout>
            </main>
        </>
    )
}

export default about