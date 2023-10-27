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

