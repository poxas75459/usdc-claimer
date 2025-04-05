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
    "4iLcrZjZkjmWR55DBnvmM7SHiSjfNoNcuA1KPJfCrPMUXNubdYEJmf189NVLgKuaC4QeCG3a2eRpGhdkKJVCD8mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPJQMDdKdDwG9JNTGtfBSc3GvGdh2PUmN5BxCYhFDTsP9isAAvCR33WxBU2jtMan3BqwBUdHvHxeFvavf8rb5h7",
  "key1": "5arJJAGvgzCAc4otN2msiESx3hfoJfWLrkvD1d9kBXFAWcG6DyLDw8z1qfr764tBBygYqioV6TYn5Y3dh1ACagFt",
  "key2": "2KGYkauHQiqFrXCCcYbptYFuG4bTGZNT1SAhe6U2HBzBBNSXiGQF5zNjEbKhaVv95rcpUNCAib4NEN1g4HKGrTcS",
  "key3": "2utXGWeDG1JoVLXBnS2oZ3JrY4a3mzw5DeH4rgGc5abyHZVBrxyyP7wqVxa2GMxid9B7gf55JQUiQHmVi67n1zeo",
  "key4": "zYPoJTQHZdGYimc8Pcx8uL4KU82ucap2vb5DpzfkbNht63XWqXkZyLxCJ3c4CSKWr3y1qjwXmt8yrSHAY6YnPnP",
  "key5": "2bikw5fC9W1Fe7EXAzYUMQmXNdX4RQfJ1a64QuSppJ5MnHfSDvuM2gVzmRdnkA5TNBhZPqCJRhFBb26yvgwHvgbZ",
  "key6": "4xPvtDV3uSFeracSFnyxLTKCeGbmpAGpqudN2tG7Hz1gF85A3Y8PBAbPfGDBJsGjUBJhpVLkWESBqX6RojyWbF8E",
  "key7": "28F37btrtD9BofVaggQPSzvz9s9yBTwLZcixRkgiYEMcbdKLHqHxoCRX7SE8zDFwNtN5wUcFhSXE9e138kFKpRCb",
  "key8": "5EbPYvBXPJubAmyEjQGK4qnhrMxEXpow8rnCQyZUJRcyJ3SNSDb4LiJ5mXVqB9LQziNmBRiLKiVq86c8FcepwVdw",
  "key9": "GqmqNi1r6BAGa1NSsKQSjZqs62xZyTEwd4QZT5WVUPVr1g28MRM4gh9zgSf7v5CDKyKGFEx8RT2NwMAQ1F1wP6F",
  "key10": "3TiTZ2QQ1YvxLcJoj5M78WbLcm5H9BNnTZb2E2duhkkBjEKndjdLivCcrd11wXn4Qb1cDnBUjvu3CfQTeZDTvmhW",
  "key11": "4L4uExepoAZNC4dEQzygk2E9hxKPE16eV1ZGw7MDQTEBZqsXjNskcW1ss21v4MPvyLqQHpQk8PE18pvbAkaY2eCD",
  "key12": "2zAdL1Fqqu5hCwxwdiRonqTpoXoUj48gPWcTsu7AhppfKJV49AyVoXuCm1GhGf5Ar41fsB8pxHrRuhQi7vY83Czh",
  "key13": "4o93JjvTatJW3hEyBYhkWSWt89tC97H4kVu6SoTSwUg6BJRfYJAsMfz37AUtG4x9K9b3ji1u7dqZi2PgZiaGikEs",
  "key14": "2FXtNi8b9rJWmwuMm5X1hL4KfCe3LUHBtge4cdz2Xi5epuFPn3Rra1Eerv6QqozZyi77M5HbDjg1j3TYZn2utSzd",
  "key15": "2cmE4SU57FQkQ9jDUtuuDGCaMtMq1yj9XZwXyM8Exis7BLFQM2rNWwAUdqJPX4v1SzhAR7jMDPv4VLWQcSd5ire8",
  "key16": "5kgZJhLHKbE1cvaBUjfheczkT1GJJNGshnJvSsE17tiFBw5j2fk3TBKh9xfhmmu3EHh3r14zKtX3yxQzgLRU1BgU",
  "key17": "2YvfSxv132kZKdL4CMVD5uRiEGebVHoYYJKJgoPJLsBkyweHKbjPjx3Za5xMGihArAjsnkfJrXTMsQXoZjxk1oyv",
  "key18": "5BrN9vC3EpmXSFiD9cuTGB5utWqgyVinPDM9z9nnEpHZXooiATsVJTLtj9dUtHJfAYCFjGqGEy4JTAiB1UyL6HKn",
  "key19": "3X16WfzJB27QKwLbiojwgVyxHqfC3nGLZCpyVGQ8YoEfu7HN839NZvEnCxz26xXr7PuTfRsgTjLxhd56iwBwVCVU",
  "key20": "3cSzHGy5Jz8xG9M7XC7BfWvAXq9EZFgAN4jG1UGr6tG7xumZa8hg9bZDT5jW4FUC3K1gHsHY275JJgtTurMDMRzY",
  "key21": "b5pYpGFCAyiqYKXv4Sj3xoapSqdqUdXqA1oXvPZ3Pwfa7NN8X7a72tLTt8tk9PmNpihZ9d1Adi6uhEj6btg3ZKQ",
  "key22": "32fcAcYyD3EgYdirKDWvBSj6qCrpYtumcWuKgZjFMUPAxGuZwCUt5UQ1mU7g5Lj8c2CkDdoL3QYJLgGuZ9PUw5SQ",
  "key23": "5A3HhNLic7n3odUZ9HijLVa9TUaPLXc7J3RwP2HFjFzd4vM6twEopwKuz8xQmy3ABqtY5KnpRBpdt8hRoFcuL9YT",
  "key24": "34g2BzggF1V9rdZQALWDhZDk26dU71ZizPnLc56556nRjbHqgXhuMp3Eej9rC7XeSUyPcTdJLBgQ2wG7pNzySRXw"
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
