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
    "3TbeQuWmiUiMqM3MyWHB7zBer4BCRYi51KtYWg3LeLGsbLxtLCT2u12psftFHCVdrA4gK8kSxJp9MTrrkw6samJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wm5FqH43ewC1ap75QSYrgvj7QMgtYHYkgmvYS2LGTRxFmH95FBTsy8QzEnyEnpXTUxgEFb6as4RSPwUKkoVGY4c",
  "key1": "3yqDsuERbyR46Ysb5wPg19EiPvGr9D8W7uHuSivVA969pZpzVeLafU8DRAxJV3gC7otAJbqYqJH5az9HKgaMHdaQ",
  "key2": "4Mn3vZj9BH7A7oh6dMUF5WfVE1Wj1haEFzT7ZzfEQ2ebyS5AerLuFxeSHjzLsUaXDtD5iwLTtAS4KKXehMNhxqPo",
  "key3": "557rZgTYsEmPeuhDRCuKRNxZ2yvYSvkKHAbQfoEXsaD5xiguXyH1YpxmhXr7tMdNouhVJdYypmM8Pcu9tu7GjCQm",
  "key4": "4ZkfbsYXUjda6vV3qKQixomkGbARD31DjYtHwmR4bnEp2M5JQWppxbAPwxsGGHiz58gc2jkfKtKz8rMRCAsZej1q",
  "key5": "5U1z89XLvQhLhqcrMQcjSJJLKTRj9zkvrzJPhXH6cDiMAqPkwt9Cx6LjSNGxi4Yct4jgAGpChq3dkW2eYumACkvm",
  "key6": "5ALuWwVHCE2HiTiWSSXv86XNi9QqGU4CmwiJcicgNct6i3o8dgg4YMcA4VNhdK9iUyufS3ZpWALjZ85mEwRGbRRJ",
  "key7": "4EBnALLgcZGrPLDhzTzUUWv2uYkSeXbufHgAgpWvarHcjF3bfCAXf5Cwx3DeGoNKwVdPXZ9BvJK3EM5muoe9roCK",
  "key8": "5WuqisVAdyJaBNNotsTXNUWksdFayesMM6N1KZiiQjk1auSSew7aa6QB3vUbvtm4xB1hUJXtAyvdMVGcGu6smgEF",
  "key9": "3u3y3Eie5m9arc2C7Ba5HfqMEW8gFqJdHXDipFJnU2ufsQGnQBGti1gdLS1GAaz91S4NhoFXckwC6bmtyf6MS1KB",
  "key10": "51sGX7wpxaHoFGbmeTHJeqSiyxtJ2qfQUhTKZbwKU9PCfYCKobThQkLxnCn9NcJ7jEG7LesgP3MHAtBJ8VZhT3aN",
  "key11": "3WHNRe4aEXQUd8hb2mtTYtXTQPxX3K49wMdk6i8WKSBXNqfnm9iS558s7DsFz5K9rKrU48PigkbQCrNjNykkrbhx",
  "key12": "4awqZPoiVLvnhxhSksDqJKmjTQqscqPfEsrLTi4KSmy8DZmHy6MD7KP8ytaNDszVaXW4Wt7Hv644Zpms4QviX9ib",
  "key13": "5ZohwHSSsh8komtVx38Ux1tj4aBRXM8XkT31F3td2B9ZdrTMnp7RpCtm93SM71PnEPRxJnD6712pH5MyDUf8kBYJ",
  "key14": "2Hv1ZZfosPinyFY8S3NFZxQjSJzC6HU3dZ2fG2L5qNct4X7Qg7wQZ4JGw5ikMMmmtqHjjpaB4FW5GgsKXUaXVd6U",
  "key15": "228tSmeZbDPGGzGZzfLJdGruZbXxtjM33odb4Qo5hbuBVAxmdDtK6QWkMa1HH4heJVT6XbWRGqJxUwdrcJyE4VBb",
  "key16": "5J3tuNNbAfmJfrjxKsB1SiefJUnkqwActgK7hx1eVWGdbcqCu5BQtAmzh6y5fnvDHZba98DJhb45bE3YUSgnHQyS",
  "key17": "4rhYukkcyWPuetmv6sSSh9oLoeFtjaiUjUBfEfxPPG7dWHS96mzBbPbUZQrnULTASxhukBuMkPeAy8fboJActzk3",
  "key18": "2J4kzp8Ka9v2azMGLoBB8JHFZxyvJrRBhQeUxT2fznw65Z5Y6ckzjwJTbfjwcYPCzzZWivRKtGpFa6dzZJHiwSYJ",
  "key19": "3EF4WtrdN2q28S8nP6MMcSaAxEbSUiyNF67PRePHZcX4N3o1DmSqRMRwHmSZ5UUrzBjd9dciyW2Uv3nT8SMz8Y8W",
  "key20": "2wnXTSQCKWmH4CPodiTxpHPiG3Jdb6RCQVAEQESWByzVrpYvV7aa15aHVjJBuz4hVNuPwr2YQzXiCzDpCFCe7ssb",
  "key21": "ADQFVEYCWWX8dMf8pNMcG8vj6zq6RPZinrDYkAHV1gM1RLM3ySL7JZ6ZriQWC1WD9j1yuPPfnKgZKt82hUh3eDg",
  "key22": "5NMHV3ENqYzekwSKRgXKJnAPspGjMaTDCMNXh7hxTyYm319md6s9tSUMJdeiaWcWZ4m1V8LgauuBXDadGfsDStwV",
  "key23": "5ag8CZp3qA2RAXJLRDATwYjqpvShiis8mnBDr4v9kyuFmoDJbqRodB42mXZTnfHdvMU9ULABZHkJmUsvgsrNVmYi",
  "key24": "5bZkRUXz1sorb6iRrZwoey7nTpn2E2h73bwjddarfcgtHFNtJMoTRjF6nDuEHxgecgCsmrHRf3DrcCTWeJbJ13Qn",
  "key25": "29d8X9wXjVXpFyPwGFg5vtvGxJY7etqt7ZEmnR4ZCYU6yq4RbbUjvSbVde8bGJC21AqwgRY5fvuvGeLeBpqYPJd8",
  "key26": "23LMpWETA2tSw3xhWdToeSsDJzLiHReDh7qZBpin7tqZc5faCPNsbuMYfgEnyqc85G1s29QeEo27TzCK8cps6yve",
  "key27": "5Beam8AEovWMzXAUjAXaA2D4RfEWCYoj4dATnM8vLbZ9n3dqEjeFws8raGR3xxxdsgvWjLkosdn8mEVFACfXFGhB",
  "key28": "5bJ1DzufTSxaPN7bdZnUpbZhbEDwsrZBcaYhoSYnS1MdTaJx4rd1421dEQVKUbhw6QapxPGATS1h4zKo6KfDb5fu",
  "key29": "keUiynXctkMB7VAcMH44GBhdpnASVnky4WNaWBA8q93pnK53MC9NjD519bV7CY7kYqL7WoX76LTe9o6bgVCzhG5",
  "key30": "2zrK78WbWJLtChb7T4BtBMFzvVhkGWoCRNVaGrCc8eqZVKNcuuZf8Ru94MPMUQWpJFF8dgS8qVezoaBt2PLx8cog",
  "key31": "4TQghBEDCuvtq6SLsbfFqD4B29TZsGjmqrhXmrEVBgn2r7CRuL2kmB63xggi8zfQQt32p9TBWuSKTHmN45jfEYt1",
  "key32": "5Zy9sFneCBkxt5XnZhf52fhBAdB3Em3zc4JeKwZEN77X4jnquMrW7uD51XNPWW8gBcX6p6UPBoFeXppyj5vFjB8o",
  "key33": "4vfn3ZpthziXJxLYJBt3mFXntQ2uGy8ggkugyaiGN2FJRPMPfEtJfnJ57poNgRDqdDeoXN4Jwk6MyqsTWVDGcEXt",
  "key34": "24DQMNzh8YneKd59nBDf1Cpmjn9B3xZfc69nszB3mW8Cx6vtxwqVgnSnWDtenkht7mKAGmC7UpwAykcU2Pfhidbs",
  "key35": "4VEW73Gymsuw61xNyNd2KYtVzn3Gh6Kdv5iFdRGyn9EQJgVQBNnSkB8kECv4cdQ5qf9qu4wdUULs7r2eTPQySVvy"
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
