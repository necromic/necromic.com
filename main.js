const intereses = document.querySelectorAll('.mis-intereses li')

intereses.forEach(function(interes, index) {
    const oldtext = interes.innerHTML;
    const newtext = new Array(50).fill(oldtext).join(' &nbsp;&nbsp; ')
    interes.innerHTML = newtext
});