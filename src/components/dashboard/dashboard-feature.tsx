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
    "6JYryzHLdBP7VGgHtnQAGN6Zytkag6DZXzAbu3Zqx6CAyn9nwMmAaxcfLUMjijQV3fDgdsH31r39nRVSXDpP7B7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sahia8tYT9V4FuMUPntVHt2apE9fnpQqD2eqWs5wVCzDTFUryd5o1DnFbEsAG2YGxg7pViPNMo6U1he3kWjkXUW",
  "key1": "4a1YahiESeKMbnLXY4uH49vwp6CCwtW1wMRHzTQkDvYnnQQrWP5vEA9hNXikeLxktKL3UViiTNLxtmV2YJruzE85",
  "key2": "4APVWCBcZ1N7RG1dBbCyg2X8YzyoW8U5SBiBGJB9ow7SndveVUQK6Fo7GWxM8PNpH6xitjvrkK1y2Y5PeTCgW5xY",
  "key3": "53wApTMmcUBj5esWjfWZzB9JA1Rcm1Ewz2gbzCbYwbJEcbtDCSzdC9y9F529hEmsATNAD3vW8v7c8eYrLtnCChg9",
  "key4": "mTrQM3R17ZK9ocwhQDtQSr1kjQVEUGEsukicU2q7mCZUEjcznt7g1sL2vwatAfuqka4ZaozH36LccserEXxmuFy",
  "key5": "2h4tSjhiXqQvkeGXcPjWvDk7u22CfPJrVyBMMdZfUxrVq2iQMSrVtQgn4U4MBMJadaZqQ5hRr2yddi5o8NLWyWcx",
  "key6": "3cEi4SRmpwhTFNpqXaewznADawhoLHavjexRMkpgQMHwKGBoQXt8FttwQ4uWBrwiLRTr7WFi37SZvxt6tzqZKJVP",
  "key7": "4XC8J6E8KKWnkGctrppYzmJiuuLzudTFbHJ5R47Y6YvdD54GwoQ6Upu8drLSoopHT2yEQg7yeyveAW5zVrxH4Q6L",
  "key8": "4GKb9AfzJx1vS6AqcePW3LV2YsgKfCMCprtCSnfTQ6JtkuQYCMUikLuqwMcUWW2yELAZEfXCpMBvw38zZQtzvsDy",
  "key9": "2n6bG6DUz8mcv32RXhT4gA9FTCH7aYcJYDPZixhHPQ7f8zYsuJnWdeGmMP4aD8dKhFXvP5cNjcGYJ2iJcSHHufXw",
  "key10": "55ZtRTFgobyJrTu3FMEo5ffG3FDn27NiuXqtSDDJ5oLWDBD7ZSz3aQvc1nDEFMmnjKQcDHY2rJbc6WhcjRbSGHtw",
  "key11": "5awnHUUHHHrhDhxJdsnUoR56b7AVboMMukHBZRuA2rs4v3gp5vjcKQhhPbRQfbVjpGXpVzrH2EfCTanEZKmPKUit",
  "key12": "2YLFJG5JmyQXwQc59mSeepLjcpYBnGYyQCqrxrqfGAQxNqKq37yxZ3kus4hDvfx1dLC7xPKYDj8RpjUCCAQk1Qsq",
  "key13": "5WGW4SuVYPStH9XPR8DjWF1S1j4Ub91NDmqXRYNApTZCABC8qjwmCMpMN5VfhN9xtfoowkhbZyke1MkyQXd6nhFb",
  "key14": "4aMHg8RP9aHZJqYCJQkmjq55SoCTnMp6yDTwqsS3NHhTVmxGvA9zqrWBZH98ruw1RBV56BjFJg5JQRzbVFMTwc1x",
  "key15": "3Lo6q1RRL1WiWNZ8tsReFJnypSQRXEGawoecSpkG71YnBXzDKvGGGAYgYFhPJvvycskrxX7vUUPv4VmdYV9Decku",
  "key16": "yfpa32rtgjvuMon2UDRJGauV12wZMV8PNRvHwgoM6d9QNkNKtxh7Pvpp1shTP7D4N1gYMXmS7LDaXJvATMdF3cq",
  "key17": "2zKP5se4ssVeKudqzDYZin3w97fUwCbMQGCwfexQWys213hRDaFHKYmY6xPUbWBRA9wEJ7ogwcJSGRVMVaD27Yv",
  "key18": "32VmrfH4MDQTCYAJB4e2teE47626yVob7nhdNP2a1Mt6byKmVR3rtRgpJLK6mvc3iw9EYwJq9RPAzv1CWxJQ9xaY",
  "key19": "HUuGgu8pcrZSJwh3J1kvLLkp6fKXgzW4GurHUr2BoBiTuNtwNXzVZZxw9qBGDvDkF3LcbqoGT8ato7ERN5hLNzH",
  "key20": "32G9E5S5DBrJ1JnHTssoPTptrFidkmNTYbRmAAxvPGq6dtLs85PfjajXuSxDoUbdYHG7qFE8beECRDAHqT2AxzXS",
  "key21": "358Fs8bNLe9iXQdmqc6cMDY3MvMLuwNuoTAVhUN6VZYf5VRHRZBf2TyYd92QbnKqfKWDeFRQgediEc8qeD2xWfXF",
  "key22": "5KQ4DqxjGCGsDfez7nkpdS9fNTSS5ypyUeP3rVAUkAKJVgjKydqcRXtEKKTM5H4LdZbLnrCXyoErpEJjrD2zYvG",
  "key23": "3PebXW2SuDM5i2vZxua42RbLYwmqbxN6XfXp6RYBCut1HV13y5tqM9NmfZxWJrVdtZZte8VEsFAippbMk3WkZJvr",
  "key24": "3uZeuWCq4kH56j3T22AEe45GGdtHdjKcPTGTnz1L2HWFnhtSWb2ExG6pzKP25hoYpq1im2GWn8LKr1cV2sMM4f11",
  "key25": "422GGHrD7cU7hihEpvypBy4w2wZPZst6Vi1x31PCATj2V1HpZDrK4LKTbSdVMsyFGioUFsnq33qEHzFcN1Qqzg91",
  "key26": "34Rv7eD8h35nNwhuztqL8BVmbq2mRuURitqdmvab1gfXAQdpiQdSwMv8hAnMeA5yaN9ia1Tg6EGSFkXJMkjPiPaU",
  "key27": "65wrnV5cssEYrnHV9RaRqrWixUo5kjSNhguP4maoEVsGCPCpuanCEwL9ebhQSVLR72HDVRLpnkq47S46a6XgUawh"
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
