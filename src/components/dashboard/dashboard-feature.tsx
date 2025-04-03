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
    "2QX8MoUK1oFfiBXfdgTt5WLAWiZeM7DcgKo5FhVXTTcqeNGXE8r2V3MUUsaxjY6gRoMABeApZNwwtGnnps1vXYxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qD5mQedFdY7XbnoRUMs1ck5GqoZVwkuU8Dcq9kh937wuLu1cyHyKFFf6g4oTGM4DsWiDrfdKK6rBxVWSfaTzgf4",
  "key1": "2awcULGYthAEZYk6PmMnSy2BSiaTRd7RQwM6acXjWBS4KpSExEwUSAdx8jDqogYC1xCVzbK78CYDwZxRLzCL8aSW",
  "key2": "6XnrfmS9RRhsepYE7nWGgY35CW5Ed87bWAM1jRBrJFbEaeohYc4QXMZGZ1kGvnM9JFBgCCMXEAVhCUJ9NcfXkSz",
  "key3": "4zvdi9NEzyCUYqBdcUmUYDyGMyRqbwYeeUT89hdxYSCSk1A6jhw6dz5cJ3DyakdBdqj4RsqqQjw4D4pH4aQGdGDg",
  "key4": "63DtBqjvKEPAeBSQxKWAK9n5GVVRt7Mw4GsjQeppTfsse7D8AmU9wtsvkkHmjaLU2fYa3A14kNb41WhSGNvr4kaM",
  "key5": "gertp5ZiAztTYj5Zutbu886S68Y18prrTQunYqpcSxhHJXdKL8d3XrSsMVC3FuQfkLKhWjdejZLvYaxjENe3CJ9",
  "key6": "2V7gEGUTq7huSnywP7xcVSCFJauFTPNChsKEwacAXjZs1SiHsSyphdN1VEgCXCsTLytAnbruPh1cz6FAeuGKMdGh",
  "key7": "3mCWuu7sEQxXgU1hMpzph9T49p194qH21WpJ5uy3SXgzNKpRcKxWSvzZXEVEDamoZLH9VV2Wk6CkVbB75Vtg31DB",
  "key8": "BUrSnkcyDkfEtwsVNEf8TcgPmy8SYozKpUpzD6tjSac8BjhoKH9R8T98BjYQT6xwRWDYeAio6gJXMoa6bJCUccL",
  "key9": "5WpYK9jjCxN3WomJHW5xWrZKGo5PoUQYPe93A8PMXC8xUrinB2zYdZZQjYNhmWdRWRvyWPL571o8EXCuDaGkj9bX",
  "key10": "5vx71f1atuwuMzJYsqbCJS5PgTGmqKSSBuZVuxgEqgotVvBJT6xwP4sSFcM9hz7jStTbUm67YTCZJs8wWeJCE2tV",
  "key11": "2mvvHUuqTvuSsaLeFzosY8RoZtu117MWABJCKbQoFGrgEbnJNAuoFyvTbPg93hJk9qoEQxYN4zSqDfaCsT6Joomw",
  "key12": "4vBaYRxRX6xygY11kUHis3ucXqmePNXnrTvH7bgtCbCCfC32jtyaHEDzhngfsCUxGtgUZpwAFR6tqqXxvWx62SmE",
  "key13": "3hy4gX5trTus95yuWwAu8bHi5d1vGALt5La1wS7ADNwZTfMPFZha85qxa3jNiKv22wjZqJhcBzqeYBsZoeLv9K6z",
  "key14": "3QEwepyeiWLuFse2nmVczmcHo4tfZKsmReDFzAfspoF8fNqRey6hAetnkv3ZEGawycmbrPsxgjBynpJCtpBQJmZn",
  "key15": "R7ioCiq47qJ5njCbcrAy55YsR3u6MfjDkWZhDye25Qdrhc4fD7eTtvbq9oAGJ8Tx6Q5tRYG2KsZG5jVc49HWdJn",
  "key16": "2BAVAtK2MaHsVDGC3mNMgDA9JVod3AhCqryFjKkTXn8jmJB5TdyiwKhb8ZLEMrUC1SwRodaLZmTa7c5bdmzEZhSE",
  "key17": "oUyC4Bg9wrbohRomF5Cc6Y6zjVmc1E4UDvHtYvU3zBVkPQuh8VfgEoKE26P6FfBW48b7eJejNX9UDbo5TYVxe5R",
  "key18": "4soY9vq4vzsB8fedj7PDiQoEvDevcrnnaGtn55L45MpmvZD8GDd1cYJZ557TQ2At5R7gzes3pZUZ9uyJVupJynw1",
  "key19": "38G2fS6ygqAPS8Atwz45GGNrQQzHquftKF9PbTATEyzzKXSpTaeFtgBAA5g8w5oME5hPiaDcSEU3vuPNmSnMH3Hs",
  "key20": "3BCxkf4148W4tZHcA2Y1raJ5V2iBDStMQnmK8JgTUMu6f8B4bU3mb35WXQNyJWmDsbrdCA287sVLZcH4ugCEHBm2",
  "key21": "PLSCeu62awzQsixjd1it7PypJVmpWd4zweg71JFdkaPnP3pFdEbDwg81UW6aBF1rKp5jGkieegZsZak8sYnWpgc",
  "key22": "31y7miYTVxVpHEKJ7dN1WwVHgvYPEU4NgzGuBT4WXiEeMtxTtc8ga2bvy1iHLrokNDqBfezqLJCXPYbyBM2EKk6Z",
  "key23": "3gKBLHxmMn6hH4n2VvB5F6AubFDJhZJubbXvoGrxq92DjbrieDHvVur3T7ceZQzN13ZeXUUSHvzkFMsKFxzhuhNy",
  "key24": "5PZ4oUhgnFoTY1rWiSwkXetVNPBP3f9SyNN2Uvz4QYFSLAucGPXbBiHx6gKLAQG8kEZitkuiWkD87ZdrzLeKkmXr",
  "key25": "5Eg9Uv1qjTqM8wgkVVqRJkXfcQfrUywe3iQDC369NgqxseRsWTf8uFvxrMDHURxbnPTVa6MUkzqneQRRvHJiGUBA",
  "key26": "5GP2HJuwni9xZoxVeEzggZaPj83noMi4z9aHKyvkM3DJax23Y22WLxjjFA1EP2GdkqMHaDZD8VQ4HRiJyMKRNEVh",
  "key27": "5Sq7YXKmBAQY94rxaYPQVDrWKWoRw97Z3eZhf8zZwaQoxgT7yhRVYmmct5aQL51eWkHy6jEhPqHBjAfWwmA5E2QJ",
  "key28": "BobiCTiP1NnkL7bQCf4VFNciMYg1YaEU48cnjo1SXFVT2EtjMqU59Ybz7kU4EsajCPTny49V2WpTpW5LF1wCPc6",
  "key29": "4H5giuY5rZUPpZ16yVyCWkGfJHiTMNHzNsPY9HJzq6EFMKaPFt2bgyw6ySwy4TkuvVhHq1t2caeVXMHyv88XP5oy",
  "key30": "66AHNH6VDvKCxX4XueZC5xtkRUf8EXKNgHPZGyHQ1zvTuan3iWJ7jVAYeY629og7L4UtJF8YbsozGZpXPgCzKCk4",
  "key31": "4pDwwPkLiTKk8CkWMsHJ6D7jbmraU1fbaEtGd6iNidCwsjmKaqkwHBKEHdXXQUGALYp6xjEW3sL4wqy7YZ4kyvQi",
  "key32": "3h4v8U9yCG5eEC7GEWGsvjtWDZGNxhqTVE91cNXCvn3xrK8tJGeazjJT2b4XN2tjQoeWbdSsRHfqmjc2ugFteAT2",
  "key33": "41fJ4VFDK7hzYBwcHfBcNoxswkFmRn2yoFGQKuNHR9A84Utx6c2zPdAf3oBnYpHvcmPYFcVnAbq2GQ66wsCDMTru",
  "key34": "4UMrW3dq52XgV5UkjfXKBWnz1sGEzqEhWmJmQf3gqvsTaXRkabdProRxcnMkawYPCFCgLuZWphd1uHKGihMCdiCt",
  "key35": "2bx2RbXZKTmvXSibNpowHLfY9mDqaySaAJvGdqPWqPhhoiTp5ybD1CWPzgpk8P9ZAZRVYyhSuvvMhRzqWCGPqCJb",
  "key36": "5t3ttuvvfQhSkPL4A6UiSFLqJhZToZ6BWmRfCHoCER478ycyW4YsUv2eGMHJnwNUsRCt8pVvQjNKhthQ3gT3D1WF",
  "key37": "hq4gQX47r3UffjuCmQV2V6dwCyze9zy7pdib9Q4fu278BoiK5pUfRFRQXgV8hxMFy5QpGauSkCmk5UJragyMnLb",
  "key38": "2z14ptsoDyDbP8cia1tWSVgF8d6TJEgiurmFcxtzQshQG4HYEQFkakFBC2TM8ojP6EMtxji5Nb2zs3nSNshCZ5gz",
  "key39": "GyWXaeGmMnKp4efsB48DsMzsUVW4nPLUrk97mLuEbCzqdcMWbAks7i9dH1KXuz8v4hvKBnYZS4PCZGkXfPNd7Eg",
  "key40": "5J5pUTZx14dirTVwbygKD2cCtWbQsVmAXzZMkBzdUkWCnDc5hVkGaeTeHr5trenibUq7pRWXp91zP5quW9NKvMK7",
  "key41": "3oVAFKLBBRHA7mkknZm7bXSnC2SEi6S3HBS2LrYZdfZ1aew7NHg3Ug9uyrvHJWuUQ7wGZmMMgTBd8o6gFvunByrx",
  "key42": "5aNACcWRhAnUJZv7afw9KLjW4h3nzMKbs4Cog7pD4F86gK6xFFesLCPoLtPshkpbbNUZZuyrLnAW2UTAXqmWsWKE",
  "key43": "34TUDoxLUbcJHuecwgDRDxAmicDQvyri4BWTS4rT1DKSnxJLkD8PpKyDhHrWaTv5X2Puq5ZNKva55pGDe1ZyEQqZ",
  "key44": "4CYXDhQZ66k6oDtRUBbv7wZQySfSFNJxoCXiQCa2MJcSR8aPuyd9bEkBsqeZvw4L3a6LB7bGUEFASB1eQGkci2xW",
  "key45": "BE4aA8ZMWJFhWB9KgShKcNNsrCVqj6i5skZQ4HpmqrRR13swQNYhyQKWKfjbjebMv2i5UrZCvzCbWmEZEFUXajg",
  "key46": "5qh6vpZvtqEwcimN7iQ3G28zvduKCqN5QE5jXvuchbLdxJ1ruMSmzz2GhmSiycdSZXyuasm2gjeKz37nZ8pn81Eu",
  "key47": "5T4GyyXywzuvS3Q4JcWcpYg48CmKaVU2sHSS5z8vWnNYaxNfQYD7qEH4H9fJt7WGuq4FLiUtbVvRuXt1YB2KoZzk",
  "key48": "5kJF8CbjfQR4zQS6NiP7oMwazrYj9Xcv92BRaXNU6NFc1XthtFeow7ZphjLoX65bDCUhmFbYBte8ooa4bHyZXxRf"
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
