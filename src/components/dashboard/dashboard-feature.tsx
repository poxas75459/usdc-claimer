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
    "3jQRVuqz3fwM5k6LKJhReoYWeKoZgQ2xm3ygh8dtcoB5uaDZMLEjgPBvwybus2Jh5gqFGcTAxG3z5zqwPRe2teQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HRQg8nXANn7QjUyr3bmFVmeKMT6uMwajCjRBpbR1pwA9PCdCUHKfqHtup97JfnAVieQ6T4hkr4ZfMyvCKXZswHa",
  "key1": "5EjVZWCCXBRNJFTCvg4pg1oB3QDSPiwnH3Y27f1SSNdTH1G9GRZPkWJRXeedVJGznP5Sr5giTiJodz5iEgaF43td",
  "key2": "66VvX1ZngWcKbBgmF65jxCgWb8vXg9GpFt3K1EAvircSzGhAr2hkRsjHWegZrTnF84nWXeRxv1EhCGkWqJdiMUHg",
  "key3": "3E5wtydfCNnjt89jaLSM4QYvQ4wDFbaMUoKci6Ys7bGrgC9R9AaoRS9JZcPj156m6oWR5DR9bkuXhD7y3zRRd6BA",
  "key4": "5VHUNcYyFSZYpbRiY5LhPjDgaK1KXngLrpH56pzVkkjtZLEomWs76RzmPanwNRmBpjzKz59K5PUJRDitn111EPxg",
  "key5": "58v1FmxgKgLi46nkvTdA33HnHy9hfxW3N4LBF9G3h2qxQSDVFtGv7TrFANug9tW9jF9pDsSoeYN8RRYBFywxVvnv",
  "key6": "3MEHY6tLdQsnH1yK66myhptKucRPNx1NGFcYHWbnN4zphpBiqcVPfZDgBb4b3cfrbyyFMiUzmnjUu1E27D4zkiiG",
  "key7": "5Z4SpGQ6XyFgMniX61ViCAT7VpJ9iVBJG4BFYyRtmd5KbAECpwkqBgYZrcDrsjKnBDKJWfnb4JH1NGXAfVkcuHep",
  "key8": "5FmjQs8HUywq9Mq9RE2h4ZsyvPiivgaffML8pNwtJ2HfJGTe8MViSGTr3MDjhUuE7JgU7kS3eWEJzHoEjfFeGwsu",
  "key9": "2yS1uDzoQBhkHUVa3txotoZBvuGWeugtz3MtCXkQXhXNc7X3KEuVjTNXvkadzbSDouDaioXqYpUGZP3dqcf6ZpPd",
  "key10": "3xe6BsxYJsbeBhWnVTZApXSgrByeTo4F88CUFo9sykadaNu7Nt57SGPEnqyqonFPYE47kjste7Q7R11iwKFjFXs7",
  "key11": "2Z12GDYRtwUXFUSBoGdFcoxCrs6HnWhYFFZ7SFZUvSfHBkLdpU8umkBiS6jnu4NcGhGg7wfHzcMsoAExLf53NZSP",
  "key12": "Bz5A6kLP7h6npLNENG7zh53TLPFheT7ak6FiB8XnvtvYvibnXgBr7FBQENdbq3g5A1GoXPoNvxdb2PRrMDGJuAU",
  "key13": "5cWA9D4nkkFHJyFP7XUJAxxXjJu2mYfeXy4xmUa1bC1aNSGSFycfwKfyW7DadbQ5ekdL5D3L8VdYmj6qKfwF6RfH",
  "key14": "QZWHDSRMbJUXHyEfrWaJWVtUBZ35t4GC58u9L7kbqmrKz2pE88Woo1ew3NYPs7Cy35jq66QvuWHdL4rZtyJfcsJ",
  "key15": "3gxSnLAiCWYc1QgEhjBbyosUtA2FBcEMo3x1qtpTZ6dDS9pUYsPZUHpkGWBmvRHfeboDVQofm5WM7JdS8HeKhuXH",
  "key16": "2zGGuvWF7GQVVmetQCkgG6WNHMBqadizBdBFJTnEJY1Vg1WKP5apc5YFkYLzMrFLM3jEidEqN2adcAeJCkZHdUza",
  "key17": "3SC7U7soYzcDxdESCLYbyPmNm2XiUPBPVhaYW4dUd8WZW5tXg4RFKEjADMHBk88xoWQcc1Sp6bT5MJEfNCgg8Ed9",
  "key18": "5JZXhPZgNnQ5K1LHbntrrL7EgWzQdSH5Qx3bF5dhKabTxuu7Z7SK2g7TcsVW1At6uAi63AXmeMMeF4t529Xbs2C",
  "key19": "4a2Jns6Qfqh3VJNARcB6gkLRpWgva9ocpL19LeMriyuQcUFVzV4mHG9S9xyAEs6agaPNHc83eko1fTV56aBC8ajP",
  "key20": "MWHagX3Cvrrob4LjFQhEUax7vMaGsQufPNhidZzPbsE2QPqf2LWtnZJrfbofAXZCmdF3Qfq7djN1LY1XmqJsJkr",
  "key21": "UZJY8wvwBQzEwxe38yjUCSapMWhE9QYHSpNbCH3STPKporqDzb3LR364zcQxduWkuhe7G6sLy2ARujB1gR5bGH1",
  "key22": "4R1wPy8bUNkRt2c6udpEMHq6FCiynT8nY5Q91QarUyUgdve574joyLUjvB21z3js3AYYQj6g1HvJwj3vNkmZ6u3m",
  "key23": "36Z4dqWTWYvttAsjnm3NK7MX4otwEtNWiQb7nHKFK7PnGfB92cdP8LEGc89k4g6aqgsr6Bm8cT5MmAqrzhkYZFFw",
  "key24": "3o697TbVAK88zXtMDYyquqAnnEzmDPDusxcgMsRNVy5dbuuiZB2UxzsZ5Au1Z7r6UwYY2KM9uuqr5nw6aDN5XtLp",
  "key25": "2517P1seqH6jkrtCQmvqZ49QYvNeLCTccNPh9WxV9ZH6JwhDHg8xQBnxEWCwLcmA7x7wdjoacMPEB21Yeq4ix9RB",
  "key26": "U6mxZSzz9Sdwz6PtpMtSJm24ny5XEfocXk88N3PmgcnMLCFK5dR3Bs4pWz78iJpWVRSMN9hk9TXikKPNgU4WZiU",
  "key27": "6f5DBy4aj5rXovbFETuVMpoKugiYMBSDbFHm7DfKF9A9A9AWr1oo1VBVgCuMw6Ugpsh41ZHtgvDymWiVGcunhqp",
  "key28": "4rKy8LhrHEpxizf8dLBq56SEwa56bRRALsgaBGMEUHAETPGhPSJ2Vcu9imwE4LRGHRRZ3uTyiGDibhFACtbHakR3",
  "key29": "5MAUU74AhunbRH3u2jMLVUEjYi65bm8L9qsckge18QSMntTJQoVqtHLLoMEsSdX5JTaYFeJA4U41eKke7ku7JVbD",
  "key30": "4xxYqwFrzuttWwoMUfHD8RqyXok2sFibJ8xTm7sb5wuuok3RxNLt8xQ6Kpk22XUje1Dqgge5wvWGy8hBBwzDGQhR",
  "key31": "5zLgdbHTnHHXbZiaG5F3M5h1cXdD12PFHHENAkadb7evevYcegDyNXFCMNYpZNuwMUAPG74GAtKSX8ym4dNtxAgf",
  "key32": "2CLqpdcFiRAKBtMkdJvjhU3qgvjWD6gihvnfwsUAeSAksGbc2zsNiGYdkTZQz9Z6RtXnjw18s1mkvmMvxxathpfG",
  "key33": "2qR2kpAsCqEeeLnTs1KakjzoeZ5aLB6ruE7VTvjWf39ADq8ePCU3YJNvd3yDBR9pxwnWZnNJEnLcbBKJh9fMsQH1",
  "key34": "Bb7eNFwjUdMcyHG1q8c7EEve157vdcGzGzFwZhrtxgTYEFkdURnMYtmzvYryi8QKLa33mj5Jampww6UgezUWpHj",
  "key35": "37ngVHS3hqJ55L9cpLBiiS3ZrizNbsYKKxJxLE9w5W1n8tAkTc6VLMR3X9VqEYiGdqTQGQUd3ypt6aigZSojFPw1",
  "key36": "3GRKpaCpbj9tXFiLfyHsZoVkBDUbfHhH3EWVs5NrCA6yHmbEVuXrWhWU6sJ1BtYvAmWTkAMfUs7XX8F5xW5xTCsP",
  "key37": "VMWbswVAXcJWXAEeKKfCu81YR6aNiS33n91ydMFizaWRkxQE89wetYT3BKbKpzWymGehvGM6Xu3rySM3gU7zn9g",
  "key38": "3SHtD1PaWSWupqay9BrJg3qBRJwzMaaENR2JG7onXDVign9cdACr1vgva2tiJVnCWMV9MgYigMJUc7AaeWPA5o5v",
  "key39": "pVq8MAxKNVX8igYa5ZpTq2GqMiUDNxosDbiHC6daGxR3cD6FA55zPm9qu6SpAvUGAoU5efu67Jxb8skRzH8f5SK",
  "key40": "3UHF9cwEWsnpCWeAzHkqbAx74sw6ERjJwGkfiuAmiVWSGNAqqw2ZvWLg6SNo7Ta8HStqFr9gu46AMTuyvje7862p",
  "key41": "5i5PWhfjWQa91Z3WUMUhxDjgDRaqRordJYVc9T9pbDhSKrBcrA8FJQQg9f9K92TWRR1YGBbjbPGNmWbvnPrGB7uE"
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
