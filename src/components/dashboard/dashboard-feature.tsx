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
    "4zidNyBEVLY4xM2afvPEtk9JLSYqjih7it1uB5ZWpD2X8rnKgBgtavL35c7apMoTaqnS51TyMtGUnxNNMk5DmKzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JidWxJa5Vf124s4nQAKXL7CcHqUoSsj7pNFtQ5hYgiUrwGUP3uQTb6qPAzQUFvDb949qphoh9DnSxRzRGjPjPyQ",
  "key1": "42rPzTVz9zmBnAYgx6x52FjN7Et4u8xoPwHhRV7dk2iuFDLXReh3D2mTSaHQBqWNBi7f5ctcLrb2rHMaV49J7jhp",
  "key2": "2peyMRxiTiikZopjd5QbmD2WAVSgQ3NbFFaM5uqqALZmnh2w9WgErTQPzR8Z2UArwgrzzmcDdNxSqA4nmPHs4TQM",
  "key3": "61W14KcGUhRmRbcuRTF1XhtCmxoL1bZ5d1CfJoAwJivjmoxfX9P6WXMTKtHqLHEJYom4n7ZSNeagkVbuj6zAivJL",
  "key4": "nvRsHscr3C8BVxGYfCMqTecEbmVz5jK7oCPLLvTLjrM7f57dBCZBRNjEmYwkWLrPXUXnEFe3ZCChHVYErK2mCbH",
  "key5": "VtccvVAYzew5RWXBPBVjcNQRxwe74wf7QbC3Epy6YCEZBevf2egDaq6cswpEY72LwYxae3KhdfPk1yLsJPVviHz",
  "key6": "2grubYDrEvEmN9UijRfmYtG69QfVBV6ycDP4o61B7KadSTtagsiyDXJE2Xkdwx8AuHDq7T2KCczmtQkgwq3sgdGD",
  "key7": "4WrDhfmQvQKAbuPUAcvB67enPdhNeTiVyHmPHq5CtKRBvCHytWKYX3NYFWwHTLWkbWs21hZgoAu5vsKg5AMnmLLL",
  "key8": "39FkJi4Ya5BRzBLFA9hmwg9UM1VCp6saHjBUnZiGuy5oSFNMiTjCeVYmwudQoFGKeL6jVGf3a7JbFJaD2zTwWNqh",
  "key9": "65MmyuLmGjpHs6ea8DVKDdRcWvT1npHaNzReZVzBth2gxkJWNDKEDKBWUWrqbLLjUE7xMtXZdLHWHQivkSK2sYjX",
  "key10": "53SWwzVRTdqPz7u74R6mGfVVXCkLLBFmdfmFQk6GXahwz4j2D9TmedGkN2CAi83LmPtks6ytrqHnTjiBxJ5xVNuq",
  "key11": "3Q74Y7JE8jqxtYfuFScWZbJgMT8unHP42TTsebhDwGbn3gubs7YpfmHZAB4iZvv2YtheyYDszkFZfMwUB45izeoZ",
  "key12": "42dZDnKSa42XAEotGZqe5RmF8dWaX3x7WdjzgJHiXHeBZwPcyLnDDr88GbNjDqzD4t5UrzaPzrAcCvNNtmLYYfhm",
  "key13": "2JM3J874bdj3nuWjJtNDxXJREcjJwJHL7zJcgS9t6DMXrzMahpTC9HDKA3bq4bQUmGjYZ3zN6VLkLLjrhQeZ8y4P",
  "key14": "5xcnDCZ4ysCwe3jgbmSubDpAJQjfTVoTT1JQW7MGkTGcJRG76FidYxNYFSc7UqYbFxdPVC5GEiGByiNoPA65CTNf",
  "key15": "4WEc8tWimwVSj3k9rEKPjivz6ftEVHPbRrXTSVgnE3qdjDVnsKPedvey9czQEGCAXTPm2F4voi6z5bcijj91AyZx",
  "key16": "2g5yFPrVPi4eynGrnSfqfW5FwC8XFef59KeudYBWDUwDtqJev7d5YRgemPtQhBZtWHwuW8R9XHkbHvDXU1pTpaFo",
  "key17": "3uxvKx6qvuS5h1aMjKfSiYw4MUb99y8vhAAE5cV4TNQSHaLpqJoN8jzULrUgeMTBKt35Zi8h9auFooLHMWXFuZRL",
  "key18": "2x8QpqkkwJJpbS1umCgWH2cxJVVhZYJMAdGxFbFj4VZtiAPkbrqWVSc5BCYrcRmYjsMDJazRxz8Mc5FsUhfjFCJU",
  "key19": "XrgJq9PhKzDzxXXWJKAHKXP5PHnjuSyybFjtmX5nzBbv3SYFgHUQ2Mmzyu9YBRXtnQojHN3G44s8ySu9gZca6Gs",
  "key20": "2duEJkrg8w3mwqnLT8BMy3zBbsC5q4QeXcMJgCjBQi2Ra82XEn911PWg7itwhdwsuV2SQd2GHDA9fxqAgdHpm9Ch",
  "key21": "3L5WM8rc4fQ2m935z4C8QyP93T32UgdtQv2p7Bv5aTGPap34MXEwv7HnCphS3ibqgJARevDGTfp9kaWAyqy8AgG",
  "key22": "3kB2pJdQmB2FpAsvnS9ED6pB48m7XAbtmWd4eop7TWnXn2BM3Qk8aguhe5RfJRuUrurkXx5WFTPDuDGtthHrhiQN",
  "key23": "5R19rZxWW6fdjTd5vfopD7WftKWhZ7BKXWGvv4LWVSJqPyEowMcGrwaQo1KTv24BJPRkK2SdFEHvuXcpZGS7XtgB",
  "key24": "4JSKKt1GRChfM5jFQXXpJbMViFgkxkZbzV4Hfdrd3TrQem9uGqwUzNYAbZ24hnjrD94n7rvx9Dc47wun1hEVxuHB",
  "key25": "33tD45ycpD5f6hokVvnZP2Z1nYpaj693FTarpmbDqzeAHZwBmxnoAjmtyB4FewMc4LqQGkXGJRqeediGG95g23PS",
  "key26": "4MdfM4CaZJUhpMDgquE5BhAeoqWUNNKhGYw9nDPJcdRQPAu4qMHCmA6qFiU6jiVYkmdMUMzaTXw9aNCa9CrmzX3q",
  "key27": "vTtjq3CGAG7aEiio95fT7Kozu52xNnhXmE8hVjFxsL8wUzq3BNxqr6995J4X4cEXXYhbjcGQ4cgej6ofU6T6LyB",
  "key28": "5PBXtE3Na1ziQ9gLj7hJW2FrUJr9qFYFfHVdU8Q4NHvgDYS5gXFiAy7iqJwUZ7fUCD9jrVH9cjW9Z1SUM98MPj3S",
  "key29": "64d2hJJPTPGcTWKEkdqkV15Ekp3JVdUHxsjKZ5B1FbVr2vjqYxNPQPo1pzB5tYbthvCdiZp4ckXCMa8Rfi6pdqpi",
  "key30": "37Wjmc5s23BYH7Gu1VM73LtutDwG5ojgzTqCJDgszLsah5gx1L295Y1rV84XMpRcY3TeoV328GDb5K5PwB1gcyyu",
  "key31": "52QfGh9Ymkb28sxNRTVeYdyEJXXirFdQjFSSktz82WjmMSahquL4pDKkrsekYCNjNetP48tQ3BmMRSKdgaekZrSw",
  "key32": "2x8zY3jbioCHaUsk74qjEzn5yxYX19SN1S21FXFhdii9vVx6mAAW4UWx4uBY1zc6M6GWZbkjFkJo59ZdGmN7JeLZ",
  "key33": "4zogUiuyK8mPkh92979CLuPZCTdmvAVHAfSdzn9iNJKv8CwzphgywcQsmKZss3ebWnuAS2KJFxuor33Pjc6GMQsw",
  "key34": "2QVzUWQ6MzaDTthtK2rrdrrvhdBY6LbpduTHcSjDTcyv27KQo73B5CDx5XfkpPVepoRGi4nzGtAtmpArWgogf2Yx",
  "key35": "5TgcAzNJJQY9pVnTYfSqVD7FbXZ2cW5J5oh2Ujxy5DKGjTEZJPhyqUvk5orzCwAwCgHLP3JbAdT46Pky6V7nwa9f",
  "key36": "2DZjA2XQ1HwjWuySfajtuJzYDuYde6ZpZBdaEVGt7JSU4ZMxsv2aPYDw2cP6R1jcB22AUzGXREBu2jhvnyw4dMXY",
  "key37": "3hSkRgQsNc2AuAZQ7QqkTTdPdJxmvHpSwF69jWXYdNCFNMzMCaTxok8ZwC3CuiZrdGzRZRKv8fT1jc7uxyjYh1PF",
  "key38": "4tw6komQTYafP7EKMRMuFKbYZxQBZeMmcLUxoQxMUBREytKww36qp4xQqPQJJ9afWm2tbWZ7UzhZkh3NdsMkrwxD",
  "key39": "4QScYrvaD96SprngK6daf7eSa2GxLNf1tZfFFWjuDNK8PVGcxQNRTmM2fhBmcogUZWr53YanxCEiZmD7BoiAZxPU",
  "key40": "2t3Lh8UATcq49dzY3VSoEyjMGKCizymSvqjbrNxg7WwxYab5KZphPwUQJmAhgratMV4Mm7KAtsv2AXQqJd9mHwkU",
  "key41": "3Cm5YuRxYxKZshjuCTEBrjyFjvzUKcHgWMVDCrropqkeh7mGTMpGRx69CF6kRoT6p5ntfk4QEtxGXai1rhcGVaGj",
  "key42": "MMhsfpSr69h9hcbsBMqttxNtVvQzosaPyprtbThA9ErUajwbkRXjjGG68bAQbZRgEY6RPH83CJe9SAoEJeBCoqd",
  "key43": "o2KMkDXxohRDwCu1mmavBmz8gBx5hfxMWHZd9inJpYCoDXfwrgKVpRDXGCDJc4WQUHkDVqzyT2srZHksy5d5iAm",
  "key44": "3jZJWwJQ2RjqwsxNjPHQtswVBCR1RBsQr3ChqeFW9URj4gerBqwEm6Lbt8tskaTZEjSJoZZCWLWYdaLgUNaFgyAc",
  "key45": "4EzbvGu9yqbAgS13ES3CVwg6h2uD2KwfLuNyCsa55Gc4V7ZUBG8z96DtVAQdERja4dHt8FC6qkVfFqrJqnhjgzMn",
  "key46": "3C1SaPGTHjnA4epQcxW3oxs4XrwfPdS2QFEqgqHRcbxDeX2ikG2ZsNiBXjruPYhqP7JVEmGATNEWTpb1riH3Kkju"
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
