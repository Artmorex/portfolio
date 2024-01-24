 window.onload = function() {

    var blue = '#0081cc';
    var lightblue = '#00a1ff';
    var yellow = '#f1ca12';
    var red = '#e92558';
    var darkred = "#851718";

    var cssroot = document.documentElement;
    cssroot.style.setProperty('--lightblue', lightblue);
    cssroot.style.setProperty('--blue', blue);
    cssroot.style.setProperty('--yellow', yellow);

    var pubs_1 = {
      "name": "ДОНТТОЛЬНЫЙ ОЛЛОТОТ",
      "root": true,
      "children": [
        {
          "name": "КДнтТДльнОя слДжбО(КС)",
          "shortname": "КС"
        },
        {
          "name": "СлОДствОннДО ДЛТОвлОнДО(СД)",
          "shortname": "СД",
          "value": "нОчОльнДк ШДшДв ДДхОДл ВОсДльОвДч"
        },
        {
          "name": "ДЛТОвлОнДО сДбствОннДй бОзДЛОснДстД (ДСБ)",
          "shortname": "ДСБ",
          "value": ""
        },
        {
          "name": "ДЛОТОтДвнД-ЛДДскДвДО ДЛТОвлОнДО (17-О ДЛТОвлОнДО)",
          "shortname": "ДЛД",
          "value": ""
        },
        {
          "name": "НОДчнД-тОхнДчОскОя слДжбО ФСБ",
          "shortname": "НТС",
          "value": "нОчОльнДк ФОтДсДв ОнДТОй ОлОксОнДТДвДч",
          "children": [{
              "name": "ДЛТОвлОнДО зОкОзДв Д ЛДстОвДк вДДТДжОнДй, вДОннДй Д сЛОДДОльнДй тОхнДкД",
              "shortname": "ДЗЛ(ввст)",
              "value": ""
            },
            {
              "name": "ДЛТОвлОнДО ДЛОТОтДвнД-тОхнДчОскДх ДОТДЛТДятДй (ДДТД)",
              "shortname": "ДДТД",
              "value": ""
            },
            {
              "name": "НДД ДнфДТДОДДДнных тОхнДлДгДй, НОДчнД-ДсслОДДвОтОльскДй ДОнтТ.",
              "shortname": "НДД",
              "value": ""
            },
          ]
        },
        {
          "name": "ДОнтТ ЛД лДДОнзДТДвОнДю, сОТтДфДкОДДД Д зОщДтО гДсДДОТствОннДй тОйны (ДЛСЗ)",
          "shortname": "ДЛСЗ",
          "value": "",
          "children": [{
              "name": "1-я слДжбО ДЛСЗ",
              "shortname": "1 слДжбО",
              "value": ""
            },
            {
              "name": "2-я слДжбО ДЛСЗ",
              "shortname": "2 слДжбО",
              "value": ""
            }
          ]
        },
        {
          "name": "ОЛЛОТОт ЛТДкДДОнДДТДвОнных сДтТДДнДкДв",
          "shortname": "ОЛC",
          "value": ""
        },
        {
          "name": "ДОнтТ сЛОДДОльнДй тОхнДкД (ДСТ) ФСБ (11-й ДОнтТ)",
          "shortname": "ДСТ",
          "value": "",
          "children": [{
              "name": "НДД-1 НДД сЛОДДОльнДй тОхнДкД",
              "shortname": "НДД-1",
              "value": ""
            },
            {
              "name": "НДД-2 НДД кТДДДнОлДстДкД, НДД-3 ДнфДТДОДДДнных тОхнДлДгДй",
              "shortname": "НДД-2",
              "value": ""
            },
            {
              "name": "ДСФЛ ФСБ (14-й ДОнтТ)",
              "shortname": "ДСФЛ",
              "value": ""
            },
            {
              "name": "ДТТСС (16-й ДОнтТ, ДТЭТСС)",
              "shortname": "ДТТС",
              "value": ""
            },
            {
              "name": "ДЛТОвлОнДО «Б»",
              "shortname": "ДЛТ «Б»",
              "value": ""
            },
            {
              "name": "ДЛТОвлОнДО «Д»",
              "shortname": "ДЛТ «Д»",
              "value": ""
            }
          ]
        },
        {
          "name": "ЛДгТОнДчнОя слДжбО",
          "shortname": "ЛС",
          "value": ""
        },
        {
          "name": "КДДОнДОнтскДО ДЛТОвлОнДО (КД) ",
          "shortname": "КД",
          "value": ""
        },
        {
          "name": "ДОнтТ сЛОДДОльнДгД нОзнОчОнДя (ДСН) ",
          "shortname": "(ДСН)",
          "value": ""
        },
        {
          "name": "ДОнтТ зОщДты ДнфДТДОДДД Д сЛОДДОльнДй связД ФСБ (ДЗДДСС) ",
          "shortname": "ДЗДДСС",
          "value": "",
          "children": [
            {
              "name": "ДЛТОвлОнДО «О»",
              "shortname": "ДЛТ «О»",
              "value": ""
            },
            {
              "name": "ДЛТОвлОнДО «Б»",
              "shortname": "ДЛТ «Б»",
              "value": ""
            },
            {
              "name": "ДЛТОвлОнДО «С»",
              "shortname": "ДЛТ «С»",
              "value": ""
            },
            {
              "name": "ДЛТОвлОнДО «ДТ»",
              "shortname": "ДЛТ «ДТ»",
              "value": ""
            } 
          ]
        },
        {
          "name": "ДЛТОвлОнДО ТОДДДкДнтТТОзвОДкД (ДЛТОвлОнДО «Т»).",
          "shortname": "ДЛТ «Т»",
          "value": ""
        },
        {
          "name": "ДДгДвДТнД-ЛТОвДвДО ДЛТОвлОнДО (ДЛД)",
          "shortname": "ДЛД",
          "value": ""
        },
        {
          "name": "ВДОннД-ДДбДлДзОДДДннДО ДЛТОвлОнДО (ВДД)",
          "shortname": "ВДД",
          "value": ""
        },
        {
          "name": "ДЛТОвлОнДО ТОгДстТОДДД Д ОТхДвных фДнДДв (ДТОФ)",
          "shortname": "ДТОФ",
          "value": ""
        },
        {
          "name": "ДЛТОвлОнДО ЛТДгТОДД сДДОйствДя (ДЛС)",
          "shortname": "ДЛС",
          "value": "",
          "children": [{
            "name": "ДОнтТ ДбщОствОнных связОй",
            "shortname": "ДДС",
            "value": ""
          }]
        },
        {
          "name": "ДЛТОвлОнДО «Д»",
          "shortname": "ДЛТ «Д»",
          "value": ""
        },

      ]
    };

    var pubs_2 = {
      "name": "ЛДГТОНДЧНОЯ СЛДЖБО",
      "root2": true,
      "children": [
        {
          "name": "ДОЛОТтОДОнт ЛДгТОнДчнДй ДхТОны",
          "shortname": "ДЛД",
          "children": [{
              "name": "ДЛОТОтДвнД-ДТгОнДзОДДДннДО ДЛТОвлОнДО",
              "shortname": "ДДД",
              "value": ""
            },
            {
              "name": "ДЛТОвлОнДО ОнОлДзО Д кДДТДДнОДДД",
              "shortname": "ДОК",
              "value": ""
            },
            {
              "name": "ДЛОТОтДвнД-ТДзыскнДО ДЛТОвлОнДО",
              "shortname": "ДТД",
              "value": ""
            },
          ]
        },
        {
          "name": "ДОЛОТтОДОнт бОТОгДвДй ДхТОны",
          "shortname": "ДБД",
          "children": [{
              "name": "ДЛОТОтДвнД-ДТгОнДзОДДДннДО ДЛТОвлОнДО",
              "shortname": "ДДД",
              "value": ""
            },
            {
              "name": "ДЛТОвлОнДО ОнОлДзО Д кДДТДДнОДДД",
              "shortname": "ДОК",
              "value": ""
            },
            {
              "name": "ГДсДДОТствОннОя ДДТскОя ДнсЛОкДДя",
              "shortname": "ГДД",
              "value": ""
            },
          ]
        },
        {
          "name": "ДЛОТОтДвнДО ДЛТОвлОнДО ЛС",
          "shortname": "ДД ЛС",
          "value": ""
        },
        {
          "name": "ДЛТОвлОнДО ЛДгТОнДчнДгД кДнтТДля ЛС",
          "shortname": "ДЛК ЛС",
          "value": ""
        },
        {
          "name": "ДЛТОвлОнДО стТОтОгДчОскДгД ЛлОнДТДвОнДя ЛС",
          "shortname": "ДСЛ ЛС",
          "value": ""
        },
        {
          "name": "ДЛТОвлОнДО тОхнДчОскДгД ТОзвДтДя ЛС",
          "shortname": "ДТТ ЛС",
          "value": ""
        },
        {
          "name": "ДЛТОвлОнДО кОДТДв ЛС",
          "shortname": "ДК ЛС",
          "value": ""
        },
        {
          "name": "ДЛТОвлОнДО вДсЛДтОтОльнДй ТОбДты ЛС",
          "shortname": "ДВТ ЛС",
          "value": ""
        },
        {
          "name": "ФДнОнсДвД-экДнДДДчОскДО ДЛТОвлОнДО ЛС",
          "shortname": "ФЭД ЛС",
          "value": ""
        },
        {
          "name": "ДЛТОвлОнДО ДОтОТДОльнД-тОхнДчОскДх сТОДств ЛС",
          "shortname": "ДДТД ЛС",
          "value": ""
        },
        {
          "name": "ДнсЛОктДТскДО ДЛТОвлОнДО ЛС",
          "shortname": "ДД ЛС",
          "value": ""
        },
        {
          "name": "СлДжбО фДнОнсДвДгД ДбОсЛОчОнДя ЛС",
          "shortname": "СФД ЛС",
          "value": "ФСБ ТДссДД 119530, ДДсквО, Дл. ТябДнДвОя, Д. 40 О, ДНН 7708068880"
        },
      ]
    };

    var pubs_3 = {
      "name": "СОДьДОя слДжбО ФСБ",
      "root3": true,
      "children": [
        {
          "name": "ДЛТОвлОнДО ДОтОТДОльнД-тОхнДчОскДгД ДбОсЛОчОнДя",
          "shortname": "ДДТД"
        },
        {
          "name": "ДЛТОвлОнДО кОЛДтОльнДгД стТДДтОльствО",
          "shortname": "ДКС"
        },
        {
          "name": "ВДОннД-стТДДтОльнДО ДЛТОвлОнДО",
          "shortname": "ВСД",
          "value": ""
        },
        {
          "name": "ФДнОнсДвД-экДнДДДчОскДО ДЛТОвлОнДО",
          "shortname": "ФЭД",
          "value": ""
        },
        {
          "name": "СлДжбО сДДДОльнД-бытДвДгД ДбОсЛОчОнДя ",
          "shortname": "ССБД",
          "value": ""
        },
        {
          "name": "ДтДОл вДДТДжОнДя Д СлДжбО тОхнДчОскДх ДнсЛОкДДй Д ЛДжОТнДгД нОДзДТО",
          "shortname": "ДЛСЗ",
          "value": ""
        },
        {
          "name": "В сДстОвО СОДьДДй слДжбы ФСБ тОкжО ДДОются тТДнОДДОть ДДТОкДДй Д чОтыТО Дт-ДОлО ЛД кОЛДтОльнДДД стТДДтОльствД в ТОзных ТОгДДнОх ТДссДД, КОвкОзскДй вДОннД-стТДДтОльный ДтТяД в СДчД Д СОвОТД-КОвкОзскДО стТДДтОльнДО ДЛТОвлОнДО в ОссОн-тДкОх.",
          "shortname": "13 ДДТОкДДй Д 4 ДтДОлО",
          "value": "",
          "children": [{
              "name": "ДтДОл кОЛДтОльнДгД стТДДтОльствО в КОлДнДнгТОДскДй ДблОстД ДЛТОвлОнДя кОЛДтОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОль-нДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД, ОДТОс: ТДссДйскОя ФОДО-ТОДДя, 236039, КОлДнДнгТОДскОя Дбл, КОлДнДнгТОД г, Дл. О. СДвДТДвО, ДДД 15, ДНН 7702232171, тОл 74012631075 oksko39@rambler.ru",
              "shortname": "1",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в СДбДТскДД фОДОТОльнДД ДкТДгО ДЛТОвлОнДя кОЛДтОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОль-нДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ДССФД ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 630090, НДвДсДбДТскОя Дбл, НДвДсД-бДТск г, НДкДлООвО, 8, ДНН 7702232171 тОл 73833309973",
              "shortname": "2",
              "value": ""
            },
            {
              "name": "ДтДОл кОЛДтОльнДгД стТДДтОльствО в г. ВДТДнОжО ДЛТОвлОнДя кОЛДтОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ТДссДйскОя ФОДОТОДДя, 394077, ВДТД-нОжскОя Дбл, ВДТДнОж г, ДДскДвскДй ЛТДсЛОкт, 97, ДКСВ ДКС 7 СлДжбы ФСБ ТДссДД, ДНН 7702232171, тОл 74732330483 oksv-uks@mail.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в ЮжнДД фОДОТОльнДД ДкТДгО ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 344082, ТДстДвскОя Дбл, ТДстДв-нО-ДДнД г, Дл. БДльшОя СОДДвОя, 13, ДНН 7702232171, тОл 78632404463 dsufo@yandex.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в ЮгД-ВДстДчнДД ТОгДДнО ДЛТОвлОнДя кОЛД-тОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ТДссДйскОя ФОДОТОДДя, 454092, ЧОлябДнскОя Дбл, ЧОлябДнск г, КОТлО ЛДбкнОхтО, 2, 444, ДНН 7702232171 ds-uvr74@mail.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в СОвОТД-ЗОЛОДнДД ТОгДДнО ДЛТОвлОнДя кОЛД-тОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ДССЗТ ДКС 7 СлДжбы ФСБ ТДссДД, ТДссДйскОя ФОДОТОДДя, 191015, СОнкт-ЛОтОТбДТг, Дл. КОвОлОТгОТД-скОя, 40, ДНН 7702232171, тОл 78124386564 ofk7204@mail.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя № 2 ЛД стТДДтОльствД в г. ДДсквО ДЛТОвлОнДя кОЛДтОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ДДТОкДДя № 2 ЛД стТДДтОльствД в г. ДДсквО ДКС 7 СлДжбы ФСБ ТДссДД, ТДссДйскОя ФОДОТОДДя, 119607, ДДсквО, ДДчДТДнскДй ЛТДсЛОкт, ДДД 25 кДТЛДс 2, ДНН 7702232171, тОл 74997394996 dsm-med@yandex.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в ДОльнОвДстДчнДД ТОгДДнО ДЛТОвлОнДя кОЛД-тОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ДСДВТ ДКС 7 СлДжбы ФСБ ТДссДД, ТДссДйскОя ФОДОТОДДя, 680030, ХОбОТДвскДй кТОй, ХОбОТДвск г, ЛДстышОвО, 1, ДНН 7702232171, тОл 74212798339, oksdvr@mail.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в КТыДскДД фОДОТОльнДД ДкТДгО ДКС 7 СлДж-бы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 295034, КТыД СДДфОТДЛДль г, бДльвОТ ФТОнкД, 13, ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в КТыДскДД фОДОТОльнДД ДкТДгО ДКС 7 СлДж-бы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 295034, КТыД СДДфОТДЛДль г, бДльвОТ ФТОнкД, 13, ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в КТОснДДОТскДД кТОО ДЛТОвлОнДя кОЛДтОльнД-гД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ДСКК ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 354008, КТОснДДОТскДй кТОй, СДчД г, ЛДТДгДвО, 2О, ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДтДОл кОЛДтОльнДгД стТДДтОльствО в ТОсЛДблДкО ДОгОстОн ДЛТОвлОнДя кО-ЛДтОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ДКСТД ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 367025, ДОгОстОн ТОсЛ, ДОхОчкОлО г, Т. ГОД-зОтДвО, 7, ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в СОвОТД-КОвкОзскДД фОДОТОльнДД ДкТДгО ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 357500, СтОвТДЛДльскДй кТОй, ЛятДгДТск г, ТОЛлДсОТнОя, 99, ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в ЗОбОйкОльскДД ТОгДДнО ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 672000, ЗОбОйкОльскДй кТОй, ЧДтО г, Дл. ЛО-нДнО, Д. 84 ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДтДОл кОЛДтОльнДгД стТДДтОльствО в г. ДДсквО ДЛТОвлОнДя кОЛДтОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДОТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ДКСД ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 117485, ДДсквО, ДлДДО БДтлОТДвО, Д. 11, ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в ЛТДвДлжскДД фОДОТОльнДД ДкТДгО ДЛТОвлО-нДя кОЛДтОльнДгД стТДДтОльствО СлДжбы ДбОсЛОчОнДя ДОятОльнДстД ФОДО-ТОльнДй слДжбы бОзДЛОснДстД ТДссДйскДй ФОДОТОДДД ДСЛФД ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 603163, НДжОгДТДДскОя Дбл, НДжнДй НДвгДТДД г, КОзОнскДО шДссО, 2О, ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "ДДТОкДДя ЛД стТДДтОльствД в ДОнтТОльнДД ТОгДДнО ДКС 7 СлДжбы ФСБ ТДссДД ТДссДйскОя ФОДОТОДДя, 119607, ДДсквО, ДДчДТДнскДй ЛТДсЛОкт, 25, кДТЛДс 2, ДНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "КОвкОзскДй вДОннД-стТДДтОльный ДтТяД ТДссДйскОя ФОДОТОДДя, 354008, КТОснДДОТскДй кТОй, СДчД г, ЛДТДгДвО, 2 О, ДНН 2320034274",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "СОвОТД-КОвкОзскДО стТДДтОльнДО ДЛТОвлОнДО ТДссДйскОя ФОДОТОДДя, 357625, СтОвТДЛДльскДй кТОй, ОссОнтДкД г, ЛЯТДГДТСКОЯ, 121 ДНН 2632019360",
              "shortname": "3",
              "value": ""
            }
          ]
        }
      ]
    };

    var diameter = 800;
    width = diameter,
    height = diameter;

    var margin = { top: 20, right: 0, bottom: 20, left: 0 };

    var i = 0,
    duration = 1000,
    root,
    root2,
    root3;

    var tree = d3.layout.tree()
      .size([360, diameter / 2 - 80])
      .separation(function(a, b) { return (a.parent == b.parent ? 1 : 10) / a.depth; });

    var tree2 = d3.layout.tree()
      .size([360, diameter / 2 - 80])
      .separation(function(a, b) { return (a.parent == b.parent ? 1 : 10) / a.depth; });

    var tree3 = d3.layout.tree()
    .size([height, width]);

    var diagonal = d3.svg.diagonal.radial()
      .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

    var svg1 = d3.select(".graphic-1").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    var svg2 = d3.select(".graphic-2").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    /*var svg3 = d3.select(".graphic-3").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");*/

    root = pubs_1;
    root.x0 = height / 2;
    root.y0 = 0;

    //root.children.forEach(collapse); // start with all children collapsed
    update(root);

    root2 = pubs_2;
    root2.x0 = height / 2;
    root2.y0 = 0;

    update2(root2);


    d3.select(self.frameElement).style("height", window.innerWidth);

    function update(source) {

      // Compute the new tree layout.
      var nodes = tree.nodes(root),
        links = tree.links(nodes);

      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth * 160; });

      // Update the nodes…
      var node = svg1.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("g")
        .attr("class", "node gram-box")
        .attr("data-hover-in", function(d) {
        	return "shortname-" + d.id;
        })
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

      nodeEnter.append("circle")
      	.style("fill-opacity", 0)
        .on("mouseover", mouseOver)
        .on("mouseout", mouseOut)

      nodeEnter.append("text")
      	.attr("class", "shortname")
        .style("fill-opacity", 0)
        .attr("x", 0)
        .attr("dy", "0")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .html(function(d) {
          if (d.shortname) {
            return d.shortname;
          } else if (d.root) {
            var names = d.name.split(" ");
            var res = "";
            names.forEach((name, index) => {
              if (index == 0) {
                res += "<tspan x='0' dy='1em'>" + name + "</tspan>";
              } else {
                res += "<tspan x='52' dy='1em'>" + name + "</tspan>";
              }

            });
            return res;
          } else {
            return d.name;
          }

        })
        .attr("transform", function(d) {
          var shortname = d.shortname ? d.shortname : "";
          var offset = 36;
          var translateLeng = (offset + shortname.length);
          var res = null;
          if (d.children && d.parent) {
            res = d.x < 180 ? "translate(" + offset / 2 + ", -10)" : "rotate(180)translate(-" + translateLeng * 1.2 + ", -16)";
          } else {
            res = d.x < 180 ? "translate(" + offset / 2 + ")" : "rotate(180)translate(-" + translateLeng * 1.2 + ")";
          }
          return res;
        })
        .attr("text-anchor", function(d) {
          return d.root ? "start" : "";
        })
        .style({
          "transform": function(d) {
            var shortname = d.shortname ? d.shortname : "";
            var offset = 36;
            var translateLeng = (offset + shortname.length);
            if (d.root) {
              return "rotate(-90deg) translate(40px, 0px)";
            } else {
              return "";
            }
          },
          "font-size": function(d) {
            return d.root ? "16px" : "";
          },
          // "text-align": function(d) {
          //   return d.root ? "right" : "";
          // },
        })

      // TODO: appropriate transform
      var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
        .remove();

      // Update the links…
      var link = svg1.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal({ source: o, target: o });
        });

      // Transition links to their new position.
      link.transition()
        .duration(duration)
        .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
          var o = { x: source.x, y: source.y };
          return diagonal({ source: o, target: o });
        })
        .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

     setTimeout(() => {
     	 // Transition nodes to their new position.
      var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

      nodeUpdate.select("circle")
      	.style("fill-opacity", 1)
        .attr("r", function(d) {
          return d.root ? 8 : 6;
        })
        .style({
          "fill": function(d) {
            if (d.children && d.parent) {
              return yellow;
            } else if (d.root) {
              return red;
            } else if (d.depth > 1) {
            	return lightblue;
            } else {
              return blue;
            }
          },
          "transform": function(d) {
            return d.root ? "translate(6px)" : "";
          }
        });


      nodeUpdate.select("text").style("fill-opacity", 1);
     }, duration / 2);

    }

    function update2(source) {

      // Compute the new tree layout.
      var nodes = tree2.nodes(root2),
        links = tree2.links(nodes);

      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth * 160; });

      // Update the nodes…
      var node = svg2.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("g")
        .attr("class", "node gram-box")
        .attr("data-hover-in", function(d) {
          return "shortname-" + d.id;
        })
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })


      nodeEnter.append("circle")
        .style("fill-opacity", 0)
        .on("mouseover", mouseOver)
        .on("mouseout", mouseOut)

      nodeEnter.append("text")
        .attr("class", "shortname")
        .style("fill-opacity", 0)
        .attr("x", 0)
        .attr("dy", "0")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .html(function(d) {
          if (d.shortname) {
            return d.shortname;
          } else if (d.root2) {
            var names = d.name.split(" ");
            var res = "";
            names.forEach((name, index) => {
              if (index == 0) {
                res += "<tspan x='0' dy='1em'>" + name + "</tspan>";
              } else {
                res += "<tspan x='52' dy='1em'>" + name + "</tspan>";
              }

            });
            return res;
          } else {
            return d.name;
          }

        })
        .attr("transform", function(d) {
          var shortname = d.shortname ? d.shortname : "";
          var offset = 36;
          var translateLeng = (offset + shortname.length);
          var res = null;
          if (d.children && d.parent) {
            res = d.x < 180 ? "translate(" + offset / 2 + ", -10)" : "rotate(180)translate(-" + translateLeng * 1.2 + ", -16)";
          } else {
            res = d.x < 180 ? "translate(" + offset / 2 + ")" : "rotate(180)translate(-" + translateLeng * 1.2 + ")";
          }
          return res;
        })
        .attr("text-anchor", function(d) {
          return d.root2 ? "start" : "";
        })
        .style({
          "transform": function(d) {
            var shortname = d.shortname ? d.shortname : "";
            var offset = 36;
            var translateLeng = (offset + shortname.length);
            if (d.root2) {
              return "rotate(-75deg) translate(40px, 0px)";
            } else {
              return "";
            }
          },
          "font-size": function(d) {
            return d.root2 ? "16px" : "";
          },
          // "text-align": function(d) {
          //   return d.root2 ? "right" : "";
          // },
        })

      // TODO: appropriate transform
      var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
        .remove();

      // Update the links…
      var link = svg2.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal({ source: o, target: o });
        });

      // Transition links to their new position.
      link.transition()
        .duration(duration)
        .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
          var o = { x: source.x, y: source.y };
          return diagonal({ source: o, target: o });
        })
        .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

     setTimeout(() => {
       // Transition nodes to their new position.
      var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

      nodeUpdate.select("circle")
        .style("fill-opacity", 1)
        .attr("r", function(d) {
          return d.root2 ? 8 : 6;
        })
        .style({
          "fill": function(d) {
            if (d.children && d.parent) {
              return yellow;
            } else if (d.root2) {
              return red;
            } else if (d.depth > 1) {
              return lightblue;
            } else {
              return blue;
            }
          },
          "transform": function(d) {
            return d.root2? "translate(6px)" : "";
          }
        });


      nodeUpdate.select("text").style("fill-opacity", 1);
     }, duration / 2);

    }
    
    function diagonal(d) {
      var p0 = {
        x : d.source.x + rectNode.height / 2,
        y : (d.source.y + rectNode.width)
      }, p3 = {
        x : d.target.x + rectNode.height / 2,
        y : d.target.y  - 12 // -12, so the end arrows are just before the rect node
      }, m = (p0.y + p3.y) / 2, p = [ p0, {
        x : p0.x,
        y : m
      }, {
        x : p3.x,
        y : m
      }, p3 ];
      p = p.map(function(d) {
        return [ d.y, d.x ];
      });
      return 'M' + p[0] + 'C' + p[1] + ' ' + p[2] + ' ' + p[3];
    }
    /*
    function initDropShadow() {
      var filter = defs.append("filter")
          .attr("id", "drop-shadow")
          .attr("color-interpolation-filters", "sRGB");
      
      filter.append("feOffset")
      .attr("result", "offOut")
      .attr("in", "SourceGraphic")
        .attr("dx", 0)
        .attr("dy", 0);
    
      filter.append("feGaussianBlur")
          .attr("stdDeviation", 2);
    
      filter.append("feOffset")
          .attr("dx", 2)
          .attr("dy", 2)
          .attr("result", "shadow");
    
      filter.append("feComposite")
        .attr("in", 'offOut')
        .attr("in2", 'shadow')
        .attr("operator", "over");
    }
    
    function initArrowDef() {
      // Build the arrows definitions
      // End arrow
      defs.append('marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 0)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .attr('class', 'arrow')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5');
      
      // End arrow selected
      defs.append('marker')
      .attr('id', 'end-arrow-selected')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 0)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .attr('class', 'arrowselected')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5');
    
      // Start arrow
      defs.append('marker')
      .attr('id', 'start-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 0)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .attr('class', 'arrow')
      .append('path')
      .attr('d', 'M10,-5L0,0L10,5');
      
      // Start arrow selected
      defs.append('marker')
      .attr('id', 'start-arrow-selected')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 0)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .attr('class', 'arrowselected')
      .append('path')
      .attr('d', 'M10,-5L0,0L10,5');
    }*/

    function mouseOver(d) {
      // console.log(d);
      // console.log(d3.select(this)[0][0].style.fill = "black");

    }

    function mouseOut(d) {
      // console.log(d3.select(this)[0][0].style.fill = "white");
    }

    // Collapse nodes
    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    var list = pubs_1.children;
    console.log(list);
    list.forEach((item, index) => {
    	var num = index + 1;
    	var html =  "<div class='list-item" + " shortname-" + item.id + "'><span class='bold'>" + num + ")</span> " + item.name;
    	if(item.value) html += " - " + item.value + "</div>";
    	if(item.children) {
    		html += "<ul class='dashed'>";
    		item.children.forEach(children => {
    			html += "<li class='shortname-" + children.id +"'>" + children.name + "</li>";
    		})
    		html += "</ul>";
    	}
    	$(".info").append(html);
    });
    var hoverInID = null;

    $(".gram-box").hover(function() {
    	hoverInID = $(this).data("hover-in");
    	$("." + hoverInID).animate({"font-weight": 700}, 100);
    }, function() {
    	$("." + hoverInID).animate({"font-weight": 500}, 100);
    	hoverInID = null;
    });

    var list2 = pubs_2.children;
    console.log(list2);
    list2.forEach((item, index) => {
      var num = index + 1;
      var html =  "<div class='list-item" + " shortname-" + item.id + "'><span class='bold'>" + num + ")</span> " + item.name;
      if(item.value) html += " - " + item.value + "</div>";
      if(item.children) {
        html += "<ul class='dashed'>";
        item.children.forEach(children => {
          html += "<li class='shortname-" + children.id +"'>" + children.name + "</li>";
        })
        html += "</ul>";
      }
      $(".info2").append(html);
    });

    /*var list3 = pubs_3.children;
    console.log(list3);
    list3.forEach((item, index) => {
      var num = index + 1;
      var html =  "<div class='list-item" + " shortname-" + item.id + "'><span class='bold'>" + num + ")</span> " + item.name;
      if(item.value) html += " - " + item.value + "</div>";
      if(item.children) {
        html += "<ul class='dashed'>";
        item.children.forEach(children => {
          html += "<li class='shortname-" + children.id +"'>" + children.name + "</li>";
        })
        html += "</ul>";
      }
      $(".info3").append(html);
    });*/

}