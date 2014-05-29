/**
* jQuery RotateList - A Plugin rotation lists - http://valdineireis.com.br
* ---------------------------------------------------------------------------------
*
* jQuery RotateList is a plugin that automatically rotates lists.
*
* Licensed under The MIT License
*
* @version 0.2.1
* @since 21.05.2014
* @lastUpdate 27.05.2014
* @author Valdinei Reis da Silva
* @documentation valdineireis.com.br
* @twitter twitter.com/valdineireis
* @license opensource.org/licenses/mit-license.php MIT
* @package jQuery Plugins
*
* Usage with default values:
* ---------------------------------------------------------------------------------
* $('table#rotated tbody').rotateList();
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
    $.fn.rotateList = function(settings) {
        var opt	            = $.extend({}, $.fn.rotateList.defaults, settings),
            self            = this,
            trs             = self.children(),
            started         = false,
            counter         = 0,
            rotationNumber  = 0,
            startedFunction = false;
        
        var listSize = function() {
            return trs.size();
        }, setListColor = function() {
            // cor de fundo e do texto
            trs.css({
                'background-color': opt.colorBackgroundRow,
                'color': opt.colorText
            });
        }, startStop = function() {
			if(!started) startScroll();
			else stopScroll();
		}, startScroll = function() {
			if(started) {
				return;
			} else {
				// verifica a quantidade minima de linha para rotacionar
				if(listSize() >= opt.minLines) {
					scrollUp();
					started = true;
				} else {
					// chama a função externa, caso tenha
					startExternalFunction();
				}
			}
		}, stopScroll = function() {
			if(started) {
				clearInterval(counter);
				started = false;
			}
		}, updateColorLine = function(linha) {
			// cor da linha atual
			linha.css({
				'background-color' : opt.colorBackgroundRow, 
				'color' : opt.colorText
			});
			
			// cor da próxima linha
			linha.next().css({
				'background-color' : opt.colorSelectedRow, 
				'color' : opt.colorSelectedText
			});
        }, isFirstScrollUpComplete = function() {
            if(listSize() == rotationNumber) 
                return true;
            else 
                return false;
        }, verifyStopOnComplete = function() {
			if(opt.stopOnComplete && isFirstScrollUpComplete()) {
				startStop();
			}
		}, startExternalFunction = function() {
			if(!startedFunction) {
                if(opt.externalFunction) opt.externalFunction();
                startedFunction = true;
			}
		}, scrollUp = function() {
            counter = setInterval(function(){
                updateColorLine(trs.first());
                
                trs.slice(20).hide();
                trs.filter(':hidden').eq(0).slideUp();
                
                trs.eq(0).slideDown(function(){
                    $(this).appendTo(self);
                    trs = self.children();
                });
                
                rotationNumber++;
                
                verifyStopOnComplete();
                
                if(isFirstScrollUpComplete()) {
                    startExternalFunction();
                }
            },opt.speed);
        };
        
        self.mouseenter(function(){
            if(started) {
                startStop();
                $(this).css('cursor', 'wait');
            }
        }).mouseleave(function(){
            if(!started) {
                startStop();
                $(this).css('cursor', 'default');
            }
        });
        
        setListColor();
        startStop();
        
        return this;
    }
    
    $.fn.rotateList.defaults = {
        minLines           : 5, /* quantidade minima de linhas para rotação */
        speed              : 2000, /* velocidade da rotação */
        colorSelectedRow   : '#F1F1F1', /* cor da linha selecionada */
        colorSelectedText  : '#000000', /* cor do texto da linha selecionada */
        colorBackgroundRow : '#FFFFFF', /* cor de fundo das linha */
        colorText          : '#444444', /* cor do texto */
        externalFunction   : null, /* inicia uma função externa ao concluir rotação */
        stopOnComplete     : false /* parar ao completar rotação */
    }
    
})(jQuery);