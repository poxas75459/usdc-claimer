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
    "438M1Q4WhsmW5pAyotu2ASDrDrGBirXM3VZVpTjh1wFnsWwjH6u1M4FvRcWmaSHrvPcxf4e9Yvi7eRtZDbwXKsKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qbqpMDTPAyGV9h5ptiPnVJfF3zxrxibt993CeN5ob5VM8F58wBNqzKhVjPBNqUczxbP92LHgB1awhsjEkvYQJE",
  "key1": "2M7NTz852SCk5G4XmNE1AxNNCXkzMzd9gmR7M7VKC3QNEafcQY9k3iQ8jXQVmc8zRArp4N8hvucHqX4E67rjznVC",
  "key2": "5VSUahRZGnDSR92VLehe793s6pYq7fQKprRf92cXH8k7KGGvr2oor7VpigU7dHt3Sy5nceVrhZYRFJ3LacYrWdkx",
  "key3": "29vGtAnHoyeqVimZqJyYtcSxUzgjSc7kxC8DnuzGtvMiPysj4QCgxt7VXC5UaxQ8FuCqz7ujzr3VFA9xYjSWWkaG",
  "key4": "LL5mVHh8bLGyBp8UK653LpVsaF6xycykaziHsUFni68dqHAwRCaMWS7HSSeLLGZvV5SYqWFB4k2v65wyNQ4fpNh",
  "key5": "51iDwtrafZZb7CN8Kxp3YdJHCHCNY1nvBCU2FpL2jkEVQE23CFdf3vaaJag2dprj1rqMv8uDNdZsXTgrFLAvKdzQ",
  "key6": "3jCa7K2CAvfnvenK9dKbtQGVDNtxppYXr6UCNdVv5SrwtVmjF8Kfk8iahjDAV4frTqsFr9RjffNJwLR3FUEWupGE",
  "key7": "51NL3mTm4zJ5yrJxCevwQNhcLW2ErBBMCogot6aYTzF1AZQxQtDzpnKNrfEU4iwqkk5SGaPcx66SQXvKaA7Uf3A6",
  "key8": "47AJydoqmZT6XYcGCE2GFXtmhF4Z7hiDmogPK2V9RoaRiuuRoSyk36t5SBLpmpQF8gx5Bu128UwBMVhvVsGELmdd",
  "key9": "3evwu2nitmYXzvR1u4sRPNtMA3JGMXojMjnJyfjmywsTUBUCo5zyHeejAguPo5c5mWn9NwcL5b3FoeBEnfaFSENh",
  "key10": "5rBhZyNaHLykdJcxX6PVrShPx3NVZt4eGfBswvzgtiay6Axy4tsEqy6D3eLhvTvxWxbYsKpeD2Nw5orMyJwKJ9v5",
  "key11": "S4VZbCczGbwjMhMbiq9Z75z46ahw91jhnZj6v2Kc5FyqexqBZRRGY5iFWa1WubAFCbqYfsLKoDuiXd2RW9XtVYC",
  "key12": "2QcFYHYYMf2zHo7DBtwgu7NE8AYNN1TxKKaxtxU6J5nUFCjfeCR6Qq1M7AXqZZ12ua2dzyDct1ZFUeNxizkCgYi5",
  "key13": "3M1RtcF5aT9tXJwADqhiQkENTA4S9VqBbCzYJpN57fLjaZ2HXLr5tCxsAeZPs78Bo9o7pzrQrRBaRBiddMPng2zL",
  "key14": "5U5V9Uq24FScvrqChxhTaNM9KV9goXDUStDSGhxNSWBey6bwtYVp9bMJdXUZUWxpG1W5Zs9G3Tar94Qn2TugSL2Q",
  "key15": "4Wd9i7FPikjWWFUbpheBNYYpkCoxvC3y7MQAKJU9N3djLF2Fpo3TV5BZMt8W5ETH5872pHqM25Dadti2jLRzjHEA",
  "key16": "2ScJZhJhXvhhvMu3HA4wpFFzaxXbRN4Puih57g84oPPHoqbZ4Q3rvKx4o1K2pKpGjyabrXXk8a47MFAzwBnHm5Ve",
  "key17": "3GJdTh4Zmkk2k5Fu9a4qwYfN63i4ub82EDPz3kUwTPDhkjgvQ8YAzFFnHepV37MamVuE36REDGVeEPLLueMHXVvm",
  "key18": "3ssT1vP8qHeRLRbt5HvbENMZ3qnSLVT35AF8Qhuk9b5DdgAdLguMmMPQn5iegBqoghcrjR98dQqMXpduPVBUwVYC",
  "key19": "4kJqUvsGZDuVPFeeFMfPLQSj5dcqyKR17c2edzQdKLq9o1usnYX4SuRSiQB6fLabUgQLXzSm32dYGgxxPFtkEjtx",
  "key20": "4YQRBpJq8DyJwzVvnfdqFTbHwJM3rNNdFeUvwDUvXTuyy8bv9rsNwebmx6WVcMiPb3rmGDGs2UKYqPFVoG8PeaMr",
  "key21": "3ZoVcMjQuKEGmeyp8NJgQqHKJKaK3rjRCQVcJNMXLVuB4JYR3J3f5wVh14aajPYA1vc3J4kL7MDcTfVTtLofCVpp",
  "key22": "2jJCLDoR6AuZg7Y9HwErhf1JnkJP73j7xsCs8YtWpUmVbfRquX8xbLxVFpsmkBHca6GdXtuXPqLbM2cMnWppoirA",
  "key23": "gQVSL8PA67CgJEycYqM5sEZeFERkDBt6uopSe1mQ7cN9zYfGJREcZ1GX5CrF2bEJAAV3FkrMwAN72dB7b956a42",
  "key24": "5AhbDmTdQn5k5RyUA4TQA4FdAaWheom3AQFezHuJd4HpVGVJsSu3rP5ACrfrJdJd7rc2bFfCFedyqWYHjgk9LPmJ"
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
