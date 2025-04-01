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
    "2HsT5EHo2EuATgqLBYGQr7k5Z9yQGxnjnPgdnDGZc2JU3F9FoxZjCmsD3VMojY9KRdL799HugvtNXcqYWeUtSv77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1E9RPAdk1Qmvc187zYoWUUCmPpjZQwevKZa56fxbveMn8keACLPV1mcaeZwcnGA446cG5EpuKAqouBZLGT3AJn",
  "key1": "593pnNkf2vpza1MGFAdWk21UsPf648CJV3WwzQNuTUHq2MUs9s8WrbmuCiQ9ZWfpg39cszKbFGKUUSCY9EYWqjhf",
  "key2": "4rhYLfY4GUJR3GRHgNCBLa6aSxUDqTt9z394uCPi3n7Xmo6qx7V1w4dy5PLtnrFMvFFPWEfXfk4PVbFVqT4AgVJ1",
  "key3": "fKWwXVvZWDk8ZvwuzpfqyfMtFnELG5rtmLbBzzo4xuht8BKevhE7GGu9n3FPE5b9Dd2jPdp5dLXFAJr43jPAU4d",
  "key4": "2asduKgt2XBhrW14RGkqPo2eUdaBck7m1gS1CAWyS7RqSoDkZD7BvBi1kLikCVsojPKcBPVt17SvirA3awBKJ6bw",
  "key5": "4m9MmrxXodNfMzZuhkbzxdwiYs4iSn7Xaqwupgfc838MYxsGyUWHJ6goQzdevmmHotsHZUELao4TTZcWPKNxvQ2W",
  "key6": "a6uBtCuyy8fZXrPGTw98uh1Ehz7x1B7d75mzQqnzMLzNGvhsFDebJo4Cm18wd2g7X2JmDghnktmjsyMSQWy4XEz",
  "key7": "3NwSQPSAGmix79VLLxqbwjJTx5YwbWFBYYbN5YDCajQcYDy5ZRnU6vBj3nY8o7Bg4H6fgg6zEiTKqkptkKBqdNHS",
  "key8": "3sXGhpwx71GbYcpsVn8SmDAVZFRSy24mCBnrhrrcNojqM9VjuR11R7BqAKocmEkZPwRfrk3MhtpSgvvM34YJNtK8",
  "key9": "2TgyzibqDZFxv49LfkAEq5LtXobGNeJSvQpEnX4JFBan2gS7j6meKNBf5aJAHeUb6NH3aGMK5mbwEWd5oLomWS8c",
  "key10": "2qP5LPzpSStb5TNhoQ8GpX9gKioYPB1p9sdM9kx3oA9dEkL5VzUMoQq6shBhqVrZjW1LmDYr1nwMmBkjFPoJSJMn",
  "key11": "5uWbWsh2bswXVMGyRaaJxymdQermry7ardCULowuz1qtm5hC7jWXzFGthCFxECTCcV5383bN8HeFgjux79jirmm7",
  "key12": "2rF6eCafjgy6ChAvDFrhfKx7Kp99WtgTwyiJ8im11mBYsKy4qMP1jayX7cTxPjQEZqXCMbPUXGAJReDiNJLzQBdP",
  "key13": "2CfacGxCofAvenvSxjJfSAeQGa6hPuzFMjMrk3uTxxnD2E6QUYGwGWKn875Ljpe3dk5Fa5pNSMu9x99RUD4QXNcJ",
  "key14": "5Q6REshqtzTY2dK8VLKwkfrT9tzFGQLGiFQnAeMnFWNENJGXpa5PnDgmqMZfzmARM8Rear1F2ZvSYio5usWAbhxE",
  "key15": "26mxjJJeJ8e6tFEA6ssCbnVm3pHqVFvhEnMgP5qL5hrXZKvDssz2hJLmVPCa9pp4NXpps7Tco9yPdFQBsPjjACmG",
  "key16": "5MwkZGEtcmmkpBJRyfUDjgBbKEULZqxCdfAUkk15DNJguaGHC4Hcx5wNq8fEpZ1a1XXTrjm4ZAKvZTa7d7C84ziw",
  "key17": "3s3NzMcynfHjvdo4erzy8miJmmxULwFix9DB8Kk6LRfoqcLj3cR7PpBiQ7fjkYQw8z1NL4RPWNyTuLFrFHaTnGyJ",
  "key18": "47RoTBce98sxa89hzC5KXrPKj4RES71ATYvteYLVfWNWxb863QFMngK7FVQBAid19Eekzm2j5LEDMcwsnkUL6sxt",
  "key19": "5v4fGropWneiB6QTrNxYHzaX9aGqtjhkaWu3umPYj2JB8tbswEmNWFNhzAw1Hg1YKeBdEfTwn66Mct8yUDGwFqyF",
  "key20": "4R1aQunCAKucEPPTPunKzU6meUz45KgsZukkpsxW9tJxrpcYpSjDDWiNUmwSboncvnHfpRGj8n1kAwwf6gV8Rs6C",
  "key21": "4Ucr34Lvh8UftJwzH5XjK58h7Go1ErNVbCJkTbjizKYGmcdUT4PmChj6io78srNjjS3H2hNyN2BWSpprp5VevXVs",
  "key22": "8dUo7nNr2wtvfX4ATrEyKWsqLupeXdk6Jgtn7Z4akoEDwJ6QnGErRpm8PoeTJ9sxjXbFXHrN16tB4ArP4hHGwze",
  "key23": "4BhKJxJG1cDVCmFFYpDAMBQ7zAa5vJn9gFeArHG44vNFRjpN8bA7VMqBGe8Bj8xpBiUsFjSRaeFViEeDwxgSPeNs",
  "key24": "3oB3Asqo8LoHWKhoxxwDhhPHshyqTAcQovLHg27X6iiGdf7JygH6hnzvJTCAPrNmHm3b1meNtGNQyMmmDoWqUKEZ",
  "key25": "5oi3xqe8vNbSF6ggDXjGrk3dMeEgGmphQrzQPSvZe17vsogvVTzTkXpBwVrcqPWdB17ipJmZ4ShbTSEp25kX2Qg9",
  "key26": "2BjGMY8nRRDgQ21uVM1gWEr2y5yj6usFkv4PMMJg1Fhtyo4FMsdmo7P6wwq5y2JQL4mCCFtZ6tvvuWkbsUWZUPmY",
  "key27": "4ayyXiFpmgaBxtyKpkC6tbiLmMufydEerAPrjCvFeL2VudnuHLrRCjPYegm4UMp2LDb8zGyLPbYufb6NZwbrdRsE",
  "key28": "nww2QhHCUAmh5dcgsQR9yVn2xae69URKpgp8W9G4w1WwN8M4hBWzxWxieLsGo2X7BwxUNsm1DdDAqVi5JmjcYJP",
  "key29": "2ToHquUK8GxV5eTMJZETSXYhnR4thXEKiY2TNCJYTvBGMu9zTbqvXdbGWZeWs35EzBKWE2RFJW2PFu1XJ3qQwcNN",
  "key30": "XRUcx9CLBbWPqFRZgAoWi3VmVWcuLE2LtLXJSUP7o7n43d9ZwEJeYFnWe8vfoRU65cZzGvyZyMBt1Vy7EcwfTiU",
  "key31": "3uWFqhC23rKyesjzhyJ8JSgouoKTxutnLW7YKHhzJ2KuecHtEwzX4k4cLpjwodgTtaPUUBSmwSLtnGi83D4AoSDr",
  "key32": "qtxiG9KKsj1Ma8eEucyG4739F4rbGEfMyJG4aGhXzVWFxrajyMMuWFfHFyEiV6Z7HVv3vHiRj2YKDdUkvUgcnNe",
  "key33": "65guJnhGUbH3PXtNsyVka3fQZ94WZijpocLpFwwsfipv6JGFvGfpgQtd4e74W62eZWfbzXDockcm82i44dKnt7GF",
  "key34": "5oEeuMBwGreKMEWQhbMK8gkSHNi3PUkoixPzqeJgdCnC9asUcyHkMNJRLMNB7fDHiDdaHtAM8fMYWRdtZfDngk5y",
  "key35": "5hYQTobNSUfcdD6NREvKBzmCMs2Xf4QBsQRPPqtqkd7y2G7h9LxN3sRGk1CCRLTRsnB8K483bG2XArq58mgs1NXc",
  "key36": "5wz9wMkpz6HYmVzgmmN5kZ5MFXyAWrGQtbjMQKFHHqdADHf2P3w934sWANmSYJgTpLwd8TwVwGWQRnmff2NNHAKe",
  "key37": "EA8PhxBSB6TMyGSeMmGAw8Kuxd5CUoZQx56qj7Z3ZnfmGE5phhBHnU1WCK3E11m6AbfVGBm8j6uLMb12mq6rFNc",
  "key38": "5jcoTPU7sNhbPexNUACY8eabPMinKdpVo9TEdbAnvi1tyZeCVxrJ5mo8v4PgTgaBgm2x4PipK7Y4RfESuFL3ubYV",
  "key39": "2ccExqHShhZ6ARfTYSUYviJez9wt9PqLCi9cZMiQEeqZZoFUPRAvn7XM244BZzwg2aVgX4KdATJYeUoDxocoqTaF",
  "key40": "BS78N9k9ZGCxtr5VW5zCRFbz8RPC46NpPYDQaiNvbMRVV4nC8sxNGohAEMKxLM8RmguyaBfrzUfREWgxXKYTK3u",
  "key41": "65SSicQyKQvG2R9wBWG7S66PNhnCCBxt9ZKod7KN6e7sDZxJkUy9mzWb5rBba2us1kbpVt6Zi9o2wTZVRXvxyJQG",
  "key42": "SwQy3VpyoP7CNDaLfc72SEhLLXhUmDDQGZ7DfEbDfW9ew8Wqee1JEcsdepK5niDVmHV4DLUwcjMQ18rfQR3bBEQ",
  "key43": "4dxnsq7dXYMBGRv2T2BsgaEfrVrNZWEcWA1fJAQW51sx3mN8XkLam9e7u6rJWWfiTD6vEamwb36AX1zCroo8gH9F",
  "key44": "5QUY3dpoa6S35PijpKaPGjgfsrgM1dGx6g22ams51tbegg1puJhComtcZXzTdD16Dd1QqrLM2oTmfRvn2HheZi9D"
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
