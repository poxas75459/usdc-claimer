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
    "KWZwJpt2dS11AqwrCmaQB8jQCWSzqARFRwWwBkd9tGV1dimbDr4KbDHka2PEjfgRgxvyVDbvT9uLzkvX4t7RA4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25PXTFyfy1vuHqPDRNMoWD4tGoHZFdjxJPMBdUJUuGFuHVdkJ6P9cW3Fv93tN8QZi5hzkzzhnpUyKNgUipe2iz2M",
  "key1": "2fhiW6XPRzmpwUNxuyfd7NyKyeAkXoSaSBUq5UUyxDDonJrJRer2RjZFBJUyGJJyVoPKTZ1EnYQV4GHSbX2xBhm4",
  "key2": "L9jb5gEopoAQERX9MgkHugE7c49Ttd85z8QySGv9CkN2v4Nup7yWRGZcL58Q9Hqcfgshv1j3PoCXajHn1SzoLqg",
  "key3": "2JyzJ5JUuPnRpcWZUfKfL7qU6nJgzVJr5tUGTFsKoesqXRjXgzxNTfsGmQywL4hRCuKurC8gVKzmDgtaAy8KSiqy",
  "key4": "5tGUbU1JT5x9JomBw6aebcCBSYfyRDX1UH8giZbqTjNGauMVzjBTDEQsYy6RC4ZaNionUkcyvYFdgH2XjBZLtunu",
  "key5": "5T367Fg81ZbmZJP3nxMXYWAdBCwfMU2MNUiwS3p45SHzy6gAB2GgDEQUJFvrfnfd5ZMMAT7QYLdtfSYTMqxPcScE",
  "key6": "4y6gymBJKTRxaNcRbgci3bvPkTmAURDq8dWqG9WtVzipSmze56V8q3voFRmMRitv5ixkawGmJgk7uNhaxGQDM75w",
  "key7": "uaWHmHKahUCbM59NRvyVbFHB8Gthpa1v5Gdh2VmocoKZP9RBCqfAvpM324oTBZ5zqSsR1pQUohhbVrsZTfCw6Fo",
  "key8": "5ZGCBrZFZqagTVmqVAkXSoVcJu3SZ1YGxbE3TD8fPHsLaHeqSvqR4wPKPBKykLf1u3pV6sC9ErQY2bs7Aqz1Edbb",
  "key9": "5MTXsvbGrBke21Ghde2UWdo6YjiaRi2eppaMuK9VgxkfQ4ENakpF8X5EanLUDo1RimzYQk666AS3AgYHZnaHe9bN",
  "key10": "3MNkapHtNLkbRgwzK1CBWnp5yqWk8ocHCnyx2fGFL3WzTt3iJGx9AGmtXqqR1fHn1fniugrRdzpq8iKheH7ggcJv",
  "key11": "5yWC9vvDTsc24zzajkPYoB6YcEuFQ9fkb1Pmf1Eqmo6CiwrNT81hZKxN6qZ1ahvmW2USPpnpfr3a7fRpYy5x8U3x",
  "key12": "4sBpAAjMgqtx1PVobtvzouHtRwG1NYHR5eRdU3u2ZKK4X6gjgf2zctijYinrD385jSoKwWyVjjMK2tRsVBvWWEjB",
  "key13": "2qey3Tz3Vy8gxi1yFZzatEdiQWNvLMj1CZ48MdgyQX1RcM8JDB8RfiPVVreyHHD3txwy7mbQSYsP734cMg6ufmCb",
  "key14": "27iLRSjjHvsxQUCVaWyc2AS2gozNC3XmQRnUZCTAaUv1A3Ue9oVvn66Bk99ZynC2nxTUXndkpiVb7gD8rAaDx1og",
  "key15": "2raUcoMLxkNiSqHMjAozR3AEk7CRkCXjdEktERnBMwge8zCjw7Lb45viKWW9KxZEHr3km4zjPgvxrbS9oczTDHf7",
  "key16": "5tbYG9LSFdgUCCjC6idQYBEi2aifEUUQTg54aycJN7bree6CUkMRy536qanyufGNF6fV3qerUqYH8juY7rmfUMAX",
  "key17": "4mzDAnp4diuhcQjaPcmb8iygeat9VqngDuVPJASnGskm9oaVHotb8ZxH3UMb3XQ1pSJto8ZinPTVFsc2347QnxQv",
  "key18": "45engU9ev8aR5mHzL615S7EQv1xtxiUXdjFAhUgPvdHPinnxYm5Dv1yx5LCiGo8c5EKR5ahCmNHto54bej6V5H8n",
  "key19": "4fuQ8A5H778Uy44EbZiK5xXxvhg4zwt4PSa71VnoC3kupJBiStrzhi4MnQZkvRPUq4PmBzV1Gvs4ywrkGyK71QWZ",
  "key20": "39gMs9ddZ8rxKc2xKjwxSXXn5eSCruonvqCAeh1aosP8qgDSw61yvxLfxKQ627aPck2kw8AC1XeeVzJso6i3tbjj",
  "key21": "3Hs6PMeyRQt3aGmrzRCQRSX6tcFterBzsY9QWGDat7e4iTbeDNBfK6DuR9XLmCK9cQfBxW6WHe9vVNeUQLbVmWfE",
  "key22": "2rVQpbDGdp8N6XArmefew9ZUfCdT51ipjGP7TqnshfRZSQPJdNccjgUrUsjenJ588RnSkZQdHUcHJ1MVJN61Rh8H",
  "key23": "JmZDknJ6o6D5tqFWy9KscXVur28wQoZyxMAnzoEhhFtwRYRTbjH26WA9wZ8x4f6sLuY4724ozaP7UeDSyrrjJtD",
  "key24": "4tvfgmgpRnoxnKBoTnxrGEvbgdFCP2nwbmF3V2huYXQ3he6zAp9Wj9waqnPd9NgLDcU6fzNiTCekeKdJmSZJoTnN",
  "key25": "2w34bFgR9R5cXmfbKuKLqSdbVjJ7rDBtjrYCCqBVfJLa4SBYro6RKMm7LYQaZyuSBD4PKREi8VA23xTVrArUqjL",
  "key26": "5ynBvkkyPtnNmQ1waj7GAf764HwpXD9jtWyUMw2xw7ugBfucv4VT4yk9R9bkkQ9Hb1M1jfvUQiHZSGMJ6Dgk7QfK",
  "key27": "cdBPPuFeCYSkKysAmhNorXsbjuVxp9HXpUi1qVyJQzCDH52zZDZn6rV3ssLcq1XggUddeQ5RtvgbgHW3wAwVrHT",
  "key28": "2N7rKDNnKAiTwSF61C8NGLYDW1Q9QnxFns8AsLRUNjRmArtWnwmqw7r32TqLpypXdoNLuJJrbmJwJKwxuVtAhQU2",
  "key29": "57ubwS6KcLD4zHKCxybaQdEUDBSoqwPHLuvMNvq64w3JqTw6KSqCM5d4pbFLwQfiMvopXxYwDvrNkWuFq1vsq5eN",
  "key30": "21HCPd9ZPxjSnvgjXRL2wG3L3oeWA4yACT9hzM9nWQrvK4hjemrVt1PHFzM17B8J3EVppz6giPAvag8fXhZjLQJ6",
  "key31": "8z9ADetE7f2XDgwuEe47FBh3m1WjKoN3r4R2Khu4czEwCRmi7PUhwH2DqH3nC3MEvKeoAGhx58na8Q7w8JqdCLi",
  "key32": "3y1EWJuEiWSBHZEaXSPnqoUnfgdJNpKBqbEatJvh3sqAsmfwHLzW53K5WGZB2tZeDLVKvXjfguA2Ei4sHDYw3G91",
  "key33": "kP2P49d7Br8HFCWfk96x1TtJQfNKCpCx8aX5X3yGi66VFYjYn98MokLT1dHDHExbAoXHcW3zbBAACZsbaaEoHj1",
  "key34": "kPLugYAQ3fJMQcDcQw1C9TSUBWq7pM2LmoPFjsRK6jxJkz1LUQWX5HUTZ8xjQyzx9DEgZtJsrBLbyqPxDq9ta2J",
  "key35": "5WGDLKLMyB3L7Hf875WxU6WdyN5BAzxsZaTw8CiGXEZsrxsfndD7zy6upccU6dsiT85SQ8QqqnG1aUfLDJKjWCaH",
  "key36": "KEFUzEKBfqJUSEJHDuEGq9AGtxU858uMQjk5xVYvyNRdyoQAuVKAVcLnHdWoHy8ipw3ZkdxhGTegWjBem69H3mb",
  "key37": "5CiAskMGsCBvL4NpuBUk1JkcHaCbkdgQVq1H7bMRVitjs9Dq6T7zkk94Veptt1QTPy1kvdmSS2e2kTAwHfKYcw62",
  "key38": "4gt7W9FW7AzKiMpVCYEyT9cKXgj7Hxbby6Yw19fyMCAEwZkCVRio4hMMTKDsa2bSNAZ84MvPsxrwpZKjmepbNYmH",
  "key39": "5ToVFB5JEcAkbJPC5C71YPW1yi7aBPn3E3JZsTFGJ9knco4EoMqfDJQjbsyG8axMer1hcUQDui7DzskHKuU2jYFk",
  "key40": "4udhPbfdvgKU3RJHU6td5KsJpL3cKXZFKXRbNDm2oCR2S2fqv1Y8usEeS2bLX1XeYXkWdCPeKC2ReGXLMz5gdubo",
  "key41": "3uU9DprQ4H1R9k6ey4iSNxMpdsenBhNc1mkcofcwCFpMLcYiq6nxPTaC5dLnf39ejq2xRYStE3k7MXauwFdQQBTY",
  "key42": "3u2XMDHBdq6voiFh5aDp49W59txo7rmrDVG3uyWGkww2V9L8UAn6RdxaEvEwL9AjpEKYGphHwnQRqwWJ6gnWcCCR",
  "key43": "cZwvF48H6gVwQxQSqcgeHmWfjjcRSg9t7hDZhR2PygAkQFVC2tpRWrqY16pn9UNoe12fBk2ESiUZ3H6inbmwyHh",
  "key44": "3K4pX9MJKXm6vfbHAiMRzQKoSnntgKkNXdzWb3g1Lhcv1KDmbi6NBnKzcxrMYhnCdGddMrJpMrTALVk2XPDwM34y",
  "key45": "2mEYvnreoDpfsd3GqC1QWsnzLpFc9ETcRZXZ3EmNwXM4gBhiDZa7FaAWJwkRK12sTcGp342hCjg8LKUYYnvpfUk"
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
