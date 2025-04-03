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
    "adyLy7aQtvuomKtnqpjWVVo8sGSbkrbwo6CYubg1QuuyiKKmN4vxtHKbYUctk2PZeHTXtu9dmrGsot618H35SRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1D5HXLu1Xu3YSKEA9gGXQge6YyHDDno4p2ftTTvhtTTrfDfRmeUhfWxNXcK2h8EZiVSmDpdMvgaZssnmZpDw8t",
  "key1": "5YY3a8KCnuTAt3VFVuLf8QZigsvny2By1oNsN31mM4oeDKsUeeweMn37b8F16i2jjqotVtJsaz5MQDPSY9DJGiuB",
  "key2": "5eG99zCpecNYBwQYVfvKeYwSH3UYK8CoNkYdbozJANBEiHCTT8sFddRDMpFRXubXVmtyxYxkZ5VDk38ymyeqaDQE",
  "key3": "5HPcW32HcwXTGWg8HMqET3hhSZtYh9tNtknxjdRiKkD3mXtWvW5nCTrLqgbPYLqvyViUPpZqzX5Qn66i7n7s3KUr",
  "key4": "2UmUUQpeg9b99naU2QTipjbA4P89T2oGGDANNTSfGVitPjxfsGF7kXetJK8dQNVwp9APgPiZWHCW7w8JVTFPDK6W",
  "key5": "V9Zh8xjBxPSBhnjpa4wwPmHXVxkNHZQ9czTeHSBanB5VQzPom6wUzRVBSqNrGcFUeMLVbVQC3TZziueRNrnjdgL",
  "key6": "5k1YqPTpFgt8XQpfSHRcPf4BggRScxqvQdXaTvnnVktzEhTSD9PSwpL7PgmGoeoDpCpy6Dj3RfCLDERCzHNmRx5o",
  "key7": "6yQVZtkuNmKkxr9uggdrR8q4QKMASsyV5W397986m9icnKksr9WwC29SSCavSRV1XRpULs8yGqRmV4x2Qz5JDBk",
  "key8": "2M2Lz2JMbZL4w6MZijJsjtzT1xWJpWqdvepgvsZ1dmwyci2uKa2WZPZQfgPEeK8HxdozqQHZHHHggXDUS9Ea3Amu",
  "key9": "5bdDdfEFS1gtdeXycFPoaisH366X4stmAHghjP4HqrRFnKuKgH5WRBPTMEyRHxqyBhCQoC2ej3kVhMusxwydy7u5",
  "key10": "3JMdTCPpoBoDTMULttg4MY9kkSt9CpJ3UWu3sKNMx71yfBuUdg8oKfvkXrN7Cht9E9DBajbZw77exasUxUMuR2Ae",
  "key11": "49yn1qk6PgZPbrbDM2XoVMnz8MiddEoXCNDEGa8hkcpos4U2pYohxhiLDchWQU2aax7YCghF8Wzzn7QJMUMXdGTU",
  "key12": "27E2YVjpnbTbKy16KxgPA2CKWMrp4azhvC9ufLkZLxTcAUMjdyzB4GTykYvujgFq6rYAsAFAH86MxGCmoDWKpvtJ",
  "key13": "4QNVpUfaBpUQoQsnoLK9yVFBQyYrGKFoLynpWSBjNoXg4uh3ZaXcEydtoAKjBy5KKriqSpb5gUvcfFbfBzR3R2T9",
  "key14": "4zFJJaWDgAFNAFj4D2dYK2kVfN1riWj9JuKhKhJhXifPA6STqCeQfrH8ox9nqW7F3MUFx9cWG7mKKEea2e2ELC3F",
  "key15": "kmZ174xix6AVuT5SCnVdWUU1qox77pcY7MKhMC5LwnyjpDDMhVfbrj7MYv1ZEyYqXTTyV1wf32AcGPZN71a7VxK",
  "key16": "4XD53vCFtG2apHHs9ifjdK9S9rhoe152GN3dpzJEAzBGahruiD8iJnxAadzoAWCWgcrEfho7jbKve3xCvxQWbHs",
  "key17": "5sfVhYnCR1J9z9rE6fhBUapBQfdipjamnoYMKn2eHffiWCc8KHD99MQPyPvuQK73kHAsvx8UW2hZ6C4QCUFrPvZi",
  "key18": "3J71Ho1ruWay8hX7cJYpmmgPKGVFibiNCbqa5gJHdtDMMmbnWdMoVLcwKBmsMcNmU1orjgcZjGdSUABafnCWb8jR",
  "key19": "55suAaLrwJ8tgC6GQzPdbPWoGHVTzthmgAunFisY8mBDFTSXRWJP6vDxrTsXWHjoomRNfGgp3yw7xyDSNXcz1Hw5",
  "key20": "4QcZ4g3ESdQs5Wkqy64CUdzwGh1LiGsyMG5miqxSnV4JTDvkCrgjXf5TB9jPXHR1MKyHXRw9bqtJ8ZLptrefAgPE",
  "key21": "2C3LVz4nQVsp2jzDN1PX4N2du9fiKaiRrZkkS3zJ2Bo73crjCJpKJ9k5D231GR9kSDf37CbCzYTnjQNfibE2KiAw",
  "key22": "33zZ4LQ4wom4vm4kfFmSN1pVeWH6si3d4L2esMKcFi62UuMAR2fty6e3nvoV7g3wHAJEyxPkh5fdXaaf2r8KcAka",
  "key23": "5Hotcqt14DomkxHGGEY8ytd2VduRZ1gWYkPVc72dTXa8uPqD4jjDuz23H8JuNEPHsdqAcZcJ9LJye23cYsjtSWXp",
  "key24": "64X5vxjyMsvk62zr4mvjpGdEc6SUPHP6gEdJEXqEKecq117jqNZTxiihYY2jXG8YA7NaHkF4TG237qrEsz7jRyo6",
  "key25": "5QZk4PzehQorY5zAxt6Ba9FRksP7P8XRys2QnsMH4cE1UZz14yNagCFWL88uuh2C5pv8JW2F9DqtcNbUYNK6YQZC",
  "key26": "2sdj8WHAj9eXDGgtuWWaNxora4mmJZPyWrsRJfFH77n1rWrwkSKGcakpBXTs1Fm2KsbZN1XEppdgnpeBBBu8RnfT",
  "key27": "3TJJ2dsYJovhm8aWCwTGXcVR4Hm9PVpwoD4gdmpHMPUGtsSHjZytk7d1jBdkbanq9L3WV42ATYDttuk6WNfGSPgT",
  "key28": "2rC31ibMZih8d473zubv7HiRPKhgyp83iQKabBz1ehbGyyt3gpqfz3726AZevSEJLmn7V12McrswcczvoujftpHP",
  "key29": "4YhZKV8vDAGt8vyfVLaKVE4AVTQvpwbBgBef84RJXgKT5quzMarez2vXHQ2kZ8ZpzuC9czKjUXXgHn5XN5dirdbV",
  "key30": "65xamP1gJexjpy3dyy916jTwCqHtbBM58R3g1DcdMxwnMVKcsN5uisorMj7dSC3pjrhM5TQBrLmD2extrQb3uLJB",
  "key31": "5TbbaBYZEW14F3MxHyaTzkD89Enqbz3XSzrG9ZnvieuWr9p46w52TvXH3EhdBfbUjY36CSB24atdaizEZ4mTkfhQ",
  "key32": "2qjEtJtpiHWpeGLUGSoSKQuQwCTDtFiYjbg48XGDf35ZCAhmYQ2VgWF7bFvDwpE5y69NyD6AqHYjYZz6YyhWSZn2",
  "key33": "3hqK5aqPP8KxYfaeNjdeYgCYMmbnWHaUzke6GVLn5UxzGWtH5kWKQMxnD48i2VMZjd5xGaJzaErxUM7YYpE9vmsv",
  "key34": "3jZtqYN4B2c9BF5QqgQwyg2w8AmK5WPUGRsYZtywpEXWPPckP8Qhg8ni9ehMKzrpWb1JNaoUA3xwdxHRupJAkiAj",
  "key35": "2pKEHRvof9xCnnvRgnnww9tbrLj5xMxLVC8V1bMp3nRrEx8W7TZeEpbhG459mSg1ESWxUDdAwtUWx7YhSaohFp1P",
  "key36": "4XRCe9cEjE3JBcBAJiLgEeLMj1NVKcQQh5WJ14NBA9ALe9DKRTjweHRJUHVzFULvhESkg6Pj9a6FF3h64JZxX3rh",
  "key37": "4z9VfNNaB5vXG15EqYoFumV8pw7fnxD7uRfvTxBNHp1ohGmsx7wmGUkzVtoTvco3U7R6FadXrc6Br1gQjSgYs7Ba",
  "key38": "54uxibrVMLpmHjvFMMdqExUQuTgEqXYK69ZdQ1tsAc44Rz8vXv4fCQayVAAxv4yhag1LKkEmo7stKiYq3Z7BWsUX",
  "key39": "2BMqmajQbVGYzE7Vbdh8fJ6UA98gzti9iF6xnAcGfMwDUrCR1tFvZNcA2TzcE4q4GvrJuz7JQ53qF1WaSHxLS9jm",
  "key40": "3aX1T6ADWdw6GFjwnN7Y2WnQ57oD3Dy6AjzoiErHYks53ZEVPwaPB3mh6H1U6oU2twtUeqKeXh9sANpb4yY2t7ew",
  "key41": "i1ynmomhoZExvmzaqVXwcJmk265aHXGs55nNS4sDgrJE71JcZE37LmUA3JiS7P4GjYNUdRyosNwd33Kdi1ZQKiL",
  "key42": "3CUD8toeXL547CNvVBS6iWf3Yi8qZW6qUmWpCe4meJpnuL8fpL9oQNGpt1h8aQprvQwNfQWHePt54JMTwLs3BZdG",
  "key43": "5UrW6eQ71wg4FDBTie1ydBduB9zApzM2JGqk3HgMbg4PbueD2ngVPqJNEYWZozWXL3Wo9vYuavXrhDDeGCfBarsb"
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
