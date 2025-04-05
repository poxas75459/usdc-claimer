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
    "5mSrfRcy63xhzmek7hUjY6sqre7wY57yJPzUqSd5DaREHS6kC4NukoFqkkATm1y8yzeQBuNRxEfYPHMWECW1uboC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r5WpVUK7ipmnnUZ8WVBnyVGf7GjCuQ6ELjw33vFpXZujQyKD6D6F4KBXsxWFbZwURoy3294697iXKMLqWfx9S8z",
  "key1": "4HJcpk6eWHfE6XLycXeLEKsw4Gbb2xSAfigmY97WtvUbycE2PwTALJnffuaziVvSEBEQe8ERvrQL5bv3jAzgJE1R",
  "key2": "4R5BHYoBzMYUjF5yRrSQo4HZQCdA2Bwm5XqCgKmP5YNGE9tRbDbuUgfyFYsZtzRBDzRHW752KiCo7F9xpKYXKft2",
  "key3": "6XyWToQYdw3CQTRqgTV3n1XYPoznZfCTUAXrEP4zdpNJ4SFE6VCK5sDeTohV4SZo6nXhD8W3nzGrBzWxp6Bf2wM",
  "key4": "5n9GKv2o4s1BgQwYtxhucdfWq4ZRz9vfhdK311SWMkTm5fmrjcPnvT5XpcTFWaAD73fEmLZE7fPQHUwz3jAsvGDJ",
  "key5": "2S7SAE5vqykZpHR5sgiWaVcVXjcwJ9ivR8FHNcFGiimnArmjaEEk9Vvcovr8YhzF2oF3C7uPZ9db7jtrHcDMx9tg",
  "key6": "3rChCxPUQPgHyFzHjbjQANMfzrnjLkDhbTQhFuY9Ke4JY7ctZWKudSH5mxDcoqRkCt9AWfHquYFZRqF82aJjBi34",
  "key7": "miTRgthLXcVzpro9JDHVJDcsPdBKYqE4yNCmUyNiTy3DamkSpHmAhZubL4ByJN6LGx6Uxsnmbc2ZTK5jw2SoQsJ",
  "key8": "39FMB1Uv67ggNhYK8ZhxMWBCoabuRZE7g1mxPTJHwqqqfLvvuw9os8Hq7cEWbn6rFFg8D7rL2cTRYKa7xj1tumqi",
  "key9": "3w9pP1XxNuaJ8xWhYzddiRpBuyZ9LqxA3uprZhwtYMZ3s1VKsfEyX339jzZFgJyTg7CEG6WJoPPWewUn4E1zNyfM",
  "key10": "3XtbYChpJwbpdTqywVbtiGFXxnRJCvFegSuoqPKyoR4dhx26LAmYW3DgH4fEr1JjjzouLrACFro639uaq47taXNa",
  "key11": "5qzb4JBM1cS8nKGHwxQe4UU5NMYBGhSvTJ9UVNjfgkQK42cQr1jpraJXnEeshaUdGGeFJJCbit67ZvzXb7phQb4k",
  "key12": "2RfjHx7BXiGGPTd44SqoojCTeVxQtLUu6unjucm5fQ8yT2t15vVzV2ShzRYZdUTaccRSZMMQLzeyLYyfeRi1JwaS",
  "key13": "jdHMi4zuVHksZiz3nNS4kEffE1SWyqZAUs9x2wh5RebQW4UTimqq2eN9k9gRYK19o7gvFBkQkDq6pNQa2fWPGjk",
  "key14": "5ojsho1z8NW93ii1rnLwRPwC9YFFKpogATAT2xksihYH7C259pQebywCrfrV9gLQ4ZtkvNXnmBdn5qGxxPAVykN8",
  "key15": "5i4HxPmcw4GwJNXupQ3GamSdWcAPMbBViZGpwiUhs5fiCZtCRo5v9pzFWvvFsUH3Qp6uerBXK3mwi34wYm2P7Xzw",
  "key16": "62MjN5ko242hSM2yEGXjBPpNuaa9bUhjHBTeGvXnha4zqctwHvV2Uqx6bfLyHH4BiVJY4WmFiVzZtrQz7Uojxv98",
  "key17": "3J8KCyenvmNfuD7eaXapq62ngSeUZnbDG14pL8xjkuxVXXXcmbsMrHfRR6rGx4fu2i5YFcdodcsqnatpG82GMTZe",
  "key18": "2dv2vFoA7jr1S3N9b1a3wX19hi9pqauth36E9xZkWGDEh7ccYwuGt6hrNKFeeYHkR4yzy3YAyzYKQHtGuEUhVMSz",
  "key19": "3MUhmP2YB2QFjTQccAmoZW847UHTqTtvD33uqfWrurK4YwdRkb2UujeJcu2HiskHaCbrKFYnwaXWG1YrG3FMo36V",
  "key20": "nnXPzXUJZDzkhvZuoQoAzN5aQjAMNMVi7gQ4tH1qYJrmkoySdGJEWtU3QGD6MkSuU9TdziCCWtGTbBCzVPh7uyo",
  "key21": "5KsNYEy6DAbD8eaKtt5J4NKbCeoMDGuy9gmMWf7Y19VBDNFERUtirsM53PZodbq4fLSKMXtAeCUqKQwAAQdBzaTt",
  "key22": "3knv1NAzHmYYU7Xifk1csW23ti7yNB9Umv9kSBUExf896r5mtfQwgWwPmNgdahTzVr3wwAiMPXQGeedt96kGwFpw",
  "key23": "3P6BemGmcFgtaPAzrMSvySDMxaYdMjEmzrS824698Y68yb3jWLSh8mghjZVTD2aB8wXuh1ywwuMTewVsiqx14Ecu",
  "key24": "4qPYrmQaw6Yh3WFxYg3JiAK8DHzPVeAjoCrV6a69ANJn387eJ9WpuCfywG3hSaea7pfdqA6sfy6tUWACR61ZGp88",
  "key25": "2AxvDz9Yb5ba41GeNQTMLcaMAvs8gPEpnxNJQ8yR984MqvCXeat5q2bXcFHGMArUm6d4JZcTYPnbj258fK45dkke",
  "key26": "2Gx3fHaiXLnQ9P8fcrLpuSqRwL3LvtZvDDrBgj9UdS9CmbbQEtZiuqpKbfuspZkYerMTmVbh1TvTSCLaSstGESRG",
  "key27": "2w87VnJEThU2CJ54SxAfynoCyANDeQju66pr55seZRB4254brREeSepoBcrG9ktmUSXYQXosUK4GmJ76XGc1cqEQ",
  "key28": "2qxPQLd3iyY6Z6aUhyms74hRf7hSrtq2Ek1LUXjC5xnsdAzmDBScQ7urUrjtY7igNfZfPSJCwHcYeSwcxAoN5CVS",
  "key29": "4LrDFzRsmYVfpG7BqEMw1hcrQtM1WVT8wGZTBnRnsWGBCrJW58m16Lb7MiZu5EXPCAhurYQFkwiWTynUui9JeHNW",
  "key30": "3d6YCTDuuooqaNLPmvm1iHC7GRc3ouq2FS9fqj2WzgkX7f2BVNdfhR1EvxaG76Hc6Qs6WWtLSAYkUvSuxid24zyK",
  "key31": "54vXM8SREB3CwAUdcnkq3nUdkQPLX1aJUQpcZZWQNBmoHLzJT8SH7svxLYvd7kPpG1qavyLUim5FDzSd7cFLb43n",
  "key32": "eNxso6Mgo3UuqZdtsomqL4x4UyrDkJD6XJvzp7FFsHoPhu49RcQnjDwVvJd1rdV1zxe3r7nd1ANTZ1AEKjA1PaW",
  "key33": "5ah8ZJXcfyrNFskU7KgkpYArZWBbVmCZQb1cfL6DEtBFjY9y6Pq6ENBYMu9Dfxij9feFqRCHVKKfcRhzjqdrtHnL",
  "key34": "5bWJ2U4BRhAmBZXQpeGp3v2UBWjXyK54tvAqap5b9Uy89NvpVaoDbW37MHEV3V2upvyAudUZVs8yL477CoFC6hT4",
  "key35": "25siwGXbBskv2EMue16YEVXP13V3WwhRd9DFDfdhEEEGvWCvJZotF8ThwkBnzTEkp6XaYk75ppg78V8taB9s7Xuq",
  "key36": "5XqtxhiB3x1eX7nRULs81pVpmim8oCS4jqV9SPfdG9HfWc8ZYnivP8GqcmSdoEtJy5VXSsRkX1KRHf8QHroDzBDC",
  "key37": "2qDHjmZDRRsQf36VrhK6x2BrYVkLN4keLC7qwzzwjsDrGbbnz11Biws6CHaGEwCpQ3i6Upn4eaztetxwpiLn7hjn",
  "key38": "apifyzyqhyaKqHh2JP4LZYoXUuSToC3x8srV5mzDrEDF8sxyQ5cY4EtYfA1Hn1if7Ghe6wkFE8NGrtQ2MoF5LiT",
  "key39": "5iCZpz7hUVHHa2swBB8tGYPV6YEUbaACEp3wmcVWFd4MQTRnWcYsDnWQeQHY6qTUQ4fzPayaqrcofxnVuvoXxtzQ",
  "key40": "3KDW5oX1E3NdNGAobo9j95wCgZwQtBMB6L4HsWhFajUZ8RbzFqd5Qf7qA8iPoDiWS6TWj54d2pgsKVteia6Hw4fA",
  "key41": "2pHCHC9sozFZsSZYtzVMVWmFy8GchirYuKzSx9KLK4buetfuzZfA4kmRDZHERSPuW69Xa4iNHEH5zjBzBnAo6JV9",
  "key42": "5YfU9aXHdiL1mzmLEMp4YeTZfok7x8yCDBaAFji6ERQw5wV6wEX8dEJv6aRdjoqpFfpbbmKs2AMsCRmP9G1hdYHh",
  "key43": "4NAYwmdMPugTVQKQu7UGqpwR2MXuNDGhc8q4ikK41YZPJqL56b9BwVpZEZKMFCUfzkUgTmucvokYiKGaTrosiwdn",
  "key44": "CpKFRHFMQGLkUEn1Z2Sdkiwnw5sTy3Vvx1GVbKSAVgxN2SAhgko8vnJzh4kMhzUNbYW57X62FXXCbgNwDiEebmS",
  "key45": "4KpmpL2yx59MxQZ9cf63CY88DiMrTugEKnRB4S1HXGEdx2puodpZjqu5qeoKR41dQrb4VefGxBJwRefFyi1q37Ck",
  "key46": "285T4WVxCHsYzuZPMxJfZHUNmvb9TAru3siF3RxLYNf1QAszpW3h1Sr6TRy3XDywMu2tYKt1ync6rMWcjonyp8R5",
  "key47": "iuJbhHbdhJJxzgXXAHnntwWv6KzBvGZXHmxjgiyuFwwdVSZgn5pRd5Za2ojG8j6ADPKogj816eHgx6rrND2gpn7"
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
