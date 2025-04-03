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
    "9YaQdHJZ4EMTLHj98sEwVAf2iRDieNRBnSVwySRDKGZ8ATThYGCEGkNH5aKvHPxke8wP9763iyRVWhXXLzBnhNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSy6uLcYX2jtw22PCEsdqjFrUq4YKE7mjfn2RmEDYhqKj58TKpqXxdrbvgeMmxVUyLZv7WapSVVygrVU8KziC6n",
  "key1": "p1dom4Q65YE7VeqAoaR2f4sB3hxnM6tXc4s2fYr8xPRewa65JwTBBny16vDRjvnhNYGb7Zic79iCbS4UJ92GvYm",
  "key2": "557TpaNbg3ouqvLFvRpUUwZQH7ipaTXfM8k3UjVdNo7XnXdnWCa2xYSnV5g2vMYyFfAip6B46RtjUBYvnGrc6SLo",
  "key3": "3g1wUuEjp1arXRf2KYuT9yDBfqrL45rXMgBymAagoZfGzHsfCnqV8DDic4EUx7q3dzNRunfSWRcGyHyLEw4WQMiV",
  "key4": "2BqHoijs8ppU3gGcgySy3Bo9rW9eHsVJuYpTz2PEG4nEiKgUFaSWabJH3h1484f44onH8cyLVxSwKQdpKmH9AV2d",
  "key5": "4s373rkJHYHk6Sf4p27Akk2ybtJiQYuvcwyFDKaqzMybJMiGUm3WM6UfobkQ3wyffPPKHvf9aDufq8HYZYEUCeyL",
  "key6": "4APtyxvjNXb9huN1cvvDZz8ALjet3VkkfoNVxUNRdFpYszyqikGULmTYRzde9MioEvVLfig6dn6YJQ4Bu61SSxR4",
  "key7": "4W51qxPz97pDrabdDcwVqtqXzXK6qDYU6RP3tGuZ264g7TVX4Hej7HVAJ73oCbtyrNkscCnuW4CwYxzhYMdmGHyB",
  "key8": "PqbQ9bRDbYVEx3KRXbz9fWXCCRPaCy73yWt7f1zHKJLh7mGhWBeeCoHV6Du1S66zc89JYzWYXCRUXGMYbSeGicq",
  "key9": "5LXcoXzFPQtgcXsCEjpYw26LVnvHGohR4Sqbj1i1xZdm4p2D5rS81CSmZtn4zMFsLvcBE5SLGgveqjCyJv7Zappj",
  "key10": "3SHKehttAm1Q5ny4t3fmJd2NACPCFxumQNGh5geevXHefwyQvNTxsGRbVxWQFNWZtUAuNWRjqW4SKywYAP2QCZ15",
  "key11": "mRTncUd8k8j1f3ZYM4Bvjnmo6FxzA7GJE27iQ1wh2PBoZejd6LeTqYddWpXdhdxxSEDTaffuBs9Ruw8xwjAHMkH",
  "key12": "2pY3RbNRxXcMnKYQuK5zb32oB5hiFYbvfmnpm4Zna8pBsmB3iNbDQh3fQKziqPo4ACM9nBdAxRQDKKaHwB4ctGPh",
  "key13": "5tJLmxwHME4HnCpA86vGWxg3bEEtyvqrHAaXBz3RhBbcjtH2nmJyTD3LNvZoJnp5Fq87Z8oEt8pGR829M3EsRuWd",
  "key14": "29GiM4mvXUAABUb876UCB62BVeyisfrLzjS2VrTFRVUvxnvZucN57BapuuNepQzukL8Z48cCA4LHr9H5SkaMtG1z",
  "key15": "3Q8XnZgJrFaBQfGWZk92NMPffnngwgDa6cb7LMFsfXdkC2vRtKRMMkQ6EXpNtJXSigUAeMCbjNjmuX8pDNneLSbE",
  "key16": "UrJox836opUMeUCUV1qtdwwGsF8MEaCEpQzC4e4yNBbEVhM5RZViREmV5z69H5VPSEMoiV9sM2es3FdbgVGTwZj",
  "key17": "3X6veMGeKZrvxsmkoKLaDsoJ3yq5CyrNARXDyA9h2PJRYve2UnwQ7pFmfWGBo85LEZBfu5mQz3yd5kuPgmkSYLow",
  "key18": "3Kt8aMHdRKhEwwHtZByci9UQ23wDsnioUv9dQcxM4xNLAjALz6VsoypsinaEXq3WotZoUCgXyxUeSbg2p4Uarsdm",
  "key19": "5LCyvdQ5yeNMqaZL7jyEFg7MKdaVcBQTR7raayRgmGPpyMJLcvEghPBnBaMvYpmu1qfsnqBUksoaMvScGXSkNtbe",
  "key20": "5BJpDCDd1KG7CozoC9q9Y5CyibgcYjuvTyrfyKy1F1Ei3vHaS1Hvbctjw4Jh1yGeytBh5R8vyLQ2HoHidwmWhvUF",
  "key21": "2LppgT7h8rYwNpuviJJCjh52kvkJH2LazmqwFhiZ6FVpcoxZQYg1B6SwrKsm7GhQzwy2MVQqdeEQNWY6ei2voZhM",
  "key22": "2b8rTGhycim9T5Y7GrwDcvMpWJHApyfHqgMTN9M7rtik41rdCnjJ5G8gquxAbSyo5Yb5Ujz35meWg6jxAEa7DH5D",
  "key23": "5nHyvCqzszKPF1KyWn4QN9Evk8d9eQC9BaPjjeiADf3tnx9Ah6w9tdJcCeMMmvwo4Tb3bgmyRdSa1jK3CTgK11xt",
  "key24": "VKXrSeCbg3yAsuMbKWLUCNqSovF6pVAr1k1AtjXhNL29Cztk1UqiuUh6fRF6jLLQj9fs1DDUQ3xAkevhPiZeyNX",
  "key25": "5NLdfHWvayDsK3yREsmr6Gag4WHh7U88HXnrYfNWYpqdUku1FuwvW1RzTtEVFoyVw5pL9QSgTR44NuHRYh1vuXCJ",
  "key26": "2E9FJYrsZLNb8TYMuGmEkbMHsHzwYvv3fCJTczrh7a7i78Vy8uxBcmNjxsDvySwgMigibcBBz7p9rNGgjWBSLxvj",
  "key27": "2XMBxa1whDvqpvpCSrEDCfNvD6sfNq41zTP6trpiCQDiJaUqyEMbq6MNohBFUwG8WwmNywEkrjHaAw1t9oFCVmCG",
  "key28": "4jBohtPCGfD1cz7HrjRoBDL6kmMpA8W7JivTxy6Pv4cX2BicFmJhMRcRs8tu1HeycgpY9aYUec66Ee5PHya7roLG",
  "key29": "57WJrGH9usBsweRhsuKdTWPmj6bGDGt83PNiUy1unkt2629j3wTD2bfQ37qS7Uz2qTps4tg6NUQx1Jjgm511e94Y",
  "key30": "49rQbgnhq9qdZzKqgaPPaqfd4gCaMBPRsLk3WBN4WxEF6YREgF5qb66dZswALRp1YCCmSBM5SagBs5Ew22wiZKzA",
  "key31": "3EHwaHESYM3uQhTF46TawhZceAkwp6wSuASKW7iNcN6JYAsTy3VMWXs5o7whfrZNpFWNvdH7QeriFs91BXFyqtxj",
  "key32": "VN1JhV4p7mV758WpFE5qvmENUwpyeKjb7LonfUX6BUcfTato6JtSMbKR9zQCK2LrWtUaE8GzG8adaBdzN8Jz6UJ",
  "key33": "2PakATAN9dZoJoCHm6N4G51oAATLH4355z8k9JQQpFkxVJsJs7WZ4oUTsvnQGKFJpi2ssbZ1dPwbDs9iiHqedRSq",
  "key34": "59kWNAwQ5cCdL6ZGpncG1k92YSWRmoKndz4iM84EHTEmrbnyK3ozVWWpRCG7q5MyYP9dqQU4mAhGQ8Tk9LNf7HVJ",
  "key35": "2qW1o7wao7uDm9v8FWkj9gTqor1UpNRJRyuHiwUKddab2KCFZHPwb6ERAGdJTZDSqcobK2h8wyTss2yqXawYk7FQ",
  "key36": "2xvYxyysQXG8LwufXteav4BgiurDu9tRj5mZkdwiPgJzhS3oYR2y1qdk2uymeVTAzAENH3qMG4bwtiWaKL69iJu4",
  "key37": "F6pzSzPuNcbLtGTafksXdc3Jrwb6rawdia37kMZr5hWTcfVTjsMpiWjwUJQ3WoY7jH3JUB8SYWhdML32ZzZMb4G",
  "key38": "2VJg2YoE1ZVkfX7GDLHFvvM2XdMRKVS5uQ1HSWzzFMZbR7FWF9WDhqEKanvTyfqCGyB1xVcVJ4JiHVWB6n9UJLkL",
  "key39": "4fSnpAmMQTCA2xz5R9Xk48ZexBmtVh8iDgHAoanYo5fKWCD1pfK33cYdo9rH8d7BjrG45gwFzVMybMPYBAUYuxYv",
  "key40": "4ga62rpBLpcQPoDJ4KjWfhzSa2btL7qq7RiLFR1KbVYJECBFUDbrqNq82o63NCi5YERyhCpzLN81owB4ShGNifL1",
  "key41": "v2Lj6DG8rBk7QeMzrkqxb3fuvEWUjt1WvN5eXfenS125352JGKWgK56vwfcA7Zq4Gcx7fn8zG2gPzYLma4LnoDz",
  "key42": "3AKqHvoudpp3F7bNrDPdFKYjc4N8W57uV1YzyCE18qk27i3qgDPDG3ZVXLDRYRxeQp1nLE2TpCSe6mwRo993o56E",
  "key43": "4rvuodaUdaCTD7p86U8FyB9YJRYAsS5MYkMKeyU6LRkDZh2hLCwyrD4rd6cF3rX5Z7K8t1hBmhbBW92WYVG5nup",
  "key44": "3zHjSkbfvUpY8U59HabodHeKWAgemLw4jE8yA6MPNs8JhomfCy7uu7vF2hbkQWGkFS228VkPg7nBBmWR836A6VLG",
  "key45": "4VoGgxFFdWHym1ZC1YWjgB8NGjxQov7Jgyotot4saX2VX8cMbyGxuG7LHYfpMGEHoNoJ9xhjBDTKXtMuHL5Lf6qi"
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
