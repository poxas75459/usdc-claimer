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
    "3oPPDmT1w8C7gizYaSDgHbY1hkP3fFHaFCs4U5YYYGi2PJK39rJfwoBF9M44ftNDDDT27hNfAkw4nZUyHgHctsHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xkz4UqbGRWy5muYG3hBBHtj33Ro6iUxet2cgrrEtZoNiPYXqMW6CtPaLJF2iVpA6pUhUJdMAtjFF642PhyWGbC5",
  "key1": "42EiDBG9smynfdxRZ4TMfoaJ3afkSuZvkXCBJXsNTQUBqvt6E6zEof16SmxbntjGaX2mTZ1LsyGPLwsHKAwFUTSx",
  "key2": "zANQabrfTYrbDqc5BDA2u9efhKc1CQCdQDsTZ9qXEoEVQX9nmPMf6KeUcdmRdcViPT7f3QGW7qt3Vt6RPjUtiEy",
  "key3": "4eL72fxoCzsw8fCpydiZx7Cp9ERc1JTy7L491KcPYKJyEwLm5adSzeoyoTRBD8X6dMSSsQw582djUoNGSAaLfC61",
  "key4": "DmCp8gbNTRBZHhF1TXVenyufqrWSFqDPv1EM8d3QQS7U66syeNCCo3479Y3vPUNnmJa6cF5sCwKLmMvqbtNQkzs",
  "key5": "e5see9j57FNZkuuwvfYCGjk3vFMLdQWBRvth6iKNgwxNCChBS7JNiMYydNGxtWNWrXb8pVxRmbU7Lsh8CbtudNE",
  "key6": "3ShYQfHpkzQjjoo6F177UozNK9LwnVDYAMfpW9VsoNN5zwfwUyRQmkjjxqhiF4rkguFuCevzHJCQF4yYSEugghVs",
  "key7": "4QjP5X5wTinhgALf1KLRDZyHmtJcqSVL7YQLXCFx47VBjkceB31Tz8Adbzfm94oKMbsKtuKaLw9EycRPYY9RGhmJ",
  "key8": "4w2dEHdvK55QwcU1x1bThYpXcPZArw9aUq9PWCivz2EToHMhfwz6T1QAhp5L1usxV5PoBFwre2uKMvJ6jyTMH9Nz",
  "key9": "2gs5P5uCX69oRgwVxzena8UKcwjUeLMCEGYRHjiBG2Zouk74QkKCWA39dMpB1B6nRQkBtWsHkYf1TqbxNbYzTNKf",
  "key10": "RmZ48m9tFisXHkL1ENpJgrgqxUniHb5xfV1KuKewrC6fGPnp3HjXPZ3CPeYGqWM6vP79Yz5uWADVc1oXCcQxAeQ",
  "key11": "2GQ2zGvJHVLR7FS7woNPQcskPrk8qJE6oBZXq94ivXk585bm45RrQnRk2Evd44CPT7jNAtQfJoN4ouZNBd4zxPKk",
  "key12": "3jLmif7HLBpcWuDb9BLzJhLRaMhiiaKewF92MTYxmPobKLobw79jqbicE3rwPS3NVEoTrG8Ljkcgsjqt9T1ACnXf",
  "key13": "2PLMJJTCVBZ4WwP2w8XTBVv4aK1vYs2W4mMWam83vDHtzrECGWaws7YaL9mfwbqamEzS9eTiGThdJYFfPyFu2Fcp",
  "key14": "3vMhbaFvtVfRVqhwAvm9EJ6vVLdPS3jrFLi2azBeebL6iRtG9GANNDAonSHKY1aRj2Rbo6vUTaRALvRdLz2i5Dhe",
  "key15": "oEv6XpvYPcv2uH4vzryGpSfuFvGnHbv1iaqCwRXFKZerv75w1hzxdoU6nAbKqd9VLHHy962kgVa7KDveGfJ6ADr",
  "key16": "nR2c5mVSJqc3dkCy26EKfLETQyevUQTUecdTxQ6y6ScY81BjPPb84sQiFjVXjyHAvKPed3mLQXKme2Zt5VTk9Wr",
  "key17": "a7jzTU3eqMwNyLd7qdvLfJo669RTDvKiWvKRmwNGCnpa2x8eUfo7WXkUZC5rNu2zd2j1pHW1PonAo9LAviZkFYX",
  "key18": "39o63f2Vz8WaZAnnTutYRQuKCceFY2tzeA82ZVN3vXNVVmDXGMTWDS1MsqwmvvmXMzC54fc7qAJoAbuAYEC3T7Kv",
  "key19": "5yDxR32UVCDpHawL9v2ooEkW7yNGSJgqoFqM71ooUaNDixjjaRfYL1SuSsX7iYkkzjnMdNJosKcVF3hNF8NiA8nK",
  "key20": "3nytrwEvTD9Wcgkc2SAAJ3C4t6YdC5oSAo5N4HjUD9p11rgoQ7H7fjtkFxzuULBCh6kuawKfMRfpWqYt9dT4UZ6x",
  "key21": "3KP9n3sgZbAG8w7psuNQSpGH4pBXaxKCerrwfKhia5ZYysSAze1EAWUvzYGs1xL9Ytexb7m1pXTFqhzaL1DKSNda",
  "key22": "47ypvGqpPHtagvatjcwECws8NE7XbdUoUAieeuDLjfUvN9RtmDCCy6qJ5GHb7CyNn85YGwLVBeUJVkdEicnbyqq8",
  "key23": "4fzN1XPTn8zZyVZNe2M4KPmh3GSgZgkasYtS9tELbnUguSWgmjTPmUiFQNminPXTXWauyjw7eD3dghB976iSjEC4",
  "key24": "5DrKoHj8HHWkTEkZV97VdMdMBcLYYiAnYzjwXsy1D8jaHAG5jo7GgMfmpherm6ESv9V28WWXn7HJmV1kWtK2sqdN",
  "key25": "4BbJk8rKbpbQiVTzkhjGDWQoeBnJn3A7uZjVfTAZtJch5bU1kMjAA1MSZTrVQoyVZNcEbPx9dv96tLegNscqSub2",
  "key26": "oBBreKjDHKt2mVWR6RHH8qGVdRSMbF4qha1cRTEeMDBCj9tk1TvfwEV897Vjcv2yWaHvvx7Rg7fg7M5t12rixk9",
  "key27": "49wRcif78nrfNNqutUX1MFjumLsSmE4x3avyJgvrU3x473Wdr3JVgzbLqiFL5sKPRfrDFrUKXGU7YW4jN68goMDs",
  "key28": "Bc3y46YqhPqEYFV3HEk2u3UEreEHsajXyMjZEih3Q3ry5kP7AVbNEXnM25DxC8E51aQkZeabaWdgk47smL4jqdH",
  "key29": "4DspqTV6TktoPPkSc7pB5yv63U5Ur7jmfFXxfbugai8UhSQfooMqfYLPvUy1xB8tSzA9Nw5c64eZ5XQBoAm12cF5",
  "key30": "2VNePkdy85agzQMBwG6ocL2uMQQLFSf6xyfXGbqXL4iz4YYd9zFFAT3YKoqnusi9QQEjGa82rS5tX9DB97tsHd2y"
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
