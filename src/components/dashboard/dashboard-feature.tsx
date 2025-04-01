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
    "4ukfpFXiuQthbb2o3Wm5YRAVR4iQMJFe1MsvY1oiqCHCuB1vjzzeyjTtL13jipkCRqgbTgDFcWLvGqV6VLEBdnud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2umNb3kwY1Lk1VFqvAHw2imYEdNEamWRiPwxbucwDNR9F5sg1PdPfAAFJdJM8Bcn4f8LUeERf2FzRVztLNdssDXX",
  "key1": "BewzyYFXE2RCjhnvMYa3eaHqwqrPw2tbomU86kezvrV6BYf2HFnqQewEyJX3NVLg8GNAXU4Y1YzA1ihjNGN42zB",
  "key2": "2Lat9BRtHvDBrr4WywGxbTmhc2FY4LsvcWWFaZRo2TkrHXADuQDeXqc5DoekzwDeRxhPQAyK8XhyvWStDWjPpVDA",
  "key3": "RzV4DygFJNt3WKx3NLL2EVhKazvfcJoAotj6AWVABMvXpycwFaTPnMmsgNweVFgcrMsNwY25MyZdcG9atHpd1rx",
  "key4": "4qhQ9PtzqwVgNLFQgtrgaTR23MMs8KC8We7YafUCQBXtoLbJaw4PQyJZnTsdyPinraD6DCxAPMDy6cb8Lmbmzfcc",
  "key5": "UZXbKcXZ5vBCncz4SneMcgPUjVWkQDaabeNW2tiXedW4EYPM4wDe3zFpxPD4SR5iDTbx3nYywGUZK3Wyf8PJpDT",
  "key6": "5qzqpio6iJPpPLSazedtQ8fRiTwfnxiEviyqSoF2fAjSFyoUwYdHopbDNgBCta52Ey42DkUjmBBN4QWThUDfFevo",
  "key7": "4z2A4cCNBjheSgUUHiU1LTmmrfj7jC274kYs8Ke4D32cnKyuwcMx7jjwNacccp8QsVkFi1ckx5i8veZ9aezahvE4",
  "key8": "2dGBHi74J3rhub6q78Vh21xBEZZaHJspGe9eLFL6HHtcKbVZCTXz4vqa3vd7aX9iSfsUqfgsZbooKSFJ7vUHJNYA",
  "key9": "dP23ctXExvogj8pP9jcwMgQebxUhSxMzcpfNup2PpVfLg5BcVS1hNypf9qBKFkEBddBVEodDcB6rb6mghWBDEue",
  "key10": "2W1oHUW3kg4JUz8pKUJhNz1NjaSCEgpjVRidxtmech8e2Ws9fiM8sofdhHXZzEHNtFGTWYhtXgeobVpw7ZZ5kLQx",
  "key11": "2aCpgtP4fGohWpUTbR19FywRjKa17ezCfKCNbgQsfJikvZdVZP64JYyRUnqv6J8P7Yv7Gaef5DutqKQd711Jr4N1",
  "key12": "3w5kRp5hcj2yjFJbiWL8ANYGZXPr8651mxKPTvSEkdcJjiiR93FRjdfncJKtou1TAw6yDYamkEsvLRQZrLzTKvX",
  "key13": "2P3srWuTMsUjnLmsdtZjfgs2q9WNTzF4xAagDpU7v7QoNvzSBX4rJCC3J8XCZucoJbYKPpnLwaASCB9cXhgQTwSm",
  "key14": "khtmmWqUydi8tbM6zmuZaQeCx5xy2kbZGx2QCue9Jm3ek1vHbjoY5SDY3t8fjnAf5MH6gSjCpFjFsSCN8CmZfCm",
  "key15": "oTPhDVZZzxRxc5oJVPsJt12gLzHxNZhRcZ8xDbhDsxvMGugSmPDyX4jDTf9qkM98w6eJppKWk3WCtC2JuuUYbBW",
  "key16": "3P7jvsypHWgLvDgjuNxsoZk7AmJZAbh6kaSWP6KTQfrP36LwEsbKDqky5cyVSGe5ebz9HMRT4PguRpHCrPoLiuCe",
  "key17": "EG9BUF6pJNZQZbvY7HRoybj9spH6PQQupZdAEGVk8YxrZxKK49EGGSJmbJsFXFSPkv2DyxUQfJChnWzvDhoEUwk",
  "key18": "2oVHcfwLbnxy2PUQnrZx8vnptboxk4ZW6kJtLd4ciFydpJmNmqVdTS6xG874h4NZZVLRGTWjnETF1x2qKqc7S3ra",
  "key19": "m7DyS2havLM7vvAaNgQSbCeVsERkBTBJ2fHAuq6QFGDt9GEq5wg29PXyhm6c42zCXZtq5AjqHHWGzAU9nWVo2Mv",
  "key20": "4kWCcDn4NR3E3AizAUkVGRfh8696UJN6fAa5iU1XqtkGhQ3mSezF8BX4Kn8SU5bS1uLNquVbsj9Z4juAgKNvNkNN",
  "key21": "2swoTvcYf1f426JmoeFc2FbSTvjaubWikqKwLBzHpisXtquBTvXGS2NAxY5zm86LC3iQKjLRtRueipv4FtCEJBRA",
  "key22": "JP4ofapKqLyWJv964iYUQ1NJhDYxagXG9jn7bbvoU3jWnYinw8Wy7trMUj6vUa2TWWTGG6RmHmoyuiy9KPBgVvJ",
  "key23": "5HeSWtzViVfQGWkhRAc13CvMoCzRcpNsivmosVU2pjCqsHxTV4aMwfSkoZCv3NvA1ZgW6GjjaSYegX7SJtMRNgLd",
  "key24": "56mH9FcycYiLPb4Lc1aRTyfUpYQT6ge1F8Zn1GbK31s8qzvSTh4WEEYVq7w3stRgbhhLZSippMPVom8udhkf9hEj",
  "key25": "5mADj3yNsnniFcmQse8KNSUQqU7r1GGzUPstjy2TbUjV5iu5xCZAtApEU5n3dPWeptiz8UV5mbWyEFkmzd47fwqY",
  "key26": "5h34U2RHiShTqWzQ7o8PpJyeTkUwbdmFqShE1yWizdFr8gYQoQWnLgYkQdPL6FaxLEkEkwpBTWJRoNQ5dUjTVbdo",
  "key27": "2iXXTUXmairXPYFA8k2gN9dA6fjfbpUMCh53DgzTkcykZm79phBLECSJQkzEHnt7ib2kmHTemWuMa83XcUdaE7xX",
  "key28": "5hMmVYPoav335CxjT4V1ZPG1NJJeLZP3L624s5FHpViVASGELzUrVhmuy2Cut9RqR9xTAiodgsysWsRCXiBh2aHm",
  "key29": "aSqvxPCLdZuKNyHZ1nQWufdv6TPPMoidHszrWZSJNCNwbq46hBcnGscXWCc14qogzajUUHXZtYW1DvMmENXT9fS",
  "key30": "AQC3UzbtiUpkT9d9MT1VAij98zznGhH7oQdLf5K4CYdAz7P8bs6bvXP4c5pxTsjwmQLTCxQhr6fzYTqWm5dizTR",
  "key31": "3YgiL2prj1dZPgdefPxD1RUaJYvMSj4PyFK5TgRJ4aPo86UwzBKFZePE4nacgqViVRbKsNcEDUQjSg4fP333A5W3",
  "key32": "5gU4nF1v8GVbMp5T8uc4S66ESnp6UsVSiDauArubYQVM8EKYPCVVhLb2WBVWWYcmbzogsXmnVFD2bbQhqwzwPxbq",
  "key33": "XWYDyAupv8ACmxgwZzWtP3SERcz968Ckbpm1DP28gBFzBsHKfhZyyphZMXaDXmKRo7SDShxmQphTCxqY12oyP11",
  "key34": "uWUtYpzKwCfKfrWzzmnYoRZ2CdxgZUMfq3g9MRPM4tNLoFB6yS59z19YgeEEcqRLWL6uCr15eBeywqQVJZA2suH"
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
