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
    "3rjWxE9qBSsUJG3sHCToZdERZVM8E2eWcN3fDixoBTDMSB6E96Qs4cQajtNymd5fWfQxEhKtk2pmvCPVsRoNGCFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKD4Ebp1x4CuKnRbmdbpfYVLCBg9QDVXDocCZQiJ7X6F9p6dJt43rLkRYXDH3y6SgVe2SxHUHsifk8vgBjNEswZ",
  "key1": "PrVmxePcLw2ya7fgXWnBSfVsE5T6x7WTUL2TPBx4ComjNsuar6EN6X46UmhKVS2sJyx7CGS6MckCNaHyDbJafEG",
  "key2": "3wC2yCKVeHaekUJRmwU6pGYNjFXK9cj5wANj4MZnTAsokFkDzN79s6gnGF5GsLxRCn73DxceHeRXGgYY61aRaNau",
  "key3": "3mHPgKv5YAx4PmrgurvyLFrG947wX6UUB9E1AqGqDSemgBi9yTrB1AXjwjXKw8bdp2KvwwsaqPD7ZVFVEAK6DXBx",
  "key4": "cTWiZx7vNRMnPFG3wTs2qWuRbMYN2HSFUvFyE62u56bYw3GnCuwYRV8imDREhGJ4f7QsRz4ssHJAPsdTxKTLUzz",
  "key5": "4VPKWZVotcpv5haDbjqv1vaiEGfwRagD2TdrEwYXfQLvCxM3H1hSvwGX3Bq1krLJQCpnfXc45tmQKNtchp1mboez",
  "key6": "5t5TGB6hN7WfHME89QUp3PxgyxKfRt7cgs97CJW6vjqqMToD6gusNfV8NVvh8jxrYgrkcPtPGgoRzGiP9Z4xi3Wa",
  "key7": "5Z91TW2vAnW6YFt3bin65CT3naNdcmRa4NFz3yZqTiDRnmyBVGu1vZ5mrN67pFPYWdbaj5eJKmBsxALgCKMS57h8",
  "key8": "5CVibfc6uhHJWNYDBpftc5SPrgm6qjuRk8of97NtUfX6WkKVRqbUvZpHyVsXZr73ZkkCHbS56r4eTYZfSnTMQNt7",
  "key9": "Do8UDtpnKoc6wUaEXNAQqTDgWcc3zBguAQswRzJp6BoEDK5oLPYfot6QoKSQdAEzqNHQyjysu46A16sgHAQ2EDX",
  "key10": "2gNwoGHpXm22ayfWPY5VmXA6muMvqMc2roJYTStzvffJUwNAzRHomzLnSZDyMwuCQdTdiWqNn8FMEevpsBhGLGh2",
  "key11": "2K1odJ5WtZNdVbT6v2jHhEQdtpd5t4kMBJFuj1Aph2w2wbVHhxoAgMAsL3SUchtSFfFHdxh9CqxEY2x1QmGgG3oR",
  "key12": "3HxQDooemaUG6jF2Yuu87fnyR2j4Ln8KFp5Lirfs8F9eBuC55KVjF89hxJdkK78S6DZ9eB2i6LAdYeo2VTz1vA3d",
  "key13": "2GcVq5VSjeNKt6AR2UC7Cww2LUkfXj7Qmc4uGwCARTt3bMtE1sU8dNvwJkVdkQQVWoN2bKtdbTH1uxnXA3nJs2YE",
  "key14": "4soeV11hV4CJNMtrhv5EW6Wv4JQWq1r772AzWA1At8xmTKeUhYsyjnoJGSaFereB6v9n3fVJv5FL9hR7SEiX8xW6",
  "key15": "2rVyeHo7CE6ZsbT7mc24tsoKzdK8oU6k4YW8GY7Rxp7KBV1EhZtiXZqSxv19H2WDztQJL73LDerFUiTL1jSaiQ2N",
  "key16": "2cB311zoznsgJw4iUgbL3KZh2xZx7JXZtrTeh8aPaLAjT2Bm2VYFRkAq67SzFsaZRLfdsgYMqLP79GESQbJaTjSV",
  "key17": "2zNidRAjdh11aH6AxDSPsj86qWpWJpDS2NgF8CvpAKe8bvVif18hVgUVpkHZc5keYDZdM4mFcF22EsCFKCxKES12",
  "key18": "4VEscdfHE1fjtoNYjFx1kDANHJQTp7ZmfVY2mGs84BLcvkVFzfgv8a1YtUK4rEkAP83R2Y9sB3bBwwLoEd7chafq",
  "key19": "4YjwjDoe8SW5QKeWBwpQAHo4L9NuopnruUjDzjkcDbXyZhsaU6rLZCWsK2cPn8qMpUHYk4aiT2mo8rVGRhx9fVFk",
  "key20": "5YALa3LB98xM2SrTiGU6GvStzZZqZfSM3FnPWQQwezJywwtnVrdTPMvvraEt8smKWPzNQ6NBjT1dWQtg1dAQBBHC",
  "key21": "4beNnsSzsULDjYLwrAfFt8vA3yS3TjmuQZne7mcgJ38eoFiLQC9N7LbLHGBrRvWjxktufApm1ZEXo4JDutbyzUTz",
  "key22": "4udFPcgEnvAC7YJMob7wRegqEMoBwWj1iQsr7V25BkXNTQscpBAugG988V4zYcrxk5ypPgE6vxBt6yq9ZFTvXGK6",
  "key23": "42K2zsEd71e2Um8y3zQq1CaFkK2mrB8UpE6x3wtC8zjkju8nNehWdzDxbKwwpe4ef99zD4iJf7kPkiggMU3S75Bf",
  "key24": "wdDBJvWx8nA264geworfdR9t26mkbt5xk1o77Pmjvz5szZ6eGAYnhrKkrgMoonek7UWN3uQRS1sX2aaMuYaLwrF",
  "key25": "2UWEH3fL9M8PPcGXcarD9JV8gyyRCckdjza7CKxBSdqGinpEwpfpxDfwDR9wBRPk1tZWP35daB7eYazNqBtiBxs7",
  "key26": "2AAixrjzFgXUXtSyR4V6uodbQQCJAKe3krm5NKjY2r1VdxphVjGEfwgMFME9aF3EmkBWCjzTV6qPDWwSUw2sZSGN",
  "key27": "3imyGbLzYVgJLbprz2W2Wb7TkiRxPFjPZEGS9npRyrTBsTcx59mPq8bD8RaYc6ig4p5ZRJ1D1EGkNo6W3XMud3nk",
  "key28": "4MyRPb5JC2RH7QMa6h2wfXRv2a29raB1ucz5rR5r9vWh6hUWgy8bjXvghKZxktZLFuKDHimY46yhzTBXzkGG7xUB",
  "key29": "Zjn2SFt5oeRdEQCNaoH7EGVHz8QKbwepB53wdf3ruCz2Xw4uCvPrLduXo5LkcKKi2S3H4GaxFSFewD6cqQUPQZq",
  "key30": "4cD1NCnPLJ7yM1GgM6TMpJihE5YKEW3usBGpwBSWFm3522CzxhHQYhaVK7PvaLbpL6iZKFEPsAz5MQvrgHuP1pzw",
  "key31": "361Ff9m3DzPTQ3JnRui6dFSZphqWCRoqdX5DvnoEPVgXhL2FjmRTJP8YRo84aNuZRqpt4CKJTrgcBE8PeUfzJL7e",
  "key32": "5e7WvhL4o4h6GbJwkaDdi5d5du5gLxfZAKVZK7G6gps63rbycoPxUqfVJUw7iwfvwvHsCYoZvtSHP9JDCwqS8fDi",
  "key33": "3NCfpbmLrUgpLkxS8oUknCo8uJm2VWR9A2DJRU1T2xDEDDCgkEdugEnFzSk2X4TV1KXzwX8UwExfQbhnzbudEx2t"
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
