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
    "3qoZQ7P5HJx5wzFJEdzZ8uzcAYvw72rRY3ZzfPygN8QV693yoXzWUQX9wE6efW2wZeBw84y6HiFqJLAR1LfPjZHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDWHTZvAopqxczTD9uV2G8yJNEDawHXKLMU8qrwHkrouB6ADVgtzU1P3GLDekuceQNFY4daYj1Ey1C38ks6HtZh",
  "key1": "2ZRinpCcDVFRAfYb45rjWWG4hdQ8TMtRc3JdyKX8wjjtLgs1Nvk4kxb9BknPKMQXRj39wH81iyoJnFAt5J51255n",
  "key2": "5EN9YiJrXFcAFR6p1a6zYqK8bYvTSZjYZjiNANgAJiYkGkaNHVLVxXNEbpFzfrhT2jxziRC969CPwu5sDCdKCrno",
  "key3": "FCaxZH9kbuG95HEKoG58UqQEoBWfcJSkDua5ef8J3PZyWfGqKZcFAJ4k1R8B8vSJ7jRn7MgLSpfC7PQv4jinnob",
  "key4": "4kqNz2EPGsMxpwFw5ucUYE9aDASx3vbfRAV67XAyi2xTc4be6KGAZopPyq4MBKgqVqihrSdEsPAzHMRzriFuZavJ",
  "key5": "6W8yYJS46JrKPNBcvNnfDs4p6PTJi72AxgLMj9RwpSVFLND4dfYut1eU1L9vezLWQSbYxHBZ462f7hUnzaVbEkN",
  "key6": "5bxibpSciCsXYS1E6EddYX8wDzRdtXKdPxzjcxY3CKR8LCYQ6LeLTdKVvrs5bg1Jc2gjypCiknBrzc8xYE7rdXEH",
  "key7": "2DhURnnAq85gYjk1kLyCEUT1NJRoF8AUDsxmXpkHighoFuBpdKz8w11o37G281meoH4J4hNmQL2a4G6kEP5y6MDj",
  "key8": "3zMQ3VbTtpYohGuqbQFF4hadqeF83V2eyNaEi5vr8eg7bqXQ6Tdc3ckie5NV1VhpmgdSKYk34ay3J48JyKjDwydo",
  "key9": "3336KDBwCscRMHPi8SArNJ4RkTzcv2GmWTXNLxDcU7bHo45uiEnGoWWi83MXwDDuc6uDC6FyvgC8XzQZ6NKQYY2X",
  "key10": "5zgzj953BB44MyzvVgAtWP3uVj2xdiUyobXRF71pPo4fTca6KWpDSziGdbFX84UMJowomM6eB91zLkYY7H4eGZcV",
  "key11": "3UE3EbGkkjGKfEzbn1dvPPuhXiXL8VFPNoeegQstsQUSu13mGokSw7tDVxtVHN6gB3QvTVYJmYp3yqttqvhQbpSY",
  "key12": "42GA335GxePFAWwR8kJcVG89PmhcBJiFE9a6X3p3NNZoW5HM15fD2p91t1sXKJxwFMFEt3WzWEkMH5wWaEmJtE4q",
  "key13": "3i6YfDNsE97YfN317MnCCEDjnCyBioUa6frWeCakPPD6MLhgq1pHjVShWEoeAiiWjVQEfG3k4SxDQphuoxpwyqPf",
  "key14": "5tWny3Nm9txBY1Z6yHwdcAX7DFX9pUSMmU6cV3jcR51NUhGAjgxB67rUxtm2u9jj9zpNf7374oQMzgjL5VZZuDjp",
  "key15": "2i9NPy74RdgMrXgpo9B4pmh6fpWn8LnSiiQ3w14NxiKygUgyL4bP6DB6LqtmVYsqrixnGPn8mU2Z3HWMue1pH5mK",
  "key16": "54SnNXSmhMrQatqSntaR14y7ZyQXK6XayXxCSk9oQn2EytCECrdkrYA8GRemCHpXyKyTU4wcuVWagX6bYu2AMTyz",
  "key17": "55rwgsjfWCmAV7W98tRjhLMGgBAEGSYQFLa6QNwbCb5aj4cfhkPnVydL5oUAu368apv81xmpXFMgPjPjoqeewM2p",
  "key18": "2C4ysYJGh8yQSLjRHbycfi57tuFWDL1u2Kge3shS3JXZMYxQbcczuJbTRjDmCJSE3KLcqiFkxFjgGfzPJWXNeHf4",
  "key19": "5c2Jatcq7GPqQfjfb7kXcSEEpjPK2WTzPJ3RvR1Tc7cbJz4Gw7cSE4GMqfRKp6ZhGQdyV3Wcupr1NbUGake9KkoW",
  "key20": "4Ph8gTmQ3wi6yRrFV2BFaAkRLjP6QWWPrn2yTthGNxzK6B7B1nXvXEm9v8TuwWoQUuJKaJsoqQuVkTDcbMPduYmF",
  "key21": "2gHUWs9W9x1xzdUN5ofHaJEGfpaXRbrziqz5cJYAsvEqo632h3qdGC77RGRTNaG9gSp5w38Uz2kTnEzcxcEZUr3b",
  "key22": "VwWMcPp5FwH6SjNd8qXaBZHawqsNW85rxiLpdP1XKZjAUhGMQjZPeinXESuJJMw8y6bhxLcLhEZBEhZSjvfF95X",
  "key23": "5mHgkjKFfDWx6dDpfcSpeeCxAGxRqvA6hRxvaXr9i34bUZH7thx53p8BVHpyvbqzoxL38FuRu9GyMHUGbeDcvQ6B",
  "key24": "2ub9DFqSSUrPWNsnm5U8E5qaDiyNrnRapVudGLWFLN2oDkWcXniahg8629fjPMohjzkpKzNuoVf3AJ229WhwF2V1",
  "key25": "qV72w9hchao6wbKHhZUkQbc9BsnKYoQz89CijMjqtXWJqH3zYwR8tM22bsyFEMqoy1R8wtMd321VQGsPnQwT13p",
  "key26": "4fs6dG7phwatc6UEdVR9Wxe8d8vA8GNTTV5DavaqFRpaQWBssGNayunPfeEZLB5gZiTerphU1GGFRDi2uonrG9k5",
  "key27": "2p7nPDBwi8NqsgPSnUFGpZKEGNPpzQUJkB2kP2W2EmUKTs6utLVtUcZcqsfp6MtdNeAdw3YkaaXt99eYxJJWHcQo",
  "key28": "4cwg8aQ7LAapWFQsU1PG6RZyJDo6WQ5xmaR8ezzfMkpDK9taGDC3kH9Z9DQVJT6GfpBN2GNctMY6Uox4a9JSaWnq",
  "key29": "123W2pVWMwsALqHhCc3dDFC6edpnvaVYhzwW1AgLCcpS5qSNkP7cos1fC4rrkUAURxYp7XZMYs1DfqLF3UcYM6df",
  "key30": "5gBKPZvcDMLCdxJbeiZrWqdoTfSsEk2mJdsGpsKdJQrtq6USmt37j1v63DEy3vaqUzUNkpfkLGj3XCtMGyPAbDvU",
  "key31": "3amWh4GC2NUELk6tCRivFYNyXbx4QttpLh6QGHweW3iaS54nW4PYS5hz1oP1xSykj6QV6Kd9ujmAXLEQe8mC1HvA",
  "key32": "3rziVhAmz96EmrWhJMF8omuWDGXF76aUv9189PDRwQcaWFZ2UvRcrabHkHu7czJNqakop9unTNVyyK8ZY2bVNqiA",
  "key33": "2AN8r98mCHKBruARQKxjLxdpSkJxaY3TViUU3kRKvF4TD7EiqxWkLZNVoaBmH52Rbi2ic7iqYEyh6NgJ8S3CKatE",
  "key34": "Eq2vWcGkAyEL8QwELhCfCeXaArjoo69NuHK4qZsqzioqHqTaiDMN75zppCJk3Dfb7k9ni1M3Kms8iK9zrzFWuWQ",
  "key35": "3yGHBRBxVkz4Dsvgk4NjZE733wGEA9RiZYz9maDabaLo3zj3bSUvCh8CscGb7GaZXEwxeRhLw2JvYBEev2e571qa",
  "key36": "647HK2qs9GmQbyNqcXb4pZfFLmAKURZdNsvadtoHjzvSDzCT1ntdUcR4icijRDg217EYsMbwEcBFgbFU88etuFdk",
  "key37": "UgvqDtVqsuoFLzMsgaFZEFquSKvkfvQ5sFmu9ahmQMWV3DU8Yy52nTTupRDWhpepcHZG2t52opyCCRsEkNncgyi"
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
