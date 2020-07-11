module.exports = function (sequelize, DataTypes) {
    let Bathroom = sequelize.define("bathroom", {
        place_id: DataTypes.INTEGER,
        last_verified: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_address: {
            type: DataTypes.STRING
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        needs_key: DataTypes.BOOLEAN,
        gender_neutral: DataTypes.BOOLEAN,
        handicap_accessible: DataTypes.BOOLEAN,
        has_water: DataTypes.BOOLEAN,
        has_soap: DataTypes.BOOLEAN,
        has_paper: DataTypes.BOOLEAN,
        has_mirror: DataTypes.BOOLEAN,
        thumbs_up: DataTypes.INTEGER,
        thumbs_down: DataTypes.INTEGER
    });
    return Bathroom;
};