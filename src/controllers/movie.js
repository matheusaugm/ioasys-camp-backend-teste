const { StatusCodes } = require('http-status-codes');
const { logger } = require('lowe');
const { buildResponse } = require('../helpers');
const { movieService } = require('../services');

module.exports = {
  async create(req, res) {
    try {
      const movie = await movieService.create(req.body);
      return buildResponse(false, res, {
        status: StatusCodes.CREATED,
        body: movie.toJSON(),
      });
    } catch (error) {
      return buildResponse(error, res);
    }
  },
  async list(req, res) {
    try {
      const movie = await movieService.list(req.query.perPage, req.query.page);

      if (movie.items.length === 0) {
        return buildResponse(false, res, {
          status: StatusCodes.NO_CONTENT,
        });
      }

      return buildResponse(false, res, {
        status: StatusCodes.OK,
        body: movie,
      });
    } catch (error) {
      return buildResponse(error, res);
    }
  },
  async get(req, res) {
    try {
      const movie = await movieService.get(req.params.id);

      return buildResponse(false, res, {
        status: StatusCodes.OK,
        body: movie.toJSON(),
      });
    } catch (error) {
      return buildResponse(error, res);
    }
  },
  async update(req, res) {
    try {
      const movie = await movieService.update(req.params.id, req.body);

      return buildResponse(false, res, {
        status: StatusCodes.OK,
        body: movie.toJSON(),
      });
    } catch (error) {
      return buildResponse(error, res);
    }
  },
  async delete(req, res) {
    try {
      await movieService.deleteOne(req.params.id);

      return buildResponse(false, res, {
        status: StatusCodes.NO_CONTENT,
      });
    } catch (error) {
      return buildResponse(error, res);
    }
  },
};
