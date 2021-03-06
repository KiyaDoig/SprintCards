import cards from "./data/cards";

export default ({ current, caption, onClick, name = "", disabled, hide = false }) => {
    // Do things here

    const handleOnClick = () => {
        onClick(caption);
    };

    const Icon = () => {
        if (caption !== "0") {
            const icon = cards.filter((e) => e.caption === caption)[0].icon;
            return icon();
        }

        return <div></div>;
    };

    const Caption = () => {
        return <div>{caption !== "0" ? caption : ""}</div>;
    };

    return (
        <>
            <>
                <button
                    className={caption !== "0" && hide ? "hello" : ""}
                    aria-current={current === caption}
                    onClick={handleOnClick}
                    disabled={disabled}
                >
                    <div>
                        <Icon />
                    </div>
                    <div>
                        <Caption />
                    </div>
                </button>
                <p>{name}</p>
            </>
            <style jsx>{`
                @keyframes example {
                    from {
                        transform: rotateY(0);
                        color: red;
                    }
                    to {
                        transform: rotateY(1turn);
                        color: blue;
                    }
                }

                button {
                    border: 15px solid #487eb0;
                    border-radius: 5px;
                    width: 170px;
                    height: 260px;
                    background-color: white;
                    font-size: 60px;
                    color: #333;
                    cursor: pointer;
                    position: relative;
                }

                button:hover {
                    transform: scale(1.2)
                }

                button.hello {
                    animation: example 1s infinite;
                }

                button.hello > div {
                    opacity: 0;
                }

                button div:first-of-type {
                    color: #c23616;
                }

                div:first-of-type {
                }

                button[aria-current="true"] {
                    border: 15px solid #c23616;
                    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.8);
                }

                button[disabled] {
                    opacity: 0.4;
                }

                p {
                    font-size: 24px;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-align: center;
                }
            `}</style>
        </>
    );
};
