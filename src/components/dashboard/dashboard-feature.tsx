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
    "3W2ksSCw5iaRKo3xcNZ8R7NXy5Be2CEK25fqyTn44kq1CG2NXtQnNP6k6LvnvndfoAMRVexrBo2iteCYs4o8RuKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EuzNyctvJKwjHjxYtDVWYMLHhynLca49Mnf4fEQ7i3NT9icWdqNmfSSXUJb1XB7kFZDQG7GSeoUjCC818v6SaxL",
  "key1": "2mcK4c8ghWV9X9b94adv4wdpY2iH91B7EF6bhw4brAzYEhMqzaxB33H1Hy1r1WCRMZkBvefJRSwMmGR65SFPn8Hh",
  "key2": "3XwFh8p8KZbMeksJhGc5bvpYL7Q346WrKEgmqvGY3AcqwFJJKnwFEdNBWroYnhCSfZhvQ9rhzX5ojfqbbBnRu8yT",
  "key3": "4WnrviwUjCTifspKpLmDrPTkFCX3u3dEMm8k1AuvarbUg7kMdkDXp9H7iJvmxzM1ujoYopiEaemdFawnnBSFyNw5",
  "key4": "2e59Kv9GWpxmL3fsxw3yUdUwXR9DiYo8TUyewsDfLCUor28Bjxs8pQEWEz9pLMyYHUMXvveRBEuBdFteZsF5EzXE",
  "key5": "3t6wJUGqcvsRed1bCTHUnJxScn3vHYCFKU9CP1BFkT11YPqqTw5iU917jUaC8kxXj5T59m26DogQrrKm3yHMhbsh",
  "key6": "Ku6fV9rbMMo6maD7ZyrZUSh1YGHiY17xc4ifS3FT4KWhfsxVEh9ypXcYUzPBwjU46Xde2oAQ7YmecSs9iTMRjQX",
  "key7": "hRGtMUfsCHbdTndu2DHkaE1XqXNmmwbmAWj9DmK8QQzQNrVaF9sRmHUVegYrBWbiMUeagxKptNoajoQ4q3fKFpz",
  "key8": "3wydCHqqmbWTmzHYGPNzhTEFvMfST6AN9PDyonXxRN5BurJE5j5Lc6DKUqjrpQXyqdZZzuEVLDQQT66kLNqTZoBv",
  "key9": "3eEYYRp3EJ2RgcLXRZfdjFcvZCY9oB9FH51uheZRJc7svXqsnjZixuNkRN7FmER92C94FX33RYNy1HkvVDwkC4eM",
  "key10": "2XzXVaqEKh7qV8fFRJG8ztw2pT3bMj4Bnzk2FzqhZ9T44QAaAoNrfAjw86EZ9btCGBqEyGphsYG1b6n8Fka5E9xc",
  "key11": "4NZY7RrzMUCjJUk7rr2cGLmyNm4zXgZhtfXCaypdb9Rbdb8DvpPhpM3GMLvvvgXaBvgtKQpqZAZMuNSokfKKRUzr",
  "key12": "2c2xkyvDvNBBnb7SLeV7GMpBp4BzoVnyriki5Qywrivym7eSL1bcRHqZPU1aoJXkwUUga9Zwcp49BttCnSFMjQWo",
  "key13": "65HNf3iPs3UkMAyWr2RpqqBLk1bqkMVDUTVUWibg5AeawKbW7o8yE2XaYnM3zRCXCbAzRCiEgpogCFmx32NabVSZ",
  "key14": "2PEHQRDTQPbaxkLjskZ3swrZzxkVKeJNYT2fsFFKVmM6uPJpBx8n6PRB6eHCfCiBdY64Cyv2nspq6UA1tQLv1dfJ",
  "key15": "5XTT99S7fVB8BUb6eXpxUMF8xTSHYiyTNeB9pju2EtTwWkUiCjp1nQsTSK7wfaS7rrnuQbBMEXEpXFpcfGJduAiE",
  "key16": "5yo35XL4fwRVSytDKbsAmSVrxmokiTU6DnXyQqkZt4uuuRKw8KMeYwpkRgGXvqKQLKKMpfdC8JkeyWSBSNbc1uoN",
  "key17": "5Zgv23bzDx7NAhe2J6uA68d3i4Esj84gGLKA6ECEJpxyWDoLM2KXy2s3sfAU5Dk6E5C8nV6T656rckdCydbHhhNq",
  "key18": "4aHi2HKftrKUn9HrSn5pAJeZSciz34QhDWtkLaEDjmL8FhdCbdzV5iywi5hphSf1DXssJapERv9bygpt6Ze1KXS3",
  "key19": "4XkRLVUnwzK7bJbypjg1yTTc3AfrJMcbXHFrADwdqu8mUXDqtmM9kVeRspiTdwJ4e3jm5iaLhqgWDCV54YfsvnqG",
  "key20": "4DPSuAXj6yfoKLrSdbMd8G2zkvvnR5pvsWYUV4Hnv29imQL6qhagosfdgLQ8EoNLtnFyXYoAuwXqKaeaQ5wzvnhA",
  "key21": "2HL4EKmf4USSJWBpEykvfpLp9cAYg4YPW62g1524CoiFN7anaZhzw9dbBGF3NvT4Nhu2avALw7JHDXTPSnD5hRpK",
  "key22": "3SGmUhiZQkMyBWAxh2S1MSsGCEi9qR82g1xy5VQqx8rmXgx1BqEiC61QteRPzHF5WnDLGGQMu7wbeJyF2q5Cfv8x",
  "key23": "E4SZyxRi2x94Aas3BsCBNN4vezFW54TBpEAVPBgf7kJmvhp3LPZXCtLGq2hxkqSBshEKPR8FjFhk4CZTF3me19Z",
  "key24": "5gGtvq96KRWP1adVeTZDW3D2kBWVNGv1dNigD7wzb4oPkCWV2qW5M2XrEb3d7HiTcr2nJknEFSTx1ZUkmUP4dBCw",
  "key25": "4jntX5gyKxVbmVctL7EZBZvGTzX9sXYcv5VUzaSKQm1SkMor8K1cGPewkWNmUF4RfTjTwnQCAR1sC6Wj1kN3mCx3",
  "key26": "5uxDaHrVZgmHudsEm8J5d8RuazQuyfKjLu8KXWwCEypfDho92Rro9fN2RMT1iKd7QEhYWAQp7g2MVkB8oD8LLvQi",
  "key27": "318SyKMzDsrqQgKujS9WGS2Ch3UgQf4MyeFQRCPWjwhJzJooRWLKsbNiMansdGX3dKW1enyuDxLGiktm2xNXweWT",
  "key28": "3PZb8KzdyPD3DKmnsw1m1Nh3719T1tzoPerpWuJrUdsnttXSYfeLMqtTzL3p4WtEYpMxDPZCYjnyaG7Ms3z7NRxW",
  "key29": "3E96UuYKNsLSmXLnaiVJiyPb9vwMS67HFF9as5m7UyKZa5GvAG3uGrhjvEaGQ4a2WDhWVMAmJbaNwSnCKjw1ob5z",
  "key30": "5qPHrRGkS1zb63GwCDQ493F8sq1VvcJBqB99SWPjvSevfjvxSkkxEzPLSAo2sQFYGkjc8hDqRx7T7amRg2tVNiQc",
  "key31": "3st8qJhdkfkv4VtpRApnZa7iKVnwqzkdFhQ7XAVLeA1SMzyBbU7Af7queVRgmDWMHjNyQyZrjY6CPYnkA7JZoVx",
  "key32": "4NaJr1RR9AWLqX9vdmxtVgGMTQJnL3NcFJp3vgDysi15D6oWF11d69m4UBmJZqVeampJ1fF3ghGpWfiuHWU7VVNN",
  "key33": "vtCMxKFpgG2FjAutthF7uBXntLzge4s9c2CSwpDYzcVnHaUz8shGrEzLNAx1M9wUWFDBZe5rbQgEcnfVD3UgABG",
  "key34": "2yCyqCfSXJ54KzaMG2c2H3aFPR8cAhD2vwN3BxqZEKAb1kBxZwvuNbjJ8pyjh5saaZfQy8atqGCF2iXUogYdTvk8"
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
