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
    "28oJzBEGiVqq93pQXmpq9AxPhRHsMgDqpZRrCe6XC7myfrKA6vFQVWmdYNXdRanYwhgPWwfJgTsjE1Sjvi5Yy5Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s76xNgDnHCALWHfnYW7mZPUHMs7qhG69HfQPRRveNuoQHtwpVN6uAEVhPVZagKhDdKC97puLhSoszn6Pct9v8Z",
  "key1": "2QJVGUacpKQG525AuZLLtxhAgNxnppdLoGqDWd6j8Yi7VQTJJ6wWHPXnK27aQgyZt2YZNNaNi7LLPXKm7s1goag4",
  "key2": "2VcWBcyWMTKthDJeqizchQyAheU1SPStZAoqPr8eA5eh1HEUDKWhSHWCM38HsYeo7GeqJPwxYpjQCsjBLpi8XWAh",
  "key3": "3brDWzA6AUGgRtHb3rRkDE6uznAXqn5QHgE3wAQw7tuPnrLcwsEuG1dtxgXKJ3EuVeh1CuRuZkuTGZyEVD3i9YXs",
  "key4": "4vnK4koXdsY17ta3ZkoafbzG6jwv2wYFd7V3prYauUwsrM5b66vdEEXrBjfh2smSSYGmJi81VZwxu7GbsWdSY8P6",
  "key5": "392DHKu2tXBEQqHD9P6FiGF1Zq9gbjQzaEtaAcXEDUuQVVLoNes3Ngv2UxnvckP1XsRpoav9GMKMrbDRXKRGmcTY",
  "key6": "24TAYrgX4XoXHb3Ru6RTUMVEDyqer8oYtqnoyWD1G6xnJb2pXXJ916s1NwjGyafXSE6PDeEDDBdCzewyS4GvTyiE",
  "key7": "4BqiApFeFJZeaNjSF9Ktr1rFT7geyHzJMVqiN9sxKKgr7cTUmuca7CKokyJM6eddX7ku6tTU4Jz87oK4gaxeayD1",
  "key8": "5YrUAqWRp47HferaBSTJxy7566XTRbAYq7AaShTYxKB8t7hGgq5HUCn5Z2UVVHQsuR6hB7EyHKakiUWNNg9s6SNb",
  "key9": "5Rd7PGt3XcgY5XVMHSTB9953frs9x7ZVrgVDaCfRq7QJJiFfgavJPkp6sWheH4tB8eCsLs6VGyRatUH1eGJtDTSd",
  "key10": "5qc7Xi4fNcEKn521Zj7SdsMX8AUDMNoPP742FZNkyzpoNAM77CvpSMXBbvt47bj48a5Umo3aUZmVZx85LwBjVJMt",
  "key11": "5escLbQmtrBHPCyy8t4qkyC16Fpwj5ci55ukqzTLYcaES69biRP2NKbAXUqdYvMW2pN3zKLzN7TUjgAVKmHuwFE9",
  "key12": "5BC5M2YxLaWkhBwwkrQokFAo6eBXK1srsy5UFHcGP1PeysJZduaRYBerkbjgcRrEFWDu9d3gQZLqFsUo1gV7PE6S",
  "key13": "4uTm11B4hFzCGEJpKF3oct1bVu32yRqvWXqY5fZjKfVe3CNS5PJfiFV7dsehNveocnHqzufgfw2j25bWWBCKSFTP",
  "key14": "47eLoVyLtmK82kEcyeubbjERkxs78vmXuTzWjYaEf4YusY1YaE3JDCJDKFGfmGn3b7yRNrj7te4X4xquhUGcndVN",
  "key15": "ZdCRiXJmZA7oXnbSQybnrytbwUX3UAzYKqKRPwwp3YRr9kFjPWhcBrNU8Kd5vpD6y9vbnGxM83UnJrYf8UMrosy",
  "key16": "VHk39EbyPvF8zjTjx68zyooKmurauDTauV8Xx2YEyF7d6bp7k4dX3HPXp1m1PagghDjqcRC8YmxGU5kvk459aSx",
  "key17": "nDRkioTe1kAh6CiFnww6rNT9sd8vxJXgUDeasRDb9PTqByJ9TxumfhKYNaoXZsERC8kDPn9AUt37CoC6puxER4c",
  "key18": "4v4ah9EcYHgeJNzC7SJ16PK6TVXDXLKESxCc1n4JuyFjv6wPS6EeFKyTX4VvGbcUt5G4dGS1CogBE2hs1H6rheTJ",
  "key19": "yjMPRNJ8XQLnz5b73Tgq7gq9wy2LeF8owQN5SVdWV6V7Ffyhv3z7gs5qb5vrpyL4jn8H6VdmPxSe9duE6knTQHu",
  "key20": "3RCsnmWRmQaNFthribGARUq96GhpdWr4imqEdCjhG8Qs2ojPp3qZGiUPjoMixRVpomHS3D5syJfZhLmqVQmyFjsF",
  "key21": "61tgbGuB919ihhD8ZUr4792Qwo6454HQKurkPUVvepWmSjJKdEGDzuLseo6aqF6Jr8sXPRbmxhLaaPGtdf62jet2",
  "key22": "4iBjaiydWecmXEmTmMhDTY24zMsXp9Nt8Hy1qQ6VfYzVc83MkcfSYB8xN9kXq3itM6FCMFringDMnqTTZ4evWeq9",
  "key23": "K2tsG4pmB8ExaEpbRiX6ZcSPWD3LuLxJXUknUTvEChK6xJUCS1Zi8vBddXoTh6Srnayybejiu6ztEz9HCMtoPtZ",
  "key24": "4qJicj7c341iSKA7xBPg2dXf4sv1bLTMKR8282kUv7RVtvETk5MxteXP6FTqg53cBLsW1PQksQ1o6aPBVpqgffRm",
  "key25": "3Mmn6eKKkwsk9bQZW1e7YLoLUHJrXo1UGMjWU8JENYooC4LxUsBdP4SFYzen37EobkivQPUwEU3KRiroLUJNXacS",
  "key26": "5Pqz5efepNjFpDHLPRVP9iXJzWF1YkDnvMEvU9irZKTSczhcMVV7MndVwKLHx7m5k81ADTiXGDWgEA143RSHqQfS",
  "key27": "3XpMXnKEy2kqyLGyxNh7BEWgdTdtAjbxxnFByahsgi1WqyAfJDEsp6avnJUredmCRdHvsCmUhocpY5pwca4JjSX4",
  "key28": "3iRAuatg4J76sX5RLccd7uXWndjUfvEpL8YXkqSHpyXnz4MwTWzAiwbPwGCb5BXwEAKEMS9quJRaiH75PWWQcndC",
  "key29": "3KLnaEsabGkFrAnJhVEBzzANuKra4Hr7coGg7nVrrSJKJkLTTsyLrY8J6ynUyp6WWARUFVso9ppyDaVvUY49B5GD",
  "key30": "2EMbqdQ7DZeQ8LskxW5TDBdPq9QPbXfN9rHTyyk65rfeZ9jeFRWwbLN2dmJhFyJRjmVapRNe1d9HXajymCSuKKFk"
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
