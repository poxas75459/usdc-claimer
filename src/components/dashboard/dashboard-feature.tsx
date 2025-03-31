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
    "ouSqWsDSp4UPqMQAH6D1X42wi7iU4ciuxMzFfVbBcxJdzQFVtMRYfh7xWxFMDEWnH61FQGQreNQ1JTWPcoV3EFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XPSEsWfX4k7sHUsezSY5n2hyE2gd8rhDMDCk5vdvZ3EKCL7wXo5mxkXTQmsZsJrik92uV47xgsGHum83gpgoP3j",
  "key1": "2bSFzHZW2PKUr1khtiE1Jpw4T7bt9PHgG9QfABwPtb8rSgGX5c5VdyVbpfhqjUNMLtCNU1yG14mWeMSy44GP3tVR",
  "key2": "5wYrjPqGX9F11zrtBZXD1jzyZZ1SQxb4aQSeAWANp8QdmbLRMH4ENkgbUW4nR1XFWRDy1UWSywm9wM28uf9Qt24u",
  "key3": "3S4HQeafrJ97WoZaAyLrAgQz5KRSN3iuY3T5LyGLrQqutdRG6o4PQdXbkmFagfCbX88xWkH6Kwo9pxwiHWF9QFya",
  "key4": "2MmU8KVXR8siQMxgc7JAcB9WCitsEtTSPw1TCdEJrCtH4k2VibWC5NS1bCE4KkEHM1xAQqxrssPuUZTGf4P8RD2G",
  "key5": "3bUwhJT4PXR4seTz2k3VhFLrUkFV3WYUEt6g1bGfJXUNeS93PzE4kA1QeQkV7GdWzDPZHDymR2uFy2hGcmxhVog2",
  "key6": "4fAHFfFvf6TshXrEgYpWsGPc4XV7ePxbeyhgCLRoV5PQTs75NN9j89zRGu2wLyUe4qE5U5GZyiz13jUNGzTYSLYn",
  "key7": "4yZRhZeeyv74AvC1TAQvXMwv3at6Yd16gQXR1iG7sLHMMg4vHpGvJZd4cdSGCyoGtApzf3D8CetaTcZD7ioZDHUH",
  "key8": "3Jpu95XdDnS6JFtRHrRXyMKELdNwhvhmYhj9Sbqst1ri2Qz8RhGDVR9FiCjLun15HcNVrre1ANsHbATEGsqNbSJY",
  "key9": "2bo4XUPz6fJuoVWYEpYp23hWUz9rS6PLEYNfcFVfpqiSPYtA6gYkniSneT1nCmR27H1g52P6sT578prTiu4sWK7J",
  "key10": "2yRQ5bVi9egJvNdLhgTRBb7svbWLuHsPWMMMWk1n3kY7Uepd2u4UqpVSLgiv2x87x2MXF1P3LxhzSQc2ngFzwwCk",
  "key11": "3hHqF3HrcB1wGdyJYnMsK6UiTcYGWWkPF1oBQpA5f6Sab6kzGVgr6YcpstjFJsb1aLNuk6jgUnrPLbBSQZioLjzZ",
  "key12": "548YVx7gq6LYxTGCb6gAwtuUkDP258BvppZkmFzXup5PBM34RZFGgKJw647Vvz6DHZjhLf9XbVRb2qbB1AWuwVjr",
  "key13": "NmmGVE873QwQmsnJWj6EJwWw22AZBd71iby4u7RtYd7JTxPkJK5A9TDRxcs8U9x1bx3MAWj9wTpEiuWRYoEGWYK",
  "key14": "21V72w7iB4BZxZZz8R8LRqTyiw1eVYoL4wTqWM2cG4CTQVXdAHTnfJKjCjLFjefm8m99FFsz1Xa64v4jsqdHWkFZ",
  "key15": "2XnyRHP3ExX1ropTos9XvuPBZGUiYrqZDcMWEvKueL7MtA2V3rt4swEv35jzumZNp2bjDGuxQFTmv7FSp9TLY6vL",
  "key16": "42VonMNd78QJMf2442shJ4xDEkneDweYJVKKZtNLxXsVRMxxUGzCiMsnrR529LMSfRt6ugDugGMM3XrxdkDnanra",
  "key17": "4X5eF93ZvrGEq7m8htb5dAMJp27inSme4ggJxb4RN62teuKyeHY1ZgGjP2sSYF1d7JEt3Cx3KozKL8tSE3bC4k8p",
  "key18": "orwQg91unvTMbDXAwvvYJWZ6JTKdLUPzcrDjaHvBJ5jwf1KGvXgFsbC6dL99djzjVwbaQf68BGPZzGgst2Z97YL",
  "key19": "4MyTFtf941rzhEQ2jYhZkfhk6349F4vz5H3crmLW9kdyT4cXoKkk3RVSosto3s96scRt15UXanjYYuqcPmrPHgqJ",
  "key20": "55f1bUb5DdtiHQgWDfQtRnM3tJpzFNQdK5gcwytHvrgwR9kQ5FpHzc1gmDKw7uFVDEr9HQWZfuq9ZCZFiZVEqJSY",
  "key21": "32YRMGzFMFr4dvRChecvamqwaRZahMuoeNeimKezR66dCYVJuztsRiNLHvym1ZLKQoaGT79Jf5VVhti71WciwxbG",
  "key22": "4FTFDddXQj5pCF2WwjLeA8LtTURev6G5nAoBG5TK4yZVscYeqGdAD7xDqVMtfcerBrs8dtSs7Dxn2a1XeuZdTGhe",
  "key23": "3AH2x4KRYx5Rf6Ss5gFpFQvbL4Gna81E8QtgKswTzEhj2Mf3tMu4GB8gaeMY7nLbXrcXrcyeUZsWbv4cg2cCwrND",
  "key24": "55FZDaG3axdkdMni7YoCRKsuiAnfA13SuzgmscvQyYbNMmsNdMyn2uxD9jeiJrsezs4TAWWh7jM5fKuyMp5J9k37",
  "key25": "4H2yafuFjWM1W4SHjaZUDebn3agq58R8qFgwKbXcchs6AGFWs57Xb1NpyQV2XCohXj8bcMQRnxYsvEh2UjvJcU2W",
  "key26": "2k2kK8ivAm5pBcaCE5jL1YnURqeigk6RR9iA2eL1qazBAh9TP7eMWVY7BAPmFHXgtX1kWTC5DDz1A1SaFcvAdBbr",
  "key27": "wBN3Udvdr9Wj3nRd1moVuCSUh1qP3ia17bYoTr1Hayyb1g8Gqh2KPXYL9NE1zNjSRy9KWmPpSDdBoG983ntqkgN",
  "key28": "3bGe2DMccQTJX8mnYKB91zGecxejtk6rMMJLHGR6jNa8n4gRyoHY13kJgjZqPhBPNPomEyftrbgNBaAGBeArwYYy",
  "key29": "4fZ95p7Hr9XTyHYiA8MH8Bq1DVNnBE5fB9zRhgBUntBv12ffi27MVnndmWe2MMUEvFRgc9apbgeRPhkZrDT694uN",
  "key30": "2SMqVQ73v8KPyoTUjuKJWp3dmsuHFVsYhtBXhaDTMAzksU4fzgX56zu52TtQkRKdnkbcEPd71pxS2FM3H4Qwhf2N",
  "key31": "2dk66SwQFkvjB12qu4MJV2ieZWLhUrAFTKLZp9QQY7RJ5DHiR1P9EV72E6tW5cgQhmDJKk3C5aFCF6LPanS7XjG",
  "key32": "4mBiBbwFbeHqnVGEpyTbtmYPcR81XNjCobLrnWZ79HoL7AjqFbt9fUDBbXaKWU8nWURmwD9tjG8ngPbseQPFMaD2",
  "key33": "4P2JZp5SJVhQqkepBxFjyUTBM3gkxbJ15LPjFnCX1btv7EevK9H1xh1M8dH5VE2mCgvZbUdppry3ms7KP9T5WJct",
  "key34": "3EVjStFC1eQftQpbuR3RU1pdeAmds1vHdyuyuwnKcJ7t4hVSJc2Vtx1RMfRxumk7pR6USFod4YnSvrsxxrqX9Fcm",
  "key35": "5Pkrt3B8gFmK4pf3b4wAxYgd5CgRvUaVKVKhfhXdMK1BRD2Tg5qH2FLbAyLUH7yH6rVexLtxqhy7E4rh4PMcEozP"
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
