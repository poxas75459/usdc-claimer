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
    "3fzaDF5QZrr47ucnFCiDaJV2Y4Ec9jGU9pyEMRGf3oR5TJNogkHoZo4BHPZb2XLHTzCMh74Wis4Tt6d5s8SE9oin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K9v2uy6HTV7BUyF44CySFVcxBWgb1YeHPN1QKTrbKLoqCZkgMC6UEP15MzEm6G78a9vnVepzrXoSJnecG4kcwG7",
  "key1": "626Mmr39D2gbsbC9y1ysRCzPFqB3HvvSzFuVgX7pLiEtVFXwgw1qK4DEBGUuiJJ6ck8kuDkZLzQpbwTjbTRtQczm",
  "key2": "3pCYLzCiSCVSmrZAu6wwun7gdj4zt8p3zUwQVWJwLuuBx7hg6dTaT6eKY4hL58jitqo3TG6pyDwWNRRHt7hjDY7W",
  "key3": "37QLDY6HWDMc83DJd7vXek6DGQAF7fnkUdicWf7gjPuAscrgrAXdJBxE3cwXbA4Gty7LoWfMtmze2p4EGGopCkTt",
  "key4": "2VUf2Zat2oH4C9NXav32F9BMhp7i3WDk2f5bfjUeXcnUEL5AubCEYtTgk6MK4ZAh8guUQEgdLzCkgCjZ8mq49jWQ",
  "key5": "2eTowck8RDcX79n7WmsXB6vZNq7Cra1jQBH1JGpei75oCC7D932NyxW3qmoR83wneZ63MJFH2e1LwWLu55cJY9QK",
  "key6": "3huy84AJC9sLn5WV4wywLjwhMEqJY5xu8WhxMHxNAdYYLB69cDqcVzqFuC4qCSAzfE6Rs786RYe8fQkLekbVjrQy",
  "key7": "qDtdD94L596aYtjuFyhzN21eyjDRxfZCQmMv4yGupYaZUUETcwPKsATxJBFHas5iu4BDSDUMJiTbNvgc45AYJRr",
  "key8": "2EaY9EBmfA6qvQjPiwWBDYPqomHApcNhsdYEmFFnVjSiMSUXK2fPs9vuEAc1zKqsGhEW9xZ3JLmv72uUCEVVXVq7",
  "key9": "4wB4vPQXZzLDUax8shy9r7vw3223tZix9rQaQcyxMvzitt6vVAufBEWfw1XAD8ivFs9dELhWUeHPZmJbYqQh4NyC",
  "key10": "4zreVH47vuFVGjGqV2BcoU2GULnVTRvX8N8wmcCDU1DkZU67wQPxkmpkF2tZj55QfUdWVLqNL1nixLr8Ri9qQ6mq",
  "key11": "39WnFfmgwSi6Wd1VmHfhdrrHJymn3Jt3LGMEPjKEzJsJU2Z1AgszTSj32qgiTzRE7GWhFBvC5oWZy3CZiKuYrYJe",
  "key12": "39te7NKbmeV9NsUorofFvn6pV97TyiR8SC3FyP8fBe7GHJs6dNqN9T9cADLUYkjTravxDi5zN84PwGtr6fR66oj7",
  "key13": "rWrctLz3Na5V1Wf8GkJrKtJ5jdcTjvMebjVWpK9cZACCiiq3a7eb3innL5xVs5wGcULfUsyDohMP5D3SDMF14Lp",
  "key14": "36WyfVCEUBQ8PE5hVi2D9yGePmXMsP2dsv5aaLFHggtEnG9LCE7oA4UKfTkaB4Nfdr1VZu97wDDQhMFPGeTdUDFY",
  "key15": "2G5xgYFk4L2gdY6KPEAzKFoyB6SHfZS5SG2b1z3MxK26r27zqmjZV1d8r56CQTu4fx9bwSogx2741Q7634THkEnL",
  "key16": "5HjbUVUAE7DkvUL5AGkTRbpWWiGHuzVC8addTQXL8p1XsqwUyp349VznR6Af4HPR5MdsYvmZFBbaPYNMj3VTnSJ9",
  "key17": "3BBgEWwi4USbynJ6jrFBoLwSg2PPaCDXVBaizrZcjLzpE36uNe2z9JtdpD54vNVFyEQz4tiHxqXMJUqywetA5LV7",
  "key18": "58PpXf8JqPLEGBACU91TAmFvjtj8XuY2Q7rjtmbBpY9C2PRc8qp5M6oqjYwS5uHhrQDuekp5krEdg1efkQeGhgBx",
  "key19": "2uXuQEmQzxQWx7N9XTYPbrbvaABMQHZFafrZQRZmFEMDUD6LmZ3LqhNSyZSFwSXvz9za3AmBk4JbUhYn61XFh6eF",
  "key20": "4CMjXL9rATCS6ycUE1m7mu5xYYJYC7xv3zjwRZV7GTwjKoANM96kSH1CWTUMYfv5WRNs91nEVB7hJhqj5JMU2Gib",
  "key21": "2GN2m4TbDTVftYS2fVRvsDEBdMeERBSHLAhtPrcKc9HWxih8JsqBRvTS5kp7ApyGSfVigay4ZLabN4ozzrs9ZfNo",
  "key22": "jmf8ySu6t9jauccnV73L98ZwL1Ka5APQLkWqy1VugT8s9nnc5AVDaWt4KigrNAxJkohCUU6i4vvqBfQwYv1hrZy",
  "key23": "5mTXsTUAwP9kEVNQDhDShgVNy2ZEef7uJdiybF3BZLjTorFCTF9kipak4zQCad9tdAPq8gUy6Be2mWrgtzYw6ZSp",
  "key24": "3c51Ronk3zr2mKH3o3YyKFqjyFXBVcisCZFXsYutSNLjySEmYJSWsVrnJDHBcBX7WUZQHojcRQ2KYHiHFN3spc5F",
  "key25": "rhahzpXUgwXDK2HC74VU5tt18r35m2sbxFmiA7rd4X8zUFC7TAJtks53JJPBWJWmZZnE8448ShpbNRd2EYk7AJ3",
  "key26": "4tGRPh9PapVtiAcV7i29gWQh1G8xCEqFf43tMSacJzErSABzgEMq6dcskT7jaqphHdhikrazkc9bDYozfPzyJruW",
  "key27": "56JdQbjJ61i47T1wRWUYUmVRe3nrMmBRkBPR7enRGyfFt3UzD7HSDcHx3xZEiki1j1no1gMhq5DkFz1Nt3q3o3uy",
  "key28": "2QeKJUmSugjEsvd8EivbZA1Hb1D6WtUVSnXheYCHdNWAztGMVFD7whBQGs1XmTmE4EwetFWQau3d77iAGuSE2BW2",
  "key29": "5fNGg1Y2xHrSheXSEN5B248PrBPoc1RVMML3reGMdKRYASag4WB3XZhajMCVN4STfmti5JzVX77kTQ3bJZJB6sxp",
  "key30": "1BvBJWQHUtKuktUTrZ9RqePYU58AjA43ChKkru9GSoP4chNeCjtgwPRX8GGj3PEvQD3b6hDYTJhWzGDZhKgqwqq",
  "key31": "66Z6oR6qrXKbRxMDgsBMT59JhqYptGyJPqC9u4TeYYc1n4aCQxJ2ZgpomZ7NbH2RQ76xTGC9MP67u5y1cEyEAsZu",
  "key32": "4BjbKAmMN4YAxxL6C1K9dE4NaTfUteEACTmHn2YEJtpjdCDsRkqEh5NanHChU4G78KdNAiTreLh1YcjfJfSbzYMr",
  "key33": "W7eT8ysLDb4Xy9Bjd87B8QCZBfkvNeCzPn44xFJnon1c3uRYZoWpgqcgvdCrFGnTWTTYUv942PQfQS2fufj9HzV",
  "key34": "5KCGdueJXsPJ4ru55CJZDqWeU8QyNhSaXGme7Q1iSDazdyktXpaCoPFvhGx1C8G46keCWn8jKyp3Lf3g6qDN1mrc",
  "key35": "4JQ9z43XXKmYWamHquPr3JoB4o78uphcZSKc6961HSzvWffTAk8ZcMcKY91D7L5wS6tCUmNyYjvx6EyzhHE5sNVt",
  "key36": "5SpaKnxb9yqzvY1LzoLDEaBVD5dbVGAmASFM1xyfj5TVUXy5CnVMwTcoNsAK9yjSe96PhhyzB6AUo2XEP6wCVBF",
  "key37": "5ubpBkxUb6qh6mnfwuXfKbKZ28fvUCkj4oEK7Z57xvqCBut36TTbUQFww6xRS8UMXNPFxK2o12XKCLuszRMUdMuK",
  "key38": "5fViMgi2CU2SjidF3Qv2zXaUVqBvf2uEg5aYBnq9nGZhHqNYrBoVFr2qiBJwVtgPx4m9axupKmmEku79LWA76JMu",
  "key39": "4WBhxwT8b9mzsLChXrVNrLCCwHeWo2Y5hwfD6sQzPfotxcfRbcoMohYrnXJqZrTqUWzpYRT41aqMgcgMe1xvDHqi",
  "key40": "4ospwtv5JMCnPpayWP7ThRdnUMeACvNQaZSgjdChKr2R2SCozw9DA8HWdEP4jAewWPy2eVVPHHaCjxcKVREi6iGj",
  "key41": "5hytNN9n2x2isxZtiyTGbdEShhhXVnEfjapbg9CQ1vJNbX7haLhxvR71L9mV97sRT7qTAXxYgqoUHNVgD3LQ7Xxk",
  "key42": "56JvwTXNaJoFJaejiTDeewfQYn3ZjmGDExxxNYrh61SRzAdCr6JUjLZq8JNdRAGL6mXjULQYLcitchcvvYLThSAq",
  "key43": "3iZCdr7TUZHtpXqmgCbJ5fxdHuBkarzvsuHu3W6uAB6bGhDnxXFL8n57JSCLg6s5S5Y2Cng8PtnCemffW2aurMuG"
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
