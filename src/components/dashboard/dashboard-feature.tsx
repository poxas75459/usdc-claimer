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
    "vaxWXDh2FxAvVuB79L7EM5pjv1okQQ2Y3V3erSz2DnBpFGJrR7SiArferZo62tde3nsfSXVVGRbm6gzeHyPmkNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nuqgbp45dbG8VahcQY8W4atHYX2KZpTgSQ4P1hnUuV52LxGrNydZUUyoWG2Aet2oN2PQtw7EDVL7GC95VJdTWJF",
  "key1": "3UtqQQ3J6UPtNZ3dZ1knF63ydyhKEkcVA625xrDzeAAs2bZQD76Q5r9hVhPyzVVZwWFcUzB6S9n7uq51JMCW7nh1",
  "key2": "2Fz8iNnAckwMjWCoRQ8nw1MUZA3vCTnhKjweixnnkp3iuLVi5eFeNX1JuUCwLVg14obZgE8y97q8vnHjpYGxW9jw",
  "key3": "7A7fibk8s5D4Jc9Z9c4Kb4dChfdQwc5bHGzpAKoeq6aznYmrXnCz72EaJBRyV5dnYVmbzw5pnk2Hh6vD5tgLxkv",
  "key4": "5uqR7oNLeY2wXhTw8ANaDE4S7xRGLEeDBcbqQuQxjE55i2T4wMxfFnGLPtJzcpPmzhGBMREN5LSUZmA793tpuuKm",
  "key5": "5TKZuukmiiY1yVcAEZgSLvFyJ8eNBbje6Zn5Vue5SyzPseuRkPRHXnHcvUwEbM1e18kjRuqx2LFurpYwMHXgR74g",
  "key6": "2SocwgaB4odFb8BvkjiCoARXKEXa46Ktw1DpnuwfmFGziARNuX1uE4dmtPjNsk3JcE1xTRGCc1CndfSE2xzYDTjt",
  "key7": "55eNvhKPAQN9zRqKW4oZQ5o8kbnUt3KiAtBGuwJKNnzhS3HqREFi54t97yV3ameaVwUtPmFV9BrzRGdabUayQgbx",
  "key8": "49JX52bkRMKaJweDonwdutRqgGbPcJoZqUjr5x4VkWUahkzTWRNe4WnvPxeaYX1PdduKq3gambQbgY2z2zXoC9Ru",
  "key9": "CftngxjeER8qMm5LBn9eTbtZN4bX72N32DRDyznW2CuRiud43fCY2t8tQkP3oXiZLPWwGHX7My6cxQvhwUdn4fJ",
  "key10": "2aSrkRwEj7ScT2VjYRnKPfDGZCqZ64iphdHJ3mHQu1kWUxQH1makCkbB9X2Bwh4FL5ofkyubk9ov13EFQqhJ4cA7",
  "key11": "63HQCSivwxWY1gZUyAx3zbofUEghYRVGHT3hT5sQPHV4GsaiycubyDNna7wCSoZq9xdsguPFWUnQYbs1cmXBigLP",
  "key12": "3FSuqXGHXwy26tbot1v68i5BHLKwfvWUoehEVop7czCbDQNfXq7X1iVMHQE7dmRywTkVzwVybp6kNkdNA6YHMiAQ",
  "key13": "4jZo1TXVahTrNa1MXKhut6GhNqqWuh51FomUFw8hqp4nR5Gv6nC1FiqPt8HvQAXouivytxTHDUk8G52YwVbka2d3",
  "key14": "62grPg9CcoENqjYnogzk7j3srPSfe5sRsCdS8STvv74PzBetTaecAfGUajNvJXx1R4cBAQa48kH7VFbANbXAjEuw",
  "key15": "61Ek6QLxzS8PaZ36wzRHuMJvTaoJ8V2ijn2x6ocpyqwEGXANBjJiLK4pbosvh7RnH1sjPy4PVZw2JsKT14n9Cq65",
  "key16": "j2TLVNatrmDqAk6jSnCr4tCCkxe4oErTMLgvWHzPQjJ3yxPAbHQyLydc1GTbh7kHL5sBrcLko9wCYLw2pVYMSXz",
  "key17": "qRfFDwnr4VrkLwV3SfTEmhQzyYqJF1uD2LXZsfAAZRocnBRvbqgBjx6tTq2K7RYkj9Z9dLc8X2qa5Nc5fTcNXbS",
  "key18": "5fKwvZ6Ak2dGWJR1iEjWeUWTjmsZYugMAgS7QANRiZRedDLQyBeTeEs1f5RZ6KgNMB58o2Ty2nw6y2kTcR5DaEPu",
  "key19": "yhZprUMZj9aYJB7zaNJA85SdUDhgpfmX9VrAjuizWGeJSPw5MfuWbzZZ1KXdeTBn9pr9vYDG37wUaB4r3jqoJcM",
  "key20": "2v5ZfWPTLb7kD8nqxNEe9nSZXUDeuQ8eYxqF9zrzs31tMjKqdbbcTp4Yn4LYQ6TDCiu2V6RM2rWCCXCduwEL18i9",
  "key21": "3yf6Nh136U3bQ2MwmuDNN8wX9tu1m5No9qKzSS2LMoNjaHWnyDtgvCZ9xe1hcWkjTKHCaHRYJUd9ehGJfMnWRqRH",
  "key22": "2SyQkJh5sKF8u7i5rKGKxgdaYbyubDfvPhA8hgHMGaJZX5TNRfZkUZ8nQQXiwsFwJG66envysyGQDVk2hB3m1JXC",
  "key23": "N2zkS1e5BAURffrCqfZbGPV57LkoCShyFqZ9qy6eYkSpgTdgLVLGDmr6TDi3TSRd6PuqegyuWg8Ks1zNS8re1dK",
  "key24": "3bHFN8MnUUNKhb4kAFH4K7RgDtGrz8pQaBM51W83b7REj588WYESwSAqTLPrEPygVnn9NivnsqjgL91guZ9fr9V7",
  "key25": "ztfDD4FkuKqnJQQY2XHavQQf3MngyrQ55fYv4XMCBTnqRkLFLMFfpmUvvVFFAoBFQ9RoKVXJ3MGrdZDZyqbHZcx",
  "key26": "22Y88uPeYgRSc7S6FermGiv9foGdAnbwFfaevMQszgRZUymSTdvaHeePBVuYKrtQeY4pLSX12NgHyeFP8TzMYoB6",
  "key27": "4RWycx9ECLZ3nwRs2uwZQ8Ed4FvEu4L4wrggmG6ykHmgBNkkwkJ1T8shDWs8J4BnQbDQMh8H4cN996M3LxBBQmhX",
  "key28": "2CQPYPLsxJki1ACVBUjrztd5LgJw6K4Ui7yD5xwtbzEpnFpoDQM4GRnxz8kUAdbLhRZPJEVLUEz89mraU221k8dh",
  "key29": "57vCocV4XkZaphdB2SviEQRLrMKGyK4kzAyewMsuASLwubhv9fFjVW6qFuj4L1ERg8bA6xRfgDqYJMJcg5UxJRLC",
  "key30": "vnFL1mXcxzyBkFfVJxud8j7kLwE8FmVZKbhLtmYSzdgxAs37oYU4qT2QzTprFRmjrP79EXhgz22UnBCcUPBLMPN",
  "key31": "32YRAU3Z9bnmsznqdbL1xANZg2Uhxoh8Ate2HHJtQJvRbzTzo1nizY14ev2toMRrSY2zj38qWjPSppnQENEr2xds",
  "key32": "2EYAtHerkpHRWJ7snex6j83wrnauLrBE15ZeCgyM8XX1o2zQkBkadPVpVt5o34GXpxuYQzvNSoDNmJ2h41GTE2Hn",
  "key33": "3h2QodYAUzEGSzyXkkY8SEU3M4TLsEKCnPdvMLhdSpuE1E9sSzEof1nMDZo7JohcWuaFW4kKtqHnEZbtd9HJtbDB",
  "key34": "1WbkJuBR5JSVcKffCXdpTDREvxRYgq5euPPtMFg77kazkqSu5Gdwwh3gQ7MrSjUkCjjewXDXT4indf8oRp7ykyB",
  "key35": "3mU11nnM5zkLhsBVypYaY5ijttP4H4R3Li3EDmRHKpjgJ9xfdcPMZDh6iXXDj3sTZStW4jEuXoHpcxxuzGhMYVhr",
  "key36": "43EM1qbCG41JbbH1k9JXmQwKV44h6wWQ9yGA3QzQkuQjsfJ5ADLrzLRaHRTaghLsQa5XPNCHbcLxkNNnhy1XDhyj",
  "key37": "2US7hiGZ8crrq6g8HTPoBkW75amoppbZScPVwvuyGpXBA1k1VfrJJ1MjAvm98uE5e8aQXtXUDhGZ1a2gfvZ6aWHS",
  "key38": "4teY3pN6o3nmx841wR9VXEozXroR9t5bqiPKpkWAQaSuhJ8Y7CbsjdW4EdWVG4SxACBetgggSTAWUva8sXRfTsaC",
  "key39": "2JV3VM96m8wvJUk9iwK2ZPWYj3GCoVmYnmCVFg4LL3ToVgq6no3dhi4mw71DCvRj5F5ThK8CRQJn8MUcG51b3xPo",
  "key40": "5yDyJVSJ4tbquqBoJtLCQALrvz8oyrrLtpA19mxbpXmCp7qUvpZeeE3Mvq71kc5NzfWfjtJ7ZaZsK2ncDf54iSV7",
  "key41": "3AB5SvATQEyMxxhwqwjByvLmS7CtgFzf2d7Vn7bsG2mQ1Acy9xm7v1DNN4v4jYpmo5bWmn6c9TkzkEUssvKDgRUo",
  "key42": "4ePowo9tCGJacd8wRYxHxzLeSV6xu2mKCF5CAnYn488DY3Xbk3fVu27VbC1xLNDrk4ZhzKALSiz4YP5J8qDPTYCM",
  "key43": "3DePHCa8XkLFgeSfG6EPs9xTbEzeW5aLCtNdam5PtghUyBFKgr7r8bHb6VWNX2LcRqa3MUTfhABZdwxntDQYgoS",
  "key44": "5esH88HjEng2LjEkama7ML5fprVaivtvgWYdxEAzQdGBxUdbEh1D8YAJD9zc4mHd2ZULG19W6s6HyD9pDEu6ZrHG",
  "key45": "2gvGfzGPzeLFgCFp18NgmU9xha5KAf7PzMJ8v2ep387Jk9GnjyxfrX3ErkYnwWE6r7S4A7wdN9zpi4f6N4eNju7i"
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
