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
    "5S7Ki5JgiU7GpqcWmK1GLde1jmKFh7AEjjmMzZxdPc7jvWuuZ5VR6aiUeZXWwwELZGt1K6cpfmTscyxs7yZATzrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pE71SJu8EZXN48o9W7wktJbsG95zgUA2i3MQqTMKBpLRi2Q4mbhUJk1HApg1wLvP4p7FcdeGC29ABDcXabx7spM",
  "key1": "2Hu2sAhTCbjShHeDNdSZXHU1zEqJ7wJh16YzPMiW5auatFW72AeK8jM2Hx7kNkY7WKBZzbXsRGSTURGGsvZw6iJ5",
  "key2": "42oE5FBvWfuHxGvCniStza3mi7CsFFf6ybBcGy7ubnYb6V4oH3wnktWVJGEXeHzdj1c9YQwebFAHcwBJ8jtZHvEH",
  "key3": "2MnBG63vvRrPgJSsf73FEbBp64GyqbPQ4upAqqaGcNA11AncRm93Hzzists6kTVjWx8QXU4UdC1Aj5n7McXYJRuY",
  "key4": "5LbKbj8h7Rud39pj5vnvKhqBSn6UVoYZw1JC11JofRv3QaPd6EVmmezeo3DH5XjRpuoR9jf19Ud48DbaQeAbrCwp",
  "key5": "4w1P3AgtYnq6sGXxyknhjptqrHhKKdSdi4J8DnnCtashLYgTNtHDTYfa4A7ysTh7RRWETX6fKGCEzSc5sH1a8aES",
  "key6": "7GQpty5hDyKDoNj5TzRcEZNC9Ge9t8FtTZLjzGrwJFT3mQb8iWXdmoJ2pyvbASv2KWUX63gasWmsiB6VYW6mNoY",
  "key7": "5xsBq7nFPahnw8sx5b9QZopdrneZMcWg7d2MYVeqacmMcJVwUHvkbkNmrC4akSqVZQE7sCUHjayxJwbCWsaAdeuD",
  "key8": "3BUSf7f1ew5Cch25tMZxVRyR34EfqHDAGBPFHzbmbsaxarPSjU9Fawuc5SVf7jsUEy7v8p6iktSLS6LdLNLyR9WX",
  "key9": "3TfRQwnYsxdtn338cWgNpeP4XRfrXPEKXz28zSsmg8aqVCTQUyu5137SviYU8mvP3ntxuW6Vgv7oPCAcVuEDEV4",
  "key10": "3qG6W25Y9dEdyLwsGUuKG78UfbsTDzJHhU3FBmREGrgSbEg5Ze65QdixKd8Z7ngqfL9uKASypN8pH2tqb8aoLyn8",
  "key11": "5BZrLxcaCwQ7WbL22eXzwBcUXa1HKgQ99kEa4GMz2MNTdPfheo1oB2f8vjkYQQkKuYTy7DbKZZ6pKUwnj6R44kNd",
  "key12": "21PT1BPk7EVBr99mqNh4JRLsD4FTv7XM7Rs56M6mXdAJTXcW39Ai5nc5DiGgnSCrAF1To2RJmRjUGEvFVTEMx5mN",
  "key13": "5P9tXdgnmo6mMtksTA2cP2kWGEZMvGB79bJQ8wyHUpeorSSr5Pn4WseUzAahwmuuM2LwNt5ABwhfwfE7Vsak4Ytk",
  "key14": "3imNcnzbFRz74Mbo3Qu5pzhBGhPQ3YNabnkzyrbeguRbZcmjsHBq289ApaWjuUqykBGMmPzW3wwe6LqmxzL1fL3s",
  "key15": "3GcAkAZfw4usxXn9zWtHEApeajhp9G8Mohvh8CKeYdocPSqRSDhgNanwi3RxQdyTHwzqDVTrBJfiSHR5nKhzmGon",
  "key16": "33GsL76vz1Ty89RP8yrs2Q3LXnoQX9xfJTYGwswFyQb62Hcf3LirdDhPxUrgNeBZJs3yQwyB69WLg8kNLvUztnYh",
  "key17": "WwrbHcDJcJ2Vw9ro15L29qykEXsWrhSmZuEPPmmtYBXKUzF4ECXa5Zt2yh7eVWyN1dhL4EyqiWBDZMxHxzjzvsr",
  "key18": "2SDVaRSu9aM9BvmfRpLnB65cx3s6vcMt6Lb4JzykrbRSmP9qvS3uF84xNkGHMf5URMwtB8S3K61paBzVUrnjD5uB",
  "key19": "5wJ9L2scUATcmgVXf26EA4VE1XPynQeu6WGGQkRPp2V1NLQv8yokEPyWQYrU3Pp6jsrNqmxDyfMMg9V92wrRcLdu",
  "key20": "4M5XxA5tN85xDHMtWN3MjRrCuzz7JUAky4EHaeT5EjQ6UwXUt3fY1TtdiymfRYuYWM1K4autTLU4f5K8RGYZNu6E",
  "key21": "ypgCbWqchw9ZpNhD3Q2tnxH3tzq3ueWPeHshCARkc422vuhSQTqUCGQQFgDpbHWMwqDzgKr1RW1RPRskkWyBzxW",
  "key22": "Cmer5pwdYVE6dLU52TvSyGy8ZC6V9L9Dmo3Ybf2QChETk5cutQdyQP5PyZRXKfGeZPJqdY85D9FicW7neR2y7JR",
  "key23": "2iUmPB2YpAwyA5Dbe6XdS22mW1WecmJ1MwB6qHKDkSY9B67tS8XEhLCYqJxB2419pV27LNzfqjsT8jbKnpsp16v7",
  "key24": "4CNAJPuADUXtVHkS39EBy8VSWfg1pWYSNePP65RvteKnbRDY7BDTetwkgt4qysv9QBUUJWqcSs5RCuuiyFrZhaZd",
  "key25": "5douxSUnPCBrxrhh3rmYaVP5uaxs1f1YWXBHRMsSpA2qTj4KvjjpTKqi8v1nbmRagoETbZmWsQ8Zd7b9kprSYRFh",
  "key26": "4DAryfeh3NMXCqmYbJ8i1PEzF7R5DUk3HSSnKJqhPaWxofcYmnbfLp79Jrm98GcbvjkMW2Xd4fPF8vJMtyiYG3qK",
  "key27": "26vfzY88MiyfXxZohEiDhFWnoDuu4Zbe91LxjP1cpVseaGNuSopW4xmratqib7EozZBJvr1Qmk9kvcuVk7pisBEW",
  "key28": "3npFy8joUxQsToFxoHBgPMB7eK9kWiG2LVup6PXv2bNuNoFxWrz7GHeEhoUfaRnrpgQj7yrBMYuJxJHLyxZxSRKa",
  "key29": "3wZhhLm4FRsW9BAkP3J5gNU4LrHiLQ4KhRRy6qzoPdMdpimMzcMD29wrvD52qnjvJtqHqd3YWWpj5gb5Pt3sg5XK",
  "key30": "2Jwa7gYYKRabNT33EayMbYxXkk73TZCFCC6C151xQrPZsgkaP8YM8GJ4qtUxg6UGCerFx6wCPncUTAhk21cqPc8p",
  "key31": "286tj88oB3yMSgzjUeJJhZvydm46r5WgzyT9hnxB1JSU5QJLSe36WEEK4kdhGYqoikUeuCfaEWLdaDFoLK56aUp3",
  "key32": "4B9VAeUyoZgFGXcixW4kaAvYn3irLug8NseYLD2YinKuF3vS8nKBv1dTvmmK5VG3H3STPyZt6qAC72bRH3hNCjfs",
  "key33": "64cMKQYuZqCZRkQuZhKrTun8abbYSsjzYYGbg7WAdPo7N5dfiGSvRwsFL5KyvjW1HxbbPEGXuaQnQ3QEN27VnTwT",
  "key34": "4hiiGWL3j4sRr9Q7tVxX5EekWa8tLuAZ71KArc9NtMhZBjzBi3rbAjMGaYovzepWABSeKeCdArG8USdfNnCBuDbB",
  "key35": "x7WuDYpc3oRVakyDCmm2gu6Nz8GPUSRBkwEm1mJt1U5EJ63x93c789tdwVmk37jBGyKLX5R7NrZnYXXGF2XuSbX",
  "key36": "3EEy1GgbLhTriUvestcBAC5Z5Wd7cw1kaXgFYQLMeZjiYATSk7tQ9LxwgqUpSuWYRf7hAKEtP3MwNX62V5GAxmh4",
  "key37": "3yuAr54z2zcKYyqehXKozTCjofB7Z1mKXvh5RKYkM7y1AU8ZQJWtmg65mZYXnCPzxRvwcqj5mHTb6pRRVf54NnXN",
  "key38": "wy5LtrrXgUHinfZFt9Xb2XAaq3Pr7yMKoWzmWLzYfCPeNZ8WB7TJuohhtvJMyApcSPZp7xrGyhYMDmPaT2DCLzm",
  "key39": "22Lm9DhGRngrfcfozqsQKvFoSnuAswSmG5ryX2KH21cXaxEFFaGy15agJqytZxedd7ztVNPFBKPT1eTEBSPaKQtz",
  "key40": "2e31d5FZakeNpRcTNoN1vkXGTtpKbpuEbzQ91X5pHRTVBbaLp85caecbU5MfRBxQtYAqPkPQK7CS8rUVd3mXQdDJ",
  "key41": "4xC4abrTry2jBpnWEEtJVxdpVa9uv4jd2PANL7mpFw7j7NETbt1rRzW85JMEGgPqKnsLgRKWRynKb7J8BJspB1kR",
  "key42": "5CWjT9cLfVrC2NwtjpsQTsFeMbiHViyHG4igxgcFhUVKpgWc3TB6pfgUVcAMXxkkSujjk9yrnXexWYcQLkm51hgS",
  "key43": "5dte5Fh2BgNiADGGCxwCNa64KvrBAGcgZqafeBYBxPE9b85woetnqTVRdSsNQww4zCusWYhzwNMzUo8kpaZNGC6a",
  "key44": "4LSytTBvbLdiWRj3DooNNUaPRSGD8W68Q9xbxbLhCaQ1ec69a7Xp4jxmLUiebjRVDgeUv5Qm1EGVzjb6DkkZL2Sn"
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
