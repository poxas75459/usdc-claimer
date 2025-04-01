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
    "2SYNGhTcXrvVd7D9XzyMniqh8sb7UgD47yiwH1eQycBbhMycpgLTKVNr3KVvqRvtSohHWSPyxwpMh68bqLcBPTbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eoC1sHZb5YEP9Jmo24htwfbne9ZGgvsDYkQcCt9C13J5oLcCVjEWJJqxyVmDtzfN3uoGCBGxEmuPHmt87x1nRxC",
  "key1": "3kW7buTLXiH9y98DxHKsooNU4pGtJQSJXMWi3NVKGDwxoHVmWepApuPFYEQQtzgGubA4eMx9BKzAWn8Vicof2wTQ",
  "key2": "4SbS6DvtGNS5ARjXXkdAFn22TamfTFRJyhNSNwLfyFujLBAT36yJ2p4K2UHtqphefT7UTdAkwVB8nFpBPmg7XVWp",
  "key3": "25txkVKuNXfTyubGQfSjex1DnZGBavWyqNhQqjKyPcA5QVQ4S724ExX3w6sbawZ8ekRy1R4jRcVMiAtiMuxjrhc2",
  "key4": "2jkA3bgqcXwCHBLf9DRoVkpSYuhPjGgcXtwFSTyeByKqjFYidyVMR6Sz3drsVuLJCVS7pLoZs1mo6MsMthnC4rMA",
  "key5": "rnHwdZByekncK5Z64CSrhxk9i9N4Gheh5kKijrzUBio1UcMFFw9rvhNqirQTuCrp3ooZcQU5izcyWPa95MQsBvS",
  "key6": "pu5FAdJVhn36rk6iKMxFwJUUq3kJEwgg5PR1F8DkhaTyHETE65BK9Zcmop5HDdZsRwaCBS6XGcswAV9rLS19VP4",
  "key7": "2XbnpE5tWXErGKDKAzc84jdxWxyYJ5gdLVJGUgb5kDPgkwW42dtESbCPLJ69bSickzSdRopnyTmxGMV14Mmpo6G6",
  "key8": "5Xj8LzGLkSYHn2oevYgsPRgYq6cAb7ZpET34c74ksgPpx6Tj9CmNbMJXh87u8pUVergqJmbUSv3FSqjQ8h22YQhj",
  "key9": "2iFjAp65y2dVsYGNLJjEvABYipoozPB58pCPLaQReTjK6MPMKb1wnVZKy76RLuFHPWhTjxfL4rA5BWHTKWKUGr9d",
  "key10": "49MrC9vwsaxYMFgcbLWGkia6WN1YUKkr5uodgmfynZuU3fU1H9p1NABHibQB5SafoeW9xk4WC2DXYUwDneqLCAZW",
  "key11": "5NDVC3dgKZyfQZAULwbA2J1Unckh4RfPtw4vTnXLEg8LQsP2gLWb5WF4xwa3mkRBhym2WEjRu7UakeLrQthjBETL",
  "key12": "WNACGYYhz8VuWLJQsiUaqr6uzUfmvaUJwgSCT5XpwYtKRMDcCXUSZPyXMngxkunh5wYRbmHkF89WRv62uc6d6JH",
  "key13": "4eNi2kCAd1Vwu8Ee5inSc4cpnXY498Upoajyw7JfLjfvrnXx2b1fWkegCCnMmm9tFDSzBUNqvU11qnrHzfL8EBVK",
  "key14": "P5SoefkQboU75fifVvTsYxKNgiPLFk8sLg97zCHDxBZHHG5dduZiw9ZXMZ3h4KyjwiUj3PcSsmWVbU1J56qucSq",
  "key15": "51LysgC76SvA6v6nzf4CCL49pPgTeNf3PC1rK9VT8Gienve6KhYS5r7Jkb6kZt81nAjeLhMXhDqRC5YomKw93yk6",
  "key16": "gen1ov44whsUEmVgs7ae5Mf49X9ndhcdAziH1f8CaQMRacbU5LEx7kczdEXhjH2KRD3NEXnSgEDWv4ASK6G5Uus",
  "key17": "sCXAvNV5MRnh88KywHHQmFxx3DV2hBbAfWXbFqxWmkCieXHiEh9G7xsf7vjx3VxwV4mrZYYL4joi2vuvRswJeYu",
  "key18": "2mDfpEQoNkNAzeb56Lfdzyd1GbtomkPsPef6G8hZHzmADwBcymj7iTDNPyQZQxYBBq2EoBd2oJLJBLRBUvogdz43",
  "key19": "5ENEmZxGi49VW9GdBFNdTCz2WCqyrXCkvUtfbjqitHkbcdnvYEwDLd2cWa2tEhn3sq8uKdjhrJHdKGQz1KrH1R2v",
  "key20": "mXJGBDPnuVCbXXgaFySiQtyrzFmWSARC7wkhpa4uHF5esmsB5mtqAg9BaE5DnFSvSaRpZ2EgWnhjwHZvfAq6kPX",
  "key21": "ZLuKuTKYVdN57wS8YPjXaM179jLPzx29SXDEjaZ9QNWUs8AFyQW4JimEjX5XJVW4MPz1dcpVf4VDrm3sDwKwre1",
  "key22": "Q82kiiPF4WPbuYcpDNSegb4fAtqkHLzSf7xZYmG1kMMPA9BRTJCnfgtkALs5vV9oq6yTydaUv2ov24YUepejVEq",
  "key23": "4F7oVFMJUrSh6CpZmyqx2AkKEVccXtS4nXVUVssbSJPxVCkeaTqqUgXjA7tmTdnPcUEbD3uvkywGudrC9krqXJG4",
  "key24": "45BcWBBv3GMwfNayJMsAdXLUTKUYCBH6Hb1DfwimUjF42kxYys5CVnmjjU3EnHHn5cphdtB29ojHeidRF3c85PcW",
  "key25": "5WD6rnPg1gPW4JgBM3grTUPrwZ8sh5tJgoLPobNKLzhYBnye8zeTM9WJ6UDtLgCgxmTmg1bPk275739WaLAd1frp",
  "key26": "4q3coiZm5K7mJkzUjBrDxkSjLZhVsXGgXVog2u2ndqNuW8BmuVK6eqWL2CexBdJ6nr2NHCqP4sqrYGQTdrAvpTp3",
  "key27": "46u7iwRbeHgGxFHDr5HWQJYoMHQ264dAcE4Gn6RqKR84BfUNtXH3k55f6fEfhS2fjgupbbYa2w3idp5FvgPdQaPr",
  "key28": "HtybTcsvhVNzRpvGvvs1FDGjFj6AepQQMYLv8c9eiqbKocUaQ6jBkMJr7ySBhMHQrEwwyEFTKcvtjgKTjxJ3TUC",
  "key29": "5PXEifvxuPrPUpA6qrAA9JoQsTiytJzVAupV561wnmsCrJSh7PYjBVK4dsbVfVH2buNUf6TWoDb4EhLsCQBJ6i95",
  "key30": "5J613JypSPQZpuiRWyCtrM7VJrUDVMpj3S79i12Sb1mvmrv1v9YDqTi4bCdFAyG66nr6S5M5vRrKqL9d45Z7gPKk",
  "key31": "ENHDe52uRkCPAUqjPV2RcpRAihCX9LGSEw68k9BSTEB5CcQf1jKjY6QuDQB8bfU2FjePR2NsHWXzPhuwCxr5Xmw",
  "key32": "FKqtRqPsc9iY5wa9wbpWAjStuXNFvQBm7g8qW4HHtqJBq6TMPnXx6vVs2sXkNwWs14Nor2v8CzBHn4dQ9eqqhX5",
  "key33": "31V4bCaZHqcPKeFcCNiuQPamibqsnsZXTm4bt3HtVqXXugQPS6CsMM7rCbSHmTZSLyo8TST9eXqq4gTCvUu9ySN6",
  "key34": "2zeCVfTM7RMqurVZh2wcd6ehgbVXSkLCXDcBgUQLcjYi81cedoPRZgpNbND8FMcbBTkjQGgYMvtsqqMPfVeHkDNT"
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
