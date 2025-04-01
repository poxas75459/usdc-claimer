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
    "5uUoeh15fVM2qnTpTE5h9dCmQY2GG5py94cCuVUnvXeHzg41FVvLJsCCg1nMqN4B6XiaBPe4KS92UyTkgwBH5Qb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrHNM3R1KscAsGDydRqewQtQy8wy6mffd4VEL7pztXHfk1hE2Fw5UP6ZoVjeoBCAhXzZVV1urfS1G8JAJ5xzwSv",
  "key1": "4CfoqBsCQQjYWcTtefFtQrCtPccaKfvsBdYwCdxhictCXL8PbjrFR2TrQYaAsh8qMUSeLNNQoScVbjaJ1F8ozU5G",
  "key2": "4sjoGqNw1ygBUyCYgZT6wbAqFESxHz2VxiGmeSF2EEYw3DGfFJL8LmmZbeSaPNQZ2Ak1kYbjborv8KZtec3HMRPu",
  "key3": "55zzg9D1NihZ7y6Mja7Bs1qQUXcYeje6ajSEh86mh1pPBRTM98guYPAQyu3LgN933at6upbXFG4RbmEoDEwrrbVL",
  "key4": "66ebYkx3KZ8ij6FTFDkUGBwM9w5QAZiVLvgJqp5Gwg4k6M4zuJT6VfKX38n2nbfK7jXqiE6xRSXsXcyfgZR1ERU7",
  "key5": "4vX4xRuWMDp21vLMxRyGNDgNm5BW5hw5zmuBXCMFbMVssfZUa5Dxxz3uUk5bEVtaz8KS4ZPD8cdW59PLrYr9UPse",
  "key6": "4bWvyyQnAQfvCuuER5FxuFdiedMWTqZeXpposejaLVg85uHW9W595AHCxVgzS898tSspQLWiZqsYmfCRirPDRMJ5",
  "key7": "3EzwRxeQKwEDqvta54LZ96isKLGawvsktkhssKp8m9qYfChbxrKDStDC2bCKbK51TbUj8SnKrWoLC8tBhf4L5Vs4",
  "key8": "5h41wui7sE7sX6A9TvoHHJcFCE8nx2dAHC5K8R7VQKS2ztvNEMk6rgyh1hFYNndEgxbFnuegNzRvgqDahTmdmqaK",
  "key9": "ps8Q3Dyn1KXrL9oJgEAPfsZHJmfpiZkXVzWPDDvNhgnqwThoBjDoyTUtrAhRKNe8fV7MJejqrZ6q5j1qXR9Ator",
  "key10": "Q5mepaG6VKtVQrwdWhGmQEQGxDzfKyGvF15nowsWDvQYBvnMZfXLEUMCJhVzDXmjb67FBCBE2cBa4KCSRvH5mMB",
  "key11": "4LNDmiiS23ZKwA4ZS3JekgRtUY63qD91HwwvWp4X88hxvMacN432XEj7cHpudXAmaKPnHcUQgA2Zn7CacmjbPjdU",
  "key12": "35f2aQeXN1u2buVNVPtU52UMrgAHJZPZuX26CEzNyXq21bBJTANPVMwjoE69oGupbmDV8YpKzETVWkPBQVWyn7gT",
  "key13": "4DctT2Y6uK9rpfPyFNUMLnasc2PA6wUxQw3DbhZScSpMYynjEvNM1EbkVGgtmhybEecQ7EjtBXjGkdhKfZ1Wh25H",
  "key14": "3UyJdntsM3oAS8QkQUZe2DReBebT3fxq6RBvu9AUNbpbvA4cgw3cCUcEsFq5d9fBHTPWm7yfJJKhJehp4ri86LAC",
  "key15": "4onrk8zqtZE5ssWanW9i9FQwZcjeX7FMXhCtRkqFg1d6iDsRK7k1pB5Q9CZYtMptS3G676ptmHthenFdT5xZYg3V",
  "key16": "4h3JJQ5W4BaCDrosgFocwx3bUXWvtCPAjGvtXU5aJHTc6EzpUYViMjE1T376GA46haAEP7pNKr5VPnuQCuL8XaJ7",
  "key17": "4TNRXHvGY8Ku7UiK2DdXDXwgqJ5p2XDve1qN4d6s9Rk5rRLjNyjsezVzAy1MYHRpmibCZ7fwqJJ7XrJQhTSGjhJf",
  "key18": "5Gw8cn6r8iJ6AbzxwYH5DXT8dfQDJAfFhP99zV7VmJ6YhQWccY8koMDiffefrVFqZ2YoRWqciFSwCTd4Be4DJMky",
  "key19": "4RDox7GVGBTDrVrGqrrMpDAwdjYvwBDGqSNKYNJqP89BkLhXGSYBBHHFvF4sdbmyQrpPctdwmoACFTNQ91ytHdnD",
  "key20": "4Gd5dSzpcJP3kEDuopx8a7LFEypayN9pjoQ2GbCef7UGvCpBYQ18wcfXRGc9wRXbK2f45uptzNKKs4gGFcLxEWDL",
  "key21": "4miq5A6oWZyZ3n4qC5YnkjqttfTRQzU9cwUABMnRZeR9XEqoMkLo8mGXSUzt3MzYEhbeEcKfGeaymUXLUA5kwByt",
  "key22": "3Ga28fRdDCKrjztqwir1HfhAnqybtQuszCFoncvD3ZYCteKGyyC9A9BrRodbXUR6VH5P4rw2RExGRe2c9WRGu86R",
  "key23": "3yuePGRm6xQihFxWxZWduKL3zYSoAwLxdEp7m1X4hAsQwXpKiZJ3aJdrRrLEouiD4eiYrETLvgxYzXA5hmE8eNau",
  "key24": "w9j2ybNvCHWDBh5ZzVjse9PNPqbUS6niSKeM5MsK6aPDZK67aUck5Ladpp9Kjio8dxWTcpor6tQxVR58kCzyuPQ",
  "key25": "5H76s9m7w48Rgz3vzuwQt3MRMhRkCkAddcsMrVX1W7fq9yAbKdnmHFU5JTtsT9eaC2HmgTQwoc6wpouUXrHHXq48",
  "key26": "3gvBkgsYJhEpAcid6b988ADYJRHRBz7XttTTDjUA99z3PVeyVNPJvN7441y6kd8SbRrdGkuEsLsuvBmYXYLyctJN",
  "key27": "eVyUAMdPbtRF6Dx54jWRzVwd6RdhU7LStBneXQgzCe8zTMqVxckq3tGPnrv6ZQZtZk2VEd8pbab8eWcDh3yBqKv",
  "key28": "4SJb4dDodRLgnEB3HUzBsKvxyH5mvZVsaHKZGQw81eQ17qomeuedmHgMfSq3xnauah82W2uEwWcNsGz1YGoSjxoA",
  "key29": "2qYBt42oBhjSoD8jwLc7J3nr4QKQ3EM4SwMF8f6CWFo1oyS5H9qwRmJZoUEGmL2uC7q9dABnQeN4zYQQ6WDhFLTV",
  "key30": "4dJCEUqU4exthGb7kALdBBp23t64o1HqBtf7puUH1sCjZ4kgExzJdSRvy2Xd3ECoW62bmK9iDH7ENZ3guGNTA8Fg",
  "key31": "2qdYakWgntpLGeg3qpE5mdUiSZ9iFFuqvPUeHcVLmsE6vkEjPjXy3h2ZsBTmndK3FL8BrrabYT3bfxQ2ZE3YcenB",
  "key32": "2ZUna62ohxrhpjmMUrP9tnWoNNsA9U8ds2EAqWMje3W1homjacdcpjaPwEdGHNGryi7L2qgEJgwGbjcL5DQGeigh",
  "key33": "4D7DDevu5dx2ikENekqPvsuFPH92MDtHG5Gk2giFPKz2AoqVHKnRS6HiP7egXk4gDoLE9LQZXxZjUWsK3nZuJqv6",
  "key34": "62WZCREo8Qy1VG63uZ8un64jSrazShB1kVvGCv8gxH2qpP3gX8rtcQnqE1wh8NDoGYLouEZfVLyBULGEMVD3qQ1P",
  "key35": "3cUWEbJKDeKhgHaUPQkvMSFwnd9jNr9RBfGxkFartXKk7e5jPvHZZeiKt4TaxWgTTMxGpmtVbooDtkKjhW1MdmRS",
  "key36": "2V59YGhbm93BRVZnWC8vgCSv3SgKv3wAQVxdvEbvjt5Lx64XSZ8jWnCdxMYg9KPxizDtHnXQW1QQu8RRkBfqrTrq",
  "key37": "qtWD3W7xg4biuTjuRdBMchnqf4p2cQXecWkGuE9DG3tz2YnXZZBPfK5GzRdRT5fWT5JpEvrmMHqEHPESVND3Yut",
  "key38": "4STfFrTzMBN4E9P7YQCnPihpufBzDZvJdxodg8iAGsJ9caaf6n8p83q4n2m38FvLbZxnk71uWGW1eHNBu7isfY2",
  "key39": "2JAeJKDGgftet4wRwkyKRhVoKvQnsUbTTQcJjvvcDB5PRp4To14JcVLCwHegMBqGYotezgzcEoUwaDfQ8TYLha6t",
  "key40": "3qtLun7Xoz9ykai15QKt3QfYeyxtU3vVhmz1y1iyddJ8tE5qbzArkdBbeGPLZ3aN4oVNx7ZFXoom3KaW987g8Ryb",
  "key41": "4cP88X7UL9mwgnujozJ3pNB8kzSFX6czDnaZZh4WYJrJivvw623mgfjprPDT6gs6seGkBaGxM8nE2jUTfwvs8J9r",
  "key42": "5znFdAsV9CLMgzgQV7Ve9mVr37dTsGjXUFZZArS5iB7boDcMn6b11UfbqbEMQq6gQHkxurhqtTUdpnacWF2BCaj5",
  "key43": "3NBCebdJ5dpKv1c6KTEGnhzuKqBE784CJG95ZCgxavSdArpS9vgrq4ira7Rvos9CH1fDsXkGUY9nSSaRjLqz58L4",
  "key44": "4nSptkwhQtaX6XUamLzt5XHe3B6hLzWorSh6B4ipUp6XYFy94P1JFakGo5dTPMfLgHGf9bztE2CEW77FVZntHj1D",
  "key45": "ZW7adYLcuA3djLUYxEJ66jYFwAXqfzDG7yZ4HPAkWdD65FCYNm7kqMcnB2uFbW8NrQkWY2YHmtWiqJuw96ZcVdA",
  "key46": "2iSCPCFPDuevk8Zouf3B8R3yy4BbZGgKnwafFkp1ehzM4eEWfu2bXVWMSkp3tE1wUmZafPfyEBfJ94sPuFQww2BD",
  "key47": "65u2ZFK4SwAwBveWDikRq57JnGnuZvVXeo4nFtis2KYf6raRZrqJLSV7ergz5kaRZgcvR63wfKWANRbf2DCzTJCH",
  "key48": "4eVQXMNZ1ogVhE89kQTVGqLGjUwUTQ3ERYcHDezv7xTrxeatxfaDaMsMUJLbbJAFMiU7SQUqC7QrKGuUbHxXyJ6E"
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
