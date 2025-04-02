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
    "3Phti5PsNkiXzT8ne2PXYPPMN9oh8cjvMKegUsvsMMTF1y3t5MP72cRw4qJ4z78hohSMX1pz4F9uJuyE57inEfmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LVVMmZ11LjFWkxKiiPK7SMcDgYUiLVZxGZ28sVW6f9WijFZZyNQs7F3VuTK64hMnDoNip1bD2xqqKWfgypeBqYG",
  "key1": "4Vzf3mxYzUic7JVndUtKR9fhK3W9HfpPgv81wnWZJcQpd1781ZfY4ULTA8UjBwpcqTaCkWxcrXQtdAGgLd5VjYPn",
  "key2": "4ktMGDhxZB4gYV8NfegzaVkerYV77WXKM1MtWFezzKLai4cEVFLmA8YyTY2CY9HvjrJ4JBfAYsaSUqArqqrTiK4V",
  "key3": "3bZyhdYmfYfhHU2UeHtm8dTpUgoLJt2ZmTMEPrvjv2mZuwphG3zRvks65VPfm9Db7HmoPR8BbYuYWxdVnQw6DD3t",
  "key4": "38ER8a2pj1cAsidZMwDFV4riPpiKYXJwM7ucZERNigJSvrRkaHnJqFMzx9Aqdm7ysJYfCCKQjUvGjdUycYAV9jtk",
  "key5": "cq8gyKqu9kw3CRxx8Ji7Dg6ue9qnCo5FDAVe8eW9zcVzvsoDuVuyqXgtW1jGxa7sHtfTagzy31AaRk1U5jmGDTD",
  "key6": "5WKhUHCQW9xa6b8VM1R5PhEGC4TaWC2oUsPnArfC9ftuTN3LrrSruCFxNQw4CpZCy3VjGCRqoYNYbArQ8WHpLB9R",
  "key7": "45eUsW4V1HMznw59CtrGXa9N9VxTxxTTVNzjbHNXZAEf7V3GvVKj73xyddo396X3SSVatgtQrU7sbPw6n3LFjFUF",
  "key8": "3bZG3v9h4jrZ623LGoSEuvxGL6uF5PU4rrtS3cs3pSZAnvqnngBTmAM1qdEe5bnZyYgcswHMB9SrdvsBHvcBBJd5",
  "key9": "CBkqChwhJLeQviNB6zGPscnfzXQZ2X15paCP2myqDidxtzPWmvT62grfF4yTsU6bdcsjq3RSCCpoK9sEisn1nDX",
  "key10": "4uabSm7EJpmuCDh3XNKzQKu9vHkhMPoMUHsb8rYzPTPSZP5wh7vhvVnPV1UsAGxkaoue9PzDnCXJffWxikrFtzUu",
  "key11": "3TcncuX8QC4k3orGhtSsVntPthnHU8dGHnPhWPNZ7ynRhFxznz8qfv7QJqdLJ24k2n7XUiKHzaTc4YancKxqgb5s",
  "key12": "2z81iX4mThf47LMymGREyqaRKic3HqAQTjb6dPG7b4F13eNasv3Umr3PVLEnvE7ZgLvCC3b84FvfwL2Zr6QxXKYC",
  "key13": "4HzHoWxciCpx3Hi6Yx2VX4Z9j9KdPnrpu45iJdS1nzYgnB9kFTVbtaVFfXEmBMb73B7RrSjqSF2psyAiSxZq7RaS",
  "key14": "4z5wnsnMx4Rg6drwQXm7A65odFKf3jGmdGeMHfrd7udfyUCcVnoAv4TYV64XG6PudHb1xQZQ3WnpaDeGyJDD2dew",
  "key15": "HkkfvYbK8VCKDwRugmHCFZnkPGWS7158VPxzxvqkZXpJpJ7WUVVxu5Vtv6reXWyFsdHPEZb2hupnyKdH7uDn3zo",
  "key16": "4QJtDJHWeTS3JDxjpNUrQUoiZCiAnhRSRHdCfj22cPHFG87H2idvr6CCDTX7E3FMGG2WAjPdVJxobgkwT3RZcTcv",
  "key17": "M6E6VBdrgMErzDqtq77gMpjLMBnnWNPu6UMKzJvZivuqNperNikEGDPzxMpSUAXw5RzWFvEQWe6wofzvhcvAJVS",
  "key18": "44dxycFq38b6K6mpfRKwLxTMf9rJ2in5cFSHwJJNkbnv4PABjMTVJJCGMZGjNAevDVFZD1ReKESkpV2KxagZbipn",
  "key19": "VgUUkFuUVZe1oyMFVxqDuVKK5i4WGfK73GoXxCe38i5pYtVRT9HXFjjjS62CnsckzgKbNygrBSU8FMLTczRgkBs",
  "key20": "5UbP8nDs6Aw4S6Z1tFgWCUxsqpgEb2qyPjdzW4NXZkA5oJnYzvLPP3Wb416JKkwDB74SHw3XLGBUbLV6Vjnw1mDF",
  "key21": "2v28eZ4zRK3fegNvtD4B2zUQag2BtJs3bwVHyYNRdnwo5juUk1Y371GuUhiZ4o6jGXidUXwKgrWNtuNQshoPFgeD",
  "key22": "4FJGWTYqKhepMnwJ3nKnGKX5bDztGAqHABHs4QerMRYHGoha6QmWjnCeVdnJm5vyuLbjaaTmyfeRvbViNoGdCHdy",
  "key23": "4fi8vED5YL5yztcJgkjBQtngbrHmp9g4crQtK72P5mKPqh3mMQWCacZsg6T5t2pVfVysG9S5a28qLTDjsPPgxvAx",
  "key24": "5L5MwDGkDD5E2qffXVLcFz2ZhCWEwy69WyRxHC9zi8rU41uzrmnEm8XZvmfouHvAcJ1dDAX4KuHmbVY9S3CFVLHj",
  "key25": "479Z46EY6dH1Dedw7gz4bYESQYptP2BjQnfdDaG4v2YzGCzWzrPn7jgKWMgJDnMm15PiHNtkqXdNK3btbMT3F5AX",
  "key26": "5NKgJzMbQS3uiYf8rDRyzk7BZ9zY2eCvkvfENRQMiC3D6brK7bKarAwqFYPyQX6AhUwGd9vfx13hiu9Lf2hpfw81",
  "key27": "28wR7Aqyj6KuaX8AfqRbwU5MQgHUw3mHBX2PiDKJw5yDxs5Yxr1QU4q5rQCMmt9dnaXSqCTq3zzJRZvPfAFTPuDC",
  "key28": "25F6Akq1mbDwv5fUYJS9mqmAJQyn1UmZ1tJjSYop5BxE8sF4VSQRaTpzcEC1Fk73uKMV28SEztc4UbWeBVNtzYiM",
  "key29": "36n8pFQ2jHCBXNHFvTwsjdgCw8crzNWhKJbpRAxJgQJHuAAMRVs9TWAGgZ8WewYwtWX8vg6cFetuwTTyrJ5eUFN7",
  "key30": "YRX4WMqejEpoemCeG3eyKJRx7K7aH2F3X9pJVdQh1qBDHVEBCdVtiNkjTVM6EPaS2PT89Pvk3SDQvwN2UJ7czrX",
  "key31": "3yYsNyum58rkc5RU8iw7JyvJezTSftHX9iqVCc6wtQ8dp7tWnCKNKgqBSXhBpKcbZ5USgymtbGEE7w9W6u4hyinU",
  "key32": "otfvMx1e8ngGouNCYP6UG7sG89t8ctLpRQbz8vGVRikeWtDkMdat466SLbhFKimdDT46AXhXDpmYCp4cq7VcgRk",
  "key33": "5vULSiNRnuTrE2RsLe3sD8ZRh58mh4E54qzm4uoT6wb4R2nsi4ydHZLWJMfiSGZ498CUxHJJQ5naGxFEDrwzerTr",
  "key34": "5Fi8nB1Xv3B49rbonxb4Mujo3uhGaLJ28DosPv6Yv3CCXNeY667xdLWT5AqU2mHhM1LecvGyE9ceNZKEEeJFuMxG",
  "key35": "4ETQrpzetA62JcwYFgzQq69jLZhEhEy6X9ZD3UmvPG67WPEoBbSuh2FRymybC2V4u2qjqvDYHPUxWirYuyvNbmNZ",
  "key36": "2vvHp2wxxVhMriN6wVT4Rmi97AwdNGMcMYvRBVq3v1iAZZRJgMtKzWir2aqA6tGCjeSV2G3jpmtE9GSBwdSx7UfJ",
  "key37": "4i49wLkD1ij71NBDB5Fa8wNTxZQz9RpC96FzFNcwpjGe6Vdz5yxhyeBXqkkCCXK8zrJ53yWZ7KSVLzdEut5rw3Aa",
  "key38": "4PiRgp8XUozdhgnd1b7HyNFzpM4JdCtMu2YKyb7nVRwzr8Z1ViQXoY1EvdzjyUqiwzbtCbeFE2Hfzc4YzsHhrfpH",
  "key39": "5V7FhQoAtRcNdiFqiTJMP9FBemTuWoCebwS3awq7t48pJXL4BTZZN9DKXxbjePrJLyP2UYVz453CwDZdFruukpSj",
  "key40": "4ZryGpdSFQQDn6V8TFMMBZFTwB27kv5x5zztd5pYDfihd85oE6dgyQtsUzgigky8Xc3sNozhnSXe6hkmSDAuDSvf",
  "key41": "3Ne5JJ2BUa5rPgzW7mVnWWvZjbC2gtrJkDULiCjRpzonPQjm1bb5dDnjUAxTu4ZSa5CqpQtkL1HF9x83yEDrMhoA",
  "key42": "5bVVzyAjz7iSGw5Z4dzbBJriJbqd8gKB3xn62jUo2mLZkXJv6b2HTMhKkXsKZQLHidXDGkFtzz6sJc1z1sijEMkj",
  "key43": "28Uu3W2mqaQyejqfhv7gNT8EgDFLCFz8xNv9PVhywcwUFmq7gsmTf3p5PmFAUzxc7zxQedCTafLPPb6TaeEmX5Bn",
  "key44": "3E81S6LXbLgmUMF9yT1nq8Q2szKK987Cizu5YuUztLWkcFuA85yUAXETMEfoFWT44tffxrwEC7wa8dH48NPUZBQ1",
  "key45": "2FGmwEGq42mZQbmJvermG8LyAA1nncqTiyRNUKWG5Hk78Wch7QrCetD86VdeQMDUkGV5ffezLdGK59852P7ShHbQ",
  "key46": "2dpB2dph1c3EXZDn31LefkeAuodM1s5YXMssFmB3hAW4271VoC7Y8P8PoaM9dTb4c1dBs5cBVCswV62muZrM57nx",
  "key47": "yfteB2kjmEg4VCV3F1VxZF5LKCeiBAGcwTPgLQHRRKXA3YzzdCQUJ6wbHRfw17ZDagrQnenQRmf3ZzKTH4gAwHt"
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
