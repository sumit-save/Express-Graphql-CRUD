const users = [];

const rootValue = {
    specificUser: ({ id }) => {
        return users.find((user) => user.id == id);
    },
    allUsers: () => {
        return users;
    },
    createUser: ({ input }) => {
        const newObj = {
            id: input.id,
            name: input.name,
            email: input.email,
            address: input.address,
            isVerified: input.isVerified,
            createdAt: input.createdAt
        };
        users.push(newObj);
        return newObj;
    },
    updateUser: ({ input }) => {
        const upObj = {
            id: input.id,
            name: input.name,
            email: input.email,
            address: input.address,
            isVerified: input.isVerified,
            createdAt: input.createdAt
        };
        users.pop();
        users.push(upObj);
        return upObj;
    },
    removeUser: ({ id }) => {
        const newObj = users.find((user) => user.id == id);
        users.pop();
        return newObj;
    }
};

module.exports = rootValue;
