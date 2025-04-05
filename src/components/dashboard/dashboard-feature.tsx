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
    "5CNyHn2yHUt2vcEUqy7NN1aZJsr2VvLGLDkFdTmChyvQCjGuf71QMwm3r7QJ4hqfwmKDRzZ3woa17oKY87fc2xDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfBX3B4Wn7DgLko72gwWmCk2pd7qiYwUzDAepwrkkDLyDhLkCQCBZJgnggw2ojjWvhYePKuc2A7uFhBggUUN723",
  "key1": "NtE3wL6iautXqjgtRbzioBpFtxpSCDFKdF5ZgzV4qK3Zuw5xRm77QNReVoBT7Pae3roXhVVa7DNaSUm3VkJm9sV",
  "key2": "5uQqPzHceBQGyDB5hd1zqwvAFN4MNuMTC7EumVraFK6L9YvA3X9ZwbekztovabEL5HPeZZKeajZx8PqvdUcWkc1C",
  "key3": "4JMwMPEUxHmvWYvnv1x2JUvrVQNBMFJYRXaJ8L5ocpMYgoh8ae4geBvGHqH35NB8W9WTnkERfTFpNZLQdzuTrob9",
  "key4": "1riEciwp74SJkmkG9aYkVj8kNQSrzWJvtg9v1R2sjnYrxVZAPs5tRQtEs9g6KTD79SE5fV8Yc6DFEESNu4GEkBY",
  "key5": "2EAMhXkKX3gQVC6ekeP5DX63zcG6wypyt9tcaZWX6novyLP7rQynSBrLXWJMnZWMcixE7TQ7TdoaEEDQQatY7QbC",
  "key6": "5HE8qQH13DLHS7PcAcgCQhtmPy6R1ZFWUMK4p84rDPD7W2t498hyKxp4ASRXFRKx8xAzrmdejYSUMT12vhoA8Vmo",
  "key7": "37v2Zy8GYF5XbruqubCHzCFBrHkji2kty31jTGz31kPtBAvsxgQtnXHFHx5N2EXYboaYvcqsTwtqnPHcKSVqjdXD",
  "key8": "3TddAcQvhMEkhqycm89NcokMSjmkFass3ekb1RZDhcxQ3GhQyL9ey3YdsV9C3JvxJxG6LQmU2PNQvTcrDHV6t8Du",
  "key9": "2JXfEx4dmmYyiCjHGKyjibyPRrmT8omp9hqsCVPQcuaTXHihsZrDg8rfEzkSSPdGcgyQ4YAmfToh3yoC9HJ8dNa1",
  "key10": "xePKtpxDxwQkNvdG3xRLgU3YpVRkYo73be8vu1xMsLDCaT7mDJgdpHNMmAWUAbt9CRpm2xvokVzs1yLVVht9NuV",
  "key11": "28Az78L1HbVCmjKaCAmH1WGBDQQw4KEybc6qnJVTZz4cvow5HPUCpQT3B4iTkr765gdoZKpprETa7EsD4dtjUsev",
  "key12": "5FWV4PjHHmfaYRArAR7MmHjqhSCUVTqjsXsC4nWJeKXoLHFSTvXfKm7Q9375ZDa4gHeQYCGnSWGfhd1FCnW5ZMdx",
  "key13": "492Hw91UfyH5xrpnrTLn8zz94Y66LwHsQmGLmXsg42LaAHjmRytGAQiwvTLtn7FyxfS3Wn3GkEKGu7Vhkw8ptXER",
  "key14": "STDhq7WuxM4W7mtmXknSrGAqcYywL32y82xPh5ZSNqFtfo4MuQ8puhv5cfhY5veyo8MP9ZCGBgkAkmwN4aJ9bTB",
  "key15": "23ERRDKTfiyW8GwRmTtxuJiq4otk2ND8a36Gojdfidek5DrTby9w2qE28k38QsCMkFePoojVuwh8QwinonDnC2tS",
  "key16": "YKHjpNfcwws7NZ3Lc3GSrGrbqCyFiUNNGfTLS556sR9eR92ctBnCSQkgkrQWNwBvKTyRhDV4XaWeuM7Fuw9PqVa",
  "key17": "2WnRJvxumjFM7VU8VvHYudbwFo1B3i7pWtWiYSwSuYMP56vsc7oE3DyYsD6JxVHiJmNPSJXTp6ikyyRaEwsTjU9d",
  "key18": "3Wb2aPKdgQkKmvGvctdqhjaGMb6zJMHnmEPiwk9HWpnefev18BnAPMQhUNZw11FeUqVizZg4ugxwr3FC39G3HrZE",
  "key19": "5PyVXngZ4WUpn2n2ENo1GcXKcLhugmfu8ngtuPgtQoCQjPBYaLJpJTcZBxVPAjeBQiu6q7XuEGb4ye71Q5VTmnLk",
  "key20": "35ZKqx4Erfr5rTyY6PH1mqXuGFFo8MqybYKbRtqtHh3vfFFYEGsXFmMnzWQaPBGhvaAgf6rWiL5AApWDoP8ZaYyr",
  "key21": "5RZ1eaexELAFQefve3xbvgWqAiYNeXH2SP5x3WtJsz5Q39uM5LvWCUuSBXdfYJTkLiT81KggAmHS54GFbc5RF3be",
  "key22": "4W3tzR93fKDjuUaysL5gE4UnfZWr9hJ5CbU1St48XUV8E4Bwy7zZZFAgRzXAx6ExB5vMqWsrirrf5FVhLbssnqwm",
  "key23": "2LUD3VfBTuibzwNEect6bGPpLz6nPGqsqpDB4SH6oVak7ApndXPQTpGYW4mBS1SJ2ybBMibGW91GN57A7rsMD8pW",
  "key24": "5uLg2gfQ1cAtnWjYpJVdvhvBjHJZfhkRJYQ8D4aZ6jaiT2hznifm9rTZbs9K47F7jQJTHy1DiMFERa8S3sFrxP2W",
  "key25": "4V4E271QDJGdJZXK7HLy1staBu38n1v3ABQUUieEuP7kjKMDNeiiJLDRE3PUNcugDPjmcWUA9qwNFpbhYGgsEFcb",
  "key26": "4HRx2RJgfDpgJMV8pjW6jADLnPT3u2BprZdRqzztGnB6XQWbvUnEHk9agcXJZsShqiZcCSNp67hPM69Wy8BXTN91",
  "key27": "4ANtdcJcAHUpuG5VnzsMTuXrSo34r9XqTLi3DpswVeHWCwjXijoC7N4qMTspdKQS7zNqtrxPe3DKDQ9zeu5ncKDt",
  "key28": "5SYCthuppfzuyPutQ5ECQL7YLHGdSd7r6HhnxbNEYTjW6MeyUcQoRidU8kQiERbs1G32daap82Wi5m7EJ28JKJ4P",
  "key29": "4K3JxS2FXpoWaDv1EAaV4fvTuiEkHsGxVRxoyTwBHLksUg9VzmCLCh8Z4M5Z8rrvV2HxWZSQHQAA635tguFMnbpY",
  "key30": "42v5iZu1npmurqLFRdpV597Aj88wTNm5LzFfEdB6iHEu9cMiMnToX5qaJWt5a1poM6mFuwk6Y5tCDwS2oiojAt7j",
  "key31": "4jrzGwtz7JKWWby82qGuduJ3BrjZcTQKmgUFjckhM2ud1FvsbQwLeX9cQQ8i3DFmm4Fg7Yh8bzWzZKGJd3Pa7eN9",
  "key32": "5iQEjwJWcuknV4fSE7vjnhp8aLNmxJqLtsGvPoSYfz4Etkhrf6vWg2z24powBp8PZTaYXPdJ3hvzh9ucGozE6spx",
  "key33": "5SwGBUiXbWULcTFodfQz1gHYa9BSLxxiiZ4dBbK639BWpDrtnbuCA85bSHX6r9J8zTFXjrERQKaLSYc5aVoYTRoX",
  "key34": "3eQiz2rP9PE5BSsysjRrWMc3eLot5G1UtriTJUHq2D3iLA7zFKA7XYgnWNimbUb5N5F86MFrWMVkxg7EgRdF9PUe",
  "key35": "5jfJjeWuQSLJFFRBH5J4JwP2erAm6hJEbDERkTic7PngpGZxw5GVNsWKWuUYRR4vk3WmBaY3xNTRqXPdp4fUL6jy",
  "key36": "44C4Bar5N1pi5xkhjtMRQj9HMQmgFgSEde17MCj4CUKLGTUFPv8nuDP3GhMEZZzEejm7zrGursDTF6G5zbRNKPeu",
  "key37": "2cJDAhmmb4qSnLY55VuxCSbYUpDJQwrBBw5FKwT9P7Vsd2EmPX5ozapKSqy4eVh7hSNRDGXMUM8NX4mTiZw447Wd",
  "key38": "2PXrwQZyCcHRbaZ4A67bHZWM62B2GRPCZiuvDU7sg1fMzCPnKSKmtzGFyopVp79MzxDpssBPR8mwLeJW7E5kxjZ1"
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
