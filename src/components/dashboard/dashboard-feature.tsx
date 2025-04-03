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
    "5oFY8KaT9gLKyr17BeFoATGRSpk7V1hMSdMozv9q4u3F5u3aydKmZeEJswrShf1nTjxUdwxnneKUHbUxaD1ZAfrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v4CXoD4rCtEd5YPAJqaCG4xbatJSjvWi4Wn6cb4NGj6Ame2bfzfnbNWJ7isj1FadDwvx3cUsrxv19L5oYAJDXxF",
  "key1": "3fkjNDYiJU9KXVteaNwWTnLJt5PoJ1czMSYNZrJ4CJdeZFEvL2ZTZPWc7gJKyiwbwRTht56BcLo5xyEmyJ7tPfaT",
  "key2": "sw8icLqsZYMyKmuX9P9k5cCpbcxsWQVwiUmE9MoWbppxJZuMA2tL889X37HU7B7deDZnZr2aThA8T7jSgwsB9fY",
  "key3": "28qW3r9m2xojLtQoUyRu3F2itpyAxRzHNjhxQt2MyaqhPX2yLc4caJNRbvWwHnoZpMPFg1P8qRYYzosyZTdoG59V",
  "key4": "2WjWEq3dRvxZdcMcqrETEpCX1f6DDAU5XWQeanfpd92YeL2ZKgAEqDCqVxr5phzDSVRAeGAfzpjwiv7RcFoJochx",
  "key5": "2Ti6HUWLCAKHSBBXR5TyZ7tTPFoNqx3u6RDADYvAkwC1KMAi3YdsUtk41dvT2nRQKmAjhXHdA1KgQDwV2cFVgas1",
  "key6": "4wAcXs6FNvJc6VN5XS4yVW2GUwrFZNsGamEyU1WxaN7GbA4hKrRXyriX61nvXx2MigJX44EsgsQ6s5LnQxoUdNje",
  "key7": "59hLGAwrkBDwJjAmFbkYtaSykMQ8kGBh58b9MbumBhQbAGiymiN6bfGiQum4YyVZtH1X2tTGVqAkiLCJPpf2ia87",
  "key8": "R7HU1Qa2yrtq9AS6mHuZKKsCbokbN2HKeWBfNKXWAw6tMM8q9DAVJUUaMbP8Z5gju71RVuNKCK8qJc4ra5GiaBj",
  "key9": "4mjH4NzK6bE6jLELAinctUe75HyBzboYTEBBo1crGFVaupXyHBPRPQ2E8yztJvZZ7nd5pEUhryAhne3Ywwii7e5X",
  "key10": "3SEMJqfX49khP2CnxNyFRhQA2CTYAt1PRzbnhFTAVh1fjTZR1iWFLVmwjfeBThWT3V1Z2V7B8EXDEqNXLE9QH4yw",
  "key11": "2dPUhSpkqjPbzK5q8iBbcnoaSsQZrenjY7F4gmv32e3ffRqny1zVqhKUdj7Bjx297u9uXuntWjkthwgAoYDjRPAR",
  "key12": "2cDwPnd7jnLZeQSJCo6AVcDcssZBBhDy6sjWUmvPB1UrfdqYTWYbweUVCFPUuc6ocMZZyq9rnHbwu86hgwGCRrHN",
  "key13": "QNUdkfZrdhuSa3NBu2zXZUdjhFQAESvqrht74LSioFSXCieiw4934Wd3SGBPo1JZn19bf5QpWRGi3ETMYhAZHhE",
  "key14": "3w84RLviUfpxLMchQuJRxqkKwkKFa4BCiwqtBN3ntWBBndd1tvKNrkwTJvzibn6enx7iv1J2fLT8rda8krwmw7E9",
  "key15": "HkBNcyzMrgJK9HXqeS3YPCNjxjAkLPDubpndbiPWFukZNKy9z3FYpFWXaaATkBX3VWLtYXiQw5k4YHCxjHgRZ4k",
  "key16": "5eMqeHsvt4pA1ew9t3h2MSqjwTm7JnxiesC6kRCdkooe4F76AkRSomK2FJs1hbkZxpyQoEy9UjPG24w9BhqVeLpQ",
  "key17": "2FAaCBfApbEGGpjRMCCT5BJYhfKFPbpE8GSdGv96XoQEhgP6jD5h2F1aeAGp9YJww7DsEk7bJAoainA3xnq4GgH3",
  "key18": "5EjmETBeBGDRWepKv7Uz51VUXxhDZw2AVo2FrTg9nFDPaKVKiQ3kd9smmJfKtoFEBh5iCmUgSWNBwi6optoahVjF",
  "key19": "WiheLrzZVyfpPKarY9AVZcDPJxsECobcTY9mhypVdw6esgBHeBwAGCvHL4f29KDPHrFdJdK48aWwqnD4Taz3wvq",
  "key20": "5NWRKaWSwdPGoUCPGeyQASDMYCpRYDtt5wE4FGkQWBQWJfJHenvV8G5a48QBjfkDUSrBmpcStpBzYdqgNThS2BE5",
  "key21": "1tBSnMzBN1c8XGV4jWVaDvPZNTPL3RnfHJf6Lp9DXrM3CYixPGbx9T8eUBzr3UDDG3Sy7jVe5pZY49bahsC7vFC",
  "key22": "2Foo1kJNvvkDJagEUXVkUHWxNib9e5mXecAv7DTVTqCJpbr2vRKcPHkYY6U2HXrCy1jBNS1E2MbvB4c9MmjiK1y9",
  "key23": "49Q1YJyqAwWb6685v2kq9g6T9A8K9hizvmPiLBsN5inmSmCxHN5Ve9XBAvjoD3kBEwocFf7ifJ535w6Z3ZqEzoqD",
  "key24": "3rFcnauN4CaokkBxJE2jbA2TiejaSzbo3o6wUscU2LQ9MYDgt1XzSECvEvqkLaE5yymM8ogkKrWkYxvHgWyhYdyq",
  "key25": "2PREJwQZyZUxVqHbUwCKUfTcpj4DCrvvhuiMaSNiFohcohU214RgbWVaCRM9DhfeKaqWjfSBwnGoaJrE1WmK7o7D",
  "key26": "2HYCREbJSBoponcdc2cajqkrYzoVpjLmc2sYau7A3V6oFNNW5TDW8jgTNKq9RdLiKDK1wpm2wc77WcHbM7ZmY59F",
  "key27": "2r5EjisKvVZpgUzzMFvrM26vFcxdyua7KTwZmu8qmX62TcXyBegKoGxtABNxELtFax7fBNmcrrkEsBJUK5hU96jb",
  "key28": "5ayFH6HzLa8NmQ6QkFfTyZbguC6H3FJsNMuM4njG35Nps9qwAucp8pqdiStREiwkEfQkhFwLDvN7C7pE9mBLuD1d",
  "key29": "3jBhf9tZ9j1J5uvzBcHusSH8LfZervwBvPCx8Vv8cEwdBL3nsjhwq3wxbAQKoi66bytPovRtXEpji71MCZzH7pcM",
  "key30": "5KDkjVqG7xhHGQm2Zjnr2ZgHtuasEBcn516oCwM6UY7i3ovUj1YvMSRKPcaK8od7fhqLcLrzYd6qzNqTq4XaeWvi",
  "key31": "2t4toCTwpYHrN7XMfgnh8za63goj2qPVDaX1MBstAeqT5mERwmoGzVHFNrRyTYdFypvrQ1mDit58otdxvScjS3ui",
  "key32": "2XKXWFzoPiiZWrKAgYdPAeGU2cbWovHZjZaxnrMTTvEC8hTKeweb8LR1LkLydJpjHHAPWN99Lw7qBjeNXrViR1cH",
  "key33": "3HcST2hAT5QG1zMQcWh75EoESfS1wU4EM5anDL7TCiezLqjbbg9J7dmjeS4639QvCAGjMWK8V9sJXbCQvdq5kWNH",
  "key34": "63fVW4ckZ6SV2zRfPQoNVgaTCvSM41PyZMRpw7XaZ9qFkMFRFwnVSdTZV4BnyinmQzKNnN4uh7GTMgVBPFgbzi3q",
  "key35": "9BEYvjiXueAiVwXFzRq8VPQWHMLdXrhM7crUjaqZXXSvUy1hTmD4Wiez7ekv9qQ9XjEXoz4KhRFBw5CF7R5Gpzu",
  "key36": "zZReCMjXK9FUcbs2LzGv73dA9gRHfM65azaU4mGbbrcZFwCBaR8bA8AnWuHTprPpSfjV3sLR8sGxTwwUvMWvSPJ",
  "key37": "5yJwKgMzEpKtgKeKn4A8oXfhjhNfXsAfBdnVAiagjaRzoCD5QYD8nAQC8F5Lh7KzXeFaLmgeNHUK9DuupHgHgSxx",
  "key38": "4y61dp3KUqk8b1gQjcLzX8MquU2C6kV41fKo9VqizEqutZLaHNJQHrAes3kqARvLBr95HGjNBCfBwLEz4wH1Ts8p",
  "key39": "Ghpq9mAjbbiwK6HJz3juaamrKfV7MyVPHYnhhghPa7EyLWy6kSeYndQkATJvMXhkvsPoa63vVqftTLPhzCwgnjE",
  "key40": "3Vu8cnrmzCAVZQLR5Ww8GQo2ELaZYrzw4s4QMVADsSxYccLXgKB343FDEZoNFR7F1T21SwDTohdWQX58PDfBpWjT",
  "key41": "3NsXvg7DvABDFwPoVQJZsuooMH8bNZkbM7mU4KpLVEK9PbztUukeBqxmq6sYABjM2pPxRxPmQdPpfSw8mg25Y5NA",
  "key42": "5UHaxmfbvztWdJSamuQbGwhrKHnNMGzC8WRsnY2UVtwV4uzrKxdBE8NwHxMkk2mHJQ9kkhZ4ST4XUwqJGxsfUabB",
  "key43": "4vdM6drgEf3KM9cHQcWDM7QSjgqixtGHpc1x5PNMjqWTTm3T9FoYHvohpskj2YnTby8NpqHhX6jzjd7Sp56Ma9UH",
  "key44": "4XsGnHpouPZiCy9br8bVF2Q5QdP6L3obFxsXEvDaxMwx9sioqX1KGdUysjJL4bkyiEW7cdnfXDFcrC5todZjuA42",
  "key45": "xZqzcxe9C9Xib4dbNY26orpCRed9sG2ik1dunAjUp3cqHHpgQ6TZRYfo8F2LwSdBhsZYtnDbM2i2LeJbS6FGe3N"
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
