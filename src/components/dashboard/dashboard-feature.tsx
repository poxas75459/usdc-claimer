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
    "31mP8FYnPBd2AxF92jSWw2x7fKsuUiHi9GvgXnVDg1arwPL7DzhSruDCG9Mn9Pqv5dquJBtm8MrRqqugXnaKkBRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbXq8hMQvrZayKA4xC8TVmyvqCPzRfyM1WoXNu6pJqDE3SrZh7bUZMhRDgG6FSx8RM562QAaYaEUwzZfn8NeuTH",
  "key1": "34CEG6AzXUJHzzvHMKqyrafJH4qa2B8dRuYpmyj8ufZNMv1ojqiuiDjRLL5FgFYpUNLQn3iPF17YDQgYJ3uhrvck",
  "key2": "2DhMRkcwXWLNtWHPhWaqFEzz4yg7CCj9JtayxtAJPzvE2mZ1QfgSZYTe4jKgSUZR4y9UogCCrC79SwcnMnzHBUnh",
  "key3": "5GZpgFwW2bqbhNE2VaJ5cdfYrHGn6tSrRDzYGgAgwWp1LMsGLpR4ypwdrghT2fNAZco9YvFs5vugYRb1cnxHtUgS",
  "key4": "2LR55xStTkpJM1LYyzt9KcYwmhivgxC54uA8bTgUAkrceaWVetTbQgdg7F5CuewVxYFSTkeJRgmApGZwnDyrxda9",
  "key5": "2yKzC1zi93ZEkfaJNN4kwbKGBFPtubLb5Fzom4abyqX1LDtX81HyTZB1xBTSEgbreKy4apbscE82exAHjPRwKaPL",
  "key6": "7oPagoonxjbhvG9tFAcTsMQJs2ccx7xiaYn9rQhTYrvTn9azKYMDhCZkS6m4uogan1oPuLRUZ9qn3E6a1jrYVyj",
  "key7": "5mhTUdz9LMyUeuEqb1t3nCS6Ww8YySNYNve6Fr5VERcftabxjMHA1shwnX5hQ2tmGxgLJyH68go7xrCUVJGPehF4",
  "key8": "2fjBmU9SPx48JWiZYaMQ6UhrZWvV5w2eziECtkdBXxAG6GC7FhuuYuXnjsAvUbozUzxRDmVuWFn8cBsFM3LahPRi",
  "key9": "4FaL6T9gRrPYJQtdrjSQJo68HFqJGR5zGhef64kcLdd9yzerQdGZgbWoi4YASGB8JpQeUNJGFXuhXMXad9X2o2UP",
  "key10": "rXCLPQrrw959i3UnYQQYSJZ6U1VhrrBHpSW2qXaReHQiVBwhk7XSMqq1kevPPWx7VZxHiXHWPhxLppL3BvFJFnV",
  "key11": "4S4QzPX2mqLT54uWL5UNJFnUNuV1rdUdUUikXc3Kw9qHZYpJoYxGR11n6P1CrYRvvUpgBHXQ3j7BUUvkDoJPjRkm",
  "key12": "41ceb62hhPBE9TDn2FXSKqmiZfqbBy6TNHiVENcQGjjijJYgaJ4wRtVtad29e6sZYc5RxTEebYh1CiTUAumBFgcg",
  "key13": "FABvTzdpxXY5gyLgFBCakr7toXwJQTxp6eoypJHWEWN29M7iQimX2KYwSXZPbpGrUjqp5zwPJg3DDyNfFXcHKGN",
  "key14": "5thNQ9SggMi5sBcfmoeRQ78WXDQk5JGfzc4RfHF6XLJ21cTtoPRGyc5ddkvwugiDfR77VihGPwJJGYCZk1WbCzPi",
  "key15": "49Gh1Gcq5Mm1dvkSFB3PeQ4c7p9J77E7fjQ3jy3k7s6NZSTeTwq6TQecdpFHskf8CgeVMVTekUQEagBttqJhNL7r",
  "key16": "3qy3NJCECB4sMYsycgydXoWjGjGfN3Bj2oKWnscdoRMjR2vz44By1TnMyVp9qDPrCsnwr18dWNhGpHHEMRnrQaap",
  "key17": "3Lvyp6mCx7FeC1SqWrvVzcH99NZGTcofHAwHhncKknStmsTGRMyD5Rzs8TjVgVEThGRBKpbtQbpTjSks6EwfTDHX",
  "key18": "23ZJzPy7UQMQjAtCic4pru535kE13ZUf3wWDssHTUpPZfmaE3cHQJqadqd9tYyL3U7NTTBez6xfxHRht9faKf3m6",
  "key19": "UstwEG1NWSCTN3VLFs4en8dwi1Ra8zGdpUiWazKnfRvTueH8Jp3mrbnz2XDxQibzMixVFBqT8oRYV7SmaBMxhVJ",
  "key20": "4yvx7GNpKH35EuE5SEpzCuP5WUeGfSr1WKyJktKCzL7uc7YPK5vqQ2saMvqTi45ett1Ric966RcYz931TEsEtpGc",
  "key21": "gEcZmYtbUrbcuvqDQg8syW9zKNswBqUter34gjX8QqxHiVvms7A8T8XX4shGAGvenPbUadJXteecvZVGZvuMxTx",
  "key22": "5fZkZK786gY1W2qhB3XrKmGKMu8heRC1aQJYgrQ2g2wrAQsVMfeHwebFA9Pg3vddys4denQJhmw8V7Q45SZxfqtG",
  "key23": "3aTize2RowzU8MQQPYTRXrXSyptnG8Aj9TQ555z2o8AKjua4qAQ7PaqCymKnQazsau7YXAw8JEBPpULpeTVvk486",
  "key24": "3ZrdwBAKnrZm6sG3Ebx3bsX1xMnxfY4WwqA8BqNf5SQM8AaYojy9KznCitXG68wNjNYNy68iPCqkhpDuGfkarq7z",
  "key25": "QkP4W4wJbMDo6gEGD2irNSyG5c4YC3iMpicmbw2vNjnCv8zK689X2c5DJJPpBx8E6ypndvFHHdVbFPHuBbc9MF8",
  "key26": "4KydKSR6mDLtRBowNtd5BJsbTBJc5voVg8HbeRcESJ7cHMbdXuiNWzfRbzKuHihY9puqbnWJJKfgcrWYkckUSyZb",
  "key27": "3o3wp5yKCDvfi68zymdceTgPro2co45PiVF3VJZWhczZ4gdqsDyKn6zQrXAcsdH6GrJ5UUswojCfuPYQUecz94y6",
  "key28": "GqaWm4MfokicPnD1FTuwi7u16MqDGsSF7BC3DD3ro8TmSHNVfh1vsgB74EjufEV7S423873dyqnbJA7NqK9EiJA",
  "key29": "3QkJSXWQTC8pz4R3Law7HBy3EUT9kefVaAkETMnsBXneaHGvM8g2jZMnQScaX8rsLmpZNp1c8w9XLfFp8wT8uRrC",
  "key30": "2XeQo61fLzFeZhmJkxTByvfjM7QWoMouzBsZ7RrMQndAKrxzHuLEELf99rdyCeLet59jWfXoBuxPUTAxBfxmsstS",
  "key31": "2EPEbokgZ1ZGEkWDtRGWAtgPU4YVgzYX7eY9BzsWt8z59PotfDHmEkm1au3twn6L6WjamopeHYVVsJSjHVxDbuL3",
  "key32": "Jt6xzSFRoaA2wWFSzhqzKJyJWt837rSSiY7cVgXSxqiiAeiYzX65oEUe7QRjoFUsFEmS3hsSpyaaYGKAugiwTmA",
  "key33": "4jTQxVDHZhyFL31J9ouDrL3CPobB7sEdG8ad3ofukBKsd8icXRd2tMGig3tfbVy1RQaSHEE6sEzKu5q9emK3EgCz",
  "key34": "5SmPGLNP33jFm7qUTAy72mzL2GUfEhjrPfwqBM6bKMuDew6CQ8W24vxu8pP7Ncpdr5XpbdJ8Pnsje8XshD8uws7N",
  "key35": "2GaxJYsf6rakmZMeBbAX1zqUxrnxVD2iBRzwf8bn2TNRpTvNqpCNJmCAsrjnh7MLMuCwE6TePhwbAdeNAWwLpSJu",
  "key36": "boFYAAiB6ZvZwoA6d2Vf66s3ohuhL4fMUsFnfj1AVtMYc2oHbwAqL2CDoHnQp3KAVsj9zsz7sfXyjKv2KbPeAYj",
  "key37": "5iZqAKy466BtbD4DyNjLe5wm9hBJT8bGbmUnCcD4gJnz9rrK4vb7847jvoN6hPVexV1eTvVfK2Tt1Ca7FtThhBDw",
  "key38": "2Y2nASZgfe3AGG9ZiydmLTR8qoE6of86tauPToWS7P4LV9FhRez72erWwNPqstJDJy9gBgNK4vGPPo1FAaA1NT4",
  "key39": "5W44AXxEWTF4e8mPMhWSXAqBXzTYacGTB5L5qjozvpR9KK91uiGk88oTcXQCAbdMsf91wHYLgkZ4R5Aboiy1X1dN",
  "key40": "9EPZrJQE89ww41qNoYa4HQwq9uHqjQBp6T81jWma7r5N5ZgXZoH9ZhrD4o8m5NJVYv2V5gWa8tLQXWZSrSiHuKL",
  "key41": "2s7kZRdS4ASCLP5Xi5YKKTeRtb5jkpVh8iFRbS9QdFRjk4XN1QT6h8x9EbVTKFuwDvfK7s9M6fPzjFWSjv7gC3jr",
  "key42": "5vPDVepybjxtBzSqmYd4Ws1FAmzMC5csoZyVmHPYZCtVuCMBoPtrKUcpvfkPkDhswpfu7dqt1Y1DaRCxY8DzUQF4"
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
