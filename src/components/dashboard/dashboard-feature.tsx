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
    "5f6E59K1aUYM5TaQWJbvr6pQjdYRkRvZGUs4kirLT7FyZsXXMkGvitDLAH36mJQwF2oksTEAAaZjJKyQqmxbhazh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MfRUvVkwo17hUNprmsvz67mn9MGV2si8pB8ukSfnmWR9y7pPibcjTWYeD38y7qYr1c1Nh7NqYJrNG27ELJnKTon",
  "key1": "3rtun4qR6uThR3gFPXnudagyWrGnR4ncJ9h9TjWFJPq1wHiTyPFuC9oHCPNwaKm8UVEtLLuzdd7Y7WLmnXCV28hM",
  "key2": "4tpKLpj8RMnEKpSVw3iXgeF2mJNGTLVXN1DvDGn4aAV3QAW1o4TDdjnybiHidgq23Kdj3FZMFnpb8WF2UQreqKC5",
  "key3": "5fK7SPNBFaarjzta1RtfmJ5vFDQ81SDBAQhAvQ1tw3MQi8sZffvm7wwkw9pavFcga4Um8tU42WB7Zhb572tZe1xH",
  "key4": "MSZ7ZYwv7kBcB4a1ZqdxLZV5dEeLd694w9siwzmhnDm22t1rGs1EQUTJfYTYbMg1rsyQSjEvPV6u2QvbgKTj3cQ",
  "key5": "3r6MrUM8qn5PQU64zxuSHSXC4dqy4aEE3dKZT1CN6yLN8oXJLRxVUBRihdCfnWgJKnueH7fhZkpTYvJqiuKXmqT8",
  "key6": "5crouZnhoxjNvdhFSX9qd2bcY5iWjJmqjsXqTgkEU1tH1AHfuFgukAMfYupoZLFoA8n37DQoSvg91o7eZ8xkdRjV",
  "key7": "4kkauBQj5zrJwZSEyhoQvyeKoUqocYKKZq4TTWzK2w5AYTDjwuMUHqDfgwyjHKDUh4PYDr2Ci3hiAb79SELnqQc1",
  "key8": "5DDQqq76tBWoGyzypGpg1D7CZ2sYeQA1buVCZz6WLo1iAshx7AfwFYKLzyoDZsTWMsMRAD1ujVsjyF7EbtEC4cqe",
  "key9": "5HcYHHP8uwu12PJUydLR5nNm9jBkb8pczrt2SHVP5QncCrWmyhQkdQ6yQ14rX4TR9tRphCEwrdzLaCrbXbkiuz4T",
  "key10": "5jKWsJ1HpCAsWEbkFtbufqwmbQ1sdDpRrsQnp7f8qBLsdg424F3TzQsrq2WCxFV5vccNufMRyRvPLTq5sD1VAyAn",
  "key11": "5bco5EXsuopnWsD1NJs1Mtt2uQYcnio8CxC3fp1eiRBsxZXEuZiLPzeYEzCZyWzevn25e29AT2yC2rejgvB2ES6X",
  "key12": "3SBa6GWSYneVvLD4Ezbv9v9FqfvJBBdsoMktSDX99J2fqMwbF1ATfS4MYVuQjEdAXErSQHMRHM62a8YWVCtSewZ8",
  "key13": "Z4chgect6jtazP7ZYQpYR6dd8fpB1bY9m2jgbuSEbngSvFALTZwuLZXEHBSCGcRTmtinNtFQQMKyJoM7ddNFrsn",
  "key14": "4QUCCnd984cL5gXkKcp9txT68xYjtcpNBxTznXycAEZUG5VD4dBxzk1RDumGMuJaNJP2mfx3DNcFE3UNHNEqn5Qk",
  "key15": "59pAp3tn27w4AeL9cXFekPUmZoM3jhQRc1jkA31mbYKUZEWceop9SZ6ScJ2EkcDx6nrbGNawZuMbuR1PVeAJXAor",
  "key16": "5FzFhdi28g5tt8oShwLKb76mTw79PobbS6edcFSPMn39YAkyNbqA32qSgmd3fXoTQjSvfucNA8bN8nnaAipvSq7p",
  "key17": "3SURLcsTFA8Zs5PqUcY3BaXWxQKxRPtWDxhMv1oMWjgy6WP7RR2h5NtX9EvzWtJEzCSPQooj2ZqTG3Zya7ogUAfb",
  "key18": "3jbUazFRm9uDzJvaX5j6e6iMpnPuRN44yLoCLqec1e8MiaYP3nDzkyUacEELhBCgafsMxKyZyfrM2BMuv2Mz362z",
  "key19": "3DKfXWxUiXjYsopJkoz8TC3WZAwFWJ2x1bxBWVj2peE1t888yRD47epcwDcHUxYAVFELzutreym5ki8QzCMjSogN",
  "key20": "4fCYjEvSXBQidPR1t9RXRVmBLsL9T9wsha4Ho8XRPLDvBWF1E7L78ijKc47rETEu7BdYxrMfgw6LTN1kCW6CXmnp",
  "key21": "4V3XN3NME8q7r4uXwseuyerkoSGuNEZduWmzUGCMGPmq1QRF4qG4rAJsjZnMNhX5BH2gnShP4XCKUpdXvhDaNKdH",
  "key22": "5bULCJqsQfR9aG6XuR1QGsnQhcHWryovgZTyUbKpjDDghiuo7PfG4uGTFTXipKpzxuNinrv2yAoeCvwdMbFaBXif",
  "key23": "5Lo9om4LxnArhiB4k9y83fd8r7SW4DLSikkT4rrPhR1XB7GQYnSRWedUXii9YkAgxFkFviQGL4yZaKLy5wv8wQgd",
  "key24": "2tbi76RoCLkzYmrWotzzAj7fEg1moAqhaUmhgqfNEptjV4SXHrmF6gP54wP1e8n594o3q6HzvPxvWx83Vpsfzehv",
  "key25": "5mRpirQD7kgQnoP239Xe2a2LvJzEq9MMapRJAXb6qhBLWy3qadU56FMVZ1WgLoKKTCzoBEW3oFa6nFvfVCGt9McN",
  "key26": "3dsLtjeAwXt24Tu36qGbY3N1fLbd5iyP1Svxn4rw7BGXtqzHWtAWnyuJJu9GzWDMdEBUPgtr5g1iZWcdBrentfM6",
  "key27": "2jciQN3To6SQLxWN1Vh272DaWygG8RLyJ9QqvSKbngHNjafFtuwjSRXxcKRU9TvQFNhte4i3EmPPAjY1D4V2gwh3",
  "key28": "LKZn9Pd4vN4ZeLWF8vGimvfq35LQ1nEy1DwvWnvBvF7dUeHvwehNq2QHdnV4S3hQ6tJYV1FV6NmD9Pfhqs4MeCD",
  "key29": "64AXiTv1BGSPJZ3VmzmxZKQBopZAoZLu81U4PnSy5vk1pe1P5a6Ko3NdgSpjVn1c9boKP2FANXwcFzNFy7JsHaRx",
  "key30": "48WH2khRVtPLvD1bnn2MS3p6n8vYBhepbJAdE2idZMSFEfAjshPM8DRLD28c5BbTtJ992v2Wrx5pz9nqAyRHa3eE",
  "key31": "2DeeNDBYCdpjx3BxveGjnr3hHBXYP9oHmRR6d8U1SAbJkY7rcAKa2YiBqvvMuN6jyMdsy8udsw5CL2wZtpPxUynS",
  "key32": "2zQRHyDFVuqCwZbAxdk3he1NrVcWtCs4CiqjU92fZmMnZUNmNZ62o7TKc4E7k1hh44vrFjBtfT3DQR7kEEcyt6cD",
  "key33": "5qEWkV8U7EQgjmVRLJdueeiUvk6rf8AUCLpvHUwKmoBFbF9KYkeXMwaDR41YpzRN5LKDjnokmoMQTNRjEumo27K4",
  "key34": "4bz376CC8vh4gtsc8Pd6qLsUJpUgfJ8bWQuk528nEu6vdYzJEwL97w6HFmcce6smZxGCT6QwjKsVF4tKwavyRtUG"
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
