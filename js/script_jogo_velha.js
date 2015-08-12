		
		// posições
		var c1_1 = document.getElementById("c1_1");
		var c1_2 = document.getElementById("c1_2");
		var c1_3 = document.getElementById("c1_3");
		var c2_1 = document.getElementById("c2_1");
		var c2_2 = document.getElementById("c2_2");
		var c2_3 = document.getElementById("c2_3");
		var c3_1 = document.getElementById("c3_1");
		var c3_2 = document.getElementById("c3_2");
		var c3_3 = document.getElementById("c3_3");
		vezdox = true;
		//pontuação
		var pontosX = 0;
		var pontos0 = 0;
		var pontosEmpate = 0;


		//Verificar se houve vencedor
		function verificaVencedor()
		{	
			//X vencendo.
			if(
				(c1_1.innerHTML == "X" && c1_2.innerHTML == "X" && c1_3.innerHTML == "X") || // linha 1
				(c2_1.innerHTML == "X" && c2_2.innerHTML == "X" && c2_3.innerHTML == "X") || // linha 2
				(c3_1.innerHTML == "X" && c3_2.innerHTML == "X" && c3_3.innerHTML == "X") || // linha 3
				(c1_1.innerHTML == "X" && c2_1.innerHTML == "X" && c3_1.innerHTML == "X") || // coluna 1
				(c1_2.innerHTML == "X" && c2_2.innerHTML == "X" && c3_2.innerHTML == "X") || // coluna 2
				(c1_3.innerHTML == "X" && c2_3.innerHTML == "X" && c3_3.innerHTML == "X") || // coluna 3
				(c1_1.innerHTML == "X" && c2_2.innerHTML == "X" && c3_3.innerHTML == "X") || // diagonal princ.
				(c1_3.innerHTML == "X" && c2_2.innerHTML == "X" && c3_1.innerHTML == "X") // diagonal secund.
			)
			{
				alert("X venceu");
				restart("X");
			}
			
			//0 vencendo.
			else if(
					(c1_1.innerHTML == "0" && c1_2.innerHTML == "0" && c1_3.innerHTML == "0") || // linha 1
					(c2_1.innerHTML == "0" && c2_2.innerHTML == "0" && c2_3.innerHTML == "0") || // linha 2
					(c3_1.innerHTML == "0" && c3_2.innerHTML == "0" && c3_3.innerHTML == "0") || // linha 3
					(c1_1.innerHTML == "0" && c2_1.innerHTML == "0" && c3_1.innerHTML == "0") || // coluna 1
					(c1_2.innerHTML == "0" && c2_2.innerHTML == "0" && c3_2.innerHTML == "0") || // coluna 2
					(c1_3.innerHTML == "0" && c2_3.innerHTML == "0" && c3_3.innerHTML == "0") || // coluna 3
					(c1_1.innerHTML == "0" && c2_2.innerHTML == "0" && c3_3.innerHTML == "0") || // diagonal princ.
					(c1_3.innerHTML == "0" && c2_2.innerHTML == "0" && c3_1.innerHTML == "0") // diagonal secund.
			){
				alert("0 venceu");
				restart("0");
			}

			//Empate
			else if(c1_1.innerHTML != "" && c1_2.innerHTML != "" && c1_3.innerHTML != "" && 
				c2_1.innerHTML != "" && c2_2.innerHTML != "" && c2_3.innerHTML != "" && 
				c3_1.innerHTML != "" && c3_2.innerHTML != "" && c3_3.innerHTML != "")
			{
				alert("Empate!!!");
				restart("E")
			}


		}
		//Reinicar o jogo e contar o placar.
		function restart(jogador){
			//reinicia tudo!!
			if(jogador == "X"){
				pontosX++;
				document.getElementById("ptx").innerHTML = pontosX;
			}
			else if(jogador == "0"){
				pontos0++;
				document.getElementById("pt0").innerHTML = pontos0;	
			}
			else{
				//Nenhum vencedor
				pontosEmpate++;
				document.getElementById("ptEmpate").innerHTML = pontosEmpate;

			}
			//reiniciando...
			vezdox = true;
			c1_1.innerHTML = "";
			c1_2.innerHTML = "";
			c1_3.innerHTML = "";
			c2_1.innerHTML = "";
			c2_2.innerHTML = "";
			c2_3.innerHTML = "";
			c3_1.innerHTML = "";
			c3_2.innerHTML = "";
			c3_3.innerHTML = "";
		}

		function marca(x,y) {
		if(vezdox) document.getElementById('c'+x+'_'+y).innerHTML = "X";
		else document.getElementById('c'+x+'_'+y).innerHTML = 0;
		vezdox=!vezdox;
		//verifica se houve vencedor.
		verificaVencedor();
		}






