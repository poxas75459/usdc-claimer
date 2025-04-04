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
    "4J4TJPJjgc6MZrs92VKAU8FHkyAUoegdzJivDJpptfRw1tJMzHiamZagr2n7gs58BivmT5tAsQR4tpNpfa1dxs3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XxiR6qjUL4h4xx2FXWqmx3UTfJymDrjct931geDBvN5PDwfgo9UwTN9dY3p4G9UxfFkhK7AsqhgEN4LtRRtNU4N",
  "key1": "4r7sM7QLdGJWRNmrrSQPmz5vi66qu7fDvTijBGBzEMs6uHgEnHEpqRCubknBwM2HQSyVeMLpBCjufmRZwt3GSXtY",
  "key2": "Fij4bjMKeCdvJxVK62B8JLNbFAUKxnsh3GXq8S3qJc8c2Axtta89Fh3iTj1swuPgc2thDmCEdFGe6gSKeyrvfmb",
  "key3": "59mddQgdgBQqxTYynrfS7WAKLbZ7eQaK2L6NQVbW8spHr6sMRgztu6k9ffwLk7Lapign6bKPNANeqVVSao2Qdakc",
  "key4": "2RbiToHjY6QJmEnZoZe7rJbtrCqMbmrZk3peTbm5gRB19vjsgVy725zt2E1U7c5EQ5oTddpFZ95zsjKTd2svYkRL",
  "key5": "kbHCm3RQnJNGXrpqBmgQezvAuvQ2pmXJRtjzygRRU1tnzotZdGum9tdKcWxjZ6jF32jJrUqet2rMQDqCJmvAGZW",
  "key6": "LG2W4ZVxTvjnxh32aFRLSFU4XrkGwtSCDDnenSavm4TqsmCTq9S9dRVJFNSRbfmUBYBrBBRgfQ3uyeEdifNLRAj",
  "key7": "2nLe89rHgPGpyw4w2MLkNTpVAfvYfTy4U19SEr4P7ZJxJFQCtuaALMYd3Jyr2rXrBhYm5rLjrDQNQLVLAkxsggS7",
  "key8": "2F8Sv6bkq9qN6eNR8oF6G5n9RqRZwxeADPwkGxMbAqHf7iStrzShamAD9eza3abwczFyKxTr3DCNiPJYG5xEff8r",
  "key9": "3KNUacg5UDhQxDEH4HLgApRu6uvFixsoNSYaoHeZPY1y9fWTEwYQqtq8ZoyXTr6dAsSPqByPfJKMhrqFfnyfZdji",
  "key10": "3trnw9ctWt1ZYj3i8aVqCK4p4sjXbEfr4t99DesZ8QZebg9t3WAxZmu4m1rLupm3wDCZi9Hsc2ie4h4wDWjkDkvN",
  "key11": "STiedxSDYXaQ91pr14pxYbggg1jPZx8fkSEMU9AovgxfCafW7xzHL5kRmkeLxrqpJwUWKiZ88QRDNqeesokTdr3",
  "key12": "3E9mLfvrsqbxWcRqQniwurhu2M9up6pTn6sxDsoQyNpvSZM72AD6azdQf4QTayHoMtogBjsW59fUkNL1eC57SgxP",
  "key13": "58dguwka144jiEi9QGGBVW4kyRsq6wFJoDCXv7F5zCwXQtt1tALHZitmxKULhdbM8f2YgpeFGkxarHHmpDMqNK9H",
  "key14": "4v2TEcHZAyLkeGPNPtUc5x9YYV7nKmKd6aqGBhKQcoveLiXW3N7aACGgnjrDtFoNdtZEV6sQi7eUcMqGbuy4p6Ci",
  "key15": "312RqXz2ZjqBCHr5fuW3gDuGx9TVdVSDpfeCiMUJYBRnKtheq8BpqTJAKHzSnjn7osmVmH17f53RVkyBY6JwehJD",
  "key16": "2XurTH2ZkJno4y2CpGPkMqHSQNMM4sHtKujgZc9sNe1XBcSzwN4KdzLKsvF1AiB1unpGstFsNRnMhcWbXgrHXB1M",
  "key17": "4CvnL2T1LTAYisSWosg81LoVRUuGi95CC9UNQWWi7tc7wKCnF7hLfe21gtrDvoCGit8WQoGsBTtivajXhYsrbQPe",
  "key18": "59BT46dzTda3UP4YQfhctHHXDKZ9WyiUEXB8cN5WLxLdCv7P4CQ9jS3cjAdWd8fyanDkqNRPajoTPpWgadGc8e5L",
  "key19": "5vpQHupePPLiALQWXcVbbLbcF5tQFCwHq98SDoB3nqS3if1u5HY1PAVyKjsMkhovgBCVXywPpUcr9sc4DykhdxBU",
  "key20": "2v73QZvAFnheNHdThAtvcc9DxJQxstewajtHF5ouxpqqAsqZLVkQXG7sMZ3sxynxWgmBmfEgW293DQue8RjJe4WT",
  "key21": "4NGYGaRwm1eBH2JfBY83UySqotfFobBYYgNenPzaLnofQmtag7i5Cx2d1ZQg9G67h1ThnzdCcBuUbkmVKQutFu2x",
  "key22": "3qXeiEyVjh9pBRfuUPpkLULcs5RkbPswFDJrFpwW9mERZe3qrU8WeutXbYPwNiCb8kppatPbTNJWrnCzsLGUWvoZ",
  "key23": "2CLyXkeXwND4Tnr21oFkYTbUtqAbTZcvJ8bb1ZpuomEBQivHpaLpfbJWmF6zRWbUUAguwjvePeRBrmCW5XWhGoKF",
  "key24": "4FxfGGo6rMM5yuWUfqVYP7BjvshpmY8j3F4TxAZcZqTcj1cwDwPoe6LyDF41EyukY1yrKJN9yfKeVmzMtXqtaADM",
  "key25": "zJVeNnAvvEhPrKp6nyzMQVYvPykCvAbwc1ueJEG3RgbqVZaimbczBRm6gZ4RExTWwzgucBaiLbt8PULtQAv9bGq",
  "key26": "137DagikTpQNZqUoYR7JSFYkASHiJMbRe6XDvtwg6Ni5HPiHk6p7wG5u4w5sfzp1nr5gcsEjeEyAoPhSf8k28cQ"
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
