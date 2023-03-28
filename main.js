var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
    

    
}
recognition.onresult=function(event){
    
    var content= event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
    
} 
function speak(){ var synth = window.speechSynthesis;
     speak_data = document.getElementById("textbox").innerHTML;
      var utterThis = new SpeechSynthesisUtterance(speak_data); 
      synth.speak(utterThis);
       Webcam.attach(camera);
     }

camera=document.getElementById("camera");
Webcam.set({
width:500,
height:400,
image_format: 'jpeg',
jpeg_quality:90
});
