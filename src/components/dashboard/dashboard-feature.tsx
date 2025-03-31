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
    "3Xfhf1vnkkTiaKsuCAkt7tcFWJATQMLG1w7mYc6nm1AqyRzwJ8AurqhPLtNRKoVKcVYZGk8WM1jdeUYwKMBfWQ9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qkwRrd9KujziyfW48PF9K6ZBhQsnt6XEsYNLDpY4nFzXgs6fDUC4xiN9Tg6hLxG2jezWaV1HzMiE61SLjU6vCw",
  "key1": "4VgwZ8yqeBJCHVSKZD3FWg77EvLeRoT9U6Rg5CYenGMZ7y61rCULitgTpw8EptYfJTmzz5ejCaSMG4XUNRwxTBcb",
  "key2": "5fmKJMvjnvHPzjeeTE2KpEisVyRs8wooHE4sBNY7gb9YBv4z1f43AwKJ9V44SR4SsS4bNAix5AdMZkYr9bKeNi7g",
  "key3": "3CFVPcQXkDJfBRepXSWLQ6z2cErCgXJjhkW7HRNbEh8dpCyn9V7NC34RCSUBhTmpHq8DsQ7byyMcLxZsrpqLoQja",
  "key4": "4kk5uawirdQNKD9yAX72mzAGX2BqBJGsf435EUeqk1mNw6YkoiG4mwbZTukzxY73qtBetUAJjRn52q1UT43cnuMs",
  "key5": "51aDQzsi71tcQkTYqeKXvrULoC9Ga5tgAMVfH8rcG3MTCkzd97X5pH9yJdC6eBpBrQF5eqgcUt3jqrCaZNG87zC2",
  "key6": "5bsiBFh9ApNUmsJWHQaZJCXeu1K3Pmqm6jVUW27TxQBhietcYQcees9LSVTZR3VGAx8HvfysmFQCSUAPy2hML7aV",
  "key7": "5JNoKVKbxJTZrPR3qj5e6q1RtMAeJXusVwZzPgjAPsdmMSy5TR6BdrJqEqdDCe417Sn1EfiCqAZoa3kNMTfo3Z5v",
  "key8": "3xRDQZSVkCmUPu1TzfbnJNywsqdnStvwT66F3NnYQKnDwqPfG5bj4Z6UHVR3eJu1zKjg8XXZNXXi8AUA4A9wNRB8",
  "key9": "5q5yk6oYbFjaUzZjXp8369EwxUR3KWqckrNUF9eNpMrKeuZ1X1yTyqTmThp342eNk3Kt4zSrpyTazHrsB5BW6aFB",
  "key10": "5rUJXPKzBPdSntusUuhPauTfifQmmrEjLMMNYRbFvHJMbLWKMdhDJ4GPzjqafZvSYXnaqXNwArsGYzy56VqCXLSq",
  "key11": "2TYGwUPTkiNrPnxcTbtkcwz9TFrQuL7JVbogkEwvkNNN9B5WAiBiSwWRC3Rk2wqsSBckKoBYpJcqPvtEQcMh9ktL",
  "key12": "21uBAKosYUVfdUKiJBF21Xd1xqCjQWQ24AcUSDnnScRmXTrTxhRE11RJN9174Ecp4odaTm5WyTAHaQxaZLy8QzEw",
  "key13": "4LLJqp2bMmVHDA1qSS6S2EpA255xFJkPedH1zFivG33k5rbL4W2RCn57Rya57HmZaWWb7821UcguTgp2cxiCZkxe",
  "key14": "4mt8yM6B8Zfy6jY6jCWDU7cJX9keL2eu7yxYfgMskhV13nGkVaNJfAyaiVF3oMrN55HQroUXV2qnCDqASkCre6fQ",
  "key15": "5EULqPUKbaXeKKcwbpFs6tQiqnkz9fJWjgcsALdujTMLrLYHaBVJvQTgXWCTLHTLj7MeM3vt7mD8jTkTjk1AyEZ",
  "key16": "2afWMPgcKpTStUkmJ5f1N6378LBzZMbrx2BgSS47qBjkeZJFZfcjnFazF8xPCvfLhD7ewwqPcLTUtKGDnZGxJPKf",
  "key17": "4s34y5Wa5A5oH6s891w49EyKxweaRgeSBxdTRDWe9QU5PqYAgTkNdmhqya1FnhqY1bUqrtsdZkNWhKvKkmfeMmvb",
  "key18": "Hmz7chMorZdycZXojNovQd2XrguxcShVtGkDGMvfcZWq7Y9QUR6Z7BHL3EWP8NEKwhtiN5ca48LatG4tUD5YcEw",
  "key19": "2w6ESeUTa6vGtko56e65KqJcWschTaTkoBuc7gzsmhwPPLBPWNKnWv5u871ZXGwaqAgc3uv6DRsqHATradKZtZYP",
  "key20": "3MTbmE62AQEmcMUDJJpfgaDaV41rSMaoZhudmMnrYWXJyAct57rzXyvuApNqivVy97gaSDjNmYvSgJ5brbDS4Dye",
  "key21": "3QuhyzV2TgigJvNeHG7dS1Qn4cPbKuWh2r5mRnb2mMBLcr6LwEfE9PLhs29rL8AZyXTh1oZdsWg35CQAvQPcP4MV",
  "key22": "5ZEcBTG973AiMzyqJtLnCYeTychvvDVXFERGmLsxUyv9tqR7C3i2din1aQjThcCG7bw71YRh8pJ5amMbYhTeyX9w",
  "key23": "4vSHbtyoZrhvFtmjcwA78XoxeUZT5p5WSJU5yrvofExVKbxxabdcBebwZ7zxgFotdCkiH58hqUNiVupyyciyN2xA",
  "key24": "5hQCNdBK6eWsPjd9mZaDwHnXY3uT7kNnBmoZJBQtVyfci6dQTmeh4KUVLdMd7eZxsNPqBT2sCVTFy5wmV17Pp5N3",
  "key25": "4iEG8dCA2prepPbkBLziFZQT4tymP1QzRf5uCuerHxmAtWuWnGJcp6rgGEaHG3GghVJDvGDN5Tr8bbu4qbDHhUTQ",
  "key26": "4ZRuvZgTiuGQ3eUeswUjgQVo1aje8PLm1kC24TaiVHbhbVor6npvXWVPs2eXRYPxNE32WyjZxCmoSYPhcASNVziv",
  "key27": "55Y2zPg6HywBiWk22FYjY4RTTiCA7C5GQde6hXFoDVNd5aErdtyNQ8AUahvbfY9U9qDCvFHL2NmqjDRm2kt9tr1W",
  "key28": "4EHgGFNdnzWGcWrNKgmfvN71JhPqy7JubA2j6wqNP4fUUFdrPbtx8TUZQVCqfZttuCR5AgU1tCX2LUDrmZ7PvkZJ",
  "key29": "2bE6yKiEXpiAWXAKrNU6fSC3V4FxV34u2CWQDzxfzAKA5Qx6P1PUSo4jQpv7RLN9diNF7uEepM54Q1pNTn7j6cVS",
  "key30": "36omdn7nrZPR8qCrnVqrHiWV2EVWGNEZ4MUNoXFnuekXbMZiCqbhuK1ki5N3TFeMFHNHcPoNqQeKmmqpeAPW9zoh",
  "key31": "2e79niLjsahNNm4Qnzw87JhRJ3JsXY6TBaiLpgsfCtx1YSYVA9PkB6ebHRg4Ypwk2kasSM3RwRYh57DHM8ioxEYc",
  "key32": "3NW94JzZ9HtrAUR3jiz7tSJ9LaqoDJrA9aRaet53mCYyUA6PQGNnbymRfTfu7W6AiWYDDrWa2y9JcQzKWwJ7x4ab",
  "key33": "5Sx13sg5SSUcyJdmY6P1uYSFjuoZEEDd8gvmyTJbrDCFGNCLKxSXBhTxDhkSo7Jpch4y3Rx8fpEdwodW4VYSyMAp",
  "key34": "3m9PQXYRcjYhA53ZRZSeKe53AiqKcqpJ8tp2fyL6KdASQiAuPLp8zFc5h7tdsHsBdAqZipTHBbz93V8jjcJFJ4kL",
  "key35": "4nWEbsK2BsaShuLee2RCdwJjAP3M4sETBA9RQZk7MRRStpughVqPNdgmNh8CJ6Q5CrM14tQshfeVxKcUpchtk9g4",
  "key36": "5FCE8NFgZuuQGmQTnMG75sRJH3V2WMrie9ZFyi5AgECw3gRgbguorBepM2y1ecnhu2s7LQT9A81PXr5VUwRxpu7y",
  "key37": "MeZ7bHB3JJkb7mPaEzZn297AhqAuXaQBPNKZpjjzKhmmMfX2MaqcMgxPjxCxNJbpKm5vmTDJbJd6AXCoK7nmfD9",
  "key38": "4CQ8r1o7BPMVwy4KuywqZWjpL73BrLqVZ5PVhcsk8vgm2RPxh2fLukWCte985uH6sMki7XopMjYf7d887uk5StDF",
  "key39": "oYT4KiWThGFheEdmjLTtm7WcSQRf6Jy3ozA4wEjaHjzdBi1PSj6eJ3XLB9Qs5fifz1X5Ytw9qKE3f6tQHVtq9v6",
  "key40": "33HVKni3RRSKHeZAb6pn98SPwTfmQyNLNeSokph398qbTN6ra13mwGPfezYcDDe4Wc7nZGq4CupCteSdVwWFSmfF",
  "key41": "48DuPV3L9ZaakEuhooe8UJT4T8LzXhx5k9ARpKyocEAQm2qgLJjSNPDj4ULVDtTxXUTULo8rmwXdbsqQSd732zY3",
  "key42": "zeUY6w9wNHpkm78F1xseHf11BtcXbowVUYCgMpg1z1EnFFuVMwVWMyFWUerjyLG2pVK2WxYLsSso3aNJsfwFtsv",
  "key43": "KERrU2yrGhLBk31csDUg5rWxMZgvY5ZaB7wDU8aEPZvBHJ77sg7FiLFKs34xnqZZs6Dz6YUJWvF7X4JsAc5XP4L",
  "key44": "3eJHwqopSSM3NkzBb7bMNFKXFUG7J3f1UcxQhnsgcjPPopzo4e42s41G5fmRcBySoyrZtCLH4ZeuLo8HbEoAkeqb"
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
