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
    "2UdiQuKcZdUZ3bBh2fdZrd7iyKWKnysY9UrJpEA7v9Uh4YGn3tod5tiu54eLxafbHfH9KmzQYu19VzTeFY4o8wKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTZLo4nrxR4vmk4ki3KGhH8jCGj6gvaKwNnamk4F2jb6J7UcoKkK7ryqz2N4gmz2R9C2kJWpFcAktFev67AGR2s",
  "key1": "3uVXx8jvCTVEEPbup8sGpQ7VXSZCMRRtLQ6cgMBCRrxTraKomvhE3XLidZ6VtZmjmw3fbcpKKEfdSVZa2AnSmccA",
  "key2": "JNVoYHnN5QGZQRyo8scAykYabxHFP6E9oFYaFbrQXfz2hc6UPc699vKpPvoBWERdfgvQGzjvbnGXksANTDBfN9E",
  "key3": "2rFPib1GQJRH1WQKQs25FBdYrVLpySbGqkEZhR46SXwXGtUHs1gxuhDEUyn5DhAK24P2nKRUeHHDJR7UKrvZsGVg",
  "key4": "Fn4V9Wfr7K1SojouyCsqrxzBw2Vfq4Eja9deN7nKkRj1Revmw1tkYTKgB5xsv5NDqsYPSY7GvcKezhnwkG5W6cs",
  "key5": "3mcied3CNaESpDa5DejT8VHcVKJvF5J12P8ZvRJzLTL6KmMLZBUjbjmV1pf5dUKPhvx42CUFTibynCRv7Hz88UUm",
  "key6": "3hTSBnMbXaWfkYaoaCszzDpamvvmJNdR8rHdXfHMZodzasFCtBN4zs5ZChdqtURJvjJvVt7ZMmoTDAtGrtCYWNUK",
  "key7": "5bxGV5VLri5UaJbCo99qFJfE3nraMeE8CLvv5Leud9KvGdijEFVujNNXj9XygtHDiGf6f7KWdLuoc4kAH8D6uUwb",
  "key8": "2wijTRBegJeotvbHUydnJ23Xd4w3mq3AcVsZJZRs1X558n5gX34oDQqeZ56bZmMVPuqmtumPaMCDosMoxbPhzTza",
  "key9": "5T8zZuPv2PGJfKbNfdfcoukhmujtRU7n6DyvRF4QArWjQiAnjQTGPQVETja3h5Pm5ZKTvEte47hofV1386fmGmgQ",
  "key10": "3ouwYqSnV7dAND3Z6XBGjExqDPQxdZ1Hsp4ZA8KFMMbhUYxLAtc8dwUxTANpW1JHRC1gEykMAPvk4bHNStr1cub7",
  "key11": "24QQms9tVLgfwLq1m62yMrvwAsvA6YnTycTDjhVejyCGaqYCFKWirSocRYc7qZd1YixqCVnzvPTYj4vtRLR3EpN6",
  "key12": "2QykhHDJzuLnHpM1ofedreKZwdUipMEcPs7CTAdk11oYRB29LnaZS6t7m8p3FxvhwXrQu3Jhh6YL3wgS3nLiay4y",
  "key13": "GLzRxfeopFdiBuu6i5VqTQFb5XYkY5Zfmfqwzv49YJjDx7DT1ES6JTSFbt4EmwZkaP9T1EVC2qRktbK5vfshadt",
  "key14": "2Jvo54Q9mWnffySXhz8Qrh1fXHSzQfh8Kpc57ejSfrpdMAdY3gz5VNUs39qyHqPDmpvJ1GP9ukqTQorPDBxa6ZAx",
  "key15": "3i5jE2nTthBXrm9Xfkm2xvpdP4YfAt6NmHBFhFxQo28KcqjMjsTU8a2HTwHsPbM7JVZEMTWamaTo7hyK4oh1FpFB",
  "key16": "2hUM9x8yTd7jyVGn6hfpbQU4AsPw5znTw3shwYt3LmZnN5NbuSBAvorPx6UXMEKm1fM92tW4nSLE3QsAGdu2ENF9",
  "key17": "5rQbmaNJ2kS9TY8ydJW6rLhe9nKyAuNWASz7jKVjkH9rhfnsm33zUfVT4KxowYroRK6tZho6xumENoU8TQxrSxnW",
  "key18": "2GUGuXnMKhZgA3VLAPnbxFTuNa84LuLuuBHAQNpFVSd367e7rze9RULVsDEYLffxzndsPH1QMq4MZXL8Jhn4dDJp",
  "key19": "5jq3Rz5qQ7kHZ5V1yULmPCPpK9qNNd6rJ8rvW6XHi57bSfPx2Cc2XTc45mKf8Wt81G6UrBcv8SHCgsnR79yxRDob",
  "key20": "4eKqzW58EeXzicV35Kcc9ukJABXLQ87zB5KXDPkgACcJztaScz2cStsTbGmHBokRmWqfnwjNt6gRwB6iGshLTfiB",
  "key21": "3ghaUZgvrkvJYLq6W2aDHJJE7SrNCrwNiQBSPV9UVjzgTGEZRqtLHNLFUHgg6QxAuPHHDxBzNN9L9jVXDKQha5A3",
  "key22": "45YLHjvL7uBcYkd3aar1CDLyZsEbwGx71D93e7onxCrADUBWDkhtYK8syzyo5pUrnLty4v3NDGg2JqpjZKPyZ75C",
  "key23": "4jy2oQrzfxqwkMHrQFfjagrrzfCBZLQVTakHjUythXHM7b1hQE6UU1XfZGR6Z3mkosNLNvF43RrXZeuHPDoFhoM2",
  "key24": "33CL8RR5z8V3mNjbqCaLmDCjDwgFQVZa7HukdXh8tuggkHCe12PjyXrPkVqS6omHAzPzdxugyHpUTeYrMR9iJKrv",
  "key25": "4fFVHP1ZAYZtDkAVQp8fguht5xuQg8XBKKzeL9PAFENrrRmhvnXSU9J6PkMWaj1mCQqDxAEiHWty32d2GQWKHrCP",
  "key26": "trM9CwaXrFstuGfGsdeHP8KZ6KHJJqYcjhQztzvJqWssNo6wrijeFVQnh6qitmnXZHeP2HLyBYTPAjqRHWMRzNB",
  "key27": "5JzNV4wW6CJEEEND15Z6gFK7tE2ESLsDxsbrgqqarpPXKfzGUngBSNyEJAozWu66yhyxZd8jiYENZpQTXkwXLEpu",
  "key28": "UWyEsaM37KrjV6Ei1wPrSTgNWeEncrcmgNhFNycaZyGdhidT1mHPBoiCoUdtTZmWMhKxYxF1MxaHLWH7DBKFvr2",
  "key29": "UipTStjZYXpdAwwqMDdKAzab8VipqtqLyX2vGGHJhBuKn9LiNqReaHpQuSc4bFRbMqeViW7BsrbZEa4b1dq6CBY",
  "key30": "8Hd9F9tFepiGNHVh5dg36PwHfBQRhEgx7WFS1PvgGKF8f3YXxPGxN43UfVnWZgop53i64vFnbzjo6R2iRGp9xAm",
  "key31": "J8SBjguWJ7BYDcPZCwStaNJxKnZTVt1uFZQkKqLYKG44HW8uNeXr3vBumu3uoVyXgB6YD3gjX5xCWtLhCJc1CMi",
  "key32": "4NMamvoXLbSh6E9oboJxeEW3ajSejN8TYjxbD7xkp3rk175GhRuntgnKaBjt9PhRiPQaWq1oBktfJC96uPrtG52A",
  "key33": "5hB41o47BDQi6aLEvHULzUdorCa8LtgtgGK25Pk2U9Rqyzd2hYrnFb6ierCYZwUmPu68qG9xz5acSQGAWdsLa5sR",
  "key34": "3p8M43YLAVqigYgZJJuSTJmGV57yCdB28mqeRHDfUQPcauAdBpJeqNjRBdpRqu4HEj4CWn6NUhV9uieQrk4Tiue6",
  "key35": "2UXx7mdsykue3ZE5io5JhUfPnt5wJjcnypHwsonC222WyzLYFgcAGQ9XErozBz743bgauDifkpffCPCEsZGEYdjb",
  "key36": "2oppNYSuHefs2e6SdXGLdGms6JSqenfMVZ3amupS1f1hDMxTJb5HVxN9rFQd8pDUVqmKk7G7DrGNZLe2XusWN9aL",
  "key37": "4uyqdXqhE5VNkALdatqZGJVDN26toabcSEECEmiX8Lhit5ZbULfnPBWTEWD13LyT8YFdjwtkygaGKpKr6nRhjDDd",
  "key38": "2dNsZutZswijaSVHoogHjdXbnxkEsmqgJ7qt3dcc8seWd2smMg2oPBACtY9QZM8GX9rKNC43vdyFhQWtN4wYVdSq",
  "key39": "4o9cnJxtyBoce5miQRNvVR54EAAGXfRT3hUx5xBezfJGfQPekdeUVs47f6Fbe4nHZTibra46MHgPpHehFTEvJqFB",
  "key40": "4BzqjL8w7UAP1jkdsUmM4zNmKTHLRZptJgv6qPquHiKWThLcyftuBGPY6CcJHH9E4xLi6fpe8jjL47AswCfw2NcJ",
  "key41": "2AovSnPFwyCGdmGhoUkSPdMBXG7LhSxdyr6UbrPD81egB4KJKNZ2g9JNQCm8CVTVcW1HVYroX7Na5CJkVNeRDBRr",
  "key42": "sDsaWpgseKMuRK36S8Lwa3fhYTDLCrHwrq3z3Rm9CzYFbPCTmkEeTG3KiwFxkPVXxM6Q53Sz5KQCXWGYSiCHz1V",
  "key43": "4QzwJstU7Y3UBqPxZrsvNJpWBpV1Bjht3ztKg7XhtCzd3VzmChsQvpWTRFvFbTwYFsQQEHTZURXUigpXBtBVwVMN",
  "key44": "4SA3PxxJKip8GfBq23QWEfeSta7HiNBjtF78UnGFgAbkkqVjQkr3fBFUffw8VmTzSFEDruoJUkv6pS23FmrUi6ed",
  "key45": "2EoXQfydxKNzB3PB4NcUsLMH7YMFk4xjyX3btwrpnCNYzPqFPXoj8nAYuxc3BH55siWqZ1a8bKfqNmykvyQSbLJL",
  "key46": "5iFUvVB8eCuy5PV3wBQubBsGJiMcuw3bDEV7SHp7BN1zmXw2jSNoxWqKo5jrLaWSybgbBzhh7Ed3LSmL7MkRX7Sk"
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
