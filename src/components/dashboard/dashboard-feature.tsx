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
    "4U9kqvNDTPYNiK7psTzahZeJ4BdfW2yfGV3op9G3pL27U6eNHkGPCbmy16b5eoTW7JbXHXhbWhsVzk7BZNiPiuuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xC5g7oEJps9gUEs7Qi7XBEnJQxg4Hz6gNKfDdoEhpmAv8AUCtPuLrKkYR8ZpypojRSGVSNsUwE5kn6xmQ9U9TsV",
  "key1": "5AsDybBnZJ3tewUhv9MptWTB8jfirAyNVP538aY5dD3ZSVRVpYHrRscadmGnwGS6qShDw3kNPWZs1A2iPfRmjybj",
  "key2": "2xP831hK3BBHz9sWXCHzD3Aks4o8PcdFps6EwMcm5DDG6bN6AyrW3vYDkoDkkcDCbezJ3nY5Bbcfzt6QA43JsTqN",
  "key3": "WwTjmCaj1SW5XutoE19QTf5U17fgA7EvHYMJFXtPhMT44AEb2jDkbZRSZPbrJyAZAqUkyPi9PWtT3srXPb1kr1N",
  "key4": "2t6djHNPTnminA4hEHbkd6jtq4ybHkwjzA3feoRwjNAXQ6EgdFwdRroiouiYpL3FWiHPu6ZSN9beKUoQRgz5YkgW",
  "key5": "4o8BovvP5XmeKjj5jjkM4HsxyGq24B8Dtyu3LrspCv63DM1xxF4wEzwcXf1wuT746x9f6jvMnB9u5yZPRyu7WutM",
  "key6": "5xgYWxda4rpUbPYi2Ba8TxKsPJ5Lm9Dm9Xk9zASnp44CjPH2d2oSm6gm2yqfLCTY3x8M15aro3G2Czmzd6LDssb1",
  "key7": "3U7vz8UN29XV1nkEdNPAi5NS5AZQPtK8q4eb8fXoxavwwNVJifDB4oVYSaj6duS96N939Zy7vbE3r9BCPVMigT5N",
  "key8": "Jj3eLPJgc1sBqBTuKofudAvDYXrQMFuPnbR2Yas9jdZz2wg9y8X4g7vtuv6Vb9LFq58KTAAjux11y6HBTj3Mp2i",
  "key9": "2Q4udSqQSz5XgJLkPzmgfNSDd5quRmEoB9C6WxLf2sSUZQ2Emz9GQQ2Ai9Fmznfj35J4RUFbL2LAdBX6rKPxC2RY",
  "key10": "2xpiB8UVrZsgVzXFaK73BXN9tXK6AMcemg7GRDszDXrucbUBze3dPn5rgdH8D3EmUf6VzvFr1yjzaQkp6thFFP4q",
  "key11": "2Gmdvz84QQ4BCKUaadRwWw82xko6YCej7kutKr29zgzdNDeK5kytZbQrzvxqFdhmBdSR6GyFqRCSkStpA95ify35",
  "key12": "3y8HntgcE1a7cV2Tj85hfeFrdGcdeCXtbmCb1ZSCYYc11D9gDFyRFC2fEvAyWbtzuoP6giQRstUa2qEokUpTtPYv",
  "key13": "5i9TWW5XFoXZdwkM1Nb2bk15KkdK3SK7LLrP4DMrcUnMVyW4zXuLxsUR1uLyksMGGg4e2U3iFTGozCaxeyrpkgK6",
  "key14": "64V7Uo3Dcn7cuFDkWxUDj2Ywv1oA6CxjL4YYJaJwRDVDB4aVqdr7ZDi2yuDKa3cjoehyWmgSmfHiaNCvAWXjHqSL",
  "key15": "3MesaGio3mdSqQwvuN4fdE4yctX1tVYGMUfj7Fy5Cyuzr7hv6zdtDGffXCY6FNYZwgUdEA45ugQbvqmWuGT5Rw2s",
  "key16": "4PNajXcT221pZBUMv8XfWX7jYkxj7bwuZFCj3Y4jZ64dbJdyPrN144w7GGNa2WuBbNNe139peZGWxxPVzFw1A1hL",
  "key17": "2SAyzYYt53vrQiptnXSjDFbt16ohhYhcLqvSjHwr9BraXXVpGXCmVndVWoZ4P362fLnojkMe2nvqsA9XjboUAF7w",
  "key18": "2eNGR937ZmtDnNanKXAivddUt9dxVYLtKWJbP2rSfbGCeyzfSrKJdSEbCLbqPNbN21kGmAQKD4ieuefjEXjE1fFA",
  "key19": "3xecmQghsGMsbQEhh92hXb6CBxTSAJZzEpFzLk52dFEa7RiPVL4wFzp79HdF5k7GZayfV1yk4MrpvS6ZhDx7Fg6T",
  "key20": "5gFRgW1TVHChezfiodPDW7iK4iQHnHaeSPdZeirerk6gkRmbieuC3eYiumVq4tiWEyKtZDm42gBPXnNA2ZqCGpCQ",
  "key21": "4kkt21eFSpEobFsAKTjnpx6SVAFTAsdjpC14AhPLMVKBB6R9d9z7bGsr3jaEp4aZKLDzZ6FZtu2k6TqPW9Ym9Rdv",
  "key22": "3C2m7pFB1JrjkvfbwFkHDGbCftrVrihKo1NSxqcBo565DwaePfESmzYdZnH8st76MAJTRAJjpohopNXML4TYhrM5",
  "key23": "2AotdoF4wc1pzJW5Dj6ADw7iyLwDEYVLC7UBsFfnzaZroqUe1jgPtoTayWxPy4Vuk83rBeLeJtLPgh7jinU9XTPM",
  "key24": "46wZQ8bXdnjxhnRCG5u4vd3YTbgopcftTkkzboJRZBvngkBLHHqkYS1qMoS49iCzKs3Ko7i2V65jyyybc7aA7Yyr",
  "key25": "3dYHL3Kte7Vi7uEXRewSCtieRENhUcQTMXjg8thocFFmr45HvrZq2D3haQyFs8y6DLjD94DtZBhryaSRLZLYxUWF",
  "key26": "2a6oymq6LzrYbBRQrgJNJzthdd3hqWdYnSGVXosst1tv32KUVtWVFroBG7JPM9XYiAtLEgEz9yhNtkybwTAYkoY9",
  "key27": "5E1hUs8qTiveY2a5q5yySbrZaD7zhGiYbp5ZM9BuVadnAR6dyByWu1mU8AmWazHC6HMEvUFwFeoHmMtmvVtxf7ME",
  "key28": "2eGfvWHuu7gdWNXEkPrkpTQpJf52PAdTWZonB9BeENj61zpijUAP5bSnjcR5LZwGfDd3T8wAPjsA36Xp6D6sPUpB",
  "key29": "3hsZY8BbBbyz5LFhHM97SPQ39FHLB3vqxmQHU2rb7Fe4qvY9K3wJPUrmu6zoAMBvvYR9d43LE5ACkDHhoYDYbtAn",
  "key30": "2XYB3SX9Vnp3TnG8Pmk6rU6T66MidbTx4WZD8BRhyceiKmSinnWc3gmYJpGLbVyJ2vVV7PvBuD4fy6oHmA7fTfr1"
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
