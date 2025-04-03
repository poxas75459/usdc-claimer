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
    "4rPZHPwiV1BKYkL74yU6ipkeyQPChus9YkKA21aY4SXJDr45JWRTgSAWc5qxEBZfxqFByAGRSAcbpjkHy75RLUd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AfMYJXjqwiyNnSBmd2sk4gxt6K1JmoVF3dJJrR2kXKrRDKpCFB1WWKmPJ3VTzf7aqGGLHdYAHRcuTUVvvFXSJ9u",
  "key1": "5p89RugEg5QJqeRaDtBkEgNvRJZoACjppRpvTPHmqhDf1pk9KzszSaKRgJAPnmyBCYgGLsDBb727txbyeEHKffoV",
  "key2": "4RuqGBFRZzrX861AHDnGzgPHNFgL8XfE6CYJb91mubU8oyMRF13bjgxwxPad6dXNeskCytCLSnFN5sGcszp9i6Eg",
  "key3": "S4zuAj4NDGwJTRMiaNthVv71RjXaKwntBQ5jZe8Rsp65YvjAkDCsmZ6UWPDfD77QgqpmvKJ1t37qAnE7ftnmGuq",
  "key4": "4fj4Xc4JrLN6fvy3WPnFDXqZ8eKjPBEVEvXSqw33RoXe99PauLDGZg1m5ztfPHxuMfM5kfrAaAWPRECbqnqjEmAf",
  "key5": "3NrusuTNC2yUyzcy3ogY4NekvuVnkcSTagbQEhUySXwdD7kBkedva26TUjCuGL1qE6WoJPuyQgzFp7yxSUbVcF6r",
  "key6": "kRQiv4PZagkTbfjCmRtZQiRdS49BkzpiSRH4XnRnQZizCkM4KNdnwkfzVsFMttSRXzs7grByjaCoSPA8twHriBs",
  "key7": "2hLvdrSc4gEmRVDKSVmEjfC6ng5GAsKYvLhYk9rhzPYDt4XstSnVFwU5YgiQtRzdwf3YxHVhCJcHq1xQGXjU2pzv",
  "key8": "4N37L56DPoWnQ3EZEwXnbq6H2cUz3TBJu35FfH6yhvGSEXX6oTmETSjWfiKoQyTTxNJQJTcBVpPNcsrNLyPNUDE5",
  "key9": "XBfFam6k279Ymiq987DGVaW2uFFoGqDf5NdPr67P1SjGY6GQQvNC1VLSXkhoSo679r3hDhaEst6oShHy2BRxmb5",
  "key10": "1vsiNWzjXS6Zv9bYVJBDGPFvZ3KuSYvGsrYPePJEApVvZCPts9oUtjJjdFNVAA6cdbywuHXKfn6RLwipN3HCmha",
  "key11": "kKfTn4HJubopEP3RnnExDdRvTiCnSb8rHc2M2fd5i8h3CE5VkcuLJNpM6uEYjnaTPomL6uvqG3wJ8eCDEU2uXVg",
  "key12": "2RkwDGXmpbj3qhBLCSsVCXEPyaZ43n8enYdgQK22BGrBHKceCER1jc47eTrjASgGCLqe9EcCeNyeXTSdmLuyuX1t",
  "key13": "TWF3FQRQCnkAgqBYTvB77nUqzL2uKjiNnuzq4vsYLvkjyM9fU7CSsEsW4DX56hSwUY9joYaDmQ5btaQj3s9gQDp",
  "key14": "5ZtTRFyjPHaANBx96tVgPJyJHFLXUPEdTqoP46BaBPDm83e9wvHXpvtWiZUf9kUgqvQ6a7vTvgGvuewgfNW5JwfQ",
  "key15": "4ptsGbcD1S2iNj6qzm8GHEbmc6yG2Gr7okcP2PiBaKwTPGyZvzFuur4oLC6S9PcGmeYYq7KdjqRjktprWmJ59Tez",
  "key16": "46XwKmagRbmwaDTTnp8hFRovxmRdXJNw2GnyZRVmsShJBVJNECUsSNAX6fBkptuxmGK2EeQ4iQCXS8CywaE68tKB",
  "key17": "Dr4PPn5nJHkLL8gqDjJsbBBEXxvBp8mK2Qg1uSqCcok94ZEfCGXPQTRmwgcE4mE2ZMd1CX9GtFtZtMdjLkJWB2L",
  "key18": "WkjYtkyxajDebDpiku7JWLPyeZPKvVRf5nAtUKPjf4JREViwsZJV87AwzsvUaDPMC4PKe81KxoprVT2UE2Lk6Er",
  "key19": "5dwdB9eP87rpzQ8Vv3XJC2Q6VJbteHSz78VXTb61bG8AAe8J7zwXU4yBYqo7pAuYPSNBhZvWxLTptCiiY2Z1Nn1Q",
  "key20": "41nZeKFZ1WbcCZoc9co6LAtavezhndk8MCK2Suykg5XJpDAv6bnJGnxcKkcecKEL69W4vCSnubgxdZehQtniiNiY",
  "key21": "4M8wdvQqQcSgYJ43sGuXGfB2V6wtuyKx61ue7dyjdqAzsK9eE8ajz62Qip4fyYN9GJ2xbwbfKGG43wLTJpiooQxi",
  "key22": "36Gk3bG89BwbN1nuuUXUqhWVHKmU4og7cS1FVyJfhManyQnAQyb3aoGeQXdTSzKMuwNNZFveTshR4hLaUkNo46uo",
  "key23": "2zA5ndEiv3Tnocf1drbsqu9buBjUhBwKwphRVqqcJQjm3U7Y291oAnCdJoLEcqN3kDVCycojZKc2jL4KoVFbZiKE",
  "key24": "ngNLY8KVKJSzLZ5GhFiAHx2Q7suKyXPorfLTvu2eFQ5Z92CMQ71yrrdK9yC2P5UiwM5WbmJrnoWof1TeDqj1SjG",
  "key25": "3jhPyrMTDFwdzAq1SrwiiUm9eRNoAZt6kagyzM8hcwmRX9vi2aSA7yrDWtmSCWbTP3m1oN8bQPH8Et7DXbK7A1w3"
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
