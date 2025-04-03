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
    "3kb325oCoSTk6Dxed2fVXVYGWcLvAHuC5auBfKUFwg6DZJ3kvrHNwGhTU5cbNxcdsuh3tKDQPF7ZhTHHiZ9YwgBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zC6hQnCdG16vWvSQa3umktmdy1t2f958FdV6bh1uaRnqNjhffE7LGhGbftzRDaC77AJMbWLt9j7DK6vX494bvt3",
  "key1": "KGCXJUhWsAuB673EbHFe7ZPsNauche4FG8SXcuf1vfne7L9PtygSpRqxEXYeDXTWZoggLYUvAjoSQDRxzk3KpzX",
  "key2": "64Ybch1GaHCD3hSCzVTmE2Fy32ztxdqgqqcT2R833r98kRFZG5P7jFzSkwt4PMwMkBWxDV7pAoELZuEXhzfwEbRu",
  "key3": "4Mr6F1AM9zJpfhsyWh4QzFay6u1Fv2bve3tAn5M2Vpq1pUzX8aL65jY3sR6cug7KdyNPRLU4GNCdpKSLnPeFUak4",
  "key4": "4EXPg9WXtqmt73LRnnu9jeSNxc9WkdHXYxRn5H8DGzk83BbcCJhe87mpBNWCr3z5NWR4n5jRdXvZGcFmZh853K7u",
  "key5": "3ZSZpG3ztAYjRbte8jwAE2UPnN9DQAanPMg3HJ4MfhS416qY7UeZ9FPKKdiK3EWcdhzuNNCTKv5V2seki4wR588d",
  "key6": "xDMqPC7vVk37H5A8CY1LjqLf4yBat3HfWA6V7Bm9owMDLVwUTrud9yAcU36HYQ3T8hmXv5tLep7uNkv1EPodrp5",
  "key7": "8esZhYWytodUBY4LiEhPmb4UeaAjkC2zo3R7bJRBuLiMKSbC5W3LgLNpNziWLcA4TfRgErbbrveMcey2FiC67d3",
  "key8": "321YNHyxCZMscqexhUD7pYUKV7ziDPHFS8DWFdWyQbJrBNmPKTMT187fHyigjgpechsZTuxRjoJ58X1t1btFFmp5",
  "key9": "3VtQK38Hapvk21jDQbhJN3dGhcNbMT4YuafnKBY3S7Nu7c3hweFKHCj7wKr3UYMevfcrQ4bkd2ZBDFeNwEoY7N7z",
  "key10": "4BhDd4exmFWwdiEp4tSLCo8ryMrGoG3AX5W74ZLkEHmWdNtxjt8Dmp9bFc5nABhwUJGUSA69F71Qq9g6gVN4sqwA",
  "key11": "5y8rM7RsZhsnHyJKEtx8nZWjKpfeyHiiNRUAX7S73C1nxb66skt2ejtBGV8efS3z2raimqWEUAH6HdRCu5eN9dzo",
  "key12": "4QbS2ddWUCTSBQCWvWyjaqueCgd38aqNhMsxddWsdYXogD7FRSv1QGALmGG8pfaqkJKLigkq33o5aytsDv7HsinB",
  "key13": "4sHFt7ZqbDLxvbvp1MsLkC1K2SWG4ErZ3VYd13NwygjyYPALzYjgvNF6uXhy1GmdiNPntjuVpAcdZqden8fz498S",
  "key14": "3Bcnq4w5QAPm6PkSBeMDMNBqB2xoazutHKyX88XV8zviTh5vMccVJuowDAhtgPvvEGTuogepdMN9hC9FcPGoJKHf",
  "key15": "34uyYouE7Sc5Mmeb3DHN4J4DKYpgva6qC8FeyFKrPxDjek3c6Q6WcbYiLM3FHyz9tirnyTQ8bRWjn3Ke5EgrugSB",
  "key16": "3XZ8wPmYE793rPX1hY9dgXRHFTP9TLqMvdMwK4MD32yxmtia1egMyWPb8VkaLrS13s5yrHNtSV6qCU34ZeYPcK4g",
  "key17": "4DNHCUNNpB25uQXLJpVfWtfvhr3vV5EBypEV1KqvVYHz7TqEEcE2uag6iPr1Q1KyPiq4C6Yd4afojGE4Jn6ez3Zb",
  "key18": "5TAjcpejdvk217xjS2WnU5dAEMCCJaQBxhHoQWuHiTLneiJiK6YBZ1Nt61VGXo1x3qhQ5TCc7yLaWCDfuRsxsEhb",
  "key19": "2KFJ87ojLokHnoFUoVXejfWVUZGJYw4Xkw4fd8p7yxxaovd7LyYgeikY8A2Rh6hz4JdcWMeVJ71gdUz2W2ia4pnp",
  "key20": "57AdjV9xLCSfMvcnGZ6tfYPt83FLos7qVsfZ416a1GUvfSevNj8j3Anvd9Xtg1znQv53ojfUFp2Xm71PUwruVZZn",
  "key21": "2B8Wv56aKiofnfhFh2r8ug249BWRMAvYSpRykU34wzMs9QZ3NY3cPBHLzo7CT5uv3MCKAHBSPk7TksLdPPEfGGiT",
  "key22": "5KWi1mPgegU8hQpcuFef9czX5bZ7gM91tqZv2jhTkTSiC38WauLYVN5HWQ7v8oJddyD85ZecJWudAyD8K4zUBMTC",
  "key23": "2aBn3SQfBNKGnKfJ7v9jPruC2XEa8QnN79mCiuFqBmLZxd2vD6hfeD1Q2sXwksEmuD2iHEKnqXVRpqQoMECk9w8E",
  "key24": "2enTmxZ39bYMccApJ4dVDHcdtn4JwK9pRHq7gjcX2uT29suaorxqVktLZXyQVw3EU9MykJ4NZ6iQJpbMQjF3JBQL",
  "key25": "2DBVmrm8T7bSjgyrbXqCkGKYSCzn7rNDipZL1nEy2rADEPvy2BtqW91sTy7nZ8X1xPuA3PSMLTcUbsdcVFdQJfE",
  "key26": "3Br6HqMvmruFQhsiM3BGAE7nAuBwuznwrPswrRZa7HkqKQCBYqFM5A4SytMDQ8mLrpwkY5wqRAWre8YecNArMSfT",
  "key27": "5iUZhpA9B8DMuxieqCZaDoKWMPvRz97HtyEjXgtk5XWeDag9VJV8kUohgDB2V8f47jfodCZtLuN2Epkrpso674EF",
  "key28": "5CaX6Ay85iUEGCvV5AhFMPCYQN5QBhBcSUhJad7pj3R9EgV4z1KQF9HK71meAu6rR3S2PAopmSRdceSyRP8VpQxi",
  "key29": "5fAGHrLF1HoFiYdC874g7yj6gJoJTq2rNd4sA1siY4fF8WqKpxoRhAS6VZ6P3GQxJNt8sE8EXPK62sh199Fk3uec",
  "key30": "7ofdBTUxubk3mjoXdp6ufsL58Wkn4B3ogawKYrhsHyDQVqf3GTLYCzjPkjSg7J1GGF7gQoK91qZy1yiZ18eYpbT",
  "key31": "2hLpL9rDpY2r6Yhmyib2wrD79K89a9Ky9d14zKpqgSrunpdxiWi8388FQ575TF8AutXAtHp7cDXs4aLhp4xEVqMk",
  "key32": "55jwS5LLTrwjGTn7JCWf5AW43QgkMZ2obf9ngvPUKCBA4cov7zkMHXmkPSQUAcvsxMVd1bhEGy8KPUZ1t31fgHhd",
  "key33": "21p1j8NxYW51VxT7rkUgmkVLNruhY9EAANLkhSF5pnSj4DccdTaLbCGhKbwwoW1AmnE1Xqx899KpGdHtGjiQfq2F",
  "key34": "2cbPBwZ1L72BUo1EvvFJNRPSFFCy2M8JS9yQPBmcfQnqHJV98dvuGGsXQUbyhygn9HAKEuXuSuMcgzyLuocTDwDQ",
  "key35": "4sDAndFEP2KUMmuAAcwKZg7VjNhNrDr7ttmAP5h8rkzp7w7wWb83bP4GH1mFc5dojPpjsUG9uVB4fsNdsj5uQBUZ",
  "key36": "Wq2QLibTn4wF3VymwnQ3MABycTTwv3s4kDXxArdku2sxwaVDAzL5B5YEzd4Mb9aq3guHao2Wra488h7ASoxKgdh",
  "key37": "5e4KEtZv2KJtrdFFujpgV43zaEP1GMgE2CMxd4bzhY6iC7nxzWfo7duvmpNVXqKRqctLmsW4UC9YqGSKKfRVcDG3",
  "key38": "WFF664jJrJnCfVs3kkLGma8c6FjwVC7esQRb5cZVQeBen5JCDwha4hLJC5VKqgHisnhcuRbDJ44kMbMcYTsYXQY",
  "key39": "2WTiKW7L7hyVnMWLTvnXU5VYTeZ25RusqpXAau1wVC73HHCjppNSceGv49a8sWYLhhLtZuEenrZJdnYEWNyRZnnb",
  "key40": "448w9K8TBxFAPWPtdsW5C98GH2Hqma3b7qZkNkdhtSwTm2gE36pp5LVySzGusKfQqbUTzPBZiLU9xqhQdD6xL7TW",
  "key41": "2w51Cqv2JkBX7mQpiWwg6WsfJP8bqtpytj8wWg6LBSzzDmqzM2xvHruXpvJaezJ73GkZwxhHmXAnvDPcQRmAGsQS",
  "key42": "EoZFREbFNBQWE4TPkHnh1j9z8LfHEwweEKmqKR9Gjw8dA1FBpUL9Vkmr49gL6Hx63Us72LrMpcksmt9kD8qbBeR",
  "key43": "5By4uh6iukSUvCTwwX7rH2aGJpAoyE34ByRWx6JW4kiYgUFz6Bf6gSboP7S1HWXsYQzFn3eRuSDRtnjCs6NoAEUL",
  "key44": "kvvb8zq4E2vyc3rHMBTR2SPTMfLCzaxQ6PB6dyAAW4WXXcGDHkewURHUERQVF9CRC9yGErBy5pvntDMPmLvRhxv",
  "key45": "uaR5yfF2UWioozfh9PFtTKiVBdKYHoz1owShEsJecCEEJf5JDiaCbfLZ132Pm1VySExVf1KWJsfZPAtPEuB3CAH",
  "key46": "25LcqNJQsbDZDqpDbkTEsW6XyLbMtTH6Fozbo8K3E7j1t57x8jvR9G3BuBtSCs3FXcH5F7XvhB9omy5RTNrnBZXv"
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
