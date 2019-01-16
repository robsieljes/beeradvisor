module.exports = (req, res) => {
  // find user in api
  res.json(req.params.name);


  if (req.params.name) {
    // if user is found
    // let page = pages.find(page => page.name === req.params.name);
    // res.json(page ? page : {});
  }
  else {
    res.json(pages);
  }

};