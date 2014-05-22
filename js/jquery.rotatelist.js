/**
* jQuery RotateList - A Plugin rotation lists - http://valdineireis.com.br
* ---------------------------------------------------------------------------------
*
* jQuery RotateList is a plugin that automatically rotates lists.
*
* Licensed under The MIT License
*
* @version 0.2.0
* @since 21.05.2014
* @author Valdinei Reis da Silva
* @documentation valdineireis.com.br
* @twitter twitter.com/valdineireis
* @license opensource.org/licenses/mit-license.php MIT
* @package jQuery Plugins
*
* Usage with default values:
* ---------------------------------------------------------------------------------
* $.rotateList('table#rotated tbody tr');
*
* <table id="rotated">
* 	<thead>
* 		<tr>
* 			<th>Descrição</th>
* 			<th>Quantidade</th>
* 		</tr>
* 	</thead>
* 	<tbody>
* 		<tr>
* 			<td>Casa</td>
* 			<td>1</td>
* 		</tr>
* 		<tr>
* 			<td>Carro</td>
* 			<td>2</td>
* 		</tr>
* 		<tr>
* 			<td>Moto</td>
* 			<td>1</td>
* 		</tr>
* 		<tr>
* 			<td>Viagem</td>
* 			<td>Diversos</td>
* 		</tr>
* 		<tr>
* 			<td>Notebook</td>
* 			<td>1</td>
* 		</tr>
* 	</tbody>
* </table>
*/
;(function($){
    $.rotateList = function(selector, settings) {
        var lista           = $(selector),
            started         = 0,
            counter         = 0,
            timerOn         = 0,
            rotationNumber  = 0, /*  */
            startedFunction = false; /* veirica se a função externa foi iniciada */
        
        var config = {
            minLines           : 5, /* quantidade minima de linhas para rotação */
            speed              : 2000, /* velocidade da rotação */
            colorSelectedRow   : '#F1F1F1', /* cor da linha selecionada */
            colorBackgroundRow : '#FFFFFF', /* cor de fundo das linha */
            colorText          : '#444444', /* cor do texto */
            colorSelectedText  : '#000000', /* cor do texto da linha selecionada */
            externalFunction   : null, /* inicia uma função externa ao concluir rotação */
            stopOnComplete     : false /* parar ao completar rotação */
        };
        
        if (settings){$.extend(config, settings);}
        
        function listSize() {
            return lista.size();
        }
        
        // cor de fundo e do texto
        function setListColor() {
            lista.parent().css({
                'background-color': config.colorBackgroundRow,
                'color': config.colorText
            });
        }
        
        function startStop() {
            if(started === 0) {
                startRolagem();
                started = 1;
            } 
            else if(started === 1)  {
                stopRolagem();
                started = 0;
            }
        }
        
        function startRolagem() {
            if(timerOn == 1) {
                return;
            } else {
                // verifica a quantidade minima de linha para rotacionar
                if(listSize() >= config.minLines) {
                    counter = setInterval(rolaLista, config.speed);
                    timerOn = 1;
                } else {
                    // chama a função externa, caso tenha
                    startExternalFunction();
                }
            }
        }
        
        function stopRolagem() {
            if(timerOn == 1) {
                clearInterval(counter);
                timerOn = 0;
            }
        }
        
        function rolaLista() {
            var itens = $(selector),
                prev = $(itens).first();
            
            updateColorLine(prev);
            
            $.unique(prev).each(function(i) {
                $(this).delay(i*600).slideUp(function() {
                    $(this).appendTo(this.parentNode).slideDown();
                });
            });
            
            rotationNumber++;
            
            if(listSize() == rotationNumber) {
                startExternalFunction();
                rotationNumber = 0;
            }
            
            verifyStopOnComplete();
        }
        
        function updateColorLine(linha) {
            // cor da linha atual
            linha.css({
                'background-color' : config.colorBackgroundRow, 
                'color' : config.colorText
            });
            
            // cor da próxima linha
            linha.next().css({
                'background-color' : config.colorSelectedRow, 
                'color' : config.colorSelectedText
            });
        }
        
        function verifyStopOnComplete() {
            if(listSize() == rotationNumber && config.stopOnComplete) {
                startStop();
            }
        }
        
        function startExternalFunction() {
            if(startedFunction == false) {
                if(config.externalFunction) config.externalFunction();
                startedFunction = true;
            }
        }
        
        lista.mouseenter(function(){
            startStop();
            $(this).css('cursor', 'wait');
        })
        .mouseleave(function(){
            startStop();
            $(this).css('cursor', 'default');
        });
        
        setListColor();
        startStop();
        
        return this;
    };
})(jQuery);