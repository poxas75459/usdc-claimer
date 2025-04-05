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
    "4XjwWNhrtE7ogeB2eahkuE6fXc6e1YTXAmkJPLmSMZr4bpamdMCVfVme95tf3voxx6KFQtqFczcDLXcfQHHbQ8iU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C1hYsPecttz9xJu3txssWZbMq298b8kSiU8GidD5oqMQehx8uqT5vgjPHMbzZeqkbAEzs83ET6sMnnftQrmfbaH",
  "key1": "2soaGpUYmgrjJrKY3Gkua6yrJaBcEzCnmkb6SAJU3v9vKCfpy3moL8tsdP4YogVsewtCRk1ZcA6eDgKzFLgmyVfo",
  "key2": "4Sq7U3PyvcPo6KjmhRBsMZ4yLZhyTv1CQAiPaGdydCdfwKqiBs6dL4dkNccKpyV3nCex7VzGNCAb965Wf9Dk7wDD",
  "key3": "3RxiiW2Jr4odBp7FUyWMhNDTzFZxYY3pf8cKEPdQShJC6rjvQLHoaf9UA11jFz65g3pKwRwhaJT4fA3bksH7X5z",
  "key4": "4RjKaug1urrhnaFaYV95Vt49g3imWGy9kk48FHLGTXx3rDoXEwoX8qQBLDqVDDj6saEjNVcA27DY35tZG7md4dHv",
  "key5": "2DXtq6Q8KvvfDwzNNQhWvmssyxQRSELfMdHfitoR211WWpsuVc7fAaPSNnj41YWGCnFDWTzSkX6FSy3erE1mTYer",
  "key6": "4TGiEbUWz2XVX5VHqLecWntngBcMTq2ZHvHxxYD5KqXP171LnThnZsvsWoSWkRHnJTwkQFo53qqvkbJVQ4LwCwxj",
  "key7": "5A1mpgebCirHknZL74zZ29NiDcD8cjjQ9hSqeXjdMmgVZpMw1Kwddv8ZcorMwV5w46WH4TzvaMi1MhKB2Z51jaBn",
  "key8": "24vJHDrphQYx4f3WoHCDYnXxaBY2KevGAVLfNr5EMqbiEASgSX8Zh5o7uMgUByFAknPc8eiw6irdoWDWqVnEYAaX",
  "key9": "2YMWgwx624BqXTCZMhY5CqVzdcaP6chLstuzv3G144fzYn7eQchwsYGNsGvFDwYFsWrZLrYV9e3cjDPuyYAXdR79",
  "key10": "eptJgm89GoeV99pVwN7LfgeYZ3LYXFVBhr6hUw5ZZQmF2XTU7DYciRMCV28zVn4Uw9XSJjghJHTvTivkYxymwQj",
  "key11": "5R55knASVYUj2jf6mstYkk4Yj6VJ1rSYf1Y3bTmz3Q6KMVkdk8Z9ivTTcucdfeqvMksyg6EH1NwHQMHELQQCP4t6",
  "key12": "yhW1a8kdaJSDho3CATo52oJia6BxPRkWDkp1Hi22x8TbquhaTMGsxd62mgWKoBa4eW9hmQswYbDi2ZaDRMcZnhW",
  "key13": "tT1B7NdaqFX5gPA6Uns8rfeZLeUnTLyB3im2E9xxzSvuDHfag82uJbg2TnudM4cvCC3pXwsBAMr7PLL9YsHBf3B",
  "key14": "4AYbmwMXRaGLBfB5WiCu99VQLh2yZGQft3x5H5fvr4Wzig41wwTYpxpQ5WABFM3Q4aQtZzMvp16rLuxFKFo6hNtR",
  "key15": "2QXkCWdMsEzVE3UNhMQUVyiF551oR8MXFNa9cUp2CTR3MnpXiE2MQKMB7895bFN6d3KuVWKqsvC15vxXVc1BJz5z",
  "key16": "2W8mVbMrii1UXnYPoBfna11KmMVtXTtSP7ggYSPw9R7F2DrbsEuPL9s8MAhCrXmVtLmR7MQWj1TxYizPkoNhB3qj",
  "key17": "3LLNkzHY5kDJikpvhxLTAQhCu46vTEYVYwH7JCMFdA5q5Vc8FeKm968vFxixpRtYUVam1mq9fPP71QMjx2sVYSaw",
  "key18": "3rAFcHVdWC2aJeR5Y4grLzqyzvzuQWpSH1GxH5hctXTVxYo32WjgSMHxsbhGf5aEPb6YsjJCLexKrQmWyNPxLr64",
  "key19": "4MDPwY83t5hUxWmBeTwQbmR6NGzvbZHqH8A1pZ7XMnpThaBZ9ZJfDAEzJJ954yEJGUpdgZ26ci6Z4enbu3SxRZnn",
  "key20": "4yy8VETmjnBiB3J7uqfts53m8ZfGM9a1eT5HSPreJWh3aSLSXr76JoFjB6Dn2xPoEVvGu6bXLSZ6MhXT7XbBCrSx",
  "key21": "4E5YX1iJSZfcXRtsrmjVHLpK6bhxvk2HcKJuEzQBiL8WoDKtBKNTuBXwPXVRVQ76qmRmvsX25e3CffpyhCZCmLHR",
  "key22": "ZurfEfDxnjZbm1rhyJPqgaY7cixYF2zmF9D3ZR9CS1V97iDXUtYXvKWk5YbKQNyq7Zez4FisDDewK49DTB19SrP",
  "key23": "3bcic5WQZqBoGJFtd5KQhT4UDuDYygUsQRrNkW3KBAP4daMQ9cAG2UiW4AAoDfFeLFN1m1zYc3t7SjXPFHcMQnoe",
  "key24": "3Lmuthqrk2HJxWbKrWNf81H3zXNrxttqxvXFY6uqUzKMLjhcM1ygrfD5ihmm87voDiTxNZ5UES1KLhjCogd84bbL",
  "key25": "5bsjWcG8LjEbWnfHQtnqQzstQf7w9Xm22RcjVPdDZuXAPz6TM2c9tis1g9hLhmBKt5qWoChmo1UcwjKTTrVdjcyx",
  "key26": "5bTLH6f4V7UpLq1cXXvsJjEotudkNZTeUNgAgNg1ELzdasr6bYZmkxEaRpw3SnsYdiqLGqhuvxJCb5tWF8LktoL",
  "key27": "W6V1pY3ZYnEEgQmS7oD9kJfxasjGW7hrbiq6aAmLLpDcGxu9fxB43ztSWENcbMj1okjTEp7LW4Mrn6voTgZQXqX"
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
