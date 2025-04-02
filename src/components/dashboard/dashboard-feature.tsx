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
    "3U7fXGFFoJnxjZjQpqsw5XZTrfwnRhpS9vgK7JKRz3hummoJ1ZqJCWMTmmw2HRqV7ADEdCTSH1BjpmMbzmgG4QJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CjrP6yZrPoYrUedDf7HbHNDrcwvxYRAXE3otEjcPRoJh7PyengdpaYtDASHnAyh6RC4oQjW4PCrS13pBhnae49y",
  "key1": "3B8mmR3yiziry8jLhJm5FcwgCPVAGpEgnsq3tWrnUY4UYa55JKjbbF5WitKkXYQ5bkKJti3iAFQp8d3ZGyhSp1ph",
  "key2": "4VsJ96mvDwGCattWDzMpdD7vVJso3WbP2QmzKyavv4bzXF6wYPEc8Y3BD5jUzRmjDRhSNuXKrRy1x6Uu4TcsLZps",
  "key3": "3WAqPKkpA9GbLDGLRyFB1XCq2jrj1vBs2m3Ri7AcTLddpHiES7UpvPD5yAqXasGiw2c7kye6C2AcQgnQj9BeFL3x",
  "key4": "otPYgKmMxrH21u3uMwYvhQazcqvLR4a2GQbv8RynYUVQAXQzGTVwP7MGMJuUf6gy1zcwKj4f8wLjAQvP8RJVYYA",
  "key5": "5Y2tFeRduxCoqK2AZ1fZpW2HWUCQQEbDFyhZz56LQ9M3nP3YTrSL67pXXX9aYw4kGzfSByvhZaWdR9JTzFdVxVTz",
  "key6": "cRJAN2JAE4RNQr2XnT5vJ9YTDEQPmNpeSY9dTLVG8wn6CbNdAv68pqoyN8ukKqqoE8wBEWnZybvP9gdf6St5xU7",
  "key7": "rE94xET3K9p3tcQ6BPbCS5j8jttkPyn9Tg5vBA8xL9vu7oYo2jmx55EPe4Yf85KE8n9v2C6jc9G9ZLMP6Q77fua",
  "key8": "3Evzw7DeaeZM5SU7RcvfsQu3skEHmCkFDxUwzCnKvdowuitdzMBFbBjMnhg5uB9o4dLUZjAWJ291KUYiadTZar6Q",
  "key9": "4GqkMzKLe1ij5iEThgzuXUZn2reruy6YK1DDqncNRmXpXs6d8UMTTACgRNaDD9qfcmsDHSGcb7LeGaU1pmYepcTp",
  "key10": "5ccXRbpsMKe4FNzY2r7oot3CRQ66moZwEkiY89cYnyajXG449jo5h2xBqrsQQRoTswEoqigdxZ1aV943tfzjvw8P",
  "key11": "4zMHy7ydcarmXeTrk5htRHVEvD5yXjp3KUX7PkDiX1x6YzBMejDcSoVUda8gBFNBhzVNthrbB65LQYgrq6p2GBW1",
  "key12": "4EekLTE4tokbBGmv3VPwH7Dbq7B4FmxniWDiAn7pXSKzNJPu1Qbs3Qz63F7WAK9BPUXrY7oZyp2UL8UCeAHrt7jY",
  "key13": "zmcA27gxfj5TshLyrt9MtNtqsVvUY32dTi2h2miWbduV6x8ZKCmDycqjsjZ1zKuRyyt33CpkcJGkYBeEfMV8ZHd",
  "key14": "4mG4jxLY3CWhf3AY113BbwBJGrZDPFUqBxbGwnG3vjzLeHRFTJ2kAxVwt3Vp2vH7XFtyVR7KVHt1x8EEdNEWFZxg",
  "key15": "5RMjvNFNmY6KYQUoMisjw6srVTq6NtMXvT7aKvqME7jtiZr13CRQgiDNdV2deFVKimyj8UWwTg8RemEhrbTMDyXB",
  "key16": "2UJuZjDYpu4vCGCvgZHNpdXvFWuGS9it1rMZnRQYdnxZXMvjjz2UFpuzjekA6briU3J7hoag4KnqZ8bmWUk8KCxi",
  "key17": "yamqEr1jMuzXnvAm45bc8fwUCrqpvd3YtkTn8sFz1Ur24xDW8hGu7yD3kdzbLHwKdyF3jgi55yEjuHPm2UN1PaV",
  "key18": "35aZNk34qPkU7htm5zzEo7nhHrdafteiejBiN6PtLbqRPPiVkpuo2kvHdKY5MpuHinMqCyxoMUarVckoAoAic63p",
  "key19": "FkDXXh5FhDKRwuDZ4RVcmqzRjoWpcavsuL8VH59P8NyNSewVKWKEbZiWT45QfRpjMutzW54GhiLvHcY8TVUT8dZ",
  "key20": "43Sfm2CT9h6wanNHRWXPu4kaRKiY83pth54ftH8gLXnqMhunAU5XAwrgqfAahd5TvcdCXNnxeMui5Ki3dAmxQbDH",
  "key21": "2nbYpgG5GXaXhMfGF1qckf5Q8acZKN6ujzNPV5K3EG8t3K7Tg5gAaYi9QaQEGisFHbV7AK7e4WjHJzcLRyoqPG6w",
  "key22": "3yJiRoeztEbu4PRr1KC6bkAzLMjArACQ5tWU5z8vPjTWtqgPwk4V8iF5XVtYPYRTdjW2jfUYWFegjqa9cJk7YsbX",
  "key23": "2SaTWWpqBcWJivjbGDwqhVm3guPmzgEhRsveaY6bWxyzXYAvoHuBmCoE5QebJCnTVPVy7FAG7m6rKvFZDwvZeLX",
  "key24": "51F79yJgTUi7iAv7MYadqUJSjGiKd4EQ4jLrgAQqkGzTTm3F6fug42MfFhwgWqNxyGmuxRQ6G4EQK8Kti8NYFMnW",
  "key25": "2xHFQJtMUoJA6EwxMmuMCWkpzrpVusmHJiCf4ti4Fe9m9bZjrVyFB5Vnh4MukXyHDFGqX1Qv3k9svWu87JWyHBLs",
  "key26": "fJtPGkd45BQ1r6YVDjBwkuFSwwa9dym5MfFCvfQKGoFB6i3Yeaj5YVxxYhzXSUJu3FqzbD7FugxoWsAmkUV1FUu",
  "key27": "5bQ6j5EqF1uZu222mw9D5HFMFXezPhEtfMHaidAv2jjedZwABr9J5pRjEZqRZS9p9hVhiQPmgxpG6qkvXFGh5xbq",
  "key28": "2YqqUayWXv1pBxdG6exabwJ6j2AR8E5mrmLpQNsTgiPUuSJZaZ4buLvWkzkr32RRbUnqgnnUm8dGVGcU9GxyuEsw",
  "key29": "34WyQ2yDc4vdpzjqquU5Hh5sKWiGSTwr8HGZp47Cd87r2m7TTkhhYi5CAKPZZ5PgzyJQuCQA6fXBTemJD2tcm9f7",
  "key30": "5X3ZYWvbV2eANyTWF8BztrNNxiZX85ymg4ZZwvyr5HvfVrMzcjNxAEGCyjHh4EsN5xAYppCguovWZPbm6LsrFpDG",
  "key31": "83Fr9jVSMKs1y4YhxiRpNy8UPo2jWk9gZ9Edze4TXGQqGD4uvqN7X2gYyu1Wm7LZeBAaXHfm812S8gbgkjpdUgn",
  "key32": "2qkbRjPe7HHZFDPmARPJ9wPVyt4LdWRt9HuaEhSHpCfomRMYFaMsYBBN1kR3cupTF4DS8hBaMMA62214CeoVvv9E",
  "key33": "2tHHNhXDvEuLYZQcXzu6Bsr9Q2xsFD5SQ4NvXR2YSk7Vxr1gQ7bBbmTtQ7qpro1cBop8iDe6qegYoMvv5csFvAhD",
  "key34": "23vHvbPHcfATo3Hb3FjZczcTJP5fYaeVHzJAJsq4fGVJRx7A8rYpJtr9KyDcnYDr86AaG4GcTbecA76GDXthV228"
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
