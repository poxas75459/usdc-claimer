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
    "4ARhDy8TZJf2pYm13WHmQoBGKSy9rcrc55UMb6oPsq3jzAPDB3ztWLFqqnb9JNzcgSsvxtUsfkqGYTBGViFbFstn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKBNu5BbwB2nKiTCZLRsRaEWRbJi2frAmxXQeABaivy2ptJZLZGqdXnrJLTaiFJV4XAr5ejsGLXhddKn2zm74mC",
  "key1": "211bLLzFFDpiozXuvm5GiA1vui7gqtkth3PtxR5PhKw63vD71PMe8PqosR6raRcKyq7PA1TstvsqZxt55a2EYRxC",
  "key2": "QZwABSzazdgVtdsTHkfiuy2E5b9umz4XCsJUyjzoeAqrMqRx6kumc1UA4RCQ6AFhaUFYHkJNhn521uMcqCUzAQu",
  "key3": "5YsFtLQkM782FhoZGm9WrKUbhAHyUrkhWhSBkXWeXLpFDe923CRve3APidi9BVLpCHCYyUymYnC6BWCK1dAYy47s",
  "key4": "8KE7MLSoNSwn6ow6kTfSZxveMw3h63Fd7QXbthuEQrNd1FdkW7eGtCVmdHyrAvbtVRaFvMomHMADVjk7dn6renk",
  "key5": "2ymEF9gsYfGcybbDTwTjiUnYEXb8t4aLAaScLoEWfy7S68yB51sgfqCbtTibMwWomQ8mjt7aLAtwoodXBZ44fSxD",
  "key6": "38kR5E8cg8ejUCVvmr7ssEowbc4PZtwL5Ezs24rDQu2oU7MPwMZwL5mXa7AtZTaz3FqTkHPgktBZhbY7by4f2tGX",
  "key7": "4pNcpS8UUapUneVBkhnZnDpRR8h246WMeRFF8GkgiAF9zCam6Cr5CB4oDt5Pz5WMdGJXFCXVrmFqP4mQPas9poFE",
  "key8": "5RMfAb8TmkRstWBD4sB1J8itkES6C817nsp7Yqgjx3wyjj2WrsUMmg9MprFSJAKKKcHhREnhLsiEmwjewr9GCNNv",
  "key9": "2UaBXbZm3AKP9bf2M1zBAnBJBNygEZQyy85yBm9CZYoHFR1FF6kQXDMqhGzDJ7aPKj8L54b5M56qSyRRQ5nHbt1E",
  "key10": "48jHByg44G9su3w6ENwgMUPU6ii5A9f9FD2wmrASfK2B1F6pBN1ZtnvwxepEzdRH32KfNoC79Jqk8VdgphkNub7x",
  "key11": "4PtWwWXcjhymg4LXth1nvFQLFeB65xWkUQLSPVj2GSw3aURhW75u5foo4mJf1jmZqQNBRjvwMyVMzrdoP9oruVQG",
  "key12": "4hQU9pRoR1t3cfpDoaqyU6BF1GLCu18wVf2xS5fnSnXMEdSewVEzKvXqQfWC4sEgwyGK5ZUxBJjrFmXFP9L7CyLC",
  "key13": "34nJiJVFmStbc2yw97wF8fsFro3B1z7RgVnC4uVNbU8qzwJWY1zUqzqUCYaGCL17B2yq1fNtB1p8Nfcyc4RRUGpP",
  "key14": "G2nrqAsiDdXW5vuyVTDdrkefwTtN1gNsZkYiAp9pRe7aJ9SPXdGRLNkyuS4a2iao7eaxm1yp4mmo38h7nK7nP2j",
  "key15": "5ch2dDU59XCkM2GtueMAWL1dErJdFB4ekYnrcPrqqg853gprDDp8DDiYiBSagpnj11wKG5mAnUojekqNMFj96G12",
  "key16": "32DsnjoNH2umRx9ZDNn3oRRwyZcJe6L3MYiieqjRgN6dCwKHdjhLxe6dce9ojCnch43kbCqXosChWvX8rfqDCNq4",
  "key17": "2zoVrpUCaNFiYwp945kHdnMjQKUyxkLzimioFvHBuuV9TWjgMZMwh3x7Sz8aYe6EcQ1YCE6GfNu1TKEo82ahNT4U",
  "key18": "5CNcNhTxihBs4rSEJhTNeuvgwthtPD4a2p4ihaFYnmtpj9pkvwU6wFDnQ4Y1LYEWC8b7c9FLvXteUKwg6irLmr6c",
  "key19": "5Cc8khj4dg92X8345RsCrNok52xwZ33pYrmfoy2gxWdhjkSP2W9oUTuDZvbwoHNvVF69UVpdPxiStMscZe3gm1Xc",
  "key20": "34d4JtUWgmobg6KsqeiKtKNMYgwKDkgxcudZb3GspcyRqK44H5q9ANasRAyGvquUY4Cq13vjdYJ1UPBxY4sgy9ef",
  "key21": "3ASyAc7EHJ2MvjrXcmSdVtEiFsViKBt3TfxqDwAoh5N3rce3hQhgiRQgj7xVVqgx4Tre1rEQSPv61sji88YSKBXA",
  "key22": "4hvFtzbbfCdBZfhfFNvsvjzqmh1Yqjf27Sc59zWbYiZPt29rLgppJ4e35EnQ9PWLSmbr7SrEFAb9R27GeU9EnshC",
  "key23": "4b8wZ13vhgqAAqcJLjX4Lde7sNB5MaBpGDqxQVfLpZr4gmMCNbJhQB2HK2a3aHCo2FdvBCYYTka5WzAWuLd5MHPG",
  "key24": "1rfUCjXfDJVn9YyVfsFG1sZ9KRMTTkW6CP1Tu4CXjRViZYeqrGg3R9wQYKeZMXbvSrnVgdovYcqhD5S9P2mxj5",
  "key25": "JMbvM6jRjcY2VLSw8eq3mSm6QngM9NELcL4mxZatGsmqhbRCmnAqUgNvX4aLMv3pmgHHysk2C9guEX56QK4fKFz",
  "key26": "5C1qzk54cxGMXxs9YPpmfJBzZztJdpBv6hAHzAUSgSd4a5g8Etq2uiGfVdSfeZhW9Spdo3jB6hXvuDqneNXcThnu",
  "key27": "5PsQnXcu5PWPYRtAGsX6cVFDwoLGQUw3WGUdnm14kWUwVLGHUDpLDYmsSAbBckqJFsy7RARJK6wYzDBwY5pYWDFX",
  "key28": "HJUxLp5tmKHFH6gqUWPNSDyz4vL3akbq4fHq4EzzxBeeA5RyrPz23QzqKGR3S36ESNTkRZF6ZLc99hiGGCa7HZ6",
  "key29": "2E4jCq9RJmYoEdssev6BkMe569wFVUWV46A7XLXAz5YCVXXTKhHgVyKQEzxWUfU9yvTS39Nup4XcvnrHH6B1ycdM",
  "key30": "JZnicDxstvpFATicv1B2UM6RBdyc9oRgKxNxW5T2xnh5fEFmZsDJ5ELF6rsYU6GZdJb2paf68EjEnqwcYtiF3VL",
  "key31": "54pS7fFP1XdDN8UYCUrhZyR8FFk9SnCEhQi6dzGMLZLJrtVUXiGpba3MzveaBJc6tG4JfvBnK9CUs1Rb6hqW4NcA",
  "key32": "5pakf4j527KgF8V5sseez5GLj3JF3eW9TEiPsWmArLka8oag2pNtMeoCPvbFkgkszrPBZgwQFMVn7b5VaqFeE5K7",
  "key33": "2AYowfeqQAtTGTQZwYWADzW7ktJ7wZGeuKUsRb6QrgtsXcZ6rHQsss8YDsrtxknod75y28YEpexTbotqsYvsTuMX"
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
