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
    "4z56yDUj3eiLAwsiLa4hbdxZAUhDjDroWBdYYWd9ZkYLMRvLHAstuXJUxc72iG1LV8GKd8nvvrvJy8GkwSAyL383"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d92PUQsUvFinmhR9fSXgqkKLNW78HCDQhDXWQUVommVGicpQETZwEJAmt7cKvRUF2cborczGHchPHMM9MCfePZ9",
  "key1": "3DNK1CZ2yUgez317P3cChm3mDPNs2fMz5mSR6223S6bCE7rpW4TbsP7uVoWPk5c3aMR3sXpdghbFAnsvfaJKkMiG",
  "key2": "4KPL53qqmgAxYKkRb9QGCr6H531p2Ms9CzKaBrTVzu8ToDzy3rECYADU3Xbu2hwJKeuPZkk75PSb3MAFd21buPBy",
  "key3": "5BeE733GganhQRFZM9FQFcUX5xFMFSoXGGdybQXqJ3hwgnWRhv76v7bxS8eiwgBAS13t1XBPoKV7LWbF1NDpNZ5Q",
  "key4": "7rJAJr1iXvddU6AwWtpBwc5d6tUChJvghCUECQ6zuRB9Ju3HeDyn9mtDrDCnfz4QnvcMC65kn48zULkW7VDJrJW",
  "key5": "3MxVP1RdAsCXQ6KyAa8mXNGTp5VbG2kvUsYnAgM1dyB2BLtNzyi1cVqyftVqDv8emS5xsknKRZa89Rckvm5dgmef",
  "key6": "4H38ndmDnr3ksgWeyaMPcpb7wv8FbKf5YM9rnH2D6WSLJ8hCdys919FuhkZ8zWZQ6BEkqHJhurrd5pbjTT1iE5bc",
  "key7": "3mgUDCrio54CCWCKPED9ZbZh85pqRNfRvF56uxEpfN6Vs7K8KCxqJYekoyeQ4MWjJbn3xGg9DGTMRNPGKFzFSQR1",
  "key8": "2xnNYqKfgTwEYN5qYcYC9q1cikVG8bxfErx4Lk7WUU4sf51RxseWJwpgcC8X8EdXBJJfMAqFmHqccax8erSnv7fB",
  "key9": "2nwbz7xinhz8YBESHnqCHBc8o5rXdRzcEzzRdTBFA7rdtYVfj84eDvJAt7xXwypspQrXHgAgP4zjoSA6otev6mAk",
  "key10": "2SqxXnQ9RqmiNUKtWVsoXkuimjcNoys2NhadS9jL49QRHaj3egBJ5tbDLWtszU4yuTxNeXWG1iVUYCaTc8NQvRtd",
  "key11": "4dFiY6gZ5B7LApEfSgmCCQoJXJREGyvMmKFmtk6G7Gdq4MFh7RknECVJ34zM1KY5fyjWB1nZRtaK9qrKyVXS6LJ4",
  "key12": "47o8gya5rSJG96f5ixQeJkHRq4AUbBUHRukLr2g33CsUUpS6b9hRUjChxy33dSwg5HvBWVQKBuP8vViLQUQuGpWt",
  "key13": "8LiM9yaeUGSkCpK1YcFJBEaVAZZTvNE5Z1skD8VeR8Nim5R3jpBABSAmPCzhtGFeFd3bDAFNXetaXfCmiuMgoAL",
  "key14": "35Jst6tMFmU55whiKCdCC9LBk896YXeX2FT6gPsB5Lvgp61PaCybyFcYjvBJu4u8diyQZzSUPFAhFCqZEkuviBwp",
  "key15": "2rcauy16YUnHQoob4EKGtbMyY9C4p32A3Do2jHZJ3QDBFfgLFDEE72EGZ9GzDmY733n4iFZ7Dgas89L9Yeetn8s5",
  "key16": "5687oBahJr7xD7JBEXxo9qZBVkjQwL73eqUzL4e2ZatjwNbFhXieimgF7THTCud8p7gKDxtpmvYfmm2RdxCDwMzL",
  "key17": "4s3FRPxUyyH8MPL9cZfsSAERqvVNxiSkC8C1iAjTjAjCWYQc2n3WWJD9NhHZCm421xgbJDMRxTWLPTpS5Tfpog68",
  "key18": "4LqrgSjZUZCrS64Zh4eAZARZgRfKivN7q25BPx2h4MSmt7ykZpbSJQ746TRe4ZTxo1eieAKqtN5zQdXahg5raUqD",
  "key19": "4Wyj69hKx9Ux8QcLLom6n2Mr6JsUcpmNbfcNB183CaUnpq5ZgQD8Tw1sVxGcZrFTnvkhruyZtkpHRAY4wymMGMEx",
  "key20": "4KXXF9xFnGKUGbsJ9KcMd2NuNwEfGbusAVeVWCX1frCKn7FWJe2FQk36sC5pBw8uq29JpvkVY2cKGJMs6TpYgZix",
  "key21": "4PH45dQGig6Rvn13A9Gfd7zjUWg9vs2A3LZ3GMH5WeFqgdau4HhsCHJErV7C1ahtRBtyNUT6pabMxj56BFzi11wC",
  "key22": "4C1uRHqAedJSva24VUBMwDyKCUYudmfGckZh9xaowjcsHmVhNDbk1ankAuSsjjUcvFraSTZY7M4VmVe1X2x8J1Za",
  "key23": "5kRNArgbH127k2x7RkqjJYdpvNYCbXvmkxPHEtqNkwd5ACQo6w13HJbv7dDZU8qeZNUXZAGZ7f8jZGCFJLk8xBBj",
  "key24": "buTu8Azfv53Wyf3gdbnV5NRyCQh1aBrRi1KPwT6VZd3RFhYMhiLroksUvQQJaSRTVCtwM6PDB7cEVHgvYZsTcfJ",
  "key25": "2pCMF5jaMDbGzWAzZsgM26WSDMVMpretAchVXkZgVGrrhzsERZsKCJ59X8PPQU5uz6KJTkToTvyf7NZkbffyvC7M",
  "key26": "4b4cs4HUdwYEwR7hPJKX7PxzMU8AUdtEHd5UYc8Koor6J81hTRGfMkGupsevjiyrK1H4ivqWFTesZnnoErZzRXpm",
  "key27": "4oQM1YkZRMWSg8D6Dtmrj8SqmMXDCWKgGWkzMd1oAX4pbcsTXnXsJh5W2uWB9ad6J4d8743FygpPtzWNo6aPpUbj",
  "key28": "5xyYyJCoMQzh4kwbCL29onCaAhr9SGVAmgt9WiNro9HVAYZudYmVFusEBWxaLog9j3LA3eqV6yF1hbSGZ9vPr4R2",
  "key29": "JqF5D926AQYd2Mf4xbbVFa53yLFabT1piipwk8PeTTTCXTNMrN1AbzNDEjKkGMndcMmtTg1WNuzkeZ7Cj2KiDra",
  "key30": "2ygyQ3efPDv6RH9MGfPnRukakNKD5vB6bDaGEg1y32XBVTMDCqe3f1jZH4LssgVuVNeZYiFDr16hPB5eqvrkB5bW",
  "key31": "5PnWkAVcSu3gMW6Py7TZwUC69WqECw2psLF1wutXrdPk8Bn6gUmFKT8wewcc3aYNb2BWt51i2FZiumcZp8uT8zeQ",
  "key32": "5KQitJ88E36CzgCQUKaDXcAKZb6srPwwZjnmxW2ayaEebWGx2gZQDuKdgsqHXUwswB2cKXjvq1DSh1nKKrMgGPmK",
  "key33": "2z3UqXQhTFtgceT8v8oXp9fCZFpKKqb1nPwwwLM6fnG44HHn7b6ZSZQ3BbWZcnJUmU25RqATeAragK3CS8ViBatN",
  "key34": "3WyL9TFC8DeGkBU18JgDNX95eqB8WywZMuo2F5ibvXSA24i2xvfTBiRGKE52bpgmEN19jpJFFVpNczCqn7LSQuNm",
  "key35": "GPvj6YBwbTdxdHfm7JrDcFZBsUv39ULveSPTd8Ph1YCWxXiQQBoxt2ANkvUaFEs9sFE8djb1UvFqRKzArNqbFL4",
  "key36": "4qYnxpMJ1Tf2JC6APJ5QDyePzJQLGU3fJRXgQgHfgTNcuSr8ajnhDKv4TrJjmg5w9SGma6fJAjYsZYZzPsSVVggL",
  "key37": "TsdPqx8242kRcvBxnSg7Df4gHpwMkQpiYqP1PCJ8xfS2w8EJyboPGnQ2koPfawSDUbeUfYWA43V4fnpTkzy9tiw",
  "key38": "4wndPoe5phYPrScZrfsN5yQebtQmz2HweAn6zfiTjdE3QGeHkrfPTg1PZ1MMWGH9wzchN8ZyBtX4cqrpxu2jTS5V",
  "key39": "3Cau1ziETxS4NBD8QcpmepNEtDGwjdTa6sgqSFZowmWSMLby7zRXVNMX7RzgN8N3Dobc3byBUNnoergFGHKiVGtS",
  "key40": "kTF9A3bHhtPe8roS2jMGG3WnoxkgXYthT6T8MJczQsQbbqRF5bVyHwX4vTH321pUumo4vnHuftB3sxwRpkpoJRL"
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
