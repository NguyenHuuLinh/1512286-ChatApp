import firebase from 'firebase'



export const showUser = (uid, name, email, avatar) =>{
    const dataUser= firebase.database().ref('/User' ).once('value').then(snapshot =>{
        const user = snapshot.val();
        console.log(user);

        const findFriend = user.filter( f =>{
            return f.id === uid ? {
                ...f
            }: null
        })
        console.log(findFriend)
        if(findFriend.length === 0){
            console.log('aaaa')
            firebase.database().ref('User').set([
                ...user,
                {
                    id: uid,
                    email: email,
                    avatar: avatar,
                    name: name
                }
            ])
        }
      });
}