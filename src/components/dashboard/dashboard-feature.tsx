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
    "5rFXf4cKeFzzSgwTSi5d3Lkz8oDUUXS58rtafSHnsS2udrcjfU7Kuxr8ze5hafPqNCbVMMnw53wKyf1qKQSAQfR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FsgojwGcbNNAB6NPEcvdZV2FX8c5QvatykDk9cTXqadxNzttKXPDVMKoh5g4bPAJzY2v8fSwg1czVL4b32rj6ZE",
  "key1": "tS5cSeUGy49x8Nx9EfZGr14RPwGaDGvX2FXvV7WHaMwh9FXsiYfauZW3rKuKy8kksJEooxAc7YAAQM7tyWvjEfL",
  "key2": "2R3dD6JHNeCHeFtNLB3UPbp2qTzwNwUUhpGJPBJnAgXeqzycE2oiA1YNVZupxUF8wZWwdTzDnneortyX6mYLWd39",
  "key3": "2VP6tsEkAemR4p1M2bfAEmQDrhnohmToPH284GyGjBwxbADWXXd4QJwAx6yigghhDE3vBsLRipkJMwxrpUCdpo2n",
  "key4": "GFW67dhTfVEpwzhsjnz967FhRTRDveaQavYDmJ9jSNKH1cP1uRqVSE5s4a4c97N6EXkmGuHieQCCKHAJNBhffKH",
  "key5": "6v8YNEvgpr4GekTRP4sTTJg9h7NAMFCbhPyomUDJvcPLe2xsy6Qmj7xeDzUdqW6akBQNjX5HWjonqN5MesGJsLA",
  "key6": "2bqXAZRMqhgNVVvifzzAMwS8N6PtzMQHtCzopbJE563uxVdVYSJ7ahG8f38NrM7hHWi5dHv8h4CM1xnqQUVgM9fW",
  "key7": "3fD27dXwxBu2XZWfXn2KvA5mHK1Wem2AzFKQS7Em2UDkLrcAekAhnisSbbjYioKGeeh9XPCqqpdpKjdDwTRyBLsa",
  "key8": "2U5D8AST928JLCTsPiPTdjpRwcSQMaYAFGEcxoCnaoCwJpyCGKREH3zP5BZhBRAbBAuAuGU9wvtF9CGkPLyavsbd",
  "key9": "3KuTWhz5JPxwQVPeu2Uwpprg41TtARe4rycNmsyVRvnpccMY8378agLKueBDtdsSCLAK9drtF1FwZ5nNQo6zvNET",
  "key10": "4qH4ZtdgfnsBQUSTiDFLbqSESVgf4Khrk1CJ822wky3saAHHbq8fUzYcCh8CoNJaqMLSGKSpKscjckukDt6tfnA6",
  "key11": "7xo5WyL949zMtne2KVjHh6P3yUM1ABH8oFQcaga4vmE2ucBeRcrhj6LLVAxvmvZKrPLE6PX4zYRf1nhef83ytdZ",
  "key12": "aouUdZC9eYiMzUGZskg6T6t6Z2pQRJX8SccaQntVM7Po9s39cxQWFqzQetzemUCVSWKYpxAR8nWK7qerCoNSNG2",
  "key13": "c7kf2gGxAKfXJZ951SkwZMckgraxAzGzjH7PAH4JSiMbpRRkKtjpBb3L17Umgi7dBvNGTtFwApw4L7Fq3XETKWX",
  "key14": "otWUfpq7q56APqTUnfZkqmPZBtq3FuSAy2JwS3t5X8sFuhm9GgRU5rydx8JNMVUAfRaSpg9pbw13ND7d3NTGtZX",
  "key15": "22XGJvdNi6sGmxBqWhusJygPE4KysmWzQcKHQUQTn5TQTeUmvtP6tYbGtjJtEHkd4HDGLq1cKxoCR3yogmAYdjBd",
  "key16": "37vLxr9Yt8JGuyALmQsjMfuuNxf2ysiTEcq7LcnobgM3GTFFT16ref2jNc6C9GYpjMVjRxDHYMxVYLkK5K2Y6Fbu",
  "key17": "4cAKcTnkEZp7pbwnM7uyyyWwnS8oUGUZv6DLHwvdDg7rC6QuVkjxu5xyFALki9MNFZTwbHT2mYHX4zFTEtRpU6uJ",
  "key18": "44VHvShMeaVyBZQfupfKScD3o6wb7YXfbkakgeV65usTR5hdS6YGEv1me3eNkEg4cuqwu3CeYZtiYkdZfu5tVt2",
  "key19": "5ZR6Z3fjCyz7u9eWpWemeqDctYe1rTqYC4b9CmsnmZLQiCMN4JczMiWPXU1e8GqSHdQ6JJBUQYy8WW5Y9bWh6k7e",
  "key20": "2ctyZBT73WW5wqzPD1Hnfg7F6xNXWG8iA9SdfV5VC3QK8qxxpK6ow2GHPLhkP5LhkCAnZPNgqWPv1Q97J5gPaw7A",
  "key21": "2WS7JZzofKfs2hDaY2pUURyW9JxUCLNumhxyrTZEXrBkBDD1UbZX46mLDAE9fwSSqe9fEcrnKXTjiy4ciqYgW8dB",
  "key22": "3yMeXzJVhuj1hc6Csq77fpdMS7PafatLqj7hiEsKwJwYfnpRQ2jLgRmmKsthWTsdcWdqPBqzj3go3ZP8YVDW4oQQ",
  "key23": "43TwxWKDNwbdYaNvQtE5KXT1TJpZ4ngd4n56Pzd7ifGiRbjmjnsWzuVaJo5Tu7GgLo6rmZzx2aUAhPGKcvjZjwmg",
  "key24": "aBqVNJJTeh1ZDktWUKSyzXtSr1t1ez9VT4btizcrm8eNQirw1KbEmPtbohXgKhDYtbKJnMJsA6bLjztfDBcXo58",
  "key25": "bDsd4WJwT41bV3L4ZnZVXx6fSuiP7DtS27oqJRfZ53rZBYVX4pVuQmGq7BfsWDEaN9tVNmwxWdqrYSfuHKhAnWx",
  "key26": "4caXtTP7nAktifkwTk2Qf1VA3rWBCah66TKp9SvweSMwzq9YHQ8v6WAMtkWHr5KYpPYfe4xrLKKU29N3HipfkjYW",
  "key27": "2iP7oh24r6AcY4w6BmmQDaTrKT2dKNekF8zBtsTokwdwVaE6XSAcENz3TxZexz5Zn4GL29BknvkJfvWZKMcX4Jf4",
  "key28": "2wzaEVWRUsJ3GjiihZ9Cfm3CXUMXy4dSTrM2gQF5kibhYdwnySEHMEnyofu6UYN95JaPqnPRJcviN7qFKAjLJJWV",
  "key29": "5Vr1ZaDgNiB6YPn8rye6svKiJEdjfP1gEif8X3dmrYLvxPumVnTBTG652V6MPtn4Awpe1yW6osPiLwgU2kHXY5Gy"
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
