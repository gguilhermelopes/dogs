import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Error from "../Interface Elements/Error";
import { PASSWORD_RESET } from "../../api";
import Head from "../Interface Elements/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm("password");
  const passwordConfirm = useForm("");
  const { error, loading, request } = useFetch();
  const [success, setSuccess] = React.useState(false);

  function passwordCheck() {
    if (password.value && password.value === passwordConfirm.value) return true;
    else return false;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) setSuccess(true);
    }
  }
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <section className="animeLeft">
      <Head title="Resetar senha" />

      <h1 className="title">Resete sua senha</h1>
      {success ? (
        <p style={{ color: "#4c1" }}>Senha alterada com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Nova senha"
            type="password"
            name="password"
            {...password}
          />
          <Input
            label="Confirmar nova senha"
            type="password"
            name="passwordConfirm"
            {...passwordConfirm}
          />

          {passwordCheck() ? (
            loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Resetar senha</Button>
            )
          ) : (
            <Button disabled>Resetar senha</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
