module.exports = function(sequelize, DataTypes) {
  var Years = sequelize.define("years", {
    
    years: {
      type: DataTypes.INTEGER,
      allowNull: true
      //TODO:  Does INT allow for multiple years as inputs?  Or is there a different attribute required?
    }
  });

  Years.associate = function(models) {
    // Associating Years with User
    Years.hasMany(models.User, {
      onDelete: "cascade"
    });
  };
  return Years;
};
