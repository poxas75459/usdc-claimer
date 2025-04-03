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
    "rno5qsmHYnRpsDeHz1Yh6Kzev6JoAvBYqqabYfQKaXAFUPaQwLUsYLkZnQWe9hKChKqKZSqXwcmhBziT3NKemkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dAqcQXXixhvx3L9zkqmcw1LTr1kL3FPgU35yk1p4ND3khG2r5po5QPmhb8gevJUT1Re7GPYMgpVCnuY8RLLtWdC",
  "key1": "4EioDEwSXWusRwaAW8LW5V2M5sQtC8btQD2aeRr4cirCQ1dC4AnH2JxiJ7Pf4rWUbszu8r4U4897J8x9bZxfaCQ9",
  "key2": "2TcqwmXa2b3Q8QBqEjw2yEdvr8fvjeR46vyc8ympTGbjQH5APbF766kFYfzt1Ryc8iaNyJxqfXDLKrF4gcHWvPG4",
  "key3": "3FXd9o5KZA5ECmdNLDC7MnAmcZVAQZobJCtQbm9ehk6irW3yuWY4C5t1pVqAap7p3LgUeoaZfiHnJu7qTBJmPubh",
  "key4": "5ypM1TsVSyooWXq61dBJefLGE9L7Bm3obVQvJfHosLXZstBpp3unhtZmoxzuJVHxSm3rAY86ZVk21Mp3ji2uqk8j",
  "key5": "2Bib3v7CuqUCvtpyfQDEGhKdYQ9CFTe1E1EB1Bb2CV4neWDta1yrhWqCiDbW6CEREyCdDS75wNS5ZNearq17uYne",
  "key6": "gJ729i4XaSkPiA9KNtbfQnj4GkoiBnmRJ1ee6sb1n5Nz1cG9ysrgeBhFMEYJMH2VrkBaU9pBrydRc5MJ61A4F1W",
  "key7": "5SoeFWbALbMM2h5WmwZdUEUYMSSLnZnwrydT88wmtZ4Wf4fqPjPnYXe22oapPrj3z9RmBRohXNcj3fwqRVnZfryK",
  "key8": "2jK9sLSiQYfD7yy1KhyL6HzdBfMhAGFvdD4EHowDaEwPMYc74M5Z6f2UCiEdWB3shTDMmtJxKBUdz6WesoTqNKF6",
  "key9": "4TVZm6Rkihbxge5Ua1gfJgKMcsEH9Aw6miBemsbgxzYKMfoxVuTrV1LYuqTNm5BzS7kFQWzJwpkbvV1r2kSigChv",
  "key10": "3CekzzqvWZUYosQnbyP3S2Z55NncrppZtRDFxRNxkaXQwzGVz3zza9g6cJVGdE5XoiqS6abwUyTX7vkjAtfGsGpp",
  "key11": "5HwSzGqbmUR9HAF3fRJhMerzus72wxJSWFtYP27k178Bmtng6MFUi65RqEqYgvzKQYz5Q9oVk38qxG72dgC7vAsN",
  "key12": "2TBRpmVZ6LAzHaBTpSsNTCYewYpqunDDEvdwinkBNmLNNbLYC1qvYbrKiDMSgNqN8UjaeiuVyrTNxwuRj8xCgyog",
  "key13": "4FUxddBLAafWNenMtmDgxiADPH5NSHBGwCooZFZNvjdUP9dSNQGpPZmgeGwiHq9x2yAA3HcKbYV32CSkrNmp118N",
  "key14": "5PP5khGcoZrB9BB8ipjbw25hFcMaDzK4nqRYvsbYFvyxZTCNk6vcMBnNtXoKApcQaTrsK3hcChdHicJofh9VowYp",
  "key15": "3V3WiPeCGKcLaxNMJ9cad1gw7rAGMQkpBLZLwHBLxGGpnKpeY3FRhW6DCEM6PhN6g2KqXC9wquPEAN2RFH9GaKBE",
  "key16": "JyBYAo6CUnM2yHZbCRTAr382J5vwkZNaq4xsshDhRw3Wy2vDiTBCRCMq4LqKiAmkUT7V1DEeghpbNieqp5pmHnm",
  "key17": "3o9VCH7ZPZs9zS7L8krKRcjLJ8FwQHieMS9epw4Fqz5kk6hqr9MhQph4GgZK35cYGnQpvLTMtiHAHSCdMWnMDK2o",
  "key18": "2Pc5AejprQrhRRCcLazf4WYAJMjBnnypNPN9dvfpFkQ9ub7jPF8YDiGL3kKH1AyLgrvzaMUUoWBqPZ5iZGtgV42H",
  "key19": "58HWASRr9c6HNm1uN1mfojyPbJ1QcnoVWK4P2zLj5aaBPQ9suHt6FTLtDy356aiikK9ZLHyzZWHNHjoNVwNeH8Bi",
  "key20": "2CfPu9tYPWNVH37LWJRBV5jkjzus7NvPfih4Qzo6VeHqBChDCyUnAp2BdEsdYHG8Jkf2L6J335tPzzh6fYCrkhut",
  "key21": "vdQDpAGWwCqySHNQppbjqgkmx1EiLmpCoBiRsekEEsmC3utTji6sWBPaALxtHdBRUHGmfyneqVSDjJFZtmZmLPC",
  "key22": "5vAQbpqoeA6ARpAzPYEqxKS1HEFZUphTHDPpJkGDDZwvdvMS9sjMaGRsXZcvJqt2HCQmYEv2aeN8rgH5Bp6o4t4u",
  "key23": "c66pHKREJBQKUMcBjdkByWvgRgzv6QtQLHrbwNidE7S6q7oYawjXWUNkadaNgao5zRaXzM8k5GoQZdJ1U5xm6U4",
  "key24": "3oktRCfHdzRtRRocZ8giVooCkjucLjwPYHF4JkNNjn4LMZy9oHS7r2fVRhcVM5FRFPePndDidmy5msCpn5h4RfSG",
  "key25": "SvJuUtng47eXyn4KyCHg6JbptBF6brK6xeDBQJkj9qqofH8GxncRWZPkv8EcpgvZ4heaA8tJhbfnytVZECR8Hnn",
  "key26": "2DY3JWPeEnST4GARgz7RjKLjHr2mRUfDwLKf9SoWZgviW3fnr4TPSHXz1kB3NqHZA69ucK5LQYybgV6EYZYUeqp",
  "key27": "5hnv5Go4P4tLK8hnLSqYQkcNw7QbX5AYwkkb1b1FtFHMqMDVuGKtpEvfbrKg6eQSzUYzDNSYwY3AAsz4jt3J5L7N"
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
