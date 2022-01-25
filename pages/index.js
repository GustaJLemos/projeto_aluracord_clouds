// código react aq
// o next nos proporciona oq chamamos de development experience, q é uma experiência legal para ir trabalhando no seu projeto e tudo mais

import { Box, Button, Text, TextField, Image } from "@skynexui/components";

// importando o nosso arquivo config que colocamos as cores do nosso projeto
import appConfig from "../config.json";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Poppins", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

function Title(props) {
  //   console.log(props); retorna pra gente oq está escrito dentro do meu componente Title lá no escopo da HomePage
  //   console.log(props.children); mostra exatamente o valor da nossa tag lá no escopo da Homepage
  // é como se a gente tivesse criando uma tag html, porém é só um componente
  // qi quando eu quiser usar esse componente no meu código eu só chamo o <Title></Title> e monto oq eu quero dentro dele
  // aq vamos fazer tipo um if com o || se quiser o props.tag vai pegar ele, se n vai pegar o h1 q vai ser nosso valor padrão
  const Tag = props.tag || "h1";
  return (
    //   o valor q estiver entre chaves é tratado como valor dinâmico do js, então se tiver uma variável, um objeto, uma prop q estou recebendo, consigo receber esse valor e trabalhar em cima dele

    // para q n de erro precisamos deixar nosso conteúdo envolto de uma div, porém isso vai fazer com que "suje" nosso código com muitas e muitas divs (uma div de cada componente, além das que já tenho por "padrão" no meu código principal) para resolver isso, a gente passa ao invés de div, uma tag vazia, o jsx ele tem um suporte pra gente usar essa tag vazia, ele serve mais pra gente agrupar as coisas junto msm, agrupar o h1 com o nosso style sem dar problema
    <>
      {/* antes do tag estava usando h1, porém nem todos os nossos título vao ser h1, então surge essa necessidade de quando chamamos o nosso componente Title a gente já passe o valor q a gente quer q fique na tag (h1, h2, div) e assim por diante, porém claro a gente perde a estilização, pq a gente tá falando q o tag vai receber h2, e ali nos estilos estamos estilizando o h1, porém dentro do styles jsx, ele tem o recurso de template string, então podemos passar a nossa variável ali dentro */}
      <Tag>{props.children}</Tag>
      {/* a gente junta tudo q a gente precisa para aquele componente aq, para facilitar a gestão dele, como por ex o css */}

      {/* acabamos de criar um componente super dinãmico, os estilos deles são dinãmicos, e as tags deles tbm */}
      {/* é desse jeito q o pessoal de design fala com o pessoal de código, pq, n necessariamente o estilo do titulo da empresa vai ter a mesma semântica do html para todo lugar, então vc pode ter essa diferença de querer aproveitar o msm estilo mas com uma semântica diferente */}
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
      {/* o css como ele é "global" a gente vai sofrer isso com o nosso projeto, principalmente em projetos maiores, tipo quando eu sofri com o gab quando tive q usar o css modules */}
      {/* usando o style assim, eu consigo dizer q esse estilo é somente para esse meu componente homepage, assim ele não mistura com outros componentes, e nem muda o estilo de outras coisas no meu projeto */}
      {/* quando colocamos o style, automaticamente o next com a lib do jsx, adiciona pra gente várias classes nas minhas tags, eles estão gerenciando como os estilos devem sem aplicados em nossa página, ele cria um escopo pra gente, então os estilo só vão ser aplicados nesse escopo, isso é usado justamente pra gente não precisar se preocupar com o nome da classe, pq em aplicações maiores, a longo prazo é muito difícil manter esses nomes */}
    </>
  );
}

// componente react
// function HomePage() {
//   // aq temos uma função js, q nos retorna esse trecho, q parece html
//   // jsx
//   return (
//     <div>
//       {/* aq para a gente fazer aquele reset no css, vamos criar oq o pessoal chama de global style, que é uma tag, q vai ter esses estilos globais, e q vai ser aplicada na minha página inteira, esse GlobalStyle a gente vai criar, porém criamos com esse nome pq é como geralmente o pessoal chama */}
//       <GlobalStyle />
//       {/* oq vc quiser fazer global, vai ficar aq */}
//       {/* a gente está escrevendo html dentro de js, e vamos escrever css aq dentro tbm */}
//       {/* ele ignora tudo q está aq dentro de Title, e só vai mostrar o componente Title */}
//       {/* nem todo o titulo vai ser um h1, então faz sentido q a tag desse titulo possa mudar dependendo de onde a gente for colocar ele, o react tbm dá essa flexibilidade pra gente, então eu posso dizer pro meu react q no meu componente Title, eu quero q a tag dentro dele seja h2 */}
//       <Title tag="h2">Seja bem vindo!</Title>
//       {/* para a gente pegar esse valor e jogar dentro do nosso componente de alguma forma, precisamos pasar ele como parâmetro no componente */}
//       {/* o pessoal geralmente n ve isso como uma estrutura, como uma função, vê isso como um componente do react, a gente recebe como parâmetro o props, q são justamente as propriedades q o react passa pra gente */}
//       <h2>Discord - Alura Matrix</h2>

//       {/* para a gente escrever o css dentro do js, vamos usar uma técina chamada css in js, o próprio jsx tem uma ferramente pra ajudar a gente nisso, o styled jsx */}
//     </div>
//   );
// }

// export default HomePage;

// o export default é o padrão q vai sair na nossa página
export default function PaginaInicial() {
  const username = "peas";

  return (
    <>
      <GlobalStyle />
      {/* no meu css cada box vai se tornar uma div por padrão */}

      {/* box content */}
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://images.pexels.com/photos/2948636/pexels-photo-2948636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
          // https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
          // https://images.pexels.com/photos/2948636/pexels-photo-2948636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* box container */}
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            // backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            {/* h1 */}
            <Title tag="h2">Boas vindas de volta!</Title>
            {/* h2 */}
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals["000"],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[800],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[900],
                mainColorLight: appConfig.theme.colors.primary[800],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              // backgroundColor: appConfig.theme.colors.neutrals[800],
              // border: "1px solid",
              // borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              // boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
                boxShadow: "0 2px 10px 0 rgb(165, 56, 96)",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                // backgroundColor: appConfig.theme.colors.neutrals[900],
                // boxShadow: "0 2px 10px 0 rgb(165, 56, 96)",

                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
