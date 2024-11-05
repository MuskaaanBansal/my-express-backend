const userService = require('../services/userService');
const User = require('../models/userModel');

describe('User Service', () => {
  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it('should create a user', async () => {
    const user = await userService.createUser({ name: 'John Doe', email: 'john@example.com' });
    expect(user).toHaveProperty('id');
    expect(user.name).toBe('John Doe');
  });

  // Add more tests as needed
});
