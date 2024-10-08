import { useParams } from "react-router"

const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent 
            {...props}
            params={params}
        />

    )
}

export default withRouter;