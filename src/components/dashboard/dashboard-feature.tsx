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
    "8y5d8Mb1ohLvSWZyoVo8DuuSCzv2cP755HQuAWDGYDX4CGLAGyoWnHpXWchpGbPGE3rZK1CCP9mPexuAQXWRmz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJq5zV3uLwpN99VtbojTCKtJHJto7Qv9g4sPp95oLKyaFfgwNUW9pwFD7aSUMFC4QSDeb9t2CG8wEszSBtR7inx",
  "key1": "5nC28Yotndn6S4CLfNninxHwnNrRR8b9FCzQ8bdunYwUnda4u2vBzfvdDVogKSueH1ya7MCR9bUfGL43MeEqV4Kg",
  "key2": "3CnEzk3S689S2nCR9uLwWmzpxWPDP9aikofnxmdnsZ8ey7YqC67JbJJaQzQvqAzdFiUBNL4766TDndeA5jJkxNjN",
  "key3": "3SNZNZDZ4inZ2GLEo8tvtEY2PHeir3Zrk8tgz4np3vDFuppz485Uf19xprAe1eJXLPG7LEWvvUdWJcgmEYTUZV4i",
  "key4": "v5ERJ1PcorurJRgXLbvbZVuEAUUx1E7UF1Nii8gwRio1GpAaUdcyP7ZZCxjP4d9YEnZmRTPRRr82xiHpUdXT6EX",
  "key5": "4Yi1bhkmqGtyEGD1ApiEVA7xVx3kKiVNtoG6hQANhEnhjQ5EGeTdPiCEtsZLF2xrJqScF1itcWNszaGcjh3Kf22V",
  "key6": "4AiDZ2a3uUqYjvNSBP25Le7cAmhKXCnR8y1226PyzWJKsYVHYKC3qpMxxykHYuaLz8PDDgQtc5Xk51CMuZd2XNWg",
  "key7": "3X5wru7ZFaM5LhiRWEJGeMMruHMk1rppsA2VS7TuEKozyv6oinPF2T3hHZrW2ewnV72JLa9F7TtvDbLSAEBjWKy9",
  "key8": "5Nazad33L1Hunu4HxeiAeTX8dvqwgbe8GDqDHCYkiaNwNJwVqRtNjSfZGjWFZ4Fsd3DJKmh3t9a58V8BGqBVYFhN",
  "key9": "3BXiyHvFZNgyPR5cW2vv3dASVYqBNNnLA5GqF3V392atfyyF31PeSjNKovtv6haGNE7abY2fdCLWaRvBp9tzaYM5",
  "key10": "5y5UWitc1pcEh1XQ9uEbG4nqKhPfUQe857dehiHRF8Xmub5Mkcr9FyJtUgTRPXuMcqRAtgDu3wBLWShEu2ED2YQX",
  "key11": "4D2SMgZKYuZfh25bYb9vNWhr1kHapnRsr1vLRi7DCw86aJgwWWJ3sExEYqFXeeUrPTqRoNxpUWe5kBc5KJhQrnz7",
  "key12": "5YWA3dCnBCHZZ34UNJAGYqjvQUEC65jhPH6PKTdTYCXxS2GHurRB25NZeu8ZV1ujsbtVoTwv2xSU2wWU1sDbrF6f",
  "key13": "3E8JBQD5dnCURN1aJhfT2vdVv1DpAkBJSm6mPnozYVdjsJPrCULGfwZmRfgRYiidL8pbNPX6cLbBYHnPKT5xMzPg",
  "key14": "4jZmNiVayRnQ5jbUmTBgGmAGGbgvDyuhJAqpMfsVmtj9JkWFzNgfeu5tL9wueV3yRzTfp96nVBEs62czbsuwANWx",
  "key15": "9nmkcxVWSoEifAgeam8CZYxupx8qEEVZxWdJqBpiBksT6SBZmPpA9CmaSo7SS2HogRUY2VbUj8TcGbPjWPJNAB6",
  "key16": "65TfVQ5tgDVBgWFCFWaqiRrAmjQH4a8nxe7Nn7X163nAqajB5RQ2yxSNFj2Dc26QBysYViMbphzWqx3W7f2zviYC",
  "key17": "aJ8H88NJ1cbb4Rxb4DSREk9AXhZgD6FPEBkNQH8NaNCD6xevGHHsbwQzjrt3eFS3CC48moj28BwyRoC5CAMKwRQ",
  "key18": "SJgZ3AgUDCbcEcfZ4AFmAg3WbkABqJAYTQA28rwpLTVnKQUWx4hZ7ytnKBx37WW4Pa5iS2yGaB42Yk9sffNjiiJ",
  "key19": "2sTSQGwpAbZgB2e3pVaJXp4UV42MCPoTpsEsLAptXqcmXNMiBYruDsnSeM7hJrDWFb7X4M47wW8fqMf9SLnLQaDw",
  "key20": "5ZKsEmESvs4Fiy8wnskaVWessubv1UHV96vHgCiLaguxkPiwD4inG3UpnYiwJPyVKJD41smDsx5z9dtJ38rzawVi",
  "key21": "2KEYHkCeHra6FgQysbDR4SVWF3hB7hp3BqxCdbEcyvWUgjB3GvX7deNnM4GCB7VfN8ozbwwhYpFgQurJcWRsNXQn",
  "key22": "3FvL2G4NRqzQMS78aMU7zN8x17Ur6Xi36JAV18kk28s7yU9FmWRpLHNkVX3e4rfkRXeQVLsiJETSytqyjmnuwq1C",
  "key23": "Sj751qrotJiSebsiyRTseKtraLinX3S98fvseZjQzjhqjJKjoFZCfWKrRvKsMx6nYGwViBmbw5xqvQoHhqVgctN",
  "key24": "4fJWQ224hWb94eoGmaXFPzG6nckGmSaFW6fzVDdRDD6ZKEmsyxaWobfF1ibD5SrVF51nBxTCj7e55F2Rnr2aKEXP",
  "key25": "5YqiEW4Lx9twXYZQzw3bRAAaRKWTvT2WY6xaky4LYADBGu71yEf7NvcG9hJKytWeFEC4SBp7RzVuq8LhQe1TrsQC",
  "key26": "3YBDMXFZ7jf5NXfw2vmTiAQiVJcbwZfoisTMT85Zj7e9a9m4ooPqDTnPKxQKPSiXckgAwfzKAwUp3qRkiuz7HzpC",
  "key27": "2wvphbffM1gVfKotVzPeimMUidk9LnCisP4oFq7AZerte3cwdcnAxS4LkA7Lp5Y1FWQuJAaW11H4FRhMPY6xfvuR",
  "key28": "3zbj8eWYJojMfH97tHRtwzafWHDzp9bhCqFgwg2PMfPzsfAkko6rz2vByFKUirGYMbUnQR3U15NjjWtWPmu5f6M4",
  "key29": "3QYj4hESsrBRhecrsiqc5dj37h7BW5yMRJqFXNPKkB4jzwPpxboTUPEvW2DJQAJZ8RAZ1HnXB5gy8PVAkCmnHU5z",
  "key30": "3xJdur35kDHJJQKKgErgcFU3oEwn2smHV4FhxUJJS2g2qiVmtL1gc2We7Ra5jKNJgfbz4mvNvXgoqZX4eKPU8ybr",
  "key31": "2whXfdowDYnK2CF8JWwMf2dBhVpF2cKtHmECorGFTEFiB6UtFUYfnNJDhueJARQhwLKwqDifJQWFxWcthaPj9RPB",
  "key32": "42bhCz4WVXz8GHmgLco799ov3EUZ9CDwoQE8g4YdNC1oL7ErpCcsM8gnmWb9SYLxaFSDNu1BmiWSXjFsc8uRDSZN",
  "key33": "3S7yYyxB6oBcYUPy8UUoxeLuf1HrznkXAKLgnJmAgCp3sQMDpAgZBY7WrpJKvrBsdTtWRAn2MM5FxsXyyMAA35KH",
  "key34": "5MAzgshEhyKAEmWm3kMT1Bi55YNvXLNWDjrYGrZxyUpWQ4q93acuR37VqZgEeUXPytusGCANymYeMU9eS5STPqfu",
  "key35": "55VsKTK2BkNLSoEFVyRGJu3rdpZNsCynKUXTczUPtp588xBM9TGbvqc1XHAU4syYQ85fcCsechkAeaBRNYMJRZfW",
  "key36": "4tExo9tTLznAdW3kmiyVTCPSY8JvMr24tWaQPJKtKX4cWy72Eofhy57YfRk535TtYVsFegotWbXxzJviZBF7CdLQ",
  "key37": "3yEFzw8L7mJhp5P1ZZcLYiwJMYyJGsKndj4yrgco14VMX4FL5nizUGL3CzQjYbT7txa7bELZSmfqNeVJH5bancdj",
  "key38": "5ad8hKahTw3SgqAc4XKv22sGDYpt8U2ddbPjwXoEVLmxyCncHz3Z37vDgwZtzxBLJcPicXWCJkRwD5TR2cAoJWsH",
  "key39": "4nhUVhQa3KtaAT1cA822Q1JSZLuD8ZpiNtPaYmRAHL2gnTNVzSJ6xW5DfCvukWZjLo4eBKieEy1BNYC7CYNSTDTa",
  "key40": "WqVyWrxQ9TL8BksFQSPUQ7NKU1jDq2PZ7zF5d6rYLP1a6TLi9Ne3nbXeHKKpMZPmSkdXkRt8pT8UoTQR5w1MgX2",
  "key41": "3YEXvBNg6EEDBc5TW41h2AKr357f6Xmn7bHFKNcTDEcedyAntBDN7N7kTaRLCpwqxMJC8mGAAQYsCirhiX496BSS"
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
