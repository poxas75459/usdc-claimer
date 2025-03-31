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
    "4vHZzgebYzkt61U94iBsJ3fZpTxfZYk4yLHUJuDLZhC5S7mjiXb4zFgQRiDdTuED3Y1ZWhANABser84c7JgGwbXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pwb3Mq6PAJG6orR9XDjZ1TZMYJzVyCcMQefQVK6NNFYvx4Q6ozpY94UQgBGGGP4RgB7b2Lor9hc83PWcFARNHsf",
  "key1": "5GHYRve3xjuMZuMvFD3DTsmobVf7AQTeA9NTLsd7kkzikSmia3HJLjBhCWszqKtHnuZKqV73Xj4aV9BWmSBuWL32",
  "key2": "2g1F8ThDaUo4WhPM4AeR3EnHtuDRV8jzeN6GcRaSSN3g1bsgWrcvfCFneyqSs1gFG2qCKnR8LNEm8hYfdrMkct8h",
  "key3": "5crEUPZakuYQRB6nGUcgVqRgz6ntSNnudUy4RuNZvegWgriryQdYzf6m3hSwrxkTVFuqFFzzZ4cMAgxfyPrWtkT4",
  "key4": "4NyXirGYuy4VnKiro8vJhYebsVzMErWVA6V9q5H9Fz6zw6VNpVZDT8CGrAyYDBjmMbeA1UTF6XgtSnZtKp9PiScf",
  "key5": "Pf4LbToEbd1xhvMrrwJ9VKyeHHfibgC4SQMHQN3AzrRrRKqqPiNnkqgVVuCBfvxccZGHXPzXbhV2945ELx5TmHQ",
  "key6": "34af8TFfmscX53AhH8hsGo6bKGBXgGJw6r3FwbHMHzJgRDWGPy4vUMqeTXUxbY1sjmdnGYcDkiYz7WqVKpCJiurS",
  "key7": "51VhDDKsfRy3HQw4W64WZYqToVwXsWa4tHJ9A2dSbYrPez3aGpJ7zMeE2HFePXXPaV9XRfhtqm6bxCMUhJH4WeRm",
  "key8": "5px8ZybLANTYG6c6xefkXiRLLQUa12X2rKSBrjytWr4y5dC2mtbkRrRkQHCLPskcdTv3oe6tqhYMwg1wQn3fAfXj",
  "key9": "2VDTReS419KybpiFH3RKTdn9zfSesNaDssqSqNwvqLBaVPg5qprHt5jVLbbbLk9wayiEBcA4yFdtDLziZjGet3K8",
  "key10": "4YnPSyH2G8r8o5j3CznpNAfg8bg3fjrwsWr5fx78QTGLM8cbAWCYzeanrcpX2LEzDN4L8p65cPGXFhSFQVbYfsRp",
  "key11": "5Auw2LTdE3pD3MLhPiGNeghbJffHiW7e2wYHJub8MYUW5yWf7N8XMksUS6VRWKgqreTQCnK6VdKrfKtwVEGXjUBt",
  "key12": "4cvhVzBphf4G2c4sxofEK7cB9WVpwqTFD9xKpAWbneA8qwY2xPtmmcvSwWsZtMsfbR6pcKGtoQyghijP3hRX3Ddf",
  "key13": "4nVCZ9aUKp5FJJ7PTbJPHGQea1nxewDHrMps9XVxzy7E75HR3h7WN71p8DjgeJfHuKAXpiqfuQvtCV484ZEhxLRn",
  "key14": "4WhApsS8PV6VoayTQjAJAuktzp2FdZwrd5nLTTSqwaFJFpX4tYYfvQGa9zzUsUFA3RVzfuf88AD7SJsw53eFSdR3",
  "key15": "4xc7htJQP9S7MHjY7h4LDaw25orfzBUpipBpPKhEHksjW43sDVJah12vntV6oF4DA8zRPjsiQ3EgWAyTS54eAExq",
  "key16": "9ctDs6XWwHktrpdBHRL2gu9xSQ1r2NdTwMjEER2KLbVVzg1FPkGYwcQrNxwPLAiVcU74F2XFYrUDYKnQ7XD4U3i",
  "key17": "2fkKwecT8NEaCEaVVkzVASGX4rnDq3hKYhgXsoq2o1m7bxi6JGjxqJmi29PAhQPpMmf6WCE86GAZHf8KSbqMciXo",
  "key18": "6uj7pWpYWeK5NFVMUPPmCNfvrPj849RQP2X2Qof3tL5o4w52Wq5tZ5xrNjo5spirtghZLA5umYmYvhmb4WHqrR5",
  "key19": "2uGRH2qKQwGQcjeC9dfVP8hWpwXQ8aKWNkvW59iAjo6A22t3pKBa12wi6YqeegxKyFALcNATU6Bq9M1Xb4ksHP2s",
  "key20": "R6kncVGfs4r3guAacexnugUbn4CyHVFjcritwcF6s4woNwpneSZoi46EbK6448dYCnfAsBb7oChXV9tSYYi6SB7",
  "key21": "2dvEM1h4B8wHy2Wcmr2DLxGx7oj8SCZNEdZd2nAXS5oMavnEgcuNYnzggdnX6TzWFvXqmoUM7Sd31Yej8ZXQ1UtS",
  "key22": "3jYPrybELkALEb1wMAubDgE8UM4yR2SogwLhHGohbTkQc89hxpwUeQBwT58WaCdXCD5W4h94zCgKUgs1Tfc2Cx3A",
  "key23": "1iU88r2RjEpV9gXynfQAWmA9D6M5dEWLJoegA8HC2x3aLisqWi4bPhj4AYBntwi5qWMHy2mVydV4Hzs6NEgNZcm",
  "key24": "txCCzgZ8trBrG1BEQeKHxp1o6u4fqF3hnAG8bdTY2zsNU5MuHhy51nnGMwwGUqeyHRdVU6Vviu1Xn7uBkoyZrKt"
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
