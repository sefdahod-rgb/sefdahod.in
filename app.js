import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// SAVE DONATION
window.saveDonation = async function(amount, name){
  await addDoc(collection(db, "donations"), {
    name: name,
    amount: amount,
    date: new Date().toLocaleString()
  });
}

// LOAD DONATIONS
async function loadData(){
  let total = 0;
  let list = document.getElementById("list");

  const querySnapshot = await getDocs(collection(db, "donations"));

  querySnapshot.forEach((doc)=>{
    let d = doc.data();
    total += d.amount;

    let li = document.createElement("li");
    li.innerHTML = ${d.name} - ₹${d.amount} <br><small>${d.date}</small>;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = "₹" + total;
}

loadData();