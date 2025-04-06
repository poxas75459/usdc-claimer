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
    "2ZN5SkUNjDoXSBHYn9R67o9bBkEGT6VQv5omhkUuKFfT9ZiJbxm54zGLh8Wvjhrz7puXWWKTcEiYyQLn4Jcu7Ybv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GR9vmo583pp6iAJKBCoXD7Kb1nUkpZCgB9gRjwkCpM5xXgDNjmB7vUHLfhEunbzKycScQzDB1cZTKzaRAd9XCRJ",
  "key1": "5iszJ8WSUkamzru2TuoaAT5cJF19wZvkjr9CYuQUQfcV7S9uV1atbTF2fUtxmrJzAj6wK3SrcVoBF4znJQ3XDzaz",
  "key2": "3jEGgtun15C2MKNSYPXFQhDx7gvH4FsWmJG7s38GBCbYr8vpvC4dJbyE6KKAGQygBNdHuojL8d2j2ysA1n6oPMUa",
  "key3": "3fhqD5YxNGb5K57b3N3p6KHURpHDuDe5LeCJ9w5NNpqgSBN6Wma6KiF9aDRqpBwaBhqcheSGweaSMEjnoaLckNbk",
  "key4": "4PV3x8V6kVFsaCK4JbAQVdfsDPzApkqTW6cWU8yjUUmEP87cyLytqpbT7fy7TByRsGGbg9WpcxdSJhbXG824ATgE",
  "key5": "2Gv7RH52yYVbhnvDvYdTctyXtH9DXJHfEVjanUdjsnA4Mq8XfjwVe4wYGpcXcXPU1PKeUpBT3txWvoD59tiMa5yS",
  "key6": "2P6spdista8pYmAUNacYF3CT6FEAqQ8fBEBCaqQyfLuLB9XryAFLUw4eoZEd4vDrbVji61GGjCmzsSg7aJvpCVBo",
  "key7": "5t59oqzyeccE6tfrrPuVfKsuyBn2iehEpmMfUc9CNuUEfFC8qLUQayWthNxhuhhd964jZsw5zf6eQerChUuJE6sW",
  "key8": "4XEgDguegDsxLpLuEPTHnT1dfEntXe4Vv2CTded5fp8g44kYFM1o47RMw4tDXjv8c8JcAsx1M3PpNpHUsX5HLC89",
  "key9": "2p8DbUF4rWRhjMtzLtf92bMTVxd5CdoXnvKPGNekjHmvpkFu76otGYUVeTH4UEnnuhqgVQqJGWgxT9771w3KG7hU",
  "key10": "3QFVCUVsSoDmEzT8QiCqzrpkVenzy9TZfRjTB4CUPkQxZxEUSjHnd2yZmXgo3wexDFqryALVW1i1Z2aL7pj7o9Fc",
  "key11": "S27yiZb2hpSaMEDWRAPva6nM4npuUqm9m2UEZ17KdQ4vAHz7hGbFxLJyGUHM3zXRLaxRjLCzn5p7PWNp14FBLr5",
  "key12": "2XM7CQ2pUxvsJJ1wtAFF7SmYmoDe7XeFSWwnJyJ2scqotTygZrTYx5CCeCYskQnVVGambiFik3xBaG8JBeKxGSmg",
  "key13": "4t8312nSqEfF8vKobSbw2YaGFY8J7Fk13Ss3Fftosw7iqSKJLmTzBKZP9ujedwrEJB6FumLhCD986RRQXvLZCK1m",
  "key14": "5LRudDtqp683iSHU35b7ZfmncUGBqz8JGCb9SYnjMNR76HtGEYLap1XWsw6LDqzs4Aeofq9TdVg1ZMG2hVN8DZmh",
  "key15": "62H98ShGQDB7qvapeXRhPaAAmLYgVxTbodVZgnG8Nik3V8m6bLMGgF1hTeK3xT5A3EFwH11aGW3LnoZbWpYW16hC",
  "key16": "3wnkLYVCzeWA7tw7fn7sPYBa5Ku5pBLkye3sSfP7h2jSVxYXKF13twTUYjNT6qS17aPwAvdibNdXUGzpQdXYNKAK",
  "key17": "3xiYb5sa2RnFfvtQDWjXdW8mNXMteaNywGBskqThu4qqFnZsB3xKTweJGuNCq9Z3XKxjzYFA9wdr4PEZ3LF8RpkY",
  "key18": "L8FRaMtXgvxbZmtfLFMfhkDLGiBuHgfU4HEHBR24diDanezQvgY8MWfqhhFoWoZNHPpVz8RcAVjXHVnhYxu4EAB",
  "key19": "4m7iak7r3CwgiAxDe6XykQZDAnanGyXGYUKpkPG8Du2zt71bBuEGvioMEdQeY76aKJQMT7mZoW6CStXLCg9DWFYi",
  "key20": "65PVSijkzgJ98Dkd6LEyk7yevVmNRn9RgsbGpStVLFzmYFqCB3ya2FA78eWseCLVveXWwu1BWs8CunxMkwgjpQMh",
  "key21": "4QtzMxYkkDDk6zhgjhGQPTKnFEGAkRXVUKawYCQe99QhQ9CASV2L4RkuGEryCevSFomYxENYvvQYh6W7DYDhn37L",
  "key22": "5xLVQBqjrfvzQSUu8ic2wEwvTHFzUJrNVbjHPCiYjpNxoYA5K8gkFXCvFcn3CnK3crPtgLHWhcPyFnAjN8NKx17t",
  "key23": "3JcGDbiMe9GDPc6CK8TMtNnAXj1CHQcTqxEcfunCffnNVepkfmyDaTU59TAxpeCgSdbye5sv3pdqKv8ZeweEvwMi",
  "key24": "MYXdtLaS9LYNbL2iTTE2YhkYE4KvmMR6XQR7iJZZ6px8rvqiqXyxp2uNrTVWTTakM2XkA9hPzMGL5Y5bwPsEqTK",
  "key25": "44RFNdsUX8npq2aErx38fC3wQ96X1rRQFr38GqrbsubYv6RxoUBecohbpAqTNHddkdkoRezN2yGEyLERkXRLhML5",
  "key26": "5nzKhvqWWS7KPyiUaDhLzRrR8v4Q6D7JwBMHZV24C1W9aDL5gKfrWVmDVJ7j9Lh3DLjc6hpqPPAmRzBLsBTnAWiH",
  "key27": "5jDu4JNLvywYsDbPWfAGCbcdNuA1ic3U3qcoQc5SQ5y5pSihVS1r8A3ppLjzaWx98nEt1LG362djKkuga3v16S1U",
  "key28": "38p7x7V8cuu2TBH2Q3gH3qfGemQFchVckU6j4YkBM7Pp3ZUeRjKeKBpUYUJn38XbaC3djReu1GiY9phEAcCk9Yvv",
  "key29": "5uLzJsNysLNqm8e3zuD6Eu9pu2nAL8YBZXZY9QRSpXS6TXJfS1XQiLqP8VHRAgqKmv6fgEhrtBYAK1KuX9AkufQW",
  "key30": "3VeoYHgvVPRdRnXNTkTHDj1yKHmjxuRCgkijHvHdTWoeDn5j5TRyCMZvduCMRQyfdpQtKoaBuvToQxpRKDWohNN3",
  "key31": "4zhTeL54pmKwK2NdtBvzWST9sVNg9vcjs4ZJAQF1c9z1svK8iq729P25f3kah43LpPP8QQLEAUHK38gGQHFWYr6g",
  "key32": "4Fqc5ZGPB1poaA2bgmRgvTFjiokeKXNPvjrK75Lr5m6WZNxuT7RguQwxTxiHm6RUz38K4kDmj2DE4CCNwwh8NkYQ",
  "key33": "4GxPaCa1dbHVq3duV3qAtL8rQTiekht47ie2rQANGN1sqz5wk9kmuBnokMKxXPHsHw4EiV7i4wsYvgHyAvfr2mKL",
  "key34": "4HfYCEtocjsJPHFE51THSpy37tij19ExnXMebjV6xBdMxLFLEAcCf1zaA5t2cywAegHNhSqAvmRx7UXtm5ETPxex",
  "key35": "22TqX68azpSPdi2pVY4YPcrXzyCLJ1PFkXHF1QELigUK8LHE6BGekgmAeyt6H6ZQPUZ21rNSFJrN9FChmFyWqLjK"
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
