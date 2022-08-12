function openpage() {
    let names=[];
   window.location.href = 'chat.html';
   const textw=document.getElementById('name').value;
   const another=document.getElementById('password').value;
   const photo=document.getElementById('photo1').value;
   const photo2=document.getElementById('photu2').value;
   window.localStorage["name"]=textw;
   window.localStorage["another"]=another;
   window.localStorage["senderphoto"]=photo;
   window.localStorage["receiverphoto"]=photo2;
   names.push(textw);
   names.push(another);
   names=names.sort();
   window.localStorage["common"]=names[0]+names[1];
   console.log( window.localStorage["common"]); 
} 