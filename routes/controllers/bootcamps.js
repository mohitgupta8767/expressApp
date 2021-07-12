// @desc   GET all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public                  
exports.getBootcamps = (req, res, next) =>{         //Middleware function
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc   GET single bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public                  
exports.getBootcamp = (req, res, next) =>{         //Middleware function
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

// @desc   Create new bootcamp
// @route   POST /api/v1/bootcamp
// @access  Private                  
exports.createBootcamp = (req, res, next) =>{         //Middleware function
    res.status(200).json({ success: true, msg: 'Create bootcamp' });
}

// @desc   Update bootcamps
// @route   PUT /api/v1/bootcamps/:id
// @access  Private                  
exports.updateBootcamp = (req, res, next) =>{         //Middleware function
    res.status(200).json({ success: true, msg: 'Update bootcamp' });
}

// @desc   Delete bootcamp
// @route   Delete /api/v1/bootcamps/:id
// @access  Private                  
exports.delateBootcamp = (req, res, next) =>{         //Middleware function
    res.status(200).json({ success: true, msg: 'Delete bootcamps' });
}