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
    "3fZLqsSzLdDsCyk8ubjjZGxte9QgW7T9ByipjnRoK4xyBDMkZ5z3U4YwcvMkV1EZ7K4xZ2W5JxmWMsLiwRkhx3bW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BVvwWBYimzt5KpJ6xFsu36ewkqTjYwFdV2H87udESJZUfp6crsPZtPsEEA3jYG64ZKUCQith4LEQ3u4NH7uEgyH",
  "key1": "5WYVD8gGZEjX45EQ5KxwgVdEsVn2z6x1nvvqfPnG4gk5nqbcPuAdUfjQ8sHCumXb1iShwScLV7TzUpyiJRwk1ZEf",
  "key2": "5XzzfErfFzuKPVA9pp7cE2xyCN5uoudQn2TWu9xSTJgKgTQS5hVMqnxDWaCVwhvWTCz4HFGdwizij8kEkNN1PUQ8",
  "key3": "46117mZvmmnhjVtNNoqUeGbgdapqDKEkm8A4ypbAs8ZvrvzRgku6NfypvSEUDTRoiAqjtvsiyxYxkLCF8iW8dszz",
  "key4": "35U4Wm4A821nXdPXaZbRt5QqpDb6K1WmeMvuu5TVgMxh54mvXRLU1b6GDuQKD1xL2VQQZcXdZ767NW2kUuvhxm21",
  "key5": "3xK1cWC3VFLjTnqzrVqepvuihbSysnjwKfDCy6c4KKXNs5BA2nNiTGGjVxrW8RLZLPP2HN2RV15sXw6MazdmPYLJ",
  "key6": "2n64BEexMq3R9ZKurev24ox5Y8yTU68FCi9tgtg86vrByvH1PqiaiMoPjVvFUqXX3XbzWZe2x8UyxT83tXt4SM4g",
  "key7": "3Aoutxu16trqJMsjj9hNc7avsVX2iiVKkg4fzuhFYTaBZVUYiTN96jihH2y6gwBomx1ygeGWx6zJTTeyqEwd7e7L",
  "key8": "667EfkgBqi2T9BEesGqYjJjJapAzUhZLW5NSdaxDPRt1dCx5yDD6B9Qzd1uXjnb4PMpt32esXbz2BqtMDwYiVBJQ",
  "key9": "4K6j4v2ktLkEKWkYHvQsoRumHiAPhXA8qBBQ1bJFzJxUe7p2GPPDewuhHPRp2MCqjK8jEKzDgm2eZAGeip2xJuR7",
  "key10": "eM13Tr9MoMnpUc1dgocrgeW4QFbZj4p8xFyiRptTK6F217u8M6qsZozbk6hgE2QMPrGmfmgi3J4cCr5UdbGX4Xv",
  "key11": "4rR9vh9J93Hjk1bvKf8yd7uVKMyN3omG2bTVVkUzoKcq6CAu8VyDyn1SVdyKCTGzRJJYLfsx7kvbygW2AF9aCQH2",
  "key12": "2gcqsygqWXeZneBhoGafAhhaY8Py7wMqmjBdzdo6WNF1pPJG2pFPiLpJfUrUVxYmrGZcmdtyfgcgMaaNsq7KSxHB",
  "key13": "5oKypf17CTFYF2iJnGJGYpa6mu5P7DBiaMq14mabUhxAWdo3hvsrC4Gt6hsKF11P5fZyAr11d3pKqfoC1PT22m8J",
  "key14": "29iNUKB9y116FuVgGy4yVXDS3uENGMWafqNkT9ERwK3wcU4RpEzbm6KYDAMkcKXkvHeqH33meneZJ29htFZ7oK1B",
  "key15": "5YLGxcRyQbyQoAP1x3AfbqCzvnF4Y6DyW9X6xVqgWNRV7fmFKmSQ6TUdub6ymkspZnT5f8QXcTSkBdrQYwp8dG15",
  "key16": "2yw7RQbkq1iAz57Hu3YiSiUAMAdrEKSiaMwDR93wD47LUtBgf461CjpVoW2wxDUUcDNCYRwUV2jznobkb2Ro37zS",
  "key17": "3DMVN4vWfBzsmh4AHTu2Bw21Bi22MTscAxhiookv4QQdRE4whiSLTg8ebJUH96aAfvK4AnEap3avhrc5rsYWPKrW",
  "key18": "33bju3q5bm6JgHa4UKioMe7yQwRYtRLVahm2aBfRq31eWyW2iTUJC3GpPnKmUYh5EBdf5qLBCzHzVt1vVZ6E1PVY",
  "key19": "5Q67fSuEaKmEYy1Y8w96zioqg5BY1VnZiR6fvsJrnVjRw2nEi82B1WpKJQYfeNPhLXmtTPEAtG54ma77qiVXwSBr",
  "key20": "4MGMxzC795CGpLgrnnL5iN6dbhpR28VkPvjFvMkQHfieDAP2pCV9yS4EhCv7QUnGrwN7mneMYGHrXGuVUb73f4EA",
  "key21": "2KYNQepjxBv4U73mnba9f23NMSp8B7daCJVcCCNrCSJfHQ2RHjYjgZGaY2aiWY6RH3MuDVg4bS3rRiQXhSQghKhn",
  "key22": "GJWSVNfXjVfpUFq7b4qR8vJTmc3kZzdgyZGx6pGHjjH4HexUrMHzrn1EQp6YBtMNJWQaVCBGPvhvnAyWtYDAU8t",
  "key23": "5ULMYAdX4sZBiePTPh5MepMuuDWSvDQzBJPYwHZ2GWkTDUc8sbpJdnMiTtcbFTScVBcG3oecpHb2dCWUNoK81UHc",
  "key24": "5NFePPstDMjhz4RmJC3jVPNapbrcL2Q6StCjS7uja42Sux7YcB3gqpFhU3eZzWvMauawDZoJRbdAnHCn6wBmofAQ",
  "key25": "5d9ZoPdd8A3rHnfGh7cdhV26pHyZ6ERFBSdNUMEQXJYoi3yUN5uE3Ms9i92EfRb6xd4aQ9SNd83jgavaXj45Fugt",
  "key26": "qLY284UE1hTyKGphhfiRoUHmd3zisJ4Zg17wHazj5FPjpvhPgGXS6t2PcHksjyUsnoxJ9gSAu792moCMyvXFSmu",
  "key27": "4dZP47npPhFTS3Fxg7hQdEQy3gTR8RRwTAWc7fiwADJuF7okSfAALLAkN7QUPwCjjbud1C6zDq8fZP4cT9MwyCrv",
  "key28": "4VqBXHNzV8GrtJJv4N1W5wUyA4HUQ8zG7WsGWZWNq1G8GZPf6e8wwNvcWiC9HTE13aEYLCwqEosrEZy1eEjrgb7Y",
  "key29": "4PoXBCosoA1ZhUZQqWcMDSKgHv5eizAzSyHi8BhiZqCRvgtvoUmqNGGJknLT4aupfhVWNwfcXGhEHjGhfQ7FMBG1",
  "key30": "4SYyLHGuCKT91vnTmoeCCMXkT46nGpjgV12UbTL3tkZQ3e6xr9ncDuDpuTPe7eqiSDixftCTvLyEXeuWKQ1qTMdm",
  "key31": "4Swaa6zKtcJhYs2ewVRwJbG8osBjzPnhQxoFhMS7ZGEyhAPBfEpv9xkHXMckbFtnsPhxZgJDQGeQ7QrT8aNkhD7o",
  "key32": "3SLNfw2F7p4S2f4yhSR493UHPRsdieLEoKbsLghB3Ujj97sopuLf966crXRMJwNY12Wk74VmPiyhs5QrSN92NSM5",
  "key33": "a46xHBKngCoKF3zmtTc81zkns9wNqxvw4hBWeWk18XwzQKqvUxFupP5Ab6mWc6Co5qn8T4RsCfDC79DC7kdyEFN",
  "key34": "4Yebg4YABzTSrJLQx4WzK1zAnBvzYQbgLMHSJguTMA2mTD91hWyz23uokabBXADeMHqumxGYsrRMZGCN994SU1M6",
  "key35": "3fp1ZYhSwZ5d7A3oGx7KWFUnXHhyHf179vBvvdYobxvZvAQfWZSqskitgZ7qSPxAB5WzSZwV2tbAbwEgfDwduRgg",
  "key36": "39RNrByGyemswbV93WLZaCejLQvYq4qCC6nQ7o2VNWSCdbRxXBjxX4xmGKqhK16hfy2xsP2KDeixSEt3KSA5tiCJ",
  "key37": "2ZvHwQFzd25SfNSyppCwMZoaHJnU9QyxvPDJgfDD8vdPFXx8qDN6C91QcHzjVPCA1EF5enLsct1E2xFPrx3gF67t"
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
