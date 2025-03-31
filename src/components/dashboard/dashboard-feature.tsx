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
    "5ZCVRuctLS4uraw4WAc3vVxnHDAmLRAaStYfEd5f53Ad4mnJYdT1Sa3V4kD3HXBe29VWZbyeFntsYJmx2i9ckfbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpgnERDZ6ABT35GSZRhPR2Cah5E52cN4uS6np5SnQyS4NX6dTtVbuJKp8Hq1EY85jA1XdqQtA6KopF3jLf3vS8y",
  "key1": "2WyUU7acJw98UoCG2XSxTNiWX7woKzBxYJs2rAHQqWe7RYbnWRB1SYZ2Y5XBU6KCozGHepyYVC4eo83LAdDqeXh8",
  "key2": "3z6GhrKhLp7hvCD3JtBeDYEKAScSGD3PWk8VbZGsJBgwRdCv75VR9gntCycdz5M5SGvqpuaQ3RK4XZ5wmDSb2jH8",
  "key3": "5wzdkFGBa6fFjBMd927xz7g9PnVUazXmvKy4RNGdvUrjESzkBvv67v8A8W3xJ1TjFP5Pj2nWAkBME52dG9LJ8AY5",
  "key4": "4J5oB11xepRDWNh99oc57Z9qp9ocpqCvxVntEpBBnn3ri5xJqUHQ2XkFbrBud11sMTtY96fNSU4k3JmiiNJzXP8L",
  "key5": "4qNibyBidcrGGSDTEwnyMTQJrisUxGLmXJTb8LrLs6Z8HRcirSJDMLf3oamzh9eh4nrLPDnphrbhyrvYyGcmv86t",
  "key6": "3beWyVWrPFxKPKTJ3sSgxPfZWP5FHBNdWPpSfNb6E4ajzFHTFHuBPmiPrEgsaGnHvnVz2Dy7eTUvVvv5GTr89Y6t",
  "key7": "52RoHQSVrJeFL3BunHyzC3bWn7ig269wVfKiEZXNFgQYVhL3kfuafqDoSyydHhZMqZdkMHy2dWkLZ5hdgVynHcSX",
  "key8": "4qe8xHU8aytDEUX1MHNRxGPsJLf2Nv27Yj9zpSuYa2UJu14XpKe9ZDiEe6pXqVTirfc89bx497YERDB7EA5M9oBc",
  "key9": "1M8Npxks7k5fZxPFjwofGqbjgnMxL3bK39wXQRNG6DMpkvFHJMbN5pQ4uaDSAwnBJxv5zxgtVzFuu4QkrP7w398",
  "key10": "5rDf63pRvXVmwyUivfjd6Hjof2zvDhkQ1mrzqmaY1UhFis4nJ7uUagFT3LqJbhGtVFdTJWvbpWTdLpfNDfgLXJUd",
  "key11": "5PBwjYav4Cb3WN3KbBVnmuFYfSgUUXNQDxveBpzLUaLgTQrVWWVZwCvKsnqeXhsHGdWn7SCPUwqNbe9WPrmAB7yQ",
  "key12": "4CkKrg2x5hiLu1kdnwKtTaAmdhHz9DHmYpcFZoUHAZumdZkJRrT2t2FbbTSEy7om7G3q5RGem9EvSHSzW3arBVzZ",
  "key13": "5J59oRZYyDLDR2m2JPSusS5arRmFmvWK2vLixCZGZwxuope6t9Ku7B7k9EbeUdWGgCfV528kjE71yDooBSdmYZ8x",
  "key14": "5JFdox1igbeeQ1Z6EeVduWWYwUxtPUm4nLdLao7g9XYQGdnUHtBSxU5JhY67QdNtn6KfXDEMH1Q3RhA93YZSfzpJ",
  "key15": "2rT6ziRXgCv5K8WhYEDADfXU2VgKTxnrcXW8NZKNT5826pAeuoCNBvjtMGtRgbMkxowpwEvVy58AcC2dhhoHCFZt",
  "key16": "2x2ss27xbqJwBTacBR966SBSf7MrJapgLNRjZSmfznLRumuMjx2puTiQzLKQcU8b4pZcwu69ARw7jv7LsbPN2DUc",
  "key17": "TnfPuM97jo8uNvK3S2u1XKqRApW7wmzCENskkE4GWdgcjKLRWYmMfEi1iyW8edDoXbXMqW6TfnZ5bqw1WoRvc9n",
  "key18": "3Vy2ZwbZnyXAPozc3NsrR855UnQgv6Rn24u2sSrtb1SC3eLrMHuQW16QzJHHRaiYmtqcUNJc3crRdXx9icyNQZ6y",
  "key19": "WCnmtvwniXwM3auaA35XAqBKF8t6vts5hMKXRa5pisTD9QNEskjUT4pBM4qqzhMzL3AjrXax7Y2m3iTXtmcdGpn",
  "key20": "3o8vUEjrjFSZKQr6KfAWNPNjuYuP4eX6ex1x4we54aAjhytkUMY5ETxrXpBwkqapSbbNdiGb6NPrTUKUyFhixmse",
  "key21": "3tR2Jc68dEtZrLBUmViYhFb9Wffnk1NruBKpFewvmF85thjVyKgBEb9EynZKhbFAUtXjb5LFkwW3Q74vquZMNQ6U",
  "key22": "bLJd5M7piWnVDTErELTUv2GhZdL6pScZTtZtzD6fPkeSnDAD9pfmwwPhik2GSLTMX8GYHvnYEqCenkSdQ6NfGhk",
  "key23": "5wMcrHyGjsqgjLK1ifU1niwdC67BCeF3oo4ncF97NyK2ffL9NXGzXYhg63NXuwmGex9YKnLzfKHBmqLj15n1fHEb",
  "key24": "4hGvEkEoz9yjHufoPEHxPHJMXQmvzNwny4R6pFC3L3HZacrYkMtg2j4NLWkLfFhnJ6Mher9wALHwFGEqYy3gLgqr",
  "key25": "26fZNrgGtbDGBLqMpJWjCR9weZyZUpEfThxqjcm8iGsR6wxfMF3qbfDLy6LhMXJbV8CwMJageRpBByn7TYW6XUmB",
  "key26": "46XwqGHyTPdBQujkRQQu34pcC6UVi1FNNUa6fRmcMbx9nVgVfaQkdgUDdCw2Ug3fMFtiWt2JjYwN7Eov3UdFMxuY",
  "key27": "5fXqf2XkXPqEpP8mmSn6PMmgDK1era4xLDBVugHYDJC2uUiCGDGGYdFsHvEFmdk5XmXCvEZ9efow4kRmP4j9ctpt",
  "key28": "2wwSPiPzuNGFTXrvdBWKti6LseyrUhVGBTcdUeVx2CiM8mtyVeMrVvR9fcMMr26aXnLpuK9BghK6mtP5wtafF6D5",
  "key29": "2WZTniqZsGcNcUZd5faFP5qqDKFaBjtx7ZUFcMU3a9pY6bJVq9YZTT5mbBtjbybEZH1moirVeQPKDEdztV2QVAgr",
  "key30": "5ra8rVxSAJUDBvqRRUtiGMYGxcegAfzfH3ar6DJAQzPzqYyUShNPw4v9xBageSetfb44YJ18avWkGxYfFPzFzRKj",
  "key31": "2FvknNBt9EjHVAT4V9RaxRe2izyNnGFc74oCXuNPcD9HuRFiSfpGiALLw2XkYUZhcthyr2WN2RkTxn9uNJ4BHEd3",
  "key32": "66a7VNM9HYNefQSuMAz11JHJFS4QLHUGRSFwNnyDgAJxvFiRj9eR8EsHwRYknbNpjCHaoTwkqV96hK1ucs5GJfLL",
  "key33": "4ZtoBikfH1UmmBwsH9VWgSBfniiBPySg86roxm4UwqNT3SgLnXXHuhB5soWS1sjBtZQxPruJNUUEE6Ftesd8a5iW",
  "key34": "rF59y1KsnTvN8SnTKWkKm4NtF5FVQUGtTWXF7fGNnxNyCYgMEJcecgjYfVNgueKBDm7s9K3X2ikj8RrFBLrr3SJ",
  "key35": "2StX4A5LF5HyEELrwUkm8XAxkNZaUASwNr4TL7dG4wseGpvHea4ch2cerbNj9ajBLc44vRBKHKqYP6chocRpir3N"
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
