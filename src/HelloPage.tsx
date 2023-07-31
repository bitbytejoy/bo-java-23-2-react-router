import {useParams} from "react-router-dom";

export default function HelloPage() {
    const params = useParams();
    const name = params.name;

    return (
        <h1>Hello {name}</h1>
    )
}