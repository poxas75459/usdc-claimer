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
    "4cuDCRoyPuFGJfFXTDZqiz9Z8Thh7AKMtkx3CJqFNR2J8ZkUSFrrDiZQJ1dJwPzyYkqUme1GBKrwvqMVQhHrVjrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W8ZGWwWn9DDMimjVbUNUjNVZkuyKE8TWgTfPj7kADPVGeFWjZBWD3NEgvqiGo2oGgSd17ixnZfSXvXzKSjMvgVC",
  "key1": "51cUeB6BxuctHcQ42ECLrMnWPuakKXb8WSTowxBiAmpD9nbhh6PHMaD6jfVq711Dxrb8WZiue4vCEMgx3YQQRSFv",
  "key2": "2doY5STVrMYJGxJDDhbkgQB5yASSrLvEv7uTZCBxC1FKbHPb2YhyEZVhEBwFcbAqd1o7129Gq9HVG2aC6PGyZ3Hq",
  "key3": "3pm6YiJbX9j7tWWGgNEgZo3g5RkV1UQmrFVSUZeMo6HQVmFYEGRoS4WNqkB14R9bXCq1JQK7tyFDjr3n1M4i8ukB",
  "key4": "36ntDJoabuHzGWnqYKbGshq3zT8xsDq8JzPW8fYTGSwsEqFsLkqpD4BxL6dwAc5WSbP89cR2HGHhB9dcpD1bUpm5",
  "key5": "2WLZDX4rEufeJ6nVGSYCdt6mL8QusDjqMzDF2B9YsKJJ65hSQgVk2ofURcVnnntMtV4Cz6C49or8tVEqZ3g5R2HQ",
  "key6": "2osB7sKxVw2r3L2rnFEakzvNeShH1BZFAX9F2CEKe42iGA99hzkwyD6cD51sRtoybPajvcDKnaC3f1jaTJckrVjc",
  "key7": "3vCTYAcBWdsjRtaqQRP1ZD562TzdwwMGC7t7KyzU4ojss3DgTzhroLzWAfPgpPPC8hnp1dJ5SGF97P7K7dN7DjTq",
  "key8": "SErJ9bE85E7ErCbmwF8dfYAzanyT6kvmm2L2KzG3CR8pSEdcixU4nQiMdD8MW4gWZhX1kTp7MwnLGRgo9kU8yuR",
  "key9": "5xMPUDhjYiFyF1E4U5wQqXW7HryntQzskAGzts65Z7QkUEVPe2jE1J96oJg5UDVzzKgCQYYZSsqbMH3vRpKYhAzp",
  "key10": "4SZFXaCNAuFYfkAqhG7me5VTV3Jyy2aBQSb2qcRdFQGAEt9Tom2qfzuCZEjr3sBHXrovjs1ewuYcLaJgddgk85BG",
  "key11": "2nokSQTT4QKW12Mk4c7U5wpc43TSPJoAXVpbQ3RMH5BfRni295T2BD7VfTQVU5ysVh7b8YcHTr2LHRwWKtqfXfr4",
  "key12": "5L3rvkiWh55CZpvFGB6feHhkvXUEZemnTQqBWpEqxMuKoDrXrHiAKNRAsf3fpr7svhRowB2oroyUB52E3omqgaTF",
  "key13": "8qkdXUdpYZc1DJg9nb8B7cGd3u6ZeMRgExt3FESCDUgWDB1KJujF4KrkC1fUTxih1JY6oBdfiZZXbswcTCwBmSb",
  "key14": "AAZMgDs848vsorhczGxj7wTnn4zMZXDjVoi48XxhibQKHwDQgUTb1QCxHSUuLR9a8R1HbkHgJuW1oJ76VgaWkr8",
  "key15": "566wRvG6SAJbtRXVtQeBCv7S5DXHiJcmEFMKGx4vkEpDtQyuGzzkmX3mTcMXnjDRcseQ9YgmGo2mgkqsRSiGrGV9",
  "key16": "5pZG5cXkT47m7w2n1pYqjtAmmzQ4UENQ1U4kALfa2DQBwzXjShV7Mrf78gk9ULsdwrAWhaNa4QMVKeT3CZu3gaF7",
  "key17": "3YZpo3gvEmdCGRw81BwbLLAX9mGuzXiMjeBTyLAtNEjX28iQoSJf3S7jzYftbRFLttdfLPPyE4dtwEXGxtjUMVJf",
  "key18": "2RyxLS4SEnzxg7BktFfZFiTWZVUyciAAAkb59E66dCucyJJJPANpuD1rNhECFk1m9ZP4o54hhqZkkf19ynBgcGwY",
  "key19": "giPfzoEab2QC3Zn5Zdp65v2TG2jdZpQLU5uAG6eyUeQrS86dYPLgVrVwqLpBVtAYvghEbuMCjGqtXr5q6J4qpXV",
  "key20": "65BLo43zq5VxtsRV9S5Xo4bgFLp8gXYoVt5CseudGCMxJjw7R2pyJ1tytsxaAmBKLhEJ5Sx3sYgkFVZFU9dcXFps",
  "key21": "5D3mak89rCprjc3J7KD41Zj3pQ97GGdUjVzDM2b33vt8GPJJ8ke559yozFHvQ91rkZjqJefrqmwRcoLvuWNLNpvH",
  "key22": "4Fuape3YASJvLoVNPtBGhzE5EXNgunQKaq2HK7bM1c2xdHLf3ZdiovzstcbfCNn8McnLQdoDfLV5EmrWm7YSE7wx",
  "key23": "2js7mDaAREE69pJdEfk3YWHM7nrsqWNQLJWCoLt2BX3uu3sXv6vduBw8q5TstrD6BNJyYzvte6f1JxcVLPiW66gz",
  "key24": "5ZHWHHUbSiGGMDguCNhTha5dHuJeJP5LfJp6Wo5rTSRqATsyR2MQAE942YUFSuCCL5QsvUfnTLoa5guaJWkBzxpA",
  "key25": "tKGukZHkJTKbKfud6nY2eQbkkqNruyWapJPFPWVJY3SGrnau3So6Crdr4FNixD9RCJGxT1DFUw1NTehrerDhfsA",
  "key26": "5Lbn5Cjsxt89mVdkRHbFW36VPyfNroZmfiFC1uD41ZffBAXjR1krfAMCoPfJ9NtTgArk4h9wmSqMsBotiPnVGhCR",
  "key27": "C1sPcGo8eJNzvMfY36YHhdMq1Ugrky5TNHwoEFGvjdtvTK6HTsWfpsNdjKS9V5FfVw7Vbavz2iiAY37V3NjsoxR",
  "key28": "3AM3DTQ2wYTxfJF2yCznUj1ci8oySj5i2qUXVFhfwbMxUK47Hf2MbhXjwQUpuecxXrQ47drUKAKY14Jki2VhM2pe"
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
