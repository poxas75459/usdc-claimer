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
    "3yypq8FcxmE2XyvMExUyh7GyHz7M1LBwg2nSiwJKae9ejqBpjt9MFmBtJxLy6QdEWsqHLnXRM8X2A4UwhmYuqoj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHCGMjg2hK4zmv6e6mxnwM8TipwQdX3YBjLMFvCCnSHGTvFtDoez6Gx31vexdLSVX9ufthJnQPwBzukMb2HbKgf",
  "key1": "2Hh3mLgkaV9xr9h4WaD9wdtEhU23PxxaFwhB3L5jWVhBYSy1pEq1oCx1qKig1X2xK9vU6AToK9SsgFPGdECuuoDA",
  "key2": "2f9KJfwjUuLJdYhxPUXhkZD5qMPqMXTXDMzUJMwamwnZyNLdP4Qq6N6dLc3ADsfoF8Qo5LFkhTtsLNb8KbUbYXPH",
  "key3": "3w5rZjhWo5McWgypCVeB1A9DHMXKjQmhc6Z1iCeCUqMJMy81sZiatzstqePHW2HTQm8FBjPCbBvz8EQabA1yu72P",
  "key4": "phMQdYRBPcHYAwYtaqxUeAu22e9VDeM1rxRuFG6xHqEr6iWspk8ookDsAmKxiygj3HoSjgYtigr9gJiBhX7EQkE",
  "key5": "4WDmgCDnfJChn7YJ3tzagnzjPRDJ9xuoxWKhVhdSvM6DWTNqAMR1D9x6vh4Vb8BVfpcbCgRqHnWEUirVpjFtkXc8",
  "key6": "4piQGJVfTnWNJkX9ihg7raN94zdMwJ4o7hdNMwKeQhbhs7NUM1UiM34NxVuHe45kvg8tTRF6ifdVEjbCDzazez5m",
  "key7": "41Y97fSGBzRFhMGyNzdQnVtPBGWuDNcG8GtSBRZgbRFkev1js49vw8WyaWkVR1vYtK3u6urmXuac2NZZYsN7GSaA",
  "key8": "3umEPfZS7oZNgsSuvW6eZrPw2NfpwzXYSyfomDLSnuMHXWG5RfDaNwPgYCTE41BDMTnGdcx7PQ94JVTNqiGws5WZ",
  "key9": "3wGAut23WHGggpWvY8iuWtTkGHsFStfpmjAUgA7sbvPtvyFJdHaFqSRYk7VFKjMaF5cmENsD8A4nTXHhGKhqvd8w",
  "key10": "yCwCpH5EjAn3Kvy2BqcGWT2YVLrVpqSHTiuMh3ND1YsuAQGCV6aCe32egjX9ro6JFMNAynUhGSokxkJ4q66QdR3",
  "key11": "38tkKYb6LxM593P3rV99p7JU5RCAn4i3dXFV1CzzNQBBdkbTvJoagxKJEwLtcB4trara6fMFYpBQGN9d2uASXBb9",
  "key12": "4M3ULbRxnzyiJDo1W9C5V5V8hHK6iuXERgfom4Wbw52hi4EwWz83Nw5MgUTpURpQZJeV2fA5aJZqPGqkBEfA77Yw",
  "key13": "2GatWyHWmBBW8LBT92EwaqRid3tQ3D3XUiryLJPcYPHs9s3JznHWk4sDVHh4ajgeLxTcCNfnt8JxG1xoMiM9mHc3",
  "key14": "dRr8hvB4BTKXAQzvEzG5rdSn9b5QCeDn6vCmwCNiBaibdPueTQRguzY1W2ZK4ZXNvw6UQA5KB8u1bcm4WRM51Ln",
  "key15": "54ivkFsrWCxxQ3afXGL65wNHZrqDYZ2g7nKPiNNx8bkXopZvG8CrkZNjLqp5ca8oWXJ17gzFoFTu6tQafArFjJAU",
  "key16": "31Qx9tmJt6biJ2aZi5Quc4nVkwWN75qYTmQ3wkL4UtGqHZigAXRn7SS3d79vBTt3jg7dFvyHWwu3otQDKd4yNFb6",
  "key17": "59deCHEUhWYW31Q4P3Lk7juqXPSHMQz6KAiScRmYzoqpU82rpJ6Ce4jZw78eAMUMiaPxZUeiZKoweMWPTks1VPvJ",
  "key18": "4VocYmC8sRg4hwu61G3FnV2y3WeC43Q4dNX8Y6Fii1zgFjyVxPDWbRGKvLiTpFHpcrAm9KkLDvPXgVkwGHXp9knM",
  "key19": "2L3NKhnDMDysY4PvkohpTNK7LcD9k8jirkxy97oj1ZgEqvmzeC7tuThQVD3ieP5LeWB5XmyouPHP8obJYf2ARa58",
  "key20": "P3SUVJJ981tDZTtEQuoWnpA27iWHQXxXDyy1z68f4DYN8xYsK15mdPx8PRRTbDkzKC14VnQggCDWhR67TZv93Si",
  "key21": "3Jy9KXaft5cBKbB7XcKhttgELH3ommdaCc5f84PanYW5NSKH5TTenHSjbcApzmGNjXDK37iX4mooRFLQqfrSR5gS",
  "key22": "56JQXNxdemQT1LxCzHSYPHcaHq7hmSoTijqEa1Fopj1WmiU1bvs2cMQbWJLYQ5SJpjEfnjLpFBTKiTNJvabbeDLB",
  "key23": "5ExAE1UFN5K7DRd9KMThHyX894cb3JrGApCR1TubV1RTxxu3vobuHkSNK7t2c9TCC4H5s21C1bUnsn3QSh8taTEJ",
  "key24": "55d1JAgJVbkF133h9g6FVXynnKnyUbFbjc1vSx9CyVsb4XkjC7aQQWpmFJ3cWKaWXAzvKiagEi2c1bBP3md5yfp7",
  "key25": "fvQTzYx3eADniUkwGVmDgstD46eMwN7i7Afrb6zr3bnp14KvnsTWeiZVNhgBTXUBuoc8pzyrNBsdN7yBUoyJHXx",
  "key26": "UiVnnRVpKJBUPfSRmx9vDFm73BRFUTPXPco83pF3YWwJ3XzMP3UNToHYHuFw9X6AwBLrrm2p2UKvsqz4Mh4dMXx",
  "key27": "pVQn3q6QDzQSX5ct6x9R3LyKyonn6ZN8xEJSzSSGfP5Nsv9knV1ixnw3xqogv8ao4t2ecjA79boUGuJVmVGRvSW",
  "key28": "61nhBBmhfr7qnsnhmq352pPx2Tyk3kUAfF76g4fzvqkyhDuWqGThuq6UiWMVJorfFzwGCtWw6bc78z8X46Zyf4Cw",
  "key29": "rPykUi3wKkeML25QKiwKTdrJSY86ig2jtjJU1uCYuMB8GjTKAjXC51cjWP2rWKjjww7gaS5DwegY6mhm92SmrNR",
  "key30": "5p2XUa8ncnPbQE1W1VjLrb1dKqVxGYdWVL5pVzybsnaoU8THzTio69ot9sSLrarv8inzWZRVtzyCEjLUUPDVgtfo",
  "key31": "2HcaFGgFqkNBqbsG8nQmo8NfY38uBHac5VDob3XGenGkfDtccpCeZpFJzDQVKA1L2r4TwTFY7qfXqvDBXkBNWHtx",
  "key32": "3akqawSVQQq3qUHQ4Tn4bZsvAvLhi7SgEVCNyYp7sMU9F2w2FgXWZpFTzHFFcwyCkj6koi11vPPVnsLvWwmhgxms",
  "key33": "3NdzGZF7XFbFG9bvQkxD8o1sG37k626VyMsvhPV5yfESZZVNFw6f4VFYmpHo5PDnjGMj2szuwKqLSFTUjaj4cetd",
  "key34": "2XwXgpJkdQU1zXXbNnL1hQ3i5ghjAuMGLa8CLBSTbo8P4S2PXmk6uQ6ecwUp4Joat4VUKi8aLTNzYsSo6KCqGz8H",
  "key35": "32VgbjhPSQctCmzEEaUxP5uuoErTp2PeWrTZRWm82SdHNg3XChHnyK71mFFeVEAqF1skNMnT9324VoycPPyo99rQ",
  "key36": "2wg7GmReeF5BbVyz9DwVRF4nNqHU8n3KAL9ukSKNLXZb8THjD7gjGUkpiF8TX3bHyWMjM6Xoq88ZxkJtZpJ858aB",
  "key37": "2ZuwiagkXE8WrC1CE5kWQyPG7dQwEKfqyamCRNEvD3oWi9K5W4FMoi85fwUbbP7oFqvQMpJNX2HGZ5xxPAFZTxy2"
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
