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
    "2otnPE43MPEYPR7BwJmE19LVtbUgjmreZooAYccqVEeUh46rMhVhLmFSbgV983XEAxAPbyK3dnAzwFdbMmyZPYA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53YV45Cn2uJoUG5KH96W5MtqfP8NtbNJYQSWQbK8F5pBGDbUuXjeoJPAUby6WcK1wzBogoU3kAdH7TFATnf7rU6E",
  "key1": "42Tc3BUwutx1Tt7YEizYmGZSQRcngpb71L6JsF9azQpZzavJ8qZJnzY2xmv82a3gBLKnKtmPF9g7fzuERJqcpJPr",
  "key2": "2bcqjQkWPFKYi6WW1ubQhuKdvEGgi96UCivWVtXjv8pi35ZvvSNC5P912QazrTaC6TuCq1Ya3t6Xu7gHsUR616E9",
  "key3": "44Tg7V5RnNUUzPNmpBP6mBjgJYqiiRP76wx1CWXLp4pjxw9kXiikzwjmkLkd8ruhSWjjKJsyMWKdVTUBtT5Z1HDX",
  "key4": "i9eSB5FPoC9w6dN48NDjg45RMM1entkQVRv3FxSCsEor5jfDMr2g5c3oh63Za5qLdiwgcqXz8qeXhafSxxivpcA",
  "key5": "2Lpfgc7Ugs63m5p536jRASwP3iSR7GpXazZLgPi59tqZrYuMUZw3UEhvWRcWKnYF9gVSMY21ZC8nEygSgaDXWAXU",
  "key6": "4sjqSYEtoGCaSveEuu4VcaWuerfkR4hoUxJKZ1MWfqobhrRvjVyhhDm5shwhY3G2bujMwsoHVdvBuzj99Ly8Ctmg",
  "key7": "FwkRYcfwxqDtBdds8jWUyo4XDgF5yLN1ETMjihQScdSTEVeibmojN5WjwjfJ3HUPYwBmb4VEhhZH6hRSa527qPm",
  "key8": "4vHDTCzEuj4S6RQXET9TkEwDYSyPYMNqftxYKMUBRE79gx42BzhxVy8LGfWPfgNYDpy6PLrXmAQZ1kHY9ph1YJzM",
  "key9": "TxqzxrNViv6G46r63CS7sdtFqAVsZbGwwhiunrM3n4vwLkawYHQHY36vQSHrUEp1JkW9ynN4TKUoeMKvfXhZy2J",
  "key10": "2eFC6o2FQy3sbf6PLeBci4XER8iw2yqcEwAdf3jSwf6Jx4JhSGTTa1jqR9wj7pwBLmcygux918VifmBChWCfE76k",
  "key11": "4RQETa3inYiBKj1QTp3pxk4vPMfkE5yjxcW339AQiF5RMBCejwGkrkdii8eNGjRpmp8cjBbGrqyB72DV7neQMsxU",
  "key12": "5imgJCQpktaKXWvHa12U2tZoPeNoedpVwJB5s6niAvHY4MGYyjGpYfgckKCcLDbDXcJTzAdUBavajTb29AALDvXH",
  "key13": "33i3k7sK7oTFD2DgXXx9TdEdxwPNvk5XLdqp6krHHonX21X8MJghWciyyVbsrDUpiTuNRD5uXmKRM7e91FjEJMhV",
  "key14": "2DdLcnBLs19HX4mtdCtf2v42kxJUsbK5hk16wRY7HaA1BJ3jWLxT7XCvrG6DsTBZRkfxiB2DhgAhBGQGXm9Q1aHz",
  "key15": "DFTrjFkD3HSXJcrtAWx2JsfVHPbJcNVqXt7wQawohjWRST6FTbiCRmxNGFrdsW1kZ2VTdLLU5wRJQ1U9AKzfoJo",
  "key16": "2ibDbKbKsGcEiqj6wQdo2k8SPnn5egKf4a4NxRtTjJ9CW9NhyJWTbg8FaNuzCv9gjuperQUtGkbYqa8z3gboBBAs",
  "key17": "4qmUgE1LJviuTvdjM7yKbkH9aH4jTcTKYJN44MGJEjJ6sDYhGiyHvFHzwJnq1AXtMYZQjxNoCUon7uLgfauNrYBU",
  "key18": "5qG8aUuPzURaqFRDUH32HMvW3RdJGnkdfZWz1trARyZUJ5qLPMW6ohZ1gG9eBfYxL9ysw9B3SwuRzDf5Wz9Gyy59",
  "key19": "2JC63GAnmAyT8u2uV6UWkr2WjtwKj7Hhanw12EonPajLtimfPphGEpJriuf514CAeNW89ugHMHQ39jWXc1mwvqCo",
  "key20": "54KNojZWw1jdSMAwt9ydcJeJEe2a3zZrKfwsqtzkwCsiaKq9Mh53qq9dY3ye27RuiyiXxGU85oi3RJ7c9wctbiuN",
  "key21": "5Q5UhFPhPkUkWsztg9ygWMoTTxPmUYRDR35PKtMqmCB7bnwYawZWmjaWZhANeLjgBnPLuD4t2Tm1pm1ynuj6rtJc",
  "key22": "2VcimDMmkzHYDzvLfQ9jJLiVo8siofwSU7MoabRTJkE4a7rX1pi6YQqerDupbYwMUjMjEoLJSyabW6GzXKKxvMsr",
  "key23": "3F1YL6yehCTydsKqKYPeYMdnHojxNEJo6Mn7q6b25EvPRH3S2XG4dm8Jabq2QeqCAbWkTvPuDdHkZ5RK2vuSZEEu",
  "key24": "4WAQ4M8mzF2yvcARVKivzu4jJEZC7eXiuChLAGQJ1J2WqoUCdDzmj2U7eZixz5S2tPBCk5GeGQLT8gx3KpEMsrZ4",
  "key25": "67KqBrzJx8nGWgH1JMd4JaTatbsQdgXX7ypw9UPZM5hE74mAoD7v7y2vuR62MZum7A2z1b3PUFVfuptu7tmKfdTH",
  "key26": "4QzzWkeQFLGhHUxjpWEUbzdYEwhMGS3nidnVWvxaZhcwfExx1bMn237YAzi4ZXRw5L7FLXDD9KxtapkknjsRaBBh",
  "key27": "3ijaex7oYEttmMeLUzgBZJR7VefkKVsEo9UssfpFrvSVbtrLBYDUtdbVTTqbJ5YPdLk9Nmpo3gMxTc42L2JAMkvx",
  "key28": "3KiTFY4x7ikmJRfAi9s1mX6Bh4QczzQ8TqJME32cJ1uPu6DaggEHYDrhbe1Fa8PJykZoMvNsSFoyhAP4NskFy62d",
  "key29": "4a7xTtAa71anEsbhAckdzfRJA1GtRCiiRRwcyuZVoSbftMiFi6S7VquisPL7DVAco9tssePBhQvaZwvSwLfxSxc5",
  "key30": "5d54jMoQLmqiQqc3SzVgVdiCkyUEYKpUMySpWaBTcvVTVqWQikCuDeaZcsHdCNZuL96JmXUFWFksRUYWL4hdhovu",
  "key31": "5bqqnowWwpLkgA1h3BZLkS1Jqos3LrMyLzKTFYKwKYHJaD1vu3yfyhpjaUm7vbaMuzft9EXSLQUvnv54Gd9dnsF4",
  "key32": "exqFUCvraHrWEDVGoEiQFBPS7oF1QC6X2rTW36bQkonyVietEQwE4XWRrW63fMotkETGWtUENF1KpwQdCbtzEPB",
  "key33": "5XSupoxNxpvVx6yEjEHhQaMca4WxDHXFrHQeap3QgeR5qCzCv3x67xx2xBd92cNwHSr1sncNJCwgHoGD5QepbpjL",
  "key34": "5BcqmFJFqqitoSkncZ63UEsX6PEWGqAP3qUofnbdKasMdTCtAD9gpSBPj9bJJ9iCs9NiCSBxKiMcyUCHuM6UfxAw",
  "key35": "2GhTQdkE4QAhczwtgHTLdjPqhoWkTUMWr72pGZaq9QLbx61dUTYLaP7oTMKeeBPZNoXK9sYYMPsrBQwSBnUkn9F2",
  "key36": "4nd8TVwW3mEQPgYS2yAwuaGxFiG9CQBiErnTVr7xK8TxaZPQKHgVo8XSbYVrynsJe7DvUGmpMYc7bPUY7EAnmcvF",
  "key37": "4uEyjSdr6bVhu2444Dq9QTuSNh8sAjNxauZB45VuDMj5Utwb3dH2VBRcqqnm41rtkSNQFXwDig8Du8Q5AXnzb1c7",
  "key38": "B96YmJmLT39G2Y1DX1Cddgi2fvN1h845Gq7KFnct4tzuVKnyRa4SLd2FPnLj6w45KUujyKzv2VCLVG7vnbruKHe",
  "key39": "4fBQz2UoPzjG3sJn6ZEUven6Q6uAuL8ESdyvVZ4hE7BMBXCxSjoW1Ro83VE4h3TTUXfxzz4KZC32pji1C7GmycLJ",
  "key40": "5BNwiPivfEZzGyAW7ciNrNCgJ5oTQm5tKgUeJ6tiQNKW5fxHt5r7vwTvE1wDaK7vM9rRqcV1QPnjZ4JhAcS1fsyV",
  "key41": "4ZLR4ZGMsf4N3FsNebofATCfdNtWdG1DxV8yWEXt8FiNz8kos727JwMU8TWLENcJcPyP8uqY4Rx9DWbWifKyXUVT",
  "key42": "3EBQDJ7krpHD6C8uJZdoje4MKeoMwyywCCGhkXXjJ1hQHS3QRuJPhn2LsjPGNALYUvT6CBceGb5LPjdxVHFJh9RJ"
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
