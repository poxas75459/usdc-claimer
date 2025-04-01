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
    "92TBJt7AgxaqeTwMGvz2h3uzeVjSUZHEboiMsru6DRXChccfzb1YfQGT4GVsQSU16knJkUrnrmEY3Gnp9J2EFUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5ryymZC2yxdh5jgGYmwjjwLyhkncfNK5Qp5JdQvSrkXXTWz2YVE7dowVg4kFFvfFcMeg36wvkanq7PUmCjn3Xj",
  "key1": "2Xmwo1q7u1cAJpXyaLYVpKYYG89DqJBuHq183HobQf6iiQHsdRrQfYnSh4ktLZbd2KZvcbqFNGqYWt4gUhuaQDP8",
  "key2": "3b5PpkbAU39nYAuAacwmMbr8adZgAcHQZrCrs5Yw1PJJn1Nm6nZTy4d96vd1aHAHe3GrAs3QzCisK7jH28QkV4sU",
  "key3": "5Stjawh7oDE3e1MNUJFtC6316ZhnYonYuNSjT39SSLHugNUhAPQS38WDk5cB6dBeWu9uT6BcWf8f6vqCK2ZVqPPY",
  "key4": "4MMzDc4osBHWdzktjF9iuEcsZpKxvk2gAEm16CeiSNTSqRLnZAHH7Q6jEZRNiuPLE5qxxYvGToJJrqDCYipHDquk",
  "key5": "3n8m2QbjJaQwVwae3vJfpDdGwo9Li72doofebEJmvSSWFaLTqe7UXE1pZ5XycftRHo8e7dtMZ6sb7UkLT53iDNbs",
  "key6": "RQXt9Sc7vF6qe1XHGVEDt7PQH7Vd9mSPqg3oye5yzCUUbCMBSZZNxd4wYnjhHo1B9Khx1C6BwUKQAED1SFkAD3S",
  "key7": "2MNkp8nLgUZ3x1m1k65oyLCCouUDBMDtuRhMzhgsEtX42gSF8erq8iEYiPnD4xLEDUaPEy4nFjGEMQSuXNTQn51C",
  "key8": "4d5EQRsESTYuE9CnrzXGTi8dzpE2iYqKctyjQDPmiLsdkrUBQLYAdvDNGnT6bTK2Bk6gWwTqXaBLWHG4gxTKvsrg",
  "key9": "2eqjgRsQPgc5DvCcB64tnHCbwUtapbNZMjKCmsUjKqb9BXSjoZ7Ei3dN5cit8mSDNh8zXGRtT5fHi9VXSsaCnD5f",
  "key10": "2Wgup3BzvMrDt1M57tjW3wKSKQsisKm6r5H5Pn2Mj9icGqKTbFR2goKJqthRbCqQsa1Z1yZzTE9q94kYjJFFh2bp",
  "key11": "2rEqK238CqW6GjBssrdqb1Pmf1CP1mA8g2g14ECMjA65UuVByH9DYpnMLMtkdVtJbiXPAtSro5h1ZieHsiXx8UrN",
  "key12": "5VqmMgCQr6DLuaAP3neMCJSp7qFP4WvwsDWNcea3jgw6RwhwUpNzuQwjEoXgunzv4kLaLGTgvj7sKDAVMAPuAfeq",
  "key13": "5gKNnwHo3pCnSPfuCPHxmgNq3cmioamYCV96tiDgAHLnB6pxXEM3AoRG6MWAKDqysUJjwJsnri8tc9g1MfgBJBhh",
  "key14": "2E1XpxUed1YZeNwbfpk4Puo78R6QaoU5yr5MWindWBd2Gor13nwMRirdXwqWc5nzhUqg5Jo9hmspQzoUbgrvudkP",
  "key15": "2SuMGLjv9N9zA11itHpwnD9RU9cQp9Le5wfRTXMkqMo4gY1n8yH1AZyGPCE5p8G1iRCMjRoCbdbtdBqsNAt3w5jF",
  "key16": "3vSPwGazi75NQcGJqyJnLazqDX939cKhbS3ZouQbNmzRePbwiFKiV41iiJ7QSFMXAs2a71X6bGybJwq78PJkRN9j",
  "key17": "5DP9AYS2owAagiVs6VjU7p6gW5twcUrrqRgbiYFVN9gU21RB7zA9NXPx6fqX6bw8tSkYozMUUSMHmygknf2GTVnE",
  "key18": "4aECurojygAwmu8W6AiERmMUpU966HtkAo8HNWd3muxBJYA1WXWW4Q3CY9dEhDh75XScnFkph388QRrNaDWoezGD",
  "key19": "21mxz8MuUWpMHoC5ZtJKkNscxhxMJK5uBkqAYis4Hi4kM11xmyhTUev15gyNQzALpGzLrM8gfUQibzMz82WZUGZG",
  "key20": "3GaFGNgb2kjGk379uDzDaeYGXZceDLs9Rf983VJA4pBCACtH3quwPhYyh61VL7CyG3RriUaNYv8gznDbvYN6QJyR",
  "key21": "3Qmm646GZPfTYxovSXHaL3kvvLYQHvbhnnSCyreMKQ4MpS7Xs8bkMgWBKSvkR319ei2nSq77LKgCk1mZ5K9icKH4",
  "key22": "3sUkBJ2hQo2sWYKz5sBfpAJgmd41HfmW5R3xWMsfgXCT8YboqeFCUK6Y29LPdQybM3FBBqiTs1bn3M8fHyf8YiwN",
  "key23": "3UfFL1yzULTgiKNfBezHwziroA7qfBsB4163VPmSpUhT1eQKUH316yuN3PaW5bmx478xMpYisvxBZ7x5e7NG8WqJ",
  "key24": "xeF7H8YBUN1grhNyb9aMzraHZgoHTVzFTR1ooYjDm8dH73M4Jjc1UaNzfkcvCFSe3YTSeDvfF1azKxAw9tFgQ1Y",
  "key25": "2fxVBuZuXSV6eqh7wD9TARHA3SGG6ooHRL3K64D2qAWexUszZUu4g67wX3X739KgmBKMBzLHusY1M6ZFUUhZ7H6y",
  "key26": "28gbMypeHTGr66qCUwdLj9Zg3QGs7cuf4QScRVPaEecmkaVyc2F3KdPwLVuEJayN1X8dYREEoLdx2kuXFYNayRRM",
  "key27": "64BP7RGExLPXR6PozQtF8kPc7M3YoezRWhRiBZLExQdVFri5f1V7VixmQc6JKWQvkobPFjoNwQscg2hDF3ZASH91",
  "key28": "3RtMZ2icbSoruPggYTnJH8pJwztExSXpWjjYUQ9satD16v3m6cjB9vDUKBau2CekzUYzdMhfyKYDX6uZXhbHtUfH"
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
