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
    "3Pe1mvBEKGpo9qSrEWEQJcSsuQNYG7k2y4MpEiuE4RtvZuvv7o5aoGkypxZKi9CKTKJjBjZ6Xi7WzJVt3wHdjx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3LLFnzCpqpoffgWgpu7WHCb6mTdgq589GNNjTww3WBNU2Y61kkdmawNp6zsFp7uSUtFaZujAWbL9N8PWnaAYHw",
  "key1": "3uGJY3JxyiaLnLSv6UE1nMKyeSg5S5EedZYzD8ZAzk7G7mbnyY5s2sAcvvT3r1LvfE8YV6Q1xXyDpykGpnJM6MU5",
  "key2": "ABjLze43MEKKYuTN1hTG1GkJ3oMyCphjagjPyDsU6vSy5u1RqHq5Aru336J8GzNNbPPTENZu1BDgB9ULsY8Xn8Q",
  "key3": "499sya6YxX3tez1VEjNMoFqEg7KFJzsaTsf7CbRJnFAhqeP4yz9yaXnnA6F3V2RMC4uSF48eC2uLsG9DJv2tSLGG",
  "key4": "NwkDuh3X2fbNykrMacwaKzxhH7utjYRyWfRnNC9PHcqQPEoG32TFXTuDx1GCtozy7WAQynT8bw9KL4iPDHy4xgq",
  "key5": "r3wZScRXDEhsbwBjEjFtVBPfYXW6YTGhrHjWLjAipPuMVX1iExSrpRjP8SACdBHzp8MjokHLAor4wJY5e5bDvCa",
  "key6": "W4PMGwNXFUZo1EQBKYwFnsfFXSjswGy917KLK5D2YhnmQ6PyBpBojndUUFdAzR913myHodhZpCsAzHYnBfyWCU5",
  "key7": "5zjYqhXQvFdjEQgR1XdMXLV5yqEWiKDNEt947zcUr8JcKaBLyPy2w6jiWhuaiQCNwQcXDwxjXGWHyuis3Q4u2Dwn",
  "key8": "47wetuinHcxSJHU5xXTZ8DaGAnXJfxcHVK9AHoJtNGYEzyYdBDk5RRuMvavpN3mpxqKrDhHkWQDzTYrob6NdkRRb",
  "key9": "njZymijkgoipFhx5k7NKnqbpU1W9srBr3yCDj22GrEmgZBtqYLpda3edqxwrAsCtzbWJR4QixnYQpvTNLnhmkQx",
  "key10": "3pjYZjvDeHedCSjAzVCut6wLQS8byDo5jFLZZffMJaTU8LmKfS2xUqXGDYNubNPHbSEAYKGmejRaVmsBaFbcdH6S",
  "key11": "sSfzZxHzTnMZU8pvjCYckk6iddGmK96wjkPzPzHC7mpoFQZTNRQ9hUCgDVWVJ736LqzzNDLmA7sXFGxXXY8G8Gx",
  "key12": "4wm4SB2BLJSLHhDhwy9NXvjsrqPrxdaN5WB57iwgR1GVi27WDYdPay2ghU7i2zzNgjYymb2ziF7KtXX8SNYsErEr",
  "key13": "5EcLco8z91vNS5ymnJXsMR7Z7cYb18bFtQ2JtekMmsC7DYuWPVPNWeha4Ue2Vs1F4TQsDgHkVhFEjvb338sPtrn4",
  "key14": "4AhmWq7eh4X8ErnCbaq6k8S9gTM8ZbLwGg39XJtN8Y575SATm5jmfGTRQwv2gPhwy14YXmzomgfVXFG8XJcQwXQ9",
  "key15": "T3zBor6adyaVuNNkSUUKAVyyKxv5xgqTRGGpVRiY2qtEYVZoEqVyQC7UXKXGLEwbKfjvqU3D2UX1YW4FPbC5KDR",
  "key16": "2p5Tsq5HNZsw9VuFDmYCKYQd6teL6M6o59MEoExC6Akg5Ceo19RE8cVW3WKKKobugsWHz1wyhtCinXGMJpYC7eqF",
  "key17": "4zqszDSoofJnsgMnb3smazAQb6aHhSLz7hoczf54qQpwUEN6BDo2Xc34JoC8TNQXj3ihtBAANrJxRZ7MNLTpCQQ6",
  "key18": "3bKZFkt7AjuHSYKotyhQpjNCT5BQS6e3ASjgdTKZk6GE7Q9QooqPMowZjxsm57QetyJXTgRMJVnzrMkkMs92HxFm",
  "key19": "67YkV3YLYN8FkrBa2JdUvwR5dh8NYamTq3LvQMegangpZZtWnsRnBzJositE8y61GVYaXc7qqhFMJ3bFtWDq1NxT",
  "key20": "5ew2sCCkmoktDNEfquJ9FyQv4F39dkxWfVnMp4Dsvd2jfbLsfUjYpdoBWZrc3GnRtdUSzHT9mox6REMUJnb9EQUQ",
  "key21": "3jvGATnDHCM1ZKS8BC53XTG89xWpuVXrGFzgNog2d9GC7N6X3xs5sk5vBWw8N6Hyc8k37DoMG4ee7uokySoPk6pu",
  "key22": "4G1GRf1GBb85zQU1YU1ihxB5pGeNSGKxZLfiyFXgpTUiYWQ3ZUhLGm6qXTLXV3kpUhByF5ME71wu6R3wJZgrKwuE",
  "key23": "F6wqXoN8fkEiabZ1Zybkci7KhRzR73kddHc1mBNdYEts7mUZxd1W4RzBT93VPqQbeGocZ4TVP9KDey59o5QZ9Ev",
  "key24": "2R1gdDUouBddQp8GHvoye8qqZ6dZNZdUPjSMdvtJQR7ceHDo3n661rZNzSY1Gim8FEMoaUKcLK4sTdLJBtV5cP2w",
  "key25": "3RCzeSKgR9ffi8tP3JZxpLVi7FqDHKxGMzP5NpHXRdyvwmUFya8XxHVdiLLGJMMPtVhAT8STFMiCxtiWsrrFnxih",
  "key26": "Y5iZugMqDy43JMpi5j5HAtFEZfQhjGVx2gtcDPipvdKyn8qB3WELCQ3DUV4xHLuH3PA3hrt4E3YbXRNLJJAMimi",
  "key27": "4456S17q1z7dkysoiekRq4s45K67mKJA5VCMHk7q35TE9U5iH4WFtpWokDKkD9eQ5h9p1wdCKCUeqQ1wWcTN1PLc"
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
