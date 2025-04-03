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
    "4HEXjx9846Eca89xed4b9tjHS2f2qrr1Rey86fF122jXfnawSguGvXT7PPJ3r8HzN7DvmmD6FUymkxmgjRTVZ7f1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9zpa9PTUS1jQebY63W29XnazbWJVqKY6ujxJ7BodReTEh5ov6QBTQJa1Huaaq5zWee7Ua1cT6sjQikDGF8w4bY",
  "key1": "2ko23A1ggFj8Ycv8RGZpeKucannPqNKYddeVTNM4winFSfDaaQXc7jJMDq8UCiNeTmGCFPGXFUkN7y8kStvpYY7v",
  "key2": "2B7dnGk1hCvPBBxjy2EuV4SZv6ZTN8ujLRtsFMFXhEfUwEM7uaPT3Q2sVuZLTgywL2WYuuqUQ4w4nr91zBGiHrJ5",
  "key3": "4G9sRHfx6wQtXeguBsHuXpduKNHLB3hsVMbVmdpmqRxo5uhtWRHBMfCH2f3yESTnMwEyQQr3tAiSgYruzTtZ8AGm",
  "key4": "5YKLcUhfN7d6pjgYGWFYcEt1NMA9h1mFw5S47RfeEKvff1DLh55KDSjj2UQFMzv7oQPiL1dbvoTBRfgorWtjDXD4",
  "key5": "2FA258CuU2v1r7mNMvHt9Bz3Bkzf9mb3yFcEv7ghoGnrE5NQjSAHB5FcLF3s3d74oshZyGGHzKeK1pGncmtXFt9C",
  "key6": "3N6T3TcsifY8SGuw1KeF2KLRJSLHNzftfwhSmf8LszU7gTYcJ2xyKRRnBbGLaKw48pfRaXZRhAQ4wVCACnu3bfLt",
  "key7": "3L9qLb4cBUFKfE8Jr1zn563GyLBmd9hotNiLaN59UGFxsPzJc8LRGkvA4NSxN7hwEP82pS54DF5jt6Kmodt4Mf68",
  "key8": "2KXx31eK1Xr8ZPGZfccukFa45QEVguxgQ3WmctyAo9mNztzFCjpfrYm3QbXd6qmfzndgShpqAe3snUrsGaNSRvM",
  "key9": "3nb56UEo5jkpzBEZdoNDhnfezaQ1uaSCjvJW1sUKfMgabJoM6Vy4XgfPLWkyQhht8jTwEHvweBxn2KUTpcsx7rEd",
  "key10": "SjMZKX5ztRBD2uCTf7ySAv5ESh7id14XY5QHqLjVeUkcLoFVnCaaKT86YKCfXY6N87c3mWmLmcvp32BUskQ2ijM",
  "key11": "2eezSJVCy9Mzm64Cuz9M5v65a5tGtqttw89rkHEVAn6MiGXm12C6YoL3U9dkDPKQCKf9NLD5AqHoTwvAkjnsARad",
  "key12": "5GHpSJEgZh9etseg4T1ejwZS4NvkTUwnT9Hgg5uVvz6FENUamzu5vwYFsUzetZDWiXGEebtjxB2m4EEX1PxXMP3E",
  "key13": "4JyBsVsunNLYqPac6UiJqknPkmvuArPJ3sMgyeJNviGzJSELW5YXcWvtSUvFt6qzLqoVtX9PJuxnkL8FBJgGMySX",
  "key14": "46ww5z4JPN9vV6Lvp2kNuD6NPJyeyCS2JrXvhfT9QvKDd5C9PXhbK4oFMKRRRE6FgbjoHZyomx5jt5qXFDvDt3L",
  "key15": "44YU4HxaecRtmvE2kXsqi3s8aMQGYqua6CTU3xPohPPigwWWMNkv9c7wsavGY16To71wYrth2Wk7pvWJw7vJNgLP",
  "key16": "sHBZeoKZesk8pc1B5msVGWi8UVZrDZek4rMWzjYbj1gGApiAPAF7ACUEbYQWvNGBWpHF38tVHkkB7bpQJTXUZBg",
  "key17": "3CeKtRcUeZaNsDjL2hCzqEbrjTXS28ihu9ZZTjA9j8qjUrmQ9xpQvbWUF3JNee73cYBGdGwUoZVkmkGzWHoaVsHv",
  "key18": "2FeQ1usqEGRQs8Rj9TiBFZt4xjwR1t6r8q9SNurBGRsqwVXD88BvwsERSHeSy5pMvPRa4FxxmtoVPtfRXJ96mHTX",
  "key19": "3ShCDpXMikTgfuoxN7Y3pg9cD6j4BBGEYnCEgUgzqHK5fL5XgeeRMkrNwaPRMjKSTRhk7pqsqavgqWa4tGXyLJst",
  "key20": "LESQEtRUzruVP4yC11LY2GVFziV1M9zn39MNkfBxggDFgaErJjYQLmt4NZjmj61iEpVYoEZ2Hg6hmKW5MeCSvCs",
  "key21": "56Gqvp4VkRHU1bUC6DhYJYbtZhp87Vd9Sihmv1T34GKYXuWLQFeQeEnybUipPteqkZA6okvpr4H2jBmZZreNhJNz",
  "key22": "41y1K4eJxjELUMX6DAGxXGkXZAHH5xGXXQLKGFs82omMx5FngZtdJwVafKWwdV4fNcNp8RWBEmByPtnXwpgPfeG7",
  "key23": "5zULVHrSFmywrHTtfBz6dFo7UKTSKejjnNs7VvhECn8H5TzCQiddN2Vic2FFqrJPsAf7eysdEh8cew6Jz8hK8iyF",
  "key24": "3F3K8T7zZnTMjj3fBctAZh1NePeVh2q36iWufV8p57FTUkSKhUozGVdRywKvmqdJgCKGqNdeBTuGJFRBW9TtPybb",
  "key25": "2MZJ9mBPDb7EaR7ZjdxnKyHNcY6erTwsy668bbfhnmwuMz8b38RaosYuPckXGWrtyRB1YQ1iLRWWFL3uBkoCT4Rm"
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
