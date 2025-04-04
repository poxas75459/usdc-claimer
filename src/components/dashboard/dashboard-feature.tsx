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
    "4mGqH5qBArKKuAg5zm7rTMHp1DNzTAtGFNaPFC5NqEMfcoer71x64Cg7U9AkFkubDJdjvxj6qTgn55VkrGYbN4cN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uS4ndzVBgp3wsNhvJySLXpJubL48ironQEx8DFvo2VjxJ9NzqqvS6RtbCf98vjDjXuoQLK3RcFf9s2k8UJp33Bb",
  "key1": "39D39nXtj2uBPN1RAkPT3VQLWcAvbCM9apZ32XGCGaRg14zTjeo6zMFQT9af2BZfC4b8ufmrNnHruuUGTiysYNLD",
  "key2": "266cczR2UsW52JrgTphTG7UqW8P7qmR1JVKzHVMZr8FJhoT8mc6EWKqgM8ZkHL6anS6fzdRuxPo9WbknwmoY3YPJ",
  "key3": "5yRtuacPsSm8ewkCRDWdv1B3T4EWmk4JbaFq9JtNmwDKL4y8sgVh1rfd8GKRqAfKGQ5MvYVtVKx3Ejt5K1hBY7qB",
  "key4": "5F5h7S8nFRkov6Bv56iU849fQhsZAuziNLkQTsZCgZi7SbaXEktq5V3pfyJuR5q1dUC91ACdYqCG6zvi3TavgoBi",
  "key5": "5Sjm6644Cs5mbFTeynUTFeeftARXZsUuRExTzkAe1PfPYoc86Epr9mTeNtGXrtpxqBffTFUm4Yz78ua8Rt7iKmv4",
  "key6": "65izgRwpyMVXWhweoGswBfXgiFcnsC3A2jPyhkwKB5HqbQEEm32wNogqMoAtjq4zGHFUYpsR1HyumuRNQTU15zrA",
  "key7": "5Aw6rba9Ud7QQARpvvXWUnA5uFNWBWBeTJ6TEpTpfsjw7o1tf94Fk2e3CjNymTgCn9dujbkuxpJZHshTyE4jnZZF",
  "key8": "2jnTf9n24xabo9w49yR4yMc8fohR5FUbNJptmRENRYLqhNcZSJkLZW2yehnkHK5m75p1vkxC9tGrXy1iVqziKbwe",
  "key9": "4mrWfj4KPq2kjbWMPNz5dy2YPkwDPiPEfFjSwJtsStpATR6FURM3Do2EB1bR8rjzrvtB1Fdq1BBstcfc3tnzASuT",
  "key10": "SUfMCimRZMJyG9G8abaWiybN64mLHW6M7UpCeY5nCDLUqx7VdK32T3noo3AZQgtCoWsiTfkgQZj1XV2REGRJRnP",
  "key11": "4Wq8sLYChJ9v8869BnL1vQKutKxLPFeYZVQSJwwVDk41rJJfQ5Fob9Rp8GRE1StWA5Von65iKYou9Fd96SZyrDyU",
  "key12": "4UQKrHPYrvauaJfeX3B1CWDUzEfbRnrCJWkuNnY23BiHBJAwoEjTyMEPkbDW2UYFStTQjb12TBrgYnZLBbeNfkuZ",
  "key13": "5yWXRNYLY4XJDHjcdNjAUVRv2wbwJJWyd7qhrBEiagM5bJCnyC2nueKZe7cqJtFnSSC4bT7eWT1THyGiCZVHXt6x",
  "key14": "A3ijyeZ5j1tb2uMx5UowdSNgXmkg9o5TGuy3KuBSwrVuueVCNts5bb82cinoUyG9cUt9RBuc168xFuP5Y1dLVJD",
  "key15": "2G3Zo8wenn6gKDJ9f9MBAfF7FcrWyGBqE5XrmRsVQpmN1aeQHSoub9YqgtmLCmQyxDPgPt7A5aHQDnZBmDXHdJCZ",
  "key16": "3RjhWGxZn5xUHY7NGp1nvhkeStXjWsB6YXPksZeuc96BwBFJWRHqQgGSXapP6CCHJ4bEozeEJitSHM7Yqiw8vMPt",
  "key17": "5yWNimebefW9qjzoe46SAL9ioophoxUzXtc3gPmBqBmcB9WvqyM8v2NZkVsizjkjwKEEZfZNaq7jMLqEPq3j3j3g",
  "key18": "4kkyH9fWCXJn6RpGb1gXyK7t4xVBpdxNW6o9pB8SRpMzt1aDEBhghMYvKNwqECwyGNmd7n7xAi5ba1HJorSeZF4o",
  "key19": "2kkuPxeQuDwzhWV6kybPLivonPqK6tkC3RB3GYCWYdUjVQPXNe6zbpjaPXrJDeKDDKxGAkiAAPk17Vkb8vkUU5cP",
  "key20": "3x4CCDtDH3wjfDTh3JAub1uDJ1K3UpEzwsLh7juRqM4Ef4QW5M2q6dSs4Z7mq373FdiHQQNMsQsi2CGo8zqWrL3h",
  "key21": "3TPKqmtvCGUV9BTK8dKcdFK1h8hwxYTCf2XEhQykNTLedDVMsG6hJp82hZxz5o1o6RxFdXKxyG49nNdW1hysBEug",
  "key22": "1XnUqodfcRjatV6n3KoQdeBP5J1zgMkGXdY8ycu3rcH5LVdZYhQ3Z4qWPfSCo7KfeLRR8Tq2m5PhWzEcaJyzsM2",
  "key23": "2vpZH8cp39fCbr4hASmKyUy4Uj2HsHhTwtUskWGNXk21fb2EvqYL5RZ2epko68KXQxTUNtYjyd28tpptpZSYAZbz",
  "key24": "3agRY3WDQtSzh9sXwVy3EKEccCLE4mp6GePfimHN7FbEzMsqfimy6RaySX1gqENN7sZmKhn7cTmpcb6J3Fvz99WK",
  "key25": "4P5GErNFaLJdaHFGAyvHxsi5UtJZ534G9gk8NscL6UdkBoWU9Lx1tN1NvxXgYRChN4FUGPNhgfnugozYnsweQQtq",
  "key26": "2nPppFYJaTp9xDDSFgLSDiDBg2yHsrb3EPA2hwkfVKGqKMvfhMS2hfX76tAVK8cohjkFjzoz5mUYE546A2NamYq3",
  "key27": "4rY5mXEpAEPVrq4MLvZEBzje3i1sRUdoz4bWEastpJ59NxTWPA5ErzcAxQ8PriQoiewP68C9CG84hgkgA2dckxW9",
  "key28": "rC7D3VwnwNy9MPr9VQNoxjEvv8Porrvqhtgp1cNHomfn3wuGg5Zg4SXBybu7NpNoxbzkbJPtpctsuFW2hyYfW4d",
  "key29": "PLwTWGMoyYuuzGGxmitc7UzEHe3dHcv5tBc52ux3xzhQeGsxngctaLWgAkT38AABNnNgZxH4a5zNFmxDZBX2iDQ",
  "key30": "2D8VR4Js5Y3DmEDarogMcTeYDAQBTJqtzPBNX6ZUbUvoRTeCKzfBDpvJvfUGaeAzWHTduvQaH8RpUZyB2unLdkQy",
  "key31": "2AQH552C8WnwfT6UTuXsx7BSML7AYgEDRLxPkfKgm9ZGLmwaVe6dzJnFeY9vBKKiaUKE2GK1XSiu6Ks5U3DDB8gM"
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
