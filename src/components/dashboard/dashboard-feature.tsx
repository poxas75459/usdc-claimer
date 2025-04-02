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
    "5ApqYEYDWpNtrQkEH1JF6sb6wc72bm22Q1TNHBU4DBYGeHbTywtioGbdQUjNNrEuprVqGL4WNyW31DNUivPzXWMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P3Bj7U2Ai95uomJ9XsboGH54K4jpvMRR6LnL6P3D6t2FnfVmHCwfMREVbUxSQp55r3JKTDaDtuGH6ivjyrLLJ39",
  "key1": "2UikGf6rrgdfdjydvnCnLYygb1SetU3BYhJpZx1RA7sYLfJecM3xXcAwxNStr2FqrxsZpxEjFwawsZ7Fy35GWxzo",
  "key2": "2EYL8cxXwFduAYQYrtjcxE5q2HpG4j7ZbBMb4hCxmFZ4BYiqVrPSFn1Ht4RMH3FYj1FSUhxNzvuCRUdNsoVu379X",
  "key3": "2pKtsCznAaKPCu5mu8YZrVu8fRNiLZKqveWJsAuj14j9BjKWwJmpGCfYxfnpyhnSFyEjhdfHwogPkMNFSf59Jc1H",
  "key4": "3q6Pgq9coJMVBXay7ciQNLySBmnYM9kwP46a6eAzF36M7Aj7U7oVd65mA73CzSurNX8qSTrNKXp7SATqpcigTcSM",
  "key5": "62ao2T78qVCnJXSKxrQZDfU5taNKpYH4m2u1a6McMtTWFPH2vWWKJjpzdMCAYE6o2PL11FkgKm6MDk3dC2Q7aHXE",
  "key6": "5awoPanYFNSuW8zVM7qKtdDgLNSxy4MtrP17w3dPjxg7SCCCGxsH3wWR1daU3z9dYxWQickzfbrr7RzWedPrt4uQ",
  "key7": "2wYno8JUpPMgcisK2XaWB1J19scjM7mKYQw5Z8RBUj6gGQxTxwV8UmQhe9qCEt8JQojV5LqEqAcdAJAzmU4zZNd",
  "key8": "3KqAqS1W6ZzUxQw8YQ4F36zNN5nKdG6gRcwcJz7oeADni9oLhpquExtfg9tKNJcvJVJi3Put92jgw56hzpYuKCsT",
  "key9": "4XxH19vo4nL16xmnACrZCSXT1Xve1NAnbB79ZY8EoxJE9VvTE66mpeHobpF59mFAJfvyzbZ9dH2UfUHZzfBkFiKM",
  "key10": "24zr1P6irZYFH67J9o86K5K6oksLHASoycpAbCjqgzACNNgqdoeRKmXbqFWUN5iGwLDSfEY1e1LR5M3gE6JDiWRz",
  "key11": "5oDwHUHcE6RYJNQKfMf9x59LRbyom3aTC7ENU6FwhGDwngVJb9DjRHdK98vyDUYBowFcS9JTcPnXExoA9upNT4mx",
  "key12": "4YEsRhtyRwWczko9BkYbhFkYqVian7Ne7KNQVZnUem2GgWdaXY8HxrPDKZWVQuPbrdbLqFUzKPJaXGpEkpgP8YVw",
  "key13": "4vKnb5gQdSj15tuakdu1oT9mutpXnua8EpxbatoUoDdXDWsbRRD4kvhiSGKRG5wCzfyALqzunJdgKQoMvhvZd2cn",
  "key14": "4yFkn2indDoAej8avsdTVY9hWN9fcW6SADr3qa4zbcTtatwnLZczikwNff5tNFM7EvmSTxTDKTjNbpFazJbgCpGN",
  "key15": "5Vn1QMS1sVyudMxbNdt3qRj7YQ9zbEwMLAqTatSJui3YLUCBLcLYm2LfBFWzr2VWRN3PzhyDN9Tn4wqYrethN9uE",
  "key16": "5VMUmAN8Nd1oDwtdvRYTFEA4Wx77K5hH3A96iG65MVq9qYRck1Agz6zq8hcopuUKC2UEshUZenDWmfuuCWeMcrC7",
  "key17": "Tqvqq9pYisA51YkAmWFwK8gpMAX8hR31fyHdCFUunFXePwUx1eCKMM9kSakfLDP8uoyn3FAZ3DDHSNJV3PtToq8",
  "key18": "acJqeymG5Fts33xE8Zzc6UsitpkovXUqq7RLgk3WeGdfN7452GxMJrJzuJazuuV7agAkxvJHWpcxGoGF4Z74dtc",
  "key19": "JyQA92m2tuooy8BnERgLF57jVTXzxKW6J6TWFS8tri9AegN2vygoEbn2sA8xFoiMy5RgsJViv2buyEpjAQumabF",
  "key20": "5qKHqbp1wnd5MP15F3ZjQAuKH1c9mvN3m8JF3kdcvvYRYwwDdMGTUj7knkLVvAUKZVEcyVm8gdF6JjcpGqdTaEnv",
  "key21": "8Mg2oeHiYbdhmGwERvsLz8QxkbvExZH71DVjrhWCQyo1RyTm8yfKMr4YUsrjgtuNpNz6vdhdCYFVjgiCbrhsCzP",
  "key22": "5Hnx4QjSZW2TFQzPMSck3y8XSmfFcR9Quhr5jAJAna5HHjkRhzyPeHaHozgC98VWwjRhLYym86EX64suWFmhf53M",
  "key23": "5Gp2qdWtqUa29zFwrApRqJVadnULzAtG2DB5SMUzGEBnPX9QnHs6HY5PCdaMcojDA1iJdUsLLFpbxLQ3unHaeQoR",
  "key24": "2S9KsFEzJ8nY9PiDFLN8fEiizjeAdyKJAfDxQno38YXc7sw7Qm2TQACj153TohmMPD4NtF65fUNK643Z3jW28SUo",
  "key25": "4G6Kwfj3sVvJ7vtpkYnUh27MJjoG7eX9w5NrnugDVoBsWAggfhL8VSuDGGsCSK9QCJFG6oj6SsebVvpp8gTUyYk7",
  "key26": "4eALaSjeitj3BXuS6oyoMrMxCUkooyKTuFpdR7EsMd2R2APPVZsJysFjpPCZ2DDo7bXS6cf2cVEvoHfbQfcMzU6D",
  "key27": "5EMEcpmN3M5UTVJqGtSPNti2E1hktVmkVkkaiPyK6KK62e8qntYozDbSLqExUcBF6EzpSnSWo5XYFvojME3Cq5Qb",
  "key28": "5LSDrLQAp56EktDbAzXhmcJrcYfvFGVvdPS8oq8SEEGsCC1CKSbd3D44n191jj2wGH8greXaBwcRc9vK54iviCC8",
  "key29": "4SivVkaHwpbj8j4zyQzsqAUB4HXJGxRzWZv2Z2oUbzhbZznf4ARyAVaSARddxQnDVPot4deNknDWaynUHcAcuvWP",
  "key30": "1JgijfbXHaZ8BVW7Zbbk4vkBirGEUF7S2DhsMzv1LQMTSseJVUp12oEN44b2eZnmrVjkJph4U5rJQFGoDmmwGDi",
  "key31": "ynwNTBu9Dwc9rF7woXn4EbHf7G6h7JfZdcZQHMH4y5TwxT4Lf6j42emz1aNqigobr3zXr2yr3ErgVqudqX3ZFfg",
  "key32": "2nqMi2tA84PmogKkjUaAUnuDt8qhQUBBy1jxgkCUe5jh7fFmUEsNLpyXKqEgVfsLaDWSjBHwzfYKCrMduRJkPds4",
  "key33": "2GFuZunpFJpeZTXguPdg3XwwqBMuHBpgCPEj1LUstv1cmHjWJmKBvb7RKxUeX7PSQ8ZBbkMxQdRfEwmwcAEmcTsz",
  "key34": "pAPd6v5GjjLQt5Bdqei9gPMKkqJ6eBqPYU8ZEYmvU1k1YmrJ1HpcSQYsEQmp27cWPVPUH5FY9DkRZsXPaB8WmqN",
  "key35": "3D1aLHwQKvhCZfGd27qhkhcp3G3gaLPZLFrXPHc5Hu523HF4cAtLQCMxQTnv9kfsYu52qHmXyqJpFDsekS66Yjew",
  "key36": "2FznqypB2marYqEMxLtbb81Bdg1Zam9CE3Biguq9gpZNBRgyZfwyfeWSsTnFTvVyUphc5A4bm2JJtGE2A8h4jQcF",
  "key37": "3TRPdPSCPFufQngry8Ru1xLW8uKveqZ5SG7fakhBn5PTCr1m3xWRTyeteGEbp12ftspgczUFYFZWbyNrrocqfSr9",
  "key38": "2R4NZd9mzJuQaf5gX1M5sxQhistikCBQLhJDcEpNQHgi9gCe3kaeKEEqB6LtHecHkos5mC4U7knZ84k5U9RshyxH",
  "key39": "CqKuY1vowd2GwSXKvZgi41NWmQyXJz89S848ADMtQtjPkMffctJKqSCn4DMWqSkaWA3WxBcTs9TGSX9i4N2YEh9",
  "key40": "EP8TdfhWrhbKWvnx55zVqvxbgyoRj3vktWLz5L6dCy3szc7z3o4Uvenu2UUfRgKVFiNr9MahoczcSTUaDH3GCJa",
  "key41": "29efzesAbg2xfujfiE99kAooNWfix8ZAt1Z2yExJQn77dQddw8qZD4GVL3UVCisgEJ96jYzTon8QYr7azM6HeMRZ",
  "key42": "3MsU5ZXPyLSUocastzH3W8e7Zd2GNTDx417Pg94bqqJ29gfzYs7v95gKZsRZiPNSpg81h5Wrbdry19Wd7Rk9dvCm",
  "key43": "5UCxCcraTB5aCdQaux1C2b6efxEg6Zav4p6DkTcteDeDY7wEzJeh9YSTBb9Fv4p2szm5H3Fn8wqnffDrVeGuhyeU",
  "key44": "3cxYsLB1TrdyZKzSpV8wkgY1TJaa5BaQ192BSiXUcZSJNR2qai8RDZ9KnCSgqHMhizgS4zFUR8FangppASSzJyL7"
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
