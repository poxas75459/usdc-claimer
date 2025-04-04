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
    "5ExZ6e32CdXei2mKPxRGSagU7pTPv7hV4yd6Aw2z9KUPeMXEgxhyt66QXeFGK6rRLdk3TGVsjJ4pfdE2vM6ZnjuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hdNaPTAu5QGnG8asDWijvQ3vQRAPMDbKW628f2D7xDqk9aHCHT15kL5QcFnGptU1bPERLMEjYWWPLKBaxJc9maw",
  "key1": "4ejdM5rJuXNodeW1e5aA2G5UMgH8GqqYpb3UUjhvdqpqXU4S7gZ6totfbeThF3EGVeFVir4w2yanTs5vZbQctyAJ",
  "key2": "2uaAu4S9wCJcRt9mXhmXHn5jCwoFkm6eECT5QncWkbB45W8GCNLfXFnuTAo9696EEwbsLenu3KkxNQ5CS6wnB5jj",
  "key3": "p6gPQrNufjXAajBYShckrM58PNwd6EjSXGd9g8KsfPHw8a4VPSkwo4xRQgf4QRkNyBGPz5GwVRpRizbWHfP29mz",
  "key4": "5D6VFtaB9YrPDWxNUvLF6AwqzjEunU9eUhXKnyxrpZ48M7rKRp231PRgvGWN2jSXS2SxKM3fVJt8iPwSjqnC1wmL",
  "key5": "5fdSAkrW9FvoRXTyvaDcekZPwJ2yM47Qsirqws5KPw8wswLmRZ34CYr3wf9QfgMt8bqkTC3MuNdGkyTMTcDzK8g7",
  "key6": "99CpmV7uD8SfWbYYaSEZoRWZ6CuJgq8jDpzWKeoMS5oXJxSe1QZZuCHnUVM3ZoVh6EPNJyA5e8iZs3tZGY9wHNe",
  "key7": "4gfGUsCeqow1X4UjHUMmyuzxuoBjiAQxRcBTgVHBA4BhJQZnhQNFKCKm5V8apk2ieUS2zUK1YZez57sxtBQRcBDA",
  "key8": "n9kYCoroXi9mjRXa3R8HRLi86pmD6zV289oMSszHTKqcEX3YoFYGzivdahjJEBN8sY45MSF2z7jnrfZDAJ1i9SB",
  "key9": "5W7SD3npUvuWVCAyF3Usbvf2pRLzMHGLakvA9uJJabNuAatLoqw55ndXUbW6d49Z3WuLGf5sjhefu58KkVD6dHN8",
  "key10": "61hbfMKePmhuvjVfELKY86JURpjDBBzTWKubT3FYoc6Cdedsu71nQnLcoY323KsPjF4SnUT6q4AQUYRvcys78NbX",
  "key11": "4SVRHGciHr21oYs3ZqeYjjFEPVXbGTXJ3VMbnNCydAhx7w7gqv2yAUTXJXqKgjhNyk5jsnFvwgU8tso8vNGtAB53",
  "key12": "SsgndjAoGy7FpogvAQ74P3ABSUK7wVjZSYp5NJ3myoWnyYAY5WUoywXrYRBtGptvjjxEWJoaJunQK6U7gcf6Fax",
  "key13": "4cVjm9WRYv7MfynQu6EZf1jwN7o4ekuh3QxiTu3fqFc9y7sJgSFUfHQTaS3ckwq9Q29JC75dYmZAPriuUAStHVGd",
  "key14": "2vEe8tjZDzCdZe6q98wYhYzAX2xC6GLyUNe3h45QL99Bw2AzZpRYb1dcSzYYC7LLdoAgUrGh2sHuqQcUBEBokKZx",
  "key15": "5QoDxsz4ZeGFCQCYMmtqLgmV7uoN2VWKx5eZvRHv2yexQ1Ajn3AzKoTEFvY7e9bpqrJixGupKyc9CDoXkVnkuGB6",
  "key16": "39ZSaji3S7YpF8NW7PCymAwuCiBGGPSjZtnod3dW7zvjYJJ4SFFyLH8HnyTRzwK66rJwGSW6VvmHStDuuTsypeTh",
  "key17": "4SrHhexYit5vFgJadDZUxvi7RZCdy8AxiwVHcm5GV2Yv6vvgKaJrioFLAQRz8VqtzwLejBwFByuvP4NVrHh2SobJ",
  "key18": "3SfHAs9fasPPT1PhPr9wYyuS5FK8SCaUZH2bgvmHmpRFwek7B5F5GGS8xvDhDF2AFBb4Jkem581TYcyyWtbw6ZwN",
  "key19": "62pR2jMWGNC4wuC2hThDkier3Un8538GLgoTUTbdshFy8CoLb9AHsySNeBa5hV2kafR2UA1vu72SrkjvbXv56Pgs",
  "key20": "kANTExXzq23z2fnAieNQAAV7adAXbaennpvPfbNoQxb2CLEN8LTXvHoGbTLwXQYWpo5uCNKc1AYo1BwLGW2pSMk",
  "key21": "3VhawBw4LBAhSeeH9hLQNk9ia9hNJqU5qspL94BmWdkyQiVPWT5oWmfr9vWj2HmkuS6eLjiDTvUQvUaJQxuyLUZj",
  "key22": "53VC5pDL6v3TChbvJyhgtfMPQPx7knfCE4RbMUdMuLLFYQNZGXqAmrkdxfFLxEeeKYpR9nXqZoqw6rcFVce7fXJY",
  "key23": "5kMt9qWp1RiBtxFmwcQJ5vXdcnyKuBXkjqnyjUfdoFXfKdsSFE62EFvyEbW5JitFfH4m558g1SEjLAUyMN2thHD8",
  "key24": "4BpXE12oXFbuE5hPu7YXsJ9rwmN9fpYDJaVmbfUn9DpFhDh4C6aB8aC9XmbH6uPiC84jkskK4QnFCMartc4nsJUx",
  "key25": "3fxPPombkME3gPhKmLTLWtTfxMQthytjXV7oqySN2hMf6dzdoK72vN91YPLJysk5QJ7apjSxNP9dHXsNNZjdLj2C",
  "key26": "4VBH3AYMrHDetSLajFjgXmWG5aEmcm6oGe2xqFM2YM6Wjx41EmrScwHzcBfnULzPK7CQCB9wUTtMnvzjJEJiYjjN",
  "key27": "s9b6HCAj2yYfzXQzBZ6qBX2wUTM4wgtBWTu4RmDMuBiKNdqhEvMu9XY2CmawmzHgKtP3fu75a8NKde5J9CVvhnk",
  "key28": "qEbPhasHJEVqqKJ35vxdyHHEZdikPU92YnTz65ZJjcRsFLYe2DrRrqQT5vwnk2TjtosYf7wjQbDAuuxWrq5x1Xn",
  "key29": "3QU3EH5a3Wr3VoP3oKzpgxFLeNnKmP6JxsHXTXDU84hGZSAYAKAJetv5FBSmDTyuBxh5s3Y7YKcaqtd2S1TkyG9e",
  "key30": "s9mFd9w5QFJy7HZ6Yx99N9LKEiBnDXwUTLHJtPDaFjx3mUACJWj45PDfJ6UR5wc5k3YRw6jKeDJB6wZd2Rn8kx5",
  "key31": "29RY6MbtB9MWRQBpEkbNd2sQqbpLLjuFSonaYZHHRZxo1Hyfx5SjZTNKyRhPaRTfDmmkGxcc2ZGtp1ej9tR6n7fA"
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
