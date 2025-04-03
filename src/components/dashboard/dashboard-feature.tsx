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
    "BDXC1WFfZgKgW83ccZT6pVDw6X89Wg5GT7B2CppmDnMjeuCppAGrMSym6hVMQd9WgjD3E6GiUsTWdtvvxTzr3Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQEW1PXk7Q19CNP3vGMdnEH9PEfzr4bp3Aq5Mv93g86oVTHsxeCWDiZDFZcuznTWuFMyqm5Hv46jihF5CosXNDZ",
  "key1": "45CbzkPSTSnWvvTrbNLQ56Tch4Zq8Q27hw1moEubZzVBUc4CZSsU67yXMzeCMbsdA45umxDPXy78kczgVyjn3Lnv",
  "key2": "5uusfKLjVv4jrSmMKJjPrViZmST5tcmzqWm215rLrbNebXyUH8RdQFtFpYXiNidFYkLYWaSmvamjFD4ngrtLe9XH",
  "key3": "BPtvPwS2BNGVdg5Z44kiLCCudS3nWNhg8uoXG4tH9LrFsmzW2wQ98Jr9jmM9Uhb96iWXw6PkCBAsENexBKFGaRP",
  "key4": "4PBzUb7iTJ9r6jo5dFQmVzJWySwXNYBF3U6cw7PqmVdC1mFao6XfCA9Awj3KFqLeCVA8qXis5zUjfEsCpsDfkF8y",
  "key5": "jgBABYQfynRXVMh7nbCiVfBfPWLjWX55owVchJJCR21PMSxkRbh8rBUUhpMxZsVLFsUS3TmKCURT8KUB46MmH2o",
  "key6": "4nfJzZHZBE9A8EuowLH7xqCgUh5xsHQzVJpL7MRkzQBVYvsyRGQTq5Udh9Ghdqx2F3WYP8CQ4HHrT83ZMcctm5Z1",
  "key7": "WdA2eHzSsf6assN6ACNopt7QG6rVZ7gc6EjQYKrJgmSiqSnSMECGE81nuJEG99wmsrPrpGBVrY9XZaiZPedsLp7",
  "key8": "2mAWTaM6X6pfQkeLK13bLYNkqJsjYHG29A3zvwxNdM3GjfCmzooTpmhVGa5cKQ88mLX6gwiEfa2zKbYAM9ozk8Pi",
  "key9": "ydm5Hxo6AFuquWDecpLYxi8qTiedWYshJyUzNvSCpBUoyoc2KYjPUzh6g4nKHAU8XXEvuNJZAJCVWX6uskyKvoL",
  "key10": "gj5LBrwRBVDrjN32xbnwPoS2gA5vVqE7rN73rtKa93Fx9DbvoUdw9tbBaVbHbk4UW2tDYpiRGCcpYqgg7Zf3DDQ",
  "key11": "4okkt3fqmESbt4CAZHi1XGvqCwgeJGnmC2kL7wGm6taML1iMAVV14Dh6ffe2dC6UHHEp5TDPt53PjyFHxBGZyhgM",
  "key12": "5rd5b1k5JuPKUKKPFjfVKCxZjidu6gAUu1ANNbLciA9aMkBSvifP5CP6qXi4GwQ7d73DDhLnEQFJ1SGWgoBEvcmx",
  "key13": "22kG11o7JWkDYdopaGKjjYLE3yQ9PM2PSR1FRNKyntg1JjeGJad19Doo9GsRPpHqftR86zPMmuxm4C2ggNV7v2xW",
  "key14": "2SeUF5NVDh2LwA2FdSvwtGeZnpA5dshbUfW8tY8RGgUbRYRQJZqGiHovLgDcDxH4o8k1z6dpLY99cs7cawSu2hrM",
  "key15": "2Ly19r5MT4DPLJagSi1wDR8XtSrdkYXxskUTiJdAjAo8xe8ANQ6qrE6R4qJTdCJxpdQ8ujd9rZPqxqTzjVN3s7RV",
  "key16": "28iFTDDYBGJzv9Em12oYQ9xkGLpViEafmCQ9VTe8mcaPUQgtq7csViZLV7PAiqkdJik6AbVYfe3vyzHiM33vLB23",
  "key17": "5ErXdB7tvcTwuHWqy6wPikB4knQzyUcRBoHST2aGtd61FDbKshS1GSLtKgWb9RJTHBcafGz9BChn9M1Sv26ngv6z",
  "key18": "2HhvCAHVH4qu1mBQVY8cBuBH1wCWQyqdmAVhXjYWQd7giZ9a6AtUsLpnmd4eEVWygjqRpg5Yb1C84ABC3rX6suJP",
  "key19": "2dZUK4jqmYdAyXD6CKnVWU8xRxTxzyBEw1Q2TuWyN3zoa4diFBKQDVmyCJw5vcp3xRrroZrKAnXZQBsfPWe7FSAb",
  "key20": "2MxzvRUTh2LtL1RELB4ACDm4V3iEKQbgLMrRnVkopnW3EkrxgpAS6xYgDnJg81yR6AsGeQFfM75nnGV8i6yUjNYN",
  "key21": "53mo1tTd1HFbYV5MhrGychFQfNJsa5boBhwLcE4Q2admeo7zY5b8s9JNTAFa8SUhqfLX8vHCknFAWWLP7YvYD9qg",
  "key22": "MjtVUw59xU3CKCU1psHYxkz6JZKSmv6qJXPMFSrjpTF3mceL6nRCEATHtbreSe9x61WsbvbwunReQoc1AW1qRBm",
  "key23": "2n3styHQ6TL22XcgkM3TWX9yVW7pYNtFkfDky9STHAjPKYcrQzUVar8UqVAJNeN38tWHQ7jVWvHMN6XdZZ1m72sN",
  "key24": "34toTs2d57o6M5o5agg33DtTEfKj2aZwU9Nr5ewW1A3t35EHH8KExMbitzC5X73zoFSPFLs2i8fL5WRxmJNFFjab",
  "key25": "45KjZfAHA2cfxLdiShHY4Xfmoswv9EfDhBdWWYrjXTZstuPZtgbmZZXuPB9HNZPpxQXzEgozaC22V3g1ePiGXDeW",
  "key26": "MR43ShY4XVhoqYRf2Es7w5QE6AqLyLujfPnoo2Cs9juzry9s59rfzvSBv9sbXTvBqxCskBjEehb7woZXjn4SR8U",
  "key27": "2FQGQcLeiVLyZyLjdaeisPfydYDBXYKqnqotXuyjVFFfeSPVDFtUZMHtVFpd8wPFkxaZPjuPzGoSNZuvANhuD1eP",
  "key28": "4tM3JWowwTku9BfZctNhtzDzTrBChfjwr6LPM7vYoCzRUQ2YmFY6A7o5wCANds9yeeftBkTsQaLQADth8ekzpvsc",
  "key29": "55MHcY1QbqYfFG7SaXqUMiFK3v8UyGavoTUqCxdb2fsVyLo7yvdehEsqEFbURusfhPRj33mbEX4vD13y99wgx445"
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
