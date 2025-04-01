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
    "2mVF1MxK2x1NgL4nwZDJWpGtareyhC87zo6WMhDTVtM1fjxUHRiZjkYUto563Tpcge9Sv4Pso4UGkZfQNpuHtJay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kAZs2J4ZFL4k8ZXZzcWUXgKzNZ5tDeEjkeu735W2SH6AYSsVEua36pSTXDxs4rupqU9j1ss5kCS1eVU9h8WZCj9",
  "key1": "2UE9bU9SG4vp8nLzoEtT32j8N2wMWEnkrj7EgpTzW2E6tDX1uASZbHvHNR8p8tS9FUuokGxzR85qiKtHo69MwDMY",
  "key2": "tbeqL9otavM5d8JL1Ejbb2d6ezqZx9fCHBL1cCahyMNKnzM8YV6prkQK4pQhtXDTTAuy7knjxAmA13qRozAvPrH",
  "key3": "2dnFheyJk9qvZcR8i3th9nfQNVqwc4MpT1yJgh9V1awbhB793YweX4e5e2xVn8yjPryhj7bFAK5HA1LrCQKTzoLT",
  "key4": "wtz7FsWRD3VfXmyzesJQAQWfw8KfU8rjTfztG9kdgKapB7ZBW2Mqo5aw67VhWwZkACh22ABnrFjPf967fKgakfy",
  "key5": "t623G4y3BCPT8wuX1RWj76wKru3zZQHRcymHDcFmhi5MR6xKdmFYd6JLqXV6zbLpaNF9dscQ3wSttd5R2aADRXn",
  "key6": "2tJj4HfqjF3Bko2gWRWsWE7xuhzFcAMzdPqf5eJ8xnMP4raLHbcqc2EZ17C1tz5Xj4Xr3mnxxCw9mdziKLfMhyru",
  "key7": "3aqoEAPFfWeVdMoEzoD6LS4TsnGcR4U3CSUdvJ2mZEF6Fvp4VtzgyJmxs9LJz5TyTW1qD2dYYEni4ZpjAqAQQRoL",
  "key8": "5v3cekCVCWDsCXTos99o6oyQUGCEdEQiB5bmXeRwxU8ENqUiG5AHYkkwL27M97bcGQ4BypU84wcgHfXvaw3Yx4xD",
  "key9": "4sL4bjMsWDLb7pYp9FmMusa1rJEobsTzTVLy4TJDQYxschkApwth4VyTRMkjyjVfPQLF5sbKu8HcF9FYvTWg69B3",
  "key10": "589qgZL8u3rhkQM4S6RHdoxL1Hq28N2aKc177KNJieqByFqah2XqMc7FxLjGToQnUWkq72Sfn8ecmqzX6FoEYThU",
  "key11": "5KvWG6aCJ62DYNvHx5mapY1DAUZ4oM942VyLRAQCwZFGH6Fq4SwKhdGkgnkur2Ht3ps388DNSDdvbaX3ucQUhUtU",
  "key12": "F2kVY1QZEzQmfxzAxxYu2o1bpua1mHnTPvEUhkmqhS3mZ8vPCQtwnPyhoCJ73c9KHphQMxSrJv8jWr4EkJnTfjY",
  "key13": "23aXZBVnmnwiQ7qzvxWETKTZdWRjutjqnXhLHyQRMTem1oi8wczEVD7oiEbQwwXATQ7LoC94Yk8x3TjvRqm5fUYL",
  "key14": "5vt93cBtrCvHHXnpZDpyCbL3byiv37sRJUpKW3uReW4L4kfqB7QD2ZpSk7KMV3w4ACezKSe7JViH7TKcrE4ruvS6",
  "key15": "5j8GFPrhiB3zsW7vSygGNYT8F2JEoJMHJ2ZH9S9HZjF6DnWpHr8Fd8Aj44MoJkwMFXkt1dS9i5HHox3epPvyAaZf",
  "key16": "5J61eoCBowQg7JktyJDnyP3RZwidipKpMKojqiD2VJ9KHQpWs4uJK6rerKpfacZB8Vf9KUYhreJwbnrsfEyxjcQ3",
  "key17": "4e2PF7eKYkdNyA3nzGukmSawWHSZUSE6N53WK5qwV3wGtk9h19Nc2iHPy6SaBJstt1aMdaZhkAoxUZW4zd2FgQk9",
  "key18": "34MtZVcNtmgGBCYNn8g8WgQcY8gNHCmviX7Rdgzq17MK2MpiAEr1wKyQTruaSAG8w1EkzhBmWsubK9ir3UvLBBK4",
  "key19": "stkhx3ofbRGn8oeVfYwta5AbvXS5BbfU9ZzQF2AxMKfhEtEow8fGjfN4dBuy81zPAZ8GjaWJ66A3z8at3SNDh55",
  "key20": "3mFokBGeWCh2X4TiU6bYx99cgtnxNc8nC9efpzo2mM4mnpgn7TRPSbD8z4dJtafUZV57CXUCLMLfifvkVUdzbZnd",
  "key21": "35hkthazucQjGuoEocAHhet1gEvfcc644sMwTTWsb8nfnNrnYWdR9EZNBi64qxP2tk1SMh8gmJEjFJJBYs8DN415",
  "key22": "29GnqKLEvBkfAVcFQqQEEa7QT2dTX1LwEf8eyYfLTZ9SU4R8EFz8Gx5WJKcdATaiiwwKFoAE3pBD52oR6Um7HzX4",
  "key23": "4WoW8AqjYYZtUAxPyBmCnemDz3SLLgN97zTo1eWB1LqG5oaQLRU69SYvv69tiQx8kyEvoxLXqvFdGbdZyyc7APpX",
  "key24": "492mJh64YpG1aiZgRMJGfU6WqA66EmPHMfvr9K76vuykXcCWjp4bbUPthpZVmw6CKko1K4YP4CvoAYrTHW71jEDz",
  "key25": "523CBoJHHJ6enEBT86h6h1P4JLfXqtYTDEynhxqhmXXQeyWQgkZiRxv3rPWjACAyGMkREjLEurNK26cnsBQaKp5U"
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
