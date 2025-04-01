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
    "3AjjcMqCFLZHRKKkXaT8cC3i3aURk7LYeuoTkfqDEEJsGznC5GPSyDKLqMAsmgfJHqnueCgvat5wKVppBDfejeDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bgpwpRLmRDgrYCJPeXpRSAvqrZipZKvG8ixZuxh3pVQNTteQpLLHnwpjXe2pbaBonoSBsioQ29H9uVibGgGNzuG",
  "key1": "1v57FG4NtMNknti1CUaShuLcPj7xW5PyggwrXfptAvbd6jSCexz46faiLjT4VFNPD5Mrh5NYizk4Vr5spnW65Kk",
  "key2": "4dcYDFmnm3d9Nr1H1bbpvdxrjXctbGTv9XD6pehZ41SCspkmuuW6wUYSbiW9WZQShFjtSsGL3dCzV6BmykBvNmPY",
  "key3": "y7GKtyqES9tyw77TM7nDDjgcWCCWTFtPsou2dDHGq1hUYtz4eyKimtnL6dzpxsgCwcapeVaricpwdBXBv5YY7Xn",
  "key4": "Xc2HM8jeCYipAJ5zR5xxdR3bvoUX2S9RLJcCVwYd2eMonKuJnSTTQMvRBP7mWU2nnDzcuAqrZj18QyAM7Nm7VG7",
  "key5": "3Lc9KpPWz9qrVDaPGfCqm4CUkQYr7FZbYJTw4udRTXwJwhfRN4LMvhrQjt2cd5mcB288kx7NwuqVfLsPe6Jjc5pM",
  "key6": "4GNrGNzjK7o8HBjUruD8HgiiPn7TMVNqgBhqdVpKbByJnLqjMwdUqjsdJefwmhsA67ZP2ag3Lokr93EukwVeJAEe",
  "key7": "5KughhHEDqBFo23Qw9Un5oqkzXaw53KY4QjSXYpc7T1ioH5hCDoVBk8YA1m8vKagNbEKqanNg4wj5KRLRGDZ4x8T",
  "key8": "5bKfDygFgLa1tk1wBhkAHn4jeiAaKDuh8PPD6tVHRZZUuZWj1ga86B4d9avxyjV1Fi1akgRx2NQvQiUHVhwbcL4G",
  "key9": "5vLgWmD7Rcs9WN1AsSWfhx4dAh1NySNS6VZ57SUxQYE2mdv8KGV3jRMZLsb3c28mFR7aM6wAvqKL3Em6mKsjSMU5",
  "key10": "CooqRzwSfZJxiuCdQxEXMNdDN9YkbYjaKuaahmdTR42MKqfw7USFmqw8VDiXt69tDHjn56QuUTs1jRL8F2cqsJd",
  "key11": "4oXMBdg9fzJ7DzogUVcMPZYQUWaW7gjDqkL6jmv7yKqS5sS1mH8GGsjbgeTiT3Lfs1q1XBu1d7H8VK5SxNEoFW8F",
  "key12": "4dXU6JjgDSeQx1S5Z7Eh9osv2Sjd9h9GQfBVLVv7wKemdmKrshCkRZKM884fxKXnu4EPRkwppzJxq7kkgFkC1eVs",
  "key13": "2B7jHXfMhvL1H7CrBxL4fd1etPaiQ6ed3dcvAY7ibCfw78SyqcqQvfaqFKiPXPBU8VtjAfhQ4FsVCFR69rhFPcXr",
  "key14": "5YJGRGzN3zaDyB2Uh6gvAbhpvwXtuxKV6XfqpBCR9entyrdfpRf1j22dFFkcGB21PuPCSrvWzYcnDeyT1GiP3vwJ",
  "key15": "2G7RSpTvVa7jYHhF5zPptEbNHvdFmctEZEM9af3HKKxyUSm3visCnmdnquDJRjWNhrA7FkRW7XPC2nM8aYWbsNU",
  "key16": "2r6RGeu614gGMyvWRixzgBDPzA1yRjTCzvNqhYhEYYQHuNnNBjiGBXD8idSWZuKL6F8wiqpc5rkfsVFzB2KmEafj",
  "key17": "4nGfzFA2FTf7qy4Bn3vckerRyiWzRPDJCu4HndtigsEtrH6Gay1atfXC9J4skQitNw1i1YuVkqapDHMLhcJiHQgN",
  "key18": "5Js9n9gStMZqJN5bBuHUTyVuNDnm1mUTMt88UpCaQF44gWx8AVpkVL79aBXjBXZPPP8gfGCnXh2g3B5Gk5HxUEwq",
  "key19": "5Ew4DQuaUy3GcQoDtRrU9ducTqRR6hPntsJ2MwuRUKN21gw46ervkrBggwrkwYesb4YCW4dTqyBcubxbiq9g9iUn",
  "key20": "4i2JgC5YSuuDZXNd7inm65gE9wFGgTHvCLua2k1A6odgShP6Jm8xfws6d99d2p2fiJ78hFEXW1bzzdtsLzNeD1Uc",
  "key21": "4SB9Pt1pbqZgWVzwftVhvCqo7qo31FT3TJFb5zH1KULuwN6wVuvSU2fHBgujgR5LxweUvMfSwm8CTBiY9xpBN7wq",
  "key22": "9YG9G5czrU7HFCKNJdJHQeAgANmeiygw99MwcRLVnxW5PkgohGBSryUsSS9VLHiiikfUsAHPHaVAnusDG4YzFFF",
  "key23": "3zwyZhNpPE7dMauBc25AmN9GNxAm6Wuxxye5d8VGzHUwjcA1mXhDv1kE4KXdoHWvw7wW3m9BnmCw9hKwAy2WhNx4",
  "key24": "2SXaDhuSodckVNkSbipqaYy9MKiG9wvAjFHqak5rGJjmtMhGYQYACVrMSAMun3MhK2e6owvjFSriEEGT7ugv9sCj",
  "key25": "2i811g52Wo9MkEEixuv8p7tapRGaFg98Qt7feHqawLkAJhHVkScBVbt4pta2f9vvCPenzGduM7hw83gBvMqxYw9T",
  "key26": "563ZvmYDCvg5bHgmTjp2AvxU1M6BP9TcftvH1s2AvU3MQ2VaDujw5v18Miz3WYHxQwfMajSn7W2krjEH1BUdNa6t",
  "key27": "uQxNwVoM9gjN68nqUEH8jcDCHcVu9J3TbyEVNirfcQtxUHNPQMcGi1jqCHa9HuK8dX6zn9oEuPHpg6aMuVJYF1w",
  "key28": "4cvwDb62223jKMiReRhvve4hdxWnB1vzVNgRiVYSSNgXdqb7dBYpP4baSpRKxD3TLg7Dk9BRA1ttJMDka73ADMQJ",
  "key29": "2DLrmyA2Mm2NW6H22nLZ71XzyBdHQUsCHR467NgTyQ7Y62kM1XmMzVBXw7vP5gNNTZ4tgQ3HAeoj68DeNq764AMv",
  "key30": "UGp7PFd5iCa1MDA7CUXmpmJk6RBLJ6cfLD8NNsdKY8wHhNRoZWDXzuDLujXDDndJuK6fboxVAYCFikJ3oPrpboj",
  "key31": "4ReFhRvBorfFHk2adFu4992hVYPrCZ5xfpbgdA9ZWrfiEDZjRkEjRpWXa4JZb4TB7aXpaQ41gG8JSq971Z1GpsfM",
  "key32": "29RduBJwGLiUDi9cLt74Bq4XFH9MrV1KQCkWqCJo1deYGYwoAVAdrsBr4eBbsR2MM2w1hBPkFs4rTnYB8ET1uqBR",
  "key33": "4BVLTGRCLCtuYYM9AmvGTJ19kA5esUepdVLqTfK9m6dRprFXNSra265TNNpH6Z2rYVwJiLnoq2HSREZi4PB2V5dQ",
  "key34": "uFxbEZPmXRsSfvVZu9LeNros3LUoDT37P7me7qiDVocM73taNxrsfkCmLFXFuVt9qY9wfMpC4As5RxaJNf5B9pM",
  "key35": "4zg6LHobKHVgkXKHS8j6uHBR3u3UwRTeTShNp4771J6P8PMhTmZTyFEeJSuqL6W4zioN648pymTmfEEYi6kkJxJT"
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
