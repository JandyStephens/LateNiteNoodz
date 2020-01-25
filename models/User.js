var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      isEmail: true
    }, 
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    playaName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    years: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    blurb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN  ,
      allowNull: false,
      defaultValue: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN  ,
      allowNull: false,
      defaultValue: false,
    }
  });

  User.associate = function(models) {
    
    User.hasMany(models.Payments, {
      onDelete: "cascade"
    });

    User.hasMany(models.Photos, {
      onDelete: "cascade"
    });

    User.hasMany(models.Years, {
      onDelete: "cascade"
    });
    User.hasMany(models.bookRequest, {
      onDelete: "cascade"
    });
  };
  User.beforeCreate(function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });


  return User;
};
