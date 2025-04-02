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
    "5EKZQJiHTA6Mco9KE9uAg8cTjFDkJBvhkS6GPf1pyCoWyqa945BhGFvZE7qhkHFD5FGXSCSKMEQJG1D247WNyq24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F7SHMpDCh4wTXwRNMQwEfStzCjgMovBbN59inqUZ2h5w6zMJcDYrmxjQai3TyRFSoZeKmki9Umw6QgSoCgMzESm",
  "key1": "36AAU8sBTyguKhhUEB3f94jBjJgBqZjrTT7CrtYBHSYwpVzMWR95j6JSRPDGJUEbV3kAwZZy1qmxo69djvYhkTJg",
  "key2": "2At99AZsd7PbqqyJqfqNi5X88fTSKLqs6TRBDArTowqMPVygTpz4DyDubVQvm6uDbHuixMMZfjduMU3Lw3U9Pn2n",
  "key3": "3p3dB1Foychp3bomf6tb8bq6zFZix9DNubf6ebsc1LxjEEDSBsyKf3jJrGkGyDvdo3GRawJ7QvvgLx8F8HYXvY8S",
  "key4": "Dgff6KH99bBnWtK8oqocu11wkzHqNqXipnpHqwuGraX8qNF6Lxz3CMQCLtBNche1ZnB6prF1XQ9eTJVHMKB5NsB",
  "key5": "2qzHAxu9DTxn38H7zdvWktJdSCxxnyohkqf5ADEmYfptGPsPUmmfBkEQ4nCwy96imN6KadBRJaKcwyWNFx7oqQCG",
  "key6": "4H6Kiv5VeuSQAUGETk2tT4XGneyF2ZJhyxBbpFG83wcHqzT9Pg19zwuJVcGvbcGLwz3B9fv5HAJSxRiEBDw45piQ",
  "key7": "2Zj3hpMVjqzaoYXZKkF3D4dqdnJ44RqyxhPijuSNtmHdCjNPhU4LBHv7DiD2nrCy3PWtTuG6Vc1cpof3XDEBvA9F",
  "key8": "3pRKpdznZEqASVK3J3vbyQJyF3fUHYwCMBxXfj8HmoMUvaDTc1Rx6FmQevHsifGbAii82W7YievxL3mWntNPN7j7",
  "key9": "JNaFnzmfL2aEujzjnLqtFA3u4LVZxrg6t1c8Z5kdjw2WLEDwQUa2xXNwk3KSY3kopBLhqV3SBZF5FPdhYhzhrXN",
  "key10": "4kKKXzRnCQ26cCV9iumFQY5NgqSfj6vF28XrqcEHqndSjNyK5otGWmhdZ9ceaZNK3YcTr9jxvMdDG2sHdTh2R6MD",
  "key11": "412nW5DMogzXGvVY3pcWY5PsCcSstEXQb2fnboia1gYYNGGYRBAxcskMQXEs2EHrN8GuxkmtedpRkiYmvdewoVLq",
  "key12": "3nsmJAE8NeJz7SgVMUYzsReSh9ndkgT2E8Nz7Qks6uGwKRQz9Dk73wMNQqcNQcC9WygQ2na85SSdVujvLrsfwtNE",
  "key13": "5HReNZfGDetBQGooMy9sQHF51Jq3sAzVhnsruZDeAABKfyDdACGYAKCugtfJhTB9uQ2QCTqMYPpbt7ndzf1MKrWx",
  "key14": "2bWMsyMLi46NQYFy4DQrq7zFMRQqbfDnFMon7bhUdPUWHxonC2XJHyLucZmrXqa9Shda8X8KbY5pa7XbZDtnSm28",
  "key15": "4dhaeUFZpnEDkJ5ZxsrwzGX6dmWfcPthQztv4PBmeKMFwqU7tjq66Y16GbgNwbyxbFtMebwTE8aqXb76e9jshCuf",
  "key16": "3tCyXqvDnRiMBrnycN2QRKbf1GqquG9JjimHhzJsn26rseR8QFkJMFGtpkhAqoVzSarCQkT4rNCAZ9Fhsva9QCze",
  "key17": "3nturbmK6kzu4pZMYmvm4JZLMT9PJWpyhrAQhmDpdvJi9Wpsf12VeZ5STw8CyjVKbEwRNJ8dcGhKrquqZtTiFn61",
  "key18": "31nMfAr4FPXVmNJyaVP7X6eM727fQE6oUqEgq2cNpPDnJbDfXm9VJGpcfBvaDpSSvk7WwmeSidQ7W93gisJBwo1X",
  "key19": "3A5TcKKx4ZxmWg2LNQfBwUEYFxK66X1ZBeUREaATPA4ogh5Lb9uKeUkL8JsqCronUutDuzjHBSaXaYVZ6PEPuBSL",
  "key20": "4rKDBcdW8vtE1jvpjMezeR1FAnNyTCJqCFZoZPwH9ref5Kq7jWSnE4iU7FY8kpwdzBQcVt1CRsF6nqFjDWdE4Zoy",
  "key21": "5WoiDUEv3f3o7UQPAgxfA8L9dhCmw3omA9uWrq4xFhDLgFUov3W9yXdFSmVwGNEaqcqsLvvcaWaBQiTQGE7tk5xo",
  "key22": "5sTHS2pUUHE3NYAxiK1gC4tYv42izygEyYcAap6Gu6zT6REptubwjrmMh5tnWpAWeYeWJmRqFDJAh2QohfiTg68E",
  "key23": "23WpuwbLZxKoaNbNdr8zQ9tofrhnqCuCZQ5atrpnkYK512VyK4FvKQpBKACtzgZNcZBkdZuqN7x8j4Xo7vN6aDCt",
  "key24": "57PuBWxcXsemV2V4kZeNKR9TG2EZmKP7jWo9WKcbDxvoAMK4a418UihmaT999xECfGzCsctYNmq95M1e4DzEtR6k",
  "key25": "5JLtPC3ncWdhWd6w12L6wswrRiFnBmey1EZNXWV7GugcmRtD2t7ydzwXLUbLgHP46uCk958aJ1cUuPxDaQV4J8fN",
  "key26": "5oxRwiTQLhbyZPYmv4rbEXG2wEdA1Fqq3nwVq2ZratUAWpBCjm3SMEtDBrZMBnMJbRnAMD7gevnE4qTi2YmwHJ3U",
  "key27": "629yxn9d1WBWQBEvAMKMMESwz48d7TiQnEJ4bR9PSSheiSMs87bV2GuNQC4bSSF9AtX81ZzKYxZMGPWFZ3ZoxKmy",
  "key28": "5RM6ta1PGiSXeDLnwyCZuxYUB4xRpcvJqsfPQXA5xgG8MHE6wrWGLHtzpvsqjNgjzRSKzUhruKS3Fj1fHeN3FJnN",
  "key29": "36QN8UKuoXPoYTGUoVBR7UVyyyCmkyG7Buhec7sZ4JP1biJhMHUxTww8L4Eakr8GLEPGYXQ7AorUeeBnebCUBCpm",
  "key30": "3y9XqFN19iAuz4NWK5uHAjNEA166NBmZNhD9F3RC6V8sKHLuBYSx2PBSnyfQ36oevejXtXCnohGqcTDRWuPHdt8y",
  "key31": "5ye2tFQnEBqtZ1KmSvKGkrUMetBiTj4FsUrWsf9mAk4SjvW84bpgN5pZcrKkyM9pFtcSCMEGhR3VUBWbMC77CUQY",
  "key32": "idmym6v12J4kiTWerdR6VttH3BpYtqZZGMbJo1xox1yTnTWG6eRTWHXYePbL6Yh5UhcUowJguScBSC7Bg7dmzTr"
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
