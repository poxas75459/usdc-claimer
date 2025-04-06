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
    "53sHrgdWJkuoeuMEujb9jb9od7LSqqpyeCpxVjStLf2mKZwtSMo2RgQwXGoRmiya6Xjmp1Pd2ACa62YMZ8KNExZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QJsLG6jeYAuADNZUFG5d1jtGVsRuGaSJTvBKLaqKJGxpGn6T7Zt6CQS6LG56kDVFVKUy3ZCs3Cd2s8JXKjuy2KZ",
  "key1": "4pKiKs3K8XUEjVd6FLBC9Hdsv3dYxTmEV54471Ci4ay59JLgomWzcpotQ3oCCL9KFuHoFPXjoPHUYxsCh4aSkCzh",
  "key2": "2dL76ptKtpfexMr1pb6nipuhogSC5zakHTaRwRNZo3QEiRr4EQXsAgFG2PtczEdC7Er6YEGMpe2vCNThk7kupGXw",
  "key3": "3QGVW1grfj1Qiu1FEANKWDNeVx3qmuDkwDtAYfA6D2khtWiENbfD8a7eph4vNB1Ugx5a9hcAgfSZkf15BN7j1VAp",
  "key4": "AbxeqixMkMAz39dU3z5jJtrZ4ZMuAZY3aiHUSG1uZ4nfHaZHA6T5o4zYwQsDdBF9Ug6hrhkCndUPCdAmH4oi31q",
  "key5": "3v6MpcH7ccYKENTsr6M2nk59X5TWzXHb4xZ9qCZe7XXE5w7YZ68UVdubTvL451VWMMXWiyQ8NaLb7Ex3ZrYjx3aH",
  "key6": "5RyNGQDfUXLMrMyX2AWysb3MtUPEdE7imipJaCjUNAdfBkWsMQfzLfqVDuEUkL43zJ4aY3cThm1PNx8NsxseSTT8",
  "key7": "52u58mhU9ZyZt5Fe4caLkeQYdNVYt2zJchVxz3YwuDdPCiZ4Y6thySGJ1a9qjGk7XdVcsX3fDPMxQVivoyhGoxAd",
  "key8": "5JeFYz8UVtwXDcvsDKWb1SJo4BzxGgeC3JvGbyWkBGdg7H5zLyhyukyuk6j8LLaJpjfJfZzWuXFUkUi3WHnH6HB2",
  "key9": "5gGhejMX6x1VWeC7YM35tc3azQxLVwUJzr67qmzAbnNkS3ARQGATuzCLZWKtGm28B3yGQ4wG1EoDMESFNmXQjCzj",
  "key10": "4auLPZFrqEd71LpBXHdZtDbjgbhNvtChbCj2jsoemttE2wsduXju88m6nt8AtHdjJSNqoyA8hVo6jyD5dPiGJFDc",
  "key11": "3SAX7ZWx5tXau39oQJzYVuG99kcZeifR8nG5QY5LPTuYnGMkrVDpPoUPpUxL27o1BAP9QTkvKajW53McojCd9Aio",
  "key12": "24sJbtrxM1K4axnEGc7j1oKJjdYbVjp7f6YGsAekebjFhpBw9T71pTSrL28pvChQiFzozA3ZUF5YQ16SWi1PM3ac",
  "key13": "2Ajdpah4F86tg381C3y5qZD84T7eZrHnbYdjvzTBRQzbCaCAvUuPCEmqux29STA4jDsP1pqoKcvLDxrAycGFZfEN",
  "key14": "XjCJadvFRAcDB5LASx4nY4gMZFEm2mXbyn9iHoQ5YGzG1FQRXrLiF1Tgh1gYzDNLPVhuend6N9GooCjwD6MZ629",
  "key15": "xd7juNhjYWZw8WBUdXCEKXMtPpDVuwU3amQYWZhYweYrHtRsWUiVgnTgj14SB4xPrKgDDNrCmZ9rqJi4MKWc4YR",
  "key16": "34LTnwsXiyj7wrfb14be9PTX7LEsS2mA9GbYKtJvfnjN8nzD9c6o5BuFNwYKGqgzfyATEGZscMRdKciuZbxWvWXn",
  "key17": "48qqkDhMgeCRYwffVS5K2TjjuqG6oxKbhh25TfooyN3p3aDVKqXjyR9yWbk1SgfrSJi2LjaGJyk7Mz6Ra9sBizqW",
  "key18": "yR9LK58nCJDmni4diaKgkVR8Rw1R9VUvYd1nsgEHi3BRjqCcxahE2mN7RJ11sv79g9UGZQ2KikohveGmWgLcSJp",
  "key19": "XTbT8AGskMjbhLYjcj6PAXHKYrgCFxL6qdyTnHLiJihnnF7wK41PMHNom36BjNLkwL4qSFfuLxuZ2LFL82YYZMV",
  "key20": "4iSNkmWorqMfkohJ2WHrBVfKr8eGKgwxSf8xstrmwxVqScPpz4ZY9gpUM6Xmc8iQGidNnAyWpTcqkdECfj8E6WCd",
  "key21": "4yG8kBmUhm4b96k9WaMrQUkbzvRrcYfCbFwBF6AhU44q88BpvwovfPkksdhR8GSrQd5c9x7AtYMrypwRC4hWKFGS",
  "key22": "3MvgRo7gCBb9mKLVUahhnaMpFjb5QwpZz8jVhLEsGj2rXXrcLZ6zPZXijbpH81PxpygH2QEnJvMitcBt5CDTit5F",
  "key23": "52R3WHoCMB8xAahF6g9tLb5ZKbNGFusc61P9ojctEriS6KisTy7dXNVXRLy5hwUBoq49S3iEL9cwoHB6dLUeLao8",
  "key24": "291r1SC11n2UmNDFQXcqY5ezAi8imYhQxbunVYrSnDaGKhA9EgPWH1TJXdLHUWrJfnEuP2h5Jczmw9i4sHyvbE7H",
  "key25": "bmoUyPRdz5cjnTUh1L5tqktneiJDjSZjYJYWodH9DiWLwPVEviDvRNCvLrpgSf7QQ2uimco4znyKrqjtf4ikr9V",
  "key26": "4pFqx5YT2V9TuLd44YnTk7hRXbtNgW3iyACCDcYQe3879ctfrBJDE9GMM7cYimMHAxBs2RjhRk9BrRUi3HhLPobe",
  "key27": "5KLK7r9rqdd9QtEE3rUhpEXU9ZW5JRcGior17rjZsie8mkQ15qVksNWxfjGNPxp6A9DnXTnZeHDPRcHf1j1kzNdS",
  "key28": "5So5ZWBgRnLHAhCXMSHLzUrxdpTexNbudQuBQZFCkHQtmpwnyUxKRtrJ9Mh7f58mtxPFk8SLUUh1v9Bis2GYHryd",
  "key29": "5H54ZbemwKZdRexaq6AV8jpndFGiU483intMLoiLjbR96JBDs3djE7gqq59epJmSQ7U3ccNnTBtzhYXswfJN7aia",
  "key30": "49x1nQcdwVoBEu3SWbWeZ9NgXgciyRQ2SnLoq3F2hdwa9mKSLWu5attWo7LB4wqtTRhK63eHJAhHpNRGRQ3T5hck",
  "key31": "4nKTTPQmJ2rDPDgf8EGGH48GjJoogVtTYyq8rZyqrTUNJYGS6mTomkc6Far1nKUHQ6EmBTL6NNuoJTWNSNxeEV7o",
  "key32": "D363hVvCPMGHNsvGgcTPxUapFdG61bzhi8csavLTyYDcajzanjv2dwnmfCEppLQGQxfYFo4TaZCyG91HRYMZopx",
  "key33": "2JYPBJjKw6mRmsEoYyZ8VWnJsLfqG7o8nMuoBZDfVJWTffRs8EKbUw4F36PBBgVnaCs643kbeiAFWhZgDBNeeTUT",
  "key34": "7drsAai7jYc21CHPDXq3TyCvGYBwGVghkQCfQ8i41oJuXsRUkLFAWD4sUSxpuK2xWr5RTCEFBnsMq1q1c5CpXDh",
  "key35": "fDvRGYYRwPJcKbquHTFnX2Ajn4MQ6MX2SJYVxEZ2DfvVGCRxxN6cujzzKPe4Shz1JUAHN2Kdw6WyGFCe2KNx86j",
  "key36": "2pAcWfmE5cTT4XUDGjyo1AeeSV4udHBPFanxPEEf7VqmqDQk6QWGq9fQRfLgctKgTAhbzBiLaHKNxsSE5LY7KNa4",
  "key37": "4cVgMNJuvQmrpMxMo69xvc3HhGdM2dLaTmzFdXrCx3W552yzJQEzi6XF8Tir6wU4NrruKH9Ur8Fr8ce5eDrUZFUC",
  "key38": "5dJqmRFGsCNnNnMkcvKjUbpjarAuGftMDe9Fj748rzPJKJrxjjQPgNmyL8YhtZJGxNYGeLPzQDWHsdoNZ2nwCBqw",
  "key39": "4EPy2ZKtgk6vtscqeqgSfUXKSzXXdgmygz6sAwSbJZ3xMC7V5kw4twgt4Dtw1GYoodkbmxtnZYjZ5UHY11BHh3zM",
  "key40": "4a12xUHActbYjnb2uepMpWRpi6LxTQY8N1w7pjS3p6o4qQq69osR5ox1v45pBReyXFmn2iVVR3XxVCGsmBDK6orq",
  "key41": "JmJKkvx8PyxLHeNUXERvEzHpym2bzJqDm6EG6XrPk13UjyHTjYCCxD3xZs9ygbsw3DiLwq7tfp1yuZMoKYMGaSJ",
  "key42": "36D8GYWJec5JayP76RiJLB8rvEggkMtnDY395ipsYWVALc9Lui37AyazpbUTJcKvofJPGyQc9E7iWGVeZTJdDtPU",
  "key43": "5LfehoE4JiuuUWgkpmRWYpcdRiYooXXTJLDKurWyhEHt5Fabz4AicD3Ba9HDM2duxzLcUFfnWjSEhgkcV567ya2F",
  "key44": "25f3ZLfU97q584vaCgwqYhEWJHyyznH9VQHu8CgHFHSa9GjvJgmmRs36tB8QdmjiWJfxnFncsyoB84yJ8goknhYJ",
  "key45": "45j1RufMnSJpwJNgKGJcPTGCYD5VExAoBXnf91y41Dk6kV44ZNUy1zo74pVJT6oUkmWU8sHtZGjeKwz5SsqnHVTB",
  "key46": "4UgQh5GY3djuwFx5ez9aUCJnqVsqTg9VzjwZbc6Jgt7edfaRNPviEb3BJzEDYyCXbyTwmm3VbSBstBysUTNQ2pi6"
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
