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
    "2UpdMDb7hMXk789vgGpU3UV3AQVEHQ8fGeekavBDPe9djH8t1Zi5nrW3nv3VTKem2AzttiHoD3PAHTDSQj1X3u4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z5NFm43Xqpk4CWdUFMNq8cwx52UUAp1CozJP4fVLV18ErEWFgQPaceS5HPDLPprSNK3QQXTRCN42rjs8aPRbJMy",
  "key1": "MmsXRX36PYr4PPaR78qFFtd8rDkrUoW4dRy71zPUoHkneFDqEnuUA7kadkEiQaPBnBzmVatDwzCJBBzR2cTM5bZ",
  "key2": "3AmCppXgYhDH6mG4ddvamawg8S19omZJQgcn2BuzAcDXcyvHxaJHv9undhY7hT86DmRDtVaB1Rsn8YwXs4JfU2Mj",
  "key3": "5RXGh2wAffva1nurVyvWY5n7fCG8s6hCm1Kh8yQ4GnkVuHNHqdRRBLnhwWkGHJEeqWUgYs3MpytKmoPxHA6a5Wef",
  "key4": "2CRHrc2xY7wDgWbw3WFuB2VcqhVvapbTCDrv5L7wE9zxMxCE1Vw2vJ6bWSBNCPozKx8xXihUMGXXpVgnN9CD5BDk",
  "key5": "NhgghZJ72NNmhY3ZtU4zXsdExV4ShP11X8NfGyTwgpD4FAQT3qTzmqYY6KJMwcbqz1n4KVRAjN7KDh4hLzkDHF3",
  "key6": "582p1Ua8n4y5c36PNYC4jzkc7QKvjruCuXrSFQyuGuYbDtSLjAnjGxyMNhV25AWqcXDPgdtL61HfwJ4ydFFyKnw3",
  "key7": "2b1zutPuNbpyUWuviJ9yYV2AzT4AjYeVZEsSGvY3oS1kxzrzd442rcSDFsxc12kqSzwmeRUL8zwy93bA2CsQhNeM",
  "key8": "3CDY8bPr3bqxRLE9SMaAFbSMZh5rkGg1Gst6MBH6ovYL8DvfDXexn6PL8E282SNBYtphozC2ugZ6G72hbQ8o4xNT",
  "key9": "4mGyB4Em7HzjvRXT26xT28hDQteEr4wMySts2WsAdUvwfiiUaGTTBGYrUPNd11YdMgYN3Go5DEoYq6m5Mf9VWtt",
  "key10": "2SsJJYZyZ89nzXzTjqo1gZwPDfvNqj1MvrZgH7NJ8hgeP6SDQZwYhAfzZmuvkYycmcaooEEYoXDxEEJ9zBDzL5Uv",
  "key11": "5hDzG8AwPPRE1R755TgQHRrT7TtryiMLa7ZKpp2hxD3FL58o2GYyhHmH8DWLpNSM6dsMXnB5c8K58PNFc4o3n1H9",
  "key12": "kFp6cfSbCMnQgd7daktL3jM3kuVckAHuVrWPAdgXDgwSCHh312akatNSuZEWdwfAa8ZV3J14mUBGX9g3Z8cg59e",
  "key13": "2Asb3HTWPbaktmsQBWFJVFvFJ41CPeXCYEUZVzKy67tUdDg8LKKPF5N3Mz2e6eZ91JLoephY8fmEWc9fdpBR6FVA",
  "key14": "34JpjmNRRtQNHy7szfbp7y9tBepugySP3azUFWvTYJ3w4isVZf4QwpyJP1zqpyCQcRW5TVkymNbiy26eUUMjnMvw",
  "key15": "63MDptzubeTtcMkFfyQTyT1WUkk5dsQEUYsAi6cuhnCDsFqmxCMrxjpwsV2NLremf9ZQtYnG6NA23SpNdmUH81qz",
  "key16": "5L1YC2DMq8cHv96wN2Sb5Dj7fZia6N6fr4GRXFJ4ZL1PXKf5wcPVdkq5oJTz4TwBmoFMXYS6Rda8T6AWW78fpkmL",
  "key17": "64ZJANJv5sbNWqNa7tS3jPowuV5ydFiZxF4ZEZAkbsV6XKsAWjxhp7XVexJ4wUPhP6DBte43qAMXtK82vTrUMrNN",
  "key18": "2ZvnGg6pDWRpz6YwZWbhJj881qXN8VJ8idbU1Cyod597aWHdHm5q5wqe5maXhTLY4z5jdqKrsCqWancz5GX3Fgnr",
  "key19": "4xnuTwfdm3W7zTeGvUWEt2sPPpWn4jiZd2swGKnJ8BJvbUUpxZ7TkrGkp4i4tFJkaDwZssSNwdMmL4iS2Dhtzkfn",
  "key20": "Re2oLT59yCLag4PUjqjrZhvVcLycYQePiEQm6g2xdiEuQTYNHZog9StBnR9Y7wn64LApa6cXiCMhHeo1wYVYAee",
  "key21": "3g5enikxpr2XnfXWczwS91YxrfvybPXChGE4cT5WJudT6TGnmFLtdUuqRR2VDFJPK1FAHhoFkWNPLNZH9hPycKxe",
  "key22": "5LnXq5wJK9ErQ1uiGSPoXMvBjfKRr1KCamn4Fxyj412bJsUs9nahmXFgpUu7WD2q2faBR5T7RDyHYZB73tdgPmix",
  "key23": "2Qd69XjuEPExGrdCPkJxhtw2g2q4Q75vGe7s5c4jzfgaMz13y45HTXvuY7nawX4GCznXbEBUHAgdtJNsDHki7GHD",
  "key24": "4shoqCL6GTxp3rn5rgx6BMPP3GPevbT2Wt2kDsFeDadpgx1Rw54X3qLPU2rTNDiovDGZR1Xzvjmcg4vEfXgb2hv1",
  "key25": "5VZdw9hkCub5id2igfda41AHw5BPTZBu2nUcAufyMqRk6wpjfB6tGAzAmsWrFz8coDRmpxKi3ZnxckVwuTPcGhfc",
  "key26": "2Mycy5eQ5229sPCQA96Xg2iM4gs6qvM3bjweRDFfQ2j24DQGxTkVvKDyQfmgBjMTTuYR5hAPAU8eBp5FMBxRFtj",
  "key27": "61faCL6bfncZpXUGAxPmkeuuohZhhZNZoq1uiaMWb2dAFfjJsL16XrLEt2uwP2vHXBmmAzYjzZFV8emNUXfRNFEH",
  "key28": "5xDpay2CPZGzXWwnWqBG3nLN51vXgoBxxMKWhGZ1SHrvnw1tam34rcPsBFVFzkiZdKk19sSYV8oJ4ZZ7RP7qVSm1",
  "key29": "3nRozxFo6Dsr69gBwg4tdSDnVgAzMaBdPDTbqX2cbbUXHAL5p6JMaHt1EVtXjvzP9FeQzF6rnKP3sQ5kAFpHpDA",
  "key30": "3NwA9MsAGs41hXExD4wCRSeWYA8Cf67MPAwVFQFoR7PbvcyJqMvLRiFzaykpDkB5wb45jdfjtDJ1QWbWKgy5HuvH",
  "key31": "t5Y5YxdnMxUUuSF1uMsXWhqMjBd5kjr1s793akafvH7nx7arJNSX5aPsavtWnMkqM642x9c4kfaatNBSiGi6Wts",
  "key32": "3Be7GvGy4EJUc1ZNK7YwMo8vkgHrgtgib8zVwEXjeyRbpcr3RkqL3NaTQQwrx1YY7uZibzCWzceG9NZh3kHH1wC5"
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
