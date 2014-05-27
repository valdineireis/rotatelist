# jQuery RotateList

[http://valdineireis.com.br](http://valdineireis.com.br) - jQuery RotateList is a plugin that automatically rotates lists

## Version

```
@version  0.2.1
@since    2014.05.22
@author   Valdinei Reis
@doc      valdineireis.com.br
```

## Required Files

+ jquery.js

## Options

```js
minLines            : 5                 // Quantidade minima de linhas para rotação.
speed               : 2000              // Velocidade da rotação.
colorSelectedRow    : '#F1F1F1'         // Cor da linha selecionada.
colorBackgroundRow  : '#FFFFFF'         // Cor de fundo das linha.
colorText           : '#444444'         // Cor do texto.
colorSelectedText   : '#000000'         // Cor do texto da linha selecionada.
externalFunction    : null              // Inicia uma função externa ao concluir rotação.
stopOnComplete      : false             // Parar ao completar rotação.
```

## Usage

```html
<table id="rotated">
	<thead>
		<tr>
			<th>Descrição</th>
			<th>Quantidade</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Casa</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Carro</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Moto</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Viagem</td>
			<td>Diversos</td>
		</tr>
		<tr>
			<td>Notebook</td>
			<td>1</td>
		</tr>
	</tbody>
</table>
```

```js
$('table#rotated tbody').rotateList();
```

## Functions

```js
// Rotaciona as linhas da tabela
$('#rotated tbody').rotateList({
    minLines           : 2,		// Define a quantidade mínima de linhas para rotacionar
    stopOnComplete     : false,		// Define se a rotação irá parar quando completar a primeira rotação
    externalFunction   : nomeDaFuncao,	// Define a inicialização de uma função externa, após completar a primeira rotação
    speed              : 1000,		// Define a velocidade de rotação em milesegundos
    colorSelectedRow   : '#F1F1F1',	// Define a cor da linha selecionada
    colorSelectedText  : '#888',	// Define a cor do texto da linha selecionada
    colorBackgroundRow : '#FFF',	// Define a cor de fundo das linhas
    colorText          : '#000'		// Define a cor do texto das linhas
});
```

## Run it
Run it in [JSFIDDLE](http://jsfiddle.net/valdineireis/sx93v/).


## Licence

The MIT License
