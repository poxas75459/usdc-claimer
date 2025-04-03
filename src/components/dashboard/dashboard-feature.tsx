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
    "2734PbUm8YkaXnBrjxzxydkKma8nwj43EurFWFw1g9EUU6a3DjZdU6uGhR5ma8xViuZPY9aWzWoUF7bUAMFcdQvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35U9es5uoS6t5ycfa68hgMn3anDLDvh39zq7AHcXqwDnWMWn4kiJc61wooPvhm7fhUgmdjx9KCADRzX77sjM5C7n",
  "key1": "YnFcsF1chtAKHr1v5hD3B7xg7JgKSUBFN3YhiKMwaqq7GWU1zXUJFDcwWxtAnvfUrYeXR2GfBjtnQUxizRqvjxv",
  "key2": "2Wtuqr9bj8s19bnT7qgx4sr7bpJfDvG8PzCbixFUwXjMnzentmP7nchQVj1vtwf7ZYWzmGiuTHSYya7yNCXU7uUk",
  "key3": "4fncwx1x4KnoTCJJidcV4HMMHuth4TVH8rEcB5cWym5FF9DaanAheYfdJKXYad3QoUKQoJ2cNnKq17tRJ1GfxpMh",
  "key4": "4YwJPwYE8Y1DqcAD6RyVKXL4hDNJ8CwLNYeeFxb6LAq77QDNRPCFrez3cFozGikQAAXNmtxms8y58dNa5gHeZoT1",
  "key5": "3rmD8d1iea3QnYhk8766qYyqx3MWk3KZmSCYge2kPwzV4E3BKXER7cX5wBKS8vNVkDEz1G4eLZ4BMcFvergzcouT",
  "key6": "4EYM5V7h6tq42TFGBZFhEKbiL58hWN3b1FUH4WytsgoXqjTNinLMMn6Ep6bxfx2rJayKvGBjdUefzSjPPfE2aNbg",
  "key7": "5cHL5cq4RvuBYanaZ1rSPMQRjSxtpbbRCYUTqzCLJwuDjCY1ikKoyK89vwi7B48MFSkjMtjNzVbSXv5hVZmZMEqr",
  "key8": "63MKnM9DeEewCpLbkodbcVJma4po5bPCSC2sQHt5j2oozM3K6nEywr5yep8AivDkWsKB12DJVV4AaT7G5Qp9e3Fz",
  "key9": "2zyB6VE2mZ3xNs5bLtwdtuke9rcKzKy64zThKbREMmg4bdFPDVzVoW5PBPGcDApT72kcjqdts6zQuWfaUvuoPbgU",
  "key10": "4Eie9QA52nn86aZHEocVuRpNfM3B6mNhDgVoC3GWSCDsBH6idpoa7JxxQertYjeSaBVtiy921o5R95bJd42DsyMt",
  "key11": "23UMbogWUHH68SW8Rp3twxnMQgjfeJJHDe9wV52dvj2Dv8LMJXmA7K8FpM2ihN8UySHMGNXSQq4aCCY36ZjHSybm",
  "key12": "2SQtvYZszYGbYzEoTaYymeUZp3wfNmwjYTZU7pAyMGJUDW9UWJ2zmzTGgx335g6f6Cy9BeHXcsbUiZ5h3HRqU2Wj",
  "key13": "38MteCcf6LRWa1JmbMgkbQgCKMx57jcSYVcmYkf8kG5FVJBV5cTwN6izhYPTSK6y6Rwqj9cZfXFDsFk6826RHEfu",
  "key14": "4mT8uuA8Kv7Ps2tGgriU9g8VovuW6LfRnqHKUcNVZTunvMuiw9wkFE3vNFNhHZQh2rQo5yfWSAK8ehYi6zns57dW",
  "key15": "2Hv884pDoAY6pktw8Gy8qZCrEWS15rr2YQSRh8wRE7U7HRBmHsKYArLfj1AdSNgvJAznFVpA6gwLt8kbEWJopt5r",
  "key16": "5YgrnSLmmNKrvuaPrCza5JGFFtMEnD21ait64in6VJ9Ki8MoxLBZTVPNXQo1uJ3ase9vEwjZsrP1NCGQ2FcMtqnm",
  "key17": "sfx6miYKb4yXrsWorJ2AuEZ8zJPHPhAcwadcNc9de9syHLfCuN6V2U7xveRoVDrWN1gBoNhaUJ5DasX8hNusg5Z",
  "key18": "63PuJCjxS6umQw5YKYvtVF5JvAJGWPfBLPsiAg8TFgihKFS9NHkh9meA4L4vQXtPafnbitL1EdoDHJCRPdX3nAqN",
  "key19": "2mRJZAiobvmcyy9chKTfnoBjKB941FvvT7fJF2mQt4bW7mHowWPjdp41Xkg4zUJunYeubVi7ayBMBJjBDr7mpYLo",
  "key20": "38ZJH82TaMaatdDFxgefuoTaUy7q41qf196s6kxpKdb1DDGGPGWnpMHQiASKvwcHRYrUcM2L6BCsjwJKegoUsqYr",
  "key21": "5cbvvsPuXtSBrFnpzhvkv6VYFbxp71ocncD1PpdLp296qX94GkK4Ts7exNuYUK1tjE5yxn6qpsPSgXTG37nmFboe",
  "key22": "5UGnFK77PQurRcPtxF4nE2wFvMXNmdYKAiv2o7FTF9Gumtgt91JEhD5qgNxwMw7hyam6njxd59FRhX6sa7Q2m5BW",
  "key23": "25Psi3qdMAmEUqfGCBBEK1jfkdExRvhsmTyNP3KKTDoXGAaKbyfGsjeB1p2xgk8rAPSD4xq1KrET4Q8nTQRtk6UP",
  "key24": "2p47WWw5KL4s4saGkmygzNWppq696aKC7DEgzcgeNHKN1uxAjZiqgENhvqJPpxB16fgJSHVMaPHxFPYJgQRVdXzE",
  "key25": "2ewdaRy9pLpq38aMHAGJz5zGTQosBXpZRAJxYAJjDCtvMCm9m3kDMCuUELYERMEzdHLjHPUpcBRTYDVj9dALWbc2",
  "key26": "4cMsGxREnr2ooGUrDrTHP3jJt2Da2DyBQWtfhRs47Uuy17y2vG8L4DAST83wCcUQ43P5uLTvpsgxK4AaPQQyLz9m",
  "key27": "3iE4eQYVkKKPjwFbSGvMvkMFNXBt8WDCmk2XfngxHmsJ16exgTn3LYdUdRex5oQEFyhSFZY69B5PUg7m6noQWdTb",
  "key28": "4yxKsEYRq6DETUbg6ytJKKNWFmySfZ2BojkeQFdoHWtAhNzfUCNM3qnWaHq4r1yMwRYcamsaHMuaBCpSZP8mYWs",
  "key29": "4riUPFZ76Cw3jjXSZohTQ4bVTCc4oAM83G8ZvYfMEv6UQrSdNSWpwEB9MfGWHvM138X6Vb9VvYFtdtdxUHTLzHZQ",
  "key30": "5Re5fheKuNwLcjFudHL8yHyZzTgRiXcpyXT7dUX6X97N93SBuwWdaiBQ6N32tcQ9KdjEGv8VzyJCD8vPYRMWnpxC",
  "key31": "2NeKCtcwk3uDaeCiryVeKXMXwJC8JathBmnCoeWvKoSxYaDuwZjbBJ4MzFjQCvydoQXZi31jCUzqkukNY11oSe8J",
  "key32": "3Pxfnqijg6aa2pG1MaCgniXEogjA6UyRYR61xUE7at3kcJpcXWn9wLvLTz3794zbUeSnuGStTXDcWQuK7xetgsYL",
  "key33": "52PnJXkuPHQZezaEhES5PhyqoF761mNkNCx1QtMBm8TWkSsrBkrk3STpfXPNxnS2iLzr1u9QAAn3iczMN4PTGmxi",
  "key34": "uqiBZSHYgKqt3DgK5Ea15D2VPoTmx3ihpuTNRWYLNQRWybP9JnMN9QSK9u9quMd6Mt98HNKXkekXxucoPmyGkw2",
  "key35": "2humMLK4yG8pcrBNhev3Axen3J8taR7YAFJ6vtA8KBgshQsKJCsecUz1b2GU5aChe9ST7qAKNofhUc36HLdRaEvM"
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
