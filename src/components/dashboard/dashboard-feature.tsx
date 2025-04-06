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
    "5qioo1j7DMT6A6phNPjAnPUgRKuHFyBmHaYiFMfemxzrosZuVKDj86PXTfAWaTxs5hnG9ePGede1WWw4RpzbdrR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjTFDUVputgAkf5vD8K2dRFF7xEWa3CSwgbiE6qPLk4Pi9KCjaQR9z8pbZJnUGuvc3118moHh24BuSUMT5mAecu",
  "key1": "4HkhRthdueSpj5N2p5EbPUytcrbbqcfgmDMujyYUFtisr1JXvShY3MtqojYqouLmvqMFhy1xek7ieKrAGQH2pU3j",
  "key2": "66KKWv78poQjiDLKRkxS8JuNeYaUE7wUeHGZ24H6aBQjfmJjAyMZ7quYKvFjNZLSyCpRoncyQDRXEayp8z4NCvRs",
  "key3": "51hKyvK7srmZzNDhup6pMQyCz3aZzio4giHL4ipJbzrNCLnBUXLMcznXZr2GLdYzq47n9Yjp9GSdQEC2cGp5FFbe",
  "key4": "5s7w6EiyUYGWEzrgqJsfwDmN7CznQF8WtpnbPkQzy8v7XkaEuZyDX3yHrYbo7sP3LDsBDz1kDAQ8Bruir6YYmwUr",
  "key5": "2nyHV6nRoewTCrJwGyVpbW2jV4ZPUJrJBSkcUGccnPzU5uYo3g6cMoP2ijo73EVx4jsW7YRXfXtvpNrPx5cAqfhF",
  "key6": "62xGWJuNt1kYuQQzjoVZjHckeqJK8EwXHBiQQ6w9ENpVzhBKN6Uwp8bs8n3e2TRErXSzPhA8JR8zEfmkoa4jhQVo",
  "key7": "2nXQDhM44aRB2WkbpMmy6wovbdwnFCV9t4bSiDucGWBss3J1kvQ66FHRjDvmgCTGemEnazK7LTUf3uptRb8FGQyt",
  "key8": "62xq2jNQ68kgtMyGkEucqtpxo9UZtF2q9wjbyh79qeX6YKpnrHoqDaqdi5iSX4cCENSHfYibH2L968U7cgyHagS3",
  "key9": "AinYu28uGJiixJuM3m84UYqhsnMXBy7yV2ytX9dafNbXDKSCZPbic9ZW9uFdaWyJah1J8wmyrg1PX2kysDrq49v",
  "key10": "3qioGoyt831tStXbt8q3ZqKjAeTzMTUHQ5XJJMPfNqMYLQsX1tPeHDdWmk1nzvc6Lga56PAvatwZTZyaEwiFYY5b",
  "key11": "mQ31B1YrxeXFv9iGrfuA36FPRFsKR3dHsNqouzzQ4nQpFXciEJjTGUdtJXS9EMEEuwB9322dCvevAxx2Acy448j",
  "key12": "2soJ1z49XiRitQPLzSMegiMwK6kpjdGPYXXCRzhMw94Rq5w9scdikc7guHH5mW4dTfgJTEmjqh9PLeUJKKepHwsS",
  "key13": "55dFMtYvQsmZ3tBAnDrpRv82sxn1RmG3N1LXCwnAXfrKQydvjjnZ7GuKnNtuT4ph5zHvLooqUQLC5KdhJujpZcjS",
  "key14": "5BghpKuzmETvPSVhnNrn26qveKtytsNpodtZPT8uavjxdpVQAioEZv9bS2gUTVdykQV9eFyjpWLSvmpfp3qo8Jse",
  "key15": "sSzeDfH66RRL9EvSQKXHku3SNPcsxDgp6nk2obhPvquGkcmJvLvGrDsc3tsZWSE26foQvNmZ6GfTHwyy22WQR78",
  "key16": "3hbuDkCsgK4HQFM2QRHXxoFTk2KGf2mjUSZkKHE4JJQzupjtiAWyZ7brBnpHFA2QSooxyyp7Q1oE9qhC52vFpJSc",
  "key17": "5ReLngc49wbDQwVJTQf46sPDn2TeAbnUSsMZUw21zwg9FMP6tMemfY6SGKqvQLJmfrzGmAcNCuFY7c8b1BWaGfQD",
  "key18": "7Y7aFMbdKW4rG4kocsjc9qfgDLJvyrWzF1VGimupYxDf7h2jSUQeHX6MwNYQYSmKu3Bj5D1FzwvW3755CpwJ6Jh",
  "key19": "4E5pXVzfwujPTudhAXcnH2S17QwwPac2gVTyXwiv6EkLHqpbkZdFebVLRNrVyg13e2bDZxx88EW5Z7BvrzWd9e9R",
  "key20": "44ZBKB76RMwqNwimgWLZqy1nSEq7JTxNUnXBPFgqszhdP6yXY7n3S6QT9ZSAM4mLXQdLvAWmpH5ypcQY1FYDg8Tj",
  "key21": "U812x6zzERmT5G4hZ7jVLE5Jek4W42iuxBtdt4awAVyJaB3r1JrCirRd3jdYrRuQGCaj7oHDxsJFQwbit6ztDeA",
  "key22": "3iXGB15Yj6JAGmeHnkRKfXg7oz8vitw8GWFvuDGP259qVsFjXBmofH9aSnGerREnzoEUQ87L3qQ6DrEGEZ62Ynxc",
  "key23": "eDbpEFMbzdZQeMNGMpMXdPzQCv5KsZeE63hADwfgXvTqZqh82KyW26rNZNHPF3ygKatdukxHBEMdnZsovdazddp",
  "key24": "4mKdcAq4ZVG42chxNtR9nkPBmf4U4Y1jdjyicfRuPZAMTzGocTTPCMYv1Q9mzpXNUoj1rB69NFdeLLFy6hUhAnLr",
  "key25": "564QE6fpHPDrj8rMGxRDoL9CfsNMziz5yGVKSLekPEPiMDT8zZUxN91L9faUKyVtHekYwNe1EKJxqV3h18s35o4D",
  "key26": "g2PZQYg7Pk8FunPmWk3B47kavvS3BWvrekUC34XTJzmbcmVN1oWXmriQqqooRt5myTMw7ntnSV337868xug8j9f",
  "key27": "4zZYSSsECz5D2F7JL7TtM32FHY89F3WYXjpz9XWPCGBHpfdNUQBjQbgcaQx7G6WmtgrzLDseubP1CyyRzbjKoWv3",
  "key28": "8cio7K7CeooWScSdaDfYRm9J9zcMm3rtNfmTa6aJaW8dWWF35q4JQ8zzJLtdUYySPK8ojwmyEduWaAJeDNZLXwD",
  "key29": "2vvZ6d2tWnPNAqBvFhcoUrsuP3kpa1Ni6dUp1P9rkVAcnmYVjC8n8tNPVQhVRBBZGXBMpDBatbWKFnaQnihdSDY7",
  "key30": "5GA6bCaTFytRXkNsnAqm6FSzKQmBDgxZnCWffAs1PZYHYh8G8XMPWc6HSde7hwqAgRpqZxRpCCbfskFHtuZX79zo",
  "key31": "2NswyTMMp5xqsiX6nQ2VNaxrUkD5351Bt1nMSzu1GJuvUss8mw4cgh5QUr52RbNdcBZ2SSrKp6oN5CwmGU7bcpkS",
  "key32": "4LNe78xkAZwPWws3p9KCS7XQN98q6vbFRSMWaWZjpgpzNvbvf9K5M7vPCDK3Npmpo2D43UthVvWnaLJnqPUQLoYL",
  "key33": "543NEQJWmGwyXJwTrnumJfGHgBu6Qa46gizfYESrCJeGCjgLTKGnMdcwo3fy32FWqNNqYeR2GVZbHkAYXPTXRbR3",
  "key34": "2g1VfrucCsDUUZx7LtcQPLnPGQy1AApbWi63aryNoCJhfyt2qYvdBP4DHq9gF9nz2YCXc548s9Uadfgzj7dUaz32",
  "key35": "5FA2ao79AsHbTKfSU5NTcpbdDA9vXKRYAKQARC37RnVW3GYPpeGh1rYKpdFq7fbTbT3FvCqdVdUhzNZmEFLxq65L",
  "key36": "32i8Lxu1cLX3V5t3KBQnpPmJPWjG9TVn2uPoEoju5NtwjLrWnfC9Racrr2Wy1YEUMwZ7hZ2bxRXvzMSS3SjCM8UM",
  "key37": "5KV5HpbASN2FfvH7nyoJ5uKegeNFG44hQt13uUXfmFKyVAAQiEKCSkTpTgwTY1New2h2KeEsdHjY7rNh1Qarewbj",
  "key38": "2Leeq3yZvC7xvEAgsco7CivZ7Mw6mQAkSt4Dh2pbVxtn1QG7CKrRy9LnfheQ1DAMXsa4Hnhbvfsomt8uJ6AffrVk",
  "key39": "4GuG5sfqBRxenjiAhu6vTnvF75gwpaNY4G7rJBgdXg6SZTEmBEzDNuptYKtoxh9Uce7iV6xTfzrNNeyGKjcKfXrS",
  "key40": "36mBgYmwjsp2z8JWkjt5rRBzSMWnF8VXv7rpVainhecdQvQnU9mES5q1o6YsHw63wMiB89qcjS8BhK1Sdtp68uqC"
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
