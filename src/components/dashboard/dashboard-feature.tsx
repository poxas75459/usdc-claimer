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
    "22eP6L2hEE8Bp5DiTjDwa1UVeTp9tog3q4oAGQA9nPY2egkX3HYDf7tuAzmUoK2R17N1SGNCWAzNmLqCd9LCTgPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ef62iRxRyyX5dcSV7hmooDdrWEDrK3reF1C6PYgJLQjT23c9bw1XRfo5oC6QuYMonhfqeK8ugADJwtPnZc7jdXT",
  "key1": "2v9LpPaL9Uz5KgdxtdP82WPTLPo9FTMb4JB9SD6QeBwj5aqhis82QxSNaqeLwWUmRv1G5GH7ZYXath8d6n4etTQF",
  "key2": "49Zw9Md8HMhxLWisKp8DdemgvbxyZipVecimzyBZ5kUADfYUnvgxnaJ6soY14uRa1ThnzMFdS4neJXYY8HMtJB2n",
  "key3": "362bVBDpKGc7aZDvnV4DLBC7gzKuwDWqwFjzEL2V2fch6bvyimQJYzrZhdin5iNjhtv65AMN91Y3Je1nKLziRR4B",
  "key4": "2tSPqF5BsTcdHTkJjnxP4hEJ1i99wbwX6M8zFCfPMcKZ8WQjRvdQm4PHyJdTrj2EzRSwRueyeEvgXgEcqekP7bsF",
  "key5": "4jmHPfozjUN7xP8twhz3V762YrwuE1E2FPCxz2UdkiVmQfBji3QXdgCwQmCF9LKaqw4rZQxK3SupJa526k5jvyns",
  "key6": "2FrW28QFGUBXssRmVkJAbntFpNjmzRj332kaqS5BpsBqnXcxwxyxbkounk4YiiYEq11VKpt1BezwaGPmd6ht2H3o",
  "key7": "2nUmJKCQDgeBaeosueMtFJPoohvr7GdW2fgmUm4gxHugFpCa2Lf4tq9zXS7HRg5eJvetrnpMYirsxkhCxHxUdUtf",
  "key8": "51gpzTqTRGMLUCTbwzPR7x2kVsy7KKaA4sa8vnjaufYGJ75QL7nReXM9DZwzWvLYnmsJzkuggyXNkRiTkv7gvLnZ",
  "key9": "5cmz6rUj53SynQWGaqb1JjoQ2PjPJNN77aYePDdSUXukDASbuw65qfU6rthGJL7ZtNaEX6Ge9Bq2m2xePvayKz7D",
  "key10": "3y2BH8QTZUwUxbTw3xhtPumBvLQMaJotoowTTz49RL7NinGhRgY2RLFhkQ895xxxk8imGgpVfWvNTjHPWZpZNBeK",
  "key11": "3R4X2buTgmvjvk6KrKk6Abh4ZtX1kx8A2F87QrpBmkLEJaKGwGDus7x4wzAZu8XGdnrTev5gawKjmuvUpwJkj4Tz",
  "key12": "3YpkvG9HP4bykvnbaVeBewrQq9wLZSaGFFanVK4cD3FXbjkwxiv3pr3nFHjgcixRusY7DHds3cN9hq93kMBNoTw3",
  "key13": "zFBaFfi4CREkzFuKwFRa2WwttoFHF2MA4Nj8nxb51rW344CiCt2qXEHUmwEZNikpReNUaWCrLggaUCZ777GM7YJ",
  "key14": "3E88SYfAJsnSvH3qZ5zhT4yzcudC75yYXjcUXfoCG7QF1tGsj58nNHGV2Pa8kmn1Uh5sGzCrWdcEfGEPNEUmgkFj",
  "key15": "KK91BSjqUS5ExiDNYS8U1Q7khKgep88e156o1PjLKrxbGdHtGXxdeURLWbnena2jXTy5WKU7XCnT9D1XMtCyiR3",
  "key16": "2bkfJWsp8DxSthg8wabDga3nSqZgBN1dHCKCov4t1RWs7pjs3cBjmeTK83c6pS4mJe6UdnWWST1dXD3iEB79cjBM",
  "key17": "31f4iTPwFvnveQAjzKnUZyZYFUTaienr2SLSoJ9WAoLJnH1o5TTkJ2Rms2Vho6oGUa7gfAGbDede7ptRKH4Voybg",
  "key18": "3zYuWhwPJkNJi3jSVU41ajVe569QB7M8PAgFyqM1uxR9sd2dSaKi7uqMaTdrVAAGU7CN7KF4tMCSHoeip66DDASb",
  "key19": "2BfRSpL8oaEdBDanM26RuQVU4qNhUNcszFWXCKni8NpAh9TdYpzDU2wM6QQZ2vUc31UbE62ubm2MsQFxyNDaf6LW",
  "key20": "5XQp2iM9fg8zsfvEJadc6NzygHkPdZFbT8WsfZByVJUT3PikRsjf1P6CfKNEdEexqZ1vPkcxweXtzJohBejpcV6r",
  "key21": "1efFoe8ZZyyeeaDTM3QD4PpRNLTL7y5tRL8sR664kSzeq5RxmTTjEqBhVNVByKvCSEua9jUd4oTuHk92N72c5tp",
  "key22": "3dArFozMFMtkeEAhA2hgx2d9ct3TNn9b7mJCMC4p9zBxRAUaNmNAtyk2QqDWia549fqMupeK6yScDC37j1yVEs61",
  "key23": "2MZLW3JMxnNqKDZ6zjK3ZYiFe88pCFoBErPvx2En2dZiDegzRUAfY354cBXjxhYMMM1aQas5UTS2dceeL4Ba1soz",
  "key24": "3gjvttsLy9v2BotkJ9yp9aqYuuHaCMxXpHsk7rLpHRTR7VyUjRcGMccgEvpGFU4dzV3cRbdk2LhAGx576BLGaLe4",
  "key25": "64GHwhMxfspFP21wAndcvWsa3mM5Ujh8GnxNVp6cDmyNh2EbHeWwjurWGsbZDuoLxLBcyUur5JFwPJNaxa9aE5Mb",
  "key26": "65xnMvGbGMPKBPWSWaNg6xYz1Jkxp3z9TyJ92JWHF5XzMCzaKXfRGqb8FdHk5DUCdomxrNqPASTMvpv45Wwhq45y",
  "key27": "EWPdhBGFBvecyiVMQ9XYrbYpqtxfmEJ1i1LdKEhyMoxgrCEU1N8wNd6psXev7po2mizYPzVkgLbWGjK5R4Uvv7z",
  "key28": "5j5h1bPykR6drLANqpuwGXba73cfyvFpwZANt8HWADjWUDgCrtuEpzBzYJknZPnddeKxQ2j9Nxkboh41Zrbb7hZZ",
  "key29": "2kW2qz1irLFfQCqrSoH53SEcQjXtWL1cRL8Wv5n3tbNSoGeqXw6FMA5LU5niaNgiLaEUKX3hyM866PWUbUjthAfX",
  "key30": "2u3sMsm51yYKMqKzM8BeqwjTpR2xrbcR358xX69xePmBzFAGf5GyqTy8KRoeoKT5VY8TqHqLZdxXCc8Hx2o1VwUh",
  "key31": "aoKdDRYmjJG7rH2Eyp3Zf9e6iLZmaWdwNZRgwfHbXqRQE4caHNE1AAMds3PtTzfWAx1YAY2HR2XHWHCuuZmqMco",
  "key32": "35xKwNkyD2wsbc1vz7vWcKpHD1koR2qDAZzFPy1NSrWdsdUXHW4PTyuuDZrMEiLHa1RPMBnnTuXrb1Y5545KsC7F",
  "key33": "2vQmjaf2CDH43KYYT6KMYU1enoqENqMt5z9tBV7Emk9VjdxSyZXFABYwt2QDaaFko82nn8rBEktBovroVkKmetVE",
  "key34": "5VxCzq5XVfk2FTU3Nb3hf9u1jXgr5vbqjiE6GWvBXJawSw2H9qKjjWmsaLnb4yniXXKsCu722uJfQ1e1gHu19Ea2",
  "key35": "54eBzDhQn59x4ShCDKJ9DBWkgpWJwu6J2oUxvZawVPaUTLYBu61CiZmSYZ7FfqvzYdjHK1gzAuN9XhhLprRwSXBC",
  "key36": "3zNewrCtMuBUzk6mBHW29pG44BS6FKg9xAuFfzu7z9z5smGv6qRg2ghKrQR5wYwZSdEJjJvQANQo7whroZGh5XuU",
  "key37": "5J2yjF97TkAHykKJEcQM5V7TCp7rEr2qj5GpfC5ZcMXtWGEHEE2vXNYGdttbjrGymKKN4VwPe7LWKNA5t8F7QbvU",
  "key38": "45c4jQmUejWFMj9MqPq7qyVvL2fLYmEoZeKNmQaXSSEf4Rzv5rUnkLJ2GUsBkFw7AjvsHcn4qcK2AzT1yF5pmhQQ"
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
