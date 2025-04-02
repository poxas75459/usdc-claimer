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
    "RhFXvR1ib32dQ4HhhVCBffQpd1TWoejkZ8WA3zx46cg1Ascw6NBLGSkcwW3B1tGeVCXWQayKoBBMrE1W9B8pCYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXSbX4PpEvUHuVqE2JzGaSmzNDum2639RWm1NAcJ5WrE9UbXcPfhbDSqP9ffACmVqcysRxUvkAkZSUaPitdXmPt",
  "key1": "3pQoAS23xLE1uiL57UTr8MijrZW5tDfBtmnXgtKV9W12rDQ1ZdngBVnP3C781kWEfj3Dy5BKDvYJS5dbbRgUKHS",
  "key2": "WUBz54RL2q4D7CFLCpBL5azmMYuFqF8eM2sueUcysK3D3jrPqS8rfZTyQBxiWwQTUeQddJrrXTS5VzYqWL9qRcT",
  "key3": "2qNXX2fD7Vk4nYUjgp8rRWuz64TRY7ZqYv6ryArMT6MuspsuYDkVa5xvG2a6VUePSkQacbSaJMbrtoT6ac1Yf19f",
  "key4": "4KM5TT38AXfoRmkiBr9MV8jaqH5eNRerskmAr79SkUKoSdxdFFeyHdEDSfoBFLThFLt4Zbn7zwdd614C4w9U9JXs",
  "key5": "3RbB5TMGW7PDLi87ho5srmiP6bmjbnaiYoUZgZNMsHVYmMUbsWwTrfBLrUaV5A9bQHUsn4PMPDDaDsvj84tik6tU",
  "key6": "3bWw68tQjYZtM2WoDi7hGidQyoEJj9wQVLwf3phwRRb3DE4MV84SUuAT95xPCHCSjmyCXhm1o7ghuvrdtnzNLnAP",
  "key7": "4d2rnbMZ2oZgrgGmY5jQ58ry3jAWPsqi82HNm9XuRGKiSs8eTBxF3t2hcCV64TzTDQb2NHM8PPrSLdXpZ3RW4wq",
  "key8": "5FsgJSVWx1aEko2cLpwJWBQ9ADo25nwT2GbAttki4gHqDwKLHuiSNWcZUwWmPnw9HBEhkc9rKYFSF3KV6XgRG1HK",
  "key9": "5AZ7EAKsPqxcaTVz1w4w3oKBg4LRMuvXReXfmHy2dnJPDBZKwUzpojnvWgGG6UwAAsZ5rTk6hmY4H2n4P8E5xtT4",
  "key10": "5nXU18zEeWcrJBbbzEJZHSrszFtQ4jkdQvWeouH59aVguy72JzbWgjy2jfek4FzAf1BJ71vFigic4Evh8JXrhHEJ",
  "key11": "2RXfHwYQhGRW4q499uFTjxK9jqR8MwZzcD91z5xtXsQtYCR3dvTw26f9H4G9pQ849WDVN2XGTetENPXruU2N5ouS",
  "key12": "ErUsXef7nmHfgtUpmM8NHn6sHXmuCwpH6FjnMYaCiRgauPTcpeb4aNUevoLGEe1rih3278wJy8u4oRU9XvECBDZ",
  "key13": "3QgwKbKh7MriyBMDo7HAf4kD19q5Kn3sd8jv2fv3S7yE5SE5L1hGUVKKgeUjL6kwzbB59vfRnUTTkrd5UrVEjwBo",
  "key14": "bGBumeGiehebXntiyUV8wRKmXeRmDVwfqfFkXYApn3XGL3y2aj78stcA7JEbfezXr3NE7s64nxw5xHzw71dDJPj",
  "key15": "gHSsne7n6YnaqCxYhQL6HqDYxhE96XALWiqyyJRCVN27pyABRfno9Veb4QRoDbsyiQ4ASh37ab29mZ4pmA2ve8X",
  "key16": "5N7v2YWqdrGT2vQpeqZQSPUCShpJGB3WGs3zSzvSdNZjSFZhNJugLYB1nKj1rrJA3PL2Ge98gEPd3pEPr4xEKXw9",
  "key17": "47nXDorXyVtCUj6saPfSJK5uj7pxQ6fH4nJMdRuXXmjvBjjuPsPrcYK9yfRswPKsExXGAhEEDZAW2yXgdabetWJ1",
  "key18": "5qre7zPHyYEFcPVimvhAXvnSeB4ERvdfAimauM7DwWqaGFzwBw37kL8GWuQTZo6NvE9BscwYFzsTFg3XCyoLy3gf",
  "key19": "2aNNYXxTmyy1sz8iTQLuPspFMTRWc4h4Q2xLFSrj5YWsrtbS2dxXRprJHvHcXjBn3WeAvYdgfvFGmAWVNb7JtcwS",
  "key20": "V1DAxRE56aiD9BkhkJA7j2q2iYEC6ewFitc84Kqf6o5CzUrLJQuBYU1VLLS2W2k83BDFdqXP4DM8meXB18CaKMK",
  "key21": "5PcyToRdsZZsiTXZ7qjLPbGPBAMAEbizdqg65e89LZL1c33N3PfyHiiUGvQgYQ36pWmWvNYDatHegy9WJ4ANUyKw",
  "key22": "zmJWeBvBf3hqHNnfDXbaX3m6z1VqB6w6KcwDETcVWVLYvM1KDJjn9SjTAegom8eWjWWLcx8HkWwYtwvGb1cWAXr",
  "key23": "uuk1hn4GmTGB8rDqupvvNF6eQP5bAcLTxV3favwj3eLAVRjdZbttouQVzVCA9xptAb77F5KQ9VXvrGWM6hZmcM4",
  "key24": "3YJQRn2cxXE1VF9KymBPpVPkArhKzc1FeojGwt28YjUBNmL1inRZ2L4YB2QyWuXoL7Xi2TirxehxCiZeDAirAdFU",
  "key25": "5BqpZJmFLdRJ334zDpKtN6XT5jmUtTok9d4AWgWG6P3b3drs5hbg8nUSWRMztH88Hy7WySxbuTKKHT8FL33U7Hmx",
  "key26": "qNYceFX84LcqxeeNKBEDNvs3hT9gy44yzHk4veYgxEn7hdjnQjpMcD4gaJqZAz4dFbafEjCPJ4aTJJupaKNnsZ8",
  "key27": "8NEyqZtho1QfyqE38B8CnghMEdPKqbXaSmDWbTNj6Bd4UboLwdrffDKfD6WVPnEtpDxcr5TMHJNnbepzbfSC2wP",
  "key28": "2ww9wxCxVManyNsEKAbfhvoV7noKaqWpuhda3BXYAToLuv8gBSr6a2gTCS5wDWxn57Vn6yZV2hSEJz35dhogb3tV",
  "key29": "ytbSXGC1rjS3rPVVknaebB1R1fRQg7i5eAKLkBiFAsZQkf7G8HQMrvj95EGEgno1qdQR2ihyyNtepbT78eAPzHh",
  "key30": "GYU4Mb8CgBs2g9qMyJFPDnjczpAmWtifJSLG2hLwqTcfGf19Sf2GCwE25PMYUX6nNS8HixHiQd5F3v4QcZcHyjJ",
  "key31": "2yHpwQ93nNXsqPB4vJDoeUdNVvGUdLPVQFTjZk19abic9cw8FtUkf9HpX8FJ2MaK7wXMWZsWUEprDZpcaXchktxj",
  "key32": "27Cjq11Pj75EyMmS3rKd7a9DrNa7PN5VPRsT1NqyarTJHN7tN63ZnxxLMuzFZncvAmxDRpDC2jseXt6APAM63BTg"
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
