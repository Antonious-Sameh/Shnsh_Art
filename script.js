// دلوقتي مش محتاجين JavaScript للـ Navbar
console.log("Navbar جاهز");

// خريطة صفحات الكورسات داخل الموقع
const coursePages = {
    basics: "courses/basics.html",
    oil: "courses/oil.html",
    charcoal: "courses/charcoal.html",
    kids: "courses/kids.html",
};

// لكل كورس: طلابه وكلمات السر بتاعتهم
// تقدر تزود/تعدّل أسماء وباسوردات هنا
const students = {
    basics: {
        "tony": "1111",
        "shenouda": "8721",
        "نجيب": "N5655",
        "ماري": "M9733",
        "هويدا": "H0114",
        "جني": "G2995",
        "ماريا1": "M3548",
        "ملاك": "M3930",
        "احمد": "A3150",
        "مروه": "M4538",
        "سهيلة": "S1436",
        "نيفين": "N5512",
        "وائل": "W7774",
        "فوزيا": "F1370",
        "يوانا": "U7802",
        "نورا": "N2275",
        "ابو منصور": "A6509",
        "دونيا": "D7834",
        "سما": "S2133",
        "امال": "A8085",
        "سليم": "S3030",
        "مينا": "M5896",
        "رحاب": "R7179",
        "امان": "A0262",
        "مرفت": "M0238",
        "اشرف": "A1905",
        "ماريا2": "M8651",
        "كوكو": "K8703",
        "عايدة": "A1392",
        "علي": "A1401",
        "محمود": "M8447",
        "روميساء": "R9537",
        "مارولا": "M0831",
    },
    oil: {
        "tony": "1111",
        "shenouda": "8721",
        "الراهب ڨيني": "V9644",
        "مريم": "M2204",
        "وفاء": "W7263",
    },
    charcoal: {
        "tony": "1111",
        "shenouda": "8721"
    },
    kids: {
        "tony": "1111",
        "shenouda": "8721"
    },
};

function accessCourse(courseKey) {
    const name = prompt("ادخل اسمك:");
    if (!name) return;

    const password = prompt("ادخل كلمة السر الخاصة بيك:");
    const valid = students[courseKey] && students[courseKey][name] === password;

    if (valid) {
        // نحفظ جلسة دخول للكورس ده للطالب ده
        const sessionKey = `shnshart:session:${courseKey}`;
        localStorage.setItem(sessionKey, JSON.stringify({
            name,
            courseKey,
            ts: Date.now()
        }));

        // نروح لصفحة الكورس جوه الموقع
        window.location.href = coursePages[courseKey];
    } else {
        alert("الاسم أو كلمة السر غير صحيحة!");
    }
}

function showTrialVideos() {
    const trialVideos = document.getElementById("trialVideos");
    trialVideos.style.display = (trialVideos.style.display === "none") ? "grid" : "none";
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
}

window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
