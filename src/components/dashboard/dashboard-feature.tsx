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
    "2tmq3ZVK58uYKUyWmcdRL2K4P18sZXgGjE7V2qMtFxKGWyej9APVrxNUWzFVgKLbras3cTPWtD7XHPHTsae7vhC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gfcy7NhF1RYBzPK3DBSBvL2GvqkSYKAsNM8F7pojYyV1uXAaz4UkNN7JnVwHdLbcWkmMfrH2YMGGvZX2XEC2Vot",
  "key1": "afhfXsJoysUcoB3n64jmX3fjzchhn53iRcts3dWk3pobvw6MNrdcpDsgxkEUQxi6unCXQsLs7vqJ8FjH8Ff5EeM",
  "key2": "4amtS24CHAqDTTwxDANpGhoyqywa2vNHsY62amEFaGhbofy3WmnTUp8ZHd6oHR8BcmsCdCLnsdxSoWMBnhWLxpVx",
  "key3": "4pY16fm78cmUHU2heS38hdWfv34U3RCuCHvrWkXNcMiZmGspo4pH8oKFMiQFkUTjBo9EmDDSbeZNmmJZ7mtZ33V1",
  "key4": "m9DfG5XYnNgRJAN1SYe9tz72TAuXF56VzeNGwu8eVBmnnmWsz718vWJDk6sVf4Zk1QuyMby29vbM8ec9e8ttfhP",
  "key5": "4o4EcfUqPWSserFZCJxL6KfdkEBApYTLJxWQXsRVR3Rev8H68LhRotDpDBSVGXaFaqgp2HLyAjgkRKASakEYrfPq",
  "key6": "CWXKTaUAniQ2f91WqNLy6Fm8vJ6fzeRAxCbP4DngvNVa7eKasf75WZihrduMf5uaSNPmBbmBNG8XZcGiafzEv8Z",
  "key7": "21Q7SSeo24JiHNQx9KsuGnUs7c3HyCU3dZsoCG8Q3PBEi8xfMu5xzRiDecK9VzUdnJNDELniGTFqTQADUZfyezLe",
  "key8": "358kccHaYpFAXtRHgUXTSJ1qXCggGS1yqZHfZdYS3CFYP2Yn1YXvMVuRSeeTcSrtWdYDx9k5XW9Gb6kgZAt4qfCR",
  "key9": "4Ztp8sHh1FVYSZ9obnszKp5RTERbDxeaNPXMpLMY61ti9JVRjAypLQcpURHyHK8GHkQL2xovFViivSC7hd4HYPdn",
  "key10": "2ouSdMYHx1hdbqK9t5yCkkN5LPwwPUGThY26YbR4xbdx2mEJHXGH4F3qEDiXB9UakSBb1ke7XPxuVWompno75nP4",
  "key11": "q5zNtUuf5L9KZrH2cEB6foQxMg7Cih4Fd7CLp5AnusBtAwVSBV4TYtd44tZPte6kqudp5rwsFYs66yVhMUp4Rv6",
  "key12": "67pZQsdh7hxJk4tfdUbUEVv5xho5uzfRG4uYzLLUezVjuxeq14GnkjoUMT9bMWiRVMZ5Y4vUYQNKiyJdPSsdrnEX",
  "key13": "5uucZqr115Troj22QhmsoUpVqhyHz2JTyLHTtconWpakXVJ9wD3jQFy36g3EBGELbtqw6Gfq2x7TdskkgvgpsxNG",
  "key14": "2DCTim5SuyR9eykGJ82YUjWqgaCgmUBPf31qwU8HDAfpYFYaSAGLvSNJZzbM1nm3msJPYc4fFcYkD5NyqMzsyzKg",
  "key15": "wiPfjRMJJsUTeuWNSZTWdEtDcXhnrwLMY8SdpVeQv3nZQcZ6iU27abxbU2pn5HmESDNqX92w6tzaVNwWTXtaQHM",
  "key16": "51dQEHrViKPv13CRXszCVT3dJCmEvx6retjzHcdQV1X6MKQXFDKKxnfwWbzuLZanpjqGXvTM3WfgZPWsVTjoKiyV",
  "key17": "39NR89rWFnjtQWHCKS6J48CGgdWDxijfufse2MUtJvpL3sqa6fkAAxLGHKwjy6iC2D8NPr2zD1dvDABhfsevycUT",
  "key18": "51h48b7tFnNRvZ4xyMHPods85fouxLTALo3K7gwDPAqGos7LnESmByKa3v3yq2Byrd5MKMkTcwLjfckhtNQVriEC",
  "key19": "5LJ85cfaXSdfexuUL5qAVD1mZrehp41uxS4Hswhrfpdg9FJYaCyYrE1sc3C5K2FmPPHzjkQh1DKvUnbzQE3SjsoU",
  "key20": "43armaEvJnnx8y1gWsGVMwvzi3aizjwCsxDXmQF93BieqJjvmEgPipag3EgV2nDZryg1afRNe3QTEiockgJHXWJh",
  "key21": "3bDEjdy3SWjFwTtqf7WM4UuCf2G88Y4A5G8WNGnzUpCdadpBCDBAZWL6gbXXhHcvfAp9u7iVM8uBTJVULCJVgd4",
  "key22": "2G5h4iz9gVFj6rzGVVgftCiDW2LLJZofBjB6gD24LacBarZcEmnvRonckGXvrPm66Dm2MiHH1cSc2JppTcqMxtrG",
  "key23": "BhBN4uKTV7KmXYsJbgmEf4vnaWBhZ89HeK8aY4yBWBe7pQXjqXLABeAwf3JykST9ED4hp9H4EtETdwoLBxB8sP5",
  "key24": "4B3RHVXPD2pgy8P57ru6fhRCY4HHXbeedJQSFqfX9cyrBP12ZwAFgX1G48oQieotyy6VGj9dnqA6iLqf6CnzwXZC",
  "key25": "5RxFuseQhs8x7bt97GL8xUcWm2Wmk1BuGJo6KpCPTgYrU735LAodux9mqyC3RgdGY9xJ2QdwJK1C3GVJtJU5CBik",
  "key26": "v6So5ShZB1kSreKrdkiNLWHq8EnhQM6gp88HvFB7Pa5zbsDJ6GPYFGbcMWhUbaHZe5xC4Xf2CBTyj15z9Ban1NU",
  "key27": "XWwmpKhxfxCRqDpJiWNP2btCcViFpjaAVZxFCN627zoD5ZVqkW8jkzCHVzeqV84zBwWMqromaD1JffWNPruuGRk",
  "key28": "2wsmvCvFbDDR3um1AMXFvsmgBYb9ZCC3rGbCAKx1dtSNdie8jHFmEyu6jxztRDFJFLpKMNdetactTyVwvhpKJHwr",
  "key29": "3YCzM8xB5Lg95EYMpWjgW4kJ9hmdZC5whA2QjYE5CPAXKMuCoTaYe9n19QqYPoJ7ydiCvw9eT7CjL8Qc9WXBucpQ"
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
