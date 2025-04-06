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
    "4RQvEmGX9a44YsNNYpS6CzEBbe9dRdbBPfheZZxrHmAdi3F3PqYSGDEeEmWtdGbqsjYUijHHp7hxe3Bq1rKFvXzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9aNXPPGKhiphaCCJyHbqMGdZpBmuPXnJ1qa7M5moC2nQcK44cnJaEMeGYQXP6qzL8nTB3EwTJfbAnTnEfB1hwxZ",
  "key1": "9pnf9Sg9Hyn2yPdQ16QG1PBbajx9MJAsoME9roUXuUTPasSEmYVwAt7aYzuPdkGyPo7QWvCf9pps2kRkzjphbGy",
  "key2": "2UUdrsB51L1Yno8sfLG3Mix6KRVKFCoQUWBdsCijrh1nzE3gCitwbehbM93njEjGA2jzL4gJoTsSjT8LPqGGuhum",
  "key3": "ChjR4XaVJoSSSe46cTYDS443wfUxqayeqYnQmt7fgVccfmGp4Cedao7i5cRg422pFuerbmfKE556K5D6WoChbUo",
  "key4": "8oGeDf6caaCScTr9eovQhiLk1g4dvcwCJ2EXngUBTZhZx45txT6b96qgJuxbkVT5byJzJZvkmJbVZYaihyf9Fnc",
  "key5": "3SATfNbpzXyukzAKe91rrnYNBBWU4i9svbH9yUo5Mwx3QWHCwocMrwBEL31aJRNJ4ehFsvHxAYcJYa8Thbc6r4Lq",
  "key6": "43c3QbhcgZ4rUW5oNFWHVUXNKTkzgojphJ2muVfiLAXHZRrLXPBaGmnQ2PgZvbMHEbxX13WLFR8L7yBsRRGHM27B",
  "key7": "3prKLXku8qUevAPRistm6KMXEcQCvnpU5goRfrrCssWK77fxcBybLKGb4EacL9oQM3vQCKvZm42rEcMQ92v8uq4p",
  "key8": "4irYPmLxaYeFwo6nRL8XfDQMwVGX7ajsAUGvGBs3GLMbJZgpWKTgXiYZ8mAsv9DyxGYHPKHFumbTvSwopkTatHA5",
  "key9": "Cw6rZtSpVdPiYkeWxQVKENtQm2SPFroKLsCyWF76JgjzKhXpGG5Z2ErVfGFEhUEFzxkBL3bfYyK8n1yDbJXiUCg",
  "key10": "5HE7rqBqQCcvBrtpmkBoxHSBMTnNeJerWcoPM816eEmiNTH1TfyskmQt8FNoWzhbhX85sS9C2zbHz4Vxfaifrh97",
  "key11": "3TM8pMQPodHpTWXYAvA3CqvN8Wr2APyyjqLScsdJx31f2xiTHhg1iECaqR3AWCLiCgYBdehADCsWUtcPzsVZctNM",
  "key12": "KaBX2pR1URZ3P9K8gD6fP6LTpKmKjvvntRZ7XXbmuPjHHLZD7ernkaToV7k1x5recPyQp9Nvm88R9RWY7fsTukE",
  "key13": "59iQg8UXKYmGL8cZGcroXER5u8eYfXkhb8uKQsLpja7aSYUb5LjZGg29gNRcSPj3rd5B7AV6BaKAnMixGnRKxmH1",
  "key14": "55EYNKk7xwvpGQsJ3UsVBMSZeJBwmJZ62ipJAr2cm9nXPnsQLF2pmL8aW41VFJkdaTBUQRofckB6avokoN6cWuE3",
  "key15": "3byF8aEkg4VhPw6UMxEXAi6jX68ZaE3ejhUz6dGW6VfXJRNgSfyNfR9XF3nchpjtKxCCJEpjDmFpr8uNYR2K7edg",
  "key16": "5qs1Ev2J2TSiU8xanYkyaKgRWcnRXcaETsgvJcoCT49QzGW5u2TAYpj8fjTKBC4UsJTTDuQFFS2ERZeyPCQJHuEs",
  "key17": "5ydnupFgdbboMsVf8G55xrA79C6CKUQibWN3vdrokqrVjUoQnzYfQKFTDsPhFvZoCh5i8MR44TwdmfoU2Un4t6HW",
  "key18": "4qb8vu3168JQn48yU3oryWwXS5tBFCwubCVuoU6jax2SybZpgfpNxLrQNFEduCZtCQ9B7q9wk1NytSYrVRP7bwTp",
  "key19": "2Y24mexop3Vryn2hqdeDo3aTrccKsvMGStHywkuCN9SpeUkpLsrKt16vKeQ1tezp1VzyDyZN7tzPGWKvVQuzbjef",
  "key20": "MZePG1UqZHDJ59LuoXLv2ztwjSHKbTJhzLRaGzRzDsHvbK7ZB8FnRBfAd1Fr9Vybu1tp8GaBhf4A3LoXccouu5B",
  "key21": "66RoKpQEKTsZG8jTQkW22JuFssAXukVmbRMsVh2qXbQ6y3FKFscjiKgaUrxzMzysfotprNfahq2G9fHh4yBFW2Bb",
  "key22": "Dk5CjpjWUsLoCzCbj6nQizs6DHbHtBsZdq1Q2dpUHLqQS36UvhE75X3JNodEaHeE4dD7FEN3DuA6HkcE3PES6fr",
  "key23": "NnG5cTKBYwk6mCGtpBNLa4ajvBenkgRmyq88tDFGWykUp8mSt784AtBCycRnJqRKGS45vQrwCDKN4ytqD5LMYST",
  "key24": "4AGEoxdDVTq2PzwmVyao1Ln1HeAtyhvQMucGky1ZD9PdHpNvq1d2xCEFtAKENUdMBMgsV9RDWkhmdFDGG8qw2MM1",
  "key25": "2uPwui63v7VJEeXfQLcUsXGpAZFFWnUJEBEy4LAU19yQE38359PwvWgCTWXxygAn9NWSXR4L1EDzzLpe2W9xaXeH",
  "key26": "2qeLrhjz1cSNF32Ky8VURFJBnzRdXTwvFhCZzqdfVYRQwJMJM52B1BLCL6mCS51gmeexeiDKk4GwJsDL6aiGbUCN",
  "key27": "5WyMpPXYHt9U39YmET5TstJys2jdTJFYVzV9pDiCvAZy7qRjUWgeBAXS8kjDABo2BuC9h6nLuXnQ48JXqDXFakLa",
  "key28": "sJMd1suRjBdxjkWF5ktq8QMF5Ef8fgS17x4eNPHZfUh7bDgkAXqtXtpvjnsJgDuYAgeR3x9fto5rywgiVUVkWxF"
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
