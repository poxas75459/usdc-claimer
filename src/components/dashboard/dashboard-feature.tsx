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
    "3Pj8UnLD5z3b6k5TvHnpvXMQHDt48swY3DG5EhjynQYC1o5CZZuXXXFZVcqxaaSc3SdS1bj1BjSKyRhNx1DXFKr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QnoSdeuvL26dwPeuu2qi3BA4qLcbZn694WQo7TU3EqQ8BYhZi8wfmWGtivH6oL8raDxgsPWbX1M8HkuwLaR9Zgc",
  "key1": "3R7doPDekX2i38pcuPiERakir3k4Jj7cb4iKTKpdhxAvp2wUBm6NQ3GgVbvw9dao97FRiZqsrCewfA8eyVPWgBK7",
  "key2": "4WfxBsKHHmSG8ZjJ5vhRS7Y8edmsQVa2UW2skcS5zGsikKouL9yxmgRfABuJ1vSu38N7CaAGbtysF9VXLsUxf17h",
  "key3": "c6td48YSAh9ELTqLnB8RFn4qzxh7TqHTu3pi5zNZEWinybzGKCuXsdRzBoACsAcntDzKbQ9EWZk4MGrVdb5xZJg",
  "key4": "cKZa3qoVRqo5TJguNNX5XfJnuFHPqo1s2eccatuKrmJhpLDsFVUo6SpUUUyDsMTXmdpMop19ZJAHU9t2WTFbv4G",
  "key5": "2v9v9aCb3PQMJGWEk79sUQXC9nSkw6UrpVEZiQTPbhsnDUEtobbZkK1Y6HPwUAcEb4WPP1tcBWcfPaCPUzjfaoCG",
  "key6": "NKvBHb9KDGvE7BPDNQkALvKRYqW3XiYxR1apNamPdKp2ZJhmEzuM7qgW7NyksVdwkeU5jwnTUWEGxGbZ9v3sBYo",
  "key7": "kCXNGucpq7tpFXtgRybimpqSfnKVFbVowZQoH8udNqhjk4n15frfG9aAtuYk6cGhkxhm3z9BxT7Hi65VzLtKaFf",
  "key8": "4X1maQJTMmHewBVg5zAV9SFWT2nYSXTZJX25qGk7r1DYCRFMtG29syKJrzyxhnBYcXs5Ho3oe2fxDFHcM6atWnmv",
  "key9": "3N1xJckVYVb36AFvbK9HpDPeQnpwrSc8d87RXk917yCif57rFcco8qaJiujLdDXRRARpaJZ9UntggFtVosP5K1Ta",
  "key10": "XawGK5Lsfz3C8s1GKhJG3rwb1fe61sxj1zACbRDRb9NBUMKSZ7GxxAkm2iBwoUpJ5kkcf7ZQKjQ5bHyu6BgjpeF",
  "key11": "4vxXAnqeJzaVpXZ5tJZjjVNmpr2F4MQdSY9Gq8D5FnibnP31V6gdSeuvRpFoKLmVUpSnusczB3iNu9fhdRnqSYe4",
  "key12": "3S9uejGfjBB1cNnesCitKmjKBx36MSZBYHuAma99njyrnfuBstFK3EKm1D5j3Ny2guaUsUKcVbhW4CF89Yz8uV48",
  "key13": "2iPJKXwGeofmgR4v2DCZg2KN56EJ9joJWi9F2sWWeWZ3ebJQT84BDhSgAre7uJvy5ZegBc5eZdfbFSs5eC3V32rK",
  "key14": "58px4cHm3aJZDpVhBGF8bwPurdqrtvXFnbgiWnwNrQRFZ4NHWQ6EZSxr6mujFwdbvE5nDo4FMPM4jPgA2ZtzskFX",
  "key15": "4o5AaF2xKz4yikcjxXZbbnoc8Rz44fA3VFSeWrSBRF5QP9czzruhj2SwJ566HHN5T89gvyqcUho9bK6tDs4RMM5t",
  "key16": "5PLiVCk9cN3DEqWP4PbsyG87TyDLXKbPMCtZuUuA4dtctCykd3V5HUsARLW3AZRFMrf8cyhMVkxBJsgDKUvQE28U",
  "key17": "2pwEqFYzUdQG23BEJT8aSGhnhBuTKiBfmS4apMtTsgpwwMDWLLvJze5Fbc6kCV5HcYxpVHkv9TnfmByVVPxyd2eW",
  "key18": "3rnYTWvBJMTkYmZTML1vDtnsa9DonkaYNDztbmdwCFqTyuBMcM2QzqGuGfvu8D5pPcJoHxfih36Ju6VUsAXQJFqp",
  "key19": "3S5vWZJeBT8ZJ9WomsxdCdy93T6H2cMZDGRDbgcf82LVmrADX5thBhHtFhATqSkWm1RtP3nu97vCRvtb2YYqmvag",
  "key20": "2y3YDctdzeG8MHzWwNZcWiQu7vj5B7CgFmdH2cBSu18LRotFTjHTJZirbfe2ukA9KbtmWaB38FizVd3PDNyABYnH",
  "key21": "qS4dt2FWSEix4WBVd63y62eSWjcJyRSEbEBWf5ub8XpcZnc8RuzEQ9keHi2xspULSSZW3pJmWRe7W5Z9jiUgcRy",
  "key22": "35h7WqojNGFPGEpz4AGrcSvtkBfXA46VSAhgP5cze8ccowgs5rd2oYDUPvXbPzaWjDCXVVJBV5VrqaxboJJPqq1p",
  "key23": "5jeybJQtWokcgLnGE8iZeC9gudeGD1uvEQqM9nuCifDe3N9H75BjDY16kA4j1xoUwdH6PD8HFB1nta18hx1aHMqN",
  "key24": "4Yfs3z5ZpNMBCozGmKfsECAMxnvyAQBefNvAhFxGmAVVVNPNSgpbncTfdBYiqh8xPKVsXRRvu3mPcgVy3VqVVbcD",
  "key25": "2hQnsa1cppXjz5Lqvt9yGjJNqNAHe2ZM6btFeKAefzsswsTvt7ZMEX3V6Zd65QWnUu8ChpXtRw3Eic3bZvijQve8",
  "key26": "fERJoqRsLeFUjT3Eg7vyum1uBVwcBDfnG9FiEDfagXvPj3YocBvB873o2KihLBJngq9JcDtH6vpku4763wahbjp",
  "key27": "2x5cn7furhtB2RPM93buRkR3zz8sn5Jg6Q3KUX7bqou9jkTnYs2YFaGecJm7QMj8uuvkVc45Kv6uimLCNtSggbDf",
  "key28": "496cudHydqN2DuVyi1MmCHCzqkjBNMq351Hb15HNcW2Ro2gvduzo4aLuQnSyUvfjv1wezeYtnXgJjWEJRZ11Y3ri",
  "key29": "3Tfh3iCJQDE5iYQwA1ZgV5iyzHmyBtDYWqpVyPNmLpys3d5qhVbCg8gTVmwrw9LBbWoqVZqJAaN2hDt3xtYDerRg",
  "key30": "NMFWWYzAnu1ro8Kb7TVGMbdhC56UPgLTFdbhvCgFnf9QJyzqKq5prGTFoZoefr8fuuh9z9ZjzRY4nT5TtbTSmMC"
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
