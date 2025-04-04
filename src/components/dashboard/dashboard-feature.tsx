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
    "5qZQmhAWv3r719MVntTeWEz9n14kGJLH7w6EkAewurn5KQoJn32QfCKSJ9m4HLYaq5ZDhg1kcgSvVYfE7G1iKpSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cRfbvo5CW9fHNbKrXj7kZgw5eA3ViQ7VDQ75xpembht5sW29ytUvd5uBnaXwLCGGvoqNRMzC5Hez5PsysN5pgAh",
  "key1": "2jehW4TQmjLSkJXkPRXf1rHMqhHk5x7KBjJ7nEc2W8v7oXLFC4Rt3g3DqyXBZwcfX2MHXi1ro7Nj4hUF7NuGXGEF",
  "key2": "wdyXYjdLS1obPxdqFrkGTuF3ZTs5V5X7VcJvMUFA8DHEtiNYmzd5dzzaUnGX72v6frxoYTpYXzMtsWrvUiT5cQw",
  "key3": "ofpjoTCG5YYwio9ro3ymmqiYqWSW6eTTr3bPQscD1B85DQ6JEvJCdWLhSQuBb7P1wdVikaRuJxsvm5uHeEXPBu7",
  "key4": "REguH672sdaQN8YAh7gpMKZaRmrDLYoGF4qkxEbQSRz4X9uSCwCckNJB3tgsJskWyB7r7bqFutt7wDWSNwc3HiA",
  "key5": "3dcFtenBFr3pt546FrDTXkTk2ppfFtm6nmB82TZTSTHepy3eK8rmpS4GScwy3Jkjni91vvBDAhNhLfFH6LmTLPyk",
  "key6": "5DSeC2Dbk81oZCZEHwUwHcpCbgdAoAEzhC3zV1yZtAovi7Thw1PDmoKrU16wWnp4P6ECnSeb2moXN929Akfs7JRj",
  "key7": "2tqVnz3ty38r73hXVfzP7vMh77njXy4sTB4fNi5Wm7qvkpGU5DEXcAVWpqVKjGyTfxG8Vp2az3RvFNBLAcHPqPEk",
  "key8": "3xj5JSPaAo5zdtMV44RqNW4ZDwEwToDupiCTbfiriT6y588xoXxuGRefZ63kZdEnnaiErKKzTMWYUsvFsqeT1MWo",
  "key9": "5pB2zn8Bq5Y9neE8Vm1QjUPmVwu16Cm6V9ycCF9rHq1ptPPnpu83x7aknC31EyEnd3CVXCvWsogL4C2jc2ZySFfT",
  "key10": "2oXAm544peoQU1Gji6QXjgNpWkuF2FMh5YnDRSCLvJiYxU1qCCQGTPb43xRrqVFHEaCzybRcWf9p4pezJq5fEVxH",
  "key11": "4DSeBz9By4xzHpVQZakJs2fzwTAMsFxx44azhstGL9PNvCWgp2MPHyzrLBbp4UV2AeWhrj1w3moxjwJZe9xkv4cx",
  "key12": "3vRazn2krE3NAMSGnTHwAZvrddx3P63CZvj8Xohqdme63z2dELW4jQKfipDJv5CTGR3GSjFpXrX6aYMsNGgZcWyL",
  "key13": "3pCK337kDEw6J3AXfEyhauQ77rmasW475sPfhWePvGAMYhxUQuzkyStKbwCvmTPjWYb3gKDSiAE64uYGZDQeLE4G",
  "key14": "3PtGoctZcL7RFUQrPeAM7qpGjuazW8ScD57Wy5bHxHiqtMA5r1guzeTbHvLYG5Yq85dLKba4f3ieEAqq4ddKq7zo",
  "key15": "2tKUXFeYdVFaWDjjJXSwEqwaHejiTRAbP6NfwyY5W7cjY3yRpt1XLQ5HMWKVXyWKUtNAoLy6ctTBqnXaYLgLxxyn",
  "key16": "3FssYtJeiomFXhb82k9Xn9R7GikQ8gXNN5yYupqK3sMJyVZqApvPUBBz1L7ir1p5tWwrGHTT9nnNWbQxjDdxtb4c",
  "key17": "4bMd73gPwxpkNKiG8ZiiDnPgqxwnXkhxbq7Y7D5ZCSJK7qs2NzhaCdApx4hzKGVjeMr4Jg8T6M2umsiDURcYYKJE",
  "key18": "5CiqEU9X2BUFixFHXPPdWL1vR7drT3cddctUx8BXDmV9oJKuDmHqjtmZ7MYK55bHNEAQgbxxnj5Yxoze4P9hfnxw",
  "key19": "2Ss7D2orz87LFA8D7gWoMe7asUMrj5eRxBv5dGds2u5TWEtiguYaQKe2nMSZ2aeJrdcuiPZLJUTFmrNn3jUWN6qb",
  "key20": "23LaS5AJseaHGA6RZvKhxyvxeVtRGJ88vi3WfZ1y9pmFXw7kQYR5HMgk6PumG9VvwCRr46F1xgW7jie8pezcAj8B",
  "key21": "33arxaJ3CQkxirYyCffrThxjU3qSw8Qnwfe1YxtiFfJHVkf8iGMUafrxvXMi4BNLFzQ9eCAVjuRoQ31fPmhUTtG5",
  "key22": "59LNrW9bJNUGbP7DW9tpDMUhRf9wCEg8y9bSYSfT9sUv2Kh1MtUPvy5s8SyxCW5apaT5iBoqsGiAantTq4L2S1nu",
  "key23": "5mBxX8EBAoo1QsY7vFcMDiNi7LiQYmqtU3JaP7f8z4DU3d4Vc8NVUT56FsX8GofswQYiF58gSF7ffRtEUs8Gj8BM",
  "key24": "bq5GXKmtE5bNDinkypteKZBEbrvUdPDuVt4dbH8PWESN3wdwN3BrCKa7BGKdwnHgpGpQ7siv7qwT1xFzsxKEDiW"
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
