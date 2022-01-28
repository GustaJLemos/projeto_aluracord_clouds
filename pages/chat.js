import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagem, setListaDeMensagem] = React.useState([]);
  /*
    Usuário
    - usuário digita no campo textarea
    - aperta enter para enviar
    - tem que adicionar o texto na listagem

    Dev
    - [x] campo criado
    - [x] vamos usar o onChange e o useState (terá um if para caso seja apertado enter ele limpar a variável e enviar a msg)
    - [x] lista de mensagem
  
  */

  function handleNovaMensagem(novaMensagem) {
    // a partir de agr a nossa mensagem n vai ser só mais uma string, ela vai ser um objeto, q vai ter várias coisas, dentro dela, por ex o usuário q mandou, a data q foi escrito a msg, ele vai se tornar um item com múltiplos coisas, vai se tornar um objeto
    const mensagem = {
      // o id vai ser gerado através do tamanho do vetor de lista de mensagem
      id: listaDeMensagem.length + 1,
      de: "GustaJLemos",
      texto: novaMensagem,
    };
    // como vamos estar setando o valor, vamos terq estar passando todos os valores q a gente já tinha, vamos terq passar tanto um array ai, quanto, qualquer coisa q já tinha nessa lista, na listaDeMensagem vamos usar uma sintace pra gente abrir esse array, essa sintace dos ... é a gente espalhar, então vc pega todos os itens q já tem dentro da lista e espalha eles dentro dessa lista nova, pq se n ele iria criar um array dentro de outro array, e n é isso q a gente quer, a gente quer q ele coloque os itens q já existem da lista e o da mensagem
    setListaDeMensagem([mensagem, ...listaDeMensagem]);
    // colocamos a mensagem antes, pq se n ele joga a nossa nova mensagem pra cima, e embaixo fica as msg antigas q estavam no array
    // se a gente tentar renderizar o nosso objeto como a nova msg aq no vetor, ele vai dar erro pq o react n renderiza objeto, então temos q separar bonitinho cada valor dentro do objeto pra ele renderizar
    setMensagem("");
    // limpando a variável
  }

  return (
    // nesse código aq, só o header e o messageList q a gente criou, o resto, por ex as box, vem todas como componentes da biblioteca do skynexui
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          {/* ta mudando o valor: */}
          {/* uma dica importante pra saber oq ta acontecendo, é realmente jogar esse valor na tela, ou tentar usar um console.log, pra vc ter clareza em cima doq vc está trabalhando e conseguir fazer um código melhor */}
          {/* {mensagem} */}
          <MessageList mensagens={listaDeMensagem} />
          {/* Lista de mensagem:{" "} */}
          {/* {listaDeMensagem.map((mensagemAtual) => {
            // console.log(mensagemAtual);
            return (
              <li key={mensagemAtual.id}>
                {mensagemAtual.de}: {mensagemAtual.texto}
              </li>
            );
            // toda vez q renderizamos uma lista em react, ele tem um mecanismo interno q ele precisa saber como ele vai identificar cada um desses itens, como ele vai saber q cada um desses itens é unico na sua página, para facilitar os processos dele de otimização e tudo mais, por isso ele espera q cada item da lista tenha uma prop chamada de key, porém se ele receber valores iguais nesse key ele dá erro, mas é importante lembrar q é um warning n é um erro
          })} */}
          {/* {listaDeMensagem} */}
          {/* quando pensamos em percorrer um vetor, lembramos do for each, porém o for each ele n nos retorna nada, ele só executa algo, então n seria legal pra gente q quer mostrar esse vetor listaDeMensagem na tela, a ideia seria a gente passar por cada elemento do vetor, e ele nos retornasse algo para cada item, então se a gente quiser transformar cada item, o for each n faz isso, oq eu quero é mapear a passagem de uma coisa pra outra, por isso vamos usar o .map */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={function (event) {
                // console.log(event);
                // vamos tentar usar esse console pra gente descobrir qual tecla a pessoa ta apertando, e qual tecla é o enter, pra esse evento do onChange, ele n ta explicado para a tecla q vc apertou, mas sim mais para o valor q mudou, se quisermos ter mais controle de qual tecla apertamos, vamos terq olhar outro evento do campo de texto onKeyPress
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={function (event) {
                if (event.key === "Enter") {
                  event.preventDefault();
                  // pra gente prevenir o comportamento padrão desse evento, q seria apertar enter e ele pular de linha
                  // console.log(event);
                  // em um primeiro momento vamos pensar em fazer isso
                  // listaDeMensagem.push(mensagem);
                  // essa lista é só pra gente ver, se queremos colcoar um novo valor aq dentro, colcoamos o setListaDeMensagem

                  // como esse é um código q podemos reutilizar vamos transformar em uma função
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log(props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/${mensagem.de}.png`}
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
