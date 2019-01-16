module.exports = (req, res) => {
  let pages = [
    {
      title: 'About this game',
      name: 'about',
      path: '/about',
      content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt mi et nisi pretium sollicitudin et vel massa. Proin consequat eleifend tincidunt. Nulla molestie egestas dolor quis sodales. Maecenas at odio convallis urna dignissim laoreet a non ante. Proin est lacus, blandit suscipit neque in, finibus tincidunt urna. Vestibulum in enim nulla. Pellentesque rutrum a augue ac maximus. Vestibulum nec imperdiet enim. Aenean ac elit molestie, rhoncus lorem eu, semper justo. Morbi feugiat nisl a orci iaculis pharetra. Morbi ut mauris malesuada, dictum diam ut, placerat orci. Etiam velit nisi, condimentum et accumsan sit amet, egestas non sapien. Pellentesque elit mi, sollicitudin id augue nec, ullamcorper ullamcorper quam. Praesent ac nisi a orci rhoncus rutrum. Aenean nec sem sed elit egestas porta at vel nisl. Nullam dui dui, laoreet id suscipit id, commodo sit amet erat. <a href="/#/game">Terug</a>`,
    }
  ];

  if (req.params.name) {
    let page = pages.find(page => page.name === req.params.name);
    res.json(page ? page : {});
  }
  else {
    res.json(pages);
  }

};