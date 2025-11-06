function UserGreeting(prop){
        // if(prop.isLooged){
        //     return <h2>Hello {prop.username}</h2>
        // }
        // else{
        //     return <h2>Try to log in {prop.username}</h2>
        // }

        return(prop.isLooged ? <h2>Hello {prop.username}</h2> : <h2>Try again later</h2>)
}

export default UserGreeting;