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
    "2w9JCm3bz72MMj6YZbxL6sYkqDt22BCwgxpH1Epj5VZRktRizV5ue2U5AwukPNkHaoGys7kCSdcj1wkwXGAfTACt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rsYLf9bU6xw2Eibd3yG6YZstrRkYmbWJDaAfkpadgDimveVutAS8HvpZBxhXNQHd2F3QXWTfmYmfzhBSZTgnChD",
  "key1": "4rWTVVDsHo4b9xKS5uoGkt9CxjyVXqVvTf1eMUDHXp8AQCaxVcniiUQ2fxpWx3UYGoagKKQakfPp6braCprfi5eM",
  "key2": "2YhjRDhY44tocEffhgizpfB68vieS6YPLGv2rpLzZ5M6gcSv4TByJFZvC2UGLjMJvEqwVA5LGqJmKENPYJXaFTMZ",
  "key3": "4bEND5wfiswuTiuMLc4Xon4Xb1p6FB4x9NQdiUytGnrJygySVkxvarVMgwc3sPgvm2yLNd5SoNfztRpfRaFq6TUv",
  "key4": "5KT5XR4rEDdSuY2sUh2NdeQxwKjDix8DhH2ekCoNN8EBAnoJdyuHgN4a3f5KM2EeCY9GZFPg3SVjjc1s9tr8xLSi",
  "key5": "2BHnFM3BbG92uwuaX3etTq5BY3VVoR1WmFBXgHhq6MqzBEVZhyxZafVYeUWpTYm5kgsRxGxoYzdn3sydXLfdaqWh",
  "key6": "36bkwrVUdbdzmkfn2fpEiAjAzPjistgUUs959V8RMbArXmNyf85epT94nzHDkiCtXjcN6QD85zLnnA3BCXUJgpoo",
  "key7": "2n6WCqKvzGZbd4W35PN6tYN9nEie6HbN3r9PSYfUrtkzXb6gumafVZNxn5pgZi36w2XoZRdU8EzPZXGD9g5EScCU",
  "key8": "2Lw5Tcois4sDFPvNyK8qc4x5wz13aSEt69uj5APzMkE2at2wsLjKpneiU3FnB7CNPykKKvHCU1S3ptVKcTN7kXRW",
  "key9": "2HBhHMBJNsgQ5maYNpKZzb2eobijTmPYeGqGJvrFAVdaKScv5NwzmWwdtbp69GPLDCxUd8ZWVt2fWTbCu5RrtS4g",
  "key10": "5SH3iv3ku7MkrFUk9Yx47waUpM89MTbgJYSorehRg6n7THuPLaLW84edALxxKU1cYSr8pZKgoLePNxKxep5ZzTvC",
  "key11": "ng7fuzofPD4gsyRui1naLnUWLjfhq5vKMWRMdBvDrPepLiGvFPqtTVSrkX9vYRSiUHgS6jJzNFB2xZ1zudCQZ6r",
  "key12": "emUszWR1RLoxoiuGJUCLkhqWFb6EzvEizkZSi89nfBUQVgWchMxghiwYc4WDeSDM8UdDUSCrxxygjnQn6F5szW4",
  "key13": "33vobuj8CeZym5gp3hkVj5K7e61yV2qQc7B1wREyKHLZ6xAKpz2nkpzXjP6R1LCdrHMsk22A8LhnLZZ2DoWoQdP6",
  "key14": "2LNkPmRZPK7VnsyHMNmUttqxsvWebWh2W2VpYZi4o6EFtHu1UE9X8TpcfLqfsg7qCDoeGDTu5FPi8FwBFj9PYP1e",
  "key15": "y3Pyz3J3fBED8VAXS7UFtZjWMr3CxcTf1eZwFQeyLHibQcxw1Ns3ZqwB9GaWaFSxREbhayDDGiTyCLC6hYRVwaW",
  "key16": "39JVoh18YGrL5zrid3LJNEG57ris8fhrABNieKHzpBAg5vxVpuHGSqGTVaVpDLZqmbSwTuB8RKW2cnPoTM4H7v7m",
  "key17": "5ELdFmdDgHJrh2ZgvEQJbpUDi8yfH3DrXtoh7XY9Ut2ksF7ftxtgSKsnTisrB7BjocZCDAsTBjbXMyaJNP1LiTET",
  "key18": "39ePPFALCd5pm8vm49nnHmYSdfVFd6p7EZZWq1neZWLRAs9L6f48JnxptfFu9eKU6Tk8Z1TVF5paavbuUDc7ZdZu",
  "key19": "kB2wktzLp7GyL4SXMwE4GUnHxTb3iku2TAWgLbHPazNBvqxuQPZLHreDHqvAND3cwUeC2xvYcr1YNAmZmiyUpJc",
  "key20": "3AS8iMbgEFH1Di78Yej4bd3T8BRtS1ywM5yRAZBNk35AoQAoJ2rMDKj9aP5p5UmhPAWNpPrFPXMWqch1dCWKsTaz",
  "key21": "4jueLtHbz2ogrq52cQNtArSCMCitqpvnZ4s7QpjN7btZEhdiYU4xitakecf5aVv5yYZxqKmgUsPbHUUoRM7x33Q9",
  "key22": "5oUmSaCscNctfF1ibuXg8DnsLh8pk7q55rW6JhZn3dPD7ZgF84Xj3Dixf7eUptbVz8FhQd1ZBooj4U7VFxDpHPHc",
  "key23": "seTVnRHs5nNQqijVTe1weqNbhZsBgSde4JFVS3uDg45FTjM4Wbf5pFbG8fvZASAmzF4dbBEjsuTA1whFhxYpkrT",
  "key24": "4M9paT3rG4JUiBtc9EKRKfBwFvcNt1p48nZc1Y3qvAmF3dX4LT9HJfdb4Ydq3AGM38FMC16MNKbVWtND4NU5dsQY",
  "key25": "4nBa19NunEHd2ceMEwBd5MdHE6PHpmvu5cWsGtWP9tbkJMGrt8ByAyphcQJUudnSHHmCZC9qmLwnT9eqNCQG5tsF",
  "key26": "2UL8u4WVSi27mv9kPx7yRnCq6uTaMXgkUXKCMUiWnGGG1gaE2zE9ebJXj7spDxtYUZwFwZY8QwusR5kceqssb67U",
  "key27": "2VBxet4NbqoQ8W6TeUuHAhrn8CmoXdBtLwD3pCtu5ZzXedPT7uDAcprgkrmS69ub4Hd7Aw22kYGMSaHL2xZXU7cw",
  "key28": "29io4W9MAW73t89Z7iP587Kadr9mCJtnVdQX1QFcNEC3ZGZxJSh2efgji38M7NKXMNunr1eRirYDf2hRgMwGBL8e",
  "key29": "T5SL8L7rig5isiX12GkLsGV72t2wdzAXtzYBPymDHiPbyQCnxsHwj71crADhgqVY8V1YuRzCcdeqFwcUj5kmAGQ",
  "key30": "orqF97pGZ4AF1QL8Z2AWyWHxfWBPDvkRSTwTrpp1PcD61mtfo1eNPdBXjBumTGK2sQ1njaGAYG51anjFr86pxLb",
  "key31": "27XzDCkbXQKh3B1jxCiWUDoX7ghf3Jc8ptSLrpbxgggvbCsHjJFyg3mXyEAFcnXTrNv4boPYnT9p3Wx8tRLKuvyi",
  "key32": "3aRu8TDACCkYbLAKA8HSwHrczjvTRJdN5XK5ewbYs5oMM4gDvYaSC4CPhDYpXrSMHeAAfuBzcDxWa2tBqHcUnUoF",
  "key33": "59U5ND6hwCtk1CCo94c5iWRvaDMFVe1nnbmmBWLxAyHJ9E3ytHyxxVSwgZyJs6JkDx2wwefk13PhKMhYYdv7W8UE",
  "key34": "5q6UAFsQ15wbrgSPa1dgxbcNqvvyuEhJKzw2zpJKrMmSnhb6i24DZpiWVS2rSjn9qrWEEoJKzA6EK8t5bAZBorb9",
  "key35": "5nWRDNJkmkT4oaNnk8xy7jy4MUrYAVpEVDvK6L4Hb7bjxuCZYW6jB3y9KtgTk5VEwS1gTYxUwkhuHKvwRWoFo6XN",
  "key36": "2VSERyndWqPF7UJgpr3btdZjPnRQLFYBk3m13Tc63aBf9ZPc6hTy7Xmzx55TLW8qim3xYeVeEStpnkJHoYtnJHBT",
  "key37": "44VXxJaSimPUYUSvPLyDHJufnUowB2vX8uNnTMeaErTHCuWX5aB8KndcL5kuzHUZ3YfDpRLShGEvbWxVvYQX3Z85",
  "key38": "5SCFByQNYDUF6DzJqLedb6r7nhgoQNFArJaj3druutYuo1uoiua7yYLLqnERj6sgtSw3d2iZN3hCFwwTNRUMEJH8"
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
