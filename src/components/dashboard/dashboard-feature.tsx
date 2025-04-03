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
    "21KpnFNMEb72UQXopjE7c3fshpye9mFAXBKdXWF5mQc8yPLpSivGsWGkb2wdY3pSnFk2FW7kfAKon6VHktTzWhvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55sVwEMSSwvBXETLZkxqiXBFM2oSbKGhtnoDhaXzPYyG3HdLPiqSFChissuzMMEvvPJbKatnYQDggwm8foLrJYET",
  "key1": "2L14g929NSANQrtSBB43og66iav6pYzsz9grbL96hX9AHj8ffQQ5k3ovku81WDNdAmDeQA9XgLffUx9nYPoFFC2d",
  "key2": "5s9o8w5oJ5XGrZ3KXwDb4tmiNjUZXuCF4duNUjymyPoGcLGJxdn4pHtC7rV9sfc5emFGjMTqsbNV6JN5HpV2tPP4",
  "key3": "2zR8BXri1fcoZmceJj6Bg2eaRE75qhDpveB5VD4JbwTuJ53RgBDLzdAQha7vGnaKwxNHvgjg6aXiC2h2Kuq6gjX3",
  "key4": "4RQP5m5Tg7xAWb3gNvifZv2Jxz48MduXMf3XuGWbpoSGi8i5t5bRE3myf2RQCvvryqkoNjPHjkM8Mc8auuPPitgp",
  "key5": "62rSgQtgMAboz1Mu1RJJiCwqpmaW6pj5mQd4Dw6BQAjXsB1gRGyc8k4xvXf3iJDewmJKwT1nCKAyxKkwoPgCtMwu",
  "key6": "2vFWvQuUZRnXLTG45hactSzhEhwPWdzod8QictW1vXSJBVw6Q2edg7hgm69Lc3WhWh3bCQHicfR2Pc4g7ehLrQkA",
  "key7": "2cqtP8ZagxKr4GzpWmzRkppGSnH83wDb2ui2DrS967N2cEmjSV21hLeaT4rchgtkz9nvgtDoizTJuVZzM5itJc7g",
  "key8": "3d3ekesJ1Hs4k3tyzmpA7ymyGVtSeBy2CoPrf2aPW495B69yhSCmg9N8nMLqhT6Fqc9UsjJgxmtYH4Nkr1N5wgfK",
  "key9": "2wjAYeyATjJ5K5KpctRkYphpbeK69dyJT3W82XwdZTqFifoqEVuJjBr4oxzWSX6QaUjSaw9ARqLVTngBTMv9RjFi",
  "key10": "3SVqcbEBqzb43K228U6WQSeMcChMVxYrNyztBzMm5bGFtRf88SvS1bKn9w5QaG4JUx1y1xDDdnzK8j79uY6P1447",
  "key11": "21Rzww62hAaCHKX5oRAMTxVRQiShUmHa6uuFzGJyvXA59oGBAqpc6UMafrXwoHAsXehBQ8hB3U7ZaaTtY7ga9mh9",
  "key12": "4S7RkTKwG1JtGcbKu72dJBFSTUbdHQm29QGPWwEYsFmjbi64xtMLSE2Y8jCr31N2erTs3SW3uiymHR7xZjPqXjuL",
  "key13": "UUyiXRje7P4ktajMZGS4xFREvTs5awwUA8avKGL83Wm7YoMtwcupzPCtREsqXJp3ahN6djvWS58fh4aM2JiidDW",
  "key14": "4qM6g1UzeGtn8degrJqoWq1dNrjnRh46QbUg7o4mkmNzHQWEBBfd1BvXRf14DHZxSEW4V7As9TWkBCr34SdV5N2y",
  "key15": "4PHNmWv9gVaRW475X5QxWimLbatS4KsdohjdUbYXxb2JjEiG3TsE9xYRn6hqauS6VQYrsDjogNCw4BAwwwEGuT7H",
  "key16": "5i4FNBS4miSPi5houm8qCdhEpugfnRxwzVQegbXxbZJYTT5fhBdvZi9aEpez1QHxvBqJt44vpxzZD5uVF14wR68t",
  "key17": "CgHQtpUNn9wKF2FZohQU9scDqHR9bckuFvcBE1zNigLSSm8bxEXn98npi4xx37kisrDzFkBMUKMXqsSgHLUvj74",
  "key18": "3KCN8QfNzYYtBdFQQqd29Fos7qwszTe4VNinHbYLP75Qx619G7HZ8ayrvYPEejDeeC1cBopEFvQg3mgyKMthNdU5",
  "key19": "65Mgw6bB2YPqqe1cGVkpHidFLMFz7fq2TKyve1UE6W1qnu6GFG4ijyPTRkAxYNz77b8UJsNjotLUn5dKJ1YUcPPL",
  "key20": "51pHWf1weZvAxcxx9TYutVwb18MxP45Q1jWRTuHvZXD4ZbaFCnNz3JeAGmVAMzXJ22nav8vsVEcet1H1hxZJeaMg",
  "key21": "4Ds3sRPL7PBPekZhCXu6wgUZS2itLJQ5n2JisdzGSp96ZcxeRkX5KKJ2jF4hTHxr73Y1aQ4pv37EgAQH6Ae3vP55",
  "key22": "hTGUnKHq3zjwEx3GAvbMgsLD511mfHWWQdLbm7uwUstmZKW7ppxjhDrvDr8VV2tST6oDPZPeS1JfrSwBq3vvUhK",
  "key23": "2ERHLuAgD39aLjqPDiZia8ZViucKc8inisDpXWfkKSVCdyPUMTq9w3j4uxRbxQCJWiJVWfNUWWXsDgS2vbRxy7Rf",
  "key24": "2o4r95675SLTFW72ynhLSEEapitwKqhduy3BimsmdTjjraijKiZ1uxSnyqJEqzmgvoiC9cFKaCpjNzgRGcoJLAVo",
  "key25": "2m337Kzk5MCnSg4kfrpckucgrQJwZck3rR4vgbXHx17hnEME27KH83wNWT5RkB4mn7vFBCWG3SQSTW34V5v5BVdX",
  "key26": "gWmyQXw22yqqBAerpQY5inMhiHCqXXZ7RV5u7TbfBAus9zZ3YnnKv44W1JQ3kaCjULHrR2mcEHhTSsgpDupFGob",
  "key27": "Ny2Ho9VcBFAsDN3LS3o16dbUigxZUWztRJ7FSZAQ5SY65mXei4F8ELRskmmjM8dL7bhG9sjuJLvN5mUKkhJrpTJ",
  "key28": "3Zn6t39tcjw9bp3NztMGMUbhBZAQoRKWRawUShy7GBYKHHrBiG3j2YQ4E9DBuB25rSuu1Tempp2tksvyh8oksrXp",
  "key29": "2fyMo8HdVmxho5MELtUiLdLrM2q1rcx3HePYf1nXaAD5kHvrmZ5kEzixabnEVGJFX1pdZAkQkzvkUcbqNvdwmC6h"
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
