const { StatusCodes } = require('http-status-codes');
const { logger } = require('lowe');
const { buildResponse } = require('../helpers');
const { userService } = require('../services');

module.exports = {
  async create(req, res) {
    try {
      const user = await userService.create(req.body);
      return buildResponse(false, res, {
        status: StatusCodes.CREATED,
        body: user.toJSON(),
      });
    } catch (error) {
      logger.error(error);
      return buildResponse(error, res);
    }
  },
  async get(req, res) {
    try {
      const user = await userService.get(req.user);
      return buildResponse(false, res, {
        status: StatusCodes.OK,
        body: user.toJSON(),
      });
    } catch (error) {
      logger.error(error);
      return buildResponse(error, res);
    }
  },
};