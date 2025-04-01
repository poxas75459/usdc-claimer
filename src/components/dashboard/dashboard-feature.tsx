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
    "5fantPQkBB5Qk24BGdjjhTmAxHkRVSnZjB7Koo5iGx1XnDuE8VVREj8tTQZbsFZaaAd16cQvoyoJfJVtyVV3XbpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZSy2fB2ouKKLbArSeyMVe3cWSB5eanb4XSsrMF1PZg8oUvX8rsCwti6YfnnXxnTsBr8NVTMckJenv21fm9HRfS",
  "key1": "3f6Q2kZo9j141stesJBQ1ibNu46xnZ2Ltqvoy7CSLpn6LGnuPrmZHKzYCY9DZscv5sSU1z1eCF1b8ZoCYDwX6Zr6",
  "key2": "g7SFuuGhqdLPX6CvzzML5BdQ5eDqR2VW1CvsmEqrjdu7BCURq24pQmnHi6BLadA7ZcM97vepcvN4dWy6igrc3Jm",
  "key3": "4gubG6aKpLTiXjm83sj5Cxpd4XGz7BKG7dLE5GyVrRuFTBHee62iH1KJmKmWRpEhadEBCT5eYBHcnjD4P4k4jJCy",
  "key4": "5nC4zKVvhxw8qUSSRNpWqNuuLUQd1y4n9XTiWeRR23CUWQJKy8j4TaZdR3jaCGzH6uWqCKqEXqFKDVuv8tRu7Sem",
  "key5": "5kiwYedrGb5ZN5MiNWNfNCm4CYEWbTDzCzH4JTUEgMc7qhvJDLrB3teyffJHRNrRkYetwxSioeUM19z7BFwYcXq4",
  "key6": "2sqqdN8bZm5jX4uBNuWfLqr9YUKBf79Qc82pBdRsH7suGkFU7ZSWfDCB61goEsR6pFA7cdPNe65RSToJXdxNHi5g",
  "key7": "BYD8bUU4ojT24dgjqQrx5zYNiY5NewwkxqzEC189B2q5oUkvuQMMNtyCDcUYit3ZWcAoJRFWbcAMKsDzoqawJLW",
  "key8": "4Wuoz1WPrbkgqAmfSoWPBULtYQumnsRPi1e7N9SkmDHRRw6JVfyShP24CKkeJhJ2aTp1druBrDf3KvxwBZrPRWzV",
  "key9": "662aRc3nFRUuDwVCz29zNz7BWFfNmkGfxLDHwnD6rqyfjZA49krGm6sH5Pj4mswJ5PiPfmLgsuTgVe4Sr33eroTY",
  "key10": "4phPvJ47XqmTxytHstNS37n8CqHse9g5TG9d3RB19qHdW9Psu7okpSPJQBxxejp6drRfJHsGMSQaY4enSwYzKnho",
  "key11": "5PAqMz4wS8qt11Cq586nH1siyZQv89YgBpYB4a54z9GMa4CdVvsQpeVEc1sCbREr6z8LmTdGAUguhkPKdgZYwoAs",
  "key12": "2DeJ6Pqrpk5uXV7YNoVWZwtZ5TRB1cTC7jB5NxKuBrZauLeyaryv5k9RH8tkWZsEkfMbdQtNaFMftKxWQ3EGNRix",
  "key13": "3DMTXfycnvzZhfpc2YmyAaMX7hCLrgfaeAV5jywZT9DL7MzDnqp4qBCww9qy9ozcvQkd7U4ZLVxHjiUiEDpU1Vdt",
  "key14": "2tUkhdbahmCejnHVy2GC1oiWtzVCJbHVgknamnqafbBxt38mcxJ8EAy946qqfz4pprtR6RTg8Vt2KNeW9Y9Z2veA",
  "key15": "ZUC6jex9HqqLpdiGce9hVK9jAsdYgdMrsLaXK33M3YUfo3qbNhepSP9RgoAqhXus6kbV2y6xAqKtJrxwLXnfFwS",
  "key16": "5hkV4b7N56AymDLtRYZeHSJNCvLsYVoqvwuJ2Zurt2HB38xbhdAAjViL1PzCHF7KXUJbpqLKiRA2tWfTSBAWVPbv",
  "key17": "3Nt2vqCfx7QfCgYo1PQv4CLnepFPGt1YJXSGvB8ZYFgbown8QsjfhAJYot6hiUTRd7fBQCoPB5pGL7CxBvG9tsYR",
  "key18": "5K2QpCfWbTAspzveULG9eVGbFmXKywaKN9pv75S6Ragu56nTjG5PJJSk3JpG6KCncjuDKL3ouk87zTv47enrpvik",
  "key19": "28AgyQpm3MpDS2ujCiu4DMeieMV5JhyxxKEgJ76bi82vYTeKQMT7nm8LwkrHeUjpMiZWKmpmiuJRK9Bi9Nv9n1Rz",
  "key20": "5N663cyiDJLk4bY6J9g2wqMnPGMTW1WQi6Kk3fXSPfSFjNFVjNqL8DcpKxJonjgMf1tDVhhGPh4aBjBoCKW9hUvR",
  "key21": "2ZwUSfjPFqJuoaisxndnURq98y5PrmyvqoKQ3JyPBaz8T3odAQtZGwhNtAAnh2EM6pz5c8p5GYzcLVgiy4ZhZ1hD",
  "key22": "2yEP6E2TQeUvGE8AHy82wuedantRHELUYHwuW3rZ81a4DPTHDcBxJBYkwNKyDV5LyyfPeGyunu61XWp2yZLFduiG",
  "key23": "4Vjbwb38Fs1jCxxuqtph4KMxc1pdsWETXtraMgumJbgcgAAKCxTPDvUNBZZxcPSAvn91sx1vk89UPmhVmtiUrHWr",
  "key24": "4khUiUiR7q9iDuR6txyYTb918pyLj21FdBuAboBBj5yMFjmMNwTxTALotYVoLdyt3fvVP3Zd5hM2LM4Z5zpyP8vh",
  "key25": "3t6bYYm3hRXbabsEnQ7s6RU2xLUjaZafef2K2mfUY5EVoXcpbwho7BqHwxzcEag7BWQG86V3UidVj935uqCvuATZ",
  "key26": "3H9TiNFaKw4BJ6FPAUNGYvWX4nRM8P5awVpKfwXvA69JbzEbhpkQ2sRU8Agihz8D9eiqtZAneGWZpRw8aAyaTB6E",
  "key27": "4hVhgkYjBNSrdxbtsfGtGhcdpJ4baS2WcpiPiV9yvLtFLdVggD6Wudw1yimqrWWaKn29LML2sFDS9QTvjrP2DABg",
  "key28": "KWewQrjR2nYiw5n8vfPrtZmNca9uNC2eLtRCtM9Hs3srjUgCHDRC5qf49SBJYiueBBm8avgQagBdjDAwuSwKwLh",
  "key29": "2RJ7yvJbhwXiS9VGp6bxNtwMmBPJYeap3VPyz21CK2AiTBhn5Aex7nReqq31H5dDcqSTu5zEZqgnG4vMkN9AQMfi",
  "key30": "5ZqFFxhDfj9rhS8UDgF98Zja5HZZwMchSaquC58EFoLvzQZSyGxNvoXmYqeE42LLLeFyFgiKES5giBZ94J85P7Yq",
  "key31": "4wwVLhCkrhM1EC2scmYQ3fa1pvKPsKGyazxY6L4pgCJvP9pZ1U2sxJtb6uryg131An2NtGU7s3CgNNJ6JVtA6A2o",
  "key32": "3X9eNarEZFDRH94sM7BDU1Xp3Krk69ADz4XTAwwokXfp9br79mrxx2WJpTadKV1py8Dnqyokr7PiVRhqGzTUEFYa",
  "key33": "642mNckPZHfZTvCSANsXTi3fqNKxPsF9pyr6EQVxcMoQyhS84r5y8N7Pc1oqQpMQEu73FQqzk48768GYgaR5Y498",
  "key34": "5UNEvjTAGTdnw9tWBH7MRejTByJHrx9wi77PkgkHFtmHufB6V7SCRnTHDnF22h7oNno8SoNtfRcGAWYk575SP5Fx"
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
