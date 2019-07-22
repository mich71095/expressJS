var express = require('express');
var router = express.Router();

const graphql = require('graphql');
const schema = require('../schema/schema');


/*
* GET books listing
*/
router.get('/', (req, res, next)=> {
	let query = `
		{
			authors {
				id
				name
				book {
					name
					pages
				}
			}
		}
	`;

	graphql.graphql(schema, query)
	.then( result => {
		res.json(result);
	});
})

module.exports = router;