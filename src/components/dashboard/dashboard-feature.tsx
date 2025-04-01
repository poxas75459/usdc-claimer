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
    "4Pum9BTk2Q95RMsDS6BAvyYJFGw3FgCK7kbYztpbJpq4C6cN5VTzcaJrPah5A9hJwQ75PXKWLBTgWA5Xr3Jvvaww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSgaK6jrNzMTdcNwuzYQwwJyr8miCCjb4JMrJomyM3NtA5CPrkhqScSbG4d3ykX1Jtp5yZLhLw7fBUd6ontS8XN",
  "key1": "5Kff135uqmtiGjmYHxztkgfGjT61kDA3Y1uFmu4oJZn2oRJMrPMfKofUcTqTSU1kLGKPaCHBZ9cMGpn21YqPveyG",
  "key2": "234kBr42th1NrmPP6DJuDu6f8d6gGEqwbeixTEhfWJdKgxcRGNyydGZwtuMLsZieNDFvocyhTbVMkMcu9wR1avNa",
  "key3": "2sG2QrD4ju27ef4iGqypFCaPxBWBH4vdgscLD2quWKN4wHVgjybRVJU2jpvmvLS1tFJHVZoB1tCJPvCGpaCjcEGM",
  "key4": "4qq1NpymA5nYjnFCzY68mLsgtkfqePeyX6C35DPeprT6RGwYRr1KtbYMHC3aspT9hRSKm1baQx45oQarrdYAPHJJ",
  "key5": "3B9gJE2dpHxNvbC775V8cbFKa9bJDBvUNNeg8eYFYtkcPSJimeW8Xoz6do2Uk1TNfLwRZHHhkLjvsnLi5HLwca3Y",
  "key6": "hN7ZirFSBNdA9hEs7UT8MDMLYnRadtuA77hf7sV6gtAbHnBXeGY7PT1dVMmfFSJtBUgGMAuwpqyLQUAUKyw3h2U",
  "key7": "2iN4yT6dgqjwkMzJ6i6KqWPfqF9r89HfWzkNBC1byMUWJXFwoDr4iaJVayX9fwTbBHbGwPgoa1LexK1kn7nzoShn",
  "key8": "57gH2zbqgfYC4SC8QbDQbZHe1TZqgnYSBaB73bmZPFfJkSN8kGLEjoVLy1iWH6PXpJtmMmwRMZnkAsBB3Xp2NwTn",
  "key9": "3eowFUVFiUq1yUGrgwSfZ1XXwWcXJS12TU33Bj9Y6SEzYvEHRKg1jvLhzgGSZ7cBCkDtDA8UVwgE4YZdHeE8uXZd",
  "key10": "5gqugGEkY6cA7MHRBQvGFrmwF9jsG3WU6aPhw23uJV1VATVK6cd7CarBkE9XxWcTmfifAkgLoxAwqPRocnvHKCa5",
  "key11": "5D3Mf12C6f7x8tRApkkKZ1KpDxYVgTVD8LypQg2YnxtsL3kdLZJrkoP7j6uihar3yh35UzFGxVKgqT5UzWG46r89",
  "key12": "3V1pFJGNay5nAZL6ny82ixDCi8dVB3huZAFmYQKZiqobTZ2VGHcPyXsrMZCC4HVHgBewfinF7kngDJLpfjVNnDK4",
  "key13": "4Uf3WMggmghggZe7ugwWwZVJugJCsnu3UCSLBz76yRRYm5ratvRwsPtqnpiVCNzUVHNAKLLJCbdhwxa8tEgjBt54",
  "key14": "4SrGb5H9zWyBezQaioRZRPkcW2rS5uCPUW4zd2P3TiVArBGCTXLu3QGZysosZK1qwm3Jcj2Nu4ByjbJ6Yu5Fj5kT",
  "key15": "59fk4qwXuoF9aQmYxmkeS5jLQt7Lfxavj2dPpENCxXi9k3n27TBEXheBL7UBepuXHSgmSCzxhp479joNzBezLAii",
  "key16": "31pguj3rzLpVggaGPsc2JETetURfubuuyqcN9KjWkquyYrkXBuG2K26cuAA9MWd3Japa7qXAKNPELY1Dn6YnhvY5",
  "key17": "1t8poZsDrTyRAxrBQqkzNr76ipku121VmBnX5p4dQstvCHUZDAXTyNiXypvAVsLCW5sc2LFE8pm4jRgdRVKxxjZ",
  "key18": "44VMsbYenhahwFDLZvXY8EWPoUobHuD8NjzdZP4ah5hBKXF9aT7wkBmwRaLYwbhAZ48DUXaARt3wh2bUh27YE9S",
  "key19": "31gHgnrQnUo5dP2XZLfq1oyQaJHAHFW6ZsMs57okR3yPWnHJoHyZXG6UtgAX17HnhDcXQrm6QcjFA8Ag5YvMgyAr",
  "key20": "5ez2fAuHLd9ZgBSWFr1RRiFXHofaK334XbMbbLP9k97Yt5hkWFZ4etRh668yvgzMKN54nhQUHqqBZkWNPHYif3Wa",
  "key21": "29godaZ241322Cd9QgZi9JkUMZEjHjGiDZaDpaCbybMRsbQMepe6xC1UxoE3AwcycN3iPRmu9tpSyJ33vgME7m3C",
  "key22": "YWbvTZegngd96aGRrbT789aGWPRvf34EPFLuXN2DjSbtxynN26peg1Bi9AoBGeay9cWmtYgEeaZCUkcHGmD42dB",
  "key23": "4B5AqnwTwbaRW9DQ2zwAfR1Xv8jDfpRoL55QDEJEcfaqn56xGGvQ9ZLtWjJpkLgCtRRXh2spq7r2HXZDTQaaHvWe",
  "key24": "3bSGJt8SmxQxuEqxPEnYqH62dJ5bnJwbmYm97PJFQAUx5Cnmsn3soHqBp4LfgsTGPtLCr5vXsBt4QN4fntSjJcpC",
  "key25": "4mgQsCRntMo1S4usxLPBpxxRscFJBQJcHwxcWizYvHgEKKomUyYb7xZ9oHkojpfA72ZMY19ubQmjPbKJHHgQ5sWu",
  "key26": "5myFt4ua41EgKsVMwDmqMyTCJjxYk7SE5brEEiXB966DUbTf2MAhNHGoa1efuFXVKpWqixUKwXJeh1axgfsYb4YX",
  "key27": "phpJanFPNLxyfMo1evTF26CEzkPbetmcK5NwhhpLa63fHL3y58Edf3iC66JU624Pj2KmT9XbLTLmpUKBcd3yhhp",
  "key28": "2c8Gv7zw5JmH2PK7KdRqmRocErK5NzxFkFa9RACT4zmv4gtm5svVep9n1owGXwdvqDuuR7QLkpqw4d3YTJVrZPHy"
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
