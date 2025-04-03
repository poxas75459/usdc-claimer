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
    "4Fw22hrBnx2RUtw2VPEaUtwrUBzm31zAgPQcCFaydjWQAebomwVq214MyLc8u34aP158bkww1Hz8xmUiAoujZ6Zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61r9jKqKJL5a3UJAC5nq5gk1dLgD5EtPx8pAEPXaPEfmjiJb6GFcigxNSBh2TFZynhMP3rbpS147mCLozgwsVcoF",
  "key1": "2pk3X48zNttYtqnZa79tvRkxExnpLycrUj9tnMPWQhGerRXswVBPd9nbxU53WuvcZ68xRFkvoPoBpintUJgtSQyn",
  "key2": "4aRzjSkuY5Ryde9GbQg6gCNjFbbbTEdvUfCP8qCSx3SLeHZWQ6pSFcQs9Cwq2mZsZ9aWS4ANyPYTvGG5b8zxDWtv",
  "key3": "5QpJvjLwQrX78mMWuugv7rLQ7hzMNoAu5XuhFNBW8Sz4Yr9hdLLWXd3RR2xurLtSMqqURYE6bLaniFnartCdmmic",
  "key4": "4ry2UfXeEPf8TRwJYWSUcFNBTRUzYAE13gfhRy6cgfpXs5dkn9QQRBb8s51ZKgn7HypCWqk2mmNLJpnHKgoKBe8R",
  "key5": "3H4ceCM9HzdQYWBWWDkqUf6AiRFDWwCmhiCy99gzWbbcUvQtSXpRyXGR8dMspAz4YukCf3mF7VD8L1inpJk2bX9N",
  "key6": "4D5Hmw7U2NiWVXUPVcL4kBbT8J9N5bjzncfJzgNPW8yo14Fhv5UTFbsTkFM3Ry3wQ2YTiHPWgDSLPN8fFaRzAwrJ",
  "key7": "6gfCXcyJ27NvzerYpF3ZXAVH3XzZJ2JHUTRy68BKsPaNQGDzFnBJYxhfKTSH931h5qsgqC47fSqsfn6jLhFpE6L",
  "key8": "2RFWk1nSygvYDL4QdJ4J5q62SAWTGy1KWRp4VowrUSEf98h16n63RCep929K4tBJHLGwe3N65aQc8LqbR32BtuC",
  "key9": "3HaKRToe4mJVhNrRrXd6uCefejsjPqBx7oUMYwzV3D1gLkDRgoxVbFP9FQ7ZadnH6XRDjybkTejiQEBtZhWwSTYu",
  "key10": "5hvyTDziANJLkBgqo7GquHUPmjn9DZgUkxRNmEoJpj33rUmjDkZbrRZNRhioRwvwzLdT3SgYUX3trbY65xPoB7eS",
  "key11": "3raiiB5R7PhguM5cnRxbL2zXyQoyZN2CcQ31b7rhcu7mk84zg24NUguPHs9Yp6SsnjyJ67ih8URPkJH5W5oynxrA",
  "key12": "66pbrgBq4XhQ7Kr78q2yUxhfDtwyFcDzgimWB3YQhrYFceBXNcUrXUH6oE4hNz7XzkMyxxzjpwuQAiZKgVyb3WYU",
  "key13": "5RekhVxTvG7vZr19rgFPtGmFGBUCrSkUFSe9dePkDnUH3x4XgjGSxM6qc9VZDUZcuJotUewXRrJNBLZQXemDXMUL",
  "key14": "zUaewWJMjhspoQAChkStRpusBoXB6JPVbq9hicM2QgvovFnTBvVtsMiSvR3UiYFsXFntrd1FTH4YxYfWresaif5",
  "key15": "5F6Ax4P641iiE9TysHk1jv4dCb9s4Z6k76GfXATXKiU42EUsvDjQTNd1qdLGDtEyNLP6bHY83tPveKnfSUmR9SXp",
  "key16": "2Y6xeA1WwQWtPx4prpfZTDQNqhkTJo5EJneSLiMTZZuFq3Zg9BUuhBswtGAukw5CrkpjJbEMJZG3CXjg222DTwqL",
  "key17": "361dhxTtoT81Wq1EGd8VL462hqKLmvht58nKcF2Tvswgw7Rrjew457uYGjt1nP1ZuLRrvY7c3t41edkQEFHWyyDY",
  "key18": "URZgoFz3D5vouqLeJCySLPgyGkH2VAhA1VTcqNcN2sWnTBqALJAnZj7X7d2D2JCoYbcVdRswDn7j8JPJxQTACKk",
  "key19": "4PzY6MBzpRgnNSzFFUbLJziUkFCmM7gfQSMZafsJpAWkev84M36dC5fvVnE6QritXjHbsmv31NstrcRbs2xB7DY7",
  "key20": "39RD5qa2dorkpUKJUCmm7cfT6FxjHhqDLCGY2mSJydzKTD2HzpsrqkKHp3jwX89Jhn3AXa6RLLn5uURavRZ4oqUq",
  "key21": "2hGpE36SmcZFp97AxsKZqrqwuykG88krGcntgAawoZo6zCju3hXqE4G5upUJ66P3KkSowNcevPKHN8PurQVqG6iy",
  "key22": "2oacyq3eg2BAHCdzXhRPh5j8xZuEN79AGGrVExmqhuDFaVHDHs73io27PHyQHjEE3DmBUkNYZdbAHH8DCyAoDGPc",
  "key23": "61L8oMpRyy3mzvqsRkthegXMxEX14k1B7j3vhpRjKWWPmzJegWXxvx68p15QGiwjGHXcgrwZe4LBdqDav1x24gsT",
  "key24": "59dTvD839NAwaNycwUci5YTErYXKuD5V3BxRvjAM3ZdKMdSPFo48fm1VDu11wC5jfhD7Shu2HhaLA1kMuB1u1KYN",
  "key25": "4DTpaxDAs8wLa4k5YYuWFvsRpqePv6FJh9GnunBajb61cJoriiZUKHPaKBL1LSPMwegJj3FS25cLECYRKeehi1ZK",
  "key26": "46FanPbaWYv8rCgY9RQBuVJmWD47zbTfgzwQCwWPjUVbihX21k3y6gj78L35BCqykYyrDUKK37mFEjrc65wK7efN",
  "key27": "3d4LrbHHthzNJpLxbmbdnRw4zs5iqGECxa7M7uCPwLdgHoLtef71ZuABHpwrGkZqTG89kWSSf1TzPo2VbaZtihmR",
  "key28": "3DuJBX4Rk4WSwLJYACs3ZwwoXN24uFfySA4vsByv75gbUZDhLRQdvu6VJjfkGvrHaiEvD8GXh8F4tMP55YZTNDdw",
  "key29": "3GJirzXwDJjWC56WAPfpcKQu1Q4Y4u3RPfFiqSRnDswj5Gbtp39bFaNiyw5w8627hbvFDmKnmcGmCQ1HmFDvct8J",
  "key30": "2BFZSSh8S4X46qnTPAmqiRrb94Q1i9qEsJ9Y9wNVF9CmuzYjQfSmw7xXNdcfDhxvtSGZx8hh2xRF6N72CtcyXtQK",
  "key31": "5PG4LH6GmKnEG6ssFAjfHa2HgRjAHR1fVoXrNzfv5hwUxjNELiexamVKDBcrrfckSygpEYFVhuY6z4fsby1kSM32",
  "key32": "2rgX5HzMKQcEJi7imxYuBqzC6Li1aDDoGCA5zKN41uEPVoJE9trnfEixgDuRjvfxy2RWomfSFeq4EBjyEXcaMMeW",
  "key33": "2S5xJvYkFDKKLgjddjGVhk8MTB4NowFfBLY2JvUYmaa22FcXbh98Fm8Zg4fRv4UPqn49xuvARQnQp5uRa396E9tR",
  "key34": "5FpS5oRQnAfZtC3JZES5YFtAFx2Ewc9dEmF8KUP5s1UMRWCDDDMVepV9HbiH2kEQTiubFd3NfWdJvGfBTBdRrRE",
  "key35": "zA1GWTK7RK9DsWGKnUMMtxHG6aSNb5v95o9UYzQ8NABL8ysYo1xu5BSmGjVw9C2u2V8c3VPsbsCwF9e5Mog8wt2",
  "key36": "Q1ozuFqhTuARtqpExqrvofJubEiCt7EJvaHQSgAwSnV9i9i5tk1hUknq4hbH3QKNgoYsPRrRS5x2u35r8LdkR2S",
  "key37": "EeXrBPtdyEEViYTwibbvrhpweNzr3TCxY29jtKgkvV4LNJgyR4ciZodvbda5Q7h953Lt9U8Beq51JMa9BCRxbLP",
  "key38": "3paZ1yzJ5Ar5c3DiiexwQK7YYs1Vi3fb58KLF2gZcQFcGnutXwrvfyYXsAVeunWeCaDMgSgvoEnnc2mSMcSebNWF",
  "key39": "CgfbocTysVPgSDbGp3mPg7jByobShYWPhSb22TMcKTVPwn26pk4RpkuRMXuMYk1HfjCU5diWh7Jj8yPwGECnFsg",
  "key40": "29feb1VZrN4QKG4bfM84ttapBCUUHQaKQurJ5SBDvTSwhsf7ZpdjySSsJoHFanMjVHXyFC99qSDN55wWrDNTdA61",
  "key41": "2cdXPnsUJshaSZajL8uuD5KeWDt6qTsUb4PHcCcrgh9M1H6daeC9jVJq9CxuQUkbc9QFWxa7BtJ4DPDG9m5jNjqR",
  "key42": "5wcmKfdJCXgskKEHkY3xZwHgF1gSgKYB31i256mT2W71FaQxawZsqjKRxnJs7N8fh1pm7Zf3SnsAghAdtBxmTSJg",
  "key43": "5WzpH95PRMrMokfs2gWfc3AsehVwvsBM875o5QgdqGXArRKBwjiPrPHkC3ixrYZ4qp2tbrwN82xoHCkxiaN5DxbX"
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
