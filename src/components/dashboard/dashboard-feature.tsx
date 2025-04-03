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
    "5r14yj7mAg9i7ELPdE51G4dfr35nfqMxU743kzws9GnP186rwekctBPRjUxn9qTVtadrzza92Ccx1M2eg7N8UyKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AWzq1FDZXzA3niAcLdSPWhhuPJ9YKAkRX8UiWA4TQGJunvuxqmvWVpP364GGNi6Npu2vDb5ohpyWFWLgZiC4uqi",
  "key1": "5xeBgbMR9i5Vj9xoNSsfYHLbH6H5rYaxa8Q46xRLyPJNY9v1UrQTXuAoY7ru2SkqK5i4YivSMXXpBfnBkqaHMwDA",
  "key2": "4iVsLMGvTmsmREARYexRwDsSeUjVb5TRKFZvBiie1eFHrPWoaFbyWbX9HLLdLGGNznR2XqbXro3ofuDFxUcCCYwX",
  "key3": "3y3XzUAGkZkajRwdyEE6msfgpk7HDpatVmtmhBx6AQZdTxQD1sVKS7HrerVgqTrU2X9oRrxUXduGgBMGkq5Yiki9",
  "key4": "5iZ5Wxs6f5cjpXzSCEyqDiuuYyWVDnMzYvhpqa3rLaF8CbfLXctRjvJBQN9eri4bnLf7dpMHahUZsRKrJjJknSJH",
  "key5": "drTx9moCzvvyrvYKh5JJiDUMTfkao1hTUdoHanu5iBipjmE5PtkmCaSyufyvdoaFAkYrbdcaTzafgAX8FXqhE3J",
  "key6": "43nZCv8mveBzDekvdNCsrsqHdXhZujRohpFCtpw4J8LPLPQ73NKZMXjqpsRt3EQ21aAs32PJbfb1JXRPQeGjS2XH",
  "key7": "3VdU4N3Z6hDhkotQsbzezSAeBLctEZLogk8wsDBf1Q6hBa691adptwXDUqj98EmLGEppWgfgrm8gCVr7ijq21evT",
  "key8": "2zLB8k2VVwrCYp9smi7A1rnmjZaoH7YMrGbsxWe9a1dKyHNUgGRwVXG5fLNsUKuxphS3c1LTZHY6ysNE2QJCHfgj",
  "key9": "vaBfxLp6xqo34LTo6g3idQFQFsdDSpp49LDd8AdP7K1ETq21jJMSKvmYBaAg2PaVDktpyFCdBKfV4UW5ZdLHsS4",
  "key10": "3QZbnDBBpykt4hFjqnTYTFJpJbriANMTo8ikBmjN6Bcx48666MXNMZw2pEBR9tAmNaE6NoC1oPuBGuz7ju3GPtvS",
  "key11": "3KcYFF2Pdo8AcqzMU8vLn5tU985sVPwDvNyxSj9LiKrmwCvniG9FHt2dKQgYYBoEWWpbHRzCpDZPBH6zWzJUntWM",
  "key12": "4AGqux4QyrMoTwzxcdjpPnnwDDtFuFjcBap6kvpVMqzCW7ymrePVLee8Xw6rh3QfGMeU3cSJb8zz8uFqheWhoVT3",
  "key13": "3Kq6ZmzN96VTBbf4kHMaVexmT7ek6zZBnm6K1Kshps42BkNnxFZs23uQujTSdTQ331Cs5mxe2NMKD6jbRuK2U7yi",
  "key14": "c8WVrVFB22oxThzJXd96o7xAVSpsvWH4QEDV3erY9NbRXCLN2QJrEeGJPwznVbJzyKMiiKamWf3DvXBKES2UoNM",
  "key15": "5f7E7gG67wZcoXPLdjgK3e191ma2tNC7N8fnr5fTddX5KxtYLbTskr9pd8RmjXoDp6K1i8WhNoXKDyrVGSgaTfb",
  "key16": "oF2tnMJKLc7qewWY7bNiLCbgrn5rh5SMsNpPw7Et1mstq6wo3EBowE4tivz4Q2agSvLnQfFv86U8qGmHZBfQzYg",
  "key17": "2LUZxqPmx2VaFGwWHcTzjwerj1JHWgQuzQ1WWK6H4CEALdi8g4BMb7CDp5DFMh29nX7yWN73bHHH5HPvAkrizTJV",
  "key18": "64JAzMtbDX394E8dawshUmZHKCYorTGt3fa5x17Xbm1Nkdn59zXswebvYJ6L8FpojYqBsaYSw6vd88jnpqnvTBr2",
  "key19": "2NieEfQw4R3rBKbvUBCGnUnWuLX7a9yNSSgAFUXbTk9MDiwMxFkk1njB53BvNzQTuLmgowGS66Qwk8y927nimokM",
  "key20": "262ZGPVaM9FnpzMS8tevmNM8d3XqwsSb1Njne8jUuu2oewkivKPNw3cAQGt3ALwtK54Mg4uWJyhyQBo2Qzah9yiB",
  "key21": "3DgJ1R825jSGWxYhZAvjy7rPLWpShqiPvgA3Fds4BcLW8Ry6BRVbCGp59yJDp5DHZ73h2HwuYcUcvwQj2RQFP7kp",
  "key22": "4uV8vZngRk7SnMVdPHMC5FoSCnztSye6cEaK5R9i6Nc82ZMLEy6cx9tw5GrYifU8QMLvtBCa835ra6oAriXoSyq2",
  "key23": "2KzfELM2PddJaMmKqVnRWRPQ5DDBLvp3SX8DACRenP9CUKMjBKbS36ytsnsaKxcS1ULtjc9n4wUNnYngn6iUX4xF",
  "key24": "3Gg8ihzjTMzMiWTuBhvdtcu2ApH2AFC81BHnXAG7pTuAdKHdDw6WtX4WW97CCRTm79BuyZiWXBaWe7fbRXpe52Jn",
  "key25": "3TkMgXRXYQaDQ9i98ps7UzeJyWC9kY1PuR7sWTrMumdq9tExPCYGaBZqh9HWhDxWScGXp4fpXdHrzCCGU4Xzir3q",
  "key26": "5mciT2qZPu1huEjvCK4xz6dbX1nXpraYSGJeFbM49iKZHpW2gMVs2eqygBJXtHyqFpeDQGP482wswYqUaYDWE8Qm",
  "key27": "3ZF15XPYdbAJPHVvvVBVs3RciTWX5bxpgSyNSiit5ZWM7ZLrxaPj58geHgRDv3mweC8BmrWgC5nyJ1fzauCSKpVv",
  "key28": "4AvoTY6YrUP3cJw2DsaPbFGjTtx2bTw1rzQUtjzj11fegWbwJ3uSFHi7AejdJXhrbLw6aV2AgM7fnhHdmpBDemRL",
  "key29": "2GfXuNQdoP3z8r3J9zEVuxz5EM5dQ9xZN4aMM6viMAT49TiimGBq5GWXuMykZbmAwPwoZRoxhaZLWeULDR8LAoEx",
  "key30": "bvWETi34ieEKndxzUK7s4S68v6eajjiwgESF3pu6TN6daJ31i4nmdDiBeFCuAt9Lc9xZNxHQmSCR5qHhr1rLyJq",
  "key31": "2XtGdDD4FqsJHShawqkuGnn7yB26tidHzfsPq5bJzWbA9zuySnGQpZ66Kahbgwpv5snbzuuEvKCQN2SyiBmtjhh9",
  "key32": "4EoHvuQfhsXY3NWsFKCokW3KV15yjKxFBCK36aAEucPV8nXk8yqfaukG2BD1TWYg6WrkSej76DD5JMC6Q1Wi8zrw",
  "key33": "2ic7mTq3QwCm7U7P6C8rYTnNJBs96TambfiZhJ8u8njhD9jAFBP7k2HBGr1q6HQbvYCbrX7h1UYjWAqXHm34LnRB",
  "key34": "3EYDwnMFTpMMSfkcTMqdUu3bV8Ga7vkkdn6XzThwgijTwWRwXcC2Gt6jJhy4W3H9QndpbTReEozA5TAsoc6pMiVr",
  "key35": "2xav8gKaiLn9pbYM7QbYsFBtKHJxUeKAWuBDBB6SDkgPy7nDAZndysxnjR2Q3tcJzWeG4c4dR8y6yDYaxdEzNNU5",
  "key36": "Snwhkx1EzzYYn9wbAK636sdie7yqC9GcvtQ7uoHMm9FgC7xeiy1xr59vhJKd664UJMDwt5zpHUSR3ScJ6Q9RPo2",
  "key37": "2F3Lq6SVTzk9DVsej7XxMZfE13TxrdmewmUiUR6PwiNMTi4RrqKxe9Cb7MQmupbqvUc5AmskK7FgD6ePZMap3zes",
  "key38": "66JrwPqux5nvY5DdFU8eg9ADGtGv8NhRXS8DAm6DUCrAUEkGVxQbxmaaQQcFbHFocvfcoTW8g2jZgsDvKfR91vqc",
  "key39": "2n2Kh7zE677YAcFR7MbbQKbaYZtixv69vpNM8DnMDsZrnpCG4vC3GvSM53NwqErDXUqpvdTPK7LrhLcWzYbYZTdZ",
  "key40": "4Ayq8wDrJCvvNZ1HXy2qVWseK5NRiow6GCdRThbuNjteKPVrG1qq1C4iL4iTGfwACKLcFssefLXo7irwAp5hDStf",
  "key41": "3VSRd7Ngk32BWSDhgQsL1VVxbBp3LADSNtq5BPayWkUwu6GSsq3JavGK1oRnNqsjCzjPc9Vuz1S2mJYVoC8pgcjr"
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
