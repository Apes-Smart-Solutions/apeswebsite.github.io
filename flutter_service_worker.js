'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ea3ccf9d1ea2f9aa50c9cce6057ae034",
".git/config": "c74c9a46b155eed1f86cd86a70eec8ed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "13affcf7593b73d80e8c2342c273a252",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7a6498edb9e45a9ed62a1abd64965f1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b0e632831748ca7930fc462b8782c6ed",
".git/logs/refs/heads/main": "d74bf68cf7a79290c3f1b847841ad791",
".git/logs/refs/remotes/origin/main": "36289babfd82863653c75071de730625",
".git/objects/03/38c4b7c147dfc6747203e904b71f71554fa40f": "7df3b73536feef0d5430249cee984077",
".git/objects/05/bc5ee33fa62ffdd0aac21546373b17d350675f": "6688d8c80fd51ed510a0f30f146fc9c0",
".git/objects/06/0b5251489ec067d53a926b56f899ec7e3cc8d1": "660284c869d62a79c9fa7de20b029e4f",
".git/objects/08/24182987a062f5c94bfab9c7ba8bee6edc5d67": "af9b91f6dcc886ed9c4e90060d0d8a0d",
".git/objects/09/1b9b288eb5c71c50ba6a0fd97e8cc097472ac6": "1609cc6ce1e88096a22d33062c558f0c",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/0b/e11a7db750f0bd865f58afe7cf9e75b43248e0": "a0ef8da39dfaef114c3f9b28720fa3e4",
".git/objects/0d/97a79f56f588734271d7cd2c13e10df5025731": "a21b2fdd0a0b40d3c9cd999ee8f2cf50",
".git/objects/0f/6c609b01e78bbe1240207b77f8c59e57fc0524": "d59c5612ce3a5573455afd43aed719f5",
".git/objects/11/c13d9f99288cab47cd4d5ea00149c51bd2f264": "336ebc561b5b6efd296ae9191982bd25",
".git/objects/14/7240a94446a19d06f9ee0fe1ead26ba8e0d4a7": "0fc3111a944aa8f489a7e27ed5ff8b5c",
".git/objects/16/26603ca2fdad05bdb34ae39784f91f38482696": "d088b8052bf5181b787a17c0735be4ee",
".git/objects/17/2ad55ca25a9c72897b5a2a19fffedcf2a96e91": "8486fcc0bb37839f1a570794b55ab9e6",
".git/objects/1a/19352a58d5d9165a6808d31208fd3aa3a5d2fd": "2007e294526bbf870e0d7f3b804c90bf",
".git/objects/1c/32fd4ff138dbf3a5d73ffe392861ab9e26651b": "d18bdce72316757bbdea83f62c27e118",
".git/objects/1c/63b6b804dece8a9049a26f7df6a42eeef35cc8": "d05b3169fef2513676c7679503663c2f",
".git/objects/1e/d8e96be71445b0a3a5bc6b9c141113ff9bf5d5": "733e035105a5eb8f7ea54ac4a867606b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/e96de8cb2f1e260c0080b8ef4bef4950762922": "efbe86c985c53c67d77d42fdf4313607",
".git/objects/26/c983228d4485bc45c4074e218c5da2663127b6": "d98863787abea7442a99a1cc2a96244a",
".git/objects/2a/461183fe27b13e6f911d9fc01c7378710aa2ef": "b6efabd75124b7c405d335fa73eb2cda",
".git/objects/2d/4a7027c79a25582b06f6de477df4cbbf01eec4": "d4f85cc52bdc08adb086670cf9b40d42",
".git/objects/2f/68a22b88ec9e1727578b9b05d6af12aa46e784": "b6f4f068e7b4ec21355aa154ff836aa0",
".git/objects/2f/efa1180ef6b2f58e35cc1374336c0c55321d7b": "541e61bce84a196661355a2c60af7b30",
".git/objects/31/e9590af3dd70b1aba6495a9e5a92a0e9037380": "b9236a9d31ecc6467570f5ce865e7699",
".git/objects/32/c2473205ae9c0dfa2ec31b29383730fea499e5": "807df2152c15e410439642645fa9621a",
".git/objects/34/0f3c32672524db8a5f9fe687e6793c810d2523": "eb0fd7094b5341a05825b8a13c587c67",
".git/objects/36/83d4919787d79aba8f9879fa6eec282f56e24b": "469eabfe68f1fd5632cbf2ca68ec0491",
".git/objects/3a/5830d481345a1425f30a2edc21da1c82c837fd": "cabf924f961aa9fec9b61b521d0a0662",
".git/objects/40/d6a79d37f3bee87ab3d8aaa36ba6732edd4fb5": "afa25132edfa86db8c531ca037efcbf7",
".git/objects/41/c919d23121d902fa5b8d791f9f77d1cea227b9": "7ef511a7f46363cf8b766b7a4a1307f2",
".git/objects/44/28b5c628ada3cab439627d02baeccec8ffa590": "0bc1cbd2e6bdd0b86b96a18babc94ef6",
".git/objects/44/4836e2e962b6243cf67102f74fdada4442b572": "2c7b4f3401b5424841ec9e5c24cf347e",
".git/objects/46/20d4b06be0b218248c5f452640364b29a5c310": "1d19a2d251f5dace1b6576de65ad0761",
".git/objects/46/dfea9a9ab454332ebe8d7e9881f9ca59f8b4fd": "6504ac04aa65c3c4761ac29f3f4dffc9",
".git/objects/47/45f38ef51db91140eb10e65a70eb01c2732d38": "0e3a1a2c4bf013adae6f5afd98cde396",
".git/objects/47/4e5f1ed13f71e4b322f69a01de68d2aa15a507": "c2dbbc5fef6359ce3aaf71b7292b99f4",
".git/objects/47/75400386ff1f11c134103b7fc8324111c7c544": "5027c39dda223e821abce61d08b63b3b",
".git/objects/49/8ca2daeb31c1c90086ada0c5b9e8ae02ccf6a4": "f799465136e4436822f89c5509ab176c",
".git/objects/4a/a96ec7b221b7b4287aa943b4b45f076dd2c5db": "78da8ee70837d4cccf140f9bf3c4abbc",
".git/objects/4a/fc7b413123f34ae7d46eff807525ad0e2afebf": "b583861a24b40e1e8cbfdac7ddf79740",
".git/objects/4d/e29535009771e810e84e119987f7921ac80061": "5b193db38efbf2c5f0ffc756b175c7a2",
".git/objects/4e/fa17419544d827ef74b0dc67a42e52936e4df7": "1e72bd92806f020f5cc604fef2fbc42f",
".git/objects/50/20f6ad2653b4191f7e808c2a2022cdcefc6e89": "6a7d8f7f3b7a85392c2183f8aa61a973",
".git/objects/50/d271d9907fe5764b4db7fb345bcf0492bf5066": "878e193f4576e28c16b6cdacc91629c1",
".git/objects/52/b9fa06fabb0d7675d7516b83263fa6ac7f931f": "13cd0e037ccff00660c687b48986ee4c",
".git/objects/53/a326fa445ec7cf7ed92df84889662c0a168db9": "510fe49dfd4c70027851801046cefa9d",
".git/objects/54/1c6fb98bba74453070ab9c9f597c4c6c81f12b": "17d4abd721e0228d5fd02a247b487319",
".git/objects/5d/71f343aad2cabda1939ee6cfd0a20e83e23a9d": "b9523df0f5a40fb826661a57420a9072",
".git/objects/5d/bea63c57219bb8beba6a58e6dc7fe564af9cfe": "aeaeea238f0e29f2f7429712b2aa2f43",
".git/objects/62/0ea37f829adb550dceadc47f50054107e0c052": "252b7f8762fecedff9ee19402fde16e4",
".git/objects/62/25fbbf811bb0bef5f5b3bae45d8cb17da652ad": "daf0c5ffa6fc664eacadcb0c4468ad01",
".git/objects/62/c711a24bb67eef2fc9bbbf28ea65a244f1370c": "fa680f223c95be4f09a33d9eb39ea288",
".git/objects/63/371f40f41ba3d0652cca300d557dcdffe62beb": "0dcecc6ce09f1ea70937e0e51fd92aad",
".git/objects/70/4f1e4dbf04b38d6a4f356743f6fc24772e377b": "af0cfd711be3a0f1cb184d35f29c823f",
".git/objects/76/e5b9f536cda69d00fc95fc34b290bc875faf4e": "6283222cd4398b3652024276f9fad44c",
".git/objects/77/4a05a28c7b2fabbd659c944f5cba9f12316bf9": "bdab6934f8e99f9c28479c0a72c667c9",
".git/objects/77/5595270d5d86b72019c47e49db508b184f723c": "2e2964d39d8e7ae2e1ac655eda558e8f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c3d1f671d4a3fb1c5940091aefb9b7b948d92f": "b2018248d5fa6bc8ff3334205e13011b",
".git/objects/7a/7496079aed6e27d0253da1afb7df7c9eff1d3c": "b2b176c8212122b3efd2a4a3ab343e25",
".git/objects/7a/78c3e2252008bf20c26852fc7b06ad3ce3fc76": "edaabc0d132c9080cccdb34ad1f680e6",
".git/objects/7d/8918300794ff1ab69dcfc5e61bc836542f25cc": "f7333da28e247703d11f763fa35f3686",
".git/objects/7e/22631d910409296b58d0f63fd9b3e5de3e4749": "abfef553fc481ba12051792294d0bedd",
".git/objects/7e/9e6dbe435f7319809d6cd9208452d9b1c5a04e": "be32408a46d5029fb907a217073d2c00",
".git/objects/83/b207e7a90d3494999f1bdaec76485329109c59": "d1ed065cc105adb9a57aafb900ed98e1",
".git/objects/87/f85aa640cd682af2bfb8583630110d60bae62c": "2de373c5dad2954cab3b89374a74320c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c563a400df60e5723ab2fa3cdcfbd7513682c1": "b10e1174a0dfc079c33a8bc45c6bef94",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/478290f850ef7b40990e02e1365286663eced4": "6e065bc371f855617a16ff264ad31814",
".git/objects/8d/8d6a74ed442a1bbbf89cbf137a15da0183c8aa": "2cdf5d523a0428a34c571e0478ec83b7",
".git/objects/92/b8e15a4fb086636bf6167e0777524b0bc452ef": "94cd7b392a4b2bef30f54eff72144b87",
".git/objects/93/41b79c363d7744d17ac8389348f6bf7dbe0a1a": "3d340fbf21d278ea5bfb3d45a4b3e2d6",
".git/objects/96/b6650f7daa8862f7fc77b2112b5ed6a192b887": "d955f35efb223802c22bf651d59fc81c",
".git/objects/96/e550375871279d503627718a9784279d41c352": "246ddc1787da93e24d26f132089b4798",
".git/objects/98/2c3dcb03abcff6eae57319f17cf6bc806cf299": "2d2766733b50484686eeacac8c45a328",
".git/objects/98/62bb44a6243261e5707792f39636a6c15b2be1": "d8bd57cd4e8c69207d7ce39e20bb8e47",
".git/objects/98/71f9e10dabf98f500ba2fc1682b319a6a48d71": "0de2db147bf8ea5cc3d98d13ee3a4903",
".git/objects/98/d57a6963c14ac18309d25282a9897df3668a11": "381f86563893a10d5131647e4611c787",
".git/objects/9b/1ebd8396d914187eddec3e3ae694d2fadcdb16": "77c3873e38ed7b3e1bb41b09cbf93a22",
".git/objects/9f/d2f1f3c6ba478ae7e5c73ddb3195a9ccfb25e1": "943d44a902457d6d0f0dbc167ce81186",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/b3c82ac9e5bd5dcd88a337e05e856da50f45a9": "b9859bab24d5a63930e287a2ab19af16",
".git/objects/a8/32f9cb254e9f9ca1eafba762b92a9c23cc8bff": "b563bd4a6ea2258fcf25a7b380b7ef10",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/156914d2262280d83af22345061d6b60a4dca8": "849491a7e29fae28559e716eda7c1a47",
".git/objects/a9/2b1c0b33e2a5f243dbb8c8c1d6164e206056a1": "4488b4758a15f11e823ad6a78c5e7885",
".git/objects/a9/c09039d18bfad247cb46b1f75b07d9ec5724b7": "ee57efdb1710cdb5fdca0052f8363ac6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/81089da77b312f23c73d0df69dab95a3a8d8ed": "8a51bc9fb7f3b995f0f8dc503c959acb",
".git/objects/ae/052621699b0259cc52746b809a17ac9ba125b0": "f5ac02e2a24c471c5b18707e7c8404ee",
".git/objects/b1/2d035590469294ad5dfefa3ccde2d2003c512e": "2a394c61e468f423a08b4308b988164c",
".git/objects/b2/603f455e5de04a96266b83b3e641eb9ca7853e": "50bd6153fdd4fa30b8fd9300da6084e1",
".git/objects/b3/336473a06f8736bd77347d6b4333d42ccbb120": "82d8dfd5165f1921db723ceab871643b",
".git/objects/b4/1df1fd0c3b7d5d957ce985648406fb2a2d6f92": "b60fa2cddd19d363983f963392f61313",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/78443f11bae289266e237e91f9e15d3b95df6b": "7bc0be859d25400a0c09d8229741639d",
".git/objects/ba/86085f46b649aee33d8ef1154fd3ec0a8c2b67": "8ca4b8e345c32218f3bb196536c19c20",
".git/objects/bc/15fc1ccc822688a6fc3c50557a97ff224a1de0": "ba896df282e6016ec5cb01f827586d4f",
".git/objects/bd/c62131b0404c97eb6da27ae91f6fe49c6423b5": "69d8c68ca9d3d30c0c8ffbda97ae8bbe",
".git/objects/c1/a06aa9b2d9be948b75c836b9f1d4753b516485": "53a7ff54b5db59a40d85261bb7202acd",
".git/objects/c5/ce312f428a16b5fc5a96ea23f7ee65ed148e2e": "6a8d93f0362fd32cca5dc4e4350a524c",
".git/objects/c6/d784f4171cb4abda35cb7c9e013d724a3a6271": "3a2b90d4b17dc0bf9f54036e74986aa2",
".git/objects/c7/ab43480e281a233b89a008e8fa1b5dc3c37bb0": "1c690af011b7c754c3de9a590e78167e",
".git/objects/c9/59e9b8a4234fb94e475e9c17b6e57d2e243e0a": "67516f8a6e5e7df6e500205a62c7a0b2",
".git/objects/ca/4262dc2199e7733b028ea99cb02febf072547a": "d7d6b0ce968296406663b5994a0d520a",
".git/objects/cc/8ee1d61611cff36e23af4b6b705f429b036163": "23024d264935c139a48e3a5363ba9ba8",
".git/objects/cd/05f580a617c254432092a25714bff1ae1e9b24": "ba7f040784ecfb4d5867583ac6016664",
".git/objects/d0/6f2eba19f09ee174437085db5a1797a466822a": "a228a9000a9dfb105c0d75324d5cffa3",
".git/objects/d1/3b263a9f1164dee1b218c7288dada8e4354882": "d6d900b351e8933c014e00171d4a38e3",
".git/objects/d2/3fe0995acf3dd0fbf101965f83120d8700c3c4": "e9d9dbc7585ae0b27c78525889fcbf3c",
".git/objects/d2/91a67fb83ead2fd3dbda084ab490e2567a2f68": "de14feb762707b1ec4791ad4941ee954",
".git/objects/d3/fc1c67aaf9dd831839b0e1b0526a945a06e09b": "e54a4753768756a3d9b01c30f2a7c900",
".git/objects/d7/59cbdc983a566dad5629edeb0c8c2091e5bbe5": "81ebf4a2e23a62455f6113a903625cea",
".git/objects/d9/0aa84c7f11de37c4c549b7799525d6536dd468": "3e5fc20a446f6cd56cc17a0e57287690",
".git/objects/d9/54f7cdb27c791b191d95b6d8e6409f35d6ccee": "feae38a71922f051903eba0d4587b9ff",
".git/objects/db/c0bc7ce646e9d3b0ec88818791ae078351b50a": "308e2b1893acc009f2cbd93d72c2c7d7",
".git/objects/df/8bf475d461a32782aadcf4d8696235349de22a": "84086d06025f5fab9bfc80906babe900",
".git/objects/e0/4f2ba3485e8a63c46ad3ae6fb49ec5b21643b8": "ccbe0fdef26d93ea148c80738f69d39b",
".git/objects/e4/bbe3b29e622d3c8b8eaca29e91b01fdad86014": "55a13f6bc9a91c5f3ad370f8f6bcaeab",
".git/objects/e4/c0fdb0bfbcd75bf8889079df0a0ee1c90b4ed8": "16463fe27984e53c846fffba8b47ce8f",
".git/objects/e5/15def98eae004317201ca9c9d8c70a774802c4": "bc7c389aa57c0c0a137a633ddf4e5cd9",
".git/objects/e5/73cc7f2512abd22825553879c4d40f237d9528": "210bc48a395286df39ab53a79418c41b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/d70369ea87c709b531229b559d889cf0be3eb6": "0919813a7d3447aeed8bee1689878344",
".git/objects/f5/8c1a36b0a12fcb0d2f3a194ac28c52056dd5f0": "35b612b8bff4a6961959b04cc7002b84",
".git/objects/f5/bb1c3acbef0373eaa6a9ea82db12e1c6ab88f1": "e7aa208edad2ab9900fd64402d4bf132",
".git/objects/f9/0cebaa113bbf5808a7b20f0d8caf6746f9a6b0": "03e3f2663a7e6bd1395c90c1d5b14170",
".git/objects/ff/763134156086e3a234fdd60e52bf9ca3051ebc": "f0b61570bc27d3dbe410d65bff359b7b",
".git/ORIG_HEAD": "c25d010efee3569371ed5748f414e8e8",
".git/refs/heads/main": "6ee2f5f4e22d17ed5b286459a5db5a00",
".git/refs/remotes/origin/main": "6ee2f5f4e22d17ed5b286459a5db5a00",
"assets/AssetManifest.json": "6c4d1aa1d1d6e957b10a2eb5a228130f",
"assets/assets/fonts/Bungee-Regular.ttf": "a6e5229e1bf3b61efbf981b9b4e3a115",
"assets/assets/fonts/Helvetica-Regular.ttf": "2f1ce6eb4f4f735776cf117e0aa8662b",
"assets/assets/images/016-megaphone@1x.png": "ff09c3bd150ef8de528a2e4284869b41",
"assets/assets/images/017-brain@1x.png": "c9204e3150d910e8376594ac671f2e13",
"assets/assets/images/021-stopwatch@1x.png": "8a554c8415525686279af925d0815731",
"assets/assets/images/026-learning@1x.png": "d795e251ef060ef6166625ec7184d164",
"assets/assets/images/032-idea@1x.png": "7ee6f4a7236215eb443be881b10c3f37",
"assets/assets/images/047-growth@1x.png": "fab73ae8d6f7f3b9b219c09223a869a2",
"assets/assets/images/102664555-e8d1c380-4137-11eb-85c0-ef3511b2aa6b@1x.png": "1f84d2652250b6f4a8ee9b7aec468566",
"assets/assets/images/1476.gif": "3b1d5b712b7c1d1ed9a841c42f8c7df3",
"assets/assets/images/152843@1x.png": "6618868778088039549fedf66b48c852",
"assets/assets/images/97-docker-logo-logos-512@1x.png": "27b82521f2965540168f8b0864490268",
"assets/assets/images/android@1x.png": "28b1929d882ff6353a441f32e7b4e32a",
"assets/assets/images/apeslogo-@1x.png": "a98addf5bca6cac4470a7a2d04fd189d",
"assets/assets/images/apple-853-675472@1x.png": "90711ea57a556b3daecccdf2e50c1ad8",
"assets/assets/images/apple-touch-icon-114x114.png": "12c6cf93085f69fddf9748c9914362ed",
"assets/assets/images/apple-touch-icon-120x120.png": "853b06c833a5dc3ee08efb271e8c3385",
"assets/assets/images/apple-touch-icon-144x144.png": "dc9934d05d91d9aae919d4ac75bacdb2",
"assets/assets/images/apple-touch-icon-152x152.png": "edbdb1bdcf4e3358bba79a80c8ffa6d4",
"assets/assets/images/apple-touch-icon-180x180.png": "9acf51f837d7ea154468d924d7cee347",
"assets/assets/images/apple-touch-icon-57x57.png": "86ec2312c7647f646da80b7366467818",
"assets/assets/images/apple-touch-icon-72x72.png": "3ff21af7b1218f7c6accb95463e21e54",
"assets/assets/images/apple-touch-icon-76x76.png": "bade7fb4a061b6e5edcd06fab303dba2",
"assets/assets/images/apple-touch-icon.png": "86ec2312c7647f646da80b7366467818",
"assets/assets/images/favicon.ico": "0822071b5899a15d32ff92aaee20f22d",
"assets/assets/images/firebase-512@1x.png": "02d46f90d481b51dca9c82f58c4b0385",
"assets/assets/images/flutterLogo.png": "2160afacf4eca8e549c0b64e541ba3a7",
"assets/assets/images/google-play-2-555322@1x.png": "b02901f534b675498667dba69ff766d2",
"assets/assets/images/group-2-1@1x%2520-%2520Cropped.png": "1749683e2b315c33f2e978fbca6838ff",
"assets/assets/images/group-2-1@1x.png": "9662cadaa9ec7cfd1025229eba180f54",
"assets/assets/images/group-2-4@1x.png": "4a86020225b6839dd6b5b39490067320",
"assets/assets/images/group-2@1x%2520-%2520Cropped.png": "387a2379875cded1a2531017e7fc8852",
"assets/assets/images/group-2@1x.png": "a912ebb6437fd2906050887a1d2509ea",
"assets/assets/images/instagram@1x.png": "34d4ab3f390d098652981de5408d87ce",
"assets/assets/images/lightbulb@1x.png": "0df0fb5443f1f29f20d322389c99ba54",
"assets/assets/images/monkey-1@1x.png": "e3a062a12d97016f09d358c97777f717",
"assets/assets/images/monkey@1x.png": "5400850289b83b5576f12931ae14a610",
"assets/assets/images/paint@1x.png": "6196dbfa6f46239aaeb60565a42fc8f9",
"assets/assets/images/path-1-1@1x.png": "ddc2acb8b783a945d65588d48c0f655f",
"assets/assets/images/path-1-3@1x.png": "92d4729ce8a4884287586443235cfd5f",
"assets/assets/images/path-2-1@1x.png": "268ffe0f95197466faa7fdda3532350f",
"assets/assets/images/path-2@1x.png": "48b5cb2448ab72f3f165313d4b4e0c3f",
"assets/assets/images/path-3@1x.png": "cb0f2a96dc5d7e4c43354275da9b6e04",
"assets/assets/images/path-4@1x.png": "8d1447faa818b78058af43f33ff7257a",
"assets/assets/images/path-5@1x.png": "be394eafcec4b98b080ee1f104bbfc42",
"assets/assets/images/path-6@1x.png": "6c7d34564fe5d4804049242b8d5e97b0",
"assets/assets/images/path-7@1x.png": "827d7c4e9846b41b415707054f7314aa",
"assets/assets/images/path-8@1x.png": "3b46d01486c91ba7f52a79de61e9539d",
"assets/assets/images/react-1543566-1306069@1x.png": "6f16788a36d1b43ef2965201995e31d3",
"assets/assets/images/startup@1x.png": "8bff757b89be74439c3683b9bcd4f3d4",
"assets/assets/images/swift-15-761717@1x.png": "6ca0bd8abd857a06b22b68f08887df6c",
"assets/assets/images/untitled-1-1@1x.png": "6066998a14056e430c8feca53e35ef05",
"assets/assets/images/untitled-1-2@1x.png": "b71dbc6bdfaec25978686b61fbd6a48f",
"assets/assets/images/untitled-1@1x.png": "6845b57445c8dbadf7a70a4b47d7caad",
"assets/assets/images/untitled-2-1@1x.png": "2cd94e081626c87e8d4643e8550c4c7d",
"assets/assets/images/untitled-2@1x.png": "df4fc27c09abfb30af8d875df6cc2fef",
"assets/assets/images/virtual-reality@1x.png": "279270c3292b3cb80f3583daa61afe0b",
"assets/assets/images/xmlid-827-@1x.png": "8015509986735fbdcecd912e45d396a7",
"assets/assets/images/xmlid-835-@1x.png": "af07ea1d523c48c5c5116507ce3005af",
"assets/FontManifest.json": "5cdab47c31f6ae146883a73a7144565c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lib/Language/ar.json": "4ccd74b5e2c721125be9adffc8e143ae",
"assets/lib/Language/en.json": "25419acc4d28c76b9d6d172a29baa5a0",
"assets/NOTICES": "69951380742a63460261383ad3d821a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "ea0ff0f69f5b37a36c3f84e757c88dc3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/apple-touch-icon-114x114.png": "12c6cf93085f69fddf9748c9914362ed",
"icons/apple-touch-icon-120x120.png": "853b06c833a5dc3ee08efb271e8c3385",
"icons/apple-touch-icon-144x144.png": "dc9934d05d91d9aae919d4ac75bacdb2",
"icons/apple-touch-icon-152x152.png": "edbdb1bdcf4e3358bba79a80c8ffa6d4",
"icons/apple-touch-icon-180x180.png": "9acf51f837d7ea154468d924d7cee347",
"icons/apple-touch-icon-57x57.png": "86ec2312c7647f646da80b7366467818",
"icons/apple-touch-icon-72x72.png": "3ff21af7b1218f7c6accb95463e21e54",
"icons/apple-touch-icon-76x76.png": "bade7fb4a061b6e5edcd06fab303dba2",
"icons/apple-touch-icon.png": "86ec2312c7647f646da80b7366467818",
"icons/favicon.ico": "0822071b5899a15d32ff92aaee20f22d",
"icons/manifest.json": "b4e6f4f8414450117eeb4efc8d645311",
"index.html": "810f88c3b20dec1620d82629d86d0318",
"/": "810f88c3b20dec1620d82629d86d0318",
"main.dart.js": "01109565c8e5a000fedf1e3e442e4feb",
"manifest.json": "b4e6f4f8414450117eeb4efc8d645311",
"README.md": "a550617eb6e5d03c11a284b8a59f5986",
"version.json": "7ee0ab853bc9e2779bb9d66f6cc1086e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
