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
    "3Ejo2a5J8YWnX2aPPdJHc6a7rmwcz8zGwfyvjZVdnKjuLhMfiTENZHCS4rcNzwa3maXgPpT8cMURDo6Q5eSx6JpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApEFEDqZjpYL5BCW8xn8TVSSuD1Pjn1JDfW4RfevdhLNPD43rhFeGucrAqNxsxQP5eqVkQ8C93gYQhSsP9iL3pq",
  "key1": "58QXCuZqx8GVdkiaFuLdsmM3abBpstUz3wec8oD3oX7AsTHKu9Dmnss3vKiWjMBxPvZZWRAYSoNrChrUGDCHzRoS",
  "key2": "4ZQsHnWpaDUwFMLGs4mRYZbpUPMgSPHmFKxn6YgpzccUXueK1SCnubN8Br51TLz7kmqWiLaLU2nHfot3NhSQLSCw",
  "key3": "2B5Ht8PvWgK9ghQUKJt3QEX9hAD8zaHBDtkfw7rmBbM3xEmGA9Tc8uNm1bbBtsWBsgEdybXVRRKqpx8CQkvw5DJn",
  "key4": "2FP7jrUZzZUgyei6STMV6A647f7i6WkNwy5FJK5WPr6tjRuDKw5LZ1kVdnBBLa8ZCkPmfj6BVFMykhsa7t7bRPf3",
  "key5": "2EjF9QwGh52vzdnssC3nbnkoP76dsRGVp18926VxMXfMnt6Ej4MhjRwRQXQxMgZoLM4QFMjdURWj1ZfQ1USZLn1i",
  "key6": "5XqWakosh6YZmmwn2w3eiujGS982BPzZPkBzzWwVWZ78vm6D6icNUkhzzej6AWrXspQznqpmQbpcNNpFJeBthbFZ",
  "key7": "3m7ifmMBnir1kEXCYDTwR2zYpQuj28r45M4K4NbmYoLV4v4jK5WtxE5JHKz3cQccrbuPyt1nU8TvHouXgUfWx77X",
  "key8": "2quzjQ9bfyMxxgjDsTq1nyb2t9NGdCMdHtPC3ov3ENuWsBbkoYihZLkUvBeUTq1kgCkHRm54erSVjnngYmQY5rF3",
  "key9": "48AhvE7DqWQaxrEXkWUYHTiwCqTyoJ4eK8KYTYWvYDs4MKTaCh5eRMeak6nhrESiZziJb4T7SqqBzngUNpHRESqD",
  "key10": "2mrwugFxLpvRMCKna1WtyHT7kK8MSNb8CbTaCtCSYpJhzRBRuntpsNakpAJFRLtJWgGEWMYbeFPkc2LikJ8NqAjc",
  "key11": "2zpW7uWdH2qTUp8jn2pbfxYuTfkRK1hNexiRH81HQsDxhHi7BQe1fkAN86rdaqYjm58cZwGShVBgk6RmvVCVxXA8",
  "key12": "5yJXxnK8vz3JFgQn4UpK2KXiZkYZ23ZB854VxWSwFmowVQS6kVqzV3Sg354kPD1gq3uRjCur6m3dVjAS69j3xk1K",
  "key13": "GyYgSGzuUcLyZM9agJfhwaCTXCiSqMU32Z2yCqeSSt5FRhVqNqbnG6ppjF8EHdGgRofvkmhvhh4w3bzH8qiVXYg",
  "key14": "3914BYULMmyNorFYoqmQYj965V2Vn71zPW7dEvikfs8GZchP1qoFiyqkqDtGxMbCciEvWJv8NhZxMCJuksTCBE9q",
  "key15": "4vnSxHHd25RTs5ZsZCJv76JNyrvudK1kKjSprR5bSwkP7U9L3ThbrMPNVF4fj3os44z1pycMLvUCtUt1nZrtUyBC",
  "key16": "5ULRm1U3fRKd9izADG8wHi4PeLYCNfohRU2pZ4F6Ub1RezdagP3j89Ud5b7Hpj38wJfmxzmzrHZ9QaJ6AYSkb5A4",
  "key17": "4pxQzUmjirYRLHAegDQ9hoDdKWQ8cnvgpa8S9d3n6LXFw1YSgm8DmpVWbSEkCwhFkUbKyAH3S7dLDbnmXJ1NiJaC",
  "key18": "2mLck5ZU1PMrv2LQ1qmY8UPfSvso35YR9mBj6ziMhmEvmYYZvQKJxQ8RnR1ZX8yCKE6NN1rZpNNQJk2iZvf5XD1C",
  "key19": "4CKCCcfAgtrHV6jxSXs6TgTUPkMKY1XPCAza4cJBfmLqp16fBgGxTuJX9xoZ31HJVm1i3DuHP6MmFpqqPoRgbDJC",
  "key20": "382QJF2qAZD9hXg5gYQDssDwgVBGghWGybqqWRWoCBz1swg3vjjhPBkA8cJgwYfbFPtLe5aaPbw2ZwF5i9tQHe1t",
  "key21": "46Wcpo76Q9aQwm1fWgWwrnyZQ4WYomgmFVQLpCeuTRjGMk9RrWJivVtGsTMAvyREnzxxKytRTZYKzc9msvSVXM8y",
  "key22": "1qJTYKCYCxV6tWHkuuPtkgYy7mMu2w3Pca3dEtXKoDoGzZBrpy1DTNkpvWcaXJN8PtceScFniqVwzHqsghJaQEj",
  "key23": "2eZxBn2Nmq7JFWHDBsjcxZLZftzzQQ6CadsA8vLCa7AKZjkBsqaaxwhV5pSnqu4sQwshs6UjmzAgLF4WEtHmnKpN",
  "key24": "2nKpjzbGUVbzkG7ZPNckiEH5uisRXmgRtVqFbcDgAuMGKWCx63JStaqdHEqVwxGZ6uAwbKCju5eqM9MSXq2E3R1B",
  "key25": "4rUPhUaVABG7kTS4U33W9MQpqAf9vhp9yLUbLfwArzz4phBukHT2M1NF6VHxo6jxgAgYAp9LEpS5UAb7Gyo4K9vK",
  "key26": "c4FapWecXR2cgSvTsWbUSGYna6WFYF78qp9pC5nE6iBGyn5YVUWbAxqNZhtspQAfu1Y6rKpesRHK7yK7DVPTiEJ",
  "key27": "4FyQGCUMVUAkWbb7YL8XQYPP3EMGUnnoRCSTTxxZeuBAX7X8QEQYDuMB6HqqKjMGoVooNeHCunydcPeWimYwRYJ6",
  "key28": "2j8GCPcpnzmt9mVRFPpzjYhECQkau89Ki69CXXg8HMinx3CZVXYXXZCNdzXGkdyuMLp41yB7cZoVgBfCJdgQXMra",
  "key29": "4DKsUz1d3scpDncNHKhvUdSM8BV44Cym3cx7qXrb3ePhRsqAAAGCVf4svqFCxou1wAqG2qqHDKh9tK8s8vytEGU9",
  "key30": "5Z7yQYbvd9K6kL3WLZ25Q5Hrdypd3MjgN79LkE44A55WEZ1ZokAXFs69eZNgNfhjrZGgFcjmKRuqhnv88DvZiJQv",
  "key31": "3y4nSYipAv7a8mhSr2coBcKjS9DwBDXijhERzU3gGAKHjixPzMRVhArqujua4G6jirTL2ssvPc7pQPjGA23mTMGF",
  "key32": "tpbUfz34fKWz5MLLwbyy9w9UmgiTUnsenp8UUh3xjGeKwMwuCWVLxrsx2d3TB1Weuf7rezfaSeGEFfSvCeVDTaU",
  "key33": "4Be2J6UegiZZ7GU2wJA43m9f6pfedUrPJrjhofAhJ1DUF9TMN4CJ8ftkB8fuGLmVFy8F7B9CUaxodY1bzm4pvfJg",
  "key34": "3XhHwVwU2Mde8ent7NVdLJ7wyygQuJgH9uuGSjqPNqByr72DokBSxdEZpun3GRgiVoJA19913bMi6NvHNiBjvZLw",
  "key35": "4N1RuXWTuZhYKzaAmNfUaJiAXcB1haiCorTjcAxuuNmZwQcb6Dda1mR6cEs4wha6iNV7xU8vRJGyZceBM6V59eB3",
  "key36": "22m1VX4cZ3zwtupm8f5cLGkh5qSpYgKtZCD3AhuW6nZ3i6ZzpH4n6xvKG2hW8WubBxZfZWPmqj6tCAjYXTW16eeV",
  "key37": "3q7rZpw8HcxhrdC9kqsSMepcvo9JUFycs2QvhCmfG5kk6TfFekjD5g218ADfKfQrLxPuUp977ekfYC9WuxXXKAFo",
  "key38": "uRvAKC65FCPowx3V7FQgdssKoHXVADpyHWsj8xeviz1DYKKzxDv4WhLM5m54PLfFDz6EgrgAWdzTorVGoRxyvre",
  "key39": "2YNVAUMgBhTmPQdPSYVVBwSsS2QZsCuyznjnbdW4WGLsbwpx1ky1RSHT3A9DhxKGfuCm4C9UTmAPzE9C8gVrPjhF",
  "key40": "2c2AVqKNeKDYA6EuVnGJCfSCFuKUHegJAWGGbuZaLfb2W4LCxwr9ph4GnmYbydVKAqe28CdYXHzZMsjgX7bUXGj8",
  "key41": "2vZfCDQcp1NSEgWEgWJ6fzNwkkDUpKD5yqHgVWnYR9k7egxmW2eTcgR52pgoQB2Gn2LuQ9RwNpi5FZkGfKwoFtmy",
  "key42": "QsBDL7d5QwCeZJcW4m7PpbaNFjcGAnNeb4RRbUPpqXSZ5TNep5zyTL73FTv5Busn4ri9J86v5AgFgfn5f4Y8hfe"
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
