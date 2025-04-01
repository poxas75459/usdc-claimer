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
    "5ZRL3bZMzs2tByvQS4kq1rTrccqY2bWduSSDKsq4tjmVP4XVE37Lq9JSXTzXp5mWkqYoRTBqXngjkR2dMAM43Dz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFt7UW5YG7k3dj6RzE7G9dtiN1kYEG5c5wdDsBaMsLt3Wr5ZSCgLiXhgarFQwoQhca6JFwF8fbFxkhQFXS4bCL7",
  "key1": "5q6HZUHbMuacSiXpubUg1AdbJsydL2NjAxVJV1hVXkuiif3SYJ2FmNkV51KJqFLcNVok1QEupQPmgsurwYm4uTs5",
  "key2": "fbF438UzUaeqPHAcG3G1m96MdQaZLjS4rAUbzC8aLbCF4UqSzPjWMn6UJtciPQ2t1upaRt5wyuedEZyEXN8RRA6",
  "key3": "5CHqoDSRcjSMVvqzh8ADu8LdN9p592poWqSuUKEPNs2e5rxG1DHWXwTzjDJ1izVXRsMtsatmvg6egYjCMGN1a7fc",
  "key4": "3as5i94edxJLxjbq2yqsT6gc6iaTwBRZYzCBGn18ZJ2EHp8nCXbQH9A7QcsLGKKzTigdiPsfUhB1GzXQMJoVXZy5",
  "key5": "3sfLHSAcy4vgoFWAPKZAaU5zZcyaSvYpNPg5Y3Lj9MDEPRtFrcTUr4cVMrpCbAA5B1mQNGRzUbWptaExCyQtQdcn",
  "key6": "4AzYjJKsbZV35RX1P4YFwLCUM5XUF8JTmYCmbTpEYGVEsUNMoqaPkXSStGZzM9XrYLCzNR3JPSvYrSnU6x5LNurH",
  "key7": "gxzfiuHxQHRxFd6WGb8WNbwArgtmx7uMjYFNbhSkheNQnFFmeFs8Ebyv2dW2FJ1TNBAQ1oXfoWoekKKm5Qgyv1q",
  "key8": "VGSWJUDttjavvhHR4vc4GwAB2zYMfAbKsfN8Vw6weYSXvs1eLsqFAb2GRDYw1smX9eAXCdiUDEr1ErsACtq7Zkc",
  "key9": "5FGE7dgXPDsMvdeGCSu643hyJcx8wSyW9Jex6ByyNjF8dWGg4BhYEEB1TKdcUPXe1XVVaWLp4fbTkPqiexozZS3U",
  "key10": "5XBiYX3GyKMKjcewMqLXyUubNNgy8bbDxp3J3zqHtX7PuwhnqFsDxSkUgdsZvrz9BqqtgvEaQ8f52zf2aqdoKxkB",
  "key11": "4Pa66B5dmbrPRFefgE4mJepsaZN687GPg3YzCYsusTBz2bJabB4CU1DAFwhzoGDjoJUJc22c1Xt7xrA5Nmc4MHQS",
  "key12": "2Unm4rsBu1eChMDxYkTiBgHk96PmN2xmhR5xFS8Lh8nWfKJkPrzNKUbCGVofXYyws1RhYQqHPGEHq6Lep21SsPot",
  "key13": "5BviAPhTQN8jtCHyfjiGc6BodFvBS4WaUfGXTJ5Dz116h5duPgeZdhPKhFXGAX2eTs2ZvjysXtLSWYCbL7ALZwzL",
  "key14": "a8L6xutnATvNuyYxsCziYhpZEC26s2N54xMBZATE4mrjNPYjzhudmo2PiVMtHe5qTyL1RPVtsFiH2VX5wvievt5",
  "key15": "2g6xcxRaXV68bm29HqyGkeRkfpCemdb8MmF4Fuee5hr2g3UzPT1J6p9WAoZR8jSa6DBc4i28cAqp1H5kdhjWXK6a",
  "key16": "56mLH63Mhmt9Zs8bQWxXPLMnY4X8RQc68uxagJQqXwg8SWivm1pt7fsNgcKKizGnL6hE3yqTAodzriS1bDCcQR7n",
  "key17": "3tTvskKszz6EZjqnfT5WZTzefj91TyW3dYk567oBvs7uN5M3vYJeXzM8B5WY3UbtHLprTkWM8fx4UDJUNXBNhtHK",
  "key18": "2s6ZAUE554iQk2BPErRuroHj5dDvd3X4pLQyX5AnBY17UEcxvJAYodjbBUyxbXTjVHdvvExb3zHk1FiVxDfQ919Z",
  "key19": "5YtcjXvmhdJ18n8j69rmXkdhcchWpDVAnLoUF2T9qWq9cpwRng6Qr97Z8ZT6Qxe49sd5A2xVH3rHK8VRwv14bvMD",
  "key20": "4w1x1jchhVRGdWjHKjcghWGcSogQDZYSm98vGvpVZnXvYgtzSRQr4UWpD6AEedtuNanrPAMnEw8rbHzZwra37KgK",
  "key21": "4oBaV1r325ND3TcCtcqc6nbnwy1wcoKP9PQVp97ZPa8JQf6ZoC3bZmHgWiPdB2dJ7nSwJzHYvfSCM3qz91pVrQKe",
  "key22": "54mAef52XBatFaQpDvrEA9yaiiTLLNNaNHutNe8u3gWen8pSodUGXA6s1JNmoxJoZuUnnjpeSFEGHaGNF5qZcTfU",
  "key23": "4SgDVyq9juAoTbQ8vhsNZcJ6eJX5wFC5vvWnHUJdxyuc7fLeneFnpxcEZ2VLEBaWkYfbGSv138NKHkYA5RoGtYY",
  "key24": "ASz2Gr9gwUqJJRVRfFE7HR9jo1r8Dejw3JGTGxMoACqmtrSWBG4nw1L6tRSMXcuKr3J4qvQeJeZWMAfNv7W4Me4",
  "key25": "4iQgLCSFgawmR7xVzxxd2E78g9U7oCL3wuPGqH6BqAxxZCpBGcdmZTNxsZrEjG9H8gUDMMZMXAM7Piw4Zzi58xDN",
  "key26": "2HVw8LGt1yK3c6J6wdyqDt8jiFwVtfRyS9f1Rqbm2CXp8Nt9eXTX6NwTvK3qzP6DrNcD6MTxzamnatyNFVUSG1Ej",
  "key27": "2NgJEkFsjcCZ1fAG3Gs4RCEb4K8VJ7KjW7MJ9Ek2g3bVQefgqUAh7kqoQB2jxUrDSoZwFbKq9nFpM52NQouk5pLU",
  "key28": "4QnSsXcg9LZmHMivUFmZVwJZxJEBFQeKifiZH2phtBh4k2DERy4HohoRhnDJgWi7cSMEPpB3xEheNz7GMM5T4hq6",
  "key29": "2b1ytWtyFSw2dMQp4hyaTutqeR2WmqPpsJg163SXtH8hyTt526eGTsceM3jcUWvUZuPHMzaEVf2hoePUBGdCfGkF",
  "key30": "26dA8FavK1PbT4RMjgfS4eq9uKUJWgFELgrKqopEDXUuaQwQth6wLBeFsNGdnyWBJpYCyNJmNagiNz9UKsJZYHea"
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
