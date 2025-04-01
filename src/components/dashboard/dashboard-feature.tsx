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
    "2Q1iRdLfXpmb4vit4x8zETfrhdAVY6M7evbWiLPGNYr7c99oR3PfmA2xhcFYwDBCXvr8fR1JqRZtR83e4s35jA4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxcWwukznuqEYxeAqvG6HwiR8eu1TTfECL1KKHf3wdMNqzmUXxPmzRDtLUmaUc8FJ6GJb5opTtYB8yhwqaypVK6",
  "key1": "4aVCxu4Gktcbq7AN5UNiFZcqN86erPaZQy4gTb6KwTjLAhxoPjhsYgJ3w77cEvnMPgpG9ACPPZZ86HnG3mt8qXZg",
  "key2": "5EoVKFsHuAUoaedFKLF36eV1tDzJrsUoK8erNH6UN5zT9tVwBaQofG6yQ861mYvV61jys7R4gtFPD4pCta2TvMgC",
  "key3": "28DNMdJJ6HCSXvkW5DxMV7zSAXXQRTYozcCvEiXPMK4PaLoJTkgBeNBWaquktMUfhwfJC8irQQE3Wbn7heNeMLkQ",
  "key4": "2NuausiexunSNBPEEcZQV1kZURczDZWAPehe1ABaME4sJbMzqYw4pK2C8SJkUyEAVaKDYob9t8fbDmqxvu6wTppo",
  "key5": "2umuig1kkcFPTDqgVYjvVfB7o8nP16Gre2aUGYsXy6MSwyz4d1LUNzkf8r3kJSA9qCWjMUD1s6rqgTLy8XAuZ7DE",
  "key6": "2htetHVL9VKRVSt7AQE1bDfwvrStKiZaKcGCvuc97DSieGXu5KcKPmGb7Fx51jJQu5qEz5dAQpvVth2M8sv886Jy",
  "key7": "2aU2k369F8z5Aij5XwCy7drWZDwnTf7thvdj1MYggSSrbwwZmmC1vAKCrGmA5zJEkZxZobv1Xifduik5NLicYwKd",
  "key8": "4RHxAjjo85mvdXR5ZjB7YhnnFg4r2PmM8AE1okXoL2ypHoGS1q6wC3xzLC7hi6CYq8vDSawNRtbXz1QuFSWEDULg",
  "key9": "2GNS8WmxhPabQpofeLCSmYebdojp9qMGaT69itE1PN7ZeHQsiaSWT2SxRtTdiogL3rzRwxsmtunBPf2G5GoEoTcu",
  "key10": "533Wg7yKCg7K2BpWTiDFns2Txd3uV86ACkhjir8PCw4mgRnzD5LGJ3AEXGUsdTeNK5YYTb4XXxt6PP7EQhN7bNam",
  "key11": "5fkitmdL6Y3YZtEydNUpyyX8J8Vtu7XSDhY6jFKBk3dZsCDJ2hHp5iy4y3TcfbtcGB3oukjMT84aywF6VNTndJZa",
  "key12": "2ChciBSPAb73QduPYmmezBYj43wiQYpgBYpYihGB4jBCLzbnr4uy92sKQgpEJ6gXCXg2MaWn9JUaAmarTyq3wmVj",
  "key13": "4WbaiM83Bj7NKUg9HK8pGatT49br66g5Zw4AQCrU58pagXxy84YHNApTEjEX53JgheayvnB48gfQXFjzzvPeLHTn",
  "key14": "26KPPTMbXb1a5AhpYuMwmnjzT7MNwR3nJL4BqsjZCQsuMLViBwSH9VefMmdDYu5iDD5nDvAvi5F27eEYLBnK1iU2",
  "key15": "4PJU4jwK2hRSGWTtWzK1w6tiEZvNmhYyRuQqhdnE23G86gu7LasQtDDrwNZwCktihUEyQ1oVdGLvu8ZHfBzezEHd",
  "key16": "5Um47kp69CDaq125J7CKTvsXbmEDa2Lhi3Q9GbWw8iGuogRraNxVwaJgUsFfFAQH5WQ1gWfCHzW3VeokHov4gPUL",
  "key17": "2Pp5p21CTFG1HndWtNqG8AXnwRCueEvd4W1Yk7L1Czgb8vGjBVL8Nh5CEYTJdSFbs7R756XBDD8f1iKQdNAcPWra",
  "key18": "4hz3TEZmDwWTPMEv8snNS6AYDLfdBe4MAd7MnzkX3a1rp8XLPuvd9YCQWkUXANYuZKwZ9g7VKrhzukTwYGAALDLR",
  "key19": "5AsRhuLkZonTTyy8JMjQy5nvMdAo5dpMs6VH6Bf2fWyUWgtsV3ZNJ8mD1r2zXzaDe92sMCB492uviZCyQGipdbcG",
  "key20": "Y1fXZEVZy5Zjhcs6rtqeyBPJeKSSsfSwXempdEGqthAgwCZ3nWYWuENNVPcdHowvg542iqvxEqkMMBzmAzecdVo",
  "key21": "5vxhnHbZtzckgeGvUiFJGuRCGWDjTmW4H4ydnYyDpmsAXDWtznepARjfcteBcDFTD12JpEWfZffiDbmeZE86ZcoH",
  "key22": "JCFurZCLADCu677wQj6fYWXkjxMT81mW7FFzrn1gHHptWDQkB9BfdpjbinZxkv92cUgdJ4JBnV8hoxmD8LdzKmU",
  "key23": "sJzJm4onRWGNcPoaGhyzED1EU8V9mHtWvnb1gHiPCahz2Qv1Y7BYg3ioazrJFMJZgCJgUPkovJGSWXhprGYMpbJ",
  "key24": "4iXbKEZdhNHh4JMWLb1kjsgTq5Qu3rb29uY9TEcYrF96nEe57KaTTWUdQccpuuDV8FCTFMWdnoU3tmUzeqLmFFXM",
  "key25": "WDz8S4paHhLrX1TruXLUqYfNXBnWqbGcWm9xf1TNtqmiqRHxUpG5dYFUfYyiodmFMudM1WrGnad7JtKKe6sfJpP",
  "key26": "4wFnUMY2eN4mTzPZpPNTMvvYHJCdodjfyCj9uqGARmt4AKMDMYhakm8LvoSpzwQ5e12xc6xeUtBtxu4gydgbU2wc",
  "key27": "3QHrHAoFoodqfZPELZzFUVGEf4C5HXFhdBZT3CqBhNZUDjq4V2vkA3MmjtW9wtf3P6jHNEQZiiDDJ1rJLU8nF5x6",
  "key28": "3CWLqFJ9Gac3VHtSKWaWHAM6qFxmcR1hykXVBjpErNrEA4AN5dQwzGkG8TW7nWrVaRuRiimkdPZhCMzowarmFYNr",
  "key29": "2d2GLvRNERuLVDRUr9i7GAZZKAyZqSjZwbQtDPQR6eDW6aDQ5ggSyhBTBXPZBkTsSNsFdQssXN7JN55rHLaUAKeB",
  "key30": "3N7KmR1nR4z83KwKPMTStUWKfvMjFvA6Sh7YavY2JdjS1cVvoJCMDEoR5DxN2KFJ95nHg3pbmGnrAj7j37rE6a57"
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
