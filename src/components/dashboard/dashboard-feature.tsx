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
    "4wvDn4LJkVmsM3AwbmkwEvDV356wZ5om9PLxY7x2NiyQzzBbBFH8tVXUUiFykS261p2LLjPTpT7hhHTjLkf3A4Lk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciV8GNvHNsJDDMc1h99feKpMn9owNWQd1Rs3yqysxJkyCjBKGFjQxqFXZ8WhEk7hkM2SucZFoUfpq3ZFes2T5nt",
  "key1": "2EQcVqnqeQpipQpgAiqDkeauegKNgyRTfmj5SAEJwe8WPtfWZYVqQk7TdQ3ofmZgzi3iXDxNAGQ2kbhuqU2FVPnw",
  "key2": "2aMwGVAG2fLJKTsq6duomfpM7ddZuC7FuDfcv6f6MKbeH1bwHnBBdve1ocmKY5waDPjehiTeLJEhJgdgf7jZXm8L",
  "key3": "33TWXyGaFvnvnUnK4AcJsDmPwMmWxXrB98a4zBuzrcxbs4iKxUMD9vErM3cWDdYKjAMt4CFZcw7pT2vKWPVcsnGc",
  "key4": "4EroKKhkSx5KX4N3BxMNsnwf35CfrwRyUoqR3zyQRjWyvRCiE3pisKVM8nFZfBQyHeuJ2MFoNb9t2nWxDeb6bqaA",
  "key5": "4s3EQDfAemb1HA5cSTDstP2VsU2uXiD8JYXQ86oMXz1U2u2jkJtyK3tivpWQe8S2akKUggYZjqWormhEpzxq97Zh",
  "key6": "3mRZKxHcrAwkq6WVm4KHkezzqQm1DyUyZtznUZouAg5QyRH6fg71mw6ppNzJ9gfmKeUEaQ1tTcciXJ65yeGJKVFQ",
  "key7": "3E98xzsR6fizovEaBrvm9kzV7DLLFiDoRBCECwc5LEwHaZqyeGofEEh9qZvfX9YwuZ3si32UoUPpmBaSZgUYiWYG",
  "key8": "5AeVZ7PKzEprTBTsPfFvpwzkpJ5zh3vizygiE64SqpsJSuZBDpssrwuByFN9ZQbu6akG42VoTU5y7GE5vV3RtPbb",
  "key9": "SWhmdGCboEh9nPVuTMsQugK3zDj882Cm4ihRoYNrwcH6u5U7Z6W9C71MofnDyTHknNZc11az2eToEZ8q9URndta",
  "key10": "3fWSyLTA5C7SKmwcJCUU6EyUUohoTHQtsKLPAkJYHxHGWSUGz2GL6BBuXFcuNEys2hzKrT6aRm3UPEnc1PgXiz8T",
  "key11": "5PjEyuoBGk5TasAAw78mwY32E2CFD83w9dvgVeDEiSKPA31c2FFPYJrDqacta4DJUKPiN38oy9vJ3RRwz3cpaEoG",
  "key12": "2GsZGJBWyYpzEtQ5Zd66G3u1fKoTZAE9QWLRHf51RD8rqzFHhP3QbYM8juF9v62SDRrueCZmTtUTE8kDoA7qGkwx",
  "key13": "q1J8dBGoruXS7EsZjG6cgJNSmJQR8AdRWRPfgSq95Zx1ze4fmDQVgVBjaB5jujfWY7mgGxaVM9GfCoPaWCtvDku",
  "key14": "5TAmtHhBS2gEwc2EgkkXAPdiFoM69Y8uEohACwKC6qs8CA32SqQ7tQ38twdrGUxxZa12JAuQY4iwq4QZVTzKPsYT",
  "key15": "K217A1ukzZEwEkf6dRAVX7gRYov238j8LP7x4AW9btRvkGrJzrTjUdAS8PDqXtHie41eZQZQmLMPo5eUeG6uDiq",
  "key16": "oGu5abAHnV8Z2oMzF6JZ1rj4qq8irgKpRzCvyJYbPXeS7HR66dt27wFzfQ2FJnJzMqSNaon5eHS5NfhXY59nNAh",
  "key17": "5GCRm41s5sNJzwaarvCchxLmYRQGBWgjijSFpQ2uom9b4w9L2tmMVNAkTRmsxtDzNGEwt8E4CzUgS9894WkpseXq",
  "key18": "2j3way5peZtFZVJ63aRPfQcVS8ZE3YpYzrwKfC6EpeBXXSKRR3Ap6cZufoGmkYX1EqbWm4g6PfEhp53NoPq7tiRS",
  "key19": "5TV8xuVcmxbFscqUBzMjdoFpAAhrwr2CqnkAjfCHpW6kN9ZnvuRtWA63jcBxig7BahA6mw493QgJVpDkAQa3F6U5",
  "key20": "QenWq97RZBsYEWzz1gXGDiwEJgbTMfEwtFxuvxqEyhYzVQ2edUtW1Ltocv8apNNZBCx4RGUq9wn4d3BLSsbdTLE",
  "key21": "3VCZKgRHQxa5dtGjej3Y9bXYNRtbdhFQMFHQJKxgtYEV8f5M498uKnNmFVrcuLKzxJdpJv5xV1dUni2ZXqxsm32m",
  "key22": "4ZbNXgPJJivA7NikwYVVXgcjxUDxnqbP2bQ2UUH45wUaR8jBZPhdpGp4V1tJ6FmbL2zzWWRnbs9kuAdxpBMLkT6L",
  "key23": "6ih2MGDFWHn8nfkbtA29ZZ35ubCsoLeBJtXvVAwvVN6y7dgFgKEcZDDzp7EgrhyBaiFjpiyR8p7GaDb4XSUvEMH",
  "key24": "4AcLNobsiP3HkX39YEdcNkQxMGpaT2moRJVvcs6WxRqhbTswrz3ztKJErscP7Zc1fUTgwkqN94MnXX7p4wMgooPd",
  "key25": "5uWCgzVhKA54YdWgDNe9bwc2rek8mja8VwQSgZDqY6KVEdJsJvnt4qr7b97uYbr5nxCEfuaTFoxRoZsfrPUZoNde",
  "key26": "5a68Sb8jHzgUSv7objMi1fMwJaRPqUkzJDk99rnue6ehcTHjmBLYYe4XcEm64wrXsJvhCkkQPaFvc2ZUgf9V55Jc",
  "key27": "5TeBUeM9xtC2dJHdjU25C7t2Twkwk37tEuCggi1WcYysakv8mxXHbCAJv8SCiNgJYxTGJX6jK9DPBtbHBRWKYoa9"
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
