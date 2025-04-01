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
    "23w2tcP91TyASCuGSDPiipaBVfcA7DaYjxrxCJ26DGo1MW6ZCwXNyARRVQVhXz4vuA7SAG3HohuXwhZcfUhY7ziV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKGms8mXuYicZrDT1sXZLvQi9zNkckjw7CqM8xpDwvkjRTsU2cdKbRs2DWtvGiDCVMEewRRYg8ef8PDVFaH1w6T",
  "key1": "dPBRbiKZcJfQcRyEURvF3p6VbjhvdM5TsVb9eNzjqmzUvr4dbxqi4aTHvhdwPdXtgJLvY8rYtRWNqQHQ7VVFQCd",
  "key2": "3C3HktAa4fTnnsATKYM6dRVESAiQqRmX1w523kKqbCmvE32qF4uWU38NCwZm6ZUNS1t9j4SeUVS87ftVd7n5gZqG",
  "key3": "2kxq46756UPCN4tUwMAqsAmds7xRRZrExaz7o1V2noV6y3Bspn1DoP7Ywtpya9ASdkGSczLkKkDMe4s6Snb37iBH",
  "key4": "5GzXjY4k9CZFQxpKzujVjz9vkYeMqjsdWmNnP7FhvyGPCTPMxm4EywPJMWwQkicejWk6Ny6bMGH7xVU2UJiREMtj",
  "key5": "4GpPRgN6zyr4B5KBkJ8wnQnYtjePLWuux3cSZiVQy7znQzqDCT6QaMX4DddXAdkhakcTMmbaXd6p1BJAajQRiEdz",
  "key6": "63KrhvMv7n2yKvdZwBqvp3DCLMD7282f5yr91GfvwgZvsesAFZi2B6qWJ5yrMMaDGZyP7tvJRaL1ASB6nqTdknAM",
  "key7": "5yvbLzZZcr6giCF5ryJctN7XNaEmRFSdaqUUrAgQbLeU22Q7RyEqStMXC9dPgCu1XHqu5NGTPyZ9hALy4jTZdHru",
  "key8": "3yc2eNBrugqb6R4AqrcTbfK8FnYeKBmX3jK6niJmoCMNkiYRCMPdyUKnkZNRqrZyGcgwSPUaJtRrjTomDDrwPreX",
  "key9": "2uLbexeD85ZH8vozx75vnbwdsjrmKy5MdNycbZjY6Y2KQrVEg56AM3H8DiHvi2ZRahADFKMEnpv82rqnRo5yPiaD",
  "key10": "9gJ3LnmRjXSmdmxkzoPfJ1z4QxiYcrdSFPAy3d8yvaC3W6tG6gvMpoc7hLQUcHT7dC4yTzqNCQsmAm6sikEHTaH",
  "key11": "BrxgVw2ig7CufC4T8X1vDZ99Wy1kfdZbGAcok7BRPwBUbQbVHFo7xQ2USVtyyVXKvHXxPQKivcbKUrzRGPozQJx",
  "key12": "HUGkZBgaj9s7MSJaZ1QY456hBuwAVvP2hs93cLsEmSUJBhrxzCqRrT4tFu9cmnnKZq42m9YoboWXBFBDjeyrarp",
  "key13": "5g6ecUaXbKXu13Emd66gce9drG8NYnFZkNfjZiACweeBnWPQt7SRgqgiuTVyMfbi9XhyejuKDjiVFEhUjMkpW8Qx",
  "key14": "xMgvB6QLTzodPKmMFeTDqSuDCDaSiS3hoC2ReePjA1NJCyardn5XcQea4NLDWyEZHCZhfbc3XeRWhpsKwPCjAxt",
  "key15": "U2o1UrS8z4Kqe4Eft6B86bgb8QmLFP1v4jC5uSUP53bMGmGjZ77bPgtfyZpFdJxHwWUoFt6cBGnVZVx3fAr97n4",
  "key16": "5qe7qL3DerqZfogiJ5LVEtDztDmKQN1Q11CUudbedif1pp3HwVwHtG61KUjPs3W7K8GXa92j6BhtwjpY6ifrhgJm",
  "key17": "5YCcib34YN4gZr6LDbqeUtW7VEVFnHdftzxYrtJSFKGwzqqEq2d6c58SrHthayDUAznR887bShc3bHJAWxdsnkBU",
  "key18": "5zKyiNyzgYZESb61BZU1xjbJZKYvkZ2k3RRAxTNZ9YLBwKkrAbmrRfpspeopCxyAZF1L2bq6e98Np86kKtMjEGbU",
  "key19": "4CmmhjVk65VfJQfMS3YdH9DV7KTnqWfGKtLnTbD6hiEVwdrRGsjqE3r2irp8eBGiAhR4YVZqa4QsLvXRhEgS2HjL",
  "key20": "5QXh6ndGX6YEBvFP2m6UyUmXpbU5CaBxRZZFxcUTqrjcELbRoX88TWdW413a94oLun39UPByuNLodBCPdSnvgVnf",
  "key21": "4fu4qBpAugLranKkeUKk2YoZGoNGJMaLkLkgE1GwjhiTb9fEWPYzp8YwPBdkXk5SDj9MVGmUq9pBUv7vWm98THVs",
  "key22": "5jXK5jE9ajzvWSjqdn188k8GcDwiDh3quuBKJCG5s5rTVFzwGYUfWhRCxyyvZMEkqSFC9fDa89t598S1veWwWQbA",
  "key23": "4VCaRM4Uguz8JUXq7jhW7uS7STv1RrZF7ifqYLbdm9SpXKMh3f5Qe414WLDH2aoEn1F7JAkqoiCzktDgir3GT91G",
  "key24": "4ejidKKEoahddXrv5zLnhXixeoHywG8NuauBSKzJX7uwuh36ZpmPRmSgLiPxjh7hM8Cdnx953STSQd2xeM4tt8Ja",
  "key25": "51KQGRD4Hpaq74Nm78GRBfRVPAGfWuVcZJ8TT4fxZjT2R6rC5AeadaSo2LcnpbTesQDPaLH29vJgEZ7ZEJJ9r8Kv",
  "key26": "6tAWi17pzDJoqND9HW1dBZSn98dhGbUXFGrt6Zfh9jZprfhv43DyFEnc4djpqJpb4AMCdXCzADv9GU4P5dNTQon",
  "key27": "5CzKG3WW89kmirV9pYJm752Zgbb4NGjvzyonyuGxQn9LxA1A2nXQXrh2tGitNxPCJ82NUB1ifyptQs754sQRnDpZ",
  "key28": "3yKDwmopx76Fkyd2obQ9rLdSZGPiZyqqoTG8ApPe8mNzc8FNAiPVV3psF6nkssaoJJCuVrYUiHCAzG5acfdsfS1X",
  "key29": "2hArfHZf9ppYwzZ3yudFeG4T126uXzZFAU4niYmw9k1vPG4f95w76P77DNNEVFumWYdoUhPbvRcmBQysFZizegmr"
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
