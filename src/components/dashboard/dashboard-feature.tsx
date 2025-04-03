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
    "Md3RL1QXe49iom9xQ9v5tx6RhswWQQwBU2Bk8QMaNrzEkEJ2CqFkNwNjwm9SrXWny1JmH2SXJY1zextMU275bf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hLrxGbpy7hptZdtPW5mtst6cNX3uGd2dAiJWvhLo5DyyabapXLJs7xXyBqVLg8EVSj3bTPAFkdpK3SmxWeSH8aH",
  "key1": "5XWTPex1fJWwNspiQQZTqdFFHRBy6caueg6UaokKs6W94sXGeSBcGM9Wep7Q7SpuuCzxFWjnJpLdcieqsuTz6iLN",
  "key2": "5GRQfhC1LMiPBDyomo1cAyfks1ur7p58FVbFbHANxGpmyb7j9dxex7mNnq7QonEWVz7coMiJvh38eGkNcFFzxgbt",
  "key3": "4bUQZFw8u6TQEZXKVugp7iwLWGGCtiSgucEM5agCsctnNwMfC24tq9DsE1nsBwcUFTZfsRHTnqMQHSLPeqjHf8uA",
  "key4": "4UpbgCfoKyC5o8SCRb4H47eo4pPK54bY7LNnD2VruDaxGpDBKuRXG35uXRDQTGAFSJBzd2gU5QzMj8yrV1TjtWea",
  "key5": "2tFkQDQVWobiZT1Fya5jG3SEfa25rfdcYpwbSbK65MKpTrpPUd3RQb9YAWvXthv4oqHhjQNjhP5RrXxRbzrzo3qm",
  "key6": "3Ro8HkoeZevFoWrtF4hfHDBAk9MnLvVwcCRWGxkNHLAPWtw5YVmmuh9YWvVD5Z9LMVdYgHFwmzKJcsCLFHM8sbjN",
  "key7": "4CkGGW8KdtewyWaPfyDToA44dResrRqWCNmU25vgGVkGApXc3LSuRDtuK7gKV3JPFy3m5sGpp5EsogDZZ6kBb6dr",
  "key8": "4zM9YBJsgBoZXBeoSDBBewuipsF3BsJ8iKbMxEB4QoKcbAHN3f545rpFVTSyTdCEkBAgyxk9JLWtQmTJq4UiHSSb",
  "key9": "4dnd3GvTXmXaFmzBYASTw7PR3sVL47iV4mbaLqE94Jvs2fAymbpfu2tbXZfkViYmAKe9QxtTNnomoaoxeiALUiTQ",
  "key10": "2tSHNY6FD5eLP55uiMgGNX3ZQVFxHxmbnt4DovyFCcQfPbgTGBqFq9fLUUAt62T9VppjGGkCPea3fZ8Ac8ZVoZFP",
  "key11": "26aAPoqTj74gAVxoBMfzDzhZoyBmyqM7jqL98eMx3sHrf1rotz3mkuNrm2NpmA4sKBBdZVzf5BJCNjpP8QK4BEJe",
  "key12": "5q1fKLJbMxVgfWdnCttZroV54uhvx7JTK1tDtMmajfoAkwTbrwD7aHNJyYRejwEZYhQJG5ejQuXaS9JMMx8qiQL2",
  "key13": "3d3JfPoA8tWvZjEF4CAqiQ2fT8uepVpgAffLqYt2MBtuYv9QKSCa3vHrKemMM4KLt5GXkBve5UuhHKijVp7nonM7",
  "key14": "Nm9nSKVQiCawGVfoQpa6FbLpqkMkp2vEM84X6no4C27PRxPXDVTeGXomur2yZLMVikaWsLgmjMmVkazkN7sR6AJ",
  "key15": "66oV4eapjq27M6o2Lskx2uDJLYC1hWfR5YVeWXG1JNc2pMxnVmCGeZhYFp1KyEje2Lg9aqJ85p8MiDmQy5K6oh8W",
  "key16": "4i3ofRSQczeL8RnUxkkd8PM2tAYoaUtMqcVCtvFqrUKAsggGMGgjCJmhb9uG5QwmUJDe1BwVLZpxJ9AQUXTbVZp3",
  "key17": "EXxF21paDLfJpDTGrRnLTvXLuJdxxM4d1KrG5J1dgiogoPmjK71RKWYCZddZMZAAFC9ALTiQc6DBSUcsiP7NbQr",
  "key18": "2yDBxjBP9tenmja5peepkeQFrFX93cEcauTXkecu1BKr4Yih2WiJ7rRn35TxXdhbj11wVsZmqh19H1M8DwKjByAc",
  "key19": "2JhvdMRyF7qWjBigsj5jtEJ8DXjqMcTFv5bKJu2xUSRVvzC2WGe1Dq9XusiGAYks9mwdwAcRPPERwQCXaBxrTJGn",
  "key20": "oydMqA1eYtoRUdC2pB7pQfZr5RbktD454BZabDuUGUC2S5jUgp949kJJyz9DdRcesmyDg86fKn9N5rJMyNvMeMJ",
  "key21": "2NnbnaDkoHzeJe5ajprMLSjFvaiWToNHM77gwug6UHu9aP54pd8PxkaDjegnCR9RgJvLoBkazB2bpEMRARgvQcVx",
  "key22": "2K7QG2rx34BmCjnj7k32aKFWtGBiVeyzsiFZhx5mwas26GG4B7RwjtK8XJjuhLaoNMGFWSPoD4gCJEgyD8dwGmVR",
  "key23": "8pzemFMGY9wWJ8xmyN8eWWnjcRVvMvaA66kz4TVkoaVhnKyGi8SrRuCGHzf4qYoqgXstGBxB3fKLT212AfyeMiZ",
  "key24": "2MMJsj9on2ENT3kfnSA8jCrDaXSfwffq9y2LekhvoHCdUYDs6DnQWQQ1Cupb7a9PY5vSmqZE6mNWLFNVTGATZKKd",
  "key25": "3T3CMmsFbdBdUDLMUCDVBaXFb7fMXBzKmG2jhRYPs5dBLNzofvmyWsumVzJTDPQEqd9iPmQEWasvYc7xqRVS25kV",
  "key26": "jqqGAGPXdkGVg73AD2w9vdREdEDLVwkYqAF87tBFTYSUrx3vk54vcauurqgbzpQcJJuPhAuchCQ8mQDvQoBeJZG",
  "key27": "4BqyQ1xHzAS2RMYSzN7d3Qt2J7DsuCjrs6oa9gq6nyBrAZPZw7X1Wjuq4A68JVsx1B8PDL4k2viGh5Km3ZEStyXN",
  "key28": "UrK3BRz5VBkZbPxyp6pwCaHcSWXZxedAkFMvwE2MTLz5b1EqzcoVvQLizNG8ChwfegjnX33ghCH1kqNeibcAsAK",
  "key29": "651WHm5qvGk6bAD3UJ4VGiB1jf2P6bdWTtS3qVYRj9re2kLkfxxLcFwC6M67bgtkHkEjQNajueCMDRt8a4fJ3jeE",
  "key30": "2fbFNNEVPxvYSvDomZoPKgiPdxkTbdRrDdtTv5UXZm31bNxjpCKBYq3oBLuYdd3FR5rpoTT53L6X5f9gDUA5J4MV",
  "key31": "4WrtFY3JJ6svVhNNpQ3fqhsTGLZ238YZqsN572mjry41iZyvFxFDQrAQauQvRDD3bAVPKYsSpvPdS9jRvbc1guim",
  "key32": "92jj7RTvh8QfFdtMQHi1idwf9WQwDtMiHqzHJATwYXm6c6AJ1pqjqzTjkn1EbWw9Xma1caA55TB7CEVXTNp7mtx",
  "key33": "2tmwySf6nDMWmksKfNNBFY6EqRpDgKrADLZY3qwCNLE6r9grdNyW2ofTkpgjB7jF4LTjWuTkFSAioa8UjwTMs2H6",
  "key34": "3b4B4vw8MPsXDnGyB73VwBtFozCaLpEjPKFH6Y7wZWVGxNgCjLse6sZEzhHa4T5BdbR7gFw8RBfkvZURwAbJxSh6",
  "key35": "2XjvT195S6p9nUnE7zv48EUNQ7JgRxN28GagJ34vdSABtfbbYdupryrtvLF2s6dMTSY3KGuhM5CwGmDoMyaqeDoJ",
  "key36": "3wa2Z9TvH3BR6GsNdJuJqTe3QXvMfQ6tXDiNR6kL6uuBmYQuKPjgyJoFnRHQCWVQtfRfq851eHkpF6nTb5A4Mqv6",
  "key37": "3CgTsBEWxuF6mmddxpxxydcBM6VFUeDBaGVeQWm9zPyfgA9p9dbveYk3iXDoccGssnmZuTYFWZf56ETSZHceUn9z",
  "key38": "38sKcHp9kcnNZn3XSD8qB1zArXQoDvZyPcuGLkfMhkHCwdwsMnaXCYK6LnJE2o6c9VQH5sXGyEXRnaEHPq1aK69x",
  "key39": "5PDUYSt6p2naMC9ZoYJZqH3ixw3qEKYFqiH188eyybxiCjPuY13FQgSvibrmhaLVmgmwcukc7KTMJXPrxDzQ4LG9",
  "key40": "363j52Hef9DnEZerqWqDbemsc9sGa6hbz6SUUMXZVALDeU7vQcwfJUQiMtLqQacp6bxJbYnPzuRsYWDSD6eGLr3v",
  "key41": "4vb6HLUgvGah8A4MZaic1WwQgWF7zgjDS5VuMJAuBzh3evAXzToXT5imnEpgLXxnaz3EukVLxnpadU6ioaXJbWn5"
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
