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
    "5QAecnLGZ9Lq711fQ6Fb9byjjmjsaLPSqUoMKkbWaDeafigVVSAj7YTRmrpNZAKp2tkiQhY81Bu5F3B8qaWqVFod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p45ZwFjo1ypuYqbbuqErWQJWS7yJcKuohQxm5KgR4YLv8MMF6Z2sZFRmPKi3ZgxsE9wRgo8PdY4XBqd1CA3vjZA",
  "key1": "4f2wG6Ke32MwJ3BnxsC7xikcg6iseM2ZxrMREqxwyW1taYshQRqRwZ4n5kbGoQMxJSBGg4Vrh95DSa4F9QJW4PEJ",
  "key2": "2SAGshPVJEGd6P442XZFjm8er2DatDWuqirPBeXWdGqnsvS2eJRVBqdq7edMEhAPFLpEyBHDLqz4gRV3cXifHWJh",
  "key3": "3qo9eoeU3FVkrwABayrwvyc79civsd4kz5X3mt44Spxp7LUewBJvXrGBEPXfew1s3EGKNYPWg7Cr94PdKG8F7Beg",
  "key4": "2beqMAGgWotnhKABMKpJBfyrG1zbAcNZJewb19ws15RtaZaPjKoiGjn86eG655f7UWhSWGJ8u6af3yJm5MvvYC2b",
  "key5": "5z9XND18mSrA3B7tUsRAPAT3L2ZMng92WG8FYQBX4rjQDoKNfEot7DTVrFS5613TLPLX9XFxaVQ4131my58qLm5E",
  "key6": "3vCVjAkKNXGfmm19hqrDUNU2M5Rg2mxjhaBxd5oQ3Xf3LDedYZLJ46GYBhr5CmGLyQrw7GRLvo9hKQJRDbo2VW1P",
  "key7": "2cSckYfG5Qu7RbSQScA8n8hykvMxEXyX4BrZ2D4qfm5ELXT8pFgR6evAWJoMSBFBtwmdZfdfVPqo3SByEH6noFcu",
  "key8": "4S77PwXnSgZpfkbmeQYCrphYKdjA9yaTjUG43RVa7SFKF88EscBXyYG5mJm7znrJppaGLQYbdyr7MXTE6tsMew3L",
  "key9": "2Bsx826tDdn767Dj8Tpe6c1v4v6Yb8XYAUvg2RNdTUro7QwFVwhPkvy2B1xvVnxv6sCZykppvBTqX6GVdMacrwrp",
  "key10": "4u1A87LubjJQ4ydDRGTcZZZ8EBt2pAxiRBiVSXKbisC9bswRLbWmqeHmn8FirRDMCa8qsRoP39fsGTgRwYQQh1Ue",
  "key11": "vKE1Am1DiFVGuqAGLVymbbVsfegKVkVS8aiJkGppJXFfWmPp8xWj3c3XkpfPkziDu2tR4faS8WVQRNeBKcu91J8",
  "key12": "3wbbUsbSbY4hdB5HPaVr7RDrT3Pd32nA4VVF9xFTrDnV9GJUeJrZSc1mmMWyRRgKwMRFabiQKXQ31G84niMWNKUC",
  "key13": "67fpvNquUZgAavpadqdFZUnLoD6ohDwmcBh51exBm7Sk4iTgBGwU4UootG4NyQfTHzL2eYC8Aq3aqVhaMHcE3LFz",
  "key14": "3UgFEaMeDBMozocRsaTPAsCp4aKPYt56EreqZ8w6wMFZyyWmwkGiqdAEHZayK1BLQWMWPdNYEk86KVGinpeMTFJh",
  "key15": "4thFqP4VAxdsCzVJyj5f1tYkdxsLpybSbcWut2maKMA5mjQEb2fY3NiH4bx87KmqYTD7uhbpX2LQuHdj5CkyUSd6",
  "key16": "5DtiD2z5vJLQAr8RBpKYDmTnWjEPY1YmroRcTcMLoCRqVbfxYPUV1sKMAXrX5oeJmBNZh3J1nDYgaP3PbW1EFZy8",
  "key17": "4j7TXUL5tryCcejLsfBDxhPiwb7R8eJ3PLzRSfpjZmy16VofCf2GTLiE63gcZddzqwnNSYWCjXLzF2QnZryh6Y8Q",
  "key18": "3gQSpLjZm7c9UH8RtM4A3saCTR7yLxFVvT5BtS9Cq9uUYjJ31aysARHrhnkKDHEF4P2FsYNzfx3BAQxrSh2Xnqu9",
  "key19": "5XpnHAHztgH9LtyWt7urvWKyijrWG4SNF5EN8aB5a6tyjpJivxZRnUU7p4L1Pv1r1i7nGfhmY1BemcHFc6ukxbas",
  "key20": "63o7EG2VFLaQEw6R1t9W3Pi58RJVLVAE3nE4dfj6b14k9tffDSR1NVNWfkv8tFtQFeqoiQD1cgS6wV9yWGcoDnwi",
  "key21": "2tdudS3j2HFxNzqMEnPfRBSkSYWYoLVXnEoc1AHn6kVVboD2jhHGRPrRk5HG7ok64fMQMby5fhX9CnAEF4m5afw4",
  "key22": "3wWjyWdxQHAE9mrXF3TAfRsFuD3cQ6YgRioPqkkrY3jd3iDqyR3qvt8pZCKXx79jijSPtRHtmH6WAHGKs3RyBzoP",
  "key23": "4Vjo8VC7LR653tXLUcRgfb1wxua7ZXvNvj5hBfp1tVfcdM2tqQSTjVjXLfwQzxYmJPm1NSRQsUF33aq3TDsWGWEd",
  "key24": "5MDjszBFFegNR542joLpG9o5i3HCZjnRKfvL6JRLWmC5janah5wNZtbRBiauokM6cSA3E9Kahx7kmifdszoqtw97",
  "key25": "foDTrZ6rneDzQGSS6DmN29o23WDhrX7iEYtdxToLxJ5vb9zGv3TqgWM9FpwPDZpP92GV7qBspqUv34CGEWumdQN",
  "key26": "5wcakL3iEUKZ6hYQBwqVvFD1VQxdBGz8bXAqHnWnbvPGVvaqSzcvtgXYtZpkcNSSgdzZRoXUXieYCmvW54L1Q3T7",
  "key27": "3TAwstMdMqzdd5vd4Sf1TedLChc1CD5Q426K2vx8q7unpa7pexjtS6nEjBX14wwid3tyVXiaJzBJot2kCMHPmDum"
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
