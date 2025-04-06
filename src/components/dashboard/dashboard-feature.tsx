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
    "4ipgcq8QFAi2NTWoebceHirCx2FgSCojDiXEaU6JtMTodzVWXrQsoy2hpt3eMbM9NJxAi9ZDYyjAR7ZKyWXuQNQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYvqNAVPUJArbkHtsd2LAuykrxZ7B1uKfE4m4qoosTJCSctVDbefWJf5uYXhuz9TEYko1e1Rj3bMxtUFTAHKsJP",
  "key1": "3WoeMSH1VpUHGcJ7gu4sQUX8YpkVpRkSN6a7KhRj2hW9j3nYfSorvSpjFeKcg8KmhyrJLX2Rnp8eCE5zCxbAgmVT",
  "key2": "5Wxz7rNxuQ6F8HUGmacpbcis5tK8MgG9kWew3aDYNkrSLezyyKdCfwzNdQKAhQNENJL4faWxvYevRiAe2jjfLN92",
  "key3": "2LpeYRBQQcTV9zCzA9hfv8YBipZDYkMf5GWDGS1tioyacpchrofb3Hi9vcL2hP9Xvg3qiX5XC8RgEoMAaHyjfQMA",
  "key4": "pqLJqVBc4geTxpMaS4hbBfM5rmX1PpkwwpgkMVZuuBgPTQ8GLt4o6QzdrDzVGnZ9pJWHbZsEGnTbbYpcWiE3ULd",
  "key5": "5F7vbLUSyYWDyXtKxPEsZbrRuZNywn9p3LPh7BPh9k2yhLUoDYVuEJAPSkPQdho83qZesKHAUAHH1ockokSndqsp",
  "key6": "3sTuRHzWEq3G6bBEuvKeDZN4YkSekNZfWT4EFR3LTHzC4r3kHJkkwJJvGM9gCtcs3xuMERun8DQsfGVh7JESzssy",
  "key7": "ZVQSj5yXLcXPNGB942vho2uSPDcR5fyEqji6dWGVVyYoSGiDjLvoAL7PRWUDtA9S3iYHXJdDEa4YTkrC5AE2djN",
  "key8": "23nTqy7U1vEqPrSuk3vLM1hK4VVUGXJnf9HHRAgKFxXq8rupNG63oCcLKnaBPZVsRpnmJrNw3PJfMw7SHGkaFsGY",
  "key9": "4wRMXTjeuz9fY8FRmhxfQph2tJDeyGVK2D2LxgdktA5u2rzR6NFk71p23HSjLXPdV8psgz4mt5wXBWSEBcn4penM",
  "key10": "54qpcefjc3Wq1m3Ag7t89BPELAjvRjJPEo5mc6e91JoaJtBbtdzWJckAx8Fe7eE2HJXKWwbgyZ99GpjViAVNs19A",
  "key11": "3UYdjLH6Zyu2tdsjXJYsHebhtQrhAiyN1k4jNffKAncm1fY8RkPjyk3vPTLbLVA2Npext8vdaujdKndwSBdYbaq",
  "key12": "47RPBcLHfQvabt4Yw1gyvejKtoVbqLXun8SUpoFL32zKunucSLcVKgmsJLZf3NKnyi9Ywdi9ENGSuGkSSDCeRUQF",
  "key13": "5Q8RYhwewX5d67zKskS86d3GkxwTkVYXAeXEBEAV6XbnGp8TiTm6hHj84o3fB2tJCWjwmyJJB4vodHxRzip18vT8",
  "key14": "5W8BUYuhNsNpVU7r7gDTHoy6hexfL7xsSR6QJqXVcs311M7qAnPUPeyHiUFK6mtSdHDt9kLttvkF1JhviTRo61uo",
  "key15": "25Bmr7Qu8CW4mK5LmdA2SxEgsLosmiuANDN7Q46dUWSLB6vzMbDC32W1moxCVsg6rS6bJwFmDTMaHKVpYjCiBYDE",
  "key16": "4N9TS2f6bZk3Ls1wytTj38UEiEbfJXpghKtHsMpu61xhk52vxkFRFA4MVWEae42AZLWoMXj3jQEyJFALRx8czXgD",
  "key17": "2ApKoR8iX7AMFAW295Pxkhq2FLfwW89H2o8xjeSg5kVMyTJUAygrCEhtGhVhLxo8yEUyJuGZR7QxNvKS1QwjsZfZ",
  "key18": "3oh731AyDuZQAgJGAYgsBdyPiXoazXnpzefWqP5iHozuG8QrRa23Da6hWbLVrbpYugLzCUgpyUfnjF91g3GCnEVv",
  "key19": "4qmsykgvhdAbb8z3W2nd5ZaKozqWEZ2nbwbREBWECDVKikbS167VkvzKNUjKSnYyXsoRXagBnZUKjbqaxZe1H1kw",
  "key20": "2GNvJn2uDzY2tuy9szdwjxTvnHeUkpdNF882WyviRGi1KxoQz7VyNgX3ppriEK9QPc7P3iziG4S9pu4x6WebkbmW",
  "key21": "U39W5NVxfauqwgUfdUhYkJrwcnhTfFNHQ1GGhCz2s1LNTyvb6WGmWQGtcmP9kmbS4HWZ5EV4Nev8C6m2XXZFYE8",
  "key22": "wQrvEWmxdPVREbi16dfiKvBcXwvm7bSLFbr7XLwTaAgcUFTzQuTKSgoNzKdpmSRbv4HzNcwFPxN9hvhFDLfGofZ",
  "key23": "ztWrsgqiZfnckVxBA5zWd82TY9cvgSaCCnbuVYmwoCQzPpVj3gTUcLMSdaU8xjqhAKoYn7zpQKAKv3o4zyAetxr",
  "key24": "5UbxkGemLYkEZrvibYRpbySiJ5PicRf56UNT77XTxvfL3c9ofjZ4vupAqDsDiQmotK5dGw2Uph9jiXrBKcR2wKDK",
  "key25": "2yDUgQLd7pHFkWLuPVpHc79XEQVssmvp6Yyp2kvekdWFFwUB4CQzYkYB48uYTArDN8v7b5n5wZ2MuEH4zJmwb88N",
  "key26": "nvMMVQrk6FwmSSiV9rhXcZFFmMvA7Jn9s3T9epF1KzefLCvoLWwAQLzQVqZF8S7XmxMysBLTLCZoHpHgzZ8KQQL",
  "key27": "4KDE4xk9eFZqQMfzFLVygWh1brgsLq2tognrogBr78FBSLs3cNyK434SVPjzX9WeUxJm2NsaTcquH9T5623Ht9uE",
  "key28": "4gq4Kje8ygeu6QoAwU5YpVPnR84bXD4T2JHz1uANKTyQewHyY8hEtEWh2F53fvozAFewx469uSZ6PwutX1TFxznz",
  "key29": "52wQwpSZcbF1fSaHPJMjurhHNzJh6rYzsbidRhr1cW6WMNqYZEJFXi1Y1H5k5WQbxUPsw9qeMARjAkorPsz6VFWp",
  "key30": "2nvcLuY8B5Q6KPcx4M3xpo6cmb7tW91641u16cW78zSESk5MrbJxxvjsVXWyisD7hSnJC8J8v2Vo9fvAGF7kjxPU",
  "key31": "3Z4a1kMWWBqbLrjT9gEYcK2pPTXJAG2QCSFYYJmbcv7iSodgmFd9Uk99JnjreTREYSDwWDd7Xu26ykMPnsH9rYZ2",
  "key32": "FfwYZESoz9arZh8TXgVFc6u6QnypC5XMbw2YD4cNmkB1ijyWexaEovehYovEMnzyZcRuSA5YnYCcTgN7yu3p1JW",
  "key33": "3Ya8EiFrLfiWqAtk9CsAk44xNpbVuM7MysUUC4Xy6jBUmB4GphC19Ps3wyQHPdtFUe6rhmAc1xEM4wQj5X99pKpy",
  "key34": "G5pvTpw8wK5QgsSxgihsHD2BZmUf5NBxefVu8hzYrg46EscJwqHbfQAGXpqacfL3bozhtNuCVVzLMCzeZojmiqn",
  "key35": "3LoZzDaMVDZyPmGYoMGP56MLUUJBQPs8egamVzuJ9AQbJ3gXDRWtBoiePP9dgg36er2fwQ5hGXFVyvuz69toNnH3",
  "key36": "3aznCNLKVQPGW2QMBrRHN7LpxiGNKyhJAiLj5qc96mqeFbDKP7Exun93Kf3Cpb7trDVfK6X236uDoRKm6Zo2vK5r",
  "key37": "5tbTTEmvu4Bbp8fNetZPYv2nSjka11UP4oUs7VNZdb8Tqi5nDQnbD1jSFiqYDL2ymwL4223G6wKsKT2BzZ4UMBmC",
  "key38": "5vMsgW9Hr654E5pyw8rQWMZVJjyW43dtxLkf22EBmoPrXaGpqyQ8xzC1jrZ5oZeq3Mm9Z5A2Bj13JRXTGVZT1vMk",
  "key39": "g8P7LQjxMEoBRwPjzZNbb8vf69EquhaiaQQJdJY8fjbhuizasgGhJE7neKHfVJwAF99rsqs82Qxp7PcgUruaDxf",
  "key40": "3S8ASLF6zSoNhfNamS32nuaqvT8Ufcifav9jejwYRPEogZUfGAoGgp2xg2r3KzrixUVGGFwo9uUGGmzgvN3GPiJm",
  "key41": "3c4FY8JGwKrPGNMpKaL73imU84MD7Bxbo22Ud75zjgk6muSSZEzcC7Q8ejrYk6GHuNcbvDtotyk15wPELn8eVj2Z"
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
