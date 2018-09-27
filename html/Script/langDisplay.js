   
   function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function langBoardGen(){
//**************************************************************
// 				Gets time of day (morning, afternoon..etc)

    var time = new Date().getHours();
	var timeApt;
    if (time < 12) {
        timeApt = 1;
    } else if (time < 18) {
        timeApt = 2;
    } else {
        timeApt = 3;
}
//**************************************************************
// 				Chooses the language

var langChoice = getRndInteger(1,10);

var greeting;
var lang;
var changeBool = 1;
switch (langChoice) {

	case 1:
        lang = "hindi";
		greeting = "नमस्ते  (Namaste)";
		
		var langTit = "हिंदी वाक्यांश  (hindee vaakyaansh) (Hindi)";
		var vhello = "नमस्ते (namaste)";
		var vhru = "आप कैसे हैं? (āp kaise haiṅ?)";
		var vresp = "	मैं अच्छा हूँ (maiṁ acchā hūṁ)";
		var vntmy = "आप से मिलकर ख़ुशी हुई (āp se milkar khushī huī)";
		var vyes = "हाँ (hā)";
		var vno = "नहीं (nahin)";
		var vplease = "कृप्या (krpya)";
		var vthank = "धन्यवाद (dhanyavād)";
		var vtoilet = "टॉयलेट कहाँ हैं (tāyalet kahāṁ haiṅ?)";
		
		var vsum = "Резюме";
		var vnum = "c. 545 million";
		var vfam = "Indo-Aryan (Western) Hindi";
		var vcntry = "India, Nepal, Fiji, South Africa";
		var vdate = "4th Century";
		var valpha = "Devanāgarī Script ";
		var vstat = "Official language of the Federal Government of India; official language of Bihar, Chhattisgarh, Delhi, Haryana, Himachal Pradesh, Jharkhand, Madhya Pradesh, Rajasthan, Uttar Pradesh and Uttarakhand states.";				
		document.getElementById("langList").className = 'lang_smol';
        break;
		
    case 2:
        lang = "french";
		if (timeApt == 1)		{greeting = "Bonjour" }
		else if (timeApt == 2)	{greeting = "Bon Après-midi" }
		else 					{greeting = "Bonsoir"}
		var changeBool = 0;
        break;
    case 3:
        lang = "russian";
		if (timeApt == 1)		{greeting = "Доброе утро" }
		else if (timeApt == 2)	{greeting = "Добрый день" }
		else 					{greeting = "Добрый вечер"}
		
		var langTit = "Фразы на русском языке (Frensis na russkom yazyke) (Russian)";
		var vhello = "Приве́т! (Privet!)";
		var vhru = "Как дела? (Kak dela?)";
		var vresp = "Xорошо. А у вас? (Xorošo. A u vas?)";
		var vntmy = "Приятно познакомиться (Priyatno poznakomit'sya)";
		var vyes = "Да";
		var vno = "Нет";
		var vplease = "Пожалуйста (Požalujsta)";
		var vthank = "Спасибо (Spasibo)";
		var vtoilet = "Где находится туалет? (Gde naxoditsja tualet?)";
		
		var vsum = "Резюме";
		var vnum = "c. 260 million";
		var vfam = "Indo-European (Eastern) Balto-Slavic Language";
		var vcntry = "Russian, Belarus, Kazakhstan, Kyrgyzstan...";
		var vdate = "10th Century";
		var valpha = "Cyrillic Alphabet";
		var vstat = "Official language in Russian, Belarus, Kazakhstan and Kyrgyzstan and many other countries and territories.";		
		document.getElementById("langList").className = 'lang_smol';
        break;
    case 4:
		lang = "spanish";
        if (timeApt == 1)		{greeting = "Buenos Días"; }
		else if (timeApt == 2)	{greeting = "Buenas Tardes"; }
		else 					{greeting = "Buenas Tardes"}
		
		var langTit = "Frases en Español (Spanish)";
		var vhello = "Hola";
		var vhru = "¿Como estás?";
		var vresp = "Soy bien";
		var vntmy = "Mucho gusto";
		var vyes = "Sí";
		var vno = "No";
		var vplease = "Por favor";
		var vthank = "Gracias";
		var vtoilet = "¿Dónde están los sanitarios?";
		
		var vsum = "Un Resumen";
		var vnum = "c. 470 million";
		var vfam = "Indo-European (Western) Ibero-Romance Language";
		var vcntry = "Spain, Latin America, USA, Equatorial Guinea";
		var vdate = "11th Century";
		var valpha = "Latin Script";
		var vstat = "Official language in Argentina, Bolivia, Colombia, Costa Rica, Cuba, Chile, Dominican Republic, Ecuador, El Salvador, Equatorial Guinea, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Spain, Uruguay, Venezuela.";
		
        break;
		

		
    case 5:
        lang = "albanian";
		if (timeApt == 1)		{greeting = "Mir\xEBm\xEBngjes" }
		else if (timeApt == 2)	{greeting = "Mir\xEBdita" }
		else 					{greeting = "Mir\xEBmbr\xEBma"}
		
		var langTit = "Fraza Shqiptare (Albanian)";
		var vhello = "Tungjatjeta";
		var vhru = "Si/Qysh je?";
		var vresp = "Mirë";
		var vntmy = "Gëzohem që të takova";
		var vyes = "Po";
		var vno = "Jo";
		var vplease = "Të lutem";
		var vthank = "Falemenderit";
		var vtoilet = "﻿Ku është banjoja?";
		
		var vsum = "Permbledhje";
		var vnum = "c. 7.6 million";
		var vfam = "Indo-European Albanian";
		var vcntry = "Albania, Kosovo, Macedonia, Montenegro...";
		var vdate = "15th Century";
		var valpha = "Latin Script";
		var vstat = "Official language in Albania and Kosovo. Recognised minority language in Italy, Macedonia, Montenegro, Romania, and Serbia.";				
		
        break;
    case 6:
        lang = "portuguese";
		if (timeApt == 1)		{greeting = "Bom Dia" }
		else if (timeApt == 2)	{greeting = "Boa Tarde" }
		else 					{greeting = "Boa Tarde"}

		var langTit = "Frases em Português (Portuguese)";
		var vhello = "Olá";
		var vhru = "Tudo bem?";
		var vresp = "Estou bem";
		var vntmy = "Encantado(a)";
		var vyes = "Sim";
		var vno = "Não";
		var vplease = "Por favor";
		var vthank = "Obrigado(a)";
		var vtoilet = "	Onde está o WC?";
		
		var vsum = "Um Resumo";
		var vnum = "c. 220 million";
		var vfam = "Indo-European (Western) Ibero-Romance Language";
		var vcntry = "Portugal, Brazil, Angola";
		var vdate = "9th century";
		var valpha = "Latin Script";
		var vstat = "Sole official language of Portugal, Brazil, Mozambique, Angola, Cape Verde, Guinea-Bissau, and São Tomé and Príncipe; co-official status in Macau, Equatorial Guinea and East Timor";
		
		
        break;
	case 7:
        lang = "mandarin";
		if (timeApt == 1)		{greeting = "(Zǎo'ān) 早安 " }
		else if (timeApt == 2)	{greeting = "(Wǔ'ān) 午安 " }
		else 					{greeting = "(Wǎn'ān) 晚安 "}
		
		var langTit = "中文短语 (Zhōngwén duǎnyǔ)(Chinese)";
		var vhello = "您好 (nín hǎo)";
		var vhru = "你好嗎? (nǐ hǎo ma)";
		var vresp = "我很好 (wǒ hěn hǎo?)";
		var vntmy = "幸會 (xìng huì)";
		var vyes = "是 (Shì)";
		var vno = "没有 (Méiyǒu)";
		var vplease = "請 (qǐng)";
		var vthank = "謝謝 (xièxie)";
		var vtoilet = "廁所在哪裡？(cèsuǒ zài nǎli?)";
		
		var vsum = "总结 (Zǒngjié)";
		var vnum = "c. 1.3 billion";
		var vfam = "Sino-Tibetan Chinese";
		var vcntry = "PRC, Taiwan, Singapore...";
		var vdate = "12th century";
		var valpha = "Chinese Script";
		var vstat = "Official language in the PRC and ROC, one of the official languages in Singapore.";
				
        break;
	case 8:
        lang = "arabic";
		if (timeApt == 1)		{greeting = "(ṣabāḥul kẖayr) صباح الخير" }
		else if (timeApt == 2)	{greeting = "(masā' al-khayr) مساء الخير" }
		else 					{greeting = "(masā' al-khayr) مساء الخير"}
		
		var langTit = "(eibarat earabia) عبارات عربية (Arabic)";
		var vhello = "(as-salām 'alaykum) السلام عليكم(Arabic)";
		var vhru = "(eibarat earabia) عبارات عربية";
		var vresp = "(Ana bekhair) أنا بخير";
		var vntmy = "(motasharefon bema'refatek) متشرف بمعرفتك";
		var vyes = "(Nem fielaan) نعم فعلا";
		var vno = "(la) لا";
		var vplease = "(mīn fāḍlīkā) من فضلك";
		var vthank = "(shukran) شكرا";
		var vtoilet = "(ayn al-ḥammām?) أين الحمّام؟";
		
		var vsum = "(malkhas) ملخص";
		var vnum = "c. 313 million";
		var vfam = "Afro-Asiatic (Central) Semitic";
		var vcntry = "Saudi Arabia, UAE, Kuwait...";
		var vdate = "4th century BC";
		var valpha = "Arabic Script";
		var vstat = "Various dialects of Arabic are spoken, these dialects fall into several groups: Egyptian, Algerian, Maghrebi, Sudanese, Saidi, North Levantine, Mesopotamian, and Najdi.";
		document.getElementById("langList").className = 'lang_smol';		
        break;	
		
	case 9:
        lang = "romanian";
		if (timeApt == 1)		{greeting = "Bună dimineaţa" }
		else if (timeApt == 2)	{greeting = "Bună ziua" }
		else 					{greeting = "Bună seara"}
		
		var langTit = "Fraze in Romana (Romanian)";
		var vhello = "Salut";
		var vhru = "Ce mai faci?";
		var vresp = "Bine";
		var vntmy = "Încântat de cunoștință";
		var vyes = "Da";
		var vno = "Nu";
		var vplease = "Te rog (inf)";
		var vthank = "Mulțumesc foarte mult";
		var vtoilet = "Unde este toaleta?";
		
		var vsum = "Um Resumo";
		var vnum = "c. 26 million";
		var vfam = "Indo-European (Eastern) Romance Language";
		var vcntry = "Romania, and Moldova";
		var vdate = "AD 1521";
		var valpha = "Cyrillic and Latin Script";
		var vstat = "Official language in Romania, Moldova, Vojvodina in Serbia, Mount Athos in Greece. Recognised minority language in Hungary and Serbia";
				
        break;	
		
			case 10:
        lang = "hungarian";
		if (timeApt == 1)		{greeting = "Jó reggelt" }
		else if (timeApt == 2)	{greeting = "Jó napot" }
		else 					{greeting = "Jó estét"}
		
		var langTit = "Magyar Kifejezések (Hungarian)";
		var vhello = "Jó napot";
		var vhru = "Hogy van?";
		var vresp = "Jól. És Ön?";
		var vntmy = "Örvendek";
		var vyes = "Igen";
		var vno = "Nem";
		var vplease = "Kérem";
		var vthank = "Köszönöm";
		var vtoilet = "Hol van a mosdó?";
		
		var vsum = "Összefoglaló";
		var vnum = "c. 13 million";
		var vfam = "Uralic / Finno-Ugric";
		var vcntry = "Hungary, Austria, Croatia, Poland, Romania, Serbia, Slovakia, Slovenia, and Ukraine.";
		var vdate = "AD 1196";
		var valpha = "Latin Script";
		var vstat = "Official language in Hungary and the European Union. Recognised minority language in Romania, Croatia, Slovakia, and in parts of Slovenia, Austria, and Ukraine.";
				
        break;	
// REMEMBER TO ALTER THE RANDOMISER WHEN ADDING LANGUAGES SO THAT IT CAN SELECT THE NEW LANGUAGE
}

//**************************************************************
document.getElementById("timeAptitude").innerHTML = greeting +", Dano.";
if (changeBool == 1){
document.getElementById("langTitle").innerHTML = langTit;
document.getElementById("hello").innerHTML = vhello;
document.getElementById("hru").innerHTML = vhru;
document.getElementById("resp").innerHTML = vresp;
document.getElementById("yes").innerHTML = vyes;
document.getElementById("no").innerHTML = vno;
document.getElementById("ntmy").innerHTML = vntmy;
document.getElementById("thank").innerHTML = vthank;
document.getElementById("toilet").innerHTML = vtoilet;
document.getElementById("pls").innerHTML = vplease;
document.getElementById("sum").innerHTML = vsum;
document.getElementById("num").innerHTML = vnum;
document.getElementById("fam").innerHTML = vfam;
document.getElementById("cntry").innerHTML = vcntry;
document.getElementById("date").innerHTML = vdate;
document.getElementById("alpha").innerHTML = valpha;
document.getElementById("stat").innerHTML = vstat;
}
var newLink = "https://www.omniglot.com/language/phrases/" + lang +".php";
var link = document.getElementById("langLink");
link.setAttribute('href',newLink)

}