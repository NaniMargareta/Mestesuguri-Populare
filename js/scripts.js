function daData(){
    var d = new Date();
    var month=d.getMonth()+1;
    month=(month>9)?month:'0'+month;
    document.getElementById('rezult').innerHTML = d.getDate() + '/' +month + '/' + d.getFullYear();
}