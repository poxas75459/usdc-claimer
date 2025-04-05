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
    "57tFayuHYUcBeyunTryeY59qfKm6eqty8T2HFNLyw2ggF88kKaG4eiuAN4vARdpx9RrbgxbFMQNbaCy3iEvk4iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptcVS24tJuydQGCCdtk1hGtEaZyw7YgGBQFShXiKU7xmKwt8H1Cvq6ggtbwE7xAaWGWh5B7ZXoWtrt7tKajbfze",
  "key1": "2ahG55kTh4vK4JmWMaUALHGBDP9RJ5XbA98tkr1wsvsndSu7u6qoi92i6DXsaZsh4DkBjdhU5PujV1rv6azZm1vn",
  "key2": "5NTyibiSyo5Z4H1Z3Zef5AJ9yGcAR5AHi29X6hwxzGRZocNvQm2jYf3uGajikSx5zsMetoLreGPuv3yAsuoZzaNV",
  "key3": "5VD2SFC2qvvDmJYaC57dFKT2Fqeog8XRHkRBgPdN9ZkRtD7LvnerutAbGXP1AkeygwTnx8EUFP9JrBJvYLoUz14q",
  "key4": "4RvdQMLirxUR6r2C6dyGrrdztjrzvpdc5wo6XgyDu987GuRynvZg81dbjqfoGs3ayHgQ4wP4on2Kdf2sC1J58r41",
  "key5": "513tNv5eg6pkgcYNwGtqd5rawAUdJUYFGqLt5LCj4zwnzUZHjvWezmLoNzx37bVaYsqKKriCj8V4MN7pZvPzqaUk",
  "key6": "2R9iionHQkTz2DdcZwc3gfWTJyDunn8PHxFUbsZJNDQq9Gfh6k6ynmqX8r4n2cGmFGPZeSdNdvXw8Etvcaj1xzP6",
  "key7": "4EVxtBiqHjN1vrf1M9AAjeEbayWa4pSDKSEWGxB5qZ7A7q2EsJPtoXoR1CqWjUPrWxUiC2dMKdQ6wNpbdRM8QPnK",
  "key8": "4nNXLx6j8EdSzG4oidPR3Vtjw4DNc4y3nS9gu7kyUeg4sNJuLHVkNnPyaWVPC2PaHqsMp6eUoLxWiHj7GHArJoXq",
  "key9": "5qKB7gCtB4S3iUFyybPw3TB4VQ1wKgEmgbMmaVkXHqKbZDcLjeenSde9cWKhqMc2KXG67XaBT9AzeUvq4B1b6msM",
  "key10": "5K8mnAcqw9Y9s3XpQdXrz28hKaZUDyzrcgmnjYUqZnBonaDPUhteA2nCdcmZSsyPU6GgU4jVZGW6Vnwqv9k88Rjh",
  "key11": "55VLVeXe1s9oGeT5o5mLXJt6JEZ2XDMVQ31hh85xhXucDNzj1hj33Xn8PjrX7CGhZroLEqhW1PkzkBXZUKccKQge",
  "key12": "4haQwNNEzRPUn8euzRSZS5LoY9op7SPZP3hhaQz78GP9XhXk7yS8SZ6V2Mi3GzZZviXNDPZLs3H71XVNbmAyJtJo",
  "key13": "epsafkHN8yVfh5VMyVeFpbvi6maGc1S3UAw9b4KD52PQmMbMFpMjd4zdkWb6xR9TSTp5xdXaxnKfBKXXDdnGzgT",
  "key14": "5KWPdmJrgyD2kovwMPYXfZZT65BBA94tdiNrvDNWVxPSWK9pCYQWAAzDCDtiJfS3um6dTjLUojLdcLsbqUpp2m9J",
  "key15": "bvxbaqKZxsmLA5oXuGgyHX4Nw9g9dKDCNHdST39DcU55LbvVcpCFc7U4kcnHArBiDkYehp7iTMcV7cXtX6gQAfD",
  "key16": "4Jj6dMmCkCwcSUaaeSUN1K8tsNVp8LAh6uT3MPAjtLHMJZ6jBsXiHsp61NQZodmQy9prNinitV7xa1SwgHd6BD2t",
  "key17": "2CZiVXdFee9t6pP1TSkuaUsT9ZjDxSQsSPRSmuiMe7H2nLZWQ94s7Wz8nNErDZXCxMxZdbtDFAFZ5SQLryE4ApkS",
  "key18": "2GiETu5ND1AoodcCvEng6j31BhNWAtn516vFEszAHrBexgCufD7sDiH2dRp3tATeapnUixssWrMaS2WrF438sbpZ",
  "key19": "28CGR8yTyJeJsNujabSmVfe25FPBRo5E1EaxDrBbcbnjQq4Q8a1bAMVkMyuvoc1nToDf3gZQxGjnS58vGtRTCGz9",
  "key20": "d4TfzyWsQWwek1yG3fxex3u6TtRRw9pzPTVskpBmfA6Qos5w6VJ4DwZY8irPjYgNiKmC4w6uaT7VCXKPSUfAGUc",
  "key21": "5QbQxt25pEfec7waXDpU9GegzaYP4WzncWAnX2rrUFKcU1Qe3xgdXeYSn4r4x11de3pTkqZCjqVxPLWLVyoZz7Ke",
  "key22": "3tMvVws6NeqRZXRtQXYMjxUhdQKsHkk8AnJzW6ZDi3F2kFv7gZDPDC9iDWNB8zvYJ32M6hdyVeL3LQwu4JKPGHk7",
  "key23": "4EbEiEXSy4UPhaif8pp76V4XTEojPJF8NRpHuoj916cNWuNPwC594fvLKxG47fwnswg1v9wLotAc5ibj1Fhk4dwD",
  "key24": "4FRwuMC819Jyo5tiD3QgPWq58KznorZVic5PApksgB6Ms3QU5yna6BrkedfM4bo2jNkSiYXThkD677V91UUauTfQ",
  "key25": "3X2Caeb3FrRTQHLDx8FDRrjCwAL5NDT6Yix4Csi5mWr6ruGMLPvCvNx9hd9MayNZVwk3WTN9GMQFS7U8Krvhksf9"
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
