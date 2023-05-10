

function vegetables(){
    const not_vegetables = document.querySelectorAll('.not-vegetables');
    not_vegetables.forEach(function(element) {
        element.classList.toggle("hide_it");
    });
}
function fruits(){
    const not_fruit = document.querySelectorAll('.not-fruit');
    not_fruit.forEach(function(element) {
        element.classList.toggle("hide_it");
    });
}
function other(){
    const not_other = document.querySelectorAll('.not-other');
    not_other.forEach(function(element) {
        element.classList.toggle("hide_it");
    });
}
function beauty(){
    const not_beauty = document.querySelectorAll('.not-beauty');
    not_beauty.forEach(function(element) {
        element.classList.toggle("hide_it");
    });
}
function allpro(){
    const allpro=document.querySelectorAll('.productone, .producttwo, .productthree, .productfour, .productfive, .productsix, .productseven, .producteight');
    allpro.forEach(function(element) {
        element.classList.remove("hide_it");
    });
}