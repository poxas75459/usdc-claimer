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
    "3SDCy5ii3Ux3e1HD3E2cLD3eLzJfsZ7xQENMKqc8pQPgBQkn42dDTDMMmymxpTth2GUeELwodu4S7cfUs4MGCLbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmQKbPw28n726VD8QMXFtDHmXyzbpM7SnGXVvKZtJd8z3S2mc9JJEYks3Ft8ott3M8e3WYchWmKzQaU2dfoiW8Y",
  "key1": "5gxWEVbT8wbVnmVmtG6porpfDQNaj6MbFwBtN1dh83GRUfeg2TKUMZF55pEfCYNJ9EC9nym1zbub5UNtekLkmeZb",
  "key2": "3GxSUP3oRyHyJnqWF2H3oErMPzfWNg6nh7jTk6rbxikDiYNrPuJeEjkQThpGXmm5TTw7DqmayzoykVEy3WiXZorz",
  "key3": "Tzkesz8iD5goaHLwT9a5pQWmu6ynzgWdHpppiKjJ3xPPeE8Y6QucQZpPYoRYb4JRfJJpzLMTgBWAefXeJS7KnJr",
  "key4": "5iPqdMg5n1TiDwVkYLK5G2Cbo3Q8ncbPmCSUZSNMSg3z7ef9kBqwiMQdyiDh8KJFprc431GAtXgoR5mHdrhDQhke",
  "key5": "38J2ZbUBkpK7bZbsbf1SHVvfYHhAc5QMC8D7eb762mqDfZucsBEdYdWdPsN7hxLhtKUBRokcsyRb19kpeYEX8UH1",
  "key6": "4QbCesCQF3eVPcGzEem2TAmkJb1wyUhVq4FghgU7Fr4GfrdtHbWn4LpdGTtCxauWDdssJcmWTqE5LUDBfGiyhKtc",
  "key7": "2rUXKVridM5K8ZBnRrh5bXVeDY6A2dtd66UpBRQCuACE7FTxHtfEWUob7Hc2KKm99itqeA8TSy45TWfFatfo77WE",
  "key8": "3GugbGCszrg5zBs2zZLZX4tsZRGEedDMCX1xHz6ZDtSiVH9hatZjP6PBmtmoW8FuWhxtMWwD7VSLQq5z1FaSGEMc",
  "key9": "i7kdDvH3s5yLghAv75zaiNgFenRuDto7CEDqqLTSADSrMqy5DLcxdFouQEtnMfEgxf3baLswHDHozhTGYfqA4YA",
  "key10": "25WLjU5Lpa5isuXf46c37UQ598aZ5UQXjbm51bhUdAptnvEjmxHadsx6pdZAuDKKY4j5Jfk1k63SKqKqAxFrA3mg",
  "key11": "3ifkecr1SuzAFMNsDQyvk4KCE1jVGw6ndYN6wrHuQWMThwh3o746R2n7UriqNGSnMg6YgciD51GpcgtY2wYFtkmq",
  "key12": "2F2hWNnoAuA3BCDE6ESnVRB6xfYHyVPSzbfjNqV6kMkWob3Ps9UR3Rzv5TwVy8bYWdEmpyjecw5QnhZbJDGQwYt",
  "key13": "5TGLKwomFCAMqPNKXrPCdm126vG2J93L2WbWNY7FiACMgDxFSM9yJ36sodVa9qtCtsQ7Nyrf5FoFm9zpdrzxbzRJ",
  "key14": "3AxNnVmbrMTfcJYKCJ8FmCLcxvWyo59H8LHQMpwtoMZVNkwyevi1ydZcyMsgrKckuwwakGZNjYM3Sd3yHBpD6SEn",
  "key15": "5fQJZWVdDKKqQB6TjKeurcGJzU6Kv6dddmrNKbN8RrGR432DMMUazPvvTLucYcCqoBmdfkPSrXgKredq2NWcdKGX",
  "key16": "4RFN6qYXAe7rtuChKFpbZPyb6pn6zfLSWLcZW5EYqoLEfUvjyHCXRqMuw2e1qjoBSLs2SinnNucBv7MjM7oXaq2V",
  "key17": "2K2zxtvoewQHd7j9H5EEzhTgBPNyFUv81CBW8yovh9RikYH8tXjjwQagmnsJwbbqjFHMwZQ99V1MXeXdZYWmZ3iW",
  "key18": "5BvPeDGicMWaSvCBWUhVzuy5TdEHuzgHbYwuyVQZMaLajvyEBEhzqgZCQDkeQMV3n2oYKnA82NSSFbPevTa2Qmc4",
  "key19": "8Us6A8QQcGK68PXDaKqZe1zA6QmLgcDDJUyWy9pnnSVsFDvuZiTWDfRbZ572pFpoJzRyAEUFj9HpspHjJjBthCC",
  "key20": "3siTMzUUe5AoAoFVHaQwMpgtK4j65SY1ZQVwtWhxQtifid8YeGxXxAyP6hxvVxyCEYyTihrJ23mULJZ9myKVDqvK",
  "key21": "48cZz4nkUBn5WKGZnAdEBRH9xMUPovg1PUuCajRD5KhT54LeeEqRfXywtWtNrDUfhbWQGjHD9Zm8gSnRQqeUSemh",
  "key22": "3ZecRKz25L5y1mMGqRfUAP7SCfYrMvfP4nFaBpwVT7dDMB6FpLQ8vE9QJZKpf3tKwBtCTiDH4rsiCXJox3SEg4zW",
  "key23": "22MVzL6o43eHbaziTWpozu4VD12MBd1vCsRHfKuvG3kRpsqFZNPLGRk2b6UKEwKijYPVTR8Lx1Zgf4MR5ZECsnC7",
  "key24": "4vCBy2kgnMNf5sN9Zeo7gQShjZvaUjDeen7Ukk7DfPeoTB9Sw6dcMhggm4LBrKbgiG3m5679KUqnJYhA5tCTdGkX",
  "key25": "5Mb7cvebyZZEJKUgEk2xwjeQJhdzY4ruJT7KBRCq2q5BZRkjQp8KMZLw6RoFbURuqjyqNUguoyyWFQixfbE3RHoe",
  "key26": "2KeFpqMucuNUwfFePaTprofj9FMmabVcNKP15SvAjVBg6yjXhgffcd6gcKsnan3yPgafs7xqfFCjcEVsW6j761x2",
  "key27": "4r6SPDnd4NcKBxm8pyvgyYnZp2tHFSjRmhoZSaXTYzCvVHxTjazmHCTNDYpXt8NwhSWao7TXvdvEN8NF4fF8Yhn2",
  "key28": "3kLEXFYhjBpUbkXS2fFbPhJ4U83SmS5dFE5kq6ee4ZEposQVHnMUqNjBXBeLXMvTbA1bADpEvVE7bqLVPWHJ1EyK",
  "key29": "hjCoQYsXrABmDS9ZoQRMPJiUEbKW5mk2usNYKrRh5NLSDzZJk8wNj2KSSs1Mig4m14uCwoPEm13QtYAggVz8Myp",
  "key30": "3Wt1RJphrhRFLiMTaTaCFBtzSGbfcrnANe6bMD6jfznRWxtH23i5nKbbx1e4Rx8hcxpasS42DY3JgXuvHTgGhzi5",
  "key31": "e65qN5PUp2x1Z8NmmNZzMNBVMye1qmgecsminEo3muUygkqg21wExPsiAvAQUD2djXiCT6Uj6mzFJakqLoJq3Tw",
  "key32": "32AXGGQriw2y4mu73aqYwgDAPENGUYuJwZqHcJr5wVkKkGCbEX9Ya8BDRM1Xedyan8yuhsCyxKHbUmSVkZQndqLf",
  "key33": "2EVocE3vom7BpZE96ubsTWYczbXVBeLNASmxBq5qqjyf8idpvTLDmPjmfGubP9kAH3SDbUPX1CeZEGmwocnxWo2V",
  "key34": "VnWCEG9iW8hpUAxC4ywboinCTSGe8Hf3HpW4osAf5GYRoLWEWzzqLg1oKdZidJ6Px1Gx21A4mQUQVQbPmRUMycC"
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
