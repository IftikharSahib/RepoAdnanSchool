// Step1: Define quizData

const quizData = [

    {
        question: " امریکہ کا دعویٰ ہے کہ تین امریکی خلا باز اپالو11 کے ذریعے چاند پر اترے ؟ ",
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
        options: ["3000 سے زائد", "4000 سے زائد", "5000 سے زائد", "6000 سے زائد"],
        correct: 0,  
    },

    {
        question: "ٰPresident of UAE is Sheikh Mohamed bin Zayed Al Nahyan. Who is Prime Minister of UAE? 20260130",
        options: [" Mohammed bin Rashid Al Maktoum", "Mansour bin Zayed Al Nahyan", "Salman bin Abdulaziz Al Saud", "None of These"],
        correct: 0,  
    },

    {
        question: "ٰ امریکہ کے ایگزم بنک نے پاکستان میں ریکوڈک منصوبہ کی فنانسگ مالی معاونت کے لئے منظوری دی ہے۔ ایگزم بنک نے کتنی سرمایہ کاری کی منظوری دی ہے۔ دسمبر 2025 ؟  ",
        options: ["1.25 Arab Dollar", "2.25 Arab Dollar", "3.25 Arab Dollar", "4.25 Arab Dollar"],
        correct: 0,  
    },

    {
        question: "ٰٰٰIndonesian President (Prabowo Subianto) visited Pakistan 8-9 December 2025. During his visit, how many agreements were signed between Pakistan and Indonesia?",
        options: ["5", "7", "9", "11"],
        correct: 1,  
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
        question:"پاکستان کا موجودہ قرض پروگرام ائی ایم ایف کے ساتھ ستمبر 2024 میں ہوا تھا پہلی قسط ایک ارب ڈالر کی ستمبر 2024 کو پاکستان کو ملی  دوسری قسط مئی 2025 میں پاکستان کو ملی۔ تیسری قسط دسمبر 2025 میں پاکستان کو کتنی ملی؟",
        options: ["1 Arab 30 Crore dollars", "2 Arab 30 Crore dollars", "3 Arab 30 Crore dollars", "4 Arab 30 Crore dollars"],
        correct: 0,  
    },

    {
        question: "Kyrgyzstan president came in Pakistan (in Dec 2025) and made 15 agreements with Pakistan. What is his name?",
        options: ["Emomali Rahmon", "Serdar Berdimuhamedow", "Kassym-Jomart Tokayev", "Sadyr Japarov"],
        correct: 3,
    },

    {
        question: " اسٹیٹ بنک آف پاکستان کے اعداد و شمار کے مطابق دسمبر 2025 میں پاکستان کا مجموعی قرضہ کتنا ھو گیا ھے ؟",
        options: ["46 HAZAR 980 ARAB RUPEES", "56 HAZAR 980 ARAB RUPEES", "66 HAZAR 980 ARAB RUPEES", "76 HAZAR 980 ARAB RUPEES"],
        correct: 3,
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
        question: "In November 2025, pilotless fighter jet name (Bayraktar Kizilelma) successfully destroyed a high-speed target drone. Kizilelma is of which country?",
        options: ["USA", "Turkia", "Iran", "China"],
        correct: 1,
    },
    {
        question: "ورلڈ پاور لفٹنگ چیمپین شپ 27 نومبر 2025 سے 30 نومبر 2025 تک یہ عالمی ایونٹ کولمبو میں منعقد ہوا جس میں پاکستان کے نوجوان ایتھلیٹ نے سونے کا تمغہ جیتا ھے ۔اس کا نام کیا ھے؟",
        options: ["Muhammad Asim Khan", "Ammad Shakeel Butt", "Abdullah Iqbal", "Kashif Rehan"],
        correct: 3,
    },

    {
        question: "ٹی ٹونٹی کرکٹ ورلڈ کپ مینز2026 میں پہلی مرتبہ کس ملک کی ٹیم نے کوالیفائی کیا ؟",
        options: ["Itly", "Namibia", "Oman", "UAE"],
        correct: 0,
    },

    {
        question: "ٹی ٹونٹی کرکٹ ورلڈ کپ مینز 2026 سری لنکا اور انڈیا میں کب ؟",
        options: ["7 Feb 2026 to 8 Mar 2026", "7 March 2026 to 8 April 2026", " 7 April 2026 to 8 May 2026 ", "7 May 2026 to 8 June 2026"],
        correct: 0,
    },
    
    {
        question: " ٹی ٹونٹی کرکٹ ورلڈ کپ مینز 2026 سری لنکا اور انڈیا میں کون سا ایڈیشن ؟",
        options: ["10th", "11th", "12th", "13th"],
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
        question: "Which river is the longest river of the world?",
        options: ["River Nile", "River Ravi", "River Indus", "None of these"],
        correct: 0,
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
    















































