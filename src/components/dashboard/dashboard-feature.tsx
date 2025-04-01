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
    "4uoyWpLkMRaP8SReukwVKpjk2h4BS1g8kSJd9rTLTsocTMnFPkKK9jcaExw5gCK5ovFh9r9Todcie6oesWpvAf4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xn4LiFjzpabNfdY3jnAbnrsovhPEd2no9ruZHNZH3uExsFcSPTayhTjvcWgxmx3v2sepkrFmni668cqMcxN8ivP",
  "key1": "rRKQk915qGr9cUazFpPX3J65v1R9PyiasiaeqvxAuAJqxDsLc738QeYRVxTGXxxTCd3rzwmGitEFgNwo95wV79W",
  "key2": "2usphrUqTweNnfBKUz5yCJjwpjj9crWUBLVZqf3YUibzzNb5uANcXUwbEJs8UPKhif9Syd5ABKrfSEQ9QUYu1mid",
  "key3": "2f9iSiRfpPKmNq1yYkq9j3SgyhhcbTkoxSyx32CaUQVQvjV6kGCQqaj14542rSmHNYToBxXau3sKgyLxBxhJXHrK",
  "key4": "5EJd1ZBRtPguUuVULaraBpeFX7yKuiJdXP6MyEbsShVdYbrH9EnwCxiCLykkAzgECjt9dQTPEq6yguMjJZ7BE21Q",
  "key5": "2inDP4g9ABPz4YRYiHaphpLc7mgBsiDi5RC6DmpBT4ZqAST7NJXFR9g5oUWFwPzWM2yF3E5jRKTKZcUEwrVRq56s",
  "key6": "TWJPYiHdfpHmeXR8fuU24atVVP3yspBiu6DKmtyah5sMNXqqjbLhfvsoaGr9xb1y6nhmu7eQVZJRkcMSGJinE2n",
  "key7": "3ccUhZktauARqZZdrveR8pXE5TQ4cY9TPF84jDuXodLBWz5RXve98mNQ2YAm5Pdq4NtBBkD8bFDUT2NjLxUcyPJL",
  "key8": "4AvZnoebWqh9MHDKwTdHcbtigtho5snE827E7tcoRRerrrK9Kj39m27GRNUdpsmWJAKEE2M15EYtuLnktH8UdoUZ",
  "key9": "3p1mw1HvPMv9DNMWq6i3VkRwd1x15tat3BQs8MN8ZoqCmrLuQGqz5Ua8TewXdyvMg7XWNq67NvQWHjN48ugaGmtx",
  "key10": "3Ubj2yiqdkN8QSfC6qmjiWfLenmM1xPK9nf23A7LMn5uioAC4NmXojk8tAhRaMN93uTqvUXjKXnGmMjif3FqdkVb",
  "key11": "2dCZgHqj4mxrShwaWR9NU6i2djzWGoaVDeuhJjhaLZNUZ4sqjWkcawx96b1kn9AVkM4omimywN55KWTKyjVTCtRP",
  "key12": "4CJvGtydmJRV5DaSg3KVbAp8fPxtgJdAJ1jSY6AuWobF3sqo2DJns3Rqw3LNtxbxgTjQNyw8xLqqaksHfjQ1oTTN",
  "key13": "2KPqS1uTrYb2fabpVvBihxZMkyjyRNXADvEE5yYzcUL9j8PTnrdnhRtZgoLxF5fQG2JshPUVuw16cPDYyKTSGLCb",
  "key14": "26aZeLhSh9KzF8YoZ5mUoQRriXmUcPCofEKHSvSUt2fTMPokuRhqBKkRh2G8LXjVxqzwibuE1AQKi5KvNoWogNZM",
  "key15": "4rUp8eqjPDLjfMtpzDzkE2urJ2AGbMq9HuwAMpJPPX1NNM6vxTNiw7sLtMc5ZLbnBnAgy9WRR4k2uLjU2kwh3NLY",
  "key16": "65yw5zA9S8seUVadHZSzPPZSj7bRxf4dcQqzg44NE2wPMpYmBzZT8imQSwH4ELzDefLowYQEoUJegyvf1Sy7chaC",
  "key17": "4HC6tb2W2QuhX328tWgEQdVjUafz83dDYrpfuKLGDEZ5CPK8qcgqEWW18ERxeqjkESFMydGEwRY6y7ApnfU9dS5i",
  "key18": "2Y656JqrszjaiFwZCBjFVBf5p4zsMDAbWjC5DzrZB2UsN8PJkX4zroorgBEJWHpbiCvaLM47p3ARTiML2TXiuYdD",
  "key19": "67asJs77XCqFxso9PzCAGEBwMC5ZXn2Lsx6ooY6F5BhpTqARCUg1ZvebsqLzFZgKvc3hW5SNPTKM9aMWmBDF5axF",
  "key20": "4byxFYxrtrr1UvcbkM7SvyeyHM9iyP2z3mfNYQj3SmpfPqMMQ21L8MW1nzFJvBa6n1EisBKdLLgdCic5fdsdhYPT",
  "key21": "7n37sN4EjM2zTjB4Vr8GNEYU4hQERbSXRBNZYCAYerjiyWaPbBe8g74titK44tRBQLQJE1Ytp3oyWZowjqdZXiq",
  "key22": "2BGdY5i4xDVe2cei7iURSGhuLP33EcCghxgS2H7b9qTLkEVECWkpnEj7Y7JdWC1VgvF8UDPC6wLrwYzxSaRoXS6q",
  "key23": "2TXrzMUgZN3cS1pkvt4FdstxHFu91g412d3athEsPQCZhdqq5EDkUb3yKQ5EwL196NSbBxZxdgyy9RP3wA3BLyXs",
  "key24": "3azjGe67hXS97tApe1x9tMuMbUx1HvHB2xvBCBZkGZE5TEP9fry5bfuwMEeQaEt4jP1bEeSLRHrEwhAYHuqjYLcp",
  "key25": "4yeZHkZ9WET2JMKGK1GKCqkxdXob3oexfkVhrsPAS9YMyXrTpn8dcJNDhyhuKXoXwYYbcbbERXxshuvXp3SoWBT6",
  "key26": "47xWjmtWZC7hNPZLmuFSQoXFuiUtmgGs6QoRqt3tFucc91Z5csvYwCBcRjbqpt9H3MCY29a7fwVyEj4Yf9knzAh",
  "key27": "54WyYurDBLVo2ssP1p3ur4sx9s9TDGHptLqzD2UMraq4HZrZoYk86ocJhgatwNrVV9NAoeifdGwKUSt9kLJ2EApL",
  "key28": "4QAzo2k69fbYUyoUBXogfJK4VAfZY4Me8zELDbVkFwDkm4KGFLWdxPjixWbjfhhbN3dUHHREvdXveya5hyErpNqQ",
  "key29": "3dwSi5hbvzvosWdBqBCtzEogVb9HEdnAGW6FLAUnhA8Rp1q8wQrHD8swABzkjuQ4qhaJpHnfvQ6bEgURNYqWXcrU",
  "key30": "4ztV7uJZ7GyoTnoTZKrwphf5RT8JCSBqdFcTY7wMzLEJVjy9zUYv2tGLFYjEY3cdAFqyBUqJkaWqFucX26oRTu5X",
  "key31": "Uzin7kPrdoJ5BdRdUQ8dHVN1HCMGFK8gHFi1qymNQnVcNub4gxKg8DdffBFbDDADw5rqGRQ7wbKHCCMNrwwYpsy",
  "key32": "5tJnhUAM1m1Efr1TBBH6w89LjXPKGZwtwm5kHpBmJkcw8kgf8FhDLzyNr1WtXdu74tvHFbVuQ4EYAAvBDbrtvtZf",
  "key33": "5jAGH61u6QAK2aPMiJhoyqqntXzmT5mCN72EVfXaBJ7ZMARgxtRK3h9nyEQfXKGm2YRm8TecaFRQAP4qVdSjN9Uw",
  "key34": "2fLJyw2aHXLufS2ijpDG9bp3PwaU9KdFYeRkkPVz8Y61Me8EmL4uLYLHXj5qaBk5P8zwzsywyq6pDzbvoUcMa7Uq"
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
