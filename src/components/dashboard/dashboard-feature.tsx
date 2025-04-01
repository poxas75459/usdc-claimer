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
    "2yNm1h2Lxehe8qzm3qFjLEE4qGpV7zdRvWbm6Q1pTXLE5TM9jFkVoDTzsjbWBdG71GqCRM7oUFizf7LQbNByitSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oTx7djLqa7D4MCznNV9RmqAW451kiW4KaTGV4HPiZKpAkuBFHyKKrWXqdWV3iCwgtBjGNfJxoMiiNigf23mtfq9",
  "key1": "6f1svHWwU9xqadx2W6BD7s7itFGtGJUjBffMVFeDP5kQk7jFVii5uCKBZqMVSHQDjycvJRxKP1ptZ7fX8UBLfZF",
  "key2": "4BztrQhSrLzXXCKxxjRwTom8MvwLp2Muv6YWjfpZrdcmx44JhSVWd9P3uxhCfWqBVD8vUixRkqJuCaEY1pggmNrD",
  "key3": "59t2aDKUx8czUChkZuzWC69HWGysUdnt4wfpADnFHLMVrm9ixEhm9eJRfmB5UBTt5X5npsBwosePHYQUSpjdn8Y9",
  "key4": "WTZ3AZgKuyuKMG3rcAHpzEF4eFcN6UyuTG1WRVLFxB4GYWJbzzEmFVa5qAArRuxsGSbWwcArFCCW3itH6mo8shF",
  "key5": "54siJB4B7DVWesLDXtLzB2TtVJHy14kgd7g4z9gs5qkWdun66mXBZtCtmuLAK9U98y9EGW23DV7kpMofuyVADxm5",
  "key6": "4vW76TzR3z2bTHp8SY8W5WJPVT8tfRmqdGtrjQSKV5b4oHvff9zsWd359dufNLN6EqVJpXdJzunjydLT8bVBD3gk",
  "key7": "2xPdSiBZCZaVMMzn9xu4jq9GN83aLufAJUTiE373cnYkdTD86Q12TjPHntUuZS3uCoQgne4feQFWB71zwLKx7zEU",
  "key8": "3vF9t5Z9vkFGEsJoqgDg5sSaXTC8roZJBYViYBnwRZczSy7JBV51tqChTnuP5ABCJut7okvD5nSzByH4nhLy2QFQ",
  "key9": "2x6jSZEP6tEZNnqHos6TpikRuQMss7gKgbievkpHXDmrxaZUiGFLCckExjDdRPRbBRpjDxN6iKRBKQWa1qzpY3Lz",
  "key10": "mg1PJeSs2okAzRBt1QoWM48UqcpE7zQZJk3ARuG8q2LgP92SFscJiFcQVzLDW6nBwE2z5ZYqGczLAz2mBztD2Rh",
  "key11": "3ZaBLoQ1kApFp37e7Utq2vUqJaNzxp5qa89cCtMQK4w2dvYN6BNDzx6koUbUy1Tk3hjL7opDmiTM3JnHUr5Z9RYr",
  "key12": "5b8KkXdQpimRSKoN3HLmnCkFtThvLGcr1XK4bwCYSw2Rag6ejF7FT31PYs9VbLU1pQYtfWgRwWwsHEJ9NLsTQU4L",
  "key13": "1hq9BAcemTNECkBS5EhbnPep6HAoRUXAgAVXvDFm9SCv1ALHtEvr59nWELETRSc5Ab5wNqudRoLpYhwccA2vPHJ",
  "key14": "2bvgJxWscBCsaRzmf5Y2Pn8Y7u3ihcT5Q1nhJjgXQDAWGu8XfpdaG19KU94jYtLCJTh8QrSHU9RKqp3BpS9DAR9z",
  "key15": "3iNyoo5E2Kb1F4UDB7Sdw9oKAfnoapuTxAJ8vJT5W514oGXYujT3w9WegKmyuxeWCHuNvD87FzqSGkKSUBe1BoXP",
  "key16": "4F5dbYHeqGxGwo9MFQnHWGprQSasKzcMApaLDdvbZaU6Z6rFUXcY9bd1PSCbAjjVdBFvLWyBnd1aNpSs3TLuPWjk",
  "key17": "4kBPnKSbcoMZurAZaaWmyPAhdFD9svsLreoNirHbtZe391trEJr3LKVf4fuY2JijadAM5JGzy4BEEsLVckHEws6i",
  "key18": "36qwbVwjmtjZcpkeZES6Jfr2wWXf8H2X7Ue5jKvavQGy85j7Q3zgq6oEMvwCxfUPm4jtVahf1BTfEZoMyTeSToU1",
  "key19": "HPQbF9pFWoM6NbTyot8mbjoU6hMDqgFXAXUoug4azqs7SvfKuE6jNrdKsKXUA97NiAoSVCef7JS6gqm771SSsha",
  "key20": "5ipZxXZLvUuHSuThRePes4AZ65Djqwwf71V4XTbMcTsdWFaxvJoAPzJUihepTkvDfiTDvZUbYRugtAd1NjTEMM2w",
  "key21": "5Qs91CX5tDX8oRcZBWyB8fvR6KsJVgEVktMDGnis8mtuYZ7CUbY8fHWaYVtqGamNoSPRRH1qBZ8Bjgxro5onpnYm",
  "key22": "4JqxU3TnjaPwxwgEjKm3xETqjuiVPW8T4Y32Qs9mCyYF9sjFm7o4GfLMWdUBNSz62ypz2n2kbQF7aPonJmnrksBx",
  "key23": "3t8QTkghMrHjob7RcSqTWAEAg29xnKPuDM3DL6rnDyheczMLEvXQTdYceKgrVrPpr14DQhp8rMWHfugduFRTdZW4",
  "key24": "2nBaDxPgV9kFsxZCwqnGUK9CxPFLeHsvzYqKmgfAzD5bW61kd6X2KKQM1ovTVtU7VJ6N8jTc2R7TJk5FqfuStTGT",
  "key25": "wsDeHn2WHkaG55zxDmzSQ1WvbzVf1KYxpct2tQhDKMcEcZUb392pUV3p2v8hEpoZsdFWbnQnh1mfwbJenDJAziq",
  "key26": "4ieH8sjLNDeMQS2T54ACzMMAAvxeUtu3hAhqstwcA1ebZGvHaiCGLrJp8zEXnQusjbC4Z83BhgSW6P6NzzZRuDgv",
  "key27": "43WHLZsEKbxKfjLt3ALW5uAWHaGPkc7YH7MVLt4oaA4C63vhVCV2tLNeHq7s8pKyLf74qv7od4mgoDCiXPnceKY3",
  "key28": "4YCFYJyV1RVpgKp4woTjunA97grt2ZjzLXD32gcpaCs1YVZ4ySQR6qEVGubkoBwa37EMcoSvgk47n1qtcsXnNcoB",
  "key29": "5qF7F82qDWNfdnmBv1myTHQJKshcbsvJp9HckJjgFdiDes9zZpZp9e62TmqXwELbUAhnxJ6crmmNpzQG19yveU9S",
  "key30": "4zhY2DDGJueFxntsVvVfzqkKNAX4NvpCWfjz9zABr4gbHzW7v6CtSbXRfysr2h9nxfRmMzeePb9K9wdHC1ZNB7F9",
  "key31": "2gaKLr8vExj6nee1eJ1BkfiWLePvaZbr3oiQiS3RYfCmeqs1WotkFy5E9qyg6x55JNqEx8BagcWB9eXZkuRia8aa",
  "key32": "2ZQcE13RLnya6xtHP4qYhDZtXU4SYpHNu1Gf9gp3GsQT47KUh4eBFxiVrCLqShJzZjx2xr7FEzrujVGw4Cpvn75L",
  "key33": "5zeWwVMnb8sXMFvffjmzzN3TowYVY3VcumohgqYr558FrtZdP21B648KdhNrPqq29FppcUaSN3RzoNeWfPuGwby8",
  "key34": "4M6SDyUWYyPqgtVFqVzSW3kUn6wGZWX3Xiahnk7iZaYVVVk7KxrJ4BZezgqSeNaedTBw5hijoYjDKpoq1f6z1dd7",
  "key35": "47v7yTubBhYRzz1vu78T8TT6SdXguSTtrQ8AebymEAHFP6fTVDoZTPPzuDD1hPJ5QDaoYfvGwbpTHRqaWvkVVBFw"
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
