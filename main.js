camera1 = document.getElementById("camera"); 
Webcam.set({ 
    width:360,
    height:250,
    image_format : 'jpeg', 
    jpeg_quality:90
 });
 Webcam.attach(camera1);

 function snapshot() { 
    Webcam.snap(function(data_uri) { 
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; }); 
}

console.log('ml5.version' , ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9rx9xcPxE/model.json",modelLoaded) ;

function modelLoaded() {
    console.log("modelLoaded");
}

function check() {
    img = document.getElementById('selfie_image') ;
    classifier.classify(img, gotResult) ;
}

function gotResult(error,result) {
    if (error) {
        console.log(error) ;
    }
    else {
        console.log(result) ;
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
    
}

function speak() {
    var synth = window.speechSynthesis ;
    speak_data = "Geometry Box" ;
    var Utterthis = new SpeechSynthesisUtterance(speak_data) ;
    synth.speak(Utterthis) ;
    Webcam.attach(camera) ;
}