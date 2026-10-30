// 轮播图数据
const carouselData = {
    dali: {
        center: [25.693, 100.160],
        title: '大理古城青旅分布',
        hostels: [
            {
                name: '大理古城国际青年旅舍',
                position: [25.693, 100.160],
                price: '¥128起',
                address: '云南省大理市古城区护国路42号'
            },
            {
                name: '大理古城花间堂',
                position: [25.695, 100.162],
                price: '¥158起',
                address: '云南省大理市古城区玉洱路45号'
            }
        ]
    },
    lijiang: {
        center: [26.872, 100.229],
        title: '丽江古城青旅分布',
        hostels: [
            {
                name: '丽江古城国际青年旅舍',
                position: [26.872, 100.229],
                price: '¥138起',
                address: '云南省丽江市古城区七一街89号'
            }
        ]
    },
    hangzhou: {
        center: [30.259, 120.129],
        title: '杭州西湖青旅分布',
        hostels: [
            {
                name: '杭州西湖国际青年旅舍',
                position: [30.259, 120.129],
                price: '¥148起',
                address: '浙江省杭州市西湖区南山路63号'
            }
        ]
    }
};

// 特色青旅数据
const allHostels = [
    {
        id: 1,
        name: "北京南锣鼓巷青年旅舍",
        address: "北京市东城区南锣鼓巷35号",
        region: "beijing",
        price: 168,
        type: "historic",
        rating: 4.8,
        features: ["四合院改造", "胡同文化", "单车租赁"],
        image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac",
        location: [39.936, 116.403],
        dialect: "爱儿们儿，来这儿玩儿啊！"
    },
    {
        id: 2,
        name: "上海外滩艺术青旅",
        address: "上海市黄浦区中山东一路27号",
        region: "shanghai",
        price: 288,
        type: "cultural",
        rating: 4.9,
        features: ["江景房", "艺术展览", "音乐空间"],
        image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7",
        location: [31.234, 121.490],
        dialect: "阿拉这里风景忒好额！"
    },
    {
        id: 3,
        name: "大理古城慢生活青旅",
        address: "云南省大理市古城区人民路123号",
        region: "yunnan",
        price: 138,
        type: "historic",
        rating: 4.7,
        features: ["白族建筑", "观景天台", "茶室"],
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1",
        location: [25.693, 100.160],
        dialect: "板板哦，这里风景巴适得很！"
    },
    {
        id: 4,
        name: "莫干山竹语青旅",
        address: "浙江省湖州市德清县莫干山镇",
        region: "zhejiang",
        price: 358,
        type: "resort",
        rating: 4.9,
        features: ["竹林环绕", "温泉", "私密庭院"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        location: [30.560, 119.847],
        dialect: "来此地歇歇脚伐？"
    },
    {
        id: 5,
        name: "厦门鼓浪屿海景青旅",
        address: "福建省厦门市思明区鼓浪屿龙头路",
        region: "fujian",
        price: 198,
        type: "cultural",
        rating: 4.8,
        features: ["海景阳台", "钢琴房", "咖啡吧"],
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        location: [24.445, 118.067],
        dialect: "恁来厝边坐哦！"
    },
    {
        id: 6,
        name: "成都宽窄巷子青旅",
        address: "四川省成都市青羊区宽窄巷子",
        region: "sichuan",
        price: 148,
        type: "historic",
        rating: 4.7,
        features: ["老成都风情", "茶艺体验", "麻将室"],
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        location: [30.657, 104.065],
        dialect: "安逸得板，跟老子耍两天嘛！"
    },
    {
        id: 7,
        name: "阳朔遇见山水青旅",
        address: "广西阳朔县西街23号",
        region: "guangxi",
        price: 128,
        type: "nature",
        rating: 4.8,
        features: ["漓江风光", "攀岩基地", "自行车租赁"],
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        location: [24.778, 110.496],
        dialect: "靓仔靓女，来这度假老板实惠！"
    },
    {
        id: 8,
        name: "拉萨布达拉青旅",
        address: "西藏自治区拉萨市城关区北京中路",
        region: "xizang",
        price: 168,
        type: "cultural",
        rating: 4.9,
        features: ["藏式建筑", "高原适应", "文化交流"],
        image: "https://images.unsplash.com/photo-1527838832700-5059252407fa",
        location: [29.652, 91.172],
        dialect: "扎西德勒，欢迎来到布达拉！"
    },
    {
        id: 9,
        name: "广州沙面岛青旅",
        address: "广东省广州市荔湾区沙面南街",
        region: "guangdong",
        price: 188,
        type: "historic",
        rating: 4.6,
        features: ["欧式建筑", "粤式早茶", "历史文化"],
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66",
        location: [23.107, 113.244],
        dialect: "靓仔，过嚟睇下先啦！"
    }
];

// 添加攻略数据
const travelGuides = [
    {
        id: 1,
        title: "大理古城深度游：3天2晚慢生活体验",
        author: {
            name: "背包客小王",
            avatar: "https://i.pravatar.cc/100?img=4"
        },
        date: "2024-03-15",
        summary: "探索大理古城的历史文化，感受白族特色民俗，体验最地道的洱海生活。",
        likes: 328,
        comments: 45,
        content: {
            overview: "大理，一个让人流连忘返的地方。这份攻略将带你深入体验大理古城的魅力。",
            schedule: [
                {
                    day: 1,
                    title: "初识大理古城",
                    spots: [
                        {
                            name: "人民路步行街",
                            time: "10:00-12:00",
                            desc: "感受古城早市氛围，品尝地道早餐"
                        },
                        {
                            name: "五华楼",
                            time: "14:00-16:00",
                            desc: "大理地标建筑，俯瞰古城全景"
                        }
                    ]
                },
                // ... 更多行程
            ],
            transport: {
                arrival: "建议从昆明机场乘坐大巴到达大理古城",
                local: "古城内可步行或骑行，也可乘坐电动观光车"
            },
            accommodation: [
                {
                    name: "大理古城慢生活青旅",
                    price: "138起",
                    features: ["白族建筑", "观景天台", "茶室"]
                }
            ],
            food: [
                {
                    name: "段公子饵丝",
                    address: "护国路步行街",
                    recommend: "大理特色小吃，必尝"
                }
            ]
        },
        route: {
            center: [25.693, 100.160],
            spots: [
                {
                    name: "人民路步行街",
                    position: [25.693, 100.160],
                    type: "景点"
                },
                {
                    name: "五华楼",
                    position: [25.695, 100.162],
                    type: "景点"
                }
            ]
        }
    },
    {
        id: 2,
        title: "北京胡同文化之旅：老北京的市井生活",
        author: {
            name: "城市探索者",
            avatar: "https://i.pravatar.cc/100?img=5"
        },
        date: "2024-03-18",
        summary: "漫步南锣鼓巷，探访老北京胡同文化，体验最地道的京味生活。",
        likes: 456,
        comments: 89,
        content: {
            overview: "北京的胡同，承载着老北京的记忆。跟随这份攻略，感受最地道的老北京风情。",
            schedule: [
                {
                    day: 1,
                    title: "南锣鼓巷一日游",
                    spots: [
                        {
                            name: "南锣鼓巷",
                            time: "09:00-11:00",
                            desc: "品味老北京早点，感受胡同文化"
                        },
                        {
                            name: "烟袋斜街",
                            time: "14:00-16:00",
                            desc: "探访老字号，体验传统手工艺"
                        }
                    ]
                }
            ],
            transport: {
                arrival: "地铁6号线或8号线南锣鼓巷站下车",
                local: "步行或共享单车是最佳选择"
            },
            accommodation: [
                {
                    name: "北京南锣鼓巷青年旅舍",
                    price: "168起",
                    features: ["四合院改造", "胡同文化", "单车租赁"]
                }
            ],
            food: [
                {
                    name: "姚记炒肝",
                    address: "地安门内大街甲23号",
                    recommend: "老北京特色小吃，炒肝和豆汁必点"
                }
            ]
        },
        route: {
            center: [39.936, 116.403],
            spots: [
                {
                    name: "南锣鼓巷",
                    position: [39.936, 116.403],
                    type: "特色街区"
                },
                {
                    name: "烟袋斜街",
                    position: [39.938, 116.404],
                    type: "特色街区"
                }
            ]
        }
    },
    {
        id: 3,
        title: "莫干山竹海探秘：周末度假好去处",
        author: {
            name: "旅行摄影师小林",
            avatar: "https://i.pravatar.cc/100?img=6"
        },
        date: "2024-03-16",
        summary: "远离城市喧嚣，在竹海中享受宁静时光，体验最纯粹的山居生活。",
        likes: 267,
        comments: 42,
        content: {
            overview: "莫干山的竹海，是都市人的世外桃源。这里不仅有绿意盎然的竹林，还有独特的民宿体验。",
            schedule: [
                {
                    day: 1,
                    title: "竹海徒步",
                    spots: [
                        {
                            name: "莫干山竹海",
                            time: "09:00-12:00",
                            desc: "徒步竹海，呼吸新鲜空气"
                        }
                    ]
                }
            ],
            transport: {
                arrival: "从杭州东站乘坐大巴到莫干山",
                local: "景区内有观光车，也可以徒步"
            },
            accommodation: [
                {
                    name: "莫干山竹语青旅",
                    price: "358起",
                    features: ["竹林环绕", "温泉", "私密庭院"]
                }
            ],
            food: [
                {
                    name: "农家竹笋宴",
                    address: "莫干山镇中心",
                    recommend: "新鲜竹笋、土鸡煲必点"
                }
            ]
        },
        route: {
            center: [30.560, 119.847],
            spots: [
                {
                    name: "莫干山竹海",
                    position: [30.560, 119.847],
                    type: "自然景观"
                }
            ]
        }
    },
    {
        id: 4,
        title: "拉萨布达拉宫朝圣之旅：高原圣地探索",
        author: {
            name: "高原摄影师阿扎",
            avatar: "https://i.pravatar.cc/100?img=7"
        },
        date: "2024-03-14",
        summary: "感受藏传佛教文化魅力，探访世界屋脊上的神秘圣地。",
        likes: 589,
        comments: 92,
        content: {
            overview: "布达拉宫不仅是拉萨的地标，更是藏传佛教的圣地。这份攻略将带你深入了解藏族文化。",
            schedule: [
                {
                    day: 1,
                    title: "布达拉宫参观",
                    spots: [
                        {
                            name: "布达拉宫",
                            time: "09:00-14:00",
                            desc: "参观世界文化遗产，了解藏传佛教历史"
                        }
                    ]
                }
            ],
            transport: {
                arrival: "从拉萨贡嘎机场乘坐机场大巴到市区",
                local: "市区内可乘坐公交车或出租车"
            },
            accommodation: [
                {
                    name: "拉萨布达拉青旅",
                    price: "168起",
                    features: ["藏式建筑", "高原适应", "文化交流"]
                }
            ],
            food: [
                {
                    name: "藏餐体验",
                    address: "八廓街",
                    recommend: "青稞酒、酥油茶、藏式火锅"
                }
            ]
        },
        route: {
            center: [29.652, 91.172],
            spots: [
                {
                    name: "布达拉宫",
                    position: [29.652, 91.172],
                    type: "文化景点"
                }
            ]
        }
    },
    {
        id: 5,
        title: "厦门鼓浪屿：文艺范儿的海岛慢生活",
        author: {
            name: "海岛摄影师小美",
            avatar: "https://i.pravatar.cc/100?img=8"
        },
        date: "2024-03-13",
        summary: "漫步鼓浪屿小巷，聆听钢琴声，感受文艺气息。",
        likes: 432,
        comments: 67,
        content: {
            overview: "鼓浪屿是一个充满文艺气息的海岛，这里有独特的建筑风格和浓郁的音乐氛围。",
            schedule: [
                {
                    day: 1,
                    title: "鼓浪屿一日游",
                    spots: [
                        {
                            name: "菽庄花园",
                            time: "10:00-12:00",
                            desc: "欣赏中西合璧的园林建筑"
                        }
                    ]
                }
            ],
            transport: {
                arrival: "从厦门轮渡码头乘船前往鼓浪屿",
                local: "岛上以步行为主，也可乘坐电瓶观光车"
            },
            accommodation: [
                {
                    name: "厦门鼓浪屿海景青旅",
                    price: "198起",
                    features: ["海景阳台", "钢琴房", "咖啡吧"]
                }
            ],
            food: [
                {
                    name: "黄则和花生汤",
                    address: "龙头路",
                    recommend: "花生汤、沙茶面、海蛎煎"
                }
            ]
        },
        route: {
            center: [24.445, 118.067],
            spots: [
                {
                    name: "菽庄花园",
                    position: [24.445, 118.067],
                    type: "景点"
                }
            ]
        }
    },
    {
        id: 6,
        title: "成都慢生活：熊猫基地与锦里古街",
        author: {
            name: "蓉城吃货",
            avatar: "https://i.pravatar.cc/100?img=9"
        },
        date: "2024-03-12",
        summary: "邂逅可爱的大熊猫，品尝地道川菜，感受最巴适的成都生活。",
        likes: 378,
        comments: 58,
        content: {
            overview: "成都，一座来了就不想离开的城市。这份攻略带你体验最地道的成都生活。",
            schedule: [
                {
                    day: 1,
                    title: "熊猫基地半日游",
                    spots: [
                        {
                            name: "大熊猫繁育研究基地",
                            time: "08:00-11:00",
                            desc: "观看大熊猫的生活习性"
                        }
                    ]
                }
            ],
            transport: {
                arrival: "从双流机场乘坐地铁到市区",
                local: "地铁、公交车网络发达"
            },
            accommodation: [
                {
                    name: "成都宽窄巷子青旅",
                    price: "148起",
                    features: ["老成都风情", "茶艺体验", "麻将室"]
                }
            ],
            food: [
                {
                    name: "龙抄手",
                    address: "春熙路",
                    recommend: "抄手、担担面、豆花"
                }
            ]
        },
        route: {
            center: [30.657, 104.065],
            spots: [
                {
                    name: "大熊猫基地",
                    position: [30.657, 104.065],
                    type: "景点"
                }
            ]
        }
    },
    {
        id: 7,
        title: "广州沙面岛：异国建筑与粤式风情",
        author: {
            name: "粤式生活家",
            avatar: "https://i.pravatar.cc/100?img=10"
        },
        date: "2024-03-11",
        summary: "漫步沙面岛，欣赏欧式建筑，品味地道早茶。",
        likes: 289,
        comments: 47,
        content: {
            overview: "沙面岛是广州独特的人文景观，这里的欧式建筑让人仿佛置身异国。",
            schedule: [
                {
                    day: 1,
                    title: "沙面岛一日游",
                    spots: [
                        {
                            name: "沙面大街",
                            time: "09:00-11:00",
                            desc: "欣赏欧式建筑群"
                        }
                    ]
                }
            ],
            transport: {
                arrival: "地铁1号线或6号线到黄沙站",
                local: "步行是最佳选择"
            },
            accommodation: [
                {
                    name: "广州沙面岛青旅",
                    price: "188起",
                    features: ["欧式建筑", "粤式早茶", "历史文化"]
                }
            ],
            food: [
                {
                    name: "陶陶居",
                    address: "上下九路",
                    recommend: "早茶、肠粉、虾饺"
                }
            ]
        },
        route: {
            center: [23.107, 113.244],
            spots: [
                {
                    name: "沙面大街",
                    position: [23.107, 113.244],
                    type: "特色街区"
                }
            ]
        }
    }
];

// 添加社区数据
const communityData = {
    // 地区群组
    regions: [
        {
            id: 1,
            name: "华北驴友群",
            icon: "🏰",
            color: "#FF6B6B",
            memberCount: 2580,
            description: "北京、天津、河北等地区的驴友交流群，组织周末短途游和长假远行。",
            qrCode: "path/to/qrcode1.jpg",
            activities: [
                {
                    name: "香山红叶徒步",
                    location: [40.091, 116.195],
                    date: "2024-03-30"
                }
            ]
        },
        {
            id: 2,
            name: "江浙沪青旅群",
            icon: "🌊",
            color: "#4ECDC4",
            memberCount: 3150,
            description: "长三角地区青年旅行交流群，古镇探访、城市周末游。",
            qrCode: "path/to/qrcode2.jpg",
            activities: [
                {
                    name: "乌镇周末游",
                    location: [30.746, 120.485],
                    date: "2024-04-06"
                }
            ]
        },
        {
            id: 3,
            name: "川渝背包客",
            icon: "🏔️",
            color: "#FFD93D",
            memberCount: 2890,
            description: "四川重庆地区驴友群，美食探店、户外徒步。",
            qrCode: "path/to/qrcode3.jpg",
            activities: [
                {
                    name: "都江堰徒步",
                    location: [30.988, 103.619],
                    date: "2024-04-13"
                }
            ]
        }
    ],
    
    // 兴趣群组
    interests: [
        {
            id: 4,
            name: "摄影旅行团",
            icon: "📸",
            color: "#6C5CE7",
            memberCount: 1860,
            description: "专注旅行摄影的群组，定期组织摄影采风活动。",
            qrCode: "path/to/qrcode4.jpg",
            activities: [
                {
                    name: "莫干山摄影采风",
                    location: [30.560, 119.847],
                    date: "2024-04-20"
                }
            ]
        },
        {
            id: 5,
            name: "美食寻味记",
            icon: "🍜",
            color: "#FF8C42",
            memberCount: 2340,
            description: "专注美食探店的旅行群，寻找各地特色美食。",
            qrCode: "path/to/qrcode5.jpg",
            activities: [
                {
                    name: "成都美食之旅",
                    location: [30.657, 104.065],
                    date: "2024-05-01"
                }
            ]
        }
    ],
    
    // 官方组织
    organizations: [
        {
            id: 6,
            name: "中国青年旅舍协会",
            logo: "path/to/logo1.png",
            description: "致力于推动中国青年旅舍事业发展的官方组织。",
            contacts: {
                phone: "010-12345678",
                email: "info@cyha.org",
                website: "www.cyha.org"
            }
        },
        {
            id: 7,
            name: "中国义工旅行联盟",
            logo: "path/to/logo2.png",
            description: "组织各类公益旅行活动，传播正能量。",
            contacts: {
                phone: "020-87654321",
                email: "contact@vta.org",
                website: "www.vta.org"
            }
        }
    ]
};

// 初始化变量
let map = null;
let markers = [];
let mapModal = null;
let hostelDetailModal = null;
let bookingModal = null;
let guideDetailModal = null;
let routeMapModal = null;
let routeMap = null;
let activityMapModal = null;
let activityMap = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('初始化页面...');
    
    // 初始化轮播图
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // 初始化地图模态框
    mapModal = new bootstrap.Modal(document.getElementById('mapModal'));
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 导航栏点击滚动
    document.querySelectorAll('.navbar .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 初始化筛选器
    initializeFilters();
    
    // 初始化新的模态框
    hostelDetailModal = new bootstrap.Modal(document.getElementById('hostelDetailModal'));
    bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
    
    // 初始化攻略相关模态框
    guideDetailModal = new bootstrap.Modal(document.getElementById('guideDetailModal'));
    routeMapModal = new bootstrap.Modal(document.getElementById('routeMapModal'));
    
    // 渲染攻略列表
    renderGuides();
    
    // 初始化导航滚动
    initNavigation();
    
    // 初始化社区相关模态框
    activityMapModal = new bootstrap.Modal(document.getElementById('activityMapModal'));
    
    // 渲染社区内容
    renderCommunityGroups();
    
    console.log('初始化完成');
});

// 初始化筛选器
function initializeFilters() {
    const filters = {
        region: document.getElementById('regionFilter'),
        price: document.getElementById('priceFilter'),
        type: document.getElementById('typeFilter')
    };

    Object.values(filters).forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    document.getElementById('clearFilters').addEventListener('click', () => {
        Object.values(filters).forEach(filter => filter.value = '');
        applyFilters();
    });

    renderHostels(allHostels);
}

// 应用筛选条件
function applyFilters() {
    const region = document.getElementById('regionFilter').value;
    const price = document.getElementById('priceFilter').value;
    const type = document.getElementById('typeFilter').value;

    let filteredHostels = allHostels.filter(hostel => {
        let matchRegion = !region || hostel.region === region;
        let matchType = !type || hostel.type === type;
        let matchPrice = true;

        if (price) {
            const [min, max] = price.split('-').map(Number);
            if (max) {
                matchPrice = hostel.price >= min && hostel.price <= max;
            } else {
                matchPrice = hostel.price >= min;
            }
        }

        return matchRegion && matchType && matchPrice;
    });

    renderHostels(filteredHostels);
}

// 渲染青旅卡片
function renderHostels(hostels) {
    const container = document.getElementById('hostelCards');
    container.innerHTML = hostels.map(hostel => `
        <div class="col-md-6 col-lg-4">
            <div class="hostel-card">
                <div class="card">
                    <div class="card-img-wrapper">
                        <img src="${hostel.image}" class="card-img-top" alt="${hostel.name}">
                        <div class="card-badge">
                            <span class="badge bg-success">${hostel.rating} <i class="fas fa-star"></i></span>
                        </div>
                    </div>
                    <div class="dialect-quote">
                        <i class="fas fa-quote-left"></i>
                        <span>${hostel.dialect}</span>
                        <i class="fas fa-quote-right"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${hostel.name}</h5>
                        <p class="card-text">
                            <i class="fas fa-map-marker-alt text-primary"></i>
                            <small>${hostel.address}</small>
                        </p>
                        <div class="features">
                            ${hostel.features.map(feature => 
                                `<span class="feature-tag">${feature}</span>`
                            ).join('')}
                        </div>
                        <div class="card-footer">
                            <div class="price">
                                <span class="price-from">起价</span>
                                <span class="price-amount">￥${hostel.price}</span>
                            </div>
                            <div class="buttons">
                                <button class="btn btn-outline-primary btn-sm" onclick="showHostelDetail(${hostel.id})">
                                    <i class="fas fa-info-circle"></i> 查看详情
                                </button>
                                <button class="btn btn-primary btn-sm" onclick="showBooking(${hostel.id})">
                                    <i class="fas fa-calendar-check"></i> 立即预定
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 显示轮播图地图
function showMap(cityKey) {
    console.log('显示轮播图地图:', cityKey);
    
    const cityData = carouselData[cityKey];
    if (!cityData) {
        console.error('未找到城市数据');
        return;
    }

    mapModal.show();

    setTimeout(() => {
        if (!map) {
            map = L.map('map');
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
        }

        markers.forEach(marker => map.removeLayer(marker));
        markers = [];

        map.setView(cityData.center, 15);

        cityData.hostels.forEach(hostel => {
            const marker = L.marker(hostel.position)
                .addTo(map)
                .bindPopup(`
                    <div class="hostel-popup">
                        <h6>${hostel.name}</h6>
                        <p class="mb-1"><small>${hostel.address}</small></p>
                        <p class="mb-0 text-primary">${hostel.price}</p>
                    </div>
                `);
            markers.push(marker);
        });

        const hostelList = document.getElementById('hostel-list');
        hostelList.innerHTML = `
            <h6 class="mb-3">${cityData.title}</h6>
            <div class="list-group">
                ${cityData.hostels.map(hostel => `
                    <div class="list-group-item">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1">${hostel.name}</h6>
                                <small class="text-muted">${hostel.address}</small>
                            </div>
                            <span class="badge bg-primary">${hostel.price}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }, 300);
}

// 显示青旅地图
function showHostelMap(hostelId) {
    const hostel = allHostels.find(h => h.id === hostelId);
    if (hostel) {
        mapModal.show();

        setTimeout(() => {
            if (!map) {
                map = L.map('map');
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);
            }

            markers.forEach(marker => map.removeLayer(marker));
            markers = [];

            map.setView(hostel.location, 15);

            const marker = L.marker(hostel.location)
                .addTo(map)
                .bindPopup(`
                    <div class="hostel-popup">
                        <h6>${hostel.name}</h6>
                        <p class="mb-1"><small>${hostel.address}</small></p>
                        <p class="mb-0 text-primary">￥${hostel.price}起</p>
                    </div>
                `);
            markers.push(marker);

            const hostelList = document.getElementById('hostel-list');
            hostelList.innerHTML = `
                <h6 class="mb-3">${hostel.name}</h6>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1">${hostel.name}</h6>
                                <small class="text-muted">${hostel.address}</small>
                            </div>
                            <span class="badge bg-primary">￥${hostel.price}起</span>
                        </div>
                    </div>
                </div>
            `;
        }, 300);
    }
}

// 显示青旅详情
function showHostelDetail(hostelId) {
    const hostel = allHostels.find(h => h.id === hostelId);
    if (hostel) {
        // 获取详细评价数据
        const reviews = getHostelReviews(hostelId);
        
        // 更新模态框内容
        updateDetailModal(hostel, reviews);
        
        // 显示模态框
        hostelDetailModal.show();
    }
}

// 显示预订界面
function showBooking(hostelId) {
    const hostel = allHostels.find(h => h.id === hostelId);
    if (hostel) {
        // 获取房型数据
        const roomTypes = getHostelRooms(hostelId);
        
        // 获取预订渠道
        const channels = getBookingChannels(hostelId);
        
        // 更新模态框内容
        updateBookingModal(hostel, roomTypes, channels);
        
        // 显示模态框
        bookingModal.show();
    }
}

// 更新详情模态框内容
function updateDetailModal(hostel, reviews) {
    const modalContent = document.querySelector('.hostel-detail-content');
    
    // 更新总体评分
    const overallRating = modalContent.querySelector('.rating-number');
    overallRating.textContent = hostel.rating;
    
    // 更新评分星星
    const stars = modalContent.querySelector('.stars');
    stars.innerHTML = generateStars(hostel.rating);
    
    // 更新评分维度
    const ratingBars = modalContent.querySelector('.rating-bars');
    ratingBars.innerHTML = reviews.dimensions.map(dim => `
        <div class="rating-bar">
            <div class="rating-label">${dim.name}</div>
            <div class="progress">
                <div class="progress-bar bg-success" style="width: ${dim.score * 20}%"></div>
            </div>
            <div class="rating-value">${dim.score}</div>
        </div>
    `).join('');
    
    // 更新评价标签
    const reviewTags = modalContent.querySelector('.review-tags');
    reviewTags.innerHTML = reviews.tags.map(tag => `
        <div class="review-tag">
            ${tag.name} <span>${tag.count}</span>
        </div>
    `).join('');
    
    // 更新评价列表
    const reviewsList = modalContent.querySelector('.reviews-list');
    reviewsList.innerHTML = reviews.list.map(review => `
        <div class="review-item">
            <div class="reviewer-info">
                <img src="${review.avatar}" alt="用户头像" class="reviewer-avatar">
                <div>
                    <h6 class="mb-0">${review.name}</h6>
                    <small class="review-date">${review.date}</small>
                </div>
            </div>
            <div class="stars mb-2">${generateStars(review.rating)}</div>
            <p class="review-text">${review.comment}</p>
        </div>
    `).join('');
}

// 更新预订模态框内容
function updateBookingModal(hostel, roomTypes, channels) {
    // 设置最小日期为今天
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkInDate').min = today;
    document.getElementById('checkOutDate').min = today;
    
    // 更新房型列表
    const roomTypesList = document.querySelector('.room-types');
    roomTypesList.innerHTML = roomTypes.map(room => `
        <div class="room-type-card">
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <h6>${room.name}</h6>
                    <div class="room-facilities">
                        ${room.facilities.map(f => `
                            <span class="facility-tag">${f}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="text-end">
                    <div class="price-amount">￥${room.price}</div>
                    <small class="text-muted">每晚</small>
                </div>
            </div>
        </div>
    `).join('');
    
    // 更新预订渠道
    const channelList = document.querySelector('.channel-list');
    channelList.innerHTML = channels.map(channel => `
        <div class="channel-item">
            <img src="${channel.logo}" alt="${channel.name}" class="channel-logo">
            <div class="channel-price">￥${channel.price}</div>
            <a href="${channel.url}" target="_blank" class="btn btn-primary">
                去预订
            </a>
        </div>
    `).join('');
}

// 生成星星评分
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return `
        ${`<i class="fas fa-star"></i>`.repeat(fullStars)}
        ${hasHalfStar ? `<i class="fas fa-star-half-alt"></i>` : ''}
        ${`<i class="far fa-star"></i>`.repeat(emptyStars)}
    `;
}

// 获取青旅评价数据（模拟数据）
function getHostelReviews(hostelId) {
    return {
        dimensions: [
            { name: '位置', score: 4.8 },
            { name: '清洁', score: 4.7 },
            { name: '服务', score: 4.9 },
            { name: '设施', score: 4.6 },
            { name: '性价比', score: 4.7 }
        ],
        tags: [
            { name: '位置便利', count: 128 },
            { name: '服务周到', count: 98 },
            { name: '性价比高', count: 87 },
            { name: '环境优美', count: 76 },
            { name: '设施完善', count: 65 }
        ],
        list: [
            {
                name: '张三',
                avatar: 'https://i.pravatar.cc/100?img=1',
                date: '2024-03-15',
                rating: 4.8,
                comment: '位置很好，就在景区附近，交通便利。工作人员服务态度很好，房间干净整洁。'
            },
            {
                name: '李四',
                avatar: 'https://i.pravatar.cc/100?img=2',
                date: '2024-03-14',
                rating: 4.7,
                comment: '性价比很高，住宿环境不错，公共区域很舒适，认识了很多有趣的朋友。'
            },
            {
                name: '王五',
                avatar: 'https://i.pravatar.cc/100?img=3',
                date: '2024-03-13',
                rating: 4.9,
                comment: '前台小姐姐特别热情，给了很多当地游玩建议，房间虽然不大但很温馨。'
            }
        ]
    };
}

// 获取房型数据（模拟数据）
function getHostelRooms(hostelId) {
    return [
        {
            name: '混合六人间',
            facilities: ['独立卫浴', '空调', 'WiFi', '储物柜'],
            price: 88
        },
        {
            name: '女生四人间',
            facilities: ['独立卫浴', '空调', 'WiFi', '储物柜', '梳妆台'],
            price: 108
        },
        {
            name: '双人间',
            facilities: ['独立卫浴', '空调', 'WiFi', '电视', '阳台'],
            price: 188
        }
    ];
}

// 获取预订渠道（模拟数据）
function getBookingChannels(hostelId) {
    return [
        {
            name: '携程',
            logo: 'path/to/ctrip-logo.png',
            price: 188,
            url: '#'
        },
        {
            name: '飞猪',
            logo: 'path/to/fliggy-logo.png',
            price: 185,
            url: '#'
        },
        {
            name: '美团',
            logo: 'path/to/meituan-logo.png',
            price: 190,
            url: '#'
        }
    ];
}

// 渲染攻略列表
function renderGuides() {
    const container = document.querySelector('.guides-list');
    container.innerHTML = travelGuides.map(guide => `
        <div class="guide-card">
            <div class="guide-header">
                <h3 class="guide-title" onclick="showGuideDetail(${guide.id})">${guide.title}</h3>
            </div>
            <div class="guide-meta">
                <div class="guide-author">
                    <img src="${guide.author.avatar}" alt="${guide.author.name}" class="author-avatar">
                    <span>${guide.author.name}</span>
                </div>
                <div class="guide-date">
                    <i class="far fa-calendar"></i> ${guide.date}
                </div>
            </div>
            <p class="guide-summary">${guide.summary}</p>
            <div class="guide-footer">
                <div class="guide-stats">
                    <div class="stat-item">
                        <i class="far fa-heart"></i>
                        <span>${guide.likes}</span>
                    </div>
                    <div class="stat-item">
                        <i class="far fa-comment"></i>
                        <span>${guide.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 显示攻略详情
function showGuideDetail(guideId) {
    const guide = travelGuides.find(g => g.id === guideId);
    if (guide) {
        const modalContent = document.querySelector('.guide-detail-content');
        modalContent.innerHTML = `
            <h3 class="mb-4">${guide.title}</h3>
            
            <div class="guide-section">
                <h4 class="guide-section-title">概述</h4>
                <p>${guide.content.overview}</p>
            </div>
            
            <div class="guide-section">
                <h4 class="guide-section-title">行程安排</h4>
                ${guide.content.schedule.map(day => `
                    <div class="timeline-item">
                        <h5>第${day.day}天：${day.title}</h5>
                        ${day.spots.map(spot => `
                            <div class="spot-item">
                                <strong>${spot.time}</strong>
                                <p>${spot.name} - ${spot.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
            
            <div class="guide-section">
                <h4 class="guide-section-title">交通指南</h4>
                <p><strong>到达方式：</strong>${guide.content.transport.arrival}</p>
                <p><strong>当地交通：</strong>${guide.content.transport.local}</p>
            </div>
            
            <div class="guide-section">
                <h4 class="guide-section-title">住宿推荐</h4>
                ${guide.content.accommodation.map(hotel => `
                    <div class="hotel-item">
                        <h5>${hotel.name}</h5>
                        <p>价格：${hotel.price}</p>
                        <p>特色：${hotel.features.join('、')}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="guide-section">
                <h4 class="guide-section-title">美食攻略</h4>
                ${guide.content.food.map(food => `
                    <div class="food-item">
                        <h5>${food.name}</h5>
                        <p>地址：${food.address}</p>
                        <p>推荐：${food.recommend}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="text-center mt-4">
                <button class="btn btn-primary" onclick="showRouteMap(${guide.id})">
                    <i class="fas fa-map-marked-alt"></i> 查看行程地图
                </button>
            </div>
        `;
        
        guideDetailModal.show();
    }
}

// 显示行程地图
function showRouteMap(guideId) {
    const guide = travelGuides.find(g => g.id === guideId);
    if (guide) {
        guideDetailModal.hide();
        routeMapModal.show();
        
        setTimeout(() => {
            if (!routeMap) {
                routeMap = L.map('routeMap');
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(routeMap);
            }
            
            routeMap.setView(guide.route.center, 15);
            
            // 清除现有标记
            routeMap.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    routeMap.removeLayer(layer);
                }
            });
            
            // 添加新标记
            guide.route.spots.forEach((spot, index) => {
                L.marker(spot.position)
                    .addTo(routeMap)
                    .bindPopup(`
                        <div class="spot-popup">
                            <h6>${spot.name}</h6>
                            <p class="mb-0">${spot.type}</p>
                        </div>
                    `);
            });
            
            // 更新路线信息
            const routeInfo = document.querySelector('.route-info');
            routeInfo.innerHTML = `
                <h6 class="mb-3">行程景点</h6>
                ${guide.route.spots.map((spot, index) => `
                    <div class="route-spot">
                        <div class="spot-number">${index + 1}</div>
                        <div>
                            <strong>${spot.name}</strong>
                            <div><small>${spot.type}</small></div>
                        </div>
                    </div>
                `).join('')}
            `;
        }, 300);
    }
}

// 初始化导航滚动
function initNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// 渲染社区群组
function renderCommunityGroups() {
    // 渲染地区群组
    const regionsList = document.getElementById('regionGroupsList');
    regionsList.innerHTML = communityData.regions.map(group => createGroupCard(group)).join('');
    
    // 渲染兴趣群组
    const interestsList = document.getElementById('interestGroupsList');
    interestsList.innerHTML = communityData.interests.map(group => createGroupCard(group)).join('');
    
    // 渲染官方组织
    const organizationsList = document.getElementById('organizationsList');
    organizationsList.innerHTML = communityData.organizations.map(org => `
        <div class="col-md-6">
            <div class="organization-card">
                <img src="${org.logo}" alt="${org.name}" class="org-logo">
                <h5>${org.name}</h5>
                <p>${org.description}</p>
                <ul class="contact-list">
                    <li class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${org.contacts.phone}</span>
                    </li>
                    <li class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${org.contacts.email}</span>
                    </li>
                    <li class="contact-item">
                        <i class="fas fa-globe"></i>
                        <span>${org.contacts.website}</span>
                    </li>
                </ul>
            </div>
        </div>
    `).join('');
}

// 创建群组卡片
function createGroupCard(group) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="community-card">
                <div class="card-header">
                    <div class="group-icon" style="background-color: ${group.color}">
                        ${group.icon}
                    </div>
                    <div class="group-info">
                        <h5>${group.name}</h5>
                        <div class="member-count">
                            <i class="fas fa-users"></i> ${group.memberCount}人
                        </div>
                    </div>
                </div>
                <p class="group-description">${group.description}</p>
                <div class="card-footer">
                    <button class="btn btn-primary" onclick="showGroupQR(${group.id})">
                        <i class="fas fa-qrcode"></i> 加入群聊
                    </button>
                    ${group.activities ? `
                        <button class="btn btn-outline-primary" onclick="showActivityMap(${group.id})">
                            <i class="fas fa-map-marked-alt"></i> 查看活动
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// 显示群二维码
function showGroupQR(groupId) {
    const group = [...communityData.regions, ...communityData.interests]
        .find(g => g.id === groupId);
    
    if (group) {
        // 这里可以实现显示二维码的逻辑
        // 可以使用模态框或其他方式展示
        console.log('显示群二维码:', group.qrCode);
    }
}

// 显示活动地图
function showActivityMap(groupId) {
    const group = [...communityData.regions, ...communityData.interests]
        .find(g => g.id === groupId);
    
    if (group && group.activities) {
        activityMapModal.show();
        
        setTimeout(() => {
            if (!activityMap) {
                activityMap = L.map('activityMap');
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(activityMap);
            }
            
            // 设置地图中心点为第一个活动位置
            activityMap.setView(group.activities[0].location, 13);
            
            // 清除现有标记
            activityMap.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    activityMap.removeLayer(layer);
                }
            });
            
            // 添加活动标记
            group.activities.forEach(activity => {
                L.marker(activity.location)
                    .addTo(activityMap)
                    .bindPopup(`
                        <div class="activity-popup">
                            <h6>${activity.name}</h6>
                            <p class="mb-0">日期：${activity.date}</p>
                        </div>
                    `);
            });
            
            // 更新活动信息
            const activityInfo = document.querySelector('.activity-info');
            activityInfo.innerHTML = `
                <h6 class="mb-3">${group.name}近期活动</h6>
                ${group.activities.map(activity => `
                    <div class="activity-location">
                        <div class="location-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <strong>${activity.name}</strong>
                            <div><small>活动日期：${activity.date}</small></div>
                        </div>
                    </div>
                `).join('')}
            `;
        }, 300);
    }
}

// 添加查看更多攻略的处理函数
function showMembershipPrompt() {
    // 使用 Bootstrap 的 Toast 组件显示提示
    const toast = new bootstrap.Toast(document.getElementById('membershipToast'));
    toast.show();
}

// 会员套餐选择
function selectPlan(plan) {
    // 移除所有套餐的选中状态
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // 添加选中状态到当前套餐
    const selectedCard = event.currentTarget;
    selectedCard.classList.add('selected');
    
    // 更新支付金额
    const amounts = {
        'month': 29,
        'quarter': 79,
        'year': 269
    };
    document.getElementById('paymentAmount').textContent = amounts[plan];
}

// 处理支付
function processPayment() {
    // 模拟支付过程
    const membershipModal = bootstrap.Modal.getInstance(document.getElementById('membershipModal'));
    membershipModal.hide();
    
    // 显示支付结果
    const resultModal = new bootstrap.Modal(document.getElementById('paymentResultModal'));
    
    // 模拟随机支付结果
    const success = Math.random() < 0.5;
    
    if (success) {
        resultModal.show();
    } else {
        // 这里可以添加支付失败的逻辑
        console.error('支付失败');
    }
}

// 确保函数在全局可用
window.showMap = showMap;
window.showHostelMap = showHostelMap;
window.showHostelDetail = showHostelDetail;
window.showBooking = showBooking;
window.showGuideDetail = showGuideDetail;
window.showRouteMap = showRouteMap;
window.showGroupQR = showGroupQR;
window.showActivityMap = showActivityMap;
window.showMembershipPrompt = showMembershipPrompt;

// 留言板功能
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');
    const loadMoreBtn = document.getElementById('loadMoreComments');
    
    let page = 1;
    const commentsPerPage = 10;

    // 提交留言
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nickname = document.getElementById('nickname').value.trim();
        const content = document.getElementById('commentContent').value.trim();
        
        if (!nickname || !content) {
            showToast('昵称和留言内容不能为空！', 'warning');
            return;
        }
        
        // 创建新留言
        const comment = {
            id: Date.now(),
            nickname: nickname,
            content: content,
            time: new Date().toLocaleString(),
            likes: 0
        };
        
        // 添加到留言列表
        addCommentToList(comment, true);
        
        // 重置表单
        commentForm.reset();
        
        // 显示成功提示
        showToast('留言发表成功！', 'success');
    });

    // 添加留言到列表
    function addCommentToList(comment, isNew = false) {
        const commentEl = document.createElement('div');
        commentEl.className = `comment-item ${isNew ? 'new' : ''}`;
        commentEl.innerHTML = `
            <div class="comment-header">
                <div class="comment-avatar">
                    ${comment.nickname.charAt(0).toUpperCase()}
                </div>
                <div class="comment-meta">
                    <div class="comment-author">${escapeHtml(comment.nickname)}</div>
                    <div class="comment-time">${comment.time}</div>
                </div>
            </div>
            <div class="comment-content">${escapeHtml(comment.content)}</div>
            <div class="comment-actions">
                <button onclick="likeComment(${comment.id}, this)">
                    <i class="far fa-heart"></i>
                    <span class="likes-count">${comment.likes}</span>
                </button>
                <button onclick="replyComment('${escapeHtml(comment.nickname)}')">
                    <i class="far fa-comment"></i> 回复
                </button>
            </div>
        `;
        
        if (isNew) {
            commentsList.insertBefore(commentEl, commentsList.firstChild);
        } else {
            commentsList.appendChild(commentEl);
        }
    }

    // 加载更多留言
    loadMoreBtn.addEventListener('click', function() {
        // 这里应该从服务器加载更多留言
        // 示
    });
});

// 弹幕功能实现
class DanmakuManager {
    constructor(container) {
        this.container = container;
        this.danmakus = [];
        this.lanes = new Array(10).fill(null); // 弹幕轨道
        this.colors = [
            'danmaku-theme-1',
            'danmaku-theme-2',
            'danmaku-theme-3',
            'danmaku-theme-4',
            'danmaku-theme-5'
        ];
    }

    // 创建新弹幕
    createDanmaku(text, nickname) {
        const danmaku = document.createElement('div');
        danmaku.className = `danmaku ${this.getRandomColor()}`;
        
        // 弹幕内容
        danmaku.innerHTML = `
            <span class="danmaku-content">${this.escapeHtml(text)}</span>
            <div class="danmaku-actions">
                <button onclick="likeDanmaku(this)">
                    <i class="far fa-heart"></i>
                </button>
                <button onclick="replyDanmaku('${this.escapeHtml(nickname)}')">
                    <i class="far fa-comment"></i>
                </button>
            </div>
        `;

        // 设置弹幕初始位置
        const lane = this.getAvailableLane();
        if (lane === -1) return; // 没有可用轨道时放弃发送

        const speed = 5000 + Math.random() * 5000; // 随机速度
        const containerWidth = this.container.offsetWidth;
        
        danmaku.style.top = `${lane * 30}px`;
        danmaku.style.right = `-${danmaku.offsetWidth}px`;
        
        this.container.appendChild(danmaku);
        
        // 弹幕动画
        const animation = danmaku.animate([
            { transform: `translateX(0)` },
            { transform: `translateX(-${containerWidth + danmaku.offsetWidth}px)` }
        ], {
            duration: speed,
            easing: 'linear'
        });

        animation.onfinish = () => {
            danmaku.remove();
            this.lanes[lane] = null;
        };

        this.lanes[lane] = Date.now() + speed;
        this.danmakus.push(danmaku);
    }

    // 获取可用的弹幕轨道
    getAvailableLane() {
        const now = Date.now();
        for (let i = 0; i < this.lanes.length; i++) {
            if (!this.lanes[i] || this.lanes[i] < now) {
                return i;
            }
        }
        return -1;
    }

    // 获取随机颜色主题
    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    // 转义HTML特殊字符
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// 初始化弹幕管理器
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('danmakuContainer');
    const danmakuManager = new DanmakuManager(container);
    
    // 处理弹幕提交
    const danmakuForm = document.getElementById('danmakuForm');
    danmakuForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nickname = document.getElementById('nickname').value.trim();
        const content = document.getElementById('commentContent').value.trim();
        
        if (!nickname || !content) {
            showToast('昵称和内容不能为空！', 'warning');
            return;
        }
        
        danmakuManager.createDanmaku(content, nickname);
        danmakuForm.reset();
    });
});

// 点赞功能
function likeDanmaku(button) {
    button.innerHTML = '<i class="fas fa-heart"></i>';
    button.style.color = '#ff4757';
    button.disabled = true;
}

// 回复功能
function replyDanmaku(nickname) {
    const commentContent = document.getElementById('commentContent');
    commentContent.value = `回复 @${nickname}：`;
    commentContent.focus();
}

// 滚动到顶部功能
class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scrollToTop');
        this.scrollThreshold = window.innerHeight * 0.3; // 30% 的视窗高度
        this.isScrolling = false;
        
        this.init();
    }

    init() {
        // 监听滚动事件
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        // 监听点击事件
        this.button.addEventListener('click', this.scrollToTop.bind(this));
        
        // 初始检查滚动位置
        this.handleScroll();
    }

    handleScroll() {
        // 获取滚动位置
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // 根据滚动位置显示或隐藏按钮
        if (scrollPosition > this.scrollThreshold) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
            this.button.classList.remove('scrolling');
        }
    }

    scrollToTop() {
        // 防止重复点击
        if (this.isScrolling) return;
        
        this.isScrolling = true;
        this.button.classList.add('scrolling');

        // 平滑滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // 监听滚动完成
        const checkIfScrollComplete = setInterval(() => {
            if (window.pageYOffset === 0) {
                clearInterval(checkIfScrollComplete);
                this.isScrolling = false;
                this.button.classList.remove('scrolling');
            }
        }, 100);
    }
}

// 初始化滚动到顶部功能
document.addEventListener('DOMContentLoaded', () => {
    new ScrollToTop();
});

// 青旅故事功能实现
class HostelStories {
    constructor() {
        this.storiesGrid = document.getElementById('storiesGrid');
        this.loadMoreBtn = document.getElementById('loadMoreStories');
        this.page = 1;
        this.loading = false;
        
        this.init();
    }

    init() {
        // 绑定加载更多事件
        this.loadMoreBtn.addEventListener('click', () => this.loadMoreStories());
        
        // 初始化图片懒加载
        this.initLazyLoading();
        
        // 初始化无限滚动
        this.initInfiniteScroll();
    }

    async loadMoreStories() {
        if (this.loading) return;
        
        this.loading = true;
        this.loadMoreBtn.classList.add('loading');
        
        try {
            // 模拟从服务器加载数据
            const stories = await this.fetchStories(this.page);
            this.renderStories(stories);
            this.page++;
            
            // 如果没有更多故事，隐藏加载按钮
            if (stories.length < 6) {
                this.loadMoreBtn.style.display = 'none';
            }
        } catch (error) {
            console.error('加载故事失败:', error);
        } finally {
            this.loading = false;
            this.loadMoreBtn.classList.remove('loading');
        }
    }

    async fetchStories(page) {
        // 这里使用模拟数据
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        title: '环球旅行者的日记',
                        excerpt: '穿越半个地球，在青旅邂逅最美的风景与人生，这是一段难忘的旅程...',
                        author: '阿强',
                        date: '2024-03-18',
                        category: '旅行故事',
                        image: 'https://picsum.photos/800/600?random=2'
                    },
                    {
                        title: '青旅厨房的美食故事',
                        excerpt: '在这里，每一顿饭都是一场文化的交融，来自世界各地的旅行者在此相聚...',
                        author: '小美',
                        date: '2024-03-15',
                        category: '生活故事',
                        image: 'https://picsum.photos/800/600?random=3'
                    },
                    {
                        title: '后院花园的四季变迁',
                        excerpt: '青旅后院的小花园，见证了无数旅行者的欢声笑语，也记录着时光的流转...',
                        author: '老王',
                        date: '2024-03-12',
                        category: '生活故事',
                        image: 'https://picsum.photos/800/600?random=4'
                    },
                    {
                        title: '音乐角落里的故事',
                        excerpt: '在青旅的音乐角落，来自不同国家的旅行者用音乐搭起了沟通的桥梁...',
                        author: '小张',
                        date: '2024-03-10',
                        category: '文化故事',
                        image: 'https://picsum.photos/800/600?random=5'
                    },
                    {
                        title: '屋顶露台的星空夜话',
                        excerpt: '在青旅的屋顶露台上，我们常常仰望星空，分享各自的梦想与故事...',
                        author: '小林',
                        date: '2024-03-08',
                        category: '生活故事',
                        image: 'https://picsum.photos/800/600?random=6'
                    },
                    // 新增的3条故事
                    {
                        title: '单车环岛的冒险之旅',
                        excerpt: '骑行台湾环岛，遇见最美的风景和人情，这是一段难忘的青春记忆...',
                        author: '阿杰',
                        date: '2024-03-05',
                        category: '旅行故事',
                        image: 'https://picsum.photos/800/600?random=7'
                    },
                    {
                        title: '国际义工的文化交流',
                        excerpt: '来自法国的Marie在青旅做义工的日子，让我们看到了不一样的文化碰撞...',
                        author: 'Marie',
                        date: '2024-03-03',
                        category: '文化故事',
                        image: 'https://picsum.photos/800/600?random=8'
                    },
                    {
                        title: '青旅图书角的温暖时光',
                        excerpt: '在青旅的图书角，每一本旅行者留下的书都讲述着一个独特的故事...',
                        author: '书虫小王',
                        date: '2024-03-01',
                        category: '生活故事',
                        image: 'https://picsum.photos/800/600?random=9'
                    }
                ]);
            }, 1000);
        });
    }

    renderStories(stories) {
        const fragment = document.createDocumentFragment();
        
        stories.forEach(story => {
            const article = document.createElement('article');
            article.className = 'story-card';
            article.innerHTML = `
                <div class="story-image">
                    <img src="${story.image}" alt="${story.title}" loading="lazy">
                    <div class="story-category">${story.category}</div>
                </div>
                <div class="story-content">
                    <h3 class="story-title">${story.title}</h3>
                    <p class="story-excerpt">${story.excerpt}</p>
                    <div class="story-meta">
                        <span class="story-author">
                            <i class="fas fa-user"></i> ${story.author}
                        </span>
                        <span class="story-date">
                            <i class="fas fa-calendar"></i> ${story.date}
                        </span>
                    </div>
                    <a href="#" class="btn btn-read-more">
                        阅读故事 <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            
            fragment.appendChild(article);
        });
        
        this.storiesGrid.appendChild(fragment);
    }

    initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // 回退到 IntersectionObserver
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
            document.body.appendChild(script);
        }
    }

    initInfiniteScroll() {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !this.loading) {
                this.loadMoreStories();
            }
        });
        
        observer.observe(this.loadMoreBtn);
    }
}

// 初始化青旅故事功能
document.addEventListener('DOMContentLoaded', () => {
    new HostelStories();
});