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
    "rEJuUKLZhG3zaUGhxTqrjJGhdteJQmVgPa37T6bbMULaRUr2YuZPzsA5ZiSbXyPPCg8yrPDf5Z26gCcSmV5mAuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QdUnGwzdkUfjg1EBLU7dMbP2mvN14nr9crob35fD3EEuVJ6FoZMnwpL1KNXemZwPSGg74iiL9gVmR7VZrccPv1K",
  "key1": "32V71uqxMwnh529DNsPK5z1kdoeDfirrxUptApiX6dMqjHAPydT9hMi79ysvtpvR35XzwWp5idv9EA1tkFX7FHPu",
  "key2": "ZFp4H2n3hwGpVxkpvyLwH2jaqa5aENdhSKeUd1b5AwVkAhQbX79b3iPHqjnL4L4eJDKGiimTavE6DqjwNiqrUPs",
  "key3": "HH33joduVTu4Gmv7RNKADEk21PTQF4zT9U7yZqdE1bXUCyXTdnmhCvQz8c3Wjvwk5SrEatKvRndE8JXgfW9WKyT",
  "key4": "3ZpB9AULpBF9azBp4cfmWoyjFKZKfDvRtNZgBSk3vUBtkrtmZWak7a22sVRcLhSbsVNTfTKr4FxR8YoiDz153oaE",
  "key5": "2AkZTanGcqJ4SDDBFUCkbrBwgwX4JmdowCFHKoHb75Qe9Y7BCSiSCbQSWwL4tK2UnBMgsvGMWPpq9CUm7UK4mWfj",
  "key6": "5x9yjPZgrPRvLJBRNsEtfbJPHQudVBQhGR1cUgXAd29UxghY2yYNcGTu7QQGumVF7MDpLoKmRdQY5G9pbeVq9Zeb",
  "key7": "4rGiP79sYMWdEEA2m5tgCCN5ML6FnhvupeFQaqGfgaYPM6AS75yHcrWbkRZsL1c8kWTwzRKQjPj4zqfuvLESaVs8",
  "key8": "4aQVC6PRdjfYigEMGXvqKezK9CBPtrgvgbgmXFbhKHDJTLAr4k1KUaYoUYrAy7mJSyvEjF7TzfVbUVkGYbXtXx7s",
  "key9": "ddt6mDQMwkGrUPFLNyDXc2vTwYBFroZqSLk7yVLZt6UpReBeXhYUvMsYzsAhKNkVaXZhJZ3yXpycCLdr69jNZoD",
  "key10": "4ZfKEsmVJWxB27TiEQYbcZ7TPu9fmugqdKC5uzx7J7gS5gSyRKMph453TeJVYCkth64X9yoSyLeEsXyyGsGKM1jC",
  "key11": "29cyzwkP3y9iSN4HoXfaFqck3TVGM6uxgKNaLxeU4PKby7WPFGHcNKACtSZUat33JJbrPswQJt3oDNW5z1GEFg2e",
  "key12": "4Je3tBjwvjF7GnfXa1qbF9HiZ8QUwtkw4pPzSpiyiR38FKyCxaZtax9QH7NJGcDhHCQFyeP4guNAruDaaSeCLaN2",
  "key13": "9BAcbWAqEqtkw6mCES1dBtshEBsQd9d2rSwgpypbfZCYp1vxBwqE3pK4Rr7Q3U46RrKvxK5CLruHkS1Ydi1QAHM",
  "key14": "4vRadfJeDEEGPX9PqF8JkqzrLRNJFQxfSeFkuXF92P3fPwawjTuHnj2TwvYNTZ5Gfr2UnAwshwnF7H5oFxkPK1rb",
  "key15": "hmfXTv2yEy7fRR4SGsV3RC9dm5rRrgNb4vLg8h7W16UXfMSfDuZKwbKS6NChMCmXVJFfhwc9rsrdeQbosmcojvo",
  "key16": "4akxzz19ibevUZZ7StYdmxXCpPA5M8fo1TCU4mBHqxsa6GM2rpTLX4bCVgsRbEBs2F79vsRRArLQV5Lc3h5tFoRx",
  "key17": "4wdZFgBtynWjqk2V9cEvrCUfbMcXrcgA39UMVUMtzWQ2RFd2LF4dqt2edsaBNSxFJCD4hoQmfX24NmedDqFJpwAK",
  "key18": "4srRcKBfVQEh85rxqZkK568P7R3xjcNjUnu9t8gWX5JA52xvNXay6RVnKdCmfosFPZSvryMAqpLjZJJN9FNo6hCD",
  "key19": "1bTUzr4MmrQRzzC2eQAoKLG5KBNywpsrf8TMFHzbCu6L5AKBWQ4m5KcJvuDo6LVwQeBUNJ8kd51BiXc1raxY5T3",
  "key20": "w6QN3iiWWYNqaPUyU6WcjgCeAfZgwykKcMN1QPWLTbrLJT1nTC43T8Lu6PBE7oH5mqV8YdsNVVFjkavzRgKY2uy",
  "key21": "328o7Ckd2ir5LAZre6zsa7xRooQb12M6KYvSiiZYxb2P6JhJcP6syeavANE4Bnc3NaY9hqLHkBECa1JjUoZCBgPS",
  "key22": "3CWdBUtS9uemV7T3q1Qw8LQ3BoY7CCjXmGVM2FNGsrLzUNWHxysasU8fUgYtEKYxkD5k5iHRiN3a7bwKePYhD76R",
  "key23": "2SqJ8gUUx2Mvg8uA33AVGaswGhdyr5Mj2Y7xfALy3WUdj2zpvmS5Gxop3czPPULD6mhCUTVLVu3JN5jtDB9QHMxp",
  "key24": "3EJVRcXt2nuxdKEHWDjn3ScJgH382Jd65CUApPVrXkeoa6STwp8UpkaQfmbwo3Pwra4wguEiUpb2cZ9znKy5sZHx",
  "key25": "273pcwynYGXnUQu38vdLT79Ya4NoUbmRcMKZWK5j1ger3fcqEfasLqDbbQfLM7nGXwAagMQgorTjupjny6x9UwfF",
  "key26": "2sH9cggEkM6DdhpTwCsc9fyaVQCjnuuXnZdHa1k9A5ugWsJxrRbGEqQNk2ByfBQbY95YFR3dnjijo9QNh7gpPHPR",
  "key27": "4Kan3gvxc8DC2oLdDbCQqXLPQ5H5e61Xq93PhufE56GBZXYvunQujZ9YoznpvzKAGReAw4T5YXtkKp26T6Ns7pQG",
  "key28": "2QooHZfbxdZRFivDyKWBxnJHvE8SMCUniZ37LpVvynXFQPz2Aahes8WBXBvDzEjHTXXcUASXswYnCgCQsQrYqZ2M",
  "key29": "c5yXL24Jf29aFhT6cmm83a3oaP6tCXVUHkPwYKitBtCVoqiRDoGJh5vSyvNE3Vm91VSp6dveR6oViRECBbvDx5C",
  "key30": "4ytbxWeQ2PniDuwMu51UJ7nGXeZCLRszfNMgZNyBcCHGB4q3kyUkQ3oqJwfX8FkaWw3VbjScrwFe9gu9w3br8EF7",
  "key31": "4nXau5ST37ckHKSviq3en8utYUjWoU167dTYWD8djX9n2Pum8nwdpeDGVqu8T9oUy87jEMNdL7xhaSff5LJRRSei",
  "key32": "5BZFa4qYCWRfVW8BwQFn4mdsgutCWgYF9SCKHBhKFLsMRnakcE6dZZt76qJvNcaEbGm9KhAm9dFoTLLu3MxZPGPS",
  "key33": "3ppEv7ja5D8DPgf48WFkKh85dyhUAqSMj2ov4J4DTRXqVRtggFA6zuoLcuhy6egSTGibkadqeSvuHTyxo7qor3Qq"
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
