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
    "NzX3abyojUmsX6tV5ZrM4B1wfbqYrNjUBFYuc8ctFhTe5R13XWwgYNmQVKceFnsh7rnBRfEmNbA7Prd45wju7Pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G9cLe5trVrrquDnfPQo3BHuJW6MRk37z9XAmcPVsTqwobtFRTft3hSCWxqaUTtyKXeRnHxqn2RuWL6ysPHWwQk2",
  "key1": "5vRnNNiebsC573FZopeFaA76h2KQyMnFyVpW3QQW7gLRWn8y52yanD3FcEfuLzoF4xfnrQxCFmq5eXcy9Xa12AA",
  "key2": "3vRtZLNQBHF1MaF2Mi4LkKA1ks7Bq7SDKpoh4aBP3FHkDWuXZ1iB9DyaELKbNrBSfoQhF3WbC8fGVTtKDp6MD1M4",
  "key3": "48rAKFpbAANffHbYjugBSbfKQiGPedwz49bMjH6KHpH7z7ydAjiyqyJabqkq5yrtpuoU1HnP3ZJB5DYKJcDZjyAw",
  "key4": "4sxSRXnbL5vmfLNC68GCd2bZWBAzJZb4GpmgaCGGuzDFnRLrYH5wGpZv3wRU4CkYqDfvqSTWJXQ7nkvUMgHMUmC4",
  "key5": "3ve3kGjmJto7EC8Menxp3feiwRCWGFdpPSZB5XbfjUXV7LTeMr8hH18g4MVY6NjmYK91aWmuQN9SpvabENLcagx",
  "key6": "2Wz9vNP6MfowasZSwjFDsWdJAcmBKjc3KqH21v6mP16mwvKWsvetKSKTJEvF44B4CZnR3XG58BuKV66JRqiDYX1U",
  "key7": "Bkf5dXMWQFwxDW94BbJdVVV7G6qVuB9g2qEV21t2sU7nHwz8p6nfxrg2Qa2WG4BzRmFHb2BfvvwqZrwYifo1e8b",
  "key8": "FKvj6fTv9b6fmKPTwLJGWWgBWctvYD5WNyyrxJcaHhS79CZ79f2RjNSKGGns2SVrWRY6MKQYmFc3Lm7nTnXnwhc",
  "key9": "4U9ZtN4KfAAXKBtWUSpR5AH2d46FR11iLuu1JMj2REMAWb8yShSx3LnChH1tRUYD1uTBFLcYao4RuQZKW2uq9uJp",
  "key10": "2eMwXsWv2DCgyBikWGPgTnEa3H3dLvgHvmEmWeM5LHnftPiYySLc8nsAm8bRseuWcvonayULWQcqMff1q69hu6Lf",
  "key11": "52BVwcTTLxkcaTBKC8J9f2akSD5qcEjYA6QEcgbBxwCA3qnWHUNrGRKzWib4K4oCJzBupYUQLjsPNdPbKuUhHbou",
  "key12": "5oGAWcxMJzLVGBsZVinwoZsSvaWByPdvdQv4tQLTmPwMUXo2M1okHA8EyRa9JGPjHAQGYVCrGmK9AW5qD4H7bDX3",
  "key13": "h2tz1YiiPEGgQHwqu8FmrkmqGkbZnZbGzZqkksz2reN8WzFw77eDsE4zuRHB3KX7RvCZQekBjkts4KAwsxtdWQ8",
  "key14": "5Kk1rHkhNAtRuLHobYfgAouQQsj2FrM8AThnkk9r2fvU4PWXNPq3JfmKKwNHPuogJFqPSFA88Vwa3XdeH7gdUVpD",
  "key15": "3enUdkQpSEMGa4MggHpEX5TpFV2K1VL8rnRQKiuCex7rPjZajTjFYW1VpYbqNqL4hoCHHKcjwTpC3xx6QEArWkay",
  "key16": "65SEshthmHY4K8niH1u1YADA1Uy81qDdaniXPLGmvgQyrukZJYwDFbY57H1zVh7rTwgXUGirJ3daCFUfru69UJyt",
  "key17": "4jvt83VXnuroGiTGmoGpSyzYDcf1fwBmg45nHhNbdw4djeLaPLbmRNr33V3zJy7HDw8NVXKk1z2xG9d8NMhFJ1xe",
  "key18": "4dn4SJ8PR7AeoZUUTNvU5x4y4jZ2bUqeC8wZPo42d82uVr25bSWpELMndocsnnvYauhkAjXrBQStcjSngRntWbSU",
  "key19": "3bL92VAWvtvVovtZrd9TnfLwnAqz5217ZFG7SfofoZ96CzvGu2BYjRsafWxY7Stjbev7E6UetiPdJc4hWjrt9DLH",
  "key20": "66t3n7uA8ezLPVGNyDXiWYvEwqGcBXPCjrwWftCwbLs1xcUnpaqWwDyEKjfzaApSsYBQG85JSHnpCzgVZ57U16dH",
  "key21": "51CC8tNQeS5NBF4az7p5PhAYQ5DsRmG9zF9QiDhszLkt272mq4mJqo2A7si4Tatb9iEAsx6aEP3uVYdYjwhzMr3V",
  "key22": "2gm2pmUjbPLTx1273ETftcpnhUBoJ29qWEPwA9oNfikL1ichvmwG34oF6YKFydLv8jup9hxGXYmWmTzyQ1dWjxNB",
  "key23": "5GwuTeaRoRiDN7UeX4u3M2GK8muctTmUGCAX7sThreuKzsF5uNiXqkDfBpxQx4AgADzZrZucPqQtCNtNpeHbT9pA",
  "key24": "5SLgiKSJA8aBVhcbGJGuhMnEnJJxqy6mXKn377T15KmUaM4TriVhwiDGL7oKPwQ84d5Gcof7zCZs84bQbUjv2mJM",
  "key25": "5wfpuMeVNLAAWYfduvHBPZi6nhRvyeT1ros6mkH8bCohESettyC56QMUKcW4W3Qv2kgZetnt87W7bMW3j7NghCmS",
  "key26": "2rVvFwhSDYMoDeoMnrqfPQr9LGJs36qNApk8kPWKwiwjoGvgsVhXj8WVJn7wgxewpZE5bxdYLpvby5xDSSiv5MJH",
  "key27": "67VtP7VhRob9PHU31FWM5BcM5613VMEiVaK8pUGKRNE8TEgrDGUGmG2EyoYTZBWwcYpJ8KyCvaxtZob53kzAGicK",
  "key28": "2KNhyHwPxFH1WV2BK17f8muLrEbSLZg4yWk2h8J3cNfRt5xk1wg194fJ2VddaSrfmHLznDAZjXDJTJ4PgAXopUeH",
  "key29": "53Y663HNgof3W85jHg5BjXij7rePzNHAmXSskwpKaPHzS4NgvwZJ4deTdUMngbMM5KpUKRigvQvhSpf6kHfBmtRH",
  "key30": "3KwDZRMDbCyDwix2cj43ZJqMgP7oYDWPwen7JUZgyHQraLcVzZKayT9JgwvL4CnZuXb4vsPCg3JVyZeEHTaeTzsA",
  "key31": "4xaVMHS1eVWNXNuiDsw63vXCKNYnMcgcpdG6Eso4NnhvfHyEmqMpxxD1oheUCVAxDnQy6zeowmAAc7gYgBZbrp54",
  "key32": "4Md6u6VVDEzn5v9T2wJffZ2poQZ8LQr21Md6rkgA7Yd55EN2TEGbEgZp8bfCkTZ4wnP739FAczYJWiQMDmY7DUUc",
  "key33": "S1fLXa9m3RhH6575urcnwyLw5MNfyLrWT9Jc7SicjcrkwBs7mHm9ygYJdeEyyGxTdGn2e4Ko4KRJZAaNtbL69QF",
  "key34": "34k3eXxK5JnY9L6L1FfabcSNR8MWsdcH2Rqk7pJnpuxqHf6VnfNcfv2woDRKsRJDhVXdUnHdPPjPoKeVqwNpxwHi",
  "key35": "2sDT6ZXRc3WSkAB7b3zrxC6PpzGBvo3ffPtHe6BpFu1iVUQEtCVN7agDTwrhoAmEdt6QmDXv8QpHC92hMk1aoKRT",
  "key36": "4wbY9tP3rDu53YELdC5XqaTXBC3StB1YkUa7soUmHk5SzEVL24dmjz67qEsEYQsGDWDc9tm4JLuEEWXa6A83Ri9P",
  "key37": "s5U5xd5E69RyhF2xSLt8Lb4ymX1z3x5zFBaWPoG3U8cCLzesJV6eAj5PAA41ioqwRXi8NQMXJy1DPHH69FBGjGC"
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
