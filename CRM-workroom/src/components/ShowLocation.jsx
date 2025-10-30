import { useLocation } from "react-router-dom";

const ShowLocation = () => {
    const { pathname } = useLocation();


    return (
        <>

            {
                pathname == null ?
                    <h1 className="text-3xl font-medium">{pathname.slice(1)}</h1>
                    : <h1 className="text-3xl font-medium">Dashboard</h1>
            }

        </>

    );
}

export default ShowLocation;
