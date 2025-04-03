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
    "3P7YX23qzGbzoG5EpG1s8dS3aeTy5zKSiUuqzRKSZmrnXgqfZp2SxNspzUTDB1SpRVQwzojK4gxQBpSAqAK1Je53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pt2GLT4SwfQAcAiMv5iqRVCFTEdsTbaEAvprnMPWn7y2BY2YV1zLcvcDPDWjmy92FLuvDRjig4n75TB87xywW2f",
  "key1": "iGAoRV7HeaLkF3ZidFMjCgXE4UBfvPtP7SQCmCJ4NxgAhWFY2A9MYzRb7szXCPB8acMWPjjhMimEqtWbQMSp11w",
  "key2": "Bu9F7hAxNuUhv9tE7oL2VyVfML7jU4xqm5Ykf1EYrWQESfzjEjuRdeKrfxpuYDnZfhpwWBhhd86d3VXRjCGRXkz",
  "key3": "3X1zUFxGhTyRF5MW2uSVZcSQant3bgLnEXy9hf8PUFdECMZKoXmwTgUAP5V2GEsjRa3M8aDXBT5NPpcEuyAzazso",
  "key4": "2ohYgBtS9b44ZTLdzs6XormT7H2H4jZwK8qDY2Usqs7Hod7rqeKsHfMsQuezpUSbxwpS9UQStYc7pTzwv6hLq9nf",
  "key5": "5qg8VPY7zSiLLM33eEcYTzMg7LL1VGe2Rv1FrJgP8Xg6A64EAmnxG6Hetgeg2QNZGya6XWYPajStq7AWYikJANfY",
  "key6": "65hUY5m7BRSWGtFU6LdTbMvNWr9XSQs2WsZdAByQbWqJ2heGo851uR62HqeVChTMNMGfi3upxbjqy2cceYZ6VDfH",
  "key7": "5u1G4NnWyV7cZdvC4c4AdSSNsPqXkdH2AYGiC8QJvcQeigLNgKMe1mLqXaykgoDVxH7qcZjiwUtDQjnCmTQnzjAP",
  "key8": "3TUpzCo5wkQoDe1XEVpEs3u35ubY3j1xx7Uw6gDy95EzcZzJgUjRdKQbTtE5xtcGiDRMxw1FXJF5rPeV2CqmW2hV",
  "key9": "ogdcq3qmKZ2NAbW9frJFut5WZWqxGenWmqA9i6cNe2mjmvB2QdLJrwgYeRnSkdzXgJNqkEWR8CMCZgG4JBZEiBW",
  "key10": "5D4xNcsonQC6SQeCkMVwU7aCY2juJ31WgJiZKBPUaEmkMZi1iEN4ttY4Pv4hi5ucWeLHUczFNGjto8HoXTgFSu5s",
  "key11": "4FpCx4j8eNrNsDhyQSXD6sTmqZzKGFK4Fm4X1JcwPHYXy95fuCxUfJ2T928oWZPCdzWKFUcr4TXZ4YCSbHgfccWM",
  "key12": "ASwUmq4TgUwj6Vu2MvdAMJWWbgwwMFfrcB2iuy4N1Xiv1TpuxycaCueV2D5kEKSJSgT7ZqrkxjdnTL7DxvVQCVr",
  "key13": "SzVZwmNVUuRaEFTEX3rqVqC4uDmbhzovjwgKYbJpzLK97knGj9F1JYTWXY5uFxuDen2rTtodozkFuyKQBLTBBQN",
  "key14": "342hkvsYTV1b6fU5ZWtsJgxBFMxJDPQHj393W2nRAMBTTww4hUkUYr3u4ZBA8tZjyehVzGPbNPU7xpQnHS1nq9qn",
  "key15": "537gPwffYxhfjtts2M9eps8va5ZwqBFAgRj3keTrQc4Sqb5sY4gzZcLh6FfDascHuFXd2iE5DnAqZAD33qPuao7f",
  "key16": "52prdwz9DJDTES7d4q6DfY3gKVMRRR3eFEr3uvSJFFcPe8pFeSXgziru5Hkn3jW4MSh3LiThbtH9jRbkLxFvLCLs",
  "key17": "5BT3ZAeZUUB3xRg5fyiVnqLEEthAGSF5yKFwV1XBv3KJ83uS6CDeEXPDor3sKQ8pHbvpMSGiiiRBxXV5RVKbTrMx",
  "key18": "3YcnLc7N7wJagH9ZPcRoi2zTwdZvwbf83tzwLb3JUYgXxdQQFkGFJvhrh8ahbxcfnLye2ZsNo4m9AqHnP22tgPmK",
  "key19": "37NDsAxz6D2JnewAbWYXneemG5hftT9GQoL2GGBoqG8G9Z3Lt8eHqxYbYNXTJavQxjJkuS6z15zdqpjaAZUedDbP",
  "key20": "5LxVr9kXGbVAFsZSsfF1BowCZ59MwE2j1xaeJBp3oVppk9vAobQAZoTUPMGtJbxe7z2NJbVxzZQpDZYtWbjjNt5C",
  "key21": "5gqhSExgYhsFk4xxyRjq35KfZ36QjvFrnFciiADkq3MFsD68m7b2dUxCfWr1uZo9buHUrvTUqnY4BVyyC9sza56p",
  "key22": "pC3K4XuNVi4L7NVnzYmnAz2938iD2mfqV9tXSEEFhCxhkKTxEmqHcjJNzNoFBLTZuGBFuwxas5N8V2HAXYiBAyL",
  "key23": "3a5VihDZxsDMPWgXdngKKXymRavyo1Wq8pHugKWAXaxwwY7Mq5gu1mWtiAuyDvzi5eQMFoSXHSfyGCh1T8V4Qt4a",
  "key24": "4WjSJF7ycdjWn3Ji6hteC86GV3rxb3wpaodwUuGUJKnSkVX64cY2GDkN8HHDdn79yZTSVjdrZjUTXu72SBYp8qQK",
  "key25": "5xf6pAUzQV7k9FQYG7Nc6pcb6sqvbDAk4YUvtGhcwP8vbVSsAB7TVVVh582DuTdogVrSpF544hhgv5xZrEui3Vje"
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
