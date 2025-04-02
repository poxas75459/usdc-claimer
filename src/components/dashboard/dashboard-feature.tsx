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
    "26au7n3DivVysfRgwrCwYBG4znjqJa5ziHPPA87DTkJJ7EtN2gGchReNUuQSUcYBB1ocZukhyNJwfJsLbXFxPyHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bSuGJXDXkne2hStcpbm3tiXbeRZJx2RECdm6yaJ2z2JaJFRqrhJa3zhAkUnrz29ExSLZup2YRHF97xfCwXvbJ5f",
  "key1": "4LGvpG1j3noEjuG99dviVmnoqHPBZHEn7Wrh1yRJ2X2T5ugRtCKqiQWbz63JSt8mM79X33H6mjP6cEuEk1aYXfUf",
  "key2": "5Z8XEamtomx8m1xbUMWZKqsC8yP3JxYyVAQXS3i9hh81nWcnkGkghGvWXhzh5WmxetvFTz7MAXYfeJ9nRmcEn37E",
  "key3": "5C5S9xizQKQPiUnqVU9bsSDrHk2mkxF8rVzevSLR6ZJvZXYspmRocQxeUMiJxDaz5ur5d2J5m87jyfYaVDLzPvbK",
  "key4": "4KZqymmFCkmBH6BEsEqDPTPFLJMCC1DEY5XVUMumCXut91zeVonvuhFpcXAWZLtc36NBvouJi76qzVdiQb7qUCnJ",
  "key5": "2quW9y6oSTBqoSEb8xiQm1km4QyviarBuayQmxQnr5yoM7Skni8PRd87A29k85rdm92PY1DyDkEMb5vhUdyi73f8",
  "key6": "62qyKSxba1eoSCfhJtA4DFsvjU76Woi73fwJCgpE7zsKnzKmGio89TvEwine2PXxM6kQ1X9WVAs1AMuxcFgjbZ4",
  "key7": "nneiicnAy5x7i6Fv47aFiUQDo4tKnY1tF7Nn9YyDpBo16SihE36mB8wjc78TmcLWjfQDDZYsFBF8FpjypqXFppW",
  "key8": "3kUxrqZ2CsLsC6zB7N3D7p89DASKietfQxS9RHFfHCmB5uXL4tA9wdEjd6iYjgj9qf4Xo1jwGkXcu24Jy2N5KfYV",
  "key9": "4Wtp7kXaRtGzb2SiD7BkmiPf4MQnFfrdHdHVMbq81QrEQDaKEqMkM8eQZfY85tf9VWo31TCW5ZMQvcKjbyV7ASKA",
  "key10": "5crvZFNNfQ668a3ZqpLKY5YXWPWGv54CMXpUGXct75aZi92nDt8PzVvSjrepPacHNYof126JmcjYbptPRxCmdQkh",
  "key11": "3Jz2JYaUfzEsboPtjqJXrZGScfoVjMPe6Y2GHmUzGbt2nSnhk2qpCNkUMk1YcUgKbFLUkCD4iaFnVVktCnhiX8DZ",
  "key12": "5TgMTufwcgbbtUiWvz4VsfKBza6ptdcCHFnuVdKByq6qcPuveoPRp4AGiB676gJ5PTmK9SKwzVKpaPcDuNzSKmHe",
  "key13": "4D97viyEizuYTsWnQLcvGF1hwnyKJYqFEYqKEYyfQQLUutEhzxg2hvqbZYjwuN7wQ1nxK6SZxMGdf8nsPAop74Fs",
  "key14": "2NbN3Gd9DS5yu86eKEbCbaMSXwmkEbNwr1467gRX88sHhs5puXNzC2V59xUFEYrkioDJSx6q93GXGm3BERCCidQT",
  "key15": "5BKGYRRCa8jVaxQwzhb8TxjipzmzeEJ86CEubocgXUXWMnuVJm5N2mrFwEYbbWGJ65tjokezckUXmY8iobzNqXWK",
  "key16": "2GJ9eeFLGf9VDUfFxPHV3Wbh2jTDm3KKem2yHRyaBMzYHiC8Rv4Wk6swRRnPDQo9Z2bMG3mFVteZ3GCTEjb6wYFN",
  "key17": "4fo53hxSGmQsHDnDr7gaEJVaawMFYDYKQNFnPd4qidC4qoxdfG7xz67cE8h2b44SpipedKX2woKp5apk1omhqED7",
  "key18": "4GtLTGU47KGokQPY7RhGFWChv8NJefGzju39MeSkLQs9W8HX7NV8B3iyB9QXBeYRsLny5F5NErVPGWRTKkuRGdU6",
  "key19": "a58EYjXRkvuPZZVonvmdCZrZdjvCYrpjHk6sJ2PFhmMNW5SJ5cCtm9HG2Rn2GKwoYs2a7rBUFztmyFfKuQCo4Ah",
  "key20": "SuC41cQz5qnHtEqaP9XXnmd1FVRodmcAQrktrJyFt9Npy8eoVXSkZN6R9EatTrgR8kgB7pMpDhFQccNi16Gzg8D",
  "key21": "4VfXbfiyRn8doTM3x3AYHNi1s3Qrf2v5h2VPUX9eh5xNvEoswy9zs7RGmpj8Mua1P64CsjLcCHiW1gQ5zhCEVzir",
  "key22": "5umbytMHXpwdsZqyvPTZJaxB2o6Vcb4f3kzJmhNJcpZGkCuERZzGqJNz9myaooCJK3tfNSSsXFzSw2XHQKhBL9V5",
  "key23": "2MMfcLUjfN25Gb6J6gMFiMMHfEmwyGUr93MMvwmXs3Go7iYSe9xeAew3ZDXFZ6GR31aAFjcyW1382NfDprDr8EsB",
  "key24": "3pb6TVjCAUFwRBvRt6DwzM6pzba9nyvTLXbae76QvNrNEAETiaoQeYRh1z7v6XzJYQVZneWwbmY6Yx9zuNagkZTW",
  "key25": "49vqFMQRENTgRdBFxTAgqvdAUrd14PpmkcPXupykVhXRyGbTynNxQ3eTTDF6ASfHHBPskhgoUZLdDNrbUS2i3vg1",
  "key26": "Zf9u9JUEqpQ1oCajhLiVSvuDj6gga15V2ra2ZAV463zCLCs4FsfAriDoGh3Hcwc9435HGnHXuAyYbR5HMHyVVTm",
  "key27": "4KJRm9j19rpXryPs62rzJGwCCtHiNeFmgUDoQza6RsWrNCi2yDLuEYp1B9VBGmzoKYbF4QsMymwUJyKqcj6hUcZN",
  "key28": "3redJ5bRrfewsCPtTnePvnMVWWYTjLmK5dNVb5WeBw1qDSBmDEHCN3TxTGiC25PJGSEErLj9G57HgREjMhp1M1SP",
  "key29": "5RJSiR5KZuTbmn3N8MTTGzPhZqm9wTQguMHJw6bt9pMEox7SKQrsci4KdTzCwneD33zx1f91uqQS5xj1rEJUbVQc",
  "key30": "4iHW8fmvePccKjmyVe9Yk7zwmAFGZXg6yhvUpQpqBoigXaK6nCFJsQS9bMmRKcKwzkxz1MUuQskmdwKEgKQTphac",
  "key31": "2WjX8TowDEvHdEpcAcSk8Lxe81yDABkR6KxbDaxQWgBeJHwR4P6sztb26GhAjjFBYYhTeUTNeFi58X5pYM2q6cjU",
  "key32": "4oWd7B1QFXUbMEXjY6UfyuYb5uJDRqJGAQbMBAujY87xJGYGyAV82EPkcP5Gzh4HB9TbpVrv1hJp7McbzpWPv4UG",
  "key33": "4uCgWs8ktepgZ8RxZm8WGr1trLyykQMx22GoQT1MzvhGDjY31z9PZfXQsy3g235bsgQxyE1kcHai5ewfHV6bEJFQ",
  "key34": "4HRZBne3drHzgFWRpNnbvWA1h6cDnbq7Fz4yLwPgbdx7rm2vJt4MXAbXvgjRkTp9TBPjjLTw79tRop5Ecu1mrJwB",
  "key35": "3ZiTnpTQdG7WWmSXmpSiubnKfhQZgHHgKQ8YB2CeJjH5tF1zxFdYXnzCovBZu5FpewPowFLEmVVGjS6qWLRuHnKG",
  "key36": "3QAYJNaDC5REcXYNCetpDYPdeqHrHX3UqSutWjUD2GLX2U7hoNGqir47AHXQwnxuThfT1XLKb8sp7rQ3VLuvTScN",
  "key37": "3ZFp2z8NVYFwHvidPXYkvr2nBSzy4V81QtVsMY4As8cRGzaN2n7MnoJ5vkbb7o2VSQA7kQPqphXPwiuSKtuupUhG",
  "key38": "L9ifYy3MLVFixGYuPFXGZiW1QAmgedSxpjWGbXeEB6p2tvw98rsocKDKK1VRy8mGRH5qggoPgwHSPTNcM7e5ttW",
  "key39": "5kT7fzJseQV4S8bi4627Ghoq8diQEAXbFGuobXiTUFHtkcDveRAmJQWED4NZ4pcSvNVG7GNTZRANt1wnkN1NCu3X",
  "key40": "2Q6AVRYhrqcTNk7w7oPzzZHqMmxjq5XqeRowuvWq6c38VYkU9oWqDyLdtRuxiHM4Cr69rr86gzHd45TVgAVWeGxm",
  "key41": "4e2yxEm9CkvgHbfCMkEjkcCdBLdYNpGeonziD5va3F47EtoLFEsLvmpwQwMJ5dUWgg1eBe6XcWhb6GuiGeknX7Tm",
  "key42": "5EU3MVmmBsrUFQU93mAigfzhT5UGQvBqcZBLo9Y2KiFw2KMUUbuRqtFKyqiHZVSibGQtW3XUsaPNszeAv14kzQz1",
  "key43": "2qQ5ymBjnAHj8R1U5JxEGUaCy2ELizguRZgntJUwisi8zCT225Soaifwn47TZ6Sb9uAuWmm7JbH8JrJbPRdCU5oB",
  "key44": "44mDEjWYuYUb4sFPRyji6kXc5yfMTUj3P5kG6UtFEaHwpoJyDQ8jvVaSnK7K3E3bxgHx7ZWCmvqY58qYka2x66Lv",
  "key45": "63RCiAhHehnvcVKVRBHwPTYHXKerDxS1vh1AgNnuLkJ2VkRK7UWz9rmQAypPgNjXfT2SnocP7USgvN5ur6s1NFSw",
  "key46": "4Vu2smqS7XoqKPpX6KSwucVonqv55vZS6a7RZB3k1EkrM9G1rPJxzRGiY7q1RBAWZESGEMo5DxskPYHpHdwKZg4E",
  "key47": "3D18Kjg9ZJhUTf3z2kRWjuV8BtAQmeXJegp6e4eU8J9tU3E7tRuSfNwFxH6MUX5vxm4RLPiRXVKj2CZEovHSQUT1",
  "key48": "3CKwos984aY5UUbcXa4SusERrNasZNNUn3DzdiSfGyKsqv7B2EXuWgZFyS4d9SZCiKsccm62Tko1eqtBb4eB1NfM"
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
