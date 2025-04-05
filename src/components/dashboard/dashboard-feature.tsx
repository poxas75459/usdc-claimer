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
    "5RpVouksuFK4j2z9rUMR5qGxAGDmwSm4JetniLCArNTgMJcPJ5qXTQakHWN62jTWNpxnJT7rDSo1QJZdWpVV4w3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rGdzN8MxnLSBo3haxUwjW4bQ7FTiyEEVqdQ5MAQUWaChecJdnG24oFNHj5nzB7K4UtsDPk8ZAY9jpJDaN6s7Pqw",
  "key1": "4Zd5DHZ2NxcoxBfhGkmqfmWKT2aFJkNvpiXJZASg8kbzraKNCyxUt25eirySnYi4toj1iYrLRHTHXqotNPJePTTE",
  "key2": "xkFEfffSmm1DcrmoVZRcyrL26TxnFDwriAALFnNacHqtHM3pf9oEWzkXr5A8Aqtf1bMy2iWBcwqu2LtxXQw8t7m",
  "key3": "3ugzFsKXvbZe9GxMDounUUQaFJAKq5zrYdYzTK8xrk1J5ST4aFQ661Dg43gdUFtKCubkzfvbZRgRMSMQCMVNXzbC",
  "key4": "4i6UKkHB6w57LBA53srQjDQoTEpLtkN4CgxBSbSRNk3QMJdkLQTXkVnHXXnQc5JE5iV9wvU2SC2ZFvpnxpCVoyeV",
  "key5": "5tj4RefrU9d8T9fXDNVQgoM6kSTionDxYZ3LGjuwRsbtUaQTJzfoSUmeWKEYRxwqcqfJDDQ8vshybxVCKLDcbxBh",
  "key6": "2N5MAZ6vTyoyJ1HXYSkWdsaM6idEPBZRzB29qYwdWNkVAzmf7FdQvvWZSXtoenGgjZ7tffHfyYBecQLdmLTzB8LB",
  "key7": "5b3Pvjr2ryp6XKLSovo2WRQp1WZGgUvAibzTauh9acq3MhLmY3boae4eApfCkDou88PqyNj52V4qeKQQ8UhL5Vfk",
  "key8": "43HS5vs8R1dnHtuEHDJ8SYNZqEhzMYdrmC71YPwP1bwcBbyGegVfZr6eKxjcBk29J6D1L5ts8Q7vDs4tDPtDpobz",
  "key9": "RDyUG5MyCsGBQuvKKx9a4Aa2V5RpAoa76kZMneqVbewZTXKRecmWvmyXUEryYLuoUGsRwe154RAQnFPVjHt83NB",
  "key10": "LwDmgEmtgipDMLafodditU77e4ic6apGibM78GyHWFeNabFbUyyF9se6TqpBopVxUhtsqpQ1srczVSyKb64WCGk",
  "key11": "2JqDM66zKTFeGWQbcqZJvkZgEE5QQrPygbCPSmQH38ceZkeX8tanAWti7hvNYLZ7gtde6FHcqkfh77z9RubnZfgv",
  "key12": "kMwFNJx8tVNxmL24Lt7b5bn4jrYFgRvxKPeD2VfeUdn6CmT9Cjw5cEdWG2PzEg7Zmt1hixEoKJGetJ1tjvcFFv3",
  "key13": "wTJogHZsuqBokWoBg8ZL8V3nxvF7jjDvZYtSw6dXDsD5UdhKVjDj4jGuy2rHXRbGXY4xBNYsjcx9awrCXHcEG14",
  "key14": "3xFqg7ymbAvXSW8PMDAS9MD27QbCsU3imTVEwyHTSQLPy4t7eK9GpYfFC3VzSoH6HAHUvLbzToCgEsGum9Y1ibYx",
  "key15": "2sXBYuvugFagLQkNJbqUowDo5fPbib6U1iSdJ9fGd7biUdDuvCgoxqnYL2FzamHS6ZpwHAouqCkGDrY37uuWLZXE",
  "key16": "2EVmfd2xNHzynoQh9p9NGmpHxgBEQpM926f36fnfQmM47eV4FTgGbSop68XPTx52QGsLJnCrQs9go382AFU4UKjX",
  "key17": "2qLn7zuUtbLZpK54VitWyTW5CvPjVVy4jVowMtHfmXpq9tbwuGhXgG75qaqdz8TdYkjGCtJ6WhEUgzMmFHTt52v6",
  "key18": "2tsFk3NHBJUBkbZHFUKwS9jLDkNFGKPmyHW6ncSqxn2U5t45nSqrqozxNLjy2uLgNcDwYvUEpq8oYCnExW2y5iyx",
  "key19": "4dg4XiRtKFyXfGqHPw2bapPWwMQ9PE2gy9NUqxDhb9qM6MjNkZCmdhgg1qHRcnDYANoJ19mYe2vpj2bWKfbzdodC",
  "key20": "2KdAxtYTG7ufCpXwoZhJy1tT5kAbg774DynHUQQ3VEW3duEc6f63MCqDELerNtdGkCfMtNNmJh3PTFyzFdWqJQXn",
  "key21": "5TdM9QzkmKyCRJJRfy8ttq58VCZhmyUEQPV2kvNUoEMVkfRWQoQSZQ38G12JV4TjT5nSfUDMfuTJBC37ChCW1V6o",
  "key22": "He3fCnhysaTax3FLw2eh7V7jVnbUph9Guh5ppUD7B1sx32r662ABSF12oEr57CzaQfEC72hXD48bzRXwcwvn9Sy",
  "key23": "4XSwF82TMTQo9uiqQcnN8NqSZmpHewyhQcDoWNVccnN9pfaFfZdK9rJk8hzkdccMdzN1fBGUn3y4oA3TvkfMk3pj",
  "key24": "5LJAbfJxj4B5apP4dpGGAacbv8xCRrXKi52S9BofEAzaBvSjnRm27pm68sgaWwYWLr8Wu6sYcceWWVZJ5dEwhizJ",
  "key25": "24feo3gAUmW4GM2FBSHT4u5LSueNAANFNSedqfGRMS6abymM3QXnygtGB6BeFcTDGHovGcBd8veshFbd4xrjF4wy",
  "key26": "4V9BBDoFZiNrhHuhATC2uACF1s2pNgWLY8taycgxz3bRL34hVsyWCW4S1EYreY6hWcjNjBRW9RzDw2vKYw4yXmuV",
  "key27": "3YnDZUqkeEpETYxhouKr8U33nmF3AQfRhpRbkaBK18BcRTU54uQxQRndsjgHTXE8v9yEE4YU7P1ZtdBBrAuYWCi2",
  "key28": "2dLp3qys7BRbccX6nsY6brwwKTBdr8xBoiSaU4ud3bsVjxjCfLHSviB4wxvJMnQYNwkD9MhkQkpKkEarFdzonpmd",
  "key29": "5JT7WSqSKdZKv4TWQXUXAppvTEwpL9pKPHLtzNzzhcMKYJgRoAJjDpd8h4YtPQ9U7bmm5hfV2pH4crD952jvoZP3",
  "key30": "3fpjUT3meduq66XkuGGCksnudVYmSRJyWy8U5QPxP4GN9hVyoKgJDNWuowJUnX7PEbaJPXyD89JrXMJdqiNKFoaB",
  "key31": "3xRfuSAAhjg6Y9DAQ7pHkxfBiBrbTTEpevH8UyKghM2eUVmVQmU5XjTxEpZmEY8qLtWAC3XRhNJAzeYkJEpGEMgw",
  "key32": "2FS4eDfyfN5VtxCNxakj7QeoSLrxvUgNesJHNvVeRHeFEv2TjFtnyf89GJfWEsTgyndMQSGAj72R8wTgSaRGao1L",
  "key33": "5buikpq6EQKmLRwmKWdCfUyzUqArEGgVX1DNH4TNszf99utFao1tdHtzLjoJGABRe2AjuWQ2ULTCc5w2ovdGLMrB",
  "key34": "4J6oWaQMZTy9YAUesCJ3dn6nLh5fb2PhUHc8sv5AUPEoXg8TMhKL1uP8i8vjGtpCcii8vquEVCDsNza89hbQa6V8",
  "key35": "L934Vb5sm6xgkCXuHafAeTjAV55WTeCBgsNuRwc6pLydR13hv2Gmrd54Gkz2XnMmdG9jci8hKf6uj5U9dD9YDfZ",
  "key36": "5qKRJjvhHrJSbe6E1TcHqbup1g9sWN6Lf1gMKgpsaAB3CncDj4HYS64wtQ5cfn5zva5hmDJ51wktQ8xDm4Pi66bC"
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
