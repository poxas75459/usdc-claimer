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
    "66eB1GrqKMLkQ2UiQWRt4tnQK4QKshPrVMxQTfh8Ke28Ds6RGELM2qBnbHH9Kmgr3Y7Xi1A2oXW6JL2gyKd2ddq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbNnvyTd4ePoQcHR5gwSospU4jmrKNrPGZkxNKRjA2tZwWKQLALE74KAqHXtKPhDV4ssys5NJmCEf8nf8QEo5jx",
  "key1": "57rLjJqLKDqgnMW8AMdB5LgjnUj6cBNYR5CTqab93TNyNFHouUtc5wqx9ZqhQFEJ4xSY3x87d2qnymbtcPMKW5mg",
  "key2": "4GLS5KPZvADSH39HGifBcNNTjbXD8SkTUaCrmLGVkJHnqFXVugmTGtRgwABrXM4qqgWVDrHsxig2UhHcdUetYsU",
  "key3": "26LnPZuC6HR6hxpiJe53Yi3WfQ5mzUhPwXPjFJVGAT8aa52gxD8aJGBzhbcHxqCVE9wtwQUjkEKUmvb8BwHFzsb4",
  "key4": "3DnhqKTTsxprc2o7vnY8yKz1nHSqKxnk1tPdVdTe6oQXNcN6cfHdxeEp3UFkDyMYNutpGbmFzANoAAy4oapcjEkd",
  "key5": "qJwm2ZTM1Wf9CDUsw2ghxNhzRap4XxY6iTnkCervrQLtCAEBYCXak1xj1JnTRt58DbWpdSezdSyTeDNRm47oGpX",
  "key6": "3H5xtC6289sJ6WWBxnu47Ux3EWKZSZhcntahW4swemxcCAQiG5MhzYBfKkik2ZuBQaGAD4eSDtLxzbwW4D2YDcdX",
  "key7": "4qZFragqso8uKEsBEfepesqYRX3iWT49cmxFgrCobGGVrqYvzEMbFmNbmGDgQNjdPptWB9akZcNz5Htt8h9s7taD",
  "key8": "5YTBDR8ne9aL7YP9Yr28H6TT9w3iVWYuwUTiXCjPFVRMkhbuzSUqEDrEHCpkLcQ3HND1cG9GYc9pYppe5wbwMT9K",
  "key9": "9X9fjFEzbPiaxuzi8kqHzmmEAAALPNynV81MhGA94o77o2KaxV6xYW7oqjiCA5DyNVS64LTJ2WmxZ2JJwWSNQJD",
  "key10": "mgoXDW9cXkQRzz84QpKkjHkb6EQe8Q1bPeVEs62Xq8aetbdvxuFuxVTaDnSEP1crSuKHuJbUXH5L88M2m9regqW",
  "key11": "3QVTZXgWHEqVamDVYtGv7ZwaLGQ3LgBPkm535UrZxMkihqihJbruzc35EaTrKRbGxzvJA26QicuPK1Hxswy6FKWX",
  "key12": "kF5hr831Lc7cqUrjZArqhRxiCDd8smnJDS96idCBVtbHFHHZ6j7inCign9dkvBtjJErPH4oquuJ4vkBv8z5oeZi",
  "key13": "2yYSKWaNUkcsVRzCJGdgXtzXN2gXTrtF3vv3N962vvm5i7L6xet57kbEYUMTTC2fhUVPrHJkXmqFd2iggvC7gnE",
  "key14": "upKGQBS4Q2TZ85qtRWS3gDXGFRxpNzrXQvdRiULwQZ9FCRZHHNrz8N2KQFhzLu45QCrnDyK4xUPvvFm7FS44qFh",
  "key15": "4UynjD2qXyYxQAemwqAYnBgBWYNByXAZeKqa61PhjZAnqXcCfiMaomTj8PEQTNiHnhQvcJKtJqtPLYxZYN6bJd2V",
  "key16": "5rHCah7dYJZr7JmLjxJQUrV3oTPMJJXHKiDwQx6EuKcbUqSwESwkSqgg3KNajxSXrtD1wgyxXgLjSKifnz2tTEB",
  "key17": "2rQdCwHqjVLPSkjHVeTUBBwzg7PVkrMdDwDTDRNupHkNyGeQNw4b2CVWYR7XiDREbaJ6sCqBzTf1MU4reoSSuiND",
  "key18": "kGY3P55cevjfwTcLgg9RHodeWGP6moAU8Vh8kaonhZy3cXAG4bJbZhWdpr2f2WYsfsvKAQNZ6P3MHpNKMeWXE9a",
  "key19": "VEfoCj4ziHGjFY9qfiNLGuTufTM3YwWyJH2EHYa4bv8mCzwAxKGUeiosPZ83X1jLoizpCPkB4n2aA9WUtxfJWQX",
  "key20": "dLHLpLdrjRJiZPzKA1n7oCRNRHJ6jyj73YwDnVZh6kbhRTFAcYq5kZGkKfVUFHXVZVL9Ja73xwdxd2VRzixgwRz",
  "key21": "4mnA3oG9UeQn16FVyRGqJhRCYjNASV8j9i4uM2uUNo2CMxKN76kB6rgvXf4AFR1Sf6GFmwABBaqhehxz6y3ESUF6",
  "key22": "2nrgj5z5mE11orrHcCk7Kes9tFYU3PQuyCSKqSBoeQvC8goHAQoKwyVxi9Qyu1mEKuxGrQRjdeXwp2WaSDXaUAUU",
  "key23": "5pCgXSUkVCZFzz63oynN33vepS6N1NPYpxH6YsVGWbpcAdp3A59fFvU3squ7w7JTP3e3e8cBUDGXvi8PKFUgVHJF",
  "key24": "3Ugts3wnGcktVGr8RZL1CwkcWpMAbTmRsHk87nnV7hTx5q1zLQk84q8SwopD48AAXANvUej8NreEGNv8o7yNnP7v",
  "key25": "3vDJrvxZmUQigWw4VXJ8LebCnAZK7eaCCbrQo7T2JwNRCHNZbyu3P2fsi9tb7vSDTro2GwRCeMRMxKrWiCLTx8aL"
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
