module.exports = function(sequelize, DataTypes) {
    var Payments = sequelize.define("payment", {
      // Giving the Author model a name of type STRING
      payment: {
        type: DataTypes.INTEGER,
        allowNull: true
        //TODO:  Does INT allow for multiple years as inputs?  Or is there a different attribute required?
      }
    });
  
    Payments.associate = function(models) {
      // Associating Author with Posts
      Payments.belongsTo(models.User, {
        onDelete: "cascade"
      });
    };
    return Payments;
  };