module.exports = function(sequelize, DataTypes) {
    var Photos = sequelize.define("photos", {
      // Giving the Author model a name of type STRING
      photos: {
        type: DataTypes.STRING,
        allowNull: true
        //TODO:  Does INT allow for multiple years as inputs?  Or is there a different attribute required?
      }
    });
  
    Photos.associate = function(models) {
      // Associating Author with Posts
      Photos.belongsTo(models.User, {
          //TODO:  is this where we add the foreign key or call it in the association??
        foreignKey: {
            name: 'userId',
        },
        onDelete: "cascade"
      });
      Photos.belongsTo(models.Year, {
        foreignKey: {
            name: 'yearId',
          },
        onDelete: "cascade"
        
      });
    };
    return Photos;
  };