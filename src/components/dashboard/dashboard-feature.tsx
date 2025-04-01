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
    "64u2i7A4ce45FCwvHgxDj7vpzqY96UNdyxhqDG4FBv7Hr4Zv6PfiCCpQrpuxdaSXUqvoCFJZECwqLyfDPmRMSPsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hpGBXQupvpiRK3fsxSMVXi9wgxBsgqw9wMpxbPTreW2y8VNCCRs9gxeWxvT9ForAz4Rqi3sNiYWU8M5LR1gYbjt",
  "key1": "3xkSSugFZ9pxVQ2xyadBVxTsVvc8v3CmvfHS899RQZYfzjaau7E2S91CJrDA5nkXYE6RH6ocMeeJzrKg8YHfKzf3",
  "key2": "ugVBMpPY3ZEhpEuA4Ncy5eHjAZE2TmNVBLzCpkMGarNb92KjXoSSRpYVi61mbQudHc1BXE4ZyTPcjQNwURoqVBS",
  "key3": "4fYcnsBCxcq1e3mdU8tD3counhZYPhmJcLYi8bJ7HakTHKBCyjiWDzvZSHHBVU9VGHWZPYafQYEwW4TzDGh1o36G",
  "key4": "5LRMcNJfYEQ9kdFQ2V7mHkrrt16biAMgzsVriitSDPfxiwBwjs3HUYmUvTTrXjz88DoezupQoKSB6Dse1gkzAZRH",
  "key5": "5e5y7V5AjQPsRW9RVdBQrPWGgRqGcJZSs86iiqxah44VMcjBa5fTuviEdtw9P4RwZqzfcBY71t7GiVekAYohqMp2",
  "key6": "5BMaMApurckKpty1T4czG9JT1vFYh72tsYn6wmmHMU6KcEnspj698ovVaze8GKbmuzgiMcW5HCuMSx25ASxjrbdU",
  "key7": "2hCfzUd6jZZqBMcdLpuKZdqhH6CbzCkQVeBVgXTYXyu8aB5zgGdeYtB7BxLMBkRBLajNi2MXD1Me199ezgrHt2ge",
  "key8": "4w2zQEvoD11cQZanQTrgTbxpNNM2UFwbMPUaXkR1JqRoU4tKtpbiBaDgkBY2HiC3EHupW23KBgtZgHpWnGTVbmU3",
  "key9": "4iuP2Zx9uLPKMxmfTN2FzWhSuKJ4VSuSGsHuHAqi2GZBgYnMmecuDDVbuZe1eYWnqKtmPRUvhLCwJLE2wQ1cNh1U",
  "key10": "5XPmrXay614YSTtAH9sUqPJeF5FdD3HqDvETrai4PuvPCUM3DGEG3ETSMGwW7tiJKGq9RN3Tn8DLQfHBD6yhmJph",
  "key11": "K2EXH4Cu6dAJ6Vht4xLtKcR8GahsUBZQ41Qq5yr3pxy5X9tZcoL6M1pXxqk1jaTDoESAAWe1idoPUxX3zxFi2k8",
  "key12": "5ydxpTMbT2KCUKVmWmeRuJSykA8Ljxq7pu9BPkx45grkN8W6cg9HgTPXWyFonEHuc937bEQuJoZRKFJWyTRWE53z",
  "key13": "4dVjv5f32pt3viLKCTrL8FnRraJLSprrvTuDKGU6i52HVNnppUeh9kXgQMiN44imwNJ3giSp5uCvccuUGhJj1ykD",
  "key14": "26xdaXDCCXGr67f1QeRkLbGGF4HPBnBAcAw9xz1sF134rimR2VrTaBsGUZ981RsoVUNpgczwUfyMj5UvCNjaEBgo",
  "key15": "3ezrWugbBM5imd7mFGSRY7y6Djx1UqZHh7BU58Z5xuJtwf9oWXfwGuoKyAkacVZh4AFyAUpo1geszyYGm8sjT9XE",
  "key16": "5KV4bqSpfzpKypyY58hWmePFauPvBN2jijxjUhwjVPkmQmtT9u1yc2XnMXjt2L8fUdyeiUiYzz5W7ZSzuyucWhQJ",
  "key17": "41RtYkzjGqzx4wGq7Unz1xFxLBtkAweAh2wZdZXQo4W2DYZqwD2gGGuunBAJ7Zsjo4ADmVidJ3BpdrQT137DXjmh",
  "key18": "5jGbWCULXWz8NJSHGy4RLG81ZkTsbjgs9VQniX564eqqVNvgTt2cHYbkpiWvDyYnKX73rzYvpj5HxdUE4pmRPokp",
  "key19": "3b9EVqeEWBH7tATpe5c3VZL5DABHXLEvjmGqW4sdVLdH1voU4PW36is8aboEXrgh7fTrHwjXVukL81zU5Faey7na",
  "key20": "4XWFLZT3C8o3JpYqypcoehZBkndxS9FnqFbnatzesxYScM6S5qrzi5XdSAEoXbgJxBmRdFrcMo8Fscz7zeuxZ7TZ",
  "key21": "5HAkbfTLnAZkeEc6NrSMQe7wBwoAZaQYMX1gYophhgKMQuJWXpNvmwPf9eeN9V7wUk6JxoeWizPHKxNcNsRyJKSg",
  "key22": "33tLML6A5m1kicXDFwZf6DGuanww1F6yr1J3Cwr3JKhJALauEXeWmGrn7TKSnJmPWpUnK1fmJaCtmt7UP64DdPP",
  "key23": "3LaZ9SjBhAf75r4ndjh4pPqxEGUd744yhLU1mJCE2XMX5zgUu8rr8qe8k1Eeg6QfkWpT6apd3cgVQMZPKrByRFn",
  "key24": "3H5CvMzdxq8CLLb2iUvs2p7MbQKV2MbA4puso8LsSbVJxr81op4S283qKDXqYf1G9Uy5BwURTgvka2aSwMDEzv4z",
  "key25": "HBae8j9yrpg3oXfu4rgqnpA27psWSAxtssKmxCmkza3dn13DCmokegSb8EhA4ZJvGuY6hpYpfgvw7yDwh5QYkY9",
  "key26": "UJVnh6wXvafWBiHzTut27qgCzjMRshgsSaFZV7eitjWpcxzR7KSKuKseUGHbezN1k1eAiNvaUV7RnhooHDbFBYP",
  "key27": "3STk6z3cPnzKjoZNcK7k4GmqjF95ePMx6VygridfdDStkK2qfKZU3meQcHnbnCUsEu56Mmfxg5mWc5MU9vNNvi1k",
  "key28": "2Qsqd6zT8M6DGCWLJ5KFB7h3RfQTPquNka4q212WoFVpzkwGx6GKXknXt5psQY7Pf3H5TCziTTr3xVUGYk9Gzi6t",
  "key29": "2FdPeRQzuhPUri8Z9YAv76CpMGoBXUmnvcjVGqt3yBLSFoduUwnan8DuvTfUDwabAZtQVuHrz8ajpfUP7ZPHh2PG",
  "key30": "2tp7L2PJqFEruyCXHqoK1gu2E9Ho86BkVFrV13GKcKzHCKMDbLzKro6herj38y3QAF67GbtEPRHq5UKF16MCSaAG",
  "key31": "5nTQqQtvfZnUrMxMJCbacCHhgzFXv73YF7GjZm12xNYGCsnMUfLiLEvVDsub1itg5zfYdNuBLQhNCrievEN21aC9",
  "key32": "2gki9HLnP2eWq1Giv1rcfyoye1zqVxwWJn4FApTXpV5aFCVhVKznQfWJkQ7eDLEe6d3uZkReZwvbNRhsxRBUe639",
  "key33": "4oaJiQHRBz7EYhk61wUp29AvHbyvrMj9KgCDuJDq35HbHWFc4BmZ8Tp7rq76JpaRFpnhk8qx5EUmHiz6Z3fpt2kX",
  "key34": "5h64kUeyTMdmtjvRNmT7e8qwyoKnSywj26atuRtgix6Ho4j2nYzDRVTywW19UiHmqWJZrxniohY9aqyiASpNyvS",
  "key35": "3M1SxAczoBQn2dnPJwBRofHQptzrBhbhfYzR491BU52TSYKd2ZG7i8KD9aMXdzcVxHvT4tT9zgJNmffwjExayZvr",
  "key36": "3JALYksdby8kj6oWThiGj47o11SsEjAKHizS4guARm2529xNGSpXWkj21xLdPrCeLDmqzzwr4UqZfizEXr4ZLUJy",
  "key37": "3nB6sLe3BGrCRS7iFzkCDbSjvMajLx7hSxC4xvoCKECYtp1DEkuStyKyCr6Xwj59jqP5oGH4NC8R4V4nydgFiCCE",
  "key38": "5GpSC1y1rKE3T4MC9Wma9LbWmAvgXRQmUyicgYSzYUgAT4JcQm3zgcKE6pPAyShdHTawotSCCr66g7eFsxHHE2fc",
  "key39": "243piXoCRTVYFiLNxhmAHAHX87dVQtCDzfVKWMrTSdeDFH9Zu4NJgeVh6yxjPE1V4PtBMcfPnafZ9eso1UikXhHQ",
  "key40": "2CuCjsBN55NqjNUc4WoibghDaTnnEdb4xwF8NtgJRA4yvii6Lrbpd4qHiTpCt7QQDXfnSHNNscLizppaRPJvRhdZ",
  "key41": "39RQhTJdKpArxBXY7cDJnk83ieJaXxY9G8MgqMu35mzqXFrwabmr69vVc7iiDjoJkKdZMdNZhxH2frrcJ3bADakk",
  "key42": "59z7cPJ1DWoNJnQKHWt71S6Ja1dvQDJCWhWS1nPXhaPjqvWBofbXXdR9KiGhmwokQLwEakhye6kDAtQDKN1AoycD",
  "key43": "4Cm5L4YaCfcVYLAAVoBdYeUbP46yoV2MQF3NjVcVGo9x3aJqpfeVmmj3iBKZUZJBZYiCb7LttAG2zJ7fHbHAW8L5"
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
