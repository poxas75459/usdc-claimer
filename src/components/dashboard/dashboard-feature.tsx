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
    "KLbrdcjeLe4a8zBXPria2VYHGybc5FhtrUMsiJsktjRQugtfbxr8v4NuJeVDwcfjfPeUCoZ88RWwyarU78T2XNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLXTq6YNZJgTMz2UvVnAMRH7s6P5sF2WqyVKCksbPUtiVWYA5zAdj8QbLWNbftneB7dHkWpxGSugWjhUW56PixB",
  "key1": "64zaKtjZrYkhCN2eVfbkQLjmFKdm2EGNHi8Kxx9WhiJNXgsrBkgxDMT6SMopFvUAwnsfN9HQTiirqvmFTZzsazG1",
  "key2": "2fhg8osrusMRC8z6DSoEqVqwT11f9BUChZKiUt1MzR3c3HHn7YNszsknodr2JZMuhDHj8DNZE5WoKDuXThXTnWKF",
  "key3": "uTaEfHH4iFERj5wdvrpVr9vatU1cxZdkRyW34sabXfPwGSWzcTr2C3URepywfxVqhMdo7UQjwvBnVU7FiyW4p7s",
  "key4": "4LzsmbagTs6w4ecTWD3acPd7h3mTXduiy6XXN1z9i6DofZLxxSdQX1xEYyxM3NTdybhZ1FfqtXtyX5iT2NVUkevB",
  "key5": "2ZkcBELHyf2z4JeET3eveJJbHo5QLzr3GcnvX6jRvr65cD5H83p83RcyFc9K2KGNJDC1xaXmZTM6vs8W4MvoancV",
  "key6": "38chmy3RME6QVssVQ6c2uAVTCbvEeKCuovkvwFRzPaFvFCz7NLex29j4V3suY1gRnvAqpLaoRt3wNUAtEiVvCW6X",
  "key7": "3AhHes6rAN9fj5DrDwvue5geo17RUayMZA1Jk9gGLVXegNaota3FFJyBg5f4ZZRQJYMKQj9NE5hhCDSyvKDWkxqy",
  "key8": "45BLgVQdtmZ8NEWu3X55zotuSPq3M9FeUUbdB1M3GQoe6meDTY4irCghviEU89k4BjJEner3Xr27oPLLM38YZW8X",
  "key9": "4p6k2n6RAN5SF3vMqf1rdDc6hVX4djk6VFXvpvDEC5xfFCCeTVdqVUay5p8622A3Cdcit3y6VPaJ7GKPeQaCdUFz",
  "key10": "38yg6W6KGtNJENfurE465Voce4sJn9vJcWRPArYdjGvsJqk8KBAYQpuBh1v9if4Wi3iXpkvSrB9zBdSXW4vnfxf2",
  "key11": "tEs8713h3nfbHQn6Jyj14axxikuHUeTMNUSP2Du6zFAqgqUbuhN3UhirnLUhaNgPdgjTL86HbkwqRhnmzQcaRjs",
  "key12": "dHgbiQTLkvUGwuUU4YSoVW37K3Jczxbaxwafcqu6H2cD7gwS5jkpHZDz1qKCJJZ3XNHSr1qff1eEJPne3nYjZ8j",
  "key13": "5UZaqtgsXb1K7xjx9EhmyeW4T4kQLEBQNqXF31EcDYKro649HM52wSmupjkMaN6tztJcd1WXiyQQahsgjE1cseCa",
  "key14": "43XZv3JjnYMGARMc7R7RniHYBdWhHXoLmC1zoRFeb3919R58jxztXPy7zR7Aw438FY2KUJT38ngjRCcAnJn8QjfF",
  "key15": "Wu6xzBX7xvzEBaXFCfBiz6wRtwLuV3pR98WRTxFPQw2mWfuS5PXVatF9kboFhNZobYA9cGNbHUpvskmppHbWb3A",
  "key16": "3NFtLvBfpcg2V5vZUrp81JWyLrsNCisFYoe9kh5Wgxet2pARJWSnegFYSvCzWkFRagNfW33YSGxioe4K3E7iUStM",
  "key17": "5E3AehawDDTtYTi9BbSbZ2jikCQ3VuYMhyNdVmUMaYEwd17d4LNt2icvk235HckhntzLsQpqGuCc4CqADguxk2R1",
  "key18": "4ZjHae8ZCom4duDbVzMVwNoc8uMq4Xo3Hq8rpvBYtbfKHeFSJfTFZgvgDqtHzprvd5bqUwx3YH7uT5km5FEYhqAr",
  "key19": "4zLnu3heuhke4Ki1ZQDinfi2FonzPneKE5CzUST1cdZpC2i53ABYx89dLirGbMbL3JTLYL2du2ihzWbJNt48JT6v",
  "key20": "4BsDk6Y4xgHYovt6E9twCHeN7QX5SPRe1ZyfDTYxzScu6TnDxnrCRfUD7CSw1RYoajnzsxG6tEEZi4yFHCdWK6Vz",
  "key21": "47rjQceRCbbe6E4gYYXahvV6zxr4oy7Wac8QKYj6eCfubXXXmmtnmDBrtx1QoMJQHKb3i7YW27G1BDUmPeKrd7kx",
  "key22": "5FByRgDMV8VAgCD8k7wvPZUzHoyLmrvq1pQKDcTwdhTwX1nFoCh98CiBxLqo9nYwF2cngBgLNtR37yZzy2JZddeo",
  "key23": "4Z4zos6KKBNHt2pxRF37RpeyTGz9FgAGUTqVD4L3WYNh7JB57iDU45Gmx6mSmKPfue8prXoUagREybCD7cSQYY7N",
  "key24": "66ojPqdqJg79iwGAhJLUYFdhsoXEBay7gHe2pcQ6EdzE6Z5dPN75qX3HGsE9YYCX42aTKH7yzFgiXNrrhCHxKV2t",
  "key25": "5bbGWLQ7rfkActfFNrsJViRpBYTZMjzNpnei5CgBuAZP9KqGMwsgCMTajT7NXv8dEkiqJjqQVdwCssf2pYrMQ68t",
  "key26": "2ZYT1bH13NW29RvLGUA1peT2fMVk7gBLRWxvFRCiDJ9oVUvNZoeDH4BDRVRkR9i4cqrZuJ5Jk3jzWdu5WqxWaRto",
  "key27": "2d91VjnJBpgLZji5rfA43oDatATcFsjydBiqf9pBu4sPfzmEKUqU9LKFDgZtNqLZpGnxidpsysXgJkTxegK1UnjP",
  "key28": "2gzNePAtWqFUhkUbqjuinGkN3nq2L5gPctkrNjKnUg6DFJNggfnQJTY5iRTdvBTUEmzDgm4q9jqA7xgpR24XSnDk",
  "key29": "sYbB1j9F3DGYgwyprMVGi6Axont48uZ67t72TL6FgfDxkR3saAfsj2cWWGrjpZwSgsxz8nWfjKMfoWbBJMbqk6M",
  "key30": "uqNMNET6VUFqvZhy59oye3aZMdwnbtoFVjBPmgmAcTtBQRwGeV6vZ4hmKUnHhyV9avuvHhNcNXnDriV6RERhWL5",
  "key31": "3ZfA7vgvyDHMhM9jBDH7reZh4A4CkwQ987e1U186UZhKxUh4kGVqU9L1FeGUwdFckBB1XbrBs4my6JVmjvULva2o",
  "key32": "Dr6ivtuXc21B7hdYH6zbnqH88TiZ5J89Afey5Wi1nbbfmFcApWMp6La4gB8KiCpNshwJT4rcoBYjhx69nGXJk8N",
  "key33": "3VFPGJDVd5F2U4jQfEs8z3MCM3VTUN9RfG2QVXgpa2TsnX26eZEikdMpVikRW3wy24WxhmjC9TkYafR2T3exRd29",
  "key34": "3p6s5nbjir88rP2EkALSDaP5Qbp1r7KWSRTWxFnqphjcEiEWrVdHvhfrYPRAL83ezACbUp6m5xu2UKjgK6RHNqK7",
  "key35": "3F4BGsh2jckPiSwKpKKU78DsvnxnSVqTHr6yxJ2r9ny2HbgWHembz6XNFA7TX7MykB8nf8Na8srxVp8v654qM5xx",
  "key36": "5RbFXog8eTJYAyJy8uy5ToCXV3sfaK75a7suWhWyeD6xiT2TcV4FUn5z3NGXZsV9EgVCictKKQfgSsiZw8ddtCYf",
  "key37": "45zf2G8UphdkDiG9KVNzcrdwbmBb5C4Gei1gvCuZiEefJkqYkBon13v7tktaSCVeXkKohCnpywyxm4qphJqmkK3h",
  "key38": "4ShLAWgHEQpr7Tbvh8y9RMivchMkXpERQmxSXQPR6aqzLPLZTtu2t1hBpWWAk4AhjY7268PesQvCejKUF146gjRB",
  "key39": "3hYx99rdjRr5QZJYQ4NE6BF6v4qjDANSPUsbm5xvToZAzeZZU5hDbv1SvWVFAj4WoBic6TgmSKcAozg38iB8RozU",
  "key40": "5MZFVsm1nre6u76Z2B1b8rmDc5FnLmPsJhwMpnYDGB4KHn6Sn1dadsEnBvamfPbWXBVYV645qAonv6WvTdfYFKG2",
  "key41": "cFur2YH169ZjAKeJaM2cC3hnKFkGPVSXjtNXvULQ3woQX9SBbdk8oo1JWLocxpy8paC7wXpA7qyESvRjR73Ryxw",
  "key42": "kNbexQwcPKL1oWqWSdQXgL8uwrCGHPrBsrQ59SLHoHHy81axNA35XBfnRCZxA5RANrznn2f2KkcRAAPSEciEEmd",
  "key43": "5GaYfjyfs5B8ecRwKrwGQ6UkiaC6odLZrze2M5bWQZBveT61mNPbyA6WJxTWDEdC8UTackhBVNUQ5AKcFKAFZBBh",
  "key44": "3TLeCaiY2dWK6DHvNvBRSNrxZrdFtVLocqFXGw9mN5AxAPJgorQXC4upcYg5aTL6g1kdB5wjudt7DuuP7NM8RMAN"
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
