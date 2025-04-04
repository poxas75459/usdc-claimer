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
    "5uVhdMJJJuN1LrfDfSFXRmbuDXCq2aTcyC6d3pExFHV1K42ufiFYqpv7CSFPZYtKSoUpPLFx1zxSwaugn78DNBeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjnbtCPVsp3fkZDkbbjfm9dYYZ8Y3UquTJwBNMZ7g9vtf7ZcK86nacRM81rejBH9XkqSsYTYq2XKAHEwMK8z6CA",
  "key1": "fzbxtNz9PybsvUNNcG85yJfBFYEKRRx5spteG9Qjm7Q7MQrLAEjoDqDszJGKB8239XEFvBgGrAbpeqiP79DKRZU",
  "key2": "3KF2aEXX3ZdCuiWhS3s4sTGH8cR7Bk465LpL31gPvfhu3oxEQD6tHbdS2XEwrWfLoPxbxQcFs32rLF7nvi73yW1j",
  "key3": "42JNCXQHbQM2bBgY4nuBG6sNNLoJrcUsDDovQwXKriXxqHvVxR7Ja71h1nyUbtHKmUy5mK9gYsNwDxjdzrooH8qS",
  "key4": "5b9CJgnPC9dT6pqg36TraL128GNsR5ai1Qq7JYK8UehZYLMLqSBG2y74ZRCJcpm2wF8SvCnX6LreMiz7KBnNCLqp",
  "key5": "4dnKkBnttJBFvwRyg6K3xCqMLrbBb6MS1UGSgFGzWpXrEvobEGgvdHCFpGZRPEuLbRZYbSZfYeTeTgPx8d4hiob6",
  "key6": "ZzQnDJ2qZEojeic7TPswqX4T3jENCi4uoeTXZHzAESwrRuvy35TSogwHU4SGEfAbTde8UL4ciBHttZpGntXZtj5",
  "key7": "4vGq2jKfp7e9iFUWzEMJFaEMWhgiwSparCE3nLkRyACKwXGRv69hH7wsQ2wvuqQhvzL1mwtN1jGiyR2umrzZTsHD",
  "key8": "2jDn5iui3ChVtYpyZ4EFeCoNYciTztWZKT2wFwnnufUVvLF7s6m7Fjy2nCZkHNKXvkp7cPpmfJjS7hw4QHcGGG4a",
  "key9": "5FwVRaHGtqXDyKbAwBGgJQ19uEbg26ow4RLAgS4624tcGwPCmRqfftxFdd1DCcph7ZJff3q68Lu2PRiJXLjyMW75",
  "key10": "3pBXeTuMVPtYqf51KEQHR198P7LRQ2DKqMoqsLJwUq3w3rpysyXx8tzpzs1KEMw6SNLWLbWMDWzwTSJmf9AMpGZX",
  "key11": "4gctQo9Rx9iVP8sVMVXuYEjA1g1a7A1w3unj9cequpTWPpaYCjDfgmn6wTh7cQxwzHXbg6iqoEwZaH2ogbtPziXc",
  "key12": "4yExvGE8HmoestZqX8WQhQ7N7xwxNKx8RViKXpY6zrN6eMpi8a3jckbNGzm54R9i9TMEetqHYi4xBh7yqwdM947m",
  "key13": "nDsWextKCGKnqpK6GoujjmMSHWhL76BRQMdsL5TdVjT5i14NunQQPRVhwRyrLUCmkQxjPjw57aidxycNyv8kVZY",
  "key14": "3L8xeHMvEJCcikKZDuhcS1EZtMZBKmfGyJhkbrZp1jSQTuFfwc4yyJ6Mca7eMB4BHkNqk9vLhgu2urr55nV72fVh",
  "key15": "2ayhA9na4VtJt5fPqaBYcMZsYkaaikWrjE6SF4S74TCoNQi6kKaDEMaknAnRmEB7JwfgjCWYbUoTSTi9dk3JKMaB",
  "key16": "rtJVAr2ati1XjYcQpcjkeQUGh45RYAk3MPcnSHhuh2ZJqDNuehFw3pGgeGR4sewpSnHRLoW7LBFEYKUqr2Mq5LV",
  "key17": "3h91kj87MpbhCEiDCUQaScbyTsgfdDqb49E3U3g8SmAzf72zcY7dhF2e9HAbCGF9dB5gPpit94VffWqxaLh9g5rS",
  "key18": "21FfuqRkWDPQgMV37uztMNk5n2cnPX9gorCWkKT3CHibt4wLTt6qUSLZueuB54A3q3T1ZRLS9NM47mzpcDw5VyB8",
  "key19": "5CeMrLyLxSto2k2kMaPXqBu4HAt6ZbmGuRqLC5MRXqUg3UDRJCr3KWSdzjvfRpqDvoZADTpYg9pJFKxcsnT7JsHx",
  "key20": "4EbvYbMe4nCJQFxkJnmsmrLrMVgAFhJz7zzb6fW3sWxxkXxHgiXcxLoRDCNjQQ9LZWaXUjM9EDncg8gLJRm3mmXy",
  "key21": "5ph4WEhRVXKjzMXxBmuZcc2KMa4PZTMC9XXyJgVr8fmLoKGb19G5ghMBgMwBd3jyS91aDVzQnjHNzZdJx7kHo9pD",
  "key22": "4LDVYdr8Qw2tSna1yv1S4BZN1PQ8oKLukAuEEsxkjNJacmadHyWusaucQxNyDbrub8SCYVgSFygtUfq22t1tD9Hk",
  "key23": "5AzkrSBiG4NRaZ8GpnBVidcLHBieU4YFLMZbhAHQujkUc5Gv3jXuabHBVpSW5PcLSewsoA4mLdWuSpFxRk7Kgvb4",
  "key24": "Fxsc7iXk2JoUBtkqtz1oiKSkS52bik7fiVMchtrHjBxzF8W39LvcZMFzaD7TfwUeiZJkpLNhcxHQFeD7Xgex3MG",
  "key25": "38ua8jWQmCtZ3xoM9w2L6v4YBmfB8yVQB4xyZZmC2ePpQRMRBRJmhMCuiR9J3Sa4z3Be7ZMJo4yojZ7sxooY2JgV",
  "key26": "2KKKryzDxdvYJsE7hF4XeG2gvDT4PFqhJD5WrPA2Ka1hirbz5eYqwdFQYQVf28Tcm56RkS8EvEc6QpGVxJJmj7Zg"
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
