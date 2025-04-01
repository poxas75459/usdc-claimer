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
    "2TfLegTsKufZQiVZdRRWdjQHuDaEtmHnnXzYtK5LxTpdJfaVfjccMPTbHkheKRd9Th6Q3sWAqJnzDZR1mxg7Spxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqEXwXg9bRdRxvCpTt177jgyGF4XVtszHFqxJFg7FHhwefhnLNuvosWnFTk5V9wUp6Tpnb6TSYxGAoF2qZyKc9",
  "key1": "5TNYJFfMt4gutuw3P9icbPDzttvTffp7bBgpX7pw4VwVxLimaV5JDCEH3sZ27YMunwWEyX49swDsJopCkRaMFXcW",
  "key2": "3xYjuSUozLMDNqMPSsUfHVsjQu9tdrSpQUPf6xBzxgWWiKL7QqWFRiWdJpJ62rTUx9rUoDAKU8yrG2DAbUuf1Uby",
  "key3": "5dGjxkS8vnCbuvMCB8dnMZsGUGp2hyLaoaC81nypdYMJXFdCLTEMhg1QHkDU3WCGGY9AcpcZXiSQeNgWTfgvwoXP",
  "key4": "3F57mvh8N8sFySH4C17yBwTxELXAWMzpPgegceLW6jmbJZcEX8C8DPJiKTpPCCeKz9qnmtXtr3Sko1fctHGqECc2",
  "key5": "5LJrJ1QYhqoovsoghJJTv6HcRznYU85jGMbHjYjByMwz6EDsDUMgvk5PtJ8vLaf7AtjUEC5XpoDba9RdhCqHWbN3",
  "key6": "2PacG6k3gtqGZWesD1bX5pD2TM1buL4KtRuSSDaq1Gp8XVFzVYdQSNcwXpPeuk8rMnyM1jT1wUzvGK5Bdc7rGZyc",
  "key7": "5FuJGkHYuzNfSphD3D7qYSc2xswAFSZx3e17TZLBakxdoAGEHbtg22pvzRLaFFWTfHDdDWZPEE4T7FhVGhLPkekV",
  "key8": "5xJfQwrxefrBTjiyN9zCRYkLpWJcNVzs9zQN3t4dwKEoYYarAaXpEFW3NsqnyF8SkDEUVZ1eD93VsUjHWYFbUiDU",
  "key9": "LPxmgYTUW3iEhnGMmkUK9YBYu6YLacTnr3QFVftZZfVAgTt3WtD2JH1DpfKpPJ3ex4oKRWQLTV2CcHi3kTSy2Dw",
  "key10": "2gvvZ5RXA7QAi2tZMHiWik4eHZzLQAxAHgLCMAx5PEhcFhzrY8F4thDZz1ERYnvyuBu6mPWo3pyndcmDKibPSaBg",
  "key11": "yknERjPhBmZQ15gkGxQzfG2vnoTSbRhygvF8PAvKE4xwRT7juc4rh3xZdwEDayu7mUAZHT62FFLYLTUhRs4AieL",
  "key12": "3xPt5yP8wBQvuzxUtUb66ZBNbXeM9JDxVuWaqfTuWfUtSNGTCBwKBjvkNPxTS2GWrY4nZPW89ZtDwE4GeuA2ESE2",
  "key13": "2pqyXXK5LUXSPaXhqKXsEUbXzrhhqfeFnAFeDsxHf619dY8HzwoextyeEfRPKt2wkuhjaKYPXqUNCBindZooHiNk",
  "key14": "2mJ5PTGimzH4WKpdU3YFUk38Me9HPwk7eQewAwnwGNF7gEHTrYbLzZ1C65f5quLEUahATDdMSRNPTADcgjwUv2TC",
  "key15": "5oSVyNvH77xBKmwbQucuhPi335LTBsuvaaDQHRtBJVSTkWPZiqycWU9qLB5YvomKDWYePQh6V6tPMw3VpuMtyQVq",
  "key16": "4HAp8FwAUXiKTh3Y9BgePyZEwr2R6yZW1bLwDcF5ujy3m3BddRCVLxx7Za9BdVyQK2Tu3zh3tBKZ2uiFwTQo1V52",
  "key17": "1Y4b5umuFJcUvFFuZRDzDvfWvajmApAck8GqTeZ8Et24Zfz5QymaHBVx2Y3kdUg4UbdXcVSKN74Na36oLFSbjhd",
  "key18": "2b4j26fTfBGYoAhijC8CFgCERph4c9iXnQjTiVEKtCU5H7NroPsNbcYZDjVtki3HdHFyRU6bJ2sX4QfF8vUmbFrg",
  "key19": "2KqyT3eG6KBBA6r9UMtFbS89WhRWcxLwsiBqwHSVDNABxpuAANGryGbc9ERSGUThbbN4oCrcDVhnmfiu4VwuXfRF",
  "key20": "3qpax1PTYuJvi2upRERAFVFX88dgkPc4CXAC5CU2xaYKxVhwHDXPs8SSc5FFkQVZkowwSbqBAT7YYquYeG7MenZG",
  "key21": "CwbJxGxLBjmDoNswoEKfWxCGYoZgqXcgUfhss3SV8L5kra2WpMsUBHtBVuYwi5hsEU75Ev9pcqgnSi5ZS9YoUC8",
  "key22": "21qmDM6hjZUTAx7h7rNc7Xr2Q7fnjKTw8vN23byWH3tvMvdYvYAVhX5tM782YhmDKUzf11qE4zG7gSbnwYx6UuLR",
  "key23": "5UjPKSzBNf7AEgE4gkKcbNyMkz9Q6K6HAyXyzix71BwhMJftiHQaX1qFVyCm3DEkdjN7rZnnng9TFkGFGpvkr4Ns",
  "key24": "4w92dhfoq8omC99H6DCDSLZqsPK7kmMzviN6ucNBFoePchVLJWT5EGuCTtRZ3CiNBqHdKdynebFBpypZS72NGCvf",
  "key25": "5pvZ3gHKkiYC26rBP19Rvxo8gE1QFKmauJWt9qccbWHfZx1kQBHrNCRCZEQ5CRV9tca7bGGKmWpyvBKtU3CMNHh2",
  "key26": "R4Kt2h9KercCyJxfU5QwrCjqDgir8uCRzGVj6KxU45QiuStt3hcnbbTMGmDPirYg5qngXTMWnpfSqqJEiBaWsvV",
  "key27": "9ddvedEDF259Z7Do6anaLTFCC9bRHjmdieXUovJBnDSwSQ2v9jo2wbhh6jZS5QM3Gkdt4sJissnCvcMNPgr5VM4",
  "key28": "2KdcHwcHiUiFLvuqBw6fuMwkUtfZi4EZJ7srk22cZmWHbD19A6B6BuoyNDYm4Uqj1Cu2xFwY3M3V133FjUjpZWGQ",
  "key29": "5NaUQUWxqUwHzNePeBJCLzPuoi9TsF5gEY1sXUBFwPyhCZQ7oBADiyS93nE7QLtdskPSGUPiupGJmBou8o1D1tiK",
  "key30": "5K9f7SHErieFms39D2rA7VNVMVTGR69my5NgBywgoXUcpYRYpbyD7br7psktLctKChwjHProDuFHpP36AcoQWFVc",
  "key31": "5wMZAd1K5DQtK6F11eMvqKkjYjaRJ8JZ2FqZf66ByP66c6eDuGSAHHvypNSzTaKJmVUeTAjpFJ5GoWSRbnonuRgn",
  "key32": "3qVdhHkpJNxMWDkdtyokun5m6P8VPuqY1r4ZPxiha9SaEWkVn4JQs3SKUcyV4DjuFAtudM1UZJL5kaztCukcjnoE",
  "key33": "5bbiQ7aHxafSxRz57G17V1WnZpRQADXJnWpd59QcgY3G8XcXKun8Lei6PWSJ7LCULkXZyEZZb1nCscufEp5DFeeX",
  "key34": "3VSbj6DT6eoH76Sg896wB5qsJsCYHNf4sv3aDXcQc5Fjcmvw6djqre3CRgyHbrb5z99zMSnQ6djav7qbZZQ3HywX",
  "key35": "3es1FTrPWkWiSqLzLPguVVN6RKGnNmNS6odA9ASFL2rsqZH7P7oV14tJg5qiZVwLZAtGFW28zKudUX93UwwgJo3a",
  "key36": "21cKz2TZc7C25FaRy5z4veiZjTkKLicsyM2rQ9yG8iWGq2jGCnTmo5yY1itmisF7YSAbXBZ5TFdVyoW5LpaF3bhG",
  "key37": "2Srwffpwu1PkZgPKqetXDGhnnNQFR2snwbijEdJVGYNTBZgScKAtU5syrZN3HyfoJRC99gPpgT4bVwUSCdzFdxnL",
  "key38": "392D1w7T7Z5Xk63URbnAK8jyUvek42qSFe2ovsLbTmUTxE6Ki9rdy15P9m2Xn2jyKHdPqSNpm4oyWTNGJs7VHbrP"
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
