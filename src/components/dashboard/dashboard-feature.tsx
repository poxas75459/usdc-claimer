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
    "AARxyfVt5gnnQ2ecFjqYdLUfuHDtQyGqj3ihSEfZQY8VfSLpYUgEZ1qNvV61wiRLP72z6rEz3wABLX4kuGCjwvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTsQFa3fPx3NpKHGEGyTVmqV2DJfm2GDpYQHTQkBUkhoLGQYCC44soNgv25Ki3ps9WiHe59HvMcPgaq1NxBmDmt",
  "key1": "2BuWzPoP1ZXoNQut9rVzjHVukSW3MygDcVStccsenPsRwPpa5RPaYCAQDtu2YNM2uTzrf3ZRMFRXfdeRmTrnEkA8",
  "key2": "29xN7uNphpnbabecWfXNsjVeBLCtgFNA9tBbVfnWsFGBnSim7vcjf4iDoGGVfjQUvu9Lv2apEMrLwq12HpzadJuS",
  "key3": "2gR2ADLutGibzzQH5CFMrD3LXj3wEMrxBAqFN9V8SixKEmNL4DCD4VWn41XEMz9RXfuWAt9dXNGANhQB8MQU6uCt",
  "key4": "3QszRa6rWuzvnwZxNJLUbXk9aL8mzaSKn8sicXiKCWaUCjesCUGxEAAqqZ9fySSRfT89AuwionTqWZxEENX1JZhz",
  "key5": "67ECPpQpBPg5A9BjqGCjmYsBKoNaNS5cs2EecPVMFh9p3ToAMdiV7dBGWmtc3QnKa9eic6WkzMU16rGMUE6to38q",
  "key6": "5ZAFXXnUN2BG6nt3YXk3QZL2iUYZCUfzw8KMMhQqQ7QfwV95WQKDjHTFfHNMZUVbajMScYjUycAsz8pqyA3fHcsX",
  "key7": "5iHfLFxLVDmecNToDWMrKYqJifANwKD2db4QJy3GhCA6jDoBizn2yjmEvib6mk6WJZAT3s89M8VqT5qESTfYdSwc",
  "key8": "351coNUZwk6BqaJmp83JF5GLtw5Vjn2GmKWoxSkZaQ8JvxnEA21i2Fuy5ZBBTCdo186fXiJZHtJpymvAmP6Ri34D",
  "key9": "3W7yNreRUmbdj3rUqFuB1tex5mtnE7Y27qm3cTpxMjFwK75YDJ6yu7KR7QxNSTvpMVbfEkWf43wH1kdnDVrVLFuY",
  "key10": "57xLAtxFCzPZ4oht8rZaWTkpqvNsGB85ayNiH6ZxDjD9W3nunojmMjGSdvsiHN4daST7HXy5RkgEBdaJ7P9amRGu",
  "key11": "dMLGYWfFzd5AE982mPyiXGFSZAisXA4UnnKhLs2CYSQhBvwaKvGoDq3ibuVrtA929SMwPV1ReeQG5rEFEwf9rbC",
  "key12": "wH3VwRHoU6iS47VfLqc3Sq8h3oWBMnKeFhtMEMGfmLBkz4nnqrVVgJFzdsPZDWcghGUSt7KeZy5HepVXSi3nht2",
  "key13": "4JxgYy2T4uPrCfGmcyxcLFvEPzXhgpWe4Qsn6tybpwadvVUukADQXmNPgUoWLzQZZBPS8fh8ehqHmgHFzn1yXpQv",
  "key14": "2GCWCxrEfdGDbG1fCgMc8AU1VHYLxaGTgudZmN2nRW7eFaCuCvEACtyktpTHjQxci7Hg4utZqGFS3uYg6kWpDF2C",
  "key15": "4AVjnnk1Ge65ZdcEqMWmzfDgzscDW9fTm4ARZhzgf3p8zyzVfrCGwYDU3SviVACuQTQZ6ymNkKavF77syAxLQBMf",
  "key16": "5X88PQuPVgJNEy1RJNBMDnKQ3i6BVvKmjqm8STGup2ZUvzU6f524ojqHW1q4tE5Kis4mHRxBDe1RuLPfQSuJsVLR",
  "key17": "4fFKdnHNiuKwdb3HLRp8mFvoYi8C9eMJTkKXyWuWM4eNgpkcm4xbqc8zBSmjER11KUUcMMo7tNYtNr1xiu3Q2QNj",
  "key18": "yoduYtFszfNnCBX4U8Vkgbc4Tw7VL5yYB2DskAvJpunigNEijWUwVZUUeVouzqTWd77GitmQuKt2zWZgmjogeQ7",
  "key19": "3fne8PdsVTmxvUkGdFsnZrr9jRKDrLuMTRa5VspAg5ijiHGDki3tyEx67XTUubP8fDiafP5pJMBiv7z73T2xFvwN",
  "key20": "FyPPZeC3m6SL8bH4tivVNWFfhorJ7uAnWWiuncENjKHpcsyYN8pcC4r8Jw8K9XQBQKAezjbo8LJt3AyWMsZ8xW2",
  "key21": "UQrJrCVd2dAKhxn2TtBimKJan9TL1nMHNoJmadWo8V4TvrJvmC11zaomF8rW5PvywGn7XsPGCKBkjK1sr8QS4eh",
  "key22": "38AkYwCvj5JGML1txYvbdvgUy3a7VMPz4PqL1tgjTAMXBFUKmipT4uk3RzayeAnQv6wfroweL36odssV8exbobJo",
  "key23": "4jJT7NRMyHbP5ToKXYwQ4taoUAzrCzUwx7DYo99gXoh4VjZVKVr9zk51qEQ6ySZBc3pfe6uyiF5KXDxZ9YwTnDVR",
  "key24": "4rBD3aAvNbUvrBcTGQafn9bUxVbM4N39M7LXrkgmAf3hftE7TWXpXwUHGPrXjdTShebDbUMb8JzdtkTmyuq6LH5Z",
  "key25": "2KEvZ4zVhVnNCAne7mwS9RJkMYKY32hM7oHT7UbFj3tPMsRuV9Q82sq3Y7tJmSNBiWc6RX2KfzBrr8k44UfQWkbL",
  "key26": "3ZkeTjwvtxKSnC7tmPjQUe2u8aqU4XiK5GLtsD9NDbxTjXCXNjgVd1Q7QFHdy8MjmNH2vSQ6m1K4eGMGPRPkWSMV",
  "key27": "ZjQmmF2bFB6gEkDb3Ff3iK56eCHgfVxq42a7ff5AzczpvdYbDMEomEfbpiYUAG63kPmUXPEMvheAJUr4vxJjD5d",
  "key28": "wG9j83TQze4aHgeGmYdCg9gnoYxeu6Ti7CgScZHD6aFMdK94rL5KkftZ86o8Wocxtozcv92nHA3gknzfsZFB3zF",
  "key29": "2mgjK1u2c7AC1LHjm1PP3g7QhvFRKpwREY2W3tH1ve5wnaCSRgJvPgfAZLNCxtuCVVstcGkF3MKseTBJr7VQ2ptX",
  "key30": "5r3rnKFTwVmNbfGPRnSkj2H7usus9TEMtbG2VXZamSvB7ioeDHyZj1pPzWUVvhQWGKNaHPYPbU1XoieifF53S7Dz",
  "key31": "3o4a8TXLjCzv3YrZEK7pi4442gmVJuQLxshCdFmBFvR3niT1iexXuXDZrrhQ1yxAy2jcFraH31sd61puKKXhb7GE",
  "key32": "2fEVp6cEHc6KriWewnEreLftd2vFW2mvQ7u5mJhQgtBKtVHXkGwfzyQF6QcV8Y2PLmHNoKw2zHZZgfsjCvrRDsh3",
  "key33": "4goFUGG6BjbvsfxLksdcchu4AkT5E19gMn2YvEXyJzQihNvM9JPHEsF6gt17qzCNLwfMehDc3jpkGfd4muyc1GK4",
  "key34": "5vdQeQofZoPbfEp9ALNkjW5KDFX6V5tGDdHbV9LB76ASNNm2ZP8YoUSu2t4G7fXswftYiaG9qs4R6WnwVToxKg7F",
  "key35": "1vRuqL4VQhXniDZYZ3NENzJszHy1mcWsQWyjqbg3CJv7eC64nrh54kfXtfQHpGx4mfopS65YGr1sj9mTUJA2qWg",
  "key36": "2FL4grwLsJc3WmpoWtH7uAeJGdUsmAePFJusvhWJFL2BUWwVRKg5Q7hYKgxKvvtb4hukHgunvJpPvvoGY3A6GAc8",
  "key37": "5nESvHKdLMEkJ5xJ9NUNzk7EDEeaFv6wBiCizSVxGkyrJBDiibNK4RdazycLHwpyGssVadW7dVGwccBBaA9MPuzV",
  "key38": "GTPaXHdFgw6yuAYUyAPp9Rx32LS4QRBpXby9gwWAeCiajkhzWThg8hiKgKFLUHBM8LRFuLJJn5rA34NyieqVhLf",
  "key39": "3qZ7bW6axkMHTyz5CCqU72n3PpPyWVKRkwYrxzEZLEv77CFqRhXAe6RFKMyEMsW41BdEJaUUwUTiy3dbgRT5rD6j",
  "key40": "2snucNgjuzQWnPJM7DiQrjfm6ttdNi2jvCUzbUBFpyufGAqawmW6CZR6dxhUvf6d8BtFLRBvuoYVLuzsMRysmq7E"
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
