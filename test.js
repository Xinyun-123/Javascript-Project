<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
var count = 0;
var x;
var array = [23,23,4,4,5,6,2];
for(i=0;i<array.length;i++){
	x=array[i];
	for(j=0,j<array.length;j++){
		if(x==array[j]){
			count++;
			array[j]=0;
		}
	}
	if(count>1){
		document.getElementById("demo").innerHTML = count;
	}
}
</script>

</body>
</html>