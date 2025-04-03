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
    "5fZ4jvvKvETtxrH2jNbLWfv22miFKgyjeQp5pTXpsvBjxwDKfkCYjXPSfNT9JfRDgbDUVYuJUEGC3yx4s2uHB8ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZmafB2Jsyixc3CHRA3AhQF5F4U7G1SMEK9RcAApxkTbLcTkVZ4MMMLG4U5NVokajfNkaRzRENPJGnci6MFwx83",
  "key1": "3TpWMvXb3tJmDqyGjiQENuTKUvDZ8ypE5DsJYrY65vTaBxcH7A8aHTdsXdAqUfwhM2v7EDTqskaBSaAc8BsJbNnT",
  "key2": "29HCtVSyn1SQcMVM8QVSbtmfBEErJmVBT6zvNzedkngyWy7iBuFXyf4iCdGC6ZUNSqQJhVhYgrrWpzJXHbrwQNFL",
  "key3": "9QkbmLAUHLizsgAjNmS8LT2JiYoyp6mbAjJ4sakr2AUYiSJEbMRrbE1B5u513Y7ABhdpEUhBzWxYyTNTjZgyYD9",
  "key4": "2tU9K4VLFcMWbhEXVrg2ootS23FTaXm2d9dmTyvUTBcQdAaFTywRgduQge6DbxoHuXVbmmVdtqKMtQWUuBuAFq9a",
  "key5": "uYVrgVkUMm7wNPDSmUkZRSaX69TXczLiw1Xoz9caCComk1aoLRjEvsBZkDQZxtyGKkGHJVqqUQNet8FkwPtuCC8",
  "key6": "f7S694eMr9Ltd8yPsRnzVcjbv83EkVtKyCNG4QKw5N6AksGRV13fDrctJ5kGcoYkt4ED6RSyn2xF4Mzne9UzBxX",
  "key7": "xtqFUpsfvLzATPoHNh5nu5XrbiTeQs6cVSjmkXPxXpzgxxnop93m4DMHxiYVqpkuVTNqHVheLG7wSeqBUckvm97",
  "key8": "2dfkjV2ifWJwzZp4DR6srvV6VUztHg6XJrNAdHeAgj5RwKbg4M8Znam1BK6AEdCrctA2VTGPEbKK74wqFgPt4ahB",
  "key9": "2iXmonHaFgDvddGsvNB4cUNqnuaWuG9ybpePKEKxhiFkbHa86mJ6yhj63N1wbMXGLqix47AyTmmACtXzP8udiZH5",
  "key10": "3z6GSsWzWpZ3GQXjQRH68i8AUmz7JAs8c5QpTnrtWkowQSC3uraUpJe5xF1XgRGHwSZn66S9mAgJaBVwoEZTantg",
  "key11": "2qPofuQtcvFbCxwB3wkGbWNW6pfM3fEiTEwyWmF1R8xCyMLoxAXZBWRDoQV749vAkoe1Z7qBLDEbHATzuJumNvpR",
  "key12": "4DY21uLNTM8bWB6ZsgaKCjDkK9Sx1FonE5QHadNY4NkatJY9f3EtVB2bf5QyxX4hA2Q59QvpgwK3QvbMQxu7qPQr",
  "key13": "3c3ZAsNhoKPrmXukbi2JV7aQwg8drEpRnS8wk6vbtvbo6hLpPMRpJoXaPKzE8kPfY6oahniZD36Tr3HnvBJCTa6s",
  "key14": "4QWuDYLkmubpdtMyX2x9tqqcdbpEdgaTDwrECf7tpBDK1uySdmNoct7xDL1UiewCCuPZZjDUufmf2VPoDy4x8ghs",
  "key15": "w9w1thvgAuVbdbTa6CPHi7PgPqsZi3DWDs8HdHguZnKFnU2W2ARhBA4g5dXY1U6XX1SL9db2AJfhU5sHUD7r2SZ",
  "key16": "scbziLbkeygQe5bL8PVTUB8kCA2RU419qwb1TySS9C33X1m42vi2qHKCtDNp2VyDkuU17VVeDHntz1sHNZdrLtX",
  "key17": "5mFmsZyhBH6J5eZxXrBPVjg39k4H82pMSChHxMdzZFVKmsewvjmQ3aF1KavTGLjKEJDamCkaXyKqp9nLZ4EX79J1",
  "key18": "5dKYLKaAZdhUzNe787op8eMQh2Z6GF6vF2MV4ftkSXciwHwCbBMw6jmdghDawxLhNebWDzbrGQT2p1tQTMcFbnco",
  "key19": "4iyr2MZLkGeNY7rCsCnqBv1ztZFRj1eKXs2EUMBpgSY7p8EzStf5gAanbkGLbzTdcrWFAKdcXNgSaQHy4XQ3MmQc",
  "key20": "CveN8noziLj2CShKkQXrHPkCKsMJUA8wR2UkZMqAnCkptPUhv11V3pYXyBsGmk5jv6NnFTbSvG8ziwGDXAS8eb3",
  "key21": "5ebsj28L89YkuzkFZ9Ze8AVMrB83ZUd6pAGFNP5CNQ6Fr83hsiobJZ18HycTBrCbkYbZoXEzMh9vPch69KuioHJA",
  "key22": "XCYwXNrqN3nbtJ56ZzNRcaS2dQPyqP9QDFthyU3W8hQgACW7y9aMKcjQjzoNXgwQ3dkbkkxMoRQ6YRWQwoTi8jQ",
  "key23": "QeTjxhBRK5EgP1sQC1uhVUKeocFffXCceivNqGk8iQoagWsDpUaqePPEQBVYdQbTKXFs9P1yeEZfA63Y9wpdTAv",
  "key24": "QzorevACPyDk68U5uDvvPqekFcjbh7CwRAVArZLEdTGvRqd6vtymSkRiTgKmpkz1MJLk3EuqQypgJ2kkoSB96Qb",
  "key25": "3CPyBWQS2REEpAvJE4V9uNREKGpEjAgGL3yNTZ2S2nZ8VB6QiFHFYX9BDVqkieuxxLVpHGTdJo3QUzRV9kYSsF9p",
  "key26": "brroFbHnnreTqTA8N4wVBqHwXZB1VousRH479vJD64M2Lu1k7AGVEQEcFBh4pBuWdaVh2RLixdfWwP3oFyPFcpR",
  "key27": "ff5Xb9uhv9scg8wASsgmaKvt4ZsgM8NtByYU98sijS3kaft5iWFaaqpyfGhVXoubM7GpQwbq4TbuX4p2M6z7mW7",
  "key28": "21GMPFVyQugDRKn1ou34ktfMkNx4EvXUhcYjqwru2Dz1NJGFu4xVG8jFJzbTzf8UrrRjFFA7NQLorLm11cByFtTz",
  "key29": "A9hy1ns27AzovB3oa9MHTXfWgdxweGx3xeohwVL7p5GVVxgCe5ZAjjkJPmNm6K5XAfL4WpL5KA3LaJ2wet9G5RR",
  "key30": "4CoWKHUHCkFRywAoYJFyoi7x3c9Wnnaniu8uud8XjyTcypCGqwbq9BKaqoF6vnrDWZZZbDKmpPqMf4H5aj78RZjv",
  "key31": "63Zz6Hz6Gwrzw7Cp31oF9gjeV25mwgyokWDE2vyrsbHadhBvENzQ3tY25pSKA31AaMyrnVqwifkwA5g5899HEu35",
  "key32": "39m6e7xe7t1mCasxvCzTSbiumDQGA3Zwx6vE2rrSihnbhYgyrGc5HBBuFZDS8TSFA2qqxVaB1ZsT9D7tnTaoBD6V",
  "key33": "5FMfqMXayQQMeH3qzZF5XSoscDPLQtgeZNJHdAqAJVWMSdRJtkMnXG5oCpwpr5D5RXVYMAyjHRPHWYhctZNbhKL5",
  "key34": "53KCfPiZgYPM4zkwEnTLjhmoCMJWtyT2Com4KxZEnx9ZggFy3Uwdjjf3BPiz6qkRQ2gXTrEYrQbg18qJyK5D9m8g",
  "key35": "5N71YNrA8LfDdTxStFX8osLcxf2995jFSfxug1ixdANLiKEeELF5xFdbbthgGaR2ihgNWK7RneBrMX1C2vUaJg7o",
  "key36": "4FmLEk86g17Jxf36Npuc6tZ6zqmXBRA6sWY3Srk45USaKTnk8nuNosKh2z77x3zhwgxHx51UHbBRLq43zPA48PY7",
  "key37": "2gWtzQmAKqxyZLaVnwQTPvVSPYR3hFTnHq2LhPSsGpyRkdrpqZLqL6MBBc3boDJ7wsC54zbB1Mkx8t3SAQGrNbDU",
  "key38": "334v6aHaMxDju3gLcddqXeJNs5KBmz7JWUwDV74md3vX6LXfyL33X8ZdAtaUKk1oVR7Py7r5FBzzLzcWNZWfZRw7",
  "key39": "4Wxo4zErGJ14i9oRAv1svYnDNtKEosiuyAK2cBrcZ81atx8YehrjVPz6SwzZjR7XZ3kcxxq6tBce1aDsQwVzdhVV",
  "key40": "4NLB9Z5hXagg6QqruicPReya6D5M59NVCLjbMSHrnF4c5fNfH3EjXBoxx2f2J464jcrYe7SYRQbWJdo77JmxcH6T",
  "key41": "34kvMFLiAqWZqYNTXtvE8H9qjy7tTDqN4dCxXFYkCRWLKv6VsczjWPQwjhKaMv55vH89wV1Lagk2v7JhNjs7M8iw",
  "key42": "g8uig3czCzofvxqtezzr7DDTLibmtyA7wNgkZu9hr9E6F9uposJKr6Uz88339RukWwTXEG9RdVYaVp77U9VpUoJ",
  "key43": "zjYnApuvMYrpXaXwdvyWxfSCK5ce4GLihzyt4NchREhgaQt7m5dEYW3FFH2RLj6QZkmGcM3h9FuawGnyFMDn8Aa",
  "key44": "5PRsU1fhKPuQZKxaLfzeZiDEktJvX5jvLHBZGiBfscRNRizj7qWLTwiWwpB4i4yay8XNVnW998rhsGoBPkcwA4y4",
  "key45": "5h5JyctdmQKSHWZVD1Mr9M1mhBo6FV4fyMNkgYay5Av2yg6KYSTxBCe4eHCtDUthKhix6BD3yt1EA3DD4xqS5PYE",
  "key46": "2zTTWektpRCM6Pgxo4PKG8Us7rFE915MfatrgUu1NrPaSwNem9q61Vw6ER56n8tdrkkR3TTJRTMVZwi7cBUWYm17",
  "key47": "3a2QB3E235E4GQ8XRRSEDeemh5XHMvWrCiFGnqa1GcA4ESuBkCvSWchXaMiRztfFFLK8JvkZ6c5GTJB9KkVjDGKJ",
  "key48": "26KX47XmHZS1xrWaLGm35FrBmyGpjHu1BbN51vw6D2odAzdfQZqTEhVNNrRci3J5SK63pMWqnh9Mszx5wimmxL2X",
  "key49": "5kZ6jT9rdATaTRtCHRzPJj8hdsUtY5fA5P5tJCqYYLvxQakGphRcqqvBXaJVFpbUTafF6yd12Po98iuiovVjoGgo"
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
