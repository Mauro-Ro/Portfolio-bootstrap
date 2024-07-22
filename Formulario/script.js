(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                errorToast.show();
            }else{
                event.preventDefault();
                successToast.show();
                
            }
            form.classList.add('was-validated');
        }, false);
    });


const toastTrigger = document.getElementById('button')


const errorToast = new bootstrap.Toast(document.getElementById('liveToastError'));
const successToast = new bootstrap.Toast(document.getElementById('liveToastOk'));



const validar = () => {
    const nombre = document.getElementById('nombre');
    if(nombre === '') alert("ERRORRRRR");
        else alert("Perfecto!");
}
})();