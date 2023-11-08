import { useParams } from "react-router-dom"

export const Table = () => {
    const { tablename } = useParams();
    return <div>
        Table { tablename }
    </div>
}
