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
    "2yd6sVGeRtCwg5fNes6AqaBaYTXjJyvdDNhXhPRKcvFEcCAF25qrQkvpAkH7bktJEYc6eUUtME119dNBhaDKuHF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T87evQyqR5CAZcGrwJ9LsTk4VQ86TmcNh1k3F2jeKbPpBBSpvHaErt4Q7sk5fcfukeTZ5Sw9DBtdp9pHkejj3o",
  "key1": "2e9hH8nzMK9knGCQwJ7v5o28tqvJ9t1dgHZJcG32NBuXty77foeA8ahAFNteH9QCoNoDU8eC39qHgAVoEUBKBkqZ",
  "key2": "4qRh46jWUfCCfSU1EHYLxwZ55xGAGevb7GywfGUbToR4mbovbu7FxcnnaX64uJFWYzzGBB9YYLZ7Ho4D2KqRXtPX",
  "key3": "2rCYhz3Swo9KrjRzGAMWZjVMY1kToBBRudvhH3UrkZ8w8LkeNkiKnXLyJizCEL7pSoZGUkAXPEbpSso8zreYDNRD",
  "key4": "5QnNLX82NtdYezqXFvB21WCSyRAEgnfzWP3oPYHaawiRds9YgpaNWvUjDxf1fxt4DRZCZy2e5tqaeMnemPTdtVDc",
  "key5": "5voCzRSPXt1BVjyEg8PwJbmdeVa6xoEEyg8NMm8HXqKapT92Mnm3srh13R5N74LzXaNZjN5rXr78NPqqQ76UW5cW",
  "key6": "3jFQXqSToVgEEMkbUgywi6d4hucVCe5cqe9Mbr6sTq8jJ3HUHw4gccYBpM41mQqR6W9xRp9dzFzUc5985HwJ7vnn",
  "key7": "4VvBnhtXNviwUL9Nhu7ozCNmFTW9RL5tWBBCtu51XrP5HpMoT2Y5R4XicpmPwwkKosF384jzDcxAUaaccT3kgfxk",
  "key8": "55CqpvYqnp3dzqpXWLB79MQ7WzvkLWfV39c7yjZXubzKQjM29R5Zz5Lkvtx7cYQowqKmuvdNc2y73nRpwbkJEYEK",
  "key9": "41KH2MUq2uGiUKqzXJCmYC6Lu33QZw427SVcB3MqyKgX1PnvBc6knU9iJxpJxYJye15yFXUtmMMfjD6EaGjwXwT1",
  "key10": "2sVCb28Xv47ouhUK2EG13TL1m71FrZ55VWLNGmNvfVFDhRHkVkAaY8mqaPXVoGa3AW7Gu85PPvFxzoXEnTqgJFnc",
  "key11": "3SF9hSf1eUdXu7bSuoeH5Zzv6FBwSmKm5q5KWU27xifXS675iWzwWiGGDwj3gmxeYS2YCY6S4Sge4nWFp2KzE2cW",
  "key12": "kej7spgo1c9U4iQiPPJEx85y5ws75JnzKT6Y19AZKdXo6K1YXBGrYzSzL3XkyvjCNAuGQzEYXxiQfJhAQ1Jqqxu",
  "key13": "35KjWYkA2VJMeLmxASvymJWNZbRvgGZAvVoTNMCqc7TJLphwMyuaeZV8GPnRSK1ER8KfGLExjE9kE5HwPGAdw4qr",
  "key14": "RfE62ygnCdAnaVFKu8Z6RdKqq12AqRDUMjmioKApzBEGX9zaxRTJSkAWwvB3ievuTwZEVCZwn5y1sP9RdRvFoDT",
  "key15": "4HD7ZHJkgXaVzwQkDt413A9MnxFRQZz5yqPCkoShKAiSGAuf7PDefRGtUgwLnjBoFiPT3RKeQNNoSSpPK6FiGGQY",
  "key16": "3AMma1vbvojf8vhSmXqbHKF6R19aWMNdSRPpZK1jRUwDmaW4jVDiAjyiefV9Ti6AneZBFbB9KvW5tiJVVYLVfY8M",
  "key17": "5VatAwAJ9GnLDpEwghsTiTuoKeCMVAyK2brX2RbtY2rNjUQA59TSmfcJ6828rSAdAB4xA19ZxhjQZ5BUGabCGLLb",
  "key18": "5ikEjP3n2EEx5TX3UrTLT9qUPdVwp76Muvw1tfA5y8J3eg8tiEABLc6WE6hMdmL5PzC1pR6hmAWE1L1pCucmmMjk",
  "key19": "3D4n9wkNm2pL8Yz542oueSYD1Kxhd8RKEXhFKCScjs1jvxX947y9UFKFVpxFdztXeXZaX3b2dG3j62foSUFjF3zm",
  "key20": "sDAQuQXhyXKyEbenWaEyB6tvmb72Bufvzyj9bVUarD64RYUBXC5Prwpwq6xDSZefQtzddTqNF4kL2bZW5F4e77j",
  "key21": "3vaTU4huaGb1UAtYqatZZGcoJAjRS47E2PfskT79M8xTHjK7LRfJE72sMau5oa1ebLcEGPb7xs3FaP537Wez2gL",
  "key22": "zsJvoMYCUKGV6qva8oNix9NUAAbLuP1huEBY2RjXDFqfqHzJuq3XYCH8eSyCd74vt93wy9jQuyJ6y2KR8PmTnHU",
  "key23": "3JxWsKVn5AuYSVaTK8TZSFXabzYH6DejomhfqoU9M5enJAGPzYVKdp3thy5vxHddFf3aRCqn8uSziRwnY22KwKnF",
  "key24": "3NDeUpoJxtMcSDVXxVEQVZTCKKGcm7sf9SDyWBoaDfnL5CnYjJD1HAvKmTD1D1QnP3oeYS5NjUpSZuEaSXkWDUV9",
  "key25": "JQxG8WqzpUmxcRE1Fado2LzSnyMWGSJre25QBjYLXT6Tq4LgfyeTFHNF5VwcMwm2U9QwrLpANWkuRqAfH8UYAay",
  "key26": "58TxuNp3rvoD1rqJHVzfXVTF8umHkHHKwTfmYfghUzWh4UX1gEuRkc4Jh3yihBur76oQ3ctQayK5DCWJKbMSN5KX",
  "key27": "4PUgc14qxg9TXB7qURnyWuVCf464GxfvKNeq47QjussaLvAkb7JfZAWP94LePZRBiH2jWbntjs9GDMjz8jj4qLTK",
  "key28": "5D7uNdFZGWRTm7RH5H1hcH4gj6brWZvoyLqa7N9u1frP7qGeMzMkKHxTdtjwHLCNt1CuKtmvjpDikf15Pmckx1hq",
  "key29": "4nZ9m1P1dWEdWbn8oXDvnNATo8qgSNrHiHVbPUEnLZ3yiiQ5TVZuNNae5AB2PxMdZ7q6N1fqGvZvhxBWZAf2kCBt",
  "key30": "5bVQptErXg1HdAXKwEEjYQcVCRAABiBfEKwsQgmjVb7XGoTv5jzvv8oJWnF8sZsWeeZeGEhAJB9YXCQVPdMou2AZ",
  "key31": "2FMD5nAYvPBdqq2JWmTMUm68StVNMfC7BtWLaQ8uZ3g9J1wasFCGEz5dE4X2drbr65WnwWyArjo3AnBmnfAQNrs3",
  "key32": "3xQNDPMzhXJd9vr5qt9b7Sf5AQpmcCFzfuKYECEsPxuJoT7nj4A7hmjKr4tZhz8d48Nq5hJjik9UKZZzGh8jhm1u",
  "key33": "5tsmg6DVvssaEY5eRBy4baGBqtQf4C5fkLut32BpdEsSrUMn4BvY5Ra8Jz5DN9GZuQAv8ABbuXdigoZG2XfweJFX",
  "key34": "5aMm7A8tPdBF3D8RtHdpRKUhVzRGRbmqirmeXV1rTNH8aowSUbrhBy2svxEQFBxMCtDPsZhVTEAg5Sht6kSVdNh1",
  "key35": "5Fd5Z3e7Gzh4tQ4KSAesC2KwKjhFGNwGVsqCzGcWwYu7xCdCnRgCU8LHhLvXwBP33zkBPpia6wTpkQwGs5Hb7KYz",
  "key36": "2b3MfL8d7gbymGLYUZobbT9d4kkiRoiK8Qrm6i9ZRqqYojGz2BaqMG21ATpfDG7wj1kQcSVa2wZgVW6b4DoKtaNR",
  "key37": "2XrcLmmXtuhRKAAmr3n5qUeWs5FQap9dNnTfyzB3BjmucZ6weYGiGV8GMPsBtwgiZATUJwRkJMTAgydq6YWF98f6"
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
