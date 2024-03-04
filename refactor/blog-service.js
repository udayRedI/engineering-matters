const { MongoClient } = require('mongodb');

let db;

// Function to connect to the database
async function connectToDatabase() {
  const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to the database');
    db = client.db('blogDB');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// Function to list blogs
async function listBlogs() {
  try {
    const blogs = await db.collection('blogs').find().toArray();
    return blogs;
  } catch (error) {
    console.error('Error listing blogs:', error);
    return [];
  }
}

// Function to check if a blog exists by title
async function checkBlogExistsByTitle(title) {
  try {
    const blog = await db.collection('blogs').findOne({ title });
    return !!blog;
  } catch (error) {
    console.error('Error checking blog existence:', error);
    return false;
  }
}

// Function to create a new blog
async function createBlog(title, content) {
  try {
    const blogExists = await checkBlogExistsByTitle(title);
    if (blogExists) {
      return { success: false, message: 'Blog with this title already exists.' };
    }

    await db.collection('blogs').insertOne({ title, content });
    return { success: true, message: 'Blog created successfully.' };
  } catch (error) {
    console.error('Error creating blog:', error);
    return { success: false, message: 'Error creating blog.' };
  }
}

// Expose APIs
const blogService = {
  listBlogs,
  checkBlogExistsByTitle,
  createBlog
};
