import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
    getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, orderBy, getDocs, limit, onSnapshot, where
}
    from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyAvFciOXxUMhhDenRVVzVqEXLlzVeHgOxU",
    authDomain: "vira-d182b.firebaseapp.com",
    projectId: "vira-d182b",
    storageBucket: "vira-d182b.appspot.com",
    messagingSenderId: "642906804481",
    appId: "1:642906804481:web:a5f667b54241d428188b00"
};
document.getElementById('Head_name').innerText=window.localStorage["another"].toUpperCase();
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();

window.adder = async function adder() {
    console.log("bello");
    const messageToSend = document.getElementById('message_box').value;
    document.getElementById('message_box').value = "";
    console.log("poersa");
    await addDoc(
        collection(db, window.localStorage["name"].toUpperCase()), {
        name:  window.localStorage["another"].toUpperCase(),
        message: messageToSend,
        ts: new Date().getTime(),
        from:window.localStorage["name"].toUpperCase()

    }
   
    );
    console.log("poersdfsdfsa");
    await addDoc(
        collection(db, window.localStorage["another"].toUpperCase()), {
        name: window.localStorage["name"].toUpperCase(),
        message: messageToSend,
        ts: new Date().getTime(),
        from:window.localStorage["name"].toUpperCase()

    }
    );
    console.log("poersdasdasdasdasdsfsdfsa");
   

}

//   await setDoc(doc(db, "Chatroom","name"), {

//     name: new Date().getTime(),
//     message: messageToSend.value,
//     ts:new Date().getTime()
// })
//   .then(()=>alert('called')).catch((e)=>{
//     alert("not success");
//   });

let value;

window.getDocument = async function getDocument() {
    // const q = query(collection(db, param),orderBy('ts','desc'),limit(1));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // value=doc.data();
    //  });
    console.log(window.localStorage["name"].toUpperCase());
    
    console.log("akarshka"+window.localStorage["another"].toUpperCase());
    let paraelement;
    const q = await query(collection(db, window.localStorage["name"].toUpperCase()),where("name","==", window.localStorage["another"].toUpperCase()));
    const unsub = onSnapshot(q, (snapshot) => {
        // snapshot.doc.map((d)=>console.log(d.name))
        //   snapshot.docChanges().forEach(async change => {
        // if (change.type === 'added') 
        // {

        //  console.log(change.doc);
        //    }
        //   });
        console.log(window.localStorage["name"].toUpperCase());
        snapshot.docChanges().forEach((change) => {
            let element = document.createElement('div');
            element.id = new Date().getTime();
            console.log(window.localStorage["name"].toUpperCase());
            if (change.doc.data()['from'] == window.localStorage["name"].toUpperCase()) {
                console.log("new");
                element.style = "position:relative;display: flex;justify-content: end;";
                let image = document.createElement('img');
                image.src = "https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg"
                image.style = "margin-top:25px;margin-left:5px;background-color:red;width:40px;height:40px;border-radius:20px;margin-right:15%"
                let headername = document.createElement('div');
                headername.style = "position:absolute;top:-13.75px;right:22.5%;font-size:12px;color:grey;"
                headername.innerText = window.localStorage["name"].toUpperCase();
                paraelement = document.createElement('p');
                paraelement.innerText = change.doc.data()['message'];

                paraelement.style = "position:relative;min-width:50px;font-size: 16px;box-shadow: 10px 10px 10px rgba(0,0,0,0.20);word-wrap: break-word;line-height: 1.4;font-family:Roboto,Arial;background-color: violet;max-width: 250px;padding: 9px;margin: 0;word-wrap: break-word;margin-right: 0%;border-radius:10px 0 10px 0;margin-top:25px"
                paraelement.appendChild(headername);
                element.appendChild(paraelement);
                element.appendChild(image);
            }
            else {
                let image = document.createElement('img');
                image.src = "https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg"
                image.style = "margin-top:25px;margin-right:5px;background-color:red;width:40px;height:40px;border-radius:20px;margin-left:15%"
                let headername = document.createElement('div');
                headername.style = "position:absolute;top:-13.75px;left:22.5%;font-size:12px;color:grey;"
                headername.innerText = change.doc.data()['name'];
                element.style = "display: flex;justify-content: start;";
                paraelement = document.createElement('p');
                paraelement.innerText = change.doc.data()['message'];
                paraelement.style = "position:relative;min-width:50px;font-size: 16px;box-shadow: 10px 10px 10px rgba(0,0,0,0.20);word-wrap: break-word;line-height: 1.4;font-family:Roboto,Arial;background-color: red;max-width: 250px;padding: 10px;margin: 0;word-wrap: break-word;border-radius:0px 10px 0px 10px;margin-top:25px";
                paraelement.appendChild(headername);
                element.appendChild(image);
                element.appendChild(paraelement);

            }

            document.body.appendChild(element);
            window.scrollTo(0, document.body.scrollHeight);
            console.log(change.doc.data())
        });
    });
}
// document.getElementById('click_button').addEventListener("click",adder(),true)
await getDocument();  
let button_click = document.getElementById('click_button');
    // button_click.addEventListener("click",adder(),true);

