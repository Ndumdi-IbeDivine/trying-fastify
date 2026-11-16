const randomUUID = require("crypto")
let items = require("../items-db");

// To get all items
const getAllItems = async (request, reply) => {
  reply.send(items);
};

// To get a single item by ID
const getItemById = async (request, reply) => {
  const { id } = request.params
  const item = items.find((item) => item.id === parseInt(id))
  reply(item)
}

// To create new item
const createItem = async (request, reply) => {
  const { name } = request.body
  const newItem = {
    id: randomUUID.randomUUID(),
    name,
  }

  items.push(newItem)
  reply(newItem)
}

// To update an existing item by ID
const updateItemById = async (request, reply) => {
  const { id } = request.params
  const { name } = request.body
  const itemIndex = items.findIndex((item) => item.id === parseInt(id))
  if (itemIndex !== -1) {
    items[itemIndex].name = name
    reply(items[itemIndex])
  } else {
    reply({ error: "Item not found" })
  }
}

// To delete an item by ID
const deleteItemById = async (request, reply) => {
  const { id } = request.params
  const itemIndex = items.findIndex((item) => item.id === parseInt(id))
  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1)
    reply(deletedItem[0])
  } else {
    reply({ error: "Item not found" })
  }
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItemById,
  deleteItemById,
}
