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
    "2JCXS41SJ1JiRrQBWhk5oDsWwxfsRBpRHeEW8phSFAH629MtidiburXqss6X4f3uh9wLAmZ4Rd7LY8D4UFntyNoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xg1jx88PYr1t12Rpv9D1aAaDfvQssNoCJjC2w68kjFa1jFfYULAZGwGAMgVsAQafuhCFdqh2DReqcGE6Zuby4bo",
  "key1": "3Zk5G6Hcc2FTtPMS1FxhHdiC2k42cGrvXNvrELz9u5P7wtxkGRZdds6NHMCc2EUQ4ojeUaXz5rzp44XLQSg31Xtt",
  "key2": "5qQMLabQKR4wt2n5DLCxvtoV2fY1dSGYCLmVbSUBcJaTAd7JyYpiiX9CopBRXkvewjG5SDuY9yfHrQq8D5w4njJw",
  "key3": "27shJx3JW7oMvqTqXKktFJWyuvUYiJVc96iXmwDQUbG4YBaizZ3rK9GgutGsqJjP73GGhjYkLtudfYNB1rgGpZLr",
  "key4": "21sVgBmQ5Lt69PLmq9XSGkd4SmDgRsKDZ1wXkDJUJnpBvKGXaZiqHc2UE6bjrz7BdNm5ZNrqJbMqb5m5hLD3qkan",
  "key5": "4RXDYDGJZ93DeEv3UtusbX3BVUVdL8PRdQ9scG7ZRj6CMdjkX6Pn8cFT7p2eJS3NcXy9Tv6nZJDCabFGyZMSj36V",
  "key6": "593EidXuy1U9d8AF8Vo4PWup1NogfdyiWdmnEJmnuYJqQfrBZFfRF2vFNVBnZtNfoTWzBgQobZxZk5Zp7m4hnEiU",
  "key7": "2GdpvZn8mnTYaUq7jc4bvgv8o67hsq7kEpHtcM6okitw28c354ZX16Lo1dCD2bh9TAajLWLpXa9Yjqzx1XzMpN9o",
  "key8": "64QxVbyX9YkHNUDt7BEznCa4DycxH4vR1bzY8WGN9xxX4oGZAao2bGY2bdAkrJxvV17W8K5TVfKfGN8qmDaB3fTX",
  "key9": "24Krnyo4VQAqKSEgkuXvVKUBnRWxY1sC1c7pSHLzcZdWEUN5rzq5rvxu2iMGenBADiR455eXuLVJacYXHYRsLShL",
  "key10": "zkQdNrmgEwroekXJBJHenZa2aEUHH6s7hWofVykYNeiTFYy9L745v6BuursRFn1V7QwPQK92qa8nGTycUwV7JWE",
  "key11": "5mzKv5k4AekwfoZNNywhWL65b2aeDuWCk8bjQ7YPHW9Z6AmiKCWqHYzsQdW7ewxS4RYrDRgcAQzCS7jNEugbdxoq",
  "key12": "dTW8KRkMmYXQWXiYc1N3xaDHZayAMVbNz5XPgnByjVc6kHR1UER8TuvVU3QME8hGAzRWTNwv5kUT1nt8R7GVVp3",
  "key13": "2fHESHmpEEj2kyRgF3k8QM9LGkdUi8HnVsqwVEJ4wRHkxnFfbTux1W2CqmjuoJcu9SGoZcAcAzogG1GUqsKrFGkS",
  "key14": "3zZ5rGiYJjA85mK6s8LGJ1nnXpdbriAizKpkKg6nLtzTchg4QSmmjedUqd4odPeQ2Zfn4b9ktBeSMjswsKC3vjCU",
  "key15": "52ELepnAcJD89LXeiQ8DBtykTwShXC2fRiCs2FKP5A7YahhBWHqhUtv4ybhMhnaLur8JqAiDLitU9U98JSiwSnA1",
  "key16": "3z6DmEMeo53gKukqE5UZABcQmjNmE3cUMN5h7mx2RBvR9PvYn8DjZ5W9j3g5Cb1Q4mJ68CJZPZD4pWWa2onXAZVW",
  "key17": "4QXGLSXd2XxiPacTJjZxWLHn2nTRKeTCbKp3GgxhoNGPt5LZ8gBzW9kWxoG79zAFTZSVqHE8HUcAMjs6BsXL1kyG",
  "key18": "24AG9i7dzE35WNBY6JyHa4vAoHye2tKCEN7TVw2xtxRD4F8jESF8YWtpjbWwquEN51aGvh5cyS1kmJwFMnzoTY43",
  "key19": "2dDqDy7QXB6j6vtMaUk3vmq3G37cfPEcekLZ8zj1b5oeKij2YBjtQuHBrg5ZQYnAWSp39rMBjmnjt5aHP9FLnSH3",
  "key20": "4So9o9vwtuVxoGqNNPFdimPyqVRRK81GjjpyxKck6jsKL5dXBv4Bp2dcSY5TfDcd2mLgQbaitKgWCXykXyRXA5cB",
  "key21": "58tSTtgKtJkJitaqFAwb6AmEiNcYNmqFSomj34ZzpUPvrWvAyadK3YM9kaKQitnGptRhmddMg7rNTiLCtECymJzc",
  "key22": "4BDdW8uyt8N35CmhywRPg2a2kyGn3BFKv49VRUcDUTFmhWKs6uahWnFnhhbH37D3xpbz8YeKn4RJApHb4szg5AV2",
  "key23": "417bqwWas6dgT5cTEUtsduJiXhDMoyGM1vDdkRTK8wq6ZEFgMZLeZevqvxkF6aHVScbaKkfczkyvhiJBFCz3Nvn1",
  "key24": "59dUJTNraPMtwcTaMD63bXhLehqmjPU2FN7ezF5biBRNEikZHd4TVQVbKezwYb9sgobYYqsbNXaP3wBKsLrzStG7",
  "key25": "3C2TVwPCJWDQc9WsGiiAQYtvLkhTLYWyLVv1ue8iixRyJjFhatMM9sZkXUJ3ihVbbKQmzwgoNcWViLmNzMzfgyoQ",
  "key26": "3bSjqJKCcJzeC1a2G66SqHaj82mNFZAPX9QwEBJsy2JzFPHfoyi3sc3pvXLECNxgR27zZRTPt753nmzkKTyhLYSe"
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
