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
    "3Z4Uy7PRrhB8QrSiQ7kz6yFGDjn6NRaQmNgzhDw1xZuE8X7PhmweCbp1wz1oozi1CbqwNsjh1kk72uXShzodsqwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PaXxUW863Me7Rn423yYcReSoDqQqMyCxmUS8utqy96Xt8TLtpVrotwSz7rjz5u3dnB3JBF4DgNaMrfanKFvEGrx",
  "key1": "4MWLDmbjquLi79ycwjkyWbw8QmYWa4DRbGgqbYmmuaBLwVFJ5L3AQVz4wWXoeDL4fFKQxR1Ugk5QFCNX2mYterTF",
  "key2": "bDf6xdGsepJQYuYETXcrWWL1kbHYsSExoyddQ2nLm7KZxwio8TxyH6mJVzoJipfSz62M1nELpKrLEg8dRdo6syT",
  "key3": "4K1i3Q1zA2QYvp5i4gR7ZZW9T55CrzPFfB5MxF2N5ZZCLCrCj89h6PdZawXgQRBQYM7AqXKESVxdj6kVkg82J8Zs",
  "key4": "5qGimq7i5iDxics4VtHq9AdWVrZjSuD1pqEAD8TRxLdvR7WnJoZr8TbpFoUUwoT4XX4nPXqaj9fXdUcpWVP21egE",
  "key5": "2AHtqtnUk2k3Sa238KqJmEUPXF9nnzMC4FEQgHZb9P1hLZvsYdSiZErTHpovrHGMdAdhUoesSo46eZqsq8JDb84S",
  "key6": "2qu53pFGQVYTJVuhztGubqFvG4JjEbMGWuvUtRd6H7XoKnupF5jh92a6NzkVZ25pd6TrTgJWKDwtgCXrHedqKQT8",
  "key7": "FNyG1JHcYVRGEaRrfnvxpL61tHtNY12RiEHzqnx93jAZjkJFqpWrmuVrZJFgC63RQVKLRrmwnxHZN7f3Rp3PxcG",
  "key8": "1G53AnkYFurcBr32RTVSGb7msfFutExgNBvyRGxpBQmvS9Ah9rnXyWv2rjUaVCiZD7tWV1oPNSdpM1UiAPZvrTh",
  "key9": "HQs5pUZA3aaSwYJbwQUvMttLUHdZKWTyUiBHjwNmVLuoP3DCEf1coKkg81z8UpeAHewVz9YtaNDbtjtJpB7uRGJ",
  "key10": "5zEgF6BiqPcSFKh2SbXPwo7qkhzeJF2YVhJXr4dEw35v6hJmxzxgWXYBFZKQyLjYbR4DpjxdD9v7LhcXESJpBBJS",
  "key11": "47TNaYzVwrzfywZHPxyA2qyCWNSGKyedQgsjVoQ9QAvCFJ6SYAfwdz3c8anadM1NNLLc35QJRDSAULZs5a8a5qcA",
  "key12": "2m4jQvHHNfbXjTDWVuKMBzaJHqzFEwbxi3nnCeC4pGpymRNfGbaAvTCauX7vvuxkwNohsqNDmp6yE8Lp3GUgm41t",
  "key13": "2BkJb8Gq6QKgzhToRGWEcC7JdcP31EQhXpxgP6h3pfBCt6w1fhmXcT1Xdr9uA7Ua1cPy2YmXJTBEEJPDwcJ2fXeV",
  "key14": "muCHB4UHDfC4fQ6DFc3hB8pJM4U4AjihbRxU9bQfZZKayz64kmr5LxgAHRZ2HgfWUoPHr626PMupVsxPG7CyrzS",
  "key15": "2nsDyRPMYeHxgNpTLzTSkYrjcMAsCSKtKJS1PRkSnXJSXpEseVicdNcpXFkGDujbdsSvDQd5h3LdqCJEyUNjrfY2",
  "key16": "RJR1votXRYjqtsGiNoLkYGTGf35cCf1Cd7tHguFmMQ1AxGJaTUszrXxvHmUxzQZv79KKEM5D3dxwDjYAYAjwJ4d",
  "key17": "5F5cBPJXCd7uK7NzpmraKCoiTqLgC7UFTyVvnjPmkkysSS3u2p8d9iJ6vREGwqCcNBByn9NfpbhZcq8U6ErdgkiD",
  "key18": "4ZiFPoETVbtaVquGvoq6ggcFndzAPoVAva59x9xYWRFfTD66tSQ5FCCL2ve1Q91Y9VpCwiEMACKw2QRpsMJtmDih",
  "key19": "3fz3VbtWcyGipgqgms4TCftNXWYsPFurhsex1J7Z39kxtAMz4ZgZ38cZPVfVnx7Qjv4q71Lttas2p3yHfgyfZvc7",
  "key20": "4xwSKKFKx2YMnjorSz7zf5RaaeNRtTYiTUXEHHv9w6R1TYE7pG5gbUgrPm6EuMJVfhw6PybbFy5ZDsMLFtZXPNR3",
  "key21": "45294Vu2eQ8hWCckwfxCjjjAMrtNDxMgeKJ2pU3MsFnnCd82mxjtGqp4Lp6GS92HzWdYgudEZjgzZD4QyHBK79kD",
  "key22": "4sDMQFQ7pj2eRzEEfchwzkmo2SGv62MyxrA4HVYeC5zJzBGwcwEmw2NT6M2BStXGs34uG5vF6T7qRXxmf3LfjNHA",
  "key23": "2NYeQ6V16Gqf6dmoMEkTVCP2hMXXzW41yz7hQ2j3JdNv5rsgQZH3RkjrW6bDNeo3v5rfmNZaPDinXnf3ob8C1kE7",
  "key24": "538aKk3T6SUe8X7zsBoSyPgFkkVKSj1XGgV9KygFm1WvtLRbeSgEk3qAgg13n7DxzhapZ1Z3B5sYzSJcpY9DLrG3",
  "key25": "5p7M66cCy8Uf2waDQaqL75QACd1q6amMXqYMpfZUks1fPyu8TRLBANkWzWPEtqHMzKN7KVArZnPPefX7r9XtuPQa",
  "key26": "vSci5P8hYWKoioJ4n1gGavSZ6EBxBpHcfF6yXzPQkMW2Qvv5G1WQ69VUTaacsQphAe7wL8MJ14MDuqKc5X1QGwT",
  "key27": "Xh7JdRxEXv2dFjQvtWMuchAQKPFjCy3CDGvqjw68Pmu47Gq1dyEbioGik6iBVvM6LsVdt9cjUaaR2J76JZacvAX"
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
