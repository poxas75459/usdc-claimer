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
    "FUCtJZmTCxmCrpbnqSRZ2ZmLjVzrKgpEeMkV9wwnj2Q84VKYrP2CGnrAXnTR1G5bv3eq4ice4yuknq4BoJ7S1vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KLQP9fnPyCnNawVXvsdYgUDzSmpZiHJYCFM8ja3ZVqNX2fxWXei56zig2hy96Qj4B82LSKbVLV1kSyZ5iwvTtLS",
  "key1": "3nXvJW4yoGQfxKMqWM3fWFQj5zAEsQgzke7s3gGCR6TLBhX5zmBqhBCF8MbbGAPf2AreKfSZyqyawfZxZTsWyoEJ",
  "key2": "4DCjC16zqo8SzbLSqyZd6iBBBjbrkDcJSYPfdWEWYYRfXQAeaUJK2y1uvsZLoWurNNx2tLFpopvYSm6uuvCXQpzj",
  "key3": "2QZgMrBpvr9A1F19waqyUb1UACyg1bQsnPWqRjVRYFG6y2MSf2gBS6iZHnXTdRje9aCSoPk1ZVwV8ccwkwb3FzeD",
  "key4": "3mCjwgSmXZG1Jb2DF3uKVgtK7SE535KEwo9KmBMLSDTrffkxE4XLDWediErUPGoU5gDXQT1aTK38Lh5ZDPryVbv6",
  "key5": "9mf3HnUWSzj4wmxQ9Ra7bAFvVT9cfj1USuYPhVZ3sN76CaMRrp5DN8Ge7sPgWciqR8yKwRYdSTGHbCVy7MMM97R",
  "key6": "4Nz84WHensHCZyyQhWvVaDD6f6RmEVZrZu31nV1ipk9v8enKZHopHpf3YpHzzXSTXVbR2UPxC2f9fo3JTdCT5rEg",
  "key7": "348Zp1W4Qoh8yh8MFPTWtGE7ZWAY8mBr2g5oiGYRk6W1DyAcyrZnuan8FfugDLxHJ73nwPdnKYL1C29sbKfhqLxr",
  "key8": "33a7WFe14br5A68tWTqE8tcKD3XTP7XGDEtWK524H6Nn86PX9SGgvwdQcrGQ8QvmNMHSyefY8WcC9aio3uqr6y73",
  "key9": "5E2fWwCwZcHReaN2Q3RLf3APYXAB2rVtj1H17SyFCK8w3jeXmH4iBrTYGB5dks7EDWGyAKWEtVsZbkspzUJbyv24",
  "key10": "51Y97cyRyeBuAXX7u5opWWQCcwaZwi11EsXZys8fkNEYwHpegiuSeironRF2YRntn5mov3i94HPBEdZ4Yj6ztN6G",
  "key11": "4QkWo2eyvbSW5CVHU7WqVS1XWK66ZbzKy7wVWzDdBTZNAEdubEuem6YjjViRde7gc2SuArHBAQdKe7G7oYq1ZGXB",
  "key12": "3xhJcjXqnkbHLXmCbWSG6iZnQMJa6RmJEp9EvDM71Kdtz96hiaQxiyR25zZeZU8AaXzj2ZVDY2Jb1bFoWSPWGeyL",
  "key13": "36vfuPSkz4HZr86YAHemoKwfmY8NKQw71kHqnouRpog6RDCspcFfTt8LxpSRkgRPqZNZAZUN69FNwPX4QQ8yAQbt",
  "key14": "4smVLM49ZnjLjYct2Unqar9oSWWsHY13YqSuSwf3WFcXSMcuJYnTaj4sChydRcv6JY5NdbT3h5aP1grBeBReRWMu",
  "key15": "4MqxVLJbomZaRHufzFqX7U6WhX4RdcH2GmNLteDMWgZGgBVfYWoctpTBu6RFwdaLYD4wYE3nC9gRzj6igBnZyZ3n",
  "key16": "5QTPbRVCtppcZRctqbudydNoSxUkCe1xJt55tFVW84kzkfeQSh2moAXPsnTNYuXex2ALi2bQwx9PZTm9rTcXxnoA",
  "key17": "2VJDowZuxAeys3REkxrhrHfuisWJfFprupRh4qCXUnEmQtp4nJpsD13sKVUmzDuNDvUnMhUZRWQ4PVsWPyvE2qBd",
  "key18": "5Hcrw29FgnZyX5rqUKuVJMtcLdFJY9M7ENW3q76u6B4y2DB3rfSCC8wXAKfwNr9EsAWww5nYmk4483VGftgJMaox",
  "key19": "LpHoNVxGVWXWHvBdxJD7Y74DLrNZpbDdmuzBAJde7PLKqdr3wwhMzSrwZwrpYXxctzcZgs2aiti1nSXpuSPFsHg",
  "key20": "2nB2onMoPPNfuPeYFW5Mbfqm6rd4JZSzfZQyg6XoDepuANQYEVyCxzy2MiVCF82EeiTXiGvCE2wfjiQaT9QsG2kQ",
  "key21": "4YrTDyNMHrqeKHFk2XNH9qwLxJW7GtPSPH6EeKCMnoMQUorUWDqaW51rknMnoQjr1jom11zVZzsqUuuzrRafBjYx",
  "key22": "EAPudQp2hEKj91cCP4g6kWENsRkAYAUrFV4Kvm87RR3UhfmniMFSpKqnkwLc1NDFmnjusQkY3f2wabtCMirzyBC",
  "key23": "3ddRoWfdLphmjmHpTGmUscLyTG2iC7JLkf452n9R6cGVQV3YUX96HyVhtf7o5p6pXy7Vx2CcNaZmw2BCZaFSbRXn",
  "key24": "4S8ghgGmDA65pYnvvurHitWwqfZ2P5ZTntum1RrNLWyjCtTSCL8GLKjr7FWSRrR4jjPLj4YYNfJ3XysDz8ztBymW",
  "key25": "5Vxt7ZBBTEjYhn6jUeiZC9yT5VZ8qyfseTcitX5DFv5CKY5pExFydkAcVxwDD1xoixhY8AuRL1qbuQvHdEEW76d6",
  "key26": "3CoUTqYqJK7qMofZncwd63H7KdHX5fPje47KNT9ozfGbksvQDq16zv3KWpEWEc3jzyEtdMRw3AVMSbWFyWihsqC5",
  "key27": "4CZUHeaiN2XU9oEoKmdyabvbmwjKZDaW3NEtuv2DdqNTDpxusCjDGJ32TE55LYcATZLt2xjDiQkrw9YdWz8Wd7yH",
  "key28": "5Dk7dV4eKvYcYcrxzMZzQrViyXBYRkHiK4KENFkY8H2V5bbUW7Vxxri7VvauHU7K7FmZD4F3PRv9wVgSLAHtCeJQ",
  "key29": "UazWxGJ9SAtyNGbSiH7YiMafsQCfyEMvvkrXqfH87ih6UfJH1VWVX8y2y1fXX6wdaeFaXHjFM1XxDNtLrCT2BKr",
  "key30": "62f5brTz6cqvmuXfvnQsmEkTYgxxw1uGigtBKbw2jHVgZdxq59Q6TngvAWgKLCjt2MvLeZYpo8yBGW8YHCK3qY1n",
  "key31": "23XqCYGMspvXszRwqkxaowEUqxUvbH8eTPoqnvHF5ffexQ4SQvhJwzUgjQj5Tcs1owRqHLms8KDaAa1rZBBHY2jS"
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
