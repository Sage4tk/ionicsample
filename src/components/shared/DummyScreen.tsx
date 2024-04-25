import { Link, useHistory } from "react-router-dom";
import { useIonRouter } from "@ionic/react";

interface IDummyScreenProps {
    title: string
}

const DummyScreen:React.FC<IDummyScreenProps> = ({
    title
}) => {
    // HOOKS
    const ionic_router = useIonRouter();
    const history = useHistory();

    const go_back = ():void => {
        if (ionic_router.canGoBack()) {
            ionic_router.goBack();
        } else {
            // if page did not start from root then replace the screen instead of popping over.
            history.replace("/")
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <button className="text-white bg-MAIN px-4 py-2 rounded-lg text-xs" onClick={go_back} >GO BACK</button>
        </div>
    )
}

export default DummyScreen;