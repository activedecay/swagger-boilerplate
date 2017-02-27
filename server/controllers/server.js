const end = (req, res, fn, result) => {
  log(req, fn);
  if (result) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else res.end();
}

const log = (req, fn) => {
  console.info(`operationId:${fn}, req params:${Object.keys(req.swagger.params)}`);
}

const server = {
  end,
  log,
}

module.exports = server