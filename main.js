function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier= ml5.soundClassifier('model.json'), modelReady;
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    console.log('Got Result')
}

function gorResults(error, results)
{
    if(error) 
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = math.floor(math.random() * 255) + 1;
        random_number_g = math.floor(math.random() * 255) + 1;
        random_number_b = math.floor(math.random() * 255) + 1;

        document.getElementById("result-label").innerHTML= 'I can hear ' + results[0].label;
        document.getElementById("result-label").style.color = "rgb("+random_number_r+","+random_number_g+","+ramdon_number_b+")";
        document.getElementById("result-dog-confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result-cat-confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result-cow-confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result-lion-confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img= document.getElementById('img_hearing');
        dog= 0;
        cat= 0;
        cow= 0;
        lion= 0;
        

        if (results[0].label == "Barking")
        {
            img.src = 'dog.gif';
            document.getElementById("result_dog_confidence").innerHTML = 'Detcted Dog- ' + (dog + 1); 
        }
        else if (results[0].label == 'Meowing')
        {
            img.src = 'cat.gif';
            document.getElementById("result_cat_confidence").innerHTML = 'Detcted Cat- ' + (cat + 1); 
        }
        else if (results[0].label == 'Mooing')
        {
            img.src = 'cow.webp';
            document.getElementById("result_cow_confidence").innerHTML = 'Detcted Cow- ' + (cow + 1); 
        }
        else if (results[0].label == 'Roaring')
        {
            img.src = 'lion.gif';
            document.getElementById("result_lion_confidence").innerHTML = 'Detcted Lion- ' + (lion + 1); 
        }
        else
        {
            img.src = 'ear_wiggle.gif';
        }
    }
}
