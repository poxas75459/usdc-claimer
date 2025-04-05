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
    "4vEPbroDWeob27Zn412Hdb4sNoiXnBTB4kJw8x1BjwZhhcsHUAVNXCjtS24qTbdshBBkZoeR76uHuAUirbtwh53z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SveArPThM3fgC3yoJiADZgvvXmR2F5cresjkhcdnKrfhe8vTj9a5K2MqcBpHLHo8gqpyAh4PxzrduntVBhTYSj6",
  "key1": "5DYrUJgsQ1KznMUU23Zj16RcfWpWxdJ8HD8XDfnavd7YP7HKXNXEmqUZkWhrTnsRhhqSRKbrKV9LWXABdpvsYdf2",
  "key2": "fQLyAmgFvjSBamxpgTvdnygipGZppvR9Wh1PffrcvyUaySzKnjhH4KvaGzNhPQ7TZbJgMrsk7pVmwYWTQm87mpR",
  "key3": "26H36pzszsDp7kmerpMcjN6zH7GCYDrWBA86EnKCerE2NZtpF6tt2FNp9Hu51JdgKYemvfTqmQfEWLHtnFVf9AmL",
  "key4": "3ex6WuNfLMibRgxbR34MgiMJuJVkniFJ8c636qf2vgNzRekFYqovuyGTHFNjHGhdCUHZWrwHQAMxwYGSgcXVRjJe",
  "key5": "3gyzbnD7MrfXEXeXTA6KTwcdZDwNA1JcTaMg1ajcTigAzpfVjQa8jM1Vtjua53LM2HQMZS4Z8i44tfeVgYoCwZWP",
  "key6": "39ycVMTcSXMepLJiCcAU9c9ywjgqbgbKNr8sVZNhug7bJi1ynxFoM2DcAR9vUxxTzV9zr65kNRUvmncGDLSM9Y2Z",
  "key7": "3tpsh975Q38FPxQQKX4dtqkeHf2jGHLZWF8yV2C7UHAVpaKg4phPsJMuUsTY3c41s41X953Yx4sJtLXNMdYF96QM",
  "key8": "5u9vEBmifDgCFkGN9cA6xXN9uKQyiNyZmz9b45ia2ig5PdAjYhTnfMTr96275vUuFEtAbuBDmjK5BHYV7k53uwDj",
  "key9": "3dkjwAgtr13fqy8JjJegSohnADYkN2Q3pyoGmyNHPjzeg766WVZsxoNMXRx8K3EiaZsUmLYkmtFckxo7tFCyBmTS",
  "key10": "5TMA29H9XTPasELNgQMEGa6VftNxx6RhYZ2LLkvQ6WMFqQEHxd4UZJZBfZi25ZzM8GWZx5z9grgPHpjFCfbmrsCs",
  "key11": "2FKVpdxhm7YpR9tFxZwXMMEqBvvcPBkAEMBcJgJzLtZ4AToFAz6EWCvYDyX8HZHbrVWeTrDKUsPLZoT11FgFNqYH",
  "key12": "3Qsn7MjdK8zgz2PYcyeBTVwJ6FCfbLvYvxAaTBvbCMidGQPkRdVmxhbLZ9v7b6fHmj6SJw5UjWvAqVCFRUYGJqLr",
  "key13": "46nVCsx5rYu46mVebExS24QgRxKxjt8uGWH5iGiVoyuob4cvj8KrdTWz9YASJqyUraA5FNTDqdpBcCW2LmM8piGt",
  "key14": "42XwUhZLjwyQXvFujzZVTW4AQzKupACVm1Xvo8Cvhi8PkDDE5jxVircVzWehzqUizKrdAynvEz42oC5ctUkYbLxW",
  "key15": "5h6UQQVZuTYM56tfGSUHF7GoTeX8ifsDXkPLmdEbCovw2d7TGifMMKXVcB6AEwzDan1C69P5zft1DFJDVuBrPphb",
  "key16": "5ezsr3UtEioo51V7DcheshhmYjwBtUp42Vjg2gTnhdfTNyAuAvJRGCd6mEgKsZnu94Q96wVB25gjPmai5NA6Te4V",
  "key17": "3gNyhUHvugZzGjtHcwrtssYSwhXsGTn6LzLqUPjtaGyxwUCn7qhQ66dXdFrss6Kpmgz3beCzyBhsZr83Ug6Xfdf1",
  "key18": "3ypJycShWnNwJyjFD248dmoJw67vh15FBXfzykHKsS98VL6Thrqoh6XV69iQzAPGEJe9W22UpBpTUPpPZquHtrT9",
  "key19": "NnBHoMJmaL8NoUhbpgVQcgPnZYb7gSCy9p5Uvz5VnPtQSMWEAEtqnF11D28nBw1dG1x9tDnrRtcXxHGjD3vqoKt",
  "key20": "3ctZtwjPAGCV4FjC2EXvu86o5bKVYdvTU3TNEBZSGZeJRehhWmXzBXWuyWbgyrMrbtBqvHAss3TDzdpYybjHFsUu",
  "key21": "4G2EdGq1yRTNAqXZw9CznUypHHyrUF52cE8D4XDe2p8t1dbiSY1G6u7apmyHKqBBhBZV4BepS54ZGvjmsxubjbXz",
  "key22": "5qkt6Bg9KZDAV2dnq8h4F9Te4iks7qwX1M6Hfrd8BkBoUDRdPpykFFbZw2D5zqE8usiDQGbEGh3cuPSN7w72x23A",
  "key23": "3vvSMSGSoGzFz8jbBjaAv2qCHZLv2P1L4KjmABdRNuFSwPbnBRc2CcvS4zkKwpoh6X4XMfCmSTa92a5zx4WduHRm",
  "key24": "431HvD2C3ZHmpzmGUPgKVV9RGaBBJK8jT1CQAjuxWk97HNq6VZfW6188NQxCKDRbv1REBkMhjXRJKwoTrw7JvDpf",
  "key25": "4u1YmpXQZREb9MaQbMYsUCGLMjLUKL3QyuL62X4ZLbD1iiaLWoyHuzYESFqyAU7sKZAG8uCrPVKRDkmRLDpByRUs",
  "key26": "GmUFeyjzxie634m2T4v3F4jWt9mwrjdqtwP4A6WUmXK975dEzLpjsZF84NUxx1Ci7kC2CaBQ8YUCTX1fQPY3jNk",
  "key27": "2fM2Py7puaarPDmgH82vmikCZ2CL1y1xmDDHZ9p5QnrU3n5ZNsgBCBjYKC58QDkg3W7ueaGHTtjyEumb13W1NWkb",
  "key28": "2L4kdvAhTxLiVWYDeCZzrVXJnECULuVS9ewVHbyguoRaAG4AzvcpJTbddZXk4k9rPahwq3hhNQ8eZh7rsT4GNH9A",
  "key29": "5tDdLMU38viZRwSd5Nq7gw1ggtAPeX7NACNUYPCxWrA2ty5GV87FNZ4bcP1qbCS3rNjBjPMmfS79qotUAisMMbjM",
  "key30": "iiEjX8Ts4Jt8P49abeX5XfnSKJAAoqj17dLa66z3hDFce8rThtZR8jN11qAhSu9uE1ekAskrEQz1XZhkk5uGwmr",
  "key31": "GskKEdttKjtSUJ1fKvCL3jpGHw4Di52j35RXR5Sehf4Mn4g7sNSTpCj8qdwvPhweFx4tJ5rNS5TDdYJsnEez5kB",
  "key32": "3Xs5itLpJx332fJ3TFCt1BEQpkkqHs14owhxHoRBDDkrLKcn8AuEHuZj6mHk449yxPDeY7cqNKpzpfSFXQVDuhXW",
  "key33": "4eMBvnT8RHg3wE15JLY8LFFnmkNAzVTwTq4XUwJRFrZLENRC3mWF8xobzBKxydgksULQhXR2gBCoThR5r44nt4o4",
  "key34": "4KARKoshvQEyq1w2nnu5EDFAFLjdxccHTuLWQSwrT2kCXFtBZZTJrUjmvDJPfRqAV143szvLXirEUA3YuppcArN9",
  "key35": "Xw2EeTxoivfoaUWmKaGREsb2FzsDd8jQTFQH91N3uVyYiPw9oKZEPHgdrYMrpQEpmFq8TVpiwXtSHggEUzWoiCc",
  "key36": "qgk1hKMacyBippyEqvYFr6RkFTECEPgE6gNgD8NUDpV5SHi59Z8X25PXtsm3WXasMfuTJ9pgCcoAhY55hLULrxS",
  "key37": "5D2kRvhQwMqxnBrjbkHezhi5YBHYk5WC2CzcghfU4xtxyuPQGgzmbyiqWvfXv46TabEUyrczqJ1LnJ2MZXT6e1Cg",
  "key38": "58U35DbTTND4UrcdgTZKhgXV4KLW3xXrVcSCb8rxEsicF4F9dckTn3mBPftNLea7DRAD6pqUAqrTqBc4fd2vrnF3",
  "key39": "3H9sJ6cu8Y5enbCGvMfeEhkDMvyta2cHwkb6QekaYoceQLVX75csqdsryNYKNbtD6p8RaVPFpmexYJQD58kS4Ym7",
  "key40": "4ya8RDcfxEyvMe2Nr8M2r9DX1aaRwUcrxrureQiz7TLFLqzNjUUNctpcV9zNZ2n4fj2DA26JynUUnudcstL2uejz",
  "key41": "2cWSZQDKPXu5vxe9hfrAEPjhWcqkRweh7UuhiQQEWNuz69xkDvaDLhp2HR7cLkwdS44EvE2MSarB5bKMb6ZiVLc2",
  "key42": "5u6AHMUfCCvw2XeVU8bcvj9WVReozeN2t91FkXshuf5DbueijgNiNiFMGpiU6HhDFLhDk9rAa8Gpk8RNrz2X3dPq",
  "key43": "3RLJp4xqUWsbmnRRGUJJQfvGEJmAepeWDiKBDnepmP2yrBfK5avVhDcoSNkah3kthNHt33VYhFYqWdna1NP3i5cJ",
  "key44": "3pWyZ1BmfLdiiyW5sY9quqNeXbLKyvm1xywkfosubAMoHuHPsgcLTanM96agUGaE2VjttmxSh3CtHBfqKjvJt3h8",
  "key45": "5kdUPraWZah5GAMHgQ6S3RHLPr7ocLvkHKiKUghodPz5NoeBpBPg94roLqnEWosQ2XqysrQUKL7YXHyqem3ACqrh",
  "key46": "3GvmSw1NgykXa5JES1utyXrNtYiZRhtTM8qefRcLJCJX75fbCxg7DmGHE8vs21mxcmxSpX2983BBbvCHcLhFzy5A",
  "key47": "5TgpDB6Yhw8i4RnDpdkBmBja5ihbtzmEDoeYQhYH1hEqoKM7Uo2PtF7aGW9uU6LaWazx3hUG7yNuNFbvBRfHNJkb"
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
