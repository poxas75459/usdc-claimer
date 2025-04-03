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
    "endVwTq5sKSAVdbmGimwB3WfsCE2HW1C5HJUHFnSHWPYw7ywN5tUeoqR7qnTVRCGVqQ9K9KVF1y8U7ogQnWrzMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmhyT5dX8A3mRA7XSazgz4D1QamHMXqubJU5m5tNQKJ85zpzXgiEfX527kd1C1kLCdbZMcEQyDsT6BJJqSotWuZ",
  "key1": "5CRF27yikhP717mHxeJvdyrd1nawVBDjSxTQJhaCVxGZ7HWHbC72e7bUYA4q3MNbjobo2LM9jZrCMjH8k4Mseph3",
  "key2": "4kVVacbQvjn9BNDehe3xgQcZv7LkpxhqMZfjnLKPjiJTyYKnCb7zDhSRwCmXPUVdnVNm1L9RD4jvwyH7EdhXMFbG",
  "key3": "4QiwijCMgTbuBMStZ7a9iLLXLd5KagrfARE8H1TQrnJT5i4gEAiq9t6i9ybNsti3z2AtmFjbqWXBF9WVaKod7YsX",
  "key4": "vQBNsY86H2Ypr6ies9G8gjqMr7PLWa9tjasvqaVsvNmzL4ATFFBCeWHMSGnkCLuikbfnrJ3nQJpdFcMDUzpYDXn",
  "key5": "3GfSa3c4qTxybVMyHGsoHDWKEg1P3JG1P5MJFSNrTXte8H6m6adU6TDnkWjKrxkhJirzZ3Cw4UP9n9RapHcr7R33",
  "key6": "8qX4pnrzJ6BuMbhED9NDmSTgEoqUC2HJLb7qTfdT7t23KUkFwUcxVfNfxrb2dduZyfa8x3Cej84BAxFYwJGxS7t",
  "key7": "66tGbsbow5nB4KH1vQnoQPMNqruCv6D77FhUuzhegzF7CSfDTHs9uU1uFHjWnxTASTrs8US2Lv6oKjEj3iCrNpCe",
  "key8": "3mcYToVuwcycCFTQ5wN8UbAXb2c8NVDxkBUNhw3Q2up1USMECqVAspzVmTSi18aeQ4DMWg7MDDTNPa3qZ1x6164R",
  "key9": "meiBbmANjDhXpQWgnTxfQEdnsxypJcd2uEd5trJuPdrktT7xssK8aWJHZtPu9x91Z6pkoLfaicxYYcqpeUQaRHi",
  "key10": "2wgESwwKGkUuYhMSK11gQZLFCvjCiLejBgygqDN5qj9uXWKkoPpTZSviQxcuyH3Ss8qt3mHdRqmbDw9zz2dn4txC",
  "key11": "3qMo4CvScK1iSEaivnaQQ3NccDV5sjqYQJgd8pmMSN3Vw77bvCpqVz5dGL86Ep2wdN8pMGUE1ixoYWYdNrKEDZny",
  "key12": "4EVSjLwkjdXhzGJJuQn9dtMvu7BA79CwznFrxP71FmsFaRaPU65MJE1MVCCU36yV36NHfLwqvgX6dwPQHQwnyQbG",
  "key13": "61Fd6thDU9CG6Br48vy6Uy9HETkqvW3ka8ZTiAFMKkh9FJJawPMgw7vXJok27SYPxs73ihnXQkyauMkDTRUYw4Me",
  "key14": "13wmhyHn5bsJsikfFcXmysYBdeuBeaf5Awo4afM92vLUqXm5uJXfz3sVE1a22iMB9yYT7scKHkjDvV7YByTCSQS",
  "key15": "3MEEaaBukHXLNT8q254Ji77y62nfANwawpHj3eDBsQgEtbURgawFwSJWu4F6UMNN16hiNwMfk6PtaUTq4q6B6BBk",
  "key16": "4pXG6k6qzEevUTti9ChKsT3EVp3G1vTxGQW7CzBYB49xgtCE8mKUwJZwT6UXh5itrMwwENspzPLji7F5UDAo3XEA",
  "key17": "26MvGuPSuKZkbDWeq3ezi1yc7eM1YzHCGWz2bxHzfmn4Ja3gx3jywJnjm3aMkjjCQFfkDqML88dnhr1ZGZ3vEiTu",
  "key18": "2RrB5j5sHdUc1gLxzb9eATa4yU1KDCxdd97jrSggEyDy5EobVkdqpaNXEfFLZu3nFvsyauH7Pn3d9YXf21ALsGCf",
  "key19": "2LRz5knVUb2v1gwaAwkdfwyrRFAR8ksSEZqEpfj6aS3awdjFA2EsqVPCppN1e7HA9GbcsHQmDBi2cuAhQDJop1YR",
  "key20": "2KLnsXz5TfCbQnQeMY8Rty1R8v5dejKc89SSnPMPLpxQj9LjUbztJkKQbVtW2VBzhXf3GcwRjw8KFVHBP6yLHUsD",
  "key21": "2tjYrrcxLyt8wvMYc5H31NZB3jLmts36uyg2SDFz2uGRUbwmbNdteXH2JjzvnJ9Hyenpk239rHZqN2zt67ca3eK4",
  "key22": "3o4ENtt1gmeBjTGiwRA32umbzihMv7KWbxMLaxcczwnqVGhs2S3NQztuBrj7EaSp3QYJhDNfVqR3znSDxgT3Edcp",
  "key23": "aikYSS7NkNbQGcm7bTRges8n5XqH6CinGo6cFMpeHfZiFn8FuqpY3qbhifAoxe6k8voMQbwAznSSbU9mN7enZVZ",
  "key24": "4UaVmJKJ4Pay5Zhus1ctu57iNzXZ6XbeNjE1KxrBE2DFVLBY8hLWC9xUV3EzJFA7mKmLiCpifHuAyC4tDDxPvMTw",
  "key25": "2yFFBCsTPmNW1iLxAbiYEqTY2RhVLfFgkpsj1jF3R2FPTSB1ggvbGLrhF3v7AEekiBXeT4MTQGwJvsgY4aTKbfU8",
  "key26": "2Yzum1m67bTciEFVYBAgEwU7G1ogp74WyFjSv49cxdxrbUvQQ6yZM5qNCQe7FrobQKLs4DLNHurcvtGnNMTxNzbj",
  "key27": "3DHCK8gAB4Qdg9TPbtKMnmz7tVrxoXq61W1wTjndTpV2eaGcHYjBaqH6r1JrFXPGf4havZJqDufGHcztvuCbd63Y",
  "key28": "5Kcv8X1GubZSefoqmRGHaRhn4VVbc7FrRdxTXxm2JRZ2g49kwWUSMmGSyYJmBGWGimw32zERaUBCBqdNG7zEo6DX",
  "key29": "65U4dhA5dEnUgtoRHbobmuHpimQxjHLyMWLga3vobmndxtsKGMGimCuKDNyZfnBFeWRBmuTx7DhBospgwZwU6ZRm",
  "key30": "2rV3bLPxD9CiMYWiPwHoU3ZjQCoFpWKVRdUXTs6HmmJttM57ghBPf5UDHTt6F7qgJjTwCxx65xNc5SHKBBG1t4pK",
  "key31": "32yFBqac9SbxgQFCGk7Gu5kcqwFtqmLJ7HZjXRR9RmQP2FNNSxg1szt3eFNZMAY9UDgnUYo3VfZDWrhrmayWEE9X",
  "key32": "KWaYzpMWhrMSjcq4XNAqsCFYYdwBoSnxsH8BeqAxoJpMZJUuD8jJPJoCsNFcPmraXCY6SpXynSMMTNFcJkxX9vr",
  "key33": "3UrDxMqrH6sQQSLJnJ7sWegFffduRVupFnLrdcR7CrxsAeZ3SbiXMaC9raFfRWyg7z2nheUPAYLd2PmZnBLde3Lc",
  "key34": "k1xwL39hVz8wYHG25Dh46wawsNVDjuQnq5FoH3GYRR3o4K3o2MiU12Phn1TcVJnqrin8e2L8fYbd5EAZrWvyVc2",
  "key35": "xZ6o8j7KzaJYSckLUnTY3zLp4Kf8ZqSN8xWusyGBsxLftruJkHnwsqMUWrA7JaDun8A5MJUmwtJbMQfpCeYgiwZ",
  "key36": "56AZRrpaDCyu7zwN9rzsV5qKfovWBT9EYXMNXqU4d2G8XmPi9ggiJ2qqV6JsZ5M6WDbwWwiKjhqnL73FN8Nah5qH",
  "key37": "qh6FFrApCoc6qVqcvQrYPuvUWRMUyCzwK2ZygMLQy8dwYPZEp3Lq65ZiWLCNPtA3YQYA8v5pc4jaZuEcwHgtaez",
  "key38": "2YzidZTTvcrBTV9AyLkivQ7eWnk7G9TVhAPMU9mxZn4TpPeKbR2Hh4T3KWMybtSjunD2uEMvhZ8aHm8WxnQ9Eyau",
  "key39": "3xAuSBB1EdoiheDw31vpChKcu4RLTCyZ3MpuwG6wsN2rWgRogZNrz53W6TnmtjJ1kkxBb9MPzuCuLpTkV8CZZRCn",
  "key40": "NxDmvpxdg1czUf4sQBndstyQtZsFZP4bP8pwH7ViA2eSJe7hVtujZuvbekorjtxT5pjHsvYgYXrWYMRxh1Puieo"
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
