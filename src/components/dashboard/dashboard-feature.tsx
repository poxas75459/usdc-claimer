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
    "5VU8g2Tswu54vwxLgZUjPYFHzfWCfjq1GRC51o9hkSuqfv5tHdmN3ENtQFQa8UQiDxD6mZgJjvDftcqzs86XEGPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wANaRYFmo6aNpLoXife3A9pdm4zeHceCcuxbAyeXapvtRS5ANiwvdUr5cmjuYG9JegVYDXbryHVEfiyrGSUUX32",
  "key1": "64bikZUPUsgJNt5uqPEEPJyZC8tqmR2DzCd7En6A3ZCQTLVZas9LhBEFJedfuAy9CMbvAqeU96GAXqwSNVD3WiGR",
  "key2": "4YLMdPnkca5B4Js7Jd2kooRqDdRcGAvr5hCNQUCGy63ZYDsGUYNdpQGM7kZ15hTAm6uAi8EdRFjp8Ws8q3mfiF3v",
  "key3": "2xZCrzwBSNfNSkR2KFTZ9hRVCN7wX76WSFapWhS5ZGvUCeCch3jHi3hN1dEArYC3kMd2G8NFVxZHMAz44zen5bjc",
  "key4": "4vikcLQofLGecJvQ8YdPpAN6RgDbdwN4B2xZxDzF3Ykw58zmpXwd4zFWiN8SwXJinjkxvinGxxr6Nt8Xo34BqsHu",
  "key5": "XaCZ44wn6a9mmDTwT4cVDYRhJp9hikib859JBTnZFmfggu559HSPp82si8qNEUTubBoDSDh3nDdz8fxxarBGU8o",
  "key6": "3aMg2dx7metoPQGyL5Ztau5cTx4DwanaPZ6fPWMV5BgzS6hjoF9uLegCzfhSkP6A7wpiXwH7Do9LMmRowyJQJt4g",
  "key7": "2GuRWEndYo3voUoT3kpiYf43JVtorU6tdHW5Rf5hB2pSVvrPGmZh5hx1xVfEQohab2pYAyxP3MvNQtB2ozTQVTag",
  "key8": "28VzyfnMnfhx3TsJZtEtXESR2ctqhWFs6oDZdFYKdFbYwJ7BrjECPPfm7v8HUu1krfrA9uMsqf3ho2RS8W5hJGcB",
  "key9": "2B1MV9P1cjsyCYRNR8G2ToeM2oggXBzKAqPyVfQhKT7qYbhiqvJi19PcqgBMUMXuK6LQtNqb2KQFViZfbkUPNDGQ",
  "key10": "2G4A1PoV773rqhzYSt58ZYx1ArLY4EmXJEVU8jnGB569coXBai6FJb2zQPJS84svnAxXEqgHEM2ijnsskxdccbkB",
  "key11": "4KMDw9EcLsgW5eZhxGxCe4EPKf7z2jU6RwEVPa75vXmXrjJB1xQPnRbZcxtq5ZVzQ4k3YBfPQecYerYDg8KEDZuC",
  "key12": "3FQQq8zf42VhMGhdihGebrt5dJ2fftsjwz6MvbAPgrrsHNcbNeqnsFKMT8kT3nLZYDPE6wydxLXqiHGrFnogFF7x",
  "key13": "52MJ4FezPBt4JDEGiBQHUgKvPacDfkAZFCbR51uu2DvHXMnafztyw78sU25FQ9tncMC5C4Jh22fQtPcQU1t25yn2",
  "key14": "5ZKvVFcFxzBZv6hJBY2y3J5nXDncD5CoFL2fvkS6yWCPjkMLu4rk9AjhouZsYkVWrU3N5pHetVeapxiZER8jACtr",
  "key15": "4thVKhdiFnhERWhd5hroavpSXWdVdyay46bGAYXY638KNgGuFYMXzf9rGVpXE9oD6Ank5c21N1tE6jH98REReDWF",
  "key16": "65wb25bckMbu2wWUCL9c73keYWdAX67hTnkfmFj9iRdogNcGtg2cqubdWSy6DrRqVbjQgJntnB3ZkLnYU2eVMYuQ",
  "key17": "4dVWGB8XuSTEpqWGKt3m3TsrpfoMPoBr3RcdhPrHHzTvDqKimvBPDk9UUMMb198mjPsStCJjB6B7cf9yPdBQ49Mc",
  "key18": "3nPTb7kwCL99UxM7Dub2JNTc1nCmUpvoq7ZWgkSjVvEjyUXwn536hP6fyNyaSY6JzGXjvZsd4NVoF8JpBYdJprP8",
  "key19": "LiFkdEeLk6ArmCBp7VsXLp3Pb27kqwW8SM7CEJyYJpX1pnjdC6Ha7EPNGCNjPg4C7ireLLnmwRXnk4ruVbkUJcd",
  "key20": "5Utpdj5zzqWNJjeXBi9NQQpqWJSUWRruqYjqmexvS2i8ZCh2LETEq417vZrfmmeVuLfnvfjjThSsdUyKdoCVeJWf",
  "key21": "4KmxUA4MHAv1s4Vg9z5myB9nLK4qy7Y86b66JV8M7hHLV55Pgfs7KqsEf1fz7SWF2oAtK1sbnSjikKRxHuRb6mMJ",
  "key22": "4CMjrxNiUxiXbuRfZbxdLwx2FLEabaBDsJT7fHbnHwoWU3NRe9vxvXa9bDQASnnJg6AWFrtYMBHU2g97CAZBU49S",
  "key23": "4zwSEsjsbd8hgpGj6GpsrUxfDMq5EHuuiVPPUv2czHTCs3ZFsZWWyY9cABkHGg2QULATQpSnNuC8Nfq3WMqy5afa",
  "key24": "4RfQMfCq4qyY4whMJmjjorgQgrizn492tHi7evEDd72gURUdmi7E2vf2oMhm8ky44Wuph7izhZqDaYFm6YYdpLie",
  "key25": "5j5X6PGZ7dGNyDtQ7U5YN9fNeA1x9sRyJSEEgDxRa2chErLC8o9kXWvzGATsZsiVyjXwdJs9yCznXoWLG7B89u2Z",
  "key26": "pKpd4kuYpjRSSiKpAdrwYtmy4hZGovx5CdLNjpSJ48jwKs7gqZ3vVepn7thmCqgzSE4ra2ibCZk8Z3X7evKUdyY",
  "key27": "4BLTdBqbjeoH1JPFpSD4aCAyvQaJb8hH3VSQdDFg8dkciB9fypJE2ghgwUr3BK1KpPbKFJ8ZPeM79c1L4xzS14Er",
  "key28": "4SakNgGWmcc49qopUchk9CjTCUHMNsw1MxhBgzp8GxcJmtchBDaLh3FoYzacEL1pomV4L9NJHc6Akfrk8rn7ask2",
  "key29": "3sZzpUmiRuCPjKQVJoJoebAGVY3FFMv1dbtqpYAk5LBrxMpQfEq6Hg1VC13sgZEGhEeaZRibZcG4tG3NeeETCaBe",
  "key30": "WhVBz2SSK1AEwiSBtYRsnkrUy2UzGLYRiLPAUwD3NRL73q4Nqd1e2bTehk3UDFSwG4RyDHRMscmdhsYBp7fpFo3",
  "key31": "3v1qjT87pKyhF3y16iLXTjXNGprJHeVtu3eYFfuAZKQrK2hRMkmNxs7RvgZuoKcAudQBy5a9rZNwpyLHnQbUZe5D",
  "key32": "3exWYeMykf6RdeRzf4fcqioSj7g2xhmLSMbBLgnwovC982KeNeMFU5r3ULf1FxiEMpqM8xK3a1Lb3ypjgQbysGb9",
  "key33": "3HJ7sqXBYMUuYY41XX4AFX9RoGoqm89ydyScGiwb2kALrYMxaSxxvwqK5VoRdM7HVZ6ZnNN4qMMhK8wMHSnbcNNQ",
  "key34": "66ENWrr9RJfxqfZgZdEpnzrLdN8GPz68TVmZTMvCA7fkk3mNFGV37Juruq2RA49WfigUeGnyxrybjbdGrH8Qrg3B",
  "key35": "4T84DXuq35SPCsavzwP63nJwXhqiULmnLXJ3Fgz7xRBcez137u8BvmTx5wRW29RnXN8uRPfY3hNVmCPvhhyjEiUe",
  "key36": "4KXMY6C9voiqrpPwczvtSVqXjbUD2i8BvjGnCGQx2wWd4UXsiPvDbA5hJRRyYHoajyrZD5is493pgHBWcTiQhNDJ",
  "key37": "3e9RbRXb7VU45g84TLe5649jyPXmFGmgaLWJWhGdPtGnAnEapgEX8gRZgWLzMK9QvCYoYxBS1DiBVyqoVT6JULm6",
  "key38": "3ts9EK16LhpGwh73wuf1WWgBTXUkTePbR5VZr669dGZbNKgZ74M2UyZo2NLiL6taZ5SE6JYrokL3QEH3j57mFrUV",
  "key39": "3HLNdjT5C6Mjy1Y2x8QKkvkQazsjxpK7sLYqspySo3p63BxXcRDWAqNHPf4TtJx6aBQLPeMXBCPjKwmK41djpQY5",
  "key40": "2MJB3uuHGbwL2K1xX2jVnXYTaNoFdkpQprYdKkoenZisMPajELpUziHbD6QeXdKRmoAgANzUjYp7NLofAbwRwGid",
  "key41": "39EKgvvTwHaJNz4WQ8KgPqzLvfwg7GdJ5UZLKjEYvM6vmGm57DscU8RknzLMPBQpf72qvKRDZc6uC2jQze1dPHJn"
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
