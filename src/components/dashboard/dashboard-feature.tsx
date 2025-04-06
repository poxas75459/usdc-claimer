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
    "5MmgLtYJqgmVxA3rSDSXKFNrhcA3ZYyrRaj9LeMX6vwwod1pvkdUyanGGCVGiM8z2AF4fVLjRxkFYjCNb5FB6uFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mq1pVy1hr6aQz4Qjn7buRrSQb8RHtW37QQtwejabvcHBDFETwZcNnTsmpvaU4f6ZnY3DFEJ7WzPLNpj1x4d3wnu",
  "key1": "5XBMnYMNnVeEmUgdh8N7AruHFA3fi442PxgwpCbhz4nV5sguB9HkxJZXTgiYgGMPUusedRRpQHSE6wuwuWLeiCN9",
  "key2": "cHFyGqUuecYnCQPQrQMAqz3Q7v5ESM5fuJ7vN86T5ZtYCmgNRNny9ZXwcgHMZvMdkbHsUsNZZyatQgDeo1L9rah",
  "key3": "4hcujo1txWrtYKUzT4Cvv7nJ4W5GLfq6UA95khXjcihzPg16dfFdtpt7zp6DZTaa2RJEuPB1kwzuNZK4VMLm6v1K",
  "key4": "oKYqxnjEnNDyFnAbjyg4zRHMrcnHZU8Bw2zT5TUzAJCwuUG5GfieRLJWurqThwpthvcG8YDiBtV99xNUUADnmDR",
  "key5": "59mHBqANvnjQ3EPFUV9zZFUw5G5WVU7yQSf2kjyiYVqdYeDKpb8kBcFud3BudM3Fr2r1eBRP5AWzCq9EVoupxSDb",
  "key6": "2wAgRiaHAz9FUvgAfiruVREfDWVrjJkEciZE3dDz7GzsHcjEdtoGiXNR9W6q3zbHRxbcdJ67bgfE2UNswCohyGzv",
  "key7": "2TbQSBcALSPK58ZsPzaENnrT5oUmu35zzAskshzcR3GD4pjccuJ8ZJkYVUVMNc6vTmSjHekVMVesVWNBgRQN484n",
  "key8": "2QbTUVdLvFy2S2YqbgQC92Dg1kN348LFE43xDJqiXXqLRgmfHqRXpJsGCfcX5Z7RcPDrxCuncyFELzBDjGcpa3Nx",
  "key9": "45vLyGH9vWvmEkztSoxRziev8YR8rFgg1HfafUABD2shtuYYRbZBQmSTny5wZ4bfUbDfDZTWRYu38VTowW34f3wK",
  "key10": "4KbQRTuDjLYNGNE4erWvCBx9ceZujJ9LYpnLieHjFcZkgWwQtT3doVikv8sLkXuFyKftGvik9wB1VrD6hkU73bG2",
  "key11": "4nMSLxjXkaXdH94VpokKdjNJ4CM1zCEFkcMhifmd6bQtukSGQWS3bimMwmfPerdHgrmM32pRgh9uBAF7bD4xpgdG",
  "key12": "5DWDsU9jP3t75ofXhjsiGa3zYHgZsePiYfZ7MuvntCHmidC93zU6w882XTfibwwcCBRSgg1cBTuLHfrEsa1TXuR6",
  "key13": "5bnHiadMovCTLgh1vpPWNArthAErfGNA9BqyiyJbpWHozirNAmfgkurJa74ay7WkqnyL5u7yoBDeAcNuLtPGu7LE",
  "key14": "4CYS15UDvjSQ1poKWUg9teGLZ7xPd4jNCksWWKUECFY7HcHMJdA7kPnXqKJmZaYKpxERzaBV2W8WutYqnZtjm7xj",
  "key15": "JRLgqfKAKU8P6eh5z9AcSPMGMqnchFwxDeGpS48WbVbc9x4YEGhd64uJ5BpbmbBvUuG8jpNzALwuZ4MPA1QJ9Uv",
  "key16": "mhpmWbGarA8eSNUzhDuhvHnJSA3H2pfeJAMfLhRYqFtXD48k3V5DKTGZh7RBEzWVTwR92531wkhBkxzXdqE3mv7",
  "key17": "3pDgCJqXnAUUupn18AFi6iURkwKiz1Gw1ive39TCv6wF5B3ULJujUcDXKEJKzSJUzeHye6f9dqmAkMoc499gZRAU",
  "key18": "2VT8ojccKRwrGSUrZET4ZuEsRDczGuwaFgJVV3RwGE9KhgoYAKnFZZBkPQRtB7hUbQ1t4LpvsFjA6qDmkNv3v7Eh",
  "key19": "2PPBTKyoZsf5HnPLVh8SqUBQTLfi7HjEFjwm2Mta4gnETYufWsnqg4tuYgHMfkt7SEAhLL8qkxu98JGbg4SLP1Gk",
  "key20": "5vCWTpkzwN34Cd9pnCyKhfaBXpuwuVjRx4jbF8b5viQBsuVeywvC1uTcW3oWjnTE2rPf67W2noxR23ESduGDbP3N",
  "key21": "5W2ZNuYLMPNCh1rnXL6PKvMAASoYMMNT1YVf7SDrRE6sHMD9K9bzAC4FYaGMZke8sgbnpbZ8US8A8wG9tKMJApMv",
  "key22": "5bTyNT6rqFrjiTZaUEZAzJgtcHsp1SXC4evNnEBLCHGcS7w48HSTvMtSYwRLCTb4Lyb2VYpb9hsA2tryAcY2HEQx",
  "key23": "3RejZqUiW367dWyJhTt9XPDGo3e4yjKQi1e4Le5vuvzEq3x8GyN6EcGrW7p2K4hFJCB6QoCWyv7DUSgRHnK96WzA",
  "key24": "2u5h4wgoyKvEactxqSR74B9BYmZ17cXcmvqGo2AV1L73BofTpFnY61nto9CKWTZJFXXfRCqD9tnjQ5JiyCAFj1cn",
  "key25": "2Tzy41EeZr8ZNUoQZZYMNu9NG1yxADX479c1MtNgqD8C5Hq1Tu7bLdjJX9KxNmTdpeBigngZgBYTKfiFt3wrdmcE",
  "key26": "2J4eqVMiTxULBwgmDY6QHnuFRPZDBnsWtfWe3Bagosj2RHtFmeyAm48uTSK7AzZzzFHfeqksAZBnnB8KMYCndDoH",
  "key27": "qVfnyrPN2SUL664JhrTiZNCqqoqGKrADeLYVy4zWeH9xSMagHL12zyXUFaNedN35S4qE8HX8AiiD2XUf2GFzB1n",
  "key28": "nDRPetpFwXFUueMhxACzqnbkiBZak5ejnEVGjBUDGAXpA4PzuurL8kxv3vRmTXh6bHxaKxp6CFDa3uZRDvhPQhJ",
  "key29": "5rUeX22ragoMk2BAZQuTrL6Nsks2e7HH1rzuwSaed2UCopabyJVT8Tq4hJ4CjaLFUe9b4d9QDXBH7s3rnLxPQ5Pj",
  "key30": "5cjx1wwsSqU2EycSmnsbL5Y7cPBn19JBVoKB3SYDnLkMJ7SmgSDvzjfF97F6MEohhrbKzWet3vJsTWsdWSPEVBzB",
  "key31": "4M8penwVevVjhkQZtABNJCyvFiy4i6rVaRuDEVHSJNVDG6zznjLnwNSfTnpUna3KVuvEhuss5RcFqiGuYsTYaiko",
  "key32": "2tD7vfXGah4zqMpPeNzeUBUzoh1EDVCDue1PvhgUYVHoSLbrLDCkJjnPnvBr3Jm3AF3Gskx26VgNFvRqGAVmPcp4",
  "key33": "4qJWE5zzPJMSYqDhKRd2nnmBx6xYmg3HTYuSvA5cFrZk3m9poPqLrYHSQnKPWppH6gs5dLoEBrYZNTzSsV7xLwZC",
  "key34": "33ZgXhgN2Qxs3x9EuiRKTwu1tdY3QPcKMCzUr6NT6tBqW89Wk6mRAVjR2igscMPVZ9o6GZZ3VPjzTW2msv7HBqh5",
  "key35": "5259yg92yRo63gAswqziT8khtV9xpiaC2CH8cAtE6fetoM2GyVivqwE2tN75PwuhBJpjHPGn2qdf4ArmXiFmvVoo",
  "key36": "5xQgD2UMpNyLnYcRAxuYU9YbaGdS998TqWJ23khe8hFCMzr7JoeRa3BGeg1oZs1n6qfTakAuLVq9JqWL3DS1iLGW",
  "key37": "PhAxmXFYnAzzh6VPNbUvo2Zm13fkwEUeHeBTPAnuc2XqRftAU5LH7R8AjjgLSonWDnbHkjk2TmUywzSTJ7AKrBG",
  "key38": "488Lcpvohh36Fb78VPTXk8ZiqgaYp2zpbQiWBm8fqgDn2qEwEd8C86zsowHmGuP41H5uCrxdyssk9UdgkeVVN8Ra",
  "key39": "3Rtj2CyrZD7FjHK1caepsCUGpabG9e5cy9rXUQfhUWDM7jA7koT83Q2xB4pNgN7FKm4Ly1JkjHySjZxNWqpJF75x",
  "key40": "532fR55JN8VDXJU6gRM2FmQeKm7mLE3uy3BcL1yLvqvk7HeWUS5Xkd2JXHwkhdnduCDg8sz1P5EHWk6xCup3rG5x",
  "key41": "5tGtGtY42bP7HBFkQwmTn7FHNSahGGEUkT4dQtz3uyJtjUeeRFHJiQe1vMpuLcXZNcTbqQAxuGdD26eqjFm6o3X1",
  "key42": "35EWD6nLMAuikU2Nvs6QetFM2qLQczjirjwHMB9sMbqPJ6qBGcbkY2UbAyCDkptTjsj3jJp6vMJy2t4X5ddZjVKW",
  "key43": "3jYkWE39YmFbNJyCnGfZAj7TrXL1pEoWoQArnWKbhNT8fVts4N5L7AzWfi5p3pDXtN8sRHvaveH54s4gB88isgHm"
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
