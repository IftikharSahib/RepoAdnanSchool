// Step1: Define quizData

const quizData = [
    {
        question: " In which mountain range is Mount Everest located? \n ماؤنٹ ایورسٹ کس پہاڑی سلسلے میں واقع ہے؟ ",
        options: [" Karakoram ", " Alps ", " Himalayas ", " Andes "],
        correct: 2,  
    },
    {
        question: " What is the height of Mount Everest? \n ماؤنٹ ایورسٹ کی اونچائی کتنی ہے؟ ",
        options: [" 8,611 meters ", " 8,748 meters ", " 8,848.86 meters ", " 9,000 meters "],
        correct: 2,  
    },

    {
        question: " When was Mount Everest first summited? \n ماؤنٹ ایورسٹ پہاڑ کو پہلی بار کب سر کیا گیا؟ ",
        options: [" 29 May 1950 ", " 29 May 1951 ", " 29 May 1952 ", " 29 May 1953 "],
        correct: 3,  
    },
    {
        question: " What was John Hunt's role in the 1953 Mount Everest expedition? \n ماؤنٹ ایورسٹ کی مہم 1953 میں جان ہنٹ کا کیا کردار تھا؟ ",
        options: [" He was the first to summit ", " He was the expedition leader ", " He was the photographer ", " He was the doctor of the team "],
        correct: 1,  
    },

    {
        question: " Who summited Mount Everest first of all on 29 May 1953? \n ماؤنٹ ایورسٹ پہاڑ کو سب سے پہلے 29 مئی 1953 کو کس نے سر کیا؟ ",
        options: [" John Hunt ", " Reinhold Messner and Peter Habeler ", " Sir Edmund Hillary and Tenzing Norgay ", " Junko Tabei and Tenzing Norgay "],
        correct: 2,  
    },
    {
        question: " Who was the first woman to summit Mount Everest on 16 May 1975? \n ماؤنٹ ایورسٹ کو سر کرنے والی 16 مئی 1975 کو پہلی خاتون کون تھی ؟ ",
        options: [" Junko Tabei (Japan) ", " Lhakpa Sherpa ", " Alison Hargreaves ", " Wanda Rutkiewicz "],
        correct: 0,  
    },
    {
        question: " What is the Tibetan name for Mount Everest? \n ماؤنٹ ایورسٹ کا تبتی نام کیا ہے؟ تبت کے لوگ کس نام سے پکارتے ہیں ؟ ",
        options: [" Sagarmatha ", " Chomolungma ", " Deodungha ", " Gaurishankar "],
        correct: 1,  
    },

    {
        question: " تاریخ دانوں کا خیال ہے تقریبا 22 کروڑ 50 لاکھ سال قبل ساری خشک زمین ایک براعظم ایک زمین کی صورت میں اکٹھی تھی۔ اس بڑے بر اعظم کا نام کیا؟ ",
        options: [" Pangaea ", " Gondwana ", " Atlantis ", " Laurasia "],
        correct: 0,  
    },

    {
        question: " ایک نابینا شخص لوئس بریل نے بریل سسٹم ایجاد کیا جس کی مدد سے اندھے انسان پڑھ لکھ سکتے ہیں۔ بریل سسٹم کب ایجاد ہوا ؟ ",
        options: [" 1629 ", " 1729 ", " 1829 ", " 1929 "],
        correct: 2,  
    },


    {
        question: " تقریبا چار ہزار سال قبل پہلی کاغذ والی کتاب تیار کی گئی۔ کہاں کے لوگوں نے کی ؟ ",
        options: [" مصریوں نے ", " یونانیوں نے ", " چاپانیوں نے ", " افغانیوں نے "],
        correct: 0,  
    },

    {
        question: " امریکہ کا دعویٰ ہے کہ تین امریکی خلا باز اپالو 11 کے ذریعے چاند پر اترے۔ کب اترے  ؟ ",
        options: [" 16 July 1969 ", " 16 July 1970 ", " 16 July 1971 ", " 16 July 1972 "],
        correct: 0,  
    },

    {
        question: " انسانوں اور جانوروں کو کاٹتا ہے ؟ ",
        options: ["مادہ مچھر", "نر مچھر", " نر مچھر اور مادہ مچھر", "ان میں سے کوئی نہیں"],
        correct: 0,  
    },

    {
        question: " مچھر کی کتنی اقسام ہیں؟ ",
        options: [" More than 3000 ", " More than 4000", " More than 5000 ", " More than 6000 "],
        correct: 0,  
    },

   {
        question: " Dengue fever (Breakbone fever) is spread by the bite of which mosquito? \n ڈینگی بخار کس مچھر کے کاٹنے سے پھیلتا ہے؟ ",
        options: [" Female Anopheles ", " Male Culex ", " Female Aedes Aegypti ", " Male Aedes "],
        correct: 2,  
    },

    {
        question: " Malaria is spread by the bite of which mosquito? \n ملیریا کس مچھر کے کاتنے سے پھیلتا ہے؟ ",
        options: [" Aedes Aegypti ", " Culex ", " Female Anopheles ", " Male Anopheles "],
        correct: 2,  
    },

    {
        question: "Indonesian President (Prabowo Subianto) visited Pakistan 8-9 December 2025. During his visit, how many agreements were signed between Pakistan and Indonesia? \n انڈونیشیا کے صدر (پربو سوبیانتو) نے 8-9 دسمبر 2025 کو پاکستان کا دورہ کیا۔ اس دورے کے دوران پاکستان اور انڈونیشیا کے درمیان کتنے معاہدوں پر دستخط ہوئے؟",
        options: ["5", "7", "9", "11"],
        correct: 3,
    },

    {
        question: "Pakistan Olympic Association (POA) was established and recognized by International Olympic Committee (IOC) in the year?",
        options: ["1947", "1948", "1949", "1950"],
        correct: 1,  
    },

    {
        question: "Pakistan's 35th National Games held from 6 December 2025 to 13 December 2025. In which city were these games held?",
        options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
        correct: 0,  
    },

    {
        question: "In Pakistan's 35th National Games, in 100 meter men race, who won the race?",
        options: ["Samiullah", "Muhammad Akbar", "Muhammad Zubair", "Arsalan"],
        correct: 0,  
    },
    
    {
        question: "In Pakistan's 35th National Games, in 100 meter women race, who won the race?",
        options: ["Amina Riaz", "Sana Riaz", "Aysha Riaz", "Fiqa Riaz"],
        correct: 3,  
    },

    {
        question: "In Pakistan's 35th National Games, 9 years old Kainat Ibrahim (Sindh) participated in 10,000 meter women race and won?",
        options: ["Gold Medal", "Silver Medal", "Bronze Medal", "None of These"],
        correct: 2,  
    },

    {
        question: "Bashar Al Asad regime in Syria ended on?",
        options: ["8 Dec 2022", "8 Dec 2023", "8 Dec 2024", "8 Dec 2025"],
        correct: 2,  
    },

    {
        question: " ایشین ڈیویلپمنٹ بینک کی ایشین واٹر ڈیویلپمنٹ آؤٹ لک رپورٹ 2025 میں انکشاف ہوا ہے کہ پاکستان میں پینے کے لئے صاف پانی کم ہو رہا ہے۔ پاکستان کی کتنے فی صد آبادی پینے کے صاف پانی سے محروم ہے؟  " ,
        options: ["50 % of Population", "60 % of Population", "70 % of Population", "80 % of Population"],
        correct: 3,  
    },

    {
        question: " Pakistan got its first loan from which country? \n پاکستان نے اپنا پہلا قرضہ کس ملک سے لیا تھا؟ ",
        options: [" USA ", " UK ", " India ", " Saudi Arabia "],
        correct: 0,  
    },

    {
        question: " What is name of organization from which Pakistan got its first loan in 1950? \n پاکستان نے 1950 میں کس ادارے سے پہلا قرضہ لیا تھا؟ ",
        options: [" World Bank ", " IMF ", " Export-Import Bank ", " ADB "],
        correct: 1,  
    },

    {
        question: " How much was Pakistan's first loan from IMF in 1950? \n  پاکستان نے  1950 میں آئی ایم ایف سے کتنا پہلا قرضہ لیا تھا؟",
        options: [" $3.8 million ", " $10 million ", " $25 million ", " $50 million "],
        correct: 1,  
    },

    {
        question: " What was the purpose of the $10 million loan that Pakistan got from IMF in 1950? \n  پاکستان نے 1950 میں آئی ایم ایف سے جو 10 ملین ڈالر کا قرضہ لیا تھا اس کا مقصد کیا تھا؟ ",
        options: [" For Railway Development ", " For Balance of Payments ", " For War Expenses ", " For Education "],
        correct: 1,  
    },

    {
        question: " Pakistan got its bilateral loan of $3.8 million from Export-Import Bank of USA in 1951. What was the purpose of this loan? \n پاکستان نے 1951 میں ایکسپورٹ امپورٹ بینک آف یو ایس اے سے 3.8 ملین ڈالر کا دو طرفہ قرضہ لیا۔ اس قرضے کا مقصد کیا تھا؟ ",
        options: [" For Defense ", " For Balance of Payments ", " For Railway and Development Projects ", " For Education "],
        correct: 2,  
    },

    {
        question: " اسٹیٹ بنک آف پاکستان کے اعداد و شمار کے مطابق دسمبر 2025 میں پاکستان کا مجموعی قرضہ کتنا ھو گیا ھے ؟",
        options: ["46 HAZAR 980 ARAB RUPEES", "56 HAZAR 980 ARAB RUPEES", "66 HAZAR 980 ARAB RUPEES", "76 HAZAR 980 ARAB RUPEES"],
        correct: 3,
    },
    {
        question: " What was Pakistan's total public debt on 31.12.2025? \n   پاکستان کا 31 دسمبر 2025 تک کل قرضہ کتنا تھا؟ ",
        options: [" $113.069 billion ", " $277.6 billion ", " $286.8 billion ", " $81.3 trillion "],
        correct: 0,
    },

    {
        question: "برج خلیفہ دنیا کی بلند ترین عمارت ھے۔ اس کی بلندی کتنی ھے؟",
        options: ["728 Meter", "828 Meter", "928 Meter", "1028 Meter"],
        correct: 1,
    },

    {
        question: "تیس ستمبر 1951 کو پروفیسر محمود انور ریاضی دان نے پاکستان سٹینڈرڈ ٹائم متعارف کروا یا ۔ یہ پی ایس ٹی کب لاگو ہوا؟",
        options: ["1 Oct 1951", "1 Oct 1952", "1 Oct 1953", "1 Oct 1954"],
        correct: 0,
    },
    {
        question: "شہد کی مکھی انسان کو ڈنگ مارنے کے بعد ۔۔۔۔۔۔۔۔۔۔۔ ",
        options: ["مر جاتی ھے", "سفید ھو جاتی ھے", "کالی ھو جاتی ھے", "سبز ھو جاتی ھے"],
        correct: 0,
    },

    {
        question: " On which date did Turkey officially change its name to Türkiye? \n ترکی نے اپنا نام سرکاری طور پر ترکیہ کب تبدیل کیا؟ ",
        options: [" 2 June 2022 ", " 2 June 2023 ", " 2 June 2024 ", " 2 June 2025 "],
        correct: 0,  
    },

    {
        question: "In November 2025, pilotless fighter jet name (Bayraktar Kizilelma) successfully destroyed a high-speed target drone. Kizilelma is of which country?",
        options: ["USA", "Turkiye", "Iran", "China"],
        correct: 1,
    },
    
    {
        question: "Bayraktar Kizilelma is manufactured by which company? ",
        options: ["Lockheed Martin", "Baykar", "TUSAŞ", "Northrop Grumman"],
        correct: 1,
    },

    {
        question: "At the World Powerlifting Championship held in Colombo from 27 November 2025 to 30 November 2025, which young Pakistani athlete won the Gold Medal? \n ورلڈ پاور لفٹنگ چیمپین شپ جو 27 نومبر 2025 سے 30 نومبر 2025 تک کولمبو میں منعقد ہوئی، اس میں پاکستان کے کس نوجوان ایتھلیٹ نے سونے کا تمغہ جیتا؟",
        options: ["Muhammad Asim Khan", "Ammad Shakeel Butt", "Abdullah Iqbal", "Kashif Rehan"],
        correct: 3,
    },

    {
        question: "Which country's team qualified for the first time in the T20 Cricket World Cup Men 2026? \n ٹی ٹونٹی کرکٹ ورلڈ کپ مینز 2026 میں پہلی مرتبہ کس ملک کی ٹیم نے کوالیفائی کیا؟",
        options: ["Italy", "Namibia", "Oman", "UAE"],
        correct: 0,
    },

    {
        question: "When was T20 Cricket World Cup Men 2026 held in Sri Lanka and India? \n ٹی ٹونٹی کرکٹ ورلڈ کپ مینز 2026 سری لنکا اور انڈیا میں کب ہوگا؟",
        options: ["7 Feb 2026 to 8 Mar 2026", "7 March 2026 to 8 April 2026", "7 April 2026 to 8 May 2026", "7 May 2026 to 8 June 2026"],
        correct: 0,
    },
    
    {
        question: " ٹی ٹونٹی کرکٹ ورلڈ کپ مینز 2026 سری لنکا اور انڈیا میں کون سا ایڈیشن ؟",
        options: ["10th", "11th", "12th", "13th"],
        correct: 0,
    },
    {
        question: "Who won the ICC Men's T20 Cricket World Cup 2026? \n آئی سی مینز ٹی ٹونٹی کرکٹ ورلڈ کپ 2026 کس نے جیتا؟",
        options: ["India", "New Zealand", "Australia", "England"],
        correct: 0,
    },

    {
        question: "ٹی ٹونٹی کرکٹ ورلڈ کپ مینز 2024 ویسٹ انڈیز اور امریکہ میں کھیلا گیا تھا۔انڈیا فائنل جیتا تھا۔ رنر اپ کون سا ملک تھا؟",
        options: ["South Africa", "Pakistan", "Afghanistan", "None of These"],
        correct: 0,
    },
    {
        question: "پہلا ٹی ٹونٹی کرکٹ ورلڈ کپ مینز جنوبی افریقہ میں کھیلا گیا تھا۔ کس سال؟",
        options: ["2004", "2005", "2006", "2007"],
        correct: 3,
    },
    {
        question: "تیل اور گیس کے ذخائر میں پاکستان  کا دنیا میں کون سا نمبر ہے؟",
        options: ["9th", "19th", "29th", "39th"],
        correct: 1,
    },

    {
        question: "پاکستان نے اقوام متحدہ کی سلامتی کونسل میں بطور غیر مستقل رکن نشست سنبھالی اور 2 سال تک سلامتی کونسل کا رکن رہے گا۔ پاکستان نے یہ نشست کب سنبھالی؟ ",
        options: ["1 January 2022", "1 January 2023", "1 January 2024", "1 January 2025"],
        correct: 3,
    },

    {
        question: "پاکستان اور بھارت کے درمیان جوہری تنصیبات پر حملوں کی ممانعت کا معاہدہ ہوا تھا۔ اس معاہدے کے تحت ہر سال دونوں ممالک یکم جنوری کو اپنی جوہری تنصیبات کے بارے میں ایک دوسرے کو مطلع کریں گے۔ اس معاہدہ پر کب دستخط ہوے تھے؟",
        options: ["31 Dec 1988", "31 Dec 1989", "31 Dec 1990", "31 Dec 1991"],
        correct: 0,
    },

    {
        question: "The Hindustan Aeronautics Ltds Tejas jet crashed during performing a display at an airshow on 21th Nov 2025 (Friday afternoon 14:10) at Al Maktoum International Airport? ",
        options: ["in Dubai", "in India", "in USA", "in Afghanistan"],
        correct: 0,
    },

    {
        question: "Quaid e Azam Muhammad Ali Jinnah was the First Governor General of Pakistan. How many Governor Generals became in Pakistan?",
        options: ["1", "2", "3", "4"],
        correct: 3,
    },

    {
        question: "Maj. General Sikander Ali Mirza beccame 1st President of Pakistan. When he became President?",
        options: ["14 August 1947", "12 March 1949", "1 January 1954", "23 March 1956"],
        correct: 3,
    },

    {
        question: "Liaquat Ali Khan was 1st Prime Minister of Pakistan. Who became 2nd Prime Minister of Pakistan?",
        options: ["Khawaja Nazimuddin", "Muhammad Ali Bogra", "Hussain Shaheed Soharwardi", "Malik Feroze Khan Noon"],
        correct: 0,
    },
    {
        question: "Who was 1st Chief Justice of Supreme Court of Pakistan?",
        options: ["Mian Abdul Rashid", "Muhammad Munir", "M. Shahabuddin", "A.R. Cornelius"],
        correct: 0,
    },
    {
        question: "European Union was formed in the year?",
        options: ["1973", "1983", "1993", "2003"],
        correct: 2,
    },

    {
        question: "The United Kingdom (UK) left the European Union through a process known as Brexit (British exit). When it happened?",
        options: ["31 January 2020", "31 January 2021", "31 January 2022", "31 January 2023"],
        correct: 0,
    },

    {
        question: "How many countries are in European Union?",
        options: ["27 countries", "28 countries", "29 countries", "30 countries"],
        correct: 0,
    },

    {
        question: "How many countries of European Union use Euro currency?",
        options: ["20 countries use Euro", "23 countries use Euro", "25 countries use Euro", "27 countries use Euro"],
        correct: 0,
    },

    {
        question: "Euro was intorduced in World Economic Market on 1st January 1999. Euro Coins and Banknotes were officially started circulating on?",
        options: ["1st January 2002", "1st January 2003", "1st January 2004", "1st January 2005"],
        correct: 0,
    },

    {
        question: "World Trade Organization (WTO) is an international organization that deals with the rules of trade between countries. When WTO started its operations?",
        options: ["1st January 1995", "1st January 1996", "1st January 1997", "1st January 1998"],
        correct: 0,
    },

    {
        question: "ٰAn island / isle is a piece of land, smaller than a continent, that is completely surrounded by water. The largest island in the world is?",
        options: ["Greenland", "Iceland", "New Zealand", "None of these"],
        correct: 0,
    },

    {
        question: "Where is Eiffel Towwer?",
        options: ["In France.", "In England", "In Turkey", "In Norway"],
        correct: 0,
    },

    {
        question: "What is height of Eiffel Towwer?",
        options: ["100 feet", "200 feet", "300 feet", "400 feet" ],
        correct: 2,
    },
    {
        question: "From which lake does the White Nile (3700KM) originate? \n وائٹ نیل کس جھیل سے نکلتا ہے؟",
        options: ["Lake Tana", "Lake Victoria near Jinja, Uganda", "Lake Baikal", "Lake Superior"],
        correct: 1,
    },
    {
        question: "From which lake does the Blue Nile (1450KM) originate? \n بلیو نیل کس جھیل سے نکلتا ہے؟",
        options: ["Lake Victoria", "Lake Tana, Ethiopia", "Lake Baikal", "Lake Superior"],
        correct: 1,
    },
    {
        question: "Which two rivers join together to form the River Nile at city Khartoum in Sudan? \n شہر خرطوم ملک سوڈان میں کون سے دو دریا مل کر دریاۓ نیل بناتے ہیں؟",
        options: ["Indus and Ravi", "White Nile and Blue Nile", "Tigris and Euphrates", "Amazon and Orinoco"],
        correct: 1,
    },

    {
        question: "The River Nile originates from which two main lakes? \n دریاۓ نیل کن دو بڑی جھیلوں سے نکلتا ہے؟",
        options: ["Lake Victoria and Lake Tana", "Lake Superior and Lake Michigan", "Lake Baikal and Lake Caspian", "Lake Manasarovar and Lake Dal"],
        correct: 0,
    },

    {
        question: "Which river is the longest river of the world? \n دنیا کا سب سے لمبا دریا کون سا ہے؟",
        options: ["River Nile", "River Ravi", "River Indus", "None of these"],
        correct: 0,
    },
    {
        question: "How long is the River Nile? \n دریاۓ نیل کی لمبائی تقریباً کتنی ہے؟",
        options: ["4,500 km", "5,200 km", "6,650 km", "7,800 km"],
        correct: 2,
    },
    {
        question: "The River Nile falls into which sea? \n دریاۓ نیل کس سمندر میں گرتا ہے؟",
        options: ["Red Sea", "Mediterranean Sea", "Arabian Sea", "Caspian Sea"],
        correct: 1,
    },

];

// Step2 js intialization

const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");

const [questionElm, option1, option2, option3, option4] = document.querySelectorAll("#question, .option1, .option2, .option3, .option4");

const answerElm = document.querySelectorAll(".answer");

const submitBtn = document.querySelector("#idsubmit");

let currentQuiz = 0;
let score = 0;

// step3 Load Quiz Function

const loadQuiz = () =>{

const {question, options} = quizData[currentQuiz];


questionElm.innerText = `Question No:${currentQuiz + 1}  
                        ${question}`

scores.innerText = `Your Score:${score}/${quizData.length}`

options.forEach( (curOption, index) => {(window[`option${index+1}`].innerText = curOption)})

}

loadQuiz();





//STEP4: Get Selected Answer Function on Button Click

const getSelectedOption = ()=>{
              

let answerElement = Array.from(answerElm);

return answerElement.findIndex((curElem) => curElem.checked);

};

// deselected Answers

let deselectedAnswers = () => {
   return answerElm.forEach((curElem) => { curElem.checked = false})
}
submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();

    console.log(selectedOptionIndex)

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        deselectedAnswers();
        loadQuiz();
    }else{
       quiz.innerHTML = `
       <div class="result">
       <h3> YOU OBTAINED ${score} MARKS FROM ${quizData.length} MARKS</h3>
       <button class="reload-button" onclick="location.reload()">START YOUR TEST AGAIN</button>
       </div>
       `;
    }
});













document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.getElementById('home-tab');
    const downloadTab = document.getElementById('download-tab');
    const contactTab = document.getElementById('contact-tab');
    const homeContent = document.getElementById('home-content');
    const downloadContent = document.getElementById('download-content');
    const contactContent = document.getElementById('contact-content');



   // Show only home content by default
    homeTab.classList.add('active');
    homeContent.style.display = 'block';
    downloadContent.style.display = 'none';
    contactContent.style.display = 'none';



    
    homeTab.addEventListener('click', () => {
        homeTab.classList.add('active');
        downloadTab.classList.remove('active');
        contactTab.classList.remove('active');
        homeContent.style.display = 'block';
        downloadContent.style.display = 'none';
        contactContent.style.display = 'none';
    });
    
    downloadTab.addEventListener('click', () => {
        downloadTab.classList.add('active');
        homeTab.classList.remove('active');
        contactTab.classList.remove('active');
        downloadContent.style.display = 'block';
        homeContent.style.display = 'none';
        contactContent.style.display = 'none';
    });
    contactTab.addEventListener('click', () => {
        contactTab.classList.add('active');
        homeTab.classList.remove('active');
        downloadTab.classList.remove('active');
        contactContent.style.display ='block';
        homeContent.style.display = 'none';
        downloadContent.style.display = 'none';
    })
});
    















































