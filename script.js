   const botoes= document.querySelector("button");

      botoes.forEach(function(botao) { 
          let curtiu = false;
          botao.addEventlistener("click", botaoClicado);
          function botaoClicado() {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            if (curtiu === false) {
        texto.textContent++;
          }
      }
      });    
    
cons btnTemaEscucuro = document.querySelector(".btn-tema-escuro");
btntemaEscuro.addEventlistener("click", mudaTema);

   funcion mudaTema(){
      const corpoPagina = document.body;
      if (corpoPagina.classlist.contains("tema-escuro")) {
         corpoPagina.classlist
