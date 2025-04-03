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
    "3Z9bZAQa2EFbpiVLbHkEqmLupfqJ1MNz9Vo2ECTctXwitJBzaGQbXeY4jKmdFqr2TsCKMfcsMYxCL9EkkcEAAbWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FjfnKboLfAtVS1XFjdrWFRhF45mU6sAx3bkbhE2LD6U5J9iN5ULGx2BboRJb3wxW7Lx1VQoLqnCBRt28hH3VemE",
  "key1": "5sxVWCJe48dDA5xF8x7uKFi9q74uwy9Up1FehMFgzJpCokZwDnkovodKQDQaKwjaRRGQWicpksXK1R3hy41AhMbV",
  "key2": "4bakSTEiG25tqMr8vQAndrcQKfk1jYcHg4iV2Ps7VUBfYQVBCj4UimEuht83TpdbPk8UwapAJ7WSb7NRdV3JtK24",
  "key3": "26gCWwGJprin2An1FoCai2QA9J9tQrCyUi7cg27anPiHx7gkLVoVYEcUAc65SLqVmobxGJzwA3mZDSoahETW8YJS",
  "key4": "4kr1UkKZhsXn8k9swaR3oXELYamKXbPDxuqYnMDBe96AQJFN2XBdDgEBxMewNPBAYxZ2bGiq2zGe5dj9oD6t52sD",
  "key5": "4cQ6r563BTimvfC6AaEVAYA5oYPLi8vcW9VY4UjFHMMB2et5vYc6vJS2YAjnkAVbr8hTHnk3EBpVK92qTfyWk3B3",
  "key6": "24RGQDbTK97wdC78xZjiqLkGjkgPxe7gVjYSjdiTUt9WGYjCBezyCrkQYbBADNZoCHn3LHkF4A3VfG42eEyVHgKe",
  "key7": "3KV5LFRxrSyQ13w3yF486QgnRNQmv2hVkBaQBqazhMzfaonA85114iTsNRivcHGQupc85ruRv9i2kyWSq5ESTvd6",
  "key8": "2wrn62qnmKuuPcPrjZy15QvVc9poBiEqcKgxEZE4XRAS95gXmi3LmbtW2fUkfhB9B7oxRjCgWMF9Mb4LZ3wGpwye",
  "key9": "2CX9P2fVqWaK1jRYcZusMDaXDMCgvyGWQk7Gqca6ms9cV4F4dLrW49Lf1WHAbPiBLXbpZVKWmrNM6BGDWekGyyhA",
  "key10": "46Gba6qM1K9YbKRfWBNayNqPomm5XMhe5f3dxsTy3cHCVqv5Ubf3B2QY1LktGwVTQUQc78yMGHiyLDSLgPyZwPLz",
  "key11": "2SRFfyjZTeYvHkausK3z8cikCGoLpXbBUWszknKVq85s1yNcGP1wAeYqte7QcPn1Uk9HddzzKZ2b7Y5XCoFyWHET",
  "key12": "3joNvA7wBVmows6KQc8k28M4WK3Sxza6EnmVvLKtrFYXcbk3YTX3ajGQTYEhunTkV4YDNtVgobjSP5gpC33dwjiq",
  "key13": "3Md2VqKNtDnpvm8GCbpVgjL2MrZ1RvSELeij2E5qL7HYvgk9ZZJQkvEqFMeVF8UNf74B8CJNtduaGhkkCWafJRr8",
  "key14": "321fHistFQ35rS7oag9ZUuVn58N6VzgGqhfNQrqFo3qbG2dNw72wJsJ2npjq1GWp4v6n3ngWzBhETo2GTrKd3XQn",
  "key15": "4sG9dp2NtevLaK2UaKYzeJEVmFj6VK2meouxawafSwEQ35EnYoX2F7Gq64nLwufzKQGB1jvyr6jW3h8Rb5A4ckJR",
  "key16": "Fy83sdcKi6DLvQhXUt4PqC8ciBffdPVr5K2tSy6xWdiFoi1fGLPN5UQMZwyD7GixyoHCZw4YY1gKFDrXE4EDoaF",
  "key17": "4Ptm7xvqNrzm5vDn5Cu3zhvLSWQhbbnnXPEB4S4a2a9tP3Ls2zqG5JsGJt9UcLhmT3KAAGaDmz2hwoM66LWC4GFZ",
  "key18": "46A64c3Py9jpZtro5qFD1ex45MtEfai9u4v8qWjJXxNE7FQLE9ZB3SWdbbG7xGF4naAtZo2mMpGrQEcCiQCqXB3F",
  "key19": "4TuLKm1sU94JD5n3wGvKigWoV7ARCNqHmaXbHWv2LbqaRV4vDHiypU51ruRjgGpEpRBL7CPPSY3A5P1vVF7HhkRn",
  "key20": "5DT8Nzbz25bpAV7SPGRVnRvZemYLdvpe1Lz1yDoJmbWuoVnseDCWWsNsCyxSBkpueRj6pgerxPpdprgFLWt82T53",
  "key21": "5EBapEgRG1LQANHeH5iybLRMckDZHKg1PDPXxpWVAZ1Ry56DDLgiz6AMBN9rKrjuraQvpCDFxQhx9v4T5fMBXiWm",
  "key22": "5DxXTVwqdootMd1xRKzeRuhRvdHT9yUsk3yekB7Ru9g6pFAVo4Fx76YDw3BAJYdmkk1Q2qrFrcskcZW6kYjmUVY5",
  "key23": "LhuDxCUmZ3PKNmV5xuYRJsbF8Q9yN4SzJHER3vrJy24Uuvz1HHuP8WGfcKvWUWVGGyiQsWzdyUx1JqB5gom27vw",
  "key24": "2FQdLbcwwUmTYsS4uiCbSYETzBRskdsu9GBb5N7QWwnP7MxKUTWWEKBg7n2EkATHT97Jn2i4StnuGExL3MVsT2YJ",
  "key25": "3G7TSeWs2C1Pqph8X4isGJJQA35dDDUkFGAXt8fxQ22EhsNMdWCXwAv7YdPUBnWQbxo5saBDK6dBfKTouTSfWp6a",
  "key26": "5e9pyHXUaQpKR3Bb1yGpMF8DD6QswmUy8ZT9NRuXHAU4rxqRrQ96aXnNjxza28MdyWFC83qNWs47ZL6BigNkhaF3",
  "key27": "3XGAmEAwvidqochQBfoXM7jc3GWbRbYuAp19GB6FRN6C6hoDtsShSqDnmmb63LoTbF7CXyiACv2she2s8DZ7pqEm",
  "key28": "5R3NJqUKYuej8A7gjSBknaNY7gDGqgkpjLDUMdtDGXcfwDQLrK9PDGANQJpRiMHtiwwbQzJwQsa71mRbfHvubfLy",
  "key29": "3bQpaa1h7BRQSjJTHuhkfqdCxRUYT1wciLA6XnsnFmwNhobZvSpYhYX1n3vBdWcCxjYP2nibN4e1qLfuqwSSFUBG",
  "key30": "21zcKBBFZmABSM2pSAsVx8g9hYSDbEGhvbzpFdN1WgF7kMLPDCeXFchm7BAdW91sGNh4cYn5JhjJimqjYpw2DLMy",
  "key31": "2pzuDKA6LGuTk7RGyPw3mfcsgsEEzc98saVAAXhBGXppvoyYSFfm6pkr78W1aDDLTJA2UMtdnCR1onLmwXkjNbcj",
  "key32": "4douJEGw3dQ3hK5RL2WX2mtWBS5TQZQAgDSV52YgXvF437hGUqenKnZsCxeTwYqAZwAhitPccHqQCA5xRQ251WUu",
  "key33": "5emxJxJSoT3aXvaMUoD4DU82zgtkdVFWiQE8M14G2QZh8awLDp5Qm71hwePjzPqVnwo6wEUNFUVJqLdzJVUGF3Vg",
  "key34": "675pF17r8XmuTjcrtu28eKiFSmdn7SaRT1ihPBo6SQNY8zKHF4NE3EpUV6hTeWAWD2aBjXxSxKdEfgc63TmhP165",
  "key35": "qrNnfhvm2EMC4PzCLSkJyqB76L48jerTM6Mc9FCF86acxE5QoLrPLMnEaHeUNqhiVVtYJhQkrjH4VcN1ipnoErP",
  "key36": "3hguJjnM5VZ275qZ5t2fURqxUfDyMN69uXHATQqNWafaK4E14C53UQnvAohC2VTb8YGGcCR7m3CiBYACmQmree2N",
  "key37": "4WpVnJWoCsKPa9moJzxckw8pN3HKvpvRLQBs9kajqTX6RdBvFmjRayngRuuwPUNJLZiyF5Gak6M7nctqfhv5gQie",
  "key38": "sYFVUPzCfH1nTK5mMBLhfWGPwVFf31SRQhzC4GtQZMGDhx6rZjeu5iPzy9aUKd64hMfVyqFs1FVT2dvLsekZjB8"
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
