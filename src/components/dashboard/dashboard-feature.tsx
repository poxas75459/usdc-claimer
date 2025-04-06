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
    "615xPypZE7fBmFjuo41eswdph1CQ38zaY8TPE8FsUL3idaAhtLrNwjLgbU4JPWdD2MvJt1iCFY291YokTpsSCVhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZjdHhXUXf4T9dLuQc5oz5qbyrUUrmJuRvVcSHY4Fr1Db4TewA5igJJwQ43E1vHQWFSUF8AopL57G6vkK81tiJg",
  "key1": "5oT71tdbgehZz6xUeVx6KyZb6BghxcdbAUZvKjbdFYi7FZQcq4YGhNYsoRLCN7VYSsM1sk62NHBBDz58ueWppW6B",
  "key2": "4DL8CMzFcG8JXvRYm98n7gZ5HbTRFZn6vkQy5XUwsDugHHfCd9EMhQQ1hjHcMmCJijnFxWfENvzESLiEqi8hjcRp",
  "key3": "4rHUJZPRu1gVWMyqBRtoxscdqLNT1nYMKewAG6X6vHLjNdJR5mQEmNm2rJpJzM46SNvYbEVRKm6nmn4g7LkFUbAu",
  "key4": "FugHcJ1byjL4dMGBgybpWasiYoxXqkvhBEQW8XgrPFdZTniuRn96MmPNeCnx72uWZXVezEUjNA4t1YMJZMQNF35",
  "key5": "2ZrnqcDmdvdftYxYv3rNgsxoSVxPmT5vLKGJu1WFc5mBEEsbp4jCsxmbPV5nLmXXbqPhS5zV1dATCdkcaB9HfEhH",
  "key6": "2yAWGzys1GtzFdvYMX16vQvQQMVyidPbZx6pqejvgGAGdi43BUXN87YpQgi11odLS24RWZL1jGwatdQbjRDWrtXg",
  "key7": "2DK3JVaD52htSyP5YMMatTT758U1oorFKwQEc3WT7m6KXscqo5XYJtzfcxBE7TMxT8C8SNkjCfuJFMuiKbQi1bzk",
  "key8": "44zbDPQjYnA6uAAB6JJXEQ1W5kghvwFGzEisDipu7FfqGhtJwHGcSRtNxzsWrh3avGFj9ut2M79E3JWxnWombDyt",
  "key9": "4wcXfKgrqNU1xTNE4XKgHHbUVb78Y8omhmFdVqCswZPeMRw66qaTSSnA2tYXcFq9DUsCQdkWsjkKdSmPpGfACcht",
  "key10": "2d4aPPR77NszCJW4n2uVandyMSqXfsYwENXdqDQdeG61DBBB6mNYAK8TRUSQeeMJA1ug2nXsZAcHtyjD1CfGrSK2",
  "key11": "22LZ1rNphYKioQsSsXssCmBxdfJ5b9n8bTCzTrhi8HckxjKWscTPTxpQrNc1DM4Fb9KayVf8NmV1ikyeEiYq7pgW",
  "key12": "2nHi7yJb8ixKPqoUwUDKQLG8obK1hUC9FWmU3rX7yq1tXLrCjbTMY5iNE7v8NfPs9gkpEXVw3bmm2nzs1wXFMzuj",
  "key13": "4dsKBcfp2BGRQcHEJxioSe6s9ePrf4ioXM9PPhMBraMsq33jqpVaGC5rnKihfE8um3p2DoEZJyibTxAvFmVYJT7F",
  "key14": "2xyWb3idmLRhcpg2QV4WVG2B5anVijCzqvUFYg1bvoB7N5LAZyUVVBWPeejteL3T6WUZ6qBdwZvAQ9QmwG8pU4E3",
  "key15": "5VHnnqpPqjsjT2j8nPL9UDnivEjGShjsDPbSeDZosFTX6VxrUhLRWYgEXaPuUGQM3uF6N2UwD7zbW7YaKBYGA6u7",
  "key16": "4uXqcGGtEcEFuCSvW5wQWJhTooSCVWsaKg1AsQTN3VwokgRa9wcTQ6Uup94raaeE1HC38hLKBTJvEWXnvg3TxESh",
  "key17": "5cRuQ7mmhrRT4Lo8YBR67CPTG6PYSz3GmdE9mPYNdxJyJZwSsrxajS9CgECqDt8QpFaMa4xmMSbPQugkmoKN5TWw",
  "key18": "3QankuxJBpKeZzv6vsZau7dtnDUKgGePT5m4GJtdER7kErH4h7ZhbwyMMzVfXrz6vKwWnixsqRSwi12bqVEsZxZx",
  "key19": "4JQht4yP8qvn3LPSVht683GDiyjURxHMQnKPJPT1JdrKhHYutyfG4Fs4pdNxdnqd3w4t9k2ZbX5DuDrtqsaVQGPh",
  "key20": "4A619pNJrAoMXkwbg4LVRWvkQCveXzvXSiC5RqBLaVhp8UDCwcRdSNdExzTNCxE9XSg1bna5ctf3Nry24qGmMJAe",
  "key21": "3bGBT9ijEnnrBCrhn3ytWtK18myTyhgAiS8FgnSM7aezvHmu8qziKGp7oerecSe4dDniJ9BiheFCbse55gMQEDn4",
  "key22": "4kSZkAvfGpNNWkbq7117EjUS1166iQdrmucE4Bayx6dKBKa7gsEG1ogfa45ygiFGjaPzEKQuVPSzkGEVmqgM4gF7",
  "key23": "2LdjwSebFySEnnSsTGDRHzYnE541ykGujhQN1p5ja9EpqArJXYAop3tCB28WWuDi5rBLL3oFTqp4UhFYdaE7QRrb",
  "key24": "5uHVLo3Qf9V6SZBcXMLSTBh4HKz956YfnP7viYbWWo1LpcG1EGGKAu9ru7nr6Agaon7j45NyQfxS7rGA2R5Y83mo",
  "key25": "2cgxA8dTQnkvZ7Y18N2o4QRydxiE3cRRHPEZyMeUde3vAay73LyE1tfSPFXutwsSoW78QvJ2uG47iKXVLhRBgzUG",
  "key26": "5infEim71ySLaE4Bx6aQhtAmPCnLsr7x1GfVupbP4RLjpBQX9bhHwgMFfBZZ7zhgsggTFcniS4gtziodkybc8f19",
  "key27": "4CqMueFDvrkW3Qd1rx1G7p2s2R1ssTXf8EB2B4XQunmDW6fRcHZz4K7XnvZ76RVvR6ZKftEsSzNVCBaTHMKbrtsu"
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
