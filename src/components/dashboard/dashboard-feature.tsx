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
    "4BAojLw8DAAhLR9iBhiYYb1oLvjV3FBEkYbTEWvSXzKLMxCjt2msG5N67Vv6Xeo1q1cTXC8eQKTm6knQRVLQZRTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oStZN9a4mNNdzWuoZHskqtxJjiwnJfxFc5ukng8v6yWUPCmEdTbshuZkf6kmHfVr9mQ2uCRsw8TEHF3hpZUXmmL",
  "key1": "kTN6vXTHeWLhCfCUeAo9j471yGfH2kDRTNP8yKJUzt4JWoAfvtb32bKKhb5QLZHjUKjyAWfGLA5xbk8yyMiXgpc",
  "key2": "5qgQkxpi12U2nZ3zyMXf7DVEbpeD3MSnsoLajV5PHQRN67Kf7KMUtVEwxqDsGyNZZE5JPo3M64rhvemT4t22SD3x",
  "key3": "4CG675txm2iT6psbeWAAaryG1bkzXM1Pi9rapsem12awNbLhzF46APUBNaWwP6bzs9P7RkyjDbK29wK7BBxHgUDg",
  "key4": "3MxDK9oibfmd1kjobcP2eppkNTtt4b1Qpo23PuD8L9tBt7EHV5bPSSPTokPiCHPtQk1zDuc4pD66V4GyL54h8kJ5",
  "key5": "3MDaqFokpQkrfPQbFeJBG9sywZHFbEhMY24FEDphoSPe63PV6s5E8771e12kkWUXh4DPbVnaZjgqrQbjG1T1pGjH",
  "key6": "4rA2XRBHU7SSPUxc3UM3WeJ1kVbpQU98mMb7crZNDMm7VwdT9eMn2ihMUEWbwYcAV9kgyfdxMJ28Rz3PHXAQL3AV",
  "key7": "xaWEZ14B1zA8XjimwKyrrd5KgJZe224YyUW42WN1Uy5iVLfrCBJPs7QxbXrFmMxf4ERwQNfWJb1My29nmmKq1B7",
  "key8": "FaWTgguA8HEqA7EC4JhrTq7SbCwUZ3MF4SA6yU1ZENC9sbGp5kFZRtr5LL9ptCQv1UcHjymzrTJe9U5R71HTr2q",
  "key9": "LkoCix9ttReNDNgkZXWBaa28qyTbjfEy3cFJUY3jGQaqCTLfKFHxEe3YZZud39jpbBVEL1dJc6Jq2qJN4buVZWC",
  "key10": "3AT5rQkNq9dw9uUW1b4nDj2PF6MxJvtoWLmzVw2BkaNUaMVtPxMbJBBQoP8kojBYT3youpNbp6wMdAtzZZ5L4T8Z",
  "key11": "37PJ8R9M7ULYZJFE1LSerkVDaZFJhRwkVqWaTJxTBFqv17QAWZwQsCUdRm332hKgdNKK1abFyCTwBRnDrmCx3XPU",
  "key12": "3kXh3zMFdKyjUFoKwFMjcUaKXJ42KXyjTEUSkd9dDSDo1itEisowWaHNVURDFMgrCrrdSRwGM4MRx4tAAT1CLodD",
  "key13": "2h6sy5jQ9aqrPwgerUMEjc3QCLtgGkuCWx6G4NSyqa11VhDfPnKPmmvcAiaELJYCCp8gh6TVAB4TUoNHjwbMwfUX",
  "key14": "3UmU7BzNScnoDEm9RWgdKcnM3TApj6Gh4JcPtdxgXytg6GpNYo4yykikVAWhbV3K8ofqjepEaL2ooyxp4RNhA2YB",
  "key15": "3hrDL3gsXov2cWLTfd2N5q7T8XVgidZqQBUDHPof9p78bHoncMGVWimRoDoVdKUySPiwAGDUWT7qzfE7jHzt2RTP",
  "key16": "zNd9Pf6i3HmfKg9xsajmn9BH5QeqnzmSJeRHHjSFD8AnkXrQSkSMBvTi7ixDCFC3E6ZzCt5gBHE6o5EgtUmruQv",
  "key17": "UxxgPyJDkxGyu2SSW6XdsEmPwvfVKTTzbEZoX7tjVqA33RQ2xJ3gGcha2zDdLvPFJbzemX7HQbqWWABnke4Mo5v",
  "key18": "2WhGEuFostC6Meu4Wpadn7TTXnpwov3A33p7Mft41bzdM2eVWFbykEXwomdJdqEcb9TTgnUbiM4nkN6YZnx47X4C",
  "key19": "64rF4xnybJY8NF3PGSEaf4dtre6zNW2WvR9M13wmw94C8fDSREjtpvWyqvEAoErkwbQTz444SMiBhftCNo3JVUyw",
  "key20": "V6wjw9dWyP5phLTmyTHbpUqg7b54ST79tpV2T6dux3vRwPDxpKvB3AYPXSVKc7bjckUgPzQZhiNZHdRV4jzQSJ6",
  "key21": "3PZWtbieBayxgB4swvdwQhNK4KjRFYtfPWn1eqVMpxXh3Q4JxMrthka29DkcdmapEBSKh412z84RtT9gvzTjoroa",
  "key22": "24v3XArrjTyEYvyruNFBpzcLSeMGHxLgNM6ysrqpqooXgz6HJpj4KQBSYUnJdYT3LXTFt8x3xcDBzNeNmcPwcaoi",
  "key23": "3Ytxu3SVEMnsVCxnFGaL2xEyghSEPmFkctx4L615zApxpX8b5pUe1wmTNCABhUeYVkAbk4EUxvPE173x6Z4j67fe",
  "key24": "2KJUPehHyELJgkxP4pfA5Xqi1dwZ43PBd4KBgSwB4zARumUKzKpW9sJTdZsTyL33F2KTfmGyQEaYwXjYynnUZPgK",
  "key25": "4EBBxrJGG2NYXtcaNyscZ75m5mqn4Rqi1eBE7Dy3J2YK6RYp5mG5W6o87JcFP9cQjr2M6CTysD766orwQ84yunCc",
  "key26": "G2QshQerjoRiLXAiS7XFVJ5nWUCpx26FcnRcHG8QpLcDbJhMSE1fjzweovGQHmrnQqFQoMqu2rBDD3HckYvGCqq",
  "key27": "42EypFLtetZbicuRwg85kwvXQEcZj8NdPbPkRVo66vwPzYh3G4XXqFeDrfDSFmmFqb29ftNvu18foBawGeF9pm2W",
  "key28": "3TXo1odLDMc813ywJPHGfcYc46gNm2MZ2EbHtykxq6iMEzq3VnzhZWYbg3Gdhy18YcKF7iKwUFid1hkcfSWqkg6q",
  "key29": "k7yzB6XU8BhQhAYYw1jDUrF8JmstF9wzC2AAjHTjQxMt9XX6MosQvH4b5JQTKpBWL6aipmFtzZSK8gBeQAZB3ej",
  "key30": "367KL4BodAQDjp7NiHnQ5uM6dahjnD87dMXvaZdUWwptgF16SU6fqoQU1eU61XqGNZbLkJAA2EK2d74LPkiKjSiM",
  "key31": "37h6sVodDhzTJvPAhgiPkupWjDjdtGiew7oPcY5VfRVmtTzMM6MT7dqYp6gGLaVt1sbXY1AU7pnFB9B93nE946Mq",
  "key32": "6hs7686VyvZLhz2iti1Uv1bxYfSqywPrfXC9tHMKdLCahzsMjYbXxZbSJayvoRefSzGWuvfi1x4PTpSb1uiYjRf"
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
