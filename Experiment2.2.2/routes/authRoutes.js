router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ✅ Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    // ✅ Create user
    const user = await User.create({ name, email, password });

    res.status(201).json({
      message: "User registered successfully",
      user
    });

  } catch (error) {

    // 🔥 THIS PREVENTS CRASH
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    console.error("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Server error"
    });
  }
});