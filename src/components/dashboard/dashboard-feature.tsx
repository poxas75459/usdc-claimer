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
    "2rauf3KbC6467J9d9UFm3tPZRAuk2mxiBEAW7U1Y6VtbHFoXpy2CrRRvDfufU7TvP7J1GKxd9LJ5XZUQXX33vBy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdynuKidNQTpT3rvxMVDqo9f8RhYja5UL48kLj4uK2uUp7PSVdVTjktMAgmx79qhz7HytD2gSXgHTbZdtJSuieX",
  "key1": "GAxTyLivn99VvD61Qb3AFftWKcMchujo3JPBk7mtN3MzYB8N4KJiGMs5j8hkbZSY7ZiJBgMHY6hcSBNdhbM3LcJ",
  "key2": "4E7np6r4czmzr1ubU5X4GC3wFXZQXJt9jfFZnhcavdSLfbNqg9GfLVDmWcLuJLKrkhNAfiLzyTq2kHeaPsWBG1ye",
  "key3": "3AzZ9tBRddpnN4eyv9P5Huxp4beqFZ8GFuTigCkXThFz8Yj6DYReZRiMGxmnoNUpSJDxojP4fCnH9L3FvRdbpXSw",
  "key4": "Ejyx1aJBsm8PytEughjShSzJXwQsq8cQayD813VKxXCvxhESVjNeRQatMa1cLxPFv8ZQN3ZKGKe9GhboK2bfLVV",
  "key5": "epyYagcpRs8HjehTcFQCnCYQC64vv2fCGxLLqnaynNpzVA5TPtcydQ2H9wTd4GVSMcHzHKwF4FTPic8QhzPMxqL",
  "key6": "3yJE1FfRnFzUcrBvVH9huSHfgE3gbsPdh5WXDDhWofQheU6bwR1sbatGyrkqkQNqRF6JerP6d77g3CPE3eXY1zWv",
  "key7": "3hZm4xi4fXXnQQaRjTzKdaYaaiCgX6nk6JwqxfJJxxK4uo5x5CfN2t6C55HkuVgir3hoS2X256YudSTxecfo7Z28",
  "key8": "moyTMgpxu42JMsdt1VfKTeyN1g2B5vV3EinB3c3tSSpBbYS2JDTKpRHF85As9mcJtFvkBCA8QZfi9s44gMBd6cu",
  "key9": "4szCrvc8mJcaUAaz3AiTdfseJZNCMen9iqFes7QdU73kBjxcE4BcgSdwLZCUH4Tco4agJ7BKPbaQE29YVwUwwQiz",
  "key10": "54Wny5oqH3QMsoynU48RQUBpHstDpsYzaD65uFoQdgweAdjZhSDjDRhzUvXvrgvyBE92Ja2u43jkGbkphA3U9Gk",
  "key11": "3qm2AQ3eckzJui5E5j1n27mZ4y9wYSEBGAyBmASLD8ooSP4ABP9kBLP3nhi1gPVxpyBCvdsMLHZAKD56KpyGNHaq",
  "key12": "4ostqwYb8JPJy23BBoxdywogzsbAUMnj1o3qpkU4JQdqS18Ajum2C2vw3Jw9GFEtJwEuEstdGHbed8DNexBwKLBs",
  "key13": "4BWqD4MNS2RYpPBSVFPgWY46LacN1baijEWzGbMLKvKyT4G8i791B5Z6543cP4QS8vUQiKBNcYucJRxGuZbmDgE6",
  "key14": "44r66KoHHv68bqvSj8bEXaJh2GVhEUj2zf1DnfDeRC7muUxsK1DEzeEwrUmgu3kE6An7PzHP4SSQp9EnkTVcMZLo",
  "key15": "21C2EX1Y8fWBko374b3ci2igBGWdW6TpvQNDKFgvZ5Ecyx7sxCXJxrZMPPy7utwU8WoodFyH26zTvJkSJYYBtqVP",
  "key16": "3QkiMTYMDjdkpdxfac63cnsZV6kSCwYQwqvSpqaC5t8D5bMZvGYVVq2Hpx5eaLbmg62CeGewmxdxTasYDUcrMTLB",
  "key17": "3cjrg3iJuKPoNBnNEE5MEKHeS2fUrSYPJALtbpqLD5ts1VypeMLj1WS7KLj8tTDoWdeEATdn7cukKbmo5UFmuwZA",
  "key18": "5H1VqSrYYixrKpRZvZzTTQUv997HfMJeKZdHcBLifmyqNPyWVfgayxwYeKi8CMdxWAR643MidzKffvsm3iPFuTwV",
  "key19": "58uig2VVc7ZZdGKt77qxXeQwCnYFd9PiEN7v5XDAh9zV7JwLYnPEbsWuBzEYcf6Wi6EKPLEbit8wTHtEx5X7y9dZ",
  "key20": "4LZoZDSLBjM9fUAp32QoCJRRCjJ6WPN3o6VJq81cEsU6AQ7zC2wWq3DVc1SQTQ6qyKUpoFiZKTjAJkdz1anro6RR",
  "key21": "4ewbDAgVfCtq1BZAoHSAZCtUZHDmgHYLVZ7WGGvWFAMJkHoFaJsxUWAqyrLoEisQCu8hfAPRWA8KNmaUwnfPcpBR",
  "key22": "3pJhtNFFpBri2c6uLdT1LyX5FoiCJWthwBdxe1ve8sVDg4ZeEaEB6UJxSakuyov98zXTWvJ3k64P78Um4BFe6k7H",
  "key23": "BhcxESRA2vYB3iHr26jtDyUcBs9Re51ytgARcXNKvkCPpoDsEH3V8tLcv1BsuddQGczpjtquELuGJmBiCcW1cCg",
  "key24": "5p7YW5JMQJYtGQoqnxQJHP7yarMyXc44pEDyFBW6VhUsyxVC7rdqLxMyhJDRFsYTjNY3hs4y75VgToJGfvY8oEe2",
  "key25": "47DKpeLVx8fNeJNEWADRtzPodt198KiibhqbJCqF7emJgCq3hpijvmnPC2YMBW5FS99DMGzsn3aaY58DAiS7nNDn",
  "key26": "51FmNQzBXaRFSR9GbeKVUT4jPn8AkyvdXvMyaH5PuUJQ2aDtsC7TrWto9FrxmZdcrKPCtCbaRTaFKE6mudSQpePa",
  "key27": "V6ngSMPw3GMKtey1eHYToVawXUjY5hJBkpq2wxbrYXgD9DDKGFbZY3RawNNQ759GJSAp8wcLumVicYo8biy3sub",
  "key28": "3Hj8aK259iaoRUd3uvxAdYLXSNKGRpqCZiJamW18GHGRuQ4hh2Ffu5PM91VTJ54EXhTf1HN97zgZtyfstyR9XLR7",
  "key29": "4VJrVBjGZoy16iz8mCcPVQoaHwAZ9MUbxD8GCVLTEvtRcjWsNgE6hRKGpB88zJ1EAJwnBHZTXjVrqqDoThj36jeb",
  "key30": "2oxAcCU6o8Za1DQe8LCtVkHaCoPfYCDhsNtac7U9ensPNtaEDkFqW3r6ygdnyQuZekqnNRVEVxswZdx8R9SSGVo9",
  "key31": "5d3V2dzKiUC4AzxDEiqSAEZdvsY6s1pjSv2kzqXLPcQbXmrVSMkh3oCyGsWG6WgkAPYZssYKmNvdFAK7ddQwMMBN",
  "key32": "3xr4YxVAWgABnAMwLyKQgrdqrLPKP2NGTMRfKZ89WmGfW54Y46boE2PDbJHqcpyMkXCbruCn3MumVF7etyF1B4Jr",
  "key33": "4uLiS9YEwwMUBwhhjndcKYdCj3HC5EvN6rx2qWD7KNGHiejNXE6m5VDMcq2StXWbyJ5d7KL2EkZKWh5uRYn2sRo7",
  "key34": "41ocGMXxmionb8QP82zPpgLjmCTLBpDksUpe5qh1eFMFmf8FiysFv6U6rXKTuRZPSFcJFRRaVzwNeE96QKA6YTXh",
  "key35": "2P3TjHHfp4cPHmANRg82c5GzZrZS8JckXkGrHUQdBRE59dKAgpN9dSGmFMNGCfD5m3t2DeaGo5GUvB5sfUcUw6vE",
  "key36": "d6d59XQUKL2JSyiLf81dibpYZszv9TTPaK9LiJsAvwAGF1Dfax1XixVKPF2cTSRQFHHDh4J8vpdJheT1Bmx6MmP",
  "key37": "54X2q6mxTbH2Ux345gbmXuzhJ5ZnvpQ5nwxYpLzGGEb4naatSgBAWAHzCT9uurAVN1inZpj39M3hfGUxTsPPjYQw",
  "key38": "3eoLkZJpFBCxnNrKqT5EzJ5rQGVNCKgtdfe6p72ZV9ZUJomSu8SQepMfqK3mex9uqtBKDsaWbTCRSkT4Ej6bKJpZ"
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
