function pic(){
    document.getElementById('img').src = "https://n.sinaimg.cn/sinakd20111/573/w571h802/20210417/7d77-knvsnuf9273152.png"
}
function change1(){
    document.getElementById('one').innerHTML='She is Kiku';
}
function change2(){
var css = document.getElementById('two').style;
css.background = 'lightblue';
css.fontFamily = 'Arial';
css.textAlign = 'center'; 
}
function ftoc(){
document.getElementById('demo').innerHTML = -12*5/9;
}
function sum(){
    var n1 = parseFloat(prompt('enter number 1:'));
    var n2 = parseFloat(prompt('enter number 2:'));
    document.getElementById('new').innerHTML = n1+n2;
}
function asking(){
    var firstName = prompt('First Name');
    var lastName = prompt('Last Name');
    alert('Nice to meet you '+ firstName+lastName);
}