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
    "3LphLEK9vvPbUos4MQojTzL4yxDyYkpgLrAG8FDtYX4hz6mCTsf1XG8U1qTG63rb1DkGr33RqcKbnAxaQDDnZTUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gk53E6gwtRHqf1Ed8EzZLN6MiUki9EYXrD6cCQCMqLE6CoETAyWxzUfJfjpkk8NRi3HondmVTd4x8f7vP8qVAbL",
  "key1": "4noDqCTPp9tDub9iTVEGm9FisjrjsugEH42K8J8tsuwgSnVQtGRR4DF6XAYknnyBBf1ZEJPKuvCfpVQvPz3898i6",
  "key2": "5aC1xjjuDCdhhvqQDSQaXumEkmhQje4JQW4ZtAka4z8NnX5RWcoGZVkvumRvXHXodSzArMfTuZAhvnNf6zFpnLcM",
  "key3": "2G9hkZxV3udpVdGfg9eDNQWJ5ydyMBJTeyEktHUQCcW2deZNg4Q2oK8FDcVK75XJoRSbgnfYqetDfm6PrEpELb7M",
  "key4": "2T1i1Fj1PwUVSKJNrGVHNyPrAjRZgKpNkFw4FinvS6Evf4gqJbLXAvVAuxcLEJ2qx6okCToBPeN9o7W18JpnidzJ",
  "key5": "s1kSJ8mqqH2dnVqj5CVknpYCcEK22L1APN1pNb1YPfMYegDuzadiNi7ku13TcjPg5HCyhCvYYirD4b2mQpQ5Ku4",
  "key6": "4Yc5ap4d2PB6zjZRY6p8EBs2fiA8MqxweJzW3Egv7iaYBLpL1DpsxmFuMUbHbbrXBJmCe7YH6jfMBDbZ9pwpuMs",
  "key7": "2YRUBis5WC5NUabGR2SGSFFD1xgqTvRPJ7bSR2GSKZaZcX3i9NxqZipb7zdWmLqvspk2Z63r36XLgg2SPtCKKVDd",
  "key8": "2YsgMkSNsn773HB3JBz2hK84PvseTRY3bXFJuxbLpx9FLWVNDTGJaFU9yCssBEfffXC8grZQ7VjXerHLz1pYh1Mv",
  "key9": "5VZCVevFdSoaTisfNcXBJxdnYC5gWxHuB89mDzwPTGM1dQyqsMXFkDvgPYGy9aJbFSZYtD3oKZf3WNzrVEVyR1GU",
  "key10": "3Qf6WLYC61FTAgniVuRvYR12fTigAyPx5fZVJiWudafyjfJguY4i6byGkLcKM71SJjmdnzVyUYZNPByimWop6Lmv",
  "key11": "QQXYa2pV4WqSWN4WdhyLngVqM3HxYjWkRtF42ZLrQeNErkYAEKKfm45dKFz3xrN2EwouUr7ZfEHMpULWqcgVWuT",
  "key12": "28PFfHw8z7RbFw715htHD2zwFMtGXSaqErUXQ3cqrpFcqUfXEeDXKyFAq6D1EBnvJWj3BAyo2FSxEvxtPxcALeBa",
  "key13": "4UMfEAUF2EP1TUwmcNUqn6MQScwZSpZNT5vqVbBwuaEkf6d4rFmx9C8rhYAipNgb3s3Vpbi9kfpMRhJfNMr66HM4",
  "key14": "4TaBraSvz2SWofY6SQoq5C7Xr1ydx81tZPaYuH5F9MrkFsZ8UiFAaVFJYmcB46couPgMktKk795pghS24KEfUTvf",
  "key15": "BmkfdG6Y7dGch5esrThRibHDfWMzYrsatZy1GbRSsmZFLWiqhq2eJXjXAoyce3rJMsr12ZDxbL12acFoHu4rX1R",
  "key16": "L6tWuYaPgYQyyLC1jxBMcHYtwoCuJN9RF6MKG7NdN49Cnqo4UBttRSfwM1kHmaS3VuHGvkUdv5BzjQscLXTR35X",
  "key17": "CfjrsqikU9Y67JrnQStMXgBQho5deox7qH5yhqdsh2P1URgZgYL48Wwj1g2w5zkJF8VQLzFmMaL3ZoKPu8PP2mV",
  "key18": "54B8oS51PmSwMHAzkiBfxDpGGJGg2tKuxotVgCcRQNRPHPjbc3eaB3WJLXygLgWL4d2J2SKNeCmL5jDsojhr3TwX",
  "key19": "2xJMLnD6J2fGde11RuvCb9mwj6o5mMHCGwXN4vZiq8nMbubGUqk4HGkzZ47NSQQYGbrWBKA2BtLtwiCLkasjtGAw",
  "key20": "3qucXFsUb9B1bNQCPkktYE95jT5oMFkCwnp5NoEa2ypwn2QKxTgTFsdWziT9xPCsWTeqRJXHkjh4aEL41emHcFMn",
  "key21": "4nnFAxvLg24nuthxxn4g6kYNoxDzU5nCJeTpwqLum2avcaunseg5DiKH5566DNP9hfUvHDv5ow8FEyTBcnFjDVoJ",
  "key22": "4Hv6yQ4BJoNkD7GtSVrjJMDXgRogZVZKWBZYqD9LUQUz7xPZHgn4Shs8NseW1v6T7hAbKuK1xTJBabmMnmQMBT9Y",
  "key23": "3gWWkbBD7gkAPmqhGkSyjFZvGGABpcptddrEV7m5oiTjaQgUzAPZBAVJFYCzifLpjPbdULnWMEStYg2ogoyLJPuN",
  "key24": "49HVvjUQspBZo8ouGyPYM4fE4HPUeKjy7WBXiqT67MFDLZ3qGA9Dd9f2FeY24u8tA1tapA92yKCj6LRqairmvsvq",
  "key25": "4w3k5KYGECeFxF5p2a8vCKML8USmgBmoKo4JaAvmpsyK6wZiowJLqrqZxe1TdJzewxTjPKLSV6TKyoP6KCQWW1n9",
  "key26": "66BU3fWJ8wyXSF7r9TrNDYkt6LLkVVQM7gP9fHPWg4UXubc7cJVy18PNKv4G6FYA1wcwCDPWGsqha8Rc3ddWHBdE",
  "key27": "2s2om3RRpBeBMAYjfEtQNUzgZEztMr3W6f3Gxx933aSZ8WaAfmkg8D8WQEZJRTCuFPDu4LpKVEboPuz1PjiTizrD",
  "key28": "5cie4BpxueTFDfGHrpPf8nvPpanfgoD9wEqc8UMCwg44Zq8ucJo5zSTYfkFPsEbqwyi4TrPtMoDvE9LS2TMF1YUr",
  "key29": "kqoZqRL1pJieuWGbEBhg2gJmyCuxEaFwaRxp7PpE9sjAYbHZQLDX8emXpqGvQAzT7M4Wsmo4iU9G6wX2ZqYSyHB",
  "key30": "5iJ7RcUwWGJ1T4AWtYVAxg4czBnurzXns4Gz4T2Whdy5xfCQABiykV1nsvPUsAPYCgp4sZ9F3ja1iJfpNSqNMz5W"
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
