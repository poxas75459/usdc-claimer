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
    "RYtmHRV5XLA4yQvXCnGL9xZge8jgBkLu7u6VFNFhAD6c6EY3As2P2QX3W7xavranmmVHfhmMjPNrtLptox5jknP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ymGDvBKJDhsVtbFPqaEySqhuMFjJdKYDCqwgEcpsm2gVRK2qURpPWtZBYmz3ozFeAqFGuE7192ESjxwp2UHqHz",
  "key1": "7HrZDRdqCVHXp2sq9Gh5no6DX381MA9QcnJoEAYNVEzkGTysHwzzWHySxmkyAuN3P6p1iZHhDxPHqR4A67CdGow",
  "key2": "5QYaDcbku8gLP1ngzyrLjR8NXMzqPa6dBqp2fKF8hZseVcYNqFwzTY2qkGhkNeiszGUxMG7rknN4ecfEq1vYjEGY",
  "key3": "3LDhr9hvhuM1y4G4sVEZg3nMkjLdjZNEQni9ADR45L7ZFY7omDyeEbf4X761h5PznicnB3w5XbYEYzDk5ESXNKNM",
  "key4": "32ZFuTnf6sEB7PQdtjkcmUmLfaPgb7kuE2WC723ng924WM8G4Psfp7aKzybQhMmWVAaPMP9vnL5nAzVmaJVSp1US",
  "key5": "bbKVqxHkdSmEyGyaAZtnLrVNroDQq69PJVA7sQ9LJZpEUUZdJPNvRhoBABJA5AWLA8PMcc8FYqd6edEhdmoWFhb",
  "key6": "5bqS76d7xdDmyrngWLD46UdHT3szFahGDEu9CvF3GMs6baTSyZL69gPZAgkbt169s997pvEPxM32G67y5HhsZqTZ",
  "key7": "3zgnYrRw2r3QE8zFaCVRwiZMmw6SfsXVxTWned7WdNiX6U333pe3VWZSV6QLZpfww2cAAQdXqByVUPNk4AcLGbUq",
  "key8": "5RDaZLd3imcnQis7ztGzSVzkxkYY8i94WKFnBbkmHgumubyVdzLutkEXmi48fTgE4KhoJZnJBDy9mJhpumkRk2Yw",
  "key9": "2LxhUsxmqNNBaKsqStzY49LvQGLR9E8Yx4mnvkgVwXvCxWTNGeRdZoHYTL4R5D3DUDmTtoVxtqTQyafZj8VUYANj",
  "key10": "3irNnC3xbXa8KpSoPvsKEFVRM9yf8yWPV3pXGfp4GXBEeLtMoriU2FnNyxmUFVxDXsmUiQTaDfZtSZwdZRmD8z3g",
  "key11": "3nuAacFv7ZVicoLZbdR4NzjqBvsB8hyb557TVB22uJQyoF7GG78bqpRCtuufUhH5LFDyYxVS3M8MGy573P16rAQL",
  "key12": "4bNimnyn7pHgAPS5DXv2RxVwQLvkPMJzFmjAacuSprMcpKNmdd4hdvX74AHca65iLTpiJLWeBhUznz6NypoavJix",
  "key13": "27KMfN9oWPTQhVqaGFBgmuNpfzS72RixZFbuNGV3HvbsRuu1ssd82nur6K4UYiAoHfkunY5kP92jJTgNNuim8rDc",
  "key14": "4gKa6E7ggMrH5F4oB2pfAiRef8zktD1QH1wxJPbyMzDUzvViGxTzkm7i8XWFau8y9AezNcbhbcxM2bB4QjRnea8C",
  "key15": "4kFKMav38spmDvjX3nu1ygonLiuV8FTCp2D8Uwa3fTLZTh6RgZcyHPHm1YpAoXRAcwGzhinEUgnZQbEHCWL9aBJe",
  "key16": "2xRrLFoqpommn7g1q23mq3T5KHe8Av8gWQuB8fRwDMeVmX8kJ5BpdGVUkPi475yU1TqNSdq7VErrQ7VnXMmeZqtu",
  "key17": "LL1NzLsKL88gNXi1VxTCM9NZUZUrTGdZp3q47ygorQbytKdZAspD97Qdw135KUjwBFWZRUDHo9nmqfWvE8YASA6",
  "key18": "3ESLNUNqRqFYqLfLFDgd71K7RDgy41UwUWCvqoJYtmfux7YgnFVcd5UZwPEDUZe8MEvvfUb1fsegdazq4RPy1Ny7",
  "key19": "2i2jqooJmyopCnvX8MDjnjjbfvgxUoaUS96CpmydtKZrrtBNg5EoJeQAXEsfAmVBqwyCpss89gLKs5pSGWKMWLaE",
  "key20": "2idLGgSBtDfPzEU8aHozq8xCF3TAHhagBQyxqjsJAA2S7an9ZQkSiRwUCeyyZfPdKYivvJL1L7ZCo7xY8iSHW1F7",
  "key21": "tvdsfQywzS2Ub52fiYQoKAQ9n6VXZsgYjuCB2ix96AVtyeWW7rJLDuUL8uTh2wX7kuQGb2QoPzNkBjbjCpzhror",
  "key22": "5M1DWUXHRRFVnABzLpydwpcwc2ULE9zLLDoMv3dk9rTYr4cx1SEAi9whr2r86yRb3sh1JWYj7r4WF34a6ic3EeEp",
  "key23": "hJ1yZPfaDzYQAacoDNdEMAKDWgiaMfrz3Q1guSfJm5Y14kVYZWpGoCv5GJrdPUqGJAXJRTN3c1UWDcqe1Lq3BqN",
  "key24": "57GAHEcoKNGgGzN4ABXdtJyHFqn9Ymesk4HWNFw8XMnHa9mwsu7qpfG1LzFmHHPBNKayUej57m2nGYiVqMnPBJEj",
  "key25": "2cRTmgWr6v3QM1Kv39ihdSDWdK7238iv9u8XvtRQdL9YP7ktYXxETAcpmbQwgJqrEJz2QeYMMAdseF7gsyVCaNZT",
  "key26": "4RWqMgX7s6axXZ1Ph4PxTi4EoM2wjTD4kfoEefCBVVruUTdsG72aPHjRvYLqGAS2HA3aZDcmQ7mYtyAZaNBQshsD",
  "key27": "VNsU6SSfxdPvFdqQqDC6gHL52rwwTUnjsamsLGxRoDQfFUiJcbSnRZeCxrcSpqMLbzNWfHBnLAqHbb3bCjvUzK7",
  "key28": "3G9NiykKf9oRg4Mg3XjKMmCjrQ3owL5TBbCA7MkcpPt6nbp7rQZTnLoqcybSR3djY4Qsh4LWGM9gqdBasSmH31oW",
  "key29": "3SAmZwmtvJmo9HiQHCBGfi3nFpN7u4PGWyDwdU4bMi3ueVeeqG7eg9CnuXzhVa89QVQAFSt9voxedWk1u6GNxQua",
  "key30": "4pmU9HaXUz66XBAPxjL4Tw9TstbTe4Xp2KzfrgTJv2QsNhGkJq3DNHwK5ZwM94a6AZ1e3XFHobQdVrKKHo6WGo3o",
  "key31": "5uXgts8axSF8rpxxpvsJ7uiPPj4t5qJK35vKGgrFBxCKggDUd6ubKb7meNud7SBLPKhFjd33M67crA7EeU6Zzso4",
  "key32": "3o5xDxKL6NyKhUXY8Hei6HJFpq1xVpnezZCr69gyuD54rHm1BqzdkGrrnLPcyAHrZ6SU2DWGEvF6LKKhgtJtxPNZ",
  "key33": "2LeKraXTtj2YPxpheCsPfaDEG5BrueQCriQi5b8sQdYpUhu9Ea17Kz9uEmv98HRcVq2wZ7mVhfjRDz8FkTuuc5Mb",
  "key34": "3ToaH1bJKwJUs7xtYSCz8vR9Hy7AdSvBaYToQnELxCXGogV2ooWHd156KptyKyK8nuMMEZ22kKxw4h7becSZYUya",
  "key35": "EDCc5QT3Csr74EjTUe4ba1DvMpePZuicxMtZY6Vna9z6jaMFkeUDwjn9Er3nfFJNaXkciq7EJbfx6kSt3GYk72S",
  "key36": "5f1RXGrwZTA8Qtyk6cB1N8HwYcojgqTqgEJhWcpN4hMQTWBFmEHaJKdCyBKjuHN24Txy3gfBQJmTF7mLk7phQUg8",
  "key37": "4AhE5Q356VxC2tGT83bRZADpFeWYqm5hVAGuy68TVkcBvMU1T1joXR7XMv2dZQuA5ApQk8oeYXL5pRL46Z6JQAho",
  "key38": "3c37FoVgwQ7kSpgkyxtdEwHpyJYftuoVe2p2TywBKcGV5ayEUCcq37rfzsQC1LZGV3GwXoUvQjcqWUgLkZ2hUUp",
  "key39": "5DnhTgxUHH7MapfFKtLc1C3roSkHWuP9B745kKuziGyVnSxxDJihhHPFSwoL8oppEj55z1EGDzdfyQmqSzR4F6fu",
  "key40": "4pHsEm5EdDt4U7S5D6x6GSHsjHiu9pQRsHs6uxmhJcQSeYEDsYBXnrHvMvtJrYzca4i95sLcdSgWqDDkYvf7defF",
  "key41": "4iQNn2ZQDDRAgpBG4S9EVkqyN4J931TFb7gMiRAyYNwU47E4Ws3vQvhNKDTe4WSYjsQVwPtXASbE9waYqsp17UHs"
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
