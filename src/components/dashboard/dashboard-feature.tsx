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
    "4LTY4zkbv6BPJXiR5CGyQSoFzW9Nw7nNswsL1z5G2QNHRbudsSt6R6nHXFikCtjKAwTQhYShVuP1v5vwWbb31saq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sgsLRAsnX2TCRyRwEifaXgYjPde5WWnx6YiKXscXW316io119e8sxPRKmJ1qNmp1fzVLaMK9Sus1PgMFgkbCdyw",
  "key1": "3EYoemrpAiLekFkxuUbVMpVBmgE4sbQVzQ93JDGyQE8G4ofZNPTyPYGfxbzLMyGCtutDGVq8kFufywMgvqPiTEXo",
  "key2": "LsjbiD416RCaVAwTQQjpBftsfjSXjA2FzVHhecnksNQhdyzuT76xL4qYmcEpiXBBU4pmYfDYgMNRNTAFkihuHsx",
  "key3": "4c8xHLyJuY5RaHSHAUkTCiqDB9D2ivas5iCZmHBrmHCtgSppPqhdbYNeEfrmk1DSRrGXiCLjNpdnBhPksJhXyvhx",
  "key4": "2X9nf5qsBe4iEaJa98EbFvyWLW244SLGcQ1rnYz43jqvQHxtNBMXYn7SWSJHL6VbwUsSz6pPWsM7M1RNLrNC1v51",
  "key5": "3GT4vxNnLFnXbNRvWsSngVWKbXMx2Y6BS2qYMxSLhhtb6ZhvzGG4t4kc1KKQcYvPpzb4RrDgUS4CCDvz4xfAhmbo",
  "key6": "53WkPMn7jtDsx7zWtHDCkyrZjNwM7E9oEKc5tYCHHtEF6vSxzvdejrj84uJtLtxw5aKS6d3vq898xKUTLzj9BFuh",
  "key7": "2qrVo1ZeYGFTFqdzqRpsxEuysNrxNWGdobjbos634xJdN5eh374hFFxspkfNwk9Bm1Proy86dXe5AV6cj2UzWuUe",
  "key8": "3wQayc75gkEoSzh6GA2jxjgJYHZQR7d3GRqvireiheFU9w8jnQDU9SuZdP41twio1poTRY2kmx4dwZXazpJWa9Jj",
  "key9": "65k5A1m1Yhy1CM2uz7kaFi5FWdeHmodMkBdVqi2KtZnUqXzLZYwQfCL3LbK82jhQWdaqNqBep3S7HMUAuebTE44r",
  "key10": "MFP8HuZTByKqFSfAqnGFizagKSjNGj6et9PV2qPpo2Di1xcxWMdQGuC3m9hirL8GR7Fo3FEqhAMeM98uDDsjcVT",
  "key11": "45dNbkmrD6xNaC3XzZvy7RBJn3R7FkaJyargSf2DSGAs2Fbqk7jp7NEMJZBjte1kYemmuGQWAmqEHyeQSqmFVWrD",
  "key12": "3mVg7yiZoUMQDagsgEExyjgeGp4tEXM6yXPz3U6HWt92u4fxyY9bLUggKk7PRvAR6iJbSq1wbmteXYeDutzPWskT",
  "key13": "G9gDUhL28YNUi6cy8zLNm7h9AfRK6vvUsgayUd8Q9KoTkGfaPADgWg4yc1YufqmqNnk69x2pUZio7h3jskxW12b",
  "key14": "4e67m5SREKrs2DdBJoMVt1cKFsH7w4cpPC3CWrmkqrXaD8yLxhpYBaWGqC4PAzsYQkiUBqVZZxAzNEJKqqskFmcD",
  "key15": "5XcGi8J2qNnKkmADEaPXNwUxN4aqfvPHz6gsrW4rmq7EgBUDPHEGMh11dnCyXap2tHPf7VFcb4Rgx2Byt8WQCeJG",
  "key16": "3u3isSsFLgm9TuRkW68TdRHUa1U8NMG8HA4mTyLbtmhQwUKq81wX14iWqew9RUSRqNwpPHDJYpLWN8xW4kW6DpWg",
  "key17": "u5peyJvGZPySY8mCUtuMYmCtQ7wk5FePnXh5usNXLBzZfG3sc24567kzM6TzWdpdEdTRpAC82RoeUveD7BDj62V",
  "key18": "4Zi7whpr4viruHmf87WDREHCkcvqunchLDNsn95T6J5VdKzKVwwP6Zq55j8SLJTV8L7pAEq3Zt6mQyXQZu3fYifn",
  "key19": "617LDUBu3TSVHNnhHUfxzRBUU3NQD5QFeF4VNvbu61VzcXrEhXir7QrZdDG3V7QRMCXFAGVxvTfUwqdNGLbQ1XPK",
  "key20": "2K1TRVZskHdqAkcupRDtb85URZtbrqbKEBuTtC4XhX4SKvsrLapyUYu6GodGQSKoHydxb5BVaCcnUCEVwAeoMaCT",
  "key21": "54FCoW8rhi7zixhZKfutfuiyrAreL4zgws1yRy1Yt326SAdc6M1VcuMLvcV371ZCtMs6VwJVzgqiqk5tyjqmffiE",
  "key22": "5LpQTaLN8HrxbPuF8C67rFqZVvDRdCFSvpcf95chec86rfXUErYJ8nZZviWkjR2t3aP8jWN97GM2EZBvmpykk2ZA",
  "key23": "2gpKFN221axiUKaxehUaAgd3xcsJtKNuts5eh9wrmELHK2zx2FxBV5ACgoMqv28okRwAsXYQFFNc8pJXJn8J4LP4",
  "key24": "3uvpXWY4VwXCYZYwURYi8FTYPJfGHERxyb8kjKvSimJNvnwVVSA8a4s88tJqLPTAeL4bugPgk1MvKZ5keXwzqU5P",
  "key25": "5AJmSUfqCHEzfZVHfvBZBEDsQgsXfyyLnLk4qpYsVtwa8WvN2YyvEJfvecB5Rv9XU6gQnFEZPQEqsiV7Sq778w5S",
  "key26": "33pCxwpGr28dEQq3gbSu2KVEfgspBfwNHatrm1ueT7djrM2UPMLzLqkqqP5qw5XXofdatvrdPtj62VYSqWzCUgHV",
  "key27": "4FEcwMZbpxdTwYsy1ZgMd6LbeuZkosQvqauhHxNR7BihJJLxevEheKQ1FuvDK6GsPZFjyL5bGy9tpmm4UWB9hq6T",
  "key28": "66QfSBhQpofjhbnp61SCS1EadL9KeU36Qfe6M7d9JC2k2MH8yyUn3Kj1dWGJrbY4i3fSq6zGwUMaZiJAk4BpAiGQ",
  "key29": "23W7Kk9ivdJFq5kat8NkcZBP5dpTQC3SnEZWzoKgFfV2exDE8o3wd1Xp7oB61QQHJJeZarkL919FW6dAa6rNwC12",
  "key30": "3NSyMM9U9WoMtNo3XQoY6emdfes62tqWwRUEtqF1ibKX53MLbwG4qsLTLE2Zon5Y6qzFknrZiC4ibhGf9SF4VxFF",
  "key31": "3k9Cx6nEx6TpaZ1cCxb7HtddhSGF5Qe8cGD83JbGHYymvDwaCKJiUY2Uu2XGQh4s8LqjaNrvRFGiGSZgVqUPe66G",
  "key32": "XwaYRt6z4x8EknwYMnvM3Zir5akBAcztZQTEvSzecyse8aLXsimyHxr6N7AEVCTJajwW8fGhpGcs2X2x77JeSyY",
  "key33": "5NASJvkzws31LP8HxDt7KiWBu4eb6oEQDbGvoNiPy2eUjqhULHiBU2fgWsQXwzFsZ9X7RCMQ88c7Kb4dXBkJqrkh",
  "key34": "23BzuuYExmxMwtjsLZyR12bN1XSuGcnddbVBFKceWg8GKMELQqvAN6WJuXrvRQBfAaFLF2zp8TgbRLetV2azbaSq",
  "key35": "4esMj6QLXxXUbxk2axDpa2NJsA38niut1aH4KM3TvtjqLvcq6CE4jeM4PdbbFibgqE5SmrNVw2SJ1CdYx5mrdzx5",
  "key36": "4WpR3acU4MXCbZdDd2e8DTSpZkCcXiCCZupL4Fg9GyomeQBsJieGHWtxh5x8VYD6GuHCBs5FhZmJK8S6JcwpwuXt",
  "key37": "5fpP9J6xaJUMq4XgdtybrZKwmBhPZVBznwa6XS7hB2mTj4qVDPLGUseS4azK3ZLGmq9o28ixgGvy34tP346A9BNA",
  "key38": "5gcziVtZr1HpwWBVuwznxgv7yMrddhFzN9CQTxP9fDBjEV8uGmFjfieMaUsBDmGTw47RgwA9iYuZXacS4hUgBpVK",
  "key39": "5mbFtqfC88UDuv1ivVX812VNME15aJyVyFd7v1oKYrArrMoUGb5XxurnE85v5pRzLkGKcDU1icKJjVWRodQRPtJ3",
  "key40": "3EJC53JZUCd7rnqkTP71PjcxzBDcYqFK2mBFDn1hK63zc81G7yRN1b6KNDfg5o8gabMZfrp1iAS9cMgDRZsujga9",
  "key41": "4bNbRD92oDLwE9qDRtrQx77Bfgo7VKLXfCmjnPUrnfEQc9oiGjcaXd2Le5hrceKan1kPwzpz26WRnt9GNaqFgzWw",
  "key42": "4ZDjtzJkgae8X5gn4oW48nxsAdy9mUrRAzajqmPvmkxZumGGLL8kuspDuNL5oGjDP4YsvNwxwUdAh1itutq9ex1Z",
  "key43": "q4FhiUVEmRznRmeSmkqpnveaTpAJHekUR4bVtDy8YiVPaJL5gtHxDPB3raGh6qLZbKQJ5813AH3RQTJVhq3wkY5",
  "key44": "3oqZesiJiKkiBDBWNedgL8cn45nfgfXtRKXV75DRtSed42jXMc62U29CWthNYgQrTUKndJXGyVXEdrLReXnGxBwe",
  "key45": "2PDLP5D9uGGaBtRVqrEGoDhLzYCYAikT2ZWEdvJuc8z4QyMFbJ87D9dgN3MVzNNK6MPB8TLCxFgrSMQHmx2xBU6F",
  "key46": "4TfHzXvtg289U1XtF9rkMgdcqxUBRCSyrNv5dg2SE6imkfWQ7YgGqwUGxXdwqXDKoPWZ5HFpwRAe1CmoZj6sMDvU"
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
