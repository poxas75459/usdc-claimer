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
    "3DT7ruv3bcH8sgjPVHZ1UP84BDtJWHvAHFqH6EwiVjtFQ9p6EfHm64FSGZMW9MsnxjJiDf7KVgJjPFhZ2nvLQiYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iYCA77vph5AtJdLA4k5QNtfofeuaL6ee7vdXk6yCWqx9fMCN8m5yzxkAkr77GmrafwYcBsJ87P7ocW4XcXR46ud",
  "key1": "2cr13ZszNedLXp51CijBz3nZFNPQ4pebxHgiK4rTvuiCXamKpceTxZQeGwV2tHH9vTsm4MvDhND6fRW7ErPCDcww",
  "key2": "f94mdTWsi4Eke4T7de5UqxhLXZJ441xPyxtWx1uFimKUbDVyXpQ9KGZkVdthQ9QL26hXZZCRC5hXR2tLSyJKQto",
  "key3": "56UQTEAE6Y7o69uuksPsWBha31zfW8GBLib8RK7ik7oA4dyGKzxPhwPtM1mDLZKXSP9h6qEhAdsUSqz6rsuGWodb",
  "key4": "261EvqcCJhxmLzZe997LNu6z3GLmwbDvgw2PKKvEX9PPPH9Kai3aR9NqKVZ3VMCHSgdQPE8HT5Ech85QGBEDeAKX",
  "key5": "5bJ5QnRUmvjSKdFH8zCPQz8HQ8utiBigKEb6JSDJAzqvRXXftVP8bU2u9a1mvjBoJ1GjbnV49eeFzaJAywQkKw2T",
  "key6": "DgTuUXNV4dh1ZZAHNFBdQQjAPKkm4UbzBuqqEv1qu5k6qz2c4JmZjckdxmUE6aBASEhk1xFFHudX6X7d9XGVaB8",
  "key7": "4rT39rPRf5uQ9pbBcVf6txXtvNsSpKjKD719jPkPjt1j1Lt1VSVd1uNGDcFD6tTqwz2QQPJ8vtnSTyJio4BJonqC",
  "key8": "34Uxpj5wJuNzLSb1FcYMGechti7rjL2nf8imkSwK6WJYX4PeYaJchxJa8J15yzcrax2N5JGdHrCdPted22JDWwGn",
  "key9": "4ByqUoniGKAnk73LgcprtTYsxtwtKKKZ1U2YaGdQwADUWBbecEXnEt6neLwjqtfeUZgU7dcsJG3wGZMXQ6hnVo8Z",
  "key10": "2A6J82B2vcGRWBZNXCZuKg4NuGbtDCPUwhCqhL7J1FyJNFfWzzMVxBeNVxhfMPt3B3UWrtzcLCoDPgRQjfxCSnDk",
  "key11": "4KUFSHej6WUbGaKNHw7qVg44JxaFG3VVP2hdKTSzkJHkqKdBbca4q5dXUwFCDoFZtuNK2ZWjuCbBdFzm4WMJabTi",
  "key12": "5NM6ksydCCgM7TMQaqhKGwVtAfCmbnk2Ty71osNeeoTfaoXS6G1fT2hXZhspKWZPYA1b27ZkwAUGSwAazYajuyGV",
  "key13": "4C7zMX9nDw1ASdZNk7caiaHBJzNL1naSbGZmpoUXv6HU75Jv6wfwXHT1fwbqcxwh8BXwpfy96LdMVibz4eg1GnBx",
  "key14": "2uWvqACqEZ5CtBWLN6BmA7jJc4aXmqcwAq2daRrGSYimjaWHGmiDyKKmRwPvNDSLnYEgx5LKSkYkXzXqzs7wPizB",
  "key15": "5bFnFiA89gyknuFof2vx7wJcZTN5U1njVqWvVCJoW3NnatFZ1KsUPU971Pc8TaPuDu5pzVettPzRBAGwT2QVXc7",
  "key16": "4J4WLeVBS3Wy2spg9iarLpcRmegdK89VCkkyVJoLAi52ky45UuNHJcnUN1geHr26ouvQk6FkhouZkEPTN3QaGGrg",
  "key17": "2vxHKyMbTwd1v9rEfd7Cwegh6wb87ggPDx4ZHFFE9cEqHxSFrLVN2ZuLyDhSmeJMJJ2ESSJagfrZ7SG8XDYkw9CC",
  "key18": "BwAJv6GLQkZ8Je3gMUHC8sc1fkREtSLAnxB2zQmVFjPZD3thpewSabD2LVgnwS4e98iBGgcL47Y5pPDUtnoTmva",
  "key19": "geNyG7oTBjKNg3RWYzEQJ8enBDV6vwcuTtEfr8wedhbqsJfNAkfySWy6LkT8uM3Lxm2D8XswyAGcZe98wSjZtcj",
  "key20": "3E4946UUb1pSaNJyhbNqQzXYRAYNErNMTAWCRVBEjGyps1G8ND5jDBhiRpAi7EiW6q7xCq2ByVCvE6LzsBfqa24e",
  "key21": "3rpVzgdmpjuh9jFLN8vRMLMibCJC23QkeDdbv7aD5KVgU46YSRVrahdCEVXEeh257PMxdYgnLVBEV6cVHc4orFhg",
  "key22": "5E6ZQ5o67WykRHKQE4nHZ4Szf5Yth3y2d8dAjTP32iM6Wa6u6cjp6vVLxQXU924m5chV1NSrEWarahkeQXMzDJDW",
  "key23": "5HkD1hioLY6WTetZYigpRk3eJfLep8WzCSc2BoLwkV58z3xunvtWVmvmYn1QY39tfvyfkYPVty3V9JG3XeALftLw",
  "key24": "mjVgsfJc4BDxDoxYHBnjjhPR78zPVs6sMAkRxPSwBXhP35NN5TwPYP92WzNUP7HkAPUGjSiLYtJfc2My9Nwpxwr",
  "key25": "3kXjzu42uBToiZTpwehrAFPeCGoZFGRLHEx2Lqzv1FsipSkqMWmY1GNPFRCwSpc5KEnWZsMCoqdUs16jU5NTNzLc",
  "key26": "3WopyV5UfwiE9sVENiY95yfDzSdwexjbK238ncyRZTk2f33L8mUF5D9MorViiUE41MRErA3i6ygcXSfZAVq7gyEN",
  "key27": "5HbxxPyXFNa2fradA3hSUWDqG8JPe5tj4qZd5EcE3vDkV8VVzVwLJSLhFZUKWrtzxgNBcn5dXsGQYCS2x565kZ1w",
  "key28": "4QuoLBiDcpgcP9vcDnebLE23QEQ7eSj6SpJ9Cds3LKZY9XT5qxW81CxZTBdSi6VRsVDYRwuqqK3q8EhM2iCZAkNn",
  "key29": "JWJevJ531Vu2WRZcY9gBqk59NUumSBjK9iLEu3g2yoydk3xTqoLQnyC6S2LDJ4opY6yc5NoVEuDpHh9kKqN5ij7"
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
