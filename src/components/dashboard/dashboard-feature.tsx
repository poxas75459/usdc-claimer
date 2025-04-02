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
    "38ksa1Mwj5qXF53YiEhQyuDGiu879RMe6notKBuuy3iK63944gaYnE5epqRVjQi8G7Qf7Kjmf6HBjPcMa4o3jXPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yH7bY6b2qh56zLbwJixKeVs6bw3T8pCW8sARWvEjKUEPFEXRv1uY5pE9wCYXqyHTuqUTTEih1V9rpMJsiNGSpZu",
  "key1": "4oq5SKJmXgkKVtSPDqm28nA7rRnkjzeXMTBAkM1hSTExYkdxQTp9bMoQ4shmLy8kv1Ead6Qzn2bwYasTxKrxPUnR",
  "key2": "qphHYAhh1M2tjAV57oj38uuFvpr8UCu3ztyaHzk7jbYkNkvLuBmPkvDY3UEt9Gu1kzGVccjrRpn23wgB1Rx1ARo",
  "key3": "44dWTbHKHmGA9tG6y6taPeSkFdtfsfS4b37hu2M9mkucxnbniR7YmkQejaDduwFR2Lvut9kpkt57C9ADFbuNsavB",
  "key4": "4rhx2wHhFUZ6FWHyuWJPX6CaQpx4Cr5BL7T9YQMFJJJrgyh1K84yQKHYqXrzMzw6dDQjnqKvHZWJdpVtN1LiCJbS",
  "key5": "33WgFDge4x53N3h46weaLrxuFQAeeeDDUaPAcUGMSFL1Ftqn4mzYMkNz2PoEcZTzYg4Ga9VFafyBzZgrgXy7ayrX",
  "key6": "27jGGDJ4N2uxzXKoWT5yT32rgaiJsQWWZ4aE1GDH5f9uwR2sfE1o6BNtzUAmQCuykv9Lb1zQMNRUaHRqfuR5RyUM",
  "key7": "34QYbxn6gb7C94roMeVhe8Y1oRn7uZ3YsdmATTh61oftmhPU3NgpJ3rrpRjyKHygsG8n1MR6y5QFwqsPyd6ZQxC",
  "key8": "2yyiuWZC93T9k2RmgK5zsXvXfgMaZMuVZWxozBDL6nCK7ck7aiAPrq5g9J8NUbhgvaHG48e7WiGnjCiFzn6fBqNL",
  "key9": "U5e12MggkZitc9PYArCEWbAamRufzTApx4MGCUmLcypgppsYD65oMcgZUPdCyFReDx8qQvPRSPM4j1K6uDNgchC",
  "key10": "61cPVvcmLSsKP1VDFBPrpN48Awk465fyRx6htjbmq69DU54RuSmqTcbp7zJ8FgN7dKoseu2SNbZpkZjBaCmdsXXN",
  "key11": "5vQ9S77K2yrYb5e6aAj4m8b8JZAKGg6BTkiDdD7kQjjjojPyQMAkjdaQDC287qYBPB3NdgbQPZibsf5LZf8xMT7",
  "key12": "4Ri8aQ5ESve5rWuJGBBmNU3khjwX9tHi4qCT7nd9Ds2w8mfmnGqL4uDUuM4RnoMKq8UgL7n19XT4sWoVEmkd18NX",
  "key13": "kjeoJrdK5k27ZXFKy8ezVz6SbfPakNQ8zSDhynF6zwUQpKTNJAG9bJBkRA4xtYKAb7umw5Q92qkUnHURWMtRX66",
  "key14": "5DD4tFWkdXQnUCbaqpaW1NaUdYjXSnqXmewC3KhywFH6hx8m6uf6keBHwg3bZoyDYibx9zjD4jA7WLQbLNCEBgy2",
  "key15": "55rQMyPcx268HqanYtfJ7PegfbfSoNYowP9PBqddMkkGQW6LybdW36waWYFHHtxQecqdfM5GDe4KHvNrAg9KFcCN",
  "key16": "55hM5pavuwj6WqD5mSEwXKswnkEtghnoL1xhfutwdenfZQt8hQjdyoeFjChzCih3L4U9D2q4TeRp7W2SvS2bktmP",
  "key17": "37FvJiPAzaViuFMnoKpnuXFDtzumhapds4Kd6hjimpddswyprhGyBAxmcVx9z3RbcnN61orWjNiUtonww7mHhrJs",
  "key18": "2k7o6y6v1xgLNUr5hMS6gPHuDgeeazc34CGHoFAYbM5XPJssiXzAwYZbwwQypCSxR5PKAG1GC2s5X4NvzPrbXAJF",
  "key19": "623iTRa7Je7HXomm7gP6G869x6XsCeCNzpp1ZDhbLCXmW2g3NB5UKQb3Z2GLrcisqPjyML64vzT3Ts5uUC2nE9Zh",
  "key20": "5Q4JXdk4sLY4eMt5NRUUrRvszEcqKEZ93Mb93yZET2pm3t8W4GFtfo8yhkSgDkiHrPmqEsTG9nFc4i6jsKGtJxZ5",
  "key21": "3ncXZ8rLm2BzHa3rmVBwwZz8A94JPKQAx1BLtpwt2pwEQG1kFZfc3M9DXRGGthfGUcBZdv3gJYzmPgQ15LFJvoYU",
  "key22": "5sa1SSsHG6kZsDLSE5esxvfiBoCWHLgfrpyU7BG5d371cDsaiRPzDhuBiqz5gHoBTLfB1GCebXk3kX13MxWNtra4",
  "key23": "SY1cDmUFmNKbgjonXdRyVaXg92s88zmTcmGYkv97FE4F3Rtc1UKRWRQFf4oTU2bP6Em5qc5SjU2EoHQ9hfQJ4Sj",
  "key24": "4QEoUSyHZwvc6o33RzosgYkiN4F1iMneYuMYAuD997hvxQK1NebjYQS6GKWyRbpuQMtSTB4gCQPhxxSZDedekdMX",
  "key25": "kjvEonFuGQHVb8ttHC5FdYZSrk6qGrCjZ4TF4NF3mWDx6hvMvGnxhKcWBZvUzWfN7YUBBeca23Sxtz1WbvDWg34",
  "key26": "GfpY9w6NxvX9FJ9b1CFAUfK9GHp66aTDYEZMibeWDnVg2acaNei7noMMgSNRSCL5Rg6CD6wAVEe5tom4vBRK53X",
  "key27": "4a1AQ3xUTMuP8TpuZ8h4CiouJpMhBGdeAtWjJDDUnVYR3uYQ2XoScwzhWFRVBQcbt8xs8sUUjMMULBEzZmQqr95x",
  "key28": "44Swr2edLFuCQCAKpCeiRFSUntboJpuQcGLaSHjDXiHAte1Nb6ENYhr9Zk1DeFGBKXFu88MropdG1AbB8xFRNUdM",
  "key29": "GoVeqdLmTgMGssjhVJVT1fLcVMdXMkae21P6Lx57d7YBG1DZKGjsCh5qsJhRDSLekEbQdE9VDYtmrp6FErogMac",
  "key30": "5R7t8gWKWWGNHp37dCgfGN4CnWE1qd7Rzy5mRsYJw8BMoqaj7XRMd4D14ButiYu8HpuBTdZys97pm4cy3FWo9XNC",
  "key31": "5BpfCqc1NXSoP4UyPakD1T5G3i3GxqWzyZzcfUq96jpDFRjeaeKSoU8bRgcUn2AmF8h7LekifPGNhof7etQ7XQuV",
  "key32": "5Y8gWEXS7ZD8SG6P8iob2dr8tYRwLxUjUUraBcKjr3EJ6DuscP9w2guGmtPXzVW43PF7HXnXd9gWaXRMDwsRzHeC",
  "key33": "53zC2zRnfSUeM9k6QqojpKg3g7m2bNXMsyMrYUDixy1SnLCJAEYrUAsu2KcrDw76sxriQHNNu8yvfCAotT9fwYQe",
  "key34": "2EbcSkwVhAmT29CD2AhS12wcx4ei6YRy4tpMKPgAjJSCjGpxCETDoqhYg4DVx3Se2tXQPjMzJ3hsqMNzCZvYCDgp"
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
