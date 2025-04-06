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
    "61ML7sNf6Wa1xJCVe4nu3RXgWjwfPpAx9UAuLseRiDmUoMEofmaQ2h2m3GhFpqDPKN71n9gj2Q9LrPy9aTdHXuxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38H6tocURoAGjYm5bWn86rC2juuK7mZYpPUTd9Zm7Zut5bVThdXcSb8DxWwUaZMRoT8ZvD1p3piBvD2kPkz5VmGs",
  "key1": "3ekDJDcAa7mZoUqFKYbHjxo89XzffScytPu2FJXk84zhuSSBSHCAsZiS1yRgD8TUjBmpW9jDQ41EgndK61X7QsEz",
  "key2": "2gjXY6on6DWoYi4FxP2i2XDT5RaE3bLM69B3FrxKTCf1Ps26EtTVqYZQy6wRhraefc23h61drznjSMxipGekChgQ",
  "key3": "4ja255uFuCsg2dzS7MykhX677vcrMkYfAjcKPs9SZ3FhXCsTLAYRnkXsG23wSGNg7C8F3jBJTNpRnJxAhiRKPhog",
  "key4": "3iDME37WkW9msDdn7Zk81kkQhMQBxm5ofWThaBq9Y5VbsydEayh1Y1ejuHavGWwJitArXtz4ZRqGcFfoiTMstFZv",
  "key5": "MQudvgAK18VPF9KyZFnS2Rsv893HjypYnRMHSCCbJZbKaMGqWhWMPwvjSdsrKovmD5xRrvXGHCWEuiTTrmx9xZL",
  "key6": "4cM7Rw15JBR4HKvjt1ZAwHviSKou7STp45rfend2SxijcDF1kPacSZRg1JqJGPgqtUQwDTbaK1xxyLcgBUjJqrm6",
  "key7": "42HyLsBzbEYui8vphmq12xxu1Rhu95zUi3PEM2NjVf8KQ63Ag67wU4Utz4RyBcHbUpnYoyanQf7LopkLKMbvV7o4",
  "key8": "5DuZ1TWvQ3N7DxVMNdzNVYJChuLeqoFw2yPzXzNZ7BGDhaKZrJBpYBLs2vT9gzLxhaooVkgjFfBtJNrgkWKVdM6a",
  "key9": "52sG8D65E6f91WLQdVr8tctyyp4ZejeY74CtRhsA5Dcs4v2u5Q4ENYwro8BbfbadcankCarH5BBYjf1NBEbp7mVN",
  "key10": "5rhtbuwDKLhWmwb3uDpwxqs5oEAhj3LYSRTA9XS1mBcsUnNW4RTaksaWQjvP6LqP17i4AJcCEp814XjaRCecCwRq",
  "key11": "5ZQCzZh9XTqsQw7YZAfhBdD6UBD1kyeLhB3mwhpTjDLjxEwuD1opX7Zn4K9QD1tuyd7AuEGyYgQETa1NRXAqZVwJ",
  "key12": "4TRdyTUYX74g34Ca6xjETqRFiBhJu2wNFTNdJSeSJYshsoQEgc1ijCPvLVec6zEMbgMmbr9uGGhLisVvPAtABqB8",
  "key13": "4BauvqvE9ugM8h5qkPfiYSaW1J4RtriBnDudWibMhUrMoVJJb71cg84QM3Pw6hsAUr961iDFi74AdtWzbwfLxKaD",
  "key14": "AnshJ8fft5XSoYZAMfGwMh4mcsK3DMDpxPqKDK31UDJ9C5FTNa8TkGX21ThyzBewj5UkHoxE1y5tBQJwzNAgxiv",
  "key15": "2G1yQ2QPun1R6eciGGD8JBTENy9T7Su78GGV2Z1v2VNoBVNMXgx9hRSPySsniKQdnpR2yUGfeDdyHzW7tK8uCocJ",
  "key16": "4EsJW89MgUvZvhWY557w3XV1U1PjXQanAD2wKPLyB6aYJSizwhKibRdJFF25MNHctG95uP9oMB5hX6QnzQHS2HwM",
  "key17": "3yS52yv4PwALq9WRCZ7YzT8m2s6Fc8yoNbuq9wzwznJb3LsveaHDptNrCkLc2j2M2GxCKcoUWSF5TTaHkLa6pFMX",
  "key18": "5b59sBFf5LgXB11hubvrU1RVtuqzHsjTDGKkNeopVTZJApwLJYDBoNkVYbNKZUoLoKtm2a8uYrksJRUMYq9SaNxg",
  "key19": "hDi3eMqkqTKZq2tSoPXep2veiak7s33d8de4eY5VSYG1399bmvuBsNt6egsoGFHXuFm4gCU92QrKnftgvW3Fajs",
  "key20": "4YLzqVDuDyVEPxmnmctFJQ6oBAxqeiLTmodhzhs4qZxX5nNenTT961961uqnySJTEoCrBuPMHimAYKDL3zLqUpWb",
  "key21": "ZiGPLXdWxsKkV49MokRknhY8gorKDJayz77NKRSJRWbBMwJh11tcbay9xYXJFGScmu1ZHifQtJgQJdu34VgJyBr",
  "key22": "33UEYsqk3d3JkSNMbezyokRnesB6mh6gn7J8FTQWKzmKbRJYyvEpbPGAjDFjB4UutMhLQDvtHPntKcF2BiXuYVDD",
  "key23": "dRwkZYcxGzCugQ4EmV4FpVMwLtQnq1q6LirRHBiygQfjXZcPev3VUD1tiCr3WPm9rXxYitzFs7sBGpmAs7jjiKr",
  "key24": "5BhMyHT1igrpapWc45qrYpknPaxMjhroNzavD9tcZd2sFdfFyLiNocUman8atzYybmRMYcnE3kMJfK6ZnthJMqpY",
  "key25": "4MNyHS1HtTT2LjLmDCe59deD88FjjNMqzJdF4UkFLuZNMcxqDpAkE7cZBZvP4boPFZG8oyNbEUbyEsM89bJfsoKi",
  "key26": "263ijzY2na1bcNzrKzLSxWD5EJrCTqNUxToVKwxxtomJS4Kij3RtUksxUF8c2zJrN3Xiraoi9DRASoJ9chbeKdZp",
  "key27": "3FVQhvfhVEooEmu8Rft8yokuC2CeUktziQvZZwpW5yRQtTty3Ldf3HmCTBigqhsLc8LzxaYSTQnwfCWP1RXNpbUo",
  "key28": "5YgSRPeAXRTHUXz4hrkuJ1pD2GNzPxHwPKzRAHgxzjXPSG8VE5HfkoZwKGGirGd3HfnP3jAEBg5LFA48vGGqRVo2",
  "key29": "2xJzGPz1byec3HoEyWmzauqJCzHK93VL9hZ1tBBVRWiPY61TKzRYbApnTY4gQF8UvHp8GgmzRaMKch5sNe5YQ1q6",
  "key30": "5T7r9ioFwkgSKCo8oQ4AVHoSbgMjBJhREQa2MD1y83wcQCisvB681y7YSjJmzcPqFHMAXDV1gQFZXUD7is4zRQCU",
  "key31": "54DQ4cymgeruD7u2ckEsS5NPuWA69JdVTtCcqn3tGQeXmEqJrBRgBN2NEhx5c1zSSn3NTjjcr6yp55rPPPrLrmuQ",
  "key32": "5UE8Z9MxxvQRxrhM9s1guFC62QtsHkJJWazPCgrgsYZuaAD6Sfr8VL4KkpNi597AZFnUkCG6b5QrmKajvuhdEPpJ",
  "key33": "R4wu72aB7gfVGHSo9HgyKH7Jj3GXAm8TZnkMvNAWaXM97ZqWnuYMqtyxcaf4rpWK37ZeftuUMfXoN78ucvDzgK9",
  "key34": "37oGcBfFAkJAw7M87ArnqNZwPV444T7PVFoW7g4gfc3TTwFw3Nn9npXDSR9R3WPNUA5TRJ1gpyFMAc1BeyccRHnq",
  "key35": "5LfYjgk5m92EVK1m3mTd6tjZTJjfeBpY6wk5vJL1gBVcm8xGCD4chnDxpGVujAqVASW2kBdyisThpC5yrqxD11Jh"
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
