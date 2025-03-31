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
    "2BPSNWDD6NGzLqCG8wLxWNcncwmeSW45QCoy5ZZy9UqWfhL8mYL4nZ6J5T8mHSSNghVSunXG9LsVmcpNWbxisdgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35HKpBCbWAXCtKj2MudaVF1uBvU3Sy3VgD4jRvCYhYwgx339v2i1i8eLAy9e1C5kKwEhXG9AQUB1eBHeLkFwY2hM",
  "key1": "61Xz2ZRXNM4XVF1QNedrhJVCrXAYeAcnquzPDTHeBZKeuNp1RMKGQf5yXiC3VdnEFbNnRdPVS74Ta61LHPUtfAUd",
  "key2": "QgdhneVoUcy4Tpueqw4meEp15jhRJcQ8yST1pnhzEyw2UptjTTCfU5hbewMy8AZhD5A3uGhbeXPaGSN7XUkQ78A",
  "key3": "2rMHQdHr9RAaQDQUJwKkWvsiyPQ9Xz9uygYqvKJWFRFc8KZH6UdyLRjvn5TpEq1nortiRjph6JjmoRh63TkkfNs9",
  "key4": "2sfZV7D3P7JioqY7ZKHEYEL1kZM4xYhKnqTjM3W5euvyDjWywkRWYP26gSHVsUjNHo5G5Pwyjzt74Lfn5VgN29h9",
  "key5": "2X5VRcGXSBQWQbPoYMHa49YZ6DP2nexvqkCpDNqrFjuwammbf9tiZuwjdwT9MPtN2YEpDQ9J9DrgmkfKaXZs7nbn",
  "key6": "5ff9mVETKwn1kBTZqMzLVzqnYtBTZYpuKMcEQ39E3AYP88Hm4qNoY5F2DLe9M3xMQGKiLXZeSCWoZAYhxrhqL2Gq",
  "key7": "3z9HW1y2DqUR2A6iLr1qbqYmffXPPUtMExThTd5CQHdksz8a5uC4534rcFCMgz9tGQn8t92RBW9MhEcaVAaquyFA",
  "key8": "HgHV1AiKwZQjdTTs7wpA49oanYACUprKh14vNrSU3iHHFXh7vHk3qMhDwNvjpZc1gLdHNmtNAbsuape4iG5DPT5",
  "key9": "4UWeQHtW7UYw85jpbhMKrkvkjd1fAmfNcSq2Afg5DMYG2b3T7sceS7mi2tqZPDNUuKEH4fzr8G5eXvPpMHk8u3F4",
  "key10": "4BJhrm9aQbXQ6MG6aeVNoJ1JeXfvUJYBGKYrgwMtPQWY51Xunt6rJGpqmAywPxjAHEYJ38GFCsNaHhKa5zDtzg5E",
  "key11": "5xfHzDiZ9siFdZYectcunESmuRyQeuEEtNFL3Rym8RmquoqtFSpqUnEUrDwMUd6HRUEuUf6HUJgq2sNYMg1rWncv",
  "key12": "5WZo31XdNCTwi9edwLVzF2LYQntTf2Xuc1qwfX6pLrUjysvM3m168DDFLMJw4kGzmS1K723wy5mcdHZE3i68a2JL",
  "key13": "v9uN8KoYruMvYsnfo7Qet4h6K7c4iuhrQvLbHD8FZoRxjVcLcwGZGUnmhwtjxyGMJTu9KYsUJdL8BBm4aMCMyZf",
  "key14": "33pvgEKk6HLctdkjmrdfPMKeaQYppbJqGGNqsiWDS8f2eQDoAsEccWefrGQA7kdjDP37omDPVsjXHF5QniNeNaXm",
  "key15": "b74A7xCcGD9FBPFvM436UzC8KMAE2DYuYriAwqWWtpMBwe5xWnP1MHokzqmsLDHZzfiYpm9PTMsA51ss3bfT9uJ",
  "key16": "2mAPAoMmsEX6AHuho2Dh3e4ZtEJA2NfyQbdRVAboQLeR1tontEvH5vKEnXKU9Ky4zAd6Wb49Zkj9txmSKUUUuF4s",
  "key17": "3xpBFJM725VtwVpvJRYj4UdjWbDWju6q7ne1XPo464XUNgCmLubQ3myzNDdEi8MTHVN5MCbV4nkYs8dY1i5ZSERj",
  "key18": "43ruNZKNWFw9rWAJDxFiZUfNZFNHQdvUkoW3RCrGMfTBiB8B8qayr3V6du8DL6VEXQAEUfQaZJT4Lifj3YKNnaDk",
  "key19": "HiHnyyMCq9SzYbfLLc7yCHrNapRUCxdfhr3gwDZ34GpR37qcwFjhXayNeWcbnCXp1uncihSE6GuA5yYNfydXAtt",
  "key20": "5TQgiRZX6s5jgZCnowCzh49iitPYMVyHK2DxZbWDkLGmgb7rcQxYXDxmETaPyNYWKxiuf8qxn28zE8DWFwWM8Ut2",
  "key21": "2QA9d165G7ToN6un1eNMHqn7PRSE6iWhpS644zovAffR9S686prZyjdkbobYuemaGQZpfGiVtPxo6WenGoehd68r",
  "key22": "3sZDS3oQtXmoUGETbNkGsT3PVuYjjnBm1chYTatRsKZUZzdNKJ8BLZjFYbnBupBdoekizvSzr5mg1n43WAhmACkN",
  "key23": "5grs3R7DC6zNGW2S2i9NoRHEyUk8eZR3YxVTyBj6zRhAQccD9qvZboeE8xKibaad6PLv1LXcQoBztMJfL17qEDK",
  "key24": "5YmTTYrKWPdrm1zWx4U4CMSnbTxQWcMH6rv1bRBmnWMAUV29kZEZqqXrRvwZfFAmdNQXxujQaendRKDn6DZhrShT",
  "key25": "4Hx5SiogZ4whGmCV3f7cDbhCc18XpcVzQVL88sxfdqEZkAPKorHokyhT7BZLWuKXaWUu6dbYcmXJv27F8hom5Ujq",
  "key26": "5ZuZi7meLqKG9qiUZ2Dui4hrq72WDx6hPrxZsLGsPSvKDdqGg4incxhAzYEdFTE5363Jgo3GHwCRD7AABapBGs2w",
  "key27": "grPDL6QKXpadYzmx3HbbsMGgbBGiW2kq1Av6WoADRj19W9rprk1BD3NEebUGUfnn5mwh5DRiXaPkAFEMuCkWmnq",
  "key28": "2m28ArBBer6LyMix7E1td1LBrQ5sfTdqH9x5ip6eG2MivdJEDxrHtNDqGbWaNGPzWeGf2iSP8zUAJkSZDBnoBVrm",
  "key29": "4bccATmTPj1JhcH9gEAWekNQmX7C3de6zXGHaMbDGueYQvR1SAJjbYTq2dgheU3ET5uQKzMYvFrMKg7RqRv4NqYa",
  "key30": "4rfVqihfv6w9fDkwJ3T9F5rZRzuoznriR5FaDy9Kf3mUtjpqdrje5wyAp5R41um6TW6KXhoNhmSPWzMy3hqxgg9w",
  "key31": "5JX7awAT5GqV2CgSB9LmCD4SaHtwjLb1DLP3JKKsm9qEz614CxZ3NY2AMS2o9uvU12aSxhiXb7CoaPrv6P8SjE9u",
  "key32": "3Emkpxje2cbKxKZ7W87JuyReSnETbXVHSpnVzgH6ZauGaNBY51xeRbpqGwcs2fc959yrFUupUKNvUpbm5gyUgDyX",
  "key33": "5HShxcbk7Brk8CPKd4nM5SyvFpy2QFTmNUqWDckKKw23MFPeUcgLwTbvXjzQrYRQKmaZ1j6BkK9XdHR9Hsi41xA6",
  "key34": "4m3SUKGFqdm62qHhkBSgAcCu4qitJk7Lktpx1qFrcsdb5u78Lgtb14PyUV6qzREBPV4aRt7PFeKMUh9ux6Ysk7g8",
  "key35": "E9zL1C98svBC4GwNr2Qh8evQB6yHMkPhEuUHoVcqK5dMdvFK4VBczBtiCkCcZSaSgnFuxQMqLDbogoj8YBUtP4N",
  "key36": "3X3rnVGUskA5VLrMUTJtQ1MSkAtQ8Jo9rirKaUhoo8S9f3knpRMtcAdH6YJYMj6B2S1BdX1DyLqwRHWjDJMMR4gB",
  "key37": "xDBXVKfLBrFhKBoNNSH3vfHvN3ioa4mQNCbhAYRxZDh1xPkVf3GWRnvwi4AfaNF1g61HhFY1u5AJ2pRvWKofiQe",
  "key38": "RugUYBWycLwhi6bdyWRUfjLXfFnHUo3nxuPJH7i5MRLgzBDHoX2UroTopAyk5WjserwRrVY4x3M9kYExWmjVNC4",
  "key39": "24VurGs3FNxJe9GckS5qadUfNjpw7ZoQczUpbUWBwoGnBZ2WQmuNf3LrF2FPX1vSpCzHf1xY2QSWKRBZZqLdBqkh",
  "key40": "5MBLRPHj6Sf9agmTjfrrApuPMAhFRVxzFfmybUDpDy9H53bpridMrWo5AXps5BDZ9oLPXSAiAk4SbYxaegphVR6x",
  "key41": "2FvUFhbAbB26yx2SoxuX3dXwVTWYrUJbXQZbNaJLEqVqWxg5NquXuYt3xeGZfJH9AAG96Y5Aour13XFb9Enr8d4m",
  "key42": "4sciS7szoSocAfeR12gDLT7gLwyEY7RRmgYhiMNKEqXaZnFLfLc5RRCMswRFdGLnWma1cPiN8w2CSLPWSepHytaj",
  "key43": "jZCwSAXpmNPCzqQ7vqLmaPBzmVr6Gp5GNBUVT7i5zNpmjoY6cxJVRmTHLLKdaJk1kgqiDyGr6jEvZStNGH4bq9H",
  "key44": "5FEXk9PzfLAQAykXR98HHZerKeQoLzNdfyh4Y43T24dnPf5bwyN6DHHxJsqSCYaQdvTibmNjqEz2v7ToJCC627Fg",
  "key45": "iJbjvx9mEk6Fr1KqHhE55hNX2NYM9GZ4xXxuAk5ephcYXUBc7HEgyh1N6aXmuGm8wCnAVEG18hEBmNzgiX4DUwZ"
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
