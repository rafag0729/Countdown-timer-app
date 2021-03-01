    import React from 'react'

export const TimeAdjuster = () => {
    return (
        <div className="time_adjuster">

            <h3>PLEASE SET THE TIMER</h3>

            <div className="time_set"> 
                <form>
                    <div>
                        <input type="number" name="days" placeholder="--"/> D
                    </div>

                    <div>
                        <input type="number" name="hours"  placeholder="--"/> H
                    </div>

                    <div>
                        <input type="number" name="minutes"  placeholder="--"/> M
                    </div>

                    <div>
                        <input type="number" name="seconds"  placeholder="--"/> S
                    </div>
                </form>
            </div>

            <div className="time_options">
                <button>DIAS</button>
                <button>HORAS</button>
                <button>MINUTOS</button>
                <button>SEGUNDOS</button>
            </div>

            <div className="time_number">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>

            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
            
        </div>
    )
}
