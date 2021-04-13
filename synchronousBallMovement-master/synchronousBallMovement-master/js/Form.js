class Form{
    constructor(){}
    display(){
        var title=createElement('h2');
        title.html('Car Racing Game');
        title.position(450,100);

        var input=createInput('Name');
        var button=createButton('Play');
        

        input.position(450,360);
        button.position(450,420);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();

            var greeting=createElement('h3');
            greeting.html('Hello '+name);
            greeting.position(450,360);
        })
    }}
