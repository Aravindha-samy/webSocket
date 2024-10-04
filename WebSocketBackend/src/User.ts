export class User{

    private static userList: { id: string; name: string }[] = [];
    private constructor(){}

    public static getUsers():any{
     return User.userList;
    }

    public static addUser(user:any){
        if(User.userList.find(x=>x.id==user.id)){
            return ;
        }
        User.userList.push(user);
    }

    public static removeUser(id:any){
        User.userList=User.userList.filter(x=>x.id!=id);
    }
}