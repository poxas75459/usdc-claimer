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
    "411Vtp6RkWp5FMuS8ayfWp6x3ExvkkZHPjS25DTBjHuAxSrpBPLHejxmxgQrP8irV2TvcEwzA6b1fwfMFspdwT48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LMoJhBHtPYrd9xaFRiYkUQo8xzQmeZp5WYR5wKhVy8g1NbX6ffeE818XMKkfcRGy2gUvWA3qVGvD5kuJGGEKfvj",
  "key1": "2UTNADi7WVQpMVqQNatdGZd6gPXo7LcujgNdAXfmswwFeb9KPcx5JWhv2Jzdv73E1jMxV65foC1f9xYe1mJogDER",
  "key2": "5Hw9FWAY8D5wKe9FZ5EoUAtsDd5osQaCmt7udC74HB4NitQGG9H7D2Sc8DHvqE3irZkjMCc3FCA8sGEt1qDLhqdj",
  "key3": "GeygAz1ooqbZQjDQd9dWb4SPEvcXTxoGS4EJHwQcUtYbpGzXe8Tp4Cr5SaJ2tZeszthWURf8fTLeBv1Mx8nS1am",
  "key4": "2Twj5zTf2rNftLVfWKZya8RCGW3gXqpNDmBK6r7or8SZTULJZsCmhiJFAkoWBBQKq81LyAWU72c1kbx8dNXSgr2C",
  "key5": "4HNRCjYPHpnDTaZazP9XwFgxvoTXFw8Lq4UuAQvm8vE7sy2e3QMPSge7nJ1TPpuTuBL1EdwT9UMvj67kctLqnfui",
  "key6": "4Vk2B4dq5i9xSg6zBMiyTjHhFhLMm27AXZHKZVfEHgesoXN2N6h1nMcmrgN5jGcCdd1bCkkvB2F2rjXSquXnnGWn",
  "key7": "49zzXi7vLHMK2twY4eYbtDH4vWiVp6hj3wdZePGnYUGCVDd5gTYoZLQyZ5psmpWea5U5GhZE7psgxT8etHYSxKoD",
  "key8": "3LshuPd85PJShgnsaMB3eXen8QTFfmc6YkPxJ2KprFNCWxj2zVd9EqvGrundXmNe4cccusktTAAyg3zoqvyrLT5x",
  "key9": "56U1kKwEBvxBkxDd3W2hn2JyfBrGBUpWdeyqhYbSCXE5m4Mtd8HprAxKY6hTQ8PQJhkPYrtgsAFF8uCKF8A8VVC",
  "key10": "RJLvC5ndFrQNdt48Kz8TKqpvL4b7a2qptu6DoYX2yjXqnmMo7SQD1P9q3xVGpJdYszV8HJAhjbdPF4jjrD6ZjbW",
  "key11": "3FxRBVkpMurFr9Xd4xux14yjfDk8g5gjU3En8EjFRxX7jhgqdaayCvqdvYu1aJP4Sc2KamqBn3TVJKLqc9J2nUf1",
  "key12": "54sGhc1oP9jUtJpqqor6NbPeCgUatX2FUzgHVY9tzG1h6HjFsp23jZesXY9nViYYXXGHR69PaqEQcoqq5A8UakQ5",
  "key13": "3JtSwKNTgmfiZZF377QipoMSyUxV6i7UBDVwwQWFDhuz12jrfcZu5SfTgXGuYhN2xty8ewaooj4j72CEGBUFdcmq",
  "key14": "UrnbLcRLv3HNuXfyD5UDE6mVChvkpKHYHLWT4DD2wvaAL7UnGjqLrxUzH25R88McpoKDNDXNf4NEVYSqUaEV7wD",
  "key15": "9bvVXqph7AUpKLmoJAe4s9wWYotXN8SCxmezotJWfH4ra7pxP9rc7swU9KnbbkFeKa4k45uTBc9TnzFRD2j7ug9",
  "key16": "3nbVYZigAM6fWRahXmLihktd7Ek3BNTLmZhdU4RhUQrdTqCNqJEviiXoja7SoMriJfe5DLgqEmGvijUfair6yWmC",
  "key17": "CauRt7wsFxwF2jAcWFLAyeJjQLekbWE5hXQzypNum7Ta3iFErTN7z2jcc2XRUdQFUGNKffij1FJd8F7WL8bjoqV",
  "key18": "3MC2JHUwZ9edZd32vcKNtpg7DUsyVYJmwkoXV9tZPRxApsuhMpjDPLa634LR3NpHT6iEwbuXpasdCo3idkj2ysyz",
  "key19": "35mC4EQ6Ef6HMjZgnUaivnGMuHg5xGCr5WuFMxp2hEhstMLZPzuWZ97q1KyKoQ4FveqR5gH2yrpvjj7wJv1XSvMV",
  "key20": "4T2d4oNYCxHpbvHFRpgGEZLfnAMPynA7ebuY4kKvETG6H9GucC2Wm1dNnnEaRCYjm9beYGgHsAqLJgCThok62nyu",
  "key21": "3LoqWS5WD9uYyqdqALxGvgUaRnmZzyDb5pff9gX1716VTiJrB1e7stvzBrprmfnW9poo1jsij1c2ALr8851Q25sr",
  "key22": "21oKUXFy8gFgr8EnduGHCA5jicB9B9keuKXvy4XLoTg8jcU29HxnhV2Ppdx2MEhrdZruiGXzAC8gA7pQXNYvxbBb",
  "key23": "2ppqv6pdZvv3tAxa8Tn4a8JAvuVVJSE7LQFVjAcmggvu7UDGDMUYY9AqNn9rv68hKVipspqu7iyEuiJfWcxpGpEW",
  "key24": "NZJ9pjCQFzcXaNtQtLCmFJoUhAW1df7mcdekW4HgmrmuR4xP66mz4EM8AFJjHwvNZZKyxVXpjsaN9R4UNdZSLq4",
  "key25": "4FHwLNYur8fhgqNFgZo4RbdP8qRvTXotKW7UyTrSN5N1qvfaHeBji3Y3w2B7apZEThkskt6atXKxxX1xsPXDczKq",
  "key26": "5vhyVoGHHTXrj63f4xi9Mv8c4nrnriwwqXA78whayvfmXXwkcZghrrqhDGMYz541QKKciYLMMftfvD2SsVsyRSmv",
  "key27": "65wAJf4Z2uZDbwe66qaHZ2LewiGFdAUP9XB2cMx1fG9ikwMkiHzUYvdWSWzuWdEPUtKrZLpxEwbbYDiPgYNtnfDK",
  "key28": "4wiy7zBeLQYu4YJGrdjWzW63xSJXdmSkmFBHb4Pj9wfWpBXkPhHUxf8Ycep5cJGAgvSD9ZsyjLyh6hkfBgiyQGGF"
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
