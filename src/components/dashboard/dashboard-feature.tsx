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
    "5HPp3krNJ1KPu4f1vK4W3qcJnqvSFxJszcaHymg4PHW8qL17goy85xUD8vafNQJHjP7WKDHpRYrmUdDzgiKQyauG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGBgYWAsgzQXLeXybhHEQ8Sz8Zrzf1zsGRFWLABFCCXordK8Je3FhAVcPiNdzLQE92d4AqDDdsKXnEEzQqPX5na",
  "key1": "5WsigppUVhkQoKS97Pu6eFZVo6Wmywaq3SNj5gnsc5BN2SiGeeA5vwUZLWd6ftrDFt4UmZKRPanhzAWbK3BpaYqR",
  "key2": "3Dnk2hF2q9r7Xt78iSkSsxTrdqg8NGt9JWpCXMuCdTk1zYYUGzzNBkqNDxKQpqqVmghPft436TMJR5Bo8uqGdDZJ",
  "key3": "G743mPgqYTFBkkq78J8u5dEdBYbwwG1kHBGgGuM5fkq9um3mHV4rwKRMybvna2BeBUoSPV5G7pasdx9dBNDyf8t",
  "key4": "4Bb7BVYkDjnCAkb6M8xzXfKXNNwjUG3uWy2kd2FbjkdXX3NsSmRMZHcsf4QAgwpXakJLhh22yZmTg4Y47cjbDZ5b",
  "key5": "4XprMCSakNPYRavBsXco1ucp9XZmHpGr5AD5p98wBE3uQXE5kBLBRbz1Mmvy2GwNDSw2FsEjv6MyEWQkWZdZFEQt",
  "key6": "4RNaLyzhfueFdxKrnUWdAdMrohmN7XEBLB7p2xJWRaZBJe1uJmRFBG3pPmaLaASvfS5mzuVbSkB5eaYYEjN6NHVT",
  "key7": "5s1rs25A9PbwizttjTMzPWMRh1MY8dz7PNyuvxydBcryrkiZv3kD9xXcRi7Wm61ZQv4b9n9Kd7QHDFsXXrutpWa4",
  "key8": "4LCoqZ2qTy3TggQS623WMvL5x5avyxb7g64uR5vvL22NAtVnxndF8BYCUSYwzKazsUGo45NF3chTX1sycypzXzWS",
  "key9": "43xAqtaUpcsCb1zjs3Qz1ocmFu5RtYuuwV71J7nyyL8bXmr6ZPHHMWUdj397MrEW8uiwgxxFmYk9LQrX21uLBKJL",
  "key10": "5R7GJiLZMQoxJToWFrWhWT8kisjDKeK169jPzwFydWuyg3ABN4HEURtzeuPM7xV1j3yvETHKTN2cDqQSR75ujvr7",
  "key11": "whLoHBH1DJrA7R78qPqJYSNbHvrP84wFKu1q8r1h3StzchFRVd5ebLh7hkCZRF22qsdsAqZr5JPvrejcFAcVY1a",
  "key12": "4vw6SEaH6m6Lx8CGiWed61avbF3mWVaUP1EV6oBXu73DHNPA2YWmjq8YdBpiWuZjENoZUHYDThAkBWjYmuk7Ri76",
  "key13": "3ASxgVMmUqXXERxtgQEYjwmFMTHEKF9vKfvioLogxRimT8kqhFKAuzfzaANj2p87dMANTrspq6hp8x3yxEpciLYY",
  "key14": "4LUBxqMh5jKV4hmTgpy3j9sjZrimLAWmwZ5Hh4xTmkgCZAGJoJExDnUa2MV74T5xiNcjx4KywN7JM5TA8r9RsY6M",
  "key15": "t6YVkhWxvvMDuy683nNwe6S6vAMAE7X4LrxCtmt3AdN4fiScS16TZXnzkf1ktqeZptnSRWnApHD9oZjmrhLWZRt",
  "key16": "2MNK8SxbxsiCrKL1PxVPqghEzgPbEymoD2u3aqHif4Ci1wH9EeTc83mug9ui1Q6AzEtUKiQn77Zp975bbRwMe7a2",
  "key17": "3sXMQdhUmvYTHRD3KXZVDTjeKqpCQt89n7kDbtujo8riJjEfMB8QnUxCRu9FRe6B8xVpJmJaMgRkJJ6m9YhAsndN",
  "key18": "3srxuchftivbbbfkbt5RBCvfa4hFweC4shbdw5zNH6uoE2C3zxDrTpop4MCRyCngKMyTDhyVPSK8qbK4DVXoGq6V",
  "key19": "4o8ghMFstZ9cT1sKv2YxrUVfrti23okaAu8Q52TWugzHZDmKJm63tYMvLE1Zu6aM6b6sbVv4iTKQ5zVxe55zHQSb",
  "key20": "4fc5eoRLcAfa88ozzd21wC9hbe5kfQbFsbNXNm9PrZKFFf5wS3wnCMEN2wkVmakfArLmaPc74F3dB9oCe76euGHm",
  "key21": "4MkrRMS4M4CnnbUnxYTqgksaHf8xLdUa4tkCZdqYucNGzFptWdJMQAkuqZn5ouxLPpWpi1dNWXvN3BPRNk5t2Psk",
  "key22": "4xL6ZKW8zkbP9tMfbhrFFiCMXUnMJLb4rJAXwAJT3AqUFKESAjtHDLK5Jj2ds32YGq9cofBDGhAaWwSXn5VMhqHa",
  "key23": "2RzVYPmnXLRdZpwmpiv4GhZxN6FRZXt32JtBWJTyKRTGs27dHu67aRr6cUHnfvC3JYKPBaK3o8g3fvjPsaKuUEMj",
  "key24": "24aHf7mS6iYcZMD6u2U3oYpGccDfnbJfk7rQv1P4VuKcGjAgV3DX6xKtkNbigT9mMrTZVANaK4bYsozbGcBgGYrH",
  "key25": "utD5MUqCMDeU61SXCMBPCsEvemF2Q4QifdHMrRh3qd4AjQzyqk1NfJLib8kRcFR2NtPyPxMEw8KTsCokGCTLKnv",
  "key26": "WpDtWanqyxSk9wkoMbaD97vD1ZWVUakdg4wBa1Ju5D4T6brBsvcsAeHNjayBFHKM1jREP1dHFbm2qKqYqdjTTtM",
  "key27": "5NVuzTjtzaiVb2FwXE4PjjKDex2SidCPKBnvGiuexps9HwRFJhgjyTEAkCVT4eff2EyTxXFiAXk4oqMphBpcAtqh",
  "key28": "VM1k9zCb5xDN9kgjbfp3G68MipzxDd65kZUUB1E7YtBb619aBQMouoxf5LS2S2CeuEtjDCHkjMtgDj25CGr4ypc",
  "key29": "4HBu2n6ZX4oSC4K5SXLx8pSkLqpd2nsXAFoQzF36f3TMMH2FuTbjBrEaBENrwGL1P5kj5Bkkwpd6nm344815kTZ"
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
