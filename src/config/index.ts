import dotenv from 'dotenv'
dotenv.config() 
export default{
    port:process.env.PORT,
    URL:process.env.DB_URL
}