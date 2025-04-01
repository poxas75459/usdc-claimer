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
    "5ykqji8Er1kUgmr56UCrLhvos4KSXqfcj6QMpW6Swue1dq7f49xAsbNn7fHkYHmfEG7LQNmHMyMNrpf9zuZMw3pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S6LwT11vNkxUkyFQ3HXxapLiY5rySG2eur5BgTDVtvD72aBXAFdJi1TmXYk3CRpdQGz5J53Dj4qXRHn9f7vCra2",
  "key1": "3U8C5LSGJsXeho9Knha4aZNkmEQ9bYvsqEmvwNKEUa372s6pfX6KLgTW5PKRLY6NNEXjUfpuzhkkzz4sLVY3xagH",
  "key2": "ceUrpURM86nAYZZtfQpSRdNZKXryqkSipohXLdXAhyZM1ZhhpKxxBSMGf5X4eBEE26itJveHkiD5CjFWUB2jDRp",
  "key3": "2d8dQbRJJPNS81rUMYNi58WXWKbxSkJxYW2TiVn2QwbfNex4G3NsdkkEsqfDjsUqhNqEoqDuosMXdGA6GQM5svrN",
  "key4": "2PhyU1CTe1bSv39nD8qcFjEu7TbLN2QtgCVUYtqkp1DUDSvRPaNrBphssije8SJN6D72b4WKNBRfCMEr8Q1tDCb2",
  "key5": "dJJ5sDLcnx1NdCjjJimra6UL9zckw5SwGNAMcyB9M4cwhWdyGTwWjx5VdrdSXoDNbjp7e1iYym5D6TMYLtS8Wp2",
  "key6": "2RhWM9NE7yWucMEVf8WCKCq7PMCxR8giHT8LU2MKaNi82MUkwttdWV1y3kvnLDE2trUNKxJbWRqUgxn7uHDy5kki",
  "key7": "64rFoqYzSSFEynk2qNJCA8J5CYAetetKYKDAPkEaY2s3BGjbGgx3A4oiW58Z1736SLbwkGgRdse3yc8MkLH2EkCH",
  "key8": "5icc4dj6vyk35jMtWGfGCF3eT86UAFJo7Zy1FyjFupYgjHEw8cph31PTF6vkvvxcEcxhQkRaKVeGo8Lu5kdNMECZ",
  "key9": "4K93V89FULtXULjWbtw8iKXHAJunchNSzXYZNQy6DpXPhydVHW7jHYnf7iXBjGPZRMYC7APUDEnBTwrHwUUXRwae",
  "key10": "5zeKqknHByeZcVQHtyNCSC1dz53MEwwzHpDjz6oMRE8yBubB2P1Lx1UiPB3QguZtGCbsZ7JqThamHLxAGy24ikey",
  "key11": "35kvmQo2TeF4xqcWXUAqGufafT3zTkRwAoV6oFhEDsax2Dh4UFyWmsCUHfDe2DzetKP2rAU6tt8dojxEcEG7QihW",
  "key12": "5gKUGqcG2ZH4FxkS6zSDaHpEsKz6UnxMi2yjcX7xusSkR2RyjVxzM3nT84yCoFgMNbV3tFT6SdLmJXa7Y13xZw72",
  "key13": "5TTmBvN42NucogFuMbK6UXLvLvGbvLH4Qd3JfTiDj5qNGZvkf1wN3ASdyBBhni7e6MVaKmuhDS2kF1ekAV9f3kv6",
  "key14": "5WFZB8pCtBr7VmGMsyU2szbztSAaD3xmgKYrFKZ6tRpcsqMbC1UN9FuwawfbKtQj2UxYF3sKhmqQKaNuuUc1t2Da",
  "key15": "37T4cqrYzkbZjcqFs36VUuSJAb4svGQp2otrjExPQ65z7JwaUM8G5HQtCEvWJZphVeEeWFweyGpA5YXnxQCgqn4Z",
  "key16": "5nz32qosp6BUJFMpNVcy5hnBnUGfrA2nWWpDdB4rejSgoEYpTc3BodvPNAuB5KuL7gCEGxQY7EqJRW5KYmUbA4Lr",
  "key17": "65FvzBcfBPTNH1XVLVSp5KnmyCH2crD3VqoQ4cGmjwNFbjjg5CTXfjxv5ShsRtoiG27uq49ax5LB7ciZL36Tphmq",
  "key18": "2Sya4U1nccbEUMFCscguBhFPTuGSCLnmusP47FLseQFrHqjUZrBALB2kpmqK6xs6omY5WFmoZVwEVHVJzwky29aM",
  "key19": "4Y2bmBxLxvcZ3iTnXBtuGv4EtBhxDvBFQMP5L77EW3HrpN5LBenKJSNHFPBi1Hc3odbXgz8TPeZTk5JU8cKXECFr",
  "key20": "5r2Bgx52c3rz4f25iFceFr7tQeEbAw12mGaehANYbREREmW1JLNKExfoTFyTpApW3hgJC1kGjreV5HV5mf3yxQnW",
  "key21": "4WqVQ29AaviWqkJbhHmwSudBVU5UMsMyEfdCaGY9AzGWwet6bXtxV5xWm6KwfMComsEND2i1e5xS8K6UphnJaM1w",
  "key22": "q2DPrjeAvmZJNsqP9HfzVi1j7RQqFViVSWosWdAgm31QkctJ68yQC61ksKMjRQFDmuD2Jgjp1PK8YyV9EEmk5je",
  "key23": "4p8XP3wGpm567gEJtMpz23wTMYphakAdKFLhhqmGBDbkhhJBsoQqZZDVugNeba6m3UsbrbW1Kb2A4HAQzZEJGdr5",
  "key24": "2SJsvT4cUtU3byGk4McaZC6YsLAnyELxW8uEvMUKBjAPA9zRrNhrTK1ZYjPuuuCJ9AbUTiPehn9b7NErB8hDsAzw",
  "key25": "3KFzqkq8P62jQdeJ8HzbQp5dwZHCkvNxaSQQXTDXpjT3Y43BnbQgQunUmhY9AGWwZbVwv6uGmJ6vnZZSaB9K4iFP",
  "key26": "NZpq1nChyv2yUuhvaaWF5e6su8sEMAazLMsM5Nzh9MVHGJXhqJbv23GGWDL6GsVnw3dLZfWfGPjvaECzDvDTYYf",
  "key27": "7x2wDbZ748RDrbGKotsBwRAi9og99mUB1ystV8pi7oVug1VWLRHHAsUHkdqmKFnidCsfTYkWbkFmneyLbdzyfzq",
  "key28": "25mz774MdbPewvZtxNUwGwuow7GLkzXpXQYiWxCYy7tdmCK1H7RMS8U7Ywm1nkBp32qvRtuP1gryeX52kiLZfUDx",
  "key29": "rGBYF9cEABipvv3LoAb8i5qVnw4XXMCmdtgwQMmd25zNQL8xsSkTeEqRPf9VKNECzAu5JgyFsJYzn9wVo3c6anp",
  "key30": "3Ni3YCFccADWA9sVXgNbKJyLBQBMB1cbhc9ChPUWkJGvrce346n6VyNbRA5SapFJn2kq68A79eQ5hsh1Kvy1ALWb",
  "key31": "2Ge7gpC92srRwHM2upfA4oHVxXMcWGDn6Udif5S6K3oc7BQxgfqCNH4kXj6fLcngo1gja5fyHKvDnp1WSF7Xia6W",
  "key32": "3MS4QQBtT9zz6ziKLzXTWyQwcmB6eDW1frPha3NcZuUXgkRRMVPx67nqBMT6n8w31ameCa3GRycN2ftiCpYxcCRZ",
  "key33": "4etkzrTkmbZxNWiFK1BDEPqzzh62FbFaf6z4sjZtGb2Pg5maSFBH8xo7XU5XgKutBBwoLphiYTf8iehYGgkboDKJ",
  "key34": "41p8NRZQdLk2pi7eLTNw5rYyQ1W61Z2wmcfuMhC3qWWi34af6BEHUbYfWR44cGuxraJgio9gvWKMRr1Tv6cC7g54",
  "key35": "J7W5p5rgXax3sjFNJTBQeeALXsJZPmHc2B69JannJUi6hY8tWuKFhDzQstGugnCVvQ1HauWYYn1PodbUYqjvAJs",
  "key36": "58qBS1DvbUcecYQPANTht65LyH8GeKbbCcBsobt1BtddWZdYWMDdvyT4Yk4i9ScMvDcbpwvJ2wUfUqNCa1zJW8Bu"
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
