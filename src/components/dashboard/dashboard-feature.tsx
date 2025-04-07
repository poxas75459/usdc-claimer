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
    "5EKJPuS2j7XvoUUWAWFUoqzcMkupmi2dEH5WxDcpS4fML2jy64evqVeZCXzSjgKmBQQY6CbTJ76AE79iLQZWNX19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63W6nWbXNLTidJCPWys8GmkcESrRGCAbdBT2Rn9FzKmiBUkx12N56YedXkFXeTUwfGncWSMcDgLu8d54LSqpS23A",
  "key1": "2pdsw6jL3vwAku6NSFbFBQafqossj6kGuAXQTEbqRQHNXCzWzNJBiFQ55Uni5ANZzTicPmDd3i5ZjKBjSi7efnHD",
  "key2": "57n1X22ALXxXGsxxYJ12hBV3rL57fCicrChEdgZAb3TqRiQSjPwuktycqasdmr6aJeoLirysptPFSbdXLAFsMx1H",
  "key3": "bXsrGvGVFdkzD8ZarJizxyNc7agddD3RxwgP2c8gMs29GwX69rkm83qi5VkJ2avvBcK6U7sEzmkGqvMZoR6u5JE",
  "key4": "2KrAz2S3eVaKWmJi5fiirM3YKiLXMwHmvJFzJ4KHHsDg52ctQ9wAjc8xecqzmhdovUB365rV8zsHxDjgHb75zvLN",
  "key5": "sQEwn8wyYY2ba9fzYKi4NxXxABMhJ78g4D6nQBnWpsb1Ceg7M9wFnrmgehMHjhyMx5t5mngXv6RA3jaMEjHpKa2",
  "key6": "y4TDLdQCiFLLogVp9oVnZAzk3rc22KsahisfjxkpY4bSqxCm76YbzuTrGidXnHCVbYuxQiQc7fMyDLWSvAU56u3",
  "key7": "2P4pGFZBPJ8i66aE5x6zrAWrZAy8egmE3SZzrZ2UkHynBYSYnB5c3HKemhP7yhZYmJj7FqwSzNSKWfGDg2eUkfcd",
  "key8": "pFZFqTmBxUpWXnGhwsTaYpzukfskDC6utrAo8jh2sAtdeJnDk5JFzPq4viwb8hiyKzYhAu4GyH2DSUnu8AxsZwM",
  "key9": "3k69hzS5EfExRQqbNPA59LhxVHaa7nyeNdhvevniU2KkMAD52moE73iDCqKxCbeHUQ7dsM512KFYRP9dV6Wn8CrV",
  "key10": "3VpGPQRubrjJumRicwZ24e24EoDwA7ijWkKa33iuZLUs3zBc3tWqXWrgfLY5G6q1WZH3YoqxDhbCBSXX5ardtjkT",
  "key11": "56mtCqdG6pAwVsE62pKLs6dhJ37UipFF6h6M28DSPgfufGkwc9JebGE9LLkF3j3rywnKnaFawKjsr5LeLvtkjqS2",
  "key12": "4bNxJLTuXojbr9GNsnNx48DKFs88XsXMNibJJPUtrGP1W3uX8hvZ9fW8aKtss6AaVz4cPNrnyit7EWYXn7Vpdn4y",
  "key13": "5tTpyRfEPSuHJh1rdLwQgiPyMgMHv7UsY51Bpzknt4tncQSrP9BDPLU6YChSwrvfPVsX6VvDLUcRYwexJZ6c1ESp",
  "key14": "2jwpfzsDnRn71pfPXv3b2avzednHe22BogNjVjiS4DyXpZ82hLYNTDYPJFQcvuxnXKt9cAfkb7NpDJwkrVKye8J",
  "key15": "4JBLbk4c57TvbkhXQGMfgG9DdUUgnrKLzAmZpPYN1GkH385k7ZAmQgPj7vbhzqyeM7FnVPa3R6W18sHcbtJV1831",
  "key16": "ujoYyadjtvectYUxeDLX6xf6nWZTCJesriqaBHEtyLvuw2iXSLSZ8V2dBTG9ZixYRkawAyDDitLerTc81f6191H",
  "key17": "4GZsmGJ8GmAoig9RnyaQwpxKJ2GxoCM7kAhhYA3y1mSDPavPNgWBoyRtCFNmYsKTw6PZGWZvU9eh5vGVTuDTYhDf",
  "key18": "2bx2qav7RLS7xLFjYRwQNHmyPk8J1vR7ZGq9wSsv4tdsivMKchB8BzxX6iDTGDJt5gBvhiHrMnRoruSZArG3yDUF",
  "key19": "GPtzmW7rKSwF17btnUmhJwKjNMd636FfR2AEYEcx9AnW68Uw8iEpLq4XSZ2tpbVKyq6V3e1v8wEdgc4FihhDeE5",
  "key20": "55LTuqSWUDv8VrCwgXZNDLfximgs46E2xRXtL4Tqp1g7f5cyoyTb6pdJD3HWF7b9GXACDJfnEWyca2CXsxo6d8y4",
  "key21": "2wDxcFGAN6QwnW1zmHRu9UYLLc5X8mRV2LiGUF1UKVMhkHgS7EJfa8VndkHHvA8JkX24eTDZ4rVmCwXV9e4fVkTE",
  "key22": "3MnQNWWPyN6btR49UTnaoRousXdbiFiyHD1MpUnt93QFNAP37m7c7pZsznPcT2pibyY96nd7jcFaJ2Zi11Ccgmwq",
  "key23": "XCGviehQLKmFwgSP8AP5uPsx1nHeeqPNQKGsTticCoTErzNNCjFosb2MGLnky78hYLoYBnKgh5eEmNXamTFTG1D",
  "key24": "4DZpjyscSAjpNUWJxBHAo1P9zEmMX6WEimq5xvkGGJXohT1NBwyq52wiaREKyQnTXxLb3UeRP9K9xayrZqBy2FR5",
  "key25": "Vpxsn8bBhKiGmACL5Vx2XzLieaJbEaa99URmfC8RVVDsNR72Uf9TchqtuoR9yEYJsoVDFt3sJ9efGzvH8mRNwkQ",
  "key26": "3br4w2aNEkaPdCDDFEuNve4QsDf4qdFeFJ5VDmvJfSqTu7dFF4gTLkA8YHjnAZxzNgsdYmSXGuYzX5wJGafHp1Yq",
  "key27": "4ixg5LggETQHwhSvmfdduUKU6HyAwuxdmYvegKyBftacNCkwYe29psxxCWPeea5pckUvWRy5yBcxjmmRnQ9BY2pd",
  "key28": "3ouc58YW3LGwhCditFu7DnuREQAc67YhKxa95T7wESqf47tkebR7NuLs46rhGDHcMNWTeXQyejKtrqfNrQySzjYW",
  "key29": "WWBKp4jDpGP77ScBTyYRGb8m3vA4ka84LpoayBcKAaZJVLTvNsJNUzVuGj2KtijZctB9M8RJ3L38oq22fszCwyr",
  "key30": "QfVv7CXo2GnnPPFcpwoVWcwBy8Z9UiucMG7tq99npSUKfHvC4f2pDnHcegck4fLdNNZffmAy8k15PBnwhgT54k8",
  "key31": "5nQhtbzbmon7wkAKSdmacsnJaN1r5YJJUQyxexV6N6jTg5nTwfS99R2eFEFasbuERCEMSaH3qaf1CeVX1L64zjHE",
  "key32": "3tGmPKXBZmGdjnfhUMW1ECC6VrHWzRxUZC4gF4KoVPhR4X4UNiUyXUaERSKbnGuKBWYuYVRam9knDU5QVDUaNZNX",
  "key33": "4rgfgjJRwoqjKsXc4KjvTdVx78GYMEESs8YY96msE8mWXwK7ridi8QF84EqjghDhgwyA4CeBHQCuFzQZTJUHcY5T",
  "key34": "2QVdioNfkYin5tASidZByR4WjDBcbz3UmkGSLR7bBY9HX9kgWnBvWRbs1GGZAA1h7JyuHFF4hcLDWFYNwLVpSeBz",
  "key35": "4rkdujCzzkniPBEPUmm5UcjUYLGNLJQnZg1SxY8DQ7FENd33UaitidvezooAnZX4Meyvtmutmhq8khm8YPNwHWa8",
  "key36": "5T26AXpYAb7uofRU7MgTmnEuFWWjSEkyXRaAupjY1cJL2e9PHCNaQ5V3QjdPt8xHf1B4R8F69UuigBPoph7mEqbo",
  "key37": "rtgN4tv8LXRdMgjKtcrvEKvo6Gb2dY6WgRwUi7SJzHcgwUzLLikGexBWd7NRqrUW1W1uSSZW2Rd4fsB8SbyvuMt",
  "key38": "63THZPbTrEm8DMr7fSeQpWnj7J3PsSe8j7JNhUJsyYm7ULUyG4VzQSHRyfm3BAsjLmRoXVMhuW1xR2Fyi1VdWSJo",
  "key39": "2Yiz83PxuLwQcKNkf258Ft7fJvSnJFeiQwVAQCZtzYwCFtaWJQwE9jdotRQq8Y7dMz3NHnJP7qe3bSDLCtEz7uiE"
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
