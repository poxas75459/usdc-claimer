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
    "4RQJdKDErhQSKmDVTDx1NyVjACw9T8cW5rMgCBpEKX9BWZLWWHn5MsUavGkkwGVfnQvM81s8pGzvQdfZEaZwxUhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cZgdXTESruuvXUuEPzKF2RA2Uo3TvcqpJdKrzkVAfTtS3Cn9GPZscCZ7F5z5sEK6wwPgnqA5pAV1LDwcLdFsApH",
  "key1": "5RAaEweNERQ41quFSj6PmutVhYwxEysWzBbaxCSgaTuxBKis4uugKo9bpj7QBQvP4jyEjMBNv9L7asCxYDbNmgAK",
  "key2": "2Bj3gA1FJLNTovdtLPtTqSgbfJsHcSNcT87Y9BBGfnQcYrNAbC5gPqCnT28DxM6mz3QqMzdcD91kpqcL8igay68t",
  "key3": "3jTGnBi4Gs8SxrfPThrgRDtkQpWJQtTKJm4CW9z46k6ciAvFdm7jbNymU9evuQ82aMidp1FNQtH3a9bjY7gM6oui",
  "key4": "4QWQD4PTGJXMahWbj9VJUhA5HTPvAEWGkfjUXhByGEtrqSGtw7rozaR29pv2nQTNFCZyhA9Jb4tVySnhLcPe6gHG",
  "key5": "2fhXp6f4YHEwmxLpKAMBAM8d6tFJXDwAXRfpnvtkSG1YbTwkainuuboevVQp21T3kbNM3ExQ1caXCdHWxibrGASy",
  "key6": "5HyXQQD5ibSzEZ3M8xsjzXTsYHh2u6keWUi7RLZ6hjCSF68v26WZbTuetJqvUsdJ2dUsGaprfddYP5mz3Umyeupc",
  "key7": "3vTr6QJ1YZ6NWA4eGYtgidx594ubfWQRrL1FxLvRi8Sy8p92FhLycQJeK4haQFiLhe24SJmmoT4a9AQHLiT8992a",
  "key8": "3qTTcLq2BCuV4ekrL9vU9Fb39m2fzj12vdhGpVR75zpTiPGPfRB8jL2QyKU7cyA5AndJSUz8XkkjtyX6sry7jNJB",
  "key9": "NvjeVyYr6g3WJyYmrGaRXwjE584DJtmJNkUrsUY3WavbpcK6mxnm1MyKn4bYYrLxdUJJp4fX8igEHPkyJKM66Yw",
  "key10": "2LtDEaTQkckZg9WdP9q3m2C717j3VQc8nracQv3ZVjJ3s9hXVMVNVM96DPiExDgKiq3BSQmagXp757uYeL7CXvfb",
  "key11": "3vojteuzJLEzUDVCd22Tq1QBtLfbkzy4SZLdZjs8gQyyL5H9iNNwiL6fJsN28bk2jU8S5zisfDzmUoeJpAdkWLpe",
  "key12": "3Y8QkNyrsqToGzrm2sr5XQFzpcWmhS1AgFACtMzsuhad43oL26qH8NSszR6WxP1BeXfC5oDZSSZkcXeGF7oRox7j",
  "key13": "3g595RkX5e9fqYx89Df5f411x2rZswx6qT1QihyAcerBsr23o144arGVyzMT6kKd4wgT3GxALZrXCMvysBCPXDoT",
  "key14": "4HLfdb33kdNNVcufEVkeYHdmahMcjktE88fvqLf8tTA2bR72sJouNpC4V4PzkY2rrb7iG2nGfsffejNcQ5kFWKKQ",
  "key15": "41wFBSQemGbLRpAVrS7MZYx3sx7TWiQLnUWDF6bxcLwMnHnrk2ECW9w6UTTGZbhCgCVdDxmLbSqTuyjD4BnJMLge",
  "key16": "ida3Pv6nxpjrJsK5ykTUYPUed8iJGgjYekkkq2wUVd8FCpSL7sPhNrkt9ujvmDUYfuJWtG3KqF68ZcQut89788m",
  "key17": "28j49H8sMQWeh2zyyRQgVMtR1UMEsqWod6aUEwMwinSyKGncapCT8pcWSo6EqVGAGYrQAHgxnXcgfEbjCSL31Po7",
  "key18": "yWezTNd9D2kwF9aypakq6r6nh9BMuvqJxamN2csayyNaNQeaxybHA8Gf8YBQh283t11T2xt6QZ14yZPdp2QaKEF",
  "key19": "g7MczuPEa6ammxpmAmCgzuABQAtwVXbmRHrXN6XMZ76LeB3gWkNnTSZzbcRtntrzJv9wU8Ri1nUYAFtLFrCgztF",
  "key20": "6672hyLqiaXpe6vXLuHLq6yV98Wj3k3AvA9q5KnfKCPZ7KYCU2y6yuK9pTuuKvm6jiR2sje5Fkd8eFwvkqYnjihk",
  "key21": "3MxZbZqwXZP5CJv2K2ALe3SoFZvgumbPjVREaQ2FCi2bYWkUBpeo5TpQ7x6Xy4fVi9DaYGk9UB32CXZCen9kJSTf",
  "key22": "4Ho34SnChJe6hAJLtZapm3twEJL5tnc2P75sDTPvBDyPopusWffFtgamcAsrjHBdNg7KwTxgVQ7Zrr9Y3Lu8QdA3",
  "key23": "2gNMa5HyYAh6jEYX9cd7NFsekTaTvMMk7RmZyathVmSdJxRHuLThLdsV8svmXRsq6tjYvhJKVha3kHr1Z5pHYZmy",
  "key24": "xuqSS2SyxKpPtqqh2UTou3Ws19axgvypaRp7heppcCw9UNAuv4rBJTYhnFm6VUT3qexjdEsofFqYbivGMSjSsPp",
  "key25": "3HPx2iZgrFB6UG48mMeqEGVwUwR3MAYV1vS3iToS82soEZLuW1YGV91b1URJRKQBbQ3G416HmNpKLKBHZTaqsF7F",
  "key26": "3pT66qE5FjQfp2aoVYDuPJFPiLz2LJ1SJ4AidRsmDhnUGMjwp73JRzwcRhgVE7NYgTfLX1EShTtfZEDyCKs1pW14",
  "key27": "5M25oggqZtC65nJLSfjyt2nTc9e6Nzfoko2R9UeJbHAt9M52DHL2ztQz3g9rtNjhyE2Lu6VUufMfgp5JxnW6tR3G",
  "key28": "S5bEkBjnK2M1XfeQMQxcTpY9sSnjgTwoZUr4XG1xZcPRZJr8KQ2QfNXFf3QdZzNWgN7e6jvzCYhUFSc9EG6bmrc",
  "key29": "2gaDZSpNz1yLfgwpDeYPN5owktCR6DMwF3hoB4EnAjWjMrmoaJvLenM29o2KqC8Ba2syvibQVqrE7J8j7U38z31B",
  "key30": "2HAcwKbJMWNsZKPAJck4MSRNFYiPw6pGvPaKczYRvTWAfBcBqC6DSvm4kxs46ANYVHBdRrZrkttr9CzX6X5jZ6aM",
  "key31": "5aqcCBtKEPacedXyUndfHHDUoGKDuXfvLgNSduyKRshzjdHAhrPBJWVqcDbQ1w9MuKhTATyMsdFJ9jhwi6hgFf1j",
  "key32": "3xHWSPFX6dFziZvAB7KkVxDLTfxuJSybdzagMy66yDQNPTcUyUbn2TG7pLCz2wKb4J6nRtGXgTC8wjE9nARhBb8g",
  "key33": "QZeiSt6kYdm1wXU9Mn8q8bwAts9StdeKgY17ZYPnZykQTR1BmkbTwqQDLuSNzqtbbBTwpPQt1Z61xdSjsabsJHb",
  "key34": "4yAxW1jo3cbsrYNmLW2JAkVesoYWLHVcUhhRZRVQiBgfbVRYXX9TdtEy16iZ1u3PXRsazbsrz7Sg4Yq5ozhij5TN",
  "key35": "4uCggagJsVj2Lf9N4noZMHC5ipigU4QYbqEcFGMpZTQeToVpCGodArqHnT4DpAPa36MQi9TnCepiQAE8zBpQRz23",
  "key36": "3uSPSjAv4RbrCV82YSxAu2Govsbxa9DTGpREUfYDWKH4MjtD9Adp4M3qscnSzhjzsacSXDVC1hzGCXpFY23DfgGj",
  "key37": "4DJ5oUCndd6HnuyNvQrafx2KMfc2KaZF8jPwYuEhycWD9PDwww6a8sSsChgNq5hSLwmkHd76nkBxFHAaFgh6XDAA",
  "key38": "3YPG16w42Yyg7KqEAYtJmV2c3Q4dFVBvpZdr6GqkDrL1jjkaQThgPP2Crcj5sHmHg12riSb2Qp1EGtpMq3sKUMox",
  "key39": "vxbixTxYyZ5vfM8EQLGgkZD8QNkTTdWeRZipsDeD6fwwo1MTa8o7axW82XjJLeSvHcAs5GRTBY6NS5VeYZexTJA",
  "key40": "3qqLBwkYwrSe1YEMao6kewkUzSHFBiDHCAaX5pGEQS5GoYaFroNHodQj7YVWCahkjVcuzxC1jFGanU6k4Fo1N6dX",
  "key41": "vbET9yJGcSYdQA8kArZHyMd5MoEsGSemBDbDkFCwwxucMyWzdNJZj8pgVb3rTuPVgj8x2qqZia443w1Jh1zER4Y",
  "key42": "66Cov2eh9mDqx7KbbCGdPqRXGRq7Uj8eEgPTkTZCXemEuNm61FhUxvuoSeEHWD5Wg8fN39emMpMya2r4nb8R79nV",
  "key43": "2VEqNd5yLffnEb2MvsfdUV31GCZ4E4sP8LAbfDFa9ppC5mX13tYz3ZVC6pVQQ5nmbzUQbcBxqALLSGiCrxMarynb",
  "key44": "tMoemKNyqBYPrGatf6rJDjGxX5RRMo1knpjjh28oWaZTLcLkbpNdBkSbUhVtgdQdfvKQpbwRWbVfShUn2kd9Bfz",
  "key45": "3ZdjvNsry5A9vNtWqmcw3fXnASJRuALM5UcFF6QE8vFMWsjQkNuK9rfK51ULdKSsneCqcP5YUyJA3TvNxhRabv1j",
  "key46": "4AxmmdgbETaeDSxuSHyRksv9FZGqheurm9Xtbj4jwsgPxzBNm2XuYuVXSpb7xyc9PrvTJCnruyKjBGi2d8Be4woB",
  "key47": "2jwiPhwcDDHTF9uWeg39XrKpyEoRzYaRCiuhYPzVQN2aRnHpaZAgFYpynCnr2QjyiTeTc5YRp12GYihDrzyWdzXx",
  "key48": "58MJ3ukBUWFPk9iB3jviuaEr86ddeJcADu4UDQKsE99QVnczjuzABcLGuwteh4avyUAXttrAsM1jNNBgXGGjJcsh"
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
