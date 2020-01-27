const_pushes_per_click = 3;

const texts = {
    "intro": "Hello! My name is Henry Westfall. I was born on October 17, 2004 and am now 15 years old.",
    "hobbies": "I like to program and play board games in my free time. !twilightimperium.png !secrethitler.jpeg !dominion.png !python.jpg !javascript.jpeg !cpp.jpg"
};

const text_arrays = {
    "intro": texts["intro"].split(" "),
    "hobbies": texts["hobbies"].split(" ")
};

let pushed_texts = {
    "intro": "",
    "hobbies": ""
};
let indices = {
    "intro": 0,
    "hobbies": 0
};

function tellmore(place) {
    console.log("telling more...");
    for (i=0; i<=const_pushes_per_click; i++) {
        if (text_arrays[place].length <= indices[place]) {
            break;
        }
        word = text_arrays[place][indices[place]]
        indices[place] += 1;
        if (word.startsWith("!")) {
            console.log(word);
            image_path = word.replace("!", "");
            image = document.getElementById(word);
            image.setAttribute("src", image_path);
            image.setAttribute("height", "200px");
            break;
        }
        else {
            pushed_texts[place] = pushed_texts[place] + word + " ";
        }
     }
    document.getElementById(place).innerHTML = pushed_texts[place];
}