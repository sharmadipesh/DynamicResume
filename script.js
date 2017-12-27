//Name in Bold
var fname=document.querySelector("#fname");
fname.addEventListener("keyup",function(e){
    e.preventDefault();
    var val=document.querySelector("#fname").value;
    document.querySelector("#nameInBold").textContent=val;

});

//new Educational Details
var eduMain=document.querySelector("#eduMain");
var addEdu=document.querySelector("#eduNew");
addEdu.addEventListener("click",function(e){
    
    e.preventDefault();
    
    var ct=document.querySelector("#category").value;
    var fr=document.querySelector("#from").value;
    var to=document.querySelector("#to").value;
    var school=document.querySelector("#se").value;
    if(ct && fr && to && school)
    {

    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");
    var div5=document.createElement("div");
    var div6=document.createElement("div");
    var div7=document.createElement("div");


    div1.classList.add("col-2","icon-right");
    div2.classList.add("col-4","form-group");
    div3.classList.add("col-2","form-group");
    div4.classList.add("col-2","form-group");
    div5.classList.add("col-2","form-group");
    div6.classList.add("col-9","form-group");
    div7.classList.add("form-row");
    //div1
    var i=document.createElement("i");
    i.classList.add("material-icons","md-48");
    i.textContent="payment";
    div1.appendChild(i);

    //div2
    var label1=document.createElement("label");
    label1.setAttribute("for","category");
    label1.textContent="Category";

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","category");
    input1.classList.add("form-control","form-rounded");
    div2.appendChild(label1);
    div2.appendChild(input1);

    //div3
    var label2=document.createElement("label");
    label2.setAttribute("for","from");
    label2.textContent="From";

    var input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","from");
    input2.classList.add("form-control","form-rounded");
    div3.appendChild(label2);
    div3.appendChild(input2);

    //div4
    var label3=document.createElement("label");
    label3.setAttribute("for","to");
    label3.textContent="To";

    var input3=document.createElement("input");
    input3.setAttribute("type","text");
    input3.setAttribute("id","to");
    input3.classList.add("form-control","form-rounded");
    div4.appendChild(label3);
    div4.appendChild(input3);

    //div5
    div5.setAttribute("id","btn-pd");
    var btn1=document.createElement("button");
    btn1.classList.add("btn","color-btn","btn-sm");
    btn1.setAttribute("id","eduNew");
    btn1.textContent="Delete";
    div5.appendChild(btn1);

    //div6
    div6.setAttribute("id","univ");
    var label4=document.createElement("label");
    label4.setAttribute("for","se");
    label4.textContent="School/University Name";

    var input4=document.createElement("input");
    input4.setAttribute("type","text");
    input4.setAttribute("id","se");
    input4.classList.add("form-control","form-rounded");
    div6.appendChild(label4);
    div6.appendChild(input4);

    div7.appendChild(div1);
    div7.appendChild(div2);
    div7.appendChild(div3);
    div7.appendChild(div4);
    div7.appendChild(div5);
    div7.appendChild(div6);
    
    eduMain.appendChild(div7);
    
    }
    else
    {
        alert("Fill Empty Fields");
    }
});




//add Work Experiance
var workExp=document.querySelector("#workExp");
var addWork=document.querySelector("#addWork");
addWork.addEventListener("click",function(e){
    e.preventDefault();

    var posi=document.querySelector("#pos").value;
    var fr=document.querySelector(".workfrom").value;
    var pt=document.querySelector(".workto".value);
    var compan=document.querySelector("#comp").value;
    // if(posi && fr && pt && compan)
    // {

    
    
    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");
    var div5=document.createElement("div");
    var div6=document.createElement("div");
    var div7=document.createElement("div");
    

    div1.classList.add("col-2","icon-right","form-group");
    div2.classList.add("col-4","form-group");
    div3.classList.add("col-2","form-group");
    div4.classList.add("col-2","form-group");
    div5.classList.add("col-2","form-group");
    div6.classList.add("col-9","form-group");
    div7.classList.add("form-row");
    

    //div1
    var i=document.createElement("i");
    i.classList.add("material-icons","md-48");
    i.textContent="work";
    div1.appendChild(i);

    //div2
    var label1=document.createElement("label");
    label1.setAttribute("for","pos");
    label1.textContent="Position";

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","pos");
    input1.classList.add("form-control","form-rounded");
    div2.appendChild(label1);
    div2.appendChild(input1);

    //div3
    var label2=document.createElement("label");
    label2.setAttribute("for","from");
    label2.textContent="From";

    var input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","from");
    input2.classList.add("form-control","form-rounded");
    div3.appendChild(label2);
    div3.appendChild(input2);

    //div4
    var label3=document.createElement("label");
    label3.setAttribute("for","to");
    label3.textContent="To";

    var input3=document.createElement("input");
    input3.setAttribute("type","text");
    input3.setAttribute("id","to");
    input3.classList.add("form-control","form-rounded");
    div4.appendChild(label3);
    div4.appendChild(input3);

    //div5
    div5.setAttribute("id","btn-pd");
    var btn1=document.createElement("button");
    btn1.classList.add("btn","color-btn","btn-sm");
    btn1.setAttribute("id","eduNew");
    btn1.textContent="Delete";
    div5.appendChild(btn1);

    //div6
    div6.setAttribute("id","univ");
    var label4=document.createElement("label");
    label4.setAttribute("for","comp");
    label4.textContent="Company/Oraganization";

    var input4=document.createElement("input");
    input4.setAttribute("type","text");
    input4.setAttribute("id","comp");
    input4.classList.add("form-control","form-rounded");
    div6.appendChild(label4);
    div6.appendChild(input4);

    div7.appendChild(div1);
    div7.appendChild(div2);
    div7.appendChild(div3);
    div7.appendChild(div4);
    div7.appendChild(div5);
    div7.appendChild(div6);

    workExp.appendChild(div7);
    // }
    // else{
    //     alert("Fill the empty Fields");
    // }
});


//add project
var addProject=document.querySelector("#addProject");
var newProject=document.querySelector("#newProject");
newProject.addEventListener("click",function(e){
    e.preventDefault();

    var ti=document.querySelector("#ttl").value;
    var desq=document.querySelector("#des").value;
    
    if(ti && desq)
    {

    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");
    var div5=document.createElement("div");
    var div6=document.createElement("div");

    div6.classList.add("form-row");
    div1.classList.add("col-2","icon-right","form-group");
    div2.classList.add("col-8","form-group");
    div3.classList.add("col-2","form-group");
    div4.classList.add("col-9","form-group","desc");
    div5.classList.add("col-9","form-group","desc");

    //div1
    var i=document.createElement("i");
    i.classList.add("material-icons","md-48");
    i.textContent="filter_frames";
    div1.appendChild(i);

    //div2
    var label1=document.createElement("label");
    label1.setAttribute("for","ttl");
    label1.textContent="Title";

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","ttl");
    input1.classList.add("form-control","form-rounded");
    div2.appendChild(label1);
    div2.appendChild(input1);

    //div3
    div3.setAttribute("id","btn-pd");
    var btn1=document.createElement("button");
    btn1.classList.add("btn","color-btn","btn-sm");
    btn1.setAttribute("id","eduNew");
    btn1.textContent="Delete";
    div3.appendChild(btn1);    

    //div4
    var label2=document.createElement("label");
    label2.setAttribute("for","des");
    label2.textContent="Description";

    var input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","des");
    input2.classList.add("form-control","form-rounded");
    div4.appendChild(label2);
    div4.appendChild(input2);

    //div5
    var label3=document.createElement("label");
    label3.setAttribute("for","lnk");
    label3.textContent="Project Link";

    var input3=document.createElement("input");
    input3.setAttribute("type","text");
    input3.setAttribute("id","lnk");
    input3.classList.add("form-control","form-rounded");
    div5.appendChild(label3);
    div5.appendChild(input3);

    div6.appendChild(div1);
    div6.appendChild(div2);
    div6.appendChild(div3);
    div6.appendChild(div4);
    div6.appendChild(div5);

    addProject.appendChild(div6);
    }
    else
    {
        alert("Fill the Empty fields");
    }
});

//Achievements

var achieve=document.querySelector("#achie");
var addAch=document.querySelector("#addAch");
addAch.addEventListener("click",function(e){
    e.preventDefault();

    var tq=document.querySelector("#ach").value;
    var yrq=document.querySelector("#yr").value;

    if(tq && yrq)
    {
    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");
    var div5=document.createElement("div");
    
    

    div1.classList.add("col-2","icon-right","form-group");
    div2.classList.add("col-5","form-group");
    div3.classList.add("col-2","form-group");
    div4.classList.add("col-2","form-group");
    div5.classList.add("form-row");
    //div1
    var i=document.createElement("i");
    i.classList.add("material-icons","md-48");
    i.textContent="check_circle";
    div1.appendChild(i);

    //div2
    var label1=document.createElement("label");
    label1.setAttribute("for","ach");
    label1.textContent="Title";

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","ach");
    input1.classList.add("form-rounded","form-control");
    
    div2.appendChild(label1);
    div2.appendChild(input1);

    //div3
    div3.setAttribute("id","achyr");
    var label2=document.createElement("label");
    label2.setAttribute("for","yr");
    label2.textContent="Year";

    var input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","yr");
    input2.classList.add("form-rounded","form-control");
    
    div3.appendChild(label2);
    div3.appendChild(input2);


    //div4
    var btn1=document.createElement("button");
    btn1.classList.add("btn","color-btn","btn-sm");
    btn1.textContent="Delete";
    div4.appendChild(btn1);

    div5.appendChild(div1);
    div5.appendChild(div2);
    div5.appendChild(div3);
    div5.appendChild(div4);
    achieve.appendChild(div5);
    
    }
    else
    {
        alert("Fill the Empty Field");
    }
});


//delete Education Details

var del1=document.querySelector("#addProject");
del1.addEventListener("click",function(e){
    if(e.target.textContent=="Delete")
    {
        var d=e.target.parentElement.parentElement;      
        d.parentNode.removeChild(d);
    }
});

// delete Work experience

var del2=document.querySelector("#workExp");
del2.addEventListener("click",function(e){
    if(e.target.textContent=="Delete")
    {
        var d=e.target.parentElement.parentElement;      
        d.parentNode.removeChild(d);
    }
});

var del3=document.querySelector("#workExp");
del3.addEventListener("click",function(e){
    if(e.target.textContent=="Delete")
    {
        var d=e.target.parentElement.parentElement;      
        d.parentNode.removeChild(d);
    }
});


var del4=document.querySelector("#achie");
del4.addEventListener("click",function(e){
    if(e.target.textContent=="Delete")
    {
        var d=e.target.parentElement.parentElement;      
        d.parentNode.removeChild(d);
    }
});



