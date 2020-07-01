console.log("Soy el js");
let opcion = document.getElementById('localTeam');
console.log(opcion)
const opcSeleccionada = opcion.options[opcion.selectedIndex].value


const team = document.getElementById("localTeam").addEventListener("change", function () {
    const opc = 'hola'//team.options[team.selectedIndex].text;
    document.getElementById("localTeamRender").value = opcion;
  })
