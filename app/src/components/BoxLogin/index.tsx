import * as S from "./style";
import logo from 'assets/icons/gamer.svg';
import ButtonLarge from "components/ButtonLarge";
import { ButtonRegister } from "components/ButtonRegister/style";


const BoxLogin = () => {
    
    return (
        <S.BoxLogin>
            <S.BoxLoginLogo>
                <S.BoxLoginLogoText>
                    <span>Web</span>
                    <span>Tech</span>
                </S.BoxLoginLogoText>
            </S.BoxLoginLogo>
            <S.BoxLoginForm>
                <input type="text"
                    placeholder="Email" />
                <input type="password"
                    placeholder="Senha"/>
                <ButtonLarge value="Entrar"
                    type="button" />
            </S.BoxLoginForm>
            <ButtonRegister href='/cadastro'>CADASTRE-SE</ButtonRegister>
        </S.BoxLogin>
    );
};

export default BoxLogin;

