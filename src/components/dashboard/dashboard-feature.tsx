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
    "5sWHkpvn3zt82V1gCvBTN8VmrhenSaNN4y8UvpZWPYbVSqwRQhr4pH8Z6q8XDQdVZTkUMmrrMDnhWCJjSZ8JBwJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VhAV3WabkvBpNf4eeTJtdM5SC1deobaVEEa73Te8bqZtKVhBbYWvEj4DcoydMxuezVNaACRgsS6MZ7eyX5L7tNQ",
  "key1": "5eZjWy4ERuuqFWUSGbjpKDVothD48Fr169Zm6rZnx8bJBgJffyey9G5WQ73cp4puDFRDPvspXe11fUwU9C1wWKVu",
  "key2": "5Nmp7G49Xf5z9C1ZB9X1WMoqFz4vAg3ssZzfo3YPV8NitYwkHWaL5TZ4oAxGYSBLCDCzAwAEmkt9jG4U2725zdCv",
  "key3": "xjJ8fJSAJxMo3ppmwUKXjv9u3KZi59vrWmzXQnTUUXWx8FDEeLZguMnsEDHiBPtzNfiEeSspEtLsQ26bJnTojgv",
  "key4": "5PnP7R4vUYzPx2G5HgvqRymZvRN3qCLadMYWs4pVCiBftKKKebTNa1fnepCyZrfS8BKLZkD2PCYJ6HWKBNje9z9m",
  "key5": "3dtWGP5Ur7f7eQbSKJdV4jpZ3fFQCSUY1NavWGhcc4HuRjRMuMWQRPwDmjRfEQWT7wN5xcNtxCHgtZyW5RsqQJ31",
  "key6": "5x5BFPDX1N5n3NmW6VHKLecqV1KBZPZN65QjAPZqBERY9AJuGZMJmFhfnNWrMo2krvCRcDNar7LxFHNGygAKAtrv",
  "key7": "uPi655SqkZGhdZutLsqwhhrMQAZJHarwUr9YmSmvADkaEwKEtjou1BScwMkiZkcoS1Tt8Fmm2XDtsHy9TcQUZNE",
  "key8": "2YoCyAedokMhrz2yM6vFY568HKuuQEposeiUHYo5pJYMsAQhMT2b2iuPuc8gfEb94SfBrSeoMMFToASNoXSDPVXF",
  "key9": "5aoFjaqPjecge5SuLzmBTLdVsR141ZRRpBpuTkeVEfU4D7FkQYzQ3owQAgENUtxav5Wtm1ek8kgFXGcAz5GXTDy9",
  "key10": "56mrjFGS2sfXXX89P3424T9jH89ofRfcmE47PW2Njn2MZyFPghWkgf8nTEuc6ndJNsicFg23vrZCpwgKatAT7bdS",
  "key11": "4QRJWRJyVaGJEspGwoTrBLQPpJZ7hjiiFnNTvrkBRgRZJuHd4EFTw43vR2xPHeMQBYCq5MJbcesfoNy4JMwrTwBP",
  "key12": "5juq81wYGJePL67rW9528TgZTqB4qs3h3avW4pPKnTALRfNEM7qJUhKUD6FY9dBj3AqF2MNp3RjVtJitayrHJ5y2",
  "key13": "4UosUFSDtRharHBGpnFkGEoQPTsRPfkYRtu7woAZP3VFwriT4HtAoCUDFCS86r1jrwdnrV3zmsHaPXxZnKtwg71t",
  "key14": "5Yda971KaENTRCazJBuymHvLWEYWULR6ct6q7QDVFR7VgT9W7NBWBrZAi7tadvSzY9haF9qfsMX81a837Q9FBcDj",
  "key15": "2eA1Wk7nXka3kea6DgdBfao1eZkEupN14sD1aWSGtDjNjSWhzUN1bqoa9nRcraK9rnuT92eC3jeEom4VNxuBjBRp",
  "key16": "4ntHU3Zm25TVKDYati4iLiDKsQcxUfE56Gk7HS3UzVtMuYcjajPhwmamDva7i3DXSdb3g22rPc8itdkYUwH2XjhQ",
  "key17": "5xUAp5AUDwiCiqDqDUpjqB2GHkQgdSfeNiZhrMu8Kb8hVwGiBGxkX161snV2uhKKiZWAMfbkWKhA6deRiw22bkWN",
  "key18": "zhwFGUHcC8hP4cbioYFdiRSw1XANHphZJC6JzvdPMjzPqutD5UNQ8ghkS9j8NNxvRKkBq4GGuk4kqmfQZTjia3d",
  "key19": "3ar44BYhMEMkxjEiZ9f79QPZ61ovxqgw1s4JRNah3pYdHSUe99fBSTyRsjs6wFrwPsRQBtpuhKhfJf4CGh1xgpSY",
  "key20": "3uJMBRd2ngjnK7wjNF7qx5Q8CfWsqV3bJFP6PrKaDCmiN3vrwPkkA5XrEDkC5shRZbQG1Jwpk67aZqiT81GeKbZF",
  "key21": "5S899CKF9gADt5ZB1v46cvJTFEktdwWtSDstwaFRCFW8GcN8fNtF818KEv7R1au4rzs76UuFuTTX5zGztS3Uk8vF",
  "key22": "2hU4AGr83kpNE3MUdjCvyn1182fPaKupgniVfdMq45uSk2Mu3GPAh83FqqrH7a8Zw6sWaGxrK8bSWcoaaAajGnod",
  "key23": "2Ra7LYdWZTp5nu4SCQqV5158ZSAUhqP5QkDhRnY6VgM5s1Q1DACbxydSVJpELhei2JnUyCM9kcoFtqedHb1d6WoH",
  "key24": "PtXQfPjtWa3raSAVPE646wqqneKFQr2TMKUzfMZJNLYM5n6NcaFzpgQPeAUVUBNyuCSiJp5zvhteb3Vi4shRskG",
  "key25": "4b5HvoRvx6fdSGy12pwV9g9CWFrv7nXv9F2DFATuLGnRGsEvGbpjV5E8puFgRDQcsCF2sMamurVEQyd8yvpAMDQj",
  "key26": "4ZhjgcNVFm7kKsN2D3gLPrU2XzNi7eoeXiKvcEcLyi2KgTaKLUekDG6ADd36CpJ47zknAAyjfB5uNHQvzv8ZAgW7",
  "key27": "oamAQNC6V2BwFDCfnDTHaqw8UHAfD8hyK9jLkosjk8W33J6LDAZ7sjShm4M8S75CNm1vk8TWUsqUjMnSbUgEmfC"
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
