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
    "5L9pNPvyYysc9reCsjhVqZHq5G9EMN1hPiLZ6FzYHYoWiuoWStEUHg1w17XW3Rut5GMN2tMAXm7weMHe48WSYv4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e69tgLoAeBQ4m29FhBQRUa2htigtmUnC8uQJGYe5KFkt3iVu6XA6v6YgskGt8zjjQxnyQ3JUoDMdeeZ78ffvbEB",
  "key1": "6HZqAEvjgcS96knmNrP9evdT3NNHfR11cK4MQCPqqu8nqYYr8M8oVdgbWoN3HX2nfXA2uGivrEQMqgVG4rsgXsE",
  "key2": "4eA4jnEQxa2ife6DdHtswYTwVPgxyeYkYKPrUVPLezMdj9BfhHhV6TkXPFbeYhYjefCpbqKTukAtTdxXhMrquPNu",
  "key3": "3GhK1VKojXuPJ4vE1CEj9WEQCA1ijVffcxoErJMMZGeuXGzpynPRj8iKUVuPtbiWM5T2xzSaddH11Vqkyc5F5E1m",
  "key4": "3LV6ShfkPnuNhNqX5pTm7Pg5ri3WAcBd3qHrHjhNnN2Cshc141QTMtiREaFBJpcexRXnsY8yb1Bw6Bcfb3Hut1PM",
  "key5": "2xK5gf3DGx9r3SA8ECS3R8D4unTnK9Wq2jDzkSDy6mQDuJXKPZvomijewY5gfCi11MZF1fWdN13rcTwFw3uqovMb",
  "key6": "4L4F3B5Du95SBgFLA2ZLedGr7PjfLYVBRM2ZtmuRakbi4u86zpv9sywVPKgQKddkUnWW5z9m2U76b1iBebeaZVHU",
  "key7": "5BRUwavtuMgyFkPDVdNbDcLjt5RMcwrAQwfiGcbrY3cjpHzHeViqGkjHaMGFpPrGH2Uqs7fv7nnY97Yoa5FZYzKt",
  "key8": "3oEd9swejrAVxLk8KZDxD9SzHxRuqrAqta15sQAyLWMvFjR7RYhogKMrDeRpEiXtnsq93yGPGy9pwVzcNphA5biH",
  "key9": "2pkpkYWGNU7qGr3BU1DYLYXHNgj34Qt2SYcBxE8A5PQtxvazv8xWeyxDHsUm47VyR22fXMGDc71efzGTSddZkhe2",
  "key10": "63KhXCMZ5bEKuWuNs1SqSjYydWhzkj5P9uLAqQGbkJzGaSDXroV5CCBuhU5frdAfLbY5nEKArUrtfyywXHFz5teb",
  "key11": "5guayqvMD9bnnye13cidAF6JYnJJ4TicxA4Y2tATfeZYefDNXSwSmBtDZ3GSuRU32URfPCqonY4sqwwQjYvJriSD",
  "key12": "2FuAC3J75MifgYwGHTPLmVrC49VV5yxBgK2KXz9UDEBDRGquPcRjkRBH2Rej8pY6MMZ6qDHh9bMYLXr8jPrwEMuF",
  "key13": "52pwQNJJJgRFP84bz2ArePz8xtPNKh62axeYkDJS6WHtvsUQYYxLLopeMApn7aiLe2ZRPNJmR2dhh3WQCSwcwUHX",
  "key14": "5YijY66vrFH53BVLzK2CZ9bGY79BCh4JuHoAioWdtxEe5WGXUE8E1S83hb5uq2Uz7VHt8MSHcvYtTqFTRdPiPJYt",
  "key15": "3qPEhMgNmRiNQuFtEgdNqBt6Mnr2WvxY2kPb4DyTYbkqfcJjRRQTN75hz16WFvAeeqrxhJVqSPVL4As5cYbpH6o4",
  "key16": "jew3Hw3TnKdSJWZ5nXmdcMpK453XBrjHpLRUjFRHVAEkbYh7SekU569AzdGpicZ86Ed9HQ4G7Sj9EzsG5fWvM9D",
  "key17": "37NpEYQEnP8FkPGA9k3xt2y5Rm1S63WmXcWG8MsjjYzt4dAYv8pHxKP9cWeWvozgv2LK8Nbb88VriM2HobhzHPLS",
  "key18": "VGeD2w1Qh3wjVWn1nwBe5FU9K7voR4YL7WVJoVt8a8B1VcUFLjaDaBNgpukWUC7F1DxcFs63R7Mhc24fhPLJfp1",
  "key19": "5zmh3Xu6HnVx8Sitzq5YJVxTXJGwwaSKMgkEchqUoNMsA8VryVy2xJV9nMpHfiUxGMEDhHjcC1k21s7SC6jm72Zx",
  "key20": "3yURugYnKavnYeiNFENDEojps8FCkfrCB1ruZH1nFU2QQJqdrCko4xbnGy5oux63tPYLTwuGh3Fd3KjvqH16FVH7",
  "key21": "3jE49R2iozQQxs676hCK9SSvzwWnjJPhkWTXYtPeqsAefSH12Vnbg4rfwSCyE5G3vYW1dDTCP6QceYwYjMso8vYE",
  "key22": "3EWTvXE4EeEuuSLqLjGf6YCM7jTLTsnzpVfyk5ZQQigNjtxG5pDhYQavyjXry3p8va1mCg1sfCSmCHr24N2aJ8T6",
  "key23": "5y1p4JhFS2GPMVoAmjB9hebr63C5HzhiHQQTR6KfenZ46wFKcyAM9C77K9KNBVJVH8raFMNETLonhom2NyMtX4o9",
  "key24": "35N1aEoSrQfPmugMbhcHTZTCfCqoqnH4QqD8tmLer4hENyXnQMYtVUS1L5TKpiJjX4nkwsGuvoLCx74jq2zLvFkr",
  "key25": "4YTPCGRjYBnZ2r1WMF49wWYdBcLu6crB2Gan4ewSKHPebRCKTd4xcWLxmm3tB5UPAuV8qEUZvnEBAfNCYf8yWgVc",
  "key26": "4zsjcTziyknNf6uTwQtaG5gShEjQoQyh4cE74zLpV2Vb6GaZxByiD9qvu4jDhpSGPiYBZM9yfWbsufK9QBgpdnPg",
  "key27": "UhQkxYnt1mppJgY3JEVf4BrsBmEn8o6iYcoVYbv91fJiUEry6bFZz6tPBXsa145mtLTMJM4GrRVwjeNZg2YtN1d",
  "key28": "4z5uVmqHYDgKR6tKTDF3J6ytRftVybqY68RkUqHPCyRtEK3DmEEyEfYzbdZUgFXZpQ8skkao3wkFN93ed11Zduh6",
  "key29": "2FTAxgpEb6mtrftLQV3bRLt7gaPEgyUsunJXW1bxdc4eYABGy54NYyDmWgZP4HETYcvGkzSogEZTME2MykG9CYvj",
  "key30": "4aegojMcJh49cjKG6aaohFzCUiH4mbYS1LDbU5zKwnBo2Ry18ptupnkBpNLa5hmwTd4GtgD9A6SK6MBvhubVoRQE",
  "key31": "vwF9eP7ULToLgQGafcxbMeAxvwkwZps7YHJWmLWCdX1GyyFynwDg6nhMmVpgAZCptR2K3hrJPVXrBeXdZmzKdTh",
  "key32": "5U7PUMAgCFkSjq6MpGH7vcKD6B9PFDGMvhy9nh8PXb41LEusd1Rk3gqrS8X86tRfyVLiVpbXJttBz2E4VGiMZiUb",
  "key33": "qLarcrPVKgbSzRMQkbeaBPkn9Z1eLfr4j2JuiTEDVwdkLbJBsSSfde1nCtAVEnnMmm6rMYwDRb9EB6ZYzCPoDTW",
  "key34": "YdP28HDCM3vvcXKorwx9XrMAfkuCsDDqoN26UFxNYFVcF2cgkjyet5XMyyMRGJ48BVhbULKnvCLFqCJBFgUpPsG"
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
