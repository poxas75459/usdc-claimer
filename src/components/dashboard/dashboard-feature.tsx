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
    "34uGP5Vpn45Q9udkN1BqWzBZBcJX9AamoNx1QcpnasMWd4hGuvDAVM1GYuEhqaBmUG4GNspN2WwKgQXpAYnPPq3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8JzJr9xea4gup1dabyXxf7QoZNpoqTk9tkMCWqZQTadnUiz8B5mUKDFi5k3NPjVjXTWiC9WAoC4SX2rwgo6w1A",
  "key1": "4phrc25k3hVSdQtrYQRikA1SuDYYKGZrY7N1VNgerURYQxfzddMbtztaGYkg7HvPrAzD1pcijmAaAK61oCL7NYZG",
  "key2": "2sVS9S9g1WkUvo1MAPDWW39Pc3aoHWGi6Wij2VVBQtgvR1GerSgV93fvQhAEoQ3QN8jj4wCGXwCpnWBn8T5dL4E6",
  "key3": "ggR1pREnU1rrsLF5GxymkgCjPnQrW28j4tKL3fCbFMSJqoNmtzj1kQc7uDLQ6kGkfpznbMNcZ9Xs78EpD4D74b2",
  "key4": "5XcH8bXC6pndPjZRC1ouBdfQqAnEQ95FhASnK6gpFrYjye16onqPXryjJ1yf4mNMnqipJ6hfNS8cK1QNcJn3p3j9",
  "key5": "2th5nZpaE9jysjUngwHb1u6TDAwKtAeiqXKbzB3VM1rtybPeceeSWRTR4tvY7Wn4YxeYamxCr5i7fiUcsUdawXko",
  "key6": "3PKdtmsKkUunHzcgAGFuM9bH8yj6kq81pYAni6aV5XHnh7PdxXDLXCFw4zVhB1CYnVMwqzHKPEHggWp16s5zPTSJ",
  "key7": "2jZNy1Nkk1hLhZmT4AQAv5kKeb4fnsz53gu2nxNa4LtfzmBnNAt6ySYsQGAwjuMqKgWkFG5dHp5xkmYmHZULomPp",
  "key8": "GPLbA7xn4pNNxHqpmWrdmnWM9dxsKD39ohLhx9gnXBT2iAbpWPUNK4PQqw56bFWtAUwQuAr3XSVMdPDpjTdTjte",
  "key9": "32AYxq5PTrfFMmk9RGLaM7Z5eaUdzK4F8uCrSRkxnNveZ323ZXHQwJ3whFDvKepHAQYr211AmEBteFBic6RJKsna",
  "key10": "5d4QqxrhRLVae5mb7c1J1Dps6wLuXNELERJHwBxnJRDLYmLEWcvmCoGJxbZMXGdCYscd3NnFvPck4xDkZe6awBE1",
  "key11": "8HcF9toC79hL2rM5vJcSNhXAo9rpB9HiYvkZSEoq1qppa5iy5CVmrAWmhmtQv4SCoTTGyiWtJVbk6bhd5zE9Uax",
  "key12": "5E2FsumrJMhQCNJJ3sc8jyLV5idwQw6AK8ehS6fX3Bmo2Q4KcnCvqcDBcjZUDjxJLiDQDwFJyBCgk3rL7bJz3Yc5",
  "key13": "4XxhX8wDaCLetCtE6svHp8JFb19c8PnnhQU6DmMGFqcuj2Ho8i3wNdBuqC8sY7yp4ZBN1kTCu9GQGY1qe3B5rM6s",
  "key14": "4SCLfCMoWWAnHrt2D4vXhGDo127S9JMZVxuo2uLDWsNBdbJAEcDJ8yCuo57aKJNz7o5EyQ4yA2f236HyVTnvReRF",
  "key15": "3vvK2a1AALQNCZDkZzoxYQ17ZPFBj7m399Kuiesg83hGpqCHJLTWhH9kpSbw9KsSZfSwraz6nfu8B19JGJ6Cf9qo",
  "key16": "XtEhDCFYmyBY5aQVXeG7HkckWBdTJV8QP5StwHsiWUCGUUWLagPN4uHEjvYvwrmUNyGL5KskWJDjkKKUM5gLbJs",
  "key17": "4aGbu7h5XE6dqThbZZ23Zf9zq8ToaU6LtFj74MKj2FzYB2xpgLubgWDXUyhLuYkDQwwhXFwiHMfx5eCZvr9zyKnR",
  "key18": "2FbT6ZmbLky49WKkYsJ3h2wqhcxzQHyr4ZACm85RFYM9TnNHCVDp94Yv49uz1t28j6sYsWroEYF2u6sqNiBbhQj1",
  "key19": "fMQ52qvWo5A2z1Z9TSzjPsvN4CeF7PLYq9jSikPXo2y1tUhrhzno2gbMxKy1MWQKusC8JkkU8DVvQBqUbwxgsiK",
  "key20": "RyiUfbZRF8T1dBACR48pwNoXxr4A22PGrenh2rzUZe9RktBgjWUFj5iD7pMKo9kskhNJD1YpjRh41vupGQYvgXd",
  "key21": "3uAHnrNRHc1Q7h1F2YE6q65oNvRMBxpSjvpyDi1Q1Jk2FN2gbks3DgZWh3kkBei6NdN11squkjTnDVdsbwBYpWQv",
  "key22": "2z11SqA7YvdaDpsSbdS6jRXmUB33X2Sfr5fNgefoyymdkUHu3iVcfyMxqVP1wn9CBFyJ4chd5X3FZENfa4ZykXJ2",
  "key23": "2wpxtM4i91EvCarysjMAJg6fztTm8sQAJsTzUKQAWZJHWG18KjS9N8rL8ZXebdNyNfoKjWWj3XBhhT1MeRKv4sPQ",
  "key24": "3mxSpyqR5G6NcFRwGzfq72VKQvwrh9VgqN5zuQryn8mMuZ5bvrD63eyP1Pm5NkJXXzxegZUY4mTYsY5zsgvFDwRY",
  "key25": "2pmpJ5iSMf6me6dDPScn3AdSbUQMFiyX5SNrWkMVwsnCM5YweWD6i91V77Kp7zp6ztoi4WpvN9tfQuHpSJHsPjdf",
  "key26": "4fxeo6aXY2cCupuYMDfv2SqyKWRQm7ei5aKPjEtU93PzjLzQkvp5AqdH4XSDXkkxWSqdrNBFqmKxYVC8LNMmBgzA",
  "key27": "2tHcHZm7RMDPGmiUVmQJbuoWeF6tfxKrqgP7p3tVNz8nASRhe35JP1VW7fgHMWCZKF8guXZCDiorExVmzPQRwU83",
  "key28": "3rKubk9CxcYGmixp8iznCuBW7FPEKQe46D3wYzua37VkZck4N6LHsnEfpeQ74ccTSAD6FDWFEeYcKhBRB4pQx5gg",
  "key29": "2suDGLZ2LzFgva2T4zp4xPgYHoz78FLYkxzMuviA7FB9MFp3eAyAUkWYYvWkmG7YMMPky1a3WZspFvnMGVQtesaD"
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
