/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3veoyD58oJijWjL3Yrik2WUKpc1daAnanx3HeS8EADz7xfASWkENixPxuooqfb9KZLRJhCfjzj1zfgUTcuniF53W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNwyNMRdXw8Qqes1YcV6bwmfU7b97WyQKzbV4NFZBP3jt4qcTkc7i7fRbSPTpgkirnt5hijTQpkAcYsubMdoDCV",
  "key1": "53dpteef9ciyai2Uyp4wnDfBJPwd5tASA5N27yLDyrwiTk2pfLcbwf1MqrnvKp6c3cgXaB3uNJFYQ7Wjch86zfmB",
  "key2": "4icTU2HSuykxzpj5AvUMN9SQwPTvsYL2egE9rHHTRan4nfRThN8fsSmosiVb2VHmfFPBX681tZ7CNyEDSifZrY5W",
  "key3": "5Fw9ew1bjPyXMSNiSTtiJvZjYFdDZ5jJ85LdZUpVFykWGgJmtEd9WZoSH8hW7WzBSQUnXY2he5m21VwZJFw7ahLx",
  "key4": "3ZYnSaar4zZ8qZSmXu2PHkPzwWsuCpyNxyX6aMG5YmbfNESQXQJJnZqS8SwzuZCSnbqZfnM54XgsLvsdxKphSAUi",
  "key5": "5FjoyDDei7q7n66wLZ2TsczqDNKaGeveAwgm3Mtad3WaLActkahgC4wymmLyFuQv6TLsVVEXcTQbNz1E7QZL9iPw",
  "key6": "2tbNKNFwgnGmQs1QF9UE1uMKSSs4W5aAsoQeMj1nA6hxXuphu3YWvJzLYKBx3VtVtrJSgYSmq1sgNEUPQMmpY4th",
  "key7": "2ZG9RaVE9S5Vx7drgtEWQFseHzjYqxyZpmrbKDqjUMXqGpcp2mrsZVDDnBRGeiSzWMoJDAPudbhbRcHjEeyrjTW7",
  "key8": "3i4XTrDH6sHqiQH5kn3RUnc4EcQW9eajA7LGmuioQrd9ryAbSRawGTTUBAQvbnERqwydxAoPTyUJSeae9H6aPr4L",
  "key9": "4kpAmGy3zX2FYYK7NS54QDfEnoYg7vbXbguCb9HBhXy7WX9Y4vGN2dUNy8SFvxiDL1FLEzffHYhnM3L7AdPNxDva",
  "key10": "5Jx4wK1s9D8r3HKBAaQPEL71Z3ennRbwoozVazykWSuuERcMXA7U2vcyRTUS8TSWsNKsAt756PuMGwfmCoAEHHY5",
  "key11": "BF4PS4EEmdYAQjfB5utWhBkEk2nHQshHSccHohR5XNWg1935Hi3XJxaECnQRijvQFAmXHzzLMBBxNgAfz5sjdbr",
  "key12": "5RxQ8arnrk8aC7im5WWccsEZmUQU79PxaKxhLaFSTeSqPm8uD3zEDqHY88G5Tf6hsgYZNKA2grt4VrDrozbgdkcS",
  "key13": "3aDiASdU2zLCb2UeeWE4qwrXzwiqhA8M8u7ySpt6JHb2yYQkLe74s4SiLCL3roLXaSnmrMK6dc6Ug7P23PoJCQKJ",
  "key14": "4iWnFNiS4RtspfaFxpXUaDZPzGzVdA91V6ub2uXQPVS53ecTrTQXA26ELiiLXGPTGksVZ4P3pyhLr4UbLqDXUfpd",
  "key15": "5rgw9imwgbbhsSyxFFdzkFZzzuVbdgbEjw8Sa7pRSMbkuwAKvdxuAMhvUBEpz8wPLqtcYsAbwnXTSQwzFSJ8xkjw",
  "key16": "59xhtudAPFM3EL1Fvqdxfyk61e2xQyC6cLn4ZT1uj4fzTrXaCdLMJjPyaFtUzrpjAUke113NSBCqvGeYuwSusX8p",
  "key17": "5R2SRE6h1sxTcfRumfQYq3CEvDAsoVF8cjq8HStLUpPsG2JAc8pt8c87KdvyBgc4DkTTEU3rsDaAk4cadv3Lgdu5",
  "key18": "2Zpak6F2wte2qCjA9MeSMVTL24EtwDHG9NYXsJiwKVm4Q5Cs9eidpcg8TM25zicpgW4vaPuKP22Jp1vFpYUAzWrx",
  "key19": "4UQWJ7XtR3bXG82q4PF8yDKzA5WKFMRV2BQwo1oMJ8wZUHHz2fhGThLjLfENt18o8FfCcC4JqiVKrdqG5eK6Qoji",
  "key20": "2PkmjfhENfzp93cuM6kV3HDF5qKUm6SP7kg8di2usPujoP64WHdQqUTq9wbrnFfjxwznZS6XRthwd5GWaU5kAjx9",
  "key21": "iKvn9LmUbnpgQQedAzooytmk6QrFY9RaWNiyRiSUuXHPY4p6pKi4eXUAk6TPJQHMrXcCmhg5rgLGjJ7a9tudyzx",
  "key22": "29GtjNnLS4H5aTT6UM4hizDgX8UybNYit1uVbCjP6CwqHknpfN2MtSVRobXPcDhA9A9dCvr7xyNHELY1gXUeoVT1",
  "key23": "4K6ZaRYNYAmj1cdTRfhdy4Y7NiQ7bv4LapckCfHQjHpoKQisSqoRMuuSuaU3aJstZS4X33KesoK7onNFLYp1r86T",
  "key24": "41CnjFkRsakzUQMrebtQ6W9D49g6pisyEhNMNwmAtYJoMwk4iBfyJqfmkZtBAJGuXgqbRjPiudHw1wXMMGtbLSXa",
  "key25": "4hDn8TDQrJSQigkbgtW4ET9sVCWQBVEn5rwFCydRmkKTYzgUzAJt946coh8g3N1Bbwy7WptfdSnVo14L9XTs3o5V",
  "key26": "28jc8ak1pK23XLzNZVfveHpj74uTHBWnHAn2nf1vVACjDb7nT77cDKnpcSGGYca9HX8DKEW3pnfertKNdt3RNRX8",
  "key27": "65yUFrPA4DRvVaR8wRhZ4jDwzq56wVoyUJXQoNgivzDaPWsMc8Gy6qQWwLjtFej1dEYuorSVutn6td7hcJKvJZoJ",
  "key28": "2J7pPNKQn1XNCjrtzaY8o4A6bxfksEsyhiP9sw9NYEovRkuQLqbChibjnjNJ29jWEDRCp19hbZqEZQdT2vpNnVyD",
  "key29": "TrXA5NYvHW1caQBnueN7peq8UJBE8KqkqhGPmoPRjPFqm2ZR6oRoysa3xxaoANaigE2uWn5MnycRhJ6ExDXPbQn",
  "key30": "jMdEdBMGZUE2oRhQWNjdxSjNFxjK1VfKCvJ2kw36xXcdB8mqfqqrr5J8XCpm2C2BNZsEG2wfsJDFrtDdByfN1rL",
  "key31": "v1TrPjXYxSBx3mBAyuREF2n9PxwzbqEK8GZ9esL8FSBxAVEs384aEgjoRvh6yohmRgwMTkHE33sq85LYs2S1CKd",
  "key32": "2ufnpdAgpW6QjDcoTwohMgW5BTB1VCcb2QKcdnen3pugNCw15f2xgnsjS566xkun938yeb3gLvFcvaFv7VEym3Ud",
  "key33": "fct3vT6guBypNEtsinmtgYn7pmMo42ux4Q5wNWqMMkQsjfu7Kve888FTufFsfVFUWraVGxxJZaWwxsbbj79aPvC",
  "key34": "2JRmGtF188ySHhai9TUUMTvTyFHQx5oqrfK6CPpdFeBX4s4ZwWfPFpu4DzvVS7oQwzAD4RFxrY3TpXyHzjxzQBw2"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
