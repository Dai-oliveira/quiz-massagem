# Quiz de Massagem

Landing page com quiz interativo para recomendar o tipo de massagem ideal e direcionar o cliente para agendamento no WhatsApp com desconto.

## Preview

- Quiz com 8 perguntas
- Resultado personalizado entre: `Drenagem Linfatica`, `Massagem Modeladora`, `Massagem Relaxante` ou `Protocolo Personalizado`
- CTA final para WhatsApp com mensagem pronta e cupom `QUIZ15`

## Tecnologias

- `HTML5`
- `CSS3`
- `JavaScript` (vanilla)

## Estrutura do projeto

```txt
.
|-- index.html
|-- style.css
|-- script.js
|-- Logo elegante de Daiani Oliveira.png
```

## Como rodar localmente

1. Baixe/clonar o projeto.
2. Abra a pasta no VS Code.
3. Execute com uma extensão como `Live Server` ou abra o `index.html` no navegador.

## Personalizacao rapida

### 1) Alterar perguntas e pesos

Edite o array `questions` em `script.js`.

### 2) Alterar textos dos resultados

Edite o objeto `profiles` em `script.js`.

### 3) Alterar numero de WhatsApp

No `script.js`, atualize este trecho:

```js
ctaLink.href = `https://wa.me/55996052565?text=${message}`;
```

Troque `55996052565` pelo seu numero no formato internacional:

- Brasil: `55 + DDD + numero` (somente numeros)

## Publicar no GitHub

1. Crie um repositorio no GitHub.
2. Na pasta do projeto, rode:

```bash
git init
git add .
git commit -m "feat: versao inicial quiz de massagem"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## Publicar no GitHub Pages

1. Abra o repositorio no GitHub.
2. Va em `Settings > Pages`.
3. Em `Source`, selecione `Deploy from a branch`.
4. Selecione:
- Branch: `main`
- Folder: `/ (root)`
5. Salve e aguarde a URL publica.

## Observacao

Se aparecer texto com acentos quebrados, garanta que os arquivos estejam salvos em `UTF-8`.

## Licenca

Uso livre para fins de estudo e projeto pessoal/comercial.
