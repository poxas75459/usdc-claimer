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
    "31sRSLx99gaNgBY1ctcJ9dJkvCTXwRB6QP91DVhTXeWFCuynFexUZ4DJZVdVMp4dbUhr3hXsRKT9Bdk55GaWDcdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "632Gd165ByZxAbZrY5xCraTUkYDnVCcZSos1ZdeAmaZyGjGumpni7GrUgSdmxEMa3cGPaaeRvMqoMgANXCF66ALm",
  "key1": "4bTfRehJpSxBxQw9LJaBKfhLyhguqSa13UB1fPzG5DujNHAaRwZkVYQgkYviJmeoyRr2LpRasPTnTMzykx49eZ5H",
  "key2": "2KeZehWR6wVP1X2Sp3H9EwbjMCtnrUojs6SPTjSQvYaFFAjTfgffvvbYuSn2BvRzKtkwoFZRwwz5iHZwKsrU7k2M",
  "key3": "4GWcvYvBhmUnSHAR2yCfcTYhcUhkrtKiNDhRbTT27sD7gjZvaa4LQDGRTyG7UJNzTeMYa6x98ZnZoWWrpeohmZqJ",
  "key4": "3kAv1GhqzJRRUfFKvjwGGNeomHuUyFqekhUwGz4tSNFmpSkGorZSuYGXz2jd1YvtocNm8ZSfxnFUfo5EsnRzydyw",
  "key5": "5BCcBSLSzVVVeSfAKX46DT3FQMHSfXnUJN8YSrFGWmZaoaUKsoNLyMsJYFH3AjApoWyvmeyy17rCWNLnZZwMiAyF",
  "key6": "UhrnrETe9CGfbgktfnaq9cJ68PE2YSkZ1d1R1xpJMYp4KFbDDrADPzLvmBj3Lwio6ZprMJnQb6kbQGymJ5TP96b",
  "key7": "2i82XZh2u9fR4xK8Di7dQtmXKHnJovYRk1Q5xpfVgxeFxjEfv6JzMmN1u2SGGZa7d8u6cRy7owFw2AwqJ4YUtfJS",
  "key8": "52MngX8qtw5WdiEd687AZi9ZgtF6qimtJrbGkRLzf3sDgQ6aQy6hf4wgzJiAyYsgNpWXyT3y8Rsx6LntDsLjXmeX",
  "key9": "4P8uznHKkHUzEGj2TarLh1tEbq6W5WesvAM3sEsokjjHaewNyn1E49i4AojYq1ToDu9yPCGzyfNsQi7NJfHinqy8",
  "key10": "4vW1ykJ5C6q3NJGpzaPaWkfK6NxpGTFaP822XuxiQxmDyvJqbrrtFXeaXptkmGTAoji1S1xNi3q6kaVtX3eiNdie",
  "key11": "eYXkjfjNJTFumscFXceGR7pcteG7s6H1RVYYZvPa8C7qDhhEavyh7ocZtNF4sK884P5UjUBUjF6XyeePizuzMVB",
  "key12": "51UoGJsGzqmaQjCYhdxu7mBMtx7AAH3JnuuZ77F7kVzUen8MiFf56dLxBcgsssbXaXetu2QcsQg9sF167G2Na4dM",
  "key13": "5gJonkkAxU7KqzCFM4qd2hvZDS4qHvB5KLkjuQCLCo9Ha2Z4wuZD8fSpLUYxTvDzaixGjfdX17DZbjtErofao4Jz",
  "key14": "3pAyszwr53g7NpGxZg1YsibxKXUFDBymqbDKyW7Sjzi7QKANjgy9pS7PmfJdepSf6SHaAZgGx3pQhgBSrQreBESv",
  "key15": "CAV8cAd2V8kgvfbhWdEpdwZEZA6LgmBmevA6xpG2hgFohQc9y8rTe9o5NdCdrd6QerKDmbYUKwVy6Ar4Vg3x7Zs",
  "key16": "4Ky43hEiYGqwFpP3n4jW1Mh8Ddqke1Atxv83GrzArm2XSecQLSCSJfDjgpVJj6eedhXMZq4AvFCicTDYYAWZGVhu",
  "key17": "467CByuC4X6Bm1FmTJaB4bXSH4AAMjGrfuRjgPb2xvh7KyRpZLSGVEHkqToFzNWGBqLoqC1aG9u6m963LAFf6XLG",
  "key18": "2gKni1hCN3MJmsBtzCzXaDUPFbngD3X9SU2gkTGqhnYLXDcC8J1WH9zVWsvs3ty44i9d9hCfx7WdbZNXHiqMHzVf",
  "key19": "38tJFxACkzWSyreJGoxSMTgaY1E76f25tXr6ZhU4nbeDDF7DxYkPE63PqobLMcLwzKNPdnj7TbPm51b7f27Rov3p",
  "key20": "625VPTaHSPU6odxwGkG1Hhug1qKofy9bC7xzCZaGSg5443iUG55PE4xVe5TyDuhVhfghYyqkezxJa7HFhM9BYKvg",
  "key21": "121nRDPRHvo3q1Ro95hcC1eTjebLUbV8iNoh6TXUcQgvbrJL5Pc87H4tjnGhZiMwMZfb2h1aF4vUK2vegB1AMDpw",
  "key22": "2AyAHttYy6LPydcjyoBBpkAMm9L5DxzkAHhhtkmGmSrPMGkNDpjrTjZyG9k9G18ikihmeDkHXDAJQXeV1V7MY6Bm",
  "key23": "47XRj3xhStdBoSwD4drvPr2X9zPmtyhGMGNR8uJB9tv9jSQkX5H5u6PwjvLzJkEdcuSF5NvGS52esN5yMaBEp5CT",
  "key24": "3qaqyT47qvQ24bUhehNod9CvfnqhQ63sbDQyeGHccxZ5zq4JsrL6t5cKg8sBaK3cbv8De64weHsSFX27t8am1sde",
  "key25": "3ycjcTXpxWZBSfAA8ZWA4Ek9oiJXJtaC5ZNENxondJA7Md4CsiMbysyBnt8ZwosvNeg9E43QwzCgeCXtdajZk31W",
  "key26": "65e2fKrGSEfWftrC7UgNi36tZukcH6VXYwPzBh5mQKnpva3qM168KfM16JX3B9haTEwiHLX3R5HmXtfSzbNJUtmR"
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
