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
    "5wNZpTjt1ZmvXoRnkX2trobkjgMy1gYvXymNdJquxTkCDrzzhTKYk5T6eFv3px46n2P8K3wq3RD8sZMGouFC8xbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXuY56h4dTX7iYfYtwTw1kYqFYo4KJT8wfA9ukdoRtAX5WRk7VCFcEDRkiieNchoUPB77Y338RE63xx9VUexKLV",
  "key1": "5sNmptoQGHjJbAoiyWSRWZ5TiAzr1nCvpBFLyK5aeXs2ELS5yJfPSoxa4qKmjhUAdQgrZXtjQBMQRQREhcbMyvuA",
  "key2": "3RioMKy4593ys1C1Ns5QkGzGs9wfuX4HJSEZEJmuPxS6s3EjEPYaNaE9GUtaEdreZ6awxJiKAjaqDzSsY5yCPzo9",
  "key3": "5x4bmwinwqRTYFS3suQ9L9E4fKxwsePeUmoYnpTAUVzaUMBzrpPX7s3L7jeE72XSvKtsT4Es6sc65rPFpHrcPhNA",
  "key4": "5Cc6d2Xr6pxyDTJ8KD9aE7ENqJSdiQC9nTnHih5kG8jrsWxAk1FzFukwa5hcWqXvuER9wpBgZxRMjihefWp5xpmy",
  "key5": "21dafvwBpwvDYf8irvRp5RYHJ5Gn5PGhAtEDkF8N6eH6j6ZK1VhEKBMNqM2rfwaPA8znooQ6GfJ8w51rFHchRUUL",
  "key6": "4E27xMMqiykRwbRYu44wjfdUCdSepCZ9Ta9babCfipKYkZ9BC6MrbRzS4VpyZtx44BTgpBYcu7MTSVZCKTv8pDg4",
  "key7": "4kB788Yn16MR1FEuA1WbiovPZMexhUd6ujNRvDvKtA8UNcdUhLBNYYeYzjd3Mguu4r2hM9Bi89yy8ELRnVGLPsbq",
  "key8": "3f299rCyjjuJdTz7y3H3cvCCkqHy5712LdkssLrqdMsX1hz1CSzPyzjmNWQGKX6QosSsyqHA5zWh5wh3Tgc8m6C8",
  "key9": "365hhw4twtE9UNicQfVaQ2eNh1d7wsKeLJVdjupfv5PyyrnLewadUxad1FB7qN5w3NAsE2b3geDVeaxLpKbUdYg1",
  "key10": "48C2Loqiw2NJR49JTFseHEjawqPFZuj3Rsp8kFFLax4MxdxoR2C2MVt4R6XernbsEfnjsX44vyfTMMvP2yaB7ebT",
  "key11": "4qbohFtP7t6YFZ3N3yAPHoPFGZ8CAxPMT14aZpTNsnfRiKfU1gG15JXK16DFkiG1gj3bvBL77kWuxpmpHzY9ManN",
  "key12": "45YstQfApR4qnkv8C33P6PDinMsTrsLmHUo2wuvaWbBGfbpXqVngeCmf6yRgtmXPCdgH8qsiKvp8ugkXBhZSq2vZ",
  "key13": "3PxA9RxqfVY4uAzTSNqMc5hvALodJZymZBQB2A1LT5TGYxdFxripLqvnwY4xEwvbpVvPSZMp8bEv6Xe9VKnGQWu8",
  "key14": "4jYzHwqcagnWV1UyyJ3y9mE39vXFsVHVMmcZZNSo9mK8Ss31ZR9G6iS2N5iG5Lm9WvWSdqcuBME9QY2m83vpNc3i",
  "key15": "5n5NqxhcS4zxci3B6Neuai4wMD2e7BXsXwM7erFfVcruJ7qBkAmiDrc5PHDGJnnqwUsDQgHsqdWUdfS7oAjYLXuE",
  "key16": "3tfHtBDb1PVyeJdKNZBhgJPzX7fV3SgjfXDMWxAwzAZrYCLLmSXQvAZA7f8HF11LJywGpz3tGftT73TVbnPp8KSr",
  "key17": "31fMbBJVFermA5b749Kodbm36yNeyVe7dXE3j7soUYVcyaPHDRrVdnFYmu9StVDXgxTx7Ub58YcLAQBotsXDupis",
  "key18": "5dhA9xwTNV23aF2d92pBtz1FHVTsseh1f48ASgTMcGyRxzRNbgQELVP2BWsP6R5AtXW3TeVbw9zWtUsxSHgN1TTQ",
  "key19": "4JYa23qA3JRHxddyUXZUvPs1PFpAaMjyLn1nj9E8UynXARt8u8CMRxy1fi1aVPJjFHz4pqUX8uvqttzEjQagcTqJ",
  "key20": "4MtVJEZ8gRZNf5sfnsvsnXrHt1Hnmg2u7a8P1vhZ8FxoxUtb9LK2t5M6gsdByrEfiUd8vBqd4PtckarkeJb58UGr",
  "key21": "5kqrDm4QspXudb4CY959q7887h8Cb7fRMCeTPKXkrcpnNWMkTSQWV5wzUuCTVVFjVYnXDMwuJa2bjFbDThiqs9Yx",
  "key22": "2rpSPtLspAWWAbmJZkLtcwHxv8j5q3KQjWQEGjgZM87ad83V4SgjpTaQNw17PY9mjPQEpigpvPZFSkYjjv4DnWrH",
  "key23": "3qNAnY8MwxyetxdBYquhRErLfbib928svNJedrTvvjV6LexsxA8snAGdZPUMccbyyYpR6v26aH5QR1tKF9Nj2ENk",
  "key24": "4cmbX1NzY4n97ujkFuMvbp8acm5C75cKswvjjh2PisJMLemeWDHF9xbQcfmkraEByo6QuKARDhUxirNHRSbZeUcd",
  "key25": "5r3wGETyKTWiuFWDp17zdqkKjMredu39mrRkwfWjLmphRzuqiJNZa27zjffkr3W4BBZeMs4XnqChyXUJeaRfpQL9",
  "key26": "26DGKYGtitwTnCbDvnq2sAdqnz7bBQPdBjZcuxACHUkUYZz6jPSBbfJEFDGgqSRAmRgLdnNMAb1BWyrcWY43pmXe",
  "key27": "56PPeP8rvxW9QSYei3VdA5K3XhzYc96jQP2BMEBZUeB5kLDfpZiYsm2hrd3MSdVtg7G11HtcWqm6DGXaTAngowzQ"
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
