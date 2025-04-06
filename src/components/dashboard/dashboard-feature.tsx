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
    "2EiJ7X7rCXW8fLD94Ka6VpAjQJV3LXULMTbn36RJ8HT3XAiJJGbG5cJNMFBXqBWNKXFC74XYcV6QEe6YToRryoLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymjQkPMWceQiJAArNqv7D6EixGHKB7JyaG7VsWho223A3UWeHHaq29aKFmGMhurkDTZDgwA34LYMfDvQUgkL6Bp",
  "key1": "4xtjHfhnA1jMtYWZ5jfLyujYeXfa8PFL3uA6GsavmZn4NNSUcknzASTsxkY4Gs6X1CgJPf9G4qxk8WJ2pJ16ReLX",
  "key2": "4mE2nUTahceZQhiTthhHeiyumnGqr6uWfWkc6E4u1e9He9fCxv3j7jMF5EqVwLa7tg5eVRtgx5tX6ijp1rCvbPtV",
  "key3": "2egfLKC3oNr14CvPVdF5ciNAPy6Rxjh8TEkDWP5hsSk3bbutQMtGDj8abHNc3cTH9u9A8wQiyKjorqSLJj14ov7x",
  "key4": "3sKAeiVEpoCXbzEhpAKyJxL5J7YY3bCqoPJztpQnmpPJieFARytvyrbzfkAmFm3yjcT1kbhuT4poCbTnrYphQJAp",
  "key5": "FJB7g36kb1mVPqa5bD6LaKf67BhEh5rVnsoWWaJaCNG8MeTWW3emfnwi6tYj5bQiYTFVoyzKQ8ms7agr37Svx5n",
  "key6": "4Ukdy6XimP6KEYCGf8AxH4sKRm4UJ4o1GAUKbpt69TKe6xDu5CJAbWLSKVwuLvBLLmvAGmbf2MFqehj4NxvWMXUr",
  "key7": "4XnUEe85JkqPUxPYkTTGHNNDfbZsmwnc2D6WzeVGfRwEzEgWS4FBatmABn4dqnRoJkNijveeyTKQGmewxBMbRTF",
  "key8": "3j6UrgD1xjmnCaHUEfeYJB7t9uEtZfrz5QKY82MKxrtLWChDpKJG7JSwFKwUN4mEwrbSTBHe6eqrhDoFga2CgRfW",
  "key9": "61J6Xq4XiKeuDpAfrnyM62QGo8QTW4MFJsoQKjKzmmzcCeJbG3YebaFW5m1AhHaiJkSonQy8BvmqCHFvv1Mf5fja",
  "key10": "2CxFhHL2kNMaj5DV6FEig5tZcPePjypaRSrPRHDh1UJdr5QCP88vRsEN6k6fftFnFj9f1rCcMdinKeWUwfR9xW8d",
  "key11": "3BqH976QP5XbRFLrdcHKk9gQprcmckmUGkakUrf5oP36PXgKkfMiCK4e8W4RKcBQr6nhok4sSdCP31YhxXCsaDMq",
  "key12": "4JWDjJ9hR8m9qU6pSgoUsY58vLUCFP4zFFsgTz8U9G1qSewSsykW2nk7vErhYYQnB56SKUhVQKhC62zCUugLN6Pf",
  "key13": "3kTAhN3ZBf4JgaULrdBiUZMZ2cZuxxRaZxzPHpYkwrKJgQnY7yEU8c4FgTEYepPQHVAWn92QLVpHbTXJMfL4QoEJ",
  "key14": "3keshyMR8rgthzvSQTYbsX7HMWx8EvsFHyb78QsC6Akd4BFhy5cHcnHvp9Ps9f4DgFXihYEPbMXLw7u3AWVKDXaH",
  "key15": "2XrfX59qBeUqijFo9QSKHRUb6mvTrMZUpsuG1MzzS4bvCLQ3tPk5RR79nKndwDrW6nZ5mzhEgfTi5113GHb7JdV2",
  "key16": "zNmRrsxdBatRkPygdksLi7yXhCbfeypSeXXBsJJomNVtPx49zcqh82Ej29tgYwdjSEMYxD94aNkXz7srfBhRzDU",
  "key17": "StGPrrsph65ofCn7sw7NgeZr9ZTv4rgijfzyjU1zW14aUF4XD48aVGu3ee1hHinahhuvph8wfVQAXikWxALsx5J",
  "key18": "2kQtrWedq7JXWNcoEUvQRqroHk93tPPmdaREtdQ25mYpy4gaThuT5a9PhSSHozk6dApwQsLhAP26Lirxt4A9r6eo",
  "key19": "2kQyFxwgUzE2E3YoLmeZfuvLaSvA5NmNWeSkE47K1s3Pwhp7SaSs4VQXSg1DrRBURkwJ8reZMGm2XtL9eaKmohG4",
  "key20": "pz5MFooFbD4jfabucdDAnTDtWz4Z69RSxeEP1WwbEHjVhtGZQmQEa5KsrAx4gr4VFmUcG4AGDgNmcZ4oNh1gDf7",
  "key21": "5pNqkUrfF8XdHQfLXTkbSUVssDC35YoPhnV5xxiUtrMVtUvGiiMjKUvnzCC7EMv9y1bxGZYfJ6ujNRKjyB9RDQGu",
  "key22": "2fUk617ouwtts9Z4dBD2D1iu2T5H85JdyH56ZocwB9wYhQB6ghR9cpWmo1uQcXHUG2pMjbiDaXXQpRPhVTz13cVz",
  "key23": "iPYuCgFB1U64QbufWHNxZjG3McMDgx5LiGcMXug4FbDUeuEATw3uvv66Ac2Yae5Xr3k5XTm9n2tinPpckvzB6Gz",
  "key24": "aRHZeaLy4G2bfGC1j4z3JuVUEY1ZCswMurj4tnMTodBr8FN5CHKrpFbPUzBegkZAC1HCvt9kAbuW4S4frGDD1D1",
  "key25": "2NE9oPRX7qn5wm287HehdDiGrDEyuQJTjY3V1EPMpq9Cytxm8UuLHWv39rqJR7gh2xKs39s2EX1cSJd6zqaUHJBn",
  "key26": "4ikFdGfKryesmCZywvk7PzcmpBMJFyiE7g3cNgNfSzgay3dfqCRhF9S6hAZ1AbJrNFKgQnXWpuVFQNuX1t5WqQHV",
  "key27": "4KSS8WDskdLJGdnRYxxc5E65nYNQwxcjRe9jiCS6qhrBxHV78SvRbTyjhAJMmZjmhJivRodX4Fn4RPVznR5LMebL",
  "key28": "5pgPzbjKkFKgmHGXLzt6i5vshW4RCoECoqXfVr3PE5SWd1zJJWaaDKmngDNnmdx8U2YB63CxHB3uaivLi7rF6d6n",
  "key29": "41N5Ms17FGG2gLnhB3w4979BWWPVFTpjnDPtENY6FJZwCk5DL5Hf1jLmxZBAonLxo3ZqDPi2hUHfUHiCMCkT6gqJ",
  "key30": "7Y9sBYwcEP9xaJepVzHP2TxBFPS3uKfVtBbq2LagGv6kKrVSMXfnx7fmR4HDanwzjkrFtQa5PK6PtEi1YmRCC2E",
  "key31": "53X23x7msQB9xKwo9Eo3c4DJ31J1pusbwkwawNmLS6UMjZRZCZX6rvXwnKDSXyUvhLikdcSzHFjAypG3CBH8FhCx",
  "key32": "4rbDQkek1r6JXZF1SEmqaGSJPqmJ7MoqhhGrWRtQ6ZSiWgnAKwDAiTWECfkjn2vqiQJrbPoMRP3QVAjHw8YqstEo",
  "key33": "3Ph7ygDcSgbCL9k4hVkDVb1xRqtWF7WYSqy8DoH4xt6FZrGUE3BPFu73o6tSMpkd1ZeoHRCaJMSkgn47E9D5xeYP",
  "key34": "4ifqsVq82nMTWxsgJhJRiDxK6dK6kXo2y3yTcW7JQ9AMkfLqjpVQCVaUgpADhjeZs5sz75THxr1W4ghoJZiCsSEN",
  "key35": "4E8swzScZkoERnJQ5v6nqgJTdjUuquAeDK7RZY5MjxiPyAXK6WxpXYdh6puSKUAFPXoKpNpbSRPmb3bKMvWVrjAG",
  "key36": "4e8rTWLviHiHFASLhWzeHnik82VciwyrQJ6Gc6k949Q7DZZrHhFqYBM8gHJxeDu5sDkKgc5rQLEyPPbqqHe5ctJ4",
  "key37": "2qVovR4TNwGTM9aS1dbU37rR4LSCNf25Cvt1HMuc5B5PbmWo8ZfqFgwJnedcXXi8GGT1fp6VJEQ33GteeWesZgX4",
  "key38": "3p7J9aEx6YXyrWAcrSGT3L35Wa49sEMvNEBZRxmeGmRbw5VwnuEsHZGRusvg1vy8wJ3rBiANfF35SSgyXpSEtBqm",
  "key39": "XnzjKwGpgJZihGUx1XV8g9YqqcN61ZAaZf96Kz2Fpm66tTtjiJeXMndLcsSFdQj614b5Lt7KbCwAqUHsSVWRPM8",
  "key40": "5iqNz7gXPhysBrgE9nF9HW4EWUGE3EKSFL6aRhYLwn1ipNWqjXT8H8Tu1WiJ5gradko9jqnWDNUeZ77rusR8XesY",
  "key41": "5FX4swgJR6Y9qo8iLyBUwvfeRZhQ44tg96hW21inyMvcjUWXDu4rDDsWQR6SUvkj9ujaSbnkXQDVi56RefEiabog",
  "key42": "2Y5EfMZ8Tq8zneBSeT4ApM4zytFQTkqfDAHZjudGw5zs3mCaqi7dkbDopAdeFMfJwdfYyS3QErpwRKGYeLcnJd3b",
  "key43": "3AjvSjNXwBUxXoBzYywPKv4Bz1Nu4FuLLq8vyHKaLTDGMnzd97EqPhySVqm1pp5utUFKKr8oWnm5qvE61CQuAgJQ",
  "key44": "2jMDtQVXQH7BFKddvNhBiMDacKcQbt4jcrp8ZZhwXV4okjJBoC7wSS8EpqZhM4quVGSVhoeWi4UQaSkKWjRsK85U",
  "key45": "5VUTy4FMHaaMAdTWYtYc9GhCan2fRRwkSQ8eFtJVWYzkxtGGKtWc3gTfhJFzG1aGyVBzLq1F4hhPsbjzT7iLTM2L",
  "key46": "4SugurvM9Xr1K9MEH5VwqUsJrKwf9HWP8NdPUtpntsQhFADKM5cTbgb37j2xdmk7sVYws3RBuh9hh7pBW33r4rEZ",
  "key47": "33UzYuWT5ZrTr3qjKx6YKKvndzx1PUd2bMwsnxZLMgRuwREwKubAxteokudukFVJqEx9EXF9g754YV8UwT9RpTGz"
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
