//edit judul
const judul = document.querySelector('#judul');
judul.style.fontSize = '50px';
judul.style.textAlign = 'center';




//buat element tombol, saya ingin membuat tombol ubah warna bg menjadi warna kesukaan saya, dan ketika di doble klik lagi akan kembali semula
const Tombol = document.createElement('button');
const textT = document.createTextNode('Tombol Ubah Warna');

//kita rangkai dan tambahkan attribute yang dibutuhkan
Tombol.appendChild(textT);
Tombol.setAttribute('type', 'button');

//kita letakkan setelah element judul
judul.insertAdjacentElement('afterend', Tombol);
//atur style tombol
Tombol.style.marginLeft = '40%';
Tombol.style.marginTop = '1%';
Tombol.style.borderRadius = '3px';
Tombol.style.fontSize = '16px';

// saya ingin membuat efek saat kursor memasuki area tombol dia akan berubah warna
Tombol.addEventListener('mouseenter', function(){
    Tombol.style.backgroundColor = 'pink';
});
//event pembalik
Tombol.addEventListener('mouseleave', function(){
    Tombol.style.backgroundColor = 'rgb(241, 241, 241)';
});

//kita buat event utamanya
Tombol.addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
});
//event pembalik
Tombol.addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'white';
});

//******************************************************************************************************************************************************** */
// oke berikutnya saya ingin membuat tombol lagi di sebelah tombol sebelumnya. kali ini saya ingin merubah warna bg secra acak setiap kali di klik

const Tombol2 = document.createElement('button');
const textT2 = document.createTextNode('Tombol Acak Warna');

//kita rangkai dan tambahkan attribute yang dibutuhkan
Tombol2.appendChild(textT2);
Tombol2.setAttribute('type', 'button');
Tombol2.setAttribute('id', 'Tombol2');

//kita letakkan setelah element judul
Tombol.insertAdjacentElement('afterend', Tombol2);
Tombol2.style.marginLeft = '15px';
Tombol2.style.borderRadius = '3px';
Tombol2.style.fontSize = '16px';

// saya ingin membuat efek saat kursor memasuki area tombol dia akan berubah warna
Tombol2.addEventListener('mouseenter', function(){
    Tombol2.style.backgroundColor = 'pink';
});
//event pembalik
Tombol2.addEventListener('mouseleave', function(){
    Tombol2.style.backgroundColor = 'rgb(241, 241, 241)';
});

//kita buat event utamanya
Tombol2.addEventListener('click', function(){
    //untuk merubah warna, gita gunakan nilai rgb untuk mengatur warna secara acak
    const r =Math.round(Math.random () * 255 + 1) ;
    const g =Math.round(Math.random () * 255 + 1) ;
    const b =Math.round(Math.random () * 255 + 1) ;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// teks
const teks = document.createElement('p');
const isiTeks = document.createTextNode('Silahkan Anda Bisa Atur Warna Bacground Sesuai Keinginan Anda');

//rangkai
teks.appendChild(isiTeks);

//kita tampilkan
Tombol2.insertAdjacentElement('afterend', teks);
//atur style pada teks
teks.style.textAlign = 'center';
teks.style.fontSize = '20px';
teks.style.marginTop = '3%';

//******************************************************************************************************************************************************** */
// berikutnya saya ingin membuat slideder yang terdiri dari r,g,b agar user bisa mengatur warna sesuai kadar rgb tersebut

//oke yang pertama kita buat kotak warna dulu, untuk memberi tau user
const kotak = document.createElement('div');
kotak.classList.add('kotak', 'Merah');
teks.insertAdjacentElement('afterend', kotak);
//atur style
kotak.style.marginLeft = '47%';
kotak.style.marginTop = '2%';

//teks untuk menampilkan nilai pada kadar setiap rgb
const nilai = document.createElement('h4');
const nText = document.createTextNode('Nilai Merah: ');

//rangkai 
nilai.appendChild(nText);

//kita tampilkan
kotak.insertAdjacentElement('afterend', nilai);
nilai.style.marginLeft = '45%'
nilai.style.marginTop = '15px';



//oke  kita buat element slideder 

const sliderMerah = document.createElement('input');
sliderMerah.setAttribute('type', 'range');
sliderMerah.setAttribute('name', 'sMerah');
sliderMerah.setAttribute('tittle', 'Merah');
sliderMerah.setAttribute('min', '0');
sliderMerah.setAttribute('max', '255');

//atur posisi adn style
sliderMerah.style.marginLeft = '45%';

nilai.insertAdjacentElement('afterend', sliderMerah);


// oke selanjutnya kita bisa copy pase untuk pembuatan tombolnya
//******************************************************************************************************************************************************** */

// //kita buat div Hijau
const kotak2 = document.createElement('div');
kotak2.classList.add('kotak', 'Hijau');
sliderMerah.insertAdjacentElement('afterend', kotak2);
//atur style
kotak2.style.marginLeft = '47%';
kotak2.style.marginTop = '2%';


//teks untuk menampilkan nilai pada kadar setiap rgb
const nilai2 = document.createElement('h4');
const nText2 = document.createTextNode('Nilai Hijau: ');

//rangkai 
nilai2.appendChild(nText2);

//kita tampilkan
kotak2.insertAdjacentElement('afterend', nilai2);
nilai2.style.marginLeft = '45%'
nilai2.style.marginTop = '15px';
//atur style
nilai2.style.marginTop = '1%';


//slider Hijau
const sliderHijau = document.createElement('input');
sliderHijau.setAttribute('type', 'range');
sliderHijau.setAttribute('name', 'sHijau');
sliderHijau.setAttribute('tittle', 'Hijau');
sliderHijau.setAttribute('min', '0');
sliderHijau.setAttribute('max', '255');

//tampilkan
nilai2.insertAdjacentElement('afterend', sliderHijau);
//atur style
sliderHijau.style.marginLeft = '45%';

//******************************************************************************************************************************************************** */

// //kita buat div Biru
const kotak3 = document.createElement('div');
kotak3.classList.add('kotak', 'Biru');
sliderHijau.insertAdjacentElement('afterend', kotak3);
//atur style
kotak3.style.marginLeft = '47%';
kotak3.style.marginTop = '2%';

//teks untuk menampilkan nilai pada kadar setiap rgb
const nilai3 = document.createElement('h4');
const nText3 = document.createTextNode('Nilai Biru: ');

//rangkai 
nilai3.appendChild(nText3);

//kita tampilkan
kotak3.insertAdjacentElement('afterend', nilai3);
nilai3.style.marginLeft = '45%'
nilai3.style.marginTop = '15px';
//atur style
nilai3.style.marginTop = '1%';

//slider Hijau
const sliderBiru = document.createElement('input');
sliderBiru.setAttribute('type', 'range');
sliderBiru.setAttribute('name', 'sBiru');
sliderBiru.setAttribute('tittle', 'Biru');
sliderBiru.setAttribute('min', '0');
sliderBiru.setAttribute('max', '255');

//tampilkan
nilai3.insertAdjacentElement('afterend', sliderBiru);
//atur style 
sliderBiru.style.marginLeft = '45%';

//oke slider sudah dibuat, mari kita buat event, agar user bisa menggesernya
//******************************************************************************************************************************************************** */

//kita tangkap semuanya, menggunakan querySelectorAll yang semuanya ada attributnya
const range = document.querySelectorAll('input[type="range"]');

range.forEach(function(input){
   //kita buat eventnya
   input.addEventListener('input', () => {
    //kita buat methodnya
    const color = `rgb(${range[0].value}, ${range[1].value}, ${range[2].value} )`;
    document.body.style.backgroundColor = color;
   }) 
});

//******************************************************************************************************************************************************** */

//oke kali ini saya berniat, membuat kotak yang nantinya sumbu x dan y nya mewakili nilai r dan g, user besas atur bg nya melalui kottak tersebut

//teks 
const teks2 = document.createElement('p');
const isiTeks2 = document.createTextNode('Silahkan Anda Bisa Atur Warna Bacground Sesuai Keinginan Anda dengan menggeser mouse pada kotak');

//rangkai
teks2.appendChild(isiTeks2);

//kita tampilkan
sliderBiru.insertAdjacentElement('afterend', teks2);
//atur style pada teks
teks2.style.textAlign = 'center';
teks2.style.fontSize = '20px';
teks2.style.marginTop = '5%';
//******************************************************************************************************************************************************** */
//kita buat div
const kotakWarna = document.createElement('div');
kotakWarna.classList.add('kotakWarna');
teks2.insertAdjacentElement('afterend', kotakWarna);
kotakWarna.style.marginLeft ='41%';
kotakWarna.style. border= '2px solid black';
kotakWarna.style.marginTop = '3%'

//******************************************************************************************************************************************************** */
//tangkap yang di ingin diberikan event
// const kursor = document.querySelector('.kotakWarna');

// kursor.addEventListener('mousemove', function(event){
//     const postX = Math.round((event.clientX / window.innerWidth) * 255);
//     const postY = Math.round((event.clientY / window.innerHeight) * 255);

//     document.body.style.backgroundColor = 'rgb(' + postX + ', ' + postY + ', 100)';
// });


document.addEventListener('mousemove', function(event){
    const kotak = document.querySelector('.kotakWarna');
    const rect = kotak.getBoundingClientRect();
    
    if (
        //jika kamu bingung bisa tanya chat gpt ya
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    ) {
        const posX = Math.round((event.clientX - rect.left) / kotak.clientWidth * 255);
        const posY = Math.round((event.clientY - rect.top) / kotak.clientHeight * 255);

        document.body.style.backgroundColor = 'rgb(' + posX + ', ' + posY + ', 100)';
    }
});
