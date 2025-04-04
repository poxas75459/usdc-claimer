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
    "3m5wtpcrdijXmrKck2w4nMXsBooXU6mMtbC77AM84eP7gm89tpA6rgKoYkXiMxxzDztWCSRmn41dWRoYTkLXgg4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xUq2i9h73SPYXYX5kHU3haJHzVLs796kJ4ejJqFkXuCRGfsKzpg43v3W9QahyinggmzT5PUUqf3C9c7PNP3QSQk",
  "key1": "Ahj3srB6ZiYpr7og85SRMtGRvqQLB57KMYUDeC7hxpG2PmsQPdXHd7B67LXFTPBgjGrtCYLtPs5sMwB6n5ciEgV",
  "key2": "5cf5JjX5v5kfxZ5UJExkUgVDe7xGX6aH4nAh5yZu75pN9TYHBBE76HVsiZCUPNUrLHy2EHWSEzcKTaRDiRKwe4mJ",
  "key3": "3Sx7S9P92PrVNknwCHypmxQH5AuHQUKCp21Ntt5dMVybwRYmzDxNWfMe6dkjMMrbM5VFieJjfVRH1XeThpPNLn9P",
  "key4": "pBxr9qompLBQSFNVg3Ywfa2oZCfALPnTaZSNuSGvVYGPx2PBz4J9Bvd6fw2cYmLTvssA3EqriDACjiVZu4Rwirp",
  "key5": "2W2VvkiUSGMG2oRCUb4iTxF8FZeyPPJc8qNMyXnWMP6g6apXPm5XDumAfyEg5Tty2cNGWaSqnoJ5iBYCW74JTuPA",
  "key6": "3qLBPzaZSQU6ejUxmJrHtZESWLMt8pN7JeYt9HUmvE5FBQZkmCJHVpMxvD5m2SSvP4hkBct5JBAFSb8cAEr8M33E",
  "key7": "2jPRHCRcyvSVSmLPV2fewHubmHV6quSmbhmNeGFbocGsv4xUDNsACapY7UsYnBYZEDvyDXKT3aXnns9AciTQ6nD8",
  "key8": "2V6GNMRHBV3fQ2xqQdyEquhxbRViWMmH3FSQzKAhdR9jgywG2SPx8TwWopKDXRzDypMZM82LmFTywtW94hKDgiZJ",
  "key9": "2qJhBGadmNEuX6NojF1tuW2hC9wMuYrnpTeXPV27JvB55Toqs6RHy8Vza7PjoMTbgZv4SDiZzJZ33EB9EZykB6QG",
  "key10": "YLVSbr7nQV2WNeY4SQRL4rwQoaFu9VsMfnBfs6Q1cU6QU39aHnRVRvDdJKqu3mVgTDvHWoZ5YXfkbFf1ehCugPQ",
  "key11": "1fsagkchARun75GmXputAcMt6cQhKjV9pVQ7PZUFvEQABnBDP6LND4ZJA9qF6pDVxAnaF6CnYJcBFx8aUjXyHTi",
  "key12": "5NZcNMkotgEQRHdHXwyrcodmLMs66iuQBt4xgk6ED5CZq3gomK8MmgjAMxzGR4kmGWPBTnQZurM5bfGJnbjjdhSA",
  "key13": "5KCCVaxD2SaR4UtxNH5eeyWYm7CwoqkxQzmphZ6831arHMh96GXnt36NXsoz31k4U68HwZgX2EB5AKLQ5Y9ihySQ",
  "key14": "3GrQWQfg4KF35wsBiiq4abrRXz4p7WVXt7cEZqmNSzSVJPjg5s7dS2BunAcuQRdRRfPged3uZEZc4X2CV8XTYycG",
  "key15": "5VzxDHzvo26ndmX4JiMSN3rumHmXLQEj9GQpV91mLKumiw3TLrDRn3phC6Z5dFQrvGy6TMJE8gTHW217CAhKYfK9",
  "key16": "3vAUSgn3K9aj2w9dKmyvV9J4ZmBcqmUKDLXivPS2y6pNhUK8eV7fWc8WSPLQ6oUrXy6n8GARfUBosu1w5uRuu7LW",
  "key17": "5NUoTXyoKaNRjNHHoXLY2r8pjGKXqiKcnL7ZFVoHCmuVkJjHrFakYusNd1mgWRYzHr49KpmpZhoiLqfdYhkMPB7u",
  "key18": "KfoQpUsGbFjMWPQEWR92FUwLbshaePrDnGJoCTLx7uTcp3CV1LDvTy3Dv8MzAHM8oDYFdo8NXh8iLhaW58LLSmw",
  "key19": "4MBdN1idQGKG7W9M72yH2HhkwAngBJag6QBiGuzVxsv7q9X8yTTiXbLEprxiiYca1BcukrUg9xPUjkF4Zz3aQFQp",
  "key20": "2bUZbVnfSTwvZve8du7EtooDbMiRWThJ4JFK7qTDaYymx8NFwL2yrC1pftGcrdpPWZVzDoPRULrY5cM6yqupJicV",
  "key21": "Rjks6snnX2cqrEA3dBELENhC8zc14qFYEMoeEHrNfXRbp2LEMSngSZ8Jk9NkLGxXUeMcCKanJxA11b3cnnbtRRK",
  "key22": "5eC4WxXhemACGnxMq46amCNQL2pLuqybuzEn474x6pgt1eJUwhAt2YgGhpgdDRBQXeZy5Bgxsjh1kyxLscJaQHUQ",
  "key23": "WUk7DVikjjWFCbDnpicNr3ocPoC18dcvpJ58t3yxhJCUoiih3CpMTqey8mWTExF8HDK3DWG8k4zWTWTRDmNjPVY",
  "key24": "52iMRNciCnt8kE6tX499E4RcMdcPYcR54i8STLmcd3WRZzpCi7SVKv65su2pybYLR2NbjE7aP3itrDm7r343K1cL",
  "key25": "4EUmQjM4a8Kpv4zFzDoMFvJYtTrq6qEuA7fMUvirr6BQ8PVAJzBF92eHSpuDBL2SHJnXcfL6xxJvvYsp1QPgJAcP",
  "key26": "baLEyTh5AgtZg5vov9tYs8ZZjixCMYjV5W48YsMEz2WWV2crdSqkYsmQTwYgmaGoxRsXvv8nG3EQNe9d838MYEc",
  "key27": "n5nd8dH2dbbsFxGq4vfyjNr4Wy4NuV6emgvY22H4CM1QKab3JyWY3gzyhMY3RnkJ45NBNBw8e3uz8itEFdE9rKj",
  "key28": "534nbdJYvEDV3Wecmqc9xx9xyiMPofe2cdyLwj6A2fPtqAmSu93zFeQpqF1K4bvq35vRrd7wTDLEydkGWh2k1Wxi",
  "key29": "2bmhj9KJtZVFY46ZTneaDYWKHfiFExdiE7ZHmgYqaLY8CtUcQTepGeLaE7EyzcjLQx7H6ZS1JkJTvzWnBaXiKifo",
  "key30": "46Q91y97mgLrMheQpmxSYEHvmHWmu7WjwiMVwVyzxgXmgpuaJMbkJsUtTtezQghpmy8XA7MST8RGqWZtVEU9LrZK",
  "key31": "5iGxJgkxGLqGLYiHFDA1HRJqVuHynnV728yFfKQZkMiUgKedsisW1FdkL5kukyxLqpd3yjb8zus4ARfUsdSrm1ub",
  "key32": "2Y3x4MGsGwf55xwJaXCUcYVvvBts1BzaE4Q8Y4Fe5USDUitbc6ciJQRAetMdcfNUsEBvYzevNLTtkB7dXp4YnBxU",
  "key33": "CTCbNhFN3aqmGTmhQgB8iQASVm9pq5yiD5hhXWMWmL735P39fuompZzY3C63uXZuRa4tWVyvnA4utkTD8orAmNW",
  "key34": "3jvwxV55X7mWSUQJX9jWTvXJGNJLsaD4DSks8aYMCuT5Wf8WtUDqP7Btt4tQuhAtAj3VFviNQXBSZX8WQHmP6wAC",
  "key35": "GMzk9mSNcGDApjSpnnjDmYxsa9KPcRuvbmnjQzdHmPDjNxSDMXtiqNoxFMJuReM67fNTH7z8bhuTNfCUvx6Eiub",
  "key36": "4bh1TvqMELwrcSsHJa3VpbgvC3dpiLcLpcws5cYmhaRzVUGVynrK8vthkCwos1KUaSfD8SwYLTXzjs679ToBe7US",
  "key37": "5K2j67AZz2CLrV5PN8cuiqDuPoCqBYodLvdHdw78fhBahSb8ZEMMBuiMYiYn9BWvLcrtDjAtKbis6p4rUiT2b2i1",
  "key38": "2gQtjrsPbj1ajEbgUPHDWQ7wAGikN8rmaiJTDsVq3NYhhRvJnSoPvnCpynSTXSmVW9B22PPNYFEjVeNSPZJn9XjD",
  "key39": "2iEYajZAiDKUZcVCGPn4MTJkd6SrRocANTRe6Jkcfcx2nsS3KvWd1pbTtdQ7c3RDHH6gBHGRdRVgfZZhPaGMAURz",
  "key40": "4GtzEwQwW3hF74wdwe2Zqv5gBST2rdsjg3YnJwjXDtdLZ7TGSbdScUntDAfbMpnQHaXLeF5rYKYQsrFmgFDtrSRi",
  "key41": "2JLeXtXkv1dkM4X221hvqgTHs7MyT4xmASdFZ8SsLpzffPh5MuG1aAxGgU2pvtxNufsWaRoywFJWhnDqUQE6XNUX",
  "key42": "5LUSV4kibMr9yo8oE8ZV1ntKPEqwYW2oPo7KfLqYAnEBxMTkRX743eGnTzgx8ScBL8dAiPp2rqWedhRiscesxmBE",
  "key43": "3B2x5nUBbhQvHpyuwn3SznTVSKc592aiYRrdxQvqQptVF3HPBzfdmkcguRYAQyV99KDJZqQeaEwLbH4obsCKVQnL",
  "key44": "24G5f5Zg1izfxL67ZibxT75hUbtuCvcUnTuDyCAsxLZpy85f3Qts35ipSJPDzA8gAsoYfDok9SQVhbpRM2fnYSrv",
  "key45": "67cZH2zXqzvbAt9Q7r5cy9sKgaNQwZvkJFYoz16a4hmPxGMxa7C8m414xnkYJRaahFchvp5NhsThsf1g35Ln1tUW"
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
