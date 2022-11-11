import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";


const EditUser = () => {
    return (
        <S.EditUser>
            <>
                <S.EditUserDetails>
                    <S.EditUserDetailsTitle>Nome</S.EditUserDetailsTitle>
                    <S.EditUserDetailsText>
                        <b>usuário: </b> {/* usuário */}
                    </S.EditUserDetailsText>
                </S.EditUserDetails>

                <S.EditUserAction>
                    <Pencil /> Editar
                </S.EditUserAction>

            </>
            <S.EditFormGroup>
                <S.EditForm
                    type="text"
                    placeholder="Nome"
                />
                <S.EditForm
                    type="text"
                    placeholder="Nome de usuário"
                />
                <S.EditForm
                    type="password"
                    placeholder="Senha"
                />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditUser>
    );
}

export default EditUser;