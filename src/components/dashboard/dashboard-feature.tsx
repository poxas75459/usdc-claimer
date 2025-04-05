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
    "4idNMEorBUBSwKRAimsgUc7goTweQrZeqi1yGEEx1Qe5822cz6h1A92KuUiXDqdztF3ZGWBKbWzvQMm4psKWKLe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yiwVqQE5wWCNbHkEfLKxtH6SVk8cxm4JAftWrjeDvTGz4WQspsRBzmk7krBLeUJ8bwxCTBMjhzxhs9RcyCbu32v",
  "key1": "3n8RT6SLxEw6sji1iKnizLb4h4Uyba48xZz4W4awMDdQucZds5vJLbB8xPTFg3ZfBmk5PqmSc8DK98HC5H4aPhk7",
  "key2": "aAmG4g6sFtGzET3Rsbc2zcrhSMqS8P7bcnp7pfKcYDtjzvSe9PMjx6haVgEnyevJRhAXvHYqag31ddbvqbnDA7c",
  "key3": "2Jjh814rto3EpwFZiAKmvCnLFwK4MjfU2aFmmejusX6og25GQh961HYdYPNm5jx76pKDYcwbLTi8VcWkw4XZRLib",
  "key4": "5x7fokgpYcBYb8cN9nXEg6xEwW47MRmv8fFDL4iDbpTQoxZ8DnEjcG3TdVbfSA7FaF56eeXNnj3rhGJTqazbRyr6",
  "key5": "sFD6L2GGVkLCcpFmeUKQZAUbrWvUdcNbB6e43UY2hUSGFLvxjk1s8TnRSFSvuhPBfgmKDJ46Crgb4wDorRyvMqh",
  "key6": "ev6JRmtpviZ1aQ9jqVVn7Q7BdhYeEVneZ1W7cSuZV336RCeADMgDFPyR5mw9GaM927BNMZQXcmYcSxCvH6hqCZJ",
  "key7": "2zTTjjREHiwMamoAM9fcTFzyJQFoDAFdZWUuwBxWuVfPNcV7gsXpQPmk9c8eqtJpkP4Y8txeyynYj9r6mRxru3eg",
  "key8": "3i1fz4a2ZYX94iPUZHin2XJvWYuRK4VE4gxX7urve2LGuzsFcJTXxDsVN1xZrXxhvZRgRvfGZkXLsC499e8aXws4",
  "key9": "2K8MvM999hjSDKavcGtu5jNrMHbRfxHqmYdzFGgHaWngvuew3aHLERUJ35kPzgLEkENajTNWoNGGB2Sds6TgTEqA",
  "key10": "2Xi4TXTEqkz5LFzyzYEWJWcEQ78jDekxbDuyiXVLCbUNh8d2aYn6LCr5igm4AdLyBY66Qiu82yo12oszrxCYkAPL",
  "key11": "gESKY1urT6ZHNenxRuKxgBPfiodzqXVTA6KwqfwXW69K4cVyHc5tVN1KUXbbrqyr3ifKUAHveRgHiu24eQ1KCRo",
  "key12": "3uGiJTyE1NtRxEvsTZrHwtVDgBT22Df7dFy6RFieaHCn5pg6uRdzxKi6cC4QG3JDo8Tu2C6CFz89GZD41Q1rWdqr",
  "key13": "4rTYKWATVSzKnUrmdyLv1HZLvkh9x8p9wtVJC9iLXYso6FMi17yMoExUnnHWqq6mpLaUAa7MGmx4A5eYmELRQx4j",
  "key14": "2Zwju2F46HGqrCbZFLB4eZrdJpXeRkUz2Djs7nKgDGEnT9fRqvoizZ3ha4ysrQrdDdhviGP7643LVUaSb4UZgY2s",
  "key15": "4HVdURpvdjc3hASEXSsrG991zuXCB9WSycuQU2pwGN3wQLgdQ5umMjsriKHRRj4eZjyM8Mv5Hqn4wJjWiBTrwV72",
  "key16": "2yJe1LzZW18BJ7Jdy8tNBGX1oSeSPLRivQkKn4aAwk3NK7nfnSdtWy3B3cGPcpugiKN7MiqRvFS7Aocjw2zVpNzh",
  "key17": "3GhUwDBJqjxcxZV3r39VoxXZZ7Rd2N9DJWvNybn81j84K1uy3fcPrnApnYqvhQ1m7ubMgZzwhZ5w2n6HjFza5L8i",
  "key18": "61EorMPW7XGBLzomPBwZDAXKNfKdgTpSgzZzdjGpThDm4vwqzHG2DJ9YA4Xiahtp7TWhQLp8Bvoqi8PezqcDmYxb",
  "key19": "4YZRBUA2yWwb23NUzCJUhB69W99Qj9ndtfeGRhjGdH49PviwYfxpxqdgyhFg4m3sB3FqYbgdVNaMoy3jvujzjw3c",
  "key20": "4Y5AB1Ahnjpm9CfYGc2TwzQpniugjj2nKXxHuG9xLK4J2SwbmcBXDSHszSUQBprpiZrKRqHDHyKGNrz4UHoPzWJW",
  "key21": "4nvBqmnM15inxbVdUNJN47j367f9ZmQJVHFxjsKQrEwXnTA7CZRKTzEst2Kz2aT3SCrcihSZnwESmhQFoSrd7Sjw",
  "key22": "3AH7urKNhNsr1c4MqWigMga4GNPzR8m5QUoJiJyPve8f8h8sRc3UvhLxUWFSt1rHJSLpXURPQTvF5va6yAbZoKk",
  "key23": "5F5HruAhRnocfVNz5ocyVhkNMXo2MQ4Ui1rrZowqgVRVB5C1Ynn8d6MFCyP27BPHhZdzDk3oAUMZ3s7w72rFven2",
  "key24": "FdAvP3z7wp6YEdiEg6SEgc1rSXtqQoyrBWST6rBn9X8dysERsJXbyJxgXzeecthG3e65rqxsqfrXVCVzitJhitE",
  "key25": "5GYJ2uj3WQYRCWGRd7YUGXhaLirVpPzs3zD7xuSA3nLQ6ipso4V9sPjwMTHJbmR8JVPwaDDi1QTinqFm3pGHTLef",
  "key26": "2Gmoe9gzN2nvvMSY1GGCavzhqoEsfujYpvySjib4w2vbi8666WG14KJKM3N1A4jzqi7oogH9zSkrUjN6cVog8K85",
  "key27": "5hxqkNswLu4kgwvvfDs5XiQiFspm4K2Pwe6z7Xz3jwj8TtcFRX2jWiNLLZWGvSE3JSu3PnkNSTa2B2GC7AFvnT59",
  "key28": "3cvPfXL6fpUuSZb5k1Fah29bwpKfvYYuu34eugQ879DcxpHkbUVGcEQ63LQsxs9hHCTxCdhS1AxL54GLpHxrZtWP",
  "key29": "3qA8eh1fS5FwsFq55AxEJRqEuRBGdJzXVkf4yYHjCmiVQQvq9U5mduJEacfPKpHV9QW2r3CwQjqLfQFZj9cgk7EW",
  "key30": "2cPjPTAGZAyYyg3jU6cEpybDjkW1vTWaiUmXrbX4UEHwKcazef3q1JuRCHySKSRE1EjxKQ1ybykrUcJuvYVAvVmA",
  "key31": "22DtpjaWgpDU9BRKabrnmU7FprAcfy9bXsGBQcg45xCxHSp5fYSLTp7wmdo7PMVBcbz78iQoZAQitmbj2JznDm2T",
  "key32": "NCs27cC38ua2zeJNQeJ3DDtw24th5MvkF5bsg6yeLzcHKbiWaFinWQypY9bwDaynJZQiZT5tuDeuQB3ju5PPJrm",
  "key33": "2jcvpMoBEsea2WtPem6XuT6yCM3zghsbmEeMgGTrDZDCyByiJLMdGcFyqyqMsuPgzHbyvQSJYAFLvkL1dXDbLJ4b",
  "key34": "2dytf5QrAF6GHvDc3MTeyPo1Qj8EeZW3wrvVfE5bRPFuNRVwfwmacuypFDsbwUJVW5pug1eSedzrdmLQ9QwuoMam",
  "key35": "5Jjk84MWD1bsAaqJ3SH3ADfkVDkzJiD19ZPs1tUo1JsAFHZyQzi6DfXGVvGTZm4LxLUvMfhk6WrouyyQZJAWFKw",
  "key36": "kzTqeJwjmbwt6GTNJ71mDWLGs9MB12RJAmGGGhQwYJ9Vf36MghMmRa2oNcLrdMDkgDNwFFVsC3MwJAASiX6PKf1",
  "key37": "46roGr5ecHV8fWikHbhwufHkEn9NYojHGdVLixXUhGpnL6kioEubqjUyxYGfsMPWkCHzphkA5Yk8nssHzr2E3n4q",
  "key38": "2PP1X1ea9z68wh13tnwYSWBYqih6szU6npPAL2o4ddvufkEdhfD3ZhbH4gq5kS4zg29HYmm1mBnpiSkA8hxNvAFq",
  "key39": "4WDBRARUvQsQFhBXHpJJhTo7x1mdRpyCgUkwJxHnZjaDpBDBEaNFKu4TyihCGWzwL3o4CwsPyYRsDBonp79qJxFM",
  "key40": "4hRzUHPMwYvCaU1WhPipTGyYRYUQBZkiT6KoVR8oeN6XmnpyaJrr79rng6zdq7hX9ZsC9GstNrWT24ce4S4SyVAv",
  "key41": "2C8hYFqL3wk9ntskuVdhGXjRnp8XwpECBdD6AGXRfBHvCfm8A2qPu1rDBAVz9UKT3sMVqJPfFLgALsXKDs4QdTKv",
  "key42": "54GVFGhStt3mC3iEpsxRq3fmoppXxwmcD1WhTQ2sXFsYyX3RHrwVpe8zGyDa7p8JgxEmdo6gYFeVBgzNDuZgAZg8"
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
