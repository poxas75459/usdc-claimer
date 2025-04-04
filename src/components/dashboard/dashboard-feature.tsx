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
    "2BPVL6h4mvEPH7uZT328LDRfLxiKADYBjeG6sKXTduYGLJzcQMyMbQYo6DmeCg7Bn8oCUbJdmk49PyuT1ePsGU36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573WZTgEwWJ1ggddDEwHfWuAZca6HNHntme6Y7myeLUK5dzumJQLo9sGdBZimX9DvGV9p3Q5buB3hKJcfww5b52r",
  "key1": "5Zo5Y2Jn7pBnaWbp87vMyMtpzGXFbs5HEqkce8XNV1A8kgsjk8ibgigBGoPevpe4QqYcw9d4XiTzqeN9xpF4Qe7P",
  "key2": "85qSgPUpf4EYT2aqQZwvU9dkZrpaywU9k9d8KHKB2JyaciFgEp8Ssgg8Gw3m9HKqdyE1AP1kynJ4Z32hYiunnXs",
  "key3": "2sinep3UtxCnKrFueFqtgVHMoPZEvHYJtmGdnGMKkX5wZjRhG4MwSAWxMiyaSNAzdWqs1Y5qXTNfG73F2xqqFPBX",
  "key4": "2jPx4b7LYAmQBVaRtGLFLyfaRDqe78XuFucUbqAWmrmuDKTXwvm8zVDKtLKRYqykvmb4iosupzPnTr7j7PQD1TcC",
  "key5": "3aRCRpVLVMbCUz1sUPR5irkybKefv7twMacJnLNMy3hH4sNRy9cfJPKoroDgo6JnYsVoq9mVA1sxcDpbT11CGxfQ",
  "key6": "4CPq2P1WSUGkywcFY7eXRFox2vznCGgZWQxrASj1vZGKZP6tkMkRAKmURjfiq68KVVJTu7BgJ8CiTSH7gPNEvZvj",
  "key7": "5P49HBNpHSK1GWQ5CF3XSUG5wGsh2waWAwRiEj9HdwqPG9FdBeHwT5NusUL7H5nVhQqWCVpkRPxK1uva6NLas9ep",
  "key8": "5L4fwDCkkW3DBuzBBXU5C83pQRPuVHZmGRJazF9eEpiNTyjGW8A1XDBpx73SCTJxDXu9GV4i9CvUfdSgwxfvhn66",
  "key9": "5MWMDw3USj9pVT6pn7hRTWUDz2zTCiTH2vF4RrEsBvSJED8NZCoPv2YeYcSkJ67ReRJ8rDSX5C2236ZnNCG3VV5n",
  "key10": "3UHAVJw3ZTkkUmET63Y9aYCKqJS9EzizadJZQDs2L7CJ1XeLXBGGdhKR6amJ8b1E6g1Woxo2QnqDDBdQjVrvD8w8",
  "key11": "KGBxdYxj75oLbpwzLMK18C95BbodHbkDNPcevryVrB8zgW2wK4ujsQ7ueKNwYFdF3gWsUd8J7eMAX44ad3CR1J1",
  "key12": "5u4U7odkX29vVKsbcfQPcytPuAwEnCQcS3fAkcZBeyLGEi9DaQaNhFDfY6AWyiKqpTiysvX6P8eawtYgGTxPG3T5",
  "key13": "4ixD9JUg3KrFK2rw2chUZJdqzJqgnu9Xge44s6MzbmczUdMkdZ6FsYG6jJGuwX8W1TPn7j3TkeyDCetWMcaAPsiG",
  "key14": "2zobsA2PzBL7LYxCiymPzVpAQ5v5nrRrkmoXBS3uBvidAfSCrGfspruWBt1cawK6jjh51fbMJvvMp5QXJHhrMBqd",
  "key15": "3gH2koKcBVXu9Ji1kyAiHt5tckeN4JZoBAZKoKDNAs5GFNZsvZjwnfdF3K37YoiS3WG4cmyrswADK9uEQT32mh2e",
  "key16": "3Jr8bGmYKCsVwPzozvLUq3FLffpC3oLvB3KB7WjY4TaYecF7v9htyRfLsdWeU6p45xL7ms371TMg3BuLyNJuFr5",
  "key17": "kHczukVWANcg9pfBQdLLwzhR7krLudVJum1Zt29eCMXikr2eTUkNyAPfonxDxJLC6dTK4znd5fn25MXYzodDRy5",
  "key18": "LcabHYEfxGqfTHdLwuLABEvTWJaV5iEmFD86n4ZRtDR8tbS5MHh8VujYD2NZhgEB26M9vqtfGvZ426UbiX4Muj9",
  "key19": "61Z7Vszq1f1ceofM5eNQr5RKu5cs98bwiT9JAhsN1YbSkuuW7RoMuzpzXKvshVthEpnFSuYSJGg47ahwkJZt1v2L",
  "key20": "3GGmx7y1cMibaAb4Cq1n14as2bECZRD4xYnN8qypmeKT9DtagNJs8iQ3Vd5WDxovZtyTt9QeEHf6AbE7HUyfG1ZF",
  "key21": "3HA7qkQFy8FKPx4WpvhZuMXQ9CyG1B5xW8SKBhnjKR9wPaEwV3rPDJ8g4obuGkE9XHXq6NZxHUnBMGBkZUCmjzGt",
  "key22": "ScwWTgf3B2m5Z7J96KmDbxNtomXx1Xaf9b1VMq8CXdyRgVrFD2x1Frbn6hBoFynSMNY3GuLe5PuTcvxKK5q1xsE",
  "key23": "4dw13dZ1n2R84vS1ZJnufdTiho2i8CXFhxgZvBpGsbv4RCm2jhcUeSJGKYVSKP52j2eUdkrk2CCkHKJPesdJFzDT",
  "key24": "5HXT8gmiYqQEYfABjLLn9iTA536FEQbfiTsZi37zU5DVpvWPUVv4isagqnpLU6raeFJjpDX55oDdNm9zaSCxrXLm",
  "key25": "BY3dEdvND68LwC7prKViNB1mjA7Xcq8wYs9RT2GonHpfCqZAXtbPM3n3gQUAuhVePwG3rzExu1UZYfWnaNSEHjv",
  "key26": "5U6ShZVQT6WK8oNVWtWMBCFyESSFaMKYjq66hwiaV4Mt2kqB3FQHoFRb1rpp33B8y6tCjiNdRnx71wv5wFTeZ6u8",
  "key27": "2dieB2ZJcbXBeV4j74AeThNPQGWkbZUGcVWwss8v33QZ71nCtR6oz8smuqtcBiZ4MTvXPkpUDFkG1X53jh4YF5Wh",
  "key28": "sa86LoT1BLtehSukJ3a95BhGwMnBK9F7bPqTNaFtyBtSB8Cj2skcmKHtWZDsSN3xV9m3876VdB8Xe82Bx97yyoY",
  "key29": "5WVpodMJzRoKbHZBCAuQ5kg9ks1D73vxNfDFJWgaGSWqu6s2YjCwrbu7gGfenTv7Q6V8ZtoZTpjCvwiSGRBUfyeZ",
  "key30": "4NZ1e7oXqkyBCv7NowQMJhffQU5rUrW1hsVjAEwQA6sJ2Hjx9b5kA37qisqaZMXKHKxE6jMwAKVacnznG6PosVZs"
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
