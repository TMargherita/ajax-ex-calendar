$(document).ready(function () {

  var date = moment("2018-01-01");
  renderCalendar();

})



//FUNZIONI

//*funzione per rendere il mese

function renderCalendar(date) {
  //modifica intestazione me
  $("h1").text(date.format("MMMM YYYY"));

  //*giorni del mese dalla data passata come argomento
  var dayInMonth = date.daysInMonth(date);

  //*template per la stampa dell'elenco dei giorni
  var source = $("#days-template").html();
  var template = Handlebars.compile(source);

  //*stampa dei giorni del mese
  for ( var i = 1; i <= daysInMonth; i++) {

    //creazione context
    var week = {
      day: i,
      month: date.format("MMMM")
    };

    //creazione codice html
    var html = template(week);
    //inserimento del codice nella pagina
    $(".list-days").append(html);

  }

}
