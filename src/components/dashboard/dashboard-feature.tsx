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
    "2sAiuPEnzzRQ4i3AUbMWCzFMm2StqgB94HFWMsGSQLbsoQPiwGxR1B3VdPbkaHiX5XDR7uZL8LwDRn3k7ETWKfNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeYQBnGZAckcN7mcP4FJXJ36qcGGvWxifa24c2xMonHJfL2t8F31Nrb1vci5Gvs9ive7F1p7UYxD3nfaLVy7kXT",
  "key1": "HWsq1abyaXBWXKz4zbS4g7ZKAdTJsg8cZLoVBHwUneRPfrJHar3Y7R54scAT9Ua1sM3NgeXVNs5E3UExJYTN6e8",
  "key2": "3B4A4XFkD9XoHaNXsJWzSMspNTYvPWLwTUvxQaoubtYbDFEgYkC7jPLKbfE9MdUgAdakAwuB27HadkVbKtXY9sDG",
  "key3": "Zvfo7L4tVohiPtfQpuvmATsMuiDah4GdEEbdbkv1cETq3Q6C2r7a1udwPej5EWhfhywK6GSA8CuRUZLQokYBaTk",
  "key4": "5nkC6Qx3Ss7f5ZquWWB35YucB3QdJsnVh6FNKpy6ctTzmWf484ey4uiMGKZ5DTzpbGWtnDm3qbYLVx3tyXSUdV5r",
  "key5": "4ozRqrPsqFwzVxazmEbxW3pmnULpvFbV6S5ZU3guAVeRHngipfyTesjAm44EsT4D3KcXP8yv66zhqvi7UfHb6pWD",
  "key6": "jRAPc3bW3bPPb25C2mVSuKvrLkCqPZbMRVseqnz5zNewrkRkNz8GWPvFM8sfVZ7nk7iZ7HKZ3gYExEuTFPfUxti",
  "key7": "62GzieYBQ6pKuEWcw9TGzk1y25yrR3UqvKDYHxFf78sgrJ3zu4M7E6LQujArW5bgm58DDdR1UC9NNqQsLWA9AYe2",
  "key8": "3MhB5LnjbfJzZgsBmVAWRm2q9PyfRDgH4zUUyQP8wNonsp72MAEjvkaEQFXWBuYMXcRCHxrZxZinqkH3toGN3WjH",
  "key9": "U4UKdhJn8J5gLAnujeGpRc3Ev9RX2GcQdo6Fhwt7LNUMaP8yUbXVE7oGE4kRSSGZz6xu7HY23GGyombTZoySq6M",
  "key10": "66D32opKjtKZ1ELsHvMykeMaSmnHPnfTS3NNFKQkLGVLJyYzbCjBFhwATmqhha48C8bEUG7iZW6VFChvWXEbLBUM",
  "key11": "2LqUPoukfGZYmZ5DTs9drNupesKLczpz6q1dGB6sCEMheVkjuhdLQZhde9DXjrdXwQNiVBTzUchjkU5iWmvsxgUA",
  "key12": "3835jzVqEGLEMcNRG7DQDQbdmyW61EuzKqksYnSNRDEYADABTQcohBRiy4uYPApFJPnykxTed5A1wePLPJqKsdqG",
  "key13": "4u7Q248tw1Ww9k7EQCmJqtT5wVs2W5YcBksxnaxRSyp6UtYgcywVVCc6HYKr9pQc2vZzQkMEYTy2CnrCsbJEFaLV",
  "key14": "2Ge5GFYF5XxmTjpXkjvMDzaTm5W24wjMAqryna9xxsZ2LW8mbsEBz6A5pyirWMHgHzk4h1BdvF5fVg5KBcbQVME4",
  "key15": "2smGGAgCxdPLqgg1y2Pdtvu7ADdCJKKzpXCobosuuCies9sQffGJydfgr3X1SmRFhGg1s8H5EraYJcJN6GogbqNW",
  "key16": "4wsU1idXa3vufXbXzsxfpLF6RLedNEqFSnSysXs3A5FRHfUV4g2oVpeeM9YF3s3SyHxrnUqrxf6vwFVbip7mfd5f",
  "key17": "4xhto82H3THTm3KPPRoCo9m1vnKWdN9iZvd3xHvXMuzmAc6ZRLCYuKgdL7RdL18YN5QDUFRvEQ2dFHKK7u75hASG",
  "key18": "npdhzH9hgHKahR2kBs4S7a2Y5TBmyg5v7p4qJbFfg3fHVMgyfhgXKYsyvNv79WWwGGfJtPD7mn4gaFUQygwN3QU",
  "key19": "FVEuLzsMUyfbV2TLBFiswomMjahdsVw6k9EqwYsL1jTncF3EQZ2NKoBUwEioQD9hNAEfWM9vrtzBCmPDJ5e6W3o",
  "key20": "5TaAepqPkTZEYwbvixE5fQ82qrtJmu865mTYkZofxCn1r9v7u5ZpWwZcrhvkxkEQ8J8mDaaXaFa216L5wuvT5XRx",
  "key21": "o4FUb9ZCEg9zSRB17jmkv9S7TDyVLvpGA6vDpiMEZD9YmGVTNViVMQkAUfMK9hutpop5hKUoR1VW8a41KKGLC9K",
  "key22": "5YiWRZ4hb5RnkVfyMMVfRotZCndwS2Le657CZ5896VuHwDE1nuSzU3dgXkHDYSKCMY1N2aByhpMqUKf92czRvvCy",
  "key23": "5gdWJpTkSwG8h1LbcGrhiFmsxov4qJXyhqL4SAAG6jguQ78wCqnmXykMYcPLUKprfApyFMJoGQn1me7FJcS6andC",
  "key24": "4U9A5rBYB7sovmVwyysBHu3CVS48PNUtHe73ULfkB7aRFn3ZkH1kPnS6EEhpHAuw3iiwkbh1fxVjMvFsGWVFgL8b",
  "key25": "3ayRz1Gr6uNGm2FCzZwU4Xz44EJBqt2ct5PckRYjcRMyhNGMHcT5k8AZivVJtZyhGzt5S6i6cZx2fSMPN5wGokkY",
  "key26": "hELYmMcPPrw5nYx41D9YZL5Vod7KtwQ5GhmgYpt7yBug31wtKsdgjJDZSgorvPtn7hxj7H4KpFWJ4vT78qcc3hg",
  "key27": "2VGWHBecCSmsBeK85dMc3aaqAwz41D57PgJyvYchbjk41FiChgr6FnDis58XhuAVPBe2CzAsjBFTJRvsZg2YsRxa",
  "key28": "2j2Ex2mZoKVQUUy7Pp8pZPG7MaWXcJhQxSch4MRh9HbGPjYs6yM2LKEidG4M94E7cd9XmypoA9sPwm3dygiJndR5"
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
