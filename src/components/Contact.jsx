import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Vrei sa ne pui o intrebare?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/2250206.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Nume</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Popescu Ion"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Adresa de email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="popescuion@gmail.com"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Introdu textul</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Care este termenul de livrare?"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Trimite</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
