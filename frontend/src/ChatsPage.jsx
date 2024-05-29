import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style= {{height: '100vh'}} >
                <PrettyChatWindow
                    projectId="1ff64e4c-98de-4bda-b3ae-6accac29425c"
                    username={props.user.username}
                    secret={props.user.secret}
                    style={{ height: '100%' }}
                />
        </div>
    )
}
export default ChatsPage