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
    "5jfK1jdTc24zVVEBxRwgvC23D3AHFPS3rBDtXmKuNeQDqRwZXDmyjsxgkRTETzPXfbqQ7GG8yhmWjqi8W7Jj7jMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQskyWRz12N8ewjbr1eSTJcFpU4cT7ZEBSoJHJW8H1j81cu9d2M9C3w3CrXzZGSbuKKwZLHEDYUhafv9caVnved",
  "key1": "2XxWdPMWQWzZcRN19Y3ny1VUceJrHWMPME8QHvfp8GEXVAdsifFgbqstvCr6dKswkavBGq9tXLJA3o7tyXydu5AD",
  "key2": "29RMwaYvxRY2kCbF3AbjRx9uKExxmRLU4z6nDDzmSyvgLfZ2MjmFDZV25UTNj3JcgUhBzs1ywBWp2XXp7PeCEoGo",
  "key3": "31JaQCwbDv3S1cECmM4Fq92kHqpCW2m6tFTKdBAuwTZZY7p5rwWBhR4TQ3PPHkntjq4AEzEp9Hp89yLU9iHYhGpt",
  "key4": "Tz5HhjywmwcRyguysmhNmF6GFX5YbjXae8NxpeVBt2A9x6p9m4QnTR5u3Ugx9eLLvr9ZMJFjFTUXLHiYYmEzNWG",
  "key5": "5r5DhjvjCbJ5UR1YKVzviCRiZkbfHofPmTnsvw4hPTyDy1KiGCMfyweZbo7S2PqyL43NRFSzW38tGDP7iS3zAYzD",
  "key6": "FSEBdzjYfxLF99bdQQc5PqjhtbWWmjGpJ9txgXFhthvLKPXih4bCimRDmBuC4ANFyCQmLAAPGTwUGRdj1beBw61",
  "key7": "4PfetWCY9i1SaaTsDUjf8B8vsUL8bBq6FPrVfv2wpePXVMgoMGDTVGtgFdTSVnLP5r8XF7EVNaiHrhSA92bNTyfo",
  "key8": "2PGxhj5ca5x9oiX1wKHD5kVX5zRRw9a3MqXtRAQCU8EeHFLmvmaxViN36aPZw2Bb9SEaMx2JfyE5NFik3q7Cyvuw",
  "key9": "28z8erA1J5dwf5pekaxJHWM6UzsZauK5pUP1iNzew91GzUGCVBXf6ev5qBYWAFfnJhpBRVVNu19Y6unX5wujMVNM",
  "key10": "5GHt5497YLrFsK7kfuNJQkKzMd3eaHLH6T8SZh6TB8eLiTsAyerjpB8Mt2x53yg8xfb9SMXpSzBtyCZySE8NCPsd",
  "key11": "5m2P5t298sauTab5ChpeAGr6U9ERcJEihkfi53KKBPByKGSrrdgp5qCqW2SP8iNjoz1UPPLq9w6RFBx1u16YTMx4",
  "key12": "3BiZsJLfNbzRGdMtkuu6B3xQut67q4wPnD24GR4ZFyL7P4yBg3n9Bog4BXotVEDXT373qMy2h2m86sT82W9i9VTZ",
  "key13": "3QH3M2fyYvu2txTw5G4dyWav1qyW9MbbZtGGv2YZTtLwwARWyAdY38iVzkhuCrgfiKteT7FKPkPEiXk6RcSsN6Qc",
  "key14": "4hRmvo8yHBTM9a1Pqh9fa9Yh4u2BeXExUTH5oWx2X353U98c8vJu45AGRejd8793fZ81wvtF4PpLdb9xKkz8tuJo",
  "key15": "4yjo59FtsLKS6avTNHFwyL7Yse5Dg75DB5PdwfFLxK7JtZb7xhMuC1bz4YAYPM66wgDY5FmnTgJmdpv1JkthgX8P",
  "key16": "PEmWVjCLN46Fn4vG88w9EhqbiGTLjQKVgR41EHm5dayPJGeWbRKXLaXrJ6uFqXoPSFkQK24a2VyLU2eMtt72ZuS",
  "key17": "2nKbVH74dzwAR3nyXhiymp5aKypzo5qCsqFSQgqSLDxBcyF9ruxQqBk7E487MrJ49bMPbiaM1QaGKR8bq56YGpqi",
  "key18": "218ygGCcYY4rtfpcKPPYzNF7Paypq1WPuP5KAa449aMBmFQBLLVoYhytLd5TJsCqRcuyyNyNGSky3jNf7W7ARYYs",
  "key19": "5b94h2GaCmdynbTPbxGCxUQjZfoaCJQ9rzuspr3YrstVHxic15YvdhGetePym11wYgtbsKbPcm7LWQ6wA1ezgKUx",
  "key20": "Lp4zQFVwPFzkY6CUXZ4mJudpCCi1SVavNwc7RpMYWxkBMQ9pWwzkzZh8cdX6sMRXVRhfRKq3QQ35QKxaf4JuYwi",
  "key21": "37NbZEKPvidF2wgmBJsbECvcw89AypWYs2VczSzjksdkKaq7hTJGCneEPKwgwTYhxx9w96Eemb3Nk2TECuHqNEok",
  "key22": "JsjWj8PLz79CMwzvkMBueWC3fBKywdrpvFLh77pL1DGzRfmTURaQaogMUwTVqRov9rzbXgZNAzXWakz2ErkErzm",
  "key23": "qzLbH4YjcRaRdiwVbenwVydtVhehgZqZQgvEuiHVhvqv21mkzLq6WsHUEvtj6QeGkHfJVmQNRjkgJW93Rb6qNBw",
  "key24": "56cr9zXtp1fgj3BnbuhbxV4RXz1997P4J72CWAmfXG1R1jzvgiQT9RSa21ANzWaxx2qtG2nTUyJbAbmPq558ZtRJ",
  "key25": "3QNriX1L2taMFRGhm3i6SYh2hQH85e9Ju4LR7q64cm5LCY9XR9YjJsKSAK3GXNYqjJuf7fp1UZjTTSjUmX6yxxjq",
  "key26": "eNsPkjJhJuZBd8bUbWhDt2jAnn1er4CiWf49TN7hCQpZQVyuF4QnGrt5Dtg1FJKjXtMzRQZHh5ykbKwtLrGwzZM",
  "key27": "328SsUGt6cZ9Nv39fGabrWSGfAJUeheYDNMfqmeiPhY8fMG8ytuKS1pa8nafXFaFHKCBfaBUHcWYSEwLLxN9Zn7o",
  "key28": "48i4d3kVeuAnoXUHwf4UKS4TJD4LT6pzWvKZ4QrFAmoAcJx1GMH3GkejstnH7NZcUvV3BNnmCKaB1kjN2YqX4f7U",
  "key29": "2sVAdfUJz3yTei1MXAT7K3eh1y9sD2QpRpoAEqUme6gJ15moTxLhzQVKnGamRKSyEoG21MLx8AM31hfmGkfR9WuS",
  "key30": "3SbqT1L6JogoVRSyECZkfZz84k693LYEwWNTz1o7aXTCMTsctN4VdwYBpzZeLiL7TsmEcu9Fg9MrVtCaKsFf6d2w",
  "key31": "42sLtW2SYvmPqTKWhhSkxibKpzEW53chTEhHfFdchcNqWjDkE8ir18Ee2ygHsXF4kiZVgnbDU5pQXA6xazxjwSpf",
  "key32": "41NHizhVkKEoNRHwTLyPPpDTPEVLyeEiY1thGC1sFyiuaBrMJMjEYGWyWaP18adUdUrMVSMzibu8HVHuv2qAQ5Ys",
  "key33": "24Pk9VPrwLFtjhtjvL7eTU5HkxxQt1v61eLpGV49867XUX1SXZ27PDoEGTs8MqqHMHkNbCjG3ePZMPb7S9VkvPJM",
  "key34": "5BQoT4Q8Ss2ADuxQrD8r9G6eWuye2dVBAq1SZk9zBNbDgFgEbaG5MPiUdtvzS4oR7DeR4mXn1QRZFtWLsetja56i",
  "key35": "24cBNRR6W8HycZYJvzrznAe2Yw8Vkci3RCgS3qWm88CpyWt1tLpAXeuEg9Ydw61AQcNTgYn7sUBzRUHrsqbX7YJ9",
  "key36": "66cZW8bFtiHrddJ4jMqSJVbymCwJpnt3fyaoanb9SrkrADCHQj67qbHBawbcZRcRLayrp7VPpi9CmEaMBotGqDM1",
  "key37": "m2A3vWsmsbZJFAgzL4LWWhmWr9TGFLiXtbXJQMHTB1s4bLCTtwUPd3wdVNeoaRpM3yMKuPncYzcATXjajyS7FTP",
  "key38": "Wsp5ZbxANpYVcxxP44KeDCYvLAvqCPQUvLwBZzHcmvkhf3dWRgLGYpPGteqfeNE9XdVa3U3Rbb4iWjgYwPiyQcU",
  "key39": "moPsAexDVRLDky4cJXM7LyJ7cYHCH1m9TsptWHKJAGkbGdDgNcraXrMAwYu27PGLB733RgZWRfKKfy2xMiTVBoN",
  "key40": "37Hw7pyWcVzTF2FozRa4P17Z1eGNSmBTZL5rA1HB68pNSWgTdvqBioBk8iaipnnDrRXnU7f63tvFXVQXTrpy3LCh",
  "key41": "ki5EgqmiESvnRAY9GsWSXx4jZQrAW8Z9VbVYUKaZgXETs2jnU3Z8dp5seYSiMavU2jq76vqwoB4tqbTtBr4h4SM",
  "key42": "2BnBqc69b4v2uEaSeVX2W92w4GrQZkQ9uZpeYcqiFyYz2efEwwFBoj4oL6CB28Kaw56mjM2BSDDACDLZbTrVrJER",
  "key43": "3ozWV97uPw6TdigKGkGrbhJJcSVFA74myUMLDeTncZKHnHW6bfWUBL56p7kD1FUHQAeVLEBUQx6f1EhUiGcFvGro",
  "key44": "Jx3dGyqezA9dH7UCUWLcRDC6oB5ee8duZTmhECQ1iYnUDhjaXTBPNY1ocwcEEYoP57xPSy2Zt8g6m2yX3rQXq2c",
  "key45": "2RwmA4L32qJzgPhpwXY4c7apDPysVNsAR8YybAnpdCHb7gmUunZp4ArsMhzTBQwwxfviQmXLucXRKXX71EBFtVNC",
  "key46": "64upaazGrHridxxqbbYBpupsJ3gMFo1CMj5VSMiBWzGnWNc39ELWU8uvwEzR6zuCwZWWp2mEteXwz44PVf4ugZxH",
  "key47": "3NMbe54piKd6wGaJGxrEZzT5RHW6QQ2vCy38kaEPqvPrTGcLDrwE5pJr154LGUH7pWAY3njBAWXzhXxbMJuZhUng",
  "key48": "5y2myhT4Tx6URP2e23ymtDwzh1GPmfRr9cNmvuagt1bvHoFGPubGxzpaAnCCaFoc2J77XrHjjch57EjCw974KCyS"
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
