
import { pool } from '../db.js'

export const getMenus = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM clientes')
    res.json(rows)
}

export const getMenu = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [req.params.id])
    if (rows.length <= 0) {
        return res.status(404).json({ message: 'Menu no encontrado' })
    }
    res.send(rows[0])
}

export const createMenu = async (req, res) => {
    const { name, lastaname } = req.body
    const [rows] = await pool.query('INSERT INTO clientes (nombre, apellido) VALUES (?, ?)', [name, lastaname])

    res.send({
        id: rows.insertId,
        name,
        lastaname
     })
}

export const updateMenu = async (req, res) => {
    const { id } = req.params
    const { name, lastaname } = req.body

    const [ result ] = await pool.query('UPDATE clientes SET nombre = IFNULL(?, name), apellido = IFNULL(?, lastname) WHERE id = ?', [name, lastaname, id])

    if (result.affectedRows <= 0) {
        return res.status(404).json({ message: 'Menu no encontrado' })
    }

    const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id])

    res.json

}

export const deleteMenu =  async (req, res) => {
    
    const [rows] = await pool.query('DELETE FROM clientes WHERE id = ?', [req.params.id])

    if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: 'Menu no encontrado' })
    }
    
    res.sendStatus(204)

}