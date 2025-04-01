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
    "2PEFoEaJXmDbHdyfyC5ukEadUpKuFDx1jTq8NGMAK4QM9NoMU87N3DAfNL1BtRKeBsHgCYDLTDqEHXMDxWqXuodC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dm4rFbkAN8aCRnGMBSrSSeaFEyrw3RKx8RR8njfUn1deJRokd6C1W1qs1DpB7cxW3q7Tpwb6eS8YbfCsAhM3Tae",
  "key1": "3nc28LQeipv1hqQUEgCXP2aDCayUCmn69pH9B9sqQp22aFmnRRrj11KPK8tMCmd542sTmAs8u3zoGdJXNTctj32G",
  "key2": "4HXD8mKm9ZRpLMwVSqLsCxGeySLX6uk1xwYr3wEHhNW8CbA4U33UfGUu3W9r4nrJYN5zL9LCDrmS1UzpUt2mzUTv",
  "key3": "3bNcsxYM2kQ6PktoSaS8vGB6VdXyg5aKT4kmWTrjnnHXtUNunDVNGsZ1YMpt2V3HE4doY1dJ4t7JhiadgYL3ES2o",
  "key4": "3112GekBLd3uWtQ9ztqWGXBh7AmTrv1VbhLfYr26koc5ijjYkaf9Cv9ziXrEYnawDcKmUdfShy7fiKPEuynmAF4p",
  "key5": "2c9dKmFH6eSnwtxHftQT5ZHx48NarE6NPC1741o8zKCKxQPyekPdLwCiVGGWuaGCdv47B95b4MncsypJYCkEXM5i",
  "key6": "vojNJW2qDtspfxFzezcbcdYk6uuTK8AmtMuHcWHQzwksJqTryifutrfcfBGdzPLfpXSZxoigizmHvdbtUyrRQKC",
  "key7": "2AcgRKDrnagLPRYug6W52scYKieNaBPJatb7NNJTCdUDksKr8hijKkCSfJwB4EVrY7X1H8kn25NnWn4YF8X5prcZ",
  "key8": "gUaxf8UjEHerkmKyCf8b6gMxEGtTqXBcEcWLRtrP5HZw5mPHdNjTe6iovjNVs8zLiR8Z3oJ6RPgyEo6eW61N4CM",
  "key9": "2P4qdFPBoRghbBgpNpu9vQTvNQez4jgXcNRXCoaTDngKNMAEJm35Jw9DNr7JYQFwUCVnpfovvy3w3h8J4N5hZq9E",
  "key10": "VBS5mEqDTMgcywrtZiLgDET876ZBgFkdoUvEeqDFiBnjbmZTR91Qmv8MtxDmhRS8pUMKFDJ1ASUbQhABUbZqyYe",
  "key11": "268BDeLJrHpVUEGJGMh9DUEMExtQ78rnowCKaahFFJzFWorDW1qWjUNR3yP4mSg7RwcqeNtEkuzHDWQqJiPpKNxV",
  "key12": "TXa6wQQE47NokKDzb3Zi4LbztxrxCAmJjCKjWuyrmU1mHbncQcgikp9rzx92xNVxHeb7LV6bhs6S5vVM72Ka4aF",
  "key13": "ZQBnjBnHnHmyU4mv25hPFvEi5bHWchxGgGuUPGRaXVT8VzhqZsYjNEwmDE4P9i6ZA3Dvm4CMzDxVwYJ6ZAaw4CR",
  "key14": "3rU2suLi1ubUR2somJVRUxhz26ATg6bhfNrfDiuAtwFZLdmWDPYL7jvs6ytrRsd46aDSbbUt6LYUvabz9qhohneW",
  "key15": "4rpHjehbicXrh7naec2idVnktq4xT9nNUNYex8XKqyNK8xZYDeKbrCkZjDhiHNDrFBg54YpLvh4QDMW9ma6vTJfT",
  "key16": "dGTPYL95QuEG1SXLmbaKcS5ezzeysGV87istMzfSGzKsSjcBYcjWWDrgjcyocKH5KPFYVa6i44dEt9iRYJ4GQUM",
  "key17": "3SagamySxH51pC1LLJrDf4FMZtErsVY4XtHwRJK3q8TiLPbootHfyEcZYvqVmFijsHbiSMcrKKBbj7pqWw7itb4G",
  "key18": "3qyVj3wZ5JjoJXcm3hcXNYEoJZ9W5ucvQYaLduT6oidSGcCgqLDu9ZAJbmNXJ2CtcN3z7VkcfxEZp4JDSGv4QTkC",
  "key19": "2SULefMhf3FYW7WB2FrfU3yGs1e6svioLLmm7XvwLdzKjX8dnv1DnJuGBGcnLdA7ZHjh4kj7HLWPXV34sqGGhWhx",
  "key20": "5nA6YbWQNEDiR39k1tbZhTbyqBNWhU2TvZ1SEjGSynjEYFQ7RzgwHQTEtVCdpCpTq5KicUodYvj9t57KTfiYYGUc",
  "key21": "3MQYxwJTMPhq6ZGsKpvdetqCiPzriQzwMQh57j9C5CKVcvvi2TpGTNzS3ib8YKtzpbqb24FxziCoahhbyZzo6LZi",
  "key22": "5RQPxWhvCzXv89akGgGLZhvdUyEWXwxQefTZEhRG1QWyHdwBEzXZHHzaf9UcZWKrxb2tKz8kiA6QXr1Mp7vR25S8",
  "key23": "659iQRCPWj5CdEYhLdeugs54eyF4N922vpZQ32pNeNktpbh8TuMaVkLfnteiDB791pQuxgeiBNtB6u1YMWzev3db",
  "key24": "5iRQ8wJgTRJ3N5e2BmSEf1eyxahGKP7RrRJTfm1YVQQc4i51TRUSZ9utcDEzZxwX6KNnuxy7kAW84G67jjuMuFbg",
  "key25": "i3ReWKLi6spun2QbZmWD6BYCibfQ3wZ17c9T1dTjudFFNHXwUNj4pZPBQ2PhwLALoY1fsT37QseAb7c56gapCwY",
  "key26": "2TuGoQqZTAP5mSejC3PhNbeiNK3ZCkNwz8vSRfXPbLbhexKmTYg4Gz5TPBu5NYKDZEuFc9j4pKJ9puvY61CU58qw",
  "key27": "5Ny996qbC5td8eaSCmAuqtttUCzjFg81GB4JBuEaS6egh5WbBuRQPZab4oiBhHp7cy1bHPhsfCUt4AyM899RJVTc",
  "key28": "5opPYoJv9LaqTd5B9vKvoNbgtSr4PxgqqS1V9AZQnks46zEuzJoc7uV1Jp8gcVA7k8mEm6fDRUKZRLKVNL1s3UTc",
  "key29": "2Q3TjGtCkDGSE3j7uFFRx2pMjdMp1LuxLGXNW1sDDkDteKgg96opC9w6ogx8eDvf656iX9rdj6o1V5Eeh6UBUxET",
  "key30": "2U5fBAuS5rkoNMd3qbeXomfyf3RWF5DZVV2XiGJ4psMqscSiZZnQBh14ZnwH2G4yVXbw7C35JKEG1FwcnQ1Bm92m",
  "key31": "2ieuV79zUbiPbri1aoYq1mTzAAYjr2a9aVBhbKtL1TeUm2o5M91YFbt4gsrDwf1JtTvzKcW3S9Pu4pY5L5QwF2bR",
  "key32": "jtEmtxjWyBtaKHaXiF7FAPBcuSXQLJ8SCbmDmyK1vJPKcBe6ePTcpDaVAMqqmFJY7XAm3yVLjHd2bMxbZBt3J9T",
  "key33": "3orpu9zCtoh4Vfw8ukrMjyFYfkQzFz4AZ4AoyB4CSXQ3BztYBHHETfkXMsCjSwoyduyoNS2RF3AHnGbofMj4LYbM",
  "key34": "3QiTn4EMGmow29TBH5yAgsRgGiBLgYc2N71aK571jdi97ppNqrKdMK9DPtPPctb6SFkC3aA3Jt3kfuoAQp3xgza1",
  "key35": "5Wg5aZHxzYfrieQsLbRZGFZR46FJbhEucsj3WmrrqxawnSRKfeUZPLhbmXRMYydGUsseFAhE56qz8VJkKM2Pb74U",
  "key36": "2JqUKnjLwiYk7zR1nJEQDnVRkbwNWsq1znsVxcsmtSStj8JUV5b4u47MqTTshgx2N3Yd2tcApu7jUYj8qe6XrpoE",
  "key37": "2xkui2SyKwsJQfTc7b3jF3s794j7mhRAxiEtNhTdY64TUH59P6mmpYPfxt66rc4MjGKrqYaiqDNXLpMMKouoRhJ3",
  "key38": "32ppVBhyvVB2QQer7wLFszSxYFVU3FheFSD3BnTU4SfFon1mjhRSuiCE2kukoF16X46z4ijqcV7ou6AuWGtBasc8",
  "key39": "4n4fbZQnahk1X7YEVnWMmFCgyXC77hGp3mxxtv7hqdBj5SyVjbqgsXKs2VyU2cQXr4tkB2UhNmyNoW2Z8CPHnmyG",
  "key40": "22S6CdXn6TNuFYxgg8wAX8GxYLQjHyURz6EEdU8qAW5ZpzVWKo3ehiHGrFVnVDwAyXTGuzswhS2UTFoVavar57Vt",
  "key41": "32PvEG1MMEqXRvLFBshz3izpm3uPQ69J9NjAbz8CoYFY7aTKCQjYJy9FgSFyrFyY8LxGHG2icbfDoYFQsDMmcT3R",
  "key42": "4nQ5a62nQNNsU9F64XimCyosTCREesbq8P3q6A7TwxGki1ZEdwNovTeaR3deQA8T8vEUkMC1QfUoS8tQ46sLSgvy",
  "key43": "31FMxNMRw9mfPXRy6Gs9rw1TPBYyByASMKSFc9xiJfRDWeVnYLN5pJVrprzpjFoJGYuA6py9noCLDi9aPkh3bocX",
  "key44": "1oYKgCTJTZp46Qvdn3cM1s8v859hwdCJcRWRzTHDcQmcSGcDcWduNRJgZwv6ftJ3k7NCSwKGJJas2URcVPVrVc",
  "key45": "2QFEyernVEP1CDZ5MHky3GAhKSD7nFoMmmHc5gNgkYPyb4ts1Jp5vqe3a5uPuj6ZE7VKug97Tp12gEAPWedCEmfx",
  "key46": "4GhT9n2aDRNnqgfEefr3Q6QpW71STknHNqx3uxGgyN2EUqyXbTizYJmTXwUjBZhW42n9G8L9BAgxmVDaa4M5ED2c",
  "key47": "4XpYEPdkmngCTnXT1sruFUd6wSVZSvRMWhCVy6zTYyTBS1KZQFVvPn6QGUh46RcuybgtF9EAVnnEG6NK472Z2ahW",
  "key48": "3UoMkfFUVnDSz1tHy2F3waHbmHNg7RcvGKERujVT9mrZTCyrLmGbF85tC5dA6YwiY2FDKLM4eRakQsB1NR5AfS3U",
  "key49": "4cSftvBzbYnP1BzMg79yUvwjisJMZayZujM7goDrwfxgGEFudFGRujTczGZwW3r7CQPmzYpQd2V9zScruLTHQka5"
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
