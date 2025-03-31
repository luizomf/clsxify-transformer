# Clsxify Transformer (Local)

Extensão local para o VS Code que transforma uma string de classes Tailwind em um array para uso com `clsx`.

## Exemplo

Entrada:
```
'mx-auto my-8 flex items-center'
```

Resultado:
```
['mx-auto', 'my-8', 'flex', 'items-center']
```

### Como usar

1. Pressione F5 para abrir uma nova janela com a extensão.
2. Selecione a string que deseja transformar.
3. Clique com o botão direito e escolha "Transformar em array de strings (clsx)".

Ou empacote com:
```
npm install
npx vsce package
```

Depois instale o `.vsix` no seu VS Code principal via:
> Extensions: Install from VSIX...