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
    "4nPBzvLRk7Ya8p9Wm6TwjuvMkh96xpwrYRDXhbYxFHNY25afp8UZrM1ti3dcQm3npxHy4bTGeEhy54shnHYjzdPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454eN7jDwmJ3BVcRwTSyKkHyLtLhHGJo6DyrHmtzR4XMLF3jPc4QPYZT5fcGLEuYhmfWmrXsqvawKsdGMjMuG3wn",
  "key1": "VQSvBdiBL5xUe93sYV8U3nQ4kSe6imPFkJTohVh136eEux2my16UCxaY6fWLj49oo84bU1AAFeyPq9F9TcEQXkf",
  "key2": "2pyKj7JhPSgsZA2M117p7ScV4okCrpjNbxFik4bGwGenac7xw4oyvnv3rk71ffGtLbFG4CDw5jFsuAPFKRcb4ss",
  "key3": "2bDW3VxgSxnnEJNG2wQg7SewsDWw46aJVLUihVcxcf52fBZMyg5xjdw8HvKn6Lv9Ued8R6dL6SZxg6y6UyynJnFF",
  "key4": "599hYVFdGq9n3DAuZYzm68yLPybu9HJgum8nbvCjXeL37SSLnuuQwjySuzTQnRqx9ZaYKjW7tT7P2u6P2Ze6R7Qf",
  "key5": "yWG2PCbK6Bet9NKjJ4z3V4ZE5V13EFaeKN4nZEYkKMbVnebAA4DSFPmRmBGywXitzx2EGkuVb2JjadzV7MifHSh",
  "key6": "2mL4VyjbH5obL5JAYB9TiFwfiXy6PBU79L8Mc8rnMtx271iwVnigj1UboR1DvFQ2Bi5jZ783XYU2TuwBeMnpF2BG",
  "key7": "3H1F8BecMEqD8Auhc3mhZfZ5dRisYzvbY4vuFpTGrbPxbb3Y6aWssFYMYUYLrR52AsDmGejymEQhgoP52iv62Hug",
  "key8": "4YNTzhRXFFibSXyevbGh9ycwXJPKQ2Rq1cdPgd4q2XfUjdktj4ybrArcBPiBrB7uzWQnBqEqsCfjzEs1hn8mVE4f",
  "key9": "zygMYkXHRALQNCMevMtnphcL2VHU9wcgXpHu7WZQEf8XRRXkkqSirPgbDEwUQSYdzVR1KEJBQtdGrUTGL1wWtoV",
  "key10": "2TGQXenJKQJnJkpeSLqyKaNxuwzgiMqCn9xVvVcBiKAULDmP1U9iHZRaQysSQoYAvxG8yKbd8bpkyxYgJpwXiZ6L",
  "key11": "527jpcfjdUvDJFAYwHPjP1asTupT95LT5GWfRHLZGJe8oSnKtjt3EamfSYKXQa5TNDzHoKBHyDZkkCfGnt3juqgL",
  "key12": "3RkZPdnnc8KfgHtDvUFCacD4BuV8GGFjqfcT4Ly8Y6bG7r5GK8poyc86ZEV5mcUkJCvwEvVutevJzAzU4Z539Wfi",
  "key13": "5hJKcpD3nGWGWwy9a7XoYxk2w1Ui8XyQ1UKYzVZ6PVAJRkAcDyLKj2k9nRKVsc2T55UKTa7HwpemWay7Sv1hMU8y",
  "key14": "oey8nvAbEpU9ZFGwpNwwf7zHziyKkVig1vYEAgyuk11WFXHKzhJe1qL1aMcHK4eLMUptTqjBbQAjtUUjMhJjzMr",
  "key15": "2LqTsXQJBh9i4hdtaNuy88pZM1XtxwMwZZXuo4jPTdkhwRSShHPDZDCiLeiRB6voZeFDMUCWfkSLEr5HEMLwp2yf",
  "key16": "4Ag4EqwnjkCx4hLhnhXKALgvfobFQrVErTrBG6iRYZhWidF2wwoHXQxHWGQJvZW1kJWnzZaUiVSznHsqrWNwfXgp",
  "key17": "aYkDScyH6YTVHtpS4Lr1F444Vfe2rHGsSxiKGJ97FG8D7KLzDe5mbwShjdKhySqFUhLFdp7BpsBv6Wj28DrFuwn",
  "key18": "vtGgLoLcj8NetEvkLgiSJhkt19c1xctM6WC1pwEpZurEbaptjt48aim6Yy7FKKmihr1XBJKjXHdBv7ijmu4wj8P",
  "key19": "5ZrfHVbeJa3v6VqtpsPPrL1E5jGjHJfnWjBQMtmeegYPXPPd8rt8C8kGPQH8Whx7oykc45CzNqL1D9BuMVHefuT4",
  "key20": "3EnwyAREPjxW37S7snzkMcjy5qb3GuQGhrsBDq7bzCLjEQrfSRF2XqmdUVXnuuJBtnHD4SdYdYpCqSU6hYJjLaSq",
  "key21": "5yP8KKHmEGzYpB7XhuxyuiTm9dg6F9nHAr6P8hDxFuAPiugYbTQWjL6jbz8D9SPYQwxSZaYiQPMVXDukoVT9Jipv",
  "key22": "4tDguNNb79rAJrvxX2kFZokULEZoX4AN9LH8jn9gEHJjWBrWwfSjCmdL4bnuoA6kxMM64UsN7UN7YJPHJGhepxDU",
  "key23": "5sbgVdyAqrWhkSbdSTWa5BGrC97zcpz8fdKh9gsxP8cZT7su4Z9xN6ReAMaDJwBYXdfEoxffn88XtYxPFmnVdyJy",
  "key24": "2UXQWKBvYhwp9f1ssEGrZxX4geKS3vZgycNutvDFRFq6o6ZCHxqDEoTzk9go3Ev4KjgGR6R5X4dXp6zcqB3mJi6x",
  "key25": "5j5wdSfdXqzhdiLus6rfmEKfCZQzs8cEdTZSJJW9EuwjsD8ht2ig5CHE7V7guoMGWf3b7TGakiJkVheiG35HnmSB",
  "key26": "3Pbuy5VX3LuhUjVUK578yGJkcbysz3Lqm9PJ6vC4vbEbz3LzaByNMrzPMS2426HL2DjbDsHUrPLCVRUVLWZhF2Le",
  "key27": "RYaFi1rZsAFMD6Du63yTZ83NFdSsaUVKU38A8AnJBZXKzyft8oA9RcSgjReQj7Xky49Z5nLjb5puLGt5ULz7KAH",
  "key28": "23NP8yBWQ7xHxdmdqecjwT1REPiBEt9EwqhK4nCQW9JoBTp2eeaSuZ8ZPVioLSBYehSXbwBU3hBp2oCaXyiAhjXH",
  "key29": "53Q647wwyonJkgzAa1WxcryxxdS44z2uroLuFkYcmuqzAwccm7ABf4h5NQj2KGKrWPHyhGcYJkd2RsvyCS7FZag9",
  "key30": "4XTZzbtmAq7MEhezJQ65rLjARYF6BQiHhM2Z9WAQWXYuYoqCaAibSrro5k9Muft3F2DpnPdRw3n1mqkvxJPvbmtS",
  "key31": "2chNZK2mPSKcroaMgrd7nsKNj59UbzF3X3bMpQLEJEdmLJpCXUeZKrdyYEJqXhYWNAPPSi8oquwm7V2zYXB7JpvK",
  "key32": "4K3WaNDTxhRyPcQobyZgJjWkx834sZEgXYu3B6Wdq5MvxEVWtJ7EHumUivjBgVAGFfLxY9tH4CeVK1tn4Vx1Xtvc",
  "key33": "3r4XQ4Cf8KqYuCJzRaJYxYBT7nJqqsKEqj8rNJE38Qu7CSW1JKMXZEsLHN9Z323zBfUFJJMbnpHmCVvHKsx2CRce",
  "key34": "MrSE5qudJWt1n7QPEXuuKiWHiF9w5pRRffUtLednL6CtNhncnrX45JD4pHVJZCLAZhQzHJjVAKuE8m1ukDoqYaD",
  "key35": "4NeZPukgZvk7GnLsS13AmDziu5rfPj5n8qAHbeAArZroKVRjvLiCK61kYyujvjbg6MPpCc9VrG7TgWyWy9w7HHhs",
  "key36": "doAaxeyQ6XGj39MwiQtjwvMB3vyaez7tXKyzZLu48vxBQQied71tfCviGtcFN5sJGGujf9tb6buKFxfCZ4wuVdm",
  "key37": "62fYVw9chqUrT7nMjshUWcV1TBYbYZ1ZsLuyBG6icoEaosyYfUXrSagH8Tn3zRkGpZH3CxazGcM3TJGTp5gzxoSu"
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
