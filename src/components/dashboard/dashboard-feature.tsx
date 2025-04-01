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
    "45gE3ggwJLr2FhcTxJwLxqmt1AL28oqjtWKujmkvFnrpfuwL6T4WD7J9V6KiX6nX6xhMzXih8yEAsjfLDpxiv2wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJXkgxNgaxtabYNdpB7UTcgX4FtDZQa14eNHax19ZtMM5ziMWa3gZuUkziDpYgUngh9aGPRxHtgSeTo1dpd8gd5",
  "key1": "3WXEpem5UZfzibFPzmwhFHo6f3AVGtX3fBVUx9jSVWcde94Ec61YWPXHttQ6gDyK5j8smrsPU9g9RmKCAczVZujH",
  "key2": "rqhK2bi36u4CHnk6s7nL3yaQc4SmRpu4TDj17ncghuvx9WnLxgLg1yzUTJf2HsEuZ72uDqWMwCSHzXRjAGcJqfv",
  "key3": "xv2FRJ6jPjrmw9p1p9hf5AkW677oC8vcHaBxAbgbbJJj89tEhnT8jXWv3Vb92bidb2aDxeseNdZ7zdvrSToNHsU",
  "key4": "3dTEurnM82qDcBYWSvxDjWNpnt7NTviqKP9BRgrAYpjiBsed29CwRj3DxNDV9ZTxQiiLtgCTHtTwTA7yNRBbAHaV",
  "key5": "5U5YXk7D8ATBJLjX6umpsszSDhoTjrhxgb8bHZT7A7LJC4DcGgc9YKQKzdrkApWtMYBVY3r3Aj5ESTYXAiTtni9S",
  "key6": "YxsZnYpSdNT9QYHyqdFcHjf7AsQfNUGqXmqUHf36qhLMZyWo9ieazXm2gbtB8eA7yiZ57CNstjXJyfoN1iFVbkA",
  "key7": "5SaL9fR7xMY6b7PmkBc99yNfSQjV5jxwsF3N5iu9m6e9XonoC3HFt4R3QucATNtTvXn9TknNUT2FcRyMA13Fv6ze",
  "key8": "5mjwR9x6nBBMxccQHTCEZgaansJY8petF9wtXM7b7ybAkMAJcAZMWUvo1rX7Rn9xBZBEjvVaNcUm3WAj1dMjTLe8",
  "key9": "ycf9jbXKAchpVgBP21EDvsVkjFZC3MWGDQC2LVrhNJxinqpZcXGYEuLGpEdnRir6zLHw4yc1qg7e58jxNjgACVc",
  "key10": "2owGxn6oRS9wP1ESbtjYT1RwEWKTXQPJYz1nuXic75U1rQLbvA3usiUp2mZ7J5HYbqw5sWPatykJRnYx2nHgRkTh",
  "key11": "33k9jSMoneMpgtonqEzd99QQQLu4dHKMkq9tqzZeuVzdcrNaV25D89g2uDw1QhDN9MguiWkietnK1kyfmaY7QyUk",
  "key12": "5YhBmqJt78snZD9DrPYiyL3rL9WGaE9oVZ7Pb9jGfJQa6RP5woKW3W7h6u5LMsAKUmVo6LokYVxKaJfZw5Q8PrmY",
  "key13": "CMBDi3H11nasJEVFuseRYeUefNEbcFZCpeBeEeZToTCRsLqYaQSbTSdmw2chyH9BehnBU1PFGwK9e98tZymHbUD",
  "key14": "Qkiz2igzv27djRMG9yX1vAHdW7HNqBCva9s1WNQN1JmTbBGipUnirZm8bFdXLGnoKKMXhSGhyDwwWGAz6uPtdcs",
  "key15": "24gCqkBEc8ZVby97PWUymnxtx8izHD4DwMFBketBZEoUko22Cf5fPqjPAyHbwQEG7HjdyLh5vn89vNEgqkWi8Sb4",
  "key16": "2mWmgMeYgAdDxD99cwWaEZrvskX6xXSdNLvdCGgPuoojWq48EvguGBuZ1N5sSdZGDA6pE1Fk26KpnZHHZPw95hJj",
  "key17": "2ApGdpzsYV86grXxwKVPdaXFaLjxHFXLT9G1efzQvm2hDHeBxwrMM5nSfgyv6jBMYUu6ZJd95Z38tbRM1KBg3Uvn",
  "key18": "gAEPa2iT11bHDy49rfvqA4QUt3SN6joxs5GedsNZtLt8zWYJV3Qh6G6aP2iyoZmPYHKY7MwvmczkCU3GheAD224",
  "key19": "5G2oBUiM3i6d9kXo91PdmC9iQtWEP7NaXHcwJGqfYESV93RKzVj8yt799kQBZjeDHwG9aTdnLhcMqGt5MLiK6PKV",
  "key20": "yuY88X2oL3giYEKMJFHRMJgS2w87mXrdjnE23M77zAMR69xnomUiQYkM8iKGrMr9eA7nkid4zfPtQQtVUJWoG3V",
  "key21": "3Um7ghRbv1Qsk8JWxJX2xkjarLudkAgVDVEb8N1RTfjJat7r5GntdRECkYoQhvfEc8kn2fkxUi7RRuMgf7Ei6KLe",
  "key22": "3MRiQycAocqKefLjVvX1Pob95mtz3CrQpvzDkZPpnt7THTs2uGJHmrtYmoTxjzoUW4v9h8SzBPDLhXxYNjf1i9rd",
  "key23": "47c9x6jgh3irjTzfsm3M77v6BeeDiV2xzwiQfMhKSJfmQUa2SpJHHihyvomXAEK8tJ4kDP7YRFrRVAgFJzwYK684",
  "key24": "4wh3deFZrRBZoLW3hg4HkD275gzg5zafqu1pa8TW578D4AF7r8tBPmvzg9ZUqyZsDNUkQWi2sDVCgWz4sNo4JLB1",
  "key25": "3mofahnuHVBNKxjRXH7gwX2YjFcyqkZhWvs2qtQTnrRvB2f2waZ83EVZQC2CDTuqxSbDy2bDir734omfbpfqytoN",
  "key26": "5mQYxejgjF2Sa2c65hAj8Ebnk6ox5TrqciYco8LZBKxh684LGrhxbBq914FmUcf3H77u37oXTcZyK3Fkee1wkJqD",
  "key27": "3Nitgkiyn3Bk9QcZGXcpnFBYeanD3tFXNeAp7gktDANs1mgsEjYtuBsvK6Gh5UYTEC6eb1pHNKDqLocdpVS2oTkH",
  "key28": "YAT4BYAed3LEgcX7cBpPrn72ZvJHvgQAWzuH5Hb64zzUA3i77XZUQz1tCuHThZfB7tJPat8LsKYZCqySUppkkg9"
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
