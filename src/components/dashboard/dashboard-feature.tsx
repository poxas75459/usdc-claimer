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
    "21DBZcniWTXfuzL3PiZKTPLnsY49zuGE9yuk7YF4doKoogKUTX1rUGpAknMGT7qDyT428NN7Zwmy5VNzsZGb5Z1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D6s27fijJwfff4hJM5gFevzBkqqKUjbaQGizZ9AeRPa8BKXZm1Yaw5berdF49iS4q2CNrA5HUvdi6JgJQmv3jFs",
  "key1": "3hoMc5xdNrc2PL6N42gtKnMZi1rULUzWQpiWCzbKAps6xrVDRxb7GsDuYBgi4BP8VKL3LgQy2YXCKbjFrfXgvTC8",
  "key2": "24S7qqDTC3o8Vg3hHAKBytUAbWZ3hbqtYYmgmU8rRsvZcLKYzHgF2zwkEw9aVGKeHv9MEQkGsEYWLzvF998hQKAH",
  "key3": "5UhERR7oMAX33qyJrXEnFWgNpWx5t5iNueoBzvLpAxNNvyDRxQYGCMYy9Zgoo1CV8rkvYyyw6za9RCBYDdhsAq3k",
  "key4": "4Gy7UkqrfhRrabvCqvUKrWpbU34RmniFKkuQN9Dp9k45ypVUXvms6JJQHACY4gxA4qEGMQxgXWXNsPMDHVJancQ4",
  "key5": "5ddFvDpfJtpkj5saYAVqh1DYKmPwfcRfm3itdrP9BriMq4AZfaqsEUysg2pC1zgSoLZLfkSdYZ7CADxdRnn13JJU",
  "key6": "2kV4EVFHpSSxpKxKMJjgEGdJrf9qC4CMy14qdhomxD9mFa7QLV6dwJSj3unNJ1tmR92BFm4o7f84Ur3RJdGWG1do",
  "key7": "5oxgqTJ31X2XGLrxETHU6DGNZTYNt7Z4dKsyd5Bb36UtHf58qKew8Wp3SR4EPum4owsanaPm23o43nrHYjCLEvrj",
  "key8": "ZYVsKp5Cxe7Sp5QeBGuxghFpvTXj9So58x8bogkG3UYZSSv43A213pYBJw25s1NWzvQyCaYVHzoqx8hPZeWCEoj",
  "key9": "4Uuk2fRpEv134b3F4fMyrthjKwe9yPN4JsmRtwcV5t7S5WGdvGdVxRXD2yPkffkcsgCu5TGr7CshpG4cUKxJmK1N",
  "key10": "4w6airf1juMkChHcMCF4Nw9UftuWNzUTtTLu6aE5W73SHzshXK4gwrDgafCRbcZADYMW7N7YWH8m73t94NdHJQwV",
  "key11": "4Pry1VR7N1kBaMeBYLLmEv2TJZgigVXjitMBsUj9eHFs72XJJkLW6tr4jaZmTebFNvuQXAwNNCX9ZbsRwn1o3tyo",
  "key12": "uCxoDNZMu4MbNCg3NfJ3Dn3CHqVa2y7ejA7L2DmYwK5yxJwe5ZbXao8f2iNqrTdUsUSknpU96Fs6GHVi9bWLXUD",
  "key13": "66uRSCNrZjtHnPjkLaQsAqCMvXe7KdTQQqiBRwn6j1Kb9orNjvmhfb29neiKi29tdrvffYbzGk4cSKDMdFFqH1X6",
  "key14": "4SMyJVeWtnizm9iWyjyAsrFfF4RTrTmMxanysXuY3Q9R1b5fUVJiEu9NmBcmC3HNQFttd4AyXHWM2RcAmEBViuRJ",
  "key15": "J5gNmwodP6Da4GZBm9U8h5VAQfyv6e7nPwgveQGovhxubmYVHKXkMRNxx72GyQuXd5daniXAcyykYdzZd8JcE34",
  "key16": "M8Rr2chGoX8WHtLjXMzYKX6qMPti7NaTi539qVjUQYPcN4uyw7fhmcxyooyHEjuoieK8UWY7PXskXP8XHvMEWtz",
  "key17": "4DVvaYfc2KSQFC7FWs2DzSQiHo5NwiEUwXqzVPYGyNHvfCVnTxi5RrcRHhMKRs7jAaWgPPB6vy6qTXDgrD6bCLKj",
  "key18": "2cU4NZLCeSk9S28cPdDnZUiKzQYQP2NkuLdbuXcQPwJLCQxm6GopVQnzZ8a8ixNUYZCiFw3T9As2T2LZRG8twMhp",
  "key19": "hRkXAzhPW7vdbMZ4gR8hQ2AH6TdrMfLmkumytkW5mh5QH861W1TP4UePCyQX5rXDxNZoLrGsvafsuShJvKobuR8",
  "key20": "5QvVzSrrxoCgrb1otPjtNA5VmWMc22iA4sdwoB654DRrbgweEMByBR8VtKCdVMSt55myRNwKSBKB4xeEQQGBMcg6",
  "key21": "5U3XJnYR67SpS1xAq3xEThcHVct3LxiRLLPan3Y6iYMnEU4S98tWZKMxjnmSkkaiJcgVjTzUfADjegAwWU2qMB3q",
  "key22": "5YNf5iRDFrkRzLGvqseFpisqS3GKqGaruXD6D3WJQSJXmDbmb8iedXn5KcvTrAxDH7Wq81Wgmdok5ZYZNZVqJqhr",
  "key23": "4wZmHdCDfBCAmSWoxm2cQmSGJP9ocMUhBmmUsphdBA9C8ZjrJvbzYd8ZFNnRMdeGpzLK5xYYWsRQoaXGR4LeK16P",
  "key24": "5ozzEyBnima4sZ9VAN1qyX5jesjQYBB3khfws5i96UkHBW2QrNrmbR1qfQJRgoXmYvt4NBGJaMgEiMtyqtJLquHg",
  "key25": "41sVCnNvFdWQH8k5mFik26XLHe6NFuqp6RTrQBq7BqdVDVs2JGsJmZKYAjXqShgiVuGg3UT6qTPuBhB6v3FR2bPG"
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
