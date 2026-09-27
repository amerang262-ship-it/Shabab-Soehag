const modal=document.getElementById('modal'), content=document.getElementById('modalContent');
function show(type){
 let title=type==='login'?'تسجيل الدخول':'إنشاء حساب جديد';
 if(type==='login') content.innerHTML=`<h2>${title}</h2><div class="form">
 <label>الرقم القومي أو اسم المستخدم</label><input id="loginUser" placeholder="أدخل الرقم القومي أو اسم المستخدم">
 <label>كلمة المرور</label><input id="loginPass" type="password" placeholder="أدخل كلمة المرور">
 <button class="btn" onclick="login()">دخول</button>
 <p style="text-align:center">ليس لديك حساب؟ <a href="#" onclick="show('register')" style="color:#0b63ce">إنشاء حساب جديد</a></p>
 </div>`;
 else content.innerHTML=`<h2>${title}</h2><div class="form">
 <label>الاسم بالكامل</label><input id="name" placeholder="اكتب الاسم بالكامل">
 <label>الرقم القومي</label><input id="nid" inputmode="numeric" maxlength="14" placeholder="14 رقم">
 <label>رقم الهاتف</label><input id="phone" placeholder="01xxxxxxxxx">
 <label>البريد الإلكتروني</label><input id="email" type="email" placeholder="example@email.com">
 <label>كلمة المرور</label><input id="pass" type="password" placeholder="أنشئ كلمة مرور">
 <div class="note">نسخة تجريبية: البيانات تُحفظ على جهازك فقط. لا تستخدم رقمًا قوميًّا حقيقيًا في هذه النسخة التجريبية.</div>
 <button class="btn" onclick="register()">إنشاء الحساب</button>
 </div>`;
 modal.classList.add('show');
}
function hide(){modal.classList.remove('show')}
function register(){
 const name=document.getElementById('name').value.trim(), nid=document.getElementById('nid').value.trim(), phone=document.getElementById('phone').value.trim(), email=document.getElementById('email').value.trim(), pass=document.getElementById('pass').value;
 if(!name||nid.length!==14||!phone||!pass){alert('من فضلك أكمل البيانات وتأكد أن الرقم القومي 14 رقمًا.');return}
 localStorage.user=JSON.stringify({name,nid,phone,email,pass});
 alert('تم إنشاء الحساب على هذه النسخة التجريبية. يمكنك تسجيل الدخول الآن.'); show('login');
}
function login(){
 const u=JSON.parse(localStorage.user||'null'), user=document.getElementById('loginUser').value.trim(), pass=document.getElementById('loginPass').value;
 if(u && (user===u.nid||user===u.name) && pass===u.pass){hide();alert('مرحبًا '+u.name+'! تم تسجيل الدخول بنجاح.');}
 else alert('بيانات الدخول غير صحيحة أو لا يوجد حساب على هذا الجهاز.');
}
window.addEventListener('click',e=>{if(e.target===modal)hide()});