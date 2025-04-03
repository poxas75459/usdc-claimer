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
    "4UHWaqYewvRZUGZtw4LpZYcEfA4UDReg5Zj4q1X6KTfAvgyk2grSviygzBzd9D4aFWLmD1Z4jDRBmhbDRd3A7GsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUyPSAaaCsP6qHGNiobsBc4rVik4Be3cpvTbsmgs4Kz4wGSzcYzmFUCJVAeyY6FuaGvz6o54w7gYq2qc6LvN4ES",
  "key1": "2BsFhfAeSmJSm8M8wc1nFaT2K37N1vLeeM4gD8QmRrB4U5zuNHRhVTJEph4yg98xgwPUbjhhhMCE5ecHwWsomJ5p",
  "key2": "5sMhp6BnHP1m546eiZB7Gu2Jm9KavsxKV4rgozCpCYmuLFr2TKywQLFbWEqmpUER3pQvy5bMqVET6UqSuRyU5WoN",
  "key3": "3XtfTaDAWZu5G9nzvsv721bBeTjyVbCCtqM7s23JMRshzbzMRxrEXjFTCTC4TCnfTetbzPgVUeu7hM9MjieQb5X3",
  "key4": "4du2FhgyBBoXanr2cEgAFN5JPEq27Ab3Nne4EgbNGeesPi5j9L3EnteDU2JQNyGAuCZVuT3Cuo2iPuvZSPT6VfT5",
  "key5": "5LUoG2LHWLzNfc5zKXynYZWgUBh2SQZ2JjNUmdzBz5kDhxtxPpx1XByd2G8sLVcikMYJcy6ukPexEP8jWJq7rquo",
  "key6": "4dnTZcXX6EGrtbyEyPALFhhSNz3QzKxPxqV1P9HtvNkwymSi5e9hFUoqc7nQkZWexfS4nUiic5woCV13My1EE6o6",
  "key7": "3C89ZN5mgoxt6DdT9TqURon85N9ivi9ybfVNQdu61WFDeo5iTNMaLKK1u6EKHEJ89iNGseuLueyxHu7duEkAp91f",
  "key8": "3DRvALXroknLs5wGmRg1nxpPpZgwztTPZjisMcH7uuVoPiFENvKYswXAmFcac36jsDPeY6TkEQK74tUcSk13p9oF",
  "key9": "5VMtVqbHJFpTAz3Fj1QdXCqaHaTbhy7V2pqJaUvNmD6nyoYtJAPBzLuiDvNYYWswicSg4DmQbmE1w3aeqCLbC5a6",
  "key10": "4DeWnPabusosHdFTCRCt9tNccEKyzU67RqFw93BsYkFy6MrqBhr66n69JPUhiKu4s63z33nAguoYHykysJdqZ6Xw",
  "key11": "3ewR8VzpfzGkJSkkponDvm9EzJZi9ezZcSVsxFXxJ2L8cHm2AQ93Vd7XPecQfvYpcXUg66mqaLnPz8MLkZbdJS86",
  "key12": "3gMmsdQMTZ3P866b4Wxgi6yywQLtBVQUguZbX9o934zf9j9TbejRqESRtZSjiDWYzW32X9NZ8YJ3WJipAY3gsxK",
  "key13": "2bMErGqDfV1tU6nCLUaUHRq3vzvEZoM6LNcFooGRKRY47QokSZabqqi1Zp99Hb7EdJrosZPAssSXPbH1t222dSBf",
  "key14": "2UodXRaAXdpBJ4RcXoDfR8ro58zHb95oh3YHea1UipPocemVQfp486ZDM8K6VwnrZvtNfqWvWgJWkiRcHdJ8T81i",
  "key15": "PYiERQerxWC1vbmMxVPP1NwZKSHBgT13muzde2wesQt8q9pbvyf5dzRTmohJ2T4i9HajSBU4LQNm2kNwssoUSsW",
  "key16": "4jiFyPhkBV9B6JAb2ysVWfMD4F4UusLHezvhDKrx1miA4gLaiWXw3dZSddRBeFzGiLX3nvwPvMUsXksFdEthmxs5",
  "key17": "3uQGuHjbR5NiKy6ZTDNhiRSqqXwdxadaJWJQQYjiB9uGH3M375ap9m7gP849eTULk4SUfDtyLT2XwE6fwCHaoizA",
  "key18": "4yBxbm5RMP36GU5zbA8UQrsADGTuQrzTFaThh1CDErEQUZQe2pXDsJJTKYuSu5tcGFApy7AiWjYWKFPnZUzBW9A3",
  "key19": "2tXpfShKVkraEKwpDcUHR7SWSPfbS3vQuBLHTPkxsQGnUGvvwwjaKJoiNGbq2YkEKzgpdFBJxtNnEJukPgnL9fdW",
  "key20": "5QhVMnGsNzCRF4wckXyb7ts3tipy9p3V6X1aXQ6M2riCDsq6sWCnncdRhNBDG29ivZvKxWG2N84DDkjE1uaGLon5",
  "key21": "3D1uAZHv5eCKcW1Gf6YRTjVGPRzpqqv4baD1q5yRCUauGFzp4MGHx7bXpnDkGGxjT8EmsiFxykyxPp9LTH3sJTs9",
  "key22": "39EpxCc5iA2Kt7xG5LJ5uRVMo9vYgCZTn2yc9qRpVVGcitmws6qfqDu8YZCuJVpP3uM2wVZ991Wnovo5yYQ7H133",
  "key23": "5BFYm88AmiCEQ1dCLJoJcjhuAefSDbCoSbkB9zhATRv8kucruqjKpGN96oT5MKWZiE93SP7L689jv1Sn28ok6nK7",
  "key24": "4hD2Se5jCRMAAJSkYTHPav2PKtjoMxdou3F8Ek1AJJeETnuiHqaBZewpXLgbbtJrcjg8pwreeS4FYsqeKCZgzBeg",
  "key25": "XsdV85NP9M91whKFmWxDEBQBRhqx6amkqdkKb6W2C39pXbMDRhQXPWpmYbcC2xiYUd6qqTzf1wNMgm96LHcadWd",
  "key26": "RYGwJa4g4gPYJowHZM5jWVART8PaLAMJDzCngajNPkTcaoCxXAxNXz3Dzq7RLDarkjoLwEaFw4X7Y13aDcNF3U9",
  "key27": "62jADiRMpvYVbtTRJqTWzBfk612pa96HNdd7N32TP3nJp5AyH9Xyc5RNctagAsDudwfMtCamFzPzPZFqwU1NZp6K",
  "key28": "5QizMhYppLXkYS1fe6QeMxEYxrd9epqjhQXNUSWNomwXu2Zu9UNVcQ6MhCH4eNfyMGU2E8sFVChRu38MS4EvCfe3",
  "key29": "3Ji7updgXvAkBa2sJBkWu1bfgLz8sKRLm1at2ZdEC9g8cTUWvEnCuMk5MaG3fK8CuU8rcpa9whq1YTtS7SgYRvcH",
  "key30": "5wE4TEk7CxdTWNFb8Zdhejhc28af7YLipBrK1neoH9K52NiCAYA6DpVTVYVS82evzz3YQRKJWjYYcZFmDAa99L5F",
  "key31": "5nYKPnJQWDyrmKMGXmYwQz4w96aCq46afaZTGwigMeYD7oD94hSMQzrRhUNMyaAS6USm2DzcURB944RFFF7iYyHf",
  "key32": "3HySQxYZ88LFbDJrUJ5AgkUfweHWherMxzHWfgzQ63mhW9pUYKrDuTK4GZcW1zWHMtMjKuLFq1CdMKqSZ1Y1CzqL",
  "key33": "2miGH6Mt1MvZixgArJpPUFjDLDY1kmwuHJzuW9dFzgvhjaeNoD8i6B2sgiGwsu77chxY6Jobdw6YZHeUdXoYiHXX",
  "key34": "29vadAB32zy9HA96mnhkK4wEy6AeLAXD8MCHJCyQovuXk6yG7wfGkYCQ3aQTD9w5c9w2iAKrMQjo8R9xv8ATVSj1",
  "key35": "pBunUBbHZEmubkj1XK85v6u8HhLCN6Z61bJJhNgPPXFNm2aBmUgSmZnJaRRAyoDsw2pzkM3CK1uE2dzsgfDSa4J"
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
