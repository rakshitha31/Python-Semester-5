from flask import Flask,render_template,url_for,session,redirect,request
app=Flask(__name__)

app.secret_key="secret"

@app.route("/", methods=["GET","POST"])
def atm():

	try:
		balance=session["balance"]
	except KeyError:
		balance=session["balance"]=8000
	if(request.method=="GET"):
		return render_template('atm.html',balance=balance,msg=" ")
	if(request.method=="POST"):
		if(request.form["action"]=='Withdraw'):
			if(int(request.form["amount"])<0):
				msg="Amount is negative idiot!"
				return render_template('atm.html',balance=balance,msg=msg)
			elif(int(request.form["amount"])>5000):
				msg="Too much greedy da"
				return render_template('atm.html',balance=balance,msg=msg)
			else:
				balance=balance-int(request.form["amount"])
				session["balance"]=balance
				msg="Withdrawn"
				return render_template('atm.html',balance=balance,msg=msg)
		elif(request.form["action"]=="Deposit"):
			balance=balance+int(request.form["amount"])
			session["balance"]=balance
			msg="Deposited"
			return render_template('atm.html',balance=balance,msg=msg)
if __name__=='__main__':
	app.run(debug=True)
