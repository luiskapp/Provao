import { ReactComponent as Add } from "assets/icons/add.svg";
import EditUser from "components/EditUsers";
import { HTMLAttributes } from "react";
import { users } from 'mocks/users'
import * as S from "./style";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;

const ManageUsers = ({ ...props }: ManageUsersProps) => {
  return (
    <S.ManageUsers {...props}>
      <S.ManageUsersTitle>Gerenciar Usuários</S.ManageUsersTitle>
      <S.ManageUsersSub>
        <b>Usuários</b>
      </S.ManageUsersSub>
      <S.ManageUsersContent>
        <S.ManageUsersContentAdd>
          <Add />
          <span>Adicionar Usuário</span>
        </S.ManageUsersContentAdd>
        <S.ManageUsersContentAdd>
          <S.EditForm type="text" placeholder="Nome" />
          <S.EditForm type="text" placeholder="Nome de usuário" />
          <S.EditForm type="password" placeholder="Senha" />
        </S.ManageUsersContentAdd>
          <EditUser
          />
      </S.ManageUsersContent>

    </S.ManageUsers>
  );
};

export default ManageUsers;