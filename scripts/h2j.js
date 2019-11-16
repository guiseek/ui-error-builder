String.prototype.toHtmlEntities = function() {
  return this.replace(/./gm, function(s) {
    return "&#" + s.charCodeAt(0) + ";";
  });
};

/**
 * Create string from HTML entities
 */

String.fromHtmlEntities = function(string) {
  return (string + "").replace(/&#\d+;/gm, function(s) {
    return String.fromCharCode(s.match(/\d+/gm)[0]);
  });
};

const s = `
<form [formGroup]="form">
  <div class="card">
    <label for="name">
      Nome
      <br />
      <small>(required, minlength e maxlength)</small>
    </label>
    <input
      type="text"
      id="name"
      formControlName="name"
      #nameError="errorBuilder"
    />
    <div>{{ nameError.message }}</div>
  </div>
  <div class="card">
    <label for="age">
      Idade
      <br />
      <small>(required, min e max)</small>
    </label>
    <input
      type="number"
      id="age"
      formControlName="age"
      #ageError="errorBuilder"
    />
    <div>{{ ageError.message }}</div>
  </div>
  <div class="card">
    <label for="email">
      Email
      <br />
      <small>(required e email)</small>
    </label>
    <input
      type="email"
      id="email"
      formControlName="email"
      #emailError="errorBuilder"
    />
    <div>{{ emailError.message }}</div>
  </div>
  <div class="card">
    <label for="email">
      Letras
      <br />
      <small>(required, pattern)</small>
    </label>
    <input
      type="text"
      id="pattern"
      [messages]="messages"
      formControlName="pattern"
      #patternError="errorBuilder"
    />
    <div>{{ patternError.message }}</div>
  </div>
</form>`;

console.log(s.toHtmlEntities());
