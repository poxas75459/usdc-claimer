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
    "44irEphVRYbms6122z832S1UexjCnkt3aHELgaLCdaSmmAg8DgeLfHo8gwe1S4hYjdj72CGdrvGRF2aHsvn1kkNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4suK1EXpJ46BJtwsxNzRq5thZDj5sfntqMSxgprqgkoQvYmD2nhdTDCzQR1L3esw1pY8gTGo2y6LmexHEV3Tf5pU",
  "key1": "33k6LgVr7wkYcQYRq2HWNpSjrqtV8rgKEfbHDr1RKmontj5ZQE6v72BqV9rgjiAZHDLhSGX8ga2WXm8AwDTumkGG",
  "key2": "5fGEX8REQ5yeMuQEC3fFsS3byH4swWqKJFpXLTnYqrNjLPVk1QaamQBmi6zyVrbSJr7ZiqcQHMM2zwnzTqeY9kMi",
  "key3": "383np11BLYz39pX4ipxCVyc8mKsxgKkc8G8bj2HXGPnaUTP6ck3ZDpPdEamaZ2As9PT3PDTpieiR9LdXxwj8PTJb",
  "key4": "4MVZUqPA6ccbYZKENkHG9UWjfPYWUkZmoGrJPu4tmjMzfcQREBT7pHYFmvBL6trqPtTChEynZ6rKjWQ93MVorNUK",
  "key5": "5ZasRZnxjusVDjevbgSYoSch6Zq1c9fcG3wUzU6M49JE7p9EpZS6yTdsvYz9p7o7ajBxCtAhEMepx18hTnTxFAGb",
  "key6": "4CZv9digTAHFE2LswLntwGHYiNS24RELaKTtEU5tAz2NDiTMJNh7BZhC4o2yMBnwjfJ1XcJuLG7F5R3mPVgo2Bsk",
  "key7": "5M5EvFhYyNLAa8FWJeEtyXnoCREz1eHvQ5oUgfiNHAZ7FpRQNER8vf75Y7VLo8AivYLiYtfZXgAc1ygWgYt5aF2q",
  "key8": "4zr6assNJgwWY3XBB1bLkNTDb7pLwDKYEEEjjF6decKfnBKMX4xi6VeYmRSb7rhgFR8uFehKVyJ7WWUTJ25BFKVS",
  "key9": "22iUMen2AmnpR1rkn6Sqg4mCpi4EwVAPcVzaMwb6ojFxgkfmr2P1NWo2gBZEVvCj7AjxUWFLg4V9HvFkii9H4NQY",
  "key10": "51Y1brotV8dD9h8voRkCwKMKhfzGQ8VAKxrkbfSksaiVf9rqAtnoS4Qhh7QXwf1NEdBiR98oRP9hQfL1wqMiqAM8",
  "key11": "4efQoaPcfQ1yjzuCFg666XDicMfBrbKVFj7JGf87fnjB79bxAMTUFGWnoLujLTMnf3MYNzQv5qjPgWYsyvGzTenR",
  "key12": "3hCPMXnW7fzX36QqrT9fHf3CXkQ2ARb4ENioAMCGnmFyt1i56K84XZk7y1C6A71v9dpZdx14pURHDbT1tQSF7UzB",
  "key13": "DCQrMfFvF6CbRJxYc98tsLqpMSHhkFz6d5NDgW9gAQVYADWf5b24svHjhnuAsqNLW4816zNusAfjAu8GXVLJum7",
  "key14": "3Qk9oDdqqdtSsB1nJ55Kj5d4rKEakQAgFtjrmx5KN26FkM2SZARebxzbzM7wgmGcwQknUn3po7QWv78p5Cp9TqDp",
  "key15": "Hgch3HFhmjubExPn5fqq91hyo2UGPUZ8zQL6gjnzcEvjqEXkoaLwd4ZHN7nF5w8y2VG9XWL68fjYdV5Hn4yDsT7",
  "key16": "3S7ci9cBoBku7eeYq3eFvnUjFietQLu4nTPeAba7kiWkWxPXCJbMckyrbeY9n74gZ74HgD73ASvjMv6HKYgEW5q3",
  "key17": "47kq8e7RXuAgQbmgNYpeLymRusPg6SKoNqdfcPydR6U3z31deR3fmtJ3rXPNubHcPVpvG875ZSFo7fjKVuN5fBsE",
  "key18": "29YE2BnMWLVJHH9GM2qJceNJu2TJuwrxuDdjNexKJTfSmFCJ3VwrqVnPGXj5JecHCFUzmrJQ11XnU6dQuCLGiFkz",
  "key19": "2evH3rxrLZ27brA8inQFQNajqnZffCBo7NHuXz51KB5EwuoHjgjML6TpGDnwRnYbydLcFU5v42MZesTTF8PXpTM8",
  "key20": "3eCTsXQnn2RipikP2AHyJTU5mmQ984PQP2ufcWfULJQKxYF2pypgS3HAshxT6nWb8mjsPLfnbmjRND7EyyZBYQnY",
  "key21": "4XpuWSHctbryL4kaytfNejahVVaHQa9Ng1DrooA9oigWMpZg4ibJcC4EaYfucNuFs5qojee3xFArNS3Aa7VTgXoa",
  "key22": "3nUuSHsMCZqcPmMcDkozQE7ew96vjk9P5FBxbdrk81SBhyv4AXGL7Qzb6iBBrsPUnyH9kb2QEFJttterK1oE1uLT",
  "key23": "MZum9Syp5ozS6QFTte2cXsfhaEKq4f3kGeiJLuoLX5RYCVXnxLwa4LHG6dvmDtot2dkJCN7hg2E1ACA39Ai8nqc",
  "key24": "4qKYaEB63rzmT2dJ9k97qZ89Y6Nz4ZN7c56oZzauqeyJcy6RF6y9NQM2tbZJ9eEsFUW7q6gKBR2TAaTkjF9rz835",
  "key25": "Kxro8CZA6vGbtVeWzH8FSaYdFQ265Fi4jPwN9nEbGMNrZfvFsaisVS8pYFmiVAJNWWFqqP6CJd26H8qVkdtryiy",
  "key26": "2hR7QgwJ8dwjuCDb4ahY58Q6Ez2yrr6viBdoMZBhsy9sT242wha93dqGPZe6wbAHgdaEktxuR3MZLxck6351n9CN",
  "key27": "5vuUmeNr6xTXVZHGFte2CvziL6qAPNDdGk6aiy2P3hGTA2TEcDoHrEESNy7Qk4VsdhJ2ukzb4aNmPg9X1uxa56Ns",
  "key28": "31YMVQFHtYaVs8sGdntmeNVS9wAQ4KEFrUoWEjN82YTRV7XW9SgNkuPZ6LNPLcZdoFTn9hYwz1hGZ3NBaWvs8KuG",
  "key29": "23ooGAAZUV6qTKQQ5SAB8k4j4yxQARgqR5hfq8iw6fBhN69sqFA6YzE9ezG4YEupzURpujr2Ni75fWP4tjiy64MY",
  "key30": "37NzN8VCSh4WG7Gt5Wt26byamSu8nCVGX5iGnuMh4asVXbXbqWDbxMq6qMPj8HF1Jf8QE7r5Fo22kaVPftGFMMi8",
  "key31": "rQhTUNopzHBSwEWot6vkX641sW4mrAzsVdpzgLnakeZkRrZk72AmNJ63dSN6M6eSrdTHfUTcxnKHiKFWoTUFT2x"
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
