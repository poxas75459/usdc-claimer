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
    "4kMTrzNbTpfoVTuC57UEBWhfZvxhK7bBnrW52cxaBpMFiNQMZWMnB4wZFhmZNqERsT7qeq2rsGED4br5WJNAwxAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKgotHgjhY2Fur8yXg6N2HECgoy5Ga1eRcQV6U4GQ6ePU89BZhnEfrBqNXSJCLLUXNeZXdfP85VbWDr9b88zb1r",
  "key1": "59SsAVb742x2RqLnZKhsPBvJaDEugRyMLoYZokM7fSyYRd487zhdreZM1XyQs7vv8CFiWL61xwLAZjwmGnp5Vni2",
  "key2": "4wTHx6rci2QELV1zA5bRkRn7t8VYScoQ7J6qmTWRo3o6wJFZnoMz8fKo7E8dYMpUNEqainyrD6todZQNxqYCY3bT",
  "key3": "622LasK6ESJkRoM6zErX7uqJHP9PBoQyr9G41pu7JiV8dYuvwVEeD3K1nxbeA7fizARJSoxCwwUbD2LQBMtD4sLR",
  "key4": "5bQ3gUyUaYmn2nmCGM3GTY9aexcagtrQzztCSt9ZH5wsKAqARyUsGG9TpXSLfcZB5MmrAjK2LDaz99fjVwNrk29K",
  "key5": "45XwddWLyRC9J8aHaVhbELZYheLhChNrP1V4RpdSQaHWkzCgdkh5mUWArrPmfLKLbDdrG7ys1JfxfjjX5dD22Y35",
  "key6": "2BxZgmRVPrUUd5S1q6JUCjcNc6YzVpRasGGELbFKUyCbMt4MifQs1WRrTwfbAVNQo18sd353z4rZ5tw5Xs8ZBp84",
  "key7": "9dqFrcFYAGg1awuHTfrrRgiifUA4m1VT4TJa1WRJGMywsQSy7iVe4dHAVNRCZyuXBAqG4xr9SLKR7kHrBt9mjR8",
  "key8": "3rDyGw9oVpBGpZuN7jgJheGwXXBVF3JVm2yCtELG36h8xSJcU9q577fMcWhG8kTbMociQro3YdoZ8qUPJhhxMVsX",
  "key9": "ybGtdUkSjnyBJpmShoFnJreTSXMYT4y37jpb73jB87u1Nn8nrrShBFk6tjA3HAidRXsRJ2mMXyu6BbTB68UbU7J",
  "key10": "55Rut6eDvNvEW78Cdwh2j7Saev22Jg9iDX6LF2K2st2mdMwDkTfFUW49f6pz8TsvQrRuHyG3xMiHpC3kAGm64UXg",
  "key11": "4GGL79BpfFwaaL1KVbfzh1pSFxx5CoV5s3UZCuT2VduuPoagmVt3MJ8bPV3ArYMsS2opwQmAxj64qevYnnzZsFrf",
  "key12": "4Xr9SDfDApFfLEe16dEY7QpcBwZquZFFBidMwByJb1jYwFQdXWnsokSqK8hhTNwQrtkBJGy7BE6ezMRoM4JNhsfU",
  "key13": "4baTMYZCSayPjP3Eruiq3BK8RLkBCmoijZ16YJchy9VyJq8pbQJdG6xoy4evjpJ4aU26sdP8SyRGWoe9skaCJzSt",
  "key14": "Np2hTRqheidQ8yXaKGrhWLJkDGMYM2cpxYf4xEyAM4tyNsSt471VsuNrY1nRf48Vb3s8XWzfJd7K4VRDYBXs2A4",
  "key15": "7TFnwWLugmS7Wnz2W4Db9nbem89WrBbct7sroDEcLQsS1gznHWcS3RiaeMD9qFdYmnKmFzStENeGfrdGS2pq1cg",
  "key16": "4RtRamxJRgL5WbzsBJTo4jE3YPZkpMmrwsMwcCFuYZfq6PVtvugsSoaoiPkQeEdLz3KBTna61br4jwGGJ5MReBaE",
  "key17": "5hszLLoThGsJUaMpUTp9tTRgsbc2opyYoGRQuvagzsqnja1VVLJLM2y9Nw5DwcyuQ1EqyPCrFHFbYrSFXaWYQcJr",
  "key18": "roYauupA7jTQ5da1zRMhdt6BHQ6thGc6UnXtspE5RXiHEGbqAmmMvEXafBwRGNzUZxHiP2thConLwSGNsV7kb5Z",
  "key19": "445gyrJHt5tKLs5qP4Y8nZkunLJU9H3RtD5t7a5MJtip3HHGLBgY2QCQ3x6jp8YtrV5x9B6Knii2frmjUWnLXbPa",
  "key20": "V1mzUQmJkhAjyLwt6qmTWMiTeCFfQkdX3CHTXnpABY9Nm955oqNQ3NLe5yu9jt9U39Snhx1VunDk8RNDtepDfRT",
  "key21": "4wNTyMDxHTTWa67dfrDMXQqunogN7VVDxFmZAmKseqTUt2ShxjUe6f2fmvXt8nZQf6uo1zLZRmNQYjjywVxwXqwM",
  "key22": "2EBv7XaAhajdeuEbPd7zdgwU5oQQTpJRhRSe4uzo2xLCqrHsVwpDicDhHgQHRPEKqP4WnQeM9SDB6DcTW9KoiLgi",
  "key23": "3XXp4N4YWEcmrgpzC9rYWmbJyF4MmYhdNh5m9uvehFq8CsSNN1RLSb1p4i7w9F4mTyrL7B4pJrKctYXF69H4NVXg",
  "key24": "4z79tbEvJyH5CuGnAmsnpDHsiNqp22uLqkszZygYSbG13wk9RYvbASqF62f4rJwcbAMa4Mxsjy9aKY73MRZg9r6T",
  "key25": "g4BK1idr7hcfBqgpWg1cZF9cVVE8uMaEVBvGPK12CWj3xg2dwxS7CWPvFVGGhiYcskDxARqjJxr9z5seWWLKq2y"
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
