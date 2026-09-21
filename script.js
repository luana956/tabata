   const botoes= document.querySelector("button");

      botoes.forEach(function (botao) { 
          let curtiu = false;
          botao.addEventlistener("click", botaoclicado);
          function botaoClica() {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            if (curtiu === false) {
           
         }
        texto.textContent++;
          }
      });    
      function botaoClicado() {
        console.log("fui clicado"); 
        let texto = botao.querySelector("span");
        texto.textContent++;
      }
