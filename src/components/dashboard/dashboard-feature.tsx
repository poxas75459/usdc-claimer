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
    "5A8vvKxaigfuMUmMwEs3phGFNBCKVTX4GGbH3ucHzBkxiFWdgVGXjecbTw8mj3kc9K6P3Ts85nVmHs1QFiwSzxTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vt988RPf31ybjf4avaxsK7jNnJRV9dRV3RVHM5kasfDTeXfz5QCK57JFgoMuAhrokw5xFpZmfL6oyNdgGusY5Dn",
  "key1": "2EmmcPsna8UVgtp4WMMzrXrvdVjX4sTJy9dEByUm43LgSe1sxp55YiFidvK6ZVaFXAE1PsZGvrCFGqeGpQESUbV1",
  "key2": "5FQxn1vzbT1JdcYT6nRxZtx5Hhoh6tKNBb9b4rpa9MDer852agYhmnsQHAzb5g3dHg742mJXG3jtrefwDnF9Ccxb",
  "key3": "51akPKkScGwYRqK6QkiHTdEed2oQM9PfKs71VjrKurrQs5W2qwjySuMAVRENqMGWo2nScB6CzGPpv6v62dDUMq4U",
  "key4": "4w8ZnvoutWUZu9AuF1A3Ybbq7vqbj4tU2cY5QeiatgWVtZqedjh4YU5rPEH2cHvtz6dc9fW5PDfbkDBgKwNrMbRQ",
  "key5": "8T5tqGg1gvc2dHBoTgMsanrAWVcctHbbhkfrFAsGMqMHkTJtjZDJ3CgEqGvp7WnocYPvQkZzYBTWJPe92D4xVNb",
  "key6": "3516bQmCRnnZpUr69Dpq6zQW3oT7Db8TW3TrfHCfLdxQ7YDWM4JALWUPHoVdZfU5RGHyPzcXKPRTZvhxJSwdyVjv",
  "key7": "2Gm7mZjfFQ1SboempUdyqPmNiHnXVrWkNgEqPQAocC5Ui3esmi5m2LXmECNHCf2M4HD4UR683cPidtW9JA6mVc1E",
  "key8": "4MnvDTBF5kAxBhfhtsTFeZfnsmmCRHo1zB2Kz27mpppnNRN3BVNuzZN5LoXbFKB5TBPkrGDdjRbCopLXE7FSWFzr",
  "key9": "4N1Ua5XPRQaDoH4cqguAbYdx5q8Rra5PTza75NH8MTsuvwYsZBYGHgguLXdcTRdSPqPNzuW1fy1bBkd29VbHzYya",
  "key10": "3No4BJ76zeSPAC4oBkvANLfQAPBX9PbSVwbQdNmTJoijhpNLwY58TJujxm9epGzQDMLVxBQWoqdh44CEwM42F4Gs",
  "key11": "2KHyUbLXu7PtmG21daAjHJ4rGpMm4C1BYHYBNJzeXkXRg4w1kYTDWCGfJnysKbpyEUjrkhjUEX53oxY5knDrYZ9m",
  "key12": "3a8nP3MFEpA7EZ7XaRT4yjrbEvroPxeJ4PQNjMjCcYtJnWmByK2DdtPjMGG7JWMrL3JpskegcQpVEqooHYqCAKZ8",
  "key13": "2X2w56ut6dBrw9WNzmAzmgMB9cskHm4mDJPe5grn1VhWDqeyDX84axq3HSwm2wiNLTbaAZKrGqKYUJPfaCYvyJc4",
  "key14": "2XYcdnN3RSGfMBLZ4eAM61Zdz5pZyzgLhc7R1p8LjYxikNhXXXQUvSBeAaQJhvW95T3ocdUa8r4qmUE1qGcjrqB3",
  "key15": "G1hXfst6qMEqekcWi5uaFGRrdJDZCQSeeY3Z14BQ1wATDUiBKcfw3sfT82o2Yur99dGY9HQjRVuStDB99xjr9Fy",
  "key16": "3GDiGncNVKFv6Ttp6xzdFmKGqQePXWnYSw9cJ5NiUqYvWyivxaTCuH9hjGLLWCRgGo7aMtEAGibFqYbdy3fJRES7",
  "key17": "5gnWRHQTf2CnuAjuvGYuRBA2ziXb4CzcaA1K1Qj6JV9y5XtvrjnioaffcqUQEMUEVn69eKguPugpK7xmuRd1K4GY",
  "key18": "5AyHJLTb24neXfECFt3AQ9aL3MZAad61v67qsorkXukMCqDpTnJSL4idYWUpanHpFU3DsSDnShbGPuJ7xR9zYFaf",
  "key19": "5x4dXdaqupuzV1mqjUUpU5SMdGtATGT5PDENLyrTEdAz89t2bM74ZiMrkQrRwPU2MuAu2CpBAUh43w3UcpD7uynE",
  "key20": "x3CNFnEtFRiY4ErhNuWy4kqsvHqJky9RFmA112cgXva34BDGCka7PW6nARS6Wifjat8MLpgc9qDPjdBy4K6cCn3",
  "key21": "4WA3HXM2xd4H3Q2HM9gZPLsSBVP4fgSWwFwQLfco4pACJmfp3meD2LLU2BiXBf8J9cs2jMwwcfYUbDJnUPJBERio",
  "key22": "4FYKf5Rx5L6gn5T8KVeiwhQYX334oK2QmKiwMefV11r4BcYYD3MZ88MZopQaH8wYCPtkUYbuvSRMbdjZafKQjX5s",
  "key23": "4T4DiKmKqFkpYH81hGbsAEAQSHenShrTb4FCDkSEhLNt5PRfqqszeCzV5wqgPi3WYoLiAyjimvehUdWKPu7nUp5A",
  "key24": "2XAobpLrMruyEHQ6WWZjemcPPgKAPgJdWG16wPXC6tyBdBXgKMtfKQPokSQgAayePm4EfXj68vYySWtmLDB9wWcc",
  "key25": "51cQcbeKqEhkivD54ZbQP2pc4d4q2FGuhET3XAHWy8kq9QAYeXkoBjZDrwnYDM3j34Nmc6ou4ciAEDbJCkLkjHoV",
  "key26": "xkmUJynFFBYZZRMux595JCvfcwEDkMN3tRGC11P8BV6LYgoCqZ487qR24BFa5iVUyUrYJh7LmKdDrWKM7B5PHcu",
  "key27": "35seSRjQFYVErGLjgrEfL2xPuc6SY7pi8mVjXGvnVc6AUJBjvNDwrAnaURvLdrNovx8dPHkuRVyjyT37xPhzbChZ"
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
