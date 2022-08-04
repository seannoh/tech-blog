const {Post} = require("../models");

const seeds = [
  {
    title: "Nam at dui eget lectus faucibus venenatis quis vitae sem.",
    content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dignissim enim ut nibh suscipit congue. Cras in luctus turpis. Vestibulum in metus urna. Sed purus lacus, varius eget neque non, finibus sagittis lacus. Vivamus a tempor sem, at congue leo. Donec dapibus semper enim et vestibulum. Nulla facilisi. Sed gravida massa vel purus ornare, id mollis turpis dictum. Aenean lobortis ligula quis lacus molestie, in convallis ligula congue. Maecenas egestas nibh nisl, a fringilla risus sollicitudin nec. Sed condimentum lorem vitae neque semper tempus eget ut ipsum.",
    user_id: 1
  },
  {
    title: "Aliquam varius mollis commodo",
    content: "Proin dapibus felis sapien, eget blandit nunc cursus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis libero dui, molestie vitae eros ut, commodo auctor libero. Fusce viverra, urna sit amet dictum semper, sem nulla volutpat sapien, ut fringilla turpis turpis dictum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eget libero at erat auctor efficitur.",
    user_id: 1
  },
  {
    title: "Nullam malesuada maximus erat at laoreet",
    content: "Aliquam consequat auctor leo, sed semper lorem fermentum eget. Aenean euismod ante at ornare imperdiet. Curabitur quis purus vel tellus faucibus accumsan. Morbi quis enim non dolor ultrices tempus. Phasellus molestie quis quam sit amet posuere. Maecenas eu ornare ipsum. Morbi et nisi ligula. Praesent non nunc egestas, sodales nibh et, vehicula nibh. Cras a imperdiet enim, eu sodales erat. Duis leo magna, fermentum vel rhoncus ac, mollis sollicitudin lacus. Cras ut mi vel mauris eleifend bibendum vitae ut libero.",
    user_id: 3
  },
  {
    title: "Duis ultricies laoreet sem, dapibus eleifend diam bibendum eu",
    content: "Nunc massa lacus, tincidunt sit amet consequat sit amet, gravida ut metus. Integer libero mauris, scelerisque in venenatis vel, sodales at urna. Donec urna lectus, tristique at enim nec, lacinia tincidunt urna. Morbi at ultricies libero. Fusce ultrices feugiat libero. Integer pulvinar ullamcorper eros, eu commodo eros dictum sit amet. Donec eleifend odio id ante pulvinar tincidunt. In vel mi laoreet, interdum massa vitae, porta neque. Aliquam erat volutpat. Etiam ac ex eget arcu vestibulum vestibulum sed in nibh. Nam non enim iaculis, placerat nisl ut, vestibulum purus. Sed vel libero nisl. Integer pharetra sit amet odio in faucibus.",
    user_id: 3
  },
  {
    title: "Donec bibendum libero nec quam faucibus viverra",
    content: "Aenean ac tincidunt risus. Nullam et neque eget sem mollis facilisis. Mauris dictum auctor sem. Donec viverra a justo ut laoreet. Aliquam erat volutpat. Ut a posuere nibh, at dapibus turpis. Nam et nisl augue. Sed magna diam, sollicitudin nec rutrum eu, suscipit sit amet massa. Nam egestas lorem quis urna scelerisque maximus. Suspendisse sed arcu mollis, tempus ipsum vel, mollis dui. Praesent nec lectus arcu. Donec dictum nulla at sem rhoncus congue.",
    user_id: 4
  },
  {
    title: "Morbi luctus purus non ante elementum, at consequat ante posuere",
    content: "In aliquam at sapien a hendrerit. Maecenas aliquam, nisl vitae posuere luctus, justo ipsum efficitur magna, vel lobortis nunc ante vel elit. Vestibulum at orci maximus elit malesuada posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id tempus massa. Suspendisse vitae convallis est.",
    user_id: 5
  },
  {
    title: "Maecenas lorem ligula, volutpat at scelerisque at, sollicitudin nec ex",
    content: "Pellentesque maximus id lectus eget condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean euismod dui a rutrum facilisis. Integer risus ligula, scelerisque ac condimentum a, sodales in ipsum. Pellentesque auctor nunc nec auctor rutrum. Maecenas ut hendrerit quam. Morbi egestas porta rhoncus. Nullam cursus metus nisl, in fermentum dui hendrerit ac. Mauris posuere lacinia odio eu sagittis. Nullam semper purus imperdiet, tempor massa sit amet, facilisis dolor. Quisque blandit ex sed blandit scelerisque.",
    user_id: 5
  },
  {
    title: "Suspendisse dapibus",
    content: "Nunc eu quam massa. Nullam vel ipsum vehicula, posuere nisi ut, pharetra nisl. Duis congue neque tempor, sollicitudin turpis sed, pulvinar mauris. Nulla pretium eget enim ac tincidunt. Suspendisse vitae euismod urna. Vivamus vulputate, quam sed porta placerat, quam nibh mattis urna, nec varius tortor mi eu tellus. Sed fermentum, urna quis luctus blandit, lectus nulla dictum lacus, vel vestibulum massa mauris a mauris. Etiam non purus nunc. Curabitur efficitur leo sed quam semper iaculis.",
    user_id: 6
  },
  {
    title: "Nam justo enim, cursus id accumsan a",
    content: "Phasellus vel fringilla ante. Aenean ultrices feugiat magna, nec molestie magna gravida nec. Morbi quis tellus aliquet, rutrum mi pellentesque, placerat nisl. Maecenas sed bibendum quam. Quisque volutpat lectus ac dolor cursus venenatis. Vivamus vestibulum suscipit mauris, nec sagittis tortor cursus at. Pellentesque in enim gravida, sodales nibh at, feugiat arcu. Aenean arcu dui, rhoncus non mattis sed, sodales ut metus. Donec ullamcorper, felis quis hendrerit pellentesque, turpis ante maximus nulla, in finibus sapien eros vitae dolor.",
    user_id: 7
  },
  {
    title: "Pellentesque pulvinar eros sem, non semper nunc auctor lobortis",
    content: "Quisque pellentesque ullamcorper lobortis. Proin tristique fermentum elit et finibus. Vivamus accumsan risus id cursus volutpat. Nam congue, nibh non facilisis tempus, justo lacus hendrerit lorem, eu scelerisque tortor est quis metus. Vivamus non massa tempus, commodo ligula id, auctor nibh. Curabitur vitae fringilla nisl, in eleifend nulla. Cras ut erat odio. Cras laoreet finibus mi, nec elementum felis elementum non. Curabitur at nulla a velit varius interdum sed non velit. Vestibulum facilisis sodales pulvinar. Sed rhoncus nunc quis pharetra rutrum. In pharetra, nisl eu tempus porttitor, nunc magna cursus metus, eget ultrices velit quam eget libero. Vivamus consequat euismod nunc a vulputate.",
    user_id: 7
  },
  {
    title: "Curabitur semper facilisis est eget tristique",
    content: "Donec laoreet tristique dui quis mollis. Quisque vitae ante sit amet purus posuere efficitur in quis tellus. Etiam at purus rhoncus, interdum urna vitae, accumsan leo. Ut eget erat et nulla tincidunt mattis. In pulvinar elit at tortor tristique euismod. Ut feugiat magna in sapien elementum, non malesuada nibh tincidunt. Quisque id ultrices purus.",
    user_id: 7
  },
  {
    title: "Vivamus interdum erat eget arcu luctus facilisis",
    content: "Vestibulum pretium nisi id dolor elementum, quis cursus dolor blandit. Sed vel ipsum a risus rhoncus auctor. Morbi scelerisque, urna sed gravida efficitur, urna augue convallis nisl, et rutrum eros nisi nec nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec commodo sapien quis lacus vestibulum interdum. Morbi efficitur consequat tincidunt. Etiam vehicula commodo est euismod molestie. Nullam scelerisque vehicula iaculis. Vestibulum volutpat faucibus consequat. Donec bibendum sapien nibh.",
    user_id: 7
  },
  {
    title: "Ut consequat tempus efficitur",
    content: "Aenean efficitur ac nulla sed sagittis. Suspendisse ac iaculis risus. Pellentesque dapibus arcu lectus, et finibus quam vestibulum sed. Nam facilisis bibendum felis, eu consequat lorem maximus quis. Aliquam interdum magna in convallis condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sed vehicula nisi. Mauris consectetur lacus augue, nec aliquet dolor condimentum ac. Suspendisse accumsan dolor consequat erat ornare egestas maximus eget ante. Sed ac metus lacus.",
    user_id: 8
  },
  {
    title: "Suspendisse et auctor risus, nec faucibus enim",
    content: "Fusce at tincidunt nunc, a tempor nunc. Nam vestibulum fringilla arcu, et congue nulla tincidunt eget. Integer feugiat tempus varius. Aliquam erat volutpat. Suspendisse arcu nulla, vulputate sit amet mattis in, pulvinar sit amet leo. Ut tincidunt mattis ante eu viverra. Duis felis quam, bibendum eget mollis id, malesuada at arcu. Nunc aliquet dictum massa, non pulvinar dui pulvinar vel.",
    user_id: 8
  },
  {
    title: "Phasellus pellentesque sit amet ante sit amet semper",
    content: "Phasellus lorem tortor, condimentum non mi at, euismod lacinia ante. Aenean enim risus, porttitor in quam a, semper molestie neque. Vestibulum commodo tortor eget posuere dictum. Cras sed libero non ipsum cursus posuere. Suspendisse potenti. Fusce vel dapibus odio.",
    user_id: 9
  },
  {
    title: "Donec nec dolor ac enim tristique interdum eu a diam",
    content: "Morbi feugiat, felis sagittis volutpat scelerisque, dolor odio volutpat ante, nec fringilla sem erat vel mauris. Pellentesque et tempor lacus. Suspendisse convallis ligula nec nunc blandit, ac posuere nunc pulvinar. Nam et blandit risus. Suspendisse pulvinar consequat magna id consectetur. Pellentesque eget pellentesque sem. Ut non purus sit amet lacus sodales sodales in ut massa. Pellentesque in nulla turpis. In in egestas est.",
    user_id: 9
  },
  {
    title: "Ut ex sapien, hendrerit a nunc at, accumsan vulputate ligula",
    content: "Integer volutpat hendrerit mi. Vivamus et laoreet mi. Suspendisse at nisi vitae nulla malesuada rutrum. Sed felis sem, tincidunt id mi at, pretium pulvinar mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mollis at mi nec aliquam. Donec elementum sem vulputate, dapibus sapien feugiat, rutrum ante. In vitae nulla orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse aliquet lorem mauris, in bibendum orci vulputate quis. Nulla facilisi. Sed id lacus lobortis, ultricies nisl vulputate, lacinia orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. In non eros sit amet elit vulputate dictum.",
    user_id: 9
  },
  {
    title: "Nunc et tempus tortor",
    content: "Curabitur ut lacus nec arcu dignissim feugiat eu vehicula magna. Donec turpis velit, sagittis in convallis ut, imperdiet sit amet lectus. Suspendisse non nunc et arcu volutpat tristique. Vivamus massa nunc, tincidunt vitae vehicula laoreet, consectetur sed urna. Etiam egestas nulla quis imperdiet bibendum. Integer mollis varius risus, vitae semper nisi egestas nec. Donec commodo ligula pharetra condimentum egestas.",
    user_id: 10
  },
  {
    title: "Praesent viverra sollicitudin pharetra",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sem libero, ornare nec leo ut, mollis fringilla velit. Nam id ante non sem vulputate mattis. Aenean euismod dui id massa aliquet egestas. Quisque interdum ultricies placerat. Suspendisse quis sagittis libero, quis consectetur lacus. Integer vulputate, lorem in mattis vulputate, lacus quam tristique risus, euismod facilisis velit nibh non ante. Sed fermentum, enim non laoreet tristique, velit est laoreet ante, non interdum risus nisi id sapien.",
    user_id: 10
  },
  {
    title: "Vestibulum sit amet scelerisque nisi",
    content: "Fusce nec placerat lectus, eget cursus diam. Nam tincidunt maximus interdum. Sed tempor rhoncus est. Ut egestas commodo vehicula. Quisque ac placerat nibh, ut bibendum erat. Nullam vel leo eu lectus sollicitudin laoreet at in leo. Donec purus risus, tincidunt eget lorem at, mollis cursus velit. Proin egestas venenatis neque ut suscipit. Pellentesque metus nisl, maximus quis porta eu, tempus vel augue. Mauris vehicula justo eros, nec dictum dui blandit ac. Vivamus porttitor magna fermentum, dictum lacus quis, molestie ligula. Etiam tincidunt, ex eu iaculis convallis, lorem magna mollis tortor, ac bibendum urna sem et magna. Curabitur tempor velit sed maximus laoreet. Mauris nec urna sit amet nisi viverra commodo.",
    user_id: 10
  },
  
];

async function postSeeds() {
  await Post.bulkCreate(seeds);
}

module.exports = postSeeds; 