const cds = require('@sap/cds')
const { Authors } = cds.entities

/** Service implementation for CatalogService */
module.exports = cds.service.impl(function () {

    this.on('UPDATE', 'Authors', async (req) => {
        const tx = cds.transaction(req)

        const { user, data } = req

        console.log('UPDATE', data, user)

        return tx.run(

            //ID;name;dateOfBirth;placeOfBirth;dateOfDeath;placeOfDeath
            UPDATE(Authors)
                .set({
                    name: data.name
                })
                .where({
                    ID: data.ID
                })

        )
    })

})