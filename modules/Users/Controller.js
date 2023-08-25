const connection = require("../../config/config");

const getUsers = (req, res) => {
    connection.execute(`SELECT * FROM users`, (err, data) => {
        if (err)
            res.json({ message: "error", error: err })
        else
            res.json({ message: "success", data })
    })
}

const addUsers = (req, res) => {
    const { first_name, last_name, email, password, location, dept, is_admin } = req.body;

    connection.execute(`INSERT INTO users (first_name, last_name, email, password, location, dept, is_admin) values ('${first_name}', '${last_name}', '${email}', '${password}', '${location}', '${dept}', ${is_admin})`, (err, data) => {
        if (err)
            res.json({ message: "error", error: err })
        else
            res.json({ message: "Added", data })
    })
}

const updateUsers = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, location, dept } = req.body;
    const q = `UPDATE users set first_name = '${first_name}', last_name = '${last_name}', email = '${email}', password = '${password}', location = '${location}', dept= '${dept}' WHERE id= ${id}`;
    connection.execute(q, (err, data) => {
        if (err) throw err;
        res.json({ message: "Updated", data });
    })
}

const deleteUsers = (req, res) => {
    const { id } = req.params;
    const q = `DELETE FROM users WHERE id= ${id}`;
    connection.execute(q, (err, data) => {
        if (err) throw err;
        res.json({ message: "Deleted", data });
    })
}

module.exports = { getUsers, addUsers, updateUsers, deleteUsers };
