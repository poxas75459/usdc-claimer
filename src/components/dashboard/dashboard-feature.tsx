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
    "2x9epmCbgYR8A8KDFvsTALmfnvpVQ8MLSUvvNyWRzZMvr7ARkaMroWgrqYn2pMgGcfd3Jwz8Yyd6Vk5Ht1vbeowT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PBkYDeqXbgKvmZAaV42ajCyytGZUQ9gG74zFghw7ZhfJwTDD2PJdgibFGNBPu2qP7inGrwkjqD9nJ484mU99k22",
  "key1": "2sUqAbLMVHfZasnbGSYETGinn3sndDoH8Tpi4fHFghj5XhQbTqKWT5QJ9VMNDe2hTEbfWXfRCgiEgbZPj9ao7ahi",
  "key2": "3s5Gj978HEu3W2J4vJkBdNVq6jWndPFdgRijSBzuK9UxdLjBV6grjxtfXF7HopMHf82LjiAe9dvdZrq4LWEwtmsD",
  "key3": "3LhCefUVf8emWsa1q1tVBkw4RdAc9xDXFdYUPTU4zVoTiQi2YY5gk8mii88KAgBjwiCLswuqQDM9Pkes5Mb4avPq",
  "key4": "3gUHNvhsTES8Pm7A4qYbqs6TxA9KJbLhyMj4ULiQ5aTsYzxJV9w2QJ7EqzXm9GPNvoPVhtcVzRmPdWT6LRzQd6gz",
  "key5": "31hRfRwrR9FAZkPndmxM4Le4qNhW7Hrrp4qAJ4JDRUZXAgs3fsdkxb8WP9nwFQGJKTFWaW8Cc1rsBZJimUYSfWzk",
  "key6": "27RQgQkAWB4NurowiGTyJdv8mzxTJ35npKjLsYCBbtGgT68LbnNc77dg7WyoV5wKoEvgNcyhpewVesiiQYJQTZrN",
  "key7": "4RqCa77hexBRrVT1872mxtwijH5o7oWhwQWC6BjyTpRAubW9G1J8PyLcyNmyx8AqHa1vZ61EXhuE9xg3SshCWZvD",
  "key8": "3YqiE2XFGtXYzLQuf5CokvXLvbj2LsJenVG8WzXQp7Qxid7p6MEuiVSpjfwZVUTGgHR1ayR7P1rJJtjnLsZwPmvC",
  "key9": "5eKBZrvjoWPRoEAYAbFhUWdkf5hhULPMkuNq8NCMax4rmWUh7z4S2Vsyi8xgoFVNvK4au6mfGXUeMfBYrxY1g7Af",
  "key10": "gKrpXvJiW9WrLGy1DdqNVHJ5pykDm9rgY2WPJ9RHSysERcPDEwt6bimvjZXMeANEkVHpPveE3jwfsL5nJmBk6GJ",
  "key11": "DLMceUDPTv2mi7xGwVoWmEhp8qhDMyq3wVzMLE4AufvBRRajpqAeC6h2WUxorKKbgydjauS6iDN6t9vCbUExqon",
  "key12": "Rk8LpRrUr95NHbTg2kG4UzUrRVv4QcB6h1qmt7Rjx9hrhNCqp5qMcE2kEHQVaCkr64P6XCzBq8zMArxW4VDcrJw",
  "key13": "2UxjwfSRhx2VKm4ULMwCciB47rs2SSaxpcBLmEiE1kUE6f9rZ52nKzjJDmH8qqvkXYAweFUUi9BPGLJbssnxNeEu",
  "key14": "55ECUpXeegJjUqmkuuKpqjKQhP42UujBcJuzR4vE3Ri1LsmBmGdNJuzPPZfJWNXNYD8RPkUcqkUcyWRwsKJFH3De",
  "key15": "3u3LZVoS8bWoufnv744qp7QW1dDdkXtwuSZEARAuWGv1RdeZyerK4nMmEj7Ehj8r5dZRGLi4AtmhfoWnQeqYLgpS",
  "key16": "38uj8usJQta7FLqtHcocvttLCkeafGTsHQejdGmsRnTBBmaZ2nSGPo2rzUVFANDHT8n4a1DWUrendQrgNamEY4bw",
  "key17": "2pDT6NLDVny7Jh3nNo2HWwYRDfXZaxQMk4ETxJs8kneNQcfZdVHaWpAK4syjkKcpjgDph1RYmt2auF9EqGC82Wym",
  "key18": "3fTd6d5667stiKUjqWrwwhopUnFHcB4gg4J6eUZVTDJpAnvc5844jWCMjxbkbrVgAwo3226Mzi6KC411cjx3nbv6",
  "key19": "jApwJuuruRQ7Jbvr8FsZGh4dRxxMmkVGB7E3HQznTnqnGS6xmYya7mXAUrVDFyPYjo3xCeYb1N5YGEzogsH18Yf",
  "key20": "3XSS5LDEZRLVNfMpXPTbEGMhFNUad1VqQ3cYLSH7qrH81KFkiwpoZn91nAsemoDNSY3FYbf4ojRuLQd58xnTyvDD",
  "key21": "2a2vfh4XqH9Ad8eaXRxX6CjoM2oieXYAUdTkUJKGy1x6VuFWkFCFd7xUMHQgtDdTPpYUcMpPXbrZB4AVhcF5t8PY",
  "key22": "2aZT2t3vENCafYXxfPMB8VLL5s8u1fwrjB1RZ8AHoTb8J12kT7GkQDCwZjtyvB5M8egHUL4ViwX8SMRRjDbrzB5L",
  "key23": "3izVARkDqPg2UCYSft9S1wLWvViiRSQUR7LsGYEofCRn8gnuyvouuZmcAAD965kGvZsAo2WT8RR9YLSHLbVTCMpU",
  "key24": "3joNEF11TmuUgi7AJb1P7tJBpL5qyeAQReymsZ2osyujkVW5UzJdf2xSoiY6Ra87nk96TgPNju5wC8p8LNCZZDWC",
  "key25": "3Kjo5XwELCNdkkX3uKaNdgEx1MoMbnnjEpuvsDwQ3wtxKLCqMruECMQsK6nY9cctHjKd2f8u4ECNFCZ7rw4T9pL6",
  "key26": "5nJ5c5oZDm9a4pgjW8Hofh5BnDWXGd1ga2q77YPwu1njmEfDSaZVZJNuUNMXt9DTs89L2rra2Awbb8WL2QRNbKuQ",
  "key27": "2mhcBXRsMjcgZYcuc9ifn3QSB1bCFqsHA9JQq4UGccJLpAcEBQUnVPEBLtcF94azGRKLeRHSuzPkPcfNWuKxtJxa",
  "key28": "WUbPu5RmJU6SL5uT1qSYRUcgTmzT1qwbABZnYf3FSpibqBj1BPrNoyUExNRJnjESHVmN3grwLyWtP2mohYN4wpR",
  "key29": "5UZf3e8rwNyGSgZoNkMTVNyZau56VS9xcB7PZoej6mp9UPK73p7qv2ChwvDJxLyLsknGj3ro46JiRUQCgPL1d2Aq",
  "key30": "643r8yGFfjyPoCGyh1MrZXveEMcMBhWC5P9XQ26rGR8FWu5PjVrXqL4ztrj7Y57RTrKUrek4MaQFZ3kgbCqsQgAX",
  "key31": "3eCh9hGnoRvsc1N1JecQbsKycNKoLiexyQMshfi24PoanRhbGXavLScA3kSAwKSsXgheQUrrucLWvJGNHWv9creJ",
  "key32": "2HmWHiaF83KUzFUQvWnv841C57CcV7w7vdwZS1EUugBWHAjJXjifpTVYsGaUFWfBBg2MZR9SK7EYV2TPYRTfh2Sp"
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
