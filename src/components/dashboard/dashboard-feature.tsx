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
    "4Kx4TZzC8cSFoSUCQyQoGW3k8uVjh8AjqzSdmDGL9vbad3c9DtfGXvdqxHX78Ci2Fk99Ueyq36Qhrug8yR8zfAC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j2UQDv4oLBJuaePX41mkJvzwNv7hnRBgwZM6Nv14Re6NTX5CLvDtW8rXMaTmeTXq8mWPLtvTHMUmE4eD8wBdYBr",
  "key1": "3Xc6U8uC5FGEpUPDZcYk36FdGnb2x1e9kQ6jUFTpNuXa6KDAc7ovRacxnZtbwbkFaeoRNzJKGYxNFvsnHQjfLj18",
  "key2": "42sc6u27bJ8iiPJFfStoEVy3ubqfXkqEqgZmuEpqhfkuPKojCt5SqWbagC7QGbDiRVTnjLiG9kShkztykT7LhKbp",
  "key3": "4jzqmoo5A1crJdma8R1cE9LmX9y1iCk5BJvGYkF67KQSoeqStMAQKKaMdX5divg3XnYDojwp7zEJzK28aDBcAYNw",
  "key4": "5qs2D31rmYCfqsGBfuaLHPgYCaeget1rHv1ckwmrcoT9SxpN9enFi1xvn6dWmWpFrgNKdt9AWSBzQuFckYBhwoji",
  "key5": "3E1UFgy3GPM4De4fG24Swd11DGrKwXCChP9vR9fYEukKRYHW1K2iE8WTAgd4h98rVyEt2VQjtckjxWgHgiRJywL3",
  "key6": "5gFxeKy2Wt9qPjb4qNfqGM5wLKdYAtfoY37Ri9ZJNK7a6geTKdvtRTGVsy4ThACVtdmLfVsXjp8t1w5jp6WmXez5",
  "key7": "5b7tLRCtpqZ7P37cvZyMDiPCJd12LeSfg19EZEUt5UbxyNrXzEJw8WfjiYYFGdtk7HufqPy4QxcMtEbB5RY6Cx5c",
  "key8": "2jBd3JXyZk7KHUPPdvJbCKyWesU7wWNkW6PfPZJjzSvaeLgSAxAKPozQQtxoZxxaa48nFdeUMLvqPcvs1Dp5TCKZ",
  "key9": "5yLaLwm3HuED9xADPCboHRNED89yxcCc6TjEMQEv8HZoJRMubz7Xb7N2BmGLjNdn5RrUgmC1moeBnen5zMdfyai3",
  "key10": "4zcWupTNbgwhMmVthhxN6WJT4nRu5SGMKkWcZoiCfM3cRT6BZvYqeZpSTTC1rrnfxdHjHY6KmXZRycPZJzZemnUy",
  "key11": "BxwFF1iGr4uBk4e2ZAn8eJpxPtsb39PjDL6yb6Q5gHNo3CKN98DjHnPBYHy54vZkt71oNREByFK6LnUY4QQhL2z",
  "key12": "22TrF4WWZLGvVhRizHBTkPbHi9eQBqbexkWm5CZqQerahmoAtBfse24GYUpSv1GWamJBMrJLCSSdM2vPdxWU1ES8",
  "key13": "2k29vHb9dwMhbE5YHeY65uAiGspxuwSASXuTdvPee7Gixz4XGiCU7bPGo4qvBT9iMiSYjhdixMKmB6RPxPmNBcAw",
  "key14": "2gWiKGjjihvYHuVUEGygSBrgFqQCRLFikwjc1GyUhPi83Gm58rFkmb7MJJygc2sj7Q89LoPV3XEH4yj6m1g9TCoD",
  "key15": "5oeRsHDV9roJdAeSNxPyzGyVmyMENT7BcPQUPmY1G59GEcPtjUB7A2Z63PdaYhr7tKyENv5xU4cHM2E1h83bAAMT",
  "key16": "q3q6jZwmUkbxKHxLYpUxVETUHixuFqEH8maZeKCTD4fAHxF9QRhRE5ui6ezh9Ys6oQZov6h27KzZi6h5HVaTB3x",
  "key17": "5d2ZGXJ68Vc3hzagMrHipkNLGjpMS7jYQoGSnw8Ey6SNMixucWnbAhA8JTc4evpeCEdkw7w1Nu1hu19zmAjRts64",
  "key18": "GRed2L3bmdAgkVSELwaQQbDgm8MTSGHULS8Aysj5dFhBWGUMLdbW3X1Qsjk4mkdjdasMEZSxgLiJCHfTFSDZJ1W",
  "key19": "5TJkeyynnbz2MLRKRWTki8wqb6w8o2a86841vkkayw1UrxwizqHgrK9jZmXvtYWdXuFN51Ufha1VGLh6GqvM2HKL",
  "key20": "Ud4oRVLpobQsvVzMgDw3zgNhy2Thb96sxMh4LgNiaj58UYGFQYWW5wbx6s7X7Ja1ct4PZm5s92H1vQu1WhKBMRG",
  "key21": "48c4VRBpq7Ju9gpQA37fiEt41vcacBR5bLQJMCtnvSavD4rHfsHwmdReUfreTndehK6YEBgj17FhHKxKy85YApGN",
  "key22": "4yYSVSJtbsJVuHcDre586KZpR1Fay4hrMnEbHMzZAYiJcX2cyaCu6kUgUqLiH87C2m12uVJANVcLuP873V4dKTT2",
  "key23": "5Zwm2PxsE6oxHDV1Aq2qUYiZ1A1A6cceky9NpesNcjLzM6f6Uxd64caeLoDduetDnVarzuzqh32CEp8Bv9fagJbo",
  "key24": "B2dbQtazM1TxQXzdc9VmcuNjYssgSxCbHkjQA3QHdNWxdMv6H9e1zrsXvs454SYHEcEWMErn2xLWy5V3Qj7USfD"
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
