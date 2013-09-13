
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.getJade=function(req,res){
    res.render(req.params.name);
};