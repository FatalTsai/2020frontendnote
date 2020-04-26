$(document).ready(function(){
    sceneSwitchItem();
    $('#btn-1-1-1').click(function(event){
        checkAns(1,1,1,true);
    });
    $('#btn-1-1-2').click(function(event){
        checkAns(1,1,2,false);
    });
});

function checkAns(n1,n2,n3,isCorrect){
    $('#Modal-'+n1+'-'+n2).modal('hide');
    if(isCorrect==true){
        $('#Modal-sus-'+n1+'-'+n2).modal('show');  
    }else{
        $('#Modal-fail').modal('show');  
    }
}

function sceneSwitchItem(){
    $('.home').click((event)=>{
        sceneSwitch(0);
    })
    
    for(let i=1;i<=5;i++){
        $('.scene-item-0-'+i).click((event)=>{
            sceneSwitch(i);
        })
    }
}

let sceneSwitch=(sn)=>{
    $('.game-home').hide();
    $('.game-1').hide();
    $('.game-2').hide();
    $('.game-3').hide();
    $('.game-4').hide();
    $('.game-5').hide();
    if(sn==0){
        $('.game-home').show();
    }else{
        $('.game-'+sn).show();
    }
}


// function sceneSwitch(sn){
//     $('.game-home').hide();
//     $('.game-1').hide();
//     $('.game-2').hide();
//     $('.game-3').hide();
//     $('.game-4').hide();
//     $('.game-5').hide();
//     if(sn==0){
//         $('.game-home').show();
//     }else{
//         $('.game-'+sn).show();
//     }
// }

