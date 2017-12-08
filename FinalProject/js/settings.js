

function MemberInfo(fName,lName,memberId){
this.FirstName=fName;
this.LastName=lName;
this.MemberId=memberId;    
}

$('#save').click(function () {


     
      // $("#dataTable").find('tbody')
      //     .append($('<tr>')
      //     .append($('<td>')
      //     .text($('#fname').val()))
      //     .append($('<tr>')
      //     .append($('<td>')
      //     .text($('#lName').val()))
      //     .append($('<tr>')
      //     .append($('<td>')
      //     .text($('#mId').val()))
      //             )));
 
       for (var i = 0; i <= 3; i++) {
               var row = $('<tr></tr>');
               var rowData;
                // for (var j = 0; j < 2; j++) {
                 if(i===0){
                 
                    rowData = $('<td></td>').addClass('bar').text($('#fname').val() );
                  }
                 else if(i===1){
                   rowData = $('<td></td>').addClass('bar').text($('#lName').val() );
                }
                else if(i===2){
                   rowData = $('<td></td>').addClass('bar').text($('#mId').val() );
                }
               
                      console.log(rowData);
                  

                  row.append(rowData);

                  
               
            // }
             $("#dataTable").find('tbody').append(row);
          }

          var arr=[];  
    var serializedArr;  
      
        arr.push(new MemberInfo($('#fname').val(),$('#lName').val(),$('#mId').val()));
                  serializedArr = JSON.stringify(arr);

      $('#fname').val('');
      $('#lName').val('');
      $('#mId').val('');

    
    // $("#dataTable").find('tbody tr').each(function(index,item){
   
    //     var fName=$(item).find('td').eq(0).text();

    //     var lName=$(item).find('td').eq(1).text();
    //     var memberId=$(item).find('td').eq(2).text();

    //     arr.push(new MemberInfo(fName,lName,memberId))
    //     serializedArr = JSON.stringify(arr);
    // });


          for ( var i in sessionStorage){
  if(i!=="memberData" && i!=="adminData"){
    var key;
if(i==="username"){
    key = "memberData";
}
else{
  key = "adminData";
  }

  localStorage.setItem(key, serializedArr);

}
}


  })

function clearData() {
  for ( var i in sessionStorage){
  if(i!=="memberData" && i!=="adminData"){
    var key;
if(i==="username"){
    key = "memberData";
}
else{
  key = "adminData";
  }

  localStorage.setItem(key, null);

}
}
}