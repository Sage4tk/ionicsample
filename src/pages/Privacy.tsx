import { IonContent, IonPage } from "@ionic/react"
import Container from "../components/shared/Container"
import DummyScreen from "../components/shared/DummyScreen"

const Privacy:React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Container>
                    <DummyScreen title="Privacy Policy Page" />
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default Privacy;