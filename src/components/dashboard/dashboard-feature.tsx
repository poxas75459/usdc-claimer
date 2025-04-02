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
    "2jfDAdmRCzwGn5saeWbysfCEGm8F2ncFFEybGbgUWY3meZwRQ8jPDvT1yFe9C3DWW3nKtZcCPear2xth4SDooiPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvhdBoKmB6UirUh3jnPSDwVQ3HjeuCLBVZzTbz6CBepwnsJhVoxMCcc9bnPdVcLPvfMABE9je4oWQy8CYgtCVTr",
  "key1": "4hnAbD8db8FHsjXRn38MBwe2HPYrLby9fRR7Dx5s916Y1boGCdPr8sL4Q3csCinqw8chJBpmErXXiHUidHWf299j",
  "key2": "5jsz29r7X4i8QimRW97LWjsBA14HcJz716QBPDDAy1JFAjgLFieJkvzi8ZatNF2Y8yFuxeLNMmBAQmMVioFdD1N7",
  "key3": "5U3Hkwpua9mpeW1pQcceFCz6wyFm2ApMx8ruwvmjffQo2PCjGeTPDfCKF9oiQK221DqZdSc9WbXBKqoYPvQEaBLm",
  "key4": "3JA2zAyamGMMn74YyVeCctSfhahz62dvEPDu8ZJqXFrc8YwjYRW2YWZSmKp4gdb1RL8ogC8yx941jWAA4P6YkzbN",
  "key5": "5WyPnSLd8bsrBE8Ja68Eqj1JKFEevbPUsto4QZorJNT9YRV1gWBWnDCDKHP22sj3w6J4kFpWU3rd7gFhgCE7uXWe",
  "key6": "2amHS6RWuSmJUrNKmBRPSUUtCSV9VsBBwkTmy3ctSp8jkgdDB6vxVwSyfLNX6iMAdD4r6hKtfkSGfyZ9x3fqGBoX",
  "key7": "5RznfsaL6aVsovf6oeqbJ4qM5Xhc6MHZxHpShQxcAiNBUHUfarneRoxh1c1x4xSg6nJE3swN9fRgzQPYRTFvp24C",
  "key8": "2z1KnqrwhExqmP4n4wWQ131bkvK9uaey2pEDhKm9g6HrsnpBUJ2QvnGJpY4QR4v6mAdkmHAH3wjYNw1mwaJJaNrP",
  "key9": "4iKiu2mvuxuNSkeDnCck5FcELLeyWkvJvHvR9iUFcrPy8PbiwjKPnQyt852wHbemhQfwHFfu7XSJ9B5zGwQtvE1S",
  "key10": "5DZJ1GjnWP3M5DbqqcXdRnQPbdNC8iaFEz9bbX79mdSLeqGhyRy2dpekWnNVo9BT5iSdpm1mF7dabPbRLLsH14ZA",
  "key11": "46hWF2DBUux1iiU8sdoS5JyUdzjysk79MdjeXQWJ7UbZV9iQCE1XYvWQEGy3M7XTxLenJef9LQycMHgZzmJzgTWi",
  "key12": "5xk16zxc6Ft24ichmvL7kkDEU71Q3kYJqjgAYkJcubyTLijbzMTBLjCkL8trx31ispnPDxaE271iJYjUxP6Kyn6A",
  "key13": "5pP8FGfygiW7h1C3ZURy98WmTWvcmfkVbHbiQmn84cGdX5jQaRjURLJd7EUeKv2gtmtGEDTEMukxsdrBPNjT3qwk",
  "key14": "3x2g7vs6arpejWd9fkadM9RdaiNan63o7rMKjhFvaqKXdA5EQUwQm8Gd4PUvEv9CQRtMdv1PSinpok2NaSFFbHPb",
  "key15": "4CHnUo2uAgHdtQWy4SKGSj7AW89HsTLQgZCEUzXtPS8vrQU7rWzRYps36tixP1noPYS7NfrtuufSGmiEb6L2KnNf",
  "key16": "3hzqV3ZwNJQczcoBEsQPzhzfLFZSP5PAVC7TCqqoMPHmJNaAT1BQPtesZjXsZ7ibFwimuWC1kL6EKJjWid4zqdUu",
  "key17": "5utNTdH4jW8KmWL71W4Q7cWkrb5FkCFUa85yS7jHxHb7NH9zo93ondUCa7NvHcZapbwBNEvny2dfYasart6pB9SE",
  "key18": "8JMRKXBofCbYuPxiyWZPAUvCxMENk82BNm3NkdpFLmJ4PLqxJg5iJsthvCQK3GJGZcepDTEinez33ys1cRVU1oa",
  "key19": "2g3XEoAEzFXkzFo4idzXW2ETfeH3LRhLTeRnCkS64XZBpXmTExbgJeFs7hx7Jda6VuNucE3eKKn2sP3S6uHiSEgF",
  "key20": "2NzFdq6zmLbgoyAorMTFmSADqErUzV5Ebm9mmS3ZRp9jc9Ngi7QN14B3WQpQQi1ZntqxmWRiQqCNzU7FEBZPTJcB",
  "key21": "4CJ7tav3Pi4SuvivCMVoFqB7SshkYe9R2pPsYAmF2NMfJpJefSyga1DYNcy5rBcWruEMsvLxQJDCPjH7YZXCbC9R",
  "key22": "54VtBFkXysenhjkiYZvKbBQuTUJUraXB1aQCKRpe4w9oDQMhAQ3i29gATWbgQeUjRTAWTb3DmCPs6sw7PsDryJ5F",
  "key23": "615cAxsGZNWTVkateHMeC9xJtM8hBAmtxn3CgcuuCg5E5uxB23TCMrTRNZ5DDmxFgs2Ey6N6ewS5TVeGvrqDnpUn",
  "key24": "2GtQMDdrgxtaFG9gK9GLVTkhwxU8XNV16XDfr1KcsVBqbk9xiXieJTzTX4CX5XXikcPYeZGiBAErPpibhoRAtu2V",
  "key25": "2oz1VGmJLtKfbaBNaWxzpF7pe8f2nnhQH6Nw7CAbzLu3Xp4L14LybV96LkRvsxRnUx3nGnGrRnjwQKLkQgMUgzo3",
  "key26": "2qLmDbotz1XHJxsFGkNqw3u8LtXhYnGGE5QHLhkacjStNgDNfNBSWKMUts7aEKRberJsgXzYT6nKV17Cxt2Q1Pb8",
  "key27": "5dGZLEGp4oboxAVHtoq2V8nyMLKvZD9XhVSVC1CjR4nCkDqwLABg4oJBHDyu1S9Y89QS9GRXpzaytqabGojAMV1A",
  "key28": "5RhpAMebKTj74uk1KqbbbWhpH1bUB7styPgo2YLVRaUM8LBaMDN1s2tCbdEappUmvvsjjEZffo94kAHs9BYxyMPm",
  "key29": "19uZ8GKA9m6bkJCWBhYC5BJ7VuUsoetsNQiEDS4EoWEn7XNBFdGekAqhYUi2rQUGQRrcXkFEn8q4qh6MFq4GyAD",
  "key30": "2GauJYFPNhuKqDV7NsSvLY5v1M2XP38mtqvckHNnQURgEQJcCevmeCdawXYpovcEPEUYCTrWjab51CFunKYfbywt",
  "key31": "5ktrrc564NUKnWbjvUvySwLZy91nnaQ9j5DKaV8ZVYtGEV5mJf3ApVRUBkKjKKAn4es8Fd2yi8k4KeBgwHn92F6F",
  "key32": "2jeEUx5kLzdmsvV9FvkFFYDjFMXLE5SJMJMJ6T1QDSoX2sTdm3tqobRsaZAhmggud8SJ2f1s2HDZRHs8bd3eU4RA",
  "key33": "4vfqoJa9f1QqnaPGpg8cSY3muteKNtZMnZHnw7A3ChxbHQdntpetJdDJd1Y3MRYZtZHBoS12NvfZDfruxTwf7bR9",
  "key34": "UFtZ2FrMN94wx5Y62odNUXvXxvxuYzR78uK3Y7efQendxvXoMvRgEciz9KQqSjxCHnefbkpY4XLp2uJq2vuChVX",
  "key35": "3388TqZdxV9WaEiNrhMhpDLgovaWW3EDfp18JJVA7bNYuxAK8tD7bqh62ZEZBY2FU72wZr6LnZSNaHfmtkkGhXy3",
  "key36": "4zHVRCWtXhSoSpRg9yEYLtaoirTx7HMfSdLPdfWNQKhSXDYF6LhL1UnS6S1teSLKabGAqicse6Lmqen49YVZBRi7",
  "key37": "sKqGYchxcdgEjenjuz7DwfWxdJSXwLz6EwgEXZuoXydme4YPoWwCE4M267X4V1NhgUg3XmRVGSiaBMQtTNxC8pV",
  "key38": "45QoaSbgqnVUZcnnMhkAzi7NTowUwYhTNJwkxbziywFbGK9DZWhgF9xYBBw2EEq6roykTYZ28FBZCjXQwN1iHP51",
  "key39": "3SQqhJZEDfyu3VoT3wgLPnFtV3s4A4dZGfbUa64wNLvU8v8yXe6tqZQTixtN15qJ2oYQMQ4h6eokM1CRzTu8Ky8X",
  "key40": "3STXbXohJwpeMX1FnuJewvkk9fQp5cc8j2F7kDGtDJ48rVtkYdAHjihmzNjtGakJ6T9tsD93NukcHMhaD22JYmge",
  "key41": "3aNVpv8Pa2thCFKXMt55NpPxAw4jBtgK96GKQkXbAz78mUb65Ucw1BCqzYQE4tJBHmmbTXC4Ma2RaMGUpSJQEQcj",
  "key42": "4kBXB7utL2McshbqbC1AGT1CqbgnJCdVQvYLxELJUGFipkra18rH2d55YEygeYCubMjNQfKK4zZiFJe7bSk5Wpz5",
  "key43": "2ibiLMZRK64jq4jWe24BgeVmLqeTsbaxiZr9nbXqpu6JrFVg1R8W6eLvRkBkfqaHKkph98bhnUXD2CDXac6Djx6W",
  "key44": "3FpmuRDAUWcEqfQWhFgPhqa6Uu1Qku1e6yG7XLRWKrWy4RazotmtK6uE3qprxZrzniLqZs9RH62dcpccqKRJUmVb"
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
