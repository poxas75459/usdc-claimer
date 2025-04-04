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
    "4LXkXrd2pXoQBQvMRiwPiLt93Ld7qHX1jVnZQmtRxyxriJTj3JvTfwtm5gv98hdVx2vwjm8joiLRZG1jpPeFSk9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgwvaE3Zs5eKH5qJ9NtVc4Ur1bntqoQd9NqiCJmCcU4238HAgWBtux6djpqoqADBCpvGZYo6XcV3zxvQcVCnet4",
  "key1": "493c4GDxWpfPzbPGD9wTz2zvKZvDaB7Vy4hvHYAFrw2yJ4N7Ea2NurumQhZGsdvTpeDNP1wv64n2L4BwLBpGojvy",
  "key2": "3dJzd7EFzvV5f9cLzDnkuG3qXycPg1Vqi6qKqXXPudAmrYLvxvbY3aMFLD1zygyoSTas8DUW5Ug1DbYcZwKd4Hzd",
  "key3": "2wSHtG1DKYjrYnsznPHvbTanR6MYABvwvvAxX4hRT3ZpcQLZy1bneHz1EG2WpXSq9wFeq2xgrJoAjDJYW7bZVnwK",
  "key4": "32Gvxyx7WwGreSWFbDucXHiqPSRnLr5hPZ6cD4uwtS1R2tgtr52rGZxv56vL89EqryathsouBZNMunemF5CNm1By",
  "key5": "2xQw46kjgV2KLMrop3hUTLbZX9uY3acHXACYzhFJvizPneQX7nK82yNbJ5VGJ7QArSC9UtEh2or7mTMgfjh2X9zv",
  "key6": "3rYcZfzH3xWLsXHWcuYX7LztBXdoe5Aa6tUEP8o4st1DnwJDqELKjBJC62GwULRR6QUxP5Pa9idYpPdpsWDG1TSy",
  "key7": "2v3CsABGnYRyhshwwkZjouwc67Qj8Sxxq4z3Lb7penSAPw4ewj4Kkq6v7e3gQ6Wyz7PUMhMzLM9w9Uyvhc2yLaQB",
  "key8": "2bmUC3PZwNd1Drba8Qq9pvbj39WWqtSqADRMS2ibhcF59fXrmeqJWD2krbSuQKfH2DspXshsxGRUC9dEaGWsTTDd",
  "key9": "t6TB4vC9p1q7Hb1JBtdZQUEc52QiWm495JE3uncVA7qNzVUca14gn5dU3Cb4MJKDZiV4AMKRnzvm14QKD6dzGEm",
  "key10": "5YoktCvSEWMjHzR6cYiZidT5HfXaVWWuLxH359Mpxk9HjtbFbcbnxK1vtF7g7pbi8GuZpqAbDx2dSvkDX3Ex9teR",
  "key11": "5nKBNN39benWJiwQUXF3PfMaf9qdp86nJw5Cj2LyYNNSeESMcmT67umqi6x9eNzHPQGiHc5RSP1xEccYVKnDCDb9",
  "key12": "39dt5tiQVejZvdo2HgR2ZoSimAFjG6bTNxG2YQyKdroBckVKzKjaPGhVhSMjgRiG6QmazwW6okkY2y16GdzT3k2d",
  "key13": "43ok3vuvpDHd9hTZKk93yK46NNV8AmwdxynvPFt4bGGFg6RCFbEd4dXt4PqCsmFGkgDXZzc8yUGy2upCPXjJS8s4",
  "key14": "6BGm6M6ZyVRLxRk23hV4WKpYnJmirXaR5BU4QnroWy9Bs34oQy5Jbn8r9qGpWUoyXB1Yejhr3VpENrd91DabqSy",
  "key15": "VKAXJ3PSJJ2P3KX5XhoD2Qxi4b1WYseXPcbxaGJ4pup3ZpPyZWCHULwcBKxUbqsXXBHBgaqDsrSv43JCgMooqvv",
  "key16": "4ChookTxiPzmCrDJHiNSEv9GYbfKnvD5xLpKTWqPqjEyxwUnZmQrBSfbA7u6w6wVZVYUihXFR38Rzoc16krbmrdB",
  "key17": "3e7Hw2ijPGTJWER5Y1XJ8rodk4VUGP9i2Zseg7qiTrmR2vAchch5g6VUY3dhhxT6y13g79wGsUaWrUxBDRepj6uV",
  "key18": "5pmPtVV7M6xhSPYvEMmc4F7hbYyyNZ727e8oHnHDbe4DHxnVHcpfCeYFpywLkTpCHUrmRR2LHfD2zGioPaetWE2p",
  "key19": "2kYGs5Qt1bCEnTJNvpTJzM48dwMKvyg3jbF8JzHvT6sFGEtfjBYcH4rYRJRjPCubjvRMQpgmUAqbZavsTGbg6vij",
  "key20": "4kH99ar2ko1cMUvjBPEUHwiKynoXghrcZT9mCXSzhYSG5S2aw7fr5CGCXhfztYGSkwX2ktTX3NH4byvFfxbmNjvR",
  "key21": "4vpqrD7TsSeuWzyicS34Jm3mQfVNibQQfETxg6qWDpTjAEUtnqo13SVNqRi9FHG5NDyRXEcuZUfhbKSKFFgty67x",
  "key22": "5Up7d5ZsXQUqmsxemFv9jzv3gnu65MWRPh84nSh3wg1qtJWq1cqaL1FGkuKHfukWGEWXBcj1BFwn65WXBoSEb5s4",
  "key23": "E33ob8wMT4jrBY71bp7MygYndebGg1napYMrH4nAtjhRDdXsvjkanpQzUZUgxjvMfudY3xUWPPkJCij4nEPtyBV",
  "key24": "2rguukYhavxJsxwpfykeNbQAZwkm1r4ZCs6APjiPs52sDVyDgLhhsygkn3e2x48vbL4JA3Ks3NpiDVkTg6KWkXri"
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
