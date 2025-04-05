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
    "5KAL2fSTTDkHEVmBdZ5LgPn7XMMVWnuiTUUXy1bHZAouqSrMqbhvFy8ACsUZ5uBEF6YJrXCnkAj2jFManxAVDeve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WEW9LFEKsVZQBQm2bUhftcwtBzXFMWE6pBRL4pJszj8NTnLVGUb3qTyz7cE9zVgUkZmLD67Mu9ZfXLxwK8QVXJN",
  "key1": "666yDKBoz9fjR4GVzLJbnCFjorbF7VHUvHxHT4YNU5qENx7SnPQEqgxzC4csyysLiw81UKzA7CF6A3dUQKTqbmcK",
  "key2": "3BCaidX8rus3vrJKueiorkDo1Wn8NXrNVa1UfQcGvbo3jhF8i2FjC4XELyVeKVzJhtbranzDx4ZeLtHenkoUvUAH",
  "key3": "3b6cFoCyKDMPTUR9aqDRVSk8Un7jNB6girmq59DvJNtrJLpoMDpcgJra3nLQKZA7dX7t8yYbVo1sLZUT5G5fKqey",
  "key4": "5LNAZoAzzNqPMwyiWCCe5j5kFPi3Uwhe4NrzxdHPaSYW1Te6VEZQbhNe7fY4bw15J8wf85EdVxDVg2vr5tyTcvoP",
  "key5": "3BpKSv3ciYEhcfSb1jvKCRyH53bMgAbU4Pm4pXhqBQ3VK7XaVCH9PPLWFWcuXy1MAw5TSqEnk6CSXbcUiqxdEcxd",
  "key6": "3HnnVEc4aCmPUPaRp8kPYX65t9xZncdv2F9u9kXVMmj5qLpWUeYLAJu1VqN4PPwj4LY7CesiAktCFMxQLW9Yoik9",
  "key7": "3fBcvJbJfqfSebNEhcJ5qSCDNgTKdYyY9bq6UCvkCmgUzKGvho4FJEGS3ycy4oRSdMG945CLrz3qcdLr8xv77Je2",
  "key8": "2nvrnywhTfc2ofR6P1CZjPgQRJJx64ewABpqsdUVraRVaAyJcEm8QqVM8NZd8Qvjkk5oayeYh3VG6AWwavmNoeuP",
  "key9": "VdSsPt4QNMSEmwhicqhSDkvjrxm2TMHkNS5Q5stdm7RRV7G4RwimJtuj7tBz93DYEQyrfKuqSdKjC1gYaTsmxUd",
  "key10": "66RctmhR3A7v8fi2EPv6XQcBMvjTAAzmnArrrmH1PwuNR3DgdfqgTZvPeDUuLsPkeSaN6aGP6macXKSi5PY2JSeQ",
  "key11": "29H2VaSS9hiBpQQFtfuejCs6S5yf2Kp35W3R4pRPEAt193URVvbZYojdRp6MpTdkEezinR77Ziszm93RaHgf4jps",
  "key12": "5ZnE1EPoYhh2Wy5Mcij1oJ52FusMzsTS2YYFRqJjA3hiS5uSwuxwbtmPcmL6mCeUh6ZTF3HDy5eSNCnftDupuKob",
  "key13": "CA3dT3pSqrX8NYMswCW3sSVZLbKdVtYYMAtY5XKmJtYe3yd9siGGGtGXcFkbU1KFXjZRojyCadJ2RR8NrZP5AR5",
  "key14": "3jkXKRdXEsjnjYas7fGZ4cxxgVLXiFdCWzjjXTxXMoLHN2K4kf54F3rM8Whq4iMoUTpjBgkbsdrcu4Bo2misKUE1",
  "key15": "2WJXbUE1WHdMKtEznVXH6nMxKx4NZw8Xc7yazN3VP9Vt16TwzP1fAXYTMSEuS4dm8JHMVEcsWsEUZJzFfPAKJja",
  "key16": "2tx2uETVKXKVjoyMagbeRgMjGVMFJSUoGRcQLTR2AsM9iNg2cAkVBuqqD4ardG95ikFKVUnEFbMwkyh1C6Xyv9Ep",
  "key17": "41pCqSPgdkn7uqa6rHTR9NShQAKrkQ91DfqhGHoV3ia4qcCEA1MGKnRVZmyizV4igSHDLVtahsN2dkuLGdF48veu",
  "key18": "9iUdKxQK6TR3SgE9ehj7qYhD9EnGq9YkPLnjxZPtc9xW1DoqWoGZDTknMX9tbGgUpy89sF7YL77A6GQySfBcfdy",
  "key19": "27o8KPGt6C1dwZB2qhxE5zHu3XDMGKn4nYS8EGihssvxTW8c8oknQW5PYXzC3rqG1RZWC9HxwWvGkGVPxbg42wUE",
  "key20": "3K3GoEu8YQhVSALARypGqcs9u1hwid89Wn5VBeay3Wp1QSaCnxCvjkCYxM8DguPi9rdfS5uya6pHVvLULXVQixSR",
  "key21": "3hKCDiC913cDTLSubQVkXz29GTy6iP1Sr3QsWhuw6YRWrzJENq6e3Cfc4aA2SKQLBmv4xRQStJRnGke4rmZZ83F",
  "key22": "4r2Km3J2XDbXWiiXgqaYyWL2ErnLSMTdpT8P4oqezHfK9yXJ6uWZrJMsR2mjjRH87NpaCsrWP2ZdH1aDZAkMf1oa",
  "key23": "5iUwKVH4ZBdRc2QacjVxGPhvxejLyRP9rQjcGHwAPKjJ2pFyfFzvtHCNGjFngmF1fbBU693Nq7iSfdHGswcjci2s",
  "key24": "HrpW14tzbYw1e8ySt9gmEU4TEapFkJezziaX1ZomENtUQsZJKMyF7QUFfB1TbZpCZBveUE5ckzVLGiWWL7PRWKt",
  "key25": "vZNvPMBAepb3xvRGnQJHZsPPxakQRRMGaEM8S47Q5PXC7sEKzzr9VvyK2ZQKP6peNxvJBudUgbjorDPn7Rnh7tx",
  "key26": "auVBNFRrZUd4WZrSfk9xeS7A8JfeWF4FNwCZ935QzhG2dTKh1CHAc5ZKWykg5EuHRLpZB6zbbow9ykcP873RGYz",
  "key27": "hHJHQpq11tKd9ShigKXiS5Y8U4b1zh1Ez1UoKqSy3S2G2z18zJoX17WpGiuZ7KhpgjVPVdyo3EZVLvYnwvM6bgV",
  "key28": "3RH6mmK5hzVwVLSHMRgF8fdqY7Ak72okRtNoTDhGWoHWWu38zA56uHvyo2uFLsUFnF8kn9VPASqWusfVRdEUXgEr",
  "key29": "4c9uCneKu9oT2YCas5p76f8RqULgQnavzAUvaYNASAwr6BvDh3ENCE7R1WN2GTbnn125LU3MewNz6RmjcKMUbnj1",
  "key30": "3CJKti8GkH6bRj4gwziXors8SgUhckLDxcvpWr7LT1Pukozo1ySjSFGa5QBbFXS2owEo6YqoAoSct8F7UPFFaBAn",
  "key31": "5Kr74jDSG1SEuWUzh2wUaixdL9fDCQqMK6zxGU22DreXTfXMFYBTEeezDDTS55RgAje45UGVVJpVTb7spRWAQG7K",
  "key32": "4xuST9oVAjuFro2Rfmvs9VgFdLAuf5XFT9MvtGAofnpgvWQ9ctTehr2jxvNVWTkiBnjbBHjjgTHnejsjsKbFpTe7"
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
