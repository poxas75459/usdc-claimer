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
    "XxVVGxDv3zjbzGfBXZk8cN7Yq53Ke7Af1PJr5CPNFGX5khNHYL7Swb18pWXuZ4okYVp2toMTcHWtqzerpSgzb1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qE9cZXzc4rvVEzeGiFbMReLgN5oRygJRi5u82FubBMMneSdY7ASbTDWwPnNSRrZe53R5CZYGXTf3Rfxkj8QzcA",
  "key1": "4vMN9D45o5BzfXavW7Knqe2whB4YrHwaADrQGPKtiUYhkk89yjhP4BVxZiUYoeuSk1zLEb2G4hBznkgQwR1V9kWg",
  "key2": "4SphkvabK4HaibLzRPQuYRZ8X4kPDgQd6zmJTkrhLrvcfucwHK9xZ3jtW4384FQanpWeoNo9QkmqMdxo7mEh7aPs",
  "key3": "TVfvbwbNMr3WVXR48DnibZPeJsu9cxUVJW4UDZeypag8HJo6v9FP1Y31Zhre5CpGGqgmNV3DgyFNpkPjBuxibJC",
  "key4": "5xZxaohJ39VfrnQdRNvAGsQEDgRNDsd87pwFENWZTzUDnXTkmdQYyhGzdnBAJAZ63nWMwaJ3b2Zgexswqugx3KBa",
  "key5": "3vCDnyJqYbR4iv8sYFkuY64FQikbUiCmHo82YCGNNkPcEF3KTuz8XDHdR6htKAMs8bsbsQ44PqgFiuYZuHvr6CR9",
  "key6": "2QfTwJTEjQK8nk5M5sNe2dJPriX5CvihRUVNG5UiFQDqgM9KdwPR2FVY4s2HFtgBp3LnVQEc6BQv5Vhh9eKAKzoj",
  "key7": "47u7VY7tfmPzcbq9zWEMBe8dqKqteG5Zd6hs7zDYZB7mfiLcvTYJXDryAwKGATRC9513ah9NQchWWTkKYLXjyA5v",
  "key8": "5CNdAmfJf2qJzsPMf7EJbz58JLvR9Ja6sk5qmuH74hnBgQHUU4hs9hUgeuq7VfCaEGt4zn3EiEcDVHaLVSpV2388",
  "key9": "fLECL8dKg7c3f3ZoAhFctZjziyae9BLuk1MahfGG4Xvi6BdpaFmPYHKttn2Dy2AJA1JgQx9HFpdpefBDJ2PXgM5",
  "key10": "61gbcM7ZHGGZboBoZhvQzAZDqVsjH74DRkyBmzi72nWfB3w2KEYuEzWaPXeM47s3WhjUJqZ4NcW5RetiJnJBv1oE",
  "key11": "2jxSwUzFG8MSr9bgikfcvwFE1cftC5wrHJVQk5BbtrBkHGYNAUQF5drRghvs5cFxEDfkQECJp4zqgjFZwMbtVQQR",
  "key12": "5eyumo7zzumdpQzC8w4uPCjA3dvzzxZpAvznbUYLySewBQiCcvDqPJerdpry6nKYTHxS32RUHojYxergzXy3uz8k",
  "key13": "3hGBuRuAsJhr4F8he6Lva7vMzaLVJMdAH5xdGHWeZpJ9wM71qrdc4rh1hymeYZ3HMutDfyq1JbSdxtJbdfhB88Tn",
  "key14": "tNRczk8QEG8SXCVArhE7PRQJtkfCebVgwfNdZ9bi33xyi7Yfz14wDTy7qZdSWQpygy28r6XjRemqS15ttzMaCjU",
  "key15": "559tJCViRk74Vw2dnVAD11CAjDFVrYpMYMAuDpWCHXxh4iuMLw8EgFnRdeGPxDYUeFnFhX8yQrXYTF1Q1XoDh8hs",
  "key16": "e24x3iE4zTMywNzvH5u13QxH6uFVTTR8hr1RL3JKcCrPjb5sdvBBxzkD5Y9SHDqpdriV8UoKxVWGubT9uRXA4v2",
  "key17": "3mbcDb4QAs27w6SaWpm4K869jTHYGLxd6bJmafVFvvfdtsnVq1D55FZFALCmd3M19WWYZJRfVPiBmhjYnjDb268y",
  "key18": "293M6vNFHZKuuyf4WcwxnJjsZaftKcKCAfq2y5PLU5yJ65eJqCXoc26X9Xhb5xb83TuKnowzVCQpuMm5hxH5zXFk",
  "key19": "3X5wnCP1A7K8WSP2M2dunsReC3cd7Ei95B3j1iSqXj3iLJAV2EbWXX19DddZerQfvHCiZZa5fM5yMmjTLqDpiLqS",
  "key20": "32pVV8vEK3NuHiR4qmARMxRJKHZcRioJtpkHwjpqwY4cmKEA493wAjCDzD3Q3JAR4WvkdqzP43NeKVGCNZNyVRMj",
  "key21": "64BUfP7FLNV7a8BNKRMJoTPYDjcXcER9Rgpsn1RAHHXDmKGVXMMH53nZ8TvYJxoBveJ1pipHTiSJviKjki3HmteK",
  "key22": "5bbLSucCnBcNeMU8bC6MD2nrHxr1hVdCA9iNn9cvkAAT2uGGkdYiUYAf29E391jTibWh3acJHk6jqf1EDUG87GEo",
  "key23": "7oZ2iarq7JakHcywYHn7P4WxgJTHZWTuoReZXcMTd8nUYQti6g3pZeaEJaohQff9YTQys4rhdk4C92A3zemC4Fd",
  "key24": "ybFfFqWiHJV6G99EWshvkaeR8iUjqYo9p7qSEm5qsBVLhz54pggwz5EG46VGNbXYURq2PDLg46NHEj5WEdMgHa4",
  "key25": "2LgpaQz2uMwMALGCP33Jqip9nTSYhup45yoZCQYwovnrMoP199DoRqFXpCByzdDbExXjDeWSDZ97KoRT7JSJWQMR",
  "key26": "4ZFv8SG87vcaYtCjChKVtmNDNY51Bof2qHeM7aFFrJxuagsyDyJpqnpCRjbhXRqnQiWKF7ZRh5pBB363HzV7HMhx",
  "key27": "31AzJhc5ZL1gYvYLig7Ctv8iB7ngd3taYHJpJB7u1oWMp7vWjgCDiJRuQCx8H7AbFbFbE3CZ1fQuXEUDVSNBuMfr",
  "key28": "2soJcZbFZ6JmhgRazsT1TDHgPSRGjpBiGUH1Dxq8dnTwZomdMibcohRkMmtuKLyUsjhnkkU2S4dB2Q6Kxzof9p5o",
  "key29": "3p7txd1vYgmQNmjd7bJRPK6tUMtCAcNvbqDA6ymRfKm9MMnRAuR6YdYhbbf3DoYzqbN453iVzrTZYDe5qvj1aZuM",
  "key30": "3EqiHBFGcrF9bx1CgRn1bpPNk2Lw63o7ah5YbTPpRCDNN2HC8WPuS8ZFdX8D7Pchmj6xoHJ1rUZtK9tHLFAeThzG",
  "key31": "2DzudV5Dzmunsns2xHGf8sD4CCP6SQCrxTuzewGNLbGU1jS4LMF8piuLHf6VmjZ68bRAT3v8koZxQ3iFMBvfKek4",
  "key32": "619N2DTu3TbAdTqmUKmEQ2UziFqaqsFddfryRhFZ5NHL9sDGP5qTPMLWkm3DG6YRLGrUpzphzaxZGCtbZbFZ4Er1",
  "key33": "5UP5iTTU7Kdob34vAqwiVXS5gdpPYm3UvAQvbRKs8mMJP5feaqpn52DWFZ6uGTLhnyNA4t4BKRu7UC4q1Bi11UvH",
  "key34": "2FZPFRLYrpqBrAfMCSZyqufq3UQDpCTj8ad8MhnGE1w9DQqacAm8g5ydETiNfByJnc5jzufzbbWGzkwx1Rdpujoi",
  "key35": "oEVQCKG7cgbucgkwm2hbs9Jy8CHvTcrQy9Ve7KNBM77obkrsuCFzZsRo11H3V7jNXBKYxudQjJiXLUqwBHfhgYy",
  "key36": "mWmoZRQLt1ywp76tJjNrvNVRSFFBuFVDE2pRjGUB2WKEFuS79Ct3odnt9SG1pH7KadkAoT8esDqYZdb9pWfpbUD",
  "key37": "KcrTMaD9c72tSEN6U3PG3Ri6gj42M1pe93PEQwJrdv8HcgUk8uKvu5pqf8zj971fGecDTpWWr397xz8k1YwzCWQ",
  "key38": "4gQ2Guq9oFWeM6SykZtPuvZyppHoKyXf3egwfVuLSWoyKBgwEs5QwWagNLoXqXzA3otsxzN4XUsTEL4xjYbT7dfc",
  "key39": "2gE3d9SpAy9DEUDgdUy43tf8Y4PNpa8rs9Ac2dMso8JDUxhzNFceXtopXfTfYak39jb5fnATbBzky1irbXUJwjP1",
  "key40": "64ianyRRZG325cahQCpLnZgs3syEcAHJV8XZDNyMxhsTonSqBdXmRKJ8pzBU4Ht2bTcV5FxQHaDKeqRuVvYcEUY5"
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
