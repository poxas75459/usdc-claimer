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
    "3nPciNfsqnTpDP2bDQmeM1VBrx3NbYxaRSndvyVuoGBtdrF9Mz4S2qsddzXzmdVH4MtDXFxa7qnRSPi6Sf3MiaWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZJwA2doySkxaARHimBw6QqbeozLhj8hTzrE5scGKYRCnoCmrfGcZAzMAudghaSTe3fjkrBvGqD4bvu8ULTX1hv",
  "key1": "5WQVjYfQazm9yQhiMQJt7Gh4TkoVSy5pjqyVskiqqBhBmyZf15WezFZ8oXq3bLwr9RwFpcSRVKzxDTyw3FmnyPV7",
  "key2": "55nMZytb6gRcKckzaMFxjGas9AnTWUpPD6cVuntoj4YPx2g7c7o3baVG48TkzCb6sgQhTvjLa1BgMehLADFbJGW9",
  "key3": "2ykbvvf7MAzwmKiWr7UcnkLhTQXEyWd8z3eNkiJVe565rZRshB1uZ5EQtosnqJ59AGMyH9wZf2U1KaadEyA3oNRc",
  "key4": "5b1cbHK6CqYN61pGUtkCWVHvkTTYjGzBRpmLYVuHMaQgjKBVVrUy1V2mjMpnFtA9SP3LUYQAPSr79di7AujZ9xjP",
  "key5": "5rVsfnjVBKp9Kc89wNcYFRgjQSL4ku3ACwSnouX8cagxRVVQtynpnK53erh2TtzpXpH4vXSz3xHS3cEEYCGbowPA",
  "key6": "3FD9gF3E8GJsCFvsYdGAdDsgsJbz7kWTTCu8pFmZ2jQSjKvg2ipEjYnFSBNcATs15jq6en2iMejxN9teLQd9Qbku",
  "key7": "4MyExZ9nRxzn9GhscX6ErVTfqcghvWbxweJuUFwFo6rXHonR9XnsbTrkDCuxY7yX4eXKsPnFN2cMKQa9yzbKzvBN",
  "key8": "62MvP7vtgosyocanC7Q25hdWLKAvay66YTVz9WCdB3f1QZfpMtnJCkMGG4s79bfDY1DRRCuizhh4EwpSSD8cLoVE",
  "key9": "41pVNEpxgsxeHpZiWcNvduDZbv6sKswqcz6UsUgymGiyXZnDNgtQ3rjvJc24mYJMrLRnJpQS617o7vidJXAqN6t7",
  "key10": "4YAcacRWkru8vP4JkG79VxQjQb5GT8SfgrNeamnnpHLNQugcCkk8tpnJPbY7vjJwvCMXi3frQHV1F1UoZsNdqF7",
  "key11": "3S28yZZjTHKtt9dEuSgmVNB99bpF7co5eKPx4QcjQgMMm6g3xUHWbhSgNPjYcJSpasRjV2DZGaa2uLwB3wnVLPdL",
  "key12": "465vTPX2jGawjYxLeUwQ2J43H8JJ5USqbBFJm4o19cDkncRMo5k8xaJM5TTAJbbMLkHmqvCEQEDjYAESe8ebYkn2",
  "key13": "44AkZQz7r25fz7HVE2m6xZ71ACh5XTv6BA4nBkNWU8pCUQ7owY2mg36vYJi71rw9jXSWmbASUi22YiFEfXUyb8YB",
  "key14": "2ErXudNut3Bg9UqNSDaq8SpfrL3H2CuqLJGqy52NPAMcYuH1TPyjkwWziWHGgZF3zZufkRYLoVQWzMQY1jqLeVfa",
  "key15": "8ZzH6FwK23Rk5pbFGVFWTYC26fu283HtdsBVKnNUWtA3tAy2djNyY1LKFgTgSwXshxR3iE5fCrB95aPafFFyPmE",
  "key16": "5rRM9Ag2BVGYodPtHBdQSZtm6AC8ureTkWacmrPFhM8UDu2ZL98c9AS1eAdDm1opBv9XNacXbGVYvSpnQw9DVZ5N",
  "key17": "VWBBYVM8PXbiMNTFW6xFpQJSa7y8riRygyuZrEa7jVutdKNDd4P9xGVUanBjATmv2z1e79iFxG6h4QkcGuJugee",
  "key18": "3GjkvkmbcVa4GgdQcCM7ndNgvwVxz6DxENfBZdyHrNpq9XqYA1inf44eGX6EijmQgeGwySBYVn65aZkEm8bFMCgB",
  "key19": "2zyJiTYgbHzQsSLz1FYDrytDpaSbrFmWR1rheZB6q3dTLrxG4wGd4xDYbdeeRQE21zoLCCP12VVi7t7bMdSsWAbY",
  "key20": "4cynLaHbV4YZuYuSNPEDMqXhUUFJh8EMTJtDAZDoALzqa6WMSe94QQ3NFJwbb2senobP7xrbMp2trRKNtGHhRFyN",
  "key21": "4q8ydqtH3JiBDcvim7KSJMhx1hJjt8QjPh1KdZU29ngke46cNDJJgy7wDop587TPVxhXKxtzoSFbPYPSwcx43aUS",
  "key22": "4bB79nLUNaZp2j8ZLhNhvbb85SCu6uWFNHEenTX9HW8XnwHezwSKm6ZHMmayFTdmGkGa8nTAWHc9btP42f1tkcQk",
  "key23": "4mdQWB3kimqbTtkwrsGA9gBuMDAEqmMwmDQcohvggGuP4fXibTzxgoUSbYUEREtAsz3BSxYFZrGJPUHhGfoxd5uV",
  "key24": "5vWfvDHwCHE4QpKVYkthAGWQEGbZUqSDQMpwNvRW42N5tCWAkF6vLnhqtRs9KZKWWD4zniNyrbA1pveDgWYvmg3w",
  "key25": "4TJE8kdfwiadXdkiSEcF2Up289ncuJYYypeUH2R98yd2hheF9MCYR369eFFFNhBV7UeJHPeRQ8Xb8EyMPfi2zC5d",
  "key26": "GDtV35WuzHSRqFdaPHSX7R5Y4Ji5BmzZW7K2gjZkcaDjyWDk9yTG8YAjEm5dK86zpKVqk9VETCGhGCodnav6fww",
  "key27": "4iAj9LQ6Hkqj5XFBtgwGatwTJDBEjzGQzgvuruUkirYdPF12RVdPHFYPkdx9yhFtw7QkoMDzPy91rUPyb6sH93Ko",
  "key28": "4Fxm1treEpfAZCDfEGyN1jCpwJ7rgzjaV6v8b2dpXhU6T4rvCSQEWwG6f329ciN3uyVavehHwUFqHqzHN2DSUhGi",
  "key29": "5xyBj9LrRQLrYR4sjmSiKhTENGPDQNRXasmLzPUPcDvVXumqNi95RR6bUujn8m3Zn7DV1zM3r8QVRSvkX8FALTQo",
  "key30": "3PsJXZwEfwn6nkYQ149UyKGauz3fz6MKFTLKbTmiz788wtXGBQikV4UhG1ABb8yKWRg37sne6DR77haobX8Qi4K2",
  "key31": "5tJxDkURjL9tUBt644NQbL3iMmFSqHidTbC3jaz8qGbpxMjHtzxvdeLiPbjQA9ARiQod6gBUvemS6C1LxhcBcwXd",
  "key32": "f42XRtoHZjpheizU2ftuqkpjj7TLe9yszanruMKMQP9uJ6USszvMG9rcGva2KHBbh3GT2rebMgwEn7fBdCvoEuJ",
  "key33": "LL6k2VynzGw738QDxMmTBqy9RiMzmLC5986g6PcQukWqCo9TykvSzei2Q2nMdnvFf5dmbBzo32ipk5QjxVvyadv",
  "key34": "2Bb383sf5jrEZtfdfH1RR8nt6RXwYSdGTEcRcmn5RAGcUnyjMcqDvAN4zG7JKsLffqFUDLLXcpBKpEMB8nGqoYC5",
  "key35": "35tnT7d5rVtjbvAiVuki6cdeyknHqTNQvB1XVJbA2tqQ35vykUPvrERX68KfvSF5seUC1MWrHQoQZYXCFMUQQydi",
  "key36": "2sjwqCMbrrYM77EtZM9n7y5RqAzF2UhnTRydtcCmZsu2SPQJrt41UW4LHGqvi9UU1jDyJexK3GXbRaFhLVZU2n81",
  "key37": "45JxBu9m5yE3D56eBW6yvAkYrdcJPNiu6Pmjutc7H5d3jPqUW2k55FUfqVBMbrQioB8g53Mp1F5uRbcXZ1KpfxjP",
  "key38": "JT1XQrok629KB333LftziPAs7E3YAKEVjT7FEhjUazEhFXJiX9BEcKWB3Rj9pHuQBXUyZ8J7fMY73y4RhZaxV8F",
  "key39": "3rHqjYtvwevdHYmvzEJ9Xr6KuwyGGbfTy6EBNyRQSozLpz3GoLDgEbGiiLetKxEjM46LfBKH9rqNs5b3syKGoBih",
  "key40": "5sFGTWx9VvjCL3ba2yqVjrmLZfSG9hmMj8bejVT21Q8fJbRS5GXHQVCTLpGBj7qvThbiFaqkmvNGXVjvvWLDbo9d",
  "key41": "3yMUttRecYbLEFSyPZRUY9jKpsWpHne1fin5p23a3rk8dGrfHeYaxUcYERt5Dxkng6JwNPvZ2SSpe3EMnhCceRJh",
  "key42": "5uJXEhagmcMkM4ZD7gSUhQCoTXWaRoZwSm9GPj85ALXjX4LFY4dMMZPGFsdzCLWQc17PzVj1UZKyD5X1APg5FufY"
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
