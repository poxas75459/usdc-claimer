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
    "5qsnEU9vnwR6JR7E7tzUbPKC17dAP16xbnnAByVdHD4eVBew8NeqRLFhDyx4R4hXm9a61d86JpZ2F7kZeUkB2449"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXKVUHBYkqpA8mLjpsYGNBpf1sPdeq1xM4T4x8rpL2btHWTZXF1MyUCR1vqTQWeup5PojvjWn39kR43uTRKBbff",
  "key1": "52SyL2wt6moJ9ZDtwfMGBmLdxhzE2Vhmv1Rq7VPQDv5JGzdc28EszdHfZGJL497TY1xUfjooyfGQQp6zH9yK8coK",
  "key2": "59mTg28DrRCD9KyKGUF8aG9JjZmuDgGszNuKqbWVNoZD887CW6raV5HYnJ9mvJqgmEppgtu7jNDmCDowNxq89kP5",
  "key3": "2moaDN7J4VXpzBoKikPUey1kRbRUw9oEawoicGuBHeDNTDHoH9rc69XeX3TLX1kkSt6AcnTbk4b65r3homQi6pDR",
  "key4": "59ybaRvL63Z62acYzSokeM7KQF7WUuK4hkjba4PqgUtJAA1CzTpK617DH1ya6bsMyC5wL2dEe98ZZz5CLqU8chL7",
  "key5": "4jdXuEkf2LARZYcTeTvghXx1mt7MMNgFSD3fRCgASQpUGRtEEcBqdhZ4A6rnQD6MGxLScsAZYPyJcDmxBpFgF29i",
  "key6": "Zhmq16cp3ptgPmosXiqi8Dsvk7VD4HbkaDSUaLkfHLhPAM2ckE3VpbthtbgU3TZjECzCYuHsn1zcU4YDtqDawR6",
  "key7": "48XXv2w5P26N8wsNgSVYJnpqRADfRZCVPbHqvt1ZAvZPWQ9K3AdjArhiejErwJMqrPTTCtNuwgaytgfPHnBCBm8v",
  "key8": "b3dcLaCuqfPh7PK6w4Wh9Jk9jG9A8zvDQ9awwVwDt7DoyFTKq5mSWctJXEnhLYQwMfxn1SQc2SVqjtaNPai1QZg",
  "key9": "yKghZLmiK56zkQLwY1NQveTWEy65bjGaTBsjxpT68DSTASXwk8WQfPUVCd4suiFFGPstUgz8Aq5Hjqsv3gUypig",
  "key10": "t83gdYsVop3Bhzdewp7aTLzxQ8jSZVYSpYASFhN1GpeKekChaq2QJw1DpNRgznCtNqh5i41D6CqdJ66rwMVd5sy",
  "key11": "46ekjx2xUQHk53AKdLJzVrtHbn5zhhQ9ciCLjUyUZ5MpWd6UoGetpb6audfXjTiBQhA4xV7iKncENHwoMCepMhGE",
  "key12": "2BYUJt4srCNvBeHbt8n9stckaiNRuwHapwCTVcGv9t6p2ex41q5zQZn6JCsDFDtKRRJ1H4jE7fTAgN7tBKHY8T7H",
  "key13": "yEVohnxwxNZUUJpBQCB88tMcKZ4hkk4MtP2Vt4fRbLbShcjbD7h1bWk19rBvUXqk8T5Lpd2cUp336TvG399XHCs",
  "key14": "3Jz8RGgmVpWK4WnaKaXQPH1MSerCiNaqJpJSJ5iwrWuFdNFmVM6KD2BwMzTok9UG1tP1kPMyuMnHpaGnH31Dvaho",
  "key15": "3PSaf7nFZK5wzBEEUJpttmq3P2FuUWCxgyzLyJBDAWcCeecjoUEvD22Qb2vQjehPc9gCccKCMdYaY7e9S82dFbsM",
  "key16": "3VwmrkZ9jy3pEbM3zHk1LD6xiNVNrEyyhXZqMaMAHheuYcAQzNJCXyv2JMmSYhs35ctARvq4fZMQS2nmLrRvdqXf",
  "key17": "4cKg8ePvg41fRcM1oCJ2c5eZA1zdCvRkq5QmondwoMRRedV2r3BdUAYJSPyKBJAc3DBjRjinJipDNURoLVxFvuQf",
  "key18": "bP9Skz8QKHsjgrVjhK5zonqmqoioTnYbcYaD7h2Lk4Qjsco3Pi4k7gwrB78jiiVY7xaW3F8r9QZcXw679aAQxFZ",
  "key19": "4c5KCCXC8LhaCZwUyLsXaRuQUxmXkdoWrymch7hWc7rqN5N5xczRZFPFkFPBWRVtprfBPnKWuePDJGizToYiu9H3",
  "key20": "ocGChi6eUwby2E7HdszULEA9K6nKaG9M7usqyeJyojYQ74tmBtEptHKXdmnLWtLS8L6z7XsoxoTEmSLqadmjwFk",
  "key21": "31QAThfTiiW2chC17EWGfGxGLZBNsqDNd96E6s9haKp4cQFjWTe5qSPm4HNdvbE7sCD81DqdGqcfPpS2AG17jDP",
  "key22": "4twteH6u6m7juFvkcEyxkvwNrwY2Yd9HrTe5dADLPMfMkKi1zAUpEYjRd8FMzMwc3GXv7A2MwrWnA4kh1aPGmajR",
  "key23": "Vk3PN1PWVe2FA7BxmwG9fSC1UBxsPz7Jz8tG8UbTce89TL8FEgreWJHGhEq4u8BhYXR8STwcu1hqzmKqHghAXZV",
  "key24": "4fWzraYovDz7uKXB3Yiw3GE6nQ9zhULR5G25TXksxJvFAGvFNfSZVP2NRxTpsDBGetSRM1UnoiSXr5XRFYi6aobt",
  "key25": "2ipjxX2NKn5xn7F6WUVK2yTBTUSXEzS92AjHhqL3aQeAzZJUzWrASvpnkKp1VAnMfB7RF55HLuPhyVeSKH2NPgAL",
  "key26": "5KARMw29ku9heq4tHC8ABVBDLAQgs8kVJBvt97tBUAZEESwYzspisXbpsEKBHTk1JJXCKCB6EJfqVjgZMRzmMCaE",
  "key27": "566MGcvGZfLJ7nGh3JTGSRK7MgZVET3oYJM3a2sgFcJjLs19f4yygRJaTmrd2mnfDqYvLh55sX8N6BzhFTKBNGfW",
  "key28": "JV4AuPs5RZ8mVqVP3rskse8eGMoUdMJzVcV3FR2cEtVjXwTvXy4gNJKq6mufocMFUkL5qcM8iL3B1eCB1xBsbNk",
  "key29": "2yrUqMQmZu6wZJevRrstbgCV1Ukm8qz92fm6DQyicxuNEYJ1GRt1d8cuL4s7cEzUazyhPor6FtiH5iVeshN4eiE5",
  "key30": "47sqEMfMQCqC3HfWSahzbW63GHrJFBNVXkzxr3vcy3GEWf4x9VB62gN8TL7W3ahotRSeuUNqeG3j7cxYDWLHmG9e",
  "key31": "5ShuqUnFyQvxRcN7Cuiv5217b6zFmbNWwPqkZmqGEkXWcfu28Fnv99WBE1w5kFy1tXnVT5HQaFbYXUGxA6Q5nA2X",
  "key32": "3RU6ShTxk6KzcXAnciWj5Fmso3YwyPxk4S2oCSNXw9t9NgadkxuBUVbXSkP1TpEtr5dnPdEizsV5SiGbRPSEZ7Zx",
  "key33": "4hSDXC868SNEuHxPAsgtSuod9c21g5uG4LKitb4qzFxkYhnDskpfRTab9dhK9WGNSemzhcN9yqzvrd7zRSo8JSiQ"
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
