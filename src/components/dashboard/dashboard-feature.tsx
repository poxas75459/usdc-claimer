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
    "3xQ35eMpez74hKpCMgp9evZi1WNTnsfpRA9qv2MbU1xJXbRiyTJUTiJC4vqUrDqcBu2n1bKVqk2tECgMYXTSqFhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dzVupRtiPoxgseuCoNZZrejre12eo9pz5ZUEVqP5NGTa6nqMrcUHHL4QcXwNKc963RHv8J9dFaDDMQbcToebYT",
  "key1": "32TcAGGqo497PmUGkSn1Q9rmAQoEQmn4QruGNEtC2YZw3SM3XP1HujnmcU4rLsDpWvLz1CjJnx3Pr6ToftNoQHTV",
  "key2": "5eE4CDqB6TiARjfAfte5LQn4YEkWkAgasR1B6kiKqTt6Wp54SMQczEbANL7Tc7hveTBqAy1zaHyzSmMVhj84gNm8",
  "key3": "3T7HJF31N3gSNuoeHyT7ULdZ31PKiPRfjd3oy5G8YN4bVPLtZ9ffcSs4CC9sUMBvU3uGNQjqQtgffAgjre3uzwCo",
  "key4": "pB3G4Binny5DLycLEoArrvPQGtRt92ecTsNK8xG582fHAFbGfVHMeryVEL5ERtUtdvcATdihTzpvk2ZHZQQr7qq",
  "key5": "45cUcGV5SYBGxw5FruHVcxx8QfekCePvj6A7JGq9dLPJKw5w1fA7HEtK3MhJVcqD4Y5oTdg2nwkaadjqwaAJX2YR",
  "key6": "5hrgg4bHVrrfnv8Ntqt7a1qAYQ2nfAN6LVzkTpTQpvZyv1RCrmwgQN8q4fbVeg9dvuxv8rptKar4eZprfLFVKwoz",
  "key7": "44E9MikSGvK28XzBjeW88J3kY6LvACL91ywZkDpPaCoHidaZSabrsTz9V1JtEPpwi6AXbqQAUSKgzRyrATmvN4oR",
  "key8": "2cWKTCWAvma86jNxGsR7KzPewErYCfwUdrTo8m5MjhBHWzw3VzCbJ3SV2wQRmFgkyksSgDCjmv2XShg3dkPQVHbf",
  "key9": "3bcVLfCqYQtwCxhevLkWr7sjYJTx4M3jRiBNGfRds7ttM14DVRMQhLJF1awWTUJdY3EsFBxXGYQhwwxgpgfgmjvj",
  "key10": "5n5URFsyJWQa5r5ZzVJWWBXth9qvnkZTfJmWd2YMgW1PAjmBP63RvU2RTkjoUh7k1muqGUNa383YBN4DcJeNawR9",
  "key11": "2Y91dditrq5FErLshgn55VGLSQhDV6eJjXw2ZM2RtGcZRtYVKSsNSXLyMgxgRUkkYQQUBgYw5PQBDSiVqd6Z1RWJ",
  "key12": "2vhahbrfQwNbLyqJ1QCi7KBQxjBEimhLLNdPyT9p8iyyf4MPqRUS1ty9k5C51iyUQUcjPasc6YgDj6R3rKi1Ci2v",
  "key13": "5V151G7SZia5RQZNdL5EDn9JeoJdvMztPPPLKTTcStcrgG1dsWfohtmPnbGByTizKJgyspW4A7uHHM2JxcMxvYN1",
  "key14": "3tqJ1uj2GUXnrZ4MvBoCSqZGFX481MSbomRu6QR31yyWz9LNmTZPeudggmrNskj8vLu8osPZ5x4rLJpXDzdLCGrM",
  "key15": "5gXCo9Mw3bsGQCMnXSAgQDwm9c7EvbP21W7wMEkvfcMBkgZFNaYs6phRgkcrpUZ5jaRVeKe5XbDjQawSLU1iPpSA",
  "key16": "1BvNZcsHNJcxhNQr1KRyqYQn1z1BHt1hwQjHtgEKsBuD5KjavJSCVz9cknsDrDZEYNc58EiG1AgvqXaKHtGmcCp",
  "key17": "4cXCHnfXpo5N2RnbYq3LuaYrvBLgK2PwyQKSxbzwpzfMHjBR9p1vER4CFCSPVYiG6FYyGiyii8dFVb6nPDV8t2ub",
  "key18": "wgeFeJWT1YQR5DRLT52P5wFsoT6sMVeyi7WxcdN8K9ffj15NM5mYxBkZLGn4tPz6xy32xHXerSQ9tmYuSyk7BSR",
  "key19": "2zTrnsi8mV1p1R2BTukSub4E5RuQzK396NULPsjifXnMUFQ1XM95MtjkovnL6P8qP2CZqFCnoUJo1qiRpgPB7cSK",
  "key20": "3QyscPXkvqSfcJDRb7gTsSYfywDdXKPMAtZMw5jdi2UenRvY1edB5u8a2SakhgCvB3AHW2aW4RtXHNfjSwctU8S",
  "key21": "TzcsAGsw72BeSD6EfgPeG4ATnWddqmgvUJozgWab6KnkPXG4EvSJW7kWtaihYscNPwGwr8p6mPPyeeHknsVQuoY",
  "key22": "4kLMgUGj2G7H26aMqSLibrC1G7orPMPpygNJswU8Yhk8viP4VfDSDVymUMCzCx8BFVwHrTeNtqF1dEMGkXotgUdt",
  "key23": "2CoKVvrXwY3g25XRNsks4mL8M7JYZ2rXfJk3ipd22QMyZxWnZ49ctNWcqcfaoLA3xwCK9rCjBdvo44hgJaAbaJh5",
  "key24": "3WJmz2Ly6iiKyd1zD29ymahzkqqTXF4Wf65hGqmXSV6g82xtRCqyQMwBnty3wp3VneRoMhKAdZeSQs54ZSn4yrXV",
  "key25": "5q36K1MYAJZQfp9xTExuXQG7uwLKxcVuCqrVhQburZq5ButEyZa4GqWUW5JCqtwQyX79SikvY1bxQhtQCQuV2Rxv"
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
