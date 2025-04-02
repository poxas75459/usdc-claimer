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
    "2G8DhHV4ika7RTmqBBEHH26QSi6fH7ntVta8zMwkSS9h56uiiKir6Gjfk6Wr1YBrEsZ8QNxaiJPf4phgXBnmoxV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oE5Y5gMaJ8jtmAzwMHAfBQFATV6xJ8ZhX5ZJG5dgjtgmAphD3oyLjgkgwjMzfNeJrBgzDaQsXJP63pV9nSRcTzq",
  "key1": "QZ3Aiydo62VnVXn2gQZTWYfxFsm5TeH7LYvWEJkSeGLGdVqfnBxmBv6g7nyJrKbjoBoQ5TAanh7Ecr1Lq3hf8od",
  "key2": "5ZJ15ht1EwtgpKmcZh14rJCU7N3LkybwUFuxFmkQ9MJmhacr9TsrudF6D1Bh2RNfeyrPMBgVcHgNx44tZ2nkS5Eu",
  "key3": "3SzFammjmjczLTzm8KPGvLnvSqEWQKZsmvHYkuHNd9pfSYUMVYqTEeyejrwEchKB4aatWGugEwEYhugQXvsGUXxP",
  "key4": "ctLrxsb9k2wtTLPeaAbxuiNuZo12J4CAJCqpEBfoUQXY2Xe3k4hqcdNFhyt6eNfRYiN5CkEQeEtGkeX2CKsh1fq",
  "key5": "34D3jQ9arkUgPBsBNnc3HAU39AXZDoZBobibQKBv7ADGiyfk1csGuwU8AgERHZJ6sBBzBp13UPQX7dd7MfUnPmWf",
  "key6": "2wWaWbEUBwZT4PtqGeCfcCgiWcmGTYEcGuh7R5x5UKUTQj6XX5GGP9D9myokf2cVyb4L6HuW7TXzknkd7fQAQisu",
  "key7": "2LcjwigAUrHBKpnkgaWd4qECMrNSLaoyJdHG8P5Tz5xq3kKWbTw26brktAJXEwrCmooNN4iayg6cDL4MEB6F5UmU",
  "key8": "4YKYpJCdzxquFZyg93uUkBgnU6nUw4MNmEp7bG7Hg37qbU9NVo1Dpip8axP7QvcAVoknvqXA5Vqzia4nhA2ZZhoo",
  "key9": "bfAQfqSNLjNaymEfjZTcBWErCQVn5LrdvjMctF3fqzAv76BHjX6F85DgADU2m64G9ZXu9M11r4dAmVYkpZ7N9ox",
  "key10": "XnHPt4eBuTbQzcUHYjjEpLMFB5T8abozxZCXf3C6Fre1tSwoNRkssY3SZqcyVR1ipE5fc3hBBwvB8oqhyzBjDNt",
  "key11": "2twkwBUJa1FKnTBKuALW2XEuoNfoBBD7NCVrJzDkq3VsZDiRDRniJV5janLTwTspMA88zJ8HDxxBZqUepHGtyN2W",
  "key12": "swPb3RNMY1MBEPQ9eQ1zKph9HScAmMygcTq5mH21WftKAayjoj4wh9otLP4pxcYWRg3PXFf92Rwwc9TzvErtZtm",
  "key13": "4MbpjuLhXxsLgiP98VjpmWqcEgoi1Yy2F3uHwaJJZVjeJx7jSqRPJY8peQjDKxGR365vdfus8PhcYV21Hy4DUZNq",
  "key14": "5gBBQYCje71ZsGVCoEwFiFytRvfgNcbG35aEBrehvnDsKXHzp4TE3pzjpxLmB75u3FKJZraXrSysbqPBg5v8rDz8",
  "key15": "4PeoDnzmhJqtToEapCndJ3ERZYeBfffH6uRakuTRWto637Jcsf8Frzn1MwvjLhNZoQMsadYJ1tKDULwFHSKJJbFf",
  "key16": "4qKXXNMCe48m5GvUUjZboRe6AwvsoEaY8dz1S7s3STMG1wEnZX8EfAPF7aZPoF124J3XskSyt5xNM3naXHT9ytsK",
  "key17": "4wP7VXWNHn5TrMnRwejQhvsfpYL9CFJFFmuqKHr8aJc1WXigDXnrSWtcX21YJjEDfXKyNGAznU4KgbxN1gcBbUWN",
  "key18": "QcsFi9z67nrz7WqAxUg6WUHWgK6Kqg9FPY2kSR7awwcmo3v5yH225WesqaCYxgVtEWECYzhtAzqxM3PVJxX8FYd",
  "key19": "DgfCRscnTqbZVsJ73wTzDaNYyhoXwMjCjVF3sXVDXB3WaSKHH1qowmc8hf45uiS37eT1BrzHof1H6Zb8SXxMJxR",
  "key20": "2H18umuivuoxWu7MndBurDges7Ld6oFZcDnUt957DT8gRBcJoEYH7abSPAEHdtU9H34kT7HnM9gxnop4NBp1sdz5",
  "key21": "5n2VhW3pKs8YtzXQ2KhNChrN74juLWyDhstZbP6Hg1QoH867kBk4z1xSTKdPjwqwMcTwAYwELzfXn9H1xrGQkcGJ",
  "key22": "5jgPDkwqFM8QYEUrZ35FFNeidkEUe6traZoW6E5LDeBSkFNDjqjAsUMFcLEzeQrAEunARKbUJcqChH4LCSD89vPw",
  "key23": "3Vr72QGsSEivMx7PQYk3r93NfRMV9vDMecXLH1btxoUg5cxqURPiiALJ8UYscEyHRKovfi9dsaZbCL2RShocjb3q",
  "key24": "iAvAZ6GWs8ZQzY73U53jLo2NweqhuTHyaYEYbuSEWgo3z478S6YPgbA7pw4uUXNNVcqmQK4mGNLm3wzeQ5Ba1rG",
  "key25": "5Rc6FBq7bY7drt7W4XyQTtXik5KSwNKtW4cqcyFm2BSEtXH6vsjDWgk9Uxrs3hJBzwQFuwX6hqyzwBLEHVKv6KYm"
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
