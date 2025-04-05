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
    "5K2Gp9tU5Jax7txoN28UNgAyEotNUtVWPW6FNh2ANm5BZRXppoQyNW8YVgHAy6Bse9y7ZzYLkMxK14gF2ajeqeqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQWBj6Fq82nqYRqeEkKqRtcjLyaJex2m22FbtLNtHsxPCoEGVb7t7bZixgffPyNHgDU1X94bkYUEC4446A6DeUC",
  "key1": "4fcfhggRyZNLAHvFCue18PHXnV7oVaitrNZ2Q2hvuGs8TMqcj4Tg8QTKb3CQwXYP5k7UTwkdynxi8aT8BLmSTGSD",
  "key2": "2H6P79UkfreZrSxcdvXi8zvGeJUmiAHxis4qzRMHwPWkU1GoHsAeyNVdeeiUCDTBpzukeU8pbFCBBn9c2v6gxtrx",
  "key3": "3igYNmpyFKnojUyAwTw5BSxcFvPyo4fWNHhSzXavpwpquc9md26QYJ92pJvCXccwow9R3vsGhAGYDE7YLDEkS3n",
  "key4": "2CRfnDDfgJKmyY8k9Nz2zkBpXbmJcKfDHKpeQESdWG4ZQx68wqQLa1hK431WftyDww96j8YE5FAQCJPFkvD13oCm",
  "key5": "5PgHv2sdTrAXWobCYRBEFp9r8S72BHKTWv75MQPg5VF9RarhuM8hshRL1hBS4TZ6UG8N7ii4mU1XLMFXpDo9GzoE",
  "key6": "2UoHnQ39Q8d5VccwgU1qs9Exu4EdQbJjvQrJVipBGM6NTQxj7LZyiwvgkbHBspChrABFKGJhvZQdko8oPbyj5i3p",
  "key7": "5C5jM3L4uaAuqPf7ABvMyCxbUw19YbHjWSUxb8aUfBp6FMhiTHZcRRJVTRUgvnZw8YrgxAC41hF2JggBxZ5YXA2J",
  "key8": "4sJ2CCqJRM4gMWSFcFaQRE1PndNCcRRUvMSmV7uF5uFvyyG24nr5VqnxWyL5SLuz1hWp5RLJ4aJTwkWy8rcTvwYC",
  "key9": "4bQHCtasuF2fB7oBv1Go5BNA9neXkWoqZJpoVfBAGUES292guJXjEJNoCQMNQ1UJSnCQ3xegboV7Dyh8bSBRvFPv",
  "key10": "2HVDcK5uDX8TQNPEeoCre53dAZFpTt6uzgKfurkpyCiGnvJnjfHZiZzUpwHMB6TWspzAWHWPNmfu1fvhcdiPTEVz",
  "key11": "4qPp8do5dUysp7BvvJA4QLFf1AwJ1BSxuE9FVdGBXtf2mTsdKAVFMyQPEUJ7mk7K1Dd1ieLLenhGsXGznLDTiXTA",
  "key12": "3ZYnWR5F8sWmG2r7nSVRn6Mia8gpy413igTwkGVvmKwnNr8JPTZhLo53sowGiPvbu2jg7FAomiBqSkCNuKgu9rYo",
  "key13": "3AHiMzVaNTBcz5esLx4ecmHrkba3SuoeXiuZhH6HxMQ2PnR5L1TqXnbECrECV3RVbg118wwXuMVAqLxxhH8VduZj",
  "key14": "SUYyGHmz1qXAjCw6yyAXP3xqcMTPJHoxd6iexjRTqddqpSCgpfXzANrT5TSFT6P1V92zC8KbrdbVavvheC9n1PA",
  "key15": "hALwuq1ppHC1AktE5yZ8zViFyjmydcFVpBSfLW5dJtLbwrDS3cEMZi7t6RQKHXcFa6wYe9B4EzuLpXc4io3rkmA",
  "key16": "4qccvqBLRto1Gx6FuMseyARizArPpjWohk1fTvNax3pLCgyHjsd4oRNAAju31fMTLqN8wuhd2sgtZ55PWWbrwnez",
  "key17": "8Spo2csLxswUGKu8QfKQSUsJrhF42dWpMRz7WYzBqP1Uv2u4YvKTkCzcoNVRE1qawDsQpMGCcskXvZ3MUeRhLwc",
  "key18": "3EZKE3iohRazYfJeDwgTDLEX5FXoqMd1G9cCCshNpRxKpprFqVo2WA5bhf6hjaX8em2CX7herwgvSx7L3wBY92JC",
  "key19": "4oYojtoAp2LQNmFkD2b2xLXkpWyV5RozBPQ1pQ3qXgQaVARmLveYaZbidQjMrSUFRgCuDujMBqDjtWn76NuVCit2",
  "key20": "GShzgqpKwCjMmDsMCWQS4t927jn9eRp2jBuMPowropoARajfre541Gopro5J8yC2F8WMqLrD55K3Mfye6aopsnR",
  "key21": "43Wt1ZkcXZvkL6qLmzW3iW98cekSX7SU4mUtf3ym9m5jsJuxcQLo8ntnqzuFJ6nnvH97B4UHaxjB9pCuU5WLvfK6",
  "key22": "2CHVhFVFHRweD7QaiCUQdyTt5FxQr84G7RonsUdiB8LEgwsruGD3QURJDNZnx7PEoLRNRHHhr5sefqwW3Qft7tVn",
  "key23": "48fUcEiiCCaQrBMQRRtuDx3w6K3qtvcM9hoUrmuHjBmqZvj83GveK8wpPCjsNuyUFKoxEvSAFo1HhduPVin63ctg",
  "key24": "36aVnNBj6DvNzyMR27dM46JZv82EneMLWG2AcU9S9adRRJXbh9Ugzcx8VHvNaYgAfwHWS35MqynEcjvejZV9gKc5",
  "key25": "4UhEAiRDQTxUq8namvLTew8p7quF7GzveP3TDgeXtEdtEBh2tN3aXnhApfNLaHSqUdc3fm991hgTypDNUavheYCB",
  "key26": "5t4T9LQNJovcmNcmgbfXYwxjJh4XBWx1pewSngW9CBybZqfUkQfoi6djCjSN8AXK4B9iNz3Ckhr32HeACNqMk1y2",
  "key27": "3BZjhmD64odLP73CwYgeikGoKgcHABDKQwB6FbW4NkkAD2wWwtPHV7yAWKPFZaYcefzgFngKCKtPJoc2BEni8HAy",
  "key28": "4G59iobKGRqKRLsuhYFasodE3VNsW98tb5WADhH5awG6qYFACFUA4YnPd1qnTeaxiWsDpLRpH1ASibhiWRSojMp8",
  "key29": "ip8XBz94PG2ahxcrU8qL1vEHjrNokU5wNdAv6R1bytRRrHRPgLtzN57YPzZR35yoYeBB2X5T91d74YA4xpWjXFF",
  "key30": "9CQij3ctccyTb7YWAFZ4CfLQ7u4qbYifFXUQwqLhbqaptDzRAkNHmGiWYJEce8aegSuaVEcfDZ6QYi5bfZeSvEu",
  "key31": "433fYKwbwtvFgzDcnH9kwVE3EW2YLN5fmoW7tyP21jk7gH9znB425pVvQXTFQjtmHchikv8iKvhbv1Wd5HtBEaiz",
  "key32": "56Hi7S2TXtGzMCCNsX2wpDAdXtghZqkKPpvSwNTA1cdfCm6vju7ZfVpLE5XtGyn25S71EgFWdCNNMbUdBjdBxKCe",
  "key33": "38rcMuJdRjeUGFCMsWnPAUPgB64Q4LZWBFawPGs9hEjTZzXURdaTuSVihyBJFd4nJnhETiZL3xsMbT2CznxGcyMU",
  "key34": "2xzhnZ95Y8voPFXbPhRvz98cm1zaRVZ5ihq1o84n7GoajqgdcFPvnmrD9Yc5n4WA87vVcXw7Y2ARcMrCBtXbLKGF",
  "key35": "26yXsToL1SqdEA5XRrxeiuecjECXcsP6zGFSuJwinB7YZAotgE8gNGikBUYPvY2YvZZ47TjvgNKrUYSPxVxSyYqM",
  "key36": "4EitZCnFFgf3wpuHovgJdyZfmCDRg1v1nBJfwQEi75fCRiJXDfxu6EssvTfNAgN4HWisUgcTdY1VEGnoT7UN23Px"
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
