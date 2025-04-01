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
    "2Uq5NRmRGz68HPei9NGYr9gEkdd8hqDxxibbo9ziHH3VeDGniC8UEisWxHX9WKdxeQajtk6PuoWUUGGQreh4aNeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmmGrPQdvTBcoVsN6uDhmpNRBWjNeSfr8GqmGFsYCfEQ4ui7QRX3mAvYP1GRahE64BFkyuquz8Hpfu1xVZDjUMD",
  "key1": "41vJGSjJ4BiF6dJDnGpyNyHz7KNyJudHgzEqMSesPuseTxBYQURkdQsHXTNkoXQvLEBGuW7KDyPWRKbpbX4BNnre",
  "key2": "2ebTEz7EiiuLY4vRxSACM2Gk37yXkfZGYihWLkxmHPwrQMYNLjd6naXVmkiY8WjfxEzczAxjSjGHUnYcqrd2FNr7",
  "key3": "5H3wHFPj68TF7cdkrvk3qu1q4qtm8MsjEbhRrLPKgGbasK7gm9GuCFHW17r3axZwyuyq8tbY6hmFjT4rmCWz6cw1",
  "key4": "2Fq3QJMSgArm6AaRtCpGVLgTt7zVnXahteDek3UWMzHmgBPP5VbgLxenkPtGiBpwNvWCjAQ4edrf3ZuHyFeQ2Xky",
  "key5": "9zD3s3FF4Ey9JipjAyPs6fFB1L465B13BmHYBrP7ahJUyfNgkT3bKxw1BN8bq2GsZdmxLTvQjUgKabR6ZUhrM4q",
  "key6": "4ii1yvjkW3aWo1wit2n5uHJ8mXvWgMu7JTgJq8jJ4EPuLgq6K71oH4EC9YfPL7gkgn2NAgLicBUo8d1Y9gSTtQVm",
  "key7": "3CzRkFd8iThu9yewSY5kjYNWvcEn4osQxfHv5if6iEpH3Q1rnswmYmj3vc2nXwps144M8vrCFYEd4tC8MnNNU1oH",
  "key8": "3qXT6esE57PYoKz7txW4cEtiNgAoqRGYfdBxUGoBYhxPbShD1Pn6Ew3WTLNZ5yTgV3S3cg8ygDVtQhnugxZj6VwY",
  "key9": "3HC3ZwGtYKr3ANiNbJKTViiVve7VGbuCc8DbmaP5ZKHpmhddDcSBWhiWM6L8VDueaUq2ZopfUcZoWVxS6mBMzM4L",
  "key10": "5UiNnaAPTCYbAHEETB3Z9VUWckhcFCbJKYYRBHjgAxFzWj7R2CG8kG4ro54ncsV8Bj8GnZkfPJj2jwQuhiyVZQFy",
  "key11": "37ar7BRvBTraXEzqabvjJZdKHsig8pXoovBjZUnbpS4WwPxSVm6C1XW2aFHsrjbQEjfpzFqLvpFEygm3LtSqNvS8",
  "key12": "2bkMMj5f17AUi6XhvRZN5TQYmSq14HrruaDz1zQUbTt9Huc8CrJ5DMvoqdtHQrLeaSF1pavqEZUgXTv5JgrKsXce",
  "key13": "5pYzHMX8hajN8hq7zJaGTpvzDwc1U5cDwBYx3MzWJvjQj3eDPVxGZCmWoE688rtBA72Yo9KNv8PZBqSiW7Psh54d",
  "key14": "2FNm6VRE7G2m8CTRnPS4YLwu3ei8FPPNfHYaq8N2aMy973RDFvoJBq3nuddnpHa8GXgzPSB8Kpvj3qPundJmveu8",
  "key15": "4U2xddNdWyE5RoMGcVnR9ZkFHxcffdrDyZYE3gHViFSVYBVxZJpT6oYzcAEN9LvjKfQMGBVJZZxFtNRL3Eqz3vdr",
  "key16": "3SPe6buAp8keRtXm8iUtrNCXwsJCSwLKckBvYYahs8t7P11hiv3JLo6ye5phku6BgR2RRJ7GCmLDRQSzx8LVg4tB",
  "key17": "5YUJpPUpQ4o2NKEUpiRLTXFz6TXKL46q1NmpjSrK7tYKovmAwtEpzUuyK7epLxbDwZB9McC9LfmCnur2Njfb6AcB",
  "key18": "2dTe19bRpxV3cVP49k4AUodyeE3ZgXKeph43XYXY2yD4vcvpunq8exsVwRUuvweEAYsVmm5SjVsBUDXCyJMmXhUB",
  "key19": "2zfsCDcHtgjpTqNKReZqQVHL6bdGHyXCCnY4zSNnC6sjKtFoKF6vS3htjZTomXQwBSQuhBvtWrpHoM3KP8oAaNxU",
  "key20": "4P7nupRH8kKCcK4uZKRBNBica5EHqLFVXB5u5YdgdaTUyBqHUbufo2YQukiSmquamSYHT2q5um5wxghkcskEQwuU",
  "key21": "3wcKkgsMFdjTVasoBP4PWuQjZxZpWXc5c22c13CfbhWjUiAiPed3zmgotJc8wRyYgBjDCPG9WGST7Y7PGQBJn3bf",
  "key22": "5Zk16EKaXKAQipvaSK3hAbfVQ25mCdWzuPjN3bWVvxtT3bcR3dDBs627jh58J8PYvLvAyYzSNNxHRJia7maCJaBu",
  "key23": "39dpFmVqBhUPDnRi9aTfNDZMEsxAaA2FKs42wuRTGZbyfR43GEJshMTugr89gpN4gC5i6Pf8rNBFLypqgjWMsqnz",
  "key24": "5TqqgjWv7M6LKQE9zM8GG2LMrwP9ESkmDwnTHdfHgRqu5WMg4eMahKDPbdA24koETJGbBE36juMKsih9GTCnq9VN",
  "key25": "5fZ2SieyiBJByNnQGCpmLPEd6Jgt3LwkXQ3YCgTrGzbMsfSQ8ZFrNpXLyKuSaj5GJSHiKZfbo4kvdUzyJWDNkHYq",
  "key26": "2snJnx8Hq8EQ7utPoyea9iMQR4PQiG9b7jxqQhdEn7HcJyeNiMZzAW1koRiFGUY5reEVSnzW9qFuXdRU7uv997s2",
  "key27": "2bHjMF2cXygqPtLg1f8YQnz5Bek3PAwX2vjaZcKD5fgpu7hdpL79PuWoZQpu2VcepHFiWJAwzwmF23K4yvcHRJSc"
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
