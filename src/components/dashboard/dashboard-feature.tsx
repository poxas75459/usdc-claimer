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
    "5LB2VLHzbkSYeVvzy3wcQX39FT983MS7VPP673myy8Z5yRXHDoxGvWtkDQ8L9duPwjFDKFRm7VMekdsNAnMH22LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xpAThPc7P1x1PfPw3n4uK3EVQmaofpQMmzfk2XZPs7GN2frwq5Sbi3s3KGtV5EsRfgQVALBFxNW1mAxgZ6VHHr",
  "key1": "2e2tfk9SGsGfx4JgcS9evzQQXquP2diegx7QyWspQ6uXAQFZNzxG1PprDXU38MgCoBSVDByB1s6HV85keocDYJqc",
  "key2": "5zHGjeCGCTEy125Lq1EhG7zXPbyhBGKSQV4LGDLcGSFCPwg7sBtWYUt8Ld9dWevzmCrfN7fP7iVyPYVBfCAtbZtZ",
  "key3": "2CcK42wV2SUKWtmwxMjKo4xygoGXTrCWue874vf9P7wq1iJfQsSX69bZDWM8tpn6zJBr9PSZN8YjtruyV7nhmp9v",
  "key4": "2TnkHsmELBtPNigdfBhSX9qkJ8FTLobWWWVzFsXVhtuuJP6fQ4S3wTfijLnnzFycbWYWUttmFztKnwfLUyhYfw5p",
  "key5": "66Us5L4cMAMfzB3RB1SWppfuhbtGgosfbu9jLncjPWk7VoeqRPBajRDYePhL98UYpt6THw3Xw7kKnDG1Gg7ToPRE",
  "key6": "fgjuNabj9wmUP7iv7Y6fu29QZuXnUQHMJAFpY1P9EN8E13sWneJUUdFvBWzGxG1EmUmxtsCGFRJvApKuWrq9Zot",
  "key7": "wQWBKpWfZyy2Qw9iwfVzJ3XC1hBmvJHJ5zs71aoNs5hF1b1XQjFc2u1PiJpYXVZnCSc3TdkhA2dSi5r899FoTaL",
  "key8": "4J8J2KhgecXiQDZsA7ZDhivoLV4q2uF6GzJQCL1QoeW1tSCHeufuUKciDS8Gahb7ys72ZkBKpAcP2yaq8kKJ8XuL",
  "key9": "3hYPFZKsSe3bwRw5hiDw2rUTjbWj9rt84FeWTidCTv56KgiCbvwFPgpTRB3mQjbdzToPRzkt6HCPo3RhXS14EYMa",
  "key10": "e4k6hyzpXTf9wYzdm6v6GFAEjjMFNBtQm8fnFvnsUuuMEL3TL2MvBxzA4Qptnr2mTZMqsRNngvZy3uWJZZH6e6a",
  "key11": "5FdpXb5fYjBxjnPEVAc8TFEq3XnrEgaMe3croBEUyXw4fByRHmPN1ymrbPeagiUEiRrtBQbKFUyRPK6WCSDt7KYU",
  "key12": "F1uqwMoAX9jY7Non92QYR886MFdZx5HpAJgS342YKB7z1X4x3DEe73yLYTTRwpitEbLtJVaw7vAf3f7TyfMW7jE",
  "key13": "3S27qwnzZ5nNrLuUyuEruKeKXKjez2BirCh5ySDgdJJUscBTPrtGAeobbzZXuT79JpVjZXinb1XNcaZQaXpjUQfw",
  "key14": "4gmYZCX3BsY7rBEjDCuW7YVPBRkbfxa4tscdSSsHCp56JbmGzeGrTDE2dvGBMom7kVHZcNCrBn7Awj6aFHg2VcJr",
  "key15": "3ufpR3K8FXfE3XhZQ4Y9jHzyBkQUo62iRH4kXMV43pG1773W7NAKxMyVoutktaHsmW1DGEQJVzk5fnSqJ4m7A2sx",
  "key16": "5z6RxihuZKwnjTGAhWTN9Us91zaAsk5AdZyjy5SQzDxz1AbeDjp97xKFsx9rWg39PhPGZQKakSSeZNffsWcSPaZ7",
  "key17": "RkPuc7qJfPvhy2dm8Fsto1YSDPvVk2hxsa4TceXkguAZ3QaYtqApWE96Lhp9iHdbGW6LXAVSJArjKGpjo71zJvu",
  "key18": "46V9PJsup8SVqnJvFYZuxguQG4oocU6mBoNa6CqK9nduV3xmVQW5Awe78CaLTfpEb6YWcrPYwBr3xsUKxTz7EeyH",
  "key19": "353VGiq9gJ4E72vCizDjRuKBYTY9tv5GvF4RdMJtb8ZGfKN1uYKpvtPFenhT4UvCicrcD6wF98VHMsdzKVHb72WU",
  "key20": "3BGWuFZxQaYuE15txAKWa4ZATGhWoDngsA8yjAbWweKU3u4qKwVsDnt4dpjdKjSegmN29s41tse3SeEGUvRUef9h",
  "key21": "2FX6pWyxryK2bsvxXyjuyAfTEYYdxZd4rABc43z7h9HAQnSDnvCMgsGcNUSZQgGRxnLaht3uh2PFuxnL7rb3aLxW",
  "key22": "519Zc22Co9CVj4LR7sqqVBDX7gkxZiPBHVnR3CRbXvg1ik2MF2p7VDbWhszv15ytuioJFDECpseRdEAkTL1akoNo",
  "key23": "2VvYQ8LGGn5H8c8WFLJe9uiL9jgMGmteni6YB7BtnwRsSwiHgVDGY5bCYZVD3ebPbPe72bgEKYdZPmmUmBsRxsJ7",
  "key24": "Miq8XsDhStuQsASy2Hz7drnG1addCeGJYXV2XXmBbo3KP4nJPoJdPbzaHXc6NZfFCvWJn3LPuXJGcXgxdwbuPE1",
  "key25": "3U35XbqF145Tkdrkr2meqToiBv8An4pmorVYHtQzumjbGdWmB5XitbeHv2dfQjwvPAR6bRAnM7SGcw4PR4Q9mPoT",
  "key26": "4rmjUWSdauyJRz7vNZcibpECDbPVBCi355sQ52YHrpuYHWJXRBGJZUPLT4ot2LcfPdhkfKaqFDsazXPEMwtREiP4",
  "key27": "3tzzvNLNgsyMB9cGAFp9CupyVxjifRahvYtt26tYrEQcoCtw7YLMjtNJqSYBZVvjuHfzJCf271cNeAwvTnEXxJ1U",
  "key28": "4SWrfEJJcfMfvr744UvGseqzbLDuxnDkm8RuvsyKMLZLcX5WU657ueicbpiPGx82LBRXDy8Qy1xf3XjgiDhZVgHN",
  "key29": "4Q2hkFCtE2w3LBxt8LikPfqGdrGKqVYSGCkYB5gnrmou8QBv37QGv5sCHt3n2xYZ4k4kf3kBdNTyH2dLuCCiRbR8",
  "key30": "228kb5DeDjeqrbR3aJ5BiAEtdrzeRPWs3BGMJTLvaEjAkEDk4vSYhw2CJbyJA48SzCDUwRPaKfS7YfN3QmuhMS84",
  "key31": "46CrQjrPiTWHo1CBbs2VaLnoZFU2q7viyhToFN8txRehfzJ9YVqmXgukpn4WHsAsRKMyK4RmXSa61jUehpo44L78",
  "key32": "2kJnKCmeSHvkgsruA4aB8syyCjgzFQVWopXG6yz59oHk1mqt1UeEfEFx9K8opKRXreAgsYjt1Hu5RN7cRhuXEVWq",
  "key33": "2pvg2kuVp5oeTcj6yyTC3kEkDAaQAuFZYf1M8GmPEevcoJpi5PZ4o2UUjeECJUTjuZW1ATJWPNJPYrQ7TtxMjhUG",
  "key34": "1ggYhEUz8CwTTDK7xBfdicvcKpC2Kp4dhYW3MGiJavgi1YP3CAYTQke8dcfRuwLCKx4WQ6F3Rg8nZRQbexh2AfJ",
  "key35": "xXkQvEhMgvnAYKNhRQenx1obNjb4v5p9TG9GLKZSKTCt3LD6TRziWRiPC4JHY8RsZNH3A8aXbo6pi2YWAqHv2Pm",
  "key36": "5MQpcV8F1XPjJVqXXN9EkNCCNuwzFjmiDQLCjUsgTXQ4Qpp9Zy9Yj5PQzgAWC2Ks2C1mhsqTVC6di7Noe2eJQJGi",
  "key37": "43jQ7Vj8urnrALzrcSC4mBaeLewNEAaKswSsT4h6J8MWy3kb6Nqb6yB1CZNsk84mJULV67t8W7PqudmPQoMmeG3G",
  "key38": "44ek7excJWzrCvuuW3Hh44DntaxWgfCu5iWNyJAxMPWSQx1MyV4AyQLJR57RPJyUGjD42ZHWQD62xV8KbfVyNURk",
  "key39": "4ySCLZYM3LEwZCbHDvncMeD4WdzeBo5YdDkvWKr6ugmh9LLhSbCzxiFrRaJ1J73qH3YTZQDwuo1rxsvoa2rDMbT7",
  "key40": "5s8S1PnvUijwRxqJcg1h6wE2vPyTCfddhufU6qGmQDhGjMUN1kGVGhNggnvypX1JWxtHuQ6xMPEUVjVysmUtsUjQ",
  "key41": "2bCV3VUQbmTQ9iVQMUpNAg2iJGRmfN4jk3ipxFksVjmcBYMXa1Lxm9KU3KoxSWCjsaHnu3BfkS584aD88AsXgyiE",
  "key42": "4anJG6JCFSBR3cuJLEDSZ9e8ENW6P89xpvS5zyDX4j7vjrNK2dPSt1JavXsvrnpe7zomBtRZsKYoE32Bbi8od5Bq",
  "key43": "5Y381GNmKHeqSjRgDTfBngtiRXjZAwV9XLXYUfCMtiHFENuirU4kRhzzHNcTgipY6Qd3mcavJjYkFDKjUEfbyhey",
  "key44": "3bK325wKScAwBn3qtp744CzWkxgJn2PM8Ho64JUgSdEmFYhzunfrZNgDS6KkN6h4wZxQp65iP6ysPbZrNFXfrdwS",
  "key45": "4iP7dLE16GhQiqDSVBNnPGDreqG73jr35erDbfEM6C2deeja2N5UXLH6wEtwdcQVg5pfYPpnvu3W3W5xNozRCyet",
  "key46": "4dX9g1cwQvXsDyJHPKdwqPQNuqf6fi8oZrqpef5hMUz6NFiDRtuAK2JfRtLEW5hDzbDjGH1rpJQWvyu4FyyFV53z",
  "key47": "2zcxPDjBmYofHuUKsTf12e1Temu9Jn1xsxjT6kGfjKAEFzuBzPAR3h6knE89x19jxtuZZFzbbWZPtnJZ9FezEHa7",
  "key48": "1WUr9cjm4VyS48p93wivS2PWBX7pJFNwMZY33oG8dViWW841FSjeDcG7sE84uwMM4geXShqZMMpz2i4yGgub2xP"
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
