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
    "KnWsLSwUDHGJz2aSYyJMaXN56pwsnEUhDSWFaPZ7wUBeq7vCzrg5URQpJuw9YxjSChmZa5THzfBxd2wKkbXqXp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s3GCuqufyP6Xc5TdZfRCcmRc4b32UcpQrSaBCDYhLjMyd3UCXvGXGw6gnj1kx7mjiXUGaowrdXpKjv36N4XRnhT",
  "key1": "3YDs8kq2xUmBsPvGBYNfUP679xA56w5XU7LhvoQiRcV8XA2Kqc2KzCPWeCKmnQ9PovxJtaLMJZ6gBe7zAH3CAgQN",
  "key2": "2U5T2FbHWBmL8QVCYQGQRe74CFuGi5yQqssbGqUQ8fFz1pszT2vvrPT6QRZtxmENnWCVWUoZrQowWMXFCnqqr7yd",
  "key3": "2RYTi9hqf2rp9VCf3wHWuV5cqTg2FQLamajMCdGXt724RqNDKdpGMAv4WvwrbjwGBHt4qbMbmeXnN7hoVv5eQVqf",
  "key4": "23V8btmC4Ygrg7AQMi834Vsr6Mv7Agsh6Y2JhMGHjhUUb5uxwBGVNmSccB4VoP6cEDg9P4DYoou6Ww1DF19suHCz",
  "key5": "5rRuLLTPqH9tQ8whJviUuif1ZSEQUix6wpU18XEWoJNGyCit37hHsu8rnUc7tW1Rvavqtv5KhQmP1MiSMP2i8nbQ",
  "key6": "2SioE8w26BmhcNAeDsXmdQjA9zrGv9WeDc9iszMVeuobeQSknBg6EccD6GnuHk1qMdZajYjLuXNmz32N1eTCp7Kp",
  "key7": "245SkDK6JtqMAhUrfn2gpSyerSecys8ivw9XwNVD9f6fRAa5tRXNXdc44HRHsbeNFQeQXFMnexymwgZJUpeTmQsB",
  "key8": "5HJmBWtGHjJqciGNdVvFyBEHuKi9apBXuCtu86BUGhLWB26gim6KkiUgHfE7JPyhd5Ec1B2fWVgcWeGoPNVBcqt8",
  "key9": "FKLCeJBePnDHDc8Qd4v1VKbWHdqHsGVTtrRRKHXTWxjhe3rgKcYRGhbE9HdokDdj4EykeMGr45uj4z9e9BagivC",
  "key10": "4ewPerbmbdyBMej5wmLrYiXh7qViUtYWzKbD6sRkJ8saSH26cpUJwGEtZc6dv8LghGA5FPDWpPXKWSbbCsUnDQH8",
  "key11": "MHnwXcmgYFNF7FHzFNdWXdpQbSBwvxQg9r6zYE6c7hcn5rwYtPCZvxWvc8pa1LmQsSpyYFWXUZYf3SivjWnUy8L",
  "key12": "4fZeciExXTP2QYUkxMUMmxZ3W9gDTNyXzrZLafcbed9E3DBVnLxcKW3hTv3v9KJFL1zmJQUHDgE5mSZmETSSA8MB",
  "key13": "5oSzomSbS8U9a7qmnbSi8yFq7mNhPBrLAgGipAbdajVQhSqzQgxeirhTcuRutr4pHssU7FE15dfzfKR3KNaMrMzU",
  "key14": "28YY21LSwnqWWwvLwdBkwS8A32CYUgpibjvYQ6MwJwtwPNjvn3ohsoy8ymk64tJX85otvTG1HadX8yycBVAKqgR7",
  "key15": "56s4SkYZvSc6JTgq11f8cKb3oDjBKLt6LGUKn1exJX81NCMg8wndZb7ybkryji2Anbm282GVkp7K5jhdw6NJLV5K",
  "key16": "2yhYtM9C8ApYjepKKH3v4Ak291KWYsDEkSahCh7jMfjogheVUpJGu6rj1PKS5PNkz5njt2EXdBatzFfn5kvnQaRQ",
  "key17": "8C2bMgyTwgdBthkrLbteT9L2hzuJ7wjXpxd5h11Hcu4L6kSfUWLEdet5USrgQbe3Yg8mcVMyNdapjNM3cKtbt5S",
  "key18": "4C7CQEpyfNxzg5pLuL9sRfU4mSNXuVELqeYR6XKJTEExQ4n6SSY4RQqeJ6ywWBtYZHvfx8BcCZxyADbQVk5Er8sN",
  "key19": "2tNs58qaeKoudnkUMmCFQBgNRNJUSmdLZqEMHZq18FvrcdXUPAHyoosTeqa1FeD4MfYWEhA9rdNRzNtry5sFsxPa",
  "key20": "3pvq7Z7e962XaYNQDEWcdEAEwV7Tt8J11zay5MJGus3xMuZKYnMqTXN9YzmaFJHdqQmfTnZ3GkvGdo5X4iRbVHbP",
  "key21": "61j3pJXmBdp4K4RC3LKKYcEsri2odkRUU6Gs8q7YUqU7NffdQUX8xQfCQ6Qdet6mYVT9ZSAdh12PHPEYsCthAtg2",
  "key22": "3qmebcwfZ4BjxTgMRrAq534ww2d1QF4E5HUYuJxx4bCxtUomNNDsCXnUT6YC3LBKxyQDEmCB1GqXxCiBFSqZRnFZ",
  "key23": "3cKi1tBSvh9fi232mXnBAkSrahj7Y5GZMceMUkHPBAf7XxYiHZkkeQqQxrJADTkGWyJMgYMq1my9ymuMZJzWf6da",
  "key24": "2r7YrtgQgjZJyPnN9LMA5rNDi5Y7nRB31fjQ1v2Vieoa2PsDUEyp6JB46dqruUVRtsXZgN1qKiWu14WeYfWsQZbh",
  "key25": "5dLrziYo9pTaEkpNvEpoqMoQCZqAaf4CBBGJzXSwur5FvXXc1GULmhnoQui4w1aGUtyTZerQR5MUmiKJwL95MrD9",
  "key26": "4sdZoL41xEZAcbQDzWtjzMk5EcYjNpmex3KZRRbrHqEmzsPe6sq8iD3B7CnWp1tA2YitpfDNAifoJZCwtZ6iSsoa",
  "key27": "4At9XcGuXz5K4r7vhePBbXW9kguxtZaKWXX8GAVo4Afc8EJq9YdCWTsDYgCGcSADSzE2tw7CJ736F8vcVgMyhm13",
  "key28": "4e9qhjUYNF6qjCRvAXQ7KvFUQxingLQTaarJR42Nh45wkDx518Re3j28RRLUcNGUfqp57daxAFGNRXrdRPH3QNco",
  "key29": "4BiVY6Brv7KmxFnbTk2wSufEqEisC3ZiezP3tXcF6qzxfCf54XEViExcpwagp12RWRFPqmyLPif3y8aBiLJQE3CD",
  "key30": "BKthSRVZo5E2E5jzTfzviZBAvYNdMD5r7bA1C1pv4pnGJkgtUfY5qGZSY8JbwFRdw2A69guywwYqifsqcvnnt4R",
  "key31": "2P2Vgkqk2EbZTv4AKTyZyuyGdkvTrPgHPuGcGyKtFMGhEYJQcCN9UPcrjZHuN6sKaUZ11LpqTZ8bbovFmUZpdEGC",
  "key32": "4XwsvqTVFR3RVGNbrCqs3Q5eNrjXgu1ePHuKij2mNMySgsptFjQL2x5bhMFHfV3LGsLKV3UGiS58GKck9T4KjYYJ",
  "key33": "5AnpPFM2yPnUCaPPGJe1VFsxmfdFYkwQsbBQLc1WFL7VJvxWxM3pUDGsxutd5DcP3zXpfjc9AxWtT3bkeHaT1J6H",
  "key34": "4dwZcRxrUSN58DTuHFEVyyGgiruNA7vWBPtj53SjSAqFZrm42UiC8pah49yUue6HjPBeNFXk62DJuJ2zi2dPRcVC",
  "key35": "5FYFWbTAAEJCegAwSUQkK8nkbrQrgE3incbbarJvsvD5W93vy88pPWMjpovMdWZyJYMRL8JZ5MDFYYRzkUdxwE4U",
  "key36": "3onvtDVJFbVD9m7YVvP3NTxyRYzNCPseQCSPszCKgR7xXAYtYBmzjsNnFH1cVDDwAPiCcSLJvyrD2WkS6qADK6on",
  "key37": "5s9G3U29Z3dP73GBhssj5iiWA3ymxug69ZFZwe6LWffFywQM3yNtuygcHDTYxi7wxxpZ3YJHRDWx3DPuu2ULwrjo",
  "key38": "4QtitSApYqKb5KGJweJ1b4e8fmnz6QWA6mEGLQMF3EHXdnhTU5Mj4qWRVMQnuRNiA6dFtLmPtjjsqt6F92eGYBrK",
  "key39": "45FfGr2JZuZeJ1vMWJGFuLqRKEST9qP9emu8jzZTn1zGQbTi3YXxkCDkEWk7dPE5x6G8GxvkBDP99XTgYssdRKyR",
  "key40": "Mv8bzLgeXWHxgRgzqNByYmUp3wnenoxSPLRfWfRCngcmmQ5KxMqMPJqEAydjyov1QABkU4yeQ7Aam84FLZ3iEMP",
  "key41": "3HCN1uBU88CqdVpzn4LCsZf8WRv7ei2kvX7TEAVpT3Bhn1xn9kSFSnrMF7M6V8TsgxuuKkhomqmZqwEHUmrURorR",
  "key42": "5Bdkqe3gr6i8HFUSbomsGqkHcqfR6TPQuXFHtRTK8QUkEY3SAxT17uDKy9dzBRrSxQY1izWQJDzhw3rvLrNhuY7u"
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
