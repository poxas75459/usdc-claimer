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
    "zyy8HogyiRiKRXaK8L5VZStBZ4jjLxqrRQkpPkmprYp9WbSGzWhR5ophNu6Mq65K31CPF34syEt3L8s7cWYqr44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vv6yL4AU4aFBCsjqN2uYgHirvvMF76w9gnjA6tVy7r7MxCZ7oVZs8v6neahhzjqoQA5pwqD8TjavyPeoMFnE4zr",
  "key1": "4jgNqShuahxMvWX5NtP53aJmjE7cxzvMggMNLt3M7Lq86vfFjWDtsxcivZk41oRD8tfAHTcdoYu8vRT7RqeqgXw7",
  "key2": "3XPMjdu9Nhhfz7tfsmWmD5Z1Uzj5B2NrLbQSyTignZu9zRJzMtPgh8noQWXVLaVNugZWEcadGXjS6BaQwn3X6FSR",
  "key3": "6hmv8uCo5e85fifiauxGhzf1m1ruBeKJ2EqJnBSdUH4r2dRmfLjJhYch6ZKyHKLCGwBduraPBBUCwwwvCB27sAm",
  "key4": "31GodNbaG3d8TKutiR2A1s5bEKa4U54QEkLjkEP4whrVBkHr15GwbqJGXNsWEoYKbHPb4UmaAyD9toL6vmQyey5g",
  "key5": "56nvn9brJZEtVnpnw8tYcLVBec1gCJmWFSzLrAXior4mw1PHoXdzbtXxqjvqgHCkbLtPcRxPuJuSRiUktWwBjZ8q",
  "key6": "4tHrTRERPFiFzqJQaxZFaTgMjsbdszsAipSVfvf5fS9RWhG3mf7HZyzyjXdha1zZCf7TcobL5M1TZNDyjmk4esii",
  "key7": "3pKDz45ZZPFRHNbMfrTCSvGyPbaDYq8A7HFmBnmVh7EBXyi7hNpfmNuFA4pqZw4y6Ee4idimjWYe5YJw6Ff3VNUf",
  "key8": "4z9xHPcEJbMosA57MoXHRKbWVEGqrKR31WXjt8RFVhtjQXPHqMEzy7WFhYgSRpg9AC3qqVjmS82oS7iSioXFhTPW",
  "key9": "23rjiXFf4sgSpVwQ7wqRMbXs6hxJJEAYGJHLBnL9rLxRPeRBoLMBUtYvmpCodWAjfb9xd5W61HJaNqVbQJrWNbgx",
  "key10": "J3Bij8BEm3L3Wh7yQoqybhgXAwaVoUW2KKDAkQQ28KanDgWkyAXXCvKup1MfJN2Lix1htYd8pxb1mW7zDP32m44",
  "key11": "43zhFKJy4xWZun1MhcypGVhgaX7YmB4aUEFzb3s2cMG6pwUPYcQphGqWSwz1G1HEshDKnNCyih3W7PQGfrXvkMps",
  "key12": "3x5kVtxw34UFkXDGmbGmMhWBJw7q7cdrxWn8teRdYgTvSHZUfQn2VKSG2hx2d8S5D1DPL9yDzpRrVNeiY4SNN45G",
  "key13": "ZCUQvK1ZpMrLQmaCJGpvGpmoXKu4oBo5L62BwHBVwRp4JxRSczFhTsbYKEs1FHuvHCXqncZy4uaXjQvGCsqW8Ru",
  "key14": "5igrQ34VU4HJGqutDxoJtfQZsioRkuHiYb5DpQrbhUNtg7dJhUidVWedjPj4Sak6xsZvSW2Ed66jeab9D1xrS8uC",
  "key15": "2zfQtKGHGnnQMhCA1iFBHaFZTtxmrabARoirvCpWyVfWg3JNNJjRNW6Rc4zk8jDot5aijek1Q4nryS6597UxNKkT",
  "key16": "4NiSyaMw64rfs2GpGE4Zq8ZGq5KAcYxpUCAzXLzHBQFTjKAsKyufcDWtCJ1daEhf5CT658tSA1w1HshXbDnTrU8G",
  "key17": "2Bq2UyUU2Waox7m9J172sZkZ9jx4Gowbt4LrzGoYxYR9VteQmvPF38SzgYT3X9oAevHnfQoyodN1ykVRQq57YXKP",
  "key18": "N7kPqRzsr8YJ2v1YuenWAaKKqxbrMu3XBQ9MJgLb5CbKtu1zSmosMQvX3igrwBz1chBcoBaPfvtgQPpkSgYNuhE",
  "key19": "2W6M9q2ZUqPMgAuB3MJ8fhMzE1Q5AfMzjNtktY6L5MLqVR1btddbhVBsXxixJeW4usyz4iQiAYVZMGVZHyNkyHSM",
  "key20": "5YKdMoKXPLshNaotjxavRVtG7YGGkZMByacPmR4Uks5AehKg2k9p34fSVQy2FVfKkorLmUyEHiB8keoSh423ohqZ",
  "key21": "3rAavaiZ1Cdp6QFZY7YrRtjzxCkSJkCVFz9B58ofc5GdXsBwyA1Z75a2yamBg3798K7YJzhybopu6j2SiqaxMXLP",
  "key22": "3eAxJnn3wUAyvrVWGK1LaxoGN5zSozALiUrDLgzD1whyj7NHonZLv369hCP9kVYQqqs54ujiadUXnBbvxoMkV6iU",
  "key23": "BupRNkKWv5PQe5X9u9YxJ7SgFmPMRgmuY7EpCyRynvmzJjGtMwwuReHcYUuJyY2vwmhEk8Ur7tNo3cmTN8Ei1fG",
  "key24": "4JX2Cg5Fsr4c11AMR9gUWJXdKCxF3EnHayeX6n1cg4tYFoJTWsqYfN6MzktwBeHNMvLT8WViha4gDd6J4AW12uaZ"
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
