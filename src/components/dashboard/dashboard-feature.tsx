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
    "5WrmxhGHEqaZRMUxWhw1NeunyRf9Ex6ypV2dtya4wBLDHaKDir5QYSyTqc5xo4PfnPg6iV4DqHjx65YjVtLVe65u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJqXPKfJFK38iCpVWaW6a8tvf5eGNNgEWdzSBVnxQ1emAWLbjzEdEzPitZtK9C2rZsM8x6oEKxFoubpLzXtWDYu",
  "key1": "52W7rS7xp6amAvgwxpvqYuZTG8Cz7RcBpi1h9n4coCB6wEuqac8nLfawYyW1uYEPpdw5Ky88YQNPfJGxRnLwt51g",
  "key2": "2RbC3fm766YEMGs3BPisBYAuXiFsRQnCiyLyMwffXdHx4xMbRTtbFQwgWrgDMzLKYgUGCtdvNKQeG1iJzgwPqWZV",
  "key3": "4Q3Ldw6UaVRz7cjtjQmjVEfdqExF6qy7vKEezbZnbxckQdcPr9qwPRPMw3TuaWDHRvjMwxzYFPmH9KLKBAbmkWiZ",
  "key4": "41inmT2YPXFbB4kDiDB1rMZKfo3Gxrq9M61eqioVBTLW63kukPzCQAzGXpqAUhYpyVU3YP4XTMiaLrQcrA4vqJu1",
  "key5": "5MLTYEqMn6v8Wzuo8F831rCx1FQPjVHkNmsGDKFnMSGpB7HFso9rm4DKmrdnttV7yk6bMnRaaBAuqC1WJGfXY44h",
  "key6": "44UQchzKnXpcCzfZUjGQ2sYF9BkRuNoqZadktuPMmx86b61edsQ53rdeLC86mVBkj5ooebgjCEmx6HRLqPTiKebV",
  "key7": "FmGbNfnM5ZUgy4bUN9wTkeP8p9BuT4PTQmYBhgkNKftLHEysmAshMDZYtsCpm6vKCnFB5fnD5WrJ49MS4bGxcUk",
  "key8": "291NDb74MRpWsStjdcDRdeFAaseyGa7hGdqmcouAabhRFfY2xsVfxxZ1zivwNztDnZvPYWyrKcouRuXPbdZGRppT",
  "key9": "4EAFUKFSBGUyVuzx7RWz6K6kwknJ3wqB4svRbaKeDw2hmVMMNGzF3uYmSA43ZuGV9ri8kL6BtYP8gH97RtrnSZwG",
  "key10": "4FdSw3rKjMHmDxZaW26RhQMCpaUbmio1RzMHwJQngvw1C5FyTTnveT6X2U7sWDXNEowksfC4u6NUdSy5gHPLhRqw",
  "key11": "2v1qwHk1aj5sPLxCvFAMn1Bhun886Nuvbncf7zwgMgDrji9iKZDCgDMKWF3fjtG1mXpbCYgTQKEuYCuciZHoXCQh",
  "key12": "5o3ZQqEayZ24CjzddkqdPHQXftkWhNinghtKrmtPxN8gAwX7gTzMxNjxFFvzrpyeq2N6dVzZJfyLWMokR1fvV3UW",
  "key13": "2YMZiWbXX1v23wj6bF1pjXu9sqUsveD6dvjhVeNz9N532TerAiZMycCWXWeJw6BtYJ1oEwbjkPmXBJqe6DN8QBe",
  "key14": "WWyW6aASvpJk5r9RTNez9BHwPHqomnqe1JJVo8zUQWXKPsKXi2ytRT6zZP6KJVrRrRxRi31jdQE2L2F8GBxqgnd",
  "key15": "3EcJ72cs3LqHVGy2BZ83iVhAE6zYnaM1LcnYKEXF2zc825yFBb9tJ8FoUL9nAJpGNUhsQnNpxDnhwYRFAncnavep",
  "key16": "3d5gbdQjcioyiP8UgJ5qhqJe48x5tgXtPhJ2dJnytCmATc6H892YkHi4BnXqUx566sWUcrPrbDYqoC8NNNz7yP9b",
  "key17": "3ySwfJVc3zXmzh4h1E4rVBf2qC8sBtRWE2VumbcawfzRnd12VavvNSpAdFRfi583ieVgjVp8J8oHvVNVDPKhZ22n",
  "key18": "2dPDbd7fngZyDkUb7a8RGwCMt9UtvLFinYZ5Qm6Hgthw2ZejFc23A15o6KhsSUxS4heX4AGU7F5RZVKceh7uMxch",
  "key19": "5bLCN7FHhhEGDk5KDhQnDNFnhbbu1HmswFVW7VNd5efKKPSxQiJFBg44ArqgMc4eUdgNu6B5cTSyohFstZr8uuYe",
  "key20": "5JeVv77bH6kcYLwRjeyTSb9JcFqTUyceX9KZEZSDqQqX1pz9Mj1s3eYVLqisLcsdrfLi1VoixKoSFWaJbkoDi2Bt",
  "key21": "45oMBsAhF8PQUyLKkbAa4hMgoUwPAfxFj9dSrJkRQ7GMPpn2oiCF6miatWzReUSmBkTAFPEKFYeBMnyJmMvCG21W",
  "key22": "2vU4VgxJUZWDPwdPK1JK6LgMLfM7aBqiKzja3qnfBPd5SNMeDjKRrH2heAmL8gvcaVVCJBTTQGDLZ7Fgfj4sw91a",
  "key23": "4WrFMwNcc6x7sTSnMSPiQ6bhqKH5qWvVBLfBP1w5oG4RGZQWNCnuB72FNNF932DUh6eeyVMnAVSdDAKEn1BnwHFT",
  "key24": "SLTa59Zi24WDkGKpi7bALK5LnG3HZqgu16FAPVgVfBGY4xXzVXyj8wQucmzjKBo7H91ccwbf1Brc7Xshj5DQApH",
  "key25": "3aJ4YRUqyU4vGSzNXwhfgu89bWdgPsD9ycnUAj7dVjsvse7DAKe1xSvCuPkTaaLYN8ADV5cjtFGmiaohA3rZkzVu",
  "key26": "4bRhnPbp5o4pJixKN1ht9F6dNbf995q8cFJgZWu3gz9aZFTSetPvgbUKma7ryPqRj1PSezTALEzUvp4uhzggY5Sk",
  "key27": "5Z4YTFwdzn3SAuG76EgVT82EfLVRr1mXYndn6GfEBZRDANKaFNrMs8gFxKKwgqVsPG4NrUwB4u7TfoSSUGiVrpRg",
  "key28": "2bMwAJGkdAjgaCndkkQAxGFk8QGZ4gEuwJyPkaYrv37Lk9gtHPcArULPu4K2RLNqWKA77Agqe3fMphy6roBGUF1Q",
  "key29": "49r8xhTBB2YtAAz98a3zSyLWVLqvcrsariEnqCG6KUqRAvJfpiW36GLSJXqSXeyB3S2rPSxEd9qkW2JPV8T7tKu6",
  "key30": "4DDtbQ72zkd2qyAygWEpmiGomHcXEKTNKigsF1vp5jNMb1hXjSTg9y3HxbdpbPAyZyovV9wZSqZdUZfu2i3R7gUd",
  "key31": "2ZupBc8qfsL27j6xU82tA5mVWNaWyu3kS8YxgnDRpwsyuBN8X7TPdXZjBHFt5a4gSxpNbrxx5grCMQnq9iR4dJj7"
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
