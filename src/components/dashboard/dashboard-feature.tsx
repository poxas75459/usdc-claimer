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
    "uqxSDWGL5GJqwUroz1RgtXUEGT2ybGmLkGQBUR1PB7ibkhpUkqz9JvuBXpZwt5EXrWFpnnRqoXu8oxvhW4gKtT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cvU5nPrf3uQP9Wi76xsHNp92mbTvmggaamQiwXQSh7cWGzFnWDCz7GUTwM2FN5PAnDG9cnKUkcfJFNAVQsWenNr",
  "key1": "31wdofq23BNP4Q5M1VKmJ6qtTb9Lkh8rPXrnMLgHY98BWDEadnge5Sh6cPkuGuqxqyksYb69MXqLWsCW91h86WMk",
  "key2": "4xfP5D6MwmCzFVUMF9Uo3broXY8PCN1BJiusbZGnCQH3zYh6GC5FXtHCDH9FkfsGo8sEFwoKCvbm2kfFqZdk1uyt",
  "key3": "2ybzLhhnYdGDuy7AatYAgwETsqMNsNv3ect4XfcCUxiLC7X1HDNAJ8YpXjgYbLdKdxVgXQGeknhMAZbnQAor8Pgs",
  "key4": "4Ra8XCERnfv5gBFeLTVwEVDksmmBTA8VUHxHXZoft5hVps5LvTCbW1ivG6mrTJqkWMxrpRL1CeGMUkccpqP5Sg42",
  "key5": "Ta2K13miM6swywHTtx9udh9vs261njz7F2Dea7BcxGoNs7Q3WSspxDvCjHjP5m3VTkqDxCisUwpxdBSKxWcwoWd",
  "key6": "5FHD6QgPmYJ7kjiPq4HUL2ZSQYn7G5sS6FgZtCaeeAUtaNRocn8oYkT2dMNw9VqNdcFQhS9fnCGrfc4swm2pUiXn",
  "key7": "63yUxx8k8QqmU6TLUYAUVKcgC9vUdH2HoAY4NGmahFa4oWhpYgZ3KGLi4g5kuUJs7XwrwXWTVxYofHgzipFJcwqt",
  "key8": "4vY35iKBcr6vdDtTa4ACq8gN4LY9xJLkt4iHfWDDVPVeERBmyeyJMujkZpTeQnx8QsjkLacNvZ4WkhKU9f96Hjk1",
  "key9": "2AhkGNboP2r41xtJJaAFbDqKhWUQnQECpV6cVHFAUzgkhzYsXpLUjKHtMYSAk6CbZGQ5gpAjCkNNZbRmy9Fm5Yph",
  "key10": "4sFxwEfsneSb4ZcoKQZ5LuKCzkFWpV1CfVFxH6hm9tWQwoVmkotSrdVYjU3GZts3c1RR71oPfpXEk6bdXKNYDUiK",
  "key11": "HKfyLUiTGiDXuhVdKwBPXLbgA6H3YbCjHR78gmy7UQ31gM5pmEC2yWrPUWWrLXSXYFJBoiX8EgLywcD4jU9n8Kc",
  "key12": "5YczqczPQHQdUboNUcgvAvyLP3XAky34Knd9uvnacgGzzVB7s74Czw7poFDRXHf8RXhVRKSk392QNKT51AtQdDg5",
  "key13": "55mwGAXWPHwvuESBKNwtBWcXuM7QyybhTYTM7ZEr1Vy18DFpvUN4ifURibKqfbV89vpLbTbDsHmNtZaSk2ATMXxj",
  "key14": "4PSaaQVBtqfHxXE3VipCrnBwcBvHXkKeUq2p17oX3Sfdr94vtyNhGmvPmrinLUNCYTaFzZxaXmvfqPUGKrRXLMpR",
  "key15": "5g1VDfhVThqR5wDMZDAVPPzM5TxcnGkNQgtDuVXs1X6uXNgXAaPDqkm9aLBK1o7LWMCBi9LcJqV7vWS1TXUz9mG8",
  "key16": "2Lz9jucq8zuL4BoJ5yzTX8AfRrSiEMfCGWg6GjEx9C3nyvxB6X7mdDZP2j7e2bQKcEoBEDb3V1Wt1Cj1oMRxPGt3",
  "key17": "61KcePpsGaXBheA2zEqSuDUoaAZcM7MX3RsLK1tKvHFPA7mcUC7TpHPnPSHCfQ9fm1tStPghKc4xjZQNiKVpsGzs",
  "key18": "3QTuG9eFXjDdv4ugjfDWmZM8PPDo4r7CUG5nvhpxWT4iYuVbFiuhfmaikKyEyHRzvkFiweACM4BmcxjhPe5uD3o3",
  "key19": "3RkABQNCZRRwmuH4mdtTLVooaC2WVDHU874ZUqo6G3X9ZN3hTr2NLjj3AWG4ZNqiyihVMA699jqFPFxL1ubbDkQC",
  "key20": "3Anwv3m84qGMpCyCxbbH5WnhrRMSfYB7jkFHX9h9mNmuZgBD4nWzUU3N1SmEJjfstVFRdq6GTd83QXqQ5cKzWAt9",
  "key21": "3uuTJLJZCThLRmiNVz6f5nU4YJ9tdKULr995qN1rmLHfg3YthVGmdtHydCTjZqXgzHK9CPMSRrvcrRuuDBPv9vjw",
  "key22": "3VAXTLeqoCZQzWsnndUoi5TLctWWvB63cve6SzLdwFT1nXJyAzxbHMManXmGvUpgJjkAtbUVWqW315JEuZZvBMiN",
  "key23": "5nWv9Dyp5nH7pv3TKkk8dGuxrM3s28R6LpSeba6f3SzYFaLYDb6SGBwfop9MkAznWGCfbt2qtmiE2EViGscGTBUL",
  "key24": "55sfQ2vT34henj17N61Qe1bpRbzxmDkBWSNeaNuVgdDuXmRBVs7EwCpTSg7nnB5w4R6yJhPEtJeXfqfZ65F8sYYg",
  "key25": "qhXYBjZ5rowhde3GBV8PiBmgWTQDmsddX4nVqKi8Ya2M7fZtb3neS5sTxuY3gh8uHRcUjYzzaH7uR24ubmaBhMq",
  "key26": "3pYo8hn92RyuEnxEtYHQ27aX6iVgUQYZTsMGuYJPPb41XUkV2EmJLUCL66WB2dnbAYgpFUSECEAah2NNUS18HGfz"
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
