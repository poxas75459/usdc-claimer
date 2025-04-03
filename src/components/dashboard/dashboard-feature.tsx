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
    "VeHQTSFrJB1DzApamYhU5yZwjUiXtpSRn1SeS1UCUiGgjRad1ZDqRuuCkoMnD7afuUvmehYZxSuJGhLdQrLAXbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkU7XvkBL3W1FRRSdh18kiFYCRWQfnHDAEwnioAeuySpgMX5zjvpuHnwhWBXTcLemDiKyTkyZ9LcujT3b5EAd3Z",
  "key1": "CLVfKpCg82inMDVzPb6A1C3hx28XpmDZt1Hhnh5qG42K3MQ6RHHGPPrFgqeaKSLvhF4SuC7G4yubMRjDSF8jekE",
  "key2": "23tUSdS7LXCKNPho22ACX7TCvg9t4vnEBHoWCF9ZTKFJTwoXZ4ohfetQqy9uXJoj4k3WCNBsSgoN3CVB6uTc8iJU",
  "key3": "59YiHhRHTBTH6tZBdVkPDpGXQNexJjXYSHQ4XxQs38mb66uT2zSKQFYpLQLJhTVCZgKBBbHyFcGDTeVxAsecRHbi",
  "key4": "2mFeQnJbQLj6DYPMAFdZHpFqNr1ToSNP8e5orasNvoXhXKpkt8KYMEbzkW4zmqP5engfUnPUJjCZn1U2KXAKoxM1",
  "key5": "2MneJBf7gew7qA2D5ADPKuqguYqpZSpcy3Y44dHnLizwwBR5PMS5YUbzrVp2ogmtCgqxvYKwszSo9L55oZNGWsHT",
  "key6": "5qdDj2MmPsG519Cp9YqfsFV3p3D2rLakwEa1K5ewfFNCaFrtzFVQvqMVD7nrNo9xGg2QNPvycciLkLAjPzrfM5K8",
  "key7": "au7YVmWhQXfz1XkhFhjF2wvSv92xUUBp9UZpEPnTqxL1m1FVcUnDq7fDTwgRw44CVb27oMThkUPEMrZwRaqFb6L",
  "key8": "2RxQ9KKz7Gix6cVtp3oCtK2vgct6WqokoLASBRJmKLwCQrT6eFVjH6WAGo33n5dMdSyyZvTk3kgXh6eWrwwEzkv4",
  "key9": "2gDbd2t3o4iycr5acCWg63zNqgFgJiesjXJbd7h59aPSxaoeKGGXh6XAcqTTYTWFzDa9SykAakY9YJtoUBYV9MYq",
  "key10": "2dUZTsXr7V2DiSFwydfXZ7HZBjDJ9Cqu9v1chE2LqrXQWJTdhv3AZkJPXfZGBT7e3qFa6Bhyi8QA33XrxswZNKgN",
  "key11": "2Q6YSC8D6CKokwQM3JHxEw8MYknipEo3uK5oZ8jMWcVoPZhJiS1MKVvnAbrJ8nYhELuft1VaeqhxhMoGa1pFsnN9",
  "key12": "2bdmH9665e5PuxTu8Xx7fYTHCWjNNiFC1bJk5NLMoE1dmTXckzPPidMPjf7FU5TFzHqZzez1aGjvrpw2AATdo5ns",
  "key13": "3aUXebEwpPvgxfVr2xycAYNbyLwBpWm2LKTy6PWnk2PbfWAt4dLjUSzf4SxQamxkHB1WMJUm4UrBRDuAEEx8yCv6",
  "key14": "2eC9UFuGqxAH53dAHqAurCpa5FGLR6K33hpZCq1dHbW1rzyPFeVKFbsFFfxB23hLLicM6JKaMdE6cnqnhHiNM4Qk",
  "key15": "2fsdiYS1YezSD4BzqFejerWAURgfV1TCEvs88v8D81pJnVfnWt1tVyHdvKR9L8aa9gLG6LeBLetxCr4sArmc6ePk",
  "key16": "u6BBz3pJrWd5bhZxs4auJrbzGmdKAU5aLGqdCfZQ7XSk1PjekUmHP9NwX1WPYtma8ko8efzSeyYszTqWV73yrtd",
  "key17": "61WCtfamPynkxb3wDHMS1JonZMKTcZ2bTU5KWv6AJZNSrz8KECpfzYmHjHAdSmcrk5VV6c49yogG1MnYHnwUMQiC",
  "key18": "TyBWdMFM2fF28nKMSsDak6eRWRrSvawvJLvPFhE854WEgoaVGY45NGnvg9JZzGQ8qDdwh4hYeHEbmpckPoDapHZ",
  "key19": "WDgLjST8nPj9364JCSm2KRcBDmqptdepYb3kkcLoQNz48SCH1ReUpw8pzrVZJT2HX6tXx1ywQYfJRvjEQ8Uf3sJ",
  "key20": "2mpm3UkdHMLXhG5xA1BwW3KrNCE87ou7PTpfx2dacuTSmwdLHKRbG3JiJZRiixU1h6yGx4g9td93wrjmCjA7U9Hj",
  "key21": "39DQkjfKzzZfUGZjTw2xb9MMGTRFuNSawxstZ9hLVwvcW3d4A2v5UUYm9NzG6MZLShppEPepaxBtTDfZPxEQuhqL",
  "key22": "4tvL8KbFDCoyEGnYj43eGUwvssp7onynqxZoRt7PAzUUfaEknrkTCm8XEKdCv26qCJ3zvBee7ZN8CGXs9b1oDqYk",
  "key23": "L2c776vNFBRGMQSuVp75mybnApnDuZepT83FxvbCYFa99ev1u79siYPR3E1oPU6UmtrsaZusNJtKo5Xm3EH9nFk",
  "key24": "1cxDojNLjAqsekHDffHduQCuX8q54LaRRq5vjAJBJRzzUWEVDWXhDJ23sH3gUHbvg75he8BMxNYkRLv5CqYL4mq",
  "key25": "5rBakBHkvyosW3LU7RdRBDx6cUpkEc1N6yWAdJs3dK6xZW6my2eYrdbtHVpLh7M9UY5dFrsHm1in75QsBQq5cjJF",
  "key26": "2EddGoDbnGBfP8m14zZJQRjUa6ZmwZxovoxtmwBw1FRAcqBed37MGemzqYEjaEduZhHg9EEw3ZYf952qP4s6u17u",
  "key27": "2UHbCe8Bsc7j5HiQcuWQhEm3Mv9Kw6EEXLjWMFFtaNvyxfGLcoeHMzXUdu36ZE2LQqr1aeiLyDGd75v292K5JZmS",
  "key28": "YgbmC2aEgsov4TLtiWxMSJY8AyxmW7sXDA2LN1EijCfdof8uY8pA9bdwYngG1N5TBke46oCv5ZrKJvGTN1Uyggy",
  "key29": "5H5n83z59qC4mLWNXENEsUw1yNcEVXrzxZL3ASP3DpQAQeKHoXmDtyFxa63VhbukWgiGGhEf1u9ZY2zUWJVMK6Qj",
  "key30": "R6USSZs1ZFbeQVK5ZkpvQ9S1owtZBiHDX5zFBtLhs7KXVqgpMDYwcc3jEQQSN2yF8hh5QpESyJ9hRnRmmUWM5LW",
  "key31": "34tdvySo35d6PTXMSey7XokrACzLisBXejFY6tH6svFC1wnBdVUYY8TtYaoM3HWWxFyJPL87DNMkdXodT2wAk9js",
  "key32": "kgnRrGvygBLNravb6q4fzuxSydYK9YBL6eZ5Wbqnjyi8fYxYTfSkg3J8hy42hte9AVWBhC2pySkqxgqJxdnX5P9",
  "key33": "4EXxzeMBG4FpQX3ZtZEogPC6M3nKGErLSdpXn3W3t6yJu2ddcHKY4p35iTdkSysMUBtJuqqUdsmaE1nHn8kAuEA2"
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
