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
    "3HKkBo35i96rVzmoc8dE5femWMckHUTYGHXs9N2ww82tbyDdNiEXWNxbydn7sMyDVYVxg4eeUSwMiuQrVWdm4Pgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jxe138bCU9CTM5ujdaa6FLLZEHDDTgdvyf8raCXKcnhahRgsVbEjG7XfmKfvw4VS3fSr4hT4QkTLJk6JRNWVap",
  "key1": "5HW4etX8x5jpBvQrQXC8rsC2cHX88Cku4LQqmHastz32uhx5Ep7N8Qnf2NT1GdGjHMh4QRYKwSDbGtPbW3mER65h",
  "key2": "2m2r9NgDPcoi5mmCu5E5HZtcrMC97qMWZJqWHHAUsKFsYG9q2RJDqkKdxRLB2QxFSD4HzELSnRhyEEiNzLhSFfHr",
  "key3": "3ez2YkXuuT5y18R6Px9Yg499rGjryokftuWoFvArdfJ8a7GWRFsxpyyvL5Hb6YRu3cJtDK8xnm9nzGoBe9XHJhUU",
  "key4": "28bH9bDWD2Q27s2eVUo2SALPm1XpKMTuGT67CWJdWgP2xizwsee3fSWPwRxvTMLs1G56dxj6XDQudPjQb7YtZf1W",
  "key5": "5CSCc7MSmZ9QrheKnWWvdyaw5hXQAs9ExCWcf3N9bwgRF5dvcd9dtnTcYJyVNEvhHnuu1dN8s7YAZ9xW3FZ4rf2p",
  "key6": "287pwzTzzje53fnDHxBsfymP7LMXhGaNvnCe89ccAbev9MFNsKJZZrvipMrxefYpz6yyKtU87Aw6bhGxZZz76frm",
  "key7": "5yGBSjpQm9hJyCUPQyx32n8aayJC9HZNjEKE8cTg3hZiTsyAVJhAoKoqLK3VuTGHtXap9pJWrbD4RDLmaCSj5xBu",
  "key8": "4dRyfWHzNfzA3kBxVCjri4QES9mLs64MaVsQUzxiePtHxCpuWqQDSDPSYAooywn1HuPVeNVCMhcJj8nmHom1Cab2",
  "key9": "QfJGFvCniF1gbpNgTDvre8dYVin5f5N5YdS9biKNf5dcqgCHjduuvhHJNzGZTVnXujUBwxnMZ63rbEUzph6oLPK",
  "key10": "2DqV5hQ3RFibao8o1H8jbNcn1UdJu4HQ1eFvoHppnQv4bdfUpnuCCxbwjJGqjF3feUubvMDGkRJiJpuM7hoVtP1L",
  "key11": "52qUEDPAPbbY9cE26ys8PT7Uud3ydY83eNacDPCJTyVfiTY7pvasx5bKZHmefY7MxftLz3EsrrU2E4VD8tx74D68",
  "key12": "4Gr5EQnuNVTRD124ddbFAMu7iyugtnF4aEbdD4WQDZchAq9W3tFVDAsiD6xwzHoNAQuKdbyNDKawH8jHjXdP2V9t",
  "key13": "2tmHTe42ZXtkFRJRSRHJSHBHowtJGZbiuknQ4JDSYMsd4K17T8SB8iUChYJjHbFhjtfH1acqB88k93UBsWdVUM29",
  "key14": "5tk8iY6knFZbCWmyEEZ8EPmtEXSeYe63uS1YSorymDUbpiKudSnL5ZcaQMhVag8oLaNTgwnJrSHq8srByp43Nq3B",
  "key15": "5GA3Qmm4AuvQhcx3U7WA82LJfqLB7sjBjKvTf5mygp34Jd3W5AzXrXD2QPgourekG7NBz6AEZJJyWFUuvgNN92QE",
  "key16": "2zjZyGVQF87V1Q8kMf31KpnXuqeKqxMR8jXMPyrsZpCmrJqrJPUKEau8Erc5bmacn6wkPYpKdFd8mfYBh7VWRSbP",
  "key17": "2tU6XbHZhRgjWSHzw5eCEkAkLZDbq7jxQVae1QCGP1oy6j6xTGbdmrvMWHUa6eHMrziZ159ZzGky6bAktRsr7JJL",
  "key18": "364zP1NzALw9JyCEK4BiUHLxN4RjYutF5ZnatfJzvExCxLtubkLRNBm2HpfySBuxgXSaVNWGvRwL5ELtD9X7YGsj",
  "key19": "3YmGApiq4fagXm6y5NpfJ8TyrcANkmWxDuK8RLpnZpnQnSoMCCgjKsn3mQTRGucxVZt89KNzHTKqgaK1mjafBbwK",
  "key20": "5fTps8p8GJ7GDLoUjS6N6wEouduSEweEL2FWkWWpNSNWRTPAy4vQhj7k2Wo2fAJDbV6iUcRXVay9C3tnehpvDNTS",
  "key21": "2AGrmY5PhZLcU8froy4K3u5MMExX1pkb1ibvgzY2KuoxJFmJRPtWH9wuwUwkK8Wfh1TmQaojSQDzH7oFuBBRMM8H",
  "key22": "2RsnYP9EHPts35QHN8pwC2onURemQpgzBdaFrC3uMxDgbzGboaoYcWFf2tdSkAErTYqy8v53ZiVVqRUToNNRsxZD",
  "key23": "bq5fUqDFJcpcv2uDNFCEHrPwHd3wEuoS8LxPj3hmng5U5Y6PaDVgGLKtLDUWkPqjH4TtZRQU9T1TZU5RqUEu3Rk",
  "key24": "5nmQnKA5Z2J5dNS61ueHnXanUUzXADXgisSF9sZaYrbfw42ouug2YQwhAnAfh6ViUpjjwA7gUFbukiX9AySvR2Gm",
  "key25": "4J4G6rAxQrDjAMoFbc8xN1ZJLvSNyMPtF3yH4cFMFMGQS1U6dihnzD6YfVZqrxiou1DpmGci3AvoYw4FFWuhyDvt",
  "key26": "2wLA6w3T3NUTpHnLpSXmMkE3kraX8siA4NT7L3VZCFk8tPyFN5TqCVkAbTjSQVNnFSMAGEFrqD6A33weuu3XuRyB",
  "key27": "TtP1dkbUjZXx9zknU5EopfjggKhGhv6g7Yi9HuL6ZT4UPfWb6eXxhqHK9QmeBw31LF1DCtMxiRJukd86NNzcqFh",
  "key28": "4hMF2H36hCRTMzi3KsLTCAWm3DLBWLnNVZKVYKBQVk7jfaCQdmnpZHN41e9tEvaWrMWkg4goo5W4wQp2czBFvtJU",
  "key29": "4eTN2vMBgAtcpZfHbYkb54jmgi1gJ5X2Dk1zsyrbxc34YjayFUfn92XGzQULHKP5jtyvyzasspa46XyZAcTbQ5PJ",
  "key30": "22aJkYquL2gJLsjoQiPSdLq3TGP6VytSjYcQo1cA96iTH2Qp7J5aBSjAMGkxLJpCBwdkGnLamJ1jkSuYr9k26UXy",
  "key31": "614sUpigeLernccyRCW3D1bffxpmd92FJivrvjUBq7wM2zE5gYEUrfcWASeAoRzzdt2ntB3mmgVc6FyAgXWRH7E6",
  "key32": "2BS7ZCdij1J2DKev5yEg4VhwDiKuH51QztdGYWQM5hSuNZKn81EGj8GGQBVWPLpcP7md8gqsKNqHy6gVZjaDezPG",
  "key33": "3JkQ6ApqkbCN4BwziGPrUee4QD3fjbaj8qhJkvfmCQNf6Rt6zSQiLFxToU7m2JHNZHKLDd7kKDME7qzGNMRuUiKq",
  "key34": "5eUfkXAAQFykcSZTyGjAE4cYoMRMCjgixP3e8tzDq4EkXCNctTabNaYA5zqiy5uvAs1J42ZvGXwkchw8XWxCAThJ",
  "key35": "5rVjsv2HzbEyN4U8Pwp1BCKuXXR3Zm7fiK6YCA85onWG8khyn9zF9kbt3ftYGisJ1gAGja9qU5hgdioChYTwy1jW",
  "key36": "2391gfu7kkpb8cqEEhX5KDNvscdZR3hNNZjvYmWFHDk21mNN2Jnr5BPnK4Zk6nVbSMyKMECpC8vdyWGXG1zr5Wj3",
  "key37": "B7P3vM8VpunUouVMDLGGJC6C6Yzb8DA55RwjAHbHg4bNAdTSoYDr3LWLaUWD5rwKmES9GYogmNARVRt4FLexYBm"
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
