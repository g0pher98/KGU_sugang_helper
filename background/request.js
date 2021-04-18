    const HOST = "http://sugang.kyonggi.ac.kr";
    const lang = "ko";
    let timestamp = Date.now();
    var urlSugangMode = function() {
        return HOST + "/sugang?attribute=sugangMode&lang="+lang+"&fake="+timestamp;
    }

    function init_timestamp() {
        timestamp = Date.now()
        fetch(HOST + `/core?attribute=lectListJson&lang=ko&fake=${timestamp}&menu=2&initYn=N&div_cd=C&_search=false&nd=1615343383020&rows=-1&page=1&sidx=&sord=asc`)
        .then(r=>r.text()).then(function(resp) {
            console.log(resp)
        });
    }

    function okMode( lec_nm, params, rowid, mode, retake_yn, reSugang_key, ticket ){
        /*
            @g0pher
            소망가방에 담겨있는 "0711 직무역량특별강좌" 수강신청 버튼 클릭 시 호출됨.
            다음과 같은 인자를 받음

            params가 특이한데, 소망가방 List에서 [aria-describedby="gridBasket_params"]인
            항목이 데이터를 가지고 있음.
            
            학부(=01)@과목번호@대학(?)
            ex) 01@1539@7586 -> '인공지능'
            ex) 01@0711@1253 -> '소망가방에 담겨있던 직무역량특별강좌'
            와 같은 형태이며, 추가 선택은 '인공지능' 수업 선택 시 나왔던 것으로 기억됨.
            아마도 해당 과목 운영 대학을 선택하는 것이었을텐데, 그것일 것임.

            검색으로 수강신청할 때는 마지막 항목이 0000으로 채워지는 것으로 보아 동일코드의 과목이 아니면


            [직무역량특별강좌, 01@0711@1253, 1, insert, N, undefined, undefined]
        */

        // @g0pher
        init_timestamp()
        console.log(lec_nm, params, rowid, mode, retake_yn, reSugang_key, ticket)
        fetch(
            urlSugangMode() +"&mode="+mode+"&fake="+Date.now(),
            data = {params:params, retake_yn:retake_yn, reSugang_key:reSugang_key, ticket:ticket}
        ).then(r=>r.json())
        .then(function(resp) {
            console.log(resp);
        });

        /*
        var menu = $("#menu").val(); // 선택메뉴
        $("#retake").dialog();
        if($("#retake").dialog("isOpen")){
            $("#retake").dialog("close");
        }
        
        $.ajax({
            type: "POST",
            url: urlSugangMode +"&mode="+mode+"&fake="+Date.now(),
            data:{params:params, retake_yn:retake_yn, reSugang_key:reSugang_key, ticket:ticket},
            async:false,
            success: function(data) {
                var tmp = eval("("+data+")");
                var code = tmp.code;
                var msg  = tmp.msg;		

                console.log(tmp)
                
                if( code == "-1" ){	// -1을 에러라 지칭한다. / 500
                    console.log('Error -1 : ' + tmp.msg);
                }else if(code == "5" ){	//이수구분처리
                    $("#gwamok_cd2").val( tmp.gwamok_cd );
                
                    for(var i=0; i<document.form.univ_cd.length; i++){
                        if( document.form.univ_cd[i].value == tmp.univ_cd ){					
                            document.form.univ_cd[i].selected = true;
                            break;
                        }
                    }
                    $("#span_isu_cd").show(); 	// document.all.span_isu_cd.style.display = "block";  -- 이거 일단 주석처리함
                    document.form.isu_cd.focus();				
                    // 빠른수강신청 콤보 불러오기
                    loadFastIsuCombo(tmp.isu_cd, tmp.isu_cd2); // 이수구분 콤보 불러오기
                    msgAlert(tmp.msg);				
                }else if(code == "6"){	//멀티로그온 로그아웃
                    console.log('Error 6 : 멀티로그온 탐지');
                }else if(code == "9"){
                    console.log('Error 6 : ' + tmp.msg);
                }else if(code == "MACRO"){	//매크로
                    console.log('Error MACRO : 매크로 탐지');
                }else if(code == "500"){
                    console.log('Error 500 : ' + tmp.msg);
                }else{
                    if(mode == 'insert'){
                        msgAlertRandom(msg);
                    }else{
                        msgAlert(msg);
                    }
                    $("#gwamok_cd2").val("");
                    $("#isu_cd").val("00000");
                    $("#span_isu_cd").hide();	//document.all.span_isu_cd.style.display = "none";
                    
                    $("#gridSugang").trigger("reloadGrid");				
                }
                
            },
            error: function(req, status, error){
                alert("code:"+req.status+"\n"+"message:"+req.responseText+"\n"+"error:"+error);
            }
        });*/
    } 