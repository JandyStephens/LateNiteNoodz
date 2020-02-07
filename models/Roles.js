module.exports = function(sequelize, DataTypes) {
  var Roles = sequelize.define("roles", {
    roles: {
      type: DataTypes.string,
      allowNull: true
    }
    active:{
      type: DataTypes.BOOLEAN
    }
  });

  Roles.associate = function(models) {
    // Associating Years with User
    Roles.belongsTo(models.User, {
      onDelete: "cascade"
    });
  };
  return Roles;
};