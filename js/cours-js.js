window.addEventListener("load", function(){
    var menuList = document.getElementById("menu-list").children;
    var themesList = document.querySelector("#themes ul").children;
    var pracList = document.querySelector("#practice ul").children;
    var medicList = document.querySelector("#medicine ul").children;
    var textArea = document.getElementById("text-area");
    
    var histB = document.querySelector(".hist");
    
    var them = document.getElementById("themes");
    var prac = document.getElementById("practice");
    var medic = document.getElementById("medicine");
    
    for(var i = 0; i<menuList.length;i++){
        menuList[i].addEventListener("click",function(){
            if(this.innerHTML =="Теорія"){
                them.style.display = "block";                
                prac.style.display = "none";
                medic.style.display = "none";
                document.querySelector(".opacit").style.display = "block";
                
            }else if(this.innerHTML =="Практика"){
                them.style.display = "none";                
                prac.style.display = "block";
                medic.style.display = "none";
                document.querySelector(".opacit").style.display = "block";
                
            }else{
                them.style.display = "none";                
                prac.style.display = "none";
                medic.style.display = "block";
                document.querySelector(".opacit").style.display = "block";
            }
            console.dir(this.textContent);
        })
    }
    
    
    themesList[0].addEventListener("click", function(){
        them.style.display = "none"; 
        histB.innerHTML =  "Головна &rarr; Курси" + " &rarr; Теорія";
        
        
        
        
        document.querySelector(".opacit").style.display = "none";
        document.getElementById("list-content").innerHTML = this.innerHTML;
        document.getElementById("text-cont").innerHTML = "Введення. Умови зарахування на курс. Перший раз все здається незвичайним: маска, дивне і досить важке спорядження. Ви входите у воду і повільно занурюєтеся в неї. Ви вдихаєте і чуєте обнадійливе шипіння струменя повітря, що поступає. Отже, ви зробили свій перший вдих під водою. На мить ви забуваєте про свою маску. Ваше спорядження стає легким і рухливим. Ще ніколи у вас не було такого відчуття повної свободи. Спробувавши дихати під водою, ви відкриєте для себе двері у новий світ. Це буде не чужий вам, але абсолютно незвичайний світ. Увійдіть в ці двері - і ваше життя зміниться. Що саме вас приваблює у дайвінгу? Тільки ви самі можете відповісти на це питання. Якщо вас ваблять пригоди, то ви обов'язково їх знайдете: будь-то на затонулому кораблі, таємниці якого ви захочете розкрити, або у якій-небудь далекій країні серед незнайомих людей, а може бути в безпосередній близькості від вас - наприклад, недалеко від вашого заміського будинку. Якщо ви любите природу, то дайвінг - це те, що вам потрібно. Важко знайти інше співтовариство, яке б відрізнялось таким розмаїттям і великою кількістю життєвих форм, як первозданні коралові рифи. Буквально за десять хвилин ви побачите біля них більше різних представників флори і фауни, ніж за десять годин знаходження на суші в самому невинно чистому і нетронутому куточку. Згодом ви зрозумієте, що навіть в тих містах, які здаються пустельними та позбавленими життя, таких як, наприклад, озеро або затоплений кар'єр, можуть мешкати незвичайні організми. Це ще один доказ того, що у природи більш багата уява. Якщо вас цікавлять відкриття, ласкаво просимо у підводний всесвіт. Це свого роду метафра, але в ній є частка істини. Людина вивчила поверхню Місяця краще, ніж дно океану. Не виключено, що в улюблених усіма місцях для занурень ви побачите те, що до вас ніхто не бачив. Навіть маючи за плечима сотні занурень, ви можете відкрити для себе щось невідоме раніше, занурюючись в новому місці. Чергове ж відвідування добре знайомих місць для занурення можна порівняти з поверненням додому Підводне плавання відкриє перед вами нові горизонти. Заняття дайвінгом відноситься до тих рідкісних видів діяльності, які не тільки піднімають рівень адреналіну в крові, а й дозволяють поринути в стан спокою і безтурботності. Ви можете поставити перед собою завдання, рішення яких потребують підготовки, планування, додаткового спорядження і концентрації уваги: це може бути пошук і підйом затонулих предметів або обстеження улюбленого місця для занурень після заходу сонця. Або ж ви можете дрейфувати за течією в одному з найбільш красивих куточків світу, і єдина дилема, яка буде стояти перед вами в цей момент, - зупинитися, щоб сфотографувати морську зірку чи ні. Щоб ви не вибрали, дайвінг задовольнить ваші інтереси: завжди знайдуться нові, небачені раніше і ще не досліджені місця, а також способи насолоджуватися життям. Важко знайти інше заняття, яке було б вам настільки цікаве сьогодні, завтра і навіть через десять років. Дайвінг не може набриднути. Можливо, ви бачили фотографії, телевізійні передачі та фільми, присвячені дайвінгу. Але поки ви самі не здійсните занурення, ви не зрозумієте, що це таке. Хіба можна з чимось порівняти відчуття свободи і невагомості, можливість дихати під водою і насолоджуватися унікальними пейзажами і звуками.";
        menuList[0].style.backgroundColor = "#dddddd";
        menuList[1].style.backgroundColor = "";
        menuList[2].style.backgroundColor = "";
    });
    pracList[0].addEventListener("click", function(){
        prac.style.display = "none"; 
        histB.innerHTML =  "Головна &rarr; Курси" + " &rarr; Практика";
        
        menuList[0].style.backgroundColor = "";
        menuList[1].style.backgroundColor = "#dddddd";
        menuList[2].style.backgroundColor = "";
        
        document.querySelector(".opacit").style.display = "none";
        document.getElementById("list-content").innerHTML = this.innerHTML;
        document.getElementById("text-cont").innerHTML = "Занурення у закритій водоймі №1. Отже, тепер ви готові до занурення в закритому водному просторі. Воно неодмінно сподобається вам, ви відчуєте хвилюючі відчуття і ніколи не забудете перший вдих, зроблений під водою. На першому занятті в закритій воді інструктор і його асистенти допоможуть вам правильно надіти спорядження і пройдуть разом з вами через всі етапи підготовки до першого занурення з дихальним апаратом Після цього ви почнете набувати практичних навичок, необхідних кожному дайверу. Інструктор весь час буде перебувати поруч з вами, допомагати вам і робити все для того, щоб ви отримували задоволення від навчання. Якщо потрібна допомога чи порада - сміливо задавайте питання. Курс передбачає, що студенти повинні оволодіти теоретичним матеріалом і придбати певні практичні навички, використовуючи для цього гнучку систему вправ. Як сказано у вступі, якщо ви не розумієте, навіщо виконувати ту чи іншу дію, з'ясуйте це. Немає ніякого сенсу набувати навички та вміння, якщо ви не знаєте, де і коли їх потрібно застосовувати. Інструктор допоможе опанувати необхідні вам навички підводного плавання. Залежно від умов занурення,  потреб і здібностей, він буде вибирати послідовність виконання вправ і методику викладання. У будь-якому випадку ви повинні мати повне уявлення про те, що і як вам належить робити.";
    });
    medicList[0].addEventListener("click", function(){
        medic.style.display = "none"; 
        histB.innerHTML =  "Головна &rarr; Курси" + " &rarr; Медицина";
        
        menuList[0].style.backgroundColor = "";
        menuList[1].style.backgroundColor = "";
        menuList[2].style.backgroundColor = "#dddddd";
        
        document.querySelector(".opacit").style.display = "none";
        document.getElementById("list-content").innerHTML = this.innerHTML;
        document.getElementById("text-cont").innerHTML = "Основні протипоказання до дайвингу:  <br><div class='span-text'>1.Cерцево-судинні захворювання: порок серця (дефект міжпередсердної перегородки), гіпертонічна хвороба, атеросклероз, порушення серцевого ритму, стенокардія;<br>2.Хронічні захворювання легень і дихальних шляхів: емфізема легенів, бронхіальна астма фізичного навантаження;<br>3.Захворювання вуха, горла, носа: отит, гайморит;<br>4.Захворювання очей: кон'юнктивіт, блефарит; <br>5.Захворювання шкіри: екзема, дерматомікоз;<br>6.Захворювання обміну речовин: зайва вага, ожиріння, декомпенсований цукровий діабет; <br>7.Захворювання опорно-рухового апарату (бурсит, артрити, артрози, відсутність кінцівок). </div><br>Лікарі не рекомендують займатися дайвінгом протягом 2 тижнів після перенесених гострих респіраторних захворювань, грипу та інших інфекційних захворювань.";
    });
    
    var x = textArea.getBoundingClientRect().top;
    var y = textArea.getBoundingClientRect().left;
    var width = textArea.getBoundingClientRect().right-textArea.getBoundingClientRect().left;
    var height = textArea.getBoundingClientRect().bottom-textArea.getBoundingClientRect().top;
    
    function opac(){    
        var divOpac = document.createElement("div");
        divOpac.style.position = "absolute";
        divOpac.style.top = 0 + "px";
        divOpac.style.left = 0 + "px";
        divOpac.style.width = width+ "px";
        divOpac.style.height = height+"px";
        divOpac.style.backgroundColor = "black";
        divOpac.style.opacity = "0.7";
        divOpac.style.display = "none";
        divOpac.className = "opacit";
        textArea.appendChild(divOpac); 
    }
    opac();
    
});
