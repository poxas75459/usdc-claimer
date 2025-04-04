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
    "5CFroqmBJfP1qRyux4mWN2TaTpYu7ce9UaYwGVWRbfEbgwGv6J9YNhxAwtakjihq83zrHMF2b1wjELQat3PkYeqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64pdRG1fzFjx4QJ7imNVF3xyEJ83mcAsuWffvVXXRVKceCtoReRQjv3JWwet38M3QZngUdfBLyM8TSUwdKXX6y2W",
  "key1": "7dFfWAqMJ5cmK3UejVB52kdb1hxt9HAyZkkExPLzBuke3DCSabzTZZ8izcMJHTfo8PG3h8dPTttVxQcn52LNgbR",
  "key2": "eFYjh193sWnYoceNrcZ8AM5qv8WJhkyZYXQxtV2Av8th4hy5wBxSjqhGcbqkV7CfNia646pi5tfK6bAMuJFajdD",
  "key3": "4Q7yWjTV2wMDnYPQ2Ddp1SDcibosDPraZgGbmM6yNdUpVJn9HqeHm7tFWqMuDtGJhBy4w8zTccnc2N8WWaDbSRxU",
  "key4": "2eP3eukAzQTA9eXmPoSkQzG3v8Uggunv9k247oZfRXrSPAzfNeWDPGY1eAXk7eCJ7bFp6EEGuTFWQb8VRJqZnAez",
  "key5": "55BxsRDwFofwFnhikh6kgy3Uj5qZ2HPJypyhjaKKnPKasjBkF68H3Y4vkaeehS6XwL672CH2bXZDo6bqZD7D3iPd",
  "key6": "3t5etkDkXhVdc189BorL2PcU9FAFAptMvmGpSckPhJ9JRSJzq6WQSSB4vJgrUoGKpsbKfBCj3D7mPAusJKeDS2Wv",
  "key7": "5y4WCLEffQxxxHGJX4TyqVJMgWXZHpJxmEUSsvbuaWkVRpzBzXzdzu1e8DiN78ntdsiQHWuJJiwe28DDfCNEwXJb",
  "key8": "4kXHs3Z4ViCmGXtVBCZaspxtKPLGJCTnKpCsqpxBtX1o5MS8JgvJ98r6EDHnEixHwu541oEK4Sgjs84yQkrhUWF",
  "key9": "ZBhZy3wKYv41HvRe7osXE9wFmKxAKdKedNgcdUNxpZzV4h59pV5WsBHTcsztZRaRkW6gtct7kCmTHFVugdm8E42",
  "key10": "34AucMaZVCXrc3PqHkHF68zdDdTQTXQ4gU1wg4i4W2Jo4rxGNUozSpjQ8sojtTyhus8f3iDTXrAo4snenpybjWPD",
  "key11": "mitjetsynYGJkjqGVaZRwftJd4qcpFCy3ZcTi8BM6WpYqsD6tc818KDHXcmUanWdsaT6Mv1zyDg74zUrqqVumC2",
  "key12": "5KuqTCtYKgZjfJtPha94bvvjWnvvBB2GH7iiVX4vMVxfeXxkprEMZ5UhxS4uXkZfpw7xzHsB8yGEzGPUKejx3wGU",
  "key13": "3FLTAvHVogSabA3n1bZME5gWnWMxZb2khZXvVZyz1SPTe6KZfvwRtKZUqRiA9dfhTT117ZigQ9BLVcrJcufrT6x4",
  "key14": "5Y3SxdUypwEiG4GkegzuDnMxV7uFycqa2gWZTEg64fgW78V6YxkjfeDZhMyphBD7zwFDmEWZQHjKkkFSGTVJtk1s",
  "key15": "4BHf6f51JqvvefqzayHkheRcVjqUSbMUy1cfk3BnDEu5KPobgQscrvveULrQZjB24D8eJkDBcu2mSS5ts9GAPav6",
  "key16": "2gsvR3rGzyjxVUVJKabCZRw89kPTxCV5XxBwfe5xh6nhmnGpW2hWhxRZxY3PsYraUJrPDo4YeWvRJJXVEhvSW7bB",
  "key17": "3VAUo5UVxMFeTj1oEXymjmEq45yf9yoCJ8aBTiRPnz8ojAxJqhtzRejwtba3SRvpex89Yb3rwVt4QUBUBhdkuumz",
  "key18": "5ADQwmFKUDS8wKyhcbGx23WECrrvyRRg8xCBG3u362uZXj7EQXjVFz5RfnfweSVjm6yQcuPNHGLARGyrdjESbV8A",
  "key19": "2sL6K8Nd9HmkCqoZ68WZRDNvQEfr4xftH2UrZKMCFU79toMmreqTmsAF8K6sVtyCCuHKK9aaDnbogDr3XuyaBMNq",
  "key20": "2sYxto9hQuekvNqLaS3M6VPW5QsCdytX6QGW7gYwFJxjdi8M6zrRr7d319hyfb54ygcewyYhKKLdHbdMiCPnZnzK",
  "key21": "2Y2ywqmfVUQ8RQWT3o7shYpk3AnmP6tV5ieBRrP9hKcYA9f4X5xLnyUJdA327yCAHBGtwANULu5Eh9yevNuXJgTn",
  "key22": "5k3YPwa9ML93C1CXMNCvs1HXwgYqXy1WModk55RGuT528cetqC8Ff6GD7erhY7jYrKeRVy5fMSK8UV7xZ4nwPiQB",
  "key23": "26HTu9q8SVakdWBRTSX5R2nazfsFLYFw1bmZTi6H91Ta9Xiyt1KtuyJZrYHHkmRZXK7dxvgvP7hZ7Zg3BH7nwTjU",
  "key24": "Y4M9SyxhZLNE3uDQUSMNBqZ3Vq3qJ4ohGYfozjA6PKyY5BjEKokffguH9DaR6R5i9mdtR8enQRqk7hDdY7fqaij",
  "key25": "MadVQKUjtYFTbmViLT5z3egMRn7DWuEWxRUdW97WvRBam8tzUaEhk4X6qrQ2YuRZjQsqJ9p7GCjtBEQpThgrssV",
  "key26": "2dAjQo8UDNWg9u1fwkMwptaL5tpVHoHd7kxpEKwfAS4wMKDsC42QCVdueqeyTHbBvc25gCmqF8Zz6zehTiYdRSRW",
  "key27": "4t5KUEXhb2CJQ69uencFhfGnYE5jwttAGVGnrWGaXRxqxy1M3788Gd4DCS7nWvx5cqF5nGHo9vJbVT4DgriYQvf3",
  "key28": "4sGT76ZF2hPvUec3RREZcac5Z6YVQqX9HazZNPTU6jRe4VDhivGQRH5GwKDhgerLuSakAAzUM6aTmSM2LHio5Ws2",
  "key29": "3nGaz5pp3Ziu5LPAf2WPXrih6tHBUX7x1Zxfszy5k3M7MRSY7tNZRvtE8vdtW3YR1g9XYLbhhwuM7CUV8Y6bTH61",
  "key30": "S3WcswL3XmZFzWS8NHAX4tvgaKvB8Wr4UqPekxMroLeLwMax8yBdTc7cBo339AFmYDz6mxT5X8MpDg87s2eUGk5",
  "key31": "2y3S2QTLisPdC93shHSRhb5YaivfV4b9NSrRZUNYmaT1tR1rXTXV3AYvJVvXfBNXoumJFKV1u1FBfNeZ74dw63Rp"
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
