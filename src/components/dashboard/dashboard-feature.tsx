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
    "41W7byMrZSjbSNzPBeeHzvRGi6ueXHEKmNnzBWLderT4J4QQfXeckuDK7KRQ95bJ3sKdPJ3Dc3Zhc7AcoYvdKNeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMUHDBFoBQLPSX8fLWB1BpToJWgQ6RKzCNv3Rh3RbLVqy8WGT1DMXMfjpY6Gn9bJRwaTo1X5jdi32iLxhCUDpEa",
  "key1": "3dECYmyYEEjt97kHZGXPxz6NJhucjQg3eTTvJicRS7VYfAw7jsvutSa7a3Mva6qnTh7RXEtEDWx7BAFEzrAN6KiJ",
  "key2": "2xcnVR6Z8yJLMFfHS97u4BABE4zJM7azBQ5z7hhk36etim8CrsTQdxzhinQLi8eSsLYZCHDMhPLfx4UgigmP6Y42",
  "key3": "4d8fEdJNrxm4SkCdk474HnfYsjrKUkeKGJPhn9AaswjxDiVS9Gsw7Y8tft75ahN4Mo5jHb3wjt3UAMADiaYu2CH9",
  "key4": "4WUn7dsWPv3jdJZ49TfzbS2xALgbfF1Bt2osKrEt8J6Q6k95S8Yw6qHVdXAm4MqVryatqJrHziozx7bMY2AXxu1V",
  "key5": "38p3ZjrrqwDjgsjPzeJTNYqGs1AncpoP6iCDbgYQNdhyR628gAa3iYzgdfmkETpaKbe3S3aCXtbSqcCvEvGQ2aXe",
  "key6": "txuLY5EGSTjeBZxDzR2Ju7ng5SeUhoHh5eBqPs7pTgxufhwRVmYPVm9nAU2iWgVXqtKNeT5L26nyZ5JSqD1kbsL",
  "key7": "765gQYC37ygD3jCFQPxcJnx1Eo5zG14vUfLKgwHKUZEP4fKMVNs3oPNxzjGy8q5PHC5rkNtFq8usy7gcq2ZeXFN",
  "key8": "bkXCKvJby48u3RrNjtYi2qkZCsti3DNB1UoJzBFdoXvQXvCDLJUcgVk6WJeHp6LUh12mz1L8XBfNt4F1cgwFj8c",
  "key9": "4cvrpdtrxgSFKSdc8XdoGR2tY2FUrXoFeuy6UemWnkLTSvgLy8YZaZxiDGFYhiVpXeW14KoUZGbBkAKeBeWyUjDR",
  "key10": "JFdJgNkFGwbspGMN4dzxv9Pvpcwq1RtfbKbARqbYTYscKaFkEi2gACrpiNmmP3cbj1JDBrsy6xAnX8MK2r5cyNJ",
  "key11": "PesZdZjAsHgBgcEZtSAM8ZZbxKXYL5S47Dwu78mKeykwP9AgRKonjMH8xxjpJ8gujrgLy4uMfQPjMRxuFa6TShT",
  "key12": "363D92Ft24ZoT5PdrNPsaECELdK8wuD9AirJhVozgsF37Nu1bjiWMvwFKJQa5CBjmpFNaaL2LuUv9BGVNHPuid7G",
  "key13": "3ESc1SSRaMcQfuLJRCocgayJYFzM54smrLUdU2cmNNjrBGa2zGmwBaUL8TJfuFjAvMUwwrovxg3oaMhg7ni7XkeK",
  "key14": "3anRfEMHGsToqMZ3RULsHq2ymcS5BUhx9kMb1F7Wgw6rHYS7L1g2ihE5R4rokYHdzVLnAqAA9eEuicSZ5nHhqvYU",
  "key15": "4X36vNsuFRVKgr3kpuvVFEN49E8d5W5qvLTgKaER7X43XQubStwB9U84UrwyP9mhcb2vAM7ZbMSamHAnMHV687Ue",
  "key16": "4XttVFKpnBBpMTqV8fE1PJ7JmEDoFKpMQab1wGrremHGMY3RtKQKtRZCawHzWHpDzmfurhD9jYQpxF93iHRHnjA1",
  "key17": "2o1GSAsSUTbXv4VxPcqPvkvBK4vqNcF3huYz8fSPkDbRh6Z19z2q5yvddtvrwRgbWybzgGBYAfhqAbuR1hvQE1DG",
  "key18": "3N4Qpox6qo4qWefY6mgggLGtheFvmrhVwf7XEvDeewgUQL85YpCfq3pNpQDQANtazMpAYEJBqG9UG8mLLdNVgSNa",
  "key19": "3KfZwvvGvPHsPSnKZXq95V75aenxJtpRXxcLusKQja1rRbZnHRtt5ERZv3PpcUrjU2LW88sQ9oS37vV8d6jBc1X1",
  "key20": "47n3xnzFZTH7KB88Z8pEFbVBFcWDh6ff8yUg9ifzagMBQ57XJpHeeJqGpy5cWhJfFMc5txvGbv5CMfAXyJ5LSLuk",
  "key21": "bxzHiKv1viE4WAzsRezSBnWmMF6u7gpF8MNr5dmeS7oqepJBLAFK7euwYTTgdrn8uD5PqHMeKYRgLbtvNhvjkH3",
  "key22": "2N4UTyS3x5p79GBFE2nRTS4oFoX9Bve9xuQjRyJumV8fv6QXftKVXJxD4cWnWbxkLsXbBjzUbrJiAnkidZCWjtDe",
  "key23": "6738PVNA8Mpp8aRqskUAYN7xsHL66MK8mUToJvmQPCYJSCVntKN2KCMJcgMnEeHk2jdQ6V4rabCyE7vdumH1naZR",
  "key24": "xMBiq9QfCTqvozT26SPPefpyaBc4ejpqUsvvgnhvZy1LLAi835yfLRm5YwSyW8nPshWNXDmgBdBte6t5BSyvr36",
  "key25": "2mq9cuiRHCFnt5h4mn3w5Jx5NoWVc3Me35BSEiVSxUFxpZQzUPW4xwaGjbLpn643sz85Zhyn6odXfBps8wgoDh4n",
  "key26": "5zWgzCGphsgGPuRc78eH5YbEVX4sNQXaffXJDUWet71VzTxETSPNbrb1Z8Gr79AJHiJyfzWSy6Zkm31A6FeuTxjP"
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
