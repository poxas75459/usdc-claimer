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
    "VeGMkXsCMYkyQrMDrjmmMugfPFq1VeH1e81kNYtMH5ykxcAq2s3HffhCjmwE5HB6GXsReUtXWrxB4JEcSSZ1DYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmHveZ9SQUUSGXEy96yHK82rhFgSgbbNAnhBA1GfWjwA1CUTybYneqp1RegVcbUZ4xGLfihezZcsFZDfwkA9StT",
  "key1": "4q6NbcuKZ8qQuNSE1Z9fNBecgexBeyy84E6Mar1z5UkX2Ynrz62ZCyqFtUTjK9Q8D3BdRgTWBHepsKSULZthV4hK",
  "key2": "2jWoxgAYXa128qJmaTjDCaQWpdTMsfXrT5nm8YdWwVuys5acNMUuD4beYR8ziKuSqP6kKVdqChuT9JB2S1T2Ec2g",
  "key3": "3khgeBtND8P9mPCMaeB79zkyw4oKJJLJzxMTGjLBZEEBFrf11gW9rXjyBMe3ap2jLxLY33McknPaAAi2GC1UuTUb",
  "key4": "4aTGWpUBvm6bbftXe7Q8LNSmqqtxnqiXUR8xUzEv23VRNum9CQdzah6wYCMdF1XATg6aKB2Rimw2c1LgoQpjxoV2",
  "key5": "4Wf9tSprA5GDmyq8cT7zCYTfZxpKaeEpEjhhURz81iQNfYrrZzJ6JvRExvSx7Cyz4rUbWMzY9GpHPrtfg2bF8dd5",
  "key6": "2Pnm2W9X1BNyVZh1wPScaKXUvgAiNxuNuKXHHWFddw1gLcAttizaNNEraDQnBM87g9bUqsbYLcVAkpDeLXkMoRpz",
  "key7": "4sbiho4Q4Yupu48UD6br4neRc6Ytr1YvuhoV6jRBWRTXjCDATCEJQfgPctrrn24te97Xhgg4hjikGCriikwoCtuf",
  "key8": "iTejRtfJqPvPWYSPswizp8UZJByNEBVfP4Hi2WGCNDPqNMw2JWR3AC5Fo9GccBJpNaDhtUsR96Ea5mbyWwCQKSv",
  "key9": "4sywoduLrpai6AYMyirzn5thJcTMwfherwjzTMvf7L57RYJjGHP5wQ4Bhh4HknwkXNcnG3afEtm8cP1jNyNn95rK",
  "key10": "tYVXZQUPpUadjPFC4sCmQCMRM5sJLKVWUgg9pcCtMsK2RLA8dwJiVGsgzrEdkCCyw9nkQmi6tgogyRj1DbgWG15",
  "key11": "5VfrKX7nHt4pnMeGKxNRfvCrAt4jQCttzuk7Xjx29egMShgrXw7qeiTGHrJQfJZkCwEnZZMp3mxtbWHxsoPUEMFp",
  "key12": "4bK7nSf58kMfBNW3ruGnF6J8VMo3nB9rK6c3Z52yBYBnGoVeTGfgwJZCnjm6K8aUofjCRUFtuWhNz1Wzfw9qvN6e",
  "key13": "4LDMFPRQYFbELktAkZ5mTN53mZi91GL43LX67pgZynTP27947VpwqRaKQDR3LuaLv9aPLniaWWeiL76ZbHQjHEbN",
  "key14": "2Sfw8Jpeof8CDLdLMYCX6QVUzC8FdE83MzgLd42Wh5oDVZQeoxvXkW5v8yqsUZKzHSjwTQLVYaoqhpMvENSaQfx8",
  "key15": "4F9LsYmCr2Vb3me4Ed1mycskEgdc8Qk237TtvByZjN2VDsWmzxpFvTtEYixUALEHPue1Zsp3PrJQG1fKNkfc6Du5",
  "key16": "UhUaFg4UzxzdFAYUWmZiM6x61ZLtNAAA4fH4SSjczgU31VHk8G6n5D9sJu7yL26Qwwh4oDZhnsF2EdZpvaZD28U",
  "key17": "569hWj5gPLxmG8NfYwBzokZEpYvmg1dyceRxUNK3558ormypuU5TvX9zmggnkauDQQbUBQD63ZAX2keyBQaEv45k",
  "key18": "3nvLYTzLVp5ahdFYdEgtDDeFTmnGT68zGPCdpMWP1cfgRvvubjBbgtKaCNH2DwAzQZ8bqQResVpyaoWPmY7CN77D",
  "key19": "VuD25GSfokKraxZcUXtGq8qR5xgFJRukSpg7zoZHt3XdNSKmni9Dw7jcH1et3N7PqrMpqM8tb9B3zPFY24JvPH6",
  "key20": "4f8DdSkNL8iupnaxhCTWiMum2WZfGzCyWaGVAvM9EzAHmPVJsonSeML6is6Q7ihfzxif3PtUUMqjhTyashBgUd25",
  "key21": "31nhmeK65JXPeKFiD1fMdNXyG5XBQwnYKwfaGBXBRY3nXGCxZ9o2hptiWQLaNVDnqBHCS2TGGvpkJRVbxCkftHEb",
  "key22": "26K5kP34fdPwX658922j4gv23oEXdAtJv71b819vG49znLxuT6tgd2PXqGa3K3W7kGToh3LY7xYtsjmhahKBYmSX",
  "key23": "2piSniRoSY2yLR3xiKD2kiQ55mwXJpyLhfeUEqWp8MuAitCz6mBDNCDuWVQ57ntL1pMRTVTPK9WB8CFHvkpzV8C6",
  "key24": "5EL8HurEsdcPQWjJSsBF54E78LvTaQN9kT7MjafKSjiD32DSDDHjPNzi8sgnP75c6sBKFoWgNRXXZ2nyfpNDYKgL",
  "key25": "5fZ3XcpAiWWegmt49ScENCGF9X1HbodyQE59zqA4BzmDCoLbFrqDYB4LrTctexnzCwpmwDz9RN55XKFVy4nsh6Um",
  "key26": "18RNHK8AveKX9ZmCtLmjRjgqNujrbzKAGkBrLzjTfzg5n4Uun1163mQ5AjojRQS7yrdsCuAe8VzqkmvHewBYGwZ",
  "key27": "2gQJmZUMoCDVRwf86WpiLhY5hdAqru4KN31LLYMo7rBZHtgEXe6GXLvBJarVeMudJYhwiknvvaqzT6vA9htecyXi",
  "key28": "4Tqaj6s64FhC3X4r22pfvDEJVMrnPWXfHrTM2giD2GE5B2HC9bqWZU6KS1D5wM5gotQEKxM2W9VE1cESkrMsXpBj",
  "key29": "ydRA6p21StH9hAjExkz5V8Amx2zPxipwEnbEsr7Q8RXUvNW8S43okRmmR7BMueWryRWcEn63Dc6TwFQDTt3ZkdL"
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
