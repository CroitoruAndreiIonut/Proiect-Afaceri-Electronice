import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">RON {item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Cosul tau</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (RON)</span>
                                <strong>RON {total}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Cod de reducere" />
                                <button type="submit" className="btn btn-secondary">Aplica</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Adresa de facturare</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Prenume</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Ion" value="" required="" />
                                    <div className="invalid-feedback">
                                        Prenumele nu este valid.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Nume de familie</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Popescu" value="" required="" />
                                    <div className="invalid-feedback">
                                        Numele de familie nu este valid.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Nume de utilizator</label>
                                    <div className="input-group has-validation">
                                        
                                        <input type="text" className="form-control" id="username" placeholder="popescu_ion" required="" />
                                        <div className="invalid-feedback">
                                            Numele de utilizator este necesar.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="popescuion@gmail.com" />
                                    <div className="invalid-feedback">
                                        Introdu o adresa de email valida.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Adresa</label>
                                    <input type="text" className="form-control" id="address" placeholder="Bulevardul Unirii nr.10" required="" />
                                    <div className="invalid-feedback">
                                        Introdu adresa la care sa se efectueze livrarea.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Adresa 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Bloc etaj apartament" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Tara</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Alege...</option>
                                        <option>Albania</option>
                                        <option>Andorra</option>
                                        <option>Armenia</option>
                                        <option>Austria</option>
                                        <option>Azerbaidjan</option>
                                        <option>Belarus</option>
                                        <option>Belgia</option>
                                        <option>Bosnia și Herțegovina</option>
                                        <option>Bulgaria</option>
                                        <option>Croația</option>
                                        <option>Cipru</option>
                                        <option>Cehia</option>
                                        <option>Danemarca</option>
                                        <option>Estonia</option>
                                        <option>Finlanda</option>
                                        <option>Franța</option>
                                        <option>Georgia</option>
                                        <option>Germania</option>
                                        <option>Grecia</option>
                                        <option>Ungaria</option>
                                        <option>Islanda</option>
                                        <option>Irlanda</option>
                                        <option>Italia</option>
                                        <option>Kazahstan</option>
                                        <option>Kârgâzstan</option>
                                        <option>Letonia</option>
                                        <option>Liechtenstein</option>
                                        <option>Lituania</option>
                                        <option>Luxemburg</option>
                                        <option>Macedonia de Nord</option>
                                        <option>Malta</option>
                                        <option>Moldova</option>
                                        <option>Muntenegru</option>
                                        <option>Olanda</option>
                                        <option>Norvegia</option>
                                        <option>Polonia</option>
                                        <option>Portugalia</option>
                                        <option>România</option>
                                        <option>Rusia</option>
                                        <option>Serbia</option>
                                        <option>Slovacia</option>
                                        <option>Slovenia</option>
                                        <option>Spania</option>
                                        <option>Suedia</option>
                                        <option>Elveția</option>
                                        <option>Turcia</option>
                                        <option>Ucraina</option>
                                        <option>Regatul Unit</option>
                                        <option>Vatican</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Te rog sa alegi o tara valida.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Judet</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Alege...</option>
                                        <option>Alba</option>
                                        <option>Arad</option>
                                        <option>Argeș</option>
                                        <option>Bacău</option>
                                        <option>Bihor</option>
                                        <option>București</option>
                                        <option>Caraș-Severin</option>
                                        <option>Cluj</option>
                                        <option>Covasna</option>
                                        <option>Dâmbovița</option>
                                        <option>Galați</option>
                                        <option>Giurgiu</option>
                                        <option>Gorj</option>
                                        <option>Glența</option>
                                        <option>Ialomița</option>
                                        <option>Ilfov</option>
                                        <option>Inquam</option>
                                        <option>Iasi</option>
                                        <option>Mehedinți</option>
                                        <option>Mureș</option>
                                        <option>Neamț</option>
                                        <option>Olt</option>
                                        <option>Prahova</option>
                                        <option>Sălaj</option>
                                        <option>Sibiu</option>
                                        <option>Suceava</option>
                                        <option>Teleorman</option>
                                        <option>Timiș</option>
                                        <option>Vaslui</option>
                                        <option>Vâlcea</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Te rog sa alegi un judet valid.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Cod postal</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Codul postal este necesar.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Adresa de livrare este la fel ca cea de facturare.</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Salveaza datele pentru tranzactii viitoare.</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Plata</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                    <label className="form-check-label" htmlFor="credit">Card de credit</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Card de debit</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">Paypal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Nume detinator card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="POPESCU ION" required="" />
                                    <small className="text-muted">Numele complet asa cum este scris pe card</small>
                                    <div className="invalid-feedback">
                                        Acest camp este obligatoriu.
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Numar card</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="XXXXXXXXXXXXXXXX" required="" />
                                    <div className="invalid-feedback">
                                        Acest camp este obligatoriu.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Data expirare</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="LL/AA" required="" />
                                    <div className="invalid-feedback">
                                        Acest camp este obligatoriu.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="XXX" required="" />
                                    <div className="invalid-feedback">
                                        Acest camp este obligatoriu.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continua catre checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
