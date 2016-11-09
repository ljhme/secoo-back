var indexTpl = require('./templates/index.string');
var commonUtil =require('./utils/common.util.js');
commonUtil.render(indexTpl);

require('./router/router.js');
require('./directive/linkNav.js');
require('./controllers/addUserCtrl.js');
require('./controllers/userListCtrl.js');
require('./controllers/updateUserInfoCtrl.js');
