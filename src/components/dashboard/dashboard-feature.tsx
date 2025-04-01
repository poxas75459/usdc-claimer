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
    "3mQqCYPeiDnahw5TwSmFNuAQa3ysAjvaZzw2qBFt1JcCgDJaZjmCdyYgXL9e9FgSwVXsYTRSfV6x3C68N6uiYZLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8P1jSxNQTESwQKYfwYmfe9P4gg4cqJKXMjsvR21dg2tUqUJnL8f7rtMPSVAg3aUD5nTxTtzctpL3bUDLQLgpQT",
  "key1": "5ujPqKieCghGmgnRaSkSsv5PyPq37yXvpG6DWy6u5ABAcFLnJRfnWiBpLc98gSK8e3ov6C2oERUuNvo7ENarxmkg",
  "key2": "37u3hrHkoptngHmNE6QAmumxE8rUpiyPRqrDfoUTwj9gH3iLfsYE3GEJuaQ3fKLJmh7GZoxNvLULTvPcaZNiD4NZ",
  "key3": "3Tz1mD9wZTUwcAAovJ87SFpE3AJtbVfnqEFqXdxTDKvV4EnWjbvg5DkyBgcyEJUGnmXytCGGmTAQ7Qxr2oTpfWqu",
  "key4": "HVBiD4EfpvkZqaJg4qASULTwhx5S8tukU2rQUEr5EgvnzgH6fvHBY2beaf23vuBPBAYjHK3A4bVeUVxdJekNjri",
  "key5": "5AkthRSfwkqx4Hyr8iK83LHGYxKVeaysJ7NjUabTHuHDQwAKyiqw9tbniYKC4DoKCprR5MTCz3nXXMwHSswKSBvh",
  "key6": "7wtnH8MPhcTnUv25QURvdGy5p5YXLpbSTD1Qo1pSAnV6XfxPUC5mbAL3kfjDfL72iZ45E51Q7akzMqoKCw74CGv",
  "key7": "3dkgDTU636YQ9B39FZqceYhDE5jnwnV1J5iqZj6XPkJGNQugRL5KEtKJubjNd7sK28w6y5UMMNvtYoPPygebURgv",
  "key8": "2y5w8DbHhA2eHo9iaGPLQa9wZYUHw4dMVskM15QFM76tU8kHgG8KkRbNcRLhHkB4AL8UXB1vr3k1SDAiqPb16U9k",
  "key9": "61q1sBe9ZuYmYi7oZvgy9W253Es4FXqbf2SyCQvzihxLvhCaexUDeAd6mQZwC3FyHfomQAJFWU6jV7rYAn5xYEfP",
  "key10": "5Ewcicfdz6tXkhXEbFaJfBdcHSJRrjB49m7cejXs5RTBwofQBBgK1dyy8WjZQoY8duzNGaegDUWaMnZSaPawQtKm",
  "key11": "2zLgiTts4urh91DybMo6ST6fpoYuNhx5x3oseEypJct1V6VHFiKsou6ZAA3AFwJo6cGji11jbb4sc68S6dxokhww",
  "key12": "4fUp3x94uBfsS9YaHoRH7fBmZ4y2ucU8HKPujVEeW9yvsuDHriECJic7UMsnVB2PLuxFBBMxTuweHnEnTV7C713z",
  "key13": "2Ge68nFv4aq4r7dKC8Lp9jT9WfGsvYEXFp8jaRc4grKLUCdXwMKJ6Q6Fif3HU9Jg4TQRFgXvccRHY6qNNMfUzDL6",
  "key14": "5joHDwoNthY7kNT6pzzdYkVBLMr4THRu1ZcwbySe1zqpTaJWPpWGKwqtCvVggpoAs3XNdtmMUKANfjeao2tqxDAB",
  "key15": "28TGyPTXCTqdZqdr5SZRPTM8zQHRoA3H7FYJYBRXGu8ZSc9NyU3JZcGAPKW8nnyEccF5PNyyzumer4heLxV3t7Ls",
  "key16": "39KePxmTZNG6YBednNR3HpUvDhibXmYDAqDdixs3FDenDYspKYCVe198Uao3bVPjipALPxiciJUyEppzAUSmyWZp",
  "key17": "4KFoTJSY3qvurwgkZhRKLkVCK7TVXndiwxiYDdU9G8wZXi5zoYxftjXxDpgWQDpU7JbjBM2MjEcMe3hTQpYMS5ac",
  "key18": "3E8VzqtT5RSKhWFBHY3At3Bcfpt17tBMDcFYigSpEWJqN6jzUK7SE1wVPYabgFqmWFBL3oFzUJHhxmbxGFLJ2Eef",
  "key19": "3mC1nRa3rB6BAXFuGHA8fmruh5cBzotfrRt61WoYuMy6g4ZvuQZvJcARBz3U79jqP1qesL5j9cBCvqr9hcP3Hd1k",
  "key20": "pT26mz3c8uPtESRzc6YdhFbNiCNd7H5Lk991NV6XRhNCokEcVPEJazXwcQXzEwbvETbw526ZFYpW5b31n7F9JGa",
  "key21": "3VUs3CMYHNmstFHeeUfnxo5j2Hv7zcWdyzbNrNjiMwx2N5x8wSCjNktDLGFUj88UiMmgA6fQFtfcRWZWR6Yaa5f6",
  "key22": "3xXNyehZGAKTsyibrwKMYZ6x8z7oj9n8eGk9qjFePPJ38jpmzgrZMJcwkJ5cBSTLbiNq6FKVrSgQW55GwehxwiBr",
  "key23": "iutkd2roZxdHeSiiNAbS81XqCtF945TSsBejZt2XUMhoCw7aq6AEsMJJsh3n4C9nnPSxTKFQ62DeJyH1WMBSGFY",
  "key24": "5y4AkWrCzmVggXNnEDg6EFG7Tn2wQhwNZDjsuEigwnHGeZwyuqVqm6R5HdHcHLQurkH1w5LMTnmi3TFD6Wic7BSY",
  "key25": "32SPsmWVGWqu6SdRLrCxDYAk1T157nfGgE8R7EgqEciQmYQay7vZo1ZrmMtbNJAojbt5BUEjLCg3bwctXNrjSkei",
  "key26": "Qy9qfhLEtM99keW8fao4gjgHMT2R9hT8jTA5sREqC8UgqnAwwagDMQaZhRErj1LyfnP34BG25dtLYbk4j9h2kZ6",
  "key27": "5QN6jx2szHykuUwh78oPfPBkNR5SxQi9A494tqH7FfgcvYRvXsViPDTtGwKavF3MPFdBTq7nb7QeqiThrSJhs78s",
  "key28": "4MV7VnPTLZyibxdJHGuwfiZnzxn31owPCQwMU5RQ6VSoaqtGYeTYhL3bHJX7PFTwenKocpPZBADvq8zE9qEUkgan",
  "key29": "4ZiGUGdARQQ6dsXAyu3A76FsXvUmGttuCBgxDbgKJ2PT6qkzrvuYiDhF3XViiy5BjWx81WJ2YL6zrCQ26PMSpRan",
  "key30": "5ykd2aekybDLGQXEG6umQj2A5RvFDpiGjg7NSmHxf3tFY4pNVi8egicX6FGQosWiGcXTbnt3py7SNSj3XwnqvjeW",
  "key31": "65pYTYAVERyw7mR4D7zvySFJzqUM7541JeJvEGZ98k9SdaLXcCzbbcyXWP8UW89FhRLKS5EgGkdDFTcHo9wLr7UC",
  "key32": "4bnfn29R6fHxb4bNeSFZxMLtZqsoyrvFdJe15B5SnJPvRarxD96q5tRDExugGBeGqMxT2EohSriottGbKJFrTJiS",
  "key33": "4joXZSBhzTcz6UyvfoQFUq88y6y5AHWc9pUPyXRmCaQTN7py6DtW2NEH2h6MAKvcxyuBM8qSnzP39NozbccLFBGQ",
  "key34": "txPP8h8KAQyVJCgEXaWzxtSTF48EuVteyWp7fRM1GJtQLSd5ukwAxK2uYHxf1AS1SesagwJGdBuJBXZLAZmVfZD",
  "key35": "yAgVHhNTxuJKMe97rmxzem7YHJDuNuqjtDNppzh87D9Qh5UTvcX9q1z5MWtJifEGJHRw4FKddj44e7Db2fdPPd7",
  "key36": "mdQJUVwjkmJ7pBcAsmHQXGi11m8RfsC9oMWLpWk3bNF912ZMV4BgcrVTEVSMKT3kQLPRxgQwGe2dW3YeguG1h7f",
  "key37": "3E9EwS5GWoSXS4cp77Rvb14TUp7jXr6a7XBMk5JZgqiVfXsK5SNc9ofdx9FhcaVAvZvEqP3trbycQfQ5diinPMtx"
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
