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
    "3YKhj1uuwH8GU8Sg7nzbJjmZByK221tNf52xqvouqq5e3M7CePeFr5YLhbQu1YLGb36vw4tqa5yGo1sma3VNNtNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MbvzJi6Q21DtCgqNR5kbGLdmLdASxvZ83GhRKChKaaNpLcZnPAH25KXvjWS8528DVT4gXSTqctJqZHtrhy1wCGx",
  "key1": "2hdFk18Zy3nwhdiu62k5Y4KDf7oTFZ82EZeeFpQZWLFdLeJkmdmqMLjqBKGds8fKXSg2d3DLXAshQaB7LjGLYBdK",
  "key2": "2gfDte9dLo77FheyLLEtgYHwmDFERr2t7SRPLhh9YNkrNnTeD72xn8NSYXPqnp6K745hhYoRZSY72qmnRoafqPBF",
  "key3": "5khKaFE4ULQjcQRzYn2GaMgvxWNdawFFVRQwyGQKYCZuaL2KyEPgLQJnu6wtpsZCLAt2sGPf9FADpSoX8F3WDJfp",
  "key4": "5q47foJLBLHvFQex4Rpzd24xuCeFDphuMKAZDKR9XuiEUEANXqQE2fmTn6qvvBWeE8DGTXgK5xPSryLdYGNpTgXD",
  "key5": "TuwMK97e483ubRwQGyZbWmpFqQXCAJoRFxkuqCUUgyiPPm66GfGFcyvsDcBAZFmdJSDh1P4tkCtBj5DxddFBBmC",
  "key6": "5uup1EH8jHTtpp2rR9hEymjLWaWXkGaUK79haQFQveBzjedwaao6K21g2rNamEmQB8Q7d6M7HdqUDsyFtwdqFi1h",
  "key7": "2rKBb4tkET3ouGbip7tWJkYZ4C3qgjUS4Sr46fhny31XUwHXWHemDqerVHwD7sZ2AnEfpgdtcR4ZDRuLZgBYwuGW",
  "key8": "A6wVjjATDCsFdrZy7HwWbuHZS5cktN1y6PSWTkN7hSoiNouyhEhjj4bsqrMuU7TkErESMycRpXKRgTf8mXUX6MB",
  "key9": "39poUd5snx3dWiagjLjZq839PJdw2t3ujTKSgzuiqZezxFT6wVbSw5kpnNMxdc64Jb4eEe8XCStpzNPWzb4cAo9Q",
  "key10": "4fhsEz15FYWDHDa9HPdGtr9fj7gSgj3LxKjrRkJz9J279GLEajiLeLrnzvExUXeXj766j7owEVkrfeGeFwKbhwAV",
  "key11": "66bsAPHFTVLUHEWr6xYb1X4hhT7ikbVwK91ZsQ96Db7xCx5HAU85r1PkohRYNxorTvyBjJ63cKYkx4CmZdkpTXSh",
  "key12": "J44eTJ2AYp6imW6xcF8yxr4FP9PD5av6KAZJZrvQT4X6gdRFUdmNprViJCzcVXzxvfoQygHcZvF3p1gQBSk6DW8",
  "key13": "5ysqEXNxDUdS9MAftWa1tup8hESRY6FG5SyMUnYuTopEG74j7mUBysVWi2Af3V68HyWCS8ibCSfmTGLHSxJxtmiT",
  "key14": "3yPeDNLW7iXMbyg1Lsv6Z2nahd5WzxbTsNrBbJ6dFUQGfxYwEGpruxeCxtQvVvTtE1M6CtHAFsqGTzPevKFyqABo",
  "key15": "3cmfrRrTJMg8ewgZnj2exCWPUpZciUmhNUqnQAkzY5vELyz7J86Fn4p7nNgRxDMjMADxL1q8W1gg6dhhrAAcVMkh",
  "key16": "2HehUm49m8VnFpYhXW3gNNAtG8gEtkjjWgh5WVbyaXAtpFD63uVCcXqWHQzpShymMGyumccKhjXEBgVGQSH93N7h",
  "key17": "3KUuDG3QQPoChYGqb765Kjndq9CVCZZbjTwxGv7Cr5qD3Cy1uDuBhThWGNCBKsmnNL2JGeU3KULBC9njnCpZGX9r",
  "key18": "4BQnY3uNdLgdQBrePQiGnwba3EX1ruhpAC2wgGqUDYDT2NE8kgsSsgqHSB7XDpjh7w7JEYg32pHNWiutbDFBVCZf",
  "key19": "5sUbCnYLeqstc8BW8qJJqMks338WWMFVZFmvFa49q6zw87CS2Xi9eHG1yAhgrBeKByP4r9p4Tqq685y9SrEfWHYt",
  "key20": "abkvAjtx26heoxPSq1B6zNYVmm6amRMfaMBX62ZKuLgBuVmgDCExpx7wxdS5ewFHMiuXNf7NgffLdXAhPNZVH4W",
  "key21": "4h6V3X15C3ntQ29abRsJkmbp9UrcstVK3YBtCVyjBqgPudgWNnQSKAdm3b1WtruJMeXQ6wEr8DK9Gzu6FzD4xrgC",
  "key22": "4SJ5Pd7VVi9rxRXGqhnq8F1U7oTi1D38P1EKk5easrZiX5HSmahyGxyJN9TGAgkkKQoB5A9T1spHEWX6ZEZ5oZHX",
  "key23": "3ch8NJusFzr9EPn6JxcJqHpnEZzUyeXGyyYVNds6H1T3LNsQ7MGGZQCnMimrwAgrq9vec5wFrQaEqST28QYYjofH",
  "key24": "BiY9bMaSoc2Cd3syFALFGmZTonVuooZXU48KsRe4GnPUoh7VGXeEHgGVzwaAqRPhtKSg22Uxfa3hsDmsgoYZieH",
  "key25": "3RGQv9jj3jhQ9bkLQuv4dancyzFbgsmzeL1rqzmvdCA3Tt8K9hTTzBjhLHQH1981zP4QJSigZUeCsHfbCUCm3GvD",
  "key26": "3JnHn9Cr3KYDVpnpWhGTchzjbPQGeq87ZnCawCoJrn8U5uK3kSLMhp1p1s5tYX3qcmqQ8FxUcPD1bUnmiaN7k2JC",
  "key27": "gQF6FkgBjidFYvf5CnN2jVZEUG2sEs6knSUAgmRy461EgGV6Xt2e3884CNu2pTDSLVyNgpEFR5G2jsCwCUPMCmp",
  "key28": "eLhvcH5b1bCPZJLNizfBnZFUWx4anUeEnBnefYVLR6amB6Cpq9u3z3MpqsZm8mar5BsHKYF1bgCcscc7S9Ftxfs",
  "key29": "2xXmmQ5KHnoDdPAWBUsSfTgwd3AfmN4qgMpcbpfRrXc5Khug9KvyKuesdfzUqcGXhjYRhunhVdL4fmDEZiJpfd2p",
  "key30": "2FecNjugHKksF6ZafJZAsU2HJjm49CvpZAxg35UHJaR3uEkqKtYbcwD9Pc277b1trZWEtV3qJWECPSZoxnZdzPYN",
  "key31": "5BJ9nv8kvDHWXcZ4pfgVvNEyxYpMsWZpqPmXHCv4YC8LtBaM4u7Ztm4LRVm93eYux8AcGao3fkF9bkyVUq6RqxbS",
  "key32": "3J2r6HvVeBgmT3uf1ohZ4R3XvonhFdMms681usSE65Wc4okgpXScMMPwhad5dZqGbSBfeKaTd8xwCfsGnxXjnuPx",
  "key33": "gFS4kZYegmYbkYwigxv4jcMMVXSTWwtV7D7QErUVBm6gi1bnBKPidCgQXsPEFQAXHzkNi7fpRR997GpK7ZxJ5wa",
  "key34": "4CY2duYg5orWtmvVK56QkfC876Q4H187y3GunyqFzwdBQSJT1Lf9GkomkCiZNDQjmBzz2L2dhTJNkz7eBz6Ew8ib",
  "key35": "smyu5RLB1cuHc2eid6jLUPiqx9nmWjgpk8FsY1Ad9MJdfzr1ZWJVjgVSyUE3U3FFqJWvj6v9tseQ5UVAzDmYfZv",
  "key36": "3J8BTmzyrzFmCYsWqQ1uQJZzsScbWDryLwzEhtCjVD4EzZqTkCeeZVwkPyrEmxC8Xs6bKxnyHEVALQjc27zyyNng",
  "key37": "2c57nuyVYSga73cpkkHmvX9EcoGLaKRqBoRgFxUSGfCZAmU4mva4ysynNoXWjCJz7sqjtGbTPibhBsJKK41DHt79",
  "key38": "eSLVgtHST2HnEczqGwVWzFfk6DNcaP5hEoFFF6QVrfxrBgoLt3fL6nBwQ1W3CNCPo7cwzHRxv33HNyDF9ADBNoR",
  "key39": "unmfmNsUy7GCNsnuxWBem1vymicjPgCR85RbG822JJg3XiD3X1tCu3XwLszdWyXdudSZsxLgRT63FtRem1K1j4m",
  "key40": "5SuF3CnzA22Mhmamid3Xa4uvNQpLnB4dSVN7dhYZvuakcostWUbELcEvAUbYoMQiqNb1PHp7HU8mnoWVXw5tJhRV",
  "key41": "2nGLXoK56jKk87nNjjNDeAzx18bbrvUeGvSaGpJnnB2fBA2DviqWrekhzbN8Ssk7EuTdthSXKmDZJxQkcvYtccwK",
  "key42": "3au2byW2yxh2Vaj5khf3eqLUZGhLTfEArYhg91E3v8DMLyeBCE9ksqzb4E231dz6akucNCkGckhuCso8u5JZ874J",
  "key43": "5GUiwt5aod9ZdUiNSo3c8vZyvNEkHhyrT43gQvnfySVnBsFkxWPTQyHFEuwTwHSodZtStAKm5cEExgjXbgoHG2UR",
  "key44": "342bvF7m2ybD1bnSMY2xavtrmFgSJT54eiN7WER8S86yZMVxNZPLgxgThtzc61xLa9z2hoM4yC6SrLUP5JWf1mHt"
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
