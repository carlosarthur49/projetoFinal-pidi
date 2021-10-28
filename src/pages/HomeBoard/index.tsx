import { Container, HomeIntro } from './styles';
import HomeImg from '../../assets/imageHome.png';

export function HomeBoard() {

    return (
        <Container>
            <HomeIntro>
                <h5>
                    Lorem ipsum dolor sit amet. Non nulla possimus et earum
                     quidem hic quas reiciendis sit voluptate quas non quia 
                     dolores sit atque molestiae
                </h5>

                <button type="button">Comece a usar</button>
            </HomeIntro>

            <img src={HomeImg} alt="Imagem Intro" />
        </Container>
    );
}