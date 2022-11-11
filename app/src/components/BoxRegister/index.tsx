import * as S from "./style";
import { useState } from "react";
import logo from "assets/icons/gamer.svg";
import ButtonLarge from "components/ButtonLarge";
import { ButtonRegister } from "components/ButtonRegister/style";

const BoxRegister = () => {
    const [fields, setfields] = useState({
        nome: "",
        email: "",
        senha: "",
    });

    const handleFields = (event: { target: { name: any; value: any } }) => {
        setfields({ ...fields, [event.target.name]: event.target.value });
    };

    return (
        <S.BoxRegister>
            <S.BoxRegisterLogo>
                <S.BoxRegisterLogoText>
                    <span>Web</span>
                    <span>Tech</span>
                </S.BoxRegisterLogoText>
            </S.BoxRegisterLogo>
            <S.BoxRegisterForm>
                <input
                    value={fields.nome}
                    placeholder="Nome"
                    onChange={handleFields}
                    type="text"
                    required
                />
                <input
                    placeholder="E-mail"
                    value={fields.email}
                    onChange={handleFields}
                    type="email"
                    required
                />
                <input
                    placeholder="Senha"
                    value={fields.senha}
                    onChange={handleFields}
                    autoComplete="off"
                    type="password"
                    required
                />
                <ButtonRegister href='/'>CADASTRAR</ButtonRegister>
            </S.BoxRegisterForm>
        </S.BoxRegister>
    );
};

export default BoxRegister;
