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
    "pDjVUbLc8SVVRczHMnPZdFmWkTiVEtqjp9JXTDC37JGz6raD2sLhxEF6eTx8yoRZSL7UemAXEa1MNbTxA436mZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N7RynGCxXMYosbd24tsCpxoHHMdxBeznJZq8FU6n9F2RFZGFwnYBE98uanNJFhNd9PvV7d6JkRLcsLb6c1uHo8F",
  "key1": "3qR1fqeoGodDqwV2tAaNpYMffpUQM5nANMeGXdrcVv48gH8zVe5AA4TeHsNx1W9KAnPd37eZRLv35E21pGCrceak",
  "key2": "3nCuoi7d4kQGEJBGPNmEyhBAtGoj34WijnSDDVGbFWDHM8PUNHKMJiiizZoY7oLXZox1FeP8PZLtQ3zwzmmgRkNF",
  "key3": "9hcVjZ2XdXtMooqArWSQKubRQFYbsXiREHhjNTEhQgkVMErLrmvZ2jVW9uc2EbskRpierqHKC2N6ENCjUQbiY6J",
  "key4": "5rHyw8eT8Q4LgJLnoho7GAdaJ9eaMcDBnj6XzUv2BJKcMeDwkPMUapYbRXqm1q7omiHC7geS2xhoeuhBEQCR53MW",
  "key5": "DQw7ofcWvWi6DdjXLJyTYYsWptAacyZftSeWmv3JuznhFmXEAzGLw5UchRtt5cNgyBjFhNrA59NFb7kADASg1Qa",
  "key6": "3joddbj3FX7hWyzgBMtSB9ZeForYXF6miuKqazyWXtGkDv4cLxZLPBpWHVTrR5dSbtMHqGKQw2gRemLhHxWfNzS2",
  "key7": "66mKUJhG8jukm93zYMSxSkKnYXE4wZEdeL8h4QhwewuS9i4jcAUV9h6LBN6xbrV13HPZwzyS8VTeH2KsHmuCcnso",
  "key8": "3JqYfZWxUkJeQVGJhp6TcqwWdg3etzvDSMXp3HLNYnaXqXTc8PeED68HG1ZhoSxj7edvdAaAJJsoJnH6oXuYsoE",
  "key9": "oEvSh9hhanVDCNV5uZfhVNRsH45taKHWUbXwXxd2ATgFGDvxbu9CEPssJQvjj3TK22zbAKrefpmitVLBtPHBBge",
  "key10": "3GxjMUsLH77HVwweFgXVygjFmRGbzMzm4UZiQ9Dx74nWt52WpSp41t7WpbMxhHzpGwJ2espU6S4UZXpAxmd5wEZr",
  "key11": "2qG2LxqCvHviAU18hE7pxmwJzyKDefEr6dyRnwtXtdHtwCncxascJYR5P3ZAo3skfy2iQAQjPLng5qrSAK3ndgqE",
  "key12": "fysyuUWeofEVGwweGUyaEbimer6TbpVXMwQRFn5kj6Y8ye66JyACVL5CHbY9uaHSzG389DKzXei9AHBgQu2BMdC",
  "key13": "3r1Dt5JZHADDEMaYr2zaRbMfvf5kAxVbj7oL1QN2XUnNZCzJt8K5SyaP9ujvUWocwfh3ZB6K2KY9UfVfzbfjTQMi",
  "key14": "2CB2KCqHsUqAMFqMZ8CbuSbzkGb15ZzsCNYF4gyGAA6YsQbDEdhapd7BkQktdd7ePFRFLCz9n9wPR89UzUNA5GLe",
  "key15": "5P13PgdYhKQufpzK4Jbp6CC815z49C4HQHfp4zKgKLVdjHs62MRH91gH4DG7ZQYUVArSVnSirFbHaPacRGoz4Nk5",
  "key16": "2XfFKAm8AnHpL3NJj2PWfF8ny3MUqkVMq2AzjSgZHRPDx4FR4ZCDYtePPKYz6i1LHajZTbowMD5TErw1SwUB7oLo",
  "key17": "Z1hbPGPpA1nPeGsczrCha7jNRaZUw3HXj1h2k7TnkuycZvwLYLbYYHzB2iGst1yzUH6BauoRSk196VJjcXoygkD",
  "key18": "3Mxuwwqpp62vAYGoghfrBeRu2pzsLX2xtp57EmchdXYxJTeMPvPiahC2gUkWGdyZvCEWgEdh3HzpPzXzWC38Wqpu",
  "key19": "2iwEb5iTvYAEpeVbWgMCXFjrKrqfBH5oKBBjThn74cQXkA78qZFt8taahezwXQRHqC3kkJLzNxNVWanimd7RtCXk",
  "key20": "5Kb5DWctVXy7cptdFWebm4K5YjWBy5NxZcU9hMqhDctdZF9ESRLnS3ihw39bcVeEpHA9urqGYCKJFhVRUBxtVbFM",
  "key21": "iFj7MzinccZ3iVDNjFfxx8vQdPLdegFDK6t4JmcAXXNJ2Z5tU4eQDQA78nTv4MaNhoAH1EiPJXYrEMzNNk2pGD8",
  "key22": "3BFJbLDztWE8awPyHRYNDqquJKCBPyLyAPeNcvFy1AzmT3Tq6ML9FZ2Et7YfENQ2yJguti8ZV7cAsX7snFKAMid9",
  "key23": "5LTQq39qndTFf1Rk1qjSj72MMnrQq4ZnXRYVb4ffrC2tcnhYeAVNeQBSNtYY1A7PLn1ZgZfg2nzLUua5kZXT1tyi",
  "key24": "3Ng4NhaeYzjBL8LhRETsoPSHQxW8vvxNFfnvkesRvpQTARQsg3asSyKKb9uswrCwJBGhZJK4EuNWc5yC57iJLtAf",
  "key25": "5UBFpQnPHRYDnXTq6DXZhRZVbwxSCuHHuctuzgm1TJgfMcMeioGDK7fykpmL9jyGkzQVxq1NmP2RsYY8Y4weQDu9",
  "key26": "4ApeiQka525DpFiXdfkA7DtoYjMMNCmucKyFox9TDX7QEbUfFXwUF48qGXw3tMWGPFr4ogEMEw2nM1pJmxz6yCcA",
  "key27": "2eeyb1hFHZUJNdy7AwpUCUtNg6YkEEA1Hyw84TGf9dxTDoieWvP1yMYiymcZJKDFeoDxQwuNAkddoeP7CeAwgVmT",
  "key28": "36Uhs2UEwk6LMQZGEWMunFjdtWe9XDLE7eeWfyKTfdpRUKPUStRAQMU5a5ufZc6tDkoddyYKXdNcXKsznxgNgyAY",
  "key29": "4Svm3wLehWQqrydNq6cm9w3xR7Nin9uuRhgLpBTXBs2EbfF2cYQykgzS8EBYbwVZs9SknHYJ75CydVigSXdEfWXk",
  "key30": "ktuNdBAUEQL4WoQGR5EEg5oCXUpmHvhoGJNpmCNW1DPo3LGrYgpba83tZfGNmSuBXtNNrQ98fVRYEADXMWn5CMz",
  "key31": "5nig5uRz5GpDjS55wFbhEG1yEPhfBPYP5dYy7Ar4EVTxAzowzMBEdEsYEmxdN9YcHEG1eTH93SMkGYwsmhscdgdi",
  "key32": "k9kabSwDSKcLTaNu7ewpq1eTKzFS3vR2xU56tQ5DdzvYZBXjkFqSU78deHECBA5fMz5yLbR9MB11sK3Xz4ygWWX",
  "key33": "2nxaJVxdhJjMbaQEdGZuTkrbhcehLMKqgoatfsLCpA2KA4FvJjA7wi5bqH5A2FbRkZr839JdhmiPNKg6DooUELh",
  "key34": "2VZtPFysmM7jit44RfCX4JMTs5jduNoC8Nyd7Tr5xtN6KRVAJ8pK8N5sgD8VHxXY7qSxYDJ9paesPVFBMRFhHZ4D",
  "key35": "XsCMWa5FSzj51hAcAPgRPBUyLtVMN3nyZr7X2CDQpoJESj1GbXbUQqX4ndSAHn6WMsRcj9MUS4RVsNqWmdMMymK",
  "key36": "4GYXx7tjf2JyKvLTwNLREFP1guz3rLsJ6u8mHJKougeNcGMNMKa8Q8BSJy6GC5Vsm41mRYk2xADCK5K9StHcuPN5",
  "key37": "4rQp2HeETWBoTRSiBRoycGRnbUYNJDp3CyqccAYMGL56cKcBd4o4sYM1maijiHWN7PLWuKHJ3bXp1GHkFnyCYVgB",
  "key38": "3eUpJb2Pk32zfaDugqYicm3usxXS4eJH7TqY76Av1VBUnRirdFGMYJSbpFtTNA71S7PW2JmDZZHbDnZ5HcHStYye"
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
