const express = require('express');
const util = require('util');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const _ = require('lodash');
const router = express.Router();

const { respondJson, respondOnError } = require('../utils/respond');
const { botModel } = require('../model');
const resultCode = require('../utils/resultCode');
const { parameterFormCheck, getUrl } = require('../utils/common');

const controllerName = 'Bots';

router.use((req, res, next) => {

    console.log(util.format('[Logger]::[Controller]::[%sController]::[Access Ip %s]::[Access Time %s]',
                                controllerName,
                                req.ip,
                                moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')
                            ));
    go(
      req.body || req.params || req.query,
      parameterFormCheck,
      //f => f(authRq[getUrl(req.originalUrl)]),
      result => result
      ? next()
      : respondOnError(res, resultCode.incorrectParamForm, {desc: "incorrect parameter form"})
    );
});

router.post('/getbot', async (req, res) => {
    const {id} = req.body;

    const data = {
        user_id: id
    };

    try{
        await go(
            data,
            options => botModel.find({where: options}),
            result => !!result? respondJson(res, resultCode.success, { bot_list: result }):respondJson(res, resultCode.error, null)
        );
    }
    catch(error){respondOnError(res, resultCode.error, error.message);}
});

module.exports = router;