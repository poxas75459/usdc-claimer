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
    "2u2FaPH56ZvpsDZrVQvNUcUjG9ubyNvUrSqW8orZvdZ1V7T4RpYncYEKHraxRsSzXcvCuEn1Rgp2Zzc9FvipwFFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NXjWJ1fBkcxQghSyH67GeYKFKBXZL1wwG2PwEZECXyR46aN1U3ia74nSRqcQxjfu8NwjvSN1A7trNEbnPUjoNLW",
  "key1": "5whNusfVKQpicRY3uu8tPjQXgW2VBWvWBoM13hAuxsM5gjQBAuEpkshXHiFmqrsxiVMFexuht4vBWyotYc4JLbvq",
  "key2": "2Jv55wu1HBe9Kn4f8cP6FrY7AepDMthLMJNwt4M7XY2mstXrPVtpmZstrJFnfWCTK9FFRuKnrgzCzbBh4mykm4fe",
  "key3": "uag75QwbLn84QpMhrE1H922a3bCx5t42ci3jrRfHX4Ci63fcqaHndMXvo83kArTX5ZJawynyZH4uwfSU7bu6oq8",
  "key4": "5ZXVrEtkc7BLM31L4Wp7qk76bZ3mUpfYBbZbNWQw6J5a8UCJK9moFzg9RbeGh14mpUfTgKTrzMX4pcddjWPNE6GZ",
  "key5": "245fxLGXKmFc7yYNihuBvtRXB7eKpMh9owcYqMXJ4uCwwzEranKVZs8aC3rSfkko9t6gSfE4dN1Kdx6DYm4xFs8i",
  "key6": "7iGqDb1C7EtLGW9umNF98KQfYqUdKXDD4CRX9CVU8pDVBtLNaj2SpRNvpgy7DYaneNQpfcvDzGG1Pw3b69MR7Pm",
  "key7": "2bGTaoDq69y2oLQZgHndKULb1bFc6mazfBhAFccisEUwD6RyTkfApPELfMffbyktCGpQEJXXcZeisZ6fQgSSpFcZ",
  "key8": "5oyW3ZhRfDL8i6pAfeRNGbKBTjgQMSKjbH7y32z25vtVrkwppD4zEu8d4VwbMPWZKBVZvTS2tvgXY8ywwNyLhj9w",
  "key9": "4hgqYfe5HSitRBGkxpHfmbpW44Z5FxRLsfby8FWQV23HrELhJcLoy9rGSXCKS9ukdgi6Yn51aeeZWGT8v3qwCbLd",
  "key10": "QnvPdU2hAwECNTJgnFeaSM2HAtYobdpQDGRxzS6mpowZJ9ijRTbydD4dCzzwd6CXpmiX8pwLNm8gZnifPHda8QJ",
  "key11": "4XFudApZvv4gzz1eZkGsYa31fo3QQoZqTtVbTo2okmhLVHoRvPTHUbNJcouHA6584XHPZisTz2hVyVZwC38atNvj",
  "key12": "4i3QhXxzCxxw7dYtd8Xw3R5VZvsLSZzrwoatBEf78zqLrFm21xUd3WDtXiUgh46DXpoeaAoagFdnci6ZgMxLQbDB",
  "key13": "5yQELoqmEbQm3HhHRTWHwy9DoDWXCSUuvd7YYkT1fefsNHTckZcbvEzZp75zMcrAkaSqNPncYiWUBiY1YDvh58KZ",
  "key14": "3QTcvghr7hL3WBdHtuf8tLeJuhSKKESbQ8XBosSnJnMBbp5fhUc7buoDaUazDvwdLDhYk6KqHhEhGZXa6x3ktYRA",
  "key15": "bNGv8NGXnq4RGEhQdbXQA79TR1aSDXbhRzQ3paWnG3umMV5PqKDUEN2ukiq6i3XksRg25m17nYQzKaJHhiG9nmg",
  "key16": "4bFdUg3uz7MLjwC3Ek12FStm9i6dKd4VuGMhNUZPga8wtXEakWwyP6pW6JWsex9SQGXxAb6i25CMrCSRGXKbCGnj",
  "key17": "NJpCWN5nHbwsp9azcCnffEEYszH4sFGnePMyubNg63p76ewQiSBSN72etL2eG8BZyhqM8frwRQp9EGkxd8KpEBp",
  "key18": "3YuaFqoYNn26aVbewyjHDQ1DGe8C6Gk1d53KPvb6tdwvxQbq7NRyADr3197XB5YDBYF6fv7iAXfMsoiCuCFQstMm",
  "key19": "4XyU7hrHiKCmH9ZFrp558VURjexExpuayhoQapE9mDRU69cQ7Fcjih6QPtr9ke3kStqjQn888dbVGeYLbNdzuuGY",
  "key20": "24RYi8529gGKE6k1LTyhEN6uecqbyK78bMqK3jbMeeSQvcrNZT9wuprBJLABK5gW4Hp2nHuRt2m6GhZTdoeZ4JKi",
  "key21": "E7wTGcSsr8mMyrVbFWVDXCG8AhNvdDPCrBziYQbFG1PXyPFfKy3VsjnnJcG7hsnhDxCqSoRzaUZejbNFXNL8XHN",
  "key22": "67h4yeCGKLL7tRzAuPiGnDBHpUyar5nSEphAcZ6EYdhnoKTicH8a1CC1qpwN8W53z6tJJjx3mNpXa3Mx1M6uGGwR",
  "key23": "KfLPfDMk8uQFdUvkxvwmbkmohpEkegWm14MNLhkpMq5FQzMG3nxbxQhQQUVDYMoBLbRG93JEgEEkuQMUje5LcWe",
  "key24": "2Auqh6nmoHh6LBRyS5zrNvq8YxNfzNgZ1RrtYUVVLqJHoK2jhxuxBTCg8neqjegTGHd1pa53R8U88D9zXehRPrc5",
  "key25": "2fxMxJ8Gp2gtD1Yprh2yRXdNXvgMEkNSnedUJEwL2v3T4fSHR2c51sQctER2kvdhkKRVML1tfkMyCFwEHwdRC1mo",
  "key26": "553HV1LdBPV5NXetVy2EkzBeVt4fox1BtR8vWMuoupQds5nmCYodg5XRhxhyDh7oSWBrqYi6wAXrSf2BEicWaXUW",
  "key27": "34hV6P9cX2yKUfUjGKjzgDE4m4tRi1gUg2asPNBEtiHD3yRtCNatoAvi1qrN6vfYbvATUhxtAFFkYoGGpRKRzsXT"
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
