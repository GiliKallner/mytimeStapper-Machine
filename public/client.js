// client-side js
// run by the browser each time your view template is loaded
// by default, you've got jQuery,
// add other scripts at the bottom of index.html
$(document).ready(function(){
  
  $.post({
    url:'https://subsequent-adapter.glitch.me/',
    success: (data) => {
       Object.keys(data).forEach((key)=>{
         let table = $('main>section>table>tbody');
         let tr = $(document.createElement('tr'));
         let th1 = $('<th>'+key+'<th/>');
         let th2 = $('<th>'+data[key]+'<th/>');
         tr.append(th1,th2).appendTo(table);
         console.log(table);

       });
    }
  });
  
});
 
