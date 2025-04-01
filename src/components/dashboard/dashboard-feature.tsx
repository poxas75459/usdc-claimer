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
    "4sBuxtcqJ13SqKovBsCsQCTmkwmbTAHwXR2zs2kpdvY66kHMhRK8JrcRsPqopcdTynPSzHXeRbZemfaXKfdpTHqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42wovNUSfWYZoERVA8ToXd52vYHUxAHowvaE3bToBrJbW12Z7P7yvqtyTTgE9NzLoJCXPjLZbQqGCaqS7QzX2eae",
  "key1": "5VNmevfpDfPs79GGY5DrtbPcqhCmNm1ocCg42uDHndF5ba3RgESs2erasyeUayduN6Zjuuaphq5d579yEdLyjt73",
  "key2": "3WFiPvxo8Nt2GcP76cLajiocLt8AYTVp9uKJ8xQCLS23E8rPwUNpwCxJvmkg4CesGKTWMPkijbgtNi9DpB642PTj",
  "key3": "jXU6x3Bm92vf19sYdVR4b9uT9cgrUZChHrxAQ5ibkeu46Agt5L3p3twb6fnfJpMENyibWCn6xuoUgi6YQxM2qjn",
  "key4": "2GgiXqNi1rpTHGFhfAMhexspwGkuuV6zuxcE2TTJHZpCgBHj7JeSijFov3o6DKUqFuNUx3DGsrmvFuG8vLqMbAcs",
  "key5": "Xzq9K2eJx4umf1oc7LnGeSHBBbKri51jKTxATDpATfUvqUz8JWKQidJZjfo4DcTLNJw3R1x46QMF6KFMRwTc3S1",
  "key6": "3pLr7YXNQR87DkQjrXNmr3e43paLgysGeUX9qayLEKdD7KMXnhyyPX1mGm4b7YDN8fVLnaAMv4ALMy2TB7QH531o",
  "key7": "3c3dyy2b4JLNmc8eon4XnGwfPqkPJLLtBwBVCkgUrEVhSRGesFr5osMDNxC25mYRpzhAvAdW9tChuiYg5A8ojT3f",
  "key8": "3Sbi54y4179sKLfgJNs7FCTFWZGYwomddK4aTiERbS6KuEqVJ12FhBgMv8kWMN2TGdwtUUeqGBHVLAoVPVckQUhP",
  "key9": "2ZmFXeQgXNzuweY3u1nvrVyRNtjtcLYmWiNZaxHs8aNkT3o4UN45aLBEzmtD9Uie4BnfY5qmBspW5GYHhewa1HzG",
  "key10": "2yqz7dN8jcAex8CmCoQb7AXKyVssTyPHrT6bKsWZ58B8Nwd6WAbYuSoWkXrNVGK1JwbqZmXWuhZ1SGuG1qAJvPpx",
  "key11": "4NqiSTnmwCjbjarga8VyB1qP4bA2J2P2w1zrZp41HRbZTBM6hkH2owGRMU4HdFCBU8zbBwrXET4D1WRtuhrfLAaA",
  "key12": "5Mbh8APELsnNRVAKi8Gstjb6zG19NfzGmtGvwNEdARK6VqeWrN5hvPqVA7nVxb9qYS1UAGcT9HyK52HzkAGaDTvE",
  "key13": "5CsMhE36TF9XgC1hFqxXGeZSaXWRg6HemezNLzZue3TNyLd4gpNbLX5Gv8nRwvTdcSJnuxgRddLsjP772WHzRbtQ",
  "key14": "4xjrM7jfU7ms1nE7F1RHsSmz7zpKLRPn4FijaSbM36h1qnHeyUtG8F5AwaaTvKAzF8THcJUi1QhvjCR8GitqLzNQ",
  "key15": "56TzEmwijZuFxnrD1bgjcqyep6zTFB5P5kW9YDrJWd4ducp6nhRZxQaCNDc87C9fw4sUNVGb9gKeEEjHxRb8vQUQ",
  "key16": "5PSvA8PFpMJ124jWTRcgjDB7bx5mzPbTET6RA5wjmuuMtYrJx6WHpYKA2naVfBvB9BPusDb96F8NkaH5gopzJqQE",
  "key17": "2rMeBmWfhwzmWoYVFmSd9eh1woxmWdoR15gjDgJamjxwLdWeKu19EDwox3T3PeEgf1d7vAo3Z9Bp4CgT9P1o7UA9",
  "key18": "2xExMs3UwDNcQFHMHyz3xW9XFLTHuMmGDD6TMVwMWHSpQfG3ccmCeutoV6YtvaGC91kwaAicFtiNBY2ewUNM7AMB",
  "key19": "5EKQRQQ2it7Rz8Fn3pQyLBkWUQZgC9oKbkQRCZRRABjKbqYYNpDnDPy326jmyzT6oAPxfwnuoMFRz2nfUdggc7G6",
  "key20": "L6kqE5Tnz7G82AATAmTRtCdQ8r8cPNSPCuTdRPBq9YDgMoCFi9hYqDumkqKUE924T2FEXT2BB8K5kxNWN6tTyFF",
  "key21": "3G9DqkLzRyxR3aJDdXPj5ECwWPKuXRdmCrYEmVd73p4YzeTCEs7qrpYi6uxZHu1ZgiyjJCqvkJ47m6HfNgAxEByE",
  "key22": "8bZ6dnZiFzH8Q8q9gQ9GPeDnQmdUvd1yka3GSgk3JvAdh1KtGoBG5fvdMiWN7xYUpYBKLMsmzHTz9jNrsrRWjzq",
  "key23": "4y9gmXRpxtmwowuTj4W1p18xYNpDMJhmWWN6qds2gER2h99XC5tvM3dUzcVuFZMvnfpxq3DTqcGBBoeuU2oqWzzD",
  "key24": "4JKEfw654vgevNQTuymsreyTHbUY2oUpyyK1HY2jPKf5r2Hch4tHhDiSTtCRfgPF6KS6QQ6JVidGmz5xNdZhp8r7",
  "key25": "35N2iBwqxfvUqTZsxy6TcETCZktswk2gfdzWE6irtzVqEyom9Lz7fn7SUvLiesdPVhSzFRWjp1y89TzMTkvXL8XS",
  "key26": "4y7Zhd6EcHL1it8BNvft33ncWh6ogP4AVZBRWqMybSbctw3YvBoDpA1uy64cMEeMectRRtyn4Wbg5jKXw15tT5vU",
  "key27": "2czw3L5wVPmKG22SZcekULeEA7HXdHiBUVtouTZYMW5M2VeejzppV3KU5equoj1rf3RveUHYWSb2dVGPF6VUdWb8",
  "key28": "3XU2pfXRU1L1RyDCrdsA11G5WJBVtDJBWmfqjgN6Yn5ZZNpUDdzyFzYHrpQYnjx7xCmACaNW2PUDDUcKs9uFbPrH",
  "key29": "JzDv7qnbXeoeGyr3AxMnbgYocqVCi43FFZE2x2WvKspitpzFNZiEGh9hCbAdb5RpQS6kRQW4P6dWnwBdUZZLGyD",
  "key30": "3KipKWoJDh5AJ7ZzAAqsUo9FaaRbXwPfCvGqRpjrxMnVSKZGL3SSp5kWZfSYDkcV6QX8hkn47EHUJdwi9AGciBWA",
  "key31": "4CDKKGTAivarU3vuYZ9foHT61RRS8xTPGjQboEGNB1LFB466Wq6w4kJ6RpXnptMhoCmy4C6TowmTKhftHtSa9qJH",
  "key32": "gNfQ9EDiBYcbiM7gmZ4kd71EeMufAiwbXF6dXqSZnyTLfP2CfhJ1QcAHkQi5q5XnbNQncCqeFY5SBBNrsSnBvnS"
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
