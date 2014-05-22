# jQuery RotateList

[http://valdineireis.com.br](http://valdineireis.com.br) - Is a plugin that automatically rotates lists

## Version

```
@version  0.2.0
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
$.rotateList('table#rotated tbody tr');
```

## Functions

```js
// Rotaciona as linhas da tabela
$.rotateList('table#rotated tbody tr');

// Define a quantidade mínima de linhas para rotacionar
$.rotateList('table#rotated tbody tr', {'minLines' : 5});

// Define a velocidade de rotação em milesegundos
$.rotateList('table#rotated tbody tr', {'speed' : 2000});

// Define a cor da linha selecionada
$.rotateList('table#rotated tbody tr', {'colorSelectedRow' : '#F1F1F1'});

// Define a cor de fundo das linhas
$.rotateList('table#rotated tbody tr', {'colorBackgroundRow' : '#FFFFFF'});

// Define a cor do texto das linhas
$.rotateList('table#rotated tbody tr', {'colorText' : '#444444'});

// Define a cor do texto da linha selecionada
$.rotateList('table#rotated tbody tr', {'colorSelectedText' : '#000000'});

// Define a inicialização de uma função externa, após completar a primeira rotação
$.rotateList('table#rotated tbody tr', {'externalFunction' : nomeDaFuncao});

// Define que a rotação não irá parar quando completar a primeira rotação
$.rotateList('table#rotated tbody tr', {'stopOnComplete' : false});

// Define que a lista irá rodar apenas uma vez
$.rotateList('table#rotated tbody tr', {'stopOnComplete' : true});
```

## Licence

The MIT License
