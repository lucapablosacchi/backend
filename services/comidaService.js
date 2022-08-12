import pool from "../dbconfig.js";


class ComidaService {

    getAll = async () => {
        try {
            await pool.connect();
            const result = await pool
                .query("SELECT * FROM comidas");
            return result.rows;
        } catch (error) {
            console.log(error);
        }
    }



    getById = async (id) => {
        console.log(id)
        try {
            await pool.connect();
            const result = await pool
                .query(`SELECT * FROM comidas WHERE "idComida"='${id}'`);
            return result.rows;
        } catch (error) {
            console.log(error);
        }
    }
     

//     insert = async (nombre, apellido, usuario, contrasenia, fechaNacimiento, mail, diabetesActual,contactoE,tipoD,rol,tipoS,obra,medico) => {
//         console.log(contactoE)
//         try {
//             await pool.connect();
//             const result = await pool
//             .query(`INSERT INTO paciente (nombre,apellido,usuario,contrasenia,"fechaNacimiento",mail,"diabetesActual","fkContactoEmergencia","fkTipoDiabetes","fkRol","fkTipoSangre","fkObraSocial","fkMedico")
//                     VALUES ('${nombre}', '${apellido}', '${usuario}', '${contrasenia}', '${fechaNacimiento}', '${mail}','${diabetesActual}',${contactoE},${tipoD},${rol},${tipoS}, ${obra}, ${medico})`);
//                     return result.rowCount        
//         }
//         catch (err) {
            
//             console.log(err)
//             throw err 
//         }
// }



}
export default ComidaService;