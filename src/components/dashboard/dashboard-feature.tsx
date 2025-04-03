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
    "3tdHEt8Vtg1fWd8LP2NtSoTPr3cbWg9mbBhsNJZ2Ni4kVNkszte6M2RzeayTS3xkf7Vzk5w5yUkPJuxFhqEuTsHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23fR1jhLmL4ox9w6TUeepxsCtA48M4zTSf5L9AY76tzAMhrBfpJSjnNLFKDtPCPXvgtfQAZkvWc4aN1kGV6yZtiK",
  "key1": "3Cjf33z6L4vvpBgohvJRPdxAZJm8FTn5StwhrVxNfd9Y8ZNuaMmuBjNv3Z811Gs6jtnBwvG3CebwPbW9tPYzL3Nb",
  "key2": "2mLypQ5TBvG98CXY3iJ5RReRjUzajbkHxNvEbCPjubxxegrfHHWzgHBruev4HEvzrpovqTvs1NhSKiXSsMue3HGx",
  "key3": "3SFGCWdvy8L8SAaCfXWdLsAfZH18TYR8PKJWSm4Yxio4a1NBNHMkgQjKTUqDDfUJ1ptefg2uLxyhSDZUnp7f9Kev",
  "key4": "3eM8U5iaZWGmxdBngW5V2FLXxbWshAyR3YuXTiz4yW3p9KafwFi1RtHxQAPhK2HePp6FpNeQBGMq7J6DPdSC6LA9",
  "key5": "3FKA2gdT1tkQkRdojpP21T8LijkjvsiZ1gNLJ8JXJSMBKNfzqpAL4XJkBFmyxwhjXkNiSbhPJQDMLzHXvHXKYm9y",
  "key6": "2xFRAaxqpkwJhkTcvtahZkxBKvtFw5p15joYBarCq8h6FfTfZMXbofcTt5NVjmBMYXyneZgYf8DF82hiLEYcfKHj",
  "key7": "5GgAhtbZADtpxJqfwK2URHy8syYQJDS9GdYZ9QDJhMvXUFDtw18MWCCUwZFjNgMFnmxaxSx4yb4D9EqszWtx5bXG",
  "key8": "5kJqGJY8gUmJsqhBkDLgLYHWwCNQv31AX1PXiXNsQs6Ffn6FikdbX4U25QPFd3mUWZZL9BX3dMocNPxGpxzmLu7T",
  "key9": "62cYRu9MVkYy9c8a9vGTyXdBFvoGjziW3aXaoJTYGihsAAFYKkePaNqGxSrg9Au4A3ACdtob1o7E5Jef28CRKghF",
  "key10": "41VHyJ5f7MCq382iYXbeSmKe1T8UtDfsJbpEbZRUJCVzJvZasej6Ero44zQEJE8is74LUvvArm43xA2dt9iUHujf",
  "key11": "2mHpwVnX4fPDsQsMQv9y8xpo3CWT9WaGXRHnLpKuXZnPkhfy9RYqnntF9XSVKqTsxUCs1KM3y3uyBBPobqtDe3ni",
  "key12": "54o4dj5tYFDazesSq79xS6pq1YvL4NtjXVps1iwFJYXKMBuDi3Mh9rkb2H7nTFta222rPRojYkwLAwQYuboe2Gcc",
  "key13": "ZUKfHupAxDyZsh7FSTsds8C8xUxgjn6xAaT12G6txJACrKFGP6PR5RrEnFMCdgkYxo9xPJWsQDQdtjLZJ8M3KLq",
  "key14": "5qSyBhEUNi2F4BzCx8VuWpYR4x9DbMDe7YQKqnQD1mHDBz5XFzCPMCCPncNRGqjj92WFRYWWNZV15N42dQKPRhTY",
  "key15": "2UHhiXBBmXtwzSuuQ3m7z3TEKW3xLmq3ya5aVRSt8M3WcjceEGfYcNvh83BntVaXZALdGCQmSYfWR96dmJ4epXou",
  "key16": "4ca8eRTLbPv4mDgtrqqFPwLgpgz3dadAsnx3wS5QhXG4Dk4EayRaU3z8aBsrKZ6doMpDzVwAYtw1XwUjS7SMVASH",
  "key17": "3G4JwYcCFz2SsunBr8Fpf4SCVi9R5i9oz6eSes2L9B9X795EeMH6AuL2922vYUTrcbUkXWr84aTN6FmThsdxPkTo",
  "key18": "2VKJRssipLZ6RmXGRqrXgnz7bV4PfMmMFgq593XMR7JNReMT3hKXKwzc3n9jPi7XVkbfbqSRcy4X14wMzRarvQ93",
  "key19": "AAp9eEaPdTYxpZpXoBCvgsjxTi7CXdxG5gmYA3J2gasXmXrcBNsGGm88ZX7J3p1U4Kajpdg82Px33Sx1bn69zUp",
  "key20": "5tjfMnizVXXWVcG2vYfzb9btPMNyusn9zR4pj9wWJsmfkNo3SaTEy7meB3qMtk11qJGuD7SxDbQ2zmPcpiHzx6qq",
  "key21": "gGgcwUbr5sjnPiatzqn8HsygJn5Cm3QMRxppFj8J7LoAYSNfFtNGqv4SDJ5ddw2uaCXMVPr9BiU5JXcLY3bjUJX",
  "key22": "2XWY4rCJqmeksrTNFWPciMeTxWWVViUwkizS1MVXr2KuKtaRdydyC5yoHWGrdSqcnrM9oV4kzgGAym1ZVBj9zYxW",
  "key23": "3NBr8QCYkPYvfZm2o6iPCASKVeKqHFN2Xdgx1nCaGWoyHNoeSPzMhkBmbthL6awS4zgV17uD5cvf6Gio23wE6d1M",
  "key24": "e8zRideRHSFHZw5TNJx8biLpw4zNEHsqSn6wrBPeSoZTxYMFQC8jgLJ2SGua8BkeFxGY9yDbYJR8odH7P5KWtUp",
  "key25": "3WFAARdVBoUkvJmHAW9NrRajBa4S6W4Czdmoe6mNDZwMDrhe52Sp23rg3q9pmnykaYccvYxNhJyABDz5nk2wBP12",
  "key26": "5tJANPcgiemezTZ8mCjvqQjmxohYucAbmD9WaJxWVPas7qQsGMsLLC7fTgyoTQ2gyaAbGu8iAEgYJMgdasBkxFbi",
  "key27": "4GqwXWpASAqiPQKyzXxNq2TyVwSBok8xTWGRyKT5a3b5fzx5Rqz7DToTcyFW5NcPz8dUD7T5i5a5Rnn7aJuNTnuy",
  "key28": "2atPz9ks8ERnSHC1qwXujQvhCUQ9fYbKEokzqVxbTuBiPRwLG9TSPySrABLsVge4vnHfDCg3sCnDViCayZ5igyA2",
  "key29": "3XbVkr47dqdBVerjnUHksqZTADTvFWdfb5WEtK3QaGv7xY8Aq7F9qy5hggNyPLCBynZwTYRVkRyRYjNMsepJPNgG",
  "key30": "3dythXYqi8PgaaZNhBffxhYECdYdC2GXnCZCAok1e4U3aXtGZSuPVq1V9RcRt8qJfK9GaDfRb5uEvAjQzWwa655Z"
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
