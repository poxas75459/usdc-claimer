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
    "2DyHqQvcuqvk5T7BXcKydodDAWF1h7JAr9wEqKiTBaomEZE3nQ3WW6AhNbemKqnqAWJCWkuCKh1DN9W1SRL62jDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55UVQcLXo6jCdBmCUsW4Ck5Vmn78rwxAZbgNXBdoN9e4Cw2FLwEyn1NSdXYBsk3new9kDFHck9fq4NexQDCvb7cQ",
  "key1": "2b9p4fiTxnQNGC9pWVoMCNyYXNXhiwutwnD42HozqczvtdiR46vo2sM5T1LevfsfUQPtPckCmMNjGZVYWqja5FqX",
  "key2": "5KZJ2xjnHbSefQfr17Uy1QJTodbidC2GjmPS93QQy7RjSdUpvHseygnVvidQ2gB4H1Jib8t1iSXDp8LEkHWjXP5g",
  "key3": "56LQjiiuN3sxdi7bV6W9DoNBTPAZSYuqYucBGoQ35tH3RvhiP6aMibWcBp87NXH5nwV6n2JKaJozWgdCDCFQ9ZD4",
  "key4": "4Eo5a35oxdA5TvEFCTU5PpFCWzFCtyYUyGRf1bDHssGwHV17UUs9Lnbdefu6iDfMu94EtB6Dh1A2QyykwRWQaL7P",
  "key5": "XBXmpsiWe42PCwqHDAPdSzLHx8imimkwS8npqwxSyr4q4toBBcku7Mx1UMKhNrQCSmHunyfqUBxnoBLcMHpMbS5",
  "key6": "4GxogTQWyPEWz6gKySnAZoyniD87qzL1pmFDR8Dp2f6RD87ZkVh5VDeL5WWox2tkxxLAo39LwfcUUJvsLNwWpje6",
  "key7": "2ZKf9T3hb3ggvPYgRabxNseyLkBbYkhwUHV1WHaGZTJMcorLAHKFnrGPywfJvmCkQaSjj7uEen4VmG6KC1tqhyur",
  "key8": "sbZEGiJ7XaFB3r17SjBuZnhHrs3KrX9Cf3QTm8pTA3e1NQEKkjCiBSi292FJKLHHH4k1JfDhJza8wf2UqyX3Qyi",
  "key9": "4eGTdqeTZtaNvmD5ZVwWAQvucLv4kFdjjR6BUsR14yAJ6U9cMtPVSaJpwL6MYjr5t5nNP73Y3cfoMUnyHu1vMW1q",
  "key10": "3jmQ53jT7HAxD6DUM2EfUgfXEJ15Xq4gUZA69JAiHSTmLENuGVykGk84ZgWfnZdmNjMe9V6ncPyzqwwS74GWnCBu",
  "key11": "4beKHk8t48mEN4pSsXhiZkJAwFu3SU3rmotqM52zCgwqzBYCEtHgrAmjBCoJV7WWa3hVX9RnkiAXZVp3ow9PBXE9",
  "key12": "4JcskNvVDAEjgiGN6VzrBoFgHXTAgUW98gXWtCppoSj9Z9R9mX7iYTSLYASjsoyCwbj5bWN4Sz4NTNT4JN31tSZq",
  "key13": "2DEMaGW2GRjxJ6fRDDSUocPYJLNGbsC3tpJ1Tz2FrcPm1GckggUaUR8yLoLwuujYDZhbMhs41n8P8NqaBtvE4TjW",
  "key14": "29PHEkcyRvp8tSvsTye5thsVbQKbFL2NNS6YSYnr2eUTQH9BG8xjEFUbFonJEddQUMxB3QEU8Vy8cWPXiergYN94",
  "key15": "3HC8Re4e2sNU8u6z2xnbbQc1K5XjmyZ8SoDLQhVdyvSDR7BfZ34X8gEtRHFZ8LYX2qSt9byHXkQcFb4XLSogXpho",
  "key16": "3Nrd7c8c7uEXKLDoQoo5vxd45e2W4BLiB8tM5KmYwhS528ZFg3mHJX2bQsjhMoypJnRj9KKguKFuuPNbBifj9GH7",
  "key17": "3oLnAhoY1sMYejfxiLkwoPwu12wBtwxPCNW3PLUL3Bgi6wPKxY8GK7PUXU2TCRddhtj2Awq4V4ZwUFh4Qizsq6Th",
  "key18": "2ez4iiPUzeuJtq3huZumsbfJzrgXxHLuLEUiPhPGvCPi2uZQNaq5f8GNGNwwwrAfdwTvXcetdeZAdajSpVEN3VUD",
  "key19": "2XnTmc4zonctawkVAGXqsKjZMUrxG82dXWSvqYMBKMyYEZ7aS3cudTX6WghkWyviMSMbjsBRBDEtXEcuo3gNGk74",
  "key20": "36xUJScmGrwPzFGgbxhnrn6zsSYBq3PF88C5uyzc2hjF9yKwtm22iLB4n98HCB9Je5gwihgYZmfWFSeTxMh2CckG",
  "key21": "42ZhTpL5yasJmDwx2pRRjh6DurEerBqaebqVevxypMaQoZ27LMdzmkWBeRctrkKab3nX6KyCCBZRUV4bqk8769n1",
  "key22": "2aM6Kcx6hsqXNzRsZjhCwALxFciYzjBngm7JMgWQTaRxqx4GtJd62f9QBs3K4JvUgvAEK4XYxZbaxQAoydBHKW6y",
  "key23": "2x3HARsbS4PqcWG6iSeyBvZxcLp6fbCReJM5bvfHbW79z5Ek9uknBR9nWaFYhZA4Xe2A5KYxbBvjvTVcGZsKdgDC",
  "key24": "2ivHB3gra9XMRvhCAAQcYNati6gpkDC6WHFx6NWZoqMsFeJHZe3UBUEx33fdhSXPoAdfc3Afewa5CYqPQbgV95nm",
  "key25": "1rHcNE6n97c1i5ahyefHbE8LmygHqoD4zh8e3RhTwA3kZaArZohvJXfJpWgSeiAZfMA8vhUzTL6DBLzZzbBYDeY",
  "key26": "26PmBDhVbv2pXAtwWiyezb8ge6vswWenyuP1KWzT41fw8QJEpZHHxcLAREZKCuwtfdRB21fe3kToNX1dGV49ymHR",
  "key27": "JNSkmUr37JCw5pP2EeFMKGsv4fYVeYv1bwwgNo47BSP55EbELPu3eBqc3f3NASAnMwAj7JbEYxmBhh7Gdyu45hc",
  "key28": "4eBvKpH8h4tp5WcD7trvqRUCvvCA8xuWoooAjkZAXrK2mauvAvDkjegu42dettpbfkoruagqAf736YTMbnordee8",
  "key29": "4ratXuj4vDGDvCRN4X3p1iXpRWMCDPS2HzRLNeYuoXVt5zSMheMZ3wmeGJtdB7puN4p64sHgubMbJvjULcdXKSbK",
  "key30": "5qTitL74kRt6arzF5R9aVwmieZ3y4uDnh4yUtpVz2wPfkkSUJHXtHp2vky67gaKaAN3QAnB3txdZNhQ3rQNjDYvm",
  "key31": "s7HstLZ82SmxRDn4dEVUKpN7fL3LVshYy7SUMFDBKr7rEm4W96AFt7vZKLEiYHhSet4nTv1f5SrZDNtZ4PZdBKS",
  "key32": "27JRfuYnanQntkdacaSEuSmsBHWx3UTUaTUPW4iMHt9KRGe8DCSXShdVtCcVnZFQCMLUDA67GmX3CFHRYvFzAGpZ",
  "key33": "4JcJW8wwvewb47t4T7G393P27Gedw9HhvxjeenK6VkeBFC1rmumzcTbjaXEjK6WQo2fbwN6vJ4LbGwCenRTrwB5k",
  "key34": "3nVebbRd2eNL7dKHzecx6Aj5jptVKXzyUt2hEfNqebZuNu8biALvyZHbqjpRBsbxmG3o7nEMTQmJdQQ46bsaPAeN",
  "key35": "4NW9Mb98netwEYntGGMZE7mTx5yku4K2oezsU9gWE2M2jwASE6QCxofZQYeEN11rH4c2fh75VexSAzAWqAht1niJ",
  "key36": "4cvAAgRbPAYLgn5YYukwPhBrzNqbp4HaPS4PA3rgFtaNg8AQWm2Hxu6DaRzKvkQfZdmHZwiFj9QmNCaMxdpnCAsW",
  "key37": "2w7ZFJVZg6LPN3de8Jk5fCyV6ppVEAFHximxYZxhS9SZaVfTi27E5sZf3JHZofys7bLkKhT3NPU2qLGHhq9qkvH1",
  "key38": "2GcpcZoGtnUR7DXRxLS6Y225P1k18bLnY4taJEwd17UDKnxcboy6Pubs69wyYHwfPfqkkzUMu1EUvwgG8kyVcqoT",
  "key39": "4zzLNAmasyPVtevDH1mv1EUtCqPn4YtQuqVvNYLSC3Kn4aXX6Fscj21jwUEd7gqcHqBuk6AdX3mbSEQm6fb1gpk5",
  "key40": "9BHQ96D3nrATDzU41jJmFixe41DFnUzMXmqGW8odR4SHcgLqV6vfo76UBvKVNxi5VDW3oibkV3DJmjyKiVN37a2",
  "key41": "3e4FwfxJVnqvJcNjJYfCxBgLXkVDdV4X6TdKbvHWAYCK4D4omjtJeh3TSzs4isuL1HNXagE1oysKyN8gFi3HKfqc",
  "key42": "5R4vmnQM8g9aSEQPStMb6f8e6gg2T3pmEC62aWf6gbDDnXM8pxH3yqxXwRXRUM543DeFgNs2RHjWwPJpqK3T3iZY",
  "key43": "j5D91nD4kgb3oF3t9LxtgqWRXvkQc4DzqRZGX64d2cHnR9Ph79jEnto7UGCpQP5o7psDafXfPYxeAZgh6epax2S",
  "key44": "5dfksHqEunwNgwMBvrJc2dfh1vQUoSSBBhKrbbseEDVGRrLc5A2Sm4AqGmAVtVGSTTccWxjs89g3UC9v1VegwcMF"
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
