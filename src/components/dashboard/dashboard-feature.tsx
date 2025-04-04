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
    "CbKs5aXkxQqJ6MUAuqALPdephymobgyLrJMBew2zYn9TKRg88GBDgMNToEEYZS1ce6Lqjn8qgFiMViF4U4EnkPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jx9nWxaGFwswfi3d1J49Eyg6SwQXArnoAa6bqFxAHCR1nAfN4mK7BLrVazPrEtVKq8QcipRkyqwPmXoECXYN8t",
  "key1": "4EZVa7FJRcqAV8miTKNEGbiBSfbNvu4FErves41Jc62RFrE7n1FjJHPh6rcAnD9U2NbTWwjoiV8voDjxBKQrc7qq",
  "key2": "vL4ofHGm4YoaPaGudb8fdtqixXBaXsJEqXVV53F2kte8dnzNV5pEQueRB976nA5CBL5HGKGx4yZsaDbWq592KGP",
  "key3": "2Pikbz98c5hhSqGnGn4dJ3HXENEPuyqtweScALbDT63YGgAo9N1uZu7gcaaafnF8tgZxFiBrDvfM4SS5GuDJTweG",
  "key4": "4T5nfwZghCuD98CdnotPVd6ZSuePNGHXjbpSH1qbsayHJi3MUijoMRiQXFHQKNANzeuZQy59xfJg9Yaa1UKPT4ob",
  "key5": "4FTz23cKS7FKYLzuWSg97YbFhX4pVKr41ewYKGrm8yRVFEtK72mBdUhcy41a5hCFjeZKaVmDTLWaHnjzrMtWUNpD",
  "key6": "4uipRQrizeeVRTas1LKTBEBxrdyqF8fAWngFzNCRFKcKvk2HVCZYLgjwm9JnPGSJpQijXPZJvkWLzQ7vS2daSdnp",
  "key7": "37E6TPCyfR5mWQZDy3wgWK294DVS3MDC2sd3AFnK5onvwir29tCuAiR9QSRLGdbkjiWN9JxahWYEHDJEkDmbwK4r",
  "key8": "5A4zVuoDYJe8VkpQQUyKTWwgk2AY1Drtf5nUp7yH9EqhQPx288vcgQhVLZGP4NkEMxcb3X2YauSfkSmGrUwJzKDd",
  "key9": "62TVk4HrUkCajrtKA5cobfgV7Zes9PbQgm5uy7WqTVNkxvPU3qTAtCTAW7SDeMrz8VmBTq77MRSekTG7QZBcu5A8",
  "key10": "4fwPKzsE4qyau9ZQUsc8DY6Rs2ak9qiJRTHS1gCwZ2i1QaBTVHwwTuWNb7cQkgY5BcSPnnAvdz99A1xQJeuBr6xw",
  "key11": "4EnMmUtRLsvo4JqsdYp4wXcoyJtDqoMzvihAeFjwprqgx7uAmUFYuy9XtFaMa3ttfXkWry8537pbrSQ2iRfNRF2E",
  "key12": "3g8bDLwwBqYFbpRd1kcgiAaAT4iJ7wqQMrhBQunwQeCi42LnkosT6555Zw42rBACdxbCsMxita4zeFTmUwLk9tTF",
  "key13": "FT38J9MNdwBQyeyhbTnEKQdiW1MHYLnDdn2zKtujNVq6SiTM8isEocwq1i2hxAz3UKCtZcVh6LFwva2io8MUmNA",
  "key14": "5qajFXSyVy8K2eG7XVJtpPGZB9fqu5duj4GLpMoAERaksberVGjKm9RXv6uopAaQdBh83PN4pw9N9iyoPTRawhhB",
  "key15": "3N7RA82oeaFVmoQync6VzcRhA7eGN5HTNA2rCSy3kfkLKrhr5ZYwmMoZdaBvweGSs6WERyGeVeZkjQdEzczgEDrh",
  "key16": "2fqe2VfzpRuDN2tP8HTvedA6wyka49YNfVZPKYa86xHKiEk3pCVNReVEzvYQmCUGPkZxfHaEAAFg283w5ZhLDvmT",
  "key17": "2i2LBRhywsEVdx8UEnC7GJjrMG1i5jxDMDCncAFddpMK3qcwum8aYZdRQvS9cnHijsZs2jKFVhEoYExBrUM5Szyi",
  "key18": "3nwMWYssAx6VRZZUH1ZzZ6ux5PC63U6Z52wMSMPxC17DBwxwkMghp1gLuaCTa4bLLeUjQ4PC36Gin9ZUhNnEg7Cq",
  "key19": "39jCPBMeStS6pLJqjay9tiUP4cd7Rj35dsmEPdnnfwHdYX1vdHoVBdTgYufFjXjB8djxeAy7aGBEV1EzrbEXPGGh",
  "key20": "PRfvz52C6gWrK6Kq6UajfnZoDTQq3i2n2m81GcoQbVQF4VAU93H87Lq41Nj7EfeVPwge1zueVtoxBXnEgzTmiGE",
  "key21": "5hjrFpUpgyB8qNsc5aY1zxaEcjnAAgxTuQyiy2vwXeAHR2pEZNXFKCFYAs87xPkdF8CgpEnDqb9dqmgno6bE2x9P",
  "key22": "61WgU5t1vupT3rCHkNUiNbHufyikVtPP735V7ZwazTyoXWoVGdW7orkwWTsJXxi3aEwYGsZ1A2SwFczxZu4a9S5p",
  "key23": "zf1fWjG6BxtjLmTURwsTNmwj8ujnvRZkMXBc6d8cARnrLAiwRL3PfZDto1QGEDBhyWUazcCmjUVQdH8rMEYbqem",
  "key24": "2ZDtsmKk5rZdpbcFs2UuM4r5GXPHZpCE8R8c7qxKHZ5DSEAwQxu6P2k1RaMEAaFpY32E5oT346cTeP8f6z94yJBj",
  "key25": "U7Rfc8xezyrDv35aUigwsFdFPhVwrWiExqryLMvbP7AwRYLMYLvVzNk4UERDapRaukfCwoaRFRb3tkRZ4GVjbGD",
  "key26": "3YEoDurvwXQmgyGZQE4j8VGdLqnE4ARwMPi3xSDwp6qkiUaqwZ5VRS2zK3rytjgSU8ZCrNeNADGv4CjnqW2QLi76",
  "key27": "4Cb8JG79Vww8jMoya7v6Wa7vvULEULi2d4fXqgsdoC79XmzYY47U3NNgonnaUGUUHLMJoiYWDV78VuFe7BME1Xc5",
  "key28": "319uSgT2WUp5BmWagrH8CgQxYXZbpci7sGXf32w9jz9Ejsnyi1n5Zqkkw2HzeLFVep8aZKnD1qkVibunzyq7QjbY",
  "key29": "2DCPwy64XMURXb1Zbt6dpEDG4q5LsQHJADPA8GRMdDq58CL8bbqGtXzenHCyge6QZbKrzi7M5aKHQo8hp1dq4JjC",
  "key30": "xrb5LrP54yVcU8qWcWpTLgzjm14hfyozmBied8kUhJ9R2s8N1SucEaPqr7QU1LD1WgYkGBSj4TWCwGup12Uuy1q",
  "key31": "GQ9wLAp2uTC8GFBrnZAnRhesLfy4QLzPyKToRWKCzuXazeRafhpjdSbQmnWC2q7rhJcM6qzvrFwXqcS9JSR8sDW",
  "key32": "2EMocAALu9V8W6vcxBTK8XLDFP9AxqVsdbStXraxBueotc5w87UcYYgCUQFQoepy3zcaMbGJ2gHjTmAYU5stqow",
  "key33": "3QuDVE6GVRte1orjM7RyXYjjJYmhfsKXzPub9tpBnCf3Bwx2mAspUg62sA1YgVsrroKkHzTm5YYRy8VyANJnDfnj"
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
