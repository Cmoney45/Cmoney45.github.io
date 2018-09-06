let currentPage = "About";

$(`button`).on(`click`, function(){
    if($(this).text() === currentPage){
        return;
    } else{
    $(`#${currentPage.toLowerCase()}Button`).removeClass(`currentPage`);
    $(`#${currentPage.toLowerCase()}Header`).addClass(`hidden-part`);
    $(`#${currentPage.toLowerCase()}Body`).addClass(`hidden-part`);

    currentPage = $(this).text();
    $(`#${currentPage.toLowerCase()}Button`).addClass(`currentPage`);
    $(`#${currentPage.toLowerCase()}Header`).removeClass(`hidden-part`);
    $(`#${currentPage.toLowerCase()}Body`).removeClass(`hidden-part`);

    }
})