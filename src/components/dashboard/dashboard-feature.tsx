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
    "63FFVtLo2He8UJw2o3mZMcmGZqrfYUgEzUWuCmtA6KfciW927MLLf8qYJmw3jvAEdDJgndrU62ZFhaj9SWZX6RKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26oKKTitPTd7XjJsn4oUtvKi2F4xZqtrYeiKBKSkMUAtvwG2RvWtyC2y6YEn81Nw3WNBhsHHtZ2jHbjxHSFn1Czu",
  "key1": "4EgPaHzYxod49w4zd66RxAYzZda9aL6p5n6qsSLHnMa4EMpY2UMgj3KYXwHun39uWet8NLph8h2JgbyNvPZD2ajV",
  "key2": "5xUzWmHqWcMUQc6Q8i44A1doRjF8UjWGGr9iMRwJoMG7UCTBWPjA5nauEp92Es8xbX1rYd6eAnRqQeXDBHAyEbTS",
  "key3": "5NUhgTD7XWRUsqfyvsey7FEUrAXJRagEzJouD8XPvFveDEja9mMoUtB3g5esnCghLBTMk8d2cGEoENtYjXSk6y5w",
  "key4": "21QLKU7hpofkizeSRZyAFBfs94mBomWDQ5NjYqDHxXkjYxUeFzBhDzcfPiGDinN9nwxNqPuwg2uNckn6CL7ycJFr",
  "key5": "2yiyBFXCER3m8sgK77Wd2ACQFtq7DVjCeUKXZy6QPcHBjF2jHe5V2aVHgT7QsAvX2B7rN2A8itkorefJoaFCbMns",
  "key6": "4Lk8vbQ1g1iPoippEpSx4Ei5HLZr7mo7PGxaKJJq4j1L3BQE6jqVgGT25yc3jccskGGx6rWaM9tnQYWLCVPay5gj",
  "key7": "3Mg8LEmYaJF6hq7Xw1dqQQX53633q4a719R2qgJMhb4ZHcPwyimZmjjSavPL5fGgtdJEvEHiY27q1CeohWMXUPRf",
  "key8": "4RFdKPMdBzsB5CYbR7G4K4vKRWoZXwKoMsmxGJxUoMW8htXFepbP5sqh54WGpZh5bJMTJ6J3bd74L54SSpPc6RPS",
  "key9": "4jk46W5DAYqgRp8TUy8Ye4wN4YLFJybjGSDNQbQz9Rh1Bz5R3qs5uuHqBk7QcvFgzvPs4gKCK1H1ej5kh4e6vi81",
  "key10": "4j9g3Z4WzP7yo8qnd6KnpXCUGW5UBq4ST4EbWEiEMe7Ar1zDFdy1rbHQa15Lo2RbZFi5a17vu5u82U2uejM6wZ4b",
  "key11": "4WxeW7kTbx4pPnGdtrrPKjvkkn71grH86dzfZhkQNmGa5SvwiAtEsESXfjqfXJzQhFYnH8zweppLuPQkKz5TRkNr",
  "key12": "TD3jB1xNPkFQcu6Vpp43GBhQhgXWuMNQT5cgpmVjSu79XLML6RYWjof6cD7uWRHLwBvK2SbpiryYNMMkU6UqXeD",
  "key13": "5B58mSy7SwWhR4T4miMTT1g5KNhR9zY2bfVAY1UBmfzgTTSWzi6BU13ycvgtxv15xi7unRYwGNJ29kVk3xoNkYr7",
  "key14": "5fRkMP1qKsqmNEQsC4ovQjW9s4TbGB7aht4KLGNVpAWLNpbEzQQpf6ML5oLnuvKwZRt5aJQqJRCiNoeWgtPUCp6o",
  "key15": "4a7QE2qdzsEsz27B2U6wJ89Gi9xQ4ZfSHt9c4rZrn1983po6Uqcv1ZvNHbwhbVTzebtBPfWRvvc2BrRUrEUjbWR5",
  "key16": "5fy7PVTpsykTjk1sKSWgA7UL6WVjRDWYFwmR2RQQFqgWCFbEW44cyVQHBGzJJ2NiEf7HrhKV8EvqSJf5MVhFbJ8W",
  "key17": "2R1LGm2Dp9Ja7Nweg8aMZsXT6Gb3YfXLEA1Bxb5UtRBYwvUdyfvZSY947Lf4T4RfgRHkinM1Y7SEAcTtDvmNybS1",
  "key18": "659LohmNyvRvrMvjLagUsxcboWVfrvLx4bFBqLdwYvZgcuyPZzYf7qTXJinJoqUoGrw7cfHp8P8qeyF6nsCanWyH",
  "key19": "4MqU1duTGceeXMqt1Nkuv7dq5jDqsGMnvbwVEggjU5FAtBnJgTJjzW5J3eP6xFHXMhcYTcH8Ctv1TWwzSMRGUk1m",
  "key20": "3qJJaMJefhXCmrebVL27gtCjcJwRywiNsAnsF54K8zAknU5y2vj6mgun7ikuuTEgzJnKLijrMxkSNQHfoeUsewiD",
  "key21": "3qhmaa6FfDTZTE85QEfe69cnKFCykDBooppAFibdStYwVntKmYWNLW3Hxp7LJcQAmbMK7zepLQsx9FJqnZhh9c4C",
  "key22": "31K4ercjYgf39mnH8VF2kcmVG8VbqfkfEGWNBLPJRBYTXdyNSMKqWveXhVetFWwprZXp9A8mjzChMFjJjhdyLBKD",
  "key23": "2VhKnpzAUezWV3jqryUpJ64XRWNtSMG2yHjUWFGBLEHZwhxzGQgnQ8xM4urvGi2Hz23rcUFqCcarGebSodJbRQT5",
  "key24": "2DMsg6z8VeaW5JZgF3EcfMbyeBbLJUaeLaKn7tENbtsTKnC1PKHcuzvZX2gmCxgKWJAXSxXFZfJetoLb4PuUDBca",
  "key25": "4PFJAXT6ZdW661DsmURYC7QL86echJ8awvRWTQZRj96C5T44d9jUdTbXMRaqkLFmuu1YtWNuz5hcurpP47c2jA67",
  "key26": "52ue6ZP5NyjAcpLyKeGAXea9erDSmJtKh8t4TGA49Uew8ay78RLXpA7pPBcnhPMjakmq66LK55K98UjFZK9L5ms2",
  "key27": "4Kwxmdc125ygL7YcB113DSZcvVfDrKbjaNP3TRiPAerz1qRenaBgBTKw25b78yF8UNZYb57htycrSSoCwpCWdcS3"
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
