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
    "129eerisAaetazfPy1L8kuABcMr5wA5K36LWHwLNzYr1xUkFztZF5jTXob9DkZp7dHPgd41R3jSHf1j76atkWKZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXmAaC1L3GKoNhQfG9YUVt9cfoCBidj5vCAigSMTs8PZ3bXfC7rbueRYkrhMwkPQ7dbptGffBx7fFYzosCRnxFU",
  "key1": "4geA4aA77qG2F9Xk1QY8L6aRC5BurXZFKgs2VMsVY1kpKzBmqo2rXiUnrejYLpxGpnh6WmCw7kHdJrm665aKYmGo",
  "key2": "3AJTFmTkRYiUyJsZfbEo8YJt2WTUmuDABPnjVXhNH1iKSq9DwsSWZPsDvMqUzSKsMFpzZvacZsxcDhExDCLjf53m",
  "key3": "3GHb8rgVFMREk7vBETTXpFM5G4ym5o4yrwE1UN11P9BY5u1bDzaKrdkLpPaQqvMxf1Br7U8EKHdN9j75BCezfUBS",
  "key4": "KgWaKerxGd9booKYjjSYWXkkvAc6y5d9zGfuSpNNjSPSYPMjHqrW49waf8cNEYuKPTvzsoeVWimih1gkfAh2c82",
  "key5": "4oY8qt7Rv4M9JfNsjqkKeMCzsS3kmgqfc1RV4wKSY9pRtC6U71wKQ9uh6c4UVWpi2iWzdpwAheeLngywAJ9cazLP",
  "key6": "22niXujgBbCTzQsWHPG2JT2PDkCT57Cp6TrHTL3utyosKGzMLJFsMqVcrUHHSMHKiejApevpNXqj3YYpyenoSiXV",
  "key7": "5CiEUnvbig2jXzLmNb8Pk4BAPfmQ8Fo6FzkSo5oq747U3ERoifB17K5dPyAuehKFnZfMxh8iDW44NuXq9WX5hV8D",
  "key8": "43zHYTiYxJN3aXcuVf5QcPLatHmo5W5fs98FaNZ4j5KoGbVACJdzUWzz59m4PLSmzhTJvv85Qc1WcARQsZVMgfVY",
  "key9": "2qvfNboHDBxZAs27Uet7Km53VMGpJh9Az3DCGP7W3HqmLyzsa3oyf3tWqToDTPoTTnnDBWCX1nTegahWMsW6jHCf",
  "key10": "3y4cfMMd58zZM2LCniKcVndLKP3JefhLWjXYxeLvLkAHVVoT1FoH7kkYKnntjjw2tG2NPkShQRn33LahWS8DXDCK",
  "key11": "5BLDzJMbvsuwovMmCA1Ua3LTaxoBubUHrW5VDH9xDHCaUSFvQoYzyDPXgDca3R82BSwCmGknXCXrkeWYwmQWAz2C",
  "key12": "5yiwu7aZTDJCQfWVefoKnZDdw6HbLBNNsmbgQmyTJyL22uHiigjHJHde8DWzkDpcxHfme2ygtGTiQkHwT76JAhBj",
  "key13": "HriwSyL9BnzCKYTh1ijggZF4KPTuyyxRRF8RfyWZGbm9upF2wpGdez1MNF6Q3bJJSVGWYTsUs2qPUnVA2rFJPYc",
  "key14": "2jTDhD8NubMxSQsVBCVJd2UnJfitrLLQfPi8kuWRMXwC641TJeRZNyQWQWL9F2sLHtRBGhnEVAEyMw4XwmfJjFig",
  "key15": "4Bniw4opBWpqUUujGLENN8iNMafBxRMgqiy5wDE8uNaYbLAyPcbxec8ac3uMWkkRTq432frG5FWYyJH8gGQtc7iU",
  "key16": "fqUxCPY1pK9CYxeMtzdp89PysinSgqV545i4BHhJiVxWuVpywJGMxYE2kHPdZ5H9bGuwdSNn1Jqn3M4m5xMsomz",
  "key17": "4UusMJ1uhTCZVzS7fFtEizDPsojEWqWXMrKuqobQbyJVHtTWufq4KYsRLAR76WGKh8mx7yjHuXScKZLA5C1svtsB",
  "key18": "xRNYjRcNDqhva65exfM1LvuZLcsHg3Mg5qQ7bJE7YLWQpCRCyyjTsNUyEX91FWKa6jyEiCw8HoRPFjnFuPyZ5GY",
  "key19": "5zyHaPz4r4zUwYrQQv7DmQBkcsAR5jQ6cRepwyvRh5hXG9aJfp23A1ZVDBgxBT1qjNDzmE3bGPxkwH5BvBCRs1qa",
  "key20": "2JbYPHZsP3LJBKQX546xqQnx7UvM3jdERCPh6qev43pTgYYKTUSVW4SALWPnVRnDqUPuVpJnXoe48GtgaoYTuYEQ",
  "key21": "5i3MnJXWmUTgfthHDvs8KcK6duFFerduqZdedzbVMqKQ1xwrKsQc4GwJsaYi2Eng4wBzS8ptMNQaiBmT9igP7jdi",
  "key22": "4CTaF2UdvZXxJBgs4841X1wDzknwWMNhuKuAuff94wo819kx4kovaxFLJtakT5GVovpKtSj2KH41fqUWRZqjCmcS",
  "key23": "6cfjfh7vLe3hCHDarFV1zeZGf5zweUtykSnn77GBoiXRVh3k5bRem7v3yBHASbUyS3bccPDjUK5ANLpdmZFVzmC",
  "key24": "3jThsPi7P1PEuNg3SrAAeYufbP1m5se4Rkzky7GaYvVTbntfLKWWxXreawotQNUnLw3j7m1K3GTcQX4PHaKjY8Qg",
  "key25": "DQtjK6PiQxf7hBzYrqDHwG4DheRiXaM6LvQS7SpXTQaWoNeNCjEn3cGZQmkuq8ZKvx4u4QBsGzDxzokDw3xVZoi",
  "key26": "2RQDGG69hbMxniqMW2J3SN4KrLWrL9khBVJJCfTagLdxLDrnTRksGn81ifjZuPtAp4vUjeeSKp8NCBbakQqrBa1g",
  "key27": "3yHBurCeEjNGSxeyuydkd8HwvP6aLjR4iYfVW61gKL4LP248F7kxh4Vy9U1hdrphZSJZzaZMXKiAUyXq2WcAbamH",
  "key28": "zVwQedEfwhsR2vMxfhu6pqr3envhtQvKW6g22fmaRomigVBAegpqqfYhEjNkYRukpRXihdGmBfkg5stKG21cT3z",
  "key29": "5bAqMau7VxgnRk8zNXftEkWjP9QfDqRwm2ZcUXjoKGoB57GAERCsEovHgyAUo6Pg3ghSrNytNnBefwjUufFttEuH",
  "key30": "25NjZ5i2AWPEkEPsRc5Yrm6f6TtrrHCZheD4biQEbeVQqnJmZTxZ3Ft1sRYUTsJcRAEkRoXeZeE6QsUzLRbdQbBC",
  "key31": "97W24ZsnaKM96iEKDxtCD8BVfoSqJ1VhUqTSBzBdGqNwPuJfMBa2vDwCXKxWuyuHAD5gbM2ZgDmfu3VVz6uDddh",
  "key32": "TJAgKFt3B8tathGNSKZY77w3w7NDcGecxtZ1jMh7jhrpfh1YjwfVN9nnxySmNsEMxgsZtHPtLcbqJvDpvEG5wXF",
  "key33": "6frYNsoz7rbEGR33o5a7AgF5KuqvQcED2mFMbofnzwW476GDTwqHkG7hRVy2Peu6srzSkeDDpY2a6t1b3gQzocx"
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
