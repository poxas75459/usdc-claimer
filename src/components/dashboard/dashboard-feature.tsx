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
    "5aBDQYgcEhcGMkYY5qFdLVCXWavUtrSuan22WFbAa3Ridey4TUXd8Mp4hVp6LmbLp4PBCSmGxiFt7sPEaN9evMBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGJL8iHnM23VAfDsZ7QmwSjjFS3Bskq9KUauquHVHqEVgfg8MUP6makmEVgxAMaoWj4ugWtpUKq3aPEjMTm9hmg",
  "key1": "34Xdx8Xo9LtLDPy6M5guucyWkFVcTcgQQmn7e8ESv8W6mbGNmXPGkP4i3AeG1F4YfedgMG1JnepsiMpGGSJpmeyd",
  "key2": "3kTziyccZRjXsfYDBBGZK42CzHAXJn631a3Zvr4P9Vyr6Jcd1abXXLXVHZHxHcD8kCiyzv8gyDMTHhwWHFvnyjrp",
  "key3": "5m3rLaa2ouK57P2fWuJEYazaFuvE3T4p8pnxZAV4SQeFJqRv8a8eTCRdaQmtJCuhXqt16u4yxhgCu2GF4EytbBqN",
  "key4": "5dJmNvQE9RPMPxmgbam4hzoe2uweU8EYsBQc2afBAY2gtTpz4zAPFUzQAznf2FijprrUJEgMvhiBBt4dWahEfWpy",
  "key5": "3CjdTvXCSnbruK1sRtwaPHPUMibuKkZqEjzSkQQSPHY7Y4QXcUpbPoJHc1etbqASTUZu3mWG1pEnq5ztVoepnEwE",
  "key6": "3bYPmYaug6WMUwBHViPfsNRswQ68cDmGTpdayPhVUqQuLHELu7AjXguKXun4EpXcpEX4h2aSRdQ1HQLCSXqqmWNA",
  "key7": "4KLpRC4LG9Y4SB4WDdfBK4k1RVDQ7frhmQy8rPBzNVdgwX4YdeZ5RsW23Z9nzEfC8XQ1EMHasdmkvDqsH4CnTQWx",
  "key8": "3YjPZVsoX114z3ntTmbqVCLLradRB7pUJhawxnTQZFWs1qujbRL4z4sBcvJQ34VpFyWDLvYMwrvPpr3WC5vUdkEi",
  "key9": "4gAfyAhh4SUi9L9VF8exU6rKWinv5pS1tyqWNQpDD7L2oHGbPTKYKoHus7ju5ipbVu3U4xZKBEJyV533NsN6jHv3",
  "key10": "2NUUc2SiSg1ib3dTTSjym12cWGPUrSoFtzT9EemkzpmLs2URDQkqofqX4Pf2fcMGhntN9tzqq9RyQeAw5TWb3YE6",
  "key11": "4NGBsaJEjSoXuKK7feWSX8pKcxYAgh6kCuycX8iJnYVQ5DW69EtnC81efXwzDg81QnSb8wDeQyQPPhe7GP4UXFNT",
  "key12": "dVRAW1QYRKgN8qgvKSWzL7MYh5e42tX5ke1RjJMEXnqdsMSR1skupyxNg9cS3aZH2mck3UrCuPMk5KmUnD76RKa",
  "key13": "27wLCqhFmbBtfQviuffJiq6GbYziyYrxCxVhAEHdjdbbYHYSGNE7JUaQw3gJfY6TL7t3NuemzHc3vPo64JTnSSox",
  "key14": "5kaHDLGfURebGFwHNB8FcTVUGNuCwFtpw7SR89EFqftdY8qkurSYUNf7YiGjHEQ7PhTy1uupwCNqvDFPMtuDwEqd",
  "key15": "338hq27QKUuqnwzHoCoFNAceRmTZujSXievfFG8f4AwMNHezENVc1oACmwbtpiz3W4amJYqw2RfZ5kgjqMPXGNwq",
  "key16": "3Dj4DTbLigtUrgexZ1EgvoWDQBd3MbeGAzmQ416pnEwb6vyGkhoEoJPLbBfxJveQcoBzreYXRjcYoZs9KnGe4r1Z",
  "key17": "3WXNcPtyQAt36AjRFxV7HnVwXatoWQfHCLUPmmJksLBBjaYwTVxhqPEuTjkMApsk1xjfW5Qd8mcT1t6uAJh4KSTK",
  "key18": "3cwvxp6XoLa1Z4zuCwMQYjM8RYbLZf4m2qqxehfU7c9d2YEveA2EvC3CzULBNJh8MVaeyURqLdG9NZTXZC1M7ieT",
  "key19": "pqvHU6M2YsmBZpdoYK5eRFptaPQVSAGPjaQJdKDq6HmirbRmtTZPfe9gv1h76VTGDHGhJfcSZsAhxQJL17oH9pK",
  "key20": "2Q3WZT3HHsvUAcJD4QjBdJYMiziySDWBNPYF6XFzochF4FFBjyKrFXnxYfhSKbajELVgQZRQRq1GjchBDgMx5yPe",
  "key21": "W5KbT5EUGczPXiFxAJtvF9RMSefmMwsm5wXNJ88iyHzAK6hPJqaZivwLF1iAAWJkdpRDPcwQPHuXTf2cPvgJEQs",
  "key22": "2CxPGVKd2NPY33EwrLjz13aoghxbGGAHBk2XrnbR3dms9YNg1ZqGKxm6KK7KLBep11jQ2tL1LTKw46REeLWGGXMk",
  "key23": "41psmxrEMyHH3YNKEgT49Y88y6RaqFmhe3DGYSGv3SmhJfjkUcfgymSt1JMKsFEZHG25fQto9rZanuRGubvkvQqB",
  "key24": "4757jD95jiicA5pDKSJJksNDRrNAfTEn8oGsQZh9gW7NUuXpJ8dNXJGGhEAiBj49qrNHPBeT7jUAyLPgcatsnERF",
  "key25": "4oGMbgREVCcX83YWdaDZ7ABpw61zCbcW6avK4uC1TnGF95A1Y6ou71AZXUz73tcpiAu14bqw7eQBGNHaB6kXGLvh",
  "key26": "3zZD71JcVmo5onm7mF6Wi5AWLbmePuZ1siyZYtzH6XsSNpCfxqmNnK9TRAbNFCCEXLuJVd8iEZssP5qEb7KDGtb7",
  "key27": "2fAhioMa8GV6AiUgnrGL2ozQbLNgx8Tkx9H1kVn5o5b8hUmRECrWRT8ERnuVDzo6ToGc8Ua2xWDHW2fn9pVLAZ2W",
  "key28": "3B5sRu91NjbUGkbkvdLW8CwjjtatqqcJ4SY9z3jvfLULFn8NbwmjNzwteNYqUXYWsSESYXqS8N1n2ofYeC14NjkR",
  "key29": "5M6WBG41X7hVQvkv3yJnbV5Tec2sS7NTZwpR7M4e6WYRRQ5xXa1waUDyKnMrhNYeGwA9asqCnMTnTFHXeNiBJbE4",
  "key30": "5WGzRHxiegT1zAWM9zkhDT4nyFF6ThEbCKuymKxKX3SwzG1sMkD6vAbXBgTEDYJeD2S5uGA75Syyo4tCyXWtVg46",
  "key31": "yjiyLZEcEgRJWNCX5EJyq6NJMqmX1HjZG379fiv8p56yEqSrAL4B8etEuiBK2dpx8NXJcRMhwnfW1ixjFukyTgL",
  "key32": "5SNvHjY1AL1bTvsZeyaK1eK6BFYzR2eRGHWxXBQUyERWpPUuRwiugjLE12nMFZLA46BgiMFKQRUnVFHsPjRqrPsS",
  "key33": "BZyYx43TBrdeDxn5JJcfGmTfwiDfQsRdnBuc4bcFrNjMcwcAZSLwPg8EzjsSYNwKBp6w7DgUvoPYGYnAq4Bj2HE",
  "key34": "64nnW2dKao4cej7zypavYY99HBsrPNVPBXfvDkRnPvAiLqeb2J4xkDfF6fzGeykikVvE3wfjRhhzgrEtiXTxcjdK",
  "key35": "3N6xZmkJS1WaAxuW57JJif26XPa2jfstnak8ddAdQekE1nCyJpSDgXhoHsishXqPVgJMAJDn3THAXYCvpdFRcqHC",
  "key36": "2dF3xsrpZ5WrcXCRBJAUXhdJ7hqGt5biDKwENDfWEvhDE6pEScUrgXMcSdy8NbFJyf8hsbNzRdEyn8uRC4AkMVL3",
  "key37": "5JJyAPCEmUnjogQTExBxP7wCrxZPDPbpzAwNYXEcrMD3nFkbJbSE66sc48vUWZCumv3vPe3akkGbsDPgtEHBxrLW",
  "key38": "4arKjtDnXVrKCoVMJTf4eucVkwtoNDyuUeLGwr7AsAtnzJqbYFuHcymrQU1nbFnHQ589JeAyCym5kbomp1jekPzC"
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
