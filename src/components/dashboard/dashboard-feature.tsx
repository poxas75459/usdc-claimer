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
    "3BKVkAoYEmzmkSzhe8thxFqdDKpYV8GB6aV3cWZ3g3ycZCr1scBjSzS3WWWzJxsaA79iZp8aAh8QwjShTQnzycBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cww4BLVV4R5uSfWWdZcYDRzc9UptDqP7khW14mq3BzmR5WTWHBghYrxFV6SDLaMKbxXGugzi3gRSSH2SQSpE7du",
  "key1": "CfZWe1MKX4oaTd3cvPh5GeJMZtkYyvAbT5YH5kVzDoBYU5ZEAt7jDF5eiCbh2vG4FFc3QXsm9jLv7EacimZHfDj",
  "key2": "5SSLj4hSFqbPjE6g3GeYHYoEJRNuwTTa5FMKtDsjDYxt7swFtyCQhxm7B4RztEMKjGeuX9ytkrHKrJMgzqMyouGx",
  "key3": "2LVCwqie68i7h7KG76MKbhweNWTtD2uFojoJJqHfbKFtiYk84EuQ7V5o1uaHLHJMMehMYp9G1em2Jd5PQ5tBrdnJ",
  "key4": "xNsbPPMcafjPrhR8SsgNtgiepVUpt5XpYEgVczGN9ojdmTXYUFmiMB6YLshTQpXa5zYqa8VFUN8ApFMv4thdL7H",
  "key5": "5D6E8KmTiGfkA6wiewQse9hFPDozQjxFx2py2WyHkVnK7RozdqezKMygQV6LF6s8KXY9zjtLukuDz9Z3UV8FWKg7",
  "key6": "62VExadWmak9uiD2V6nZBXNecwAvKuKHqAhdUc4z3GbQECZ5dSknMCvaQSmXhKPyVQuRLX3Xw7YWHDizPi6x35dS",
  "key7": "4jta66xSbgVJzpBRGEABXVHLJtAcjeKparFG7CBXN2E7PY4mFCcKhoy5nsa3EdXePLbwrm1bPypZic2BKFFYFuk7",
  "key8": "3TY1fGueFHKfKPCqEGK2kGqbjiZc7h8xWPfNcNs77fuwGb945xWmAq1tzPKi1vE6kZCMJyqaKRE8sv8Xy2it4cYX",
  "key9": "4NivzaRk37dix7GiakgvFb3eb1ffBCz5ELXMabN3pznjrQnrzZXVBTT5xD4F6AUg61n1oxPa9D5BbjsZqgsCDTa3",
  "key10": "GXGM5SaPPF1mPamoVJXwceRGxb5AekCyCGsCR1qGZcLkTBnxC9hsEzS7j8KP8jESh6W1XtNYbLXYAbYCqsHo2ai",
  "key11": "3eRoYxABqkLRHXv1Vqsib3Pb6vFQpKKsDgeVEQwyDJzLjLnfKNTHL3cMrfMjBNj2mz1SntN47F73ETnxneBJZcg4",
  "key12": "2iRt4h3G6k7UvJ5HX5XskDuQzfsm5wgPR1i7Q5hApHRYPooMRSnTcmWBUbtBDZ5YT81pDFps3AfuG7wvWwRAikqm",
  "key13": "4PyeqsRbnx7h6AVRj84yV9AWqQR688pW4FHyK51LbQo74GkCTC1DU7o7Wpmcksvyn6qTifuunNPXofdBzkTnMhCr",
  "key14": "2mdNwpbLNizQsLLThXB7v8bEbRLY9NAdZiqQ6opepNaBxDdzigqsUrG6yR7zX1n4jivRYFgD97DbLyMTtSMQ8SLg",
  "key15": "5q5zpmHmnxN72HJrpLbHv3toZe4TkLvXZbreZKa2aaNJVdhDG37bmZHmvZ5NyFdnswwBPb4QabdDBixEUXT1PAB7",
  "key16": "2HpUvXs6c4YxzLc17fxoxPrRSrBLAmA8eWvzKEgV69ndhY9d8KZk3FsHdw7ffmwvaW1r46UDjZKXabARKB6BmhWW",
  "key17": "2zdJnwyKW1GhEPjXyXG2n5UvCmzNwfarNRUvRdGQUGL29TFGF6qTbaMnEPGUVyXDKKzJRxSVnmup8y7fmEo8MWLw",
  "key18": "24tCFNawufKKq3NxfmprtLZ5ew3EBK98SnXn3U7MHU8Y1WxSv2d93EjFDa99qgFcftSqeG85pE7aCRiM1tqn3fty",
  "key19": "1xLipSUsxQbbD1xQ7h6pTz7HJ83L8Hpwkb3BCZ6qTLumQLVv6C7C7JXaGzmuoLygb42w1mKZUeF3EpQPwFoWpwi",
  "key20": "59VcEy9wFbR7KbxmDceQ3Bcb985fcfAzWrg8GvAP69hkxtSV4i7w2Meek5Be5JdFFGDnYyGWzVTsCVfsURAHLfeB",
  "key21": "2pkSadekuS1TBXkCHZLfbznCNWtwaquiSsRib6DcVi8gywmZSGGqpDQCsiqT8w4qptriVKgg8mi2QcojtmBWCEYJ",
  "key22": "5VvzqCEfpC8rhJCuyojADJDoLMzxZMJY2PhqgonUNshQp2PBUmjfJEqLTEFJJSKUfq4FAjHyywVhatAMwrZkJA6f",
  "key23": "37V6qSAVj3qqHxephWirexZp9brHvfQ3yPpK4cxfgFgSpKmpY8rKiadL68jEeaTpVSGVvqZTWuw93bT3EEwvsNYL",
  "key24": "5VksB2nVhz4BFhExqdwCj6VooNfjRSLisfg9ot26da6Jt7zMXeAyFfDKG8uF5nResGnPiNb2dQZi76iPbt4CPoDH",
  "key25": "55NH9JhjxeweLNwu75oh6ZxkUgUTYxXo3hGStwrZywh5TWqkQgKKmSHsR7KAd5Y2CVraYve6dvYu22RfwzQPJKn",
  "key26": "3kYBFjwmcvoa7LBqSJhWACyk4avGK25HXURP1aJc2k4HhJi31VCU2ishsrZuaXDUUXfnnLixm2DYnMFZeEfGNZUP",
  "key27": "3LamgB2fYTLTVV6ihLqonDFATw8Ej6iceVPtsxGrAxZgZMuWvfK6UZjjYzoeaaK6U4A5ttupXy7GCGVNDHe7cSXe",
  "key28": "5FwtndP1rPP8bsqjbTS9Y9DsUPigKVSH48SQHzy65rbppxqkdi1ZLo3zYCvZg8bPDLd5f2ss1YmunopsSNdEKuPj",
  "key29": "673YZdSxsC3WRcdxbH3doinHSdFTndNeeddJhDx8jKfiRgfucUrRC9UBkmX3XRdke9XXYQjYCzXTmj1dJ8TLFHqT",
  "key30": "5qPYEyH4gtabq7LRKcjjKMaswG5kCXHJGAcSGPXab6VDQDtk5Np2BwRHwpmaMiDSTLycmbtv3xQWnGotvRbG33XG",
  "key31": "22bzTwAH5wnd6XgkMtTQSnSSav3FuBtLgX443gGdHKFZW4XNCQ7z6A1VZHuS8QXdHPEpAsNstGfm3sq3QJoAcFCm",
  "key32": "4GkS8t7LJzZTnycWAoUdFqcEYXbt7GXP3u5u6E6dw7UrKb4SPe4GZRqoathMfvNH6QdtTJgBMgjNHuqhnWdA33qm",
  "key33": "4tFVb3rVgyRAMt4BNAF8t5oc1gJrGdjt1PJJCfuhtuS3Sp5UQ5dvjKX3r4L2B11D1qhcbsmwjhzZdenaGAgmv8V2",
  "key34": "3D3YvYkVZKPcHtQa6DpzXojWuads8HmM3Yoox8VkLF75JFfimoHedjvQ256S4TCmxMRi7W8V5CdEGaEgAeXci16z",
  "key35": "5sfB6KoLEJWi435YSiyuhfiJsYjMGbqt6vft7dTcmLNXBv1sUX3FVK8eZNhSa9zjYRUfD1fmkdeKkvrLAHbSs7vM",
  "key36": "4MqWWA7SKKxECDRBFj1YdtSWp64qAG5wUYFPsbotLVVL1C2Mvxb2ke98abepQ3tdG77xQS3ybVJmzLAdgAb18HUA",
  "key37": "3K1hfJFjKnd4VqUyyU9W4yMEjQtPxo7AB9MUR7sZZPtQsLFEbosnvzi9abHf6GzQurHvkHX5oexM3GPDEPKMkSWK",
  "key38": "5kAr2hRUpcbZBG76gfiUkpHLSFhsWESfQGGuDN8WQQw6Y7Yub6qHVCSdcV4rKmy5PgRYdjp8rLd4Lfry3GjZV5nn",
  "key39": "3bSWnzBGojrc4YdtQQzLqhSZbBpB6HX516YtFWHAWwPqgUu9Gm6PxibAr3FJYNHFFd9AeKexDHB6LomZM4XvdbHd",
  "key40": "5XQnLbBkW5oM9r2AaRyfLt1QrhMKwMirBcsioqB2zqGMCeKU2pwNK78927wypYRF2Vm2hdMYc3m4khRTKuuoatRQ",
  "key41": "4LqWj98RjDTUqG7QRYJ5WBKT9NWmcFLMtu79vqpGRr1rwfjUrajdY2cWfgvo4sAHk37xcn8HXUH3jECi7x26ozQn",
  "key42": "Sf1ZBCwYMzBXKZdyA6tohhHA9R4tew3EtsZEnn4b9RfkLcTeHWZGiQ3TvxHA3A4ZXTHqV6s1S3nmKc1xxhsERhQ"
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
