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
    "3ZeopxHKEZvAV5DEvi8NYxxkPCcbtcCLbF9rf3rcQXLzTXATED9CFZ5Vy8LZExUuPL6V9UeM2nNb5PZXGbqZy1i4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUe4QXF98kNijrQeiym3DTuXQgQiHoKFs4uffSSVMUMfYnHZ4pCCg7JSnjjBHZL38hCi6JNXBJkquWLkjMZULVL",
  "key1": "4KwaEzzSnWB6KSj3JzQZHGQ5XM9Gweadnr2QPpXNDM3oZv9wyMyyvoiGD5VhxCbzfQS9JMtDDtdaz4eDYXxjgy8b",
  "key2": "3sVoV8s2DN6vavkQfpqMNudGmwgM5KQHNzp1gB1ADVaseUSrbFi1ds4EgEAczzygXgjrTdJZUjEpK3YFB2qfDCph",
  "key3": "3WUa51g1t8rR9gHDiuDY9R38EgbfZpPg3uGRAgBiTyKFokbYjbbi1KwP5KFvTnrLBxK4GM2jego4sB1fuyQi3tpA",
  "key4": "r2y1B6ak4hE3YNM8LA8UeBj3btSRZnBuYoBFsxdSpcsJtffZVVNUYQKYpBVu9Tx41D9oRMSPVpE4HXNgxfzzMAP",
  "key5": "4cPyTZmQzNLSchnqxx4eNWc3zds3Jh3td6AT3KZtPfksafDA1T4o3QkMAVLPKVRebRQUXuUe8EfPjfcXYetg3GJy",
  "key6": "3BAujwuJgPDKrZJhQVvE7dHMoySVJXykBAvBbmXVN7NPTdivAUq45nz7n4RH5uUfHSQKMKu5kYHG1bJkHHttVKVG",
  "key7": "N657Cb94Tw2xUhHP4m6CWFghJwK3tLAcdVznNkFrfjhDjzTrD9yccd4AhL7U399K2JEQQ3A463u6atbsbkZ5THV",
  "key8": "4tkAQ2Q5CDCNt5iALqDRzWkY85Ke2JcZrMcxqCoHQLyw7PB6vC5jXcULxouzV291k4HfwhfBg53jnBJWLrdD157G",
  "key9": "4SRwGFcSoXLqG5YepFaMKoEGXV5VLQyvpSEVoeWNEb2V8AoWN7o56wJJxDqGJJYykLLoomiUABCfqYtT4u6sRpVA",
  "key10": "4QnGbJAKLFeZjhgetxMHLLh5g4NvfiikCoJL17bri1B9hD7n5GeNz5NBEDSuM7eNM15NDgwy7rdVXhHw34BwPHx9",
  "key11": "2MZsm95aTopFXmQBAvm89VQwzWwXycqLSAArTxhy8YEb5khvLBQvP3Wk5RnTStErCTNaNN2Rjm3UXLdGUqmwGMmq",
  "key12": "iwNLGfx7togP6qghzWAU6KXGrSHn1kM6D6ANE1rhcneRodWhY3e9qCfHn9Ei8FWcnFu7SCWPmirswyHkDCiJQGw",
  "key13": "5KoUNwrBMM9MVPc36WHJLr9GaXWQcJJmkSkTERe4yvZuQA41JT1itJtUasiWQKV21TJGCV6GxBahHjf3tmq7B2iL",
  "key14": "3h72ixU2x98mhDrmopj6H6AJ7jDYhNAvRndzEkfUagFsMzt1WbGGtA1uPEpjTNWdxi9GuwruECEcSzBMjmGJbsAA",
  "key15": "494zSMmRw987RJf5SDCgcRqZhPFdUtov9dg4dPxsgBnk3Y1NQBayYMTUNCovvzrK2c9AUxT6hcQLuc2gN8fwYrW2",
  "key16": "pQ8gVPafuNy2mk28cBhoiMEtfRz7uFDeMkGvzfRvvow2aYjDxagMsn8CyphK4T9GnTiYY16ESf8zNCd7VToKkxa",
  "key17": "52NWD6EiPg6ccQehi8bKu3n128ka7mGhhdpuRCg1WJcoi2Fqnv1vrpwVVpjrGKENiULaejQda22QYgLBT9eiyYVt",
  "key18": "64mKRVqs9idhgoZZgWoQYZkpVCYmS8sGAB14hjJKu8RhMQvtrYU3QAuYaegobDVtAtXWYqgc3mdPTbakdcuzRjhD",
  "key19": "iowxLaSQjwiL6xyR2NTkL4xhpX4QXeET2fP7KkEuaVGajGgf2ZQ9fL1h6Lrxo3VdCXykodhjnXGiYFD25hyYsPF",
  "key20": "2s67cdCm3rJWYAAqi8QBzJGNarbrsWJ3V96bEUNrcLCgj9PgribrSxR62A7D9edr8LoVV2YJz46RBJafioQEVpAF",
  "key21": "47aCp8juV5RTMR23SQmSkKM3BoPwFBuNRhEF2vAoNyQJwTkMYpEUHV6mAjAZiTQWHHH8PnJb9tW63ynv7RZ1tYWC",
  "key22": "5EWiEyHJccFCCkxNvzM5gWKzqH635VcwkFirZq1zDa6UWARfY4Zv7JeGm2DDr2Y61BQSbJa6XAKfzFvH9ZtQxyV2",
  "key23": "2MspS2BfsWxh7qzk8ajdz1kNMr8u8HaZV2VX65uTDdmBsCKEPGi6kjZR9bdKQ7TNM9XgS4PNzK86SNFHsQjxJ8GV",
  "key24": "4YnBrACe7LqgKc8YBpkcpXefLdHCQp2ReTaf42Y3TpbjuYW6ZQ3NmSVBicUHP6NPY8za2PNojDRsj48eRb58KpkL",
  "key25": "4fHRu27Fr3Jt38X1uPBsM8R7Enmibh7q1mYqk3LS5zpwweqmmdRVCvM4CxbVEE4zhdbcxetPryvuPcRjt3UD5cY2"
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
