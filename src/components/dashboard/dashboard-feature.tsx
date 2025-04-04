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
    "2AxMBZttYp1nmB2GwpwfcZ3St3F1PDYw7sS8i6sPgVgFupQB5GteMHrDGsDLChs3yNHpDGWJnSBBrhFstAXjUMY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213idb6SnfBHnGeaXmmL7r9XHmWEsBGCiiXkNmSRtsX4Jdp9g5GrMAhjWokMSiza2WDK1FYU9ovhbpjC6Y9tsbC2",
  "key1": "5tiwZoCt3MypsCmy4FFr83pKnr15v7UkBivb9AjJMNKxTX6eD4zTPcnXdMBxciej6QSranL6kQT7bK3mtMWP6vmZ",
  "key2": "UwYJvHt6dwNPspNYRQ8PSUNy3LC9LL6Hps5M7N8zRRsTtjpLG3jbL1NVMEToWnjV1Fa2MvHnHATfnBapgZ5GSu5",
  "key3": "4AfVB9tT6SZJZdvZd94E9VocETrb5dhk3pY2fxnEGBgdkHYSFSBeXHLG17MpiaHmbFuPdCdXVgrh9xHAUmzfPsKw",
  "key4": "1DogFWahcBcrJy99B6GV86zgC1Er4LoRHmKMm3zwUwjSMdZQtjYVyvYAmZCVkwHK9NqWUJfbhVF3VDa2PNPbHGk",
  "key5": "pmBKEiYgffNT1yXXu6Nui45verx6HJcmj8RBLPRCfmcrXN8wcTcCzNACriXr93T7mM4vXtDdcvTMpAD1Q1K6Gzs",
  "key6": "4tEQHA2Cd828YEZdMqcJJo2q79rpkcEps7ry6qRu3ksD6siRZQ1oM7nqq496mjJqyWAhi7ya8FkxuNjkSWNnwDjg",
  "key7": "2FnpcY92RpRE8N9MdywrXssDUFjRyAvcMwCbTTcSB4carh9mizYy1LQdYWLjZHp5Gem1gscvXh1nYQDRpBk7JC3U",
  "key8": "4UEE7nXiyevibKk9UQQcSN8sGuAurErYje9NhQbiWfAvR4bTJWtmH7sds7kwdGJYoS44t9LULG2qwSvc8jSi3Ejc",
  "key9": "3t4RRpaowjFrZyi8SYwb7hHq4JyQcTMM61o6N5E58paeeNDWPuYXGTJ3Gk3cPXGcU1Urb6nwwSAEL4pPXv2VmMVk",
  "key10": "2zLHfZQygzCs5k7aUsFYF54tTxRjnNbCQb6YqL35GC2TeohfdTKbMZukG2Zz44CqMgNJSbarrqxxzXCEJqZSVaDH",
  "key11": "4MpUVhun1tQWvkX27ZHAwuGFdw3y2mCqJtwYMW3kZRShaEhLqjYakMKbNKSm1zxMrLG4HZ96ebGpehj3oWzGYBy8",
  "key12": "66ZEFijbnQejBZrzN7mi4WAqLKVM4GtftdQWjuNyRA1mFCcettDozvnoCbSEZrBKC9t71LTPQAN9RHwXzzE1mUMq",
  "key13": "dAZMNoHY4j5Ge42GigxgeT9CELvrBb4Ec63QdUr5BD3NZS2L2q5PgMVdT8npMFmyLUf3AkaZnP327Tr7qf74xtr",
  "key14": "3m68qYgXbhzn6DGuxTbuNbBgGg6kHgiBxATeDf8cQFLbBQw8aUUxUVXZA41Wam8jvEfMWXkhnDqWKTQnL8FX3yHX",
  "key15": "2LjxmU2td1N1VRr6rRGJpwm7QhWwwmCscmsWLF7o4q6DeiZoUuB7Ui7gmUQtkxF7SsyDciTAUWMLZUQ4iovYgrGB",
  "key16": "3uPVBiLo5UgWGTwHDRBLFZ5AacLP34NkKg7zFH379F3wc6ripCyd5nVFkogSWFG49AHFxcUSMPBks3p9hmMMh9gn",
  "key17": "4vbSEY6UDrtiSQLpzBead8Spdvs57xUUvejMt4XnQL5F8QnjjLrgnSvkanFVytyE2YE654QYx7yhyRea4Uf7jHSH",
  "key18": "5piswZnY7zxnzb3mq28XFp1b2e7k27mdAQK2BrWkSDp8Rgnmt7BmMPLXv3fJdLspAEcztXFAhsUd2FByNCPVSb4v",
  "key19": "4BqydqetjrHDHpes2GdYigiiv66NrRbYhe5aGCjZRMvSuRoyfmY354ds5PpSAUwJRgTUPcMdt9aZrq6mHZgXkWpC",
  "key20": "5K6x88fdcer7g1q9CzdV1eqXGnuVgHTdAeiKXFRRZ3H8T6RLgDSKuSdaJjVdLahL72t4HoBMdedFbD8Kj26yEMch",
  "key21": "4P9ZiHPohmsd1e7GUqVNe285KZUUNXu8qZwDbrGoBhXvKX9yCtNC1u86E9JPi8b69joUGiQ3iFy2JQi92tDQ8ePA",
  "key22": "2mVFuDaRDwBcwXWXUg72G2gxAz7vN7eyHSGrJmCfVQanj6akqB3yRQb8oJhMA7rf6qvrjAjizQ1kx6WVXsbrprPh",
  "key23": "2Jcbi8zK8wnEjFPzEKczheR6UL1xndWpyXAXY3LVEhzJ6bzih31dAThUsbeaBhtdUHyL4SHYE5Ys2BosHxHn3iEd",
  "key24": "36qL33jLcSjPtxoaPsTcZabzs5kqS7rsFkMdVTSKjdJVob422can5kmhEi3vFUXEw5vdcqzwVhLcGcxzcvTWUfTR",
  "key25": "56MkhPwb9UtB2cCw2Z9p48uKJdxfygwjXpusVVB5CmVUPbMM9nrDAfQQXdk3yJE3yWGHWzhqPmDwELQzNYFLFxy6",
  "key26": "QTppzGJxsNxoQsQURVayBWKjYPBpAivTrmNuLQymsNTXu4WgBCZ6ZFGNa38BqzuR4zGDLnBXpqhHZaJgCL2T7P8",
  "key27": "EqJsfqxjsnFM7L6hGQDBvDhVBAm1qrPpkMxFF8rxprCLKLA6mhY6kqRWkfrcSPuWcXBrtMSbCpZ9YBabYmTRu8w",
  "key28": "4y51f1h65wdYivsXUXKdFPEuC6Kh3cjr7VGMfv2KfNJvsA9AgHwJnKaFELKSVS6iGa8SXpCUfkysLp8o8c7tvNhk",
  "key29": "n7GPKPei3YLGr8C5afmka9Yoqpp3UXjHfeJQuoky3qiLhBku3TyhCFKDw3DUJizUgp9BsGihZ4yzeRAfRKzTjZr",
  "key30": "5uLttPUPiqupmfTY6zXSAMk2UWaTMnxxcegVYuKtr9E6Ghy6GjmUtziY3Cq6jKTmNWWHajeQPdQfWZxFG4ByfHrU",
  "key31": "3h1RhpC1odRjpc9yCxptfQXpYRc1HEQG4T2avcCXSstTxMALx55a9VCxe8CCSbcRkSyD8EnCqquKwjHCNB225fwd",
  "key32": "5R5e8zbYwM7hr3ciqzRDzZrgGdDS7JeMJXxH1qyiGkD2L868NWNoftUPEEve1RCHN5pQBz86fuURkuHSK2Qxp4q",
  "key33": "3GSHZGfqtEkke5JUyMDguGrhHzeSNGwFurBbuHvkf9WB7v4t8Kscv8oxKFaiXqFy39TNT7W7Q8CHnTsdVEtx4Z5B"
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
