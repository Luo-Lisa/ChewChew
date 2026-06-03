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
        habitat: ["城市公园", "庭院", "农田", "屋檐下"],
        distribution: "欧亚大陆广泛分布，中国各地均有分布",
        habits: {
            diet: "种子、昆虫、果实，尤其喜爱谷物",
            breeding: "3-7月繁殖，窝卵数4-6枚，孵化期约12天",
            behavior: "群居性强，常在地面跳跃觅食，飞行能力较强"
        },
        funFacts: [
            "麻雀曾经被列为四害之一，大量被捕杀，后被平反",
            "麻雀虽小，五脏俱全——这句话形容它们的身体结构完整",
            "麻雀的记忆力很好，能记住食物储藏的地点",
            "它们一天需要吃掉自己体重的一半食物"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["pigeon", "swallow"]
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
        habitat: ["城市广场", "公园", "建筑物屋顶", "高架桥下"],
        distribution: "原产于欧洲、北非和南亚，现已遍布世界各大城市",
        habits: {
            diet: "谷物、种子、果实、面包屑等人类食物残渣",
            breeding: "全年可繁殖，窝卵数2枚，孵化期约18天",
            behavior: "记忆力极强，能准确返回千里之外的巢穴，具有导航能力"
        },
        funFacts: [
            "鸽子是和平的象征，橄榄枝加鸽子图案深入人心",
            "鸽子有出色的导航能力，能利用地球磁场找到方向",
            "在古代，鸽子被用作信使，传递紧急信息",
            "鸽子的飞行速度可达每小时50-100公里"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["sparrow", "myna"]
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
        habitat: ["村庄", "城镇", "农田", "湖泊河流附近"],
        distribution: "分布广泛，全球除南极洲外各大洲均有分布",
        habits: {
            diet: "主要捕食飞行中的昆虫，如蚊子、苍蝇、蛾类等",
            breeding: "4-7月繁殖，在屋檐下或建筑物内筑泥巢，窝卵数4-6枚",
            behavior: "飞行技巧高超，能在空中急转弯，捕食害虫"
        },
        funFacts: [
            "燕子归来被视为春天的象征，古诗春燕归来广为流传",
            "一只燕子一个夏天能捕食25万只害虫",
            "燕子的巢穴是用泥土混合唾液筑成的，非常坚固",
            "它们能以每小时35公里的速度飞行"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["sparrow"]
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
        habitat: ["森林", "公园", "城市郊区", "农田"],
        distribution: "亚洲东部和东南部，包括中国大部分地区",
        habits: {
            diet: "杂食性，包括昆虫、果实、种子、腐肉、垃圾等",
            breeding: "3-5月繁殖，树枝筑巢，窝卵数3-5枚",
            behavior: "智商很高，能使用工具，具有很强的记忆力"
        },
        funFacts: [
            "乌鸦是最聪明的鸟类之一，能解决复杂的问题",
            "它们能记住人脸，甚至能识别出好人和坏人",
            "乌鸦会收藏食物，并在需要时找回",
            "在日本文化中，乌鸦被视为神的使者"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["magpie", "myna"]
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
        habitat: ["村庄", "城市公园", "树林", "庭院"],
        distribution: "欧亚大陆大部分地区，中国各地均有分布",
        habits: {
            diet: "昆虫、果实、种子、小型脊椎动物，也会吃垃圾",
            breeding: "3-5月繁殖，大型树枝巢，窝卵数5-8枚",
            behavior: "性活泼，爱嬉戏，记忆力强，能记住藏食地点"
        },
        funFacts: [
            "喜鹊是中国传统文化中的吉祥象征，喜鹊登枝寓意喜事临门",
            "它们智商很高，能记住人脸并区分敌友",
            "喜鹊是少数能通过镜子测试的鸟类之一",
            "它们会在冬天收集闪光物品装饰自己的巢穴"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["crow", "sparrow"]
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
        icon: "🪵",
        description: "啄木鸟是森林医生，以在树干上啄木取食害虫而闻名。它们的头部结构特殊，能高速敲击树干而不受伤。",
        features: ["黑白相间羽毛", "红色臀部", "长而尖的喙", "攀附树干的对趾"],
        habitat: ["森林", "公园树木", "果园", "城市林荫道"],
        distribution: "欧亚大陆温带地区，中国北方较为常见",
        habits: {
            diet: "树皮下的昆虫及其幼虫，如天牛、甲虫等",
            breeding: "4-6月繁殖，在树干上凿洞筑巢，窝卵数4-7枚",
            behavior: "攀附在树干上，用喙敲击树干探测害虫，发出特殊的敲击声"
        },
        funFacts: [
            "啄木鸟的头部能承受每秒1000次的撞击，不会脑震荡",
            "一只啄木鸟一天能吃掉3000多只害虫",
            "它们的舌头很长，能伸到树干的深处取食",
            "啄木鸟敲击树干还有通信作用，用来宣示领地"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["crow"]
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
        habitat: ["沼泽", "池塘", "河流浅滩", "稻田"],
        distribution: "亚洲、非洲、欧洲南部，中国长江以南较为常见",
        habits: {
            diet: "鱼类、蛙类、昆虫、甲壳类等小型动物",
            breeding: "3-7月繁殖，树枝筑巢，窝卵数3-5枚",
            behavior: "单腿站立，用脚搅动水底，惊扰猎物后迅速捕食"
        },
        funFacts: [
            "白鹭的羽毛曾经非常珍贵，被用于装饰帽子，导致大量捕杀",
            "它们常与大型动物共生，在它们身边捕食被惊扰的昆虫",
            "白鹭的求偶舞蹈非常优美，会展开翅膀和羽冠",
            "繁殖季节，白鹭的嘴会变成粉红色"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["kingfisher"]
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
        habitat: ["城市公园", "村庄", "农田", "庭院"],
        distribution: "南亚、东南亚，中国南方各省均有分布",
        habits: {
            diet: "昆虫、果实、种子、花蜜，也吃人类食物残渣",
            breeding: "4-7月繁殖，在树洞或建筑缝隙中筑巢，窝卵数4-5枚",
            behavior: "善于鸣叫，能模仿其他鸟叫和人语，性活泼好动"
        },
        funFacts: [
            "八哥能模仿100多种不同的声音，包括人类语言",
            "它们智商很高，能学会简单的指令和技巧",
            "野生八哥会跟随牛群，捕食被惊扰的昆虫",
            "八哥在求偶时会进行复杂的舞蹈表演"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["sparrow", "crow"]
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
        habitat: ["山林", "公园灌木丛", "果园", "村庄附近的树林"],
        distribution: "中国中部和南部，越南、老挝等地",
        habits: {
            diet: "昆虫、果实、种子、嫩叶等",
            breeding: "4-7月繁殖，灌木丛中筑巢，窝卵数3-5枚",
            behavior: "善于鸣唱，歌声复杂多变，常在灌木丛中跳跃觅食"
        },
        funFacts: [
            "画眉的歌声婉转动听，是中国传统四大鸣鸟之一",
            "它们的白色眉纹非常醒目，像画上去的眉毛",
            "画眉非常好斗，常被用于斗鸟比赛",
            "野生画眉的歌声比笼养鸟更加多变和自然"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["myna", "sparrow"]
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
        habitat: ["河流", "湖泊", "池塘", "溪流"],
        distribution: "欧洲、亚洲、非洲，中国各地水域均有分布",
        habits: {
            diet: "小型鱼类为主，也会捕食水生昆虫和甲壳类",
            breeding: "4-8月繁殖，在河岸陡壁上凿洞筑巢，窝卵数5-7枚",
            behavior: "常静立于水边树枝上，发现猎物后迅速俯冲入水捕食"
        },
        funFacts: [
            "翠鸟俯冲入水的速度可达每秒2.5米",
            "它们的眼睛能调节焦距，在水中也能看清猎物",
            "翠鸟的羽毛颜色是因为光线折射，而非色素",
            "捕到鱼后会摔晕再吞下，确保鱼头朝向正确方向"
        ],
        conservation: "无危（LC）",
        relatedBirds: ["egret"]
    }
];

let currentFilter = 'all';
let currentSearch = '';
let isDetailOpen = false;

function getCategoryName(category) {
    const categoryNames = {
        garden: '园林鸟类',
        wetland: '湿地鸟类',
        rooftop: '屋顶鸟类',
        forest: '林地鸟类',
        waterside: '水边鸟类'
    };
    return categoryNames[category] || category;
}

function initApp() {
    setupEventListeners();
    renderBirdsGrid(birdsData);
    setupScrollEffects();
    updateBirdCount();
}

function setupEventListeners() {
    const filterTags = document.getElementById('filterTags');
    filterTags.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-tag')) {
            handleFilterClick(e.target);
        }
    });

    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function() {
            handleSearch(e.target.value);
        }, 300);
    });

    const heroCtaBtn = document.getElementById('heroCtaBtn');
    heroCtaBtn.addEventListener('click', scrollToBirdsGrid);

    const detailCloseBtn = document.getElementById('detailCloseBtn');
    detailCloseBtn.addEventListener('click', closeDetail);

    const detailOverlay = document.getElementById('detailOverlay');
    detailOverlay.addEventListener('click', function(e) {
        if (e.target === detailOverlay) {
            closeDetail();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isDetailOpen) {
            closeDetail();
        }
    });

    const clearFilterBtn = document.getElementById('clearFilter');
    clearFilterBtn.addEventListener('click', resetFilters);

    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    resetFiltersBtn.addEventListener('click', resetFilters);

    const backToTopBtn = document.getElementById('backToTop');
    backToTopBtn.addEventListener('click', scrollToTop);
}

function handleFilterClick(element) {
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(function(tag) {
        tag.classList.remove('active');
    });
    element.classList.add('active');

    currentFilter = element.dataset.category;
    
    const filterValue = document.getElementById('filterValue');
    const clearFilterBtn = document.getElementById('clearFilter');
    
    if (currentFilter === 'all') {
        filterValue.textContent = '全部';
        clearFilterBtn.style.display = 'none';
    } else {
        filterValue.textContent = getCategoryName(currentFilter);
        clearFilterBtn.style.display = 'inline-block';
    }

    filterBirds();
}

function handleSearch(query) {
    currentSearch = query.trim().toLowerCase();
    filterBirds();
}

function filterBirds() {
    let filteredBirds = birdsData;

    if (currentFilter !== 'all') {
        filteredBirds = filteredBirds.filter(function(bird) {
            return bird.category === currentFilter;
        });
    }

    if (currentSearch) {
        filteredBirds = filteredBirds.filter(function(bird) {
            return bird.name.toLowerCase().includes(currentSearch) ||
                   bird.englishName.toLowerCase().includes(currentSearch) ||
                   bird.latinName.toLowerCase().includes(currentSearch);
        });
    }

    renderBirdsGrid(filteredBirds);
    
    const noResults = document.getElementById('noResults');
    const birdsGrid = document.getElementById('birdsGrid');
    
    if (filteredBirds.length === 0) {
        noResults.style.display = 'block';
        birdsGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        birdsGrid.style.display = 'grid';
    }
}

function renderBirdsGrid(birds) {
    const birdsGrid = document.getElementById('birdsGrid');
    birdsGrid.innerHTML = '';

    birds.forEach(function(bird, index) {
        const card = createBirdCard(bird);
        card.style.animationDelay = index * 0.1 + 's';
        birdsGrid.appendChild(card);
    });
}

function createBirdCard(bird) {
    const card = document.createElement('article');
    card.className = 'bird-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', '查看' + bird.name + '的详细信息');
    
    card.innerHTML = `
        <div class="card-image-container">
            <div class="card-image-placeholder">${bird.icon}</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${bird.name}</h3>
            <p class="card-english-name">${bird.englishName}</p>
            <div class="card-tags">
                <span class="card-tag">${bird.categoryName}</span>
                <span class="card-tag diet">${bird.diet}</span>
                <span class="card-tag size">${bird.size}</span>
            </div>
            <p class="card-description">${bird.description}</p>
        </div>
        <div class="card-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </div>
    `;

    card.addEventListener('click', function() {
        openBirdDetail(bird);
    });
    
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openBirdDetail(bird);
        }
    });

    return card;
}

function openBirdDetail(bird) {
    const detailOverlay = document.getElementById('detailOverlay');
    const detailContent = document.getElementById('detailContent');
    
    const relatedBirds = bird.relatedBirds.map(function(id) {
        return birdsData.find(function(b) {
            return b.id === id;
        });
    }).filter(function(b) {
        return b;
    });

    detailContent.innerHTML = `
        <div class="detail-hero">
            <div class="detail-hero-placeholder">${bird.icon}</div>
        </div>
        
        <div class="detail-title-section">
            <h1 class="detail-main-title">${bird.name}</h1>
            <p class="detail-english-name">${bird.englishName}</p>
            <p class="detail-latin-name">${bird.latinName}</p>
        </div>
        
        <div class="detail-tags">
            <span class="detail-tag">${bird.categoryName}</span>
            <span class="detail-tag diet">${bird.diet}</span>
            <span class="detail-tag size">体长 ${bird.size}</span>
            <span class="detail-tag conservation">保护等级: ${bird.conservation}</span>
        </div>
        
        <section class="detail-section">
            <h2 class="detail-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                物种描述
            </h2>
            <div class="detail-section-content">
                <p>${bird.description}</p>
            </div>
        </section>
        
        <section class="detail-section">
            <h2 class="detail-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>
                形态特征
            </h2>
            <div class="detail-features">
                ${bird.features.map(function(feature) {
                    return '<div class="feature-item">' + feature + '</div>';
                }).join('')}
            </div>
        </section>
        
        <section class="detail-section">
            <h2 class="detail-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                分布与栖息
            </h2>
            <div class="detail-section-content">
                <p><strong>分布范围：</strong>${bird.distribution}</p>
                <p><strong>栖息环境：</strong>${bird.habitat.join('、')}</p>
            </div>
        </section>
        
        <section class="detail-section">
            <h2 class="detail-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
                生活习性
            </h2>
            <div class="detail-section-content">
                <p><strong>食性：</strong>${bird.habits.diet}</p>
                <p><strong>繁殖：</strong>${bird.habits.breeding}</p>
                <p><strong>行为特点：</strong>${bird.habits.behavior}</p>
            </div>
        </section>
        
        <section class="detail-section">
            <h2 class="detail-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                趣味知识
            </h2>
            <div class="fun-fact-card">
                <h4>🔍 你知道吗？</h4>
                <ul>
                    ${bird.funFacts.map(function(fact) {
                        return '<li>' + fact + '</li>';
                    }).join('')}
                </ul>
            </div>
        </section>
        
        ${relatedBirds.length > 0 ? `
            <section class="related-birds">
                <h3>相关鸟类推荐</h3>
                <div class="related-birds-grid">
                    ${relatedBirds.map(function(relatedBird) {
                        return `
                            <div class="related-bird-card" data-bird-id="${relatedBird.id}">
                                <div class="related-bird-icon">${relatedBird.icon}</div>
                                <div class="related-bird-name">${relatedBird.name}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        ` : ''}
    `;

    detailOverlay.style.display = 'flex';
    document.getElementById('detailCloseBtnFloat').style.display = 'flex';
    isDetailOpen = true;
    document.body.style.overflow = 'hidden';
    
    setTimeout(function() {
        detailContent.scrollTop = 0;
    }, 0);

    const relatedBirdCards = detailContent.querySelectorAll('.related-bird-card');
    relatedBirdCards.forEach(function(card) {
        card.addEventListener('click', function() {
            const birdId = card.dataset.birdId;
            const relatedBird = birdsData.find(function(b) {
                return b.id === birdId;
            });
            if (relatedBird) {
                setTimeout(function() {
                    detailContent.scrollTop = 0;
                }, 0);
                openBirdDetail(relatedBird);
            }
        });
    });
    
    document.getElementById('detailCloseBtnFloat').addEventListener('click', closeDetail);
}

function closeDetail() {
    const detailOverlay = document.getElementById('detailOverlay');
    detailOverlay.style.display = 'none';
    document.getElementById('detailCloseBtnFloat').style.display = 'none';
    isDetailOpen = false;
    document.body.style.overflow = '';
}

function resetFilters() {
    currentFilter = 'all';
    currentSearch = '';
    
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(function(tag) {
        tag.classList.remove('active');
    });
    document.querySelector('[data-category="all"]').classList.add('active');
    
    const filterValue = document.getElementById('filterValue');
    filterValue.textContent = '全部';
    document.getElementById('clearFilter').style.display = 'none';
    
    document.getElementById('searchInput').value = '';
    
    filterBirds();
}

function scrollToBirdsGrid() {
    const birdsGridSection = document.getElementById('birdsGridSection');
    birdsGridSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
}

function updateBirdCount() {
    const birdCountElement = document.getElementById('birdCount');
    birdCountElement.textContent = birdsData.length;
}

document.addEventListener('DOMContentLoaded', initApp);
