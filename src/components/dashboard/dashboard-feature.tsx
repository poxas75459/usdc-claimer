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
    "4nPTHtja7NwwxZVuX4shMbJwoC3v6qUfV8mbtQLoejZBbdp3wQM9ZDwSRmPxjG1QmbWd6k8J4eu2CFSX6Kt7NLGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55sEJ7wQ7DKGKXqdPkvvbjy5igUFNYDQGbr9JgZQYG4eAcPNRsxKngyLyyZBnJWsNEGcP5fUfMwLDv6e3UAoRH1y",
  "key1": "vJfgbVZ5ifX6Kmhzrqvgwatf6jjDTS7uZfeYcbgKcTqQNhq1zgFbBtLcASdG1zJmevZvAeeaHwmDgKURB6gVs9Y",
  "key2": "5B8f5qTudBVSPpUey9Ks6MfsWmUoAkvoTUG7SnHgq2uNAKD4cUpxqk1Cip8a9GTpyWhCfTLSHwKihUVoT67xNxEx",
  "key3": "5tqkwA7KQ9KQ95jyuGrmxmhRyKGVNykEQXNY2AEZZsWSTXt51Y9pFY4s1FJHAoWbCBuxAfzzaUDCXdV1veapAty8",
  "key4": "j2B8x5TdU1BJUvrTxLGrXv9ickgcWoDHD8zthTtPxMZmCfXzrLmJxHdgwCryzeeChed4CNTESqYr24M19wMbBqb",
  "key5": "4ceha9ecBQYWumkyfqGDaQbWvweR8EvA48zLKKPc9hDg8oM4uTepQkcU6oGA8W1PEy9TqVCwQbjr77A6fdkfXkyh",
  "key6": "4wkdJYVQjjeeUW81MESE9JHzAZUyty2bgHQoX1JW3bs2Zcdq9TRVsZQGfm1GwaJ8YnjQUk3sXw6jQnvqct1GFqSV",
  "key7": "3Ct4eGcYJQDzy8d7Rk5bxDyDYtNnADGSn7mGLtuQxtipxPczaUoVUyYN515ED3zfhP2nveBHKFf9G95fmD3JCAvX",
  "key8": "4rNv9EGd4XXvLfjSMZb3rvSZyuZCCLpGz2LNRsCTFDVbmRkPSwqpRSd4Xsktdos1hLLowYBXUBjHz5ChBAxymcTn",
  "key9": "4KGKpkADkJKL5eUEF2PauHcXSDWyYUPy3gZtJEkC2ZwGXvQh4S9jFQ8W8zRXcPH6xRfwWeqRCWjmyDsHyeCcE8NZ",
  "key10": "5bFe6KdW8WckMqTB7Acw9TPybwAdZiuVDkzCtTGeLKwN1WrwDzZuqEpi4DTGWyfUo7L9D9Nd63tW64LLMTGQeREQ",
  "key11": "EyLCU1cdER6frsDBsYHLtvL4reBLFNroxv2arLVzEhfoe7xW146HpjUuaqAj3TWjQK9JEyVy6kYXna2JQGkhGr6",
  "key12": "3eHWmdmaTG8q6st1dFRcU8Zv8KcfRdhYLbXuneJ6bbSwJrM6Z29w9eKEr1UbU7z2YkuQHW31k9oDFX3aKvh6jX7i",
  "key13": "2LjGMgXZgVExRWEmPk2roxmPa34zbNHWfkmitCCuDRbJKwStG1gm5XJWD3T4xdEYWSuzJbwSbmKxhC2NCU29boy1",
  "key14": "eWYuKnk8CRLJZZSQAY8WT6XJyC8A2XHGgYtNXDiXJhqQsAQD8Jkrv1BSVtWWDZgyL8WmJnmFaW5AF2tDjCCYg6M",
  "key15": "2LnbPz9J9fri2k3EgtBMujUrtF3zHPJc9oTfLXpVK58TvgkvSNLwMvkzvaN1xWtwKyQ1vuDUwao6esWv8tnGzYLY",
  "key16": "4ydUdNFgmKkXNt3SkJXMUrcMraRLiHkutFPoXTzEfNeqg38e3pAw6RwYphR4zXZ1etKZGT2BtKtoYksh8fxMAq9Q",
  "key17": "4hFPHh3bzKz5AovqBC2f9rDqfXp1CU3KtkE1sANM1hMG4s57J5PD4tYpUVQ3j5XTw34QX4k1MX9ooHSGsbtmN822",
  "key18": "iFNNGUKkr8dfGaMn4SKzm3T7gYNq9YvNGnvXrDykzcw1WSk9AfkCZKhTuKo4Trh7chtepxRaAFD8wqEEMYJRqXH",
  "key19": "3PtrCPMzDzqKDDuJvfrDqkfPTkkiWqPSXKseV53RQqWCoaPmap95LVM37ndNHPvRo6G1qdkMYKKBsynEkVxTE6iw",
  "key20": "5TKEf6CrZ16Wz3o8KDxNSSxxnWevMtSJYQojsvxMpW3QZnaoNXf8meusv4ddnnFe5hgn9u8v8xVZkg39MXT1i1x",
  "key21": "3JdtgqBy7EL8EVYpQoX5bGeXmsjTLpLdsN2F8Kj1FqyaeCXWWE6toEff1Un53ZPsLsdZYKaav6eduV9LrqmBZXPS",
  "key22": "2zBUyU3kso3SjcvYZr54RrvgN1NTKo2FoaGyefBKsLV44wNP3sFrpwzYvjJztgw1xwij15WjKRxNHeRBhqi9zKLX",
  "key23": "2QtXGXQXduQTqtT327ZfmjDMCocrxjVVKQbk1s7APG2T1JxXYiDkgUJs8NoC3XLfBerstcCyyF4NssYiRDnndcny",
  "key24": "3ampQiQUzsjmK1ezHD6favNQep9TMXBTNJfmDsgZkXtKaNwbnusWRYM4WbxmVtr34YX7s37B8ZCF2AtbSh1aReCC",
  "key25": "2ZdoAJX7MehtfkjxFaxcg3Z79ghuMywJnaRzMEizMVN7URYeRgGn3znzZ1nNmekoWezgecY9B6fh4BM8DEy28PmS",
  "key26": "4sMMyoNtm23KQJfaDGzCRfhLtvaH72JiyCudu3oj79QnAsSTjKg4SPeGX49kun7CbXUGrTv172bDmmxMmY4pfQna",
  "key27": "5GadeJUu6UeRJcDnZiHtFTU93AbXMQpDBRX6xYLgYSXQJFQSN4nuYStfLM88UYKRhnHPT9eih5eGpWrfpqQmZDyj",
  "key28": "57YzccFbutVQsWYTLcJXHpuEExjU7Q8XcuWUKGbEq54PD6EZmFsQMt5xa2KC93eFS7D275kG2ZA4MveufWfuEArb",
  "key29": "2kmBjYxKb64FQ2JQkdB6dr5inq5H4ZKVBv89qWSSrhMsHiNAACLtfen7zDcgoY143btkwf3HaVfQxAPnDdBcyhMV",
  "key30": "5Rx5EULZhJ2BU8aKZzz9j4GjBtYR1dL9f9Vai8UazyLCXsx9aEnjXP8saKMPAw74ZDsutxHYJy8jBvDy1pijCjTR",
  "key31": "66Z6eUEyUrB9FLkvavxYiRDCrpWrhSdYwFcrMAMn4UkhZRaDodYAr1Jdi4FrsofhaiA2PonzucdRQ26wjoWfU9VY",
  "key32": "3Y5C1AJ4JwV875GTQe4GHRjpT3obub7UDgBPfbqAe3MjuJz4fNRAWUid2uwtBqN5gERpXJwjkhkckhfT7knbP9KD",
  "key33": "4B5rUZaRfcS4ivnNgg4XTQKPNpaTrkY8igq4TRhqh861QWFyLQ1XfEaGgNkK4jLV4BUBDCGeUVyEmikVgjJH9uHh",
  "key34": "2btQTvF1QDaptvvCnjqnZgysESTGsj9XY3ZNkqpkVgejPfMmAyUF2nGmeRpfmTXuh1uxZpcXKgzrd88YB2n1ym4b",
  "key35": "FobVQdQN449myCYsKkufp4qn4XqgRVm968dnBTcnC5r5MwFLxTRep34AWmegT1bzwcDiXakFNDMN1kbrUmAbJBs",
  "key36": "5oByxuqzxhiJgKHbhUk9FcXyHjRku8ATHF6V94ftconajxhPj4wwAsQvEL6abDQWQonjzLd3rVRV5LoLJdM5Rb8r",
  "key37": "2wLvoTieMCYCQXdS2n12imQCyBoLeY9aZDeMGRV9HqE6evAx7NL6UeeS7J1b8ZwjnwNSfJTSAZidKRBLxsp6cLSr",
  "key38": "55vHi43xhtQ9QnyjbUGdzSULLvbtLVRZ4zCkwYKYQYhDLa8feW6NBt88vQg9VXvc9qRx7Yytwauvck3A1ENRMUHn",
  "key39": "2gDkEMf26j1Uooj4yZBf24iQiG1v4QHMAdxyvtwU3Lw78D9cQdvn4ZLNvYDtiRXPdiZj8kijCBMdpXqMDyZqiXNi",
  "key40": "51WfCCZW8kX3KopdF6HW48uH8Q3EAe6cS52pYZwk4KQ6nq5LJtBY1VJVYfqnRRAGem3ZAGRwomsK5mWoXknGesUz",
  "key41": "5cdMBBJ2TUtuzBmNtaTfJ97UfNiTCr8KrwZcjb2645hXWyRq1brJdMSB5hJy3FxhSs1anxYkrdCKKJo39dwpgGbh",
  "key42": "bD9FZoVdDGU7Ax3qPmJ8sd6Vyc76UyFnwG9X3k1o2mNSRremU6DzpVghapwjGozXKtFaucDDK62w4j25xeRuU3u",
  "key43": "2fYKcqgMLGkUCktYeHgCZjH3EnRRZWnzqLudYpJ3QoSK2ap4LBipV2GjavvADuPy4RCoUbBPCnQNXy37hYTkv218",
  "key44": "517NuVWMqVvP9WEoQqPdzizBx8cqnKsYHtyAEcCfWvc9vu5yoJ6KfFF4a9CLBZfyjjME4sicz2KqGxcVF8HPnFFW",
  "key45": "4M2y1VkGjGjW5sRPrDVFTFBGn4dMES7cBrNzb7qELzL9MfrvZZvSqUogNjLMU1KojP8NqVKZX6jnsuD72TegxkYY",
  "key46": "BbTqVka36Wq7BLrPsFZMcoxwD43Tbc1D1d71ZyoiNpcg4uVZDE1xKm8mvq7EePukUnNGMd1HFXLNLGVfRJA9zNf",
  "key47": "2kaY9bDjaV9L2eDC1q5XWqsJ1ndmra9E8SM99uxKsdCA6yXhpYazNWE8KppfGbbHaBWWmuboERN5253GQNnPVTGT",
  "key48": "4WPRWGdB4vFqTW1Nw7gmLtZMDkNQd3BWYe7nA9rvQycknYMu4cGsYoVrzQ84NDfsMx1HniULhpP46RJYs7KXwy9o",
  "key49": "acAvxf15Pgjc2629jvRg1zca8NsnueeazUk4wP5pvuEcx8R2quSVryPEsjpbrxekCfH9jJt7v5JLZghHCrjpyYF"
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
