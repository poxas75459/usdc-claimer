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
    "2ym3CcAZuZP9AqFoPvQLzfVPTeh1wfTHMVgpg434e3y1TLfNU8TDSotFXG7iWqhU8BCrmTfH6XDNZ5Gjtzqg5ADK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JqfPBp7uTXmyZu9yewm76jKr7pXmvMu4LcanrEpa4dV6JDmiF8s1VxPVScfPdkj2vaZWuuKCm2JHDJM99mBJfCw",
  "key1": "5ECyw2gMDfJDFKrWhBpZLJz1BpF5LYJ3KXiSVgY4inabTnkkNm4CxsaSszgjvT77ugvV3foPPcubqBoR1822aocr",
  "key2": "hqFwqZTD5WfWarAGooMm1uB4D4E89LTmSiDBYsspaf3bKg2s2HakJLhxBeWP8iiwBaPWiAgXGkgAowZ5U2tGwBY",
  "key3": "3praEh3KtoE6A5z5fjNnBSw1UpJW4gSJf2uYGbNQLFhPxSJ5hbpWEfAHdf9GyYeeMycr4GYYboiAaCaEKVeu7ZJH",
  "key4": "5rJ477Q5AWvxeWqpiXZ8yn3jsKiGiGhGH5xHCn9wttVLTDQsXvkjGdnxPtbePuCK2RJLn24YEv7ssKVB4vVR3QEM",
  "key5": "4wYXKbsDttp9vfEpGbMVdt6TFRAYprb1ZsspvLBrkpiNcUxUiEZ3rJaUUhBj6XHuPzyA7nBMLnA9neac6EGhk1Kz",
  "key6": "3hcYvawiFfFx5vDS7g88qLovZo6EJ3AMNKcNVroktNWLzCQtafs8HCS3iDyCj3TCE75DEWUxUPsjzWfASNVGEaim",
  "key7": "2NAeT96xscgBWVACsHLLgqXsZo8sGTFBqkmLhPQfEqReDckQaCSWGCnMGZPDNqgXkbyfNS8x1BH5ero1jsREPdiM",
  "key8": "3ZHvB4NYNHoG24DQ6rWHkEH7uRoQMYeU8JzehZrb9uwnk1d15mJaSWUhdaqzAZacYbJGDBCH4BSJLyo7dmKByu9B",
  "key9": "24E8aXff57eEMmyWvq5eXLCNY82jfqnY6ui735BuQTaXVgGL7c8XwZaRJwUKutdNQcFqKvy5QYSrCx6A3ez1puDa",
  "key10": "2bwH331ApYoMDRmMtfyt9rW2HSLAXfa7VzMpBiXP18FgDNS73mE5Xrrs7QRtgUgdvZxdSP9DYZBW1hXdePwRGywC",
  "key11": "5FsCL98uHBeTk44EpJXyjqHqfxy2GMK336M2gPgsD6otq6Zq9uaAGb3bB7JfJXWQD9twGbYwZxeeU9TEXmURfZFF",
  "key12": "42vjhGmeiQFgDaky4tbzpMaGwh7a5NeTtsrjm7bekUvtnE1i5irbzWbQCNruEtr1C4UtEbcRqrKVfDstw75FsknA",
  "key13": "42V4XTv6txEtPyKBWhoEwyP3r98nTnybHsGCiLBi2mTAVj9wMC9xLnAsdNuzAyRG6rqBKfqGUR61dDwbhjhCSg52",
  "key14": "5URh2CVevVRDFdjm4ZMfu5JyucAuX4vrNe7vqKJaDVxTez8scLkyfeDJd8j1jC6yLfgd7zJtjqrrnv8eADQ4Hozb",
  "key15": "3K8Kv4HkkBhzuESDHvx9jXrA6X2Rpg2wSedvNs9K4a5heKZStQNZqrWq4bbdspEYz3xZz54yZQ9wMK7DPnntFF5s",
  "key16": "5W7cYWHVxuw5Lc6uLDgRwSSGoQcWRuFpVMuxi94ieQjnN5DxPSRJwv1BD7vxzEf4Vs6npX7kSvBwzVhS2sVsLyY1",
  "key17": "53bAAYhJQf8UA8hmJwgkKJE5mWAisfQF7mPo4sLVjfBVjUZuf2YyBHiFnF2sKoyyp9GHicC8K5hCPVrW45H8g4eu",
  "key18": "3nQ8aXxGnUBQZKbygbGS1dmLteRUMywEJSqfbbZMCubNdaqoPyo1B2p1vxawjEL8pqYadmTFk4uXHCfzXqmoaWuS",
  "key19": "4AucAEbUCS8V4HLWMQX1bv7f2Rm55A3FqpXPNP9jgG43sdhkvx9RramyeWNRitrk2BPyvFAGaMaHaxqquTP12uXY",
  "key20": "S2HXYLXrxsQfqFMPjMCMD1aWhYDPSZpNopDHEnnjKwS54LBserY3SuYDeqPDvDPQMigcbwncKNWxo8Wr4qjGCuD",
  "key21": "azMQzgu8aDhDfHayEZUEQ9eKd1wNtXX7FTDzJBETP4SwoffqgXne3XvZkqgSDf8yvSQQihqsYHVnAJvbf3z1qWE",
  "key22": "XQiT8uMZ64ag7jpYcqLQdZcaivdnPFXnRDvhKccQrimijWtsUn1XXXW9iZGZi9C7cMCn1pzBLVxVdF8nEYY74Au",
  "key23": "5Y83gJCVfcE7GDHoYocN3gV5Eb9zDBACcyNyBAEg8Zvd2W4HTzXQSdYNRa9w1V9zL99f4wczz1QuR7YYoUZs6tL8",
  "key24": "3xeD9Ukxu5yZKQNPbG1YYvTKoRbrF66UWfnTAkRWQMtb5n3BadMGU9uUKMHtYhCgR9UG96D8Yr5NDsCxJJa6EJE4",
  "key25": "4SaLaKtyw4QW98oajeLrTvYuUjM9HvPJosgqWer2pFuw2Eh4891w5KRwfKxsA6Fg7T2HZ8rtDMkrBhbB9wLcP2Cu",
  "key26": "4b8qfF5p9ue6c29218zgfFMfysFqyQQyw3nFzWmw26bwA5SZvfXxB9yhHYtk1Yjmx1hSuPG87MS93wocVaMMLSdD",
  "key27": "34z7SeXCfstnN7NUGp6YcvJZnMCefTKN1n3rzKnipyqqtXTQmjGc6HKbTpf8ffCvKEhpGwwbJRLWtwkXYpyQMweq",
  "key28": "2CxTWZGCEMXgymwHvqHQ8AMoWZHrd5rQ4cqwQRusq2Djxse6sweaZYXnLjBK4BtqKsQgdhtBp9gSF5bp2RRTDb8A",
  "key29": "27dSnaNN5rKnvLwDDZDqTLGfQGxEwQWgRRhgtKU6cdcKmmBzABCVeUfvsotbcz2QWjoactqEaAVXnQypUCdTpAfz",
  "key30": "2uKDLkynfdVQGg1yHmpsF2yrsYAnBpPrsuoBgzaRdoWo5ncksY617vzTHchgyawLz7Ymbkkx2gMX81n14L8atzAD",
  "key31": "3WrVHkMr8BGk29JwuEgRsBLZrBeNbmUwZhg97Rwwob3SkxRCUfMDL4dEZ3rW31cJijmd5cTEZPo3D2ZEuVhSH2BT",
  "key32": "2uGR4DWxJXXni5RTLbZMaWgrJvb46YeAFXcRHnZWgDk3GmURmLT6LWZ9xGs37ZxYZV12yQV4tCrfQGx7GkgtLknk"
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
