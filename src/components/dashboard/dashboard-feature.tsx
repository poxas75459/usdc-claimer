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
    "24c6CRdSaZwcqEEeN4CWrkUeA5N1qekHcYiHwPS5CT62m47pAhc6619vspGSLDZNuDJA2zpPgfdm51hygkhKbdet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j3RSYLrwyduLbp3QCERJSk1C8s1d7e1jffAYRw3K6nRj6eRH8iezABWcgFJiLURguXrKAbN3WstbfTa4UcGi8E6",
  "key1": "4XsxXAi51sCKDrRfzCuxmXccptyjYeab9o4j2ZGwbrxJqgzTauxGsQEFGrDBJHhUddXZiX2CYup3Js5ykdchqjh4",
  "key2": "4SD7FAA9Vgze7A83wbzZa3MrwNmcuHrAdX1b6eEsFCxGfGuNeZag1E9mgNNym997RjpXd9CMcbKyYg3CWTRduPVA",
  "key3": "3gp5uR7WqFZKad4XeHXMr4MFEKersRwGxnLJ1J8xEZbGktQ8e6A5mp8sEgWq7xkdbqTjNGeMYGiJW5nmzVidma4",
  "key4": "4UwpRxk3cWAAcgqpZsk82CCD9aLWSN1KsfbJqSeuW5tBpYq58apn3P5Chrvw695yjVUjw7WyCZqrKwXe8exrm4Wb",
  "key5": "4J3MVGfwgZpM7Hr3B18fdZ3iAqCeL5Ck5dxc7rK5faLZ1aAwF1KT8Q3SaQAzajc5F2gesCDjwZXCJY7mWTPZzVXC",
  "key6": "fpC7w7teamzc7dh4CyVs6gjyhvm1DrJX5vUYKYVyM9FZTZGYAh6mKKkZkagtmpQLCLardxSNrEfvp1wE6DZBHZa",
  "key7": "44rs2LjZM47RhTJAKDpsWyGSQcuChtLGooTsyHbqJ9jN1yHdiee2fSb6eLMMoyZn7ybdDMCrknDfezHmciZ7MM6p",
  "key8": "6YVQbLJZii29LvsjUAD59cSCHNqeQHUsHC8tYo1pY4acesCXRvWECXWiJuGrdwMRNGqMvsDRk9drD4gD2T7iixF",
  "key9": "35KjRxEnaHs3GBqAaeHccTVzCAJ4qoJzBNNfMVz7g69ATqbmK6jC3GehZQzcEnCjDhUH9q8qNfhVXGGHhGuoGDE4",
  "key10": "4xQFmV76TGT4UjfTUN9A99YvSq791UsoL2radrqj8BgqQF6rNnR2GWsfFN74jkXvDyXGmuninMEAK3FPxVwdCA8N",
  "key11": "52xwjevC3zXmDtxRSBxGp3zLfJHQ3CHF9Pq9Cbx4EXmZuArFbKZzGXQsbG23xVF7tiozhVa2xTRcVLEYzRdb8DQ8",
  "key12": "GtsQa9rTA6haBeBDfNVtf21shDvmvTDfnZ1X8kX3MYYC8Kw3eLGn82qMqfi4g6ZsiiEUmWeDN3WGjfgm3x7xNnj",
  "key13": "2V7Xwrydq7utgWsndcpaNBnEmpgCNQ6kRfna5yKyUP5SLcitYm2BWZwJ8zVsi9uyaNJRB2s5wRHFSxPHzn9gjNiV",
  "key14": "4xcJmMYN6PdtrcSqEWJALm8nmL7hTtrxi6fSzdghV2jHxzTdoZoxKdTHDPWandt6725mkdSZ9fEkMCGchW8sXJBX",
  "key15": "4wCNKz6NXcVSXb1yFmhYHz33T7vvoPT1BCXraTXVqSYXd1e1hcZtQWHpSJDij3ejomKhH1MrjDs3KJLHGuAMLomT",
  "key16": "2VX6ce3N5ta9qvBuqVzQ13BNtBApCk9drgEeptmeCuqwQdhYfh5oPoqc5qW7A2YSqaxD8AqXcrqXtBmz2XhkuFT4",
  "key17": "iq4CL2sZJQfmiJPTbn74obLN7b4ZC76gY6ME3jXhkqct51y3y3hwoW8Y97ZxyW8agEGmqsqfCLA24yhWgvHuqyB",
  "key18": "31mSYNABV2JisPUyjrfRJE58XmMZQyBLC4JKxnpN63Yd7xukcQ8KXevaLLzijNGMvsL8DwGgZfyJfhg1TGZpriSi",
  "key19": "2msTfzZjByAoAiywEcFUVpYYbHKR1pF19iUDuVgFMpaHhwo3ZcJkhNCsqokm8352SfbjU9uHC3SNv3xmhgaB1kkM",
  "key20": "3HTjXoejgEsjrT8CQ61smvzPrjLj2anmTpbrZFC2gkq9X16xnhG3BhMkik1jnuPq7afPdsoJsgB2tC2hZSgDNbvc",
  "key21": "5UVwYEB2nN62pFMenXXHmwZGsxWFJvcFpN7B7wa8oo6dsSdnYhFgfqoAkMsk9MYirSCcJguUNBagHyBNM3G4nyZP",
  "key22": "2MyQHBxZEsJ6VrZATq8BK3DxibpzbcqNNhsJqE2Gq6TrMpFWnXYiYyRAETFs3NSbQ7Biw3CbybhEHgtmfcrtpqDq",
  "key23": "C52Cfe4sixiYypSFQY27RqKmVj7Row2GdSdE9WyWvTEtasLZWUrJhrLLcRFUtJ6m9ZJUAxBcUxHAkQspgFb7ngc",
  "key24": "5u49vDnuvEfvkobGJwto4zqicZSFXd5yLYuUjokx6ttu2hgnbo7acEekh3Wqdp9yZUWjUNVivkpG5u5fkoRwmcwt",
  "key25": "5aqvTdzmCQ4MqmUH8pZYe9tLxXve5oZchA5WZ1nGaWr6TZoZgdxtazMSTnsfz1srTTA9KHXvUJRAznhJWxM7Askc",
  "key26": "jKUnxzhsqW8Szhv7iYT8eCtkLz8RkvhpxH2cLMh2LrQE5pnK1kgBwjzeDmfD1wWpD3NnQt1Rn4ZyLBNwsh3mxYG",
  "key27": "2U8po8Mg7ZufbktrjXSXoRoXeqth85CNvVKNuJwBVunabyotZroeuHYJsKydWC459mC2qSGRw7PBj9j6KKjZjCF",
  "key28": "23WLLbQ9APTkuZS5uNQvLUJZydN3SNpMJCbKzpnJZhXHTVS6YgV2joCzHHrNFw6eBFpY6yx6mc5bGaPBnbWbdCrt",
  "key29": "2tX8fBxL7ZNqvmpzQJFZ1EQ4MANtDT9CC7zwYs3p91kENWmim5pFFiFvwSZRFJnYWAonK9z5XH8behQ5QFi1847y",
  "key30": "VX46APYrzm9SCiJpcLFxtfNpCaCVN5DSTnC43rED5eehvftxPzM29PstrSqDAPNqZ4aGqyBp1rgKjGvJWEWJzpE",
  "key31": "2QAc9xa6tSjAH5u2C3wdMH8x1ZhYtFVu4YVxFRybLq7HdFmVhfWdfKZmvP8QgE8JWijohAWx4vDWyanEvDBQTuU8",
  "key32": "5VgHZkkYU7nJmR8U46rT8PCtfDxRn912bQN8Nv7vfbGuUQGUMjLWxKuNyVFQE9PgWBqSV2bwhg7UENN7MAuWwBjg",
  "key33": "2JbVEuvb1n6bQ5XX7rA6aXZ7cef2uj78WhNjxWxzo3gXpenPeyqUCDenKeFZDi9G1hjVK9SHNNb3wf9Qx9inTU4Q",
  "key34": "4oJDv1Twwp4RRCcnr8Aokj8Ltpj58h1jq17xDXffWw6ZMnK9R1yBkAJniyFtxzXWkM3xpDsMyDMc3KYFkAWgaRwo",
  "key35": "5EzBy48dZopGr1qLghR2wSAhaTdB4XWuB66JAoXvrmx3K1x1eeifmdgkuRhXtvwTKiZuobzussWqtKQYm5Y9okqC",
  "key36": "4k13hy1U4aCRY3jEsAAk2b5nkdoxNimFQ9dMTzMbJMcqTQNM4rXXfcb5vdgsgZZdNabh81WbZHVLM7KtbWn4MJAc"
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
