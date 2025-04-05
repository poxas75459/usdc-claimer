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
    "46DLFT8cd5Fv5cUrvveu9Gebh6CLg6x2audZpR2gVxYPXmd1QNEcXSHuEiVfobcbBnkGKymuC8mGo5hJzEzwsxwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JsPmqPu4LUBtFWuiYJQvEj1zPy65i1RWyb7kt46CBe1qihNTYi3iYk6VdGBbdh6JXwVkx7Wiv1GYmj6kP7ym6Rn",
  "key1": "5YhsMS6N84EUgYoaSsrWRY6XW7UA9kGvrovSwm1RPszsdHXo3iWjPmPnATfLoVVApzKFQSGahbwHG3eTaKjEQb5z",
  "key2": "3YBm1tjpCfW9JRJHWhmi2ttbsSerFRFYv8hjhXL88qwtjQUrDWzx6UjYz8fwxLs95yRoGQcFZ8TaZSs3C446cegB",
  "key3": "qZc21mtr8s8hFWJ56rovsweRkfiJPMupEDZj4UHfJktiNzXc47poJE1fzhv3A5xSm3Xhedv7SJZYJT2Rk8xgJ3Z",
  "key4": "4DzgTpw68bC5rgm5yekj63cLBXxgXMSi7mQ5K5WeAQWTsv4z8tQrjoANK6EnLNrfHiKQkxg3ommbQGbrjj4Ezypv",
  "key5": "ME2R3AJJGSE4Ah2wsWPuAN31MHu4GTdu9uEcG1WfZzHogTp1VKKkwSD29SVaU8PTZ5BNVt5VJDcXSmRQnmMGp4s",
  "key6": "5GayFqF8t3erv8Mq1G1He3PtrBmFKqWtagSCjrA8Rv6Wn5jYPTHkDbyMoLuFS3WF7mXCQgqo1eZF6qm7Nv21YPF3",
  "key7": "5toyCD4RV4sxhFbuhYxqVbsbYvoHpHbFCdhKqCtz9Tsm7bvAwcXGvWpCzhJYMNY4FV7e1DufcqWJMmUMkCpVQ6is",
  "key8": "3agowegR39BfTMFuNV5p8T9n2V6bvE4izeUqY6ipEiGUy4AkVx2nc5m9LGZT1cQktNZLY1xZBmBrcW7G88jQqBGf",
  "key9": "51ktnhgVF7FzA1X9XTCoz9QjSBNcQuwy2R1pK87SB1PmBVPNixJV9PjgQyPwyq44KBafih3ZtEegCsn2EP1qPvae",
  "key10": "3rucDnjLYj86ByXNrMjk99MzXtZYiy8ynmKio8gNedgEH42qa1NgCXX9sWpabQqSwt5xe5Xv1JRDtdn2Jbi7JgnA",
  "key11": "3R7BbehjxXHAf2GbwNp4eAdBEcsVR5jur6Adp7WvXMacVPnLrnQBrXYK7ctxPbUdLh8YncPKVWFxj4CWhpFpMDa5",
  "key12": "2STVTzQwfjALTmcNDYgDeBqL8YTqAUQYV26BpvQbNJENQKu2HQfqULSsLNBsiBk3rFpRZ8t9vCY6f5SnE9cPLY5m",
  "key13": "43C7pBrYWViS7iTQd7ybNS4XiBRo147dPZcQMmtkZp65Ms3Fhn5Rea2JCtX462J9zcJyNwzec4Tt1kJdRoB55smb",
  "key14": "4SgxKrc4YmRuYyie4jxfzK7TYdp685bk6rZVS4fDs2zd6MxZVwe6YQavSP5giPxX4zxY9TVYmUYfUcTH2k2XMwY8",
  "key15": "FZdRtgM3LFWktfkcXb9ofa1Kjwie3mkY3yTNkhWeZcfGwWuXkWWw5kACAbA3ihAKJ4w767VJbansg7mT2JPGx6x",
  "key16": "3WzaxK1qYvP6yd7gZzMKhQPkmLp93U7GpUwoMDabRe52FEHH6VbHwEChAYYeLNLptiBsGsgD4CA88p4WwmQpQAFK",
  "key17": "64KYvwqKgx2igpfmm8hY6YFejnyJzWPp6nHJ4YJo6uJL6sX4sWhM9G3f2bgnzNv2NmWjaj9QTTJtJCcwQDrMmmvC",
  "key18": "67io3xAbX68SL1Gkw6sbZfb2dgZ73vtXpfiZDfcK1HS9bPYAD9jUwdL79z4hUZtpZAGbU2687bKBpSkUjhGWGS4Q",
  "key19": "4sSWDekEGU9Qd5nkFTpRyACS49z2ESFMUSeAnqadUyG5HjByYiPNRtCmaf7S3NBBDNyJg51Wm5oLQj2JUeaUqDhK",
  "key20": "3XegHfW2NwDZKdPA9AsEChgNXCL74Y7V9idrmXiKnoc1QM8wCAkr1hAtR3cyDjt5nDEoQkwhyAKN3Y6fB22BjWSx",
  "key21": "2uSydp1nXXXWzudHiNXMEXESE6sAL6ZsnKynGEF2af6NtNsB3Xa2mfqGMxqUi2zekXhCpCUcs6CS8CGeKkkJj6bR",
  "key22": "4S6imFDzz6veBasdUntA9UPsqnbTb8k93sNBSXpQC7Wb5A3Tx3UfLwuXHSrMyJMwrS9UVFEfBb7eu5S95u57s1t3",
  "key23": "2by2XGNNbcx3HkySFAVwUDTyGbDNHkT6UrVLanNXMzC36rUY1vp5q7qf24ybYPp8ydNMFCqm8NYwqB2dbEeKaQhf",
  "key24": "tHCPVtbyAferfpMW1wJFxfef5HMZnWmd6zuFttQqXB9y8dRfAkXE8cfAe5zWXbhznMY6yYPgvTpNEABGc7tQaz9",
  "key25": "2VGcPFf3Qm71tEdrTsf4o2kCo79Fj6M9fguu36WcHVyZPdtJz6YSBi3wzd6etSznPYXw3q1s6zJ7QdfRZ1pB8Y4t",
  "key26": "BGBR6jm67x5uUAxctkrBWGyNYDesCMczKwDL4E48826CdSy8sF1yopzpJzJJGjRWbubtkwEPP7UwWGy5o63e1xd",
  "key27": "5QWMz5amc9Tq3gU3vmCvUxAKaidi4RgCbCSkfxSGE5s73PEFFbufg32aT8UFvPZoDXMMKtnrCJxKSVpMvRMJ3p5R",
  "key28": "2rXUiuR7xCb75RdaVbBKgaK2QcDLt835bTRFwPLeYLMFm8ogB6paqQnrpsq6quHix3UbUEKsHirZ2B7zeKrSuhjV",
  "key29": "2aTdXt2xfXQT2Mv7sbuaUUVSd4PNw8zkXVqK8c6vfjXiF8y9pyahD621w89oLMQyEqA8xJX1mPSJc51MQf7LGBpJ",
  "key30": "52JzbAcMCV2pM6VfKJkYEsPKHxNfLEHxSLxYhLvi6PtP7FRh4r989Rx455taKjvEdzzKCBVBXAxDrs536FV7ReoZ"
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
