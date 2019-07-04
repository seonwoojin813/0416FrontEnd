//ajax 요청 객체 생성
	var request
	//일반적인 Browser에서 ajax 요청 객체 생성
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
	}
	//IE 8.0 이하 Browser에서 ajax 요청 객체 생성
	else{
		request = new ActiveXObject("Microsoft.XMLHTTP")
	}
	//console.log(request)
	
	//data.xml을 GET방식으로 요청
	request.open('GET', 'data.xml')
	request.send()
	
	//ajax 요청 객체에 상태 변화가 생기면 호출되는 CallBack Method 설정
	request.onreadystatechange = function(){
		//응답이 완료되면
		if(request.readyState == 4){
			//정상적으로 Data를 받아오면
			if(request.status >= 200 && request.status < 300){
				//XML은 responseText가 아니라 responseXML로 읽습니다.
				var xml = request.responseXML 
				
				//num Tag와 name Tag 전부 가져오기
				var nums = xml.getElementsByTagName("num")
				var names = xml.getElementsByTagName("name")
				
				//배열 순회
				/* 이러한 방법도 가능 합니다.
				for(var idx in nums){
					
				}
				*/
				for(var idx = 0 ; idx < nums.length ; idx = idx + 1){
					var num = nums[idx].childNodes[0].nodeValue
					var name = names[idx].childNodes[0].nodeValue
					console.log(num +":"+name)
				}
				
			}else if(request.status >= 400 && request.status < 500){
				console.log("클라이언트 오류입니다.")	
			}else if(request.status >= 500 && request.status < 600){
				console.log("서버 오류입니다.")
		
			}
			
		}
	
	}