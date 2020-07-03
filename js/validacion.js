function valida(f) {
          var ok = true;
          var msg = "Debes escribir algo en los campos:\n";

          var name = document.getElementById("textn");
          var email = document.getElementById("texte");
          var text = document.getElementById("texto");

          if(name.value == "")
          {
            msg += "- Nombre\n";
            ok = false;
          }

          if(email.value == "")
          {
            msg += "- Email\n";
            ok = false;
          }


          if(texto.value == "")
          {
            msg += "- Mensaje\n";
            ok = false;
          }


          if(ok == false)
            alert(msg);
          return ok;
}