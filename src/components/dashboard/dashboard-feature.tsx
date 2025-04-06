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
    "3CTcguAeWpnwPnFGWdM6q114EvGkMVJSYw8hNE3FB4SRkcWZCWSFaa1BKtrR4nre3hHFQBXu3sRwAGWN3AoCEUKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NeyZnGkj57XYZs9nQcjHa1fTt2rTxTYEuPxNDv37TK3VauFF93eMR5dcPcEw2z7iZXisvBULwasuj9fiorQWXkT",
  "key1": "685sdCYNDMXTHWA9e8YUS6KjAUqTpERQNPnwdaGV9YLtebBkgpDYDrDcyJa2zfgBUZB8Ht2YLMDSHDEwFejq6bY",
  "key2": "5Wn2S525SR8BBTu7MDx28Ngm7379nDYpjkHdAVNz8Y2PfUhL7mDwgY4fiAaeJMpUTE7MjD3HDwmEbnq5z4Cgzd8a",
  "key3": "5ZD8D1q5hMRFitszrQ3gTyX6TdK5xyG7GPSBgn2oMy1hBLVEpzT49yNGGQJudeJQjLKLuAck17nN9da2d9C6vKiF",
  "key4": "3nCLaueTWtLc94KuWnGcXynnGC5Drz1tz4iDNwa7S5e7QtQgGYnuzPFpmTmNLjE5gwiV9z5uVEY25En1hLnidYuY",
  "key5": "2tohSonTfx9JPvcjo8c2hwAAfSCyi2kZwwZ2ZqjS9yzwiJ9fFvWH3GpZMuQzex2skfhvn2vQ6WpDNCCBRUkDBBdb",
  "key6": "5qfGKS9cGm2p6xbVR8SY5GcEWkdJGiFX5vAfNpnTwscNwXQA5X5j7cWjdACQGnq3268DX4ygVY759xgSF76Y6UKV",
  "key7": "2bxJqJQgMeb7rJABNiTNrEkwDWT4CQgnvEhBbVkNYbPj5tJrcGqoinrPfjZcnM4v3UGDqxhLkZwcp91G9avTNBrp",
  "key8": "Y5R1X8eSuFg4kYX32P8UNgQBswKPm8abimYKRfA6ehtrfB7qZg9mmLNQccZAkjQekzLs9dKcXPDTvXbiarPatkx",
  "key9": "2iwYuRGqzbQvdwrsa4fRbhsLiNGXEeRHjWhs2i1q3y4iT8yC2VY9WbWjZf2krwcyCmDmcyG8cyBt4rrXnKsDXQt2",
  "key10": "5HNEq3kFiLUQUpSqXEbMe5joDpmgMKB62ox1AyTXQuYMCbhJQ8X515rFXv9sNsJL2r6HTcBAkLscoytGh6Cbzk7s",
  "key11": "2hJAYKt1QbDiERbGnn8tPmqo1Liqby6P9errYaDUAZ6ucNRHfjfdGmYjvKwndSb6mGZEQAditFZVNd1intrYnMUX",
  "key12": "nBNqJH36RC66eKQm6mkZE9iwJjBpakjWHpkA63E5Rc7yWBkJsoJWbAg2wDxXcyAmaaSENHrcY4mkKZnjokms8ks",
  "key13": "2BBgXDooqDo7LfSsWr9BCFTdy298Jn4Bx5fbW2YK55xzXR8PPCT5LT53tc6kRrNrdvV9297PZU2k44jKyr2NBGK5",
  "key14": "eYKSDBDoJRxFPqn9T23JTTu5JUwxeQNyW9HyAQNFq4Ds3awe6AsdCPqTfWFZgZTN1wgNo37isCwgpugdxtpZtGY",
  "key15": "21nPmhgoNKRCQCBA81hAuyyed3zS3FrehXp1ghoXqzjJae4GixhHXGf4fgr3T4Wx3vLJZhbA4UxMEHwqvSTTx9WV",
  "key16": "5MhTuyn2hVtvSBBGxEWgY6MzPt1UcayNmaEgxPHpCHxiku4iu795AR4qjheqbrbyBH7EaSVnaRA1K4f8p7cnTyF6",
  "key17": "3DiH1kv5o9ejDcbN89x8nUM84Q2BqYr4ousfCGGE3KyzNRzgxvuoajTTSRcLr7uRBwJsMu8bXYBDYShmM1Wy3jSt",
  "key18": "s5rG45rkkWs87oF9iQKzyF9XoVByQLiff5NEapw27zGbB8RXAPa2AeE2bEq8KtsAkSysfeF68Hpj4Y1AfUheweT",
  "key19": "gDQpCgDKduhALtVMupDJruFMShUaFppQaGwboNFLGipyRwH6AGKNrKmrwtZKCYcYEi1SCjGcFR5vAje6c4eAkpf",
  "key20": "3b7KPGNHTB8jCgTfMwRjbPDyA9qkSViei8pPWf5qMHXPkZAmzTNfMft5K7h36SBiMXQqupjsN2j5tgCmEASZPSmE",
  "key21": "RKBaSz6KEv6u8kjpTkJgMLzyephSRCqM2qABCZnQ5p92wFYEsLGepMLs1G8KA3VokTWDkcRpMKrrkuqqznaASz2",
  "key22": "2VB7ALRnt43q6Awx8bnAevuEeXGvTAemnqB4EWWpBQLqHojcKhd5zPrG1ZnSY3FCH9cZpsfYjkRRSUwuhzndVMgK",
  "key23": "3sTYvRH5T9qJQLJ7Q4otzHagwbyZedn5Xj4xfAuhhEecuwVQMQsFXPiYFqRTEsFSgE4VzAs7YA3QJDwsQHSad7Ud",
  "key24": "a3fUwRrso2aAKhjfKfojxu1mEY4VSt2PdeVqYsXozGeHLmbLh6u59WVj2Pe1oCfVX8hufjzVZdsVZcDczfQC6q1",
  "key25": "2aainCT5FZaRh5Bzfom3sF7qGdaN5YGpcaPwCRRshyiZ7yoFcLFVC5CZa7zQMSGzSwczpzBu1fMuwHGtddLk5Gju",
  "key26": "5muYwpvHjNeb65NDRhpFd5Y1s4mNZ9oyw4zD51eEmtNZ9mVdfHmidBR8iWg4JGWUkxDFbYyUgBJSw2kUeHqtBq7u",
  "key27": "1X5wC1jan8s9fa9wJJM5Dg2sprJKXu81GfGwcfgkjvXaa3Ui3GpTzpVdHbNxmRA7ZrXRfBSC9kSehBLickfy4hx",
  "key28": "AaAMFbAeA9k8pXBnNZHiQwU5wNuSW4k3JQDqm5UJH4PRF2LuTcn7sFLNH3QNqWFyiqC7Cv5og8h8SaDM7rWkfyZ",
  "key29": "56d9fGvpdLD1uCf51Lxj1pz4VfVtm97nikjjLbVLBw9VJg1QK8Bpxc7TSfTNQgbsDzjkkxBiikCrX9FU4D7e7c11",
  "key30": "4D6amuZWz4Fs8XiTaaNHXm2L6VzE44prcmWxxapTjGVBPyrPBo1VTupZRoqr8aiRbx9E3FmfgW7U3ZahRsP37QqV",
  "key31": "3fL67SUUHJnj8NeQcwBijrC1H2hBm4fkTwFURwRi4RyHG5mKcQRKSvX9PhKnnJKcjGNLRAVx9rXZNuHtGx1oZuzv",
  "key32": "5Z7zCqndJdcqk9YdifN31KxmhbVJjA3k9STESekY33Yv3fWZxHowf5732e3sT5S4VHCu7CbV533ySaCvHafDNVzg",
  "key33": "2b4VsxM5HtGka98UE4nYLP2Z7YtsJcaZHGjiqn7PGdkJ8Em7t8sEgfBV1iP4ic9ZegQCnPwGK3moHRnkojLtTqZ1",
  "key34": "5kNtH9JfkGskrBNnn7D4XTJPKSXHet8HnUHdQJTETECtaU6HBgLDTgdpQzxU7jCnoUb6KejUstFcKDfSDMSuohbo",
  "key35": "3rdpWgf6MHqLdd3hR3RWDHVYGNu2Pmq3Q3YiQYEQXBVSAkJjy4PL1EJiqxtcEWdWPnKeq8s13RzJoTLbdCh1hb9b",
  "key36": "4Gb5Wraxv1UpY6tSPRa8dVrBSyYGCNdGgN34VDEtZ3UXpMSot8k42XqNgpTGm5bgEfjZ2pvtRDTqYreNXLTzMN4o",
  "key37": "2i7WfsB4dr5NmYMFWb6axzoH3AikWHCrd354D9Hx3jzeTet6LKRcVuL4LaCKbfKbEtDi54BW4ZXLYdYZoddh4ZM2",
  "key38": "3Y8iFgEhmGFfGBcFgVNtrdPvNcrLZ7TCY8Stz6WNFy4ZkashJsidQoW7d28jtdPWPF9sPT8S49ARKBJSqsNkQxV2",
  "key39": "58PieTqYU2XJG93HNnmUyVKJA3fSFuUEakvQnociiYzCvbs8tmRxMottGGajsg93faL8s2QnVNPd1qeKvzuZXYb",
  "key40": "5ERWNhNrk6hmFyEEHkQkZEvNqJekW7pvaMzSKu8zdAzZctZfbCMEEDJ6LhEfGsv9SiyQTeGXL3EeAgkMRuumTk1R",
  "key41": "BdFwL3sMf2j2eFUXCe2pNLrT5WfofHPBkWunuEp6f3xx3sAf1yrs7GNuXyBHJfQddqae2YZN4Gt3P4w6bFQdq2C",
  "key42": "2wvH7CVxw1HLQCDKgBvk6uSdyXsJCDSNUkomersEqRPRLvEsXsR68VZy6oenQUtT9iFkZ4frdDs9rA7GvzaySAq3",
  "key43": "4SDVnxw7524dZ2k9ADWhRvwigztnjuTrFA9v78MPdnpDgjnnFifLcNpuFDPJyfo9UJc87B3apj4tejZgftSjV3aj"
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
