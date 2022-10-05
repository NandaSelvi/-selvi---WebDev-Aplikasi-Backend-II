const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM selvi_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (nama) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM selvi_webdev WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM links WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getUrlByEmailTelepon = async (email, telepon) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM selvi_webdev WHERE email='${email}' and telepon='${telepon}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM links WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const insertUrl = async (nama, jenis_kelamin, angkatan, email, telepon, deskripsi) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO selvi_webdev VALUES ('${nama}', '${jenis_kelamin}', '${angkatan}', '${email}', '${telepon}', '${deskripsi}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `INSERT INTO links (url, name, description) VALUES ($1, $2, $3)`;
        // const result = await databaseQuery(query, [url, name, description]);

        if (!result) {
            throw new Error('Error inserting URL');
        }
        return {
            message: 'URL inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const bulkinsertUrl = async (params) => {
    try {
        let myArrayList = []
        JSON.parse(params,(a,b)=>{myArrayList.push(b)})
        for (let a=0;a<(myArrayList.length-1)/7;a++){
            const query = `insert into selvi_webdev values ('${myArrayList[a*7]}','${myArrayList[(a*7)+1]}','${myArrayList[(a*7)+2]}','${myArrayList[(a*7)+3]}','${myArrayList[(a*7)+4]}','${myArrayList[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error Inserting Bulk User');
            }
        }
        return {
            message: 'User Inserted successfully',
        };
        
    } catch (error) {
        return error
    }
}

const deleteUrl = async (email) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM selvi_webdev WHERE email='${email}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM links WHERE url=$1`;
        // const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const updateUrl = async (nama, deskripsi) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE selvi_webdev SET deskripsi='${deskripsi}' WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `UPDATE links SET name=$1, description=$2 WHERE url=$3`;
        // const result = await databaseQuery(query, [name, description, url]);
        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };
    } catch (error) {
        return error
    }
}

module.exports =  {
    getUrls,
    getUrlByName,
    getUrlByEmailTelepon,
    insertUrl,
    bulkinsertUrl,
    deleteUrl,
    updateUrl
}