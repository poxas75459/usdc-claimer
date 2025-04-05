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
    "2jeNrJt32Q3yqDtUdyicMTmKZEHcTEcsJsD4PQyt5gWbmxyjfEo7SWzGRYPcDcNczkYUxspGryL4viPSbvjZwmS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWqn54pmi3tQK7Awk7AT8m2EjgYu9WkENPnff5cSayX2bsqTxgvX7UHLhq1Y5KaGigfbBxKpoNJWUHcWQA1rsjV",
  "key1": "3yGhBhLJh2KKWYEgVozdyCUNBvY56hyj9eSpno2U9JrjxzFBSgxHxPZgAdtvkCND8vwL4iCADYMaatw32YXhJCkz",
  "key2": "2Y5JRwjwc8f38qG3GouLu9zKDGxiou6Fxf5DTirR6kxCeAZG2BLVXvkQEd1zCHD1RmJ4hDrApKkCv6yXDb4rps8t",
  "key3": "4jZX5jis7E8qzCVUfYXAqhJ95SdVDuQAQ4x3Ee8ZnvfwtnmZLzYqG97qXXAFADzhd4Ebo8GZ9e6YZUq8o38X5Apf",
  "key4": "2vqQdD3M7VFxxSMNv6EHPmDRWuAWw7X8Wxo5NZjDrpJyDkBVCCgaacsD9my7LDZLPsqXPEG2BchkbNGBoEzDh3hJ",
  "key5": "3Q8hsisYfKX9oC7einQM2R1nyp226cUQADRjciTPHDtuRLgXVXJzyw8GuVvm1K4Ha5YjzHGpw5U3RcrFAPpYFwSW",
  "key6": "5FFEv7GR1hV6DDwNn6wNRzzWtuNuWSt6TjZjJySpiLowLFRcbcWV6PUws2fsEZnBY7XWf2iykcMqkwJoH1TdNQmA",
  "key7": "5QS2QFnPB8jKDGtQ4inRjZy7pw54b8gGhnyrycFferyHVwFYxkdiN2FJ1L9HHFbsF8FzT39QnFzPDLwhoLZ3kz8J",
  "key8": "25DrrwatN6kEhSc4Q1CA1LLB5468vTBeELWEu1kPnA3p6eGZvWnJGh8Nzqd3aNmfu6mLhGYeBdXGAzpUwJHs9Qqx",
  "key9": "3RLxNTL5g4vzgHwL28mapPKT4MLPWfwqZsScGEqJ4mzhLNGpJmjsfGWSWpqgHDmBGBSvQub2mPYkkuLUhUTgyXfh",
  "key10": "26sVwTusKwdZRtjjdzc5MQhTFAeRQv1dAQdh5bBkJkdqzCZ8HGpHNCQ9wLSnXgxkAP7wVVj5UBDRWX1kKnMKwCWq",
  "key11": "2g1jw3J8D7fUDNeupKQDN4oKBDkK4FsNmzmFc8HYX9AVyC7gfKW2GihkHMi2YVPduuQFNNX2b2ZcFuMc6oGyvhRE",
  "key12": "4kfuur6R79D8xQNLd65x8CC57DvgyzapPgxVpWuvuDr8758vzGaUpGrizDJ8dYL4tRxxTY6Xtcchha1tKxKA7vgr",
  "key13": "2GtVxZnEkDza97Hzsxbze2Ts6uCuMBwDbkifRwc5jqB6yv1goKQGGURr9fEBQyKw7GyYjndnmRxXnKZVdzKWoiwT",
  "key14": "3meWoi9k47Jd5EZhjY6zs3PS7m5ZtoVJM1j5PddrwF6dL8GxZGNSmEzyVeiy9kG2HRyRz2Wv9R1SiXaqNmArg7np",
  "key15": "4BRBWyR24JAcYFMUdHR5aer6vaMpFQStFsdQZ2G35FcMSJvqRJ3iso7SFUycBHnKqGZVD6e8GqRX3BAzKVqemXhD",
  "key16": "253T5eSAfGip3NEHuigfsUZT7Bi439NBgeB4Ycrxvm1rMvY4E6G6ddGioNyjDogvH62LbvgbEvZZNy1ArLSqErDH",
  "key17": "5Yqy7vMJ9nBoiMho9EbCwWA4C64ytXrTTNyBFXeEovxxXdcupjw36PYRpFrWZ3WVMntr6EnAQSrbo3bxwKDnqadR",
  "key18": "4aB55qHBexs9TcMJ9gumN4r2eyZPDpW1RMQxYxMcXjgfgb9SpsVj6Vr1rtRxvWGZ7BVKg5AG9EHGXrDRHFeEa7CD",
  "key19": "5n2Mmpq7r9LSRsBpXbSsqxthYquwkPKR4MBVc8HsBQTKjx4PR7qs87ocqHNgYHddBnbiZcuELkV1BCbs3g7Hx6JX",
  "key20": "49ofEN2Sd7cjcDoc3uE4KZCa4jZaDHpx9bxTdHRuEjitLnpExgck2hNnGeR9LU6J5nucWEJtow6ABhrdRY433W4K",
  "key21": "tZEhLsXS4sroPXpLu8MdQRAQq9TUTY62rAVAZhreAWWwQsvpowoDsC1fKnN1xYLyUYHPnvBcHSs5AnYLjVQaixz",
  "key22": "3R83kL7msUr8wpCYfMLr8nSCVkaoAsaVYgjmszF1F8qRhbzkiNt5XzZ3tTxfoBhSJH6uPvUyzidwdkpDrjSLG1CT",
  "key23": "3HKwoq3xeFkujX3uo2HsQoueq4cTCqcMsenznZ643cdj23MzaoEvK1iontqe4KyX3PKHbojcuHHqxc2MJRTgG8NC",
  "key24": "5JsBjX5F9RV9hcEozyvHKmsJq3j5zWtQHLpvVyTAmTjTkzYYBpDsuni9v8wqfrPYfR3bQS9nrvCFykTqiHDTndVf",
  "key25": "39T1zywNp6YGf2HNTTpQgXxcEzLduKBt1SC1ofBiVZvBVobW6EtkX59r4wqzut41JU7TvYpK3QkHQcZTctifkW4b",
  "key26": "ggNrumuKbVVUSFwKp7bMnwaNanHaCewzeZK2q3RzbieEiF7UpN6HJN8XSLHBx8mVpR96ZJUccN9hmAoNttQzjae",
  "key27": "5BjvAxJo9gdkKVxEKCFkZhhfVmwBtLRS8yihiuG5XrRU3E3vtykKib6HuqgcchpnnLqmAaHffpgrP3wNuxrJ9jRz",
  "key28": "4qBnoiPqKmSDVSb4Wiujb9vnoenaNo8WmzgvZrek1M1wc99SNGhGtMDNbj9XXFWJzbEFBEpo5tQKNv2EDb1HPLXN",
  "key29": "4sSDADZksf3wq3JbkvMTeCfBYQBYcijAt6XxrQBSgK1zXFwuua4UR5UWNHpYwMvsBLg3rqRNBkasPixZCuTmLfK4",
  "key30": "2GHXs4ySM4tVsf6FPbDRTH2jXbj546pQokUsjynAxfjB1g4UFHRmtExRku77sY4LzBtgbGrrZ8DG3eEiLvaAK2ax",
  "key31": "4wkEjSVB9SNc3yYiucER4Z7sKhcEBeh16dpy5wneWmeS2tYM1QQjukyG4LNNCxYgAZLvq83wJ2Mcb3aSVLvYd6MS",
  "key32": "2atFK3PYruwSddYpZhq11wv8BnuPeEd14QdRTGCKkMonnajxXJnP7eABgvXy4nb6iMHw7Xbk7WQkhgyrfJxv9cGS",
  "key33": "5E7Rq1AFFP8CGjZ4VF45BaP2QGwxNaRnwr1xN3B5U5ej5gW6ju6y1FBKcdkKbyRvHat9Xqw7RnfN7fkncJARvBUA",
  "key34": "3pMd13zwDkRLAcgTZeUQQjwVdR6exCF3NfVmVGD25fVpj356ee5G3nBCxjJakFb5xnq7Jm4QsGkHBKjnBcAtr86k",
  "key35": "3YiXkoNJgsUNJsZAASKecEDzcLLCmPETKd5EgkPcgCXtsh6RbD7ZWXyT8faYmknGvjW2Yz5WrTN9FQt5Wm11mcmL"
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
