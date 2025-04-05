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
    "576yceS83zLPBk6G6HynZ2mF4LFVCdnQG3CzFremqSejrShkGmTeMv4cLtCWbRHx8DPM1sGQzz42Zdd1n3wUZrCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eohELzrkoGdUgZMLAFo4Nnz8JTyzxoZTRBU9HsYP2CJ6t4qnLPT9GnfBCyrPpsiWed7RJgBgDsuUqcPt5okM6im",
  "key1": "tZLFfbz2mUoeXyncWb3mm156Lgct2SBPz2r11Roqks8Vp35uEhVgKeVTWuyLZ9PG9JaBE3fCNJTKFVPhk96bZVd",
  "key2": "3ePox3NFL3JCPQSfEjbZ1ERCbHk7yRNXWb73g84SvSCjmsCtGwTXZPBPoxvJRpjgpguA5cthrvg34Bb9HAaJso22",
  "key3": "2ibfUoHzwRpD6VdsbefSz9UMQDDfYqnLu8gi2pHrm948BFp5h6W9BdKzRcs1y1hSGdLNthhELU9UfzjWE461D74v",
  "key4": "3LEVUUduiJzWzM9WQEGbdK3ASmJTWbKTkALyK14VEhoaV4yxQojmv9gVGrDNAS6dVHFjjta4EHBA1YnmB9BVWX6t",
  "key5": "2gS9ry98CyADjL3oHUaJLzi5L6S7Co1aDwwc2XAgukQwCzbczgEp8apHaFKZGVnRqP6bC5pMurwpamsTZ3tjZtTa",
  "key6": "2xqqAQGSzYZi9x6YeZX3YtSH86qHoRZ61q1xP9oz5pwPjT7dmCNTnMwzMZQPyKuz9JkSvS76JNt6BMayB5wpoBd9",
  "key7": "XFmRkxTz1phMEGeKdebpezAnpNVYbRAbeUxnR2CJuzukS5JqYG6mpKFd7kvYRrKP1dnKBwJez8jptasNGhtqaw6",
  "key8": "5pNggpdmLJSBbT8dajC42uL2NxNpP5EPVdmLgU4SERjYWa2kNaxWi3BxQfU5tFDFUqYCHesxmVS1mmdypJQ2ad4h",
  "key9": "ReebhCkndHU2aSv5iTcEARz2wNbDjAxYPZaUveoMhjnAsKWz7fJwaAVctuvjjbqtMTssTd2uKx737beKWsi56gx",
  "key10": "RUUPFg9G83vYebr4bktHLGuTxuQ63TyHe3gmNX14sW2fQE43NKr1xHtFM5dqrBswJj76LQVDrSTLoeQqzXSpvtg",
  "key11": "3nB9WCAkN5CEvHwjvbvnPT48jVjfHftvSGPZJHviFq8fjBdM6ak4zL3r3yA16u5btkgoUMtN2bqSpmB9h3BvKqhz",
  "key12": "5Me2DbfEb5SzCnfRxNKphtcC9Qd8bi3WRSijLp8ia6GbEPA5F5XepQWUGz16dz1xgsZKCPmn1YYcpCwfS3GXHene",
  "key13": "5iAxy41c45TEgp1GpKaCb6Gr7NLnpmJJeN4naZr1Y4nrzBoawyWTnDGUtz6SDZn7UopFYAbmj3KfncUcz86jNets",
  "key14": "2JFxkLiSHCrtekuFugH2GoEFCAApRMc9hzJJEZnJz7mhuZS8NG8Cza8yYfmPPHSMBTBfc6gUvTh8HgMnhRfGPwSG",
  "key15": "3ACkNH3WMbG85DrYcwEF7Zh6THHVcrQcvzCasUjevRaMZgP9SyRYnhPv5eLHBPTsgTnq2nCiBURZc3ZnPmC2j72X",
  "key16": "3YPHKsGN9nFeQBG7H3P5EM36rnVXvd6CuwwLx3ALkd84EXoRRymAYRBfsuaSSxW872PpXGW8fxViHPve9jYSSrss",
  "key17": "2XjyB6Xq75hhFdPmH1WNCo9VPhJD1EChyrMQKc6Q727X4W7gikVKfjLVUw6dyCYtoHMVR9f8i5hf7YYkr9f2g52R",
  "key18": "2fUsRMptuDBfvE987FiKM1qsz6g6VLnCt52upTsDc1Xbw2n3dvQbNqDyaeoTAUvk9KT1zKLSmgXEhzvWQ4c5PziY",
  "key19": "5MPKXkxhJG9AbXmVFEnkMb6N6CAgqZyzLuEampEE5bJYsK5itQnf4rDp1vs7na7ddYg6VEa3EyjnDuBJYGntXPmh",
  "key20": "4uGDBQanTqUL8GpR8SEbhWeAW4R72GXthNM26Fb1owsiUVfZjDt7ihjf9RBGFs2qzKegJK39Cpa7rpt3iCznRobj",
  "key21": "2n6ZYfU2ASqKc8xgtGdRqfcy7BFDWHNm25MGx4pS1vPzzxA5Np8je6CkvQAsGd2iA4MeFiHA2W4v4i5c9p5bGtSx",
  "key22": "2PpfH28aeSeLnGwdDzJQyek6nSgfzwi9TvHbJhFER3e5ycdjBzVY1ZXdjPioA9kW4t1E6JWytcSx8gpdQvsPvZzi",
  "key23": "415iQvckqd7cTuBNVDrEMg2G6EomZm5CQWQ1pnNvNYNb2d3paRLekEB8LJomBeiEyX4a1KSRKQGP7kNaZKYWgvjA",
  "key24": "43V6G51KsASvXAYYnS3UzbMY5CqBrr6GZ4pYVNwdXkgU9ruEQv1sdUUgaYwzoPuG9c5fWcEbTDdhg1PtrEkZFApe",
  "key25": "2VEDXjh4n9xgp5QXD5LwS8W7LYunZVYGrDhQJsVaPa3qqHCN1xHdZfW1vzuzVfPL4hccx4VAU1j64gdtGBpzwPbg",
  "key26": "2oKWR4tLwfwerKFb27jfddvekcaUNwpCgRqr9bPg4k6JJc9jP5Yk2FTnTQiX1fWJCzRKg7DXueQ5i3pd6dcoPtdE",
  "key27": "2YqtNxD1tBqWAwJq5qcXhv64LPt7vPj28D81QmKEZmBQQG2x5owLSVbmQ5auWBNgxT2zpPb8Z8JikPWSVUrvMZjk",
  "key28": "5W5MrVk5EqQHETaJrRWhgjW6kox7XBGrCUPeGg3sJpXCRjFJoE6us3bcPgTjoxJ42DhkRFqvmtVGhciNvwWvTJML",
  "key29": "2yPJSYygdMH86mDkd5RVESfCqCAAnKgZi367rnr2Kbp66BMaV9TvfrxJqETUkXcdtnYjDWi9Qu94bhFPkgFiPfbn",
  "key30": "3qkS8sDV9wLgJjc17rb61oL7G4rzSZiYBomZ6yx7ab1Sn9fbwnTGp21YB9pV7LMXXaaCiVmCpT3M9mCKnp89Szhn",
  "key31": "wHL6dd2j3Vq2YejdZ8VgFmg4JeA6ymbZ7FvB6JH4Fb7Yjrnsyyx3xSHjwJDu2BdBZCS2kxknhaeckBBzHgJMmn1",
  "key32": "49VY34xSS1ZfBgXqwmvRLV1kbu9Bot4eXmVh6k2iBry2U6QGXMfv5C1ZsAqRQToG4CFyn2YpDtmBjUrqj7XnB1Yj",
  "key33": "4W1sGXQYiCVYRBbVnpaRseJG92NAnyu7sFxoc2VT8jt7nfa3MqorPCohdwtCVmzvNaacQ9McyPyvZMrW4uecvUMV",
  "key34": "26M9hUsnsvPZgyaD5BSaCDuv2yQ6hsijC1d926xg6RbvEtGaZYNJtmHuugCLyGi9StEGTRmoiFf3yJhZtpeKNerQ",
  "key35": "38JyLoKv3Ndx49EhjGJKShtW65sQwP7H7uDdB9yJJfRiHbaqmGWYvabUFAAvGGHDpHTEN474dfHrdqzbaoxFSUgc",
  "key36": "2PRu7zNu2RgAwYJKTXh1GU6S7QZ75T2yXVsV2mAwYcyyvRjZxpKqzKNAduMSi2MWGtppkoMFkDanoSbwDeAr9Nxn",
  "key37": "VnnJjzSg72MkfwW4FPTx9dzKo2zENLJKdhwvJvurwD2VcyW91DZwCBZSK1kFMfmiZDa71uPK54hxBpRWaJz5HmD",
  "key38": "3CA23JXrzr5iouomaTwKrHzwZL1YCdo4DeovxNvMAECasxZuPSJ5t4Br6QKzeXVoxnfZhLscj9ZzUUdCnwnXtqom",
  "key39": "2TDy5sjaHXRNL4SYUh2AheX1guXAzyqqHoJbvhY8CChv5eymTbWxUq58S92nHsCsfJNzfgZC1Kf4oPQ7GSPT917Q",
  "key40": "24wc8Q1bMwsMT8TB13j9gJ2MG7jC9iJkiDZwQyU7A3RCc3SEr3WDagFLbxzaaAkU6QRgsLFsrdXkVcnTHdBoT7Kb",
  "key41": "2dYyB6bgr5JrT9JTeduM2gqF7kS9nvUwuwn45xDYhH2oLgkc389bzFW9Xzc8T7zaDT8nrQwVRbuPfc6bnEpGcB3m",
  "key42": "3FDyC4GENpvY47XUJ17YcLqCgGFrUeQhg5Xyy69Z69iTbLp1jPwYYq1Zpp6p2W7w4sWsEUfTcgefVVM42eNgYQoW",
  "key43": "4P5LZ467dDjZbpbdixg8SqmYAA2LiNrrZqSLkHVd62G2g4Uzb5ZfZ1ZB7cWukKz1hEAfb25MZrMpDu3RskwrQCmU"
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
