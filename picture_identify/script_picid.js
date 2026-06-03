const birdsData = [
    {
        id: "sparrow",
        name: "麻雀",
        englishName: "Eurasian Tree Sparrow",
        latinName: "Passer montanus",
        category: "garden",
        categoryName: "园林鸟类",
        diet: "杂食性",
        size: "14-15cm",
        icon: "🐦",
        description: "麻雀是中国最常见的鸟类之一，体型小巧，活泼可爱。它们适应能力极强，广泛栖息于城市和乡村的各种环境中。",
        features: ["棕褐色羽毛", "圆锥形喙", "脸颊黑色斑点", "胸部有黑色斑块"],
        colors: ["棕色", "褐色", "黑色", "白色"]
    },
    {
        id: "pigeon",
        name: "鸽子",
        englishName: "Rock Pigeon",
        latinName: "Columba livia",
        category: "rooftop",
        categoryName: "屋顶鸟类",
        diet: "杂食性",
        size: "30-35cm",
        icon: "🕊️",
        description: "鸽子是一种古老而温顺的鸟类，象征着和平与安宁。它们在城市中常见，常在广场、公园等公共场所活动。",
        features: ["体型中等", "羽毛灰蓝色", "颈部有金属光泽", "虹膜橙红色"],
        colors: ["灰色", "蓝色", "白色", "黑色"]
    },
    {
        id: "swallow",
        name: "燕子",
        englishName: "Barn Swallow",
        latinName: "Hirundo rustica",
        category: "garden",
        categoryName: "园林鸟类",
        diet: "食虫性",
        size: "17-23cm",
        icon: "🪶",
        description: "燕子是春天的使者，身姿轻盈，飞行技艺高超。它们喜欢在人类屋檐下筑巢，是著名的益鸟。",
        features: ["身体细长", "叉形尾羽", "背部蓝黑色", "腹部白色或淡红色"],
        colors: ["黑色", "蓝色", "白色", "红色"]
    },
    {
        id: "crow",
        name: "乌鸦",
        englishName: "Large-billed Crow",
        latinName: "Corvus macrorhynchos",
        category: "forest",
        categoryName: "林地鸟类",
        diet: "杂食性",
        size: "46-59cm",
        icon: "🐦‍⬛",
        description: "乌鸦是聪明而神秘的鸟类，羽毛乌黑发亮，叫声沙哑。它们在城市和林地都能生存，适应能力极强。",
        features: ["全身黑色", "体型较大", "喙粗厚", "叫声沙哑响亮"],
        colors: ["黑色"]
    },
    {
        id: "magpie",
        name: "喜鹊",
        englishName: "Black-billed Magpie",
        latinName: "Pica pica",
        category: "garden",
        categoryName: "园林鸟类",
        diet: "杂食性",
        size: "40-51cm",
        icon: "🦅",
        description: "喜鹊是中国人心目中的吉祥鸟，羽毛黑白相间，尾羽很长。它们聪明机灵，叫声清脆悦耳。",
        features: ["黑白相间羽毛", "长尾羽", "蓝绿色金属光泽", "头胸背黑色，其余白色"],
        colors: ["黑色", "白色", "蓝色", "绿色"]
    },
    {
        id: "woodpecker",
        name: "啄木鸟",
        englishName: "Great Spotted Woodpecker",
        latinName: "Dendrocopos major",
        category: "forest",
        categoryName: "林地鸟类",
        diet: "食虫性",
        size: "20-24cm",
        icon: "🐦",
        description: "啄木鸟是森林医生，以在树干上啄木取食害虫而闻名。它们的头部结构特殊，能高速敲击树干而不受伤。",
        features: ["黑白相间羽毛", "红色臀部", "长而尖的喙", "攀附树干的对趾"],
        colors: ["黑色", "白色", "红色"]
    },
    {
        id: "egret",
        name: "白鹭",
        englishName: "Little Egret",
        latinName: "Egretta garzetta",
        category: "wetland",
        categoryName: "湿地鸟类",
        diet: "肉食性",
        size: "55-65cm",
        icon: "🦢",
        description: "白鹭是优雅的湿地鸟类，身披雪白羽毛，长腿细长。它们常在浅水中觅食，姿态优美，被誉为白衣仙子。",
        features: ["雪白羽毛", "细长黑腿", "黄色趾部", "繁殖期有飘逸的羽冠"],
        colors: ["白色", "黄色", "黑色"]
    },
    {
        id: "myna",
        name: "八哥",
        englishName: "Common Myna",
        latinName: "Acridotheres tristis",
        category: "garden",
        categoryName: "园林鸟类",
        diet: "杂食性",
        size: "23-26cm",
        icon: "🦜",
        description: "八哥是著名的笼养鸟，能模仿人说话和其他声音。它们聪明伶俐，善于鸣唱，是深受欢迎的宠物鸟。",
        features: ["棕黑色羽毛", "黄色嘴和脚", "白色翼斑", "头侧有羽冠"],
        colors: ["棕色", "黑色", "黄色", "白色"]
    },
    {
        id: "thrush",
        name: "画眉",
        englishName: "Chinese Hwamei",
        latinName: "Garrulax canorus",
        category: "forest",
        categoryName: "林地鸟类",
        diet: "杂食性",
        size: "21-24cm",
        icon: "🎵",
        description: "画眉是著名的鸣禽，因眼部白色条纹如眉毛而得名。它们歌声婉转动听，是中国传统的笼养鸟之一。",
        features: ["橄榄褐色羽毛", "白色眉纹", "棕褐色耳羽", "嘴黄色"],
        colors: ["褐色", "白色", "黄色"]
    },
    {
        id: "kingfisher",
        name: "翠鸟",
        englishName: "Common Kingfisher",
        latinName: "Alcedo atthis",
        category: "waterside",
        categoryName: "水边鸟类",
        diet: "肉食性",
        size: "16-17cm",
        icon: "🐟",
        description: "翠鸟是水域精灵，羽毛翠绿闪亮，常在水边树枝上静止，等待猎物。它们捕食速度快，俯冲入水捕鱼的画面十分精彩。",
        features: ["翠蓝色背部", "橙棕色腹部", "红色双脚", "长而尖的黑色嘴"],
        colors: ["蓝色", "绿色", "橙色", "棕色", "红色", "黑色"]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    const previewImage = document.getElementById('previewImage');
    const removeBtn = document.getElementById('removeBtn');
    const identifyBtn = document.getElementById('identifyBtn');
    const resultContainer = document.getElementById('resultContainer');
    const loadingContainer = document.getElementById('loadingContainer');
    const uploadAnotherBtn = document.getElementById('uploadAnotherBtn');
    
    let uploadedImageUrl = '';

    uploadArea.addEventListener('click', function() {
        fileInput.click();
    });

    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function() {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });

    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });

    removeBtn.addEventListener('click', function() {
        resetUpload();
    });

    identifyBtn.addEventListener('click', function() {
        performIdentification();
    });

    uploadAnotherBtn.addEventListener('click', function() {
        resetUpload();
    });

    function handleFile(file) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            alert('请上传有效的图片文件（JPG、PNG、GIF）');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImageUrl = e.target.result;
            previewImage.src = uploadedImageUrl;
            uploadArea.style.display = 'none';
            previewContainer.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }

    function resetUpload() {
        uploadArea.style.display = 'flex';
        previewContainer.style.display = 'none';
        resultContainer.style.display = 'none';
        loadingContainer.style.display = 'none';
        fileInput.value = '';
        previewImage.src = '';
    }

    function performIdentification() {
        previewContainer.style.display = 'none';
        loadingContainer.style.display = 'flex';

        setTimeout(function() {
            const randomIndex = Math.floor(Math.random() * birdsData.length);
            const randomConfidence = (85 + Math.random() * 14).toFixed(1);
            const bird = birdsData[randomIndex];
            
            displayResult(bird, randomConfidence);
        }, 2000);
    }

    function displayResult(bird, confidence) {
        loadingContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        document.getElementById('confidenceValue').textContent = confidence + '%';
        document.getElementById('resultUploadedImage').src = uploadedImageUrl;
        document.getElementById('resultIcon').textContent = bird.icon;
        document.getElementById('resultName').textContent = bird.name;
        document.getElementById('resultEnglish').textContent = bird.englishName;
        document.getElementById('resultLatin').textContent = bird.latinName;
        document.getElementById('resultCategory').textContent = bird.categoryName;
        document.getElementById('resultDiet').textContent = bird.diet;
        document.getElementById('resultSize').textContent = bird.size;
        document.getElementById('resultConservation').textContent = '无危（LC）';
        document.getElementById('resultDescription').textContent = bird.description;

        const featuresList = document.getElementById('resultFeatures');
        featuresList.innerHTML = '';
        bird.features.forEach(function(feature) {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
});