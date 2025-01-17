import { Header } from "./components/header"
import { Post } from "./components/post"
import styles from './App.module.css'
import { Sidebar } from './components/sidebar'
import './global.css';
function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            title="Introdução ao POO: A Base da Programação Orientada a Objetos"
            content={`
              A Programação Orientada a Objetos (POO) é um paradigma que organiza o código 
              em torno de "objetos", em vez de ações e lógica de execução. 
              Objetos podem ser pensados como representações de entidades do mundo real, 
              como um carro, uma pessoa ou um banco. Cada objeto possui características 
              (chamadas de atributos) e comportamentos (chamados de métodos). Através dessa 
              estrutura, é possível criar programas mais organizados, reutilizáveis e fáceis de manter.
              Os principais conceitos de POO são: o de classe, isto é, um modelo ou blueprint para criar objetos que
              define os atributos e métodos que os objetos dessa classe terão. Objeto: Uma instância de uma classe,
              representando uma entidade concreta. Encapsulamento: A prática de esconder os detalhes internos de um objeto 
              e expor apenas o que é necessário para o exterior. Herança: A capacidade de criar uma nova classe baseada em uma classe 
              existente, permccitindo o reaproveitamento de código. Polimorfismo: A habilidade de um objeto se comportar de diferentes formas, 
              dependendo do contexto. Tais princípios permitem a criação de sistemas mais flexíveis e 
              escaláveis, facilitando a colaboração e evolução de projetos ao longo do tempo.
            `}
            tags={["POO", "objetos", "princípios"]}
            type="programming"
            author="Diego Fernandes"
            image="https://github.com/diego3g.png"
            link="https://www.dio.me/articles/introducao-a-programacao-orientada-a-objetos-poo"
          />   
          <Post 
            title="Introdução ao Docker: Transformando o Desenvolvimento e Implantação de Software"
            content={`
            Docker é uma plataforma que permite criar, implantar e rodar aplicativos em containers.
            Containers são ambientes isolados e leves que empacotam tudo o que uma aplicação precisa para rodar: código, 
            dependências, bibliotecas e configurações. Isso garante que a aplicação funcione da mesma forma em qualquer lugar – seja no seu computador de desenvolvimento, em um servidor ou na nuvem.
            Dentre os benefícios principais do Docker, temos:
                Portabilidade: A aplicação pode ser executada em qualquer lugar, sem se preocupar com diferenças de ambiente (como versões de sistema operacional ou configurações).
                Consistência: Garante que os desenvolvedores, testadores e equipes de produção tenham o mesmo ambiente, eliminando o famoso "funcionava na minha máquina".
                Escalabilidade: Facilita a criação de sistemas distribuídos, permitindo a execução de múltiplos containers em máquinas diferentes de forma simples.
                Eficiência: Containers são mais leves do que máquinas virtuais, o que significa que você pode executar mais aplicações em menos recursos.
            Com Docker, pode-se transformar a maneira como gerencia ambientes de desenvolvimento, testagem e produção, aumentando a agilidade e a eficiência do seu time de desenvolvimento.
            `}
            tags={["docker", "conteiners", "eficiência"]}
            type="devops"
            author="Brenda Andersen"
            image="https://github.com/brendaAndersen.png"
            link="https://danieldcs.com/docker-introducao-e-primeiros-passos-para-devs/"
          />      
        </main>
      </div>
    </div>
  )
}

export default App
