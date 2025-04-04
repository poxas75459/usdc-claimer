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
    "2wNVVW7aPqMZaeQKmvKZBQFv6qBeLk5hQQ5PaD9Vuuf85hGnqqkdBPLwnj5pNJRCc6aDsE53tVQyKaxDKKnsrz1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCSmZubVbxvoLa49a9xR7XX7ib3XFCsYnKEt4Gp5anDhBX2A1Aw4XyU9ch6ffUawdqT9mW9bmwQcxo8tfvmdsKD",
  "key1": "3HGncQiW4o2DngvhHLzVbppVrKMyHioQXtK7U7aChBsGhNsK73qcxvktJSnK66TLa332Mfv94tS8MnSyertSVpsW",
  "key2": "2VL5Uy9d2D2PrchGnxu57uHDFpZVsZCQYXH2r6Y8a6NPbJNzrsn9WW5ZgeNdr6AwCxe5kvc8bWfvsYUZaqQ5gMd",
  "key3": "2Lyt2vd6ToGpNn7tR5KvEgnTafaCgTfvAmf3hw494pwE3qWL3r6Yx8w71TdUjA2xmcCFXDhGZhSCq22GJ2qmDirZ",
  "key4": "5ayqrJLgS3mFMnhDY1ujJ4MaiCgcXSHBJWsoNUJbqA4TfzTY8JPRBFEt5JyXQ48bAyfToJcN9t3frviSeVw1ZQsG",
  "key5": "bWtqWkyQmf54PxiztcBKoiHKC1aYVVNjKBwsC8E6R9g1fWxoNFN2jyY2BSGFKwZDUogGRmuzjmgGtkt6cGRt1rs",
  "key6": "5Md1dJRfvmJ1DXtinu8GNSP9esyJHoLUkCTUqg31YAWshVZjr4jGMjdQLXvcJ7m9eV7pLNeBy4yffdmHnsTxPfPH",
  "key7": "3saqkXtFq2NU9RHWnQ3k8bRD8gQndBWu3bhsCxrJnesR4FgSP4GzHVH2Gch55HH8fAB3Gq33JkdMiXszSNgcLdJg",
  "key8": "5rAt1Tku8cdtbad8yzQK1BL3UfsWrf5RCixF5pscd3gS8zRHK3oLKyvJWd9qiypSMzL9aP9iAzLfF9NUipzfYahb",
  "key9": "422knY2sQ4uyUCweP1ufRxipZrbqa8WJnarUu3AJukbpQDSVBfoeXenrZb9YaJRjZzdLwrzVuf3GDzt4Q5R3UTeH",
  "key10": "43fg49Pvc3xB33gXRz9mgpb1AAauCgXDkA2ZVB6HQfwS4ysiTNaS355XCM93tDg9LcVcJZGxSXp3zmaQaNfaPZki",
  "key11": "2b35iRz849AkLgZSveUcVpymWwUKGi6TA7PxhhCjNJTyYq1cDs9YZyhiu6VmdBvAxmPHoKpp3DtXrXe7vLqHaMgX",
  "key12": "3JeAvuUVC13H3RcXcV9RgS1iFFKDEvgstU8HnCuGRoPxcHBMEuUXeivxEdMVxYcZN4aSDTwaFqLY9fVHAtWYH53u",
  "key13": "UNcdfmu74uvNT8owiyxAb6Ve3E7RJhycjs9gJRPGe2JRrgX44YDWTN4UAm8SbBnGNEcy33bQbocwmkTfj5L8JxC",
  "key14": "qoRAjJNCMRcV6ibQPUh8UuMVz7dGDcWoXSn9UShAcWGHd3Sow8krM5fxqSbbyoDxYSZCq9TvmN5XEaRiwZqLcPa",
  "key15": "2QzmSn3TRAbxyRdBk9NKcbyUVh4AWqFHWDvZySniz39pV6mkwf5eom2tn9yaGwo1xjfgCKMiEtT247BFKd1a55pb",
  "key16": "2MRK7Y7JxkbgZHUo2BFXFX4sFMmc35VVDbk3KAyQAyaKQxu4oHRwuusphLkuyUdxR6msgfX4eDYRTvV5e85Q8q1Z",
  "key17": "5BdBLiDTvPqHVpoyArNrE5xeZX53n8aW7wqRvbnFomEvAzrzxwBKvMvcFpaH7fiLPcX49n1ZTjccwGttjKy6ZjBE",
  "key18": "4dZbK2fuRDFawhyh81EaXEavZSvrJx1DCGwdTSq1WgEdBRrPrrVdyWrnFhzPjAoBqUQ2iuTTC1ZEjUBFUFqsW53A",
  "key19": "5bj6ibppn9bFQ2qxKduLsiTRyiFj1wsYWTMwGYKfbaVPUNkTjkezJJd38eoQBfVTXNi5QkQCQLpa89Uicr3uywTu",
  "key20": "2CrqkzQPYfYyRSRc3XD499TnF26hZUHq4kreNiNcRYvnBpgn2CSbYRKnE2GTTiE25MDjx9DdMCYyy9TKZujmsKCn",
  "key21": "mTz7VfhsSqNQjHGkJcw8nY5Ut19JdwrvKz9jPsW4QUZGfRe6r58nKkxJaZ1TSPodVgpKTSz7zj5z8HybyhQAiut",
  "key22": "JotCxcHu9zoxEZ5RoCyqmrCXUMs4FAQYaq6wnEPseSdj9PAz9QagQDR5YnUrauPpLDHkbRXXqnKXgHZAwcwbaai",
  "key23": "3vR8VPv11pP8uxKwDdD52svRUpnwCm7oZVy624NQtZHDCwQmhqXUdNZVLimZwoUFvMp4bDYdzHuxnRsYGvoyT1N5",
  "key24": "2hhS8xbr5Dmt1ivb9VCGtGN4Yp91Gmmk49HSzrWtZ8ehf7hCEyxcKyDCUdXPfitjXrX5t6DkmyQhKhXqNZGReP4U",
  "key25": "4Pt6UmLXebuXisaGyzXNtr1iz9N1zKWx1yScVSRrvGaj6W968G8ytQYccNoYzawVu7RHqPtLn3ZmyxgQNj8x8oWF",
  "key26": "4zvdorisXJUv3YhsWbAnNx2UZ6W3DoQPHbnTfjQaQ6V6w2TmHoTm3GcjJsRWuvndMMQdKLVpJj8KaeuGBK9QHyma",
  "key27": "5gDifd2AXtup8PZh6ugtW59NsARTWFSCXeLuvEjbLmN4dP6jntEsDuFzAB8vGQ8WJL9gwGacRgUgs6nBT5TaEhb2",
  "key28": "EpECj84CSk7xJNJfuWw2FZAeKE1EopqaP4bUrNnegjWKdAxecFrUK9u2wmRLnTCWrJgmzR7rdJ1mEw9RmxdnsHJ",
  "key29": "3osccmFx2aKMBFiE6UBxM6oXrPJWhsumV2hhQv9HG4T8ass2n1V1PjoBwb9PiZjLAMZ2kKVJkEhtAfwweLonrmnQ",
  "key30": "3j2CbSLJmd1vniDyYdyYWcBo1pXK2tVgrR5UrK8uH5urec6r56YZXdqdyKaCoGQU7acr7dxmwhHSXgnnzDh97dPp",
  "key31": "2yuhcYkiZdmRaKKkLqFzkrDzcg3DM9TVx7YnXj9z6VokwZdzS7v6uxnhWsBR8sQfuy1F2AzEFGMFM7Q3mXMkpZbf",
  "key32": "3wifkK4zwnx7bxQFWj42s6g8wcvMgeCBTvR1SUuxbGoQQCj6iVYg4naMXJA5sPUaWUKN3vx447mr5N4pXu8k6mrw",
  "key33": "hegeKLosPaatrMMMnSKmLePZetJoje7KE5NhJ5veyBDqxzkaihhpXdeZ962GuDxDgaopZu9zup2LfV4KGTTvbWK",
  "key34": "37Di5Xe76xAVjqMxujjV9fEeEZNfj5Pv1Yvq8KZYCoMcQRuxXUUGCPCcejXMy2jegQjXSaYxJFojvqr1fteamNNX"
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
