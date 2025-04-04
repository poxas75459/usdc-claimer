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
    "LMVVPZRemA6hB8RuY1AqZUwQ9imjJUy3mKVShj65mgVaF379HUBZFxipUcENAYWuMkm8b6S7SkTdYgTdPrJCrRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wcmPi45NNFRyPVh5rAq2m1nkcbPAyQtnSTZF8VBtr5CuR1wZwaGBqeQZPm1rZAcfxucKK6k5FQ2xvpN5cgzRYo",
  "key1": "3Z9qfWD3dcq7v8gtMa83gAAa5zWosxzWhv7CM7nUB481YoFw5Wwkj3YjHr3H2o8i2FtWc2MipKL2gDMd8YQPWrHf",
  "key2": "5vus39C92hB5gHANj1iEBUfeQNJjB8G5qcUyq9uUNUjfXsBWXZy39UJmfzoRSgcHhdZoGb7LvRtUKR4975cK4ifA",
  "key3": "38DGCRW2jsmfqXeMqZoEeeqjfttcmzFS5JrSrT2kLDdcV58TpxKvYFmbTNA6Bkvaf22R3P4iosNQQK3fvbQvtox8",
  "key4": "4Aa6qXvd2VijdLK8cwvYXpRcrLgQTrZLPDvER1edDzvoDeZDVU3SUBQzWwiPS9jCWmxxAyZNnEjfbS5TQ8WFV3ET",
  "key5": "2sAqBTYkJf4QxNbuPk1RMFmCzZcWXB8k8xnGHmk5EwjeSmBTB5bHFGVSuya4xYrCXEP8Sz2v8Yk3mPcuvvQD2jpY",
  "key6": "GdEmmsN6s5hbaE54S81q9F4gKDsN5rUmqVbjvPDKdXArfLpamgCssQBW7Pbr7trsfBJzXBbLV2AgkKyebjNrbKp",
  "key7": "5WU3PwZF3szyRQo5LXeYc1CYyBdTSsaYeKbD5H6Xtnw4Ljruv8rjbJP7jMbyj6SuZPhaLqTFrV5dVLEn2yVXmPmL",
  "key8": "4zN7V1gHRrMSMz9tea2w8gm52CyiiHapxyG4Po822Q8RkWJ57dCnPAyorXM8STCvzqMRcvcR8p6pKKPw5yKXeVi2",
  "key9": "5yNX4NBjJ8cNo88xjVCCqD8Epjmra1aSUNVEYj2VP8DHoKJTTebhwdGj4PgynatDeaHRjbq8oYpAdRYkefXk1eKk",
  "key10": "4EDWnK76YFcMWxvpHza1VZ9dGdY2hu8FaSmarKLBjffyq8G6Aw4DbdXu8CJjX3v3wt78GMY4LyWuvxbLze1oSG5R",
  "key11": "22SYj9hsLz4qCkqFYLrttwrgbJy42i5RYGCFFF88Je4xMNzuSddm1qS8z6ozeCAnqYiWzpLfC8W1rtWLinLRWN1E",
  "key12": "3czUW6BarEN9eeG8EKeriTbix4FfW6oTNmmMpdNZWghPRp26nc9xquWbwwCHNJnbm5XxMTCHnWxRdJZMuKqjUpxU",
  "key13": "35XJkZx7Jjdsfi21gqNkhs3PfSgArkviFNDwqEXUB7fxdK9nb8TovZ3GPdbnZsn4X6HKbnjvJ1knRYxrM3FoZhhD",
  "key14": "2M427hgfE2uiXdDUHisErofMCVpZcmjpAwif5HYXyC5qY7MreRHAoAkKZjnNjFjoRRJeyCzKtC5vDd2WqVZGdA1t",
  "key15": "4No4jMCDbvcktcnJB7DccUseVkHewS5JDBHx7NPkLi58BixVbwgCFxYjU2DrjJMbjhy5cH4d7nKtSES35d72qna3",
  "key16": "2LTyRjSxGYJStqZqNdXfoDAsa3GRAbgAddkP6L38BWkJaSgqRnv3GvWarER8KyWMHxeaJvPZ219v5t4ZEbxCZUd3",
  "key17": "3bFKq9wq2Q42RkMJCQQY8mwFN7X3MTSzZiCXGPUNAcfL9cEFu2cgBzH4mcTuhhftvnhEUFA2BiZiy6jehVp3G4Sp",
  "key18": "3jqLfnxmPbdgqq4JoiqdKrUoUCKUBVJnpiVFmHmXm6BBziMmpV8XdCavpMNjDxqKGT8aSnPdGwJwqdqCekMdotXS",
  "key19": "3Wt5UKYwgyqZUrvbfXVQNwLTw1eZCFfic5Wfj331yigJu3HbyEr3iuXtt5esQS8H1iSdhkiFpEh4woM6f4eutA1N",
  "key20": "387Wn77YuP4U3VSaNqdUx43GrrmzgnjbFcSnyBpFBg2dti7smxHeN4QRcoGPkvxRHCgoyW7Qmf8np8Hz1a77iDfM",
  "key21": "3tzKVf4S9M9NWxtw94RtneJzTAUB7SGGCcpAovH9zwGnaQNZiNwp17cRdUJnZyjDyhHokUgrhVPu9NgsWYewsBCE",
  "key22": "8xiuy74qaYggoELfXTMUToSqH9vDZHzAdt2dSGQTamwCdiyckGQ6DRK1QrP63Wxw868VmMNwzKgbMJm4LZmmCYq",
  "key23": "4mdSD2hHxcMenrjnuAZVhGD54F24ySrCkJZh7vnat6qe2Aa66bMRszAgYu7a8AiUBNkescxQBJMaZk3y29KNej8W",
  "key24": "5iW9g12SzBwiessWogvsKpZmyBotw4Lvpa73UnjtFnmnniMd9ez7esxY5LjJtowYoXRYR2FjjYECpCDxgR2LCj4r",
  "key25": "5a8swAMQAJRGaq7vh8qF9U4xpgsKDfdAnKWgRcktVXEasLY3hosco72trJ41obLQGYssDK5AyC1dd45d7pZrF1Uj",
  "key26": "2wuvKX2nw68uEpcm99do5RQHmNH33YMXPLp2mJyRAN4pVmJBkdpMT3omYp3e6qsd54FkaWnzXq1Gt15jEMeRgRbC",
  "key27": "3itUjDj3H4aM1xNaWoDmmwtMbAK1dy2p2B6yUB9HcdnMgminmFYcqyrzZh9G3R5URGScTwsKEHFSFyEt7KdPVjZU",
  "key28": "5sujtfbcJNQbMqNS6dytzm53qqEWVrecLVusKAN4ahr7rW2Lg7iBHp8oHT4nJ7pVZupVpSsXM12SALuh68FxgpNy",
  "key29": "FfwK1JiA23KSKGxpC74uB7zr5EAmzyWLS6iUN9oPsBMJAzN7zJFQbTykSm3HQNfr95qrhePpbXEUrdP7FRQsn3U",
  "key30": "1VYbrbPveiZxx7jNAL2bFCPSwE58J5mXkXwkjuhNvYU3iPKWk7cNmaJhyPix4ntNXY3AwVAAqU3HEXqKtHDxHhy",
  "key31": "3h9Rzgf8JncvSzq5qyYBgLf8XVHuXJjusTum3QoqYw31SyU94762vwzucvCShueij2FHpFaZUSq6yUEkkzzSh92W",
  "key32": "4cGo3SWW8mvpQWQ7vKNbuWabT5ageeo2VtPAkoBrLZtwMCXczUqpB9qR5gJq1wDkxYyJ3vME3hvMhhgqLFS3qjYn",
  "key33": "9JXDVhFDMq5jfHHrXc9oZQZtHos6NQFa3mRTcZ5CAAuBjbq4YjmNJe2CASpT8r4inkF11Ndnh1Y1YEZFj7S15aq",
  "key34": "E4DFT5N4HWwvDkosD8juJ4zSssqVJ5GvPU6BoUbW3vRE8GYKL9UKcadJEUvP8GusvTFico3VgrCtshghUxV3oGV",
  "key35": "4cYF1Pyu5BZ1K65Jz5PvP31AT84QMcbC9UjySe91qDRsujwb9foARwEo8TEbREH58pTfxvmSWeWpBUBExWtiWHEB",
  "key36": "5JA4f2oinf9i9df9KK2iKtu7qiTZ4QCQGUuxgsMFxAs3atQoHrUiMqTo19oVjx2UgfNiuBPABdxmcBT7DT3ZAQ5r",
  "key37": "44FUxb1F24ngm894qNw5B4GrYYxwwfKaDDJkZinqgb5KZG3nzQixudUfZSg8KzSEr4jKwfeSWEoJsEWmd7Fffvgv",
  "key38": "4TmxTyxHUJ99FxViQ2youPhQt7j7Lzn4JiBmwwKDK5Q5SebU4uoSRTSHAXu4mjGMvA4g4A7FDYWoGNs2J6uH3rM1",
  "key39": "28f75AQJTt61KKiMnQRZprjafZ9pPjZDuC3MbfCaaWJGH7rYcQv1DN78f2zv1uVrxSRJ7B1BYDTHzABv5KTeJvkJ",
  "key40": "5k5di4JLmgMvwimbfahJJ4EjnTz88csEhx79UoxUgRKtvbUsJLqCFTL3rHj2WK9ExdnQV9LjjiESmGhzfpgaj83H",
  "key41": "2o8jD2HgN4WxZ8y2nQMfAf9mHjEqdYAoKZ2tyqgtMKGxLML7cfHk4tY3qxMnmaaaHzCkHN3XkBsZG3bq6x42SEkW",
  "key42": "2j9gvi9r3owXpjX2vLBLfipFePDA4NcsdsY4cKTpQMcXLsWf2jzKKZf6dabchunNRPpszX6Nxk2UaTA2Ldjdb3xd",
  "key43": "5m9FYNztNXaW88995ptsiuHUSV3BCNy3tNtGV9YesnqnjupKj1UYjNrXWohf33LVpt2va77UPCgKCW6LQ9aGw3Bp",
  "key44": "2zZuy2heXCkoHPRw6ZC4SuQEBHxXHNeCKbNBzfUgDSxxHyTp6YNwgQvoUgjW6pytPBh9xDqoUaqWWhvWLmmcPj17",
  "key45": "2nq35dektmUpe8dRYiiKm7JLnLVfEcaPFEUzCg3YN2jxZSUeohFqmHv3q9WpBy4uEb1R6RsVesRkqdwgNCkDeU9z",
  "key46": "2DcPk4Bb3qFnMsZ5tvDnZAvtLWLAeh8K4oAp2fdQw2xMhCxiyQtRpNCgpD6PbYRUziL1qcFc2EAYEB9xfeFmBph2"
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
