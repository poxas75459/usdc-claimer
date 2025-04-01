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
    "2WfgviGg6hVR1fJBXDBuZ9JDE5ki7J9VeodWdv9yCUPkWKp12aATA9PWo4ZDnp4STbNUJ64HKXhsqaEgF7AW86Hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDB3j8uKwDPaWCKhVra4NLYF5oRPKnZ4oAKGRKCcUBr6wJc2ijUMSxTzYN7B1sQiyqfuBTDEtbMGC3dFg56VA9c",
  "key1": "3K3DV63DnYkNjceo1xjNYsdWJEo5RauzH8f2QfywEaTXQXhhKa8sLgmp4ceondfpJQh5YzDFDNEUxzDWFTYd7i8G",
  "key2": "5GPfYWKe8p3wnuEUtf3dMJo64WAnxjuCDS9Hq8di9juzYuaXSSmGyVQ8QDqEqcwCDi4eviM9BDJDK3RL2nY5eaGN",
  "key3": "2eAp8SR8SG4rhbhXuYFAMLDawyejX3X6XfnvyuD4FvYiZw1aNiP9n3uxPsyuCV3fQ1rmaz8rbC44b3yWwD3JdFwY",
  "key4": "5NDKEfVXZF41x8gSPJeHhrECU27VEwC6GxWFp7VCiWJZV4sEieZ5BErxpiBV3h7AgMD3GNQGpeL5AAQPYWfxJnp7",
  "key5": "2TKys29CZx7yPxbF1DEaqWnLXsBVTuG84P8bF5fhT4FKgML5Hgwz2wCGmBMGaeyDbSejYqPpj58t9GmU37DPgFAp",
  "key6": "cnz9g9w9zhZXjvxt1V451uYJ4jQv8qVWN9wFrBtPDc878r2PBZMdHxTZPxBRduzUtgpsiWKzY1fspnHtPvvf1kC",
  "key7": "2FanZyVHPF2aJ4V3L1poZ88TRj8dBgiRzsa1F1tmfvCXxLX2gEs9DWfxKLvQxJ2VtYxesPsoHKUU1jbAgSkegAEs",
  "key8": "3B6oA6iiiHzh4816X93VLfZU3BZHZkyxbQAtNH4WsyvkBBdqcij5qNLgFwKPAp6tcNgKCuSsuPXz2RY3eSRTtrjS",
  "key9": "67rRtqphrVhQTZpiU2SL4NDPiwZ3yBrEjSj6gkp6vJ1kQrotNSdRJ8Uxp2prAoKBGp2qDA9B5vNFMEWypif3RDnd",
  "key10": "2Vc9Jzgeow45w8MnWGWpLJc3qFuacPZxrkYSH6aRJ2iSgDYwPZtY54RWzCqTk7PDLJsGPHSuoQpaJbLpXA73xn99",
  "key11": "4pdAi1yV8vBT3uNHYjgf4R9bbnRUExtnTQFYgaadHyewdbgtVuVPPwWWP6NV8SmmRi3PM8W2ZXLyuWhDV7mrRwHN",
  "key12": "2gstBNy1wF5WxVE21JS8y9agkgWt4xtb78NVwkweqUitR31cZSfG4HE4ysiSKUpGaJpZMFXJsexTZK3R1p3XYR71",
  "key13": "5k6XUUbjs1NoKHif8Wmtqd1eg2iVpv7cvxv6vBY5PhJjYGH2Fn1fK2WKk2PjvcVdTwbctVURJMmuwA127nUU7duP",
  "key14": "5gR35uP3vaVXVvnH8SJUbHeCTTzPpztLLHoGhNoBCNGxFfQ94Ckb3SQfbJnJHzJqotSXU7We1XRpjooKfA4n4eJH",
  "key15": "2ZMz7PYCK7hbVmjnXzar9drKXrzUckaFLuWdDzhQt87WKRoFWushPJjofqiij4q4txhwTPoqdQfmEcqWZSfeM1vQ",
  "key16": "TXGmmnbRoGb2VKQS521prbY1ZypW7nhdVdntAmmAFMyAK2E2UX48UoksgCPSRpxKkNztsriv7c6AQWMF7yk5SuY",
  "key17": "29RFkwVdGYeQALwhWXppbwghAxXGdQcw8NtZvKKuFTchqwmbyjrymjAXz1k8S7aszV4t5xZXPireZ9uEBSArhGX2",
  "key18": "5xv94KRtg3NBcou3MZPPndYEaayWSDNvdcXXKB9tZV8UvRD83hfKCSZPy28wz527jRZ7LCKMfDtwsrhYrixTYRwQ",
  "key19": "5AVdphmjCT9nVWkhkjtNiitNwzjtLfgoEVnYUxdwxiftuEExSayBKwaKL2VVBCz2bM3z7GsTk6bFjP5WkMmJf2pw",
  "key20": "5ik5Yw3xCVGMTeeFwmPPKogpANAAkFSr55PYJRHFJc1dQXL2oMYv9eDaPDzyiMVE7YpfS9Qxhex7zNy3nWpS39Fo",
  "key21": "5C5zkj8u6HqNkngV65FKUEyJAijmz7BadmMjBNndkkQp4JShpTmqv6NReuz5oYJi5UVNK5ZmRCGJdKWvBzP1Q9Ta",
  "key22": "22DbhJBuEWiwRTBsTaWG7PWHk1u9rsdXy6JYPQa8DRG8wBmfneCkQDmDgdfoFSx5fqy8uXWpqX5g5MddwQLM8tyB",
  "key23": "5kvfEt2WdMgTTCgvJvFrmYcuUZa8UxwBr1JkW3SKtGrXxmr8kfkmgNDrbH3CpqrMeVXmDQGwkfaCdm4YX6TmMrYJ",
  "key24": "jvQ2uLGbxN8F4eeACvtNDTNi2n5QF5X2RzknbzCNjdBJg9Nb9jqPv1i8CVjnjYxus7RBSsBLbywBvuGh8jkqvJe",
  "key25": "35Aq9ETrhJZzZwhTbxYwEcFkMYEjvFGECtNBsm61qDgbTRREzMTQCHyDf7ZteGG9ytVFSx5B3zRpp8Y1bnifcX8C",
  "key26": "32YkXACMBS5f7uYvRFcYHWTW9aCmob4v4mKzbdqibeLat4pjrfJNJXD88pxWWAnEagcpyv5HJainbLAL5uenYSmb",
  "key27": "ScNm7EDV91MsAAxYyoms5gFwr7rgJyQxUc855Bh3UQgAvHo1zn8QLbDBfRfHrQC2TUdFkzNumxJJjB9iHo2jffT",
  "key28": "598L8XT5jiAM6dS6CBsN7Rsi9qPig6JCCEv9sYT8tzpMdsd5TLknfvbBUrg8yHZy2FeVYQiHwWfaev86aHppHx2d",
  "key29": "3dw2jFTz1xfUVZCaiaexJqbizpb4dAeAgiPazHKbaUvGw4qW9NUecv3USRXa4vVUdgfFs16Astyp8WxHaAPNXovC",
  "key30": "5Yiq2GvFmfWdnyqJj8gFFiTxvFFCVwaVRzmnhJD5LApgm2JoGeoToPpC6RrRYbA1peNSXLSu12vVzYfPLaiCbX5h",
  "key31": "3D2W15V4RnMax2C8GkJRXvovmmEueSJHR8v8jMxNLtdJXyv1Qv9eLWHS5h23B4BPTKNVtD9wuDGKvaBZ1jqY6Dbc",
  "key32": "4BJAZk6YoGgXEnTUVCzQFQHkyiaGrFj2bTtnww3ZHcD6gES15RavXeCwEcasRiiF7anZ5BQ2SQbD7NCPhAoofoXC",
  "key33": "342PijYoYVk9UpFu2ZSrKnEEZpYPPmiGB2wapQPdFDFvjcoj3jQLuGS9pSLnLo9GoSvHZ5HnYmdGKwszSKZ4w9if",
  "key34": "4X4meTxEkSDagsnKnNAbF7J6RaPGyezj7FQ1GiwjA97dcj9ZLToL4F1LJreT4jXW3oUahiVz1HZDa5jkBp8KFi35",
  "key35": "3ymNTDcKLeNhcn7FMiJUiHTusBADn4en2TeRrxtT9RJ36sDExzSC3Fa2eJ1MQUAjxQszfYNyLNaamdXt6VkWo6YM",
  "key36": "cy7Xe7jTYFLxWdVwKSVGFwZPtSp77XysKHGqxA2HBJLvPSuo9NZDRTPEkHUrggejenXqCnZH3iS7E6UjR5hZbDS",
  "key37": "4aE4rSJUP6uJMtd4Au6DRjPScZLDrayMfdLaDJtKHnBtaDK2jDRLqxq5gqRwJuEiYVxjxVcRmLoMebuvcnQdu2eL",
  "key38": "uVE6DRxo5H48pSeJcvngyCt1GbjLCzfkeHM1RHFBKgphZmj8qNXWv64yBZknLGEVJChvK2NhiFic1MVmkSQjM2U",
  "key39": "2nEqX3iNUYnQaFvoCrdihQYqv9e26QqSTy7qLorYGbrUhg3381wVnRzrQndE8FmFDgiioqjakGPd8SLjmSW6kYXe",
  "key40": "4u3coHC5RakBrQdsx1dwbDVSBvZJrCG2nDU1bb4BEbtYkGyhi1kgrW4cHpg3HfDbRef8yHnxrzX6yZy5fviXa39b",
  "key41": "HJe9Pyovr81m4bw3MmJF461vZ6zbxAxBrsVzNiCAQCmSXumgTkRYY6AdTkMdyC4m1fdLFYfdmX8VLiryj8aCU3H",
  "key42": "3zR8ZUd12G6CVo9rUep3Tn66CsFrkDm1YL1gqxF8eEkVC2pirVCFcaWypT8CADS2vg97ZsAVJuYmuxmbcLdqbrDP",
  "key43": "5XnG3R1RA2TxoutLQagoyyQutKNsFWFq8rpE2fffV2NUd51fjLRSEBaYMQw13vQpK8mK6oB5fnAUm5rCuDi9mfVM"
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
