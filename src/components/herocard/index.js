import React from "react";
import Button from "../Button";
import Fieldset from "../fieldset";
import Input from "../Input";
import Label from "../label";
import "./styles.css";

const HeroCard = () => {
  return (
    <div className="hero-card">
      <div className="hero-card-grid">
        <Fieldset>
          <Label>Smart Chain BNB Amount</Label>
          <Input variant="secondary" />
        </Fieldset>
        <Fieldset>
          <Label>Tokens</Label>
          <Input placeholder="0" variant="secondary" />
        </Fieldset>
      </div>
      <div className="quote">Tokens will be automatically sent after TGE</div>

      <div className="hero-card-grid buttons">
        <Button variant="secondary">Connect Wallet</Button>
        <Button>Approve</Button>
      </div>
    </div>
  );
};

export default HeroCard;
