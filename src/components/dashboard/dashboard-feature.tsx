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
    "58vsTSEo1knXpy2cXWxtYQtJa1TmbxVGRGSjb86dzkqxnuunFxAARS8Qu6auxs6JPuL51Lx6Hk4n2VGi85XtcmqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X54vfbL9YanHdiUfzXYmvJyneqBXfSC3gY4WghoZBWHkn93sMsndFbp9PU8S3E5YrnuXTN4uY9zxa1ghhto31eW",
  "key1": "5prmgR4fhQR6QGxpmfNJqMnJnSa3nqrXUPzSrvntqf7H6k7GyFDdALpzH8k4hvMT4mgaEYPryBBcEr6FTrYBhsLn",
  "key2": "QMerXXXaTNUXvEAmmBTQdrtPSTTcWLJfPy7aJzPXgcn6odeksjBNv6Zdm2tCEJKrz6aA1D1DEmASaVgf1gA89Z2",
  "key3": "4rUkSW2cUtqBN7N9a1dQ9XepqS8BZC3QkeMJnEvDwW6JGDQZPkDwesNjaLAu8Mh5moLLZPJakyUvvioqDKXUZ4WZ",
  "key4": "4MtWjfTZHnzBeBizRthhj35iP7BA6BfzGiinMz6sPSTPUSahSSt9GM9QNPumMSZybGTWexEUaZsvLjYHsFkFeJh1",
  "key5": "3KidwXCvB9oGcTSm6TJvRnEPtgJSMYzBc3oYJVAFaeqUzJCmvP85arWZSgQjDDetobGVCKGxCskvrjhhrncVWfAG",
  "key6": "RkUDtFZW1v2XYEEaPSGzkfjnzTusZN1vDRZ3zFPxpacCfGjnQ3VDPktdS2KJjFpVmbsn8bX56muRAn9rixKsrNk",
  "key7": "LToVyeCeB9oP4W47L9izm3TFcmrXT9xmFf7zG1HjK1hSDucgcXYwf2rhencbuRkYdKzuviDGvnKaw8vQTy6ioVq",
  "key8": "5eueKnurc65yDbzA9xpbCtC8HD6MQ5zisuH7LXvSpLsQx1nUZNno3qZPjVbDH6kycwAF7zqawLPGZT42AwgJ5Z8z",
  "key9": "Jy8KcabPMxWABpPULqNAKidUPYfdJFgwBdU46LiihukRuNseGVpvyetXLjBCS76PjSRqrsMEpugkLgVQnGr899c",
  "key10": "5PR3e9AyggzmEUe2C61YbBHjw8aU9dzZLqZNnjgmbJkrUDmcRRaAb9KxPHy3a4SAEyvbtjLytqShDC9rh2jba7Rg",
  "key11": "3MAdFgMZTw3v75gWuhdVTQqW75ym2MWA7eZLa7mpHtSd3niecUNsxLeZoX8eioER9yhT1qFPMvaP5kbUN15L9z7P",
  "key12": "44RjU9UqSQXSDTdHdUQqDMp6v9NucWAby2dW4DQgNYwf344aF6iQNhntkAAgfJsWe6cxZZNFALgaUiFGstV8snJK",
  "key13": "4wentScDGet6c4bcsHxXkP9MfZsJFerzfwhvCww8ADHvWyqTbE3J5XWog9oE2WU4Dc6MLxvNd17j8Q2Kar7qzyQd",
  "key14": "4wYC3xFBjTgshuNLUpwd8GBU1cdMfXmPyyggh3FrepvmXqeE3YXdao8NjTNEFLFnaBRj2y3qQf7tWJggTNjX5WnU",
  "key15": "3Qp77nbtcpQ8MimNrkb7KQr6VPzdsUVXBV4jcfLHvMV8EHkHVcCmfnqBXrr6HSDRnywFyuZgqC88XK2LRtPZsR1P",
  "key16": "2YX69quBUQftaNMysAhw2z53XmqwGg3BRcQ7wTtrufimZzD4paHMNNUoHWnPcGYuqnPRhxaSaH9kDUhcn2QGEtUx",
  "key17": "2AWEHAsgvBGbnXbx67MyZKqEH9QhD83mYAviAUoCxbNnjwaiKHna7TwPMHXQvLyHexVxeUZTQBy3DwV8Xcqqyrf2",
  "key18": "3vFs5cAo5LhrpMY7uBYk8UcP6rV3oyYR4yCdutFPXoQuHUqDAP7UwqE72FVBTdt3JmTeiCnxtP7i7urDyoCUj1cD",
  "key19": "5sLWEDeQ7aR1PcBsKdJjHSRSQ1v68HbwDAspANQf7BsSunUGdT6JGjfpTWkDHpd4utc9iwy5tYyN8L2iT33YA1Nw",
  "key20": "5sXz2FnqA5A7UJ1hrHdTNh4aHNFxhc3FkCv5UMJmhWF3VF8WJQzfUtoXsUok7W7DivLatKG6qAB2ZkiTg7FTzJpE",
  "key21": "2gNfwLcSrYKc6CAkxD2MKrhF4wtCAfcRDR47VdkVL8WofzGSY9po6oFgzqzjZFp9dxa9L5JBGoFA1eHVc1W7USBi",
  "key22": "2LdnXfdbwduDfFnsMGWYJ69SjtMC4jUf2CCFgihyaJdPP8f6RcCy5NPhnxYnme1jnijf9HzK1J2AeWtbBo35Dgoj",
  "key23": "5sEuLyRXuz9RfXu5ynCDaDaAgJZPbkGgeJSpeVfPQqKHzhB47sin9G8JFv46xf98iX1ao7Z1QmV3fQuJS5YysEUC",
  "key24": "32f86jHtcppeFW7VgGqTeMV5DksnRqjXd6BGK2gVqQ84XcrNNE9o9PMxAcQQAn3tXwyez6bn8CJ4P5dA5a3APwny"
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
