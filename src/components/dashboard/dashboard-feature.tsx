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
    "3orXHqzNN57VqRbMRPwcW5oi2Gu7aHMsCaJDvA8uNSP2m8rjJXRtTfAGL6KR7RQTrMQHm42srpcuVfocsAPm38F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HZwkEWbMJzwJZ3ddAZ3FJReiGExvY97Q5o6Fsf3FpNPzhbSK4fMnqVZPcgkoYE3L8cjkbZffcvzjMLFMNuvQhyr",
  "key1": "4o2CCVahoYP3JqTF8tQWLDChHERmKQvexLfu1mxRrgKLLhwHvjNYHnarBcFCAkx6W4jDfaCbfyKFnx5RQFtzy5Gz",
  "key2": "2Jdq63Ty63nbjaMgCrYTDGWffGtwyLp9h2siUt8mQwhi78xiKxqGEYFR9ygCVxULCFX6w6ThT8dd66S5GgXyuyij",
  "key3": "wUrXkTKHhdnWoNe71D6NPRmjP2U35VrUcmVvbrCpiNqEZM8qVjDw5qEPYkMo3QNjaPgwRVVh166aFDMTTC1J1ru",
  "key4": "4RqoJJKWazc84Vo3G5igaVnSNC9KSXtB6aMics5qUNDE3hyWAdg6xx3kfBA8hao5kcL4FQdkDjckqtCDe7ULfArc",
  "key5": "39c6Car9ktmWtQYbVE9JGL432hiuNfpL1b6LGzhBsjU6xDVrT5j5vAKZxWQoqgfEC6pZT34chBnaTyhmh9jac47d",
  "key6": "5hwFXDQUXJ17hfaCfs9WwkyAXzjWgRk4u5N5oBovVvkH2MkX5kvBUBubgJYEnD2upfa5EXtAHqkDR3QzPkaxNAub",
  "key7": "4jCqAKs3Li9iXiTXLXFXJ2Pdod49sXWf3zt7ZMTitr16L8iBVFsZzHgJBwmukhuuSLyoBhkFnrGqyc6fzRXCysR8",
  "key8": "2RWzHWumWCDUHTWpvYh87v1q4ZYLwmSg6mVT9Df1nk5gDEZw1VTnKjMvB6zyu5aq6zNo7Ez7NoisUi2UB8wCSXxp",
  "key9": "gmCqeqUVsJUTqhXUKq44sKMMqNw4x6axkwLK1u42wguyCad7dJi6wH7ukdkEySLaLhF89P8GC49YQ4HcM8SMzeq",
  "key10": "3iNedoco3CCN8yxBpKeBzV1DPnLaAL7JxhmCoBiYYfrqhq1xMJ6iC446AP2hAnT7CTQrbi9sUVqp8j1XMW7QkqaA",
  "key11": "5qqLufedGTY6N9J9EnuMnBooHPwwY8TqyZwWPC7iCw4DTsFPJ4N5raHQFUXEghxn44bkunJ52sakAqwJMDr6iokX",
  "key12": "4bgEvsZ6o2AdijQnEwBwEkBnSyZ7PvwKdDLtcv3RAfjzzXewyScVLJSEGLcLnCsUpU1Lzj6gs1LYuSdYPd6WdLMe",
  "key13": "vf5DWptgmTccvE44D3SjBMSjSKxLakmknG8uRQfZchX7szyMSdGmjxqFrsF4a5QXhqSRry4dHTZRCReLo2GToiw",
  "key14": "2Jjbg5Cfdapx1YtsZm2cMULmj2qJXxSQKofvAbyLHVr7aiZrNbctJxbKdjjCeRHtFfoHSX8SC7KT6LP4xDhgSCDE",
  "key15": "2wRgoFVh1anTfr7xqFggmvwNQaqetsxJkYpfge8QyQM8jk4JxFhviTxpk2n73SKfBJE6G6A1eChB2nbJU6DkKXWC",
  "key16": "49kb4ABxTjs4DHEeYqaB8j65mch3rxP6cj32EYQiSzivniZNiJsEJHrnzNq2X6QpmFBCMfhxHwJFiPF41QTrZ9sZ",
  "key17": "ZbZKUSooA76E2GDGzDmvKUBVB4ar7HrQvgKC5GHkDPWPt2MKL4y3E14ncaCYTg7EEqT3KXkjU4D3ZHGqTytNHTo",
  "key18": "42baa5yaBBaXpB2Cmrjx1trWoVDy15rgDNerxZmUEErJch9fnuHw3Xoqshj5mhVmdGi61J2PTan8t2u9qsEmUnu6",
  "key19": "UeCtfLPzoEZbxUJjKUHbMDVUUwvAoUszQ9sR81aXVnssygCARkUYvE1WHAaBTEpwxjcnUGV31SQiXycMbSe72Dx",
  "key20": "So6DbHCKNPkL5gskRpYVjSpsQYfg6aQTPLdbTpKFQnhzSBEV9mDPWV8VqFCiSaHECfHDqXXezLYEwBhHdg3L6ct",
  "key21": "1bfTubwBe8nqBzUF3AaVcjmCUVKRspYz75HhAdBwRTo1Yue5rcGfUYu8E5dxUixSnFpX5TueXc9bmqT3ozXrEr6",
  "key22": "3JjHcm2bbUPwoCbUFjp39iB6AYipU3mvKrgGn5SEmnZGFTmXUVUPf4LCBCidzAWqoWQdcYJn4bTXWgdQknY7uipA",
  "key23": "2DcjFdRt6zDmjZRriKwkATezundYW8UdVm5QQvTc4myb71JBSFuyRxkVW2HWkVXo8SN4EhMpjcHoNJWinKEsskLW",
  "key24": "5UZBNnqKs71GwBgJxgVVUABG6wwtnam1wRBifFKPAbBzFk6zJoZCXwEDrrkRUZN6rAq4RvSh5bNssEXX3YCQtH1K"
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
