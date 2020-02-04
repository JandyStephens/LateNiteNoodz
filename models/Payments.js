module.exports = function(sequelize, DataTypes) {
    var Payments = sequelize.define("payment", {
      
      payment: {
        type: DataTypes.INTEGER,
        allowNull: true
        //TODO:  Does INT allow for multiple payment as inputs?  Or is there a different attribute required?
      }
    });
  
    Payments.associate = function(models) {
      // Associating Author with Posts
      Payments.belongsTo(models.User, {
        foreignKey: {
            name: 'userId',
            autoIncrement:  true,
          },
        onDelete: "cascade"
      });
    };
    return Payments;
  };