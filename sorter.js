
var myArr = ["AC","Bluetooth","Burger King","Mc Donald’s","Starbucks","adaptor","air conditioning","airplane","airport","alcohol","allergy","apple","arm","backpack","bag","bakery","banana","bar","barbeque","barber","beach","bed","bedroom","beer","bin","bird","boat","book","bookstore","bottle","bowl","boy","bread","bridge","burger","bus","bus stop","cable car","calculator","camera","camp","cap","car","card","cards","cash","cat","chair","charger","child","cinema","clock","clothes","club","cocktail","coffee","coffee shop","computer","condoms","convenience store","cow","crackers","credit card","cup","cutlery","day","debit card","dog","driver’s license","duck","egg","exchange","ferry","first aid kit","fish","fog","food","foot","fork","fridge","fruits","gas station","girl","glass","glasses","glue","gym","hair","hair-tie","hairbrush","hand","hand sanitizer","hike","horse","hospital","hostel","hotel","internet","intersection","iron","jacket","juice","key","kitchen","knife","lamb","laptop","laundry","library","lion","mall","man","mango","map","marker","market","meat","medicine","men","metro","microwave","milk","minifridge","money","moon","motorcycle","mountain","movie","mug","museum","night","noodles","notebook","numbers","nuts","ocean","oven","pan","panda","papaya","paper","passport","pasta","path","peanuts","pen","pencil","pharmacy","phone","picture","pig","pizza","plastic bag","plate","police","pork","pot","power","power bank","pregnancy test","purse","rain","razor","restaurant","rice","road","salad","salmon","school","scissors","sea","shampoo","shop","shopping","shopping center","shopping mall","sit","slippers","snacks","soap","socket","socks","spoon","square","stall","store","stove","strawberry","street","student","subway","suitcase","suitcase","sun","sunglasses","sunny","sunscreen","table","taxi","tea","telephone","television","tent","ticket office","tiger","time","toilet","toilet paper","toiletries","toilets","toothbrush","tourist","tourist attraction","tourist center","towel","tower","trail","train","train station","trash","trash can","tube","umbrella","university","vegan","vegetables","vegetarian","vodka","wall","watch","water","wifi","window","wine","wing","wipes","woman","women"]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var obj = new Object; 

myArr.forEach(function(word) {
    var correctedWord = 'anna';
    console.log('<img src="./images/' + correctedWord + '.png" id="'+ correctedWord + '"' + 'class="hiddenPics"></img>');
})

/*
for (var i = 0; i < alphabet.length; i++) {
    obj[alphabet[i]] = [];
}

function sortIt(b) {
    for (var i = 0; i < alphabet.length; i++) {
        for (var j = 0; j < 238; j++) {
            if (alphabet[i] == b[j][0]) {
                obj[alphabet[i]].push(b[j])
            }
        }
    }
    console.log(obj)
}


sortIt(myArr)
*/