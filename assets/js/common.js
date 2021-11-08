let positionRegionesItaliaY = 0;

window.onload = function() {
    onmousemove = function(e){
        if (e.target.id === 'menu-regiones-italia') {
            regionesItaliaBlock();
            positionRegionesItaliaY = e.y;
        }

        if (positionRegionesItaliaY > e.y) {
            regionesItaliaNone();
        }

        if (e.target.id !== 'submenu-regiones-italia' && e.y > 110) {
            regionesItaliaNone();
        }

        const obj = document.querySelector('#submenu-regiones-italia');

        if (e.target.id === 'submenu-regiones-italia' ||
            obj.contains(e.target.parentNode)
        ) {
            regionesItaliaBlock();
        }
    }
};

function regionesItaliaBlock() {
    if (screen.width < 992) {
        return;
    }

    document.getElementById("submenu-regiones-italia").style.display = "block";
}

function regionesItaliaNone() {
    document.getElementById("submenu-regiones-italia").style.display = "none";
}
