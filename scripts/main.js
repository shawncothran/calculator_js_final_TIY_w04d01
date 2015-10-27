var a;
var b;
var op;
var answer;

$('.nums').on('click', function(numsClick){
  var value = this.value;

  if (!a && !op) {
    a = value;
  } else if(a && !op) {
    a += value;
  } else if (!b && op) {
    b = value;
  } else if(b && op) {
    b += value;
  }

  $('#display').html($('#display').html() + value);
});

$('.ops').on('click', function(opsClick){
  var value = this.value;

  if (value !== '=' && a) {
    op = value;
    $('#display').html($('#display').html() + value);
  } else if (a && b && op) {
    a = eval(a + op + b);
    display.innerHTML = a;
    $('#display').html(a);
  }

});

$('.clear').on('click', function(clear){
  $('#display').html('');
  a = undefined;
  b = undefined;
  op = undefined;

});
