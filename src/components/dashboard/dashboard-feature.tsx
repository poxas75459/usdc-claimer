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
    "Qfz1kJNUSVpwEHwv4SxmTCLoXgFttngQRY2gKCUFAF5QQjpg55qgwG4NVxySLhBLf2d1kxgL9hkYSHbdYLbVq9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PpcJtcaPzvaKgKkyRQMJEnNuQKELu1g58UpJC86JTCupdQiqBBBFXCKLr9UaaCe1GjtHmY89evaxfPUNrDQ5wL1",
  "key1": "4Y4zKvD7v7o7PhKRtqzZ8sNqWGpRd4bo59LgCEzkatrpZq7pnrFGQGbKjYdrLzZxgBZD32oCXGLmj8FdnEp5h7pc",
  "key2": "25RappwqmWwz8BLt5AowLVL4PgP8Rrz4D83y63auBzyz7K3puYNcHeWvDjzdfoTeVDjgdLUCWesEvWzmpGUEVHrE",
  "key3": "32nTzEuP8DfHx4Rotd2YKAJJR9G5rrCbmPNvJC1PzEbeiMd5gs2tX38s82ACoVs8doETSksWbzdMGKcPEwPTj5bG",
  "key4": "2ZgwUYL1znT9GXPbehNPUEmkHAjJBR1N5hCkZdYRMqRPbQJKZPNyGbQfoa2ex7YqQy2jppVydFJbM7wdFgLceLXP",
  "key5": "5bj2sErVNbADXUPJ8qrw3bk2o9gCk7vEQikgSQG8PxoTzY5msn7T2xYNmWbBCeVEzz677UWrMzYfhmWBV53NNTKq",
  "key6": "4SLY6WgrHNER7icWng4p5Ud6oWvvStDeLSvcmC4BW3nMrz9bEyX2Wu8xeMtAkZN5cPtbn9U43W1wAauRqSgoHZvQ",
  "key7": "eaJvTdJ5EkABMdKhcQrRVEyADz9SRAAerdAnuRyYC44Cqycdj4DT66tC54ZZFx4yZoNRVtJkfV6cwHtPizQEqHX",
  "key8": "4Y2kZCTDZGoE8wkqJkhNt1muke8o1NVuGdZmx3hjEmejF9XTLawCp3ASfjUGn36fmAQ6EBPghvgyYYmBVuLW7CNt",
  "key9": "5mw8WVAa1yJ29cEAWoHqu5Tu6nNaLPhN549JLoFUSuL8PXtbsvhkwjQ4LYxVE4wySkJUUrmMGFPfN8fx3D4VssS3",
  "key10": "34S3YLaVEUV2ZDXK72ENn5QrRkX7fcbnxZ9F4JrE9rkq9CaGBYJfsqBSDe84nPRkzEQ3VjLzLQhojc3Yp35Q7vyh",
  "key11": "3oQK8jh4JahkEbgofCgjVfDH7dVtL5pa8eDWEF5NtQErvo6NrCfRVcYdSJw9ddyuXw3VxLdPC4y7h1ej2BQW4jXb",
  "key12": "2QTqTxKsCRc5WFAtFsNd3FkpEHTSbNZdGdDv8PHUE6214iHdkTg95YF1L8nBgrzyCCGUJvtvhxTDBbYE466MdTvC",
  "key13": "65Fei3KsoLxgxnGQ6C3ZqPANneoxJTxrNR9SHEQjJfVTrRGoi1geSPQooyRw2KyFwpkE2cDTccgKsCrVKgWrAphe",
  "key14": "Ytgxm5ZbTMdgvLCCE7L3pgbcjdLdThehsqwmZCHF9bQkXbhRHeFmL2kBv5QKWPhjXYsCHuxfAzpN2C1wsPmDnp8",
  "key15": "5bE3v8dbjybhcCCZARDkPTM8pD3Yi9EsS4S8KF13ACq37AxtEwuqdtELoQrEk1d5kc7ePZpdgwtnB7XHxJgjb3xM",
  "key16": "3LNopbLvZKE8zq2gERgB3brh5ePn6oLVHuE1vTdNV3azZDhBxhWkJNLDZfREBNiHgNkc9GWDTv9Vjbe4eShvLaDP",
  "key17": "veDS8v9kZ4uQqnavvWnbAy8xQ9yimZKDGwDBd1JoGZrbV5gVV6Z3VvxVXhkiCoDwstRkPvYLEPwHdZFvrUKXuig",
  "key18": "2JnQk6oYMRKtkkPYodGu8vck5rJ5WEcd7t4dbNjvwLuWsGND3uVQmVkoNACvnQcoRg1RpZT3q9wvHiv4pwtzKkWE",
  "key19": "5pSYix38o7u9SDEiPHh6x6esDhFKGJMU2dbjYHcwyhrK8jHWShieyTcB1k8eX9xXEpw229hhQaTVcPkuUhTo1EZb",
  "key20": "5CQEre9eZ5GSj9g7GFec4dEp8B7zqVUZg1pcTECATbJns83P2Luc83JSBRLcJXX4wTEFnwFL7fk2qcvGnKpDSgoz",
  "key21": "4VqUPHv4dWhK7BccqZcrruLpu6ftrACPjKm7o9ZYv3GZfETp2nprT3vzyML1hHUSf8pnytiytseLriyZpJTdGmZo",
  "key22": "5ySmJ4XVkms9zCN5xmEDR2qo2d3XtihPkPGJzmB7qG3FCzAKitzqLpNecQL21CFjcjKDDFvUBtm2GvdVgm1Xoacn",
  "key23": "2Lufa319YFcEbBTTgtKj9zKBYh3ySYPctte3Vzek2DYuR9dmuk9HeHhGF4mo2y6mUcYKB5Sdw9ZemMHZtnHptDUA",
  "key24": "4x5UYhQXBKBvxC9aW6dsBrNgj9nQkx3ZFsTuj4D3Z8i5d1U7tCGdT61ZeMG4Z3fuE1GzhR7j4GiwpufuSLMrrKp9",
  "key25": "4NzBfauXtnT1w5vZCkBjLgaJTQ2s5GtgBRVr6BrdVbuRj8AZLYe2J9vY4mQx2FtboZMRYGQDS1VJVC7rfHEfWTKD",
  "key26": "4jns4sYQPkfRKxxB2NAx4LJ9rjerXFwFTUyxKKXRhDU9SKPUZJZ3XnTtq6xYV6YUNLQaFveZB7e7oLoYgN9dxGoq",
  "key27": "4UkZaj5RiLANfLzuAu285XLME81zyxfVN67znJjYQmnjnK29wr1VaboRe9yrk1MuXz8R4LmE12woVZT2sWqAEd9g",
  "key28": "k7qumGsGodZ4qRAwDaKHcwpwDCPiXGiq6r9j1VqVY8rbqnSHsAfzqqM1saJSGg7dCjywY4xWxNavBa4CGvXnLhY"
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
