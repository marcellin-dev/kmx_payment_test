

export function showToast(type:string, message:string) {

    var x = document.getElementById("snackbar");
    x!.className = "show";

    if(type === "success"){
        x!.className = "show snack-success";
        x!.innerText = message;
    }else if(type === "error"){
        x!.className = "show snack-error";
        x!.innerText = message;
    }
    else {
        x!.className = "show snack-success";
        x!.innerText = message;
    }

    setTimeout(function(){ x!.className = x!.className.replace("show", ""); }, 5000);
}