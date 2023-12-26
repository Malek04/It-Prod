function test(){
    nom=f.fname.value;
    prenom=f.lname.value;
    if(nom.length==0||prenom.length==0){
        alert("you must tell your first and last name");
        return 0;
    }
}