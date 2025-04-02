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
    "FuTUf6nkX2WzAQTUVWZHz6XP3P22iajnyzJdy4exJepfi6Axk3UYbyNUk48i1HpB5F2xH2dTNFBzA2x757QrGpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YMfCUQaF4z3BC8y3CYCMUDMxnRnZoTiuE5dLqTTtUJWuyf4ZEsQiCCP7ThwEHdS28eAJb3nzsKbXJsrfksbs2wk",
  "key1": "32mUaW1rFpuodWRykBKNcsByDM51ZbiJ4kYb9pfZeC8V6iTtkDpMWYEWdxwJb71vjgJiBhAjNf6AT8p2E2vbfrP3",
  "key2": "a5mk8ikzSvQma5jm6GhEbM1CHiE988skH7tWLXyyWovuXYWMmBq5NL4LmzzbzHLZNt1H2bC5he7dtnAThdtrVAq",
  "key3": "4JwRvwwsfdjiKNNQEMwadXgtE5YoZhYqchZyrY6QEJtDHrzT1EnZMTZ6aZW4t2qFNxNaUcXbWqsiTv5mdBVXezfa",
  "key4": "2SR6hwCDrbYqUDng4CEte8twL1HhEG91UjiH61ihcAH7Tpxf1TPC6nrjwrkPbguv8i7aiVxUzuQydgEi114N8cnR",
  "key5": "2cmiXEzDAYkf2ZqdC3mezJtNTsw4JS48KwNy3QQYPiJPN9L4gqPEKnUPFHWnHYt1Bqu2VJiQXE9rNfTPHT9RWDyR",
  "key6": "3jUWWo7wwxmo2Gobh6FS1mHBYff7eWuDeHXQCMaZaxbPKe2ARx2e23XQr5QWWVoSqZ1AVGPGB1MFUeaRJu8S4kC4",
  "key7": "2KQY9W7SBqNLGR1tXCcTRT7JXUFEgBHCuVsPX9CTavaC5oXwQG1FBaxphkRh311uV3cyDuZ3wtpNuSs4moLUeQZF",
  "key8": "2SPqYgo2CEwLjmfzWGiSizXG8D1ofp2SbBNtGuLxbzuNBSvdS3qAyv4W5FnewN1uR5TCwLGv5ejADM4KqNAyo7MN",
  "key9": "5f5yEMW4h3pDcL2recvgwQafK98E4B2SJRFKfw7yjTZiy2iwHYUEwVW28cnkYbc9o4DSQyxFKoChwRe2rY3A8Z4m",
  "key10": "5jUDh9Hhnv6f5Se8FxrKX2DRxtVFYuygEYZ9kueavEhwJwrH28bNsUKr8WLSACZPqBoHadXH3QeBXrbt52t1WQ8y",
  "key11": "TkS4zLcZjGwBb6vZ6ysmnKVUYAxmQkoZnUdRFJx7mTqwLu1qb2Ueao6PWck8CU3HiGkWBuHSZoF4eKLWAiQRZ1j",
  "key12": "3ZfU6DV3u35FnBZZeiszZtS8BJfNSwWF8VF3bW2rXN3nA5t1cqAVNU4cJ16biuHyWiaVkvKPnhAFNmKLDbZdH598",
  "key13": "4C76KxPe5asv4ZtCf39vvXqGHDtgdJN9Uznba8fNxaJJYQRXtjSCqde7KxrBiZwpRzdiyqAkQmm2M5PJrhxsXfCi",
  "key14": "5xtPLhd5pXMP8MxvT98TZRk8PVHBttfugB8yKsNmJRvxfJ3vnZfsbsAaFG4rz8NH1XGHSkL7dRs3x7DMh7pNJstR",
  "key15": "rcND15HqXQDCAAGEJW69ojJWAB6gTuY7mf7H27od4Seu3wHs3xZ5iTtSbTy4nGzokYsBTH4zjKeG8rDy3uGwKEn",
  "key16": "3Catg7QXyd9QbBFfdpFySz4QArUQRYccKrbciKXhw27KbMoSTMo2mHedfMF77WNAzKJKXozADVfDFrRdpZWhiKah",
  "key17": "2mFrzqDg2YoXSAm8Wkm14kaYgPwYSMtfb4ABCxfY81VJEkrzXLHmeGLnYMupNuFSpAZFERBzqzM76EASXJZnixKt",
  "key18": "54PkDupdzFJgmHuZRgWYob6PhUNxyFBsTy5c4zsq9WwXxMY9UMyynn4th7kWrZNQMZPXKynJYWjc42AEqgUdXf7v",
  "key19": "v7FaBQFUGe33aE2AurAfJHePy52CkRfmD2AzEBX9BjVgBCfbzVpLfnaPRxKYwKduvp4TuaKYeSUc4M9c6ueDWt6",
  "key20": "5DYgEnMnovRZTy56Wkz3qdbGseTG845Fa9HFa64KGJT9EejZX6M1Kefm353khWtysuChWUdRVioPPuQ6tS8kd2m7",
  "key21": "2bxtE4t3VSDG3bcrUV3gGZBth35ggyARtp1EvximKADbBmFaqF7Jme2cGCuPy8UyKwvExvT4wjv7PAsj16enR3zQ",
  "key22": "wwCL3SZf7vuUUpXU4xxUeYyuLhvtdMceCFn9Rc1jFY6xNiHnxBMkaVSKZQxA11uQj2MVAx64c5ZSAZryVUjbg8Q",
  "key23": "5heiyCR7Y9uLBNxhroFwe8bTT3qAXQqqHZ7rgctzdP1GvmehJ3acKET2EQAsXdWqGwfXqvVjSJQKn89Kvur7ayMj",
  "key24": "3bNJYDipgXgHXVZ7FuFCJWteko41tVpNnPqx5Q3CvhWPyjxUytRWXnNzS9uuurWPFNMPCTDarqHdgAe1Cv2DASPg",
  "key25": "3xb5nKiRtkrfQFhHRvWcWroiJBvxEynVxQmtAXA1wMRS7MHDZ41MYdKNJwryi6FRSDLhS86RpWszutdTiuBd4fnP",
  "key26": "UrCgJym1hcQZd2vVvbw8EaM672fHQaYvkZmZrGAFJQn3hQv3k43Kpsvdsqxsbixtw3DBnA3ukrAdYYYwP9bHXfg",
  "key27": "4oA1idUn8pgyi4REMDHfrZYTmXAwMvR77Pgvx8rRjxZfz9hWfdF6pGb1J2Kme5gxtthx5UQpiTQVKEKUe7PEnCbN",
  "key28": "3BZ4vzDRz3wibitVoaXwEsZXTvM37K4PsVhTVk4qVqFWb2cuxCsU1oizwsvEavthgneadn8rC7yNK3WWL4GHRfta",
  "key29": "5LYHUXPMAUBkQjiWnJ1gzWxnFBBQnnSs7yhLwDi2c1at4f1jdQFdQerqpacsrnYAf8f51CsF6962H9XMxKuVsRrN",
  "key30": "3xEfPzzU6mXtkaqV9UpJ1fQSjDtiNvnbGwswoqpzjk1wwmSfc8CyAWuviLTM1ZAKETe8HMjd82VHksM1a19tqzFU",
  "key31": "3Jwdbg6Bc7mGFr76Q2opfGi52NmUHKNHocBJ5W5eJhHKMowjMy3wGy4LsWLGy2gdztagBnGHwS8EjQGtQcTwbSFQ",
  "key32": "2HV3BMqszbfLXTbkUpC2tfkBg1Nt8C8xnTH8mL96oKQ1dEW5D3ZbyfVQcnXCSCynHJhgQXzEWyzXcggbTCh1x4aK",
  "key33": "61SakKi3PNr7y8QabBAy7sLo3sZD1BYNo2NPUC2ERBedrEmMHy6qTwyUdLgr3a76rcgfR4oR8XY5FqFp2kmcaQRr",
  "key34": "3Gw7USZqebPSEtgEasjfEpMfwkfkDKHHaJfAtkX9u546RDCX2hhKvpZ1Xj23qQGec7V4794ou7HwAtx3UZ7jm1hq",
  "key35": "2n488QqpKWuvy555eJLbCGhL5WJchRypipkv8fmtinpWDps9iwbsmRe6FXkEFhLkW1zJtAqfjo6e8SJo4egzUTQo",
  "key36": "2S85gDhTPx8GPHkt3nZ2FmcWZmCTMz7STeqAqFNLsGM5AY1EDF4ufvfa7GeLH29Bb9x6wsrJ5QXhKa7DhyHswx5t",
  "key37": "4isMdH39YzxuWywVeB87e7XHrh9dtS511txiwN7mDk1uT7o2QBrx8JQPQKbEno5F7QphGXBaBiDDy81oTE2tYyp6"
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
