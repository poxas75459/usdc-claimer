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
    "2cWcKksicaRxcjQazasmrDKuV6c2LnraCf9HYEKuVoAbSTzMoHD9yWH4Rek1rVycCaE6kjX7xjjJioQdVjYBRn9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bypeeB31zW5DgMnDyG4ujduK7srHDWcr66gFNrhiJnEFvYTQRUnm3yS75RbWAovT8geZSocLpUAqvrKTWzqiRgy",
  "key1": "DpTV2nzqwHk6uhgBkU8Aaygd2nAdQLz2QD2e7pnDv2Sm83HM449fRbeVjoeNLqPqUDowk4dZZz7Ujsx5XC1xjxs",
  "key2": "k3Zoef7GUs3TDFqbahk7c6ne9iVTMewhrYxjLBq9BRLjDZjry7TFEs7a7xP2mndxG3fe3CWxK511Pj1ho4Ap44M",
  "key3": "27kF9uySAGKiPNvCTGE9Rq8vtdjsQZvnAXVixENzPfWUGCxPmug1AE8V4Wpyq3jE4eJYktw6EcrCqxty3Rkrq9tr",
  "key4": "3GJLbEWc4xk63GG4bBZGNNVm64DMHgRmxfQW8SktSUnSSom5ZEdj8A6Bs4vtmYBDfChon27GyDCzNT7GpaoKn58Y",
  "key5": "4oqUFzs8HTPF8o3Ksth7cL2LkARMsr1tdcwgJaypu2NaiTTM2Dwp7HegY3oL1vnRA5jW4D9kvyqUi1LZnTCfqQde",
  "key6": "3nqEMta5pEgukLgDDynw7Jwf3VqN7oLhNEUnmGiwJf73L8kUX51BNqKz9p43ob2kjKjFuEjrib2haoHg6JNzuDY1",
  "key7": "57K8PmCz8FBiHuUz5UQrhMsPipXecz5UQCavGKdKSz7LGtUfbupCV16sESW7aRLu1cb9HfdsasZ7U8svXX6LjYJ2",
  "key8": "61j9L74MSrLwhd5TyrhirKC6AXNCQgbJYkE28qWMp9cH1hpV3cc2tecS1jCpzFiuVYGuxwkcWf4uVystmB6hWFXW",
  "key9": "5Cc4WpvZtPcJgrhpPaxwNJx9thqkXhWfukMCAexwhnPG3efqUsQAhBHUC4jaVQxe3N4fFgxgnHoqDvwnuALFsgWB",
  "key10": "24maQYYcduoCQ9GQ4g6MR89Z4SNYZTXWRwsST1uuuo36w9s8o2tAnc1UizCCJt2U56TjLhZUmAUMAAYRV6tYmeyX",
  "key11": "3nvHSfuLWVZEFgZqnZPfGS2SDUBu9ueMUKF7LJyvjH3SotQ2yZtcgppGg46i7M2pUZMq8xeUi5BWfRa8Vygqch1w",
  "key12": "4euS4rucdCNkB8KYMmzJxeeP8iEqtP4dEm9Zdc6TxjPk8aztsF1sFx9Wsyx5AGv7Ws549zMnbyjyr9tgatBApyH6",
  "key13": "3evy2D4pcM8WVQb21JNrJZAGMvpWgnDZQ98SepqRQk9TFykurqoeTzRi3snkhco9ZKAu8SFGptYCUb2TDfbDNoPx",
  "key14": "4EQgQ5DkceJjZDguTJ5ZSvNLhcqKGxwvfQLN6vqsqwZQvKosPB3z1ALgZX6HcZhgft22M13sgNKg6HQfr2xTDUnc",
  "key15": "5e6pez8PC1dcGEWLFhbfRGzFGNLr8ARcJFcV1mmQw2gWAf3H7aVqiPVi8Lc6M28R17vqx12zmjDbvrKk9UDanRe7",
  "key16": "3J8kBzS9aSV9eDd3qLQqeB935ccUA6YPx1dwW9eB8fubbdSRDfCGRzUHjLf7Jz8ydVJu9mWzpVHuEuMhagEdEapH",
  "key17": "4SP7by8smukoBgkpDuXzGS9JHpeJVuFtnaLuj37E7iWUVkj9RiP5pQaaQ5yaH1QB9fEScZzirySSPSpcr9fNCUzF",
  "key18": "4tzQxAgNmp7gJmJaVPpV3XAs8r4qqi72uoWcWy92PeAAA2hPMjyYjfofPtY8zLENFpn3ShAa4x93mhFihj2RdB9z",
  "key19": "3U29NyGYuwtFNWbuQUCESwGZTRPuruPN8UfVPs4q2WZq6E9zQUXq6QUTrQXNuwMXfHx8eFC2pfUgot3SMM8H8LSh",
  "key20": "46GTU6vJLYTjsWfE9Q43LMQ2BAjpmxYFbtu9HCyE9trb2kj4K6ZA87uT5rbnv9PrzQryXZvsiJGLU3zptiPjJKVf",
  "key21": "4vq96A2WH3SAorz9CunS3ksNNfJrw9fvHedn54dWBzqJCV1JVnYaDpr9X44giscZLncvwdyvxHxDAJy3YttQ84p1",
  "key22": "26myzjxzJM25RMQRfenqWGpSWUHtS71sMYeLPmpAYtRixHcrvN2uK4mCWbBVBXR6kbX8wE354MkTUiQRPStToTTw",
  "key23": "2We1sKG4r5pzKMHekZS4VCPdGQbRGqaY9qWz4VVw29biZLBU9SYHGNxLmxEHNT9DBjbg99doSgrB55g1sp61tXfh",
  "key24": "bfidmQLntjMuWdfP8VYGNjtGt5ET52bh8kAgqvFGFgpCEwj6fx6DQawf9q33w7r9TfJPzg2ZkvWnXGqYnXk5YTd",
  "key25": "2wmwYYkbc74FhEcLYGspqeCLQ2NtUKZRfTZPKhvs3KJDMCV8QPHz52JvDT841TqvqLogpGLoSwqUU4CH2N9Nzz9h",
  "key26": "rRYCJPb8LCsKjEjhyE1ZoxZi9xkpHD4oZGGRnSrAG5SypW8eUzdrx5dea7Vo5HzY4x1nohf2NF5ddomSdWqi1DT",
  "key27": "3GT5Eeiz9cWi7YqJZ6CSffWtWaHrqoWQzZ7Ujh5wS6KYe7oynM8wpPWJxJT1KPMwJoP4PrsU7gXAGjoW7n2ASYfV",
  "key28": "4yYaeg57RvKDZEvzQPe5mYYWbbqjNk3qRRYYbRtN9V5d1TcU6ZPTy2TNKFa53aTpr3vnnbNKFNMZ71ffuQvjz62J"
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
