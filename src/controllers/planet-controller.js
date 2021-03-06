module.exports = (Planet) => {
  return {
    getAll(req, res) {
      var orderBy = req.query && req.query.orderBy ? req.query.orderBy : 'distanceFromParent'
      var order = req.query && req.query.order ? [orderBy, req.query.order] : [orderBy]
      var options = {
        order: [
          order,
        ],
      }

      return Planet
        .findAll(options)
        .then((planets) => {
          res.status(200).send(planets)
        })
        .catch((error, b) => {
          console.log('');
          console.log('ERROR:', error);
          console.log('b:', b);
          console.log('');

          res.status(400).send(error)
        })
    },

    getById(req, res) {
      return Planet
        .findById(req.params.planetId)
        .then((planet) => {
          if (!planet) {
            return res.status(404).send({
              message: 'Planet Not Found',
            });
          }
          return res.status(200).send(planet)
        })
        .catch((error) => res.status(400).send(error))
    },

    create(req, res) {
      return Planet.create({
        id: req.body.id,
        name: req.body.name,
        diameter: req.body.diameter,
        mass: req.body.mass,
        gravity: req.body.gravity,
        density: req.body.density,
        rotationPeriod: req.body.rotationPeriod,
        lengthOfDay: req.body.lengthOfDay,
        distanceFromParent: req.body.distanceFromParent,
        orbitalPeriod: req.body.orbitalPeriod,
        orbitalVelocity: req.body.orbitalVelocity,
        orbitalInclination: req.body.orbitalInclination,
        axialTilt: req.body.axialTilt
      })
      .then((planet) => {
        res.send(planet)
      })
      .catch((error) => res.status(400).send(error))
    }
  };
};
