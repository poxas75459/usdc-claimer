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
    "cKGDCDULTWSaoqKdpupuGFfkoxVv3ntSi3e9g6MCwDvLsdSogbNyLcrBMEte7fLduhdS2kdkGonKLL5yeLCEFK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXxJHYp2iieTMCLBrtD6zSUFCs3BJ4GMVyQ8Hb5YTofkpCWEbwCuT6MNWNZJgiUUquK6YenZHgZrBXCVJJjZKk2",
  "key1": "34R3ProNdZoi6qnhuhANW9AsuN9w8Sx3twQWSsMALZKc9Y9xmjQ4q2UKpGnk5awqg4SBmurfU8ey6TBNbYzxipnZ",
  "key2": "5bf9uTJABkyUWQrvoR4R3n6ziHAEi9Vdo5VWMhzy5Ki8LAyuVdomamVtQU2cfwht3SQLHv7eku29KcGet3rFpgpt",
  "key3": "3gw5XsLix8PhU1JfppSXJmRhtfEvMcNo2qUYw7dfMd52n6EcRFcU1GD16FYLn3PWQ8b1QNJdfjm3N15irmrMKLae",
  "key4": "5V8X148ivSFcf4Q1sMY3AqEt9eQCH8KmJhnfZdCeMahVxqNPzrWew81vZyu9yvQbJ3vtYG1E4pifkAREMw7s9udF",
  "key5": "3m3kDbPo1sU2bkJPoxWvBscksNurYvkRVbUdpTJ1C2XXbZoSpH3cupzXp4kMjiAJag8p1M5V9jCX4issaS6K6qyY",
  "key6": "5VFfht6493oMTadEY9Q1MuwQUrYkVfWBTKPT3zFj2gtRrg1HTwwYsjQMsDzUtmDLHaabv16LR5UZFj2exD6CdqFQ",
  "key7": "5R9nCN9cFDEK8oZgzzFMNUyAnHppaBpempXN6oEmoyQ8Doaxp6AoEissL44hAobUT2yk53mR3XnkfheY2q6V1dyy",
  "key8": "5USrmczR6abWHLvDs6fHompJS8BRH743cZNat2t3HotNfTHsqtXfhseRoWyy6Y9169yPqktRNaEvJJdD4eXDjF2V",
  "key9": "23UnMzPrphBncgv5gE1g5pnE4YCbqHe4N7BVv6dzWLXPooXswCwPJdBTot8RReKD3ATMgfVZLL86aCPdzUjvHh7j",
  "key10": "U4YAvVxvnLAHSkvhuzDgnhZicRjCJf7jybvzWtQvqwXbNve3FVmLbmGeLNuduwzMM76msfG98QMwvE5LmYrCWWH",
  "key11": "2Pwi5tR1d32z1ALDnTFk9stAnVuAQyKhSafHjJrkesYDLG35Fz9aWtJD4HrXKfVRhaFSK5mBYzxgPcs6CMG4SR1u",
  "key12": "Dy9cv2TqWZfvQpuaf9kBEV9iXodHDdJLH19BxfLkYWTZ8ToQDffF2h65mCvcawDNLW3vTqgNCSwMKjt7cHPgkFH",
  "key13": "4y4RNYHZJgNbvnZ7HRjhhZcSgGfLQNVywshm8R6FWGGfrPStUJRfjF3HUsgWQ383uVYvs2ZNyTJJ2WG3eNCDwqSr",
  "key14": "2dP7vQCfVd6gn4qGnZPRXH9vmjD7zwaQP3smKMGd8YVcfYyc7qvXu3XhmgcXrPouThoYgNShNR8mzSL9SZKbvEAk",
  "key15": "1duwfFyUGJbrcnok4jrHacBgZ3VfsjK2JhdBGMcvRgN6SL3p15tstiBvkQsG9b5XQDqH41TYSZnkQyx1HFVdo94",
  "key16": "2svHX5dm7ioddsEtp7B5zxhWNtyAZHKS9SVf8qYpAQPBBKPf14BCjSqkucmTmghjdvvFdhvPScb1g3hyYPujEBbN",
  "key17": "43X57dRn647VSyMFjDwedmVqvzYaGUrkG6ZJFyXookVjnCzWJvVnkYSLRHMwgzvL32zaCCeuJWFr6wcVYKMSXpma",
  "key18": "54RoFWuHZkkNohNN5yPq9RYnAwVmC6W9fThCJdXzJP9ZuW6BdVqf7KrJNFJVx4BaDB79T7wuTTgsxpQH6JkVgyPB",
  "key19": "5rr3WTKj5yDNMHijEU5hj8yZYa2gb3b8NdVjzMoRk8MwYhiGRMFdo9JrJtCKPnma9w1u3GpmnCfQcQRSNyCTPsfR",
  "key20": "52WSbfuUzMPVQfZpfzWDLsbbJ7tvRjsPjsUUeZbRdfFsV4Ecb9b5oeCKmk8s3Fqis4mU5mZiUMsndUQwaxf44XRE",
  "key21": "5cVKvmCSBGPZxLAvcB15qJ51veX7fC2UGqYezaadLQyFcqaFDMBtTXkwA6KbEzshw7hqQPZxhzKpQ89Suia3B2pH",
  "key22": "54N2vCT9Dz5M9D4N2hAqPmAcoXXAAd54Wn1318UcKuoxnR4g5ZRGQwhHi9hYieBkp4itqEuiSoej21HLBAffywtZ",
  "key23": "3deQN7pYHFirxb5J4nzbpUcQ22msfn6qCr7qCjRtmxzQLMm5T5vnV3eh9XuLLibyeZQyPWLwShEXykUxhao5zAZ6",
  "key24": "2sK32fUNpjDRNVRp6ncmKHS22zrMAkauriCAvscyMmbAyrChjkvyJdAf19ou86VtLrGsTaALCwu2yWkWvxx6DCze",
  "key25": "2H1cQAqCFdhSuGetoDQt3g1SDpXYyjsayyQQ77JdRM8cn9YGbEACcQEHHVNk2WBWo9HpjXzHJBcyav8LXsCrUtP8",
  "key26": "55hfP2yNaDb1o9ffe2MfKXUoiPTKLuY7xtaVbyc1Yr1uGZcRLsQH633bNF7LRTa1vdV5zTbVGeUPim2KTehTUPJQ",
  "key27": "nmNq9EGY34VpVS9Wi2BfXKgxadu8m4Hcj5hav9fxg4xffHczAxvWWaBbS3zeWR1RXJmspRo8K7Zrq9PPqLwo9u4",
  "key28": "2ze4wsW435w6WQVgcwq8W32SwowC3uTMue8SC3VbNURvgFJyZdXKYWvWM8yviznrs4JPMnZqQUWoZbyo8fhvhdWL",
  "key29": "4kvNtqMDwD4ZAX6WtvzLAHqmrmCEbvB2ZVuyzp9Xw6bU52rzS2ck3LYDKzxnqmwKmiX2EmzbESAAgHaKKXZVX7By",
  "key30": "2S86wLvqAShDb9p3hg4hSuZXQxPTKFNKMdX3Xkv3i7bDfxEk8fQmmoykVqgRHHvA2uAZGvgPDizhSK4syT8nQU4J",
  "key31": "5xFLAVpCqgNU4NsMVhbS6cbV7ycBMzBkLroJHSuQuP5hMnar1kj6GJinkNCMgnYTiG8dYFxyfc21BuoPkkrFaojZ",
  "key32": "ig4wxUK9fLoxBt4bmytE5tpVNdjR9kw9rR7ca8AkLSDwQ2znKH6cyrLDxNma6PG813HX5cPmLTf3dD3DdgGsprV",
  "key33": "37sKDRpe5W6hoTNMgV5W9fYnVex55Z6kp7KgRYBaRF9xHEqic4yWcyu8DGixsnz482v6S5Vh1HNFVpRzcTakhCH1",
  "key34": "2VKPJduXDgir7e1XScMzekqgsmyoBjLQ8CqsuAjQeEyYDjqzQyGF9De782PRpSeDtRTcmmsR74GVniV44TPjBxb5",
  "key35": "2GN4VRg53HUkkEkLTFqmGew6gpnm5QqEVyU1bVfMdTDXpZcGPgqQLtK93QKrugfocDFfJp2UMKBzgWiJhfuDb97j",
  "key36": "46g927Znz2NqHe5hTmGCy7vifxRBLgkHFDXgwUJjFPp6AbRtjB83fHJdsVVDRFKnqDnRJUaF3wVdfaJLHbGwwSSP",
  "key37": "6ujgni871N7tjzkjUF1Wk3C457KcvcPuyKi3GDrLfARubUVNiqEiTbSybdeZXU4Zpw987szGcYMP45ejVgzjVnf",
  "key38": "4jNTAksrJThSyXhWZCqCyt1gUk5NtNESNZgrtzsY4gq2Xo2youKojSB3uKQQNqpXPbFrc52CU8H6ytiCZXRXu8gt",
  "key39": "5WUAgGPaNMeGjoKd5gBVEdcE7UBTCZA3JkBHsPRsYLEHUyXCqYvWtjyZKhQmAkLbA2PjoxkmWDdXpsbVvJxNqYtZ",
  "key40": "42R2G7aG6X9VkJDYtwbLJ5dacH4B8PRQKk5sh9iD1ZcdH1DVX8hp1tv7uFjXrcPddeU2Wj4YLtoGJtdSYimEC2dn",
  "key41": "2ALX1REMe4ga99XUYKphXJG9egRYsiseSXXVJ5RjTujDwzn7gwjSuU5XaZCKCjGWjLbNWXCA4dBAqJdZW7XRg6uD",
  "key42": "int7Sk4mfXf8LwgVgDEfwhqMF2UXP5KYiZXqU7KPZKRVMvkmfYqkFkeTFcxTB5HGEGDLwVjDudWQKS2dM2u7W4r"
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
