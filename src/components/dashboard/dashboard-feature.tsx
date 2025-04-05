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
    "4TZgo4VVM87v6SJX2z2PtiKNEJKXG4PoyszAWEJWb5b42kmtFwnYEG5qeAF5PRxJWtdLpyX5X3GFBYYZd69pjxmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R35MPJK5n37y1obRAvUqWXPTJ7mzjiX2wk8nusZhjNCEc4nkHjzPqNWwARrnqMsri9HsZJFPpUxDjrJkDa3y8fG",
  "key1": "5Zmmajau9nw5nBpgbARo64aNqio6zkqfJ3wQ1WVPApndxba7jREN9Xx2dFmEEmNvcryyRtPyDM65jw4bmgTusco",
  "key2": "5pBYPqz9pdrC85616ojZtNNF3Rw8fB3sVS1MVJupcg47tZLWEu77qSqzrAa7M7Se4X4BW4tnagGAbuJfZYiV7aZh",
  "key3": "bXQkJbdHqEUeCkh9spzHspfatJX1xhMzD1YVjaHnAJGc3EZaPS4PLxC4smcJQHBH74vzG3CgXb5BM4cLuUa9GwX",
  "key4": "5nJapuZqdkHDCUxxvVxszKMPwj7QewQBoBTzyDMatL4aLDEZghBrZCyiKYxSWsnZwC6LFG6cVHyxvSwvmVhTNQy4",
  "key5": "2DXwRYBLzH2pwt5QJwHpxQafDN2p42rrurvjAg2EK18rR743sVmxX8tnKMKpJUKGXm7ZfS6aRwuRErsybvSDxycm",
  "key6": "4pHCUtNbC3LF6M7BRgkXNxnyeipLnLRg4VPU6U6A8Lynz8wQ4x8E1qLEGgt4Uy4gKSGa1Rnfn9NCZ1qSWFNn2qPA",
  "key7": "58s2HYMedfFvXKgTRSa38Df4jKqCEmuusF5ND6jR5RTWyHaH2am4wtkV5jnwip5qcAKkVQXbmV15xx2RZPCppEx9",
  "key8": "5KQZftGsK2AiTCzq1ss4VVRwhL8JFZCVXAd8f8BQaQqn5GiRmPTSRVEznU6axC5xg7aoZ5mfTaQMs8ec8sHEoBYz",
  "key9": "TvtCTHWPGhP5hTL72w6775Vt1He8Bc59PyNHvANn7QBpjwYaYT8LcsgKd4DbGat5Pg69rHhFu3hVkcRLjeBW1jU",
  "key10": "2VkRw2FgYACy5nYFP3ohtKNnJE3yMRLkB7VEXKX3CjUdnQoYxvnb5GkxpPkDQCvsRvAXyx35hduN8ZTMYvtmt5sp",
  "key11": "2pB2d3rAPetB5tK5GuZUS7bTXpMqTaSMpy5VqUMLKr5UyLjbNsnrJThvJiLCqCMFh2GMGogzVkNs4jbEMrmZxuKJ",
  "key12": "2wzWtWX7t6gbfi6wkkjtnmBtrDLxvgqc53X3LRwmSsqx8bMCPgRfqBM813Aqa94brJHkEd2f8bDySCr3MLVHeJCP",
  "key13": "4PTUCzkJg3SqVt9U2K6D43SDzHfXMrytkxBH9a9SrQUSeT3ab9jgU4wXamgyD9zpQ4D1NjHe4wagNLYd7VtmEpus",
  "key14": "4DSnM8xfRs5FZBMs1ig9qiBdSHW5Swh1e3z9EaLAvi7gWvH31w6rz7B7twxvCu1Pt4pXpPd2i4fdZwFqQGXPMYfq",
  "key15": "5vTMPrLJu2poHNrs7AReNfKfnBKYEyHvXWnDhkiWeHpSo9cAMF764XmNxt4o3Fv2rX9NpFY3n9AVSfBn7niRHmSB",
  "key16": "4rk7W1shMhre1EE5qsAvz2Uqu1NWvhqFfpwkgE2s7xyhpqL8HCfhtXck2LyqkSQgYAVWx1kxL5yT8vqkJFXzyNrh",
  "key17": "5J8yDdP89mQF4LK8hpScM4RVKAVUjtLCm1g3MtJv96WNyTGHCheWBcrEmHQtUhYEn7XfqBDcUydwfo3cqfPcJ4AZ",
  "key18": "kkwfzkupQU1WCqgCxPuFBakkbyo5CV1omf85QdXyNLjsrJYGt1CiESzHRRwYLfCA5wZ7LFKdtoUF74mhekERnx2",
  "key19": "3kk2S8joY1e8jbjyTpse3MmUe8okJkWXNqLtHTLXmfvg9rYLuzdc4NmfzZJxXB1ptN2yUukE7Un7WQiWsT9g1Mtn",
  "key20": "54AhjyLL1EccvP64dC3PPbooaowHCbSNMANY43ERTm4JrNTQP7MHarLrCxVRkKzeVyXNXUEUzWKLitmcMhA9jAuw",
  "key21": "2KyNapBkAw9xGUqA9LbEk5gRQ324Sj5mQmwFP4zAU1TB3e7G4sj2qB96wjRJrDyapxJP9kP7MNU2dU7b18MYaKv2",
  "key22": "4DuoRpC6xY1nHqnkBrHjhv1Rn9KxKwTYzKxebjiTEHtdH57pf3GZLeQCXcNmqHsaCKp9CCiwojmQAUT1BZYyggsX",
  "key23": "38c3tKzZiJcgQpQQrCL2MHdr6Te6nggpLBrrSj3ZZwvJCE7Zy5Tg7ckoBSfzhP1pDRtK3kjGKe6LPpqbC1FYqH5G",
  "key24": "2cYiC6JD8S7YANzQUs7mRkifJDmixtMvbU1ku9PxQDLgA4VLkQJ2i26t7QDh8EeDfpptsDxCKoaxZSF8wGmLNpvX",
  "key25": "5xugdJwqcVe4dr93MLFuqHu4cs8w3gZya8J3vNEpmw4EyUrtbR8YuKkPkUv6UPBSDaRaBN6Y6bnU5fpYN2CzMVCH",
  "key26": "NdXfnHXnni5T56DZ5fKibVbd7Exf3CMK3DTq4Msgx3V1ah19NjKmTgs79JTCY3JZ3E9YKr49v8s6Mp5Xg8VYkB3"
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
