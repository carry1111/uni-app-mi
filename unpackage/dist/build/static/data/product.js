const product = [
	{
		typeId: 0,
		typeName: 'phone',
		goodsList: [
					{
						'goodsId': 0,
						'imageUrl': [
							'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2bc1c7ff8c71628a28a5fce24caf245.jpg?thumb=1&w=360&h=360',
							'//i8.mifile.cn/v1/a1/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
							'//i8.mifile.cn/v1/a1/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
							'//i8.mifile.cn/v1/a1/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
						],
						'name': '小米8 青春版',
						'info': '索尼2400万自拍，超级夜景',
						'price': 1049,
						oldPrice: 1249,
					},
					{
						'goodsId': 1,
						'imageUrl': [
							'https://i8.mifile.cn/v1/a1/249ac9d7-680d-5014-2009-8a49a0da2a7c.webp',
							'//i8.mifile.cn/v1/a1/f6969241-5174-61b3-a06a-a3bcfab69a75.webp',
							'//i8.mifile.cn/v1/a1/99b9acdd-95d2-d7cc-2806-c900f38265f9.webp',
						],
						'name': '小米8 屏幕指纹版',
						'info': '全新升级十大功能，骁龙845',
						'price': 1999,
						oldPrice: 1249,
					},
					{
						'goodsId': 2,
						'imageUrl': [
							'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/354cea8ad076cee24738091c68f95b07.jpg?thumb=1&w=360&h=360',
							'//i8.mifile.cn/v1/a1/80985354-0503-fa3f-1a9c-aa56ba2d682d.webp',
							'//i8.mifile.cn/v1/a1/6b474a18-ead1-b287-9e58-07b281487209.webp',
						],
						'name': '黑鲨游戏手机 Helo',
						'info': '双液冷，更能打',
						'price': 3199,
						oldPrice: 1249,
					},
					{
						'goodsId': 3,
						'imageUrl': [
							'https://i8.mifile.cn/v1/a1/38a0996b-d3b7-a8f7-6997-b97004599a8e!360x360.webp',
							'//i8.mifile.cn/v1/a1/3b58a57d-1f3e-9e6d-94b0-5c1ec1539d29.webp',
							'//i8.mifile.cn/v1/a1/55286d9b-1d33-36d5-f1c2-2ea3cef483d6.webp',
							'//i8.mifile.cn/v1/a1/bdc9eaf3-0470-8a63-1020-c8812def8263.webp'
						],
						'name': '红米6',
						'info': '小屏高性能的双摄手机',
						'price': 729,
						oldPrice: 1249,
					},
					{
						'goodsId': 4,
						'imageUrl': [
							'https://i8.mifile.cn/v1/a1/2c506517-9477-c928-8e77-bee18b6818a1!360x360.webp',
							'//i8.mifile.cn/v1/a1/fe4285de-a35c-8ec5-dfbb-ff73696e753c.webp',
							'//i8.mifile.cn/v1/a1/97f04715-4a9f-7a82-848f-2c1df63e29f7.webp',
							'//i8.mifile.cn/v1/a1/72f637e1-4d84-89db-996e-ca730c76a593.webp'
						],
						'name': '红米6A',
						'info': '好看耐用/轻巧省心',
						'price': 549,
						oldPrice: 1249,
					},
					{
						'goodsId': 5,
						'imageUrl': [
							'https://i8.mifile.cn/v1/a1/a20cff3d-2bd4-b98f-4eb5-fb08d8b43a2e!360x360.webp',
							'//i8.mifile.cn/v1/a1/3c359e84-a7ad-96a1-ed82-8e204ca0e7b6.webp',
							'//i8.mifile.cn/v1/a1/f6ee756e-72dc-cfd4-f5c5-c7daa495ba70.webp',
							'//i8.mifile.cn/v1/a1/0f5a44c9-5dff-c034-2d93-d7f9d04d99e8.webp'
						],
						'name': '小米6X',
						'info': '前置2000万，后置2000万',
						'price': 999,
						oldPrice: 1249,
					},
					{
						'goodsId': 6,
						'imageUrl': [
							'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a183eae8ce729005a1e1bf2907f6d51d.png?thumb=1&w=360&h=360',
							'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f8e958393b1aad3dc080151abbea1d9.png?f=webp',
							'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/613f92a2d215f5e685e8bb6eca7cb34b.png?f=webp',
							'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded092175206c2a1bf9dbebc5cbfa61e.png?f=webp'
						],
						'name': '小米Play（附带流量卡）',
						'info': '自带高速流量',
						'price': 899,
						oldPrice: 1249,
					},
					{
						'goodsId': 7,
						'imageUrl': [
							'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5be84661f1b82d1edef18f3a50a1b6f.jpg?thumb=1&w=360&h=360',
							'//i8.mifile.cn/v1/a1/34a5d832-cb5b-a403-d473-3ae99d8699b9.webp',
							'//i8.mifile.cn/v1/a1/3922d209-a3f5-8f21-2c01-13e1ba2452e9.webp',
							'//i8.mifile.cn/v1/a1/676aebbd-3a5e-c431-4a69-43016422895a.webp'
						],
						'name': '小米平板4',
						'info': '大屏、长续航、超薄电脑',
						'price': 1099,
						oldPrice: 1249,
					}
				],
	},
	{
		typeId: 1,
		typeName: 'television',
		goodsList: [
					{
						goodsId: 0,
						imageUrl: [
							'https://i8.mifile.cn/v1/a1/6017d231-019c-a76d-e54a-0bb6948bfd0d!360x360.webp',
							'//i8.mifile.cn/v1/a1/67031c46-8c12-133e-25b7-56cbbc277939.webp'
						],
						name: '电视4A 43" 青春版',
						info: '人工智能语音，FHD全高清屏',
						price: 1499,
						oldPrice: 4999,
					},
					{
						goodsId: 1,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc!360x360.webp',
						],
						name: '小米电视4A 32英寸',
						info: '人工智能系统，高清液晶屏',
						price: 899,
						oldPrice: 4999,
					},
					{
						goodsId: 2,
						imageUrl: [
							'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7d4d94788f8591e5557a4c23c3ba4307.jpg?thumb=1&w=360&h=360',
							'//i8.mifile.cn/v1/a1/9fd60730-764d-2ea9-c983-161f3de3d107.webp'
						],
						name: '小米电视4A 58英寸',
						info: '4K HDR，人工智能语音系统',
						price: 3599,
						oldPrice: 4999,
					},
					{
						goodsId: 3,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/c547c9f7-1703-a6ae-79e0-4e27912595f8!360x360.webp',
							'//i8.mifile.cn/v1/a1/1fe20c3d-ad2b-fc82-e6f5-56de3b830051.webp'
						],
						name: '小米电视4C 50英寸',
						info: '4K HDR，钢琴烤漆',
						price: 1899,
						oldPrice: 2099,
					},
					{
						goodsId: 4,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/4e925115-fde0-0364-814e-34471fda46e5!360x360.webp',
							'//i8.mifile.cn/v1/a1/ee70b3f7-8717-a26e-b746-849faec2ad2a.webp'
						],
						name: '小米电视4X 55英寸',
						info: '4K HDR，人工智能语音',
						price: 2299,
						oldPrice: 2399,
					},
					{
						goodsId: 5,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/b509d62f-a10a-6559-94f4-852b401815fb!360x360.webp',
							'//i8.mifile.cn/v1/a1/ca755c3a-ccc3-ad91-b2e9-91bb8d8405d9.jpg'
						],
						name: '小米电视4A 65英寸',
						info: '4K HDR，人工智能语音系统',
						price: 2999,
						oldPrice: 3699,
					}
				]
	},
	{
		typeId: 2,
		typeName: 'appliances',
		goodsList: [
					{
						goodsId: 0,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/c585ed38-bee4-2f3c-c413-a1af154a74b3!360x360.webp',
							'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d52800d097eda2ecbbea3f7361936f7.jpg'
						],
						name: '米家互联网空调（一级能效）',
						info: '1.5匹，全直流变频',
						price: 2299,
						oldPrice: 2699,
					},
					{
						goodsId: 1,
						imageUrl: [
							'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360',
							'//i8.mifile.cn/v1/a1/b3fb5566-ce77-2097-c5ca-e97e39c4b26c.webp'
						],
						name: '米家洗烘一体机Pro',
						info: '支持语音遥控、智能投放',
						price: 2999,
						oldPrice: 2699,
					},
					{
						goodsId: 2,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/75f5a1ad-e2c6-36a9-fd56-66d253cc0469!360x360.webp',
							'//i8.mifile.cn/v1/a1/b3fb5566-ce77-2097-c5ca-e97e39c4b26c.webp'
						],
						name: '米家空调',
						info: '大1匹，静音，快速制冷热',
						price: 1699,
						oldPrice: 1799,
					},
					{
						goodsId: 3,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/27721d21-782a-32e8-772b-462652d9acde!360x360.webp',
							'//i8.mifile.cn/v1/a1/1042d213-8b5b-478b-1816-f5dde3d6d265.webp'
						],
						name: '米家洗烘一体机',
						info: '洗得净、烘得干',
						price: 2299,
						oldPrice: 2699,
					},
					{
						goodsId: 4,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/ce8d4b39-18b3-5b8e-ea74-5a2c86856e20!360x360.webp',
							'//i8.mifile.cn/v1/a1/887939d4-aefe-f051-54da-b30f837d6c69.webp'
						],
						name: '米家互联网空调C1（一级能效）',
						info: '1.5匹，自清洁，全直流变频',
						price: 2499,
						oldPrice: 2799,
					},
					{
						goodsId: 5,
						imageUrl: [
							'http://i8.mifile.cn/v1/a1/33c6d391-82a0-0fd2-2d0e-fb59f4679b6c!360x360.webp',
							'//i8.mifile.cn/v1/a1/00678823-f015-49b4-4db1-32a1d9b5df06.webp'
						],
						name: 'Redmi波轮洗衣机1A',
						info: '大容量一次洗净全家衣物',
						price: 899,
						oldPrice: 2699,
					},
				]
	}
];
export default product;