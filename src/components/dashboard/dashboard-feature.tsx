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
    "657dbYHZuvfZ4x8rbxjDJJxieDJdfhKsoDKktHVGXGuzLWta6nBDsBAkMqRTa2MjmH2g3x5tjnfLyC9Kpf5k1J35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azJPvTQTZvkw7Wp3XfGXcNb5DoTLDYXxMoo6gbZjYykKhmAhKJtjA9NBGjY299b3oN6ukpPTAvwF46iqNqyPCwf",
  "key1": "GMf9pZ2zFk1HTyLg6k1LmpyrTdQLheupPfE5q5nZybnUjkBUtB8yFYSmdb85yfDDHwL8LVJNwjfcacRWBwcYfxx",
  "key2": "3gffsgXfnjeAu1ipkLTkdb4CcaVocLQfZxCp34h674Yp8Xm1sMNLvRDWvCk7j9cyB4XMUMKSEjD9ZfoDvWPxH3G7",
  "key3": "2F4U4AYbrLnzLCsSaXd91zHsXJMvEUeaUuyb5JnjVhCW1sGWrxdbfXbDD5aZvSEbh2RQZ8s3yj1einqv1QCaRezo",
  "key4": "sAaPEBaUqSSXH2VvF9jshT3CyJEraztEkvLh4LzPJi6ZiqATwb1PwemjPSCvRZJSbpwk6aJ4NWbqoxpPPX4NDz4",
  "key5": "5jXeTgymSf1YAs292u8E12y5JDgAJGS6XDd5tqVKex1jhdGR9DdBmLAvRoin4Axqb71Mu2sAPWXLMetvUbJ1JD5F",
  "key6": "4ZSKVJf95rN4XR5SXwjGqe1qLrK8vb8zwJHi3uKntQPYvoziAgyvyLP4cLfSPMr8jMbweNdBbKNcsxANyGAjBm7L",
  "key7": "4M5y1fNXyxXtbfV3vAomuHqDhk8nC2yKsQGwn7AWrQNb1wLkkrrVxYZKLy24iEBCw5MKCcbW2aztk9mVkAKHvun2",
  "key8": "4dBZ2hiyV2jhoUF4KvzZQP7PzidbuKwfnzUqXutPfXDyH7E5ePbfStYV5PefkwzytYE33KVUei2VTDnjXgA4hwT",
  "key9": "4tFzbEUH9YkJ1MVdktfdnFJeUUPvNqdYuZoe4KNNNkFFYz33R7hqkCP5CtfCeN7JHznhKXB6xP5Eo9duqda2YR1B",
  "key10": "zANU2mFYVU3V4hABRD73qWFwwFqXT5cyhMxUjRckUoNTdneoepQ5ukUyiykehXLihJWxgB3XiJzqKTPLyZ1Uspi",
  "key11": "5caMg46ixVTKxY9GR6wBjqLpEi43q9MVzJrwE9Ypf1NcUxBZE9WCrYHMcprUbvyREJkJsJ3j7RAHAniXuJefiPjc",
  "key12": "5YzBM6PKdQqgANrb1uhD4nw77taY3WEiYo4MM4EjqyiDVhwWnJh2iorQi8FRJDgMgfhPDnhSs7HY2CsHJuZHZ7EF",
  "key13": "juGv6xYxJnTEjKyGpucrt4c9Xm9JBx8U9yzzLR3FJAJPQCdHQT9beHqewfXKsbVSvgd4S7PTBz1MbZJiCC5HD8S",
  "key14": "597qp9bb6ZC2dK9LuA6Y37pejLSGR3PVFFsR1o3WZ2YqUiia2pdQLDHDiKGJWhp3YbCVtP7NSrGmhPzjMWpNrGQ",
  "key15": "2oh6mA4aGkeaGMHSNMn5siBsUQb8jqbMThZ7C9RbPKPeXUpy1hCVP6P8fpiectEnkzpAyyYa4mPY9Q5YqjQ4ejVH",
  "key16": "5MVN75qNLn8JLrqWsihiSyff5xNqfA7Pm2BBFcAjueht7iBeCsj3EWoD8VxsSjXuXkCHpW5p8g4prxbw1fTeFRWg",
  "key17": "3vCu8PeJejSbhXRubEFyLnNKtSCegpruLcNXFv3iJUNcRCFWi4YhR8L1pocuuAeWXZTd6AAGMZpVB1qAszFDqMwm",
  "key18": "5bVYVVubbDRwqnnjN5mqVjABgqFJHwcNYzsc3JCafMJuL7okUr5PnJaEYHGJMn2NZ2HSRx6HLmycKmhqKD8xxHYF",
  "key19": "NJJ1nhbk5UVdWdhCTtFkgvcGcxz6ADkZM2YrpGPdoT7CUimj81gj8hFm9DVi5vBzDpyjvGesXJSGFZ3jCJHxFhJ",
  "key20": "4VA7UTsC29X4hhEy8hu6weC3HQxi3kpEiNfQde5YhjUW9UUt2zTEbdL2GCrK5e3FAriqq35zaXnp5VG6zFMQu58e",
  "key21": "3jpXHLkAaJoq2m4SBR4RG1TkeCyBqtiH585V2sN3hPHgoiat9zKezxsjEBS6nrd4GBbAPHdgjiVy8hLcxvVurjpM",
  "key22": "3BpH85HAMRuqFK1htZ6Yz2JJdVCSUkcgatVAchytBRrY7UDc1mk9V8ebr39k1a96Ga91UWGGZb8hbwNFokwXYShx",
  "key23": "36ZXEuENeg4xBMBHKTB6ri1G4UVUxZHWWuVJHbw9fQjrpfw9SFRLT7pcQPRWVByDbS4kWN2TMS98hrR3uffjvV7u",
  "key24": "5zWudwYcEog8ezMtRnJAXGiVgh7S8jK6TEmJNzh1We1ZMaGsvoQ98jPd9m9MpzaMfyeMuMBFNncDzMFSeZ7tF3W9",
  "key25": "4XxJ3MTjpvcQxWrA3akD6S7o3gxAkdi5sxJmTWj4ZJUcRpR3qWfhgu9gjKMSar7i5cRNYGsSLDjqB2b6UrTFAE5T",
  "key26": "2nEA9Ex7wf6kyeaUKug5enCuJmgtND24MkugDss75GKuN4HyHXyPJtuKjpSyRc4bPuAkdWZ56GBDwRHuUUtS1aPG",
  "key27": "4An3iGgjpStPkoaYDZorpqwSxNyDnnSYn43N2azZSiDKKeVuR3FoDM3ciPL216bSdvXcmqSbdiEVmrQuPqNDc9x4",
  "key28": "2hNZxiotp4zeNAMgsh4ZjQZ6uKShWAcbbUYpD4nLBCXGszrTUaxj2KcJfmwrPMGbP7hToeDjDzodambBx34TFmqx",
  "key29": "2EcZkK5wWsQYUPY6rarY8CjTBjeto8C2S7NLGDTQMfhZg1FvQasB4hyrLuvcDGKy4i4pxLUaGAy32JshHcBtecnM"
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
