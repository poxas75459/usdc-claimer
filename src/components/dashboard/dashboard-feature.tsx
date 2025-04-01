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
    "3XmcU2pJgKAAy53UMjNHvDhdFWxiVUgeam9t9jqMij9FcFxWPLKqJHGfqLTkJepNEJqmD5DRSDxMiVqw6Xzk24Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hbxVNgb2yA5PGi8Ziuo6AMzuWRN8Xqsrc4XLKvGrRcQWCBrrTDJZv4XcmZFrCvRma3ZmTqm8pMEYF2S3H3A4Ez2",
  "key1": "2TJVTUr2YcddK8aueBMTU3fitLuPLFWRdfASmEk5LaZdPpCyoof1fKKEHWGWwbwRU5iEjRqaNjUry48KqsbYZjSs",
  "key2": "3LDGBPpEo7naJZ21yjsZXEaXVLUCAdzo7MNvYvRNRrWULeQSi595FHTUHUPLPXtxuNioGnZsTTbJaTPHzVx2egKU",
  "key3": "3vAyx4qGV4dqz93FEDzhMesiuW7Jxzhs3aDRS7XfZwKfRtvtuhK9vRBybsT7C9tSkMbPmJXpdtCMyraDDQFKWanf",
  "key4": "4CdMJGaGwsw4Yi8QjJ3kE3g3GKUF5BQc9GFAyJR73hiRhc7VYUNvkXvqhkv6PSKyuYjEseUFqsYDKq8XD9Ve6B5P",
  "key5": "k7ZqevEDW6W6KXNjZ9pUT3NF3sJWX8ihQgedaNcPnM3FtwkowMk22oFAKk1NiSysLvjznhx9CjC7ka5h4JqgkFZ",
  "key6": "2bBN9nL9ocVqQ4FYXyeFwEMxKnt6jP2SBigFweUyo9JrN5eYuVpa9DCemEBeWUMEoqNCku1hTucM22U2p1bSJEQJ",
  "key7": "5Sy969RH1JqjtJBkNshb4z3cN5ZqeA6cQUay2zJpBVkHXB5GYiwiW3JejDvVSLbzndaUKNnhCNMqZTAzH8WmP2ZH",
  "key8": "4F7RsYHWiZfAaZn1aP5x4mG75p2yDPAXssLWZRc52mrLSJY6ruMe4XWaWYckx6goSasLa2Un9BeQZemwbJGzH9gh",
  "key9": "5t2XQca2aRoe5Rm1WHGdnLkF2LVdsLANiy2RhnVJ5mVre29xLFJYuLuKZtzfxTSa3f6aiNmf4uqXuAiix8KY2rVi",
  "key10": "5pTxxQswCkzcSsvtHdYbZS6B7gn2ZQMdh1SbNXHfxUDBGZVP67pe3A1J72n25SUrhKXpJFRmwn244CZaXHFZB1vf",
  "key11": "3VwufxpzKMMycdqVHwBtSvkvQazmnZBCWXYWmJqd7ye76kqBiwGubUdkyaTXK4Z6R1EemmxFgbdhdwJRKJgUzhdr",
  "key12": "44jDQjWntS5rdfNqCYXzjP45n1cbQGcKgZquMbNKU5ZhsTdSvBvgEF4RpXRZdtTDyErzJcU3pcxdUw1faqXo1YTh",
  "key13": "3q3L2ghgD8RhcUxSNPQFH8iHqFQBPNPdbuzy6wk8mXAs9DCJCx6sjqNEa8sLUMiPRgCrx4wVrgFJQhuYdbJr9Xyx",
  "key14": "3ue7sC3CWdZfrNH7J2BDE4W2FTXd2EV9LviVk1GFPMVG3nd8JuxAGBvbziyX1P93bG4BQwAbLgvYNqogzfZkYTWc",
  "key15": "67BTmjTVsbbBLy2iayFoVo8hwtozrcQkRvV6XdrnNb57osEBHHVPjcBqtNSQ1uRPS7Vr9br4snVYJ4HxMupvZgKo",
  "key16": "2NYkfHQqnUDfcaVDuC3eoehxqY5UB9MxZtcEfJAExHZjPZt2GvAQ8sRXtHcm2m3sVG2Je6Tg45YQsNgaN5QXnCzD",
  "key17": "5rd1ykYKQpL8cspwVbwEdUf1ygSdvQiquMsFLmsCPdyzT1s8w1J5oJ2QW5wQcygDKHuWHVXHjNDV7Yft17AX2gNA",
  "key18": "5jquZvNRL88eiKSLkgjbDZiLYz71JgYz183DjNYeoF9m9TUmVsfTHqoGx9NcQYiFM3Kfkiehdv7tECYNRQhcyMaq",
  "key19": "3dm7nP6J7bifavd6yy4gfYvziURnQnv1SqXCkT4jQQZt8tqNAMHxcnJoNk8wKBmTLynoHeW5oUTZrjSrGk2xiAbW",
  "key20": "3DW9YvtfeEYC7s9jkF1xCPRUJWruLJAYQd5x2xJNWcmXkK1vqo8omffAxzXuRYGsHmQ9iYLdwaw22yUKk7sQNDZN",
  "key21": "3Qd7QC3b7mKQKYJ1xYdFn7kVpeWdBH8T2HVACW2VZGZZCXKwUfdbPwDZnqXDCFWzgVSbz6N2cqkXuGHHx7U3uAf2",
  "key22": "4P6fNQPC5umXh57JrwZytTzbMKYbHGktxj2ckbNuP6A6wEcFrax22NTCeYkPUpYMASAZjqr3jhvJWrEQrpkoon9Q",
  "key23": "5YNfwsYiPqkugkE2RDifQceGpUdiT4yfkJUXW6fQQtRZutLjzgHVxyJgZ8oAb2NY98rNVo6xew9fZpctS6e8fv6M",
  "key24": "9G1tRffiQGRzb8Ua4tXfqTTrbTZK8ondAhgPHYboPSLRqkd34ZXtCNmFEBojQxSkZVZX6dfybMB6tPegCovCtNx",
  "key25": "23vJhffN94J4XayaKgFiZ3asffRjqmTFGyusamYDkuZ3uwtfhAniJQNHKx3ErSkZfWejjcdWfvNcFLfAx2pWQs8h",
  "key26": "5F7KXmFT2X5LPJsuqvBzQ2VHV7WvKNW2Rp67uhyhJZgCsKgw9hAbRYn2f5CHPsof43LFcBkZ6eG6usLJQM3MYuYK",
  "key27": "5R3Cf4RgfNUryjkbkvyEuYo1cdceHYU7wBen9ChBdsPdoRz4oUpGe4T7AT4rNJvJhyw5LFwfa7Bpcioqj6sd7HjA",
  "key28": "3XPhTtwyeenBPaSSYt2xwkCrQpuSw3E8KXGtiZCfmGHUFYRKbxk66N4S4gP5pxuBtR9gM7HzAwgf83Zcnr5LmWfj",
  "key29": "2evJJ1Sy2qeerD4DGzX41sEXD388cycX336asFqhVjcZr5dZgHdPYEUM4h9oZPEMbSXNp8ERFrPW8rgGU4McHj18",
  "key30": "5ovi8uKmHxjsgXYsTS1FpB4Uw2KPo8NcX8ecfSGX9w6iqA75swXXeESYfgFd7tF3zkHhP7gcwA8SM91SZRu1BXzX",
  "key31": "3PGB7GnYxNVMfYxAd5m67YUsXZU1hEyyw1d61e2dBzg9RM64roEAQNwQ3yNR6pKVdm66hHY4xk7iSLxKijFvawpS",
  "key32": "5q1MuW21UGGpYJjK9RYaMSu9d53k2DgZmZ6A3bQ9kzGrZzM2bb5571BUo69u99ib5tNTx926hqcWRnMMeD8TsFpk",
  "key33": "37Su7ckNCkfow6iiA2QaUFpDQHZe21K4pE3DsbWJvDFSe9iWPfwxtv7sLiq7un7j7G3AxGdBs7ZVWQwjFnYFjuP",
  "key34": "34ETE2f1kvW4sFjsULdjfgzvZK31ZU3qhPBz8S54y5KwUaNANZXjq3qA9sjZ2igfygKQphNoinPQmzXQ3dX4jzFS",
  "key35": "5war37qXYVnSRbhU4mRdY45nHtxxM96Z8d21ZmEaH4yotdQeGuQesVLa6oEF2dUPBkcsvzcyTaF3WPcnQkqDNzTd",
  "key36": "5GqRfKcyYmcNC4MAwoPu4cNTmDgZ67uXAqB8dkBPBEzpCsyLZRvmnTzB9yGhCuwcMz3c7BVSEJTXaVzhWbR7L7so",
  "key37": "4qYbKfGQEjAEsrwdfv3bBGuuKTBvBf5cDozqLGnEA8gFcYo4SBdoejRkfnTF56kDnL8cPJDwTgBkGMtZBHEMAeuo",
  "key38": "5DPBzZBHbuyoeovtcu55hwoso8TvgZWSsZUti1twf5L2U9K5bhAWoK2Cb1UX7vQLueEj3xzV2Ro2NeiavuWYRtuf",
  "key39": "2FUT2mCbtLQq2C3zEdMpDzkdviCHMsqud9XnDZDRCCC4xXLgRw3C4ys3BxeXp6NknPFZW1whRKXPDPc38JhDQAWp"
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
