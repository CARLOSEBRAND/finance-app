import React from 'react';
import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import { withRouter } from 'react-router-dom'

import 'bootswatch/dist/slate/bootstrap.css'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        repitasenha: ''
    }

    salvar = () => {
        console.log(this.state.nome);
        console.log(this.state.email);
        console.log(this.state.senha);
        console.log(this.state.repitasenha);
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render() {
        return (

            <Card title="Cadastro de Usuário">
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='bs-component'>
                            <fieldset>
                                <FormGroup label='Nome: *' htmlFor="inputNome">
                                    <input type="text"
                                        value={this.state.nome}
                                        onChange={e => this.setState({ nome: e.target.value })}
                                        id='inputNome'
                                        className='form-control'
                                        name='nome'
                                        placeholder='Digite o Nome'
                                    />
                                </FormGroup>
                                <FormGroup label='Email: *' htmlFor="inputEmail">
                                    <input type="email"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                        id='inputEmail'
                                        className='form-control'
                                        name='email'
                                        aria-describedby='emailHelp'
                                        placeholder='Digite o Email'
                                    />
                                    <small id="emailHelp"
                                        className="form-text text-muted">Não divulgamos o seu email.</small>
                                </FormGroup>
                                <FormGroup label='Senha: *' htmlFor="inputSenha">
                                    <input type="password"
                                        value={this.state.senha}
                                        onChange={e => this.setState({ senha: e.target.value })}
                                        id='inputSenha'
                                        className='form-control'
                                        name='senha'
                                        placeholder='Digite uma Senha'
                                    />
                                </FormGroup>
                                <FormGroup label='Repita a Senha: *' htmlFor="inputRepitasenha">
                                    <input type="password"
                                        value={this.state.repitasenha}
                                        onChange={e => this.setState({ repitasenha: e.target.value })}
                                        id='inputRepitasenha'
                                        className='form-control'
                                        name='repitasenha'
                                        placeholder='Repita sua senha'
                                    />
                                </FormGroup>

                                <button type="button" onClick={this.salvar} className="btn btn-primary">Salvar</button>
                                <button type="button" onClick={this.cancelar} className="ms-4 btn btn-secondary">Voltar</button>

                            </fieldset>
                        </div>
                    </div>
                </div>
            </Card>

        )
    }
}

export default withRouter( CadastroUsuario );