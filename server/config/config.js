const config = {
    PORT: process.env.PORT || 5000,
    DB_CONNECTION: `mongodb+srv://Weefle:Mrmongodb650@cluster0.dks4b.mongodb.net/?retryWrites=true&w=majority`,
    SECRET: 'badumts',
    SALT: 10,
    COOKIE_NAME: 'USER_SESSION',
    CLOUDINARY_NAME: 'dhobbyjcg',
    CLOUDINARY_API_KEY: 829669633474859,
    CLOUDINARY_API_SECRET: 'vzWU78lW80hAmC1f9AWuRmSQ1fE',
    CLOUDINARY_STORAGE: 'pza5zln6'
}

module.exports = config;
