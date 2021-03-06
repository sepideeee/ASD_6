import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation UserLogoutMutation($input: UserLogoutInput!) {
        userLogout(input: $input){
            ok
            errors{
                nonFieldErrors
            }
        }
    }
`;

export default (callback) => {
    const variables = {
        input: {
            clientMutationId: ""
        }
    };
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.userlogout);
            },
            onError: err => console.error(err),
        },
    )
}