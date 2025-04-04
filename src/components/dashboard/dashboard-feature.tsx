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
    "3fkrLTaTCrkCqgf88pbQKGG8LPnZmx6hUofg8d7VLF1K722moNeLGsbrWgVpcCbKNuSmehbtaoxKkk44EdQLPZYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDzDGQWeoptEjRXGndXDgzUFv1Wj8AcJRecUC5ywy6xWfx8M5xVHqYvUhLWE7VM58sJGSWKpzXdPa94VXkKVVFv",
  "key1": "4TRX3prBHCgsUtUcSB2VATpgsutYz5Gs8UhMTQf2qKjLWaPL7bjX4NAs8xGpGcd64xAdkjt8hN5rLZMmZHeXL5bb",
  "key2": "3HytGU2WhnRJc9poyFMQ3iGGuDcD497yt328VVJfxMEUTTsWByCjA1fceQa793K7951NewjHX7zdY4Rq6hhHgt6N",
  "key3": "2TxWXYhiEvZMzs8sn6uUrHuUVi92ecW53oKdUZtYhPG6g8cq2bVwX1i1jY1bLTHiNj9NjJiCBUDEBtD7ejQPHaBM",
  "key4": "3cCADgg3UHxNS6eGC9HhHbRXMtDi1qtAnJDVL16pTYvrZUNGHmTzx955AD4cF4Ua32tHybEmu9cLoacaPh5Z88Kx",
  "key5": "2B2kvW2fFMGgxxgFBRrsv3GLmH71bqsx6aWy5F3mKizFk6hfmXiRRBGrmWJyYPvenuKfsjtYVZeBZhjgA9AqEyEG",
  "key6": "wFZgeijYJNHRgTxHmRNErci94NeQenLCHyQSJ6TGn9pKkreTazzhbgyLsnBvR6y4h9Q7D6UYVmECSLVhxU5Wy5e",
  "key7": "4nKVBemLPqtixW33XyZ87KYk5YwkQVdH5cxB2bmTrvjvxdaK8KbTZPkQwVp2XxMczECG2jJ99MCGRhnxpPkXaKKW",
  "key8": "2AQGv3gdfTR8hkFHrdsggk2T5xwP2ke81ZvfWHvA1LbdTGnnHqFTGR7HUGwE9Ndvhc65LeLQpAJJjshk93pjQjiA",
  "key9": "36LZcR6uXSt9bPdabLaTxNAaawn7zmnK7w3iZVEr7Dw7rUU1CjT3stTF9hFD2Ve5bAzwKgxrrePyvnGoB5YT7H34",
  "key10": "27JbGVu8SXSw6jxcf4ckVrzYzReNUpLnTE3uZZG2CkDuYdsRVAtcW8EmkZh8NB9589jbErzf3Hv6sw1KXVkkDJCv",
  "key11": "2Lc3zCHcZ4a1M919U6QnS258Jxq2oSe74Q3hzG9go9rzjfWp77KRzENhhm12UZwUnbgy7L5aDUZui58odsw7Rcm4",
  "key12": "5G8o1gnEyrvatTCa2YRbdS49cHDCmgmuZ3HRnmqh9F5FCTyYVB7gqEya9cK5WSqa2QtnzPJimoPnHxfMnHVQYTKT",
  "key13": "3KrDXRn8F6jaRsJYHoqDn7dQ5noK41ZzMW9RxNPCXr8LsWd6Nn6DckUtctL8SNKL7VpMESQgi8MLUTgfPLmM4FcK",
  "key14": "2cXGASTeiitxHguvz2YBMqW9ZiyWVeVux3C5HCTQZbRc9U6e1GNKQdiqsi4DWPUAM2VZWrKdqwWZker9pFXDE6mL",
  "key15": "RXqXFyViWAr4wbjVRwHAanVTRVMFEZucU3kfX7FXpdjMXQ4J3XtoewQCL7pzWE2yyMKim2ZSRFyZF1JNHWq2LDE",
  "key16": "5MbLGi55DT5dEyKygzqEDQJ1XRLPJt882vrDTuqawocxFPNUd2HN1WpNGamEZvm46zo7kc3jbkT5jApD2bvw7AJv",
  "key17": "2f9jwd6F6P46QLxW4z5GJyX3dkXgYGox6iuRds31BFYZw6hDci7yrSXbuy4fHtm1wB2F5R1C3sU8nnTBWwrFJHWg",
  "key18": "5xvTBtxrTQNQ676bLfQbxBDyqCkoxX5Pcd4nG4k14fXZvbmJexNKCdMRxzWEVt4ebACQCzdqZrZ9AnAypqG7R6jt",
  "key19": "4mdjAgLLxfdmQccomgdPwKWP1iN8YaszkBvXvAQ8rSq7Np7xi7A3UfUZeeHkFGQcdbfKV5mcHQtVxEooCJusBrc4",
  "key20": "5zzuDDwrLH4kJJZjmE3GcPgvvKrhnxCR3iG3awrbwNWEyQBSX5wgfAeDfdEiamMz4VWdU8VBXcaFDrgofs75oPxu",
  "key21": "28uqSkUTErxW8RQFbgKRsKgwYNSp8jjoAbm2jDKBtyrHpb6f1DWPxKw7DqgNywkCmfSghLaYwcA3XitJCLS23fvz",
  "key22": "3LksPqzsAf8Ruom5v3J3WBWBtQMFcosk2voWtLGK2NEPydG2w7313xLAcDA3oA4My9pBPy1SQd7ekNuK6K2G4uj4",
  "key23": "4F7cWrT2jANiDS1sBP8pJRKz3UNPxTNbKduw329pVZHcMgFQswfPNVVhtDNHN1NcEGAbNTz9BqA3VF3MAVqP6dxJ",
  "key24": "3SNZVfcjSWiC8MDbqAs8hVnU8jBhPaK1RC18ZMezFhHWxiXTqwAewWEBWSa3or8mYPUjZjU63NCmMWv43tDMwRCc",
  "key25": "66bzEbgTKioQj8HJUHUS7sQoKqnorcNxqPfN4dwub58NustVEGkYLiducQ3E3HYpw1WmsH8B3kdZfpd8kE9nMCap",
  "key26": "3j4ZtF7YaHV9hsbR6rQF7UGSs25kRfVTDowFRLL1h2xwewjx1Xb5jENxoJamzWmC32jEwRHKpCfNVJMa25bdJiin",
  "key27": "4ekgZSi3nFcgdfjA4eFYeVQRxxbERDhNSqqGNpo7TEa4ct9YAy6AZHRtr8RsbNqJQXd3AqnePqtbHfWcZmpmVvWF",
  "key28": "3pDZMBYLqwWcBzLDLenGSHMJG8iWGWmCh6jQEuamvSETwarzUymx24T3D3FqPjrdYNZmbqErb4wuQZsGTG6eP8dD",
  "key29": "49e6LSpxJqWbfpr3TwKBT4v4gwEv8gHGUcvfH29ysbyRrPphDztB5egJbKZFwiJxggbPHLqRRq7u5ZV6T9sFidr",
  "key30": "ESnMJ9LaX2VFCxYNMmgLWsw1yUPUTbcrfrS8AL9szweiLXfyRAbidnrrxPGTHnHB3gkYgF1rce48hRJ5qMTugQn",
  "key31": "3x8goi2C73sAbBa5fgEGcrrchb3FYR9dYebXiK14iZYM92vvjDdkvPwgrd4kg8LnuxsrmsuUTatrmuhgniP5vxNo",
  "key32": "3VWuqhKLYC3o1Jj2wLhNRyUbASPGwBK3hD3fupnGYp9BL3QT1Z4zM2bs1qQ64uLJaLvKt8ZDeAkTnGBmjixEAUWn"
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
