# 🛠️ clsxify-transformer

> Isso aqui é só uma extensão besta que eu criei pra uso **local** no meu VS Code.  
> Não mantenho, não atualizo, não dou suporte.  
> **Use se quiser 😁💜**

---

## 📦 O que faz?

Seleciona um texto como:

```tsx
"mx-auto my-8 flex items-center";
```

Clica com o botão direito → **"Converter espaços em array de strings (clsx)"**

E ele vira:

```tsx
"mx-auto", "my-8", "flex", "items-center";
```

Útil pra Tailwind, clsx, organização de código ou TOC de dev perfeccionista.

---

## 🧠 Por que isso existe?

Porque eu tava com preguiça de ficar digitando `'...'` e colando vírgulas manualmente.  
E regex já não tava dando conta sem explodir minha cabeça.  
Então fiz essa extensão. É isso.

---

## ⚠️ Aviso importante

- 📌 **Não mantenho.**
- 🐞 **Não corrijo bugs.**
- ❌ **Não aceito PR.**
- 😎 **Funciona pra mim.**
- 🧼 **Zero dependências.**
- 🧪 **Use por sua conta e risco.**

---

## 💻 Como instalar localmente?

1. Baixe o arquivo `clsxify-transformer-0.0.1.vsix`
2. Vá em "Extensions" do VS Code e instale do arquivo VSIX. No meu aqui é "Extensions", clique nos `...` e selecione "Install from VSIX...".

## 💻 Como editar localmente?

1. Clone o projeto:

   ```bash
   git clone https://github.com/luizomf/clsxify-transformer.git
   cd clsxify-transformer
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Edite o arquivo "src/extension.ts"
4. Rode `npm run package` para gerar a extensão
5. Vá em "Extensions" do VS Code e instale do arquivo VSIX

---

## 🤙 Licença

MIT, porque é o caminho mais curto pra eu não me responsabilizar por nada.

---

## ✌️ Feito por

[Luiz Otávio Miranda](https://github.com/luizomf) — dev, professor e programador de ferramentas bestas por necessidade.
