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
    "2CDmahXVAxxXEaZN61MK6jp5sAeSKiUTqXnsN8V7QpRUdZ9YPHdbbNwdhJoWjW6hHw1Rt2stsaTg2Qe9DzvnfMwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zUJPnHpG3kzkiKAkULNxgWngxZQWX4XBcvVq2J1z4dL9iGP93enyNSmsYxtDgdfzwBVuv2yu8GTUg9XvdJsZFQ2",
  "key1": "o8uq9CAa1Co28czPhjbeWQvRcvgN2ZCvBMTG1kgDBWcfZKyMdWzLQ9bw13Bqz7CRdn47x24RPpP2Hc7sk9AzXWK",
  "key2": "2gWT8eJFppKgFvHvUMH7Zbd6YAkjaudYY1gt19F2cvDRu9a9dBzF5Fef5rdLBy9kpe16Sj5miHTJzKRx4u534YHd",
  "key3": "4hTmn1Vt1opMAk8Q4xSwjr2gPi2xFNBzWiLYGNUdVV97QhmWcpgEdw6cR2hQmJKH7dgfNAoVLHWkhXQW3151h48H",
  "key4": "62zWkZpq2dPmdTMofsTB3V1yDHL2LSa27MwyFUT8LYTXBiLVr5YZPTTVPAqq7ycFwu5yCyoAv6nzsRiBwyrzqYHd",
  "key5": "2xEd4AbfLKsAiWADn6AoHLp8EfjqzdUcz6r9mggNXULHQeBp1B3RkbGUdDRyMTCuNDJCYsXpmxbxtpLUwPGGTkby",
  "key6": "5Q5Sx2mJYbwBU6LU6HtfHL2B976t6So9sEMKg6xBwwMGpa4Mf83uadUXKvcXm582fCP6JdpF85TGqpNs41vfmhnX",
  "key7": "61czkChxBrvDh52zCnK4FqxVD8dNwEJpvp32tFaHbFur3hirTvg7jg8XPgCxbV1uEuFUXMhwD7vqMAEb3zUvCZRV",
  "key8": "3M4sBWcATSFqjxQ1Dufvz83YnXWmbJP56xbpbPWCGJfWvcTpjrJraSdiGehqEQi8LZiwRsi6AqJBatDWSKxnuHjp",
  "key9": "62Fwj6RbyLYBdfq8DZL6NyxZ7YvrbSgZxq47n7zrCtYdrKZzLugLeutJQKwQzfL6dMzTS7XPMCwA1kSTndSmKSjj",
  "key10": "AvGhbNzpJ1GshW1f1XhEHS3uYJiwC9fWf1GvpDRPvJEM3N97diub5JtwvR4UDrSGtVk4mzfua9QzUqMfZPVgnyZ",
  "key11": "5gQNzYUSzxxMgLTiQpzWX1kGi2L3XJVigHKvHwDDy93SLDL5Fy88cmk7PnbD8ADTxXT9vQWkKHZoF9rQBKYQP3FX",
  "key12": "2uAJALeYSyhgVYdQb2LzG4CQx7RLs8iBZtvoS8tLbwnNeoupcxKd3ef8US8mGWCbqEiKkr6kakGUNkCotUth3y4t",
  "key13": "4dLtBAUFBsUJehW1ZwskB1sP8c5qjTbYg2JYwkk7EPX4XyNxn3fdmg11MwmrUCv6KGVBkP5L3Q6kGhfB8dbMEWPG",
  "key14": "3RSXkqogwXxDLuaubqjKuHZrMt4GoNwefAzKnpVU1W4RiC84Y1Paqj8rT2DfLiezAhjFpo8TFPyAk5rRUE4PJyDn",
  "key15": "hSwX6vWDnm4nqmNK1qZLWY7yQAVKoREQQcANRQicNDcWXzHkNfuucwKY6qSdFTXgJqPYqeAx8JKUyE3WC3smeZA",
  "key16": "4Jpd7ey1NgEfMgsCSKDKUWzd6Zr35ddoLxok2FcZUFj8wmwQdMQHrFJ62uLFut2PBQbrSC5d9z52gYRszxuGnqeA",
  "key17": "4o3MGa9SRY3Atuf2UC7ha1YW3FovzYgzPLb2yz8H2PCr5AM6ft6jF6aWwmJdLXGSKtYTcHeoVihtFGgcfZEVYboc",
  "key18": "4LcdAEsQ2YdF9jKBGHDYKA5oAirqM3FZtsxRrP9LLbjZUbeGGYSTrhLGjiMGo2YuW8r3xDMChurYs8cutotQ4LCo",
  "key19": "2APc5q2eW7JBLSPeC5HW6ojpgrrywowGxjPfJqPtYHK9rmRZL18niAHsVtFm3tPjBaSzS8pXW2pdsx4VGeGQRQ5E",
  "key20": "3xd3bpSwErwSsjReBbaS4Bx491cjiN72ZoXngwn4uL3wdpMsoRgDVLSJUdEMBW3MxpYVbTubBcmYSfdAeQzWp5tA",
  "key21": "2HgU61mPJtwhYDzbK5cHKvh4APziEQvbZ7x8dNc9ZkNhd1jWfYBzf3hMEL89Aqd8dMSABHgAGhWyboYT2rAufxC7",
  "key22": "2AgLJaqdYgJLsu2DcBfshMgka9JdZ53yJZuo95Yf51iUCTdSrrc9ctfLWZWyhxQaFcfYJJiPjYX1AVpVLmNYkHQr",
  "key23": "3VmeXVivM6qeTZwLoywyj2xH9aHPdezBt5Tr4LGyE2caGHhHaSvdrUM5xS2nPz4Re1ztNYqhoK42bfAX1qMgbQNs",
  "key24": "5b6XgH8BaBk8DFNvWTwKfrYW8RF7ZxkyFDzEY2TutQSHL3z7xuQkowDcy95xRSqJzijya61HofUPWbcj1WuxyWgW",
  "key25": "Dzx1EXd1rNi228FAMgTt2FZHUVAqJRS35SeSjbtXj7sCHFTyy46Z4kfCCzsGf6Xf6eApXUgbbN2myHiborJHsv8",
  "key26": "38abN6S6i22T5w2Z552PCma4XYKeZgbJdrBhDcS2iDwHc8gmq42LzYdu273NqDkfjGLged2nr5zVriCH3nxWwwA6",
  "key27": "3ZsNfVi8h2wLccaharktDi5vx6q7LPtAMBvYMmboGC2JHQKhpLJLoKREcbbipaPKap6Zby5CGHtW1Qm3DfysgetP",
  "key28": "4vK3b18h3YnR6Tb497gKhjEiGXsn8iTT61qQCcPvvqRG6QRJvLrCs5sCktxiouyxcwGawTyZcwqDEwJMr7LcDGTL",
  "key29": "3LunrxTVVJQ4dNkxNrQjfj5EFeSndaYpxALfQT54wxsANxiAtdmARPP9wuT29BEr5RCCM44ZbkbAKVQAC157rart",
  "key30": "284ndTXUf9NrjanwrQnZ6PC3uBRxnYUNuXBoNeeJ3hs3ocYGjDTJ1M5eQZkjdD5ZUgX8vW2D33jzMKsQtMkTWZiQ",
  "key31": "5H2SEBbBBiqZWxM6cfdK9jfTPbJAjwa2LRCFyBCV6c1sPHh2nohLPupatvuPKDSd2iourE3XnH76hSwZVQGF3Aiy",
  "key32": "mYT5xwBhimygJB1RvZsppZzLaYX8LJMrw4zcbjfz3s4CccRuD7vNLfxiYpNnBWpGCD1TmaHw391vcg5fvv52xtP",
  "key33": "4WXQyNqvEDeYxwaCDMwHqK6DuZ9R4Fdb6FE8YpuYZtbY6FSyaRhNhN2x13qdPu5tq1kicBkKGTc88sk8XLhCQRqs",
  "key34": "4vVD6mB85aHP3VDSvZc2Q5HBBM1wkBi5pzrANs4y1iA4LDfKPmwmvVatp5BhnMg7dB8qKhbHFEeJjbGYeTCrBNiv",
  "key35": "CPCrdWr6sJ2HvTEqW2yCdRLevHXvKoxS5BNTnsQ6SBdpabUvw1kzWa5KHXXYtv8hmGDsZPQbJdeZnkvWPFdYb9k",
  "key36": "4HUDPigqY919HfuXjCHoF2eatyGPAoUeHpCpfeEkbGJbG69rNVe3yzvkg18C2B6JjohnGCsW8B6om2Q9WGCA7n2X",
  "key37": "5Y6jNS8CdUZ5uhTPufCNUg2h9mSdbzSNqiYpwfxZitsswo3sYACsmroneVAQv2ENYkyxngLKmAcVesDznrUwNRg",
  "key38": "5kXCtsqkHWdD2iUjSqSQ2FnZjofPj42117g1e3Fyy377BWPUQNAL783XSc5dCSzAk5WxA2u6imhnVLrAzPLhyv7m",
  "key39": "4XHGDv2QVrShLHp3eF8KiurrA6WHZoNi7Q1fdihVBcmLVtgpCYNrZYLzrYpKpf7a9wsP4ab3nAJnpfS1xXnzwkEK",
  "key40": "3TkQTu9S3tpRE7zsR1GuBpvSXkLPMvPxGFFh23yZpXhLNxcrbwfnM8dnkh5WxVEkSDTJSsHwYAeWH1vSfrd1gBpw",
  "key41": "3nGpzbqrYh5UenayWPbDrYqLNwPKvhKzhH12Yesruu879YAeJW5FYK7VL5REMMegqnveWQkFXMc7fcDuzKN3BbM4",
  "key42": "4ZqtnV4bgWHwWZdtDDRwpEHQivDqQRK3bJyRotQXDCxPdXeayoCBknkjHYCTPyr1trxRfMWjvu2SzwfxiaFvGmpQ",
  "key43": "2EEsUVTL7fkn9LpqDxRYJ3GLZhmCEdbsenH9LM7mK1eDvyfcZPqrUrqq7W5DV9hPo1xdPrpj93t3T47kr7xAhYPr"
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
