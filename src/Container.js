import React from "react";

const Container = ({ children }) => {
    return (
        <div style={{ margin: 20, padding: 20, border: "1px solid #ccc" }}>
            {children}
        </div>
    );
};

export default Container;
