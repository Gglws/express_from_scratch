$('.button').on('click', () =>{
    $.get('/api/cars', (data) =>{

        $resultCard = $("<span> </span>").addClass("result-card");

        data.forEach((el) => {
            $("<h2></h2>").text(el.model).appendTo($resultCard);
        })
      
        $resultCard.appendTo($("#content"));

    })
})