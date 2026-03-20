module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId'
    });

    Comment.belongsTo(models.Lesson, {
      foreignKey: 'lessonId'
    });
  };

  return Comment;
};