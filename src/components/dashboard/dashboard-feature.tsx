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
    "3DyzfKpmwXBtjUbhQCnDRoSQYoPYdJGJPpvcCNp6bjHnLUUMzYEMP4mHbZSHbuc9vPndXtLENZgDT1eppwpXDdt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HA8RHTYJYEBv38SGvbiY3du76tSWAvpLLWWduEW3PTfxCFJDYNibCJzoT3aSjYygaCnxpEmPjeHAuRyN9sbsrDn",
  "key1": "3hHCYn2BqDErZ75KbyggjxWsrqMCHbAyt6LtLDZ7qT7zH74P3Jr3YhZAms4UC8xkHSYsZ6p8VJw6ABz43rHK2DpQ",
  "key2": "22eJabKQyChgMLzxjWzLcNUhiXnZ6UVi4XUni5JTsmkh2NgFiCBMdafsP14u2zuCp3hTj34hVP2XnkHpqPeuWAh1",
  "key3": "5MGrovkwoAE3MDv7d4tFUJG6hfHhWkf7AXMoC1Kqu1wxYgP5P1LkWHXiXbWCsX5pbf6vah6uGRL5BfoRQnRsXFUz",
  "key4": "37rAPuhhMzgVmMVBFKSk9o4BKsaufLvfJzdk8at3Htm57A1E3NRSiJzh4VTtUVND3ro9pV3LdQD4oESYCgDu4U9L",
  "key5": "4JehwWYKwhAos24LwbVZBNNMBkUxjo6eDftQoSjfjp6k8ct2EJ3RRnY52Hw3ktBgMpDfF62SJXRqGkgQTa2QFLRN",
  "key6": "3J6dkRGoYKE3dLErjqEYtnXQmjUjbbviyN24YA3468VDJHJBX7MUWj6f5xZ4DupYTg4NfGqXgnF7DQ94gVDKJFwU",
  "key7": "2Jz8WCYjeYY61AFYRLhZSUX3zkBc7pEU14iU5WNsC7CgKUeaJmjmqk1fdoWkuRUtuQ886ACajYipdYBvZo8isvSf",
  "key8": "5oiaEacyYXE1zuGvGTczLHR77UFGapt7QswFJBUXCudQdhjgCQzsQBnigSjPmQ7WzE9zLkgi4rSQmVz9dV4n9tXM",
  "key9": "23uXWujUH1Yt4TjYUbojMwWDJhvLWFAaK4cj4593DSkhoiogBu6pguBs7VpDF4Y4vabhF6sWmsMw1JRizUo6BaoM",
  "key10": "33gdKVbdBpiHBpBYxQnPAn9kSo55DS7DW1cLq4ndgpiqgqkHppzUsxHto9HTwDXayUb72rDJakpfSx4Yg363WqzF",
  "key11": "4XceiveV9M3EGmpLqT7hUoPEkgS943eGqDznYmAVcXaC9sBCKQkSexXGCdcgJdrFXuh1jFp6oGxZYJSaxePqyLir",
  "key12": "5xDJui9kmZ95xnwmRiMyyTYVaPsiVbNELe7WF7jRieTVuQCRTasE7Y72YnEmuVNN75XNnwUeuuQLWjjy1PZQKAPz",
  "key13": "4YnBrPmwduzERHGv2doju1GcALkwxi9Hs3mL6Vciq4okLHDAHdTgZFt9aqMmdgEXXYV66kPreekySiwKdyVMp4H4",
  "key14": "4XZYsare8MD7Gt9c1HGmQK8E3gnyzrRS9sTvitc41p9EjhWmb5gBUdAq8doSqYJvXStPa3XcVvx6P1xDDfZHzHqN",
  "key15": "3iifXveQHw26UvDcwNXPt1hjCbsxwFgjLTtDGdFmB9YDwL7oaVZCrCH3Ynv2uZCw6NvppKcfTS7BPGsQEJcVguhH",
  "key16": "5s5CoYoc6B3ABJUo24sJJ2YjALA9a6eCGzGkzk53AFMQKxh3icdwYHPW2wuD1tSBeTK5gj45irhnc3dFToqMZYXD",
  "key17": "2CHCtuYFzp6y1kRnqFviACuFtK3xU7nXq4h7foF4CcQoDV3bAeM7JVVsk1g1n6iA79AFxivC4G2oLbgoRcy4EEfF",
  "key18": "2z7t588hTCrEpc28FdNqnkWQkMdUBLYJhK8gwGJYLRi1F3sbj3efnoSh6SmDrb6m1GHrqTrANwX1uc5ZPU4ivY8V",
  "key19": "5MhG1h8wfbxdTx4cYUrJ4u5wobfozVGF7n9Qs9Zv9hYszgjW3WtqxH9qX4m31NQNxnR3YbuUQda8wVdHbqB99aKh",
  "key20": "MqrctPt1uEsLAdTWQX8cfDj4PwnvTw4TNi5rG4w3gqTKuxji1pKbSVZwo1qSW44ugTUab6hgC5u6VrQA6Tfh8NT",
  "key21": "3arQKAccme3T2G4qeKMiY3DULnXsUP4EKheJc4kW8tjbKN2RaTGhnTJZtyciYKK4cyLh6nQYHVViyn5wchW7grDY",
  "key22": "4BpBsmvnEueJDA51Jtye9Zpo1v3D2kGtDBbBaHUQZX81EdHyrfxEe6snN47s5jmJpXPccbEAphXX4VLereAPtouF",
  "key23": "2zQjR2Vmcep4hkABKktM9EXx5Hu4XFky3AWLEqhk9Do1HuLM8SFTKSK4Kuggb582KKuxsM8dPYtWPUxw9CJWcqqo",
  "key24": "3WKx68TXbkrCP19ZKKxSJ4yA9Myh3UP6H5mwMTJ6cGrpqkwX6Ycyg5CbnCMqufZHffALBK9d9mNCRiTRTH8fbBPq",
  "key25": "rFxMjsx3CFWjzJ8zmNRrsUNaRwviQhpz5sMTjnjTMnhnFcqhMdpnMtwxgoMxNcd6H6bqs4THXeaVZPYiiDKFjdD"
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
