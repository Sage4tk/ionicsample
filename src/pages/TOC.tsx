import { IonContent, IonPage } from "@ionic/react"
import Container from "../components/shared/Container"
import DummyScreen from "../components/shared/DummyScreen"

const TOC:React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Container>
                    <DummyScreen title="Terms and Conditions Page" />
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default TOC;