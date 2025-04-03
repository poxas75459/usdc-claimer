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
    "4UzvTmdka9PVUPmRoRUZbvzpFj4uduBrtgumqRc1RzeiNWh5Lxuwodhukc7rCPL43pqm9p9Jz6WvXSb8hfrDaejJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZuwQPNXcZtT4rrF2ewueTq1JPyTvsjFuqZUCLE9DG6VgUaaBk6am2RKvavqmrP9AGDZQvMcYaPvE5Wn1XZk9xty",
  "key1": "5RWYKYTn1A39oVKaj1j65ohXp8xK9YpUiupgcqpYPuanNwC9bFcdURmTBAwhnsZoFYe1eyyy52AgyXV4zpqX9VHY",
  "key2": "3NjZN7P3hR9xsaeWXe5hdeJXvGNENAkoEy2GRfriUhMwxAoPhyZA1p4skg4MCp2So6ykQ1BopNwT2EAwJXLeX5m",
  "key3": "3CUAjgsdzK6x68z71bkot6dRxu8SsiXq4WDm9PZKm5EHEwXcBuQDiJe21FmgLTJHi3393Ps2TkboCgY1TNPQdAQx",
  "key4": "3zcPbAG1BUsaGMrN3kdP6KuGoSXHYA6nyRgPAVMpWNqUZeAj3G3EgUFM5KiY9EfF8EYACbVRVCzEwQmYvTA3cRXE",
  "key5": "25uDLi7HsQBZbcPYBoNRW6nmippGKMMes9CVfCidEu7tj419wTUHU9pfVDFuRsegJpNcrfHVY3WXKQCMbkajStUq",
  "key6": "3RcN85qWtxeLUEDVUhtpRGD98DcUyg9UzXpDVxKmWAGo8TKxDDUZhc3cZ2MPD81F3xr1ARdVYC5V7fresoSsjawn",
  "key7": "3aoTmue6V9ftg1dcTkLUdKfDCSDBLUL9txqPgfG25gvFrYDeseD6LwZ7xvbrxAx77PbWHSCpVJBZ89uqu1yXwBhW",
  "key8": "4n8Ez2k7YpdNPiQG98Z2CwAncmzmRU8c38dimf9gn4CuJgwzHSAJFUcjxeuw5JkwwZGfGGskVHarzndQab4usetv",
  "key9": "3m2KWMNjZPRvsCkUf54Le6S2mGRZU5maSUuZgbLAYF3AZwteioiQQbatfwz7iQ2fmJBEvtDKTvHTvtLzffKzRjPr",
  "key10": "3q2U4kpZYvE7cAyNX3wEo5PWmhxUGkdCqsuyMPLvXroj2BLmuppoqcxe3oGW4xUdATVncHiq6onCU7SBuD3PbXHN",
  "key11": "66K6e52XDWLzA5zr4XbEka4L6DN8s1rr4z6qQNk1TvhkQwrwRVWf3jYXnAWVcRRtCVRJyYLGgWzUNnyBtPFE4NvJ",
  "key12": "5HytgNhTWtmv1dYUFhertkVAUdUFsBNgGY1TYxHeb2iCYFWttracq6QZAjuQg7FrxFpktWqg3oVTJ1KJq1VXLWWb",
  "key13": "4FqwKV3XuNECAoAMt8DH2U8bmcUCSTyBATwfZ1niAQQBVj1kWVAZV87mtrTGZeKj9FwDL2rM5uZwegM1D2MPGCSK",
  "key14": "4G6sR3uLHYuYyp53A9Z5zQ2CZa3iCcCnqr5z5HQQnGEXmMFAxwdGJjnZbpjFi1j31RJrRFVStBcDK7bo6YXybhz1",
  "key15": "Xmmqgo5RqvuSET274z74oKu6UmoYU1MazXFPLDP69MbUUzjdZg8XzRt9YBaKaDQwbL8YAnW35Niu3JDjLicxmLc",
  "key16": "2LVm6AeEP9CD5AGJx2iE1TVF5EBi5gwkFvhyxwyhQyRdseENVbQbtPThrh7HuUKPRLVg5XZwhxwcwFa3zeTa1N3H",
  "key17": "2MzBojfSbRVoGRfxb12s3u5Q8dAe8BMa9UAG8oTw7HhnLPa6ssFm7bYmx3xanxpayb6ytbpVu9ikVg2eEKXHceo",
  "key18": "5ZPDynYRNsmMEoVZAkkQ8bKph9zwbUooWkshHLhQZeEHft7WT6hXGe3JZHB33cugh5937Mp8Mczfg9sBboAd25H7",
  "key19": "5DQXKT9tVNrDVEsXgdp8rfxWsPkZBcrAzqQNfRwzqKAMQ13ysx8d1DiqnPFEBYQawFqFELSPoEyMmTodCbQsQVWS",
  "key20": "PaXK9LSRXyaQYN37F85a3GQS3Xgse6ZfHuMTN4Af4BJ8ZJ3CoBH2h3iqBCBf8K8ia3f5pw6yAdx1JJQULyT1xtJ",
  "key21": "4U1zPzQgAJtvW9ZVFQoXAA9onmEF5N26G9ZcF2ojDWyP8MEuyBELvCjeAuCQvK944aZ3bCMX2WdNpUsuyuHpq6zK",
  "key22": "5Cjn56ZDVQ6jm2W2P4trDFG2VWeZc8cnjwGAMaS7CDKD3NKLLYLDBtHUkwxpreV9yNRYezaBLUjbSpotfY77KpTc",
  "key23": "3Q7UJGLUsfqnHdK9EdQy3ZtvJ5ttua3eUVVhTiki2JLESvwr9mJ7fckj5qvofmctC91578GBbbHXmBijDo5xAmz1",
  "key24": "5anycjWKSzbbzHDtxhCBgbQu5XmKb2QkB9J5LYpU4yoRvicCwX6VfGhbsw9vaEqqo7JHf5u2zYwfeBmuSzqnwr1E",
  "key25": "2FdCzGDY5uH9vYiMaoyFPGHGqfTSTMzNtnqVcDT3dyQvx7538A8dRvZUDVaRigK8Rp5LZ7E5vWqCwHQLqDWyDwWA",
  "key26": "5zCL1zgGc4N4zC7A9WHh6y3wLmwXSDd3TH7hNLNGYjD5Anm2dyTDnLGtudJup1fVTixt4w5a5UbQFvFVFnDz4Ehh",
  "key27": "2BkgvAdCr8B5fffm1gaLS1NKMuHL3gfkoXYRShXHnibyZoSwoKwbB61dyhyB3mNEX5JjY9FU96cutFMKE7hecQLk",
  "key28": "3edUrSM4Xtvj9wLW8Qy13BmSZpD52LhR3P6Noqjc8NfRXUpCkMX521XQZ7cFWhdHsuv9JEh7Dku5z9a56uhtKnW8",
  "key29": "25KbZhriSaUcHYYLPva9EpAEYKUXGTnhGpnCnSDHB2HBazdvLd1SEPAx4qww257cdu9uJ3TM6NoxxuXj7vX6BuRi",
  "key30": "yU1WAeJuiVL57XUXGGBDhPvRz3fWbSZgx5hvPPrmwgJN8NzsN2RkgnRBRtfNKM2Frb9FiTnTCdfWJeiYdRXPGCZ",
  "key31": "3KhLz5nPTWq68tMgndAbMLfbTiCrwvjDJHTkerQgTcjr8dUovHNnSVEjjMiVEQyJrX1kpdaygbq5pcHdK7AToC6X",
  "key32": "3uVR7CrRq5JjXzgX1JgrtwVVZcFFUEQ5p3QtPFSzb2RU6hw2Z8HumCRD8NoBeU42yvJGBJsoreqE2zPQeBKr15RP",
  "key33": "4kusHiwBzuvanqTeo93oA9DtW1cxMXSJDo1sF42yLKAHFvZrXbBQhLSxXDYNg9NWSesUoqFZKRXCeHAwZZEdirD1",
  "key34": "MWB6CEJyRexuZqDYrvmq2S42epuSDVAtqEq67GHL1p5ZAPcgVecTGp3BjJJ8URASMQp1FxnWbr3z2GoMUcPFxXi",
  "key35": "4cMAeZ8iDyDCwBeNNoUayz7nTGPK8PJn9JLp1kpeVdVqejhufHLqzCo4hcZWuTDdKVyXUbagu7BY5wujrUsiBi3Z",
  "key36": "4FvZSdnzA6zRg3oxUPdu1DXtLxVfAKEuwcZRmMS1BFjM51E9tczdtSD3gjMAgqM4tEDC1gUuEEKoq6MiroiER9YZ",
  "key37": "4szoRWub9WY6EvjhAyMz5B1yCQPvJFKBKYoMoAFCH8JXq8mSSKKLd61GEtqNUrNgRQVKYVvFM8DxqzNjbg5A96rx",
  "key38": "4Q9ASe18qNCwsWbAd9WudjAnRnueJFpZPbBCFyFLaAPLG9VWDvnTXjirGJAzB7Bo4mYXXZZMciDybJHydm1xjY4Y",
  "key39": "XSTn7yvwHkWCfocPDbaLt4Fq9z3raMRdiqajwdBDYQ2B4ZcSym4MQSGtDupU4e1T62SbvBTiFA3V3oKxGLb7AMY",
  "key40": "yT6oQSYo7PH1AQzxhnBw4DPK66r7Y2RNjFiCGuE1NYEJC9oRfeLojygHU2ZL6F5P3HWg4sgWhh8UTuKiKWFxJPP",
  "key41": "5PLtXzLXG3CuW4hJiD6adozYE6gExv2m8dGqH5WRHG8aa4w6NF4mEes55RqKBzXkBvBxYukrbBJpzYTpoZgSPqmu",
  "key42": "42g8TdCYjX3a33WztYxtwGtn5Dd4GfFyRidGnUjTY8qwbrsUzzptRA92bBNpykoQohd1hhFZ96VtP1SFvuYsnKYH",
  "key43": "4McjCG24v4aBPVK5LMCSiA7JyZMsSxJfNSkGSdRERaggkAR7ptjjo3QrreCevQeJjuiKfjGFq7iyWR4Rdtg8SLTc",
  "key44": "5a55ZzXFkefBkuRnyWNZw2F3VpuiGoP5KfCGwSiuPQnchkMXRs5gtwod9B5pXVhGm9RmM3y4Fj3XFtS5pAeMi6aZ",
  "key45": "fzVLqTHzFH83E1nBznM5dsTfnw9ZPvJSgHSWVNuLNU8Hvd2NaZaiXQssBYxsy9ZL6X8YvEgPx6G9P4Cx82SiSFK",
  "key46": "MovCBebG6yNL5JYqWv5sVn4wXivVLVsJvoMo2XBPiAoM725NK5tofCRP7wyZe2WdEX2g7jcW6AkvApFSa8DGPh8",
  "key47": "aiQgvaWUC8q7RFZzKUaXv2G6dmVceJFpHSJT8ejtUDeJKZ4cbf5J8TMJMYQTT7zpeMKHbhsG9761k8EVNKxK4nR",
  "key48": "62zvrrJyeWASCMXhDqPn1q4RcA6cZA9yspt2Ud3X7c8qv9MRowWnipPPjCsavsx6ffwGWYnzMiaaw49JkDFoRCK"
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
