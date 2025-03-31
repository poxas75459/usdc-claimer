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
    "4snbUzq7yYTFrqMnrEKU4bjw7NXwx2aSNuB4L3cG9BDr4xaZCLszGywZusEeoWoxjCjWxLCeF3pPa6sUfbzJPWBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDT2fLqFsonBupEdtKU1cApjJpWdXpxHRe9fnH87QAEvosJK6WoAtvYVcKfMFrvKzpJjdbo3A4CaVB7yug5z3eM",
  "key1": "5kPqDdMaxpJN9ccwqkpsAFLQYTyUAk7CBoXuRrBFRgK9AAwxkxewB4iagab4AF7aLEqYG7eNvFPjkkp8FMWxCWY2",
  "key2": "5mWdwvT1Uu31CsEoUPabioJJReL9Ukk9d1PekhTA83jEBZ4y7o2ZQdY147SNCEHjguFi9jA8p7yTH3Ehgunnpre8",
  "key3": "3W2jotCYJT8D9GUNW5pbuyy3yXuauonx4TXM6J6MSHjBuyX1HzxV6G8zXffUoRXKKanAEj2qadoQYz4emm87YE98",
  "key4": "5eZHuoJCup2DX6h8D4TpwVFD2eeQCLVoqcqw74D7GpYXeyKw7VXJ2fCHtXuXTZf3gBinJbBEzqQ24RabwCwcPLas",
  "key5": "4pFhG9gB615kqGaVeUb7gVbw7T4Jqb9sgkCv3pA9Tciu4FxsKBNmeUWhpNbXdf2ZZshuxsyFy9ai9HyBNdjadsJr",
  "key6": "3jofSXPEsaCYQ4iaqo3HEwifBJAygBmYKJkDUvkJULVSCbXQqDBj5xAWRnyHrX5pQiuhfcLmh911nye78n1vbtTz",
  "key7": "883travnvMy1AeujvhRFn5qv9SXdVt8rT3gA4S12tbEv51FHYW7da7Mejz3rDus1GQWbEiee45xYgzuyAtUF3Ur",
  "key8": "5tSgmd2uyVpCxxyGXg2TjRphyDYqE3FTLRqmTFr2EekLdBeeZwai6v5BJt4uFBrThaserhjdnN2tD5ChV39SyjNm",
  "key9": "3jP111axuD41EydypuzcuDAHytRWkF4c3SBn6a9HSh4guXSEnPZWZvYNRpG6Pn9oTq1QVynhWJKiUrdQFLPtnzVb",
  "key10": "52N2TSjEcABNEA543SCL5EtHDjkBju8gHK4MB8AW5QEo44iuTyrUt4erCB7hbjG4agkZJp7JmkgHe1AxscRobia",
  "key11": "4BiUQf21FDDcVrZrLVipcwNW7cnmkVrghMzCVCTrDCgc3VR2a9fuG8rhKNRhQawNZbUKQqFxfBdjFTs9UCgEuBmW",
  "key12": "Cguft7i17mSCWw8nFfjQ6NXjDGg1LSuEW82bYwehfdbq6seUP1Lve6jEPdppm3f5eQbccSQrYtjttaD2qcR33xe",
  "key13": "4znFPEYsUAafFxNjj8VQXgNVP6A7uEkfvXf8gtr8tdAybP7QzvhniqyJS8wrPUHSZUrLjGHsEoEw7nyvHu4YKvuN",
  "key14": "zpqKKQdyBCXELLsiLKhpqvF2vd4jjFeo4BDfGPRouredkv6L3a5b1dvehdZRo9zZB3EvwyET2cReCCaAVH1iP8c",
  "key15": "35gNu3HrRxtK9aEYuhZbYKWihqByf1fMD5bPS8NnndaodyVBgW18snARNAxjq1bTUVixJWaJpxj8nYDgdCP6HDoq",
  "key16": "4cBiL14bswGy92LVoS1xZTQpJCcKTFFEydDBamjqntbX5eB3MKQuc4Vr4wSrJBRhfCno2Nr5Yn2xdgUC7nbiX4wi",
  "key17": "4zQXjq4TqJYCfshMB6eFUQusCdDHDUt2PzpyEoSvyGcJPrFq5e1u7V4U3af594HD3knTVVp7nbCd9bUCKUonaEFf",
  "key18": "41WE53djb6uaLXvmnQ9YpJnRTbo13Q1DW1g9Lpq82NHMophNarnRZkHMVbm1AoBKVYC2qUPawK8YYwvk3hVUWYe3",
  "key19": "4eZ4gPVQfwyayuSBubqcbPcEHh7neiPUaqYc5Rb9VudELPd8ufZF4TNBJxNybiLA5DqewdoCvjyzzykmHrSDt1yd",
  "key20": "4hwXFgGQHbmceykjWDyy8FrzYJCp4dxMEXxRFeLv5SoYySuzjixRGAhEzszw1EwnfHyTgmtJZjZ27dFHAvfV4cR5",
  "key21": "3DPyci9mQAjcuN5JX4ggSDf5wYTrPvvn28nHTN5HvA6ZLbGQmBkbgwduUXPKby9kvoRqghHXP8HtmZvRqtpjBP21",
  "key22": "2RVoi4Rd2t28qC5dxoGgWGPq9aAFyKC9DYJibDDcV9HoxGFDE3m72t2DtvDzbqvyFEmLqLWq4HcUp1M8N4SnZF1D",
  "key23": "1Fv8Yy5ex4BuyS9N8wS7zsSPqFGrLyjSRoJipCVa9a26RWz3qvHPjn4yNAcZ5xanNtrhGTZZZGAciDJih2buros",
  "key24": "3wMdyLdKtFhLbBaNPhkBsSY5oVMWbi4xLeJQdXhVzR66sLBxzAaeK5E2g8M9iGtuX3DpgLaxWdWR76TrZXWhFkYS",
  "key25": "4iNva3qpq6W3XPnBveGUijgSSN3bsc7z6QYvJRPg2tPqVRJrCEgT8dYWCr8WLoxR3dCBqTC2MwjUUorfcYNyBu9N",
  "key26": "NatKndkrLXcAwABRAJ6GEVo6jMJVnkC2zx49CaH6n9W5YTv3gGWe7Ybdx9HyA3XHy1vZ4U18HsWPk6bNKjPMk7Q",
  "key27": "5TJrazJHSXFHTQooKjxp4FnwLT6baJEpGXMZ5E7tsZ8H6fsBApbNiWPKvEqH1m3c2QFrZAZo6xjkT7CruKqGWSNf",
  "key28": "21rKtig1FQWJ6NLm5C5bfTLafTXMfLABwpeQojkS81cxSFH51DiPtoUJb9CkXuzYZTsgp4TXFWPgbsv7MQVm9Q4A",
  "key29": "3eVezhgkuu6gXLz4LBWmBNtzhk3uyCJWQHVoC4awDNSs9iESUBWxKHgLUSNjcQgRTLDqfC5p1PepbE7ksjj9hsBe",
  "key30": "cnMWCGUoaKJE1HojEaAGm1D5q1JurZ3Kig4cC7Ytm3rPv2fErV6iHDtHRoW7w8oNR1FAayqqLJGHJjimmtYz8qA",
  "key31": "2fU5c2TTS9FNqPx8jD2NwLxKJ8kZsTiha6WQ9iuwLjzDFaY6C5jxzZgyWmLx4hf2x8vWMKfKeNuDfHq4Q8e8wZ46",
  "key32": "2j8BWdFojaymvMsQLDiLmKneKrAmryQCa1paCctHMHFjM65r2CXF2ef9tKCi6YRn9Jc44Js9GWZ5WuyPbKaNrj2u",
  "key33": "4khJHjL428YXZKeUdfpq5YKNXPUuogyqBUpJhK4F1MJPn1b8Qucyhsu37BuQYxKfDZzUe48cCejf6LgyMiFktj4z",
  "key34": "2iaE4bMaoGhhSGcZhvDEGaARG2mySgPrvpBTK7tciexxLZ6AAzJw54LJC8hfvDR8AzQJqfVdvJCWq3JKjjPJMMPw",
  "key35": "3AQDQFJZMiF7krM8LUAEnwgKZpjR9owcxE22KL6Bx3z8yVkL7mbBXAkYNJJ2RJ1u5K2JXNeMkdsZrq7tk6X9HBaE",
  "key36": "28MGyjp7r36k4jfzGxpZKrFhfDsvoLG8z3ZtEGKYCXNbaD9wLjcCpyv5qmVK9zovmTFGxvNYg4LjDrfTarwEYmEa"
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
