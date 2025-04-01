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
    "3xoPUVctSNocELY1Lh9LWAT6ue9qJ2bb1Xfb7boujQKvRW36h82mPso4HGrTiR7EcMHG9inEp1YNj9UXTrfbs7Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWMWvhrmDJEeE21BtcjSQ87m9M8K991rjiU8jYoR82rUf4yNSmJTUXW9L8uP9FbTXWJgKcacwe1b9vqvm82Tv9P",
  "key1": "4hjdRKcipoe9CVJ3Fq4rRQcqVpWHLvCvsSjXyebijYCtcrWogV2EpF2sx7Zy38rXGMhJAJgiELKGNir2FWeiRSjG",
  "key2": "3QYaPUvSzK3jTEqfUYxajWrJVKSVovJFmprvGuyU1wyUdHDmC2xRx1LnkSuW4ivaRxPg3xZDUXBuVHra2i9bWksi",
  "key3": "2D8Cp2Ki28yfyaqmpNU81iXxAUrjVV9NEpmEMMu1f8Wwfptb2o8Ce27dV4PmAfv9Bs64XcGZZtobcw8dPycH9RPN",
  "key4": "9RKQW6DBtxZ8mKagn1tjfiZS3xEk7UzwMyyvSA2RfHc7GKSUpgP1dt6CqpCHFunfacDMQMHCLzTrXyptEJVBiWu",
  "key5": "2sWyCztMGFdf5ryipBurGezecVrJ1qbju2JYq7ya7MpbhUexBdRhU53twyuSFiZ5UBcCFPGxQtaSzw8yDppUeigL",
  "key6": "C6ZwL9ikV4qvPQdBUC8d54q2FJYLnBCEGSndKTwmXUP2Tpkc4XZcvR51esny8VU7bCSZ3g8eZkZ2pxXG2MqGgGF",
  "key7": "42wBeF9JwwhPcQMJZhc9f9xi7HebMwdwN3NDAmiATrksaDkArdK1HZJe9pbuuM7Deu89EadVZnCiTBumKjfHiVAG",
  "key8": "SGxEmNs3vBJz5g1sGSKibg2pkPrSPtmfyeE9r7qyQhpsXZb5xtxx3gZGMNAf6VgbKaMwCLmudpidUcTpMBK51q3",
  "key9": "4grjiCMaQcBEWyyU4ZGVo7KYDEAdSnq2vL6ZuxRBtTySQHTbbUBXpvnqAjGCiCAac3vo5Wg6hjPTCzMNzZRGfNW2",
  "key10": "UzLJAtwTJKVcNyPnBYZM6omxPuRYK5WxtpFh8bhhTnXGt96nxVPmhqWqbdTP4kbvCYNcYgiZhNL4pwiB6NVdFEB",
  "key11": "64PT2odYxNM7sj6dAgP5b7hkGGLZcFwDd4sQxospHP4up9TggqmDozRy4s2bLDGHSiP4HhFQpmGz2NGH9cwrivsN",
  "key12": "4FZ7yKmvictSHaV3mipdfzNZnxUssDefA6U1nLu2CVrxWsDomW68AoAsbciPzLm7odzcfQXVMQcY1quuCgj6cCfg",
  "key13": "5TGCCqq3Pr3zqcsWvHkBHrzQ6AUbtybMe63Q8KMXRYzRMLu43iLAd4yDSKYt3aQV2pf5M8GnQuytiYLMuLrudrN2",
  "key14": "2mfCusGkZ8d69Jg3DouHMT3LpjxEbbJTW9twc8Kqw3CSN14ZZwRSirfy8Rns4FGewo2kVdE89t3t1XnZHkq4eqKH",
  "key15": "4Qh36TzG9hV6y6aPHvvxmvQfP6zN8sxfsqkcRu2YFPMEJZrmeXdhaRwm9Hp1zK98zRjj3NGKMSowFHmaW8nAGoxo",
  "key16": "22rkmkyevXbVa8ArApopyJoBEFvqn3vDq27WfosJTdj25bZXGu6U77hXU7ZyAZrET6RDwZR1wr6X2u9U5Vjh3a1W",
  "key17": "372cDLwFcGX77ZnVPNHcKwrd6oyZGNTofKdh16H5rqRkDDC4Xeg6yBEquue4vY1ZjpKJTmmLZfHJdUCgGsrMkLDp",
  "key18": "5uU2efH8W33F6mmjh4rQuFYHcURJhz6wCPobmzFyR8yiaF72HBQtWuSsdjrGy5H71UR1HcZNwfQtRmaRVNrf5NdT",
  "key19": "g8LybbdeYd42BimbwFfmEPp2zU8MAc9W5bPjRBNCB5McSbfp5evYnSqBPurCYiCg7wNVCw8bWGAVcJwaKoSgNma",
  "key20": "2PYRFY7eM8tNZG7RZzD94G7EuMnmadHeY99w4P9YEPzuF3wpMBooKDkk7B5Ruu1GDBoDK3TzVijUN5ukgbns6rqr",
  "key21": "51EvXS94xH9YvGTVbb7aXDZf2DiXTYAdrQm7dQwUPnEGmcahsXdM7ozT8WfD26TzNLPBRpUdCcv16JsUY4VRrQdP",
  "key22": "yvLV2uGBBmkhEWfMKBW2DcbjCG256VHSeUEgtNc26sTss6gtNTFENL2YFvLHaH3FMhyo76GHNCT8Si4RgHX3vfV",
  "key23": "5NxfssSY6sExJpPsxLTYoGAvqGcGz5m8pvdSqooAu4b9gCWKREp49qzvJmRMbwtgq8SthaWNJXxsjbyYpvvRR54a",
  "key24": "5Hz4J9foC83HyZzcrKHrDPi98dwNLSjddA8cBvZRZ5XxoJYWRukVzKGxfJYtUBz3XcfwhoQfAHD6M3kSg19qGyQm",
  "key25": "CF52nGWi1TXg5vTu9Jb7cwv6xaN4s2AeZ9bmXychCapnjyJ2GcFVWhFuv9qgAfTSH3s9osATaKxKJNEmNA1esv3",
  "key26": "5CVXfv1KDuPM3xHFonmuWbctvhSKSJAcXrX2jNAWmpCaj9k44YbShz9PSaswWct32xuVhm9iZxqzsEHTeM3YZGzn",
  "key27": "26gcMmZStFBKJ4u9CKDmZPVNC7ek3JFggUs6uS45CpbXozyhyEDQXfC9HUHdTHbjmK5GL5t4bBEy18qYwE991oYa",
  "key28": "3NzuKLdUuNRWFKwYLEoN1C2WQaouvC4EsQVJ62WkPyhMMN8WycXm1tEV8hpHqBVYk2CvgKyHfRU4rURy3ZKXkS9B",
  "key29": "48MtjXfy5kLkKCLgwt3mAKdoJeB1XBt9FYW1ebT7G4hgsw64xgRF4LYrTYPUosW2W7BBaCCEios8npnFo2GFygz"
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
