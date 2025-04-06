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
    "5WoNUFbFEw7LDytGPp1aiHgSKT3iFkYLZLaGzH9VXstJK1WntTAQEbCiLweBxmP382JnYehbVgvCqjGXoQPfrsPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5giTWZkX7uXodDVmYovuk5nkJ8dj8vDS6bCepqu7sojKJWNNTpuiVAn3Bvcvon7RRYG4dPRzNZsbdoRDGE4nDL7s",
  "key1": "4BcDVjv4sbswWW83xvuBg56Qx6sYX811dcEPEDQePy1SisKszeUoozV1kuepRf9GtmqmsfdnXxqDUdYiYTvBC3Qd",
  "key2": "5jXhR6Wc8GC3Trd75QBmVQUTejnYWevQnssm3Vi9tar4TURYLaoFYjVqsAYV4peuzdqGUeP38boYcFmtncD71Y7Q",
  "key3": "5yowGMW2Zvs5MBtxXLgHLqoh5y8jrXTt3N2f6UximTSx5H9sXTj7cBhqRnJDLaN7RysdW9Zr6ddCHhEdQ4CYfur2",
  "key4": "46NxD7wcLStjgVBgRh7nuHAmY7PGzqeSQX6cwUBdncH4TRbGUB9b7jaog5NV8gG9pJasdzaK8vXDZP8uyS4vKrWC",
  "key5": "2QBkvfg52YsPfR5FQYdF8yAQ4afj3n7kHcir3DXA8UNLfxZHVsRvPrHN53VEpBYmjTvorsnc6LMEP5i4wiEPLdFw",
  "key6": "hM8kqFqQBj1pMf1vCnuAuXTzminEae3LH5jh7HMq5FN1A97AbaYMUwRVGc2SX7L12e1UNCx2yTTcREcddaqSPSx",
  "key7": "5eDEy1XvcKQNPqjgdUehT4ta5A6w1TM1nRMpFwTguZmWT6ntorX9ysnk9nUwcRWqTTx4YePsmPmT2N6oY2LRwbGh",
  "key8": "4f7hi4vhYKU6txmYByxLmMmiRx7qV6bZpgnhNZ3A3YVAiPeQiPPKWojSbZTPZwCCJU8ghzbFomGHweDsXoYaNZ8T",
  "key9": "jk9bZVsz54bSUuw7RMSrRXmErDkDdzPYxcRqCmAvPapAfjEPqSNyb5qBCCcWLrsTULUZJVaVbykSGsz7isvroYh",
  "key10": "5oUANiacUzJ2nY9d1HHCSA5n2vZUAJLvJMBpEESBd4CZJF3HhDFuXwEb2yf85vSeMxXqyahgV53cxwHaTec72RRy",
  "key11": "n8g89ubxDG3KbkoSTUAUBF2QvYcjMiiWRpbvnZAPtq3we8WCjKqNq5QFKPdfvrr95MLzeHcTYYNeg4bGnCqfUMG",
  "key12": "4se2d4Qg7X2V4Fr4V7kbZL5r3vUyEwcdU9d8bz158T1vHSm2ASbnNq7yHmNALkKc81HSoLudcruB7cEHKVcgMyqm",
  "key13": "3Kr1jGcVY6sHA6VR7UZdfi9tagKLubPmAYegT3y6HMdH4Kr7GYyWuWgMT1fybhXbqNxxEwn536Fb7ncrCqGsGRfE",
  "key14": "4GXpr5LGprBBs8csjZb9M42v1NnWx5omeq74igSedoPsZPA1m2QGd2cgZJrTd6uP8ZcpKBFaaviid4izYBXySejE",
  "key15": "4tp9SbrFp8abqHJoCvpZFNUQsgCBE1pfBrmcWTpgccmYK9Mihy6oEPkBiH26itXjaRxeLoMTeLuLnMU6Bg9g1TN1",
  "key16": "cMMhGXjMj2b4XLovBpbYJ9qB78EyL9qnRZtAtVnJTRruuPaoEmFiDUeCzMJpcjpBQdzovAs9CQx5Rwj2wErbKGv",
  "key17": "3dwL6QY2gVVSxVTbH17cnGPTtLLQKC4UdT7xkt69VH3qTUccFQJ4f4p9wJ7DJU9TZqHJwNrngzzyaZYykbR71rRb",
  "key18": "32dr6vaNuxBXnXdonoVKT2tGnUoC17KyqFoULNCQXURfbqono2MKV7ERtheRenAuM6GpDcbCnUK5gNTj2PY9but1",
  "key19": "3LiWkqYwGu6tkSbCTqU1YuvF51BD2rGbQ8Dc3sPKEMmiKfWsQUAdx5AordZuzqA1knmkyg7mgxYGkUogvpJ1zVLf",
  "key20": "5aHxHFJb8jHXvMBYTfCs6LFk9mkZcj75H8DRXWoHfe3ovkXpP7yqarJY1wFKcnuFUftDyNHVzNPL3DY2GQfRrBEB",
  "key21": "4s4SpUvxWXrpWiGmK7Bjf75jWMTj8f5pdNiYzqZhmx3fdCS4AHvY19Ndg65V2xUFsma5p2DGZgY1grhncdcSSkaE",
  "key22": "5LQ94ic4YnTHGECMmbtDtQaPtTAAzHh7nwtLYHj6jABB2UDaP8nuqptQ7RvFrvJ9oZVLEYSjgpB3RzG5nR45XaNz",
  "key23": "48bixDeFbUvUtrwNrbQ4H3LYdKhUDgw45s63Fsxt9cewX3c1qbDmktL7ysE3N67iTK8MUYGcR4iVk5L9VuvwwKdi",
  "key24": "9hJgtw3D8E16k6yTmXTVvBby5LAp5j3drCQCAr2dAux2QerEam9ePotfpUFHF9KEQ4Th86jxeN8shzHMUde2vjK",
  "key25": "3KoLkDh1tDBj4tFyZJ8auJrqyweDmuTHLtidTcLdEsKvpAQfbK4Lowsh4Bub97JZsVtd4cR3JtndCmJcvMPQsCX9",
  "key26": "2FGX8GcC2BKDmhhLoWJav14j8pvuxnFtf5LNKM3bVxrpxvtQjXtd6E6RpPDViAmYfWcwiRWyVTZgNE6jwYaqtFVr",
  "key27": "4khhnvcSf7X3KCHLzgJ29itY5brCWLqDsrqnui9CxxGwfVZSwXLwideG4uCkrs5fpDhCJ1Ly5TzLR8dR22Ak5yXd",
  "key28": "aHx8TaPCyUUdXYDMgBTkvkWuFkvsW2hZNpERgrP6rwtzkJPqq7U9ijV9vEiuLBBigLKzSxY3JCeL7T4uWV8JQbZ",
  "key29": "uuH4qc1W6qUTzykY6NPAM7DMcmhtby3DAn9LQD12GDNaDh3SQZVn1dmoLxd2SiDofnQaF4i5sPHc6GhMdbCkXwM",
  "key30": "5dXQUEVmUrjXuRbQoJTUciBLqoJamtQqYbhqkjXXpXaAQqfB9kp1J3jSRPxShsJMobypFRwdgh6Lna4qz1a1b1B7",
  "key31": "3v87i4Nai5UMmwV4QciZwK9hjWLruYuwbgzaLjwgxsVCa9SwsX9HyUQViJKyX8rEkJ1DqJkiVBLcRvxwjJCf96Dg"
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
