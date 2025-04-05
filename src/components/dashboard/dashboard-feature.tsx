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
    "27vf5dawip2Liywky1PXpvXMfhfcoeAVH173HxJvNXykgStSLDVMFENPHeA3LRZKAqn2om95S66fzKL4RaiuKXos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qq4YhGPS9JtMQEfHA9cuAMFGBKoQiXfhUd4G1ATHU6PkGjpr7JAVjqhTkGdup69EPT9HgoPMT3yXxkfgEYXBbKa",
  "key1": "3q4rnwQRvsbSRdQrnPcpQe1wkuptrK3s1UWN41whYCes6nHWZUprznKeVvF5LmCC59LBEELUNpkwHXmpBHUvuHVf",
  "key2": "4p7AmDxZ3odNTSBJYt2CGEp51BVWKXZxvwuWsHDge2vvhiwnmkzy7ptzTCMnj9meZXvycyBakWvoBx4hQFVtVBhq",
  "key3": "47UJc6wCC4xVs56brCuacGvF7LDf5v5NFhzsqh7UQAMBW6hxRK1xZ5uqyGqGEHLGSLbXH3Y5T7FCmtYrbme36pyr",
  "key4": "66RzX8wxNW76RGkRSKtbiZXyy55obonDVVSkY5vHZCMNS737LPhpHw6FyNpuyV29aYomaKkqi7AKmALgBHmKyGci",
  "key5": "5XSxCEuyVHnKSeNkwkLjd7jsCh5sE6AXg3JnfDijgmjSEeab69Q6hpH1w8svwB78wAtDzh3F5BpoGXe563759RzR",
  "key6": "3Ww3Gub3VT8MFD2zJiQwmDqEVngEqK1cte9SkgSgZAVeSaNm5CB1L6RFKKvaA1Fw1CmNSyso59yCyYf3Z54y96S7",
  "key7": "4GWUhKkZmLx8s6RvCmAbbi2UmBqHpZuZnqzik5jHDX1xxkWMMzNRX9jmCgT8mfqAp16eNiQVw7HMQJW6ZjfEW8Ff",
  "key8": "2hPPFrqJEgHwkxjmC8VntS2LbKu2z7TkTa47GXZEfedLPtGNjgrBAwvoJXxJTuwB2b6YoCs9gNNSJBVg6np8gT95",
  "key9": "3oGxyjCb4rVCsCayYNrv4bmGpdbRXhbuaUqC5XaLcNLNuzHeXRZYxzaFPTVRE5JT3kRQ5x2UVSsmn44uEJJr1npo",
  "key10": "3H4rkusXvtjXNs38JNUJoqRqGPRxEiQDQSDiDrVg9ZS8hzGjjvJ441zXwjbVoWeuYyNRZwgzU27XXoAx3P4xnbPo",
  "key11": "DgUJDJDsdHqT18GCeDb4bFAfwPDYNKfeHquPTpQQM97eoRV7uBTfyFdprMZevJqCHJ2tuFrkCJhEpipivHwehuw",
  "key12": "63s8UfC5KHzhZCPtdSCMWxu9eygbDfy1Jg2L27oP7iiX4tLREJWcMEycyTALofn3iL5s3bhW78niJBSa9e9pz88s",
  "key13": "5ki1pHmWMXZ9PUwD7Cp139hc1fAhx31YF5vBVDKtLCKrcHRqqnAkXsnwAgDPThYC852aW8gsixJiXsVz4vL1aKK6",
  "key14": "4Bvv6foU73kBbhaUTWtBRDHRj4K79pQVm945Ch6nCNRxkLEUhSUQGuR9QmxMX5XqbhEqnquiTPAAoWctWCiC223C",
  "key15": "vMMEHeo3dNy5JuBT3qgehY2DxLnucZfK4qNTGF6F87cnrHHx9r2K7LC56x9whuboR6CghQxy5MQLSrsjeTkomxm",
  "key16": "24YUu2zST8gRfzxKDTnRA4W1dMaZ2unp9Xn7JndssmRKFB1rizhzJ4a1PJ8REkH1AM2JWAQe8Ai7ytyzRQLXu965",
  "key17": "3f2TXMKiNDA4tNJ1fkfHG3F6mMCqherYo2zS25spJFCu688LdVgH3yooPwZucT5yAkc2jC4ax9Ud6CtzfFjh773m",
  "key18": "5DEaV8c7B9cjgNzLg7n6i1kQ49H4aQ7QCZXshRgJJrGWSK47quy3yMLqvn7EgLzkHQcLpNp8B9cK5nKVH1kEAGd8",
  "key19": "4qq6vs3o6Zif7dn2dVd9pJffbcYgsbM7TJGyjSidCmunPuRDirqXcCMFhYQ4rvH36XBn2YPvidsSzWyYFaQswJBv",
  "key20": "4mvQzhhSjfLa4y6hYunVEC7spCGLoafjw3uAFKa7eN9zitCfbQyQcfQe1t7PDEnA3DSjB4xHagH5NY8VSy59hwfz",
  "key21": "5BQMhFnTiW5TmwWDL5GyQHjiTwdbsyvXgUDZChYd9FbMatMrUgWDtJcwRb5iy42cFXSzqLCYaYWjomUmdwopyTSG",
  "key22": "1SU533c3UVwKsbPa2DouE2Z9VqpWqG39FJUfbqWsM6gfxncodhhdAGd4Szsw4Dym3vFyc8ixhTbhA7R3bhU8DEa",
  "key23": "3DQ8eUDUD1fq3qwFYXVTD8NRvA1S8cZYB55ggefJyxqygVVxrAxfJX5LRfesmjH4NcthiVr9Vj5q716yA6foRzQd",
  "key24": "4ark4BqZ3nxZvKRFXHXCgCQPUATmWhE5pvoUytvdBKNsbsLiE41AGTdnfSd9tnR5gNk5YoHJBcRHoY3GwoHfNLoL",
  "key25": "54UDfV9wiwWVhP9md3C2rWQ7wtN1WzTGXULwyLZ5xfhSN5fdBNykEmr44SP9JJX2WcqRaYvqbjXzdTuw1anxUvzi",
  "key26": "4RdjgBHXhk1uLdJw3y4h6hnP9z6UXLLkbvYBRYTHZmyQ2nfvKhbDqj9VRHb9N7Fh2pMgsv3LxmYyDh5cePM1kpYx",
  "key27": "4HBEVWH2kezd6pdBYPUBWMrjviDGg2JDvE9oBNia74rQDPAeAipdEG1EwgeWHNAA79CaHni3KUxNpiKnVjAn7DAs",
  "key28": "5i7MF5kSXC7zU5iTs5k7XPBRJXdFXXo2cvCDnfQH3cJQ8ndMdmwceYufvAQzzJVaz9MAEQwuE6dnjCxiRoFqU8Vp",
  "key29": "3QWESPo4dsgZmpw6VtT6HzR1GTtCfEAG8ZdNzzHE5AsBo6RPCnPrN5GBLqMXjSCkTMM2YWNhgoK6PXCeEgFmpX2s",
  "key30": "3t4JkXAQL82SZzRt7FVCd5orhhqwFQg4LoXHMi9F9QohFbn5pFdUwUYHRDhFEo8asMVbA3xawHsjLUxzdNW5QbTH",
  "key31": "2NtAfygD4YcgAmW1XnhCCoS7jqGJbxiBNVcG9nxFhgmSk6QxshYuyP4SAKujskrxnbYSJRQ4Lhj6nUkMu8XLHQsY",
  "key32": "4svJmBCZPqpbqY6wS4enxpV5C5p8dzgeMGeYiA5WG7LaMxRstZucRCGrDWXTbkzedb6MQBGjhcFFwAiDwn9Yv4Yr",
  "key33": "34fc51SEPz8tK7kAqFgFnh8p8NvSz45BnbRdxGdVx1TG6U7pRDEmoWG9kBuZRKhxMMPjkWEbsC6JN95ApvF4z9aW",
  "key34": "RcByw4UjRyJTFWE8NR3GSR4XbWvARv57wq6SbjsXqsFji7doJrjxYDLMAEn9akrdXsgaUgYJfLN8gz5vasxRpoZ",
  "key35": "3vaBkskY3QnVGtYcKMZjnaj1eyhUB6MYBxK9HVGXVJ2HeNWDvwdy6riKRPSQPs1pdy773Vx7YFm36vjKJ2Yi3nfE",
  "key36": "3BaKHvtXh28jAdWGZ3rdDJ85CmdYzNHkAMTJwU8cNwZtVWQ64VJWgkVymd4ta2jQQNRsaELBqB6vk5u2v1azEtkQ",
  "key37": "2h42EDsjCjkdJEKhPgwnSdZHD4xNrU4V6hYQWw6MNNKn4Guv7qTybpvxM4tn4Z7J8GbeiuxBPFFkPNASQtnRQfed",
  "key38": "2adCxRK9LmtgE7Pqh854w3PnHGZLiXYgKre49t4Bhqhxqmax2iHuoNzFLLqw5hC7wbd2k6NFsarMrgAQQ6DD2pE5",
  "key39": "3kj3NmMjrh7DjJx1A3eyqca7qNQQNZu6VHE9awoJCgeYdHnt65BBkuSnBXvzk4DjAMB5rZjjjifS75Wz8D6Pa7Xi",
  "key40": "4SbioYpAi47RmdY74fv6bvAxYcbfYVnzda4bMjcEzQG3wuR1s9sRcFAAbPyJmRiCrpei2LH1QMxbuGp5N9ATXeNz",
  "key41": "5AmG7Sbw87gJj4wZcaLs9LtbhxEPhv6GjXwctWV7kYGNJSvmb9i55nQ3FSVhznDQzejovZFNaMr7eRWS8RNMDMN5",
  "key42": "7RKziksJ1zSHUCAL13ZFXoYs9CPyZTmGuQWzkSDtZHnU5rpUYwQSbfmicsTS1hRtSB6jGkBCTwmdiudnwMb8b9E",
  "key43": "2KQyaxPzvA9w3DNcr8jeqFt2UtjyNvcZYC4AX7ban6fji3gq3utB9ZKoGqU2AMtzU8Xf5dPg7jvEb1GVyBH64ZRq"
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
