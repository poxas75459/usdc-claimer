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
    "2hgx1zvB3qYkengSbK7SuzgfQNauE5wkJAvsSprU9z8scbqAzVvLJJmRum1dqiYPoeVVWVR6WJPe59VL6w2H8Pmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yEL5dRhbt9uhU4mvYqpyAHPpmFWdXpDg8RGheA6QAGESSY8X2Zkbc1izcQTN1yxCNs6Qot5PSQn27Khp9wgCuot",
  "key1": "5mdctKYG65xWDggAg2y1gmrJfL39ReFgtRf1Z7MAw5jmBig6fqDnEADteQRpBH2J2Tq5wNoK6HAwbxKFt5Rp475p",
  "key2": "5ogAZz9a1zrYPvpsP1UHQMYdhXuuSrMgGiAYzLmoN2W8DkD9bNj3xvREvjuZwU9J21UT2nhsWedwcSudWKJwNemN",
  "key3": "2E87iJTPbA1YKd14YweeTzc1QQ5CJ4mGJxYJNfKHFWvdqpVzLSc83PhpyAYGReDhgz1j18jcVBSNfeXuADQ9AEeF",
  "key4": "2KqZtsS57g6A9xkyQV7p7h4q8MubiCa8pgknYfddzXRgXWJzfqVbSELtD3pZBQM4kNRLji6aZGgeUnJqHp6m5L1c",
  "key5": "3GVcCbxM4fxBSnxgVm8rMQbp5ah8QSiYremnpw9FyiMS6zqWasRcZ9afzyNzk3b2EgjGoPPTMJsRyUeUwvoDhzD6",
  "key6": "56JSTpitbD57iwF4YTRzDAXqC4TWnXuPKSWUnpaXPxJjxxs2JAqWsK94hbjRQnPs556YT7i9kTe32Qjk3m91Arzo",
  "key7": "3P9Vv49yc4cXrqbC8x9oM9FghTjqdbrezAMHsbH2memKGo5kcL8gjd5sAarCHQxXNtEMPqiFvDpsBfKJMVANSFhx",
  "key8": "3N4EPMRyd8wQDtDv2nosvEtfThxUpJ156CbA46YcQJJNKWZppejkXyDcY8Y9sdj5v3PyJEbvkFxasyK2x5534bQT",
  "key9": "cj6MPdbRtiABwfTnePKn6ttXcbVP8UKwVsXHdaMTdWs2iWAC7RtywPXs2nFW4kcPCcu96EDUXfzrkMhEp1T1phT",
  "key10": "NyVbBA4m7v88TTNJZRVTmNTtcwft8R7VbJHyWqH2Uw9LQVhLaWbb6wfJJhJLJABiqu8zmnhaPpQRQ4MQTPP7AXn",
  "key11": "378DuVDAasHtTRFKzdqjJVQ2iYLXHKP8Ee1SpS1vVkZsd55gs6DmZKu2XxeaJfFuJKDj8WAkJq5MgW5rusDHugqu",
  "key12": "3AjAvGdZGrSvq2izDxY25qAe6fH65AwY9cWEuJxEMPRJQpeCMVJsfVjxezCvjJqNfjjcKGj8tkMqghnkH2eif2oD",
  "key13": "2ktcQ5n2hkjvwDoE6qQ5ERBr32zdArGeaWB11gb3F6JXtkdSNQbDrCrLZ5Rx7xLDRTQdGYHhmkV3j9zRcVCs8kaQ",
  "key14": "24gs2bx4zk365TtokQakSdphFgJohuE5sudv6j3TxWx9VPUwdk9aFsQrFPa1y7KrdkvZor8Bep5XbmNn4AjQ7J4K",
  "key15": "26EfPDEK9EeyzuqoJK1ihtGd6MTjm6v5F1hPkdcBdNvcK8TRAuDAtQunbUX2wz8mRq93qRRE7E6Gc9iWw5RihVsK",
  "key16": "5LLod37uPNFF3DZfjdBuvZ5nkGWESbqfDdre9nTVxy7xru47yLHJEJn3a5bTD9wSUPDXiN4DawrDyVLM2mNom5cR",
  "key17": "3VwXTxiGk97x75WizKsdTqJea8wpamkshq9USVafSxaq4v9PCPpdDJpUXdAWFms4kewxR1kPFSE1x8GtL2TfVeeW",
  "key18": "22z2Zmh5WzrLjCAuF7S1jiCwAA1s7AJE8dXmAp7zRGVVK6PjVjUBf84Cc8e9cyAs5C68E8kuBCsaJq9iSJYe8rN8",
  "key19": "4RhmECtT9597ie6SYXVnR6d9QeVSRJDtZpPUfhvpAHKCA41XGisfgDyCy2QmfmuCfpDoxHfs6w3quVvH46ZHpEjP",
  "key20": "5drYFRmFpFnfbCSYQRh1kv4kRgpgB1aYUmWBhhpizwkRZvDPuWxSFdom4ttsUu7CxMsCzHBt9rrGXG5dEP724uCi",
  "key21": "9q1LGeWUvNG4FQZPZyLH3iQjn4pArYS9ypacTpMRWKmSXqhA9wGK4SR5JC2znqZJkNdZ8L7WFugW4uYJR4fkfus",
  "key22": "3JSSWS2LBFhAMRuNyfALzfydhaB5oHVLHWJ3yuntodCGTpxE7h5tgHnUDbKZmiw3fFyCjwAMVuyX4nsN2qWNhx7z",
  "key23": "27QmjnWZSdQiVkM5A2bp2RTnPwJ9PS5woa2XzvJGcLMiydmGFLSf5mq8rPyM3MXjWVksPtL7B4BboMtTjCGwDQYE",
  "key24": "129oTEz6aK5xC19ayS6JUPtjpfnYVQ4zUL6Vxr1VbqBw4ri1BYt9m57jyoEBvyhAW9Cct5sofcAPHz71s8R4dxLT"
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
