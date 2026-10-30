// 青旅数据
const hostelsData = {
    "southwest": [
        {
            id: "dl001",
            name: "大理古城国际青年旅舍",
            type: "cultural",
            location: "云南省大理市古城区护国路42号",
            coordinates: [25.693, 100.160],
            rating: 4.8,
            price: 128,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3",
            features: ["免费WiFi", "公共厨房", "早餐", "自行车租赁"],
            highlights: "位于大理古城中心，传统白族建筑，庭院花园，文艺氛围浓厚",
        },
        {
            id: "lj001",
            name: "丽江古城花间堂青旅",
            type: "cultural",
            location: "云南省丽江市古城区七一街89号",
            coordinates: [26.872, 100.229],
            rating: 4.7,
            price: 158,
            image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3",
            features: ["免费WiFi", "茶室", "观景台", "行李寄存"],
            highlights: "纳西族特色庭院，观景平台可赏玉龙雪山，提供茶艺体验",
        },
        {
            id: "cd001",
            name: "成都宽窄巷子青年旅舍",
            type: "cultural",
            location: "四川省成都市青羊区宽窄巷子23号",
            coordinates: [30.669, 104.057],
            rating: 4.6,
            price: 138,
            image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3",
            features: ["免费WiFi", "公共厨房", "麻将室", "洗衣服务"],
            highlights: "百年老宅改造，地道川西风情，距离太古里步行可达",
        }
    ],
    "east": [
        {
            id: "hz001",
            name: "杭州西湖湖畔青旅",
            type: "design",
            location: "浙江省杭州市西湖区南山路101号",
            coordinates: [30.259, 120.129],
            rating: 4.9,
            price: 168,
            image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3",
            features: ["免费WiFi", "共享工作区", "单车租赁", "咖啡吧"],
            highlights: "临近西湖，现代简约设计，适合数字游民，提供工作空间",
        },
        {
            id: "mgs001",
            name: "莫干山竹语青旅",
            type: "nature",
            location: "浙江省湖州市德清县莫干山镇竹海路56号",
            coordinates: [30.615, 119.847],
            rating: 4.7,
            price: 188,
            image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3",
            features: ["免费WiFi", "观景露台", "烧烤区", "登山向导"],
            highlights: "竹海中的现代民宿，空气清新，提供登山徒步向导服务",
        }
    ],
    "south": [
        {
            id: "xm001",
            name: "厦门鼓浪屿海景青旅",
            type: "design",
            location: "福建省厦门市思明区鼓浪屿龙头路24号",
            coordinates: [24.448, 118.064],
            rating: 4.8,
            price: 198,
            image: "https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixlib=rb-4.0.3",
            features: ["免费WiFi", "海景露台", "公共厨房", "琴房"],
            highlights: "百年洋楼改造，270度海景露台，距离钢琴码头5分钟",
        },
        {
            id: "yx001",
            name: "阳朔遇龙河畔青旅",
            type: "nature",
            location: "广西桂林市阳朔县遇龙河景区内",
            coordinates: [24.778, 110.496],
            rating: 4.6,
            price: 148,
            image: "https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-4.0.3",
            features: ["免费WiFi", "观景台", "自行车租赁", "攀岩装备租赁"],
            highlights: "临近遇龙河，田园风光，提供攀岩、漂流等户外运动服务",
        }
    ]
};

// 直接设置为全局变量
window.hostelsData = hostelsData; 