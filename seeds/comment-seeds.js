const {Comment} = require("../models");

const seeds = [
  {
    content: "Sed imperdiet, velit quis varius vulputate, ante justo facilisis lorem, a efficitur quam tortor sed mi.",
    user_id: "1",
    post_id: "1"
  },
  {
    content: "Maecenas vitae odio sit amet nisl dignissim dictum. Quisque accumsan odio vitae velit imperdiet dapibus. Nullam euismod ligula dolor, non volutpat arcu ullamcorper et. Cras egestas blandit velit, tristique egestas neque.",
    user_id: "3",
    post_id: "1"
  },
  {
    content: "Aliquam facilisis ornare feugiat. In tellus sapien, cursus quis aliquet et, accumsan id mi. Duis congue felis a feugiat scelerisque.",
    user_id: "7",
    post_id: "1"
  },
  {
    content: "Aenean mollis ultricies nisl eu interdum. Etiam eu massa laoreet, iaculis mauris a, congue erat.",
    user_id: "8",
    post_id: "2"
  },
  {
    content: "Quisque ornare varius ligula, sit amet placerat magna cursus fermentum.",
    user_id: "2",
    post_id: "3"
  },
  {
    content: "Ut tincidunt placerat imperdiet. Ut tincidunt augue et ex dapibus, sit amet viverra mi pulvinar. Nunc iaculis dui et auctor eleifend.",
    user_id: "2",
    post_id: "5"
  },
  
];

async function commentSeeds() {
  await Comment.bulkCreate(seeds);
}

module.exports = commentSeeds; 