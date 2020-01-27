const axios = require('axios')
//const Cigar = require('../models/Cigar')

//INDEX
function index(req, res) {
  
  const jobsData = {
    adzuna: {},
    github: {},
    reed: {}
  }

  axios.get(`http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.AZID}&app_key=${process.env.AZKEY}&results_per_page=20&what=javascript%20developer&where=london&content-type=application/json`)
    .then(jobs => {
      res.status(200).send(jobs.data)
    })
    .catch(err => {
      
      res.status(400).json(err)
    })
  // Cigar
  //   .find()
  //   .populate('user')
  //   .then(cigars => res.status(200).json(cigars))
  //   .catch(err => res.status(400).json(err))
}

//CREATE
// function create(req, res, next) {
//   req.body.user = req.currentUser 
//   console.log('user creating cigar: ', req.currentUser)
//   Cigar
//     .create(req.body)
//     .then(cigar => res.status(201).json(cigar))
//     .catch(next)
// }

// //SHOW
// function show(req, res) {
//   Cigar
//     .findById(req.params.id)
//     .populate('user')
//     .populate('comments.user')
//     .then(cigar => {
//       if (!cigar) return res.status(404).json({ message: 'cigar id not found' })
//       res.status(200).json(cigar)
//     })
//     .catch(err => res.status(400).json(err))
// }

// //DELETE
// function destroy(req, res) {
//   console.log('inside destroy')
//   Cigar
//     .findById(req.params.id)
//     .then(cigar => {
//       if (!cigar.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' }) 
//       return cigar.remove()
//     })
//     .then(() => res.sendStatus(204)) 
//     .catch(err => res.status(400).json(err)) 
// }

// function update(req, res, next) {
//   console.log('inside update')
//   Cigar
//     .findById(req.params.id)
//     .then(cigar => {
//       if (!cigar) return res.status(404).json({ message: 'Not Found' })
//       if (!cigar.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
//       return cigar.set(req.body)
//     })
//     .then(cigar => cigar.save())
//     .then(cigar => res.status(202).json(cigar))
//     .catch(next)
// }

// //comment create - /cigars/:id/comments
// function commentCreate(req, res, next) {
//   req.body.user = req.currentUser
//   Cigar
//     .findById(req.params.id)
//     .then(cigar => {
//       if (!cigar) return res.status(404).json({ message: 'Not Found' })
//       console.log('Body is: ', req.body)
//       cigar.comments.push(req.body)
//       return cigar.save()
//     })
//     .then(cigar => res.status(201).json(cigar))
//     .catch(next)
// }

// //comment show - /cigars/:id/comments
// function commentShow(req, res) {
//   Cigar
//     .findById(req.params.id)
//     .populate('comments.user')
//     .then(cigar => {
//       if (!cigar) return res.status(404).json({ message: 'cigar id not found' })
//       res.status(200).json(cigar.comments)
//     })
//     .catch(err => res.status(400).json(err))
// }

// //comment delete - /cigars/:id/comments/:commentId
// function commentDelete(req, res) {
//   Cigar
//     .findById(req.params.id)
//     .then(cigar => {
//       if (!cigar) return res.status(404).json({ message: 'Not Found' })
//       if (!cigar.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
//       const comment = cigar.comments.id(req.params.commentId)
//       comment.remove()
//       return cigar.save()
//     })
//     .then(cigar => res.status(202).json(cigar))
//     .catch(err => res.json(err))
// }

module.exports = {
  index//,
  //create,
  //show,
  // destroy,
  // update,
  // commentCreate,
  // commentDelete,
  // commentShow
}