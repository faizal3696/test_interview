<script>
function Antrian() {
  this.tampungan = [];
  this.awal = 0;
}

Antrian.prototype.push = function (val) {
  this.tampungan[this.awal] = val;
  this.awal = this.awal + 1;
}

Antrian.prototype.pop = function () {

  var topEl = this.tampungan[this.awal - 1];
  this.awal = this.awal - 1;
  this.tampungan.pop();
  return topEl;
}

Antrian.prototype.kosong = function () {
  return this.awal === 0;
}

Antrian.prototype.reset = function () {
  this.awal = 0;
  this.tampungan = [];
}

Antrian.prototype.dibalik = function () {

    var datanya = '';
    for (var i = this.awal - 1; i >= 0; i--) {
        datanya += this.tampungan[i];
        if (i > 0) {
            datanya += ',';
        }
    }
    return datanya;
}

Antrian.prototype.stringdibalik = function () {

  var stringnya = '';
  for (var i = this.awal - 1; i >= 0; i--) {
    stringnya += this.tampungan[i];
  }
  return stringnya;
}

const data = new Antrian();

data.push('1');
data.push('2');
data.push('3');


alert(data.dibalik());
data.reset();

const string = "hello world";
const strsplit = string.split('');

for(var x=0; x<strsplit.length; x++){
	data.push(strsplit[x]);
}
alert(data.stringdibalik());


function sum(val1 , val2){
    for (i = 1; i <= val2; i++){
        val1++;
    }
    return val1;
}

alert(sum(1, 4));


function countstring(){
    const string = prompt("Please enter string", "list of the same string same same string");
    const splitstr = string.split(' ');
    const counts = {};

    splitstr.forEach(
        function (x) {
            counts[x] = (counts[x] || 0) + 1;
        }
    );
    console.table(counts)
}
countstring();

function searchstring(string, searchdata){

    const splitstr = string.split('');
    var resdata = 0;
    for(var x=0; x<splitstr.length; x++){
           if(splitstr[x]==searchdata){
             resdata += 1;
         }
       }

     const result = {'res':searchdata, 'total':resdata};

     console.log(result)


 }
 searchstring('Lorem ipsum dolor sit amet','a');

function searchstring2(string, searchdata){

    const splitstr = string.split(' ');
    var resdata = 0;
    for(var x=0; x<splitstr.length; x++){
           if(splitstr[x]==searchdata){
             resdata += 1;
         }
       }

     const result = {'word':searchdata, 'total':resdata};

     console.log(result)


 }
 searchstring2('lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sem libero','lorem');

</script>