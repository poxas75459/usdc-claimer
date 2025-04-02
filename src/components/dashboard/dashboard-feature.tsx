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
    "2C5mE4knuSBQy88EmKMc8MQub2yrBcRK8YqGBP34nu1YQzxtoJWwQD4RKQS4WPmHnBRZTJEboxVMXZaC1Tbueyjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Chv2at47W5QM85eBB9skLuFoJPwVLVXoyzGscU4FXVcA2UcKvwnVZqcyL5uD8VNHMMaWrop18gSDmQHCC18KgQ",
  "key1": "59df6xbNdWZUPTSfsvAAum3soLxzW8v13QNgzTXNYUDPpZg3gNAKqKvFChcsHJBPQpbVpWuvMyFbqzMnbwvKBNqq",
  "key2": "3TfXxjYY39mxwH4yPQAGgEJ7mT9y5Lm11qM8Gq9yU6rZ1TUrrZCmPMEd7LY1EHUw8SaahGwoSwFF2bKmqk8BVWLq",
  "key3": "dbjSEjk99PKz3eG7n7hFcpnQhzZzK7jFAHhDN7WuPVFNy3RioKsnRNqsMVd3MMyDA6X8XnvVzAcsUU9foQXcZVC",
  "key4": "2hbm9hfX6Lhkr7xaJqr3Jfbs5XzpEnAofC166i3SxgAGWRY8mFiNrsTaomGmGCxSoPYdg33Ap5dSLzJzTjttSTzL",
  "key5": "3HY3M4EPUGpW2Up3Tes3cdypVENBznXh7kfjwLoXSHvMssNycs21QZTn4rSEvFCsV8yRpvmtyTXkQ6V9vAZnUMY5",
  "key6": "2BEiS2tppw5UNBJofYQAF6yUMBYEpczbkYVwkD1JHYc8tnWRaUt6B5EXrtPjZEqN4fUubnM45HbLTEcThwaJ68G5",
  "key7": "27CtaviTj93ETVqaoqzssDGHCkK3xCMfpRUbQaGD7BYq6JmBvLa8GVYeEwc7c1PovhspoA1s9WyAdMChz5FMe24K",
  "key8": "3SgNGKmrhxM2wghvPYqdY8aWVEcWuNzkzNYGC1vgEyzE6javWNWvs35nsNEZfXZag9NmC78ePHNy2bcnaqYiGNF",
  "key9": "2Dq82ne5PRhBMBWkVeomiBmPuifVJvzs94ASKYAPrKXBZZBECzNFVDHAZ3tYfYywZq9BkvskRgWi4KGy99tkFYwb",
  "key10": "2ME8J6kdimj5n6QvDM43EgnntfM9LfpZbjBR4TGjwQpC76iz13R9b4iy56A5xM7VHqPLZkNv5BdQ1c8qVxYxaJDC",
  "key11": "4r9oNadJYTz8P5bzVSXsqUSgGYowSeTPNo2jKUgDJC8AaKpvyu3HvNgiBoMhrRKKAVx8eV6ot2D33PPU5KPUyMjV",
  "key12": "5y7qkUv7jUftYG1QiE1piskipk9sRAKg8YxGGpmPnUBbzV2ByScfUYs6hndopyn9QBxcRKhJKFeAxxsQCqUMcYZs",
  "key13": "41tnnNcLBCiU3Wpfi2Ad3h8SiAF47w1CP4SwBSjtoYpp3LpmM38BE4atARq7amNDKcE1kYjX4J9L6SFfkU2AGqvS",
  "key14": "2fju56zcKA8Zu4nCFq7Jk4fpW7pZs9tRz5tS14RQVnCnJJJVkX4kS8gE9JohLj3KKA5XuMKReCJt5AaxMyYwypar",
  "key15": "Jq99K5nVpFzxGyhCLp9yqsfxFwCDZi9biVQQA12W4MAY3V1vG5BTGCAgLDBYFQq5P33vdaGso3LJ983e94HxxCY",
  "key16": "2tQcE4FHqWAnVpLiYbrFSFQ5UQqcSUjNfv4LRjRry7XZB4MQhGjj3AeqeTKKnEVcpEHn17SAXfmtyDBkU1XGqquY",
  "key17": "33XgR8zrxdEpvK4SxhR6uYokv5pcVd7XYNktRJC5CVi5YZs2WZjSpB2bEuGJUDUXvtVR51KEscZeuEwWGakgWrqS",
  "key18": "4MeawJWz61S4MotQJmCyuv596braNX6sJdBmp7y9YiGpuS4CsWMjUbXkrkWPmWEH699KqMkfVN18i5FmxA39evBJ",
  "key19": "5vPkgXaeABDz6AnLTBo7B6UB6yrHsFg7FcF6HeejHffz6DTmT8B7ZWkSaa3Coq4MFRjxJzBFtC5wD2ydSVs6pzb4",
  "key20": "36ZBgUepiDzP3B72eEYDa8NaePXRSaoBzKj1PwAT9JU24xVKSW7yFuJPq96H4AdZVPjimPpJtWK6Lq5RCCu3bdcA",
  "key21": "4buWhRirswVwBwaUyQSWpFYcufu3EPUfZNzHM2P7Gvurc22v1wL2JwabDQpC5zcS7pWg6zNvuShKAEYitT1Fp1ZR",
  "key22": "2ntZFG4h1TtBzFjjaP7DS9b86Q4zwtsPApW8fwUVMNMTHKLWfskJNA3UARJinPr7Gv4DGuTCk7ajWJgqnNyJ54of",
  "key23": "5Zj9VYwuiMVgEfY98wtQr4mDGuADYA1f7JPMMLgtWNyQ2bAmDXcR2LwdkZ6nrZ8afgnnpMDsvsvKxfJB9Ls3Z43c",
  "key24": "2VpCs1qu8HDx1chJmoW1dfRoQNMK87uhPQxb6pKv51uXSakXH4UBh6hisJkKbzvC32jxz9J1hfjn3ygGqZxkJw5T",
  "key25": "2gZvP7k4WV6vSSRH7cyyf6NdQUhXcWVJTrPfxvxENyFGhEWj9gYuPchwtduYCApuguKTGu4jJfnfSP7R811qdiss",
  "key26": "4eqzxY3FaGjqKWcsJfN8x8HRBxUWGgAMc8LskgyAdWkLgyTuyWGsQjJCbXtJzhZrdgy893MZqpgNbZGUayDxQW3d",
  "key27": "4xCR86wZXqcoR3d7KqxAxZBB3N2cwN3SxQNRuAtNEWV1i6TM4qi2BqFzHwjWkGAKWeFpGsaizDpRkrvVLUL9a95r",
  "key28": "4LoWpXht6DnmkGJ4E5HMneJBKDSX1f3cZhctq35yt7aCUAmm5wFYngPYg1izrLiyhjvC7hW7PTRQiXgXKUdZdbdf",
  "key29": "3XPCoQjg2BauhcCDBdckbbhTazpEZJ3oz7oAVnbsKHdXm489DERkygH29oCTE8LKi1tE1PesBvE1zBkHQBMigopm"
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
