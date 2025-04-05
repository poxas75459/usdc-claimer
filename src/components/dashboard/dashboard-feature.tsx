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
    "36t6K8G6gCkh6nZPkuz862dkaVUSWacX9fQjM722P1XbXeXeCacgAuBMTpuMnCL9sYeuLfHUFoFD3K1MF6jwNSyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67FxZcf1yTRebmTVR3dn1hhGUnfA82GRCVotGab2Vcj4ZBEZJWfYjXJv9siTFKS7Z981ZXNPcFPMtqgxNPziLK6",
  "key1": "4bvhL2sjsRaubGnRJMm7imJ22kqApoJGP1v7GMX2fNED7sWYtN83GFLWPR7PwKDDZBzen5ewkY2CrTpgpFaN6rkA",
  "key2": "3kr3cD9ktQtxfgZvk7VZBzCmuu68KnGqxABTpnPiRQnAN69qKRPB6sNQDvVVPqSEhtvnbq1ujiSt3XK41d5fp3Cu",
  "key3": "25siL3R6hsWXmZz1MUAdYsAJEY1MQ2CbAfgvKGAAxB63WUteGzbVcbN2CGc3kpuarWqTaZhM8mTRbpGqV8ALXQJ2",
  "key4": "5v7wjhc4Q4c2UpCJtpCATZQJ3qW1ni8e5s5V1a98KComicNsDymTxWM5jBvQxfyoabq5rHNSaiDLTziSeLPUfwNN",
  "key5": "5EMmaPausfkdqmRNf4SKKqJpRMP5seHrdE7b9RXANHwwjpHFtQScyYKPiXECsjRjA3kxRygyXKRGBzbDjwr2hMnD",
  "key6": "MrycqCN7rRXe1QcUrzuKis9pwhQP5Vj6tayt3hqoFmhHyFysRkjCjS5ecsFb9Gpy41MfuBjhB35665LL5RabSxT",
  "key7": "2hyT2GTeDeizs72Dnd8QpCrTJeRw1iMj4eKBrzLpBKe4S7eq4pQB6oQEWbQNfeJMSzh81iTPbvaayCH72TVjQgEC",
  "key8": "5sPjwH5Y6eS6EKfFgEuqdUUQbwuLAQJUWt7czCy26ZN3kNyoTKP6wrWZjRW3WQoLSbcrERt2RgvnS15nVQ3G69hi",
  "key9": "5eMuE8WQTJXKRyLfXoFCwU9eyqhDKp3QS6GcJi4uu9cnD5Wq5uBdvveWnWEorrqmXkVTUaxGpUmajEBEqk1qKKMH",
  "key10": "2onAz9xV47v4DHvG9mkyYr4LjxqgHHSqoWH2wQiXg4G5i6UoiRxCy6DqmfSB5wjmdnqSsVK79eKPPBNXXeTuLKBD",
  "key11": "4T7B8jroB5CjtKDDPXUWugTQZJJVVvyHRBncRoXTHRBrwqkwTRJ6xmhzdpCE4niwh4R2cLvWEXMckAhaWY76hLdU",
  "key12": "2PE19SpZQc3W63pxWWW8YbTFcb7kLtw3Qmw8qjCxidvLnPczvDLEj5WiPfjZk7miLfUV5ELf3yHuzSp4SQSMa5b",
  "key13": "2eYoRjrnQGcmjpFt8XuCq1tq6jENDm2XnXymtfTYNJaWENnrv1Bp5h55pYrXaW1VSg5d4qeFJ3s1uMjUpQQgSTnD",
  "key14": "52hT2azLntRG9Xr5mBYKqDivnJQQf76MZ984uQa4E2WoMKPo9bpsRQ5WN1a37VRpwpAu2JfM1sVedRSdShchR6er",
  "key15": "3wgNauiMjwbediyGVZuLZGdxWcKNo1V1bW7RvWhXzpZKB2jsPTQbpyEYny8PYdAAc13vLxePpmTKhhfySnisxT4m",
  "key16": "3bBLF7Msm3NZSg7jfVxH781UEBfG94PruBCiP7bN5Nxo8KP8t76n8PQAHyVZdNLFAGPdW1ut9tnEBX5ypTHgkKLY",
  "key17": "WcXoLWych834vS3xksYhhpHUBAasAUaH8mDWkJSXaYeipeftp6K2zta3ChgYFE3w7Yc3Bc3DUBt4KMwhXHk3bw6",
  "key18": "cfaYmR8tdgh6VgxugkDwrKprvj2xz3Ktum6LvJwEMMdaR1JwHk6XGTfzfXAtgpuToq6rpaCw3y41zeWQCTAjeT8",
  "key19": "3TnsL5RQiPGarqE58zzaBim2bd2JhYdnghwSejgE3MB6JJktij5e62Lhek6E4xvUNxD2CjbBFWY19BFcG61nLcVh",
  "key20": "3acgNUe6VPMxRcNGmm3G5cEe6HEWBwu6D7aGxGtzrkuRtjZHnGe55DxqQvVHKt2ogRHjVFnCSacjpWeLPvGG4wR3",
  "key21": "3nZu9VukwFfqJhguY2GY6ANwoU6WXtXQuXn43ZJuLfxwUdWJCvgSAZE1tRd63eFJZEY63L1qkyN7cP3y3ezCM9kh",
  "key22": "Ydzk6guZBmJgh6THHUSeYgyNzzkfybRF5KbV9cbGzMHKYH3cfaGzLV6bzXUGyVtgAhceXCF6zN5j8MuQ7DXAnpu",
  "key23": "XsthDqXzpuCo8eYS8W3Dxbj9V4ac3UPQt25NvUCLpuGPYvQ2pPrjM3s6bHPMkvdJQbz9b2B6YGZsCyYpvujxDHP",
  "key24": "5GFnRcHv7mfzY2qNz2gbjJDZMqV9bymxDjGamighhmqjajPFm8uhi2FpcrTVZckJMRBPXqgUAiYPSgiv3CATWwC5",
  "key25": "4ErT7KHtVgZ2d3efoqh5fVpqShg5cWNWeZCvCZV73b9ooj7ZRzzLrubGHbGcCtNyNjQxTLcYMR6gVuLM8opQzsG8"
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
