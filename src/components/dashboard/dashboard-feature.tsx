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
    "3Cbj5q8BmPm76yayh29vMogJf2aNZFnqSr1nE6GXyw4gs5DrK4fKanip6Cyd3FWQYMHbBp9zmAGFgwXrJyuhHDjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36XdiyfQy2Q1YHgGKUopbeXQopxaP7jUE4kdbRmrbSiBb36PToKEdihnJ2hYLPyGakhcwzfmqewkZsJGzD8PTB6t",
  "key1": "25aMD3o9QBfSGzfwnDTePmdyJuZzq2dtqJHC5wqeDss2j6GfvkU1HRLkQLEHQCcEx7xccTEGfHta1BXewZg81WSW",
  "key2": "4Bcbhf8EL61Bk3mWC1UDDogGfkBtf3q8aAEE2g5AUrBditXF9d8wh1PdNGjHMGgHexEvUq8xXmQc5NujdzXHSnqV",
  "key3": "4vcvGLJQNmAfNehT8jQ6hFKEeNvLvah8riHm8hWMomn77LakvaG1MSzqKk4bF3QKcXg3yVgevsEVdqozFwaq2Gw9",
  "key4": "42MKqwpFGTseQTAMkw8JW1GikqL1dT2j1N5jeQ7Ed8QjeuoRdXcEimLSasd3ZgwL7rojoAAo9oAvsfEvkrsjfycF",
  "key5": "AR5RpxyWSXPBFDZsbPQ3aM2z23MeEsMKV2V1yBDy5s3YSdMKLk5dQVdkrCZSj6DytW2ErsEeFicunYaroAmboSE",
  "key6": "4mJjK8Rpo5WK6ejk1Nzw3YdkTpNVMAnVVj46GWFFJfR575tkYMqqn2Xv5BuKs9hfXgN1c3RuRoaUNYJ62QB5rhMh",
  "key7": "2NqzKxm4UtFeyer3oLwVWEDqjXsgBtB1nuDMz4FjJ5sxahtw9vDo5Sov2SEr5wVHNLB1VmdD8t8KxFjWMjZCBXa8",
  "key8": "4K7kK4rhLGKvDN7Q1ZDc8mAWqYafWsVDk6qZTbnhgFfLxtq9KDduMnpCBxBP7Ru4RY72k9rDNibkkFhFMZsMV2cQ",
  "key9": "5bqp18EcY9WzbBvSXq6R2NjQ3co2j7j4ZWYMQaczSDgkQr3J29ooxKzNiVZAXt7vYzc9DWNeasX27vQADdUwm8Xu",
  "key10": "2X8sNwbx9wpdgET4WWuFibfYWdoBYMvCMdUJfnurwHm7mWWobgHgkoNdmmodnaLQZBEPve8gqaGoKSLufg38YYrU",
  "key11": "48cC6WHBAgiTQVcJWa639KLxcrpXXhs89m4jVgRuSyC18mHrZfSM1jp4JpRySheXHi29827WeT6fmpXeSwBDkbKe",
  "key12": "4Eti3DD41SARh5SCZa6NkRe58gayKJps5P8aiQQmzzCcfMnbi9WugXsfDWMd4FYxqxGDWCdUXyr7Yp7Tq3pWkzF7",
  "key13": "2WS9xkXpSXZ45xaPtArbCsQ4be9y7JVsSuf9WwhXdpfziL4U8BUup8mnGVdGJrw3znFZ6Jy4H1jTxaSPMhKpdy1C",
  "key14": "2MwQdgMqUv8M4LFB5AFSt6nNEVT3chMnseqSHv96UzP8U1p1Dyf7WvqAbYiXZmzXNZ5keAU2drHHBTU1JDcPNVX7",
  "key15": "4jaNP962kUH4VpQ65T6LWgfq7s68VfTvFsBtQrVagryVt9ms7fbNKBKjBYaX1A8kh7VQ7tpiD851xfPj4jbfmR9T",
  "key16": "3TuraS8QZE6gCSi8Skk6E9V8WCsee1yTX14MUGAjEUadyVTCRqu9avEeSGMQBCCc8FneiFycdiEaQVsRWEX2pXHW",
  "key17": "5tZ4j6zRgbVAGzTRbYeuBwh1WsMEebkYkXigxJLtrX1Ycou8wVV64weQpC1i6DY2tBAgKkRJKV4Gt5Bh2M16V9yR",
  "key18": "DbFjKv3zAsEcSZqNRMW1w1k3uiNGZCwdLWeLaiaTMJU5XDGDB4hjHLsrdFK6wd1G5vNkPpa6xkyahkvi8Nh81zh",
  "key19": "2xUCaf4qEoCSQW6tP9tJB4sTz5yD12GtWWRWkWbuh4iwn6zdxYcy7Yg1nZxWCUPudc6eRLRZzJ3735cVcuv3VV9e",
  "key20": "4i6btJKKKxdga6CcifoXiMKcSQZpcwbzYxGAs9HkXABYVS5xSa17KiS3cZnW89yUd91p36mAXfa5E99bDijGNppy",
  "key21": "324ab4Gzapidn1XZPMZMQDBMMvq7t8JzngUBPjRphLbGfbXNLR1RdPXmb9Gjb4fMExQdozjcbkxuvZzFBhozmLxY",
  "key22": "4Q3UBqJYRYFLTKTVt6NuvpfxPJyqR7Wc1z8W48z2MaRX7Noi5nMDa1xcR4e6VjCxrR3LAjP6AGUCpidfwjkKZeMb",
  "key23": "438cQg7ZrGsLuupfYze7Ywtj9Zk8vFm3iTjoF1HifSTNeqTA7bqzLDM2QCrs9rxeVSCHREP73nat6zMiZ7ehZz1D",
  "key24": "2juNR1k1f7GhrKzPL1gvgUvAPveCxFSkVxw7becyMei5mJHPaMC4QTBC27ChaYsfLYjgmGJ3zYSHgS6pZJg5rGH9",
  "key25": "5QihYaFLZp97kzhbHj6Yq483AR4qJoWbw6vNhUGEgdMJrVUaTaBZLJvtEZNxurarvr2cZzaqgNsteghMsQrQnRFj",
  "key26": "2gPSAAEqQyVmRPuvaniHUE77PqPtQsRLZcVKVGe25vnH7HnprcCa9q9Zpz1tmGnS4SArfvLCjUBCAwdao6mhCVLJ",
  "key27": "5f3HTFJ6WXwwm9W6di3P4dSMSP4VKPhmczN2v6mKXYhG8Q6fPQX5vV1f27vRr41QVyX6wzNnpyEEHgcnZYvJbF9X",
  "key28": "2exyGMD68VRbxZTX8VsFcJdhR3AnuCne4kU7f88WHcVrJB6noRxsAgm3zqAKegbUCvh18dDTxMxXpdphbNiws3e4",
  "key29": "34f3f4sJaNDLwCMxE7c5iPFtnfETW1BCmxC9CsNrKWhrT1Af4JaPif46bGvgtUcjrZesKm6AAtW1Kp3pyHwDuxAD",
  "key30": "4x68jpngNnT5hbRShhLGXksZPXgAJmQSFGVMMu8kR9q33ckEmxUEK8dbdULCNLHC9ajuhvyd3zd4TjefmASff7Ge",
  "key31": "x7gxjuZ8HopjwgmTBwhjdndRx5JasxsMbDyJ3qW65PPTEEhV46bZREuQvSJWNVc5TEgK1Lo25m4zTJvkdUagFir",
  "key32": "3GDZXRdzPx33sKqViU2n29mUZ1AuL3kJ3Lg6aa9eMTpMkBtZGj2KrNwSzt3VYYGQm2ZsDtBFgt4uXu3D2dD2FaHg",
  "key33": "3M5DizBDydPcmz3VJWLyG2at89yK3xxg1dfYBqG7MqgffNUBSfiQQga8Fc9fFYmtikkpgn4bR4MXfcRhbwcH2fwF",
  "key34": "2DzJtmXdDcw7Xr6Yb4kmSFDh4iv89mKUUgABE1YUH88xEYBQnLKZLbj9T3UETVr7WpSMVbnTGEN4GQ4dBQwXhyp5",
  "key35": "4tyfkRFFvJMLzvDEsS4yGKsUYmxu2SUJZ2byyvV9fb2x1coSr6Wtdbk7ZCDzk3cxUuCTFrrBHzFRk4tVhgnaWCDw",
  "key36": "5XMBrTaYLv5ZauwNnNBciJqGyUJZw29JK7mij1eVnCKTY4XS2tBCfZXn5kVWkJT3hgARMLDJDiyuQGBwrP2HweNQ",
  "key37": "2G95YaSXy8XEcxw4FeH2fvBTLQvQXDJYND7VEB9vRqqRifZSGtWNvAhNAfkSM2FSNZT3YtmYYP7gH6N4qkQyDFCJ",
  "key38": "rJ8qaiM8nzGjkZtEdp37yjZxzZBUUyQzC273Gex4nFccQHqWUFL7dgKufjV59RzjwyJsGfDTMU65vKPWHfsMCek",
  "key39": "3EhnJJgkxCbGk2Q5gmnJ6AhwCSQS5VcSWx6BkWbeb8acp5FQUV5gHf3tyzJHnvK9VRhqkBwGEj2CzDs2jABw6BHs",
  "key40": "29f3gZ3t9SFMiXoKujPrqVx5v6RD2bep3s4E32kqiVsD4uEYYS3aA3haMe81VJDf1UKEBK2vvWCVjy8RKnikpqy9",
  "key41": "5z1NXgbUvfPTWkas4v5GEvKgYe7aJeZ84p7hNKXEt9ZkiUJzWXXtnLUVySiHdRHNJWXyenuET2d9niRZhP3g2wV4",
  "key42": "2qcF1xuVtMeDsstGWMVpd5d52kBqE2MjVUBsNkEqiVw28KLdGFzVyQ6iHMLAPa7era5p9Dc8p76RMq9orhgPNYVQ",
  "key43": "4kF6BMbKGwqcaNob14cvbVBeY6FZRZgHWJJTYSUBBgLQ18kyvNXX4RF1qQAc9HoNyBRpaSLnzDi4CA1zm8R4TVQ"
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
