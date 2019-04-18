//0417//
onmessage = function(e){
	//메시지로 넘겨받은 데이터를 num에 저장
	var num = parseInt(e.data)
	var sum = 0
	for(var i=1; i <= num; i=i+1){
		sum = sum + i		
	}
	//결과를 worker를 호출한 곳으로 전달
	postMessage(sum)
}