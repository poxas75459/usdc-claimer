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
    "jhfo12JsbjTzNXqZZATSenvX2U1ksHoXcatKn8Whqgqn72PgLfRqF8BQExHPPhWo4S1fGHEWzeLcQXgsAqXzBsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E8ZQfwh5C6HcGWDXwRp3QuBAcoAZqrccrH7oEVXiHG87FvgmMK6t4BjhLNrioouiyWY6kPjqS2gsNaYt2y7Jpii",
  "key1": "3j8gMjEt3zguPsm1KTNYwvCzyhyTQtjt592wJ75ShkRv4p3tdwoaBHGwsnjUa3u2sRGeN1MEXG371CmWtAbpwNMb",
  "key2": "vErYntbge56CTqaDjCQx1rbQFrM3DupRhvKErCB6dUBNjsK6juy1DjbBkFgZyq4p4SDuD4qeei8wSZD6dkXS3rR",
  "key3": "5fAx9sGDiAoMDk4smaGVnn5bwu4khuJKKRccgbmiBqQ7CM8ssqUtRcapiVBtLxLnYb3bGvKwdYwrAFUiBZ568ywy",
  "key4": "2i97bwUYM3egPULRB9xLrwzRjW5kS92t28mKcegR9jCWaXDcKkLgX3uzofncayB41SwcYvdUQPS4fB83vpM8bzWw",
  "key5": "5ah7mWDbTkkc3beWKPgNGpKLGsLD8mBmMs5ckDKoASjdUg9LHYve5cW5mQuXigUNQdKodrphWa5HuTgbn7ZBhHnB",
  "key6": "3M9X5WTYvQinHpcD8xHbLXLLCeQxDcfTtCDi6TNotD4pEKJWzXADYAmiMTD5G3X7nrVhqgN4N7hTLpJUq4Wy2M57",
  "key7": "4NExLazDo13GwhtHPxaLMZudYpSXk9MN9FJAwbaarbJ7giJhrjqbo8q3PsoFmujQ2x4zPAF8Nkq2P82PzjFEzfGT",
  "key8": "5cJt7V98rMDcUJvCBoTLL1hh16invAYte1AFmoqZguCkdjtvhXpCLyLD29Sj9q5m2XeRPY61ZuqewPEo95XzXwkK",
  "key9": "4xMTKzsiTKPSo95JWDqUxhuvYSfAin9aqdMZRhnCK2WqKyW4hGmtkj32cSem1vvRRosfYbiUxy2sHbpSzpuWqUpf",
  "key10": "44FyLLETUHJQm3dsjnphLUEd6YZWSgok7UiKJxnrCaUhYZJC2tYU36zHuHSNRecbQUWYnhgycR35rZHaZFGfGRqU",
  "key11": "5u9ZjFR7sXXwf9LAgeANre9kKYAjpbRFKWCw5V7jy8Z7Z3PyJNWYAGr9jxVTe13eFmGAwoZjRhMRAzbkNiydPdfi",
  "key12": "4jktiJeoWySq3dDasnXowck1kKMsDi3qYLKCztMS1DjndW4r1McPqhQDrYuaz2YAvGu1ZAGZjrrEXG9vJQsA21aL",
  "key13": "54iaossuP1Ttrp6WEJEUm1NmJZ71Q8dbKqEta6e54xSNWxor3xPQ47KJXxwKGzFy1u8aCAZXwzVB3VLYqemMTBC1",
  "key14": "nNgPSwhkhFkmY6LoizEA6D2ErwRLbzPwF367YkV3PpeiYVaj45A5WMUz7BunW8JdzK7XwcMGxH7S7iw9CiekJhx",
  "key15": "3Gto5ykCGhvNA8niCJqoQPEmohqTmWek3Lm4FB8rhgWHnyYKKkJprRwvPYXnmoV3vEUcp3LrDs8KbkK6KUmmGKve",
  "key16": "3YkzTyP7j53jRiaHNJgfnk6ukRZowmcGztV9LKexqL5oX1E5HKdFx58wnYxWrw27UUZFArMBhoeX3AEoWSBYRnvj",
  "key17": "7wpwxgRFGS6owc36iuA51eiDX6onaVCoSDcg9hRLt1ZQhnyKmHiYHW1EYYaDbU3dm767ARG9z4mCVbCziNAnwcp",
  "key18": "4w5UbvhqVZLj3HCYrWRn3YW5Eu9PR4i2hSni8EWYv56sGepGtCvRdbA3gihgJzzAMohacEojXkNbEH6x9HYimxZD",
  "key19": "3xJ4QAULpEDzaftvhjCj3QtdJtK8WjxVdTT9w2Up3uBwkTSpM6MLC92FfWQm4FPCQA3Wqyr2TKCkFuEQUA5rsxqx",
  "key20": "3ipyquCGJAvFxFDXesrG6LA9eGRzbEPAspWTB6r5D1ySVqcBg4heTxEoyP5LE15yuAgYc75V7Kt4sB8bbF8WV8P4",
  "key21": "HB87NoXeGgHNWBakG6RvuSzWruMbGdVgBefWyJuQiMaQr8hdtjVoXAS8Ma1pLdHNZqHiJycKPtgjp8PiREuxGZ7",
  "key22": "4VtBs9Rhj8TsV5RP62WiFD33WfjBCrfJybG32kw6nBfHVY1aXd6nXQNvgczWguK61JU7qn9h865wAeDoc1UnKhVH",
  "key23": "4wWMVfNYjQsNFYbJZ4Bo5YQrmJdjtgKtdKy3qi7CifJHoKiK9cueoc3sA28w529eGkiZw9414rRVHKfjYH7foL9A",
  "key24": "5MgWpJSCRJG5FWNgSqZW1BtdfhAdfut4JTE4jooJVDih77nHGQEwS3Rjjnr7f215gv1ax9LMfCn3zpiuT8JLSeYf",
  "key25": "3osvcQGc2iwbyVmTivYA3ffvi7nx6J4aonas2Mvf5s9s3TdRC6YRy2YjHqFWNpZ98KvM6rDSHwSy31qUAnwcvuMF",
  "key26": "4wUTv9LfHWutermePUAgfDa9L59U23L2efDidgaHHWTWiFdNjbRVQBG2Xmz41G8apycZHzaqFx5kwJ8VDWcwNkCy",
  "key27": "2dtJBKMzeoYq9Dry1YFWnnr5N4e2kdnvWDpp7DfxWA1J7n66UniFMfm6PqC87GvWWeuBkTQ7zFaW1oh5pGcMxcf4",
  "key28": "3XDDFLY9b3yckptrM5ozoapQrHrvNmykUG79UmhzTQxiJMr1nNmVErgheHyVmSetAjtaRGw6bvGCH2r2z9E7kkoc",
  "key29": "4Ltvjchw4GGoh7HrG6LrUWzERW4K2Kn1HLroqP13URJot5uW38jDhEcm8Zbt97CJv8Qz5Mhaie4WahSDQEtrhucB",
  "key30": "5jzPHsYDt2k1mf867na38N788XJfVj69CWEQwhnGrjqWj7vhWp5ioNe4AdVpe9JGK9EGnpb7qVUWjh972f7oi3z9",
  "key31": "J6fdqQxS7wHc9mnWGEcELDRpNM81ELmy7BnfvsWfXDioUEctt4HqJqaHCZW28mSYUwAuGc8H7jM4t9aJr4uzEfX",
  "key32": "4WjovreAXdqaRGzZK6LscBbRSsWUC8bogCKK1tNXP96NQc9PyHhc8HZf3Dkxuv9g8b19iKWNUuFH3BEhNDUX1gVM",
  "key33": "C87SzyUSudnah4ZbZYEYc9fWK7oa8nNXkSAtPN1VB8YWWjiaUzEWzoyt5wC1RwnDFc6TgMd7MeHgBdW6x2HaUVH"
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
