var vtxt_nombre=document.getElementById('txt_nombre');
var vtxt_comentario=document.getElementById('txt_comentario');
var vopt_marca=document.getElementById('opt_marca');
var vchk_condicion=document.getElementById('chk_condicion');

var vbtn_mostrar_valor=document.getElementById('btn_mostrar_valor');
var vbtn_mostrar_valor_radio=document.getElementById('btn_mostrar_valor_radio');

vopt_marca.addEventListener('change',
    function(){

        var selected_item=this.options[vopt_marca.selectedIndex];
        alert(selected_item.value+ ' - '+selected_item.text);

    }
);

 vchk_condicion.addEventListener("click",
    function(){
        alert(vchk_condicion.value);
        alert(vchk_condicion.checked);
    }
);



vbtn_mostrar_valor.addEventListener('click',
    function(){
        alert(vtxt_nombre.value);
        alert(vtxt_comentario.value);
        alert(vchk_condicion.value)
    }
);

vbtn_mostrar_valor_radio.addEventListener('click',
    function(){

        var opcion_item=document.querySelector('input[name="color"]:checked');
        alert(opcion_item.value);

    }
);


function radio_click(){
    var opcion_item=document.querySelector('input[name="color"]:checked');
    alert(opcion_item.value);
}