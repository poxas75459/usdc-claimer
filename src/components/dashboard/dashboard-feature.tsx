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
    "4VA8ssPzEu3WJJYqWP5uVF4MzYV3ZJr6jHMyddTEjLhJqYASoXLM6nJNYbLj82gb4YKsxejnkMg22bukTTXmtRhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rzzJif8siPqn24kmZh8NuxprhtHRu3dsKZQ8K7BMGbep8fuXAQwyuPWje8jKGK7kie7jmc1Lo5biRNcFrNz6WGf",
  "key1": "3FoBs1Uwxc7vNrLfH13VhY9s53s3PCTRWHSQ7Q2h343aZQqroQXWHYQQDLMdEb1iy3Nd98DEPdG4wCk2G5oL23Ef",
  "key2": "vAiAyRK3emEu6MwfHbSLtn1Am5rBmMGbfYpt9cVP7xLJgUf9H2dSFYibzsPGutvE4Nj8EbDq41VhYZNmcuxRcV5",
  "key3": "61xdU6YAHUo18NcF5jdkiqhoEb2AoZnHxnuezdsv1Tupt7bPsSyQ1T6bQZCz4uphqj1Tmakv8SJAcXfoxEXCSFZc",
  "key4": "5SUBCCzN2AWex684miFfbtTe8GjdvYJ1t4SbFa6UCmdV68NHbopYGekyMaJBuJUiqVZoKzdmyizjAr6dyyLHsB7k",
  "key5": "Jc2jKWzCHVJLncJvX7W2kvDVSWbRUmJxrXiBiGpcRHcSu3oh9q6bdLbsBasBF6QSQWq3QqRftZfPiSZBh5CjXdn",
  "key6": "38WzVd9cuzhQGSaKjjZftQwM1S6yoQ1SGEt4afBDPot2mvhJ4ctt7qLwJ5Us1Cr6hf1aS9vNYyu8e6aV2tLffuao",
  "key7": "ei7zNkNp2KY2idNEQP8bLb6yGhHBA9znWkdnBtxVEYZ2aJPxc6hsXAzi2Cu1pgQzsXY5bD5kJ6qixGCVHg8qgwE",
  "key8": "2G57BMw54iqtXkANTu2h9EMWjENTjdgdejxVxBNAkiR7b4xskUfRzE9PVpeYzX1c6mcDnXFKe4UxW6xdMwf6VGBU",
  "key9": "Dhn6HwjiZaHigcVRGwy2KLWXczn5LDx7PaJMih8LmXgAM6i7qKRERTBQqmnyjukJJaq63BWFua17cb6y4D69ACj",
  "key10": "2pyR8L97WDHXc5v2hHFNWCVVLDpXR5hWdX9cnTPKEPXf9FzTCiggHWGEwx6sWjE22961YCGT7bzH7SV7mnpKjhCR",
  "key11": "3JRyqjiH1MqQsuUgohkbnDJ8ouygMeHYpNPXbsNQUPQeaH2Z256HVuCb8Sorqp87Yr72uruPhKMqMZcqwNfkpfrx",
  "key12": "4EpPm9VJ1QhGKCEDc2SvMoa82nLAwGvaAY2btTg7CxSrv3HZErPUbYyhSqT3933M3LctNQHLoybmFpRpBpncVbJT",
  "key13": "4uNEb9KAX3225tFuYXMnZqJCHczo7XjrDZ7Arhw7nyCymcst9zsZsksvnRZ4hjKVHwX9yDFPHaqhXznEV4AEZGBT",
  "key14": "3gyZCMY7Uoh9GaNUTaNaH14qRpAWfDJoAEaRAsdFbezW9Z59ZAt21oiVVfjC945v5MYeUZT1RVUaekbT2RUczeYz",
  "key15": "4SkiQyFYv1DpJ25n57RiUqVZ4M39sHBRmbs4oLL8FVsXczCx8BjWFcPkUxVKvBGihMuYhc2dZujAYR8xgEVYNXAf",
  "key16": "4EybLikwru2zMUYVk8ZHgmhqYaMBGEmQuMGYA4rE5bh9zMPbzw8wytAGrGqodqcDFsojoVs6LUb97GMpWB9q7fiC",
  "key17": "28s94fNiCPX3RSa1Fb9abF5KZKUhYjm5JUmQPEBEYcV7yBFDYescTAEY1d85aWDts9KhQHTcfGpm65YJbBbNH6ak",
  "key18": "3QiyaQqHKyZDG24yk37LvpFHRoXe8EtMe2ck9e8q1RocAsWYbYYCRUpYtg2UMRepXKaFeaJvgFaWUgZCjxvtzp7k",
  "key19": "4sxpmnkj6u5zeWus5ypAUFUzH4FyznUFyYBgZosYgLmLeunUX72QVjG9xpynr4cLiJi25WR2RScfrHKwJvGzqWe1",
  "key20": "2pXvA4iT4VMEwN6SaznTwrypz3rEeRu5AJSS4A5xR8tvP9zd92vCtS8W56M62eiZjsgMy9ZysAgtK5BGjwUet36M",
  "key21": "4eqgMphhuCE6rtJbwX8MtrNcrXP7rpHDFaTQNYdJ5TXqG5AmiZX57z9zPJTW7JCkBCxVY2HiGkr29Ts4VzNvwBTx",
  "key22": "3UfVjSq2XEkYzBFoCVTG1f4douuECMxJ9oviN4R6aotpqKEvoxKxdCdr4Ly61jNaRymymy8uJTxAiCUGgpLteRxS",
  "key23": "4zhZzAiXgdNc3ArmgYgmMo6zNhoHkTMqhVziAnYa5BVkXyqkqUWL8W72s7Da4Zp7rgGXSK7X9qsHAmjPWHusNRx3",
  "key24": "3EGKH7K5RTxdTuKMaDZZEuaLazaSYirmqrKDJsaGtfqxeLcEUpzL7e9wEnydYKC9aNoapKk1d6v8cDALmjanjeyp",
  "key25": "46B68yspSNPhq5CQpe4De31cPZGBt76Ggs2PJHrhVZjUCcqyA8u9f4382XhyQcRCxzG2TWYni6vtRMFe3zkW7XNf",
  "key26": "52NtFvFK2NwuUt7jfnxR6fxPZgj1RBiDDSaGcPscAormTjkDD3NuJChc4ABreYxNvns9hcrurExAiRiGcu9gvGq6",
  "key27": "2em9BL5ssW66KBYje4teoFTtWtRLvqKNsSPE6y6tT7VyeFvSPyLMpS9Dj3N5aRtAuP3qqe836DMYxAeJBEaX3wpE",
  "key28": "5nU6BrZS5XrH4LRkccKR5xyMpbfKKJFe5dsj8vyT15FsmPtbRDwz39W1TugrevH7fAPdJ7LqiKnx4Y6bjP2NSyVi",
  "key29": "YPmS2MqQQ5zyCP2TGZAwfYcChLVGDuM91kTrBz3WBPPt8RsJ5WSPiEoGAUhvFL4V7JNRsFMgnTbqgPSycunrNHM",
  "key30": "4xD3PX6ddghtFmVdXeyPUyBGRptqJEDfbcgntaBVopsccueqnhM6DA5iwkuadgAbjHJ2Q6hCHvk8yBsrZzUPFzFi",
  "key31": "5GoaygQCjjNXu87rAgqk9e4Qe9FHsBWg4HxaTyUREfgvW3kGUrDp1zjKvnhWNeke5Q7ympQL67oDVvixfn9HUfAJ",
  "key32": "25KEGigRA7H9oLivfFfMiKGrJnyWoUqC4SxvSEvKGXM4CWD63wUzN9FdoQoip8vQik3GjpQsyQZu9dKTq4Q5QPPi",
  "key33": "2iLhHMngtuLv39FP1jc1yUWtSwePFqHmG6vkjX9DBHDLXLY4rx6xJwooozin9TL4SEHQYZZxfH2Vz6F3oKy8yihY",
  "key34": "4no2zivYUkQuiR7uhjH6g7K7hoLp4kr7moBDZeVmrgC9G1fCYq5P9QYrc5y8ahcYQhFnUeHokJmkg4KGzfd2avFN",
  "key35": "XhBdAe9wMbJE3APJzgAKQUsdxkjjjpc5i1goRS1ar3ma5WjLNMtkgbibFtZVssvFq9bCjezdkL6nw7jqES2Mnur"
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
