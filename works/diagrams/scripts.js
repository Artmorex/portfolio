 window.onload = function() {

    var blue = '#0081cc';
    var lightblue = '#00a1ff';
    var yellow = '#f1ca12';
    var red = '#e92558';
    var darkred = "#851718";

    let cssroot = document.documentElement;
    cssroot.style.setProperty('--lightblue', lightblue);
    cssroot.style.setProperty('--blue', blue);
    cssroot.style.setProperty('--yellow', yellow);

    var pubs_2 = {
      "name": "ПОГРАНИЧНАЯ СЛУЖБА",
      "root2": true,
      "children": [
        {
          "name": "Департамент пограничной охраны",
          "shortname": "ДПО",
          "children": [{
              "name": "Оперативно-организационное управление",
              "shortname": "ООУ",
              "value": ""
            },
            {
              "name": "Управление анализа и координации",
              "shortname": "УАК",
              "value": ""
            },
            {
              "name": "Оперативно-розыскное управление",
              "shortname": "ОРУ",
              "value": ""
            },
          ]
        },
        {
          "name": "Департамент береговой охраны",
          "shortname": "ДБО",
          "children": [{
              "name": "Оперативно-организационное управление",
              "shortname": "ООУ",
              "value": ""
            },
            {
              "name": "Управление анализа и координации",
              "shortname": "УАК",
              "value": ""
            },
            {
              "name": "Государственная морская инспекция",
              "shortname": "ГМИ",
              "value": ""
            },
          ]
        },
        {
          "name": "Оперативное управление ПС",
          "shortname": "ОУ ПС",
          "value": ""
        },
        {
          "name": "Управление пограничного контроля ПС",
          "shortname": "УПК ПС",
          "value": ""
        },
        {
          "name": "Управление стратегического планирования ПС",
          "shortname": "УСП ПС",
          "value": ""
        },
        {
          "name": "Управление технического развития ПС",
          "shortname": "УТР ПС",
          "value": ""
        },
        {
          "name": "Управление кадров ПС",
          "shortname": "УК ПС",
          "value": ""
        },
        {
          "name": "Управление воспитательной работы ПС",
          "shortname": "УВР ПС",
          "value": ""
        },
        {
          "name": "Финансово-экономическое управление ПС",
          "shortname": "ФЭУ ПС",
          "value": ""
        },
        {
          "name": "Управление материально-технических средств ПС",
          "shortname": "УМТО ПС",
          "value": ""
        },
        {
          "name": "Инспекторское управление ПС",
          "shortname": "ИУ ПС",
          "value": ""
        },
        {
          "name": "Служба финансового обеспечения ПС",
          "shortname": "СФО ПС",
          "value": "ФСБ России 119530, Москва, ул. Рябиновая, д. 40 А, ИНН 7708068880"
        },
      ]
    };

    var pubs_1 = {
      "name": "ЦЕНТРАЛЬНЫЙ АППАРАТ",
      "root": true,
      "children": [
        {
          "name": "Контрольная служба(КС)",
          "shortname": "КС"
        },
        {
          "name": "Следственное управление(СУ)",
          "shortname": "СУ",
          "value": "начальник Шишов Михаил Васильевич"
        },
        {
          "name": "Управление собственной безопасности (УСБ)",
          "shortname": "УСБ",
          "value": ""
        },
        {
          "name": "Оперативно-Поисковое управление (17-е управление)",
          "shortname": "ОПУ",
          "value": ""
        },
        {
          "name": "Научно-техническая служба ФСБ",
          "shortname": "НТС",
          "value": "начальник Фетисов Андрей Александрович",
          "children": [{
              "name": "Управление заказов и поставок вооружений, военной и специальной техники",
              "shortname": "УЗП(ввст)",
              "value": ""
            },
            {
              "name": "Управление оперативно-технических мероприятий (УОТМ)",
              "shortname": "УОТМ",
              "value": ""
            },
            {
              "name": "НИИ информационных технологий, Научно-исследовательский центр.",
              "shortname": "НИЦ",
              "value": ""
            },
          ]
        },
        {
          "name": "Центр по лицензированию, сертификации и защите государственной тайны (ЦЛСЗ)",
          "shortname": "ЦЛСЗ",
          "value": "",
          "children": [{
              "name": "1-я служба ЦЛСЗ",
              "shortname": "1 служба",
              "value": ""
            },
            {
              "name": "2-я служба ЦЛСЗ",
              "shortname": "2 служба",
              "value": ""
            }
          ]
        },
        {
          "name": "Аппарат прикомандированных сотрудников",
          "shortname": "АПC",
          "value": ""
        },
        {
          "name": "Центр специальной техники (ЦСТ) ФСБ (11-й Центр)",
          "shortname": "ЦСТ",
          "value": "",
          "children": [{
              "name": "НИИ-1 НИИ специальной техники",
              "shortname": "НИИ-1",
              "value": ""
            },
            {
              "name": "НИИ-2 НИИ криминалистики, НИИ-3 информационных технологий",
              "shortname": "НИИ-2",
              "value": ""
            },
            {
              "name": "ЦСФП ФСБ (14-й Центр)",
              "shortname": "ЦСФП",
              "value": ""
            },
            {
              "name": "ЦРРСС (16-й Центр, ЦРЭРСС)",
              "shortname": "ЦРРС",
              "value": ""
            },
            {
              "name": "Управление «Б»",
              "shortname": "Упр «Б»",
              "value": ""
            },
            {
              "name": "Управление «И»",
              "shortname": "Упр «И»",
              "value": ""
            }
          ]
        },
        {
          "name": "Пограничная служба",
          "shortname": "ПС",
          "value": ""
        },
        {
          "name": "Комендантское управление (КУ) ",
          "shortname": "КУ",
          "value": ""
        },
        {
          "name": "Центр специального назначения (ЦСН) ",
          "shortname": "(ЦСН)",
          "value": ""
        },
        {
          "name": "Центр защиты информации и специальной связи ФСБ (ЦЗИиСС) ",
          "shortname": "ЦЗИиСС",
          "value": "",
          "children": [
            {
              "name": "Управление «А»",
              "shortname": "Упр «А»",
              "value": ""
            },
            {
              "name": "Управление «Б»",
              "shortname": "Упр «Б»",
              "value": ""
            },
            {
              "name": "Управление «С»",
              "shortname": "Упр «С»",
              "value": ""
            },
            {
              "name": "Управление «ОР»",
              "shortname": "Упр «ОР»",
              "value": ""
            } 
          ]
        },
        {
          "name": "Управление радиоконтрразведки (Управление «Р»).",
          "shortname": "Упр «Р»",
          "value": ""
        },
        {
          "name": "Договорно-правовое управление (ДПУ)",
          "shortname": "ДПУ",
          "value": ""
        },
        {
          "name": "Военно-мобилизационное управление (ВМУ)",
          "shortname": "ВМУ",
          "value": ""
        },
        {
          "name": "Управление регистрации и архивных фондов (УРАФ)",
          "shortname": "УРАФ",
          "value": ""
        },
        {
          "name": "Управление программ содействия (УПС)",
          "shortname": "УПС",
          "value": "",
          "children": [{
            "name": "Центр общественных связей",
            "shortname": "ЦОС",
            "value": ""
          }]
        },
        {
          "name": "Управление «М»",
          "shortname": "Упр «М»",
          "value": ""
        },

      ]
    };

    var pubs_3 = {
      "name": "Седьмая служба ФСБ",
      "root3": true,
      "children": [
        {
          "name": "Управление материально-технического обеспечения",
          "shortname": "УМТО"
        },
        {
          "name": "Управление капитального строительства",
          "shortname": "УКС"
        },
        {
          "name": "Военно-строительное управление",
          "shortname": "ВСУ",
          "value": ""
        },
        {
          "name": "Финансово-экономическое управление",
          "shortname": "ФЭУ",
          "value": ""
        },
        {
          "name": "Служба социально-бытового обеспечения ",
          "shortname": "ССБО",
          "value": ""
        },
        {
          "name": "Отдел вооружения и Служба технических инспекций и пожарного надзора",
          "shortname": "ЦЛСЗ",
          "value": ""
        },
        {
          "name": "В составе Седьмой службы ФСБ также имеются тринадцать дирекций и четыре от-дела по капитальному строительству в разных регионах России, Кавказский военно-строительный отряд в Сочи и Северо-Кавказское строительное управление в Ессен-туках.",
          "shortname": "13 дирекций и 4 отдела",
          "value": "",
          "children": [{
              "name": "Отдел капитального строительства в Калининградской области Управления капитального строительства Службы обеспечения деятельности Федераль-ной службы безопасности Российской Федерации, адрес: Российская Феде-рация, 236039, Калининградская обл, Калининград г, ул. А. Суворова, дом 15, ИНН 7702232171, тел 74012631075 oksko39@rambler.ru",
              "shortname": "1",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Сибирском федеральном округе Управления капитального строительства Службы обеспечения деятельности Федераль-ной службы безопасности Российской Федерации ДССФО УКС 7 Службы ФСБ России Российская Федерация, 630090, Новосибирская обл, Новоси-бирск г, Николаева, 8, ИНН 7702232171 тел 73833309973",
              "shortname": "2",
              "value": ""
            },
            {
              "name": "Отдел капитального строительства в г. Воронеже Управления капитального строительства Службы обеспечения деятельности Федеральной службы безопасности Российской Федерации Российская Федерация, 394077, Воро-нежская обл, Воронеж г, Московский проспект, 97, ОКСВ УКС 7 Службы ФСБ России, ИНН 7702232171, тел 74732330483 oksv-uks@mail.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Южном федеральном округе УКС 7 Службы ФСБ России Российская Федерация, 344082, Ростовская обл, Ростов-на-Дону г, ул. Большая Садовая, 13, ИНН 7702232171, тел 78632404463 dsufo@yandex.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Юго-Восточном регионе Управления капи-тального строительства Службы обеспечения деятельности Федеральной службы безопасности Российской Федерации Российская Федерация, 454092, Челябинская обл, Челябинск г, Карла Либкнехта, 2, 444, ИНН 7702232171 ds-uvr74@mail.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Северо-Западном регионе Управления капи-тального строительства Службы обеспечения деятельности Федеральной службы безопасности Российской Федерации ДССЗР УКС 7 Службы ФСБ России, Российская Федерация, 191015, Санкт-Петербург, ул. Кавалергард-ская, 40, ИНН 7702232171, тел 78124386564 ofk7204@mail.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция № 2 по строительству в г. Москве Управления капитального строительства Службы обеспечения деятельности Федеральной службы безопасности Российской Федерации Дирекция № 2 по строительству в г. Москве УКС 7 Службы ФСБ России, Российская Федерация, 119607, Москва, Мичуринский проспект, дом 25 корпус 2, ИНН 7702232171, тел 74997394996 dsm-med@yandex.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Дальневосточном регионе Управления капи-тального строительства Службы обеспечения деятельности Федеральной службы безопасности Российской Федерации ДСДВР УКС 7 Службы ФСБ России, Российская Федерация, 680030, Хабаровский край, Хабаровск г, Постышева, 1, ИНН 7702232171, тел 74212798339, oksdvr@mail.ru",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Крымском федеральном округе УКС 7 Служ-бы ФСБ России Российская Федерация, 295034, Крым Симферополь г, бульвар Франко, 13, ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Крымском федеральном округе УКС 7 Служ-бы ФСБ России Российская Федерация, 295034, Крым Симферополь г, бульвар Франко, 13, ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Краснодарском крае Управления капитально-го строительства Службы обеспечения деятельности Федеральной службы безопасности Российской Федерации ДСКК УКС 7 Службы ФСБ России Российская Федерация, 354008, Краснодарский край, Сочи г, Пирогова, 2а, ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Отдел капитального строительства в Республике Дагестан Управления ка-питального строительства Службы обеспечения деятельности Федеральной службы безопасности Российской Федерации ОКСРД УКС 7 Службы ФСБ России Российская Федерация, 367025, Дагестан Респ, Махачкала г, Р. Гам-затова, 7, ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Северо-Кавказском федеральном округе УКС 7 Службы ФСБ России Российская Федерация, 357500, Ставропольский край, Пятигорск г, Теплосерная, 99, ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Забайкальском регионе УКС 7 Службы ФСБ России Российская Федерация, 672000, Забайкальский край, Чита г, ул. Ле-нина, д. 84 ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Отдел капитального строительства в г. Москве Управления капитального строительства Службы обеспечения деятельности Федеральной службы безопасности Российской Федерации ОКСМ УКС 7 Службы ФСБ России Российская Федерация, 117485, Москва, улица Бутлерова, д. 11, ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Дирекция по строительству в Приволжском федеральном округе Управле-ния капитального строительства Службы обеспечения деятельности Феде-ральной службы безопасности Российской Федерации ДСПФО УКС 7 Службы ФСБ России Российская Федерация, 603163, Нижегородская обл, Нижний Новгород г, Казанское шоссе, 2а, ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "дирекция по строительству в Центральном регионе УКС 7 Службы ФСБ России Российская Федерация, 119607, Москва, Мичуринский проспект, 25, корпус 2, ИНН 7702232171",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Кавказский военно-строительный отряд Российская Федерация, 354008, Краснодарский край, Сочи г, Пирогова, 2 а, ИНН 2320034274",
              "shortname": "3",
              "value": ""
            },
            {
              "name": "Северо-Кавказское строительное управление Российская Федерация, 357625, Ставропольский край, Ессентуки г, ПЯТИГОРСКАЯ, 121 ИНН 2632019360",
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
            let names = d.name.split(" ");
            let res = "";
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
          let shortname = d.shortname ? d.shortname : "";
          let offset = 36;
          let translateLeng = (offset + shortname.length);
          let res = null;
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
            let shortname = d.shortname ? d.shortname : "";
            let offset = 36;
            let translateLeng = (offset + shortname.length);
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
            let names = d.name.split(" ");
            let res = "";
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
          let shortname = d.shortname ? d.shortname : "";
          let offset = 36;
          let translateLeng = (offset + shortname.length);
          let res = null;
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
            let shortname = d.shortname ? d.shortname : "";
            let offset = 36;
            let translateLeng = (offset + shortname.length);
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

    let list = pubs_1.children;
    console.log(list);
    list.forEach((item, index) => {
    	let num = index + 1;
    	let html =  "<div class='list-item" + " shortname-" + item.id + "'><span class='bold'>" + num + ")</span> " + item.name;
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
    let hoverInID = null;

    $(".gram-box").hover(function() {
    	hoverInID = $(this).data("hover-in");
    	$("." + hoverInID).animate({"font-weight": 700}, 100);
    }, function() {
    	$("." + hoverInID).animate({"font-weight": 500}, 100);
    	hoverInID = null;
    });

    let list2 = pubs_2.children;
    console.log(list2);
    list2.forEach((item, index) => {
      let num = index + 1;
      let html =  "<div class='list-item" + " shortname-" + item.id + "'><span class='bold'>" + num + ")</span> " + item.name;
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

    /*let list3 = pubs_3.children;
    console.log(list3);
    list3.forEach((item, index) => {
      let num = index + 1;
      let html =  "<div class='list-item" + " shortname-" + item.id + "'><span class='bold'>" + num + ")</span> " + item.name;
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