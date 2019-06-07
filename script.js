function createDiv(text,className){
    var c = document.createElement("div");
    c.innerText= text;
    if(className){
        c.classList.add(className);
    }
    return c;
}
function createButton(Text,className,dataPurpose){
    var b = document.createElement("button");
    b.innerText = Text;
    b.setAttribute("data-purpose",dataPurpose);
    if(className){
        b.classList.add(className);
    }
    return b;
}
function createToDo(Text){
    var t= createDiv("","todo-list");
    var t1 = createDiv(Text,"task");
    t.append(t1);
    var tb = createDiv("","task-button");
    var up = createButton("up","buttons","up");
    var down = createButton("down","buttons","down");
    var remove = createButton("remove","buttons","remove");
    tb.append(up);
    tb.append(down);
    tb.append(remove);
    t.append(tb);
    return t;
}
var enterToDo = document.getElementById("todo-input");
var add = document.getElementById("todo-button");
var main = document.getElementById("main");
add.addEventListener("click",function(){
     if(enterToDo.value.length >0){var to = createToDo(enterToDo.value);
     to.style.opacity=0;                                
        main.append(to);
        enterToDo.value = "";
    setTimeout(function(){
        to.style.opacity=1;
    },300)                               
                                }
})
enterToDo.addEventListener("keyup",function(e){
    if(e.keyCode === 13){
        if(enterToDo.value.length >0){var to = createToDo(enterToDo.value);
        to.style.opacity=0;                              
        main.append(to);
        enterToDo.value = "";
        setTimeout(function(){
        to.style.opacity=1;
    },300)}
    }
})
main.addEventListener("click",function(e){
    if(e.target.nodeName === "BUTTON"){
        var button = e.target;
        var typbt = button.getAttribute("data-purpose");
            var l = button.parentElement.parentElement;
        switch(typbt){
            case "remove":
            main.removeChild(l);    
            break;
            case "up":
                var l1 = l.previousElementSibling;
                if(l1 !== null){
                    main.removeChild(l);
                  setTimeout(function(){
                      main.insertBefore(l,l1);
                  },500);    
                }
                break;
            case "down":
                var l2 = l.nextElementSibling;
                if(l2 !== null){
                    main.removeChild(l);
                   setTimeout(function(){
                       main.insertBefore(l,l2.nextElementSibling);
                   },500);
                          
                }
                break;
        }
    }
})
const searchb = document.getElementById('searchBar');
searchb.addEventListener('keyup',function(e){
    const term = e.target.value;
    const searchTitle = document.querySelectorAll('.todo-list');
    Array.from(searchTitle).forEach(function(searchTitles){
        const searched= searchTitles.firstChild.textContent;
        if(searched.indexOf(term)!=-1){
            searchTitles.style.display="flex";
        }
        else{
            searchTitles.style.display="none";
        }
    })
})
const addTab = document.getElementById('addTab');
const bar = document.querySelector('.search');
const searchTab = document.getElementById('searchTab');
const bar1 = document.querySelector('.todo-input');
addTab.addEventListener('click',function(e){
    bar.style.display="none";
    addTab.style.backgroundColor = "cornsilk";
    searchTab.style.backgroundColor = "blanchedalmond";
    bar1.style.display = "block";
    searchTab.style.hover.backgroundColor =  "azure";
})
searchTab.addEventListener('click',function(e){
    bar1.style.display="none";
    searchTab.style.backgroundColor = "azure";
    bar.style.display = "block";
    addTab.style.backgroundColor = "blanchedalmond";
    
})
