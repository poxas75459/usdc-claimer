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
    "pUN3yHNamBwKt8a8LCdd1YxYqjnVEojjB9v6VPMdTGfo8jnKzaxm595qzswTVhW9XugKEPfLqGPMEGhNa2nqmgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qn5cVB8H6pEz4TBn4zVWkajJMSNUTCthKsy2We5ebfmAW8FXVoYJQixWmpEJTH9cSAeFfAmaxEFLZKoAXcvAKHL",
  "key1": "5fAREGNbZRppBwugbnY9RhFokhQgXamsWSB2A2K6amwm8NLVcTWdu46L7QjXABQiKAPnj28Yw6maUGcPLz1qdeFG",
  "key2": "2zdNvLjjPVYZEjkdSmQYPtKbnWyPEBiSUNVNMovhXcC7Jo4XBdCoSoRpMDNZ3rs6K1yo4DmKLLmgbkczM1E8kRxM",
  "key3": "4D1Gizea7aQBhwvi4Qho1igtW4WiygQiojg1jVWgYs1hNivKN665TpBC9zEoVbMomhSfqwaxH8B2E5CocVj1vG31",
  "key4": "4s17LD5s9uy1dTuM88vKWRw2N6CQNNFh5g7C5WDh2EJhQEz5wP64yBQei7ZhUpMsSCdeXNw37LvX8CTiksJVUa5J",
  "key5": "47g623GonP3QNfAALvyEoZv4RXeqLy8hY1nt72YmE1RRa5NFc6Ttj75B5q4BXPHReBrDVawAc1RfgQbBfCkRCXd6",
  "key6": "2CQosR7rEiViwpGbMHe67aRrNoni4B3rSZishU3hqaBVUd4TdHLuKamkmopfBmuybxMnfhFEW2mNPUCrKxU5jBAv",
  "key7": "44v4B6uoWxC2bemZWZz7t48VkvvQGDbB9qbsGuBRB95mfGZt2pJihAsKU26Zigo9yLMjw7mv8QJJgT8DGLAuxX3v",
  "key8": "4yTAzGLpLQtpFBYBCi6VCbnKL75FmxgiZFdseQi6MKr5NakfmqHJAhDf7JvmxfSw6214qs1xSxC4ZqxmRSYgstqN",
  "key9": "2dYzCSckj5juMHDm21Yqq93fov55oWiLbeNu1GQMSEDbM3SkXrEuxpjD28LW9gzx11HF6bT5fiYkNMPGXAtQAsxB",
  "key10": "2MwyZgKj6U2LsAW5Buo9oSMdQzFj5Es2MfhwJVqRDGpYraqV6sVqnqcGZtKYDqnULQKjgDvquGQexiuwcCejJd8f",
  "key11": "5b6oL3h7sfrMJnJnBWtVwBrbLhms54dV6zfMJJKod1Fjk1HdFb2ozEuFq6j17PJWis3cpJvG6Di115qx3akjZArz",
  "key12": "4jhB83tfzJj8pgKwcsrqfEUGqxGGnizuRXgkdqWWM9MCA5MktRviXjLN3FYr17jDaZrfbrBN2atRnTqCzJxhq88f",
  "key13": "3mEj4KTtMU7ZmhEPXrnBtyVMnnUNt5V6Q1LKkn2FckeK6FkPg4vnJE5YiEoeLYhbGFvCYBfn5jS4U53oxXCiRCg3",
  "key14": "p2AmeTosZq2g7J6s3P95LjN7bfK4U2PUKdH9n1gprA4AWrqKu8xJpqoDtyuSxSDGiz9TyuK2N1XLgJMCto6yBZZ",
  "key15": "5kdQm3WQz67kpqD75yGUtH8bZDKYU6G97wYf2JYkGWs7Q7MWHfqnZbKJcnuNndCekv4JLPxrXDcHaKWa83fWBPtV",
  "key16": "yiRCSEXitQgXQNXwXYrWUFbo4Nnun7Ac5Rtwt5WUsv3mG4UaQXp91cSwRvty5rr8pcX1VZboevjrD2zUT85upaw",
  "key17": "3s7kUy3kf3cJEGJMsA3c2fSaMy6yLZLN5cacUH6XXwMT2dvdAfcB2hqYGNs7QvKVWt6AUoEtkaBrESKsPJD43FoE",
  "key18": "5hRqUKxPerx35MSCU3haxfdiobAi3Mi9K7xnuGNQxH53z2GhaVUYjdHpc35VxR3Xc6CEweXVLeLHb3dF6gjKdBF9",
  "key19": "43EDfjpTd867ScjvQAo6QSH6PncZppvVp6iamLz2HioqmkiYLFH1K4BmypX2fiS7gvfRZp6VT5WB76aaeHHQqYNk",
  "key20": "4HM2YxF9x4s8mQmCkfkXbZktW6UmU9P1mo3XMUkjSGdiQ9HPVCMbQCDXNHm61dNbc5YsiA97XQZF6Km3MDzZuGCD",
  "key21": "2HxnfAhBHdMtUaXotpgdj2gvPenEuHjiy6uLeDEwH2Sv7GDwPost7jvu89m4MYLrv8B72vDRCqJsYbniMvUsRh9p",
  "key22": "3gLuLFBMWEZu3kSdBDrrjQ9ppBrZUvcp5Q1zrzqk6j4goG6aqH39pby4Z3c68LDeVhcswSXF2vA23Crx4iAfY5rz",
  "key23": "4D4XyYQS5LahQVvMeesnEceuujUwaoQTyYLpZvxsXQ8cPSDDvzDuSu6xfvdjFEnmFVRruVwsfACnkPhM6qop6eh",
  "key24": "4WbzViQMG1aPxpBdSx3AZSQyHLGDmoWLUTsNbvFDFCa2YYF2yG6tXBJEtDnZNKeLKi51ABUuZpGiPoCJnReVTCPE",
  "key25": "2sbrXAAhknWBCja3NwnKnYByYzXdHmfnai2KDwyivJ2wKEZffMVymFJZff4xM2Ko3mTZqG3bey1J7Sr2Lissfwg8",
  "key26": "3dQrvFzGVUcK4ZXvBb9th88x9S9rrjZzdVJNMkGsbtbDtxNadKLHUGCLM7b3k23NEceT5FXJHLmKPYJAMEPhFayF",
  "key27": "2RT2Nso9VjvskErZyG5vwA3edWjKbHUXS7Jw7iHXD81ne27vMo4LCQPMQYyyw3NisSvwcjgXYnXJEuSeUJXWrB5W",
  "key28": "14M1NvDo3ZjJLmQJtjvVigCJLZ9A5YihHkPZNTqH352kGmcQ7HwebMU8DfQefhRdm4yVSDyQZ59TFdB1iSr4E5g",
  "key29": "YVZyDd194DUxLW3Uei4hyAjaBPuLwyW3TGyNbisszk7xU3aDFksEEcSV5GzoHC3o19ds4H3HLSJtB3nZQuMU9wN",
  "key30": "4bir5a9ZBXXHR8FQRV4CpKWgsPfBZGa5Fb4YREdEew34nGU276EbbLP2W6hRPfHpKh86LKY85RFuh8ghZ68RyrmY",
  "key31": "58XqSBKqJgLzffcZEucJjyyaip7t2tNqGcRHgmhXtPoq68Xz5bGkd5L9HMyb32eEYpnFqgEJqVjyYRrQ5uruCHKw",
  "key32": "yBxZhFzqdrdA7S4tAaKJfKg5mDtsyirkZDyKUdq6WKWKD32BhojbVEuZ4qCXgqWmx6MX9vepsEpystyxKyrAy8G",
  "key33": "3oQMy9xVYwGFckHpPAntnYt6TMk56sR2MPqVq9X7MvUhqhatxp2gDtjCuph7NuKF1baaemLzQDKVfxcYGAbcwPvp",
  "key34": "VHD3keZecMfWVngQK624MwXf7wr2Km5DUKfzAsQH3QrUwxC6PX1g2apxVX5Z2HqAq2DqieRannegm6ADrQSjTRu",
  "key35": "24U2Kpg2GfNZ1FkUVF7uqgizP5DWcjJ5SZ7tCZs8mh4kjFMo6ayV7ooKseKSaRHqqegm6awDmFwQ7gZVYprvxedq",
  "key36": "uMLoVDZL8TZbBpCSggy9xKNhsDSBd7g2xX4w7UYvDnJSKRdTKSPUnU256GiLzpXdA9tqeKQGw4MKDFGqzL1CGtf",
  "key37": "3CAvepqPN8dZPvb1yeiKunruMAW6TeLNjgEEttQ7iGB5LsKSXrjs9ShFYKZUCmMxwr3ioh6CBgLZwjdrtnQeeoYv",
  "key38": "2NSUjM23m278KXKZacDYHzZDKiZAqGhKaWqhK2ChRdz6hMrTeZv82ME93Zi93rvY5M8gVzYXsiUc9GKn9nFYWC2e",
  "key39": "2PKUM5Q33VAX6j3yfwXHnSwPLhTyJsMFcG1pnu3WjCQhiFGGKX6aXFJrxZ7Jc8Erpw7biLshDSiziuRAEGnY4puz"
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
