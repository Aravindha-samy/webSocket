import socketIO, { Socket } from 'socket.io';
import { User } from '../User';

export const disconnectClient = (client: Socket, io: socketIO.Server) => {
  client.on('disconnect', () => {
    User.removeUser(client.id);
    io.emit('users-online', User.getUsers());
  });
};

export const addUserOnline = (client: Socket, io: socketIO.Server) => {
  client.on('add-user', (payload) => {
    payload.id = client.id;
    User.addUser(payload);
    io.to(client.id).emit('user-id', client.id);
    io.emit('users-online', User.getUsers());
  });
};
export const removeUserOnline = (client: Socket, io: socketIO.Server) => {
  client.on('exit', () => {
    User.removeUser(client.id);
    io.emit('users-online', User.getUsers());
  });
};