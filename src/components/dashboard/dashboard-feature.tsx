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
    "3xUAcPuVthcmp8GNNziBBFHLJGCUTdXscHMN4MzFMZXDJPf3XFjTPCddTwxYya8eQWmzsTWpUAXRHMmVryJ2aydt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i7VRbrK9KPg3D1rzc6Z65PpuvHuNaoNycFMn3x5izZ8thWJaq2we8KYDHD6gha4qYL5cs5PrrtX9c9DH2UGEgmv",
  "key1": "3WtT5Vd4fT5GUDfJ7qeDMiFuHdzFMhvereVqgfLpLVt8SLRKU3eAZcScfNEasD17xFRAiV3gCSSetVqDFtkeTbPQ",
  "key2": "x54HuqvNfpcBzRqs6efCjxaLLdU7PJTarrXTvyty7kSrCfsfT1YyxvRbtgJeuuVZHYwxCVDCpRMoLiVriJpxP3v",
  "key3": "5LDSzNsBv7Vz52HrDLztA6ns186UHcru7wKJgWP87RcVMRh5mpdsJrmLQnXYwqcywxdhRBoKn8mHyG3yjpPNoZHh",
  "key4": "4wYnMiZQWsgE33Q5atXNCy9drrVQwFah1uDdxiyGHPrPsHMpDoySekfBggTVGcAqZbZb7JhUQzwQZtJmiH1ZfKy2",
  "key5": "3iZG3DKaRiJuCmFN95vDP5FMzuD95xvxo3LhWkCXRXJpdxoy6kPZc4eG5UFfFyjWTaBPUWVVG8AdA4yJpR23gAH3",
  "key6": "2E5Hqm2zdNi4L7N1ARbHdo6Gq4xKV8QosAF8VMsKfRvfMMQQ14dtLGPuw3difWJLwRQUCFxhJaayttczeNSKAhG6",
  "key7": "3M3iNas2P9ePm1QgfrhTgeENiyd8Q825CZDSdZwuL9BgKyFxa3Dq3zEED88jr1Xjr5wbGQXFGDojdPLHy7tq2BrR",
  "key8": "5nk39uQ1tX32usa9GCmPma3pJvR8reVKz6fgZm7cWQxPyybuU67X2RASsAfKwveAEc6DnCkEGu3NwD8V9SnKMsBy",
  "key9": "4iZqkX3KY7aqfYM5nE1tnxVoJTQByPxGdksM5cHudY6DyMZK71HkfYMeddMjtHk2R5EhJbbhJvMoSXwGdMzYVY7",
  "key10": "K7MsbxPmKPxvkpjjZZYQks5R3Sj8fcRk8cJa9WU4g4hZcxvery3wxwiNwKq8Mjsw5RSjZTxpejbM77f5e1cFqAU",
  "key11": "2zbcusWNYNxFa51rfNQ9UnnfxXrRpT8JDLex1ffAg7ZtiRVUstk1GZDss9oEvWC6UKrRvVsEjcVy5yFxxaZ2WfHC",
  "key12": "5nvCotxJjjS3FYCZg4AaTYxjRojGUsDq9ps6qwqNq5D76AW1jz74P4k8xvHLVTdLnuJKWYNhNpn5y4FWtyhpdr6h",
  "key13": "NhvAbfXNmR9mbLbd6EZhsNQAQDEqyQDHbhBzmSwjwWAb6zVYhSnDvawCoYRLifbffn4K6kHQC3DgKrUusvtUTjm",
  "key14": "vS58srKUJXGXCbMHgaiRqveqbWFvrhHsnWagf5qx2AJHGXNaRuCBNJcbpwG89AjrDxQUS2fWBMDumDHBChNLvHi",
  "key15": "2GhadNMgL4dtfSHT7NcUmzQSo7wZV6y6tWqUa2XNeNPRaSgxq3uG4dJAoyxzrQdiPdKthRgMXaT7sTfMk4LaQsSY",
  "key16": "3f73uL9T6nzV6cujLK27yQAMruHcXRDv7xJQWo8RYc8P7gUZaeBhQFEmJsMpMAhFLngWeaHhnBQmKcavJAdNdHH",
  "key17": "2McuVGoVogfPoDwqCzFVDu31EfjjEKBz4EXWtFbtd2Jo6XHbRxWacU4wLm9kyDzxnAEMxspitUgH3A29EN3xEJi3",
  "key18": "3jJ3s6kAZfcPiPJHXgsfvksa2CK6ZwVpDa1TeQAnK4zm9tVpmDePSR41FdjAS5mm3VHA8gRBUN9xadeoxX5cDChK",
  "key19": "5dKPNC3HVdErmfBsgSM8gTuxG8pukrXbyAEMupG9nWJ1KPzxy16kJs3pYxvvB3gR7pVDu2apbboZFzwYf4HZPAhS",
  "key20": "24KhSKtgtU9R5HUyA35PwSdgLpRGB9Bbk9wmEcxCjEDoQtC88MGVntDispzXKXMksL1U7Cnngbi1qd7CtybhUaJG",
  "key21": "eXcGX6zMRwaFYrcbPFHhtEwDbdysN5LVFDFAbfJB1iemkocTRbzuTYVYenCF9huHUCAAunuoD8bzsfFdwgbzfpj",
  "key22": "52G36zPrNZifx66dPDo4LXFqvcZ2Vh4q8ftQgQPeqykyeNBfdVZAhStpZRaGFVhGrG4r9wwuDij1j5Ye9khCiHDF",
  "key23": "5YoLudqSxuLPWaNgBvgivP6nnonEvDVrd5UZKr2yRrqT4z3jejPXGFWxFsANEmXCXzi8jDpp3o945HTCFpQudtHC",
  "key24": "3M73mF5d9RtMDTeEXPSAP1QkNmFGr2yqmXMKCju41jxGHhb7vb6hLns5uHR5YWBrC82TgFJraqJfQEGwUvq66bSQ",
  "key25": "2iHQYsmLA2g92iC2fxHt3skNsHHwdJSjHtD6qzNZMgWLMHzYPvqFjBttn8WCuZdMjqTnVuybN9Tj4h52GMSUSq9P"
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
