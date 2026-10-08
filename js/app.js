/* ---------- Məlumatlar ---------- */

// [simvol, ad, notlar, gradient rəngləri]
var ZODIAC = [
    ["♈", "Qoç", "Qırmızı bibər · Paçuli · Amber", "#8a1c1c,#2a0a0c"],
    ["♉", "Buğa", "Jasmin · Vanil · Sandal ağacı", "#4a4a1c,#14140a"],
    ["♊", "Əkizlər", "Sitrus · Lavanda · Muskus", "#6a2fb0,#1d0c36"],
    ["♋", "Xərçəng", "Dəniz təravəti · Yasəmən · Amber", "#1f4aa0,#0a1236"],
    ["♌", "Şir", "Şafran · Paçuli · Vanil", "#9a5a14,#24140a"],
    ["♍", "Qız", "Lavanda · İris · Ağ müşk", "#7a6a62,#1a1414"],
    ["♎", "Tərəzi", "Çiçək notları · Amber · Sandal", "#a03a7a,#2a0c22"],
    ["♏", "Əqrəb", "Bənövşəyi · Paçuli · Dəri", "#5a2a9a,#160a2a"],
    ["♐", "Oxatan", "İstiot ədviyyatları · Vanil · Dəri", "#9a3a1a,#240e08"],
    ["♑", "Oğlaq", "Sandal ağacı · Vetiver · Amber", "#6a3a1a,#160c08"],
    ["♒", "Dolça", "Lavanda · Adaçayı · Muskus", "#1f5a9a,#0a1a30"],
    ["♓", "Balıq", "Yasəmən · Amber · Vanil", "#6a2fb0,#1a0c34"]
];

// [tarix, başlıq, qısa mətn, gradient rəngləri]
var POSTS = [
    ["12.09.2025", "Bürclərə görə ətir seçimi: Sənin enerjinin qoxusu hansıdır?", "Hər bürcün elementi, öz enerjisi və öz qoxusu var. Hansı bürc hansı ətirə daha yaxın olduğunu bil.", "#2a1650,#0d0818"],
    ["06.09.2025", "Ətirin psixologiyaya təsiri", "Qoxular təkcə duyğu deyil, həm də xatirədir. Bəs əslində emosiyalarımıza necə təsir edir?", "#5a1fa0,#1a0838"],
    ["03.09.2025", "Parfum seçərkən nələrə diqqət etməli?", "Ətir seçmək sadəcə qoxu deyil, həm də özünü ifadə etməkdir. Doğru ətir seçmək üçün 5 məsləhət.", "#3a2a28,#0a0808"],
    ["26.08.2025", "Planetlər və ətirlər: kosmosun qoxu dili", "Hər planetin enerjisi var, hər enerjinin öz qoxuları. Bəs planetlər qoxu ilə necə ifadə olunur?", "#7a3a1a,#0d0818"],
    ["20.08.2025", "LAFA kolleksiyasının arxasındakı ilham", "Hər ətrin arxasında bir hekayə, bir bürc və bir hiss var. Kolleksiyanın yaradılma prosesini kəşf et.", "#4a2a7a,#14082a"],
    ["14.08.2025", "Qoxu və xatirə: niyə bəzi ətirlər heç vaxt unudulmur?", "Bəzi qoxular bizi keçmişə aparır. Bu, beynin qoxuları işləmə üsulu ilə bağlıdır.", "#6a2fb0,#0d0818"]
];

var NAV = [
    ["home", "Ana səhifə"],
    ["products", "Məhsullar"],
    ["blog", "Blog"],
    ["contact", "Əlaqə"],
    ["about", "Haqqımızda"]
];

// [ikonun SVG içi, başlıq, mətn]
var FEATURES = [
    [
        "<use href='#star'/>",
        "Bürclərə əsaslanan unikal kompozisiyalar",
        "Hər bürcün enerjisi, öz qoxusu var. Biz onu ətirə çeviririk."
    ],
    [
        "<path d='M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z' fill='none' stroke='currentColor' stroke-width='1.2'/>",
        "Premium keyfiyyət",
        "Dünya standartlarına uyğun seçilmiş komponentlər."
    ],
    [
        "<g fill='none' stroke='currentColor' stroke-width='1.2'><circle cx='5' cy='19' r='1.5'/><circle cx='12' cy='9' r='1.5'/><circle cx='20' cy='4' r='1.5'/><path d='M6 18l5-8 8-5'/></g>",
        "Sənə özün kimi hiss etdirən ətirlər",
        "Çünki hər insan bir ulduzdur."
    ]
];

/* ---------- Köməkçilər ---------- */

var BOTTLE = '<svg viewBox="0 0 100 150"><use href="#bottle"/></svg>';

function $(id) {
    return document.getElementById(id);
}

function gradient(colors) {
    return "background:linear-gradient(160deg," + colors + ")";
}

/* ---------- Naviqasiya ---------- */

function renderNav() {
    $("nav").innerHTML = NAV.map(function (item) {
        return '<a href="#' + item[0] + '" data-p="' + item[0] + '" ' +
            'class="nl text-mist border-b border-transparent py-1 hover:text-[#efe9fa] hover:border-gold">' +
            item[1] + "</a>";
    }).join("");
}

/* ---------- Ana səhifə kartları ---------- */

function renderFeatures() {
    $("feat").innerHTML = FEATURES.map(function (f, i) {
        var divider = i ? "md:border-l md:border-white/10" : "";
        return '<div class="text-center px-7 ' + divider + '">' +
            '<svg viewBox="0 0 24 24" class="w-9 h-9 text-gold mx-auto mb-3">' + f[0] + "</svg>" +
            '<h3 class="font-serif text-xl mb-2">' + f[1] + "</h3>" +
            '<p class="text-[13px] text-mist">' + f[2] + "</p>" +
            "</div>";
    }).join("");
}

function renderCollection() {
    $("row").innerHTML = [0, 4, 9, 3, 6].map(function (i) {
        return '<div class="w-[15%] max-w-[90px]" style="filter:hue-rotate(' + i * 25 + 'deg)">' + BOTTLE + "</div>";
    }).join("");
}

/* ---------- Məhsullar ---------- */

function renderChips() {
    var chips = [["", "Bütün 12"]].concat(ZODIAC.map(function (z) {
        return [z[1], z[1]];
    }));

    $("chips").innerHTML = chips.map(function (c) {
        return '<button data-f="' + c[0] + '" class="chip text-xs px-4 py-1.5 rounded-full text-[#5a4a78]">' + c[1] + "</button>";
    }).join("");

    $("chips").onclick = function (e) {
        if (e.target.dataset && e.target.dataset.f !== undefined) {
            renderProducts(e.target.dataset.f);
        }
    };
}

function renderProducts(filter) {
    var list = ZODIAC.filter(function (z) {
        return !filter || z[1] === filter;
    });

    $("grid").innerHTML = list.map(function (z) {
        return '<article class="relative flex flex-col justify-end min-h-[260px] p-4 rounded-[20px] text-white overflow-hidden transition hover:-translate-y-1" style="' + gradient(z[3]) + '">' +
            '<div class="absolute top-4 left-1/2 -translate-x-1/2 w-[70px] opacity-90">' + BOTTLE + "</div>" +
            '<span class="text-2xl text-gold" aria-hidden="true">' + z[0] + "</span>" +
            '<h3 class="font-serif text-2xl">' + z[1] + "</h3>" +
            '<small class="text-[11px] text-[#d6c9ee] mb-2">' + z[2] + "</small>" +
            '<a href="#contact" class="text-[11px] opacity-85">Daha ətraflı →</a>' +
            "</article>";
    }).join("");

    [].forEach.call($("chips").children, function (b) {
        var active = b.dataset.f === (filter || "");
        b.classList.toggle("bg-[#3a1d63]", active);
        b.classList.toggle("text-white", active);
    });
}

/* ---------- Blog ---------- */

function renderPosts() {
    $("posts").innerHTML = POSTS.map(function (p) {
        return '<article class="bg-white rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(60,30,100,.08)]">' +
            '<i class="block h-36" style="' + gradient(p[3]) + '"></i>' +
            '<div class="p-4">' +
            '<time class="text-[11px] text-[#8a7aa8]">' + p[0] + "</time>" +
            '<h3 class="font-serif text-xl font-medium my-1 leading-snug">' + p[1] + "</h3>" +
            '<p class="text-[13px] text-[#6a5d84]">' + p[2] + "</p>" +
            '<a href="#blog" class="inline-block mt-2 text-xs text-royal">Daha çox oxu →</a>' +
            "</div>" +
            "</article>";
    }).join("");
}

/* ---------- Footer ---------- */

function footerLinks(items) {
    return items.map(function (n) {
        return '<a class="block mb-1.5" href="#' + n[0] + '">' + n[1] + "</a>";
    }).join("");
}

function renderFooter() {
    var social = [["home", "Instagram"], ["home", "TikTok"], ["home", "YouTube"]];

    $("foot").innerHTML =
        '<div><span class="block font-serif text-[26px] tracking-[.3em] text-[#efe9fa]">LAFA</span><p>Astrologiya. Qoxu. Sən.</p></div>' +
        '<div><h4 class="text-[#efe9fa] mb-2">Sürətli keçid</h4>' + footerLinks(NAV) + "</div>" +
        '<div><h4 class="text-[#efe9fa] mb-2">İzləyin</h4>' + footerLinks(social) + "</div>" +
        '<div class="col-span-2 md:col-span-1">' +
        '<h4 class="text-[#efe9fa] mb-2">Yeniliklərdən xəbərdar ol</h4>' +
        '<form id="sf" class="flex border border-white/15 rounded-full overflow-hidden">' +
        '<input type="email" required aria-label="E-poçt" placeholder="E-poçt ünvanınız" class="flex-1 min-w-0 bg-transparent px-4 py-2 outline-none">' +
        '<button aria-label="Abunə ol" class="px-4">→</button>' +
        "</form></div>" +
        '<div class="col-span-full flex flex-wrap justify-between gap-2 border-t border-white/10 pt-4 text-[11px]">' +
        "<span>© 2025 LAFA. Bütün hüquqlar qorunur.</span>" +
        "<span>Məxfilik siyasəti · İstifadə şərtləri</span></div>";

    $("sf").onsubmit = function (e) {
        e.preventDefault();
        var input = this.querySelector("input");
        input.value = "";
        input.placeholder = "Abunə olundu ✓";
    };
}

/* ---------- Əlaqə forması ---------- */

function initContactForm() {
    $("cf").onsubmit = function (e) {
        e.preventDefault();
        $("ok").classList.remove("hidden");
        this.reset();
    };
}

/* ---------- Səhifə dəyişmə (hash) ---------- */

function toggleMenu() {
    $("nav").classList.toggle("hidden");
    $("nav").classList.toggle("flex");
}

function route() {
    var page = (location.hash || "#home").slice(1);
    if (!$(page)) {
        page = "home";
    }

    [].forEach.call(document.querySelectorAll(".page"), function (p) {
        p.classList.toggle("on", p.id === page);
    });

    [].forEach.call(document.querySelectorAll(".nl"), function (a) {
        var active = a.dataset.p === page;
        a.classList.toggle("text-[#efe9fa]", active);
        a.classList.toggle("border-gold", active);
    });

    if (innerWidth < 768) {
        $("nav").classList.add("hidden");
        $("nav").classList.remove("flex");
    }

    window.scrollTo(0, 0);
}

/* ---------- Başlat ---------- */

renderNav();
renderFeatures();
renderCollection();
renderChips();
renderProducts("");
renderPosts();
renderFooter();
initContactForm();

$("menu").onclick = toggleMenu;
addEventListener("hashchange", route);
route();
