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
    "5rBy6vrQKzoXV9PicD6sdEiTL8F9bbXQfKZ5ry9cgdNZCLyhrPb56yWp8PwqvgM7VmEg1mMfEbucpW6Uze7tteqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFyJseQ8BXW6s2Vf5m2aXSebURFcwGXjCNCXMPnwNsbZ4uJrtSKyDSWRcf59i25uy8iocWpqcsX7EKSU9jmtrtn",
  "key1": "4HfLN4vwpUnxpC7C68E9xoBXbGLYSkuAQDwHNUDYrbYkMgF2gtkc3LTXBBrMXwsUkwz3TvhKi1dLQyU3TFn7fhqt",
  "key2": "UDz1RQmNj4ZmxNj87wfxQ1iG9bk7s7JykqoJwLf9Gqpy2FxKquSJu3FRHJHtni7ynNj7gJsLy5bzu7H7hEWeSSd",
  "key3": "55im989nz8Nef7UckbRmr8Wfn1c2n7xju6ZQ48rnzSXZpqFpkFcA9Un2m9MvSXiJJms4Dee7nh9taqgsCWARJs7u",
  "key4": "5NMiuSaqoazj7zZBbmZ884PsZWDPQQb8XmmtGPtj7rDSe2Dk7hyZYKbbDCB98JUjdvkWycZtKRBwEL8t91Ai2mB6",
  "key5": "5Bus3ntNYwWrZC6RTGFLmNKJPmgPWVgvHtm3tWXbE7q5g6tXUymFL73M6iRD6fcRb8wQMsqLGugJ6BBkcut3RbzL",
  "key6": "2q9kNiQamCB1sobG4CokFF6W4hFFhNcxRURqH9qSJGGp5WZy1s4NeiGokyJsuWnvNdHYRyzb7x25NUPJXLZ8B6Y7",
  "key7": "VP2kWmjTi9d6mqaSmg4puNaENXcHpb5d2p6EDdS7ZSQ9Z5NXCiVYxenBwZmnF4LtQLg6DSRw5Xz8pP3PE4GVHsx",
  "key8": "3CtYGvMftoCN8ubYHwp8t6TAuYMeRztQncLYWwBHwHdmWtVbQtGsyw7ZbcUm5okN1N2qfQnJs4AHpJcP3Mnmr1n3",
  "key9": "KHPXoTeQMan1QCpfTgrSUj195ZvvrPJfdUpA1YiVeKFhFpj7mCTUaRuWZVBNzjK7nHKMftwhxwKG69z8s16CCzq",
  "key10": "5jWAgYaz3dPVS47YzVY78EqAiuKopr1H6MW4prwX3xHWPWu4wci9TfnPzDZvF5xysBESVH5owddtAw4YvevEpeLE",
  "key11": "3ccRsGjLmszLzJuUCnweQr89gWvj1DTnjArDVx2rAQeb93A1paztNeeUefeq7K3Z69VmtA2W6mixp83HNKYRxuEh",
  "key12": "3VoTiAe6iP3WnzkYC7XL8gDWNCYUBuREEnAkJuG764jpEkAF7UaLQpntxnTRACFGZMvMLtwSiBBSYYrNFP8zDpP",
  "key13": "3FzHj2uYJxFdmETbTn6X9Wd7KvQCBzLAw4ZvtufsMx1iBQN4uVUProLStiCT1Wze1zBauEfhFTftfuBGtLrzntFM",
  "key14": "5jpGMdrKhHzamb7UNeRrEy68PGwqDUUteZDKKxgGGfmnwvDD9JwkXct7M338cWbkrPDLEpkHg6Hk32Grzu1JwNBo",
  "key15": "3xFjgZe4tTi9juUrWTVGjUzMemKqJeUCYZ5fTfD9DT5tyPXQeM3Dp1Bj845HEZZzrWG3DSqTk11PZDjD951vdmgn",
  "key16": "5yZh3mazkV9bdZHkbexTiNb24ZF2HDTkwC3fLxNoPhNAorAa19AU7TpxKB5G73KoN3UMgp7jXQoyMx9VLhUEbnT3",
  "key17": "2YYCP1sExSc97NeKqgEq4imbmH8kRk4gULp92K17H32nCT4qcoQfxLLgGLYeQLhPWj6xap9xa2TP6gkQfa3xFVMp",
  "key18": "Cxg916UpbzyYiFhxJTLYwikXrFGzcib1ehr7ahRMicdBSstau6QzEYqgWUKCLsif3dE1VDJej2r9RZRbRr7gM4H",
  "key19": "4HFJFaNmpjEyTSKC5SxXh818SwXm98MX9rwXmW6bRZcZn57BZP7tB6hVDk11YeJBKgb6rhZUsdxrrkXCmXWp7K8s",
  "key20": "3d6k1CjfJnUZkFK2FuvNLYAUa9pYyxcH2t9VGg11U6zAD1SKi8ydtMBPBrWdV5W11cJ8PkEYhb8fy7ckkQyuv8qv",
  "key21": "3vzQxdxTDq4qV8MSXv93JV1QgFTLpo95kRdEtjFEhrvT7jKJu8zh987TdwtYdJnoESkFyn9umAmVkKvePeHygu1M",
  "key22": "4eRumUQxC1oH3AySMC9kgwxJ41J27q2ZvK5n77Fm5Su4zcdka8rtjGeGMpPGMJEzAreEXnmg9AH3wJejf5UwpKAk",
  "key23": "dYirgBGFDYM3JZmezChbTw2PnEnU6tj14KxWj7pb18ZFGpmM4KQP5HBXFkV9MLrVQ8FQkMwe5LKsYL6B7S7hJ8X",
  "key24": "57GdrNY9fAV7YUVq1EoGnF81r9bkGuQhE6T9Tv6RdmXrrRjBBeReogrVeaDSZvpr3fTAovSFbLnHJokmGGBV35e4",
  "key25": "qsU7XxXGvbExn9EqkFzBwXgGxCoWA1mF6eaXfX9nvDdb8Di3TxjUzthXQrbzG1BJMamsdVwZDQziko8HZbBGtt6",
  "key26": "5s4dUMu3y1mCYX8cbmpshfFGGBB64uuxwtbic76QZq5QS5gqTz6Hnfz7Bi1kgCHukYkAfZdyvYLGYYzhASkvjfWi",
  "key27": "37XckVSVHXJoHLEP8U2ndbB3M7vJLpLp4r41pATzABQN2LjuHDB3PXUU17xgk7SU8Z6aFkmzn8nMa1mcHMyiWLPU",
  "key28": "2365RrmuM7dA9s9wREqMtd6Ri2fhZq7ofQj1Z2PPspRc8wMsBse9afNkVSTkdWWC9bZSy7TxRcKAN9eGK7FyDS4U"
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
